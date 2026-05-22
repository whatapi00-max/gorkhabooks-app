"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const REDIRECT_DELAY = 15;

export default function AutoRedirect() {
  const [mounted, setMounted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_DELAY);
  const [show, setShow] = useState(true);
  const isVisibleRef = useRef(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const doRedirect = useCallback(() => {
    if (typeof window !== "undefined") {
      window.location.href = WHATSAPP_URL;
    }
  }, []);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startCountdown = useCallback(() => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      setSecondsLeft((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          try {
            sessionStorage.setItem("gorkha_redirected", "true");
          } catch {}
          doRedirect();
          return 0;
        }
        // Continue countdown only if still visible
        if (isVisibleRef.current) {
          startCountdown();
        }
        return next;
      });
    }, 1000);
  }, [clearTimer, doRedirect]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof document === "undefined") return;

    // Check if already redirected
    try {
      if (sessionStorage.getItem("gorkha_redirected") === "true") {
        setShow(false);
        return;
      }
    } catch {
      // ignore sessionStorage errors
    }

    const handleVisibilityChange = () => {
      const isVisible = document.visibilityState === "visible";
      isVisibleRef.current = isVisible;

      if (isVisible && secondsLeft > 0) {
        // Page became visible, resume countdown
        startCountdown();
      } else if (!isVisible) {
        // Page hidden, pause countdown
        clearTimer();
      }
    };

    // Start countdown if page is visible
    if (document.visibilityState === "visible" && secondsLeft > 0) {
      startCountdown();
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearTimer();
    };
  }, [mounted, secondsLeft, startCountdown, clearTimer]);

  const handleClose = () => {
    setShow(false);
    clearTimer();
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
          {document.visibilityState === "visible" 
            ? `Redirecting to WhatsApp in ${secondsLeft}s...`
            : `Timer paused - return to page to continue`}
        </p>
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
