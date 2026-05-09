import type { Metadata } from "next";
import PromotionsPageClient from "./PromotionsPageClient";

export const metadata: Metadata = {
  title: "Betting Bonuses Nepal – 100% Welcome Bonus NPR 10,000 | GorkhaBooks gorkha.com",
  description:
    "Claim Nepal's best bonuses at GorkhaBooks (gorkha.com) – Gorkha Gaming Nepal. 100% Welcome Bonus up to NPR 10,000, 10% weekly cashback, NPR 500 referral bonus, daily login rewards & VIP program. eSewa & Khalti accepted. Join FREE on WhatsApp!",
  alternates: { canonical: "https://gorkha.com/promotions" },
  openGraph: {
    title: "Betting Bonuses Nepal – 100% Welcome Bonus NPR 10,000 | GorkhaBooks",
    description: "Nepal's best betting bonuses at GorkhaBooks. 100% Welcome Bonus, weekly cashback, referral & VIP rewards. eSewa & Khalti. Join FREE on WhatsApp!",
    url: "https://gorkha.com/promotions",
    type: "website",
    images: [{ url: "https://gorkha.com/opengraph-image", width: 1200, height: 630, alt: "GorkhaBooks Bonuses Nepal" }],
  },
  keywords: [
    "betting bonus Nepal", "welcome bonus Nepal", "100% deposit bonus Nepal",
    "free bonus betting Nepal", "cashback betting Nepal",
    "referral bonus Nepal", "VIP rewards betting Nepal",
    "NPR 10000 bonus", "eSewa bonus", "Khalti bonus Nepal",
    "GorkhaBooks promotions", "best bonus betting site Nepal 2026",
    "Gorkha gaming bonus", "daily login bonus Nepal", "reload bonus Nepal",
    "free betting Nepal", "casino bonus Nepal 2026",
    "नेपाल बोनस", "वेलकम बोनस नेपाल",
  ],
};

export default function PromotionsPage() {
  return <PromotionsPageClient />;
}
