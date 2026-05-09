"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function AutoRedirect() {
  const [secondsLeft, setSecondsLeft] = useState(15);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = WHATSAPP_URL;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 right-4 z-50 max-w-xs">
      <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white px-4 py-3 rounded-lg shadow-2xl border border-emerald-400/30 animate-pulse">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full text-white text-xs flex items-center justify-center shadow-lg"
        >
          ×
        </button>
        <p className="text-sm font-medium mb-1">Redirecting to WhatsApp in {secondsLeft}s</p>
        <div className="w-full bg-black/30 rounded-full h-2">
          <div
            className="bg-white rounded-full h-2 transition-all duration-1000"
            style={{ width: `${((15 - secondsLeft) / 15) * 100}%` }}
          />
        </div>
        <a
          href={WHATSAPP_URL}
          className="block mt-2 text-center text-xs underline hover:text-emerald-200"
        >
          Click here to go now
        </a>
      </div>
    </div>
  );
}
