"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, UserPlus, Wallet } from "lucide-react";
import { NOTIFICATION_MESSAGES } from "@/lib/constants";

export default function NotificationPopup() {
  const [current, setCurrent] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let idx = 0;
    const show = () => {
      setCurrent(idx % NOTIFICATION_MESSAGES.length);
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          idx++;
          show();
        }, 1500);
      }, 4000);
    };
    const timer = setTimeout(show, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (current === null) return null;
  const msg = NOTIFICATION_MESSAGES[current];

  const icon = msg.action.includes("won") ? (
    <Trophy className="w-4 h-4 text-red-400" />
  ) : msg.action.includes("joined") ? (
    <UserPlus className="w-4 h-4 text-cyan-400" />
  ) : (
    <Wallet className="w-4 h-4 text-blue-400" />
  );

  const iconBg = msg.action.includes("won")
    ? "bg-red-500/20"
    : msg.action.includes("joined")
    ? "bg-cyan-500/20"
    : "bg-blue-500/20";

  return (
    <div className="fixed bottom-32 left-4 md:bottom-24 md:left-6 z-40 max-w-[280px]">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="glass rounded-2xl px-4 py-3 flex items-center gap-3 border border-red-500/15"
          >
            <div className={`w-9 h-9 rounded-full ${iconBg} flex items-center justify-center shrink-0`}>
              {icon}
            </div>
            <div className="min-w-0">
              <p className="text-white text-xs font-semibold truncate">
                <span className="text-red-400">{msg.name}</span>
                {" "}
                <span className="text-gray-300">from {msg.location}</span>
              </p>
              <p className="text-gray-400 text-[11px] truncate">
                {msg.action}
                {msg.amount && (
                  <span className="text-cyan-400 font-bold"> {msg.amount}</span>
                )}
                {msg.game && <span> on {msg.game}</span>}
              </p>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 live-dot shrink-0" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
