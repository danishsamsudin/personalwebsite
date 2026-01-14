import Hero from "@/components/Hero";
import BusinessSection from "@/components/BusinessSection";
import AchievementsSection from "@/components/AchievementsSection";
import StudiesSection from "@/components/StudiesSection";
import AdventurerSection from "@/components/AdventurerSection";
import Footer from "@/components/Footer";

export default function Home() {
  const siteUrl =
    typeof process.env.NEXT_PUBLIC_SITE_URL === "string"
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "https://danishsamsudin.com";
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Danish Samsudin",
    jobTitle: "Business Executive & High-Performance Adventurer",
    description: "Scaling businesses across global markets while pushing personal limits in sports and high-stakes adventures.",
    url: siteUrl,
    sameAs: [
      // Add your social media profiles here when available
      // "https://linkedin.com/in/danishsamsudin",
      // "https://twitter.com/danishsamsudin",
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "Domu Match",
        jobTitle: "Founder & Product Developer",
      },
      {
        "@type": "Organization",
        name: "Tradelink International",
        jobTitle: "Founder & Managing Director",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Hero />
        <BusinessSection />
        <AchievementsSection />
        <StudiesSection />
        <AdventurerSection />
      </main>
      <Footer />
    </>
  );
}
