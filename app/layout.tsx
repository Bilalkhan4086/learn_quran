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
  title: "Home | Kaizen Teams",
  description:
    "The dental industry’s one and only business management ecosytem.",
  icons: ["/kaizen.png"],
  openGraph: {
    title: "Home | Kaizen Teams",
    description:
      "The dental industry’s one and only business management ecosytem.",
    images: ["/kaizen.png"],
  },
  twitter: {
    title: "Home | Kaizen Teams",
    description:
      "The dental industry’s one and only business management ecosytem.",
    images: ["/kaizen.png"],
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
