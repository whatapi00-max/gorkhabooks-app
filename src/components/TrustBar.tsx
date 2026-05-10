"use client";
import { Star, Award, BadgeCheck, Zap, Clock } from "lucide-react";

const badges = [
  {
    icon: <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />,
    text: "आयो गोर्खाली",
  },
  {
    icon: <BadgeCheck className="w-3.5 h-3.5 text-green-400 shrink-0" />,
    text: "१००% विश्वासिलो साइट",
  },
  {
    icon: <Star className="w-3.5 h-3.5 text-rose-400 shrink-0" />,
    text: "यो साइड नेपालको नम्बर वान अनलाइन गेमिङ साइट हो।",
  },
  {
    icon: <Award className="w-3.5 h-3.5 text-cyan-400 shrink-0" />,
    text: "जुन यो नेपाल सरकारबाट मान्यता प्राप्त गेमिङ साइट हो।",
  },
  {
    icon: <Zap className="w-3.5 h-3.5 text-yellow-400 shrink-0" />,
    text: "एक मिनेटमा डिपोजिट पाँच मिनेटमा तत्काल विथड्रल।",
  },
];

export default function TrustBar() {
  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 z-40 w-full bg-gradient-to-r from-red-900/80 via-red-800/80 to-red-900/80 border-b border-red-500/30 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-1.5 flex items-center justify-center gap-x-2 sm:gap-x-4 gap-y-1 overflow-hidden">
        {badges.map((b, i) => (
          <div
            key={i}
            className={`flex items-center gap-1 sm:gap-1.5 shrink-0 px-2 py-0.5 rounded-full bg-black/20 ${
              i >= 4 ? "hidden xl:flex" : i >= 3 ? "hidden lg:flex" : i >= 2 ? "hidden md:flex" : i >= 1 ? "hidden sm:flex" : ""
            }`}
          >
            {b.icon}
            <span className="text-white text-[10px] sm:text-[11px] font-semibold whitespace-nowrap">{b.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
