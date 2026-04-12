import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Globe,
  BarChart3,
  Mail,
  Cookie,
  Ban,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Do I Need a Privacy Policy for a Free Website? Yes - Here's Why (2026) | ultrafastutilities",
  description:
    "Think your free website doesn't need a privacy policy? If you use Google Analytics, contact forms, or any third-party tool, the law says otherwise. Find out exactly when a free website needs one.",
  keywords:
    "privacy policy for free website, do free websites need privacy policy, privacy policy for personal website, free website privacy requirements, wix free privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-a-free-website",
  },
  openGraph: {
    title: "Do I Need a Privacy Policy for a Free Website? Yes - Here's Why (2026) | ultrafastutilities",
    description: "Think your free website doesn't need a privacy policy? If you use Google Analytics, contact forms, or any third-party tool, the law says otherwise.",
    url: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-a-free-website",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Free Website | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Do I Need a Privacy Policy for a Free Website? Yes - Here's Why (2026) | ultrafastutilities",
    description: "Think your free website doesn't need a privacy policy? If you use Google Analytics, contact forms, or any third-party tool, the law says otherwise.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "quick-answer", title: "Quick Answer" },
  { id: "when-required", title: "When It's Required" },
  { id: "free-platforms", title: "Free Platform Rules" },
  { id: "what-counts", title: "What Counts as Data Collection" },
  { id: "myths", title: "5 Common Myths" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function DoINeedPrivacyPolicyFreeWebsitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Do I Need a Privacy Policy for a Free Website? Yes - Here's Why (2026)",
            description: "Think your free website doesn't need a privacy policy? If you use Google Analytics, contact forms, or any third-party tool, the law says otherwise.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2026-01-01",
            dateModified: "2026-04-11",
            publisher: { "@type": "Organization", name: "ultrafastutilities", url: "https://ultrafastutilities.com" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://ultrafastutilities.com" },
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Free Website", item: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-a-free-website" },
            ],
          }),
        }}
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
              <span className="text-slate-600">Privacy Policy for Free Website</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Globe className="w-3.5 h-3.5" />
                Free Website Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Do I Need a Privacy Policy for a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Free Website?
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Short answer: almost certainly yes. If your free website uses
                analytics, contact forms, or any third-party embed, you are
                collecting personal data -- and privacy laws apply to you.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For hobby bloggers, personal sites, and free-tier platforms.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/is-a-privacy-policy-legally-required"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Is It Legally Required?
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/generate"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                Generate Free Policy
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </header>

        {/* Content Area with Sidebar */}
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

            <article className="max-w-[720px]">
              {/* Author + Trust Signals */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 pb-8 border-b border-slate-200/60 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-xs flex-shrink-0">AK</div>
                  <span>Written by{" "}<span className="font-semibold text-slate-800">Anupam Kumar</span></span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>8 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>

              {/* Section 1: Quick Answer */}
              <section id="quick-answer" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">1</span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Quick Answer: Yes, You Almost Certainly Need One</h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    A "free website" does not mean "no data collection." If your
                    site is on WordPress.com, Wix, Blogger, Carrd, or any other
                    platform, the platform itself sets cookies and tracks visitors.
                    That alone triggers privacy policy requirements under{" "}
                    <Link href="/gdpr-privacy-policy-template" className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5">
                      GDPR <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and{" "}
                    <Link href="/ccpa-privacy-policy-example" className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5">
                      CCPA <ArrowUpRight className="w-3 h-3" />
                    </Link>.
                  </p>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">The real question is not "is my site free?"</strong>{" "}
                        It is "does my site collect any personal data?" If it uses
                        Google Analytics, has a contact form, embeds a YouTube video,
                        or displays ads -- the answer is yes.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: When Required */}
              <section id="when-required" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">2</span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">When a Free Website Legally Needs a Privacy Policy</h2>
                  </div>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Privacy laws do not distinguish between free and paid websites.
                    They apply whenever personal data is collected from visitors.
                    Here are the triggers:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80">
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">Trigger</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">Example</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">Law That Requires It</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Any analytics tool", "Google Analytics, Plausible, Fathom", "GDPR, CalOPPA"],
                          ["Contact form", "Name + email submission", "GDPR, CCPA, PIPEDA"],
                          ["Email signup", "Newsletter opt-in, lead magnet", "GDPR, CAN-SPAM, CASL"],
                          ["Cookies (any type)", "Session cookies, ad cookies, analytics cookies", "GDPR (ePrivacy), CalOPPA"],
                          ["Third-party embeds", "YouTube, Google Maps, social widgets", "GDPR (third-party data sharing)"],
                          ["Advertising", "Google AdSense, affiliate links", "GDPR, CCPA, FTC"],
                          ["Comment system", "WordPress comments, Disqus", "GDPR, CalOPPA"],
                          ["EU or UK visitors", "Any website accessible from Europe", "GDPR applies regardless of where you are based"],
                        ].map(([trigger, example, law], i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                            <td className="px-4 py-3 font-medium text-slate-800 border-b border-slate-100">{trigger}</td>
                            <td className="px-4 py-3 text-slate-600 border-b border-slate-100">{example}</td>
                            <td className="px-4 py-3 text-slate-600 border-b border-slate-100">{law}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Free Platform Rules */}
              <section id="free-platforms" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">3</span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">What Free Platforms Require</h2>
                    <p className="mt-2 text-base text-slate-500">Each free website platform has its own privacy policy rules.</p>
                  </div>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {[
                    {
                      platform: "WordPress.com (Free)",
                      icon: Globe,
                      color: "bg-blue-50",
                      iconColor: "text-blue-600",
                      items: [
                        "WordPress.com sets its own cookies (Jetpack analytics, WordPress stats)",
                        "Free plan shows WordPress.com ads to visitors -- these set tracking cookies",
                        "You need a privacy policy page even on a free blog",
                        "WordPress.com provides a built-in privacy policy page template",
                      ],
                    },
                    {
                      platform: "Wix (Free Plan)",
                      icon: Globe,
                      color: "bg-violet-50",
                      iconColor: "text-violet-600",
                      items: [
                        "Wix collects analytics on all free sites (page views, visitor data)",
                        "Free Wix sites display Wix branding ads that may set cookies",
                        "Wix's terms require you to have your own privacy policy if you collect data",
                        "Adding a Wix form or Wix Stores triggers additional data collection",
                      ],
                    },
                    {
                      platform: "Blogger / Blogspot (Google)",
                      icon: FileText,
                      color: "bg-orange-50",
                      iconColor: "text-orange-600",
                      items: [
                        "Google automatically adds cookies and analytics to all Blogger sites",
                        "Blogger displays a cookie consent notice for EU visitors automatically",
                        "If you enable AdSense on your blog, Google's advertising policies require a privacy policy",
                        "Google's terms of service recommend all Blogger users have a privacy policy",
                      ],
                    },
                    {
                      platform: "Carrd (Free)",
                      icon: FileText,
                      color: "bg-emerald-50",
                      iconColor: "text-emerald-600",
                      items: [
                        "Carrd free sites are minimal but still set session cookies",
                        "Adding a contact form or email signup collects personal data",
                        "Carrd Pro allows embedding analytics -- these require disclosure",
                        "Link your privacy policy from your Carrd page footer",
                      ],
                    },
                  ].map((platform) => (
                    <div key={platform.platform} className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-lg ${platform.color} flex items-center justify-center`}>
                          <platform.icon className={`w-4 h-4 ${platform.iconColor}`} />
                        </div>
                        <h3 className="font-semibold text-slate-900">{platform.platform}</h3>
                      </div>
                      <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                        {platform.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: What Counts as Data Collection */}
              <section id="what-counts" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">4</span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">What Counts as "Collecting Personal Data"</h2>
                  </div>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Many free website owners think they are not collecting data
                    because they are not asking for it directly. But under GDPR,
                    personal data includes anything that can identify a person --
                    including IP addresses and cookie IDs.
                  </p>
                  <div className="space-y-3">
                    {[
                      { icon: BarChart3, label: "Analytics tracking", detail: "Google Analytics records IP addresses, location, device type, pages visited, and session duration. This is personal data under GDPR." },
                      { icon: Cookie, label: "Cookies", detail: "Session cookies, preference cookies, and third-party cookies are all personal data identifiers. Even essential cookies require disclosure." },
                      { icon: Mail, label: "Contact forms", detail: "Any form that collects name, email, or message content is collecting personal data that must be disclosed in your policy." },
                      { icon: Globe, label: "Third-party embeds", detail: "Embedding a YouTube video, Google Map, or social media widget allows those third parties to set cookies and collect visitor data." },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200/80 hover:border-blue-200 hover:shadow-sm transition-all">
                        <item.icon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">{item.label}</p>
                          <p className="text-sm text-slate-600 mt-1">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Myths */}
              <section id="myths" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">5</span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">5 Common Myths About Free Websites and Privacy</h2>
                  </div>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px] space-y-4">
                  {[
                    { myth: "My site is free, so privacy laws don't apply to me", truth: "Privacy laws apply to any entity that collects personal data, regardless of whether the website is free, paid, personal, or commercial." },
                    { myth: "I'm not a business, so I don't need a privacy policy", truth: "GDPR does not distinguish between businesses and individuals. If you process personal data of others (even as a hobby blogger), you are a data controller." },
                    { myth: "My platform handles privacy for me", truth: "Wix, WordPress, and Blogger have their own privacy policies covering their processing. You need a separate policy covering your own data practices (forms, analytics, third-party tools)." },
                    { myth: "I only have 10 visitors a day, so it doesn't matter", truth: "There is no minimum visitor threshold in GDPR, CCPA, or CalOPPA. Even one EU visitor triggers GDPR obligations." },
                    { myth: "I can just copy someone else's privacy policy", truth: "A privacy policy must accurately describe your specific data practices. Copying another site's policy is likely inaccurate and potentially misleading, which could increase your legal exposure." },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl border border-slate-200/80 p-5">
                      <div className="flex items-start gap-3 mb-2">
                        <Ban className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="font-semibold text-red-800 text-sm">Myth: "{item.myth}"</p>
                      </div>
                      <div className="flex items-start gap-3 ml-0 sm:ml-8">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-700">{item.truth}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: Generate CTA */}
              <section id="generate" className="scroll-mt-24">
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white text-center">
                  <ShieldCheck className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-3">Generate Your Free Website Privacy Policy</h2>
                  <p className="text-slate-300 max-w-lg mx-auto mb-6">
                    Get a customized privacy policy for your free website that
                    covers analytics, contact forms, cookies, and third-party
                    embeds -- in under 2 minutes.
                  </p>
                  <Link href="/generate">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
                      Generate My Privacy Policy Free
                    </Button>
                  </Link>
                  <p className="text-slate-400 text-xs mt-3">Works for WordPress, Wix, Blogger, Carrd, and all platforms</p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: Resources */}
              <section id="resources" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <FileText className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Related Resources</h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px] grid sm:grid-cols-2 gap-3">
                  {[
                    { title: "Is a Privacy Policy Legally Required?", desc: "When the law mandates a privacy policy", href: "/is-a-privacy-policy-legally-required" },
                    { title: "Privacy Policy for Wix", desc: "Wix-specific privacy compliance guide", href: "/privacy-policy-for-wix" },
                    { title: "Privacy Policy for WordPress", desc: "WordPress privacy requirements", href: "/privacy-policy-for-wordpress" },
                    { title: "Privacy Policy for Carrd", desc: "Carrd site privacy guide", href: "/privacy-policy-for-carrd" },
                    { title: "How to Create a Privacy Policy for Free", desc: "Free methods to generate a policy", href: "/how-to-create-a-privacy-policy-for-free" },
                    { title: "Can I Copy Someone Else's Privacy Policy?", desc: "Why copying policies is risky", href: "/can-i-copy-someone-elses-privacy-policy" },
                    { title: "Privacy Policy for a Blog", desc: "Blog-specific privacy requirements", href: "/do-i-need-a-privacy-policy-for-a-blog" },
                    { title: "Cookie Policy for Websites", desc: "Cookie disclosure requirements", href: "/cookie-policy-for-websites" },
                  ].map((resource) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className="flex items-start gap-3 p-4 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                    >
                      <ArrowUpRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <div>
                        <p className="font-medium text-slate-800 group-hover:text-blue-700">{resource.title}</p>
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
