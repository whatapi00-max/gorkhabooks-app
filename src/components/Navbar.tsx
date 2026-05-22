"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Zap, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { openWhatsApp } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#03040a]/95 backdrop-blur-xl border-b border-red-500/20 shadow-2xl shadow-black/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/logo.png"
                alt={SITE_NAME}
                width={72}
                height={72}
                className="w-16 h-16 md:w-[72px] md:h-[72px] object-contain drop-shadow-[0_0_12px_rgba(239,68,68,0.6)]"
                priority
              />
              <div className="flex flex-col leading-tight">
                <span className="gradient-text-crimson font-black text-lg md:text-xl tracking-tight">
                  {SITE_NAME}
                </span>
                <span className="text-blue-400/60 text-[10px] tracking-widest uppercase hidden md:block">
                  gorkha.com · नेपालको #१
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                    pathname === link.href
                      ? "text-red-400 bg-red-500/10"
                      : "text-gray-300 hover:text-red-400 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-red-500 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1.5 text-xs text-cyan-400">
                  <Zap className="w-3.5 h-3.5" />
                  <span className="font-semibold">5,240+ Online</span>
                </div>
                <span className="text-cyan-700 text-[10px]">अनलाइन</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openWhatsApp("Hello! I want to join GorkhaBooks and start betting.")}
                className="flex flex-col items-center gap-0 bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold px-5 py-2 rounded-xl text-sm shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 cursor-pointer"
              >
                <span className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> Join Now</span>
                <span className="text-red-100 text-[10px] font-normal">अहिले सामेल हुनुस्</span>
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[min(288px,85vw)] bg-[#060b1a] border-l border-red-500/20 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-5 sm:p-6 pb-[max(24px,env(safe-area-inset-bottom))]">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logo.png"
                      alt={SITE_NAME}
                      width={56}
                      height={56}
                      className="w-12 h-12 object-contain drop-shadow-[0_0_12px_rgba(239,68,68,0.6)]"
                    />
                    <span className="gradient-text-crimson font-black text-lg">{SITE_NAME}</span>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="text-gray-400 hover:text-white p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center justify-between mb-6 px-3 py-2 bg-red-500/10 rounded-xl border border-red-500/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 live-dot" />
                    <span className="text-cyan-400 text-sm font-semibold">5,240+ Players Online</span>
                  </div>
                  <span className="text-cyan-700 text-xs">अनलाइन</span>
                </div>

                <nav className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        pathname === link.href
                          ? "text-red-400 bg-red-500/10 border border-red-500/20"
                          : "text-gray-300 hover:text-red-400 hover:bg-white/5"
                      }`}
                    >
                      <span>{link.label}</span>
                      {link.labelNe && <span className="text-gray-600 text-xs">{link.labelNe}</span>}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 space-y-3">
                  <button
                    onClick={() => openWhatsApp("Hello! I want to join GorkhaBooks and start betting.")}
                    className="w-full flex flex-col items-center justify-center gap-0.5 bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold py-3.5 rounded-xl text-sm cursor-pointer"
                  >
                    <span className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> Join on WhatsApp</span>
                    <span className="text-red-100 text-xs font-normal">WhatsApp मा जोडिनुहोस्</span>
                  </button>
                  <p className="text-gray-500 text-xs text-center">
                    Fast registration · छिटो दर्ता · 24/7 support
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <p className="gradient-text-crimson font-bold text-base">50K+</p>
                      <p className="text-gray-500 text-[11px]">Members</p>
                      <p className="text-gray-700 text-[10px]">सदस्य</p>
                    </div>
                    <div>
                      <p className="gradient-text-cyan font-bold text-base">99.9%</p>
                      <p className="text-gray-500 text-[11px]">Uptime</p>
                      <p className="text-gray-700 text-[10px]">अपटाइम</p>
                    </div>
                    <div>
                      <p className="gradient-text-crimson font-bold text-base">5 Min</p>
                      <p className="text-gray-500 text-[11px]">Withdrawal</p>
                      <p className="text-gray-700 text-[10px]">निकासी</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
