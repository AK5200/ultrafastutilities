import { Button } from "@/components/ui/button";
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
    </main>
  );
}
