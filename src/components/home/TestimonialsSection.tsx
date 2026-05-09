"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

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
            <Star className="w-4 h-4 text-red-400 fill-red-400" />
            <span className="text-red-400 text-sm font-semibold">वास्तविक खेलाडीहरूको राय · Real Player Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">
            नेपालका खेलाडीहरूको <span className="gradient-text-crimson">भनाई</span>
          </h2>
          <p className="text-cyan-400/60 text-sm mb-3">What Nepal&apos;s Players Say About Us — Trusted by 50,000+</p>
          <p className="text-gray-400 max-w-xl mx-auto">
            नेपालभरिका हजारौं खुसी विजेताहरूले GorkhaBooks लाई दैनिक रूपमा भरोसा गर्छन्। Read their winning stories.
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="glass-crimson rounded-3xl p-5 sm:p-8 md:p-12 text-center relative"
            >
              <Quote className="w-10 h-10 text-red-500/30 mx-auto mb-6" />
              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 font-medium">
                &ldquo;{TESTIMONIALS[active].text}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(TESTIMONIALS[active].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-red-400 fill-red-400" />
                ))}
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-black text-lg">{TESTIMONIALS[active].avatar}</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-base">{TESTIMONIALS[active].name}</p>
                  <p className="text-gray-400 text-sm">{TESTIMONIALS[active].location}, Nepal</p>
                  <p className="text-cyan-400 text-sm font-semibold">{TESTIMONIALS[active].amount} · {TESTIMONIALS[active].game}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-yellow-500/50 border border-white/10 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all cursor-pointer ${i === active ? "w-8 h-2.5 bg-red-500" : "w-2.5 h-2.5 bg-white/20"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-yellow-500/50 border border-white/10 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-red-500/20 transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, si) => (
                  <Star key={si} className="w-4 h-4 text-red-400 fill-red-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-black text-sm">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-cyan-400 text-xs font-semibold">{t.amount}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
