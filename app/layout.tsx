import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free Privacy Policy Generator - ultrafastutilities",
  description: "Generate a professional privacy policy in 60 seconds. Free privacy policy generator with Terms of Service and Cookie Policy. No credit card required.",
  keywords: ["privacy policy generator", "free privacy policy", "terms of service generator", "cookie policy", "GDPR compliance"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ultrafastutilities.com"),
  openGraph: {
    title: "Free Privacy Policy Generator - ultrafastutilities",
    description: "Generate a professional privacy policy in 60 seconds. Free privacy policy generator with Terms of Service and Cookie Policy.",
    url: "https://ultrafastutilities.com",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ultrafastutilities - Privacy Policy Generator"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Privacy Policy Generator - ultrafastutilities",
    description: "Generate a professional privacy policy in 60 seconds.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  
  return (
    <html lang="en">
      <head>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="bg-gradient-to-b from-blue-50 via-white to-blue-50/50 text-blue-900 min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
