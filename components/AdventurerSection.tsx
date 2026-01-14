"use client";

import { motion } from "framer-motion";
import { Trophy, Dumbbell, Plane, Activity, Compass, Zap } from "lucide-react";
import SectionShell from "./SectionShell";

const adventures = [
  {
    icon: Trophy,
    title: "Physical Sports",
    description: "Playing competitive sports from football and rugby to swimming and padel.",
    gradient: "from-slate-700 via-slate-600 to-slate-800",
    imageGradient: "from-blue-600/20 to-purple-600/20",
  },
  {
    icon: Activity,
    title: "Endurance Sports",
    description: "Marathons, duathlons, and pushing physical limits.",
    gradient: "from-cyan-700 via-blue-600 to-cyan-800",
    imageGradient: "from-cyan-600/20 to-blue-600/20",
  },
  {
    icon: Plane,
    title: "Global Exploration",
    description: "Experienced over 20 different cultures, landscapes, and adventures worldwide.",
    gradient: "from-emerald-700 via-teal-600 to-emerald-800",
    imageGradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    icon: Dumbbell,
    title: "High-Performance Fitness",
    description: "Training for peak physical condition for fitness competitions such as HYROX.",
    gradient: "from-orange-700 via-red-600 to-orange-800",
    imageGradient: "from-orange-600/20 to-red-600/20",
  },
  {
    icon: Compass,
    title: "Adventure Travel",
    description: "Off-the-beaten-path destinations and immersive experiences.",
    gradient: "from-indigo-700 via-purple-600 to-indigo-800",
    imageGradient: "from-indigo-600/20 to-purple-600/20",
  },
  {
    icon: Zap,
    title: "Extreme Challenges",
    description: "Embracing new challenges that pushes mental and physical boundaries.",
    gradient: "from-yellow-700 via-amber-600 to-yellow-800",
    imageGradient: "from-yellow-600/20 to-amber-600/20",
  },
];

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
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function AdventurerSection() {
  return (
    <SectionShell
      id="adventurer"
      eyebrow="The Adventurer"
      title="High-Performance Lifestyle"
    >
      <motion.p
        className="text-center text-lg text-foreground/70 mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Where business excellence meets peak performance. Sports, fitness, and
        global adventures that fuel strategic thinking, resilience, and pushes
        limits to the maximum.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {adventures.map((adventure, index) => {
          const Icon = adventure.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl h-64 md:h-80"
            >
              {/* Background gradient with image placeholder */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${adventure.gradient} ${adventure.imageGradient}`}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm w-fit">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold mb-2 text-white">
                  {adventure.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {adventure.description}
                </p>
              </div>

              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              />

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-accent pointer-events-none" />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Call to action */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-lg text-foreground/70 mb-6">
          Ready to connect? Let&apos;s discuss how strategic thinking and peak
          performance drive results.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-accent text-background font-semibold rounded-full glow-accent"
          onClick={() => {
            window.location.href = "mailto:info@tradelinkinternational.nl";
          }}
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </SectionShell>
  );
}
