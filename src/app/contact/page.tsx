import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact GorkhaBooks – 24/7 WhatsApp Support Nepal | gorkha.com",
  description:
    "Contact GorkhaBooks (gorkha.com) – Nepal's #1 Gorkha Gaming support team 24/7 via WhatsApp, Telegram, email or phone. Average reply under 30 seconds. Help with deposits, withdrawals, bonuses, account & betting queries.",
  alternates: { canonical: "https://gorkha.com/contact" },
  openGraph: {
    title: "Contact GorkhaBooks – 24/7 WhatsApp Support Nepal | gorkha.com",
    description: "Contact GorkhaBooks 24/7 via WhatsApp, Telegram, email or phone. Average reply under 30 seconds. Help with deposits, withdrawals, bonuses & betting.",
    url: "https://gorkha.com/contact",
    type: "website",
    images: [{ url: "https://gorkha.com/opengraph-image", width: 1200, height: 630, alt: "Contact GorkhaBooks Nepal" }],
  },
  keywords: [
    "contact GorkhaBooks", "GorkhaBooks WhatsApp Nepal", "betting support Nepal",
    "GorkhaBooks customer care", "casino support Nepal", "help betting Nepal",
    "WhatsApp betting support", "GorkhaBooks phone number", "Nepal betting helpline",
    "Gorkha gaming support", "gorkha.com contact", "online betting help Nepal",
    "casino customer service Nepal", "GorkhaBooks helpline 2026",
    "deposit help Nepal", "withdrawal support Nepal",
    "नेपाल बेटिङ सपोर्ट", "GorkhaBooks सम्पर्क",
  ],
};

export default function ContactPage() {
  return <ContactPageClient />;
}
