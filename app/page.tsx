import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ShieldCheck, Zap, FileText, CheckCircle, X } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[85vh] px-4 py-20 relative overflow-hidden">
        {/* Premium Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-5xl w-full text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent leading-tight pb-4">
            Don't Guess Your Privacy Policy. Get It Right for $5.
          </h1>
          <p className="text-lg md:text-xl text-blue-600/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Free generators and AI tools often miss critical compliance details.
            Get a professionally structured, GDPR & CCPA-ready Privacy Policy, Cookie Policy, and Terms, built to reduce common legal mistakes and ready to ship instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/generate">
              <Button size="lg" className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/30">
                Create Your Policy Now
              </Button>
            </Link>
          </div>
          <p className="text-base md:text-lg text-blue-600/80 mt-6">
            Free preview available. One time payment. Instant access. No subscription.
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-medium text-blue-900 italic mb-6 leading-relaxed pb-3">
            "This is the most reliable privacy policy generator I have used."
          </blockquote>
          <p className="text-xl text-blue-700/80">
            Sarah Chen, Startup Founder • App Store review 2024
          </p>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent leading-tight pb-4">
            Structured around real privacy compliance standards
          </h2>
          <p className="text-xl md:text-2xl text-blue-800/90 max-w-3xl mx-auto leading-relaxed">
            Our documents are built using widely accepted privacy disclosure practices, including GDPR and CCPA requirements, cookie classification, data retention, and user rights handling. Instead of generic text from AI or free generators, you get a clearly structured foundation designed to reduce common compliance mistakes and help you publish with confidence.
          </p>
        </div>
      </section>

      {/* Main Value Proposition */}
      <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-blue-200/50 bg-white/70 backdrop-blur-md hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3 text-blue-900 pb-2">Generate Policies in Real-Time</CardTitle>
                <CardDescription className="text-base text-blue-800/80">
                  Answer a few straightforward questions and instantly generate your Privacy Policy, Terms of Service, and Cookie Policy. No waiting, no back and forth. Just clearly structured documents you can publish immediately.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-blue-200/50 bg-white/70 backdrop-blur-md hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3 text-blue-900 pb-2">GDPR & CCPA-Ready Compliance</CardTitle>
                <CardDescription className="text-base text-blue-800/80">
                  Each document includes jurisdiction aware sections for GDPR and CCPA or CPRA, along with cookie classification, data retention disclosures, and data controller and processor clarity. You get compliance aware documents, not generic AI text.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-blue-200/50 bg-white/70 backdrop-blur-md hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3 text-blue-900 pb-2">Stress-free: ultrafastutilities is here just for you</CardTitle>
                <CardDescription className="text-base text-blue-800/80">
                  Privacy compliance can feel confusing and risky when using free tools or copied templates. ultrafastutilities gives you a structured and reliable starting point so you can move forward without second guessing whether something important was missed.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-blue-200/50 bg-white/70 backdrop-blur-md hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3 text-blue-900 pb-2">Premium Document Suite</CardTitle>
                <CardDescription className="text-base text-blue-800/80">
                  Generate a full set of Privacy Policy, Terms of Service, and Cookie Policy documents. Includes lawful basis disclosures, user rights handling, third party service examples, and clear data retention timelines in one place.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-blue-50/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent pb-3">
            Why choose ultrafastutilities over generic generators?
          </h2>
          <p className="text-xl text-center text-blue-800/90 mb-12">
            Don't risk legal compliance with generic AI-generated policies.
          </p>

          {/* Comparison Table */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-blue-200/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-blue-200/50 bg-blue-50/30">
                    <th className="text-left p-6 text-lg font-semibold text-blue-900"></th>
                    <th className="text-center p-6 text-lg font-semibold text-blue-900">
                      ultrafastutilities
                    </th>
                    <th className="text-center p-6 text-lg font-semibold text-blue-900">
                      ChatGPT or Google generated
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blue-100/50">
                    <td className="p-6 font-medium text-blue-900">GDPR and CCPA coverage</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="w-6 h-6 text-blue-600 mx-auto" />
                      <p className="text-xs text-blue-600/70 mt-1">Jurisdiction aware sections for GDPR and CCPA or CPRA</p>
                    </td>
                    <td className="p-6 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                      <p className="text-xs text-red-600/70 mt-1">Often generic and may miss regional requirements</p>
                    </td>
                  </tr>
                  <tr className="border-b border-blue-100/50">
                    <td className="p-6 font-medium text-blue-900">Cookie classification</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="w-6 h-6 text-blue-600 mx-auto" />
                      <p className="text-xs text-blue-600/70 mt-1">Clearly defined categories with explanations</p>
                    </td>
                    <td className="p-6 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                      <p className="text-xs text-red-600/70 mt-1">Vague or missing classifications</p>
                    </td>
                  </tr>
                  <tr className="border-b border-blue-100/50">
                    <td className="p-6 font-medium text-blue-900">Data retention disclosures</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="w-6 h-6 text-blue-600 mx-auto" />
                      <p className="text-xs text-blue-600/70 mt-1">Specific and realistic retention timeframes</p>
                    </td>
                    <td className="p-6 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                      <p className="text-xs text-red-600/70 mt-1">Commonly omitted or overly broad</p>
                    </td>
                  </tr>
                  <tr className="border-b border-blue-100/50">
                    <td className="p-6 font-medium text-blue-900">Compliance risk</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="w-6 h-6 text-blue-600 mx-auto" />
                      <p className="text-xs text-blue-600/70 mt-1">Structured to reduce common compliance mistakes</p>
                    </td>
                    <td className="p-6 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                      <p className="text-xs text-red-600/70 mt-1">Higher risk due to missing disclosures</p>
                    </td>
                  </tr>
                  <tr className="border-b border-blue-100/50">
                    <td className="p-6 font-medium text-blue-900">Third party services</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="w-6 h-6 text-blue-600 mx-auto" />
                      <p className="text-xs text-blue-600/70 mt-1">Named examples such as Google Analytics and Stripe</p>
                    </td>
                    <td className="p-6 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                      <p className="text-xs text-red-600/70 mt-1">Generic references like analytics or advertising</p>
                    </td>
                  </tr>
                  <tr className="border-b border-blue-100/50">
                    <td className="p-6 font-medium text-blue-900">Controller and processor roles</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="w-6 h-6 text-blue-600 mx-auto" />
                      <p className="text-xs text-blue-600/70 mt-1">Clear distinction between data controller and processors</p>
                    </td>
                    <td className="p-6 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                      <p className="text-xs text-red-600/70 mt-1">Frequently unclear or not addressed</p>
                    </td>
                  </tr>
                  <tr className="border-b border-blue-100/50">
                    <td className="p-6 font-medium text-blue-900">International data transfers</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="w-6 h-6 text-blue-600 mx-auto" />
                      <p className="text-xs text-blue-600/70 mt-1">Safeguards and transfer mechanisms explained</p>
                    </td>
                    <td className="p-6 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                      <p className="text-xs text-red-600/70 mt-1">Rarely covered properly</p>
                    </td>
                  </tr>
                  <tr className="border-b border-blue-100/50">
                    <td className="p-6 font-medium text-blue-900">User rights handling</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="w-6 h-6 text-blue-600 mx-auto" />
                      <p className="text-xs text-blue-600/70 mt-1">Clear contact method and response process</p>
                    </td>
                    <td className="p-6 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                      <p className="text-xs text-red-600/70 mt-1">Rights listed without procedural guidance</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-blue-900">Overall quality</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="w-6 h-6 text-blue-600 mx-auto" />
                      <p className="text-xs text-blue-600/70 mt-1">Professionally structured and ready to publish</p>
                    </td>
                    <td className="p-6 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                      <p className="text-xs text-red-600/70 mt-1">Requires heavy review and manual correction</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/10 to-blue-400/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent pb-4">
            Stop guessing. Get your privacy policies done properly.
          </h2>
          <p className="text-xl md:text-2xl text-blue-800/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            For a one time payment of $4.99, generate a complete Privacy Policy, Cookie Policy, and Terms of Service with clear structure and key compliance considerations built in. Publish with confidence and move forward without worrying whether something important was missed.
          </p>
          <Link href="/generate">
            <Button size="lg" className="text-lg px-10 py-6 h-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30 mb-4">
              Get ultrafastutilities Now
            </Button>
          </Link>
          <p className="text-lg text-blue-700/80 mb-2">
            One time payment. Instant access. No subscription.
          </p>
          <p className="text-sm text-blue-600/70">
            Secure checkout. Documents provided as structured templates, not legal advice.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-50/50 backdrop-blur-sm border-t border-blue-200/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-blue-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-blue-700/80 hover:text-blue-900 text-sm transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-blue-700/80 hover:text-blue-900 text-sm transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-blue-700/80 hover:text-blue-900 text-sm transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/generate" className="text-blue-700/80 hover:text-blue-900 text-sm transition-colors">
                    Generate Policy
                  </Link>
                </li>
                <li>
                  <span className="text-blue-700/80 text-sm">Help Center</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-4">Legal Documents</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy-for-websites" className="text-blue-700/80 hover:text-blue-900 text-sm transition-colors">
                    Privacy Policy for Websites
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy-for-websites" className="text-blue-700/80 hover:text-blue-900 text-sm transition-colors">
                    Cookie Policy for Websites
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy-for-apps" className="text-blue-700/80 hover:text-blue-900 text-sm transition-colors">
                    Privacy Policy for Apps
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-4">Legal Compliance</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/gdpr-privacy-policy-template" className="text-blue-700/80 hover:text-blue-900 text-sm transition-colors">
                    GDPR Privacy Policy Template
                  </Link>
                </li>
                <li>
                  <Link href="/ccpa-privacy-policy-example" className="text-blue-700/80 hover:text-blue-900 text-sm transition-colors">
                    CCPA Privacy Policy Example
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy-for-saas" className="text-blue-700/80 hover:text-blue-900 text-sm transition-colors">
                    Privacy Policy for SaaS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-200/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-700/80 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} ultrafastutilities. All rights reserved.
              </p>
              <p className="text-blue-700/80 text-sm">
                Legal documents for everyone
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
