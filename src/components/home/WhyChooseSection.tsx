"use client";
import { motion } from "framer-motion";
import { Shield, Zap, Trophy, Clock, MessageCircle, Star, TrendingUp, Lock } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Shield className="w-7 h-7" />,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    glow: "shadow-cyan-500/20",
    title: "100% Secure Platform",
    titleNe: "१००% सुरक्षित प्लेटफर्म",
    desc: "Military-grade 256-bit SSL encryption protects every transaction. Your funds are completely safe.",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
    glow: "shadow-red-500/20",
    title: "Instant Withdrawals",
    titleNe: "तत्काल निकासी — ५ मिनेट",
    desc: "Winnings paid out in under 5 minutes via eSewa, Khalti, IME Pay & direct bank transfer.",
  },
  {
    icon: <Trophy className="w-7 h-7" />,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
    glow: "shadow-amber-500/20",
    title: "Nepal's Best Odds",
    titleNe: "नेपालको सर्वोत्तम अड्स",
    desc: "Industry-leading competitive odds on all sports & casino games to maximise your returns.",
  },
  {
    icon: <Clock className="w-7 h-7" />,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    glow: "shadow-blue-500/20",
    title: "24/7 Live Support",
    titleNe: "२४/७ लाइभ सपोर्ट",
    desc: "Our dedicated WhatsApp support team responds in under 30 seconds, day or night.",
  },
  {
    icon: <MessageCircle className="w-7 h-7" />,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
    glow: "shadow-green-500/20",
    title: "WhatsApp Registration",
    titleNe: "WhatsApp मार्फत दर्ता",
    desc: "No lengthy forms. Register in under 5 minutes directly through WhatsApp — fast & easy.",
  },
  {
    icon: <Star className="w-7 h-7" />,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    glow: "shadow-purple-500/20",
    title: "VIP Rewards Program",
    titleNe: "VIP पुरस्कार कार्यक्रम",
    desc: "Climb Bronze → Silver → Gold → Diamond. Unlock exclusive bonuses and personal manager.",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/20",
    glow: "shadow-rose-500/20",
    title: "Live In-Play Betting",
    titleNe: "लाइभ बेटिङ",
    desc: "Bet in real-time as the action unfolds. Dynamic odds updated every second on all matches.",
  },
  {
    icon: <Lock className="w-7 h-7" />,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    glow: "shadow-cyan-500/20",
    title: "50,000+ Verified Players",
    titleNe: "५०,०००+ प्रमाणित खेलाडी",
    desc: "Nepal's most trusted gaming platform with thousands of verified winners across the country.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#060b1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 mb-4">
            <Image src="/logo.png" alt="G" width={24} height={24} className="w-6 h-6 object-contain" />
            <Trophy className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-semibold">किन GorkhaBooks? · Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">
            नेपालको सबभन्दा <span className="gradient-text-crimson">भरोसेमान्य प्लेटफर्म</span>
          </h2>
          <p className="text-cyan-400/70 text-base md:text-lg mb-3">Nepal&apos;s Most Trusted Gaming Platform</p>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Premium gaming technology + Nepal-first service = the ultimate betting experience for every Nepali player.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`p-6 rounded-2xl glass border ${f.bg} shadow-xl ${f.glow} transition-all duration-300 cursor-default`}
            >
              <div className={`w-14 h-14 rounded-2xl ${f.bg} border flex items-center justify-center mb-5 ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-0.5">{f.title}</h3>
              <p className="text-gray-600 text-xs mb-2">{f.titleNe}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
