"use client";

const tickerItems = [
  "🏏 IPL 2026: MI vs CSK – Mumbai Indians 187/4 (18.2) | LIVE",
  "⚽ Premier League: Arsenal 2-1 Chelsea | 67'",
  "🎾 Wimbledon: Djokovic vs Alcaraz | Set 3 LIVE",
  "💰 Player from Kathmandu just won NPR 45,000! · काठमाडौंका खेलाडीले NPR ४५,०००  जिते!",
  "🎰 Jackpot Alert: NPR 2,50,000 Mega Jackpot Active! · मेगा ज्याकपट सक्रिय!",
  "🏏 Nepal T20 League: Pokhara vs Kathmandu – Tonight 6 PM · आज राति ६ बजे",
  "⚡ New Member Bonus: 100% up to NPR 10,000 – Limited Time! · सीमित समय!",
  "🤼 PKL: Patna Pirates vs UP Yoddhas | Upcoming Tonight",
  "🎮 BGMI Tournament Finals – Watch & Bet LIVE · लाइभ हेर्नुस्",
  "✅ GorkhaBooks – 100% Legal & Trusted Book of Nepal · कानूनी र भरोसेमान्य",
  "💚 WhatsApp Support: Average reply time 30 seconds! · ३० सेकेन्डमा जवाफ!",
];

export default function LiveTickerSection() {
  return (
    <section className="bg-[#060b1a] border-y border-red-500/20 py-3 overflow-hidden">
      <div className="flex items-center">
        {/* Label */}
        <div className="flex items-center gap-2 bg-red-600 px-4 py-1.5 shrink-0 z-10">
          <span className="w-2 h-2 rounded-full bg-white live-dot" />
          <span className="text-white font-black text-xs uppercase tracking-wide">LIVE</span>
        </div>

        {/* Scrolling ticker */}
        <div className="flex-1 overflow-hidden">
          <div className="marquee-inner flex items-center gap-0 whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="text-gray-300 text-sm px-8 inline-flex items-center gap-1">
                <span>{item}</span>
                <span className="text-red-500/40 mx-2">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
