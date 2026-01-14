import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  onClick?: () => void;
}

export default function BentoCard({
  children,
  className = "",
  glow = false,
  onClick,
}: BentoCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 transition-all duration-300 ${
        glow ? "glow" : ""
      } ${className}`}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
