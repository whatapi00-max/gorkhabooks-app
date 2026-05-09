"use client";
import { motion } from "framer-motion";
import { Users, Flame } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";
import { SPORTS, CASINO_GAMES } from "@/lib/constants";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TrendingGamesSection() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 mb-4">
          <Flame className="w-4 h-4 text-red-400" />
          <span className="text-red-400 text-sm font-semibold">नेपालको मनपर्ने खेलहरू · Trending Now</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
          नेपालले <span className="gradient-text-crimson">मन पराउने खेल</span>
        </h2>
        <p className="text-cyan-400/60 text-base md:text-lg">Nepal's Most Popular Games — अहिले नै खेल्नुहोस्</p>
        <p className="text-gray-400 max-w-xl mx-auto">
          From live cricket betting to casino classics — everything is available 24/7 with instant deposits and withdrawals.
        </p>
      </motion.div>

      <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
        <span>🏆</span> Sports Betting
      </h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10 sm:mb-12"
      >
        {SPORTS.map((sport) => (
          <motion.div
            key={sport.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => openWhatsApp(`I want to bet on ${sport.name} on GorkhaBooks!`)}
            className="cursor-pointer group relative rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/30 transition-all duration-300"
          >
            <div className="relative h-28">
              <Image
                src={sport.image}
                alt={`${sport.name} betting Nepal - GorkhaBooks`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <span className="absolute top-2 right-2 text-xl">{sport.icon}</span>
              <div className="absolute inset-x-0 bottom-0 p-3 text-center">
                <h4 className="text-white font-bold text-sm">{sport.name}</h4>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 live-dot" />
                  <span className="text-red-400 text-[10px] font-semibold">{sport.live} LIVE · {sport.matches} matches</span>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openWhatsApp(`I want to bet on ${sport.name} on GorkhaBooks!`)}
              className="flex-1 py-2.5 bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold rounded-xl text-sm cursor-pointer hover:from-red-500 hover:to-rose-400 transition-all"
            >
              Bet Now
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
        <span>🎰</span> Live Casino
      </h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
      >
        {CASINO_GAMES.map((game) => (
          <motion.div
            key={game.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/20 transition-all duration-300"
          >
            <div className={`bg-gradient-to-br ${game.gradient} p-6 relative`}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl">{game.emoji}</span>
                <span className="px-3 py-1 bg-black/40 rounded-full text-white text-xs font-bold">
                  {game.badge}
                </span>
              </div>
              <h4 className="text-white font-black text-xl">{game.name}</h4>
              <p className="text-white/70 text-sm">{game.type}</p>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400 text-sm font-semibold">{game.players.toLocaleString()} playing</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 live-dot" />
                  <span className="text-red-400 text-xs font-semibold">LIVE</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                <span>Min: {game.minBet}</span>
                <span>Max: {game.maxBet}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openWhatsApp(`I want to play ${game.name} on GorkhaBooks!`)}
                className="w-full flex-1 py-2.5 bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold rounded-xl text-sm cursor-pointer hover:from-red-500 hover:to-rose-400 transition-all"
              >
                Play Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
