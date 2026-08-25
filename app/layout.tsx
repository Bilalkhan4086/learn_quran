import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import JsonLd from "@/components/ui/JsonLd";
import { siteConfig } from "@/constants/common";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Learn Quran Online | Kanzul Quran Academy",
    template: "%s | Kanzul Quran Academy",
  },
  description: siteConfig.description,
  keywords: [
    "learn Quran online",
    "online Quran classes",
    "Quran tutor online",
    "Tajweed classes",
    "Hifz course online",
    "online Quran classes for kids",
    "female Quran teacher online",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteConfig.name,
    title: "Learn Quran Online | Kanzul Quran Academy",
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Quran Online | Kanzul Quran Academy",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: { url: "/images/logo.png", type: "image/png" },
    apple: "/images/logo.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  description: siteConfig.description,
  telephone: siteConfig.phoneDisplay,
  areaServed: "Worldwide",
  sameAs: Object.values(siteConfig.social),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneDisplay,
    contactType: "customer service",
    availableLanguage: ["English", "Urdu"],
    areaServed: "Worldwide",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-full bg-brand px-5 py-3 font-bold text-white transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </body>
    </html>
  );
}

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
