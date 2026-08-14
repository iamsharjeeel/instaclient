/*
 * InstaClient Pricing Section
 * Design: 3-tier cards, center card elevated with indigo gradient
 * Tiers: Recover ($297), Convert ($497, recommended), Scale ($697)
 * TM marks: CallSaver, InstaForm, Reactivation Engine, TextConnect, InstaClient Inbox
 * Card heights equalized via items-stretch + flex column layout
 */

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useState } from "react";
import { luxuryTransition, scrollToHash, staggerTransition, view } from "@/lib/motion";

type Feature = {
  name: string;
  payoff: string;
};

type Plan = {
  name: string;
  price: { monthly: number; annual: number };
  description: string;
  features: Feature[];
  prefix: string | null;
  cta: string;
  popular: boolean;
  color: string;
  badge: string | null;
};

const plans: Plan[] = [
  {
    name: "Recover",
    price: { monthly: 297, annual: 247 },
    description: "Everything you need to stop losing leads to missed calls and slow follow-up.",
    prefix: null,
    features: [
      { name: "CallSaver", payoff: "Never lose a lead to a missed call." },
      { name: "InstaForm", payoff: "Instant text follow-up on every new form lead." },
      { name: "InstaClient Inbox", payoff: "Every conversation, every lead, one shared inbox." },
      { name: "Automated Lead Nurture", payoff: "Keep every lead warm with follow-up sequences until they book." },
      { name: "Reporting & Analytics", payoff: "See what's coming in and what's converting." },
    ],
    cta: "Get Started",
    popular: false,
    color: "border-[oklch(0.91_0.006_265)]",
    badge: null,
  },
  {
    name: "Convert",
    price: { monthly: 497, annual: 413 },
    description: "The full system for businesses ready to turn more conversations into booked revenue.",
    prefix: "Everything in Recover, plus:",
    features: [
      { name: "TextConnect", payoff: "Convert website visitors into leads with texting." },
      { name: "AI Appointment Setter", payoff: "Books appointments automatically, day or night." },
      { name: "Reactivation Engine", payoff: "Win back past customers with done-for-you campaigns." },
      { name: "Missed Appointment Recovery", payoff: "Re-engages no-shows instantly with a rebooking sequence." },
      { name: "Conversion Tracking", payoff: "See exactly which conversations became booked appointments." },
    ],
    cta: "Get Started",
    popular: true,
    color: "border-[oklch(0.42_0.19_265)]",
    badge: "Most Popular",
  },
  {
    name: "Scale",
    price: { monthly: 797, annual: 663 },
    description: "For high-volume businesses that want a dedicated growth partner, not just software.",
    prefix: "Everything in Convert, plus:",
    features: [
      { name: "Custom AI Playbook", payoff: "AI conversations tailored to your specific business." },
      { name: "Multi-Location Support", payoff: "Run up to 3 locations from one account." },
      { name: "Monthly ROI Report + Strategy Call", payoff: "Monthly numbers review with a clear action plan." },
      { name: "Dedicated Account Manager", payoff: "One dedicated point of contact who owns your results." },
    ],
    cta: "Get Started",
    popular: false,
    color: "border-[oklch(0.91_0.006_265)]",
    badge: null,
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 lg:py-24 bg-[oklch(0.985_0.003_265)]">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={luxuryTransition}
          className="max-w-2xl mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[oklch(0.96_0.008_265)] border border-[oklch(0.88_0.015_265)] text-[oklch(0.42_0.19_265)] text-xs font-semibold font-display tracking-wide mb-5">
            Pricing
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-[oklch(0.14_0.015_265)] leading-tight mb-4" style={{ fontWeight: 800 }}>
            Simple pricing.{" "}
            <span className="gradient-text">Massive returns.</span>
          </h2>

        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={view}
          transition={{ ...luxuryTransition, delay: 0.1 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className={`text-sm font-medium ${!annual ? "text-[oklch(0.14_0.015_265)]" : "text-[oklch(0.55_0.015_265)]"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "gradient-bg-primary" : "bg-[oklch(0.85_0.01_265)]"}`}
          >
            <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${annual ? "translate-x-7" : "translate-x-1"}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-[oklch(0.14_0.015_265)]" : "text-[oklch(0.55_0.015_265)]"}`}>
            Annual
            <span className="ml-1.5 px-1.5 py-0.5 rounded-md bg-[oklch(0.72_0.15_195)] text-[oklch(0.14_0.015_265)] text-xs font-bold">Save 17%</span>
          </span>
        </motion.div>

        {/* Pricing cards — items-stretch ensures equal heights across all three cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={view}
              transition={staggerTransition(i)}
              className={`relative rounded-3xl border-2 ${plan.color} ${
                plan.popular
                  ? "bg-[oklch(0.14_0.015_265)] shadow-2xl lg:-mt-4 lg:mb-4"
                  : "bg-white shadow-sm"
              } p-8 flex flex-col`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full gradient-bg-primary text-white text-xs font-bold font-display shadow-lg">
                    <Star className="w-3 h-3 fill-white" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <div className={`text-sm font-semibold font-display mb-1 ${plan.popular ? "text-[oklch(0.72_0.15_195)]" : "text-[oklch(0.42_0.19_265)]"}`}>
                  {plan.name}
                </div>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`font-mono-stat text-5xl font-bold ${plan.popular ? "text-white" : "text-[oklch(0.14_0.015_265)]"}`}>
                    ${annual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className={`text-sm mb-2 ${plan.popular ? "text-white/60" : "text-[oklch(0.55_0.015_265)]"}`}>/mo</span>
                </div>
                {annual && (
                  <div className="text-xs text-[oklch(0.72_0.15_195)] font-medium">
                    Billed annually — save ${(plan.price.monthly - plan.price.annual) * 12}/yr
                  </div>
                )}
                <p className={`text-sm leading-relaxed mt-3 ${plan.popular ? "text-white/70" : "text-[oklch(0.52_0.018_265)]"}`}>
                  {plan.description}
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={() => scrollToHash("#cta")}
                className={`w-full py-3.5 rounded-xl font-semibold font-display text-sm mb-6 transition-all ${
                  plan.popular
                    ? "btn-primary"
                    : "border-2 border-[oklch(0.88_0.015_265)] text-[oklch(0.42_0.19_265)] hover:border-[oklch(0.42_0.19_265)] hover:bg-[oklch(0.97_0.005_265)]"
                }`}
              >
                {plan.cta}
              </button>

              {/* Divider */}
              <div className={`h-px mb-5 ${plan.popular ? "bg-white/15" : "bg-[oklch(0.91_0.006_265)]"}`} />

              {/* Prefix label */}
              {plan.prefix && (
                <p className={`text-xs font-semibold font-display mb-4 ${plan.popular ? "text-white/50" : "text-[oklch(0.60_0.015_265)]"}`}>
                  {plan.prefix}
                </p>
              )}

              {/* Features — named modules with one-line payoffs */}
              <ul className="space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-start gap-3">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? "bg-[oklch(0.72_0.15_195)]" : "bg-[oklch(0.52_0.18_145)]"
                    }`}>
                      <Check className={`w-2.5 h-2.5 ${plan.popular ? "text-[oklch(0.14_0.015_265)]" : "text-white"}`} />
                    </div>
                    <div>
                      <div className={`text-sm font-semibold font-display leading-tight ${plan.popular ? "text-white" : "text-[oklch(0.20_0.015_265)]"}`}>
                        {feature.name}
                      </div>
                      <div className={`text-xs mt-0.5 leading-snug ${plan.popular ? "text-white/55" : "text-[oklch(0.55_0.015_265)]"}`}>
                        {feature.payoff}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Setup fee — boxed at bottom */}
              <div className={`mt-6 rounded-xl px-4 py-3 flex items-center justify-between ${
                plan.popular
                  ? "bg-white/10 border border-white/20"
                  : "bg-[oklch(0.97_0.004_265)] border border-[oklch(0.89_0.008_265)]"
              }`}>
                <span className={`text-xs font-medium ${
                  plan.popular ? "text-white/60" : "text-[oklch(0.55_0.015_265)]"
                }`}>One-time setup fee</span>
                <span className={`text-sm font-bold font-display ${
                  plan.popular ? "text-white" : "text-[oklch(0.20_0.015_265)]"
                }`}>$499</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee callout */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={{ ...luxuryTransition, delay: 0.2 }}
          className="mt-10 mx-auto max-w-2xl"
        >
          <div className="flex items-start gap-4 bg-white border border-[oklch(0.88_0.015_265)] rounded-2xl px-6 py-5 shadow-sm">
            <div className="w-10 h-10 rounded-xl gradient-bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <div>
              <div className="font-display font-bold text-[oklch(0.14_0.015_265)] text-base mb-1">Performance Guarantee</div>
              <p className="text-sm text-[oklch(0.45_0.015_265)] leading-relaxed">
                If we don't hit the agreed benchmark by the end of week four, we keep working at no additional charge until we do. No fine print. No exceptions.
              </p>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
