"use client";
import { Shield, CheckCircle, Lock, Award, BadgeCheck } from "lucide-react";

const badges = [
  {
    icon: <BadgeCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />,
    en: "Trusted Book of Nepal",
    ne: "नेपालको भरोसेमान्य बुक",
  },
  {
    icon: <Shield className="w-3.5 h-3.5 text-blue-400 shrink-0" />,
    en: "100% Legal & Licensed",
    ne: "१००% कानूनी र लाइसेन्सप्राप्त",
  },
  {
    icon: <Lock className="w-3.5 h-3.5 text-red-400 shrink-0" />,
    en: "256-bit SSL Secure",
    ne: "सुरक्षित एन्क्रिप्शन",
  },
  {
    icon: <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />,
    en: "Safe & Fair Gaming",
    ne: "सुरक्षित र निष्पक्ष खेल",
  },
  {
    icon: <Award className="w-3.5 h-3.5 text-purple-400 shrink-0" />,
    en: "50,000+ Verified Players",
    ne: "५०,०००+ प्रमाणित खेलाडी",
  },
];

export default function TrustBar() {
  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 z-40 w-full bg-black/80 border-b border-red-500/10 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1 flex items-center justify-center gap-x-4 gap-y-0.5 overflow-hidden">
        {badges.map((b, i) => (
          <div key={i} className={`flex items-center gap-1.5 shrink-0 ${i >= 3 ? "hidden lg:flex" : i >= 2 ? "hidden sm:flex" : ""}`}>
            {b.icon}
            <span className="text-gray-300 text-[10px] font-semibold whitespace-nowrap">{b.en}</span>
            <span className="text-gray-600 text-[9px] hidden sm:inline whitespace-nowrap">· {b.ne}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
