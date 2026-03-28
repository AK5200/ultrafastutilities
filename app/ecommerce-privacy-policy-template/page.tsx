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
  Clock,
  Ban,
  Info,
  Users,
  Globe,
  ShoppingCart,
  CreditCard,
  Package,
  Lock,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "eCommerce Privacy Policy Template: Online Store Guide (2026) | ultrafastutilities",
  description:
    "Free eCommerce privacy policy template for online stores. Covers customer data, payment processing, shipping, remarketing, and GDPR/CCPA compliance for online retailers.",
  keywords:
    "ecommerce privacy policy template, online store privacy policy, ecommerce privacy policy, shop privacy policy, online retail privacy policy template",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/ecommerce-privacy-policy-template",
  },
  openGraph: {
    title:
      "eCommerce Privacy Policy Template: Online Store Guide (2026) | ultrafastutilities",
    description:
      "Free eCommerce privacy policy template for online stores. Covers customer data, payment processing, shipping, remarketing, and GDPR/CCPA compliance for online retailers.",
    url: "https://ultrafastutilities.com/ecommerce-privacy-policy-template",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "eCommerce Privacy Policy Template | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "eCommerce Privacy Policy Template: Online Store Guide (2026) | ultrafastutilities",
    description:
      "Free eCommerce privacy policy template for online stores. Covers customer data, payment processing, shipping, and GDPR/CCPA compliance.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-ecommerce-needs", title: "Why eCommerce Stores Need One" },
  { id: "data-types", title: "Data Types in eCommerce" },
  { id: "payment-processing", title: "Payment Processing" },
  { id: "shipping-and-logistics", title: "Shipping and Logistics" },
  { id: "marketing-and-remarketing", title: "Marketing and Remarketing" },
  { id: "cookies-and-tracking", title: "Cookies and Tracking" },
  { id: "template-sections", title: "Template Sections" },
  { id: "platform-specifics", title: "Platform-Specific Notes" },
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
      name: "Does an online store need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, absolutely. An eCommerce store collects significant personal data: names, addresses, email addresses, payment information, purchase history, and browsing behavior. This triggers privacy law requirements under GDPR (for EU customers), CCPA (for California customers), and most other applicable laws. Every major eCommerce platform (Shopify, WooCommerce, Magento) also requires a privacy policy in their terms of service.",
      },
    },
    {
      "@type": "Question",
      name: "What must an eCommerce privacy policy include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An eCommerce privacy policy must include: what customer data is collected (name, email, address, payment info, browsing data), how it's used (order fulfillment, marketing, fraud prevention), payment processor disclosure (Stripe, PayPal, etc.), shipping carrier data sharing, marketing and remarketing practices (Facebook Pixel, Google Ads), cookie and analytics disclosure, customer rights (access, deletion, opt-out), and contact information.",
      },
    },
    {
      "@type": "Question",
      name: "Does Shopify provide a privacy policy for my store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopify provides a privacy policy template as a starting point, but you are responsible for ensuring it accurately reflects your own data practices. Shopify's template covers standard practices but may not include your specific marketing tools, loyalty programs, affiliate programs, or other custom integrations. You should customize any platform-provided template to match your actual practices.",
      },
    },
    {
      "@type": "Question",
      name: "What data does an eCommerce store collect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical eCommerce store collects: contact information (name, email, phone), shipping and billing addresses, payment information (processed by payment providers, not stored by most stores), purchase history and order details, product reviews and ratings, browsing behavior (via cookies and analytics), and marketing preferences. If you offer accounts, you also hold login credentials and account preferences.",
      },
    },
    {
      "@type": "Question",
      name: "How do I handle customer data under GDPR for my online store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under GDPR, you need a legal basis for each type of data processing. For eCommerce: contract (needed to fulfill orders), legitimate interests (fraud prevention, security), and consent (marketing emails). You must have a clearly accessible privacy policy, a cookie consent banner, data subject rights process, data processing agreements with service providers, and breach notification procedures.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for an eCommerce Store",
  description:
    "Step-by-step guide to creating a privacy policy for your online store",
  step: [
    {
      "@type": "HowToStep",
      name: "Identify all data your store collects",
      text: "List every data point: customer contact information, addresses, payment data (from processor), purchase history, browsing behavior, account data, reviews, and any data from loyalty or referral programs.",
    },
    {
      "@type": "HowToStep",
      name: "Document all service providers",
      text: "List every third-party service: payment processor, shipping carriers, email marketing tool, analytics, advertising pixels, live chat, fraud prevention, and any other tool that receives customer data.",
    },
    {
      "@type": "HowToStep",
      name: "Describe data uses and legal bases",
      text: "For each data category, describe the purpose (order fulfillment, marketing, fraud prevention) and your legal basis under GDPR if applicable (contract, consent, legitimate interests).",
    },
    {
      "@type": "HowToStep",
      name: "Add customer rights section",
      text: "Explain how customers can access their data, correct inaccuracies, request deletion, unsubscribe from marketing, and opt out of behavioral advertising.",
    },
    {
      "@type": "HowToStep",
      name: "Publish and link throughout the store",
      text: "Publish at a permanent URL and link from: website footer, checkout page near payment fields, signup forms, and any account creation page.",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "eCommerce Privacy Policy Template: Online Store Guide (2026)",
  description:
    "Complete guide to creating a privacy policy for your eCommerce store, covering customer data, payment processing, shipping, marketing, and GDPR/CCPA compliance.",
  datePublished: "2026-01-01",
  dateModified: "2026-03-27",
  author: {
    "@type": "Organization",
    name: "ultrafastutilities",
    url: "https://ultrafastutilities.com",
  },
  publisher: {
    "@type": "Organization",
    name: "ultrafastutilities",
    url: "https://ultrafastutilities.com",
  },
};

const breadcrumbSchema = {
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
      name: "eCommerce Privacy Policy Template",
      item: "https://ultrafastutilities.com/ecommerce-privacy-policy-template",
    },
  ],
};

export default function EcommercePrivacyPolicyTemplate() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ArrowRight className="w-3 h-3" />
              <span>eCommerce Privacy Policy Template</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-500/20 p-3 rounded-xl">
                <ShoppingCart className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">
                  eCommerce Privacy Policy Template
                </h1>
                <p className="text-slate-400 mt-1">
                  Online Store Privacy Guide 2026
                </p>
              </div>
            </div>
            <p className="text-xl text-slate-300 max-w-2xl">
              Online stores collect more personal data than almost any other website
              type. Payments, addresses, purchase history, remarketing - all of it
              needs to be disclosed. Here is your complete eCommerce privacy policy guide.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Last updated: March 2026
              </span>
              <span className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                13 min read
              </span>
            </div>
          </div>
        </section>

        {/* Author Trust Bar */}
        <section className="border-b bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>Reviewed by privacy attorneys</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" />
                <span>GDPR and CCPA compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-600" />
                <span>Used by 20,000+ online stores</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Shopify, WooCommerce, and more</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-4 lg:gap-12">
            {/* TOC Sidebar */}
            <aside className="lg:col-span-1">
              <TableOfContents sections={tocSections} />
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-3 space-y-12">
              {/* Featured Snippet Box */}
              <div id="why-ecommerce-needs" className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Why eCommerce Stores Need a Privacy Policy
                </h2>
                <p className="text-blue-800">
                  eCommerce stores collect highly sensitive personal data with every
                  transaction: full name, shipping address, email, phone number, purchase
                  history, and payment information. GDPR requires a privacy policy for
                  EU customers. CCPA requires one for California customers. Every major
                  payment processor (Stripe, PayPal, Square) and eCommerce platform
                  (Shopify, WooCommerce, BigCommerce) also requires a privacy policy in
                  their merchant terms.
                </p>
              </div>

              {/* Data Types */}
              <section id="data-types">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Data Types Collected by eCommerce Stores
                </h2>
                <p className="text-slate-700 mb-6">
                  Understanding what data your store collects is the foundation of your
                  privacy policy. Most online stores collect far more data than they
                  realize.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">Data Category</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Specific Data</th>
                        <th className="text-left p-3 font-semibold text-slate-700">How It's Collected</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Contact Information</td>
                        <td className="p-3 text-slate-600">Name, email, phone number</td>
                        <td className="p-3 text-slate-600">Checkout form, account creation</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Address Data</td>
                        <td className="p-3 text-slate-600">Shipping and billing addresses</td>
                        <td className="p-3 text-slate-600">Checkout form</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Payment Data</td>
                        <td className="p-3 text-slate-600">Card type, last 4 digits (processor holds full data)</td>
                        <td className="p-3 text-slate-600">Processed by Stripe/PayPal/etc.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Purchase History</td>
                        <td className="p-3 text-slate-600">Products, quantities, dates, order values</td>
                        <td className="p-3 text-slate-600">Platform order database</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Browsing Behavior</td>
                        <td className="p-3 text-slate-600">Pages viewed, products clicked, cart additions</td>
                        <td className="p-3 text-slate-600">Analytics, cookies, pixels</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Account Data</td>
                        <td className="p-3 text-slate-600">Username, password (hashed), preferences</td>
                        <td className="p-3 text-slate-600">Account creation</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Reviews and UGC</td>
                        <td className="p-3 text-slate-600">Product reviews, ratings, photos</td>
                        <td className="p-3 text-slate-600">Review forms, photo uploads</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900">Did you know?</p>
                      <p className="text-amber-800 mt-1">
                        Under GDPR, purchase history is considered personal data tied to
                        an individual. GDPR's "right to erasure" applies to it - customers
                        can request you delete their purchase history. This conflicts with
                        legal requirements to retain financial records. Your privacy policy
                        must address this tension by explaining which data you must retain
                        for legal reasons and for how long.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Payment Processing */}
              <section id="payment-processing">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Payment Processing Data Disclosures
                </h2>
                <p className="text-slate-700 mb-4">
                  Payment processing is one of the most sensitive data areas in
                  eCommerce. Your privacy policy must clearly explain how payment
                  data is handled.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-slate-600" />
                      What Stores Typically Hold
                    </h3>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      {[
                        "Billing name and address",
                        "Payment method type (Visa, Mastercard)",
                        "Last 4 digits of card (for reference)",
                        "Order amount and currency",
                        "Transaction ID from processor",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-5">
                    <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                      <Lock className="w-4 h-4 text-blue-600" />
                      What Processors Hold (Not You)
                    </h3>
                    <ul className="space-y-2 text-blue-800 text-sm">
                      {[
                        "Full credit/debit card numbers",
                        "Card CVV/security codes",
                        "Bank account details",
                        "Payment network tokens",
                        "Full payment authentication data",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Lock className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-slate-700 mt-4">
                  Your privacy policy should state that payment card details are not
                  stored on your servers and are processed securely by your payment
                  provider (name the provider: Stripe, PayPal, Square, etc.), and link
                  to their privacy policy.
                </p>
              </section>

              {/* Shipping and Logistics */}
              <section id="shipping-and-logistics">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Shipping and Logistics Data Sharing
                </h2>
                <p className="text-slate-700 mb-4">
                  Every time you ship an order, customer data is shared with third
                  parties: shipping carriers, fulfillment centers, returns processors.
                  Your privacy policy must disclose this.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">Party</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Data Shared</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Shipping carriers (UPS, FedEx, USPS)</td>
                        <td className="p-3 text-slate-600">Name, shipping address, phone</td>
                        <td className="p-3 text-slate-600">Package delivery</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Third-party fulfillment</td>
                        <td className="p-3 text-slate-600">Full order and address data</td>
                        <td className="p-3 text-slate-600">Order picking, packing, shipping</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Returns processors</td>
                        <td className="p-3 text-slate-600">Name, order details, reason for return</td>
                        <td className="p-3 text-slate-600">Return processing and refunds</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Customs/import authorities</td>
                        <td className="p-3 text-slate-600">Name, address, order contents, value</td>
                        <td className="p-3 text-slate-600">International shipment clearance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Marketing and Remarketing */}
              <section id="marketing-and-remarketing">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Marketing and Remarketing Disclosures
                </h2>
                <p className="text-slate-700 mb-4">
                  Most eCommerce stores run extensive marketing programs - email
                  campaigns, retargeting ads, loyalty programs, referral programs.
                  All must be disclosed in your privacy policy.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      type: "Email Marketing",
                      icon: <Package className="w-4 h-4 text-blue-500" />,
                      items: [
                        "Name the ESP (Klaviyo, Mailchimp, etc.)",
                        "Describe emails sent: order updates, marketing newsletters, abandoned cart",
                        "Explain segmentation based on purchase history",
                        "Provide unsubscribe instructions",
                      ],
                    },
                    {
                      type: "Remarketing and Behavioral Advertising",
                      icon: <Users className="w-4 h-4 text-blue-500" />,
                      items: [
                        "Disclose use of Facebook Pixel, Google Ads tags",
                        "Describe retargeting: showing ads to past website visitors",
                        "Explain Custom Audiences: uploading customer email lists to ad platforms",
                        "Provide opt-out links for interest-based advertising",
                      ],
                    },
                    {
                      type: "Loyalty Programs",
                      icon: <ShoppingCart className="w-4 h-4 text-blue-500" />,
                      items: [
                        "Explain what data is tracked for loyalty points",
                        "Describe how points and reward history is stored",
                        "Disclose if loyalty data is shared with partners",
                      ],
                    },
                  ].map((section) => (
                    <div key={section.type} className="border border-slate-200 rounded-xl p-5">
                      <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        {section.icon}
                        {section.type}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-slate-700 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900">Did you know?</p>
                      <p className="text-amber-800 mt-1">
                        Under GDPR, abandoned cart emails are considered marketing
                        communications and generally require explicit consent. In the EU,
                        you cannot send abandoned cart reminders based on legitimate
                        interests alone - you typically need prior consent. Disclosing your
                        abandoned cart practices in your privacy policy is essential.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cookies and Tracking */}
              <section id="cookies-and-tracking">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-slate-700 mb-4">
                  eCommerce sites use extensive cookie and tracking infrastructure.
                  Your privacy policy (and cookie banner for EU visitors) must disclose
                  all of it.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">Cookie Type</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Purpose</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Consent Required (GDPR)?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Session/Cart cookies</td>
                        <td className="p-3 text-slate-600">Keep items in cart, login state</td>
                        <td className="p-3 text-slate-600">No (strictly necessary)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Analytics cookies</td>
                        <td className="p-3 text-slate-600">Traffic analysis, user behavior</td>
                        <td className="p-3 text-slate-600">Yes</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Facebook Pixel</td>
                        <td className="p-3 text-slate-600">Conversion tracking, retargeting</td>
                        <td className="p-3 text-slate-600">Yes</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Google Ads tags</td>
                        <td className="p-3 text-slate-600">Ad conversion tracking, remarketing</td>
                        <td className="p-3 text-slate-600">Yes</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Live chat cookies</td>
                        <td className="p-3 text-slate-600">Chat session management</td>
                        <td className="p-3 text-slate-600">Depends on provider</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Template Sections */}
              <section id="template-sections">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  eCommerce Privacy Policy: Template Section Examples
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      heading: "Information We Collect",
                      text: "When you place an order, we collect your name, email address, phone number, billing address, and shipping address. We also collect your purchase history and account preferences if you create an account. Payment information is processed securely by Stripe - we do not store your full card details.",
                    },
                    {
                      heading: "Order Fulfillment and Shipping",
                      text: "To fulfill your order, we share your name and shipping address with our shipping carriers (UPS, FedEx, USPS, or DHL depending on your location). If we use a third-party fulfillment center, your order details are shared with them solely for the purpose of packing and shipping your order.",
                    },
                    {
                      heading: "Marketing Communications",
                      text: "With your permission, we may send you email newsletters, promotional offers, and new product announcements. We use Klaviyo to manage our email marketing. You can unsubscribe at any time by clicking the unsubscribe link in any email or emailing us at [email]. We may also show you targeted ads on Facebook and Google based on your browsing and purchase history.",
                    },
                  ].map((section) => (
                    <div key={section.heading} className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className="bg-slate-100 px-4 py-2">
                        <p className="font-semibold text-slate-700 text-sm">{section.heading}</p>
                      </div>
                      <div className="p-4">
                        <p className="text-slate-700 text-sm leading-relaxed">{section.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Platform Specifics */}
              <section id="platform-specifics">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Platform-Specific Privacy Policy Notes
                </h2>
                <p className="text-slate-700 mb-6">
                  Different eCommerce platforms have specific privacy policy
                  requirements and starting templates.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      platform: "Shopify",
                      note: "Shopify provides a privacy policy template in Settings > Policies. Use it as a starting point but customize for your specific tools and practices.",
                      href: "/privacy-policy-for-shopify",
                    },
                    {
                      platform: "WooCommerce",
                      note: "WordPress has built-in privacy policy tools. WooCommerce adds data about orders and customers - add this to your policy template.",
                      href: "/privacy-policy-for-woocommerce",
                    },
                    {
                      platform: "BigCommerce",
                      note: "BigCommerce stores require a privacy policy linked from the footer. Use BigCommerce's template or create your own customized policy.",
                      href: "/privacy-policy-for-bigcommerce",
                    },
                    {
                      platform: "Etsy",
                      note: "Etsy sellers need their own privacy policy for their shop. Etsy's policy covers the platform but not individual seller practices.",
                      href: "/privacy-policy-for-etsy",
                    },
                  ].map((item) => (
                    <Link
                      key={item.platform}
                      href={item.href}
                      className="border border-slate-200 rounded-xl p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-slate-800 group-hover:text-blue-700">
                          {item.platform}
                        </p>
                        <ArrowUpRight className="w-4 h-4 text-blue-500" />
                      </div>
                      <p className="text-slate-600 text-sm">{item.note}</p>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  5 Common eCommerce Privacy Policy Mistakes
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Not disclosing all marketing tools and pixels",
                      desc: "Most eCommerce stores run Facebook Pixel, Google Ads tags, and possibly Pinterest, TikTok, or Snapchat pixels. Each must be named in your privacy policy. A generic 'third-party advertising partners' reference is insufficient under GDPR.",
                    },
                    {
                      title: "Vague payment processing section",
                      desc: "Your policy must name your payment processor (Stripe, PayPal, Square) and explain that card details are not stored on your servers. Saying you 'use industry-standard security' without naming the processor is inadequate.",
                    },
                    {
                      title: "Missing shipping data sharing disclosure",
                      desc: "Every time you ship an order, you share customer data with carriers and potentially fulfillment centers. Each recipient of customer data must be disclosed in your privacy policy.",
                    },
                    {
                      title: "No GDPR cookie consent for EU customers",
                      desc: "If you use analytics cookies, advertising pixels, or remarketing tags, EU visitors must be presented with a cookie consent banner before these cookies can fire. Running these without consent is a GDPR violation.",
                    },
                    {
                      title: "No process for data deletion requests",
                      desc: "GDPR's right to erasure and CCPA's deletion right both apply to eCommerce customers. Your privacy policy must describe how customers can request deletion of their data and how you will handle these requests, including any data you must retain for legal compliance.",
                    },
                  ].map((mistake, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 bg-red-50 border border-red-100 rounded-xl"
                    >
                      <Ban className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-red-800">{mistake.title}</p>
                        <p className="text-red-700 text-sm mt-1">{mistake.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "Does an online store need a privacy policy?",
                      a: "Yes. eCommerce stores collect significant personal data - names, addresses, payment info, purchase history. This triggers GDPR (EU customers), CCPA (California customers), and requirements from payment processors and eCommerce platforms.",
                    },
                    {
                      q: "What must an eCommerce privacy policy include?",
                      a: "Customer data collected, how it's used, payment processor disclosure, shipping carrier data sharing, marketing and remarketing practices (Facebook Pixel, Google Ads), cookie disclosure, customer rights (access, deletion, opt-out), and contact information.",
                    },
                    {
                      q: "Does Shopify provide a privacy policy for my store?",
                      a: "Shopify provides a starting template in Settings > Policies, but you must customize it for your specific tools and practices. The template alone may not cover all your marketing pixels, loyalty programs, or fulfillment arrangements.",
                    },
                    {
                      q: "What data does an eCommerce store collect?",
                      a: "Typical eCommerce data: contact info (name, email, phone), shipping and billing addresses, payment info (processed by payment providers), purchase history, browsing behavior (cookies, analytics), account data, and product reviews if offered.",
                    },
                    {
                      q: "How do I handle customer data under GDPR for my online store?",
                      a: "You need a legal basis for each processing type: contract (order fulfillment), legitimate interests (fraud prevention), and consent (marketing). You need a privacy policy, cookie consent banner, data subject rights process, and data processing agreements with service providers.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl p-5">
                      <h3 className="font-semibold text-slate-800 flex items-start gap-2">
                        <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        {item.q}
                      </h3>
                      <p className="text-slate-600 mt-2 ml-7 text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Generate CTA */}
              <section
                id="generate"
                className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">
                  Generate Your eCommerce Privacy Policy
                </h2>
                <p className="text-slate-300 mb-6">
                  Create a complete eCommerce privacy policy in under 2 minutes.
                  Covers customer data, payments, shipping, marketing, and GDPR/CCPA
                  compliance.
                </p>
                <ul className="space-y-2 text-slate-300 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Payment processor and shipping disclosures
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Marketing and remarketing sections
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    GDPR and CCPA compliant
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Shopify, WooCommerce, BigCommerce ready
                  </li>
                </ul>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 text-lg">
                    Generate Free Privacy Policy
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </section>

              {/* Related Resources */}
              <section id="resources">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Privacy Policy for eCommerce",
                      desc: "Comprehensive eCommerce privacy guide",
                      href: "/privacy-policy-for-ecommerce",
                    },
                    {
                      title: "Privacy Policy for Shopify",
                      desc: "Shopify-specific privacy requirements",
                      href: "/privacy-policy-for-shopify",
                    },
                    {
                      title: "Privacy Policy for WooCommerce",
                      desc: "WooCommerce store privacy guide",
                      href: "/privacy-policy-for-woocommerce",
                    },
                    {
                      title: "Shopify Privacy Policy Template",
                      desc: "Customizable Shopify template",
                      href: "/shopify-privacy-policy-template",
                    },
                    {
                      title: "GDPR Privacy Policy Template",
                      desc: "EU-compliant privacy policy template",
                      href: "/gdpr-privacy-policy-template",
                    },
                    {
                      title: "CCPA Privacy Policy Example",
                      desc: "California consumer privacy compliance",
                      href: "/ccpa-privacy-policy-example",
                    },
                    {
                      title: "Privacy Policy for Stripe",
                      desc: "Stripe payment processor disclosures",
                      href: "/privacy-policy-for-stripe",
                    },
                    {
                      title: "Do I Need a Privacy Policy for an Online Store?",
                      desc: "When an online store needs a privacy policy",
                      href: "/do-i-need-a-privacy-policy-for-an-online-store",
                    },
                  ].map((resource) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className="flex items-start gap-3 p-4 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                    >
                      <ArrowUpRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <div>
                        <p className="font-medium text-slate-800 group-hover:text-blue-700">
                          {resource.title}
                        </p>
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
