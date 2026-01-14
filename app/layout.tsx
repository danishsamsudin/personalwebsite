import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import FloatingNav from "@/components/FloatingNav";

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
    <html lang="en" className="dark">
      <body className={`${GeistSans.className} antialiased`}>
        {children}
        <FloatingNav />
      </body>
    </html>
  );
}
