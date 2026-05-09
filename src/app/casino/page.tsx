import type { Metadata } from "next";
import CasinoPageClient from "./CasinoPageClient";

export const metadata: Metadata = {
  title: "Live Casino Nepal – Teen Patti, Roulette, Blackjack, Slots | GorkhaBooks gorkha.com",
  description:
    "Play Live Casino on GorkhaBooks (gorkha.com) – Nepal's #1 Gorkha Gaming platform. Live Teen Patti, Andar Bahar, Roulette, Blackjack VIP, Baccarat & 100s of Slots. NPR 10 min bet. Mega Jackpot NPR 2,50,000. eSewa & Khalti deposits. Join FREE on WhatsApp!",
  alternates: { canonical: "https://gorkha.com/casino" },
  openGraph: {
    title: "Live Casino Nepal – Teen Patti, Roulette, Slots | GorkhaBooks",
    description: "Nepal's #1 trusted & legal live casino. Teen Patti, Andar Bahar, Roulette, Blackjack, Slots & Jackpot NPR 2,50,000. eSewa & Khalti. Join GorkhaBooks!",
    url: "https://gorkha.com/casino",
    type: "website",
    images: [{ url: "https://gorkha.com/opengraph-image", width: 1200, height: 630, alt: "GorkhaBooks Live Casino Nepal" }],
  },
  keywords: [
    "live casino Nepal", "online casino Nepal", "Teen Patti online Nepal",
    "Andar Bahar Nepal", "roulette Nepal", "blackjack Nepal",
    "baccarat Nepal", "slot games Nepal", "jackpot Nepal",
    "GorkhaBooks casino", "live dealer casino Nepal", "casino NPR",
    "casino eSewa Khalti", "best online casino Nepal 2026",
    "Gorkha gaming casino", "Gorkha casino Nepal", "Teen Patti live Nepal",
    "online slots Nepal", "real money casino Nepal", "casino jackpot Nepal",
    "live Teen Patti Nepal 2026", "best casino site Nepal",
    "नेपाल लाइभ क्यासिनो", "टिन पत्ती अनलाइन",
  ],
};

export default function CasinoPage() {
  return <CasinoPageClient />;
}
