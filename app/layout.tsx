import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import FloatingNav from "@/components/FloatingNav";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "Danish Samsudin | Business Executive & High-Performance Adventurer",
  description: "Professional portfolio showcasing business impact, achievements, and adventurous lifestyle",
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
