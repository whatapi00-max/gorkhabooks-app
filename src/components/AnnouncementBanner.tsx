"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Shield, Zap } from "lucide-react";

const announcements = [
  {
    icon: <Zap className="w-4 h-4" />,
    text: "आयो गोर्खाली",
    subtext: "Gorkhali Has Arrived",
  },
  {
    icon: <Shield className="w-4 h-4" />,
    text: "१००% विश्वासिलो साइट",
    subtext: "100% Trusted Site",
  },
  {
    icon: <CheckCircle className="w-4 h-4" />,
    text: "नेपालको नम्बर वान अनलाइन गेमिङ साइट",
    subtext: "Nepal's #1 Online Gaming Site",
  },
  {
    icon: <Shield className="w-4 h-4" />,
    text: "नेपाल सरकारबाट मान्यता प्राप्त",
    subtext: "Government Licensed",
  },
  {
    icon: <Clock className="w-4 h-4" />,
    text: "१ मिनेटमा डिपोजिट, ५ मिनेटमा विथड्रल",
    subtext: "1 Min Deposit, 5 Min Withdrawal",
  },
];

export default function AnnouncementBanner() {
  return (
    <div className="bg-gradient-to-r from-red-900 via-red-700 to-red-900 border-b border-red-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-center py-2.5 gap-1 flex-wrap">
          {announcements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full">
                <span className="text-yellow-300">{item.icon}</span>
                <span className="text-white font-semibold text-sm">{item.text}</span>
              </div>
              {index < announcements.length - 1 && (
                <span className="text-red-300/50">•</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile View - Scrolling */}
        <div className="md:hidden py-2 overflow-hidden">
          <div className="flex items-center">
            <div className="flex items-center gap-2 bg-yellow-500/20 px-3 py-1 rounded shrink-0 mr-3">
              <span className="w-2 h-2 rounded-full bg-yellow-400 live-dot" />
              <span className="text-yellow-300 font-bold text-xs">NEW</span>
            </div>
            <div className="overflow-hidden flex-1">
              <div className="marquee-announcement flex items-center whitespace-nowrap">
                {announcements.map((item, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-white px-4">
                    <span className="text-yellow-300">{item.icon}</span>
                    <span className="font-medium text-sm">{item.text}</span>
                    <span className="text-red-300/40">|</span>
                  </span>
                ))}
                {announcements.map((item, i) => (
                  <span key={`dup-${i}`} className="flex items-center gap-1.5 text-white px-4">
                    <span className="text-yellow-300">{item.icon}</span>
                    <span className="font-medium text-sm">{item.text}</span>
                    <span className="text-red-300/40">|</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
