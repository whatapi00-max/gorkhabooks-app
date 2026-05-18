"use client";
import { motion } from "framer-motion";
import { MessageCircle, Users, Crown, Zap, Play } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";


const casinoSections = [
  {
    id: "roulette",
    emoji: "🎡",
    name: "Live Roulette",
    desc: "The iconic spinning wheel with real-time live dealers. European and American tables available with limits from NPR 100 to NPR 1,00,000.",
    gradient: "from-red-600 to-red-900",
    features: ["European Roulette", "American Roulette", "Mini Roulette", "Auto Roulette"],
    players: 1240,
    minBet: "NPR 100",
    maxBet: "NPR 1,00,000",
  },
  {
    id: "blackjack",
    emoji: "🃏",
    name: "Blackjack VIP",
    desc: "Beat the dealer and hit 21 in our premium Blackjack tables. Multiple variants with professional live dealers available 24/7.",
    gradient: "from-green-700 to-green-950",
    features: ["Classic Blackjack", "VIP Blackjack", "Speed Blackjack", "Infinite Blackjack"],
    players: 890,
    minBet: "NPR 200",
    maxBet: "NPR 2,00,000",
  },
  {
    id: "teenpatti",
    emoji: "🎴",
    name: "Teen Patti",
    desc: "Nepal and India's most loved card game with live dealers. Play classic and modern variants with exciting side bets.",
    gradient: "from-yellow-500 to-yellow-800",
    features: ["Classic Teen Patti", "Teen Patti Joker", "Teen Patti One-Day", "Muflis Variant"],
    players: 3200,
    minBet: "NPR 50",
    maxBet: "NPR 50,000",
  },
  {
    id: "slots",
    emoji: "🎰",
    name: "Mega Slots",
    desc: "Hundreds of slot games with massive jackpots. Classic 3-reel, modern 5-reel video slots with bonus rounds and free spins.",
    gradient: "from-purple-600 to-purple-950",
    features: ["Progressive Jackpots", "Bonus Round Slots", "Megaways Slots", "Classic Slots"],
    players: 560,
    minBet: "NPR 10",
    maxBet: "NPR 10,000",
  },
  {
    id: "andarbahar",
    emoji: "🀄",
    name: "Andar Bahar",
    desc: "The traditional Indian card game reimagined with live dealers. Simple rules, fast gameplay, and massive potential wins.",
    gradient: "from-pink-600 to-rose-900",
    features: ["Classic Andar Bahar", "Turbo Andar Bahar", "Live Dealer", "Side Bets"],
    players: 2100,
    minBet: "NPR 50",
    maxBet: "NPR 75,000",
  },
  {
    id: "baccarat",
    emoji: "👑",
    name: "Baccarat Royal",
    desc: "The game of kings. Our premium Baccarat tables offer the most sophisticated casino experience for high rollers.",
    gradient: "from-amber-500 to-yellow-700",
    features: ["Punto Banco", "Baccarat Squeeze", "Super 6 Baccarat", "Mini Baccarat"],
    players: 740,
    minBet: "NPR 500",
    maxBet: "NPR 5,00,000",
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function CasinoPageClient() {
  return (
    <div className="min-h-screen pt-20 pb-32 overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(139,92,246,0.1) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(229,62,62,0.08) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 mb-4">
              <Crown className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-semibold">Premium Live Casino</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 leading-tight">
              Nepal Online <span className="gradient-text-gold">Casino</span> — Teen Patti, Aviator & Live Games
            </h1>
            <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-8">
              Real dealers, real tables, real winnings. Play Teen Patti, Aviator, Roulette, Blackjack, Andar Bahar with eSewa & Khalti deposits. Nepal's #1 trusted live casino with instant withdrawals.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-2 sm:px-0">
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                onClick={() => openWhatsApp("I want to play Live Casino games on GorkhaBooks!")}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-black px-6 sm:px-8 py-4 rounded-2xl text-sm sm:text-base shadow-xl shadow-purple-500/30 cursor-pointer w-full sm:w-auto"
              >
                <Play className="w-5 h-5" />
                Play Live Casino Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                onClick={() => openWhatsApp("I want to claim my casino welcome bonus on GorkhaBooks!")}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-black px-6 sm:px-8 py-4 rounded-2xl text-sm sm:text-base cursor-pointer w-full sm:w-auto"
              >
                <Zap className="w-5 h-5" />
                Claim Casino Bonus
              </motion.button>
            </div>

            {/* Live stats bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              {[
                { label: "Players Online", value: "8,420+", color: "text-green-400" },
                { label: "Tables Running", value: "150+", color: "text-yellow-400" },
                { label: "Jackpot Today", value: "NPR 2,50,000", color: "text-purple-400" },
                { label: "Min Bet", value: "NPR 10", color: "text-blue-400" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10">
                  <span className={`font-black text-sm ${s.color}`}>{s.value}</span>
                  <span className="text-gray-500 text-xs">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Casino game cards */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-12 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl md:text-3xl font-black text-white mb-8"
        >
          All Casino Games
        </motion.h2>
        <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {casinoSections.map((game) => (
            <motion.div
              key={game.id}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${game.gradient} p-7 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
                <div className="relative z-10">
                  <span className="text-6xl block mb-3 float-animation">{game.emoji}</span>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-black text-2xl">{game.name}</h3>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-300 live-dot" />
                        <span className="text-white/80 text-xs font-bold">LIVE</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-white/70" />
                        <span className="text-white/70 text-xs">{game.players.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{game.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {game.features.map((f) => (
                    <span key={f} className="px-3 py-1 bg-white/5 rounded-full text-gray-400 text-[11px] border border-white/10">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-5 pt-3 border-t border-white/5">
                  <span>Min: <span className="text-green-400 font-bold">{game.minBet}</span></span>
                  <span>Max: <span className="text-yellow-400 font-bold">{game.maxBet}</span></span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => openWhatsApp(`I want to play ${game.name} on GorkhaBooks live casino!`)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-3.5 rounded-xl text-sm cursor-pointer hover:from-yellow-300 hover:to-amber-400 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Play {game.name}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Jackpot section */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl p-8 md:p-14 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a0a2e, #0d0118, #1a0a0a)", border: "1px solid rgba(139,92,246,0.3)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <div className="text-6xl mb-4 float-animation">🏆</div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-4">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-bold">MEGA JACKPOT ACTIVE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-3">
              Current Jackpot
            </h2>
            <p className="text-4xl md:text-6xl font-black gradient-text-gold text-glow-gold mb-6">
              NPR 2,50,000
            </p>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Play any eligible slot or casino game for a chance to win the mega jackpot. New winners every day!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              onClick={() => openWhatsApp("I want to try for the Mega Jackpot on GorkhaBooks casino!")}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-black px-10 py-4 rounded-2xl text-lg cursor-pointer pulse-glow"
            >
              <Crown className="w-6 h-6" />
              Try for Jackpot Now!
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Quick game cards from constants */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center glass rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">New to Live Casino?</h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Our support team will guide you through everything. Join on WhatsApp and our team will help you get started with a welcome bonus!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            onClick={() => openWhatsApp("Hi! I am new to online casino and want to start playing on GorkhaBooks. Please guide me.")}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black px-10 py-4 rounded-2xl text-base cursor-pointer shadow-lg shadow-green-500/30"
          >
            <MessageCircle className="w-5 h-5" />
            Get Guided by Our Team
          </motion.button>
        </motion.div>
      </section>

      {/* SEO block */}
      <section className="px-4 md:px-6 max-w-4xl mx-auto pb-16">
        <div className="pt-10 border-t border-white/5 text-center">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
            Best Live Casino Nepal — Teen Patti, Roulette, Slots | GorkhaBooks
          </h2>
          <p className="text-gray-600 text-xs font-medium mb-4">नेपालको सर्वश्रेष्ठ लाइभ क्यासिनो — टिन पत्ती, रुलेट, स्लट</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            GorkhaBooks is Nepal&apos;s #1 <strong className="text-gray-400">online casino Nepal</strong> with live dealers available 24/7. Play <strong className="text-gray-400">Teen Patti online Nepal</strong>, Live Roulette, Andar Bahar, Blackjack VIP, Baccarat Royal and 100s of <strong className="text-gray-400">slot games Nepal</strong>. Minimum bet from just NPR 10. <strong className="text-gray-400">Mega Jackpot NPR 2,50,000</strong> available daily. Deposit via eSewa and Khalti.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            नेपालमा <strong className="text-gray-400">लाइभ क्यासिनो</strong> खेल्नुहोस् — टिन पत्ती, अन्दर बाहर, रुलेट, ब्ल्याकज्याक र स्लट। <strong className="text-gray-400">GorkhaBooks क्यासिनो</strong>मा NPR १० देखि बेट गर्न सकिन्छ। eSewa र Khalti मार्फत जम्मा गर्नुस्। मेगा ज्याकपट हरेक दिन।
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Live Casino Nepal · लाइभ क्यासिनो",
              "Teen Patti Nepal · टिन पत्ती",
              "Andar Bahar Nepal · अन्दर बाहर",
              "Online Roulette Nepal · रुलेट",
              "Slot Games Nepal · स्लट गेम्स",
              "Blackjack VIP Nepal · ब्ल्याकज्याक",
              "Jackpot Nepal · ज्याकपट",
              "Live Dealer Casino · लाइभ डिलर",
            ].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 text-xs">{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
