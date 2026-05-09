"use client";
import { motion } from "framer-motion";
import { TrendingUp, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";
import { LIVE_MATCHES } from "@/lib/constants";

export default function LiveMatchesSection() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 gap-3 sm:gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/40 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-500 live-dot" />
              <span className="text-red-400 text-sm font-bold">🔴 लाइभ म्याचहरू · Live &amp; Upcoming Matches</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              फिचर्ड <span className="gradient-text-crimson">Matches</span>
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => openWhatsApp("Show me all live matches on GorkhaBooks!")}
            className="flex items-center gap-2 border border-cyan-500/50 text-cyan-400 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-cyan-500/10 transition-colors cursor-pointer"
          >
            View All Matches
            <TrendingUp className="w-4 h-4" />
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {LIVE_MATCHES.map((match, i) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/20 transition-all duration-300"
            >
              {/* Match header */}
              <div className="flex items-center justify-between px-5 py-3 bg-white/3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs">{match.sport}</span>
                  <span className="text-gray-600">·</span>
                  <span className="text-gray-400 text-xs">{match.tournament}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {match.status === "LIVE" ? (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 live-dot" />
                      <span className="text-red-400 text-xs font-bold">LIVE</span>
                    </>
                  ) : (
                    <span className="text-blue-400 text-xs font-semibold">{match.time}</span>
                  )}
                </div>
              </div>

              {/* Match body */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex-1 text-center">
                    <p className="text-white font-bold text-base md:text-lg mb-1">{match.team1}</p>
                    {match.status === "LIVE" && (
                      <span className="text-red-400 font-black text-xl md:text-2xl">{match.score1}</span>
                    )}
                  </div>
                  <div className="px-4">
                    <span className="text-gray-500 font-bold text-sm">VS</span>
                    {match.status === "LIVE" && (
                      <p className="text-gray-500 text-xs text-center mt-1">{match.overs}</p>
                    )}
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-white font-bold text-base md:text-lg mb-1">{match.team2}</p>
                    {match.status === "LIVE" && (
                      <p className="text-gray-400 font-black text-xl md:text-2xl">{match.score2}</p>
                    )}
                  </div>
                </div>

                {/* Odds */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: match.team1.split(" ")[0], odd: match.odds1 },
                    { label: "Draw", odd: match.oddsDraw },
                    { label: match.team2.split(" ")[0], odd: match.odds2 },
                  ].map((o, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openWhatsApp(`I want to bet on ${match.team1} vs ${match.team2}. My pick: ${o.label} at odds ${o.odd}`)}
                      className="odds-badge flex flex-col items-center py-2.5 rounded-xl cursor-pointer"
                    >
                      <span className="text-gray-400 text-[10px] mb-1">{o.label}</span>
                      <span className="text-green-400 font-black text-sm">{o.odd}</span>
                    </motion.button>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openWhatsApp(`I want to bet on ${match.team1} vs ${match.team2} (${match.tournament})`)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold py-3 rounded-xl text-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Bet on WhatsApp
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
