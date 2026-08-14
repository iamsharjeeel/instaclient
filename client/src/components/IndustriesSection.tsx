/*
 * InstaClient Industries Section
 * Design: 3 industry cards with icons, stats, and brief copy
 * Targets: Med Spas, Plastic Surgeons, Home Services
 */

import { motion } from "framer-motion";
import { Sparkles, Stethoscope, Wrench } from "lucide-react";
import { luxuryTransition, staggerTransition, view } from "@/lib/motion";

const industries = [
  {
    icon: Sparkles,
    name: "Med Spas & Cosmetic Clinics",
    description: "Botox, fillers, laser treatments, and cosmetic procedures mean every missed call is $300–$1,500 in lost revenue. InstaClient ensures every inquiry gets an instant, professional response.",
    stats: [
      { value: "$680", label: "Avg ticket value" },
      { value: "52%", label: "After-hours calls" },
      { value: "$8,400", label: "Monthly recovery" },
    ],
    color: "from-[oklch(0.42_0.19_265)] to-[oklch(0.55_0.18_265)]",
    bg: "bg-[oklch(0.97_0.005_265)]",
  },
  {
    icon: Stethoscope,
    name: "Surgical & Specialty Practices",
    description: "Specialty procedures range from $3,000 to $25,000+. A missed call from a prospective patient is an enormous loss. InstaClient ensures every inquiry is captured instantly — before they call someone else.",
    stats: [
      { value: "$6,500", label: "Avg ticket value" },
      { value: "67%", label: "Leads need follow-up" },
      { value: "$12,600", label: "Monthly recovery" },
    ],
    color: "from-[oklch(0.50_0.18_265)] to-[oklch(0.65_0.16_230)]",
    bg: "bg-[oklch(0.97_0.008_195)]",
  },
  {
    icon: Wrench,
    name: "Home Services",
    description: "HVAC, roofing, and restoration businesses lose jobs to whoever answers first. InstaClient's 60-second response time wins the bid before your competition even picks up the phone.",
    stats: [
      { value: "$850", label: "Avg ticket value" },
      { value: "73%", label: "Choose first responder" },
      { value: "$6,300", label: "Monthly recovery" },
    ],
    color: "from-[oklch(0.55_0.17_245)] to-[oklch(0.72_0.15_195)]",
    bg: "bg-[oklch(0.97_0.005_265)]",
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={luxuryTransition}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[oklch(0.96_0.008_265)] border border-[oklch(0.88_0.015_265)] text-[oklch(0.42_0.19_265)] text-xs font-semibold font-display tracking-wide mb-5">
            Built For Your Industry
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-[oklch(0.14_0.015_265)] leading-tight mb-4" style={{ fontWeight: 800 }}>
            Designed for{" "}
            <span className="gradient-text">high-ticket local services</span>
          </h2>
          <p className="text-xl text-[oklch(0.45_0.015_265)] leading-relaxed">
            InstaClient is purpose-built for businesses where every lead is worth hundreds or thousands of dollars — and where speed determines who wins the appointment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={staggerTransition(i)}
                className={`${industry.bg} rounded-3xl p-7 border border-[oklch(0.91_0.006_265)] card-hover`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>
                  {industry.name}
                </h3>
                <p className="text-base text-[oklch(0.45_0.015_265)] leading-relaxed mb-6">
                  {industry.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 pt-5 border-t border-[oklch(0.91_0.006_265)]">
                  {industry.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="font-mono-stat text-lg font-bold text-[oklch(0.42_0.19_265)]">{stat.value}</div>
                      <div className="text-xs text-[oklch(0.55_0.015_265)] leading-tight mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
