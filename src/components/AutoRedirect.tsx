"use client";

import { useEffect, useState, useCallback } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const REDIRECT_DELAY = 15;

export default function AutoRedirect() {
  const [mounted, setMounted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_DELAY);
  const [show, setShow] = useState(true);

  const doRedirect = useCallback(() => {
    if (typeof window !== "undefined") {
      window.location.href = WHATSAPP_URL;
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Check if already redirected
    try {
      if (sessionStorage.getItem("gorkha_redirected") === "true") {
        setShow(false);
        return;
      }
    } catch {
      // ignore sessionStorage errors
    }

    if (secondsLeft <= 0) {
      try {
        sessionStorage.setItem("gorkha_redirected", "true");
      } catch {}
      doRedirect();
      return;
    }

    const timer = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsLeft, mounted, doRedirect]);

  const handleClose = () => {
    setShow(false);
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
        <p className="text-sm font-medium mb-1">Redirecting to WhatsApp in {secondsLeft}s...</p>
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
