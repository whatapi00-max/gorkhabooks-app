import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import LiveTickerSection from "@/components/home/LiveTickerSection";
import TrendingGamesSection from "@/components/home/TrendingGamesSection";
import BonusBannerSection from "@/components/home/BonusBannerSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import HowToJoinSection from "@/components/home/HowToJoinSection";
import LiveMatchesSection from "@/components/home/LiveMatchesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import VIPSection from "@/components/home/VIPSection";
import StatsSection from "@/components/home/StatsSection";
import FAQSection from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title: "Online Betting Nepal | Best eSewa & Khalti Casino 2026 | GorkhaBooks",
  description:
    "GorkhaBooks – नेपालको #१ अनलाइन बेटिङ र क्यासिनो। eSewa, Khalti, IME Pay बाट जम्मा गर्नुहोस्। IPL क्रिकेट, फुटबल, Teen Patti, Aviator। ५ मिनेटमा निकासी। १००% Welcome Bonus NPR १०,०००। ५०,०००+ खेलाडी। Nepal's #1 trusted online betting site with eSewa Khalti deposit – fast withdrawal, real money casino, sports betting & live casino.",
  alternates: { canonical: "https://gorkha.com" },
  keywords: [
    // Brand — नेपाली र अंग्रेजी
    "GorkhaBooks", "गोर्खाबुक्स", "gorkha.com", "Gorkha bet Nepal",
    "GorkhaBooks Nepal 2026", "Gorkha gaming Nepal", "गोर्खा गेमिङ",
    "नेपाल गेमिङ साइट", "Nepal gaming site 2026", "Gorkha online betting",
    // HIGH COMPETITION CORE — Phase 1 targets
    "online betting Nepal", "best betting site Nepal", "online casino Nepal",
    "sports betting Nepal", "real money games Nepal", "betting app Nepal",
    "live betting Nepal", "online gambling Nepal", "trusted betting site Nepal",
    "best casino site Nepal", "Nepal betting platform", "secure betting Nepal",
    "best odds Nepal", "instant betting Nepal", "Nepal gaming platform",
    "online wagering Nepal", "licensed casino Nepal", "legal betting Nepal",
    // HIGH CONVERSION MONEY KEYWORDS
    "eSewa betting Nepal", "Khalti betting Nepal", "fast withdrawal casino Nepal",
    "instant payout betting Nepal", "real money casino Nepal", "IME Pay betting Nepal",
    "deposit bonus Nepal betting", "minimum deposit betting Nepal",
    "withdraw winnings Nepal", "mobile wallet betting Nepal",
    "same day withdrawal Nepal", "bank transfer betting Nepal",
    "betting deposit methods Nepal", "Nepal rupees betting",
    "no minimum deposit casino Nepal",
    // Sports betting
    "cricket betting Nepal", "IPL 2026 betting Nepal",
    "football betting Nepal", "kabaddi betting Nepal", "live sports betting Nepal",
    "best odds cricket Nepal", "नेपालमा क्रिकेट बेटिङ", "नेपालमा अनलाइन बेटिङ",
    "WhatsApp betting Nepal", "NPR betting site",
    "Khalti sports betting",
    // Casino
    "live casino Nepal", "Teen Patti Nepal",
    "Andar Bahar Nepal", "roulette Nepal", "नेपालमा लाइभ क्यासिनो",
    "नेपालमा क्यासिनो खेल्नुहोस्", "aviator game Nepal", "crash game Nepal",
    // Esports
    "PUBG tournament Nepal", "Free Fire Nepal tournament", "BGMI Nepal",
    "Valorant Nepal", "esports Nepal 2026", "नेपाल इस्पोर्ट्स",
    "competitive gaming Nepal", "mobile gaming Nepal",
    // Community & local — Kathmandu, Pokhara, Biratnagar, Nepalganj
    "betting site Kathmandu", "betting site Pokhara", "betting site Biratnagar",
    "betting site Nepalganj", "Nepali gamers 2026",
    "नेपाली गेमर्स", "Nepal gamer community", "नेपालको भरोसेमान्य बेटिङ साइट",
    // Bonus & offers
    "100% welcome bonus Nepal", "NPR 10000 bonus", "free bonus betting Nepal",
    "नेपालमा बोनस बेटिङ", "eSewa Khalti casino bonus",
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
    // MEDIUM COMPETITION LONG-TAIL — 2026 strategy
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
    // COMPETITOR TARGET KEYWORDS
    "best betting site Nepal vs MelBet", "MelBet Nepal alternative",
    "1xBet Nepal vs GorkhaBooks", "better than 1xBet Nepal",
    "Parimatch Nepal alternative", "safest betting platform Nepal comparison",
    "trusted site vs MelBet Nepal", "best odds Nepal comparison",
    "fastest payout vs competitors Nepal", "Nepal betting site reviews 2026",
    // QUICK WIN — Payment pages targets
    "eSewa betting deposit Nepal", "Khalti casino deposit Nepal",
    "IME Pay casino Nepal", "FonePay betting Nepal",
    "how to pay with eSewa on betting site", "Khalti deposit betting guide Nepal",
    "best withdrawal speed Nepal", "instant payout Nepal",
  ],
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LiveTickerSection />
      <TrendingGamesSection />
      <BonusBannerSection />
      <WhyChooseSection />
      <LiveMatchesSection />
      <HowToJoinSection />
      <StatsSection />
      <TestimonialsSection />
      <VIPSection />
      <FAQSection />
    </>
  );
}
