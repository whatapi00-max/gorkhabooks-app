import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Online Betting Nepal Guide 2026 – How to Bet, Casino Guides, IPL Tips | GorkhaBooks Blog",
  description:
    "Nepal's #1 online betting guide blog. How to bet online in Nepal, eSewa vs Khalti payment guide, IPL 2026 predictions, Teen Patti strategy, beginner betting guide, withdrawal tips, site comparisons. GorkhaBooks expert articles – updated daily.",
  alternates: { canonical: "https://gorkha.com/blog" },
  openGraph: {
    title: "Online Betting Nepal Guide 2026 – How to Bet, IPL Tips, Casino Guides | GorkhaBooks Blog",
    description:
      "Complete online betting guides for Nepal players. IPL predictions, payment method guides, Teen Patti strategy, beginner tutorials, site comparisons. Updated daily by GorkhaBooks experts.",
    url: "https://gorkha.com/blog",
    type: "website",
    images: [{ url: "https://gorkha.com/opengraph-image", width: 1200, height: 630, alt: "GorkhaBooks Blog – Online Betting Nepal Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Betting Nepal Guide – GorkhaBooks Blog",
    description: "How to bet online in Nepal, IPL predictions, payment guides, casino strategies. Daily guides for Nepali players.",
  },
  keywords: [
    // STRATEGY ARTICLE TARGETS — informational long-tail
    "how to bet online in Nepal", "complete guide online betting Nepal",
    "online betting Nepal for beginners", "beginner guide to online betting Nepal",
    "Nepal sports betting for beginners", "Nepal betting sites comparison",
    "which betting site pays fast Nepal", "online betting age limit Nepal",
    "Nepal casino games explained", "how to verify betting account Nepal",
    // Payment guides — high conversion
    "eSewa vs Khalti betting Nepal", "best payment methods Nepal betting",
    "how to deposit on betting sites Nepal", "eSewa betting deposit Nepal",
    "Khalti deposit betting guide Nepal", "IME Pay betting Nepal guide",
    "fast withdrawal betting Nepal", "same day withdrawal Nepal",
    "withdraw winnings Nepal", "fastest payout betting Nepal",
    "minimum deposit betting Nepal", "bank transfer betting Nepal",
    "betting deposit methods Nepal", "no minimum deposit casino Nepal",
    // Sports guides
    "IPL betting Nepal 2026", "Nepal cricket betting guide",
    "IPL match prediction Nepal", "best time to bet on IPL Nepal",
    "World Cup 2026 betting Nepal", "Premier League betting Nepal guide",
    "football betting Nepal tips", "Nepal football betting tips",
    // Casino guides
    "how to play Teen Patti online Nepal", "Teen Patti strategy Nepal",
    "Aviator game Nepal strategy", "how to win aviator Nepal",
    "live casino Nepal review", "mobile betting Nepal guide",
    "best betting strategy Nepal",
    // Comparison & competitor content
    "best betting site Nepal vs MelBet", "MelBet Nepal alternative",
    "1xBet Nepal vs GorkhaBooks", "better than 1xBet Nepal",
    "Parimatch Nepal alternative", "safest betting platform Nepal comparison",
    "Nepal betting site reviews 2026", "top 10 betting sites Nepal 2026",
    "best odds Nepal comparison", "fastest payout vs competitors Nepal",
    // Safety guides
    "how to identify safe betting sites Nepal", "trusted betting site Nepal",
    "safest betting app Nepal 2026", "red flags betting sites Nepal",
    // Core betting tips
    "betting tips Nepal", "free betting tips Nepal", "IPL 2026 betting tips Nepal",
    "cricket betting tips Nepal", "football betting tips Nepal",
    "today match prediction Nepal", "cricket prediction Nepal",
    "football prediction Nepal", "sure bet nepal", "value bet nepal",
    "accumulator tips nepal", "parlay tips nepal",
    // Nepali
    "नेपाल बेटिङ टिप्स", "क्रिकेट भविष्यवाणी", "IPL भविष्यवाणी नेपाल",
    "अनलाइन बेटिङ गाइड नेपाल", "नेपालमा बेट कसरी गर्ने",
    // Brand + blog
    "GorkhaBooks blog", "GorkhaBooks tips", "GorkhaBooks predictions",
    "Nepal betting news", "Nepal sports news 2026",
    "best betting blog Nepal", "Gorkha gaming blog", "gorkha.com blog",
  ],
};

export default function BlogPage() {
  return <BlogPageClient />;
}
