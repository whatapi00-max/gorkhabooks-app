"use client";
import { motion } from "framer-motion";
import { Lock, Eye, Shield, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";

const sections = [
  {
    icon: <Eye className="w-5 h-5 text-blue-400" />,
    title: "1. Information We Collect",
    content: `We collect information you provide during registration (name, phone number), transaction data (deposit and withdrawal records), device and usage information (IP address, browser type, device identifiers), and communication records (WhatsApp chat history with our support team). We collect only what is necessary to provide our services safely and effectively.`,
  },
  {
    icon: <Shield className="w-5 h-5 text-green-400" />,
    title: "2. How We Use Your Information",
    content: `Your information is used to: create and manage your account, process deposits and withdrawals, verify your identity and age, provide customer support via WhatsApp, send promotional offers (with your consent), detect and prevent fraud and abuse, comply with legal obligations, and improve our platform and services.`,
  },
  {
    icon: <Lock className="w-5 h-5 text-yellow-400" />,
    title: "3. Data Security",
    content: `GorkhaBooks employs industry-standard security measures including 256-bit SSL encryption for all data transmission, secure servers with restricted access, regular security audits, two-factor authentication options, and strict internal data access policies. We never store full payment details on our servers. All financial transactions are processed through certified secure payment gateways.`,
  },
  {
    icon: <Eye className="w-5 h-5 text-purple-400" />,
    title: "4. Data Sharing",
    content: `We do not sell your personal data to third parties. We may share your information with: payment processors (eSewa, Khalti, etc.) to facilitate transactions, identity verification services for KYC compliance, legal authorities when required by law, and service providers who assist in platform operations under strict confidentiality agreements. All third-party partners are bound by data protection obligations.`,
  },
  {
    icon: <Shield className="w-5 h-5 text-rose-400" />,
    title: "5. Cookies and Tracking",
    content: `GorkhaBooks uses cookies to: maintain your session and login state, remember your preferences, analyze platform usage and performance, and deliver relevant promotional content. You can manage cookie preferences through your browser settings. Disabling certain cookies may affect platform functionality. We use analytics tools to improve user experience — this data is anonymized and never linked to personal identifiers.`,
  },
  {
    icon: <Lock className="w-5 h-5 text-cyan-400" />,
    title: "6. Your Rights",
    content: `You have the right to: access your personal data held by us, request correction of inaccurate data, request deletion of your account and associated data, withdraw consent for marketing communications, object to processing of your personal data, and request data portability. To exercise any of these rights, please contact our support team via WhatsApp. We will respond within 72 hours.`,
  },
  {
    icon: <Eye className="w-5 h-5 text-orange-400" />,
    title: "7. Data Retention",
    content: `We retain your personal data for as long as your account is active or as needed to provide services. Transaction records are kept for 7 years to comply with financial regulations. If you close your account, we will delete your personal data within 30 days, except where retention is required by law. WhatsApp communication records may be retained for up to 1 year for quality assurance.`,
  },
  {
    icon: <Shield className="w-5 h-5 text-yellow-400" />,
    title: "8. Children's Privacy",
    content: `GorkhaBooks strictly prohibits use by individuals under 18 years of age. We do not knowingly collect personal information from minors. If we discover that a minor has registered, we will immediately suspend the account and delete all associated data. If you believe a minor has accessed our platform, please contact us immediately via WhatsApp.`,
  },
  {
    icon: <Lock className="w-5 h-5 text-green-400" />,
    title: "9. Changes to This Policy",
    content: `GorkhaBooks may update this Privacy Policy periodically. We will notify you of significant changes via WhatsApp or by posting a notice on our platform. Your continued use of our services after the effective date of any changes constitutes acceptance of the updated policy. We recommend reviewing this policy periodically.`,
  },
  {
    icon: <MessageCircle className="w-5 h-5 text-green-400" />,
    title: "10. Contact Us",
    content: `For any privacy-related questions, concerns, or to exercise your data rights, please contact us via WhatsApp at +977 980 000 0000 or email us at privacy@gorkha.com. Our Data Protection Officer can be reached at dpo@gorkha.com. We are committed to resolving all privacy concerns promptly and transparently.`,
  },
];

export default function PrivacyPageClient() {
  return (
    <div className="min-h-screen pt-20 pb-32 overflow-x-hidden">
      {/* Header */}
      <section className="relative py-10 sm:py-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,255,136,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 mb-4">
              <Lock className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-semibold">Privacy & Data Protection</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Privacy <span className="gradient-text-gold">Policy</span>
            </h1>
            <p className="text-gray-400 mb-4">Last updated: May 1, 2025 · Effective: May 1, 2025</p>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              At GorkhaBooks, your privacy is paramount. This policy explains how we collect, use, and protect your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick summary badges */}
      <section className="px-4 sm:px-6 max-w-4xl mx-auto mb-8 sm:mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {[
            { icon: "🔒", title: "SSL Encrypted", desc: "All data protected" },
            { icon: "🚫", title: "Never Sold", desc: "Your data stays yours" },
            { icon: "👤", title: "You're in Control", desc: "Delete anytime" },
            { icon: "🌐", title: "GDPR Inspired", desc: "Best practices" },
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-4 text-center border border-white/10"
            >
              <span className="text-3xl block mb-2">{b.icon}</span>
              <p className="text-white font-bold text-sm">{b.title}</p>
              <p className="text-gray-500 text-xs">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="px-4 md:px-6 max-w-4xl mx-auto mb-16">
        <div className="space-y-5">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="glass rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <h2 className="text-white font-bold text-base md:text-lg mb-4 flex items-center gap-2">
                {s.icon}
                {s.title}
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">{s.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-8 glass rounded-2xl p-6 border border-green-500/20 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">
            Have privacy concerns or want to exercise your data rights? Contact us instantly on WhatsApp.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            onClick={() => openWhatsApp("I have a privacy-related question about GorkhaBooks.")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-7 py-3 rounded-xl text-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            Contact Privacy Team
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
