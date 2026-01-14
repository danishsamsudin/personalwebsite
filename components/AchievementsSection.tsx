"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Award, Target, Zap } from "lucide-react";
import SectionShell from "./SectionShell";
import BentoCard from "./BentoCard";

const stats = [
  { label: "Years Building Ventures", value: "7+", icon: Target },
  { label: "Active Business Projects", value: "4+", icon: Zap },
  { label: "Managed Annual Revenue", value: "€200K+", icon: Trophy },
  { label: "Hours Applied Learning", value: "1000+", icon: Award },
];

const achievements = [
  {
    title: "Platform-Native Business Builder",
    description:
      "Designed and operated businesses inside complex digital platforms, balancing compliance, growth constraints, and performance optimization.",
    year: "2025",
  },
  {
    title: "Cross-Border Market Entry Execution",
    description:
      "Enabled international brands to enter and operate in the Dutch and Belgian market through structured setup, compliance, and ongoing execution.",
    year: "2024",
  },
  {
    title: "Compounding Growth",
    description:
      "Achieved multi-year compounding performance growth by systematically testing pricing, positioning, listings, and operational workflows.",
    year: "2023",
  },
  {
    title: "Leadership in Volunteering",
    description:
      "Led and coordinated international, volunteer-driven organizations and initiatives, aligning people, partners, and institutions around shared outcomes.",
    year: "2022",
  },
];

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  // Extract number from value (e.g., "10+" -> 10, "€200K+" -> 200)
  const numValue = parseInt(value.replace(/\D/g, "")) || 0;
  
  // Extract prefix (currency symbols at the start) and suffix (everything after digits)
  const prefix = value.match(/^[^\d]*/)?.[0] || "";
  const suffix = value.replace(/\d/g, "").replace(prefix, "");

  return (
    <span ref={ref} className="text-5xl font-bold gradient-text">
      {isInView ? (
        <CountUpAnimation target={numValue} duration={duration} prefix={prefix} suffix={suffix} />
      ) : (
        prefix + "0" + suffix
      )}
    </span>
  );
}

function CountUpAnimation({
  target,
  duration,
  prefix,
  suffix,
}: {
  target: number;
  duration: number;
  prefix: string;
  suffix: string;
}) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return <>{prefix}{count}{suffix}</>;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function AchievementsSection() {
  return (
    <SectionShell
      id="achievements"
      eyebrow="The Win Wall"
      title="Achievements & Milestones"
    >
      {/* Stats Row */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <BentoCard className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <AnimatedCounter value={stat.value} />
                <p className="text-sm text-foreground/60 mt-2">{stat.label}</p>
              </BentoCard>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Achievements Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {achievements.map((achievement, index) => (
          <motion.div key={index} variants={itemVariants}>
            <BentoCard glow={index % 2 === 0} className="h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
                <span className="text-accent font-bold text-lg ml-4">
                  {achievement.year}
                </span>
              </div>
            </BentoCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
