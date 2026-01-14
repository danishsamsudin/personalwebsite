import Hero from "@/components/Hero";
import BusinessSection from "@/components/BusinessSection";
import AchievementsSection from "@/components/AchievementsSection";
import StudiesSection from "@/components/StudiesSection";
import AdventurerSection from "@/components/AdventurerSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BusinessSection />
      <AchievementsSection />
      <StudiesSection />
      <AdventurerSection />
    </main>
  );
}
