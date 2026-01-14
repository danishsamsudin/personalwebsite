import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import FloatingNav from "@/components/FloatingNav";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

const siteUrl =
  typeof process.env.NEXT_PUBLIC_SITE_URL === "string"
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "https://danishsamsudin.com";

export const metadata: Metadata = {
  title: "Danish Samsudin | Business Executive & High-Performance Adventurer",
  description: "Professional portfolio showcasing business impact, achievements, and adventurous lifestyle",
  keywords: ["business executive", "entrepreneur", "high-performance", "adventurer", "Danish Samsudin", "Domu Match", "Tradelink International", "bol.com", "ESN Breda"],
  authors: [{ name: "Danish Samsudin" }],
  creator: "Danish Samsudin",
  publisher: "Danish Samsudin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/`,
    title: "Danish Samsudin | Business Executive & High-Performance Adventurer",
    description: "Professional portfolio showcasing business impact, achievements, and adventurous lifestyle",
    siteName: "Danish Samsudin",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Danish Samsudin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danish Samsudin | Business Executive & High-Performance Adventurer",
    description: "Professional portfolio showcasing business impact, achievements, and adventurous lifestyle",
    images: [`${siteUrl}/og-image.png`],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${dancingScript.variable}`}>
      <body className={`${GeistSans.className} antialiased`}>
        {children}
        <FloatingNav />
      </body>
    </html>
  );
}
