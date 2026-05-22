"use client";
import { motion } from "framer-motion";
import { MessageCircle, Zap } from "lucide-react";
import Image from "next/image";
import { openWhatsApp } from "@/lib/utils";

export default function MobileBottomCTA() {
  return (
    <div className="mobile-cta-bar items-center gap-3 pb-safe">
      <Image src="/logo.png" alt="G" width={28} height={28} className="w-7 h-7 object-contain" />
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-cyan-400 live-dot" />
        <span className="text-cyan-400 text-xs font-semibold whitespace-nowrap">5,240+ Online</span>
      </div>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => openWhatsApp("Hello! I want to join GorkhaBooks and start betting now!")}
        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold py-3 rounded-xl text-sm cursor-pointer"
      >
        <MessageCircle className="w-4 h-4" />
        Join Now on WhatsApp
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => openWhatsApp("I want to claim my welcome bonus!")}
        className="flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-4 py-3 rounded-xl text-sm cursor-pointer whitespace-nowrap"
      >
        <Zap className="w-4 h-4" />
        Bonus
      </motion.button>
    </div>
  );
}
