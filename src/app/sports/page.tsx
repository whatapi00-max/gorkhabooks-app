import type { Metadata } from "next";
import SportsPageClient from "./SportsPageClient";

export const metadata: Metadata = {
  title: "Sports Betting Nepal 2026 – Best Betting Site Nepal | Cricket, IPL, Football | GorkhaBooks",
  description:
    "GorkhaBooks – नेपालको सबैभन्दा राम्रो स्पोर्ट्स बेटिङ साइट। IPL 2026, क्रिकेट, Premier League, Champions League, Kabaddi। eSewa, Khalti, IME Pay। Best odds Nepal। Nepal bookmaker – 1000+ daily matches, live betting, instant payout.",
  alternates: { canonical: "https://gorkha.com/sports" },
  openGraph: {
    title: "Best Sports Betting Site Nepal 2026 – Cricket, IPL, Football | GorkhaBooks",
    description: "Bet on 1000+ daily matches at GorkhaBooks – Nepal's #1 trusted & legal sports betting platform. IPL, Premier League, PUBG, Free Fire. eSewa & Khalti.",
    url: "https://gorkha.com/sports",
    type: "website",
    images: [{ url: "https://gorkha.com/opengraph-image", width: 1200, height: 630, alt: "GorkhaBooks Sports Betting Nepal" }],
  },
  keywords: [
    // Core sports betting Nepal
    "sports betting Nepal", "best betting site Nepal", "online betting Nepal",
    "live betting Nepal", "Nepal online bookmaker", "best odds Nepal",
    "instant betting Nepal", "legal betting Nepal",
    // Cricket Betting Nepal
    "cricket betting Nepal", "IPL betting Nepal 2026", "Nepal cricket betting",
    "T20 World Cup betting Nepal", "IPL match prediction Nepal",
    "Nepal vs India betting", "live cricket betting Nepal",
    "cricket odds Nepal", "ICC tournament betting Nepal",
    "Nepal cricket betting guide", "best time to bet on IPL Nepal",
    "best cricket betting site Nepal",
    // Football Betting Nepal
    "football betting Nepal", "EPL betting Nepal", "World Cup 2026 betting Nepal",
    "Nepal football match betting", "Champions League betting Nepal",
    "Premier League Nepal betting", "live football betting Nepal",
    "Nepal football betting tips", "La Liga betting nepal", "UCL betting nepal",
    "football prediction nepal", "football satta nepal",
    // Other Sports Nepal
    "kabaddi betting Nepal", "tennis betting Nepal", "basketball betting Nepal",
    "esports betting Nepal", "volleyball betting Nepal",
    "Pro Kabaddi bet nepal", "kabaddi match prediction nepal",
    "UFC betting nepal", "MMA betting nepal", "boxing betting nepal",
    // Esports & gaming
    "Gorkha esports", "Gorkha esports Nepal",
    "PUBG tournament Nepal", "Free Fire tournament Nepal", "BGMI tournament Nepal",
    "Valorant Nepal community", "esports team Nepal",
    "Nepal esports tournaments", "online esports Nepal",
    "competitive online gaming Nepal",
    "top esports games 2026 Nepal", "best platform for PUBG tournaments in Nepal",
    "how to join esports tournaments in Nepal",
    "Gorkha gaming", "Gorkha gaming platform", "Nepal Gorkha gaming",
    "online gaming Nepal", "real money gaming Nepal",
    // Betting tools
    "betting tips nepal", "free bet tips nepal", "today match prediction nepal",
    "cricket prediction nepal", "sure bet nepal", "value bet nepal",
    "accumulator tips nepal", "best betting strategy Nepal",
    "betting odds explained nepal", "handicap tip nepal",
    // Payments for sports
    "eSewa betting Nepal", "Khalti betting Nepal", "IME Pay betting Nepal",
    "fast withdrawal betting Nepal", "instant payout betting Nepal",
  ],
};

export default function SportsPage() {
  return <SportsPageClient />;
}
