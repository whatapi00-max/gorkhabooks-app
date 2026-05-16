import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AutoRedirect from "@/components/AutoRedirect";
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
    default: "Online Betting Nepal | Best eSewa & Khalti Casino 2026 | GorkhaBooks",
    template: "%s | GorkhaBooks Nepal – gorkha.com",
  },
  description:
    "GorkhaBooks – नेपालको #१ अनलाइन बेटिङ र क्यासिनो। eSewa, Khalti, IME Pay। IPL क्रिकेट, फुटबल, Teen Patti, Aviator। ५ मिनेटमा निकासी। Nepal's most trusted online betting site – fast withdrawal, real money casino, sports betting & live casino.",
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
    // Cricket Betting Nepal
    "cricket betting nepal", "IPL betting nepal", "T20 betting nepal", "ODI betting nepal", "test match betting nepal",
    "live cricket bet nepal", "cricket match prediction nepal", "cricket satta nepal", "IPL satta nepal",
    "world cup betting nepal", "cricket toss bet nepal", "cricket score bet nepal", "best cricket betting site nepal",
    "cricket betting odds nepal", "cricket bet win nepal", "ipl winner bet nepal", "cricket fantasy bet nepal",
    "cricket jackpot nepal", "big bash betting nepal", "asia cup betting nepal", "Champions Trophy bet nepal",
    "cricket bet app nepal", "cricket bet tips nepal", "cricket live bet nepal", "cricket back lay nepal",
    "cricket exchange bet nepal", "cricket win real money nepal", "nepal cricket bet", "online cricket bet nepal",
    "cricket betting bonus nepal",
    // Football Betting Nepal
    "football betting nepal", "EPL betting nepal", "La Liga betting nepal", "UCL betting nepal", "FIFA betting nepal",
    "Champions League bet nepal", "football match bet nepal", "football live bet nepal", "football odds nepal",
    "football prediction nepal", "football satta nepal", "football win nepal", "best football betting nepal",
    "Nepal football bet", "football jackpot nepal", "football double chance nepal", "football over under bet nepal",
    "football BTTS nepal", "football accumulator nepal", "football parlay nepal", "football 1x2 bet nepal",
    "football handicap bet nepal", "football correct score nepal", "football goalscorer bet nepal",
    "football bet app nepal", "Serie A bet nepal", "Bundesliga bet nepal", "Ligue 1 bet nepal", "MLS bet nepal",
    "football bet real money nepal",
    // Live Betting Nepal
    "live betting nepal", "in-play bet nepal", "live sports bet nepal", "real time bet nepal", "live odds nepal",
    "live cricket bet nepal", "live football bet nepal", "live casino nepal", "live dealer bet nepal",
    "live baccarat nepal", "live roulette nepal", "live blackjack nepal", "live teen patti nepal",
    "live andar bahar nepal", "live dragon tiger nepal", "live game show nepal", "live bet win nepal",
    "live score bet nepal", "live wager nepal", "in-play odds nepal", "live accumulator nepal",
    "cash out bet nepal", "bet cash out nepal", "live streaming bet nepal", "watch and bet nepal",
    "live market nepal betting", "instant bet nepal", "live bonus bet nepal", "live jackpot nepal", "live bet app nepal",
    // Other Sports Nepal
    "kabaddi betting nepal", "kabaddi bet nepal", "Pro Kabaddi bet nepal", "kabaddi match prediction nepal",
    "kabaddi satta nepal", "kabaddi online bet nepal", "kabaddi win nepal", "kabaddi jackpot nepal",
    "volleyball betting nepal", "basketball betting nepal", "Nepal Premier League bet", "Nepal football league bet",
    "table tennis betting nepal", "badminton betting nepal", "boxing betting nepal", "MMA betting nepal",
    "UFC betting nepal", "wrestling bet nepal", "athletics bet nepal", "marathon bet nepal",
    "cycling bet nepal", "chess bet nepal", "darts betting nepal", "snooker betting nepal",
    "hockey betting nepal", "archery bet nepal", "Nepal sports prediction", "local sports bet nepal",
    "Nepal league bet", "Nepal national team bet",
    // Casino Games Nepal
    "teen patti nepal", "teen patti real money nepal", "teen patti online nepal", "andar bahar nepal",
    "andar bahar real cash nepal", "andar bahar online nepal", "dragon tiger nepal", "dragon tiger real money nepal",
    "baccarat nepal", "baccarat real money nepal", "live baccarat nepal", "blackjack nepal",
    "blackjack real money nepal", "poker nepal", "Texas Holdem nepal", "Omaha poker nepal", "rummy nepal",
    "online rummy nepal", "rummy real money nepal", "3 patti nepal", "3 patti gold nepal",
    "card game real money nepal", "casino card game nepal", "online card game nepal", "table game nepal",
    "casino table nepal", "casino real cash nepal", "card bet nepal", "play cards online nepal", "win cards nepal",
    // Crash & Instant Games Nepal
    "crash game nepal", "aviator game nepal", "aviator bet nepal", "aviator win nepal", "aviator real money nepal",
    "JetX nepal", "spaceman game nepal", "crash bet nepal", "crash multiplier nepal", "mines game nepal",
    "plinko nepal", "dice game nepal", "hilo game nepal", "fast game nepal", "instant game nepal",
    // Slots Nepal
    "slot game nepal", "slots real money nepal", "jackpot slots nepal", "mega jackpot nepal",
    "progressive jackpot nepal", "free spins slots nepal", "bonus buy slots nepal", "3 reel slot nepal",
    "5 reel slot nepal", "video slot nepal", "fruit slot nepal", "classic slots nepal", "megaways nepal",
    "cluster slot nepal", "big win slots nepal",
    // Betting Tips Nepal
    "betting tips nepal", "free bet tips nepal", "today match prediction nepal", "cricket prediction nepal",
    "football prediction nepal", "sure bet nepal", "sure win bet nepal", "fixed match nepal",
    "betting strategy nepal", "how to win bet nepal", "bet guide nepal", "betting odds explained nepal",
    "matched betting nepal", "value bet nepal", "accumulator tips nepal", "parlay tips nepal",
    "daily prediction nepal", "win every bet nepal", "betting analysis nepal", "expert prediction nepal",
    "best odds nepal", "betting system nepal", "handicap tip nepal", "over under tip nepal",
    "football tips today nepal", "cricket tips today nepal", "free prediction site nepal", "prediction app nepal",
    "sports analysis nepal", "betting forecast nepal",
    // Betting Bonus Nepal
    "betting bonus nepal", "free bet nepal", "no deposit free bet nepal", "welcome bet bonus nepal",
    "first bet bonus nepal", "matched bet bonus nepal", "reload bet bonus nepal", "accumulator bonus nepal",
    "acca insurance nepal", "bet refund nepal", "money back bet nepal", "cashback bet nepal",
    "bet boost nepal", "odds boost nepal", "enhanced odds nepal", "bet promo code nepal",
    "betting voucher nepal", "bet coupon nepal", "loyalty bet bonus nepal", "vip bet nepal",
    "high roller bonus nepal", "weekly bet bonus nepal", "daily free bet nepal", "bet and get nepal",
    "refer earn bet nepal", "bet affiliate nepal", "bet reward nepal", "winning reward nepal",
    "bonus rollover nepal", "wagering requirement nepal",
    // Betting Apps Nepal
    "betting app nepal", "best betting app nepal", "bet app download nepal", "mobile bet nepal",
    "bet on mobile nepal", "android bet app nepal", "ios betting app nepal", "betting website nepal",
    "best bet site nepal", "top betting site nepal", "new betting site nepal", "trusted bet site nepal",
    "licensed bet site nepal", "bet365 nepal alternative", "1xbet nepal alternative", "betway nepal alternative",
    "betwinner nepal", "melbet nepal", "mostbet nepal", "parimatch nepal", "22bet nepal",
    "bet platform nepal", "nepali betting platform", "local bet app nepal", "nepal betting platform 2025",
    "online bet nepal", "bet nepal app", "bet nepal site", "sportsbook app nepal", "fast bet app nepal",
    // Nepali Keywords
    "सट्टाबाजी नेपाल", "अनलाइन सट्टा नेपाल", "क्रिकेट सट्टा नेपाल", "फुटबल सट्टा नेपाल",
    "कबड्डी सट्टा नेपाल", "लाइभ बेट नेपाल", "बेटिङ नेपाल", "अनलाइन बेट नेपाल", "खेल बेटिङ नेपाल",
    "नेपाल बेटिङ एप", "satta nepal", "satta online nepal", "cricket satta nepal", "football satta nepal",
    "IPL satta nepal", "satta matka nepal", "kabaddi satta nepal", "satta result nepal", "satta win nepal",
    "satta app nepal",
    // Local Nepal Cities
    "bet nepal kathmandu", "bet nepal pokhara", "bet nepal chitwan", "bet nepal biratnagar",
    "bet nepal butwal", "bet nepal lalitpur", "bet nepal bhaktapur", "bet nepal hetauda",
    "online satta real money nepal", "satta bonus nepal",
    // GorkhaBooks Brand Keywords
    "gorkhabooks", "gorkha books", "gorkhabooks nepal", "gorkhabooks gaming", "gorkhabooks site",
    "gorkhabooks online", "gorkha books nepal gaming", "gorkhabooks login", "gorkhabooks register",
    "gorkhabooks app", "gorkhabooks review", "gorkhabooks promo", "gorkhabooks bonus",
    "gorkhabooks deposit", "gorkhabooks withdrawal", "gorkhabooks payment", "gorkhabooks support",
    "gorkhabooks customer care", "gorkhabooks contact", "gorkhabooks referral", "gorkhabooks affiliate",
    "gorkhabooks free", "gorkhabooks winner", "gorkhabooks jackpot", "gorkhabooks account",
    "gorkhabooks new account", "gorkhabooks verify", "gorkhabooks official", "gorkhabooks trusted",
    "gorkhabooks legit",
    // Online Gaming Nepal
    "online gaming nepal", "gaming site nepal", "nepal gaming platform", "best gaming site nepal",
    "online games nepal", "play games online nepal", "gaming nepal 2025", "nepal game app",
    "top gaming sites nepal", "gaming website nepal", "free gaming nepal", "nepal real money games",
    "gaming in nepal", "play and win nepal", "win real money nepal", "nepal online game",
    "earn money gaming nepal", "game nepal", "mobile gaming nepal", "internet gaming nepal",
    "nepal gaming industry", "online entertainment nepal", "digital games nepal", "best online games nepal",
    "real money gaming nepal", "nepal gaming 2024", "nepal gaming apps", "gaming bonus nepal",
    "play win earn nepal", "online game nepal",
    // Sports Betting Nepal
    "sports betting nepal", "bet online nepal", "nepal sports bet", "football betting nepal",
    "cricket betting nepal", "IPL betting nepal", "kabaddi betting nepal", "live betting nepal",
    "sports book nepal", "sportsbook nepal", "bet nepal", "online bet nepal", "best sportsbook nepal",
    "betting odds nepal", "nepal betting app", "bet on sports nepal", "legal sports betting nepal",
    "sports wager nepal", "cricket bet nepal", "football bet nepal", "basketball betting nepal",
    "tennis betting nepal", "esports betting nepal", "virtual sports nepal", "bet365 nepal",
    "1xbet nepal", "betway nepal", "bewin nepal", "sportsbetting app nepal", "nepal sports wagering",
    // Online Casino Nepal
    "online casino nepal", "casino nepal", "slot games nepal", "slots nepal", "nepal casino",
    "live casino nepal", "casino online nepal", "best casino nepal", "casino bonus nepal",
    "real money casino nepal", "casino games nepal", "slot machine nepal", "jackpot nepal",
    "roulette nepal", "blackjack nepal", "baccarat nepal", "teen patti nepal", "andar bahar nepal",
    "poker nepal", "online poker nepal", "teen patti online nepal", "casino app nepal",
    "live dealer nepal", "casino deposit nepal", "casino withdrawal nepal", "free spins nepal",
    "casino welcome bonus nepal", "slot bonus nepal", "spin and win nepal", "demo slots nepal",
    // Lottery Nepal
    "lottery nepal", "online lottery nepal", "nepal lottery", "lucky draw nepal", "prediction game nepal",
    "number game nepal", "lucky number nepal", "win lottery nepal", "lottery result nepal",
    "lotto nepal", "online lotto nepal", "lottery ticket nepal", "lucky win nepal", "daily lottery nepal",
    "nepal jackpot lottery", "color prediction nepal", "color game nepal", "1 minute game nepal",
    "fast game nepal", "prediction site nepal", "wingo nepal", "big small game nepal",
    "number prediction nepal", "win prize nepal", "lottery app nepal", "lottery draw nepal",
    "online draw nepal", "daily win nepal", "instant lottery nepal", "lucky numbers nepal",
    // Esports Nepal
    "esports nepal", "nepal esports", "pubg nepal", "free fire nepal", "valorant nepal",
    "call of duty nepal", "minecraft nepal", "mobile legends nepal", "bgmi nepal",
    "gaming tournament nepal", "esports tournament nepal", "online tournament nepal",
    "pubg tournament nepal", "free fire tournament nepal", "valorant tournament nepal",
    "esports betting nepal", "esports prize nepal", "esports team nepal", "game streaming nepal",
    "gaming community nepal", "nepali gamers", "nepal game tournament", "competitive gaming nepal",
    "esports league nepal", "gaming clan nepal", "game championship nepal", "online gaming competition nepal",
    "nepal gaming championship", "mobile gaming tournament nepal", "gaming news nepal",
    // Payment Nepal Gaming
    "esewa nepal gaming", "khalti nepal gaming", "imeepay gaming", "connect ips gaming nepal",
    "bank transfer gaming nepal", "upi nepal gaming", "instant withdrawal nepal", "fast payout nepal",
    "nepal payment gateway gaming", "secure payment nepal gaming", "deposit by esewa",
    "deposit by khalti", "online payment gaming nepal", "nepal digital payment gaming",
    "minimum deposit nepal gaming", "no deposit bonus nepal", "free bonus nepal", "cashback nepal gaming",
    "nepal gaming wallet", "safe deposit nepal", "crypto gaming nepal", "btc gaming nepal",
    "usdt gaming nepal", "e-wallet nepal gaming", "quick payout nepal", "nepal gaming rewards",
    "real cash nepal games", "money gaming nepal", "pay and play nepal", "gaming payment nepal",
    // Nepali Keywords
    "नेपाल गेमिङ", "नेपाल अनलाइन गेम", "गोर्खाबुक्स", "नेपाल सट्टाबाजी",
    "नेपाली क्यासिनो", "नेपाल लटरी", "अनलाइन खेल नेपाल", "नेपाल जित्ने खेल",
    "नेपाल गेम एप", "मोबाइल गेमिङ नेपाल",
    // Local Gaming Nepal
    "nepali gaming site", "nepali game", "khel nepal", "online khel nepal", "nepali casino",
    "nepali lottery", "nepali sports bet", "nepali gamers", "gaming kathmandu", "gaming pokhara",
    "gaming lalitpur", "gaming bhaktapur", "gaming chitwan", "gaming butwal", "gaming biratnagar",
    "gaming dharan", "gaming hetauda", "gaming nepalgunj", "gaming birgunj",
    // Legal Gaming Nepal
    "legal gaming nepal", "licensed gaming nepal", "safe gaming nepal", "trusted gaming nepal",
    "secure casino nepal", "verified gaming nepal", "fair play gaming nepal", "responsible gaming nepal",
    "certified gaming nepal", "regulated gaming nepal", "is online gaming legal nepal", "gaming laws nepal",
    "nepal gambling law", "gaming license nepal", "RNG certified nepal", "provably fair nepal",
    "ssl secured gaming nepal", "data privacy gaming nepal", "safe bet nepal", "anti fraud gaming nepal",
    "real money safe nepal", "scam free gaming nepal", "honest gaming nepal", "transparent gaming nepal",
    "24/7 support nepal gaming", "gaming help nepal", "nepal gaming complaint", "dispute resolution gaming nepal",
    "player protection nepal", "age verification gaming nepal",
    // Gaming Bonus Nepal
    "gaming bonus nepal", "welcome bonus nepal", "signup bonus nepal", "first deposit bonus nepal",
    "free bonus nepal gaming", "no deposit bonus nepal gaming", "reload bonus nepal", "cashback gaming nepal",
    "loyalty program nepal gaming", "vip gaming nepal", "refer and earn nepal gaming", "free spins nepal gaming",
    "promo code nepal gaming", "daily bonus nepal gaming", "weekly bonus nepal gaming", "jackpot bonus nepal",
    "tournament prize nepal", "prize pool nepal gaming", "winning prize nepal", "earn online nepal",
    "passive income gaming nepal", "earn from home nepal gaming", "best bonus site nepal", "biggest jackpot nepal",
    "mega win nepal", "lucky bonus nepal", "instant bonus nepal", "exclusive bonus nepal", "seasonal promo nepal gaming",
    "nepal gaming festival offer",
    "instant payout Nepal", "best withdrawal speed Nepal",
    // 2026 STRATEGY — High competition core
    "best betting site Nepal", "real money games Nepal", "betting app Nepal",
    "online gambling Nepal", "Nepal betting platform", "online wagering Nepal",
    // 2026 STRATEGY — High conversion money keywords
    "Khalti betting Nepal", "fast withdrawal casino Nepal",
    "instant payout betting Nepal", "IME Pay betting Nepal",
    "deposit bonus Nepal betting", "minimum deposit betting Nepal",
    "withdraw winnings Nepal", "mobile wallet betting Nepal",
    "same day withdrawal Nepal", "bank transfer betting Nepal",
    "betting deposit methods Nepal", "Nepal rupees betting",
    "no minimum deposit casino Nepal",
    // 2026 STRATEGY — Medium competition long-tail
    "how to bet online in Nepal", "best time to bet on IPL Nepal",
    "Nepal cricket betting guide", "online casino with eSewa Nepal",
    "betting sites that accept Khalti", "fast withdrawal betting Nepal",
    "how to deposit on betting sites Nepal", "safest betting app Nepal 2026",
    "beginner guide to online betting Nepal", "Nepal football betting tips",
    "mobile betting Nepal guide", "best betting strategy Nepal",
    "online casino minimum deposit Nepal", "Nepal sports betting for beginners",
    "live casino Nepal review", "how to verify betting account Nepal",
    "Nepal betting sites comparison", "which betting site pays fast Nepal",
    "online betting age limit Nepal", "Nepal casino games explained",
    // 2026 STRATEGY — Competitor target keywords
    "best betting site Nepal vs MelBet", "MelBet Nepal alternative",
    "1xBet Nepal vs GorkhaBooks", "better than 1xBet Nepal",
    "Parimatch Nepal alternative", "safest betting platform Nepal comparison",
    "trusted site vs MelBet Nepal", "Nepal betting site reviews 2026",
    "top 10 betting sites Nepal 2026", "fastest payout vs competitors Nepal",
    // 2026 STRATEGY — Casino games
    "aviator game Nepal", "mines game Nepal", "Dragon Tiger Nepal",
    "Rummy online Nepal", "how to play Teen Patti online Nepal",
    "Aviator game Nepal strategy", "how to win aviator Nepal",
    // 2026 STRATEGY — City targeting
    "online betting Kathmandu", "online betting Pokhara",
    "online betting Biratnagar", "online betting Nepalganj",
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
    "https://wa.link/gme782",
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
    {
      "@type": "Question",
      "name": "Which is the best betting site in Nepal 2026?",
      "acceptedAnswer": { "@type": "Answer", "text": "GorkhaBooks is Nepal's best betting site in 2026. It offers the highest odds, fastest payouts (5 minutes), eSewa & Khalti deposits, 100% welcome bonus, live casino, cricket & football betting, and 24/7 Nepali customer support. Trusted by 50,000+ verified players." },
    },
    {
      "@type": "Question",
      "name": "Can I bet using eSewa or Khalti in Nepal?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. GorkhaBooks fully supports eSewa, Khalti and IME Pay for both deposits and withdrawals. Simply deposit from your eSewa or Khalti wallet in seconds – no bank account needed. Minimum deposit is NPR 100." },
    },
    {
      "@type": "Question",
      "name": "How fast are withdrawals at GorkhaBooks Nepal?",
      "acceptedAnswer": { "@type": "Answer", "text": "GorkhaBooks processes withdrawals in under 5 minutes via eSewa, Khalti and IME Pay. Same-day withdrawal is guaranteed for all verified accounts. It is the fastest withdrawal betting site in Nepal." },
    },
    {
      "@type": "Question",
      "name": "How do I start online betting in Nepal for the first time?",
      "acceptedAnswer": { "@type": "Answer", "text": "Starting online betting in Nepal is easy with GorkhaBooks: 1) Message us on WhatsApp, 2) Get registered instantly, 3) Deposit via eSewa or Khalti (min NPR 100), 4) Claim your 100% welcome bonus, 5) Place your first bet on cricket, football or casino games. You can start with just NPR 500." },
    },
    {
      "@type": "Question",
      "name": "How to play Aviator game in Nepal?",
      "acceptedAnswer": { "@type": "Answer", "text": "Aviator is a crash game available on GorkhaBooks. Place your bet before the plane takes off, then cash out before it flies away. The longer you wait, the higher the multiplier – but cash out before the crash! Play Aviator with real money using eSewa or Khalti on GorkhaBooks." },
    },
    {
      "@type": "Question",
      "name": "What is the minimum deposit for online betting in Nepal?",
      "acceptedAnswer": { "@type": "Answer", "text": "The minimum deposit at GorkhaBooks is NPR 100 via eSewa, Khalti or IME Pay. There is no minimum withdrawal limit. You can start betting in Nepal with as little as NPR 100 and get a 100% welcome bonus on your first deposit." },
    },
    {
      "@type": "Question",
      "name": "IPL 2026 betting Nepal – how to bet on IPL?",
      "acceptedAnswer": { "@type": "Answer", "text": "Bet on IPL 2026 at GorkhaBooks: choose your match, pick your market (match winner, top batsman, total runs etc.), enter your stake and confirm. IPL betting is available live with real-time odds. Deposit via eSewa or Khalti and get your winnings within 5 minutes." },
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
        <AutoRedirect />
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
