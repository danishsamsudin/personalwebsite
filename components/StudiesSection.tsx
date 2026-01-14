"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Brain,
  Award,
  Code,
  Globe,
} from "lucide-react";
import SectionShell from "./SectionShell";
import BentoCard from "./BentoCard";

const knowledgeStack = [
  {
    category: "Degrees",
    icon: GraduationCap,
    items: [
      { title: "International Baccalaureate", institution: "International School of Breda" },
      { title: "BSc Economics (Ongoing)", institution: "Tilburg University" },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Advanced Practice",
    icon: Brain,
    items: [
      { title: "Operator-Led Venture Building", institution: "Built and Ran Live Businesses" },
      { title: "Applied Economics & Strategy", institution: "Quantitative decision-making" },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Certifications",
    icon: Award,
    items: [
      { title: "The Fundamentals of Digital Marketing", institution: "Google" },
      { title: "Bronze Award", institution: "The Duke of Edinburgh's International Award Foundation" },
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    category: "Core Disciplines",
    icon: BookOpen,
    items: [
      { title: "Global Strategy", institution: "6+ Years Practice" },
      { title: "Cross-Domain Execution", institution: "6+ Industries" },
      { title: "Cross-Cultural Leadership", institution: "Intercontinental Operations" },
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Technical Skills",
    icon: Code,
    items: [
      { title: "AI-assisted Software Developer", institution: "Product Architect and Orchestrator" },
      { title: "Commerce Systems Strategies", institution: "Build Scalable Marketplace Operations" },
      { title: "Systems Analytics & Experimentation", institution: "Design Tests and Optimises Performance" },
    ],
    color: "from-indigo-500 to-blue-500",
  },
  {
    category: "Languages",
    icon: Globe,
    items: [
      { title: "English", institution: "Native" },
      { title: "Dutch", institution: "Conversational" },
      { title: "Malay", institution: "Beginner" },
    ],
    color: "from-cyan-500 to-blue-500",
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
  hidden: { opacity: 0, y: 30, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function StudiesSection() {
  return (
    <SectionShell
      id="studies"
      eyebrow="Intellectual Foundation"
      title="Knowledge Stack"
    >
      <motion.p
        className="text-center text-lg text-foreground/70 mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        A modern approach to education: continuous learning, strategic
        certifications, and practical expertise built through real-world
        application across global markets.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {knowledgeStack.map((stack, index) => {
          const Icon = stack.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <BentoCard
                className="h-full relative overflow-hidden group"
                glow={index % 3 === 0}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stack.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stack.color} text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{stack.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {stack.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="pb-4 border-b border-border last:border-0 last:pb-0"
                      >
                        <p className="font-semibold mb-1">{item.title}</p>
                        <p className="text-sm text-foreground/60">
                          {item.institution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </BentoCard>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile horizontal scroll hint */}
      <motion.div
        className="md:hidden mt-8 text-center text-sm text-foreground/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Scroll horizontally to explore all knowledge areas
      </motion.div>
    </SectionShell>
  );
}
