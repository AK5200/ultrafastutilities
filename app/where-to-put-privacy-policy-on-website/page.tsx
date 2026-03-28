import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Ban,
  Info,
  MapPin,
  Layout,
  Smartphone,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Where to Put a Privacy Policy on Your Website: Best Practices (2026) | ultrafastutilities",
  description:
    "Learn where to place your privacy policy for legal compliance. Covers footer links, signup forms, checkout pages, cookie banners, app stores, and platform-specific placement guides.",
  keywords:
    "where to put privacy policy on website, privacy policy placement, where to display privacy policy, privacy policy location, privacy policy link placement",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/where-to-put-privacy-policy-on-website",
  },
  openGraph: {
    title:
      "Where to Put a Privacy Policy on Your Website: Best Practices (2026) | ultrafastutilities",
    description:
      "Learn where to place your privacy policy for legal compliance. Covers footer links, signup forms, checkout pages, cookie banners, app stores, and platform-specific placement guides.",
    url: "https://ultrafastutilities.com/where-to-put-privacy-policy-on-website",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Where to Put a Privacy Policy on Your Website | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Where to Put a Privacy Policy on Your Website: Best Practices (2026)",
    description:
      "Learn where to place your privacy policy for legal compliance. Covers footer links, signup forms, checkout pages, cookie banners, and platform-specific placement guides.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where should I put my privacy policy on my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your privacy policy must be accessible from every page of your website. The most common and legally recommended location is a persistent link in your website footer. Additionally, you should link to it from signup forms, checkout pages, cookie consent banners, contact forms, and any page where you collect personal data. GDPR and CCPA both require the policy to be easy to find without requiring users to search for it.",
      },
    },
    {
      "@type": "Question",
      name: "Is a footer link enough for privacy policy compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A footer link is the minimum baseline, but it is not always sufficient on its own. GDPR requires that your privacy policy be provided at the point of data collection. This means you also need to link to it directly on signup forms, checkout pages, and anywhere else you collect personal information. A footer link ensures site-wide accessibility, but point-of-collection links are what satisfy the legal requirement for informed consent.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to link my privacy policy on signup forms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GDPR Article 13 requires you to provide your privacy policy to users at the time you collect their personal data. A signup form collects names, email addresses, and potentially other personal information. You must include a visible link to your privacy policy on or near the form, ideally with a checkbox or clear statement that the user acknowledges the policy before submitting their data.",
      },
    },
    {
      "@type": "Question",
      name: "Where do I put a privacy policy link on a mobile app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For mobile apps, your privacy policy should be accessible from at least three places: the app store listing page (required by both Apple App Store and Google Play), within the app settings or about section, and at any in-app point where you collect personal data such as registration screens or payment flows. Both Apple and Google will reject apps that do not include a working privacy policy link in the store listing.",
      },
    },
    {
      "@type": "Question",
      name: "Should my cookie banner link to my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your cookie consent banner should include a link to your full privacy policy or cookie policy. GDPR requires users to be informed about cookie usage before consent is given. The banner itself provides a summary, but users must be able to access the complete details. Best practice is to link to both your privacy policy and a dedicated cookie policy if you have one.",
      },
    },
    {
      "@type": "Question",
      name: "Do email newsletters need a privacy policy link?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every marketing email you send should include a link to your privacy policy in the footer. This is required by CAN-SPAM and recommended under GDPR. Additionally, your email signup form must link to the privacy policy at the point of collection. If you use a third-party email service like Mailchimp or ConvertKit, they typically include a privacy policy link placeholder in their default templates.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I place my privacy policy on Shopify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On Shopify, add your privacy policy link in the footer navigation menu under Settings > Navigation > Footer menu. Shopify also has a built-in legal page system under Settings > Policies where you can paste your privacy policy. Make sure the link also appears on your checkout page, which Shopify handles automatically if you have added the policy in Settings > Policies.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Place Your Privacy Policy on Your Website",
  description:
    "Follow these seven steps to ensure your privacy policy is properly placed across all required locations on your website and digital properties.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Add a privacy policy link to your website footer",
      text: "Place a clearly labeled link titled Privacy Policy in your site-wide footer. This ensures the policy is accessible from every page. Use plain text, not icons or abbreviations. The link should be visible without scrolling through dense footer content.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Link the policy on all signup and registration forms",
      text: "Add a visible privacy policy link on every form that collects personal data: signup forms, registration pages, newsletter opt-ins, and account creation flows. Place it near the submit button with text such as By signing up, you agree to our Privacy Policy.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Include the link on checkout and payment pages",
      text: "Your checkout page collects sensitive personal and financial data. Link your privacy policy prominently on this page, ideally near the payment form. This is required for GDPR compliance and recommended for PCI DSS best practices.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Add the link to your cookie consent banner",
      text: "Your cookie consent banner should include a direct link to your privacy policy or cookie policy. Users must be able to read the full details of your cookie usage before giving or withholding consent.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Place the link on contact forms",
      text: "Contact forms collect names, email addresses, and message content. Add a privacy policy link on or near the form so users know how their inquiry data will be handled before they submit it.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Add the link to your app store listing",
      text: "If you have a mobile app, both Apple App Store and Google Play require a working privacy policy URL in your app listing. Submit the direct URL to your privacy policy page when publishing or updating your app.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Include the link in email footers",
      text: "Add a privacy policy link to the footer of all marketing and transactional emails. This is required by CAN-SPAM and recommended under GDPR. Most email platforms include a merge tag or placeholder for this purpose.",
    },
  ],
};

const tocSections = [
  { id: "why-placement-matters", title: "Why Placement Matters" },
  { id: "seven-locations", title: "7 Essential Locations" },
  { id: "platform-guides", title: "Platform Guides" },
  { id: "mobile-app-placement", title: "Mobile App Placement" },
  { id: "email-marketing", title: "Email Marketing" },
  { id: "social-media", title: "Social Media" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to-place", title: "How to Place (7 Steps)" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function WhereToPlacePrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Where to Put a Privacy Policy on Your Website: Best Practices (2026)",
            description:
              "Learn where to place your privacy policy for legal compliance. Covers footer links, signup forms, checkout pages, cookie banners, app stores, and platform-specific placement guides.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-03-27",
            dateModified: "2026-03-27",
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
                name: "Where to Put a Privacy Policy on Your Website",
                item: "https://ultrafastutilities.com/where-to-put-privacy-policy-on-website",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
                Where to Put Privacy Policy on Website
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <MapPin className="w-3.5 h-3.5" />
                Placement Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Where to Put a Privacy Policy on Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Website
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Your website footer is the minimum. But GDPR and CCPA require
                your privacy policy to be accessible at every point where you
                collect personal data. Here are the 7 locations you need to
                cover.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For website owners, app developers, and online business
                operators who need to know exactly where to display their
                privacy policy.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: March 2026 &middot; Reviewed for GDPR, CCPA &amp;
                CalOPPA compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Website Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/what-happens-without-a-privacy-policy"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <AlertTriangle className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                What Happens Without One
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
                    Need a policy first?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Generate one in 60 seconds
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
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>Last updated: March 2026</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>12 min read</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1 text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800 mb-3">
                  <strong>Your privacy policy should be linked from at least 7 locations</strong>{" "}
                  to meet GDPR and CCPA placement requirements:
                </p>
                <ol className="space-y-1.5 text-sm text-slate-700 list-decimal list-inside">
                  <li>Website footer (every page)</li>
                  <li>Signup and registration forms</li>
                  <li>Checkout and payment pages</li>
                  <li>Cookie consent banners</li>
                  <li>Contact forms</li>
                  <li>App store listings (if applicable)</li>
                  <li>Email newsletter footers</li>
                </ol>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Having a privacy policy is only half the battle. If users cannot
                find it, or if it is buried on a page nobody visits, you are
                still failing the transparency requirements of GDPR, CCPA, and
                CalOPPA. These laws do not just require you to have a policy.
                They require that policy to be conspicuously displayed and easy
                to access.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                CalOPPA is explicit about this: your privacy policy must be
                &quot;conspicuously posted&quot; on your website. That means a
                link that a reasonable person can find without difficulty. GDPR
                goes further by requiring the policy to be provided at the
                specific point where personal data is collected, not just
                somewhere on your site.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers every location where your privacy policy link
                should appear, with platform-specific instructions for Shopify,
                WordPress, Wix, and mobile apps.
              </p>

              {/* Section 1: Why Placement Matters */}
              <section id="why-placement-matters" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Why Privacy Policy Placement Matters
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Privacy policy placement is not just a design choice. It is a
                  legal requirement with specific standards. The way you display
                  your policy directly affects whether user consent is valid,
                  whether app stores approve your listing, and whether regulators
                  consider you compliant.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Under GDPR, consent must be &quot;informed.&quot; That means
                  the user must have had a reasonable opportunity to read your
                  privacy policy before agreeing to data collection. If your
                  policy is hidden behind three clicks or buried in a submenu,
                  regulators can argue that consent was not truly informed.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  CalOPPA requires your policy to be &quot;conspicuously
                  posted,&quot; which the law defines as either being the first
                  text on your homepage or accessible via a link that uses the
                  word &quot;privacy&quot; and appears on your homepage. Most
                  sites satisfy this with a footer link visible on every page.
                </p>

                {/* Quick summary card */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Layout className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Footer</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Minimum required location
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">7 spots</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Recommended total locations
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Smartphone className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Required</p>
                    <p className="text-xs text-slate-500 mt-1">
                      For app store listings
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: 7 Essential Locations */}
              <section id="seven-locations" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  7 Essential Locations for Your Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Each of these locations serves a specific compliance purpose.
                  Missing even one can create a gap that regulators, app stores,
                  or advertising partners may flag.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Website footer (every page)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        This is the universal standard. A clearly labeled
                        &quot;Privacy Policy&quot; link in your footer ensures
                        the policy is accessible from every page on your site.
                        CalOPPA requires the link to use the word
                        &quot;privacy&quot; and be visible on the homepage. Most
                        website builders and CMS platforms include footer
                        navigation by default.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Signup and registration forms
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        GDPR Article 13 requires you to provide privacy
                        information at the time data is collected. Every signup
                        form, registration page, and newsletter opt-in must
                        include a visible link to your privacy policy. Place it
                        near the submit button with text like &quot;By signing
                        up, you agree to our Privacy Policy.&quot;
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Checkout and payment pages
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Checkout pages collect names, addresses, phone numbers,
                        and payment details. This is the most sensitive data
                        collection point on your site. Link your privacy policy
                        near the payment form, before the user submits their
                        order. Shopify, WooCommerce, and most e-commerce
                        platforms support adding policy links to checkout.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Cookie consent banners
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Your cookie banner is often the first thing users
                        interact with on your site. It should include a link to
                        your full privacy policy or{" "}
                        <Link
                          href="/cookie-policy-for-websites"
                          className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                        >
                          cookie policy
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        . Users need to access the full details before deciding
                        whether to accept or reject cookies.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Contact forms
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Contact forms collect names, email addresses, and
                        free-text message content. Users should know how their
                        inquiry data will be processed before submitting. Add a
                        brief statement and link below the form, such as
                        &quot;We handle your data as described in our Privacy
                        Policy.&quot;
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        App store listings
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Both Apple App Store and Google Play require a working
                        privacy policy URL in your app listing. Apps submitted
                        without one will be rejected. The URL must lead directly
                        to your privacy policy page, not your homepage. See our
                        guide on{" "}
                        <Link
                          href="/privacy-policy-for-apps"
                          className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                        >
                          privacy policies for apps
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>{" "}
                        for details.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      7
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Email newsletter footers
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Every marketing and transactional email should include a
                        privacy policy link in its footer. CAN-SPAM requires
                        this for commercial emails. GDPR recommends it as part
                        of ongoing transparency. Most email platforms like
                        Mailchimp, ConvertKit, and Sendinblue include footer
                        link placeholders by default.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Did you know box 1 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        CalOPPA defines &quot;conspicuously posted&quot; with
                        specific criteria: the link must contain the word
                        &quot;privacy,&quot; use a font size or color that makes
                        it stand out from surrounding text, and be located on the
                        homepage or the first significant page after the
                        homepage. A footer link on every page satisfies this, but
                        a link hidden in a submenu does not.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Platform Guides Table */}
              <section id="platform-guides" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Platform-Specific Placement Guides
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Where to add your privacy policy link depends on your website
                  platform. Here is how to do it on the most popular platforms.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Platform
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          Where to Add
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          <Link href="/privacy-policy-for-shopify" className="text-blue-600 hover:text-blue-800">Shopify</Link>
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Settings &gt; Policies &gt; Privacy Policy, then Footer menu under Navigation
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Checkout page link is automatic when policy is set in Settings
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          <Link href="/privacy-policy-for-wordpress" className="text-blue-600 hover:text-blue-800">WordPress</Link>
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Settings &gt; Privacy, then add to footer menu via Appearance &gt; Menus
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          WordPress has a built-in privacy policy page generator since version 4.9.6
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          <Link href="/privacy-policy-for-wix" className="text-blue-600 hover:text-blue-800">Wix</Link>
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Add a page, then link it in your footer section via the Editor
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Wix does not auto-link on forms; add manually to each form page
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Squarespace
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Add a page, then link in footer via Navigation settings
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Use the &quot;Not Linked&quot; section to keep it out of main nav
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Webflow
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Create a static page and add the link to your footer symbol
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Footer symbols update site-wide automatically
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          WooCommerce
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          WordPress privacy page plus WooCommerce &gt; Settings &gt; Accounts &amp; Privacy
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Adds privacy policy link to checkout and account registration
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Did you know box 2 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        Google requires a privacy policy link for any app or
                        website that uses Google Analytics, Google AdSense, or
                        Google Sign-In. If you use any Google service that
                        collects user data, your privacy policy must be linked
                        from your website. This is separate from any legal
                        requirement and is a condition of your Google service
                        agreement.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Can I use a pop-up instead of a dedicated page?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      No. A pop-up or modal is not a reliable substitute for a
                      dedicated privacy policy page. Pop-ups can be blocked by
                      browsers, may not be indexable by search engines, and do
                      not provide a stable URL for app store submissions. Always
                      use a dedicated page with a permanent URL.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does the link text matter?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. CalOPPA requires the link to include the word
                      &quot;privacy.&quot; Use &quot;Privacy Policy&quot; as your
                      link text. Avoid vague labels like &quot;Legal,&quot;
                      &quot;Terms,&quot; or &quot;Policies&quot; that do not
                      clearly identify the link as leading to your privacy
                      policy. Users and regulators should be able to identify
                      the link at a glance.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Mobile App Placement */}
              <section id="mobile-app-placement" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Mobile App Privacy Policy Placement
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Mobile apps have stricter placement requirements than websites
                  because both Apple and Google enforce their own policies on top
                  of legal requirements.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Required Locations for Mobile Apps
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>App store listing page (Apple App Store and Google Play both require this)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Within the app itself, typically in Settings or About section</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Before or during account registration within the app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>On any in-app screen that collects personal data (payment, profile editing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>On your app&apos;s marketing website or landing page</span>
                  </li>
                </ul>

                <p className="text-slate-600 text-sm mt-4">
                  Apple will reject your app during review if the privacy policy
                  link is missing or broken. Google Play will flag your app and
                  may remove it from the store. For detailed requirements, see
                  our guide on{" "}
                  <Link
                    href="/privacy-policy-for-apps"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    privacy policies for apps
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  .
                </p>
              </section>

              {/* Section 5: Email Marketing */}
              <section id="email-marketing" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Email Marketing Privacy Policy Placement
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Email marketing involves two separate placement requirements:
                  the signup form where users subscribe and the emails
                  themselves.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Email Signup Forms
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Every email signup form must include a link to your privacy
                  policy. This is where consent is captured, so GDPR requires
                  users to be informed at this exact point. Place the link near
                  the subscribe button. Many businesses add a line like
                  &quot;We respect your privacy. Read our Privacy Policy.&quot;
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Within Emails
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  CAN-SPAM requires commercial emails to include your physical
                  address and an unsubscribe link. While it does not explicitly
                  mandate a privacy policy link, GDPR recommends it and most
                  email service providers include it by default. Adding the link
                  to your email footer template ensures it appears in every
                  message automatically.
                </p>

                {/* Did you know box 3 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        Mailchimp, ConvertKit, and most major email platforms
                        automatically add an unsubscribe link to your emails, but
                        they do not always add a privacy policy link. You need to
                        add this yourself by editing your default email footer
                        template. It takes about two minutes and covers every
                        email you send going forward.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Social Media */}
              <section id="social-media" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Social Media Privacy Policy Placement
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  If you run business profiles on social media platforms, your
                  privacy policy should be linked there too. This is especially
                  important if you collect data through social media (running
                  ads, using lead forms, or collecting messages through your
                  business page).
                </p>

                <ul className="space-y-2 text-slate-700 text-sm mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Facebook and Instagram: Add the link to your Page&apos;s About section and in any lead form ad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>LinkedIn: Add to your Company Page&apos;s website URL or About section</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Twitter/X: Include in your bio link or pinned tweet if you collect data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>YouTube: Add to your channel description and video descriptions if applicable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>TikTok: Link in your bio, especially if you run a TikTok Shop or collect leads</span>
                  </li>
                </ul>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Do I need a separate privacy policy for social media?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      No. Your main website privacy policy covers your social
                      media data collection as long as it describes the data you
                      collect through those channels. Simply link to your
                      existing policy. If your social media activities involve
                      unique data collection (like running contests or using
                      platform-specific lead forms), make sure those activities
                      are described in your policy.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What about social media ads with lead forms?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Facebook and LinkedIn lead form ads require you to include
                      a privacy policy link directly in the ad. This is enforced
                      at the platform level. You cannot publish a lead form ad
                      without providing a privacy policy URL. The same policy
                      you use on your website works here.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Placement Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Even when businesses have a privacy policy, these placement
                  mistakes leave them exposed to compliance issues.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Only linking in the footer
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        A footer link is the minimum, not the complete solution.
                        GDPR requires the policy to be presented at the point of
                        data collection. If your signup form, checkout page, or
                        contact form does not include a link, you are missing the
                        legal requirement for informed consent at those
                        touchpoints.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Using a broken or outdated URL
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        If you have redesigned your website, changed CMS
                        platforms, or restructured your pages, your old privacy
                        policy URL may return a 404 error. App stores, email
                        footers, and social media profiles may still point to the
                        old URL. Audit all locations where your policy is linked
                        after any site migration.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Hiding the link in a crowded footer
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Some websites bury the privacy policy link among dozens
                        of other footer links in a small font. CalOPPA requires
                        the link to be &quot;conspicuous.&quot; If a reasonable
                        person cannot find it within a few seconds of looking,
                        you may not meet the conspicuousness standard.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Linking to a PDF instead of a web page
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        PDFs are harder to read on mobile devices, cannot be
                        easily indexed by search engines, and create a poor user
                        experience. Use a dedicated HTML page on your website.
                        If you need a PDF version for legal records, offer it as
                        a download option alongside the web page.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Not linking on the cookie consent banner
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Many cookie banners only say &quot;We use cookies&quot;
                        with Accept and Reject buttons but do not link to the
                        full policy. GDPR requires informed consent, which means
                        users must be able to read the details before making a
                        choice. Always include a link to your{" "}
                        <Link
                          href="/cookie-policy-for-websites"
                          className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                        >
                          cookie policy
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>{" "}
                        or privacy policy in the banner.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: How to Place (7 Steps) */}
              <section id="how-to-place" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Place Your Privacy Policy (7 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow this checklist to make sure your privacy policy is
                  properly linked across all required locations.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add a privacy policy link to your website footer
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Place a clearly labeled &quot;Privacy Policy&quot; link
                        in your site-wide footer. This ensures the policy is
                        accessible from every page. Use plain text, not icons or
                        abbreviations. The link should be visible without
                        scrolling through dense footer content.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Link the policy on all signup and registration forms
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Add a visible privacy policy link on every form that
                        collects personal data: signup forms, registration pages,
                        newsletter opt-ins, and account creation flows. Place it
                        near the submit button with text such as &quot;By
                        signing up, you agree to our Privacy Policy.&quot;
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Include the link on checkout and payment pages
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Your checkout page collects sensitive personal and
                        financial data. Link your privacy policy prominently on
                        this page, ideally near the payment form. This is
                        required for GDPR compliance and recommended for PCI DSS
                        best practices.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add the link to your cookie consent banner
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Your cookie consent banner should include a direct link
                        to your privacy policy or cookie policy. Users must be
                        able to read the full details of your cookie usage before
                        giving or withholding consent.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Place the link on contact forms
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Contact forms collect names, email addresses, and message
                        content. Add a privacy policy link on or near the form
                        so users know how their inquiry data will be handled
                        before they submit it.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add the link to your app store listing
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If you have a mobile app, submit your privacy policy URL
                        when publishing or updating your app on Apple App Store
                        or Google Play. The URL must lead directly to your
                        privacy policy page, not your homepage or a general
                        legal page.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      7
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Include the link in email footers
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Add a privacy policy link to the footer of all marketing
                        and transactional emails. This is required by CAN-SPAM
                        and recommended under GDPR. Most email platforms include
                        a merge tag or placeholder for this purpose.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-14 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-blue-200 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">
                      Need a Privacy Policy to Place?
                    </h3>
                    <p className="text-blue-100 text-sm mb-4">
                      Before you can link your privacy policy everywhere, you
                      need one that accurately reflects your data practices.
                      Generate a customized policy in under 60 seconds.
                    </p>
                    <Link href="/generate">
                      <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm px-5 py-2 h-auto">
                        Generate My Privacy Policy
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <section id="faq" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Where should I put my privacy policy on my website?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      At minimum, in your website footer so it is accessible
                      from every page. Beyond that, link it on signup forms,
                      checkout pages, cookie consent banners, contact forms, app
                      store listings, and email footers. GDPR requires
                      the policy to be presented at the point of data
                      collection.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Is a footer link enough for compliance?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      A footer link satisfies the CalOPPA &quot;conspicuously
                      posted&quot; requirement, but GDPR requires additional
                      placement at each point of data collection. If you have
                      signup forms, checkout pages, or contact forms, those need
                      separate links to the policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need to link my privacy policy on signup forms?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. GDPR Article 13 requires you to provide privacy
                      information at the time personal data is collected. A
                      signup form collects personal data, so it must include a
                      visible link to your privacy policy near the submit
                      button.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Where do I put the privacy policy link in a mobile app?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      In the app store listing (required by Apple and Google),
                      within the app&apos;s settings or about section, and at
                      any in-app data collection point like registration or
                      payment screens. Missing the app store link will result
                      in rejection during app review.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Should my cookie banner link to my privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. The cookie banner provides a summary, but users must
                      be able to access the full details before deciding on
                      consent. Include a link to your privacy policy or a
                      dedicated cookie policy within the banner itself.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do emails need a privacy policy link?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes, for both the signup form and the emails themselves.
                      CAN-SPAM requires certain disclosures in commercial
                      emails, and GDPR recommends a privacy policy link. Add
                      it to your email footer template so it appears in every
                      message automatically.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Can I use a PDF instead of a web page for my privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      A web page is strongly recommended over a PDF. PDFs are
                      harder to read on mobile, cannot be easily updated, and
                      create a poor user experience. Use a dedicated HTML page
                      with a permanent URL. You can offer a PDF download as a
                      secondary option if needed.
                    </p>
                  </div>
                </div>
              </section>

              {/* Related Resources */}
              <section id="resources" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/privacy-policy-for-websites",
                      title: "Privacy Policy for Websites",
                      desc: "Complete guide to creating a website privacy policy",
                    },
                    {
                      href: "/privacy-policy-for-shopify",
                      title: "Privacy Policy for Shopify",
                      desc: "How to add and customize your Shopify privacy policy",
                    },
                    {
                      href: "/privacy-policy-for-wordpress",
                      title: "Privacy Policy for WordPress",
                      desc: "WordPress-specific privacy policy setup guide",
                    },
                    {
                      href: "/privacy-policy-for-wix",
                      title: "Privacy Policy for Wix",
                      desc: "Adding a privacy policy to your Wix website",
                    },
                    {
                      href: "/privacy-policy-for-apps",
                      title: "Privacy Policy for Apps",
                      desc: "App store requirements and mobile app compliance",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      title: "Cookie Policy for Websites",
                      desc: "GDPR cookie requirements and consent rules",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "The real consequences of operating without one",
                    },
                    {
                      href: "/generate",
                      title: "Generate a Privacy Policy",
                      desc: "Create a customized policy in under 60 seconds",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all bg-white"
                    >
                      <FileText className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0 group-hover:text-blue-600 transition-colors" />
                      <div>
                        <p className="font-medium text-slate-800 text-sm group-hover:text-blue-700 transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Final CTA */}
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white text-center">
                <ShieldCheck className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">
                  Ready to Place Your Privacy Policy?
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  First, make sure you have a policy that accurately reflects
                  your current data practices. Generate a customized,
                  compliant privacy policy in under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and CalOPPA &middot; Customized to your
                  practices &middot; Updated for 2026
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
