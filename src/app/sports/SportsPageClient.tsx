"use client";
import { motion } from "framer-motion";
import { MessageCircle, Zap, TrendingUp, Filter } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";
import { SPORTS } from "@/lib/constants";
import { useState } from "react";

const allMatches = [
  { id: 1, sport: "Cricket", tournament: "IPL 2025", team1: "Mumbai Indians", team2: "CSK", time: "LIVE", odds1: "1.45", oddsDraw: "8.00", odds2: "2.90", status: "LIVE" },
  { id: 2, sport: "Cricket", tournament: "IPL 2025", team1: "RCB", team2: "KKR", time: "3:30 PM", odds1: "2.10", oddsDraw: "7.50", odds2: "1.75", status: "UPCOMING" },
  { id: 3, sport: "Cricket", tournament: "Nepal T20 League", team1: "Pokhara Avengers", team2: "Kathmandu Kings", time: "6:00 PM", odds1: "1.85", oddsDraw: "9.00", odds2: "2.05", status: "UPCOMING" },
  { id: 4, sport: "Football", tournament: "Premier League", team1: "Arsenal", team2: "Chelsea", time: "LIVE", odds1: "1.70", oddsDraw: "3.50", odds2: "4.20", status: "LIVE" },
  { id: 5, sport: "Football", tournament: "La Liga", team1: "Real Madrid", team2: "Barcelona", time: "8:00 PM", odds1: "2.20", oddsDraw: "3.40", odds2: "3.10", status: "UPCOMING" },
  { id: 6, sport: "Football", tournament: "Champions League", team1: "PSG", team2: "Bayern Munich", time: "Tomorrow", odds1: "2.50", oddsDraw: "3.20", odds2: "2.80", status: "UPCOMING" },
  { id: 7, sport: "Tennis", tournament: "Wimbledon 2025", team1: "Djokovic", team2: "Alcaraz", time: "LIVE", odds1: "2.10", oddsDraw: "-", odds2: "1.75", status: "LIVE" },
  { id: 8, sport: "Tennis", tournament: "ATP Finals", team1: "Medvedev", team2: "Sinner", time: "5:00 PM", odds1: "2.30", oddsDraw: "-", odds2: "1.65", status: "UPCOMING" },
  { id: 9, sport: "Esports", tournament: "BGMI Masters", team1: "Team Soul", team2: "GodLike", time: "LIVE", odds1: "1.90", oddsDraw: "-", odds2: "2.00", status: "LIVE" },
  { id: 10, sport: "Kabaddi", tournament: "Pro Kabaddi League", team1: "Patna Pirates", team2: "UP Yoddhas", time: "7:30 PM", odds1: "1.95", oddsDraw: "12.00", odds2: "1.90", status: "UPCOMING" },
];

const categories = ["All", "Cricket", "Football", "Tennis", "Esports", "Kabaddi"];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function SportsPageClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? allMatches : allMatches.filter(m => m.sport === activeFilter);

  return (
    <div className="min-h-screen pt-20 pb-32 overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(245,197,24,0.07) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(0,255,136,0.05) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-400 live-dot" />
              <span className="text-green-400 text-sm font-semibold">Live Betting Available</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Nepal Sports <span className="gradient-text-gold">Betting</span> — IPL, Cricket & Football
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Bet on 1000+ matches daily across Nepal cricket betting, IPL 2026, football betting, kabaddi & esports. Best odds Nepal with eSewa/Khalti deposits and instant withdrawals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              onClick={() => openWhatsApp("I want to start sports betting on GorkhaBooks!")}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black px-8 py-4 rounded-2xl text-base shadow-xl shadow-green-500/30 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              Start Betting Now
            </motion.button>
          </motion.div>

          {/* Sport category cards */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10 sm:mb-14">
            {SPORTS.map((sport, i) => (
              <motion.div
                key={sport.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                onClick={() => openWhatsApp(`I want to bet on ${sport.name} matches on GorkhaBooks!`)}
                className="cursor-pointer glass rounded-2xl p-5 text-center border border-white/10 hover:border-yellow-500/30 transition-all"
              >
                <div className="text-4xl mb-3">{sport.icon}</div>
                <h3 className="text-white font-bold text-sm mb-1">{sport.name}</h3>
                <div className="flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 live-dot" />
                  <span className="text-red-400 text-[10px] font-bold">{sport.live} Live</span>
                </div>
                <p className="text-gray-500 text-[10px] mt-1">{sport.matches} matches</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Matches Section */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-yellow-400" />
            All Matches
          </h2>
          {/* Filters */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-gray-400" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-yellow-500 text-black"
                    : "glass border border-white/10 text-gray-400 hover:border-yellow-500/30 hover:text-yellow-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          variants={containerVariants} initial="hidden" animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {filtered.map((match) => (
            <motion.div
              key={match.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-500/20 transition-all"
            >
              <div className="flex items-center justify-between px-5 py-3 bg-white/3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs font-medium">{match.sport}</span>
                  <span className="text-gray-600 text-xs">·</span>
                  <span className="text-gray-500 text-xs">{match.tournament}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {match.status === "LIVE" ? (
                    <><span className="w-1.5 h-1.5 rounded-full bg-red-400 live-dot" /><span className="text-red-400 text-xs font-bold">LIVE</span></>
                  ) : (
                    <span className="text-blue-400 text-xs font-semibold">{match.time}</span>
                  )}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-white font-bold text-sm md:text-base flex-1 text-center">{match.team1}</p>
                  <span className="text-gray-500 font-bold text-sm px-4">VS</span>
                  <p className="text-white font-bold text-sm md:text-base flex-1 text-center">{match.team2}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: "1", odd: match.odds1 },
                    { label: "X", odd: match.oddsDraw },
                    { label: "2", odd: match.odds2 },
                  ].map((o, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      onClick={() => openWhatsApp(`I want to bet on ${match.team1} vs ${match.team2}. Pick: ${o.label} at ${o.odd}`)}
                      className="odds-badge flex flex-col items-center py-2.5 rounded-xl cursor-pointer"
                    >
                      <span className="text-gray-400 text-[10px] mb-0.5">{o.label}</span>
                      <span className="text-green-400 font-black text-sm">{o.odd}</span>
                    </motion.button>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={() => openWhatsApp(`Place bet on ${match.team1} vs ${match.team2} – ${match.tournament}`)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 rounded-xl text-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Place Bet on WhatsApp
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-14 rounded-3xl p-8 md:p-12 text-center"
          style={{ background: "linear-gradient(135deg, rgba(0,255,136,0.08), rgba(245,197,24,0.08))", border: "1px solid rgba(0,255,136,0.2)" }}
        >
          <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Ready to Place Your First Bet?</h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Get started in 5 minutes. Join via WhatsApp, deposit as little as NPR 500, and start winning today!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            onClick={() => openWhatsApp("Hello! I want to start sports betting on GorkhaBooks. Please help me register.")}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black px-10 py-4 rounded-2xl text-base shadow-xl shadow-green-500/30 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            Join & Start Betting Now
          </motion.button>
        </motion.div>

        {/* SEO block */}
        <div className="mt-14 pt-10 border-t border-white/5 text-center max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
            Nepal&apos;s Best Sports Betting & Esports Platform — GorkhaBooks
          </h2>
          <p className="text-gray-600 text-xs font-medium mb-4">नेपालको सर्वश्रेष्ठ स्पोर्ट्स बेटिङ र इस्पोर्ट्स प्लेटफर्म</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            GorkhaBooks is Nepal&apos;s #1 <strong className="text-gray-400">sports betting site</strong> with the best odds on <strong className="text-gray-400">cricket betting Nepal</strong>, IPL betting, football betting, kabaddi, and <strong className="text-gray-400">esports tournaments Nepal</strong>. Bet on PUBG, Free Fire, Valorant, BGMI, and all major international sports. <strong className="text-gray-400">Live betting Nepal</strong> available 24/7 with instant WhatsApp registration.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            क्रिकेट बेटिङ, फुटबल बेटिङ, कबड्डी र इस्पोर्ट्समा बेट लगाउनुस्। <strong className="text-gray-400">IPL बेटिङ नेपाल</strong>, प्रिमियर लिग, च्याम्पियन्स लिग र नेपाल T20 लिगमा सर्वोत्तम अड्स। GorkhaBooks — <strong className="text-gray-400">नेपालको #१ बेटिङ साइट</strong>।
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Cricket Betting Nepal · क्रिकेट बेटिङ",
              "IPL Betting 2026 · IPL बेटिङ",
              "Football Betting Nepal · फुटबल बेटिङ",
              "Esports Betting Nepal · इस्पोर्ट्स",
              "PUBG Tournament Nepal · PUBG टुर्नामेन्ट",
              "Live Betting Nepal · लाइभ बेटिङ",
              "Kabaddi Betting · कबड्डी बेटिङ",
              "Best Odds Nepal · सर्वोत्तम अड्स",
            ].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 text-xs">{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
