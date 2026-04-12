import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  HelpCircle,
  Globe,
  Clock,
  BookOpen,
  Ban,
  Users,
  Scale,
  Info,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Pinterest: Business & Creator Guide (2026) | ultrafastutilities",
  description:
    "Create a privacy policy for Pinterest business. Covers Pinterest Tag, Shopping catalogs, promoted pins, creator analytics, API access, and affiliate link disclosure requirements.",
  keywords:
    "privacy policy for pinterest, pinterest privacy policy, pinterest business privacy policy, pinterest tag privacy policy, pinterest shop privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-pinterest",
  },
  openGraph: {
    title:
      "Privacy Policy for Pinterest: Business & Creator Guide (2026) | ultrafastutilities",
    description:
      "Create a privacy policy for Pinterest business. Covers Pinterest Tag, Shopping catalogs, promoted pins, creator analytics, API access, and affiliate link disclosure requirements.",
    url: "https://ultrafastutilities.com/privacy-policy-for-pinterest",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Pinterest Business & Creators | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Pinterest: Business & Creator Guide (2026)",
    description:
      "Create a privacy policy for Pinterest business. Covers Pinterest Tag, Shopping catalogs, promoted pins, creator analytics, and API access.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do Pinterest business accounts need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you use Pinterest Tag for conversion tracking, run promoted pins, upload shopping catalogs, access Pinterest API, use creator analytics, or include affiliate links in your pins, you are collecting or facilitating the collection of personal data. Pinterest's advertising policies and privacy laws require you to have a privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pinterest require a privacy policy for advertisers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Pinterest's Advertising Guidelines require advertisers to comply with all applicable privacy laws and to provide users with clear notice about data collection. When you install the Pinterest Tag on your website or upload customer lists for audience targeting, you must disclose these practices in a published privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "What data does the Pinterest Tag collect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Pinterest Tag is a JavaScript snippet installed on your website that tracks visitor actions including page visits, product views, add-to-cart events, purchases, sign-ups, and searches. It collects IP addresses, browser data, device identifiers, and cookies. This data is sent to Pinterest for ad optimization and conversion tracking.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy for Pinterest Shopping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Pinterest Shopping requires you to upload product catalogs that sync with your e-commerce platform. When users click through product pins to your website, you collect browsing data, purchase information, and customer details. Your privacy policy must disclose how you handle this commerce data and that Pinterest receives conversion signals.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pinterest's privacy policy cover my business account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Pinterest's privacy policy covers data that Pinterest collects through its platform. It does not cover data you collect through the Pinterest Tag on your website, customer lists you upload for targeting, email addresses collected from pin click-throughs, or data processed by your e-commerce platform. You need your own privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Do Pinterest creators need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if they use affiliate links, direct followers to external websites, collect email subscribers, access Pinterest Analytics for audience insights, or sell products through linked shops. Creators who monetize their Pinterest presence are engaged in commercial data collection that requires a privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I link my Pinterest privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Link to it from your Pinterest business profile website field, your claimed website footer, your e-commerce checkout pages, your email newsletter footer, and any landing pages you drive Pinterest traffic to. If you run promoted pins, ensure your privacy policy URL is accessible from your advertiser account.",
      },
    },
  ],
};

const tocSections = [
  { id: "when-you-need-one", title: "When You Need One" },
  { id: "data-sources", title: "Data Sources" },
  { id: "pinterest-tag", title: "Pinterest Tag Tracking" },
  { id: "shopping-catalogs", title: "Shopping Catalogs" },
  { id: "promoted-pins", title: "Promoted Pins & Ad Data" },
  { id: "creator-tools", title: "Creator Tools & Analytics" },
  { id: "api-requirements", title: "Pinterest API" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to-create", title: "How to Create One" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForPinterestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Pinterest: What Business Accounts and Creators Must Disclose",
            description:
              "Create a privacy policy for Pinterest business. Covers Pinterest Tag, Shopping catalogs, promoted pins, creator analytics, API access, and affiliate link disclosure requirements.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-04-11",
            dateModified: "2026-04-11",
            publisher: {
              "@type": "Organization",
              name: "ultrafastutilities",
              url: "https://ultrafastutilities.com",
            },
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
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://ultrafastutilities.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Privacy Policy for Pinterest",
                item: "https://ultrafastutilities.com/privacy-policy-for-pinterest",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ReadingProgress />
      <main className="min-h-screen">
        {/* Hero Section */}
        <header className="relative overflow-hidden border-b border-slate-200/60">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-blue-50/60 blur-3xl" />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600">
                Privacy Policy for Pinterest
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Globe className="w-3.5 h-3.5" />
                Social Media Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Pinterest
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                If your Pinterest business account uses the Pinterest Tag,
                uploads shopping catalogs, runs promoted pins, accesses
                creator analytics, or includes affiliate links, you are
                collecting personal data and need a privacy policy. Here is
                what Pinterest requires and how to stay compliant.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Pinterest business accounts, creators, and shop owners.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated <time dateTime="2026-04-11">April 11, 2026</time> &middot; Reviewed for GDPR, CCPA &amp; CalOPPA compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-ecommerce"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                E-Commerce Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-etsy"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Users className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Etsy Seller Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/generate"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                Generate My Policy
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </header>

        {/* Content Area with Sidebar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
            {/* Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents sections={tocSections} />
                <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100/80">
                  <p className="text-sm font-semibold text-slate-800">
                    Need a Pinterest privacy policy?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Generate in under 60 seconds
                  </p>
                  <Link href="/generate">
                    <Button
                      size="sm"
                      className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg"
                    >
                      Generate Policy
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="max-w-[720px]">
              {/* Author + Trust Signals */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 pb-8 border-b border-slate-200/60 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-xs flex-shrink-0">
                    AK
                  </div>
                  <span>
                    Written by{" "}
                    <span className="font-semibold text-slate-800">
                      Anupam Kumar
                    </span>
                  </span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>12 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>Yes, Pinterest business accounts need a privacy policy.</strong>{" "}
                  If you install the Pinterest Tag on your website, upload
                  product catalogs for Shopping, run promoted pins, use
                  creator analytics, access the Pinterest API, or include
                  affiliate links in your pins, you are collecting or
                  facilitating the collection of personal data.
                  Pinterest&apos;s advertising policies and privacy
                  regulations require you to disclose these practices in a
                  published privacy policy.
                </p>
              </div>

              {/* Section 1: When Pinterest Users Need a Privacy Policy */}
              <section id="when-you-need-one" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      When Pinterest Users Need a Privacy Policy
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    Pinterest has its own privacy policy that covers data
                    collected through the Pinterest platform itself. However,
                    Pinterest&apos;s policy does not cover data that you, as
                    a business or creator, collect from your audience through
                    your own tools and activities. If you engage in any of
                    the following, you need your own privacy policy:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Installing the Pinterest Tag on your website",
                        desc: "The Pinterest Tag is a conversion tracking pixel that collects visitor data from your website and sends it to Pinterest. It tracks page visits, product views, add-to-cart events, purchases, sign-ups, and searches. Because you choose to install this tag and benefit from the data it collects, you are responsible for disclosing its presence and data collection practices.",
                      },
                      {
                        title: "Uploading product catalogs for Pinterest Shopping",
                        desc: "When you connect your e-commerce platform to Pinterest and upload product catalogs, you create shoppable pins that link directly to your store. Click-throughs from these pins generate customer browsing data, purchase information, and analytics. Your privacy policy must cover the data collected when Pinterest users arrive at your store.",
                      },
                      {
                        title: "Running promoted pins or ad campaigns",
                        desc: "Pinterest's Advertising Guidelines require advertisers to comply with applicable privacy laws. When you run promoted pins, Pinterest collects engagement data, click-through data, and conversion data on your behalf. If you use audience targeting features like customer list matching or actalike audiences, additional data sharing is involved.",
                      },
                      {
                        title: "Using creator analytics and audience insights",
                        desc: "Pinterest Analytics provides business accounts with audience demographics, engagement metrics, and content performance data. While Pinterest provides this data in aggregated form, accessing and using these insights for business decisions constitutes data processing that should be acknowledged in your privacy policy.",
                      },
                      {
                        title: "Accessing the Pinterest API",
                        desc: "If you build applications or use third-party tools that access the Pinterest API, you are processing Pinterest user data outside the platform. Pinterest's Developer Guidelines require API users to have a privacy policy that discloses how they handle data obtained through the API, including pin data, user profiles, and board information.",
                      },
                      {
                        title: "Including affiliate links in pins",
                        desc: "Affiliate links set tracking cookies on the devices of users who click them. These cookies track browsing behaviour across the merchant's website to attribute sales to your account. Under GDPR, setting tracking cookies requires consent and disclosure. Your privacy policy must explain that clicking your pins may result in affiliate tracking.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-slate-900 text-sm">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Warning Box */}
                <div className="mt-6 pl-0 sm:pl-[52px] rounded-xl border border-amber-200 bg-amber-50/60 p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-amber-900 text-sm">
                        Without a privacy policy, you risk
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-amber-800">
                        Pinterest ad account suspension, rejection of
                        promoted pin campaigns, removal from the Verified
                        Merchant Program, GDPR fines up to &euro;20
                        million, CCPA penalties of $7,500 per violation,
                        and loss of customer trust. Pinterest reviews
                        advertiser compliance and can restrict your account
                        without warning. Learn the full breakdown of{" "}
                        <Link
                          href="/what-happens-without-a-privacy-policy"
                          className="font-medium text-amber-900 underline underline-offset-2 hover:text-amber-700 transition-colors"
                        >
                          what happens without a privacy policy
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini FAQ */}
                <div className="mt-6 pl-0 sm:pl-[52px] space-y-3">
                  {[
                    {
                      q: "Does this apply to personal Pinterest accounts?",
                      a: "Personal accounts used purely for saving and organizing pins for personal inspiration generally do not need their own privacy policy. However, the moment you switch to a business account, install the Pinterest Tag, upload product catalogs, run promoted pins, or use affiliate links, the requirement applies.",
                    },
                    {
                      q: "What about Pinterest accounts for bloggers?",
                      a: "Bloggers who use Pinterest to drive traffic to their websites are engaged in data collection the moment a visitor arrives at a site with analytics, cookies, or ad networks. If you monetize your blog through affiliate links pinned on Pinterest, ad revenue, or email list building, you need a privacy policy that covers the full data chain from pin click to website interaction.",
                    },
                  ].map((item) => (
                    <div
                      key={item.q}
                      className="rounded-lg bg-slate-50 border border-slate-200/70 px-4 py-3"
                    >
                      <p className="text-sm font-semibold text-slate-900">
                        {item.q}
                      </p>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 2: Data Sources */}
              <section id="data-sources" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Data Sources on Pinterest Business Accounts
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Every data type your Pinterest presence might collect or facilitate.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  <p className="text-base leading-7 text-slate-700">
                    The data your Pinterest business account handles depends
                    on which features and external tools you use. Here is a
                    comprehensive breakdown by source:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Data Source
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Data Collected
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Who Controls It
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {[
                          [
                            "Pinterest Tag",
                            "Page visits, product views, add-to-cart events, purchases, sign-ups, search queries, IP addresses, browser data, device IDs, cookies",
                            "Joint controller (you and Pinterest)",
                          ],
                          [
                            "Product Catalogs",
                            "Product interaction data, click-throughs, saves, purchase attribution, catalog sync metadata",
                            "You (controller), e-commerce platform (processor)",
                          ],
                          [
                            "Promoted Pins",
                            "Impressions, clicks, engagement data, conversion events, audience targeting matches, cost-per-action data",
                            "Joint controller (you and Pinterest)",
                          ],
                          [
                            "Creator Analytics",
                            "Audience demographics, engagement metrics, content performance, follower geography, device breakdown",
                            "Pinterest (controller, aggregated data)",
                          ],
                          [
                            "API Access",
                            "Pin data, board data, user profile information, engagement metrics, image data",
                            "You (controller for processed data), Pinterest (platform)",
                          ],
                          [
                            "Shopping",
                            "Customer names, shipping addresses, email addresses, payment details, order history, browsing behaviour on your store",
                            "You (controller), payment processor (processor)",
                          ],
                          [
                            "Idea Pins",
                            "View counts, engagement data, saves, comments, audience reach, content interaction patterns",
                            "Pinterest (controller), you (recipient of analytics)",
                          ],
                          [
                            "Affiliate Links",
                            "Click data, tracking cookies, browsing behaviour on merchant sites, purchase attribution, commission tracking",
                            "You and affiliate network (joint controllers)",
                          ],
                        ].map(([source, data, controller]) => (
                          <tr key={source} className="hover:bg-slate-50/50">
                            <td className="px-5 py-3 font-medium text-slate-800">
                              {source}
                            </td>
                            <td className="px-5 py-3 text-slate-600">{data}</td>
                            <td className="px-5 py-3 text-slate-600">{controller}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    The critical distinction: Pinterest Analytics provides
                    aggregated demographic data that Pinterest controls. But
                    the Pinterest Tag, product catalog click-throughs,
                    promoted pin conversions, API data, and affiliate link
                    tracking involve personal data that you collect, control,
                    or jointly control with Pinterest. These are what your
                    privacy policy must cover.
                  </p>

                  {/* Did you know box 1 */}
                  <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-900 mb-1">
                          Did you know?
                        </p>
                        <p className="text-sm text-slate-700">
                          The Pinterest Tag fires on every page of your
                          website where it is installed, not just product
                          pages. If you install it site-wide (as Pinterest
                          recommends for maximum conversion data), it tracks
                          every visitor across every page, including blog
                          posts, about pages, and contact pages. Under GDPR,
                          this broad tracking requires explicit cookie
                          consent before the tag fires, and your privacy
                          policy must disclose the full scope of what the tag
                          collects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 3: Pinterest Tag and Conversion Tracking */}
              <section id="pinterest-tag" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Pinterest Tag and Conversion Tracking
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      The most significant data collection tool in the Pinterest ecosystem.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    The Pinterest Tag is a JavaScript snippet you install on
                    your website to track conversions and build audiences for
                    promoted pin campaigns. It is the Pinterest equivalent of
                    Meta Pixel or Google Ads conversion tracking. Because it
                    collects personal data from your website visitors, it
                    carries significant privacy obligations.
                  </p>

                  {[
                    {
                      title: "Base code tracking",
                      desc: "The base Pinterest Tag code fires on every page where it is installed and collects page URL, referring URL, browser type, device type, screen resolution, IP address, and Pinterest cookie data. This happens automatically for every visitor, regardless of whether they clicked a promoted pin. Your privacy policy must disclose this passive data collection.",
                    },
                    {
                      title: "Event tracking",
                      desc: "Pinterest Tag supports nine standard events: PageVisit, ViewCategory, Search, AddToCart, Checkout, WatchVideo, Signup, Lead, and Custom. Each event sends specific data to Pinterest, such as product IDs, order values, search terms, and video engagement. You must document which events you track and what data each event captures.",
                    },
                    {
                      title: "Enhanced Match",
                      desc: "Enhanced Match is a Pinterest Tag feature that sends hashed customer data (email addresses, names) directly to Pinterest for improved conversion attribution. This is a direct transfer of personal data to Pinterest. Under GDPR, this requires explicit consent because it goes beyond basic analytics. Your privacy policy must specifically mention Enhanced Match if you enable it.",
                    },
                    {
                      title: "Conversions API",
                      desc: "The Pinterest Conversions API sends server-side event data to Pinterest, bypassing browser-based tracking limitations. It can send customer email addresses, phone numbers, IP addresses, and transaction data directly from your server. Because this data transfer happens server-side, it is not blocked by ad blockers or cookie consent tools, making your privacy policy disclosure even more critical.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200/80 bg-white/60 p-5"
                    >
                      <h3 className="font-semibold text-slate-900 text-base">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}

                  {/* Mini FAQ */}
                  <div className="space-y-3">
                    {[
                      {
                        q: "Do I need cookie consent before the Pinterest Tag fires?",
                        a: "Yes, under GDPR and the ePrivacy Directive. The Pinterest Tag sets cookies on visitor devices for tracking purposes. In the EU/UK, you must obtain explicit consent before the tag fires. Most cookie consent platforms (CookieYes, Cookiebot, OneTrust) support blocking the Pinterest Tag until consent is given. Your privacy policy must disclose the tag regardless of whether you use a consent tool.",
                      },
                      {
                        q: "Does the Pinterest Tag work without cookies?",
                        a: "The Pinterest Tag relies on cookies for core functionality like conversion attribution and audience building. Without cookies, its effectiveness is significantly reduced. The Conversions API provides a server-side alternative, but it sends personal data directly from your server to Pinterest, which still requires privacy policy disclosure and, in many jurisdictions, consent.",
                      },
                    ].map((item) => (
                      <div
                        key={item.q}
                        className="rounded-lg bg-slate-50 border border-slate-200/70 px-4 py-3"
                      >
                        <p className="text-sm font-semibold text-slate-900">
                          {item.q}
                        </p>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 4: Shopping Catalog Requirements */}
              <section id="shopping-catalogs" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Shopping Catalog Requirements
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Product pins create a direct data pipeline between Pinterest and your store.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    Pinterest Shopping allows businesses to upload product
                    catalogs that automatically create shoppable product
                    pins. When users click these pins, they land on your
                    e-commerce site where the full data collection chain
                    begins. Whether you use Shopify, WooCommerce,
                    BigCommerce, or another platform, the privacy
                    implications are significant.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Catalog feed data sync",
                        desc: "Your product catalog syncs with Pinterest on a scheduled basis, sharing product titles, descriptions, prices, images, availability, and URLs. While catalog data itself is product information rather than personal data, the sync creates a tracked pathway. When Pinterest users interact with your product pins, that engagement data is tied to their Pinterest profiles.",
                      },
                      {
                        title: "Click-through to your store",
                        desc: "When a Pinterest user clicks a product pin and lands on your website, your analytics tools, the Pinterest Tag, and your e-commerce platform all begin collecting data. The visitor's browsing path, product views, cart additions, and purchase details are captured. Your privacy policy must cover this entire data flow from Pinterest click to order confirmation.",
                      },
                      {
                        title: "Verified Merchant Program",
                        desc: "Pinterest's Verified Merchant Program requires businesses to meet specific standards, including having a clear return policy and terms of service. While Pinterest does not explicitly list a privacy policy as a Verified Merchant requirement, operating a compliant e-commerce store without one violates the privacy laws that the program expects you to follow.",
                      },
                      {
                        title: "Retargeting catalog viewers",
                        desc: "Pinterest allows you to create audiences based on users who have interacted with your product catalog. This retargeting involves Pinterest matching user engagement data with your ad targeting parameters. Your privacy policy must disclose that you use product interaction data for retargeting purposes through Pinterest's advertising platform.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-slate-900 text-sm">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    For comprehensive e-commerce privacy guidance, see the{" "}
                    <Link
                      href="/privacy-policy-for-ecommerce"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      e-commerce privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    . If you sell on Etsy and Pinterest simultaneously, the{" "}
                    <Link
                      href="/privacy-policy-for-etsy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Etsy privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    covers marketplace-specific requirements.
                  </p>

                  {/* Did you know box 2 */}
                  <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-900 mb-1">
                          Did you know?
                        </p>
                        <p className="text-sm text-slate-700">
                          Pinterest product pins can appear in Google
                          Shopping results and Google Image search, not just
                          within the Pinterest platform. This means your
                          product catalog data reaches users who may never
                          have visited Pinterest directly. When these users
                          click through to your store, the same privacy
                          obligations apply. Your privacy policy must account
                          for traffic arriving from Pinterest product pins
                          regardless of where those pins are surfaced.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 5: Promoted Pins and Ad Data */}
              <section id="promoted-pins" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Promoted Pins and Ad Data
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Pinterest advertising involves multiple layers of data collection.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Running promoted pins on Pinterest involves data
                    collection at multiple stages: audience targeting,
                    ad delivery, click-through tracking, and conversion
                    measurement. Each stage has privacy implications that
                    your policy must address.
                  </p>

                  {[
                    {
                      title: "Audience targeting options",
                      desc: "Pinterest offers interest targeting, keyword targeting, demographic targeting, and custom audience targeting. Custom audiences can be built from customer email lists you upload, website visitors tracked by the Pinterest Tag, or users who have engaged with your pins. Each targeting method involves different data flows that must be disclosed.",
                    },
                    {
                      title: "Customer list targeting",
                      desc: "When you upload a customer email list to Pinterest for audience targeting, Pinterest hashes the data and matches it against its user database. This is a direct sharing of personal data with a third party. Under GDPR, you must have a lawful basis for this data sharing and must disclose it in your privacy policy. You also need to ensure you collected the email addresses with appropriate consent for advertising use.",
                    },
                    {
                      title: "Actalike audiences",
                      desc: "Pinterest's actalike audiences (similar to Meta's lookalike audiences) use your existing audience data to find new users with similar characteristics. This involves Pinterest analyzing the personal data you provide to identify patterns and match them against its broader user base. Your privacy policy should disclose that customer data may be used for advertising audience expansion.",
                    },
                    {
                      title: "Conversion tracking and attribution",
                      desc: "Pinterest tracks user actions after they see or click your promoted pins, including website visits, product purchases, sign-ups, and app installs. This cross-platform tracking involves the Pinterest Tag, cookies, and device fingerprinting. Your privacy policy must explain that Pinterest tracks conversions across platforms and how long this attribution window lasts.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200/80 bg-white/60 p-5"
                    >
                      <h3 className="font-semibold text-slate-900 text-base">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 6: Creator Tools and Analytics */}
              <section id="creator-tools" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Creator Tools and Analytics
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Pinterest creator features involve audience data that requires disclosure.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    Pinterest provides creators with analytics tools,
                    audience insights, and monetization features. While
                    Pinterest delivers most of this data in aggregated form,
                    the broader creator ecosystem involves personal data
                    collection that extends beyond the Pinterest platform.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Pinterest Analytics dashboard",
                        desc: "The analytics dashboard shows impression counts, engagement rates, audience demographics (age, gender, location, device), and top-performing content. While this data is aggregated by Pinterest, accessing and using these audience insights for business decisions, content strategy, or brand partnership pitches constitutes commercial use of audience data.",
                      },
                      {
                        title: "Idea Pins and video content",
                        desc: "Idea Pins (Pinterest's multi-page story format) generate detailed engagement data including views, saves, reactions, comments, and completion rates. If you include links or calls to action that direct viewers to external sites, the data collection extends beyond Pinterest. Your privacy policy should cover what happens when viewers follow links from your Idea Pins.",
                      },
                      {
                        title: "Affiliate link monetization",
                        desc: "Pinterest allows creators to include affiliate links in pins. When followers click these links, affiliate tracking cookies are placed on their devices. These cookies track browsing behaviour across the merchant's website, potentially for 30 to 90 days depending on the affiliate program. Your privacy policy must disclose that you use affiliate links and that clicking them results in tracking.",
                      },
                      {
                        title: "Email list building from Pinterest traffic",
                        desc: "Many creators use Pinterest to drive traffic to landing pages with email opt-in forms. The email addresses collected are stored in your email marketing platform and used for newsletters, promotions, and automated sequences. Your privacy policy must disclose the email service provider, what you send, and how subscribers can unsubscribe.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-slate-900 text-sm">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Did you know box 3 */}
                  <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-900 mb-1">
                          Did you know?
                        </p>
                        <p className="text-sm text-slate-700">
                          Pinterest pins have an exceptionally long content
                          lifespan compared to other social platforms. A
                          single pin can drive traffic to your website for
                          months or even years after it was originally
                          published. This means your privacy policy must
                          remain accurate and up to date for as long as your
                          pins are active, because new visitors arriving from
                          old pins are still subject to your current data
                          collection practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 7: Pinterest API Requirements */}
              <section id="api-requirements" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Pinterest API Requirements
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      API access carries the strictest privacy obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    If you build applications, scheduling tools, or
                    analytics dashboards that access the Pinterest API, you
                    are processing Pinterest user data outside the Pinterest
                    platform. Pinterest&apos;s Developer Guidelines impose
                    specific privacy requirements on API users that go
                    beyond what standard business accounts face.
                  </p>

                  {[
                    {
                      title: "Privacy policy requirement for API access",
                      desc: "Pinterest requires all API developers to have a privacy policy that is publicly accessible and clearly describes what data you collect through the API, how you use it, how you store it, and how users can request deletion. Your API application will not be approved without a compliant privacy policy URL.",
                    },
                    {
                      title: "Data usage restrictions",
                      desc: "Pinterest's API Terms restrict how you can use data obtained through the API. You cannot sell Pinterest user data, use it for surveillance, or combine it with other data sources without clear disclosure. Your privacy policy must accurately reflect how you use API data, and any changes to your data practices may require updating your API application.",
                    },
                    {
                      title: "User consent and authorization",
                      desc: "If your application accesses Pinterest data on behalf of users (through OAuth), you must obtain clear consent for the specific data scopes you request. Your privacy policy must explain what permissions your application requests, why each permission is needed, and how users can revoke access to their Pinterest data.",
                    },
                    {
                      title: "Data retention and deletion",
                      desc: "Pinterest's API Terms require you to delete user data when a user revokes access to your application or when Pinterest requests deletion. Your privacy policy must include a data retention section that explains how long you keep API data and how users can request that their data be removed from your systems.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200/80 bg-white/60 p-5"
                    >
                      <h3 className="font-semibold text-slate-900 text-base">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 8: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Scale className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Pinterest Privacy Mistakes
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      These assumptions are widespread among Pinterest business
                      users. All of them are wrong.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-5">
                  {/* Mistake 1 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Pinterest&apos;s privacy policy covers my business&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Pinterest&apos;s privacy policy covers data that
                      Pinterest collects through its platform, such as pin
                      saves, searches, and browsing behaviour within the
                      app. It does not cover data you collect through the
                      Pinterest Tag on your website, customer lists you
                      upload for ad targeting, email addresses gathered from
                      pin click-throughs, or orders processed through your
                      e-commerce store. When someone clicks your product pin
                      and buys from your Shopify store, Pinterest&apos;s
                      privacy policy says nothing about how your store
                      handles that customer data. You need your own policy.
                    </p>
                  </div>

                  {/* Mistake 2 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;I just pin images, I don&apos;t collect data&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      If you truly only save and organize pins for personal
                      use, then Pinterest&apos;s policy covers the
                      platform-level data. But business accounts do far
                      more. Your pins link to websites with analytics and
                      cookies. Your product pins drive traffic to e-commerce
                      stores. Your affiliate pins set tracking cookies on
                      visitor devices. Even claiming your website on
                      Pinterest creates a data connection between the two
                      platforms. Pinning images is rarely the only thing a
                      business account does on Pinterest.
                    </p>
                  </div>

                  {/* Mistake 3 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;The Pinterest Tag is just analytics&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      The Pinterest Tag does far more than count page views.
                      It sets cookies on visitor devices, collects IP
                      addresses and browser fingerprint data, tracks
                      specific actions like purchases and sign-ups, and
                      sends all of this data to Pinterest for ad targeting
                      and audience building. Under GDPR, this is not
                      &quot;just analytics.&quot; It is advertising
                      surveillance that requires explicit cookie consent and
                      a detailed privacy policy disclosure. Treating the
                      Pinterest Tag as a simple analytics tool creates
                      significant compliance gaps.
                    </p>
                  </div>

                  {/* Mistake 4 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Affiliate links don&apos;t need disclosure&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Affiliate links on Pinterest set tracking cookies on
                      every user who clicks them. These cookies can persist
                      for 30 to 90 days and track browsing behaviour across
                      the merchant&apos;s website. Beyond the FTC
                      requirement to disclose affiliate relationships (which
                      is a separate advertising disclosure issue), GDPR
                      requires you to disclose that clicking your links
                      results in third-party tracking cookies being placed
                      on user devices. Your privacy policy must name the
                      affiliate networks you participate in and explain the
                      tracking involved.
                    </p>
                  </div>

                  {/* Mistake 5 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;My Etsy shop policy covers Pinterest sales too&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      If you sell on Etsy and use Pinterest to drive traffic
                      to your Etsy shop, your Etsy privacy disclosures
                      cover data collected within the Etsy platform. They do
                      not cover the Pinterest Tag on your standalone
                      website, customer lists you upload to Pinterest for ad
                      targeting, or affiliate tracking from Pinterest pins
                      that link to non-Etsy destinations. If you have both
                      an Etsy shop and a standalone website promoted through
                      Pinterest, you need a privacy policy that covers the
                      Pinterest-specific data flows independently.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 9: How to Create */}
              <section id="how-to-create" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <FileText className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create a Privacy Policy for Your Pinterest Business
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Six steps from audit to publication.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Creating a privacy policy for your Pinterest business
                    account is straightforward once you map out your data
                    collection points. Follow these steps:
                  </p>

                  {[
                    {
                      step: "1",
                      title: "Audit every data collection point in your Pinterest ecosystem",
                      desc: "List every tool and platform connected to your Pinterest business: Pinterest Tag, Conversions API, product catalog feeds, promoted pin campaigns, affiliate networks, your website analytics, email marketing platform, e-commerce platform, and any Pinterest API integrations. For each, note what personal data it collects from your audience.",
                    },
                    {
                      step: "2",
                      title: "Determine which privacy laws apply to your audience",
                      desc: "Check your Pinterest Analytics for audience geography. If any followers are in the EU or UK, GDPR applies. Followers in California trigger CCPA and CalOPPA. Pinterest has a global user base, so most business accounts with meaningful traffic will have visitors from multiple jurisdictions. GDPR, CCPA, and CalOPPA apply at minimum for most accounts.",
                    },
                    {
                      step: "3",
                      title: "Map data types to purposes and lawful bases",
                      desc: "For each type of personal data, document the purpose and GDPR lawful basis. Pinterest Tag tracking for ad optimization = legitimate interests (with cookie consent required). Customer list uploads for targeting = consent. Purchase data for order fulfillment = contract performance. Email marketing = consent. Map every data flow.",
                    },
                    {
                      step: "4",
                      title: "Name every third-party service and processor",
                      desc: "GDPR requires naming specific services. Write 'Pinterest, Inc. (for advertising and conversion tracking)' not 'social media advertising partners.' Write 'Shopify Inc. (for order processing)' not 'e-commerce platform.' Name your affiliate networks, email provider, payment processor, and analytics tools.",
                    },
                    {
                      step: "5",
                      title: "Generate your privacy policy",
                      desc: "Use a structured privacy policy generator that asks about your specific Pinterest business setup and produces a customized document. This covers Pinterest Tag tracking, promoted pins, shopping catalogs, affiliate links, and cookie consent in a single, coherent policy. Our generator handles this in under 60 seconds for $4.99.",
                    },
                    {
                      step: "6",
                      title: "Publish and link from every touchpoint",
                      desc: "Host your privacy policy on a dedicated URL. Link to it from your Pinterest business profile website field, your claimed website footer, your e-commerce checkout pages, your email newsletter footer, and any landing pages you drive Pinterest traffic to. Set a reminder to review and update it every 6 months.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}

                  <p className="text-sm text-slate-500 leading-relaxed">
                    For guidance on GDPR-specific sections, see the{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR privacy policy template
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    . Learn about how other social platforms handle privacy in the{" "}
                    <Link
                      href="/privacy-policy-for-instagram"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Instagram privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and the{" "}
                    <Link
                      href="/privacy-policy-for-tiktok"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      TikTok privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* CTA Section */}
              <section id="generate" className="scroll-mt-24">
                <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 sm:p-10 text-center relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
                  </div>

                  <div className="relative">
                    <ShieldCheck className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate Your Pinterest Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Answer a few questions about your Pinterest business
                      setup and get a customized, compliant privacy policy
                      covering Pinterest Tag, promoted pins, shopping
                      catalogs, and affiliate links in under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>GDPR &amp; CCPA compliant</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="text-blue-200 hover:text-white underline underline-offset-2 transition-colors"
                      >
                        GDPR
                      </Link>{" "}
                      requirements. Not legal advice.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* FAQ Section */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-8">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <HelpCircle className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>

                <div className="pl-0 sm:pl-[52px] space-y-6">
                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Do Pinterest business accounts need a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. If you use the Pinterest Tag, run promoted pins,
                      upload shopping catalogs, access Pinterest API, use
                      creator analytics, or include affiliate links in your
                      pins, you are collecting or facilitating the collection
                      of personal data. Privacy laws (
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      , CCPA, CalOPPA) and Pinterest&apos;s own advertising
                      guidelines require you to have a privacy policy.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does Pinterest require a privacy policy for advertisers?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. Pinterest&apos;s Advertising Guidelines require
                      advertisers to comply with all applicable privacy laws
                      and to provide users with clear notice about data
                      collection. When you install the Pinterest Tag or
                      upload customer lists for audience targeting, you must
                      disclose these practices in a published privacy policy.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      What data does the Pinterest Tag collect?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      The Pinterest Tag tracks visitor actions on your
                      website including page visits, product views,
                      add-to-cart events, purchases, sign-ups, and searches.
                      It collects IP addresses, browser data, device
                      identifiers, and sets cookies. If Enhanced Match is
                      enabled, it also sends hashed customer email addresses
                      and names to Pinterest for improved conversion
                      attribution.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Do I need a privacy policy for Pinterest Shopping?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. Pinterest Shopping requires you to upload product
                      catalogs that sync with your{" "}
                      <Link
                        href="/privacy-policy-for-ecommerce"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        e-commerce platform
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      . When users click through product pins to your
                      website, you collect browsing data, purchase
                      information, and customer details. Your privacy policy
                      must disclose how you handle this commerce data and
                      that Pinterest receives conversion signals.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does Pinterest&apos;s privacy policy cover my business
                      account?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      No. Pinterest&apos;s privacy policy covers data that
                      Pinterest collects through its platform. It does not
                      cover data you collect through the Pinterest Tag on
                      your website, customer lists you upload for targeting,
                      email addresses collected from pin click-throughs, or
                      data processed by your e-commerce platform. You need
                      your own privacy policy to disclose your specific data
                      handling practices.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Do Pinterest creators need a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes, if they use affiliate links, direct followers to
                      external websites, collect email subscribers, access
                      Pinterest Analytics for audience insights, or sell
                      products through linked shops. Creators who monetize
                      their Pinterest presence are engaged in commercial
                      data collection that requires a privacy policy. A
                      creator with 500 followers using affiliate links has
                      the same obligations as one with 500,000.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Where should I link my Pinterest privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Link to it from your Pinterest business profile
                      website field, your claimed website footer, your
                      e-commerce checkout pages, your email newsletter
                      footer, and any landing pages you drive Pinterest
                      traffic to. If you run promoted pins, ensure your
                      privacy policy URL is accessible from your advertiser
                      account. The policy should be hosted on a dedicated
                      URL that you control, not as a pin or board
                      description.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Related Resources */}
              <section id="resources" className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/privacy-policy-for-instagram",
                      icon: Globe,
                      title: "Privacy Policy for Instagram",
                      desc: "Meta advertising and creator compliance",
                    },
                    {
                      href: "/privacy-policy-for-facebook-page",
                      icon: Globe,
                      title: "Privacy Policy for Facebook",
                      desc: "Facebook Page and ads compliance",
                    },
                    {
                      href: "/privacy-policy-for-tiktok",
                      icon: Globe,
                      title: "Privacy Policy for TikTok",
                      desc: "TikTok business and creator guide",
                    },
                    {
                      href: "/privacy-policy-for-etsy",
                      icon: Users,
                      title: "Privacy Policy for Etsy",
                      desc: "Etsy seller compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-ecommerce",
                      icon: FileText,
                      title: "E-Commerce Privacy Policy",
                      desc: "Online store compliance guide",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU and UK compliance template",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without One",
                      desc: "Fines, platform bans, and legal risks",
                    },
                    {
                      href: "/generate",
                      icon: BookOpen,
                      title: "Generate Your Privacy Policy",
                      desc: "Customized policy in under 60 seconds",
                    },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="group">
                      <div className="h-full rounded-xl border border-slate-200/80 p-4 hover:border-blue-200 hover:shadow-sm transition-all bg-white/50">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center flex-shrink-0 transition-colors">
                            <item.icon className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-slate-800 group-hover:text-blue-700 transition-colors text-sm">
                              {item.title}
                            </h3>
                            <p className="text-xs text-slate-400 mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" />
                        </div>
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
