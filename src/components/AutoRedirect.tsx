"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const REDIRECT_DELAY = 15;

function isBot(): boolean {
  if (typeof navigator === "undefined") return true;
  const ua = navigator.userAgent.toLowerCase();
  return /bot|crawl|spider|google|bing|yahoo|yandex|duckduck|facebook|twitter|linkedin|whatsapp|telegram|slurp|baidu|semrush|ahrefs|moz|screaming/i.test(ua);
}

export default function AutoRedirect() {
  const [mounted, setMounted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_DELAY);
  const [show, setShow] = useState(true);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const redirectedRef = useRef(false);

  const doRedirect = useCallback(() => {
    if (typeof window === "undefined" || redirectedRef.current) return;
    redirectedRef.current = true;
    // Use window.open to open WhatsApp in new tab — NOT window.location.href
    // This keeps the page intact for Google and doesn't create a redirect chain
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
    setShow(false);
  }, []);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const tick = useCallback(() => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          try { sessionStorage.setItem("gorkha_redirected", "true"); } catch {}
          doRedirect();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [clearTimer, doRedirect]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    // Don't run for bots/crawlers — this is the key SEO fix
    if (isBot()) {
      setShow(false);
      return;
    }

    // Check if already redirected
    try {
      if (sessionStorage.getItem("gorkha_redirected") === "true") {
        setShow(false);
        return;
      }
    } catch {
      // ignore
    }

    // Visibility handling
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        setPaused(false);
        tick();
      } else {
        setPaused(true);
        clearTimer();
      }
    };

    if (document.visibilityState === "visible") {
      tick();
    } else {
      setPaused(true);
    }

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      clearTimer();
    };
  }, [mounted, tick, clearTimer]);

  // Trigger next tick when secondsLeft changes (and still counting)
  useEffect(() => {
    if (!mounted || !show || secondsLeft <= 0 || paused) return;
    tick();
    return () => clearTimer();
  }, [secondsLeft, mounted, show, paused, tick, clearTimer]);

  const handleClose = () => {
    setShow(false);
    clearTimer();
    try { sessionStorage.setItem("gorkha_redirected", "true"); } catch {}
  };

  if (!mounted || !show) return null;

  return (
    <div className="fixed bottom-24 right-4 z-[100] max-w-xs">
      <div className="relative bg-gradient-to-r from-emerald-600 to-green-700 text-white px-4 py-3 rounded-lg shadow-2xl border border-emerald-400/30">
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full text-white text-xs flex items-center justify-center shadow-lg cursor-pointer"
          aria-label="Close"
        >
          ×
        </button>
        <p className="text-sm font-medium mb-1">
          {paused
            ? "Timer paused — come back to continue"
            : `Opening WhatsApp in ${secondsLeft}s...`}
        </p>
        <div className="w-full bg-black/30 rounded-full h-2">
          <div
            className="bg-white rounded-full h-2 transition-all duration-1000"
            style={{ width: `${((REDIRECT_DELAY - secondsLeft) / REDIRECT_DELAY) * 100}%` }}
          />
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-center text-xs underline hover:text-emerald-200"
        >
          Click here to go now
        </a>
      </div>
    </div>
  );
}
