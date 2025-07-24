import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Page/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HSC Academy - এইচএসসি একাডেমি | বাংলাদেশের সেরা অনলাইন শিক্ষা প্ল্যাটফর্ম",
  description: "HSC Academy তে পাবেন উচ্চ মাধ্যমিক পর্যায়ের সকল বিষয়ের বিনামূল্যে অনলাইন ক্লাস, নোট, প্রশ্ন সমাধান এবং মক টেস্ট। Join HSC Academy for free online classes, notes and mock tests.",
  keywords: ["HSC", "একাডেমি", "অনলাইন ক্লাস", "বাংলাদেশ শিক্ষা", "উচ্চ মাধ্যমিক", "online education", "bangladesh"],
  authors: [{ name: "HSC Academy Team" }],
  creator: "HSC Academy",
  publisher: "HSC Academy",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    alternateLocale: "en_US",
    url: "https://hscacademy.com",
    title: "HSC Academy - এইচএসসি একাডেমি",
    description: "বাংলাদেশের সেরা অনলাইন শিক্ষা প্ল্যাটফর্ম",
    siteName: "HSC Academy",
    images: [
      {
        url: "/hsc-og-image.png",
        width: 1200,
        height: 630,
        alt: "HSC Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HSC Academy - এইচএসসি একাডেমি",
    description: "বাংলাদেশের সেরা অনলাইন শিক্ষা প্ল্যাটফর্ম",
    images: ["/hsc-twitter-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/hsc.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/hsc.png", 
        sizes: "16x16",
        type: "image/png",
      }
    ],
    apple: "/hsc.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
