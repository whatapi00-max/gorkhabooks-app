import type { Metadata } from "next";
import TermsPageClient from "./TermsPageClient";

export const metadata: Metadata = {
  title: "Terms of Service – GorkhaBooks | gorkha.com Nepal's #1 Gaming Platform",
  description: "Read the full Terms of Service for GorkhaBooks (gorkha.com) – Nepal's #1 Gorkha Gaming platform. Understand your rights and responsibilities as a player. Safe, fair & transparent.",
  alternates: { canonical: "https://gorkha.com/terms" },
  keywords: [
    "GorkhaBooks terms of service", "gorkha.com terms", "betting terms Nepal",
    "casino terms Nepal", "online gaming rules Nepal", "GorkhaBooks conditions",
    "नेपाल बेटिङ सर्तहरू",
  ],
};

export default function TermsPage() {
  return <TermsPageClient />;
}
