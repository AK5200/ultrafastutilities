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
  Mail,
  Globe,
  Scale,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Do I Need a Privacy Policy If I Only Collect Emails? Yes — Here's Why | ultrafastutilities",
  description:
    "If you collect email addresses through a newsletter, contact form, or lead magnet, you legally need a privacy policy. Learn which laws require it and what to include.",
  keywords:
    "do i need a privacy policy for collecting emails, privacy policy for email collection, privacy policy for newsletter, email marketing privacy policy, do i need a privacy policy for mailchimp, privacy policy for email list",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-collecting-emails",
  },
};

const tocSections = [
  { id: "short-answer", title: "The Short Answer" },
  { id: "laws", title: "Laws That Require It" },
  { id: "scenarios", title: "Common Scenarios" },
  { id: "what-to-include", title: "What to Include" },
  { id: "email-tools", title: "Email Tools & Disclosure" },
  { id: "mistakes", title: "Mistakes to Avoid" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function DoINeedPrivacyPolicyForCollectingEmailsPage() {
  return (
    <>
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
                Privacy Policy for Collecting Emails
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Mail className="w-3.5 h-3.5" />
                Email Collection Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Do I Need a Privacy Policy If I{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Only Collect Emails?
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Yes. If you collect a single email address — through a
                newsletter signup, contact form, or lead magnet — multiple
                laws require you to have a privacy policy. Here&apos;s exactly
                why and what it needs to say.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For bloggers, newsletter creators, freelancers, and anyone
                with an email signup form.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Globe className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Website Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/gdpr-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Scale className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                GDPR Template
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/cookie-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Cookie Policy Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
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
                    Need a privacy policy?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Covers email collection, GDPR &amp; CCPA
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
              {/* Section 1: The Short Answer */}
              <section id="short-answer" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      The Short Answer: Yes, You Do
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    An email address is personal data. The moment someone types
                    their email into your signup form, you&apos;re collecting
                    personally identifiable information (PII). It doesn&apos;t
                    matter that you&apos;re not asking for their name, phone
                    number, or credit card — an email address alone is enough
                    to identify a person.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Under the GDPR, CCPA, CalOPPA, CAN-SPAM, and nearly every
                    other privacy law worldwide, collecting an email address
                    triggers a legal obligation to tell the person:
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {[
                      "What you're collecting (their email address)",
                      "Why you're collecting it (newsletter, updates, marketing)",
                      "Who else gets access to it (your email service provider)",
                      "How long you keep it (until they unsubscribe? Indefinitely?)",
                      "How they can delete it or opt out",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-base leading-7 text-slate-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-[10px]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-xl border border-blue-100/80 bg-blue-50/30 p-5">
                    <p className="text-sm font-semibold text-slate-800">
                      The rule is simple
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      If you collect any personal data from any person, you need
                      a privacy policy. An email address is personal data. There
                      is no minimum threshold — even one email address triggers
                      the requirement.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Laws That Require It */}
              <section id="laws" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Which Laws Require a Privacy Policy for Email Collection
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-6">
                  <p className="text-base leading-7 text-slate-700">
                    Multiple laws apply — and they&apos;re based on where your
                    subscribers are located, not where you are. If your site is
                    publicly accessible, your subscribers could be anywhere.
                  </p>

                  {[
                    {
                      title: "GDPR (EU / UK)",
                      desc: "The strictest law. Requires explicit consent before collecting emails from EU/UK residents. You must state the purpose of collection, name your email service provider, explain the legal basis for processing, and provide a way to withdraw consent. Fines for non-compliance reach 4% of annual revenue or €20 million.",
                      link: "/gdpr-privacy-policy-template",
                      linkText: "GDPR privacy policy guide",
                    },
                    {
                      title: "CAN-SPAM Act (United States)",
                      desc: "Requires that commercial emails include your physical address, a clear unsubscribe mechanism, and honest subject lines. While CAN-SPAM itself doesn't mandate a privacy policy, the FTC interprets email collection as requiring privacy disclosure — and violating CAN-SPAM carries penalties up to $51,744 per email.",
                      link: null,
                      linkText: null,
                    },
                    {
                      title: "CCPA / CPRA (California)",
                      desc: "If you collect emails from California residents, they have the right to know what data you collect, request deletion, and opt out of the sale of their information. Your privacy policy must disclose these rights. Applies even if your business isn't in California.",
                      link: "/ccpa-privacy-policy-example",
                      linkText: "CCPA privacy policy guide",
                    },
                    {
                      title: "CalOPPA (California)",
                      desc: "Any website that collects personal information from California residents must post a privacy policy. Since you can't control who visits your site, this effectively applies to every website with an email form. No revenue threshold — even personal blogs need to comply.",
                      link: null,
                      linkText: null,
                    },
                    {
                      title: "CASL (Canada)",
                      desc: "Canada's Anti-Spam Legislation requires express consent before sending commercial emails to Canadian residents. You must identify yourself, provide contact information, and include an unsubscribe mechanism. Penalties reach $10 million for businesses.",
                      link: null,
                      linkText: null,
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <Scale className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          {item.desc}
                          {item.link && (
                            <>
                              {" "}
                              <Link
                                href={item.link}
                                className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                              >
                                Read our {item.linkText}
                                <ArrowUpRight className="w-3 h-3" />
                              </Link>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Common Scenarios */}
              <section id="scenarios" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Scenarios That Require a Privacy Policy
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    You might think &ldquo;I&apos;m just collecting emails&rdquo;
                    — but there are many ways this happens, and each one
                    triggers privacy obligations.
                  </p>

                  {[
                    {
                      title: "Newsletter signup form",
                      desc: "The most obvious case. A popup, embedded form, or sidebar widget where visitors enter their email to receive updates. The email goes to your email service (Mailchimp, ConvertKit, Beehiiv, etc.), which is a third-party processor you must disclose.",
                    },
                    {
                      title: "Contact form",
                      desc: "Even a simple \"Get in touch\" form that asks for a name and email. The data goes to your inbox or a form service like Formspree, Typeform, or Google Forms — all third parties processing personal data.",
                    },
                    {
                      title: "Lead magnets and freebies",
                      desc: "\"Enter your email to download this free PDF\" is data collection. You're collecting an email address in exchange for content. If you also add them to a marketing list, you need consent for that separately under GDPR.",
                    },
                    {
                      title: "Waitlist or early access signups",
                      desc: "Launching a product and collecting emails for a waitlist? That's personal data collection with implied future marketing, which requires clear disclosure of intent.",
                    },
                    {
                      title: "E-commerce checkout",
                      desc: "When customers enter their email during checkout for order confirmations, you're collecting personal data tied to purchase history. This has additional requirements if you later use those emails for marketing.",
                    },
                    {
                      title: "Comment systems",
                      desc: "Blog comment forms that ask for an email address (even if it's not displayed publicly) are collecting personal data. WordPress, Disqus, and similar systems all store this information.",
                    },
                    {
                      title: "Account registration",
                      desc: "If users create accounts with their email address — for a membership site, course platform, or community — you're collecting and storing personal data that requires privacy disclosure.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: What to Include */}
              <section id="what-to-include" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Your Privacy Policy Needs to Say About Email
                      Collection
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Even if email is the only data you collect, your privacy
                    policy still needs to cover these areas. Most of these are
                    required by law, not optional best practices.
                  </p>

                  {[
                    {
                      title: "What you collect",
                      desc: "State explicitly that you collect email addresses. If your form also asks for a first name, that's additional personal data. Be specific — don't say \"we may collect personal information\" when you can say \"we collect your email address.\"",
                    },
                    {
                      title: "How you collect it",
                      desc: "Name the collection method: newsletter signup form, contact form, checkout process, popup, etc. If you use embedded forms from third-party tools, mention that the form is provided by that service.",
                    },
                    {
                      title: "Why you collect it",
                      desc: "State the purpose clearly: to send weekly newsletters, to respond to inquiries, to send order confirmations, to provide product updates. Under GDPR, each purpose needs its own legal basis (usually consent for marketing).",
                    },
                    {
                      title: "Your email service provider",
                      desc: "If you use Mailchimp, ConvertKit, Beehiiv, Kit, SendGrid, or any other email tool, you must disclose that their email address is shared with this third-party service. Include a link to the provider's privacy policy.",
                    },
                    {
                      title: "Data retention",
                      desc: "How long do you keep their email? Until they unsubscribe? For a specific period after their last interaction? Indefinitely? State it clearly. Under GDPR, you cannot keep data longer than necessary for its stated purpose.",
                    },
                    {
                      title: "How to unsubscribe",
                      desc: "Explain how someone can remove their email from your list — typically an unsubscribe link in every email, plus a direct request option via email or contact form. Under GDPR, this must be as easy as subscribing.",
                    },
                    {
                      title: "Data security",
                      desc: "Briefly describe how you protect stored email addresses. Your email service provider handles most of this (encryption, secure servers), but acknowledge that you take reasonable measures to protect subscriber data.",
                    },
                    {
                      title: "Subscriber rights",
                      desc: "Under GDPR: right to access, rectify, erase, restrict processing, data portability, and object. Under CCPA: right to know, delete, and opt out. List the rights that apply and explain how subscribers can exercise them.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Email Tools & Disclosure */}
              <section id="email-tools" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Email Marketing Tools You Need to Disclose
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    When someone enters their email on your site, it typically
                    goes to a third-party email service — not just your inbox.
                    These services store, process, and use subscriber data on
                    your behalf. Your privacy policy must disclose this.
                  </p>

                  <div className="mt-6 rounded-xl border border-slate-200/80 bg-white overflow-hidden">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-200/60 bg-slate-50/50">
                          <th className="text-left p-4 font-medium text-slate-500 text-xs uppercase tracking-wider">
                            Tool
                          </th>
                          <th className="text-left p-4 font-medium text-slate-500 text-xs uppercase tracking-wider">
                            What It Collects
                          </th>
                          <th className="text-left p-4 font-medium text-slate-500 text-xs uppercase tracking-wider">
                            Disclose in Policy
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            tool: "Mailchimp",
                            collects:
                              "Email, name, IP address, open/click tracking",
                            disclose: "Third-party processor, analytics cookies",
                          },
                          {
                            tool: "ConvertKit / Kit",
                            collects:
                              "Email, name, tags, open/click data",
                            disclose: "Third-party processor, behavioral tracking",
                          },
                          {
                            tool: "Beehiiv",
                            collects:
                              "Email, engagement data, referral tracking",
                            disclose: "Third-party processor, analytics",
                          },
                          {
                            tool: "SendGrid",
                            collects:
                              "Email, delivery logs, engagement metrics",
                            disclose: "Third-party processor, transactional data",
                          },
                          {
                            tool: "Substack",
                            collects:
                              "Email, payment info (for paid), reading data",
                            disclose: "Third-party platform, financial data",
                          },
                        ].map((row, i) => (
                          <tr
                            key={row.tool}
                            className={
                              i < 4
                                ? "border-b border-slate-100"
                                : ""
                            }
                          >
                            <td className="p-4 font-medium text-slate-800">
                              {row.tool}
                            </td>
                            <td className="p-4 text-slate-600">
                              {row.collects}
                            </td>
                            <td className="p-4 text-slate-600">
                              {row.disclose}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    Most email tools also set{" "}
                    <Link
                      href="/cookie-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      cookies
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    for tracking opens and clicks. If your email service
                    embeds tracking pixels or uses cookies, your privacy policy
                    (and cookie policy) needs to cover this too.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    If you also use Google Analytics on your site, that&apos;s
                    an additional third-party service collecting visitor data
                    through cookies — even from people who never enter their
                    email. This requires separate disclosure.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: Mistakes to Avoid */}
              <section id="mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Mistakes to Avoid When Collecting Emails
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <div className="rounded-xl border border-red-200/60 bg-red-50/30 p-5">
                    <div className="flex gap-3 mb-4">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-base leading-7 text-slate-700">
                        <strong className="text-slate-900">
                          These mistakes
                        </strong>{" "}
                        can result in fines, subscriber complaints, and
                        deliverability problems with email services.
                      </p>
                    </div>

                    <div className="space-y-5 mt-5">
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          No privacy policy link near the signup form
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Under GDPR, you need to link to your privacy policy
                          at the point of data collection — right next to the
                          email form. A footer link on another page
                          isn&apos;t enough. Add a small &ldquo;We respect your
                          privacy.{" "}
                          <span className="text-blue-600">
                            Read our privacy policy
                          </span>
                          &rdquo; link below every signup form.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Pre-checked consent boxes
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Under GDPR, consent must be freely given. A
                          pre-checked &ldquo;Subscribe to our newsletter&rdquo;
                          checkbox during checkout is not valid consent. The
                          user must actively opt in.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Sending marketing emails without clear consent
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Someone filling out a contact form to ask a question
                          has not consented to receiving your newsletter.
                          Adding them to your marketing list without separate,
                          explicit consent violates GDPR and CAN-SPAM.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          No unsubscribe option
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Every marketing email must include an unsubscribe
                          link. CAN-SPAM requires it. GDPR requires it. Your
                          email service provider likely includes it
                          automatically, but check. Also: unsubscribe requests
                          must be processed within 10 business days under
                          CAN-SPAM.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Using a{" "}
                          <Link
                            href="/chatgpt-privacy-policy-risks"
                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                          >
                            ChatGPT-generated policy
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          AI-generated privacy policies often produce vague,
                          generic text that doesn&apos;t name your specific
                          email service provider, doesn&apos;t cover the
                          right laws for your audience, and goes out of date
                          as regulations change.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

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
                    <Mail className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate Your Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Answer a few questions about how you collect and use email
                      addresses, and get a privacy policy that covers your data
                      practices — plus a Cookie Policy and Terms of Service.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Privacy Policy — $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Privacy + Cookie + ToS</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR and CCPA
                      requirements. Not legal advice.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

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

                <div className="pl-0 sm:pl-[52px] space-y-8">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      I only have a small blog with 50 subscribers. Do I still
                      need a privacy policy?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Yes. There is no minimum subscriber count that exempts you
                      from privacy laws. CalOPPA and GDPR apply regardless of
                      how many people you collect data from. One subscriber is
                      enough to trigger the requirement.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      What if I use Mailchimp&apos;s built-in privacy features?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Mailchimp (and similar services) provide GDPR-friendly
                      signup forms and unsubscribe handling, but they don&apos;t
                      generate a privacy policy for your website. You still need
                      your own privacy policy that discloses Mailchimp as a
                      third-party processor and explains your data practices.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Can I just add a line saying &ldquo;we won&apos;t share
                      your email&rdquo; instead of a full policy?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      No. A one-line promise doesn&apos;t satisfy GDPR, CCPA,
                      or CalOPPA requirements. These laws require specific
                      disclosures about data types, purposes, third-party
                      sharing, retention periods, and user rights. A proper
                      privacy policy covers all of these. Plus, if you use
                      Mailchimp, ConvertKit, or any email tool, you{" "}
                      <em>are</em> sharing their email with a third party.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Does a privacy policy need to be a separate page?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Yes. Best practice (and CalOPPA requirement) is a
                      dedicated, publicly accessible page — typically at
                      yoursite.com/privacy-policy — linked from your website
                      footer. Don&apos;t bury it inside another page, put it
                      behind a login, or host it as a PDF.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      What&apos;s the penalty for collecting emails without a
                      privacy policy?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Penalties vary by jurisdiction. GDPR fines reach up to 4%
                      of annual revenue or €20 million. CAN-SPAM penalties reach
                      $51,744 per violating email. CCPA fines are $2,500 per
                      unintentional violation and $7,500 per intentional one.
                      Beyond fines, email platforms like Mailchimp may
                      suspend your account for non-compliance. Learn more
                      about{" "}
                      <Link
                        href="/what-happens-without-a-privacy-policy"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        the consequences of not having a privacy policy
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Related Resources */}
              <section id="resources" className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/privacy-policy-for-websites",
                      icon: Globe,
                      title: "Privacy Policy for Websites",
                      desc: "Complete website privacy policy guide",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: Scale,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance requirements",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      icon: ShieldCheck,
                      title: "CCPA Privacy Policy Example",
                      desc: "California compliance guide",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      icon: FileText,
                      title: "Cookie Policy for Websites",
                      desc: "Cookie tracking and consent",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "Risks Without a Privacy Policy",
                      desc: "Legal and financial consequences",
                    },
                    {
                      href: "/chatgpt-privacy-policy-risks",
                      icon: FileText,
                      title: "ChatGPT Privacy Policy Risks",
                      desc: "Why AI-generated policies fail",
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
