import type { Metadata } from "next";
import PrivacyPageClient from "./PrivacyPageClient";

export const metadata: Metadata = {
  title: "Privacy Policy – GorkhaBooks | gorkha.com Nepal's #1 Gaming Platform",
  description: "Read GorkhaBooks (gorkha.com) Privacy Policy – Nepal's #1 Gorkha Gaming platform. We protect your personal data with 256-bit SSL encryption. Your privacy and trust are our priority.",
  alternates: { canonical: "https://www.gorkha777.com/privacy" },
  keywords: [
    "GorkhaBooks privacy policy", "gorkha.com privacy", "betting privacy Nepal",
    "casino data protection Nepal", "online gaming privacy Nepal", "GorkhaBooks data security",
    "नेपाल गोपनीयता नीति",
  ],
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
