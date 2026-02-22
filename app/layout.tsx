import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Privacy Policy Generator - ultrafastutilities",
    description: "Generate a professional privacy policy in 60 seconds.",
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ultrafastutilities.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ultrafastutilities",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ultrafastutilities",
    url: siteUrl,
    publisher: {
      "@type": "Organization",
      name: "ultrafastutilities",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
      },
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
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
      <body className={`${inter.className} bg-gradient-to-b from-blue-50 via-white to-blue-50/50 text-blue-900 min-h-screen antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
