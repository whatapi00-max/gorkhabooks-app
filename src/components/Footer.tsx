"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, Shield, Award, Clock } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";
import { SITE_NAME, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#03040a] border-t border-red-500/10 mt-14 sm:mt-20">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-red-600/10 via-red-500/5 to-blue-600/10 border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-7 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div>
            <h3 className="text-white font-black text-xl sm:text-2xl md:text-3xl mb-0.5">
              जित्न सुरु गर्न तयार? Ready to Win?
            </h3>
            <p className="text-red-400/80 text-sm font-semibold mb-1">Nepal&apos;s #1 Gaming Platform — अहिले नै जोडिनुहोस्!</p>
            <p className="text-gray-400 text-sm">Join 50,000+ players · नेपालको #१ गेमिङ प्लेटफर्ममा सामेल हुनुहोस्</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => openWhatsApp("Hello! I want to join GorkhaBooks now!")}
            className="flex flex-col items-center justify-center gap-0.5 bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base shadow-xl shadow-red-500/30 cursor-pointer w-full sm:w-auto"
          >
            <span className="flex items-center gap-2"><MessageCircle className="w-5 h-5" /> Join GorkhaBooks Now</span>
            <span className="text-red-100 text-xs font-normal">अहिले नै जोडिनुहोस् — FREE!</span>
          </motion.button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-rose-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl">G</span>
              </div>
              <div>
                <span className="gradient-text-crimson font-black text-xl">{SITE_NAME}</span>
                <p className="text-blue-400/60 text-xs">gorkha.com · नेपालको #१</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-1">
              Nepal&apos;s most trusted premium gaming and sports betting platform.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              नेपालको सबभन्दा भरोसेमान्य गेमिङ र स्पोर्ट्स बेटिङ प्लेटफर्म।
            </p>
            <div className="flex flex-col gap-1.5 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span className="text-cyan-400 text-xs font-bold">Trusted Book of Nepal · नेपालको भरोसेमान्य बुक</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span className="text-blue-400 text-xs font-semibold">100% Legal &amp; Licensed · कानूनी र लाइसेन्सप्राप्त</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                <span className="text-red-400 text-xs font-semibold">256-bit SSL Secure · सुरक्षित प्लेटफर्म</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                <span className="text-purple-400 text-xs font-semibold">Safe &amp; Fair Gaming · सुरक्षित र निष्पक्ष</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => openWhatsApp()}
                className="w-10 h-10 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center justify-center text-red-400 hover:bg-red-500/30 transition-colors cursor-pointer"
                title="WhatsApp Support"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <a
                href="mailto:support@gorkha.com"
                className="w-10 h-10 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 hover:bg-blue-500/30 transition-colors"
                title="Email Support"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+9779800000000"
                className="w-10 h-10 bg-cyan-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30 transition-colors"
                title="Phone Support"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Quick Links</h4>
            <p className="text-gray-600 text-xs mb-4">द्रुत लिङ्कहरू</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Sports Betting</h4>
            <p className="text-gray-600 text-xs mb-4">स्पोर्ट्स बेटिङ</p>
            <ul className="space-y-3">
              {[
                { en: "Cricket", ne: "क्रिकेट" },
                { en: "Football", ne: "फुटबल" },
                { en: "Tennis", ne: "टेनिस" },
                { en: "Kabaddi", ne: "कबड्डी" },
                { en: "Basketball", ne: "बास्केटबल" },
                { en: "Esports", ne: "इस्पोर्ट्स" },
                { en: "Live Betting", ne: "लाइभ बेटिङ" },
                { en: "Virtual Sports", ne: "भर्चुअल स्पोर्ट्स" },
              ].map((sport) => (
                <li key={sport.en}>
                  <button
                    onClick={() => openWhatsApp(`I want to bet on ${sport.en}`)}
                    className="text-gray-400 hover:text-red-400 text-sm transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full" />
                    <span>{sport.en} <span className="text-gray-600 text-xs">· {sport.ne}</span></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Why GorkhaBooks?</h4>
            <p className="text-gray-600 text-xs mb-4">किन GorkhaBooks?</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">100% Secure</p>
                  <p className="text-gray-500 text-xs">SSL encrypted · १००% सुरक्षित</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">Instant Withdrawals</p>
                  <p className="text-gray-500 text-xs">5 min payout · तत्काल निकासी</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">Best Odds in Nepal</p>
                  <p className="text-gray-500 text-xs">Competitive odds · सर्वोत्तम अड्स</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">24/7 WhatsApp Support</p>
                  <p className="text-gray-500 text-xs">Always here · सधैं उपलब्ध</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5">
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-1 text-center">
            Accepted Payment Methods
          </p>
          <p className="text-gray-600 text-xs text-center mb-4">स्वीकृत भुक्तानी विधिहरू</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {["eSewa", "Khalti", "IME Pay", "ConnectIPS", "Bank Transfer", "FonePay"].map((method) => (
              <span
                key={method}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-[11px] sm:text-xs font-medium"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-xs">
              © {year} {SITE_NAME} (gorkha.com). All rights reserved. 18+ only. Play responsibly.
            </p>
            <p className="text-gray-700 text-xs mt-0.5">
              © {year} सबै अधिकार सुरक्षित। १८+ मात्र। जिम्मेवारीपूर्वक खेल्नुहोस्।
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              Terms · सर्तहरू
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              Privacy · गोपनीयता
            </Link>
            <span className="text-gray-600 text-xs">Responsible Gaming · जिम्मेवार गेमिङ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
