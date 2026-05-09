"use client";
import { motion } from "framer-motion";
import { Shield, FileText, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the GorkhaBooks platform (gorkha.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. GorkhaBooks reserves the right to modify these terms at any time, and continued use of the platform constitutes acceptance of any changes.`,
  },
  {
    title: "2. Eligibility",
    content: `You must be at least 18 years of age to use GorkhaBooks services. By registering, you confirm that you are of legal age and have the legal authority to enter into this agreement. GorkhaBooks reserves the right to verify your age and identity at any time. Accounts found to be operated by minors will be immediately suspended.`,
  },
  {
    title: "3. Account Registration",
    content: `Registration is completed via WhatsApp with our support team. You agree to provide accurate, current, and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Please notify us immediately if you suspect any unauthorized use.`,
  },
  {
    title: "4. Deposits and Withdrawals",
    content: `Deposits are accepted via eSewa, Khalti, IME Pay, FonePay, ConnectIPS, and bank transfer. Minimum deposit is NPR 500. Withdrawals are processed within 5 minutes for amounts under NPR 50,000. Larger amounts may take up to 24 hours. GorkhaBooks does not charge fees on deposits or withdrawals. Third-party payment processing fees may apply.`,
  },
  {
    title: "5. Bonuses and Promotions",
    content: `All bonuses are subject to wagering requirements communicated at the time of offer. Welcome bonus of 100% up to NPR 10,000 requires 10x wagering before withdrawal. Cashback bonuses are credited every Monday for the previous week's net losses. GorkhaBooks reserves the right to modify, cancel or withdraw any bonus offer at any time. Bonus abuse or fraud will result in account suspension.`,
  },
  {
    title: "6. Prohibited Activities",
    content: `Users are prohibited from: using multiple accounts, colluding with other players, using automated betting systems or bots, attempting to manipulate outcomes, engaging in money laundering, providing false information, or accessing the platform from restricted jurisdictions. Any violation will result in immediate account suspension and forfeiture of funds.`,
  },
  {
    title: "7. Responsible Gaming",
    content: `GorkhaBooks is committed to responsible gaming. We encourage players to set personal deposit limits, take regular breaks, and never bet more than they can afford to lose. If you believe you have a gambling problem, please contact our support team via WhatsApp for self-exclusion options and resources. Players can request temporary or permanent account closure at any time.`,
  },
  {
    title: "8. Intellectual Property",
    content: `All content on GorkhaBooks including logos, graphics, text, software, and data is the property of GorkhaBooks and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without explicit written permission from GorkhaBooks.`,
  },
  {
    title: "9. Limitation of Liability",
    content: `GorkhaBooks shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform. Our total liability for any claim shall not exceed the amount deposited by you in the 30 days preceding the claim. GorkhaBooks is not responsible for internet connectivity issues or force majeure events.`,
  },
  {
    title: "10. Governing Law",
    content: `These Terms shall be governed by the laws applicable in Nepal. Any disputes arising from these Terms shall be resolved through good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration. By using GorkhaBooks, you consent to this dispute resolution process.`,
  },
];

export default function TermsPageClient() {
  return (
    <div className="min-h-screen pt-20 pb-32 overflow-x-hidden">
      {/* Header */}
      <section className="relative py-10 sm:py-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(245,197,24,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4">
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-semibold">Legal Document</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Terms of <span className="gradient-text-gold">Service</span>
            </h1>
            <p className="text-gray-400 mb-4">
              Last updated: May 1, 2025 · Effective: May 1, 2025
            </p>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Please read these terms carefully before using GorkhaBooks. By using our platform you agree to be bound by these terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 max-w-4xl mx-auto mb-12 sm:mb-16">
        <div className="space-y-6">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-yellow-400 shrink-0" />
                {s.title}
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">{s.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-8 glass-gold rounded-2xl p-6 border border-yellow-500/20 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">
            Questions about our Terms of Service? Our team is available 24/7 to help you understand your rights and our obligations.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            onClick={() => openWhatsApp("I have a question about GorkhaBooks Terms of Service.")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-7 py-3 rounded-xl text-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            Ask on WhatsApp
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
