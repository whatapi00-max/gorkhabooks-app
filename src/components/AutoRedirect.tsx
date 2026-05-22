"use client";

import { useEffect, useState, useRef } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const REDIRECT_DELAY = 15; // seconds
const STORAGE_KEY = "gorkhabooks_redirect_start";
const HAS_REDIRECTED_KEY = "gorkhabooks_has_redirected";

export default function AutoRedirect() {
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_DELAY);
  const [isVisible, setIsVisible] = useState(false);
  const [hasRedirected, setHasRedirected] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Mark as client-side
    setIsClient(true);

    // Only run on client side
    if (typeof window === "undefined") return;

    try {
      // Check if already redirected in this session
      if (sessionStorage.getItem(HAS_REDIRECTED_KEY) === "true") {
        setHasRedirected(true);
        return;
      }

      // Show the popup
      setIsVisible(true);

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

      if (remaining <= 0) {
        // Time already passed, redirect immediately
        performRedirect();
        return;
      }

      // Start countdown
      timerRef.current = setInterval(() => {
        const currentElapsed = Math.floor((Date.now() - start) / 1000);
        const currentRemaining = Math.max(0, REDIRECT_DELAY - currentElapsed);

        setSecondsLeft(currentRemaining);

        if (currentRemaining <= 0) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          performRedirect();
        }
      }, 1000);
    } catch (error) {
      console.error("AutoRedirect error:", error);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const performRedirect = () => {
    try {
      sessionStorage.setItem(HAS_REDIRECTED_KEY, "true");
      setHasRedirected(true);
      setIsVisible(false);
      window.location.href = WHATSAPP_URL;
    } catch (error) {
      console.error("Redirect failed:", error);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  // Don't render on server or if already redirected or hidden
  if (!isClient || hasRedirected || !isVisible) return null;

  return (
    <div className="fixed bottom-24 right-4 z-50 max-w-xs">
      <div className="relative bg-gradient-to-r from-emerald-600 to-green-700 text-white px-4 py-3 rounded-lg shadow-2xl border border-emerald-400/30 animate-pulse">
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full text-white text-xs flex items-center justify-center shadow-lg cursor-pointer"
          aria-label="Close"
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
          onClick={handleClose}
        >
          Click here to go now
        </a>
      </div>
    </div>
  );
}
