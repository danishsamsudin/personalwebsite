"use client";

import { motion } from "framer-motion";
import { Briefcase, Globe, BarChart, TrendingUp } from "lucide-react";
import SectionShell from "./SectionShell";
import BentoCard from "./BentoCard";

const experiences = [
  {
    icon: Briefcase,
    title: "Founder & Product Developer",
    company: "Domu Match",
    years: "2025 - Present",
    metric: "Pre-Revenue Phase",
    impact:
      "Designed and launched a housing-matching platform addressing inefficiencies in student and international housing markets, combining platform logic, user experience design, and market validation.",
    url: "https://domumatch.com",
  },
  {
    icon: Globe,
    title: "Founder & Managing Director",
    company: "Tradelink International",
    years: "2022 - Present",
    metric: "5 Companies Incorporated",
    impact: "Acts as a market access layer between global manufacturers and European consumers, handling market entry, operational setup, and ongoing platform execution.",
    url: "https://tradelinkinternational.nl",
  },
  {
    icon: BarChart,
    title: "Independent Seller & Operator",
    company: "Bol.com Partner Program",
    years: "2020 - Present",
    metric: "6% MoM Growth",
    impact: "Operated multiple product lines within a highly regulated marketplace environment, focusing on listing architecture, pricing strategy, fulfillment logic, international logistics, advertising, and performance optimization.",
  },
  {
    icon: TrendingUp,
    title: "President & Supervisory Board",
    company: "ESN Breda",
    years: "2022 - 2025",
    metric: "500+ International Students Supported",
    impact:
      "Led and supervised an international student organisation responsible for international student integration, managing teams, events, external partners, and institutional relationships.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function BusinessSection() {
  return (
    <SectionShell
      id="business"
      eyebrow="Impact & Scale"
      title="Business & Experience"
    >
      <motion.p
        className="text-center text-lg text-foreground/70 mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Building and scaling businesses that create measurable impact across
        global markets. Focused on strategic growth, operational excellence, and
        transformative leadership.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <BentoCard
                glow={true}
                className={`h-full ${exp.url ? "cursor-pointer" : ""}`}
                onClick={() => {
                  if (exp.url) {
                    window.open(exp.url, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-accent font-semibold mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-foreground/60">{exp.years}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-lg font-semibold text-accent mb-2">
                    {exp.metric}
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    {exp.impact}
                  </p>
                </div>
              </BentoCard>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}
