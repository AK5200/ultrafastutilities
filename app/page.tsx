import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-20">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Generate a Privacy Policy in 60 Seconds
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Create professional, legally compliant privacy policies for your website. 
            Free to use, with premium options for watermark-free documents.
          </p>
          <Link href="/generate">
            <Button size="lg" className="text-lg px-8 py-6">
              Create Your Policy
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Why Choose PolicyDraft?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">⚡</div>
                <CardTitle>Fast</CardTitle>
                <CardDescription>
                  Generate a complete privacy policy in under 60 seconds. No legal expertise required.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">⚖️</div>
                <CardTitle>Legal Compliance</CardTitle>
                <CardDescription>
                  Our policies are designed to meet GDPR, CCPA, and other major privacy regulations.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🆓</div>
                <CardTitle>Free Option</CardTitle>
                <CardDescription>
                  Start for free with a basic policy. Upgrade to remove watermarks and unlock premium features.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">📄</div>
                <CardTitle>Multiple Formats</CardTitle>
                <CardDescription>
                  Download as text, PDF, or get all three documents: Privacy Policy, Terms of Service, and Cookie Policy.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
