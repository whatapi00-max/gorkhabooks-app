import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About GorkhaBooks – Nepal's #1 Trusted Gaming & Betting Platform Since 2020 | gorkha.com",
  description:
    "Learn about GorkhaBooks (gorkha.com) – Nepal's most trusted Gorkha Gaming platform since 2020. 50,000+ verified players. 256-bit SSL encrypted. eSewa & Khalti payments. Founded in Nepal, built for Nepali players. Safe, fair & reliable.",
  alternates: { canonical: "https://gorkha.com/about" },
  openGraph: {
    title: "About GorkhaBooks – Nepal's #1 Trusted & Legal Gaming Platform Since 2020",
    description: "GorkhaBooks – Nepal's most trusted, legal & licensed gaming platform. 50,000+ verified players. Founded 2020. 256-bit SSL. eSewa & Khalti.",
    url: "https://gorkha.com/about",
    type: "website",
    images: [{ url: "https://gorkha.com/opengraph-image", width: 1200, height: 630, alt: "About GorkhaBooks Nepal" }],
  },
  keywords: [
    "about GorkhaBooks", "GorkhaBooks Nepal history", "trusted betting platform Nepal",
    "Nepal betting company", "GorkhaBooks founded", "safe betting Nepal",
    "legitimate casino Nepal", "licensed betting Nepal", "Nepal gaming company 2026",
    "Gorkha gaming company", "gorkha.com about", "who is GorkhaBooks",
    "safe online gaming Nepal", "trusted casino Nepal 2026",
    "GorkhaBooks 50000 players", "Nepal gaming platform history",
    "नेपाल बेटिङ कम्पनी", "GorkhaBooks बारेमा",
  ],
};

export default function AboutPage() {
  return <AboutPageClient />;
}
