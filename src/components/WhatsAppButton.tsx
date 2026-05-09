"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";

interface WhatsAppButtonProps {
  text?: string;
  message?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "green" | "gold" | "outline-green" | "outline-gold";
  className?: string;
  fullWidth?: boolean;
  icon?: boolean;
}

export default function WhatsAppButton({
  text = "Join on WhatsApp",
  message,
  size = "md",
  variant = "green",
  className = "",
  fullWidth = false,
  icon = true,
}: WhatsAppButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2",
    xl: "px-10 py-5 text-lg gap-3",
  };

  const variantClasses = {
    green:
      "bg-gradient-to-r from-red-600 to-rose-500 text-white hover:from-red-500 hover:to-rose-400 shadow-lg shadow-red-500/30",
    gold: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/30",
    "outline-green":
      "border-2 border-red-500 text-red-400 hover:bg-red-500/10 bg-transparent",
    "outline-gold":
      "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => openWhatsApp(message)}
      className={`
        inline-flex items-center justify-center font-bold rounded-xl
        transition-all duration-300 cursor-pointer
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {icon && <MessageCircle className={size === "xl" ? "w-6 h-6" : size === "lg" ? "w-5 h-5" : "w-4 h-4"} />}
      {text}
    </motion.button>
  );
}
