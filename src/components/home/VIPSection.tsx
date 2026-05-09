"use client";
import { motion } from "framer-motion";
import { Crown, Star, Zap, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";

const vipTiers = [
  {
    name: "Bronze",
    emoji: "🥉",
    color: "from-amber-700 to-amber-900",
    border: "border-amber-700/40",
    textColor: "text-amber-400",
    points: "0 – 5,000",
    perks: ["5% Weekly Cashback", "Standard Withdrawal", "Basic Support"],
  },
  {
    name: "Silver",
    emoji: "🥈",
    color: "from-gray-400 to-gray-600",
    border: "border-gray-400/40",
    textColor: "text-gray-300",
    points: "5,001 – 25,000",
    perks: ["7% Weekly Cashback", "Priority Withdrawal", "Dedicated Support", "Monthly Bonus"],
  },
  {
    name: "Gold",
    emoji: "🥇",
    color: "from-yellow-400 to-yellow-600",
    border: "border-yellow-400/40",
    textColor: "text-yellow-400",
    points: "25,001 – 1,00,000",
    perks: ["10% Weekly Cashback", "Instant Withdrawal", "VIP Support Line", "Weekly Bonus", "Exclusive Events"],
    featured: true,
  },
  {
    name: "Diamond",
    emoji: "💎",
    color: "from-blue-400 to-purple-600",
    border: "border-blue-400/40",
    textColor: "text-blue-300",
    points: "1,00,001+",
    perks: ["15% Weekly Cashback", "Same-day Withdrawals", "Personal Account Manager", "Daily Bonus", "Exclusive Events", "Birthday Surprise"],
  },
];

export default function VIPSection() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#03040a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 mb-4">
            <Crown className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-semibold">एक्सक्लुसिभ VIP प्रोग्राम · Exclusive VIP Program</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">
            <span className="gradient-text-crimson">VIP पुरस्कार</span> Unlock गर्नुहोस्
          </h2>
          <p className="text-cyan-400/60 text-sm mb-3">Unlock VIP Rewards — जति खेल्नुहोस् उतति कमाउनुहोस्</p>
          <p className="text-gray-400 max-w-xl mx-auto">
            The more you play, the more you earn. Rise through the ranks and unlock exclusive perks, bonuses, and personal service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {vipTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative rounded-2xl overflow-hidden border ${tier.border} transition-all duration-300 ${tier.featured ? "ring-2 ring-red-500/50 shadow-2xl shadow-red-500/20" : ""}`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-0 right-0 text-center py-1.5 bg-gradient-to-r from-red-600 to-rose-500">
                  <span className="text-white font-black text-xs uppercase tracking-wider">⭐ Most Popular</span>
                </div>
              )}
              <div className={`bg-gradient-to-br ${tier.color} p-6 ${tier.featured ? "pt-10" : ""}`}>
                <span className="text-5xl block mb-3">{tier.emoji}</span>
                <h3 className="text-white font-black text-2xl">{tier.name}</h3>
                <p className="text-white/70 text-xs mt-1">Points: {tier.points}</p>
              </div>
              <div className="glass p-5">
                <ul className="space-y-2.5 mb-5">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <Star className={`w-3.5 h-3.5 ${tier.textColor} fill-current shrink-0`} />
                      <span className="text-gray-300 text-sm">{perk}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => openWhatsApp(`I want to join the ${tier.name} VIP tier on GorkhaBooks!`)}
                  className={`w-full py-2.5 rounded-xl font-bold text-sm cursor-pointer transition-all ${
                    tier.featured
                      ? "bg-gradient-to-r from-red-600 to-rose-500 text-white"
                      : "border border-white/20 text-white hover:bg-white/5"
                  }`}
                >
                  Join {tier.name}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-crimson rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-rose-500 rounded-2xl flex items-center justify-center shrink-0">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-white font-black text-xl md:text-2xl">Already a high roller?</h3>
              <p className="text-gray-400 text-sm md:text-base mt-1">
                Contact us directly for our exclusive Diamond+ private membership with custom bonuses.
              </p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => openWhatsApp("I am interested in the Diamond VIP private membership on GorkhaBooks.")}
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold px-8 py-4 rounded-2xl text-base whitespace-nowrap cursor-pointer shadow-lg shadow-red-500/30"
          >
            <MessageCircle className="w-5 h-5" />
            Contact VIP Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
