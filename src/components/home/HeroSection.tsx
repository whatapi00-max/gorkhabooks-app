"use client";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Zap, Shield, Star, Trophy, Flame, Award, BadgeCheck } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";
import { useEffect, useState } from "react";
import Image from "next/image";

function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <span>{count.toLocaleString()}{suffix}</span>;
}

const particles = [
  { id: 0,  x: 8,   y: 15,  s: 3,   d: 13, dl: 0.0,  c: "bg-red-500/40" },
  { id: 1,  x: 92,  y: 22,  s: 2.5, d: 11, dl: 0.8,  c: "bg-cyan-400/40" },
  { id: 2,  x: 20,  y: 70,  s: 4,   d: 15, dl: 1.5,  c: "bg-blue-500/30" },
  { id: 3,  x: 78,  y: 60,  s: 2,   d: 10, dl: 2.2,  c: "bg-red-400/30" },
  { id: 4,  x: 50,  y: 88,  s: 3.5, d: 14, dl: 0.4,  c: "bg-cyan-500/25" },
  { id: 5,  x: 35,  y: 30,  s: 2.2, d: 12, dl: 1.8,  c: "bg-purple-500/35" },
  { id: 6,  x: 65,  y: 10,  s: 1.8, d: 11, dl: 3.0,  c: "bg-red-500/25" },
  { id: 7,  x: 12,  y: 45,  s: 3.2, d: 13, dl: 0.6,  c: "bg-blue-400/30" },
  { id: 8,  x: 85,  y: 80,  s: 2.8, d: 16, dl: 2.5,  c: "bg-cyan-400/20" },
  { id: 9,  x: 45,  y: 55,  s: 1.5, d: 9,  dl: 1.1,  c: "bg-red-400/40" },
  { id: 10, x: 70,  y: 40,  s: 2.0, d: 12, dl: 3.5,  c: "bg-purple-400/30" },
  { id: 11, x: 28,  y: 92,  s: 3.8, d: 14, dl: 0.2,  c: "bg-cyan-500/30" },
];

const HEADLINES = [
  { en: "Nepal's #1 Betting Site", ne: "नेपालको #१ बेटिङ साइट" },
  { en: "eSewa & Khalti Betting", ne: "eSewa र Khalti बेटिङ" },
  { en: "IPL 2026 Cricket Betting", ne: "IPL 2026 क्रिकेट बेटिङ" },
  { en: "Teen Patti & Aviator", ne: "Teen Patti र Aviator" },
  { en: "Fast Withdrawal Nepal", ne: "नेपालमा छिटो निकासी" },
];

const FEATURES = [
  { icon: "🏏", label: "IPL Cricket Betting", ne: "IPL क्रिकेट बेटिङ" },
  { icon: "⚽", label: "Football Betting Nepal", ne: "फुटबल बेटिङ नेपाल" },
  { icon: "�", label: "Teen Patti Live", ne: "Teen Patti लाइभ" },
  { icon: "✈️", label: "Aviator Game", ne: "Aviator खेल" },
];

const TRUST_MESSAGES = [
  { icon: Award, text: "आयो गोर्खाली", color: "text-amber-400" },
  { icon: BadgeCheck, text: "१००% विश्वासिलो साइट", color: "text-green-400" },
  { icon: Star, text: "नेपालको नम्बर वान अनलाइन गेमिङ साइट", color: "text-rose-400" },
  { icon: Shield, text: "नेपाल सरकारबाट मान्यता प्राप्त गेमिङ साइट", color: "text-cyan-400" },
  { icon: Zap, text: "१ मिनेट डिपोजिट · ५ मिनेट तत्काल विथड्रल", color: "text-yellow-400" },
];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % HEADLINES.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* BG gradient */}
      <div className="absolute inset-0 animated-gradient" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 15% 60%, rgba(232,25,44,0.1) 0%, transparent 55%), radial-gradient(ellipse at 85% 15%, rgba(0,102,255,0.1) 0%, transparent 55%), radial-gradient(ellipse at 55% 90%, rgba(0,212,255,0.06) 0%, transparent 50%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" suppressHydrationWarning>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute rounded-full ${p.c}`}
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.s}px`, height: `${p.s}px` }}
            animate={{ y: [0, -45, 0], opacity: [0.15, 1, 0.15], scale: [1, 1.8, 1] }}
            transition={{ duration: p.d, delay: p.dl, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full glass-crimson mb-6 sm:mb-7 max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-red-400 live-dot" />
              <Flame className="w-3.5 h-3.5 text-red-400" />
              <span className="text-red-400 text-xs sm:text-sm font-bold">नेपालको #१ गेमिङ प्लेटफर्म · Nepal&apos;s #1 Gaming Platform</span>
              <span className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-red-400 fill-red-400" />)}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 leading-[1.05]"
            >
              <span className="text-white">GorkhaBooks —</span>
              <br />
              <AnimatePresence mode="wait">
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45 }}
                  className="gradient-text-crimson text-glow-crimson inline-block"
                >
                  {HEADLINES[idx].en}
                </motion.span>
              </AnimatePresence>
              <br />
              <AnimatePresence mode="wait">
                <motion.span
                  key={`ne-${idx}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="text-blue-300/80 text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide"
                >
                  {HEADLINES[idx].ne}
                </motion.span>
              </AnimatePresence>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 mb-3 leading-relaxed"
            >
              Join <strong className="text-red-400">50,000+ verified players</strong> across Nepal. Get the best odds on Cricket, Football & Esports — with <strong className="text-cyan-400">instant withdrawals</strong> and 24/7 WhatsApp support.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-gray-500 text-sm mb-6"
            >
              नेपालभरका ५०,०००+ खेलाडीहरूसँग जोडिनुहोस् — सर्वोत्तम अड्स, तत्काल भुक्तानी, २४/७ सपोर्ट।
            </motion.p>

            {/* Trust Messages Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mb-6 sm:mb-8"
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-red-900/90 via-red-800/90 to-red-900/90 border border-amber-500/50 p-3 sm:p-4">
                <div className="flex flex-col gap-2">
                  {TRUST_MESSAGES.map((msg, i) => {
                    const Icon = msg.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                        className="flex items-center gap-2 sm:gap-3"
                      >
                        <span className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/40 shrink-0`}>
                          <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${msg.color}`} />
                        </span>
                        <span className="text-white text-xs sm:text-sm md:text-base font-bold tracking-wide drop-shadow-sm">
                          {msg.text}
                        </span>
                        <span className="text-amber-400 text-sm sm:text-base">★</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
            >
              {FEATURES.map((f) => (
                <div key={f.label} className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-full border border-white/10 hover:border-red-500/30 transition-colors">
                  <span className="text-sm">{f.icon}</span>
                  <span className="text-white text-xs font-semibold">{f.label}</span>
                  <span className="text-gray-600 text-[10px] hidden sm:inline">· {f.ne}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 mb-10 sm:mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openWhatsApp("Hello! I want to join GorkhaBooks and start betting. Please help me register.")}
                className="relative group flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-rose-500 text-white font-black px-7 py-4 md:px-9 md:py-5 rounded-2xl text-sm sm:text-base md:text-lg shadow-2xl cursor-pointer overflow-hidden w-full sm:w-auto"
                style={{ boxShadow: "0 0 32px rgba(232,25,44,0.45), 0 8px 32px rgba(0,0,0,0.5)" }}
              >
                <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                <MessageCircle className="w-5 h-5 relative z-10" />
                <span className="relative z-10">WhatsApp मा जोइन गर्नुस् — FREE!</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openWhatsApp("I want to claim my 100% welcome bonus on GorkhaBooks!")}
                className="flex items-center justify-center gap-2 border-2 border-cyan-400/60 text-cyan-300 font-black px-7 py-4 md:px-9 md:py-5 rounded-2xl text-sm sm:text-base md:text-lg cursor-pointer hover:bg-cyan-500/10 hover:border-cyan-400 transition-all w-full sm:w-auto"
                style={{ boxShadow: "0 0 20px rgba(0,212,255,0.2)" }}
              >
                <Zap className="w-5 h-5" />
                १००% वेलकम बोनस पाउनुस्
              </motion.button>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-md mx-auto lg:mx-0"
            >
              {[
                { icon: "👥", val: 50000, suf: "+", label: "सदस्यहरू", en: "Members" },
                { icon: "�", val: 24,    suf: "",   label: "लाइभ म्याच", en: "Live Matches" },
                { icon: "�", val: 85,    suf: "L+", label: "आज भुक्तानी", en: "Paid Today" },
                { icon: "⚡", val: 5,     suf: "m",  label: "निकासी समय", en: "Withdrawal" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="glass rounded-xl p-3 text-center border border-white/8"
                >
                  <span className="text-xl block mb-1">{s.icon}</span>
                  <p className="text-red-400 font-black text-lg">
                    <AnimatedCounter target={s.val} suffix={s.suf} />
                  </p>
                  <p className="text-gray-500 text-[10px]">{s.en}</p>
                  <p className="text-gray-700 text-[9px]">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-6"
            >
              {[
                { icon: <Shield className="w-3.5 h-3.5 text-cyan-400" />, label: "Trusted · भरोसेमान्य" },
                { icon: <Trophy className="w-3.5 h-3.5 text-red-400" />,  label: "Licensed · लाइसेन्सप्राप्त" },
                { icon: <Zap className="w-3.5 h-3.5 text-blue-400" />,    label: "256-bit SSL Secure" },
                { icon: <Star className="w-3.5 h-3.5 text-purple-400" />, label: "Fair Play · निष्पक्ष" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-full border border-white/8">
                  {b.icon}
                  <span className="text-gray-400 text-[11px] font-medium">{b.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex flex-col gap-4"
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-red-500/20">
              <Image
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80"
                alt="Cricket betting Nepal – GorkhaBooks live sports betting"
                width={800} height={460}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03040a] via-[#03040a]/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 live-dot" />
                  <span className="text-red-400 text-xs font-black tracking-wider">🔴 LIVE NOW</span>
                </div>
                <p className="text-white font-black text-lg leading-tight">IPL 2026 — Mumbai Indians vs CSK</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-cyan-400 text-sm font-bold">MI: 1.82</span>
                  <span className="text-gray-500 text-xs">·</span>
                  <span className="text-gray-400 text-sm font-bold">CSK: 2.05</span>
                  <span className="ml-auto text-xs px-2 py-0.5 bg-red-500/20 border border-red-500/30 rounded text-red-400 font-bold">BEST ODDS</span>
                </div>
              </div>
            </div>

            {/* Two lower cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80"
                  alt="Live casino Nepal – Teen Patti, Roulette at GorkhaBooks"
                  width={400} height={220}
                  className="w-full h-36 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03040a]/90 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-bold text-sm">🎰 Live Casino</p>
                  <p className="text-cyan-400 text-xs font-semibold">३,२००+ खेल्दैछन्</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80"
                  alt="Esports Nepal – PUBG Free Fire tournaments at GorkhaBooks"
                  width={400} height={220}
                  className="w-full h-36 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03040a]/90 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-bold text-sm">🎮 Esports</p>
                  <p className="text-purple-400 text-xs font-semibold">PUBG · Free Fire</p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-crimson rounded-2xl px-4 py-3 shadow-2xl border border-red-500/30"
              style={{ boxShadow: "0 0 20px rgba(232,25,44,0.25)" }}
            >
              <p className="text-red-400 font-black text-xl">NPR 85L+</p>
              <p className="text-gray-400 text-xs">आज भुक्तानी भयो</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute -bottom-2 -left-4 glass-navy rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 live-dot" />
                <p className="text-cyan-400 font-black text-sm">50,000+ Online Now</p>
              </div>
              <p className="text-gray-500 text-xs">नेपालको #१ प्लेटफर्म</p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#03040a] to-transparent pointer-events-none" />
    </section>
  );
}
