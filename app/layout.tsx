import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import { Metadata } from "next";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kanzul Quran Online Academy - Learn Quran Online | Online Quran Classes",
  description:
    "Learn Quran online with expert tutors at Kanzul Quran Online Academy. Online Quran classes for kids and adults, Tajweed courses, Hifz, Nazra, and Islamic education. One-to-one interactive Quran learning with qualified male and female teachers. Free trial class available.",
  keywords: [
    "online quran learning",
    "learn quran online",
    "online quran classes",
    "quran teacher online",
    "online quran academy",
    "quran classes online",
    "online quran classes for kids",
    "female quran teacher online",
    "tajweed classes online",
    "hifz course online",
    "nazra quran online",
    "online quran tutor",
    "quran learning online",
    "islamic education online",
    "quran recitation online"
  ],
  authors: [{ name: "Kanzul Quran Online Academy" }],
  creator: "Kanzul Quran Online Academy",
  publisher: "Kanzul Quran Online Academy",
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
  icons: ["/quran.png"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://kanzulquran.com",
    title: "Kanzul Quran Online Academy - Learn Quran Online | Online Quran Classes",
    description:
      "Learn Quran online with expert tutors at Kanzul Quran Online Academy. Online Quran classes for kids and adults, Tajweed courses, Hifz, Nazra, and Islamic education. Free trial class available.",
    siteName: "Kanzul Quran Online Academy",
    images: [
      {
        url: "/images/quran.png",
        width: 1200,
        height: 630,
        alt: "Kanzul Quran Online Academy - Learn Quran Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanzul Quran Online Academy - Learn Quran Online",
    description:
      "Learn Quran online with expert tutors. Online Quran classes for kids and adults, Tajweed courses, Hifz, Nazra, and Islamic education. Free trial class available.",
    images: ["/images/quran.png"],
    creator: "@KanzulQuranOnlineAcademy",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://kanzulquran.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
