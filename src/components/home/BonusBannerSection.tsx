"use client";
import { motion } from "framer-motion";
import { MessageCircle, Zap, Gift, Clock, Flame } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";

export default function BonusBannerSection() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #060b1a 0%, #12040a 50%, #060b1a 100%)",
            border: "1px solid rgba(232,25,44,0.25)",
            boxShadow: "0 0 60px rgba(232,25,44,0.08), 0 0 120px rgba(0,102,255,0.05)",
          }}
        >
          {/* BG glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 p-5 sm:p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* LEFT */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
                  <Flame className="w-4 h-4 text-red-400" />
                  <span className="text-red-400 text-sm font-bold">🎁 वेलकम बोनस अफर — सीमित समय!</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 leading-tight">
                  पाउनुहोस्{" "}
                  <span className="gradient-text-crimson text-glow-crimson">१००%</span>
                  <br />
                  <span className="text-white">Welcome Bonus</span>
                </h2>
                <p className="text-cyan-400/80 text-sm sm:text-base mb-2 font-semibold">
                  First Deposit Bonus — Up to NPR 10,000 FREE!
                </p>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                  जुनसुकै रकम जम्मा गर्नुहोस् र <strong className="text-red-400">१००% बोनस</strong> तुरन्त पाउनुहोस्।
                  Deposit any amount — get <strong className="text-cyan-400">double your money</strong> instantly credited.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => openWhatsApp("Hello! म GorkhaBooks मा १००% Welcome Bonus claim गर्न चाहन्छु!")}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold px-8 py-4 rounded-2xl text-base cursor-pointer shadow-xl"
                    style={{ boxShadow: "0 0 25px rgba(232,25,44,0.4)" }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp मा Claim गर्नुस्
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => openWhatsApp("Tell me more about all GorkhaBooks promotions and bonuses.")}
                    className="flex items-center justify-center gap-2 border-2 border-cyan-500/50 text-cyan-300 font-bold px-8 py-4 rounded-2xl text-base cursor-pointer hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
                  >
                    सबै अफरहरू हेर्नुस् · View All Offers
                  </motion.button>
                </div>
              </div>

              {/* RIGHT — feature list */}
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: <Gift className="w-6 h-6 text-red-400" />,
                    title: "१००% First Deposit Bonus",
                    desc: "पहिलो जम्मामा दोब्बर — NPR १०,००० सम्म",
                    bg: "bg-red-500/10 border-red-500/20",
                  },
                  {
                    icon: <Zap className="w-6 h-6 text-cyan-400" />,
                    title: "Instant Account Activation",
                    desc: "५ मिनेटभित्र खाता सक्रिय — Start Playing Now!",
                    bg: "bg-cyan-500/10 border-cyan-500/20",
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-blue-400" />,
                    title: "साप्ताहिक Cashback · Weekly Cashback",
                    desc: "हरेक सोमबार हानि गरेको रकमको १०% फिर्ता",
                    bg: "bg-blue-500/10 border-blue-500/20",
                  },
                  {
                    icon: <MessageCircle className="w-6 h-6 text-purple-400" />,
                    title: "२४/७ WhatsApp Support",
                    desc: "सधैं उपलब्ध — ३० सेकेन्डभित्र जवाफ",
                    bg: "bg-purple-500/10 border-purple-500/20",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-2xl border ${item.bg}`}
                  >
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-white font-bold text-sm">{item.title}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Payment methods */}
            <div className="mt-8 pt-6 border-t border-white/8">
              <p className="text-gray-500 text-xs mb-3 text-center sm:text-left">
                स्वीकृत भुक्तानी विधिहरू · Accepted Payment Methods
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { label: "eSewa",        color: "bg-green-600",  symbol: "e" },
                  { label: "Khalti",       color: "bg-purple-600", symbol: "K" },
                  { label: "IME Pay",      color: "bg-blue-600",   symbol: "I" },
                  { label: "Bank Transfer",color: "bg-gray-700",   symbol: "🏦" },
                  { label: "ConnectIPS",   color: "bg-red-700",    symbol: "C" },
                  { label: "FonePay",      color: "bg-teal-600",   symbol: "F" },
                ].map((p) => (
                  <div key={p.label} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${p.color} shadow-md`}>
                    <span className="font-black text-sm text-white">{p.symbol}</span>
                    <span className="text-xs font-bold text-white">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgency bar */}
            <div className="mt-6 pt-5 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-sm font-bold">
                  अफर सीमित समयको लागि! · Offer expires soon — limited slots remaining.
                </span>
              </div>
              <div className="flex items-center gap-3">
                {["08", "24", "47"].map((val, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-red-500/20">
                      <span className="text-red-400 font-black text-xl">{val}</span>
                    </div>
                    {i < 2 && <span className="text-red-500 font-black text-xl">:</span>}
                  </div>
                ))}
                <span className="text-gray-500 text-xs ml-1">HRS : MIN : SEC</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
