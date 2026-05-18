"use client";
import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Gift, Clock, Star, Zap, Crown, Users, RefreshCw } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";
import { PROMOTIONS } from "@/lib/constants";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const iconMap: Record<string, ReactNode> = {
  welcome: <Gift className="w-7 h-7" />,
  cashback: <RefreshCw className="w-7 h-7" />,
  referral: <Users className="w-7 h-7" />,
  vip: <Crown className="w-7 h-7" />,
  daily: <Star className="w-7 h-7" />,
  reload: <Zap className="w-7 h-7" />,
};

const colorMap: Record<string, { text: string; border: string; bg: string }> = {
  gold: { text: "text-yellow-400", border: "border-yellow-500/30", bg: "bg-yellow-500/10" },
  green: { text: "text-green-400", border: "border-green-500/30", bg: "bg-green-500/10" },
  blue: { text: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10" },
  purple: { text: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10" },
  orange: { text: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10" },
  red: { text: "text-red-400", border: "border-red-500/30", bg: "bg-red-500/10" },
};

export default function PromotionsPageClient() {
  return (
    <div className="min-h-screen pt-20 pb-32 overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(245,197,24,0.1) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-4">
              <Gift className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold">Exclusive Offers for Nepal Players</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Nepal Betting Bonuses — eSewa, Khalti &amp; <span className="gradient-text-gold">Welcome Offers</span>
            </h1>
            <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-8">
              Get 100% welcome bonus up to NPR 10,000, weekly cashback, referral rewards, and VIP bonuses. Deposit via eSewa, Khalti, IME Pay and claim exclusive Nepal betting promotions with instant withdrawals.
            </p>

            {/* Highlight stats */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mb-8 sm:mb-10">
              {[
                { label: "Welcome Bonus", value: "100%", icon: "🎁" },
                { label: "Max Bonus", value: "NPR 10,000", icon: "💰" },
                { label: "Weekly Cashback", value: "10%", icon: "🔄" },
                { label: "Referral Reward", value: "NPR 500", icon: "👥" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass px-5 py-3 rounded-2xl border border-white/10 text-center"
                >
                  <span className="text-2xl block mb-1">{s.icon}</span>
                  <p className="gradient-text-gold font-black text-xl">{s.value}</p>
                  <p className="text-gray-500 text-xs">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promo Cards */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-16">
        <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROMOTIONS.map((promo) => {
            const colors = colorMap[promo.color] || colorMap.gold;
            return (
              <motion.div
                key={promo.id}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`glass rounded-3xl overflow-hidden border ${colors.border} transition-all duration-300`}
              >
                {/* Card header */}
                <div className={`bg-gradient-to-br ${promo.gradient} p-7 relative overflow-hidden`}>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-black/40 rounded-full text-white text-xs font-black">{promo.badge}</span>
                  </div>
                  <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center ${colors.text} mb-4`}>
                    {iconMap[promo.id] || <Gift className="w-7 h-7" />}
                  </div>
                  <h3 className="text-white font-black text-2xl mb-1">{promo.title}</h3>
                  <p className="text-white/80 text-sm">{promo.subtitle}</p>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <div className={`text-3xl font-black ${colors.text} mb-3`}>{promo.amount}</div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{promo.description}</p>

                  <div className="flex items-center gap-2 mb-5">
                    <Clock className={`w-4 h-4 ${colors.text}`} />
                    <span className={`text-xs font-semibold ${colors.text}`}>{promo.expiry}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    onClick={() => openWhatsApp(`I want to claim the ${promo.title} – ${promo.subtitle} on GorkhaBooks!`)}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3.5 rounded-xl text-sm cursor-pointer hover:from-green-400 hover:to-emerald-500 transition-all shadow-lg shadow-green-500/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Claim on WhatsApp
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Limited Time Banner */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-8 md:p-14"
          style={{ background: "linear-gradient(135deg, #1a0a00, #2a1500, #1a0a00)", border: "1px solid rgba(245,197,24,0.3)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="text-7xl float-animation">⏰</div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-red-400 live-dot" />
                <span className="text-red-400 text-xs font-bold">LIMITED TIME OFFER</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                Double Your Money Today!
              </h2>
              <p className="text-gray-300 text-base mb-2">
                First 100 new members today get an <span className="text-yellow-400 font-bold">EXTRA 50% top-up</span> on their welcome bonus.
              </p>
              <p className="text-yellow-400 font-bold text-xl mb-6">Up to NPR 15,000 total bonus!</p>
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                onClick={() => openWhatsApp("I want to claim the LIMITED TIME offer – extra 50% top-up welcome bonus on GorkhaBooks!")}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-black px-8 py-4 rounded-2xl text-base cursor-pointer pulse-glow"
              >
                <Zap className="w-5 h-5" />
                Claim Before It Expires!
              </motion.button>
            </div>
            <div className="shrink-0">
              <div className="flex gap-3">
                {["08", "45", "32"].map((val, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-16 h-16 glass-gold rounded-xl flex items-center justify-center">
                      <span className="gradient-text-gold font-black text-2xl">{val}</span>
                    </div>
                    <span className="text-gray-500 text-[10px] mt-1">{["HRS", "MIN", "SEC"][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Terms note */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto">
        <div className="glass rounded-2xl p-6 border border-white/5 text-center">
          <p className="text-gray-500 text-xs">
            All bonuses are subject to terms and conditions. Minimum deposit NPR 500 required to activate bonuses.
            Wagering requirements apply. Play responsibly. 18+ only. Contact WhatsApp support for full details.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            onClick={() => openWhatsApp("Please explain all bonus terms and conditions on GorkhaBooks.")}
            className="mt-4 inline-flex items-center gap-2 text-green-400 text-sm font-semibold hover:text-green-300 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />

            Ask about bonus terms on WhatsApp
          </motion.button>
        </div>
      </section>

      {/* SEO block */}
      <section className="px-4 md:px-6 max-w-4xl mx-auto pb-16">
        <div className="pt-10 border-t border-white/5 text-center">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
            Best Betting Bonuses & Promotions in Nepal — GorkhaBooks
          </h2>
          <p className="text-gray-600 text-xs font-medium mb-4">नेपालको सर्वश्रेष्ठ बेटिङ बोनस र प्रमोसनहरू</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            GorkhaBooks offers Nepal&apos;s best <strong className="text-gray-400">welcome bonus Nepal</strong> — 100% match up to NPR 10,000 on your first deposit. Claim <strong className="text-gray-400">free betting bonus Nepal</strong>, weekly cashback, referral rewards, daily login bonuses, and exclusive <strong className="text-gray-400">VIP rewards Nepal</strong>. eSewa and Khalti deposits accepted. Minimum deposit NPR 500.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            GorkhaBooks मा <strong className="text-gray-400">१००% वेलकम बोनस</strong> — पहिलो जम्मामा NPR १०,००० सम्म बोनस पाउनुस्। साप्ताहिक क्यासब्याक, रेफरल बोनस र <strong className="text-gray-400">VIP पुरस्कार</strong> हरेक हप्ता। eSewa र Khalti मार्फत जम्मा गर्नुस्।
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Welcome Bonus Nepal · वेलकम बोनस",
              "100% Deposit Bonus · १००% बोनस",
              "Free Betting Bonus Nepal · निःशुल्क बोनस",
              "Weekly Cashback Nepal · क्यासब्याक",
              "VIP Rewards Nepal · VIP पुरस्कार",
              "Referral Bonus Nepal · रेफरल बोनस",
              "Daily Login Bonus · दैनिक बोनस",
              "Best Bonus Betting Site Nepal · सर्वोत्तम बोनस",
            ].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 text-xs">{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
