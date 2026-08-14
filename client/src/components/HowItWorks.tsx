/*
 * InstaClient How It Works Section
 * Design: 3-step process with large step numbers, offset cards, connecting line
 * Animation: Scroll-triggered stagger entrance
 * Updated: Broader copy per PDF — covers calls, leads, and current customers
 */

import { motion } from "framer-motion";
import { PhoneMissed, MessageSquareText, CalendarCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneMissed,
    title: "A Call, Lead, or Customer Opportunity Comes In",
    description:
      "A call gets missed, a current lead needs follow-up, or a current customer is ready for their next appointment or offer. InstaClient detects the moment instantly — whether you're with a client, after hours, or simply busy.",
    detail: "Works 24/7, including weekends and holidays",
    color: "from-[oklch(0.42_0.19_265)] to-[oklch(0.50_0.18_265)]",
    bgColor: "bg-[oklch(0.96_0.008_265)]",
    accentColor: "text-[oklch(0.42_0.19_265)]",
  },
  {
    number: "02",
    icon: MessageSquareText,
    title: "InstaClient Responds Quickly and Keeps the Conversation Moving",
    description:
      "The system follows up fast, answers simple questions, qualifies intent, and guides the person toward the next best step — while your team is busy or unavailable. All in a natural, conversational tone personalized to your business.",
    detail: "Personalized to your business name, services & tone",
    color: "from-[oklch(0.50_0.18_265)] to-[oklch(0.60_0.16_230)]",
    bgColor: "bg-[oklch(0.96_0.010_195)]",
    accentColor: "text-[oklch(0.50_0.18_265)]",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Your Team Gets Cleaner Handoffs and More Bookings",
    description:
      "Instead of losing momentum, your team gets better-timed conversations, more booked appointments and consults, and more repeat business from customers you already paid to acquire. You receive a notification — all you have to do is show up.",
    detail: "Integrates with Jane App, Mindbody, Calendly & more",
    color: "from-[oklch(0.60_0.16_230)] to-[oklch(0.72_0.15_195)]",
    bgColor: "bg-[oklch(0.96_0.008_195)]",
    accentColor: "text-[oklch(0.55_0.15_195)]",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[oklch(0.96_0.008_265)] border border-[oklch(0.88_0.015_265)] text-[oklch(0.42_0.19_265)] text-xs font-semibold font-display tracking-wide mb-5">
            How It Works
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-[oklch(0.14_0.015_265)] leading-tight mb-4" style={{ fontWeight: 800 }}>
            The same calls, leads, and customers.{" "}
            <span className="gradient-text">A better response system.</span>
          </h2>
          <p className="text-lg text-[oklch(0.45_0.015_265)] leading-relaxed">
            InstaClient helps you move faster when booking intent is highest — so fewer opportunities slip away and more of them turn into real revenue.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-0.5 bg-gradient-to-r from-[oklch(0.42_0.19_265)] via-[oklch(0.55_0.17_245)] to-[oklch(0.72_0.15_195)] opacity-20 z-0" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Step number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-mono-stat text-5xl font-bold text-[oklch(0.91_0.006_265)]">
                      {step.number}
                    </span>
                  </div>

                  {/* Card */}
                  <div className={`${step.bgColor} rounded-2xl p-6 border border-[oklch(0.91_0.006_265)] card-hover`}>
                    <h3 className="font-display text-xl font-bold text-[oklch(0.14_0.015_265)] mb-3" style={{ fontWeight: 700 }}>
                      {step.title}
                    </h3>
                    <p className="text-[oklch(0.45_0.015_265)] leading-relaxed text-base mb-4">
                      {step.description}
                    </p>
                    <div className={`inline-flex items-center gap-1.5 text-xs font-semibold ${step.accentColor} font-display`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                      {step.detail}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-[oklch(0.52_0.018_265)] text-sm mb-4">
            Average setup time: <span className="font-semibold text-[oklch(0.42_0.19_265)]">under 7 days</span>. No technical knowledge required.
          </p>
          <a
            href="#cta"
            onClick={(e) => { e.preventDefault(); document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold font-display"
          >
            Start Recovering Revenue Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
