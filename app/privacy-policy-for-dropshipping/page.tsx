import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  AlertTriangle,
  Ban,
  ChevronRight,
  FileText,
  Globe,
  Truck,
  Package,
  Clock,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Dropshipping Stores: What You Must Disclose (2026)",
  description:
    "Dropshipping stores share customer data with suppliers, carriers, and payment processors. Learn what your privacy policy must say about this data flow under GDPR, CCPA, and Shopify requirements.",
  keywords:
    "privacy policy for dropshipping, dropshipping privacy policy, dropshipping store privacy policy, dropshipping website privacy policy",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-dropshipping",
  },
  openGraph: {
    title: "Privacy Policy for Dropshipping Stores: What You Must Disclose (2026)",
    description:
      "Customer data in dropshipping flows from your store to payment processors, suppliers, and carriers. Your privacy policy must disclose this entire chain.",
    url: "https://ultrafastutilities.com/privacy-policy-for-dropshipping",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Dropshipping" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Dropshipping Stores: What You Must Disclose (2026)",
    description:
      "Customer data flows from your store to suppliers and carriers. Your privacy policy must cover this entire chain.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "what-makes-dropshipping-unique", title: "What Makes Dropshipping Unique" },
  { id: "customer-data-flow", title: "Customer Data Flow in Dropshipping" },
  { id: "gdpr-ccpa-requirements", title: "GDPR and CCPA Requirements" },
  { id: "supplier-requirements", title: "AliExpress and CJdropshipping Requirements" },
  { id: "payment-data", title: "Payment Data and PCI Compliance" },
  { id: "returns-and-refunds", title: "Returns and Refund Data" },
  { id: "email-marketing", title: "Email Marketing to Customers" },
  { id: "common-mistakes", title: "5 Common Mistakes" },
  { id: "faq", title: "Frequently Asked Questions" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does a dropshipping store need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dropshipping stores collect substantial personal data including names, email addresses, shipping addresses, and payment information. You share this data with suppliers and carriers, which makes the data flow more complex than a typical website. Shopify, WooCommerce, and other platforms also require privacy policies. GDPR applies if you serve EU customers, and CCPA may apply for California customers.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to disclose that I use AliExpress or CJdropshipping as my supplier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You do not need to reveal the specific supplier identity by name if it is a trade secret. However, you must disclose that customer order data including shipping addresses is shared with third-party suppliers to fulfill orders. GDPR requires you to disclose the categories of recipients of personal data, which would include 'order fulfillment partners' or 'suppliers.'",
      },
    },
    {
      "@type": "Question",
      name: "Is Shopify responsible for my store's privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Shopify processes data on your behalf as a data processor, but you are the data controller. You are legally responsible for having a compliant privacy policy, obtaining appropriate consent, and handling customer data rights requests. Shopify provides a privacy policy template as a starting point, but you must customize it to reflect your actual data practices including your specific suppliers and integrations.",
      },
    },
    {
      "@type": "Question",
      name: "What about shipping address data given to carriers like ePacket or DHL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your privacy policy must disclose that shipping address, name, and sometimes phone number are shared with third-party carriers for delivery. For international shipments, this may also involve customs authorities. If the carrier is based in a country outside the EU, you may also need to address the international data transfer requirements under GDPR.",
      },
    },
    {
      "@type": "Question",
      name: "How does GDPR apply to a US-based dropshipping store that ships to Europe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GDPR applies to any business that processes personal data of EU residents, regardless of where the business is located. If your dropshipping store ships to the EU, you must comply with GDPR. This means having a GDPR-compliant privacy policy, a lawful basis for processing customer data (typically contract performance for order fulfillment), and a mechanism for EU customers to exercise their data rights.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Privacy Policy for Dropshipping Stores: What You Must Disclose",
  description:
    "A complete guide to privacy policy requirements for dropshipping stores, covering supplier data sharing, customer data flow, GDPR, CCPA, and platform requirements.",
  dateModified: "2026-03-31",
  author: { "@type": "Organization", name: "Ultra Fast Utilities" },
  publisher: { "@type": "Organization", name: "Ultra Fast Utilities" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ultrafastutilities.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Privacy Policy for Dropshipping",
      item: "https://ultrafastutilities.com/privacy-policy-for-dropshipping",
    },
  ],
};

export default function DropshippingPrivacyPolicyPage() {
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
              <span className="text-slate-600">Privacy Policy for Dropshipping</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Package className="w-3.5 h-3.5" />
                Dropshipping Guide
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Dropshipping Stores
                </span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Dropshipping has a unique data challenge: your customers' personal information flows through your store, your payment processor, your supplier, and the shipping carrier. Your privacy policy must account for this entire chain.
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
                  <p className="text-sm font-semibold text-slate-800">Need your own policy?</p>
                  <p className="text-xs text-slate-500 mt-1">Generate in under 60 seconds</p>
                  <Link href="/generate"><Button size="sm" className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg">Generate Policy</Button></Link>
                </div>
              </div>
            </aside>
            <article className="max-w-[720px] prose prose-slate">
              <div className="not-prose flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 pb-8 border-b border-slate-200/60 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-xs flex-shrink-0">AK</div>
                  <span>Written by{" "}<span className="font-semibold text-slate-800">Anupam Kumar</span></span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <span>Last updated: April 2026</span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>12 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>

            {/* Featured snippet */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 mb-8 not-prose">
              <h2 className="text-blue-900 font-bold text-lg mb-3">Quick Answer: What a Dropshipping Privacy Policy Must Cover</h2>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li><strong>Supplier data sharing:</strong> Customer name and shipping address shared with fulfillment partners</li>
                <li><strong>Carrier disclosure:</strong> Shipping data shared with carriers (ePacket, DHL, USPS, etc.)</li>
                <li><strong>Payment processing:</strong> How Stripe, PayPal, or Shopify Payments handles card data</li>
                <li><strong>Order tracking:</strong> Third-party tracking systems and what they collect</li>
                <li><strong>Marketing:</strong> Whether purchase data is used for retargeting or email campaigns</li>
                <li><strong>International transfers:</strong> If suppliers are in China, this is an international data transfer under GDPR</li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="what-makes-dropshipping-unique">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What Makes Dropshipping Unique from a Privacy Perspective</h2>
              <p className="text-slate-700 mb-4">
                Traditional ecommerce stores fulfill orders from their own warehouse and have direct control over customer data throughout the order process. Dropshipping is fundamentally different: the store owner acts as an intermediary, passing customer orders and personal data to a third-party supplier who ships directly to the customer.
              </p>
              <p className="text-slate-700 mb-4">
                This means a single purchase involves customer data being processed by at least four distinct parties: your store, your payment processor, your supplier, and the shipping carrier. Under GDPR, each of these is either a data controller or a data processor in relation to the customer's data, and the entire chain must be disclosed.
              </p>
              <p className="text-slate-700 mb-4">
                For EU customers, sending personal data to a Chinese supplier (as most AliExpress-based dropshippers do) may constitute an international data transfer, which has specific requirements under GDPR Chapter V. This is a dimension of dropshipping privacy compliance that most store owners overlook entirely.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 not-prose">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Did you know?</p>
                    <p className="text-amber-800 text-sm">Shopify's default privacy policy template does not automatically account for supplier data sharing. If you are using AliExpress, CJdropshipping, or any fulfillment partner, you must manually add language disclosing that order data is shared with fulfillment partners and the geographic location of those partners.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="customer-data-flow">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Customer Data Flow in Dropshipping</h2>
              <p className="text-slate-700 mb-4">
                Understanding the data flow in your dropshipping operation is essential before you can write an accurate privacy policy. Here is how data typically moves through a dropshipping order:
              </p>

              <div className="space-y-3 mb-6 not-prose">
                {[
                  { step: "1", title: "Customer places an order on your store", desc: "Name, email address, shipping address, phone number, and payment information are collected. Your platform (Shopify, WooCommerce) stores this data." },
                  { step: "2", title: "Payment is processed", desc: "Card details go to your payment processor (Stripe, PayPal, Shopify Payments). The processor handles PCI DSS compliance; you typically never see raw card numbers." },
                  { step: "3", title: "Order is forwarded to the supplier", desc: "You (or your fulfillment app like DSers or AutoDS) sends the order to your supplier. This includes: customer name, shipping address, phone number, and product details." },
                  { step: "4", title: "Supplier ships the order", desc: "The supplier ships the item and shares the tracking number with the carrier. The carrier receives: customer name, address, phone number for delivery." },
                  { step: "5", title: "Post-purchase", desc: "You may send shipping confirmation emails, tracking updates, review requests, or marketing emails. Each of these involves additional processing of customer data." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 border border-slate-200 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Data Parties in a Typical Dropshipping Order</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Party</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Role</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Data Received</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Must Disclose?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3">Your Shopify / WooCommerce store</td>
                      <td className="border border-slate-200 p-3">Data Controller</td>
                      <td className="border border-slate-200 p-3">All customer data</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes - you are responsible</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Shopify (platform)</td>
                      <td className="border border-slate-200 p-3">Data Processor</td>
                      <td className="border border-slate-200 p-3">All store data</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes - name Shopify as a processor</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Payment processor (Stripe, PayPal)</td>
                      <td className="border border-slate-200 p-3">Data Controller (for payments)</td>
                      <td className="border border-slate-200 p-3">Payment and billing data</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes - disclose the processor used</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Fulfillment supplier (AliExpress, CJdropshipping)</td>
                      <td className="border border-slate-200 p-3">Data Processor</td>
                      <td className="border border-slate-200 p-3">Name, address, phone, order details</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes - critical for GDPR</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Shipping carrier (DHL, USPS, ePacket)</td>
                      <td className="border border-slate-200 p-3">Data Processor</td>
                      <td className="border border-slate-200 p-3">Name, address, phone number</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes - disclose the carrier(s) used</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Email marketing (Klaviyo, Mailchimp)</td>
                      <td className="border border-slate-200 p-3">Data Processor</td>
                      <td className="border border-slate-200 p-3">Email, name, purchase history</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes - if you use email marketing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section id="gdpr-ccpa-requirements">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">GDPR and CCPA Requirements for Dropshipping Stores</h2>
              <p className="text-slate-700 mb-4">
                If your store ships to the EU, GDPR applies. If you have significant California traffic and meet the revenue or data volume thresholds, CCPA applies. Many dropshipping stores operate globally and technically fall under both.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">GDPR Specifics for Dropshipping</h3>
              <p className="text-slate-700 mb-3">
                The most important GDPR consideration specific to dropshipping is the international data transfer issue. When you send a customer's shipping address to a supplier based in China or another country without an EU adequacy decision, you are making an international transfer of personal data. GDPR requires you to either:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
                <li>Have a legitimate transfer mechanism in place (Standard Contractual Clauses with the supplier), or</li>
                <li>Rely on the Article 49 derogation for transfers necessary for contract performance</li>
              </ul>
              <p className="text-slate-700 mb-4">
                For most small dropshipping operations, the Article 49(1)(b) derogation - that the transfer is necessary for the performance of a contract between the data subject and the controller - is the most practical approach. Your privacy policy must explicitly state that data is transferred to suppliers outside the EU/EEA for order fulfillment purposes.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 not-prose">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Did you know?</p>
                    <p className="text-amber-800 text-sm">Under GDPR, you must have a signed Data Processing Agreement (DPA) with any processor that handles EU customer data - including Shopify, Klaviyo, and your email marketing platform. Most large platforms provide these automatically, but it is your responsibility to ensure they are in place. Some platforms require you to actively accept the DPA in your account settings.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">CCPA Requirements for Dropshipping</h3>
              <p className="text-slate-700 mb-4">
                If your dropshipping store meets the CCPA thresholds, your privacy policy must include: a list of categories of personal information collected, whether you sell personal information (note: sharing customer data with suppliers for fulfillment is typically not considered a "sale" under CCPA), and a description of California consumer rights.
              </p>
            </section>

            {/* Section 4 */}
            <section id="supplier-requirements">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">AliExpress and CJdropshipping Supplier Privacy Considerations</h2>
              <p className="text-slate-700 mb-4">
                AliExpress and CJdropshipping are two of the most popular supplier platforms for dropshippers, but they have different privacy implications.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">AliExpress</h3>
              <p className="text-slate-700 mb-4">
                When you place orders on AliExpress on behalf of customers, you are sharing your customers' shipping data directly with an AliExpress seller - who is a third-party business, not AliExpress itself. This means you are sharing data with potentially many different entities depending on how many suppliers you use. Your privacy policy should describe this as sharing with "order fulfillment partners" and note that these partners operate under their own privacy practices.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">CJdropshipping and Other Integrated Platforms</h3>
              <p className="text-slate-700 mb-4">
                CJdropshipping, Zendrop, Spocket, and similar platforms act as intermediaries with their own terms and privacy policies. When you connect these platforms to your store, customer order data is automatically forwarded to them. Your privacy policy must disclose these integrations and the data they receive.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Platform</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Data They Receive</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Location</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">GDPR Transfer Consideration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3">AliExpress</td>
                      <td className="border border-slate-200 p-3">Name, address, phone, order details</td>
                      <td className="border border-slate-200 p-3">China</td>
                      <td className="border border-slate-200 p-3 text-red-700">International transfer - requires disclosure</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">CJdropshipping</td>
                      <td className="border border-slate-200 p-3">Name, address, phone, order details</td>
                      <td className="border border-slate-200 p-3">China</td>
                      <td className="border border-slate-200 p-3 text-red-700">International transfer - requires disclosure</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Spocket</td>
                      <td className="border border-slate-200 p-3">Name, address, phone, order details</td>
                      <td className="border border-slate-200 p-3">US / EU suppliers</td>
                      <td className="border border-slate-200 p-3 text-yellow-700">Depends on specific supplier location</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Zendrop</td>
                      <td className="border border-slate-200 p-3">Name, address, phone, order details</td>
                      <td className="border border-slate-200 p-3">US (mostly US suppliers)</td>
                      <td className="border border-slate-200 p-3 text-yellow-700">Lower risk but still requires disclosure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5 */}
            <section id="payment-data">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Payment Data and PCI Compliance</h2>
              <p className="text-slate-700 mb-4">
                Payment card data is among the most sensitive personal information you handle. Your privacy policy must explain how payment data is processed, but the good news is that most dropshipping store owners never actually handle raw card numbers - this is handled entirely by the payment processor.
              </p>
              <p className="text-slate-700 mb-4">
                Your policy should clearly state which payment processors you use (Stripe, PayPal, Shopify Payments, Apple Pay, Google Pay, etc.) and note that payment data is processed directly by these PCI DSS-compliant providers. You should also link to the payment processor's own privacy policy.
              </p>
              <p className="text-slate-700 mb-4">
                Do not claim PCI compliance for your store itself unless you have actually undergone a PCI assessment. The correct statement is that payment processing is handled by a PCI DSS-compliant processor, and that you do not store raw payment card data.
              </p>
            </section>

            {/* Section 6 */}
            <section id="returns-and-refunds">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Returns and Refund Data</h2>
              <p className="text-slate-700 mb-4">
                Returns in dropshipping are complicated because in most cases, customers cannot return items to the original overseas supplier economically. Many dropshippers handle returns by either providing a refund without requiring a return, or by asking customers to return items to a domestic address.
              </p>
              <p className="text-slate-700 mb-4">
                Either way, your privacy policy should address how return request data is handled. This includes: who the customer communicates with about the return (you, your customer service platform, or both), what documentation you may collect (photos of defective items), and how long you retain return-related data.
              </p>
              <p className="text-slate-700 mb-4">
                If you use a customer service platform like Gorgias, Zendesk, or Freshdesk, these are additional data processors that must be disclosed in your privacy policy. They receive customer emails, order information, and possibly dispute details.
              </p>
            </section>

            {/* Section 7 */}
            <section id="email-marketing">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Email Marketing to Dropshipping Customers</h2>
              <p className="text-slate-700 mb-4">
                Email marketing is a major revenue driver for dropshipping stores - abandoned cart sequences, post-purchase flows, and win-back campaigns. But it creates specific data handling obligations that must be addressed in your privacy policy.
              </p>
              <p className="text-slate-700 mb-4">
                Under GDPR, you need a lawful basis to send marketing emails to EU customers. Transactional emails (order confirmation, shipping notification) can be sent under contract performance. Marketing emails require explicit consent in the EU - collecting an email at checkout and pre-checking a "subscribe me to marketing" box does not constitute valid GDPR consent.
              </p>
              <p className="text-slate-700 mb-4">
                Under CAN-SPAM (US) and CASL (Canada), commercial emails must include a functional unsubscribe mechanism, your physical mailing address, and must honor unsubscribe requests promptly.
              </p>
              <p className="text-slate-700 mb-4">
                Your privacy policy must name the email marketing platform you use (Klaviyo, Omnisend, Mailchimp, etc.) and explain what data is shared with them (email address, name, purchase history, browsing behavior on your store) and how customers can unsubscribe.
              </p>
            </section>

            {/* 5 Common Mistakes */}
            <section id="common-mistakes">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5 Common Dropshipping Privacy Policy Mistakes</h2>
              <div className="space-y-3 mb-8 not-prose">
                {[
                  {
                    title: "Using Shopify's default policy template without customizing it for supplier data sharing",
                    desc: "Shopify provides a policy template, but it does not mention your specific suppliers or the international data transfers that occur when sending orders to China-based fulfillment companies. This creates a gap between what your policy says and what actually happens with customer data.",
                  },
                  {
                    title: "Not disclosing international data transfers for EU customers",
                    desc: "Sending customer shipping data to a Chinese supplier is an international data transfer under GDPR. Failing to disclose this in your privacy policy is a GDPR violation even if you have every other element right.",
                  },
                  {
                    title: "Claiming you never share customer data when you clearly do",
                    desc: "Statements like 'we never sell or share your data' are inaccurate for a dropshipping business because you must share customer data with suppliers and carriers to fulfill orders. Use precise language: 'we share order fulfillment data with suppliers and carriers as necessary to deliver your order.'",
                  },
                  {
                    title: "Not addressing email marketing consent separately from transactional emails",
                    desc: "Bundling marketing consent with the order confirmation email or pre-checking a newsletter signup at checkout is not valid GDPR consent. Your policy must clearly separate transactional and marketing communications and explain the legal basis for each.",
                  },
                  {
                    title: "Copying a competitor's privacy policy without adapting it to your actual tools and suppliers",
                    desc: "If a competitor uses Klaviyo and you use Omnisend, or they use PayPal and you use Stripe, a copied policy contains false statements about your actual data practices. Regulators consider inaccurate policies to be deceptive documents.",
                  },
                ].map((mistake, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <Ban className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-900 text-sm">{mistake.title}</p>
                      <p className="text-red-700 text-sm mt-1">{mistake.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 not-prose">
                {faqSchema.mainEntity.map((item, i) => (
                  <details key={i} className="border border-slate-200 rounded-lg">
                    <summary className="p-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50 list-none flex items-center justify-between">
                      {item.name}
                      <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    </summary>
                    <div className="px-4 pb-4 text-slate-700 text-sm leading-relaxed">
                      {item.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white not-prose">
              <div className="flex items-start gap-4">
                <Package className="w-10 h-10 text-blue-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Generate a Dropshipping Privacy Policy in Minutes</h2>
                  <p className="text-slate-300 mb-6">
                    Cover supplier data sharing, carrier disclosure, payment processing, and GDPR international transfers in one compliant document tailored to your dropshipping store.
                  </p>
                  <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold">
                    <Link href="/">Generate Your Privacy Policy Free</Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* Resource links */}
            <section className="mt-10 not-prose">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Related Resources</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { href: "/privacy-policy-for-ecommerce", label: "Privacy Policy for Ecommerce" },
                  { href: "/privacy-policy-for-shopify", label: "Privacy Policy for Shopify" },
                  { href: "/gdpr-privacy-policy", label: "GDPR Privacy Policy Requirements" },
                  { href: "/ccpa-privacy-policy", label: "CCPA Privacy Policy Requirements" },
                  { href: "/privacy-policy-fines-and-penalties", label: "Privacy Policy Fines and Penalties" },
                  { href: "/privacy-policy-for-small-business", label: "Privacy Policy for Small Business" },
                  { href: "/returns-policy-generator", label: "Returns Policy Generator" },
                  { href: "/privacy-policy-generator", label: "Free Privacy Policy Generator" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 text-sm text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    {link.label}
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
