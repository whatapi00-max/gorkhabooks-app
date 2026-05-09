"use client";
import { motion } from "framer-motion";
import { Shield, Trophy, Heart, Zap, Users, Star, Target, Globe, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";

const values = [
  { icon: <Shield className="w-7 h-7" />, color: "text-green-400", bg: "bg-green-500/10 border-green-500/20", title: "Security First", desc: "We protect every player with industry-leading encryption and responsible gaming practices." },
  { icon: <Trophy className="w-7 h-7" />, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20", title: "Excellence", desc: "We constantly improve our platform to deliver the best gaming experience in Nepal." },
  { icon: <Heart className="w-7 h-7" />, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20", title: "Player First", desc: "Every decision we make is driven by what is best for our players and community." },
  { icon: <Zap className="w-7 h-7" />, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20", title: "Speed", desc: "Fast deposits, instant withdrawals, and real-time betting – speed is our promise." },
];

const milestones = [
  { year: "2020", title: "GorkhaBooks Founded", desc: "Started with a vision to bring world-class gaming to Nepal." },
  { year: "2021", title: "10,000 Members", desc: "Reached our first major milestone with players from all over Nepal." },
  { year: "2022", title: "Live Casino Launch", desc: "Launched our premium live casino with professional dealers." },
  { year: "2023", title: "Mobile Optimized", desc: "Full mobile-first redesign for seamless betting on any device." },
  { year: "2024", title: "50,000+ Members", desc: "Became Nepal's #1 gaming platform by player count and trust." },
  { year: "2025", title: "VIP Program Launch", desc: "Exclusive VIP tiers and personalized experiences for top players." },
];

const trustBadges = [
  { icon: <Shield className="w-8 h-8 text-green-400" />, title: "SSL Encrypted", desc: "256-bit encryption" },
  { icon: <Users className="w-8 h-8 text-blue-400" />, title: "50,000+ Members", desc: "Verified players" },
  { icon: <Star className="w-8 h-8 text-yellow-400" />, title: "4.9/5 Rating", desc: "Player reviews" },
  { icon: <Zap className="w-8 h-8 text-purple-400" />, title: "Instant Payouts", desc: "5 min withdrawal" },
  { icon: <Globe className="w-8 h-8 text-rose-400" />, title: "Nepal Focused", desc: "NPR supported" },
  { icon: <Heart className="w-8 h-8 text-pink-400" />, title: "Responsible Gaming", desc: "Player protection" },
];

export default function AboutPageClient() {
  return (
    <div className="min-h-screen pt-20 pb-32 overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(245,197,24,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-4">
              <Target className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold">Our Story</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              About <span className="gradient-text-gold">GorkhaBooks</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Born in Nepal, built for Nepal. GorkhaBooks was founded with one mission — to bring world-class, fair, and exciting gaming experiences to every Nepali player, with the safety, trust, and support they deserve.
            </p>
          </motion.div>

          {/* Trust Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="rounded-3xl border border-green-500/20 bg-green-500/5 p-6 md:p-10 mb-10 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 mb-4">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-bold">Trusted Book of Nepal · नेपालको भरोसेमान्य बुक</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
              100% Legal, Licensed &amp; Safe
            </h2>
            <p className="text-gray-500 text-sm mb-6">१००% कानूनी, लाइसेन्सप्राप्त र सुरक्षित</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "✅", title: "Legal & Licensed", ne: "कानूनी र लाइसेन्सप्राप्त", desc: "Fully compliant with applicable laws" },
                { icon: "🔒", title: "256-bit SSL Secure", ne: "SSL सुरक्षित", desc: "Bank-grade encryption on all data" },
                { icon: "⚖️", title: "Fair & Transparent", ne: "निष्पक्ष र पारदर्शी", desc: "Verified fair play on every game" },
                { icon: "🛡️", title: "Safe Platform", ne: "सुरक्षित प्लेटफर्म", desc: "Player funds always protected" },
              ].map((t, i) => (
                <div key={i} className="glass rounded-2xl p-4 border border-white/10 text-center">
                  <span className="text-3xl block mb-2">{t.icon}</span>
                  <p className="text-white text-sm font-bold mb-0.5">{t.title}</p>
                  <p className="text-green-500 text-[10px] font-medium mb-1">{t.ne}</p>
                  <p className="text-gray-500 text-xs">{t.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: <Target className="w-8 h-8 text-yellow-400" />,
                title: "Our Mission",
                text: "To provide Nepal's most trusted, fair, and exciting sports betting and casino gaming platform — with local payment methods, Nepali language support, and a team that truly understands our players.",
                color: "border-yellow-500/30 bg-yellow-500/5",
              },
              {
                icon: <Globe className="w-8 h-8 text-green-400" />,
                title: "Our Vision",
                text: "To become South Asia's most loved gaming platform, built on transparency, speed, and genuine care for every player. A platform where winning is celebrated and every player feels valued.",
                color: "border-green-500/30 bg-green-500/5",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4 }}
                className={`p-8 rounded-3xl border ${item.color} transition-all`}
              >
                <div className="mb-5">{item.icon}</div>
                <h2 className="text-white font-black text-2xl mb-3">{item.title}</h2>
                <p className="text-gray-400 text-base leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 md:px-6 bg-[#07070f]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Our Core <span className="gradient-text-gold">Values</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Everything we do is guided by these principles.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl glass border ${v.bg} transition-all`}
              >
                <div className={`w-14 h-14 rounded-2xl ${v.bg} border flex items-center justify-center mb-4 ${v.color}`}>{v.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 md:px-6 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Our <span className="gradient-text-gold">Journey</span></h2>
          <p className="text-gray-400">From a small startup to Nepal's #1 gaming platform.</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500 via-yellow-500/50 to-transparent" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} relative`}
              >
                <div className="md:flex-1" />
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-yellow-400 border-2 border-yellow-600 mt-1 z-10" />
                <div className={`flex-1 ml-16 md:ml-0 glass rounded-2xl p-5 border border-white/10 ${i % 2 === 0 ? "" : "md:text-right"}`}>
                  <span className="gradient-text-gold font-black text-sm">{m.year}</span>
                  <h3 className="text-white font-bold text-base mt-1 mb-1">{m.title}</h3>
                  <p className="text-gray-400 text-sm">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-16 px-4 md:px-6 bg-[#07070f]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Why Players <span className="gradient-text-gold">Trust Us</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustBadges.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 text-center border border-white/10 hover:border-yellow-500/20 transition-all"
              >
                <div className="flex justify-center mb-3">{b.icon}</div>
                <p className="text-white font-bold text-sm mb-1">{b.title}</p>
                <p className="text-gray-500 text-xs">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-gold rounded-3xl p-10 border border-yellow-500/20">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Join the GorkhaBooks Family</h2>
          <p className="text-gray-400 text-base mb-8 max-w-lg mx-auto">
            50,000+ players across Nepal already trust us. Be part of Nepal's fastest growing gaming community.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            onClick={() => openWhatsApp("Hello! I want to join GorkhaBooks and be part of your community!")}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black px-10 py-4 rounded-2xl text-base cursor-pointer shadow-xl shadow-green-500/30"
          >
            <MessageCircle className="w-5 h-5" />
            Join GorkhaBooks Today
          </motion.button>
        </motion.div>
      </section>

      {/* SEO block */}
      <section className="py-8 px-4 md:px-6 max-w-4xl mx-auto">
        <div className="pt-10 border-t border-white/5 text-center">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
            About GorkhaBooks — Nepal&apos;s Most Trusted Gaming Platform Since 2020
          </h2>
          <p className="text-gray-600 text-xs font-medium mb-4">GorkhaBooks को बारेमा — २०२० देखि नेपालको सबभन्दा भरोसेमान्य गेमिङ प्लेटफर्म</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            GorkhaBooks (gorkha.com) is Nepal&apos;s most <strong className="text-gray-400">trusted betting platform Nepal</strong>, founded in 2020 with 50,000+ verified players. We offer <strong className="text-gray-400">safe online betting Nepal</strong> with 256-bit SSL encryption, eSewa and Khalti payments, and 24/7 WhatsApp support. Nepal&apos;s #1 <strong className="text-gray-400">legitimate casino Nepal</strong> and gaming platform with the highest player satisfaction rating.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            GorkhaBooks नेपालको सबभन्दा <strong className="text-gray-400">भरोसेमान्य बेटिङ साइट</strong> — २०२० मा स्थापित, ५०,०००+ प्रमाणित सदस्यहरू। <strong className="text-gray-400">सुरक्षित अनलाइन बेटिङ</strong>, eSewa र Khalti भुक्तानी, र २४/७ WhatsApp सपोर्ट।
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Trusted Betting Nepal · भरोसेमान्य बेटिङ",
              "Safe Online Betting Nepal · सुरक्षित बेटिङ",
              "GorkhaBooks Nepal · गोर्खाबुक्स",
              "Nepal Gaming Company · नेपाल गेमिङ",
              "Licensed Casino Nepal · लाइसेन्स क्यासिनो",
              "50000+ Players Nepal · ५०,०००+ खेलाडी",
              "gorkha.com · गोर्खा डट कम",
              "Best Gambling Site Nepal · सर्वोत्तम साइट",
            ].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 text-xs">{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
