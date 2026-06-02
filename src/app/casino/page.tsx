import type { Metadata } from "next";
import CasinoPageClient from "./CasinoPageClient";

export const metadata: Metadata = {
  title: "Online Casino Nepal 2026 – Teen Patti, Aviator, Slots, Live Casino | GorkhaBooks",
  description:
    "GorkhaBooks – नेपालको #१ अनलाइन क्यासिनो। Teen Patti, Andar Bahar, Aviator, Roulette, Blackjack, Slots। eSewa, Khalti, IME Pay। Real money casino Nepal – fast withdrawal, NPR minimum deposit. Best casino site Nepal 2026.",
  alternates: { canonical: "https://www.gorkha777.com/casino" },
  openGraph: {
    title: "Online Casino Nepal 2026 – Teen Patti, Aviator, Slots | GorkhaBooks",
    description: "Nepal's #1 trusted & legal live casino. Teen Patti, Andar Bahar, Aviator, Roulette, Blackjack, Slots & Jackpot NPR 2,50,000. eSewa & Khalti. Join GorkhaBooks!",
    url: "https://www.gorkha777.com/casino",
    type: "website",
    images: [{ url: "https://www.gorkha777.com/opengraph-image", width: 1200, height: 630, alt: "GorkhaBooks Live Casino Nepal" }],
  },
  keywords: [
    // Core casino Nepal
    "online casino Nepal", "best casino site Nepal", "real money casino Nepal",
    "live casino Nepal", "best casino Nepal", "licensed casino Nepal",
    "online casino minimum deposit Nepal", "fast withdrawal casino Nepal",
    "online casino with eSewa Nepal", "live casino Nepal review",
    "Nepal casino games explained",
    // Card Games Nepal
    "Teen Patti online Nepal", "Andar Bahar online Nepal", "online poker Nepal",
    "live Teen Patti Nepal", "Rummy online Nepal", "Dragon Tiger Nepal",
    "teen patti real money nepal", "andar bahar real cash nepal",
    "live teen patti Nepal 2026", "how to play Teen Patti online Nepal",
    // Table Games Nepal
    "online roulette Nepal", "live blackjack Nepal", "online slots Nepal",
    "baccarat Nepal", "casino roulette Nepal", "blackjack Nepal online",
    "live dealer Nepal", "live baccarat nepal", "live roulette nepal",
    "blackjack real money nepal", "baccarat real money nepal",
    // Crash & Instant Games Nepal
    "aviator game Nepal", "crash game Nepal", "mines game Nepal",
    "aviator bet Nepal", "aviator win Nepal", "aviator real money Nepal",
    "JetX nepal", "spaceman game nepal", "plinko nepal", "dice game nepal",
    "fish shooting game Nepal", "arcade games Nepal",
    // Slots Nepal
    "slot games Nepal", "jackpot slots Nepal", "progressive jackpot nepal",
    "free spins slots nepal", "video slot nepal", "megaways nepal",
    "big win slots nepal", "mega jackpot nepal",
    // Payments
    "casino eSewa Nepal", "casino Khalti Nepal", "IME Pay casino Nepal",
    "eSewa casino deposit Nepal", "casino eSewa Khalti",
    "GorkhaBooks casino", "Gorkha gaming casino", "Gorkha casino Nepal",
    "नेपाल लाइभ क्यासिनो", "टिन पत्ती अनलाइन",
    "नेपाली क्यासिनो", "अनलाइन क्यासिनो नेपाल",
  ],
};

export default function CasinoPage() {
  return <CasinoPageClient />;
}
