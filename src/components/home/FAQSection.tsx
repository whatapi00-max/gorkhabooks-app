"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { useState } from "react";
import { FAQS } from "@/lib/constants";
import { openWhatsApp } from "@/lib/utils";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-semibold">सामान्य प्रश्नहरू · Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">
            <span className="gradient-text-crimson">प्रश्नहरू</span> छन्?
          </h2>
          <p className="text-cyan-400/60 text-base mb-3">Got Questions? We&apos;re ready to answer — सधैं उपलब्ध</p>
          <p className="text-gray-400 max-w-xl mx-auto">
            GorkhaBooks बारे सामान्य प्रश्नहरूको जवाफ पाउनुहोस्। अझै प्रश्न छ? WhatsApp मा कुराकानी गर्नुहोस्।
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`glass rounded-2xl overflow-hidden border transition-all duration-300 ${
                open === i ? "border-red-500/40" : "border-white/10"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
              >
                <span className={`font-semibold text-sm md:text-base pr-4 transition-colors ${open === i ? "text-red-400" : "text-white"}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    open === i ? "bg-red-500/20 text-red-400" : "text-gray-500"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 md:px-6 pb-5 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center glass rounded-2xl p-8 border border-red-500/15"
        >
          <p className="text-gray-300 text-lg mb-2 font-semibold">Still have questions?</p>
          <p className="text-gray-500 text-sm mb-6">Our support team is available 24/7 on WhatsApp and will reply within 30 seconds.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => openWhatsApp("Hello, I have a question about GorkhaBooks.")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold px-8 py-3.5 rounded-xl cursor-pointer shadow-lg shadow-red-500/25"
          >
            <MessageCircle className="w-5 h-5" />
            Ask on WhatsApp
          </motion.button>
        </motion.div>

        {/* SEO: Gorkha Gaming keyword block */}
        <div className="mt-12 pt-10 border-t border-white/5">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-4 text-center">
            GorkhaBooks — नेपालको #१ अनलाइन गेमिङ, बेटिङ र इस्पोर्ट्स प्लेटफर्म
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed text-center max-w-3xl mx-auto mb-4">
            GorkhaBooks (gorkha.com) नेपालको सबैभन्दा <strong className="text-gray-400">भरोसेमान्य अनलाइन गेमिङ प्लेटफर्म</strong> हो —
            स्पोर्ट्स बेटिङ, लाइभ क्यासिनो, र इस्पोर्ट्स टुर्नामेन्ट एकै ठाउँमा।
            Nepali gamers can compete in <strong className="text-gray-400">PUBG tournament Nepal</strong>,
            Free Fire Nepal tournaments, and Valorant Nepal events while betting on
            <strong className="text-gray-400"> IPL cricket Nepal</strong>, football, and kabaddi with Nepal&apos;s best odds.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed text-center max-w-3xl mx-auto mb-6">
            तपाईं <strong className="text-gray-400">नेपालको सर्वश्रेष्ठ गेमिङ साइट</strong> खोज्दै हुनुहुन्छ भने,
            eSewa र Khalti बाट तुरन्त जम्मा गर्न सकिने,
            विश्वसनीय <strong className="text-gray-400">Nepal online betting site 2026</strong> — GorkhaBooks तपाईंको घर हो।
            काठमाडौं, पोखरा, र नेपालभरबाट ५०,०००+ खेलाडीहरू। Real money gaming. Instant withdrawals. 24/7 support.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "GorkhaBooks", "Nepal Gaming 2026", "PUBG Tournament Nepal",
              "Free Fire Nepal", "Valorant Nepal", "Online Betting Nepal",
              "Esports Nepal", "Cricket Betting Nepal", "Live Casino Nepal",
              "eSewa Betting", "Khalti Casino", "Nepal Gamers Community",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
