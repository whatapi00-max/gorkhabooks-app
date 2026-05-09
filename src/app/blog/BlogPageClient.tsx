"use client";
import { motion } from "framer-motion";
import { Search, Clock, Tag, MessageCircle, ArrowRight, TrendingUp, BookOpen } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";
import { BLOG_POSTS } from "@/lib/constants";
import { useState } from "react";

const categories = ["All", "Cricket", "Football", "Casino", "Bonuses", "Esports", "Tips"];

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  red:    { text: "text-red-400",    bg: "bg-red-500/10",    border: "border-red-500/30" },
  yellow: { text: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/30" },
  green:  { text: "text-green-400",  bg: "bg-green-500/10",  border: "border-green-500/30" },
  purple: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30" },
  blue:   { text: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/30" },
  orange: { text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" },
};

const gradientMap: Record<string, string> = {
  red:    "from-red-500/20 to-red-900/20",
  yellow: "from-yellow-500/20 to-amber-900/20",
  green:  "from-green-500/20 to-emerald-900/20",
  purple: "from-purple-500/20 to-purple-900/20",
  blue:   "from-blue-500/20 to-blue-900/20",
  orange: "from-orange-500/20 to-orange-900/20",
};

const emojiMap: Record<string, string> = {
  Cricket: "🏏", Football: "⚽", Casino: "🎰", Bonuses: "🎁", Esports: "🎮", Tips: "💡",
};

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const itemVariants = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

export default function BlogPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = BLOG_POSTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = search === "" || p.title.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = BLOG_POSTS[0];

  return (
    <div className="min-h-screen pt-20 pb-32 overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-10 sm:py-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(245,197,24,0.07) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-semibold">Nepal&apos;s #1 Betting Tips Blog</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Free Betting Tips &amp; <span className="gradient-text-gold">Cricket Predictions Nepal</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-3">
              Daily free betting tips, IPL 2025 cricket predictions, football match previews, casino strategy guides and sports news — written by experts, exclusively for Nepal&apos;s players.
            </p>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Cricket satta tips · Football predictions · Teen Patti strategy · Kabaddi tips · eSewa &amp; Khalti betting guide
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, tips, news..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-5 py-4 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-yellow-500/50 transition-colors"
              />
            </div>
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-yellow-500 text-black"
                    : "glass border border-white/10 text-gray-400 hover:border-yellow-500/30 hover:text-yellow-400"
                }`}
              >
                {emojiMap[cat] && <span>{emojiMap[cat]}</span>}
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {activeCategory === "All" && search === "" && (
        <section className="px-4 md:px-6 max-w-7xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className={`rounded-3xl overflow-hidden border border-white/10 hover:border-yellow-500/20 transition-all cursor-pointer bg-gradient-to-br ${gradientMap[featured.color] || gradientMap.red}`}
            onClick={() => openWhatsApp(`I want to read more about: ${featured.title}`)}
          >
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className={`px-3 py-1 rounded-full text-xs font-black ${colorMap[featured.color]?.bg} ${colorMap[featured.color]?.text} ${colorMap[featured.color]?.border} border`}>
                  {featured.badge}
                </span>
                <span className={`text-xs font-semibold ${colorMap[featured.color]?.text}`}>{featured.category}</span>
                <span className="flex items-center gap-1 text-gray-500 text-xs">
                  <Clock className="w-3 h-3" /> {featured.readTime}
                </span>
                <span className="text-gray-500 text-xs">{featured.date}</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight max-w-3xl">
                {featured.title}
              </h2>
              <p className="text-gray-400 text-base md:text-lg mb-6 max-w-2xl leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Blog grid */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-yellow-400" />
            {activeCategory === "All" ? "All Betting Tips & Articles" : `${activeCategory} Betting Tips`}
            <span className="text-gray-500 text-base font-normal">({filtered.length})</span>
          </h2>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">No articles found matching your search.</p>
            <button onClick={() => { setSearch(""); setActiveCategory("All"); }} className="text-yellow-400 font-bold text-sm cursor-pointer hover:text-yellow-300 transition-colors">
              Clear filters
            </button>
          </div>
        ) : (
          <motion.div
            variants={containerVariants} initial="hidden" animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {filtered.map((post) => {
              const colors = colorMap[post.color] || colorMap.yellow;
              return (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.01 }}
                  onClick={() => openWhatsApp(`I want to discuss this article: ${post.title}`)}
                  className="glass rounded-3xl overflow-hidden border border-white/10 hover:border-yellow-500/20 transition-all duration-300 cursor-pointer group"
                >
                  {/* Placeholder image area */}
                  <div className={`h-48 bg-gradient-to-br ${gradientMap[post.color]} flex items-center justify-center relative overflow-hidden`}>
                    <span className="text-7xl opacity-40">{emojiMap[post.category] || "📰"}</span>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black border ${colors.bg} ${colors.text} ${colors.border}`}>
                        {post.badge}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold ${colors.bg} ${colors.text}`}>
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </div>
                      <span className="flex items-center gap-1 text-gray-500 text-[11px]">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-yellow-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-gray-500 text-xs">{post.date}</span>
                      <div className="flex items-center gap-1 text-yellow-400 text-xs font-bold group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </section>

      {/* Newsletter / WhatsApp updates CTA */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-gold rounded-3xl p-8 md:p-12 text-center border border-yellow-500/20"
        >
          <div className="text-5xl mb-4">📲</div>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            Get Betting Tips on WhatsApp
          </h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Join our WhatsApp group to receive daily betting tips, match predictions, and exclusive offers directly on your phone.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            onClick={() => openWhatsApp("I want to join your WhatsApp group for daily betting tips and predictions!")}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black px-10 py-4 rounded-2xl text-base cursor-pointer shadow-xl shadow-green-500/30"
          >
            <MessageCircle className="w-5 h-5" />
            Join Tips Group on WhatsApp
          </motion.button>
        </motion.div>
      </section>

      {/* SEO text block – keyword-rich topical authority content */}
      <section className="px-4 sm:px-6 max-w-4xl mx-auto mt-14 mb-4">
        <div className="border-t border-white/5 pt-10">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
            Nepal&apos;s Best Free Betting Tips &amp; Predictions
          </h2>
          <p className="text-gray-600 text-xs font-medium mb-4">नेपालको सर्वश्रेष्ठ निःशुल्क बेटिङ टिप्स र भविष्यवाणीहरू</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            GorkhaBooks Blog is Nepal&apos;s most trusted source for free betting tips, cricket match predictions,
            football analysis, and casino strategy guides. Whether you are searching for today&apos;s IPL match
            winner prediction, football satta tips, or how to win at Teen Patti — our expert team publishes
            daily tips exclusively for Nepali players.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            We cover all major sports popular in Nepal — IPL Cricket, Premier League Football, PKL Kabaddi,
            Nepal Premier League, BGMI &amp; Valorant Esports. Each article includes match analysis, odds
            comparison, and clear betting recommendations so you can place your bets confidently on GorkhaBooks.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            Deposits and withdrawals are instant via <strong className="text-gray-400">eSewa, Khalti, IME Pay</strong> and
            bank transfer in Nepali Rupees (NPR). Our tips are 100% free — no subscription, no cost. Just read,
            learn, and win. Join 50,000+ players who trust GorkhaBooks for online betting in Nepal.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            GorkhaBooks व्लगमा निःशुल्क <strong className="text-gray-400">क्रिकेट भविष्यवाणी</strong>, फुटबल विश्लेषण, <strong className="text-gray-400">IPL भविष्यवाणी नेपाल</strong> र क्यासिनो रणनीति पाउनुहोस्। eSewa, Khalti मार्फत जम्मा गर्नुस्। सडक टिप्स लिनुस्, जित्नुहोस्।
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Cricket Betting Tips · क्रिकेट टिप्स", "IPL 2026 Predictions · IPL भविष्यवाणी",
              "Football Tips Nepal · फुटबल टिप्स", "Casino Strategy · क्यासिनो रणनीति",
              "Kabaddi Betting · कबड्डी बेटिङ", "Satta Tips Nepal · सट्टा टिप्स",
              "Teen Patti Guide · टिन पत्ती गाइड", "Free Bet Nepal · निःशुल्क बेट",
              "PUBG Tips Nepal · PUBG टिप्स", "Today Match Prediction · आजको म्याच",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
