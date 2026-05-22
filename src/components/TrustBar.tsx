"use client";
import { Star, Award, BadgeCheck, Zap, Shield, Clock } from "lucide-react";

const messages = [
  { icon: <Award className="w-4 h-4 text-amber-400" />, text: "GorkhaBooks — आयो गोर्खाली" },
  { icon: <BadgeCheck className="w-4 h-4 text-green-400" />, text: "१००% विश्वासिलो साइट" },
  { icon: <Star className="w-4 h-4 text-rose-400" />, text: "नेपालको नम्बर वान अनलाइन गेमिङ साइट" },
  { icon: <Shield className="w-4 h-4 text-cyan-400" />, text: "नेपाल सरकारबाट मान्यता प्राप्त गेमिङ साइट" },
  { icon: <Zap className="w-4 h-4 text-yellow-400" />, text: "१ मिनेट डिपोजिट · ५ मिनेट तत्काल विथड्रल" },
  { icon: <Clock className="w-4 h-4 text-blue-400" />, text: "२४/७ सपोर्ट उपलब्ध" },
];

export default function TrustBar() {
  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 z-40 w-full bg-gradient-to-r from-red-800 via-red-700 to-red-800 border-b-2 border-amber-500/50 shadow-lg shadow-red-900/20">
      <div className="relative overflow-hidden py-2">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...messages, ...messages, ...messages].map((msg, i) => (
            <div key={i} className="flex items-center gap-2 mx-4 sm:mx-6">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black/30 shrink-0">
                {msg.icon}
              </span>
              <span className="text-white text-xs sm:text-sm md:text-base font-bold tracking-wide drop-shadow-sm">
                {msg.text}
              </span>
              <span className="text-amber-400 text-lg">★</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
