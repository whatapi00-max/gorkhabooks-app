"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const REDIRECT_DELAY = 15; // seconds
const STORAGE_KEY = "gorkhabooks_redirect_start";

export default function AutoRedirect() {
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_DELAY);
  const [isVisible, setIsVisible] = useState(true);
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    // Check if already redirected in this session
    if (sessionStorage.getItem("gorkhabooks_has_redirected") === "true") {
      setHasRedirected(true);
      setIsVisible(false);
      return;
    }

    // Get or set the start time
    let startTime = sessionStorage.getItem(STORAGE_KEY);
    if (!startTime) {
      startTime = Date.now().toString();
      sessionStorage.setItem(STORAGE_KEY, startTime);
    }

    const start = parseInt(startTime, 10);
    const now = Date.now();
    const elapsed = Math.floor((now - start) / 1000);
    const remaining = Math.max(0, REDIRECT_DELAY - elapsed);

    setSecondsLeft(remaining);

    if (remaining === 0) {
      // Time already passed, redirect immediately
      sessionStorage.setItem("gorkhabooks_has_redirected", "true");
      window.location.href = WHATSAPP_URL;
      return;
    }

    // Start countdown
    const timer = setInterval(() => {
      const currentElapsed = Math.floor((Date.now() - start) / 1000);
      const currentRemaining = Math.max(0, REDIRECT_DELAY - currentElapsed);

      setSecondsLeft(currentRemaining);

      if (currentRemaining <= 0) {
        clearInterval(timer);
        sessionStorage.setItem("gorkhabooks_has_redirected", "true");
        window.location.href = WHATSAPP_URL;
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (hasRedirected || !isVisible) return null;

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
            style={{ width: `${((REDIRECT_DELAY - secondsLeft) / REDIRECT_DELAY) * 100}%` }}
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
