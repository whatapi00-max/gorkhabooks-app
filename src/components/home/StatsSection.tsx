"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 50000, suffix: "+",   label: "Active Members",   labelNe: "सक्रिय सदस्यहरू", emoji: "👥", color: "text-red-400" },
  { value: 99,    suffix: ".9%", label: "Platform Uptime",   labelNe: "अपटाइम",          emoji: "⚡", color: "text-cyan-400" },
  { value: 5,     suffix: " Min",label: "Avg Withdrawal",    labelNe: "औसत निकासी",      emoji: "💸", color: "text-blue-400" },
  { value: 85,  prefix: "NPR ",suffix:"L+",label:"Paid Out Today",labelNe: "आज भुक्तानी",  emoji: "💰", color: "text-purple-400" },
  { value: 24,    suffix: "/7",  label: "Live Support",      labelNe: "सपोर्ट",           emoji: "🎧", color: "text-rose-400" },
  { value: 1000,  suffix: "+",   label: "Daily Matches",     labelNe: "दैनिक म्याचहरू",   emoji: "🏆", color: "text-amber-400" },
];

export default function StatsSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#060b1a]">
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-3xl p-5 sm:p-8 md:p-12"
          style={{
            background: "linear-gradient(135deg, rgba(232,25,44,0.05) 0%, rgba(0,102,255,0.03) 50%, rgba(0,212,255,0.04) 100%)",
            border: "1px solid rgba(232,25,44,0.15)",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-2xl md:text-3xl font-black text-white mb-2"
          >
            GorkhaBooks — <span className="gradient-text-crimson">संख्याहरूमा</span>
          </motion.h2>
          <p className="text-center text-cyan-400/60 text-sm md:text-base mb-10">GorkhaBooks by the Numbers — Nepal&apos;s Biggest Gaming Platform</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                className="text-center"
              >
                <span className="text-3xl block mb-2">{stat.emoji}</span>
                <p className={`font-black text-2xl md:text-3xl ${stat.color} mb-1`}>
                  <CountUp target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </p>
                <p className="text-gray-400 text-xs">{stat.label}</p>
                <p className="text-gray-700 text-[10px]">{stat.labelNe}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
