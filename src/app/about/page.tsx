import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "Trusted Betting Site Nepal – Legal & Licensed Casino 2026 | About GorkhaBooks",
  description:
    "GorkhaBooks – नेपालको सबैभन्दा भरोसेमान्य र कानूनी अनलाइन बेटिङ प्लेटफर्म। ५०,०००+ खेलाडी। 256-bit SSL। Nepal's most trusted, legal & licensed betting site since 2020. Safe, certified, transparent – eSewa & Khalti accepted.",
  alternates: { canonical: "https://gorkha.com/about" },
  openGraph: {
    title: "Trusted & Legal Betting Site Nepal 2026 | About GorkhaBooks",
    description: "GorkhaBooks – Nepal's most trusted, legal & licensed gaming platform. 50,000+ verified players. Founded 2020. 256-bit SSL. eSewa & Khalti.",
    url: "https://gorkha.com/about",
    type: "website",
    images: [{ url: "https://gorkha.com/opengraph-image", width: 1200, height: 630, alt: "About GorkhaBooks Nepal" }],
  },
  keywords: [
    // Trust & legal — strategy core targets
    "trusted betting site Nepal", "legal betting Nepal", "licensed casino Nepal",
    "safe betting Nepal", "secure betting Nepal", "trusted casino Nepal 2026",
    "legitimate casino Nepal", "licensed betting Nepal",
    "how to identify safe betting sites Nepal", "is online betting legal Nepal",
    "nepal gambling law", "gaming license nepal", "regulated gaming nepal",
    "safe online gaming Nepal", "responsible gaming nepal",
    // Brand about
    "about GorkhaBooks", "GorkhaBooks Nepal history", "GorkhaBooks founded",
    "Nepal gaming company 2026", "Gorkha gaming company", "gorkha.com about",
    "who is GorkhaBooks", "GorkhaBooks 50000 players", "Nepal gaming platform history",
    "trusted betting platform Nepal", "Nepal betting company",
    // Safety signals
    "provably fair nepal", "RNG certified nepal", "ssl secured gaming nepal",
    "256-bit SSL betting Nepal", "verified gaming nepal", "fair play gaming nepal",
    "scam free gaming nepal", "anti fraud gaming nepal", "player protection nepal",
    "age verification gaming nepal", "24/7 support nepal gaming",
    "नेपाल बेटिङ कम्पनी", "GorkhaBooks बारेमा", "कानूनी बेटिङ नेपाल",
    "भरोसेमान्य बेटिङ साइट नेपाल",
  ],
};

export default function AboutPage() {
  return <AboutPageClient />;
}
