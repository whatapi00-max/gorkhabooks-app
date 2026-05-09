import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import LiveTickerSection from "@/components/home/LiveTickerSection";
import TrendingGamesSection from "@/components/home/TrendingGamesSection";
import BonusBannerSection from "@/components/home/BonusBannerSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import HowToJoinSection from "@/components/home/HowToJoinSection";
import LiveMatchesSection from "@/components/home/LiveMatchesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import VIPSection from "@/components/home/VIPSection";
import StatsSection from "@/components/home/StatsSection";
import FAQSection from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title: "GorkhaBooks – नेपालको #१ अनलाइन गेमिङ, बेटिङ र इस्पोर्ट्स | gorkha.com",
  description:
    "GorkhaBooks (gorkha.com) — नेपालको #१ भरोसेमान्य अनलाइन गेमिङ प्लेटफर्म। क्रिकेट, फुटबल, लाइभ क्यासिनो र PUBG/Free Fire टुर्नामेन्ट। eSewa, Khalti बाट जम्मा गर्नुहोस्। १००% Welcome Bonus — NPR १०,००० सम्म। ५०,०००+ खेलाडीहरू। WhatsApp मा सित्तैमा जोडिनुहोस्!",
  alternates: { canonical: "https://gorkha.com" },
  keywords: [
    // Brand — नेपाली र अंग्रेजी
    "GorkhaBooks", "गोर्खाबुक्स", "gorkha.com", "Gorkha bet Nepal",
    "GorkhaBooks Nepal 2026", "Gorkha gaming Nepal", "गोर्खा गेमिङ",
    "नेपाल गेमिङ साइट", "Nepal gaming site 2026", "Gorkha online betting",
    // Sports betting
    "online betting Nepal", "cricket betting Nepal", "IPL 2026 betting Nepal",
    "football betting Nepal", "kabaddi betting Nepal", "live sports betting Nepal",
    "best odds cricket Nepal", "नेपालमा क्रिकेट बेटिङ", "नेपालमा अनलाइन बेटिङ",
    "WhatsApp betting Nepal", "NPR betting site", "eSewa betting Nepal",
    "Khalti sports betting", "trusted betting site Nepal",
    // Casino
    "live casino Nepal", "online casino Nepal", "Teen Patti Nepal",
    "Andar Bahar Nepal", "roulette Nepal", "नेपालमा लाइभ क्यासिनो",
    "real money casino Nepal", "नेपालमा क्यासिनो खेल्नुहोस्",
    // Esports
    "PUBG tournament Nepal", "Free Fire Nepal tournament", "BGMI Nepal",
    "Valorant Nepal", "esports Nepal 2026", "नेपाल इस्पोर्ट्स",
    "competitive gaming Nepal", "mobile gaming Nepal",
    // Community & local
    "Kathmandu gaming", "Pokhara betting", "Nepali gamers 2026",
    "नेपाली गेमर्स", "Nepal gamer community", "नेपालको भरोसेमान्य बेटिङ साइट",
    // Bonus & offers
    "100% welcome bonus Nepal", "NPR 10000 bonus", "free bonus betting Nepal",
    "नेपालमा बोनस बेटिङ", "eSewa Khalti casino bonus",
  ],
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LiveTickerSection />
      <TrendingGamesSection />
      <BonusBannerSection />
      <WhyChooseSection />
      <LiveMatchesSection />
      <HowToJoinSection />
      <StatsSection />
      <TestimonialsSection />
      <VIPSection />
      <FAQSection />
    </>
  );
}
