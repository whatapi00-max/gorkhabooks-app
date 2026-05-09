import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Betting Tips Nepal 2026 – Free Cricket & Football Predictions, Casino Guides | GorkhaBooks Blog",
  description:
    "Nepal's #1 free betting tips blog on GorkhaBooks (gorkha.com) – Gorkha Gaming Nepal. Daily IPL 2026 cricket predictions, football analysis, esports tips, casino guides for Nepali players. Cricket, Football, Kabaddi, PUBG, Free Fire betting tips. Win more!",
  alternates: { canonical: "https://gorkha.com/blog" },
  openGraph: {
    title: "Free Betting Tips Nepal 2026 – Cricket, Football & Casino Guides | GorkhaBooks Blog",
    description:
      "Daily free betting tips and predictions for Nepal players. IPL cricket picks, football analysis, casino strategy guides and winning secrets. Updated every day by GorkhaBooks experts.",
    url: "https://gorkha.com/blog",
    type: "website",
    images: [{ url: "https://gorkha.com/opengraph-image", width: 1200, height: 630, alt: "GorkhaBooks Blog – Betting Tips Nepal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Betting Tips Nepal – GorkhaBooks Blog",
    description: "Daily cricket & football predictions, casino guides for Nepal players. Win more with expert tips.",
  },
  keywords: [
    // Core betting search terms Nepal
    "betting tips Nepal", "free betting tips Nepal", "satta tips Nepal",
    "online satta Nepal", "Nepal satta bazar", "satta matka Nepal",
    "sports betting tips Nepal 2025", "best betting tips Nepal",
    // Cricket
    "cricket betting tips Nepal", "IPL 2025 betting tips", "IPL predictions 2025 Nepal",
    "today IPL match prediction", "cricket match prediction today Nepal",
    "cricket satta tips Nepal", "T20 betting tips Nepal",
    "Nepal Premier League betting tips", "India vs Pakistan prediction",
    "cricket odds today Nepal", "best cricket tipster Nepal",
    "who will win today match Nepal", "match winner prediction Nepal",
    // Football
    "football betting tips Nepal", "Premier League predictions Nepal",
    "Champions League betting tips", "today football prediction Nepal",
    "football satta tips Nepal", "football match prediction today",
    "La Liga betting tips Nepal", "football odds Nepal",
    // Casino
    "casino tips Nepal", "casino strategy Nepal", "Teen Patti tips Nepal",
    "how to win casino Nepal", "online casino guide Nepal",
    "live casino strategy Nepal", "roulette tips Nepal", "blackjack strategy Nepal",
    "slot tricks Nepal", "Andar Bahar tips Nepal",
    // Kabaddi & Esports
    "kabaddi betting tips Nepal", "PKL predictions Nepal",
    "esports betting tips Nepal", "BGMI betting Nepal", "Valorant predictions Nepal",
    // How-to & intent queries
    "how to bet online Nepal", "how to start betting Nepal",
    "how to win betting Nepal", "betting kaise kare Nepal",
    "online betting kaise khele Nepal", "Nepal ma betting kasari garne",
    "betting guide beginners Nepal", "best sports to bet Nepal",
    // Payments & bonuses
    "eSewa betting tips", "Khalti betting guide", "betting bonus Nepal",
    "free bet Nepal", "welcome bonus Nepal", "no deposit bonus Nepal",
    "betting withdrawal Nepal", "fastest payout Nepal",
    // Brand + blog
    "GorkhaBooks blog", "GorkhaBooks tips", "GorkhaBooks predictions",
    "Nepal betting news", "Nepal sports news 2026",
    "best betting blog Nepal", "trusted tipster Nepal",
    "Gorkha gaming blog", "Gorkha gaming tips", "gorkha.com blog",
    "sports betting tips Nepal 2026", "IPL 2026 betting tips Nepal",
    "नेपाल बेटिङ टिप्स", "क्रिकेट भविष्यवाणी", "IPL भविष्यवाणी नेपाल",
  ],
};

export default function BlogPage() {
  return <BlogPageClient />;
}
