import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";
import NotificationPopup from "@/components/NotificationPopup";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import TrustBar from "@/components/TrustBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GorkhaBooks – नेपालको #१ अनलाइन गेमिङ, बेटिङ र इस्पोर्ट्स | gorkha.com",
    template: "%s | GorkhaBooks Nepal – gorkha.com",
  },
  description:
    "GorkhaBooks (gorkha.com) – नेपालको सबैभन्दा भरोसेमान्य अनलाइन गेमिङ प्लेटफर्म। क्रिकेट, फुटबल, लाइभ क्यासिनो र PUBG/Free Fire टुर्नामेन्ट। eSewa र Khalti बाट जम्मा गर्नुहोस्। ५०,०००+ खेलाडीहरू। WhatsApp मा सित्तैमा जोडिनुहोस्! Nepal's #1 trusted online gaming, sports betting, live casino and esports platform for Nepali gamers.",
  keywords: [
    // Brand core
    "GorkhaBooks", "gorkha.com", "GorkhaBooks Nepal", "Gorkha gaming Nepal",
    "Nepal gaming site 2026", "Gorkha bet", "GorkhaBooks betting site",
    "गोर्खाबुक्स", "गोर्खा गेमिङ", "नेपाल गेमिङ",
    // Online gaming Nepal
    "online gaming Nepal 2026", "best gaming site Nepal", "Nepal gaming platform",
    "top gaming website Nepal", "real money gaming Nepal", "mobile gaming Nepal",
    "gaming app Nepal", "multiplayer online games Nepal", "PC gaming Nepal",
    // Sports betting
    "online betting Nepal", "sports betting Nepal 2026", "cricket betting Nepal",
    "IPL 2026 betting Nepal", "football betting Nepal", "live betting Nepal",
    "kabaddi betting Nepal", "tennis betting Nepal", "Nepal Premier League bet",
    "best odds cricket Nepal", "live sports betting Nepal", "satta Nepal",
    // Esports
    "esports Nepal 2026", "PUBG tournament Nepal", "Free Fire tournament Nepal",
    "BGMI tournament Nepal", "Valorant Nepal", "esports betting Nepal",
    "online esports platform Nepal", "esports team Nepal", "gaming tournament Nepal",
    "competitive gaming Nepal", "ranked gaming Nepal", "Nepal esports community",
    "how to join esports Nepal", "best esports site Nepal 2026",
    // Casino
    "live casino Nepal", "Teen Patti online Nepal", "Andar Bahar Nepal",
    "online roulette Nepal", "online blackjack Nepal", "slot games Nepal",
    "live dealer Nepal", "casino games Nepal 2026", "jackpot Nepal",
    // Community & local
    "Kathmandu online gaming", "Pokhara betting site", "Nepal gamers community",
    "Nepali gamers network", "Nepal gaming news 2026", "gaming events Nepal",
    "fastest growing gaming community Nepal", "Nepali gaming YouTube",
    // Payments
    "eSewa betting Nepal", "Khalti casino Nepal", "IME Pay gaming Nepal",
    "FonePay bet Nepal", "NPR betting site", "instant withdrawal Nepal",
    // Trust & intent
    "trusted betting site Nepal", "safe betting Nepal", "legal gaming Nepal",
    "licensed betting Nepal", "secure online casino Nepal", "fair gaming Nepal",
    "WhatsApp betting Nepal", "100% welcome bonus Nepal",
    "instant payout Nepal", "best withdrawal speed Nepal",
    // Nepali keywords
    "नेपालको भरोसेमान्य बुक", "कानूनी बेटिङ नेपाल", "सुरक्षित गेमिङ नेपाल",
    "निष्पक्ष खेल नेपाल", "अनलाइन बेटिङ नेपाल", "क्रिकेट बेटिङ नेपाल",
    "लाइभ क्यासिनो नेपाल", "इस्पोर्ट्स नेपाल", "PUBG टुर्नामेन्ट नेपाल",
    "नेपाल गेमिङ प्लेटफर्म", "eSewa बेटिङ", "Khalti क्यासिनो",
  ],
  authors: [{ name: "GorkhaBooks", url: "https://gorkha.com" }],
  creator: "GorkhaBooks",
  publisher: "GorkhaBooks",
  metadataBase: new URL("https://gorkha.com"),
  alternates: {
    canonical: "https://gorkha.com",
    languages: {
      "en": "https://gorkha.com",
      "ne": "https://gorkha.com",
      "ne-NP": "https://gorkha.com",
      "en-NP": "https://gorkha.com",
    },
  },
  icons: [],
  category: "Online Gaming, Sports Betting & Esports",
  openGraph: {
    type: "website",
    locale: "en_NP",
    alternateLocale: ["ne_NP"],
    url: "https://gorkha.com",
    siteName: "GorkhaBooks – Nepal's #1 Gaming Platform",
    title: "GorkhaBooks – नेपालको #१ गेमिङ, बेटिङ र इस्पोर्ट्स प्लेटफर्म | gorkha.com",
    description:
      "GorkhaBooks (gorkha.com) – Nepal's most trusted online gaming & sports betting platform. Bet on IPL Cricket & Football, play Live Casino, join PUBG & Free Fire Esports tournaments. eSewa/Khalti accepted. 50,000+ players. Join FREE via WhatsApp!",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GorkhaBooks – नेपालको #१ ट्रस्टेड गेमिङ प्लेटफर्म | gorkha.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GorkhaBooks",
    creator: "@GorkhaBooks",
    title: "GorkhaBooks Nepal – #1 Online Gaming, Betting & Esports | gorkha.com",
    description:
      "नेपालको #१ गेमिङ प्लेटफर्म। PUBG, Free Fire tournaments + Cricket/Football betting + Live Casino. 50,000+ players. Join FREE on WhatsApp!",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: Replace with real codes from Google Search Console & Yandex Webmaster
    // google: "YOUR_GOOGLE_VERIFICATION_CODE",
    // yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  other: {
    "geo.region": "NP",
    "geo.placename": "Nepal",
    "geo.position": "28.3949;84.1240",
    "ICBM": "28.3949, 84.1240",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  "name": "GorkhaBooks",
  "legalName": "GorkhaBooks (gorkha.com)",
  "alternateName": [
    "Gorkha Books", "GorkhaBooks Nepal", "gorkha.com",
    "Gorkha Gaming", "Gorkha Gaming Nepal", "Gorkha Esports",
    "Gorkha Online Gaming", "Nepal Gorkha Gaming", "Gorkha Gaming Platform",
    "गोर्खाबुक्स", "गोर्खा गेमिङ नेपाल"
  ],
  "url": "https://gorkha.com",
  "logo": "https://gorkha.com/logo.png",
  "image": "https://gorkha.com/opengraph-image",
  "description": "Nepal's #1 trusted, legal and licensed online gaming, sports betting, esports tournaments and live casino platform. GorkhaBooks (gorkha.com) – bet on IPL cricket and football, play live casino, join PUBG & Free Fire tournaments. Deposit via eSewa and Khalti. 50,000+ verified players.",
  "foundingDate": "2020",
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": 50 },
  "areaServed": {
    "@type": "Country",
    "name": "Nepal",
    "sameAs": "https://en.wikipedia.org/wiki/Nepal",
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "NP",
    "addressLocality": "Kathmandu",
    "addressRegion": "Bagmati Province",
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": ["English", "Nepali"],
      "contactOption": "TollFree",
      "hoursAvailable": "Mo-Su 00:00-23:59",
    },
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "contactOption": "TollFree",
      "availableLanguage": ["English", "Nepali"],
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "12480",
    "reviewCount": "12480",
  },
  "sameAs": [
    "https://wa.me/9779800000000",
    "https://t.me/GorkhaBooks",
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "GorkhaBooks Games & Betting",
    "itemListElement": [
      { "@type": "Offer", "name": "Sports Betting Nepal", "description": "Bet on Cricket, Football, Kabaddi, Tennis & Esports", "priceCurrency": "NPR" },
      { "@type": "Offer", "name": "Live Casino Nepal", "description": "Teen Patti, Roulette, Blackjack, Andar Bahar & Slots", "priceCurrency": "NPR" },
      { "@type": "Offer", "name": "Esports Tournaments Nepal", "description": "PUBG, Free Fire, Valorant, BGMI tournaments", "priceCurrency": "NPR" },
      { "@type": "Offer", "name": "100% Welcome Bonus", "description": "100% match bonus up to NPR 10,000 on first deposit", "priceCurrency": "NPR" },
    ],
  },
  "paymentAccepted": "eSewa, Khalti, IME Pay, FonePay, ConnectIPS, Bank Transfer",
  "currenciesAccepted": "NPR",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "GorkhaBooks",
  "alternateName": "Gorkha Gaming Nepal",
  "url": "https://gorkha.com",
  "description": "Nepal's #1 trusted & legal online gaming, sports betting and casino platform",
  "inLanguage": ["en", "ne"],
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://gorkha.com/blog?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I join GorkhaBooks?",
      "acceptedAnswer": { "@type": "Answer", "text": "Join GorkhaBooks in minutes via WhatsApp. Send us a message and our team will register you instantly with a welcome bonus. नेपालको नं1‍ भरोसेमान्य बुक GorkhaBooksमा WhatsApp मार्फत जोडिनुहोस्।" },
    },
    {
      "@type": "Question",
      "name": "What payment methods does GorkhaBooks accept?",
      "acceptedAnswer": { "@type": "Answer", "text": "GorkhaBooks accepts eSewa, Khalti, IME Pay, FonePay, ConnectIPS and direct bank transfers in Nepali Rupees (NPR). नेपाली रुपियाँमा eSewa, Khalti, IME Pay मार्फत जम्मा गर्नुहोस्।" },
    },
    {
      "@type": "Question",
      "name": "How fast are withdrawals on GorkhaBooks?",
      "acceptedAnswer": { "@type": "Answer", "text": "Withdrawals on GorkhaBooks are processed within 5 minutes for amounts under NPR 50,000. GorkhaBooksमा निकासी ८ मिनेटभित्रै हुन्छ।" },
    },
    {
      "@type": "Question",
      "name": "Is GorkhaBooks safe, legal and trusted in Nepal?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. GorkhaBooks is Nepal's most trusted and legal online gaming platform. It uses 256-bit SSL encryption, is trusted by 50,000+ verified players, and operates with full transparency and fairness. GorkhaBooks नेपालको सबभन्दा भरोसेमान्य र कानूनी गेमिङ प्लेटफर्म हो।" },
    },
    {
      "@type": "Question",
      "name": "What sports can I bet on at GorkhaBooks?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can bet on Cricket (IPL, World Cup, Nepal T20), Football (Premier League, Champions League), Kabaddi, Tennis, Esports (PUBG, Free Fire, BGMI) and more. क्रिकेट, फुटबल, कबड्डी, इस्पोर्ट्समा बेट लगाउनुहोस्।" },
    },
    {
      "@type": "Question",
      "name": "GorkhaBooks कसरी जोडिने?",
      "acceptedAnswer": { "@type": "Answer", "text": "GorkhaBooksमा जोडिन WhatsAppमा मेसेज गर्नुहोस्। हाम्रो टिमले तुरन्त दर्ता गरिदिन्छ र वेलकम बोनस पनि दिन्छ। नेपालको नं1‍ गेमिङ प्लेटफर्म।" },
    },
    {
      "@type": "Question",
      "name": "Nepal ma online betting legal cha?",
      "acceptedAnswer": { "@type": "Answer", "text": "GorkhaBooks is a fully legal and licensed gaming platform operating in Nepal. We follow all applicable regulations and are committed to responsible, transparent and fair gaming for all Nepali players." },
    },
    {
      "@type": "Question",
      "name": "Does GorkhaBooks have a welcome bonus?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes! GorkhaBooks offers a 100% Welcome Bonus up to NPR 10,000 on your first deposit, plus weekly cashback, referral bonuses and VIP rewards. Join via WhatsApp to claim instantly." },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head suppressHydrationWarning>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#03040a" />
        <meta name="msapplication-TileColor" content="#03040a" />
      </head>
      <body className="min-h-full flex flex-col bg-[#03040a] text-white" suppressHydrationWarning>
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="ld-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <ScrollProgress />
        <Navbar />
        <TrustBar />
        <main className="flex-1 pt-7">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <NotificationPopup />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
