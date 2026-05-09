import type { Metadata } from "next";
import SportsPageClient from "./SportsPageClient";

export const metadata: Metadata = {
  title: "Sports Betting & Esports Nepal – Cricket, IPL, Football, PUBG, Free Fire | GorkhaBooks",
  description:
    "Bet on 1000+ daily sports matches & esports at GorkhaBooks (gorkha.com) – Nepal's #1 Gorkha Gaming platform. IPL Cricket, Premier League, Kabaddi, PUBG, Free Fire & Valorant. Best odds. eSewa & Khalti deposits. Join FREE on WhatsApp!",
  alternates: { canonical: "https://gorkha.com/sports" },
  openGraph: {
    title: "Sports Betting Nepal 2026 – Cricket, Football, Esports | GorkhaBooks",
    description: "Bet on 1000+ daily matches at GorkhaBooks – Nepal's #1 trusted & legal sports betting platform. IPL, Premier League, PUBG, Free Fire. eSewa & Khalti.",
    url: "https://gorkha.com/sports",
    type: "website",
    images: [{ url: "https://gorkha.com/opengraph-image", width: 1200, height: 630, alt: "GorkhaBooks Sports Betting Nepal" }],
  },
  keywords: [
    // Sports betting
    "sports betting Nepal", "cricket betting Nepal", "IPL betting Nepal",
    "football betting Nepal", "kabaddi betting Nepal", "live betting Nepal",
    "best sports odds Nepal", "GorkhaBooks sports", "bet on IPL Nepal",
    "online satta cricket Nepal", "Nepal Premier League betting",
    "tennis betting Nepal", "1000 matches daily Nepal",
    // Esports & gaming
    "esports betting Nepal", "Gorkha esports", "Gorkha esports Nepal",
    "Gorkha esports tournament", "PUBG tournament Nepal",
    "Free Fire tournament Nepal", "BGMI tournament Nepal",
    "Valorant Nepal community", "esports team Nepal",
    "Nepal esports tournaments", "online esports Nepal",
    "competitive online gaming Nepal", "gaming ladder Nepal",
    "esports gaming Nepal", "ranked gaming Nepal",
    "top esports games 2026 Nepal", "best platform for PUBG tournaments in Nepal",
    "how to join esports tournaments in Nepal",
    "Gorkha gaming", "Gorkha gaming platform", "Nepal Gorkha gaming",
    "online gaming Nepal", "real money gaming Nepal",
  ],
};

export default function SportsPage() {
  return <SportsPageClient />;
}
