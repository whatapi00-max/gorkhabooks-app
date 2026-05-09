"use client";
import { motion } from "framer-motion";
import { MessageCircle, UserPlus, Wallet, PlayCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";

const steps = [
  {
    number: "01",
    icon: <MessageCircle className="w-8 h-8" />,
    color: "text-green-400",
    bg: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/30",
    title: "WhatsApp मा सम्पर्क गर्नुस्",
    desc: "'Join Now' बटन थिच्नुहोस् र हामीलाई WhatsApp मा सन्देश पठाउनुहोस्। हाम्रो टोली ३० सेकेन्डभित्र जवाफ दिन्छ।",
  },
  {
    number: "02",
    icon: <UserPlus className="w-8 h-8" />,
    color: "text-yellow-400",
    bg: "from-yellow-500/20 to-amber-500/10",
    border: "border-yellow-500/30",
    title: "छिटो दर्ता — Quick Registration",
    desc: "आफ्नो नाम र फोन नम्बर दिनुहोस्। तपाईंको खाता तुरन्त सिर्जना हुन्छ र Welcome Bonus क्रेडिट हुन्छ।",
  },
  {
    number: "03",
    icon: <Wallet className="w-8 h-8" />,
    color: "text-blue-400",
    bg: "from-blue-500/20 to-blue-500/10",
    border: "border-blue-500/30",
    title: "जम्मा गर्नुस् र बोनस पाउनुस्",
    desc: "NPR ५०० देखि eSewa, Khalti वा Bank Transfer मार्फत जम्मा गर्नुस् — तुरन्त १००% बोनस पाउनुस्!",
  },
  {
    number: "04",
    icon: <PlayCircle className="w-8 h-8" />,
    color: "text-purple-400",
    bg: "from-purple-500/20 to-purple-500/10",
    border: "border-purple-500/30",
    title: "खेल्नुस् र जित्नुस् — Start & Win!",
    desc: "मनपर्ने खेलमा बेट लगाउनुस्, क्यासिनो खेल्नुस्, र मिनेटभित्र जितेको रकम निकाल्नुस्!",
  },
];

export default function HowToJoinSection() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 mb-4">
            <MessageCircle className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-semibold">सजिलो १ चरण प्रक्रिया · Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">
            २ मिनेटभित्रै <span className="gradient-text-crimson">Join गर्नुहोस्</span>
          </h2>
          <p className="text-cyan-400/70 text-base md:text-lg mb-3">Join in Under 5 Minutes — Start Winning Today!</p>
          <p className="text-gray-400 max-w-xl mx-auto">
            GorkhaBooks मा सुरु गर्न सजिलो छ — इन सजिला सरल विवरणहरू पालना गर्नुहोस् र जित्न सुरु गर्नुहोस्।
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-white/10 to-transparent z-0" style={{ width: "calc(100% - 3rem)", left: "calc(50% + 3rem)" }} />
              )}

              <motion.div
                whileHover={{ y: -6 }}
                className={`relative z-10 p-6 rounded-2xl bg-gradient-to-br ${step.bg} border ${step.border} text-center`}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#050508] border border-white/10 rounded-full flex items-center justify-center">
                  <span className="gradient-text-crimson font-black text-xs">{step.number}</span>
                </div>
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4 mt-2 ${step.color}`}>
                  {step.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => openWhatsApp("Hello! I want to join GorkhaBooks. Please help me get started.")}
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-rose-500 text-white font-black px-6 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg shadow-2xl shadow-red-500/30 cursor-pointer w-full sm:w-auto"
          >
            <MessageCircle className="w-6 h-6" />
            अहिले नै जोडिनुस् — FREE!
          </motion.button>
          <p className="text-gray-500 text-sm mt-4">क्रेडिट कार्ड चाहिंदैन · No credit card required · Instant registration · 24/7 support</p>
        </motion.div>
      </div>
    </section>
  );
}
