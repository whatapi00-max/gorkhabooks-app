"use client";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { openWhatsApp } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 md:bottom-8 md:right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="glass-gold rounded-2xl p-4 w-64 mr-2"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">GorkhaBooks Support</p>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full live-dot inline-block" />
                    <span className="text-green-400 text-xs">Online now</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-300 text-xs mb-3">
              👋 Hi! Ready to join GorkhaBooks? Chat with us for instant support and registration!
            </p>
            <button
              onClick={() => openWhatsApp("Hello! I want to join GorkhaBooks and start playing.")}
              className="w-full bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold py-2.5 rounded-xl text-sm hover:from-red-500 hover:to-rose-400 transition-all duration-300"
            >
              Start Chat →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          if (showTooltip) {
            openWhatsApp("Hello! I want to join GorkhaBooks.");
          } else {
            setShowTooltip(true);
          }
        }}
        className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 relative cursor-pointer"
        style={{ boxShadow: "0 0 30px rgba(0,255,100,0.5), 0 8px 32px rgba(0,0,0,0.4)" }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-green-400 opacity-40"
        />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
          1
        </span>
      </motion.button>
    </div>
  );
}
