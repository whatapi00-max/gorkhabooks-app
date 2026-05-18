import type { Metadata } from "next";
import PromotionsPageClient from "./PromotionsPageClient";

export const metadata: Metadata = {
  title: "Deposit Bonus Nepal – eSewa Khalti Betting Bonus 2026 | GorkhaBooks Promotions",
  description:
    "GorkhaBooks – नेपालको सबैभन्दा राम्रो बेटिङ बोनस। 100% Welcome Bonus NPR 10,000। eSewa, Khalti, IME Pay deposit bonus। Weekly cashback, referral bonus, VIP rewards। Deposit bonus Nepal betting – claim instantly via WhatsApp.",
  alternates: { canonical: "https://gorkha.com/promotions" },
  openGraph: {
    title: "Betting Deposit Bonus Nepal – eSewa & Khalti Casino Bonus 2026 | GorkhaBooks",
    description: "Nepal's best betting bonuses – 100% welcome bonus, eSewa Khalti deposit bonus, weekly cashback, referral & VIP rewards. Join GorkhaBooks for free!",
    url: "https://gorkha.com/promotions",
    type: "website",
    images: [{ url: "https://gorkha.com/opengraph-image", width: 1200, height: 630, alt: "GorkhaBooks Bonuses Nepal" }],
  },
  keywords: [
    // Deposit & payment bonus — HIGH CONVERSION
    "deposit bonus Nepal betting", "eSewa betting Nepal bonus",
    "Khalti betting Nepal bonus", "IME Pay betting Nepal",
    "eSewa casino deposit Nepal", "Khalti casino deposit Nepal",
    "betting sites that accept Khalti", "online casino with eSewa Nepal",
    "minimum deposit betting Nepal", "no minimum deposit casino Nepal",
    // Bonus types
    "betting bonus Nepal", "welcome bonus Nepal", "100% deposit bonus Nepal",
    "free bonus betting Nepal", "cashback betting Nepal",
    "referral bonus Nepal", "VIP rewards betting Nepal",
    "NPR 10000 bonus", "first deposit bonus Nepal",
    "reload bonus Nepal", "daily login bonus Nepal",
    "no deposit free bet nepal", "free bet Nepal",
    "matched bet bonus nepal", "accumulator bonus nepal",
    "bet promo code nepal", "loyalty bet bonus nepal",
    "vip bet nepal", "high roller bonus nepal",
    "weekly bet bonus nepal", "daily free bet nepal",
    "refer earn bet nepal", "bet reward nepal",
    // Brand
    "GorkhaBooks promotions", "best bonus betting site Nepal 2026",
    "Gorkha gaming bonus", "casino bonus Nepal 2026",
    "नेपाल बोनस", "वेलकम बोनस नेपाल", "eSewa बोनस नेपाल",
    // Payment methods
    "deposit methods Nepal betting", "Nepal betting with eSewa",
    "Nepal betting with Khalti", "Nepal betting bank transfer",
    "Nepal betting site bonus", "betting site welcome offer Nepal",
    "Nepal betting apps", "betting apps Nepal Android",
    "betting apps Nepal iOS", "Nepal betting site registration",
    // Additional bonus keywords
    "Nepal betting bonus", "betting welcome bonus Nepal",
    "free bets Nepal", "no deposit bonus Nepal betting",
    "Nepal betting promo code", "reload bonus Nepal betting",
    "VIP betting rewards Nepal", "cashback betting Nepal",
  ],
};

export default function PromotionsPage() {
  return <PromotionsPageClient />;
}
