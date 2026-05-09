"use client";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, Phone, Clock, Send, ChevronDown, Zap, Shield } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";
import { useState } from "react";
import { FAQS } from "@/lib/constants";

const contactChannels = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/30",
    glow: "shadow-green-500/20",
    title: "WhatsApp Support",
    desc: "Instant replies 24/7. Our fastest support channel.",
    detail: "+977 980 000 0000",
    badge: "FASTEST",
    badgeColor: "bg-green-500/20 text-green-400",
    action: () => openWhatsApp("Hello! I need support from GorkhaBooks."),
    cta: "Chat on WhatsApp",
  },
  {
    icon: <Send className="w-8 h-8" />,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
    glow: "shadow-blue-500/20",
    title: "Telegram Support",
    desc: "Join our Telegram group for updates and support.",
    detail: "@GorkhaBooks",
    badge: "QUICK",
    badgeColor: "bg-blue-500/20 text-blue-400",
    action: () => openWhatsApp("I want to connect via Telegram. What is your Telegram handle?"),
    cta: "Message on Telegram",
  },
  {
    icon: <Mail className="w-8 h-8" />,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
    glow: "shadow-purple-500/20",
    title: "Email Support",
    desc: "For formal queries and account issues.",
    detail: "support@gorkha.com",
    badge: "24h REPLY",
    badgeColor: "bg-purple-500/20 text-purple-400",
    action: () => openWhatsApp("I prefer email support. Can you assist me?"),
    cta: "Send Email",
  },
  {
    icon: <Phone className="w-8 h-8" />,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/30",
    glow: "shadow-yellow-500/20",
    title: "Phone Support",
    desc: "Call us during business hours for urgent issues.",
    detail: "+977 1 4000000",
    badge: "9AM-9PM",
    badgeColor: "bg-yellow-500/20 text-yellow-400",
    action: () => openWhatsApp("I need phone support from GorkhaBooks."),
    cta: "Request Callback",
  },
];

const supportHours = [
  { channel: "WhatsApp", hours: "24/7", status: "Online" },
  { channel: "Telegram", hours: "24/7", status: "Online" },
  { channel: "Email", hours: "24/7", status: "Online" },
  { channel: "Phone", hours: "9:00 AM – 9:00 PM", status: "Online" },
];

export default function ContactPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20 pb-32 overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,255,136,0.07) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-400 live-dot" />
              <span className="text-green-400 text-sm font-semibold">Support Available 24/7</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              We&apos;re Here to <span className="gradient-text-gold">Help You</span>
            </h1>
            <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto">
              Our dedicated support team is always ready to assist you. Average WhatsApp response time: <span className="text-green-400 font-bold">under 30 seconds</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact channels */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-12 sm:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {contactChannels.map((ch, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`glass rounded-3xl p-6 border ${ch.bg} shadow-xl ${ch.glow} transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-14 h-14 rounded-2xl ${ch.bg} border flex items-center justify-center ${ch.color}`}>
                  {ch.icon}
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-black ${ch.badgeColor}`}>{ch.badge}</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{ch.title}</h3>
              <p className="text-gray-400 text-sm mb-2 leading-relaxed">{ch.desc}</p>
              <p className={`font-bold text-sm mb-5 ${ch.color}`}>{ch.detail}</p>
              <motion.button
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                onClick={ch.action}
                className="w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-green-500 to-emerald-600 text-white cursor-pointer hover:from-green-400 hover:to-emerald-500 transition-all"
              >
                {ch.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Big WhatsApp CTA */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-8 md:p-16 text-center"
          style={{ background: "linear-gradient(135deg, #0a1a0a, #050508, #0a1a0a)", border: "1px solid rgba(0,255,136,0.2)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <div className="text-7xl mb-6 float-animation">💬</div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Chat With Us <span className="gradient-text-green">Right Now</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Whether you have questions about registration, deposits, withdrawals, bonuses, or anything else — we&apos;re here for you instantly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => openWhatsApp("Hello! I need help with my GorkhaBooks account.")}
                className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black px-10 py-5 rounded-2xl text-lg cursor-pointer shadow-2xl shadow-green-500/30"
                style={{ boxShadow: "0 0 30px rgba(0,255,100,0.3), 0 8px 24px rgba(0,0,0,0.3)" }}
              >
                <MessageCircle className="w-6 h-6" />
                Start WhatsApp Chat
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                onClick={() => openWhatsApp("I want to register on GorkhaBooks!")}
                className="flex items-center gap-3 border-2 border-yellow-500 text-yellow-400 font-bold px-8 py-5 rounded-2xl text-base cursor-pointer hover:bg-yellow-500/10 transition-colors"
              >
                <Zap className="w-5 h-5" />
                Register Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Support hours */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-yellow-400" />
              <h3 className="text-white font-black text-xl">Support Hours</h3>
            </div>
            <div className="space-y-3">
              {supportHours.map((s, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-white/5">
                  <span className="text-gray-300 font-medium text-sm">{s.channel}</span>
                  <span className="text-gray-400 text-sm">{s.hours}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 live-dot" />
                    <span className="text-green-400 text-xs font-bold">{s.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-green-400" />
              <h3 className="text-white font-black text-xl">Our Guarantees</h3>
            </div>
            <div className="space-y-4">
              {[
                "Reply within 30 seconds on WhatsApp",
                "Withdrawals processed within 5 minutes",
                "Deposits credited instantly",
                "Account issues resolved within 1 hour",
                "Bonus queries answered same day",
                "100% secure and confidential support",
              ].map((g, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                  <span className="text-gray-300 text-sm">{g}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-6 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl font-black text-white mb-3">Quick <span className="gradient-text-gold">Answers</span></h2>
          <p className="text-gray-400">Common questions from our players</p>
        </motion.div>
        <div className="space-y-3">
          {FAQS.slice(0, 6).map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`glass rounded-2xl overflow-hidden border transition-all ${openFaq === i ? "border-yellow-500/40" : "border-white/10"}`}
            >
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer">
                <span className={`font-semibold text-sm pr-4 transition-colors ${openFaq === i ? "text-yellow-400" : "text-white"}`}>{faq.question}</span>
                <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className={`w-4 h-4 shrink-0 ${openFaq === i ? "text-yellow-400" : "text-gray-500"}`} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-3">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO block */}
      <section className="py-8 px-4 md:px-6 max-w-4xl mx-auto">
        <div className="pt-10 border-t border-white/5 text-center">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
            Contact GorkhaBooks — 24/7 WhatsApp Support Nepal | gorkha.com
          </h2>
          <p className="text-gray-600 text-xs font-medium mb-4">GorkhaBooks सम्पर्क — २४/७ WhatsApp सपोर्ट नेपाल</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            Reach GorkhaBooks <strong className="text-gray-400">WhatsApp support Nepal</strong> anytime — available 24/7 with average response under 30 seconds. Get help with <strong className="text-gray-400">deposits Nepal</strong>, withdrawals, bonuses, account issues, and sports betting queries. Contact via WhatsApp, Telegram, email or phone. <strong className="text-gray-400">GorkhaBooks customer care</strong> is always ready for you.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            GorkhaBooks <strong className="text-gray-400">WhatsApp सपोर्ट</strong> — जम्मा, निकासी, बोनस र खाता सम्बन्धी समस्याको लागि २४/७ सम्पर्क गर्नुस्। <strong className="text-gray-400">GorkhaBooks ग्राहक सेवा</strong> सधैं तयार छ। ३० सेकेन्डभित्र जवाफ पाउनुस्।
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "GorkhaBooks WhatsApp Nepal · WhatsApp सपोर्ट",
              "Betting Support Nepal · बेटिङ सपोर्ट",
              "24/7 Casino Support · २४/७ सपोर्ट",
              "GorkhaBooks Customer Care · ग्राहक सेवा",
              "Nepal Betting Helpline · बेटिङ हेल्पलाइन",
              "Contact GorkhaBooks · सम्पर्क गर्नुस्",
              "Deposit Help Nepal · जम्मा सहायता",
              "Withdrawal Support Nepal · निकासी सहायता",
            ].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 text-xs">{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
