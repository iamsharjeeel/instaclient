/*
 * InstaClient FAQ Section
 * Design: Clean accordion, minimal, indigo accents
 * Updated: Full FAQ replacement per PDF recommendations — broader positioning
 */

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is InstaClient only for missed calls?",
    a: "No. Missed-call recovery is one part of the offer, but the broader goal is to help you recover more booked appointments, consults, and repeat business from missed calls, current leads, after-hours opportunities, and your current customer list.",
  },
  {
    q: "What happens if we do not hit the agreed benchmark?",
    a: "If the agreed first-month benchmark is not hit by the end of week four, the work continues at no additional monthly charge until that benchmark is reached.",
  },
  {
    q: "What does InstaClient actually help with?",
    a: "It helps you respond faster, keep more conversations alive, and create better booking outcomes from the opportunities your business is already generating.",
  },
  {
    q: "Who is this best for?",
    a: "It is best for consult-driven local businesses that already get real calls, real leads, or have a meaningful customer base, but still lose revenue through slow follow-up, missed moments, or weak repeat-business systems.",
  },
  {
    q: "How quickly can this be live?",
    a: "The goal is to get the core system running quickly, then refine the workflows based on how your business handles calls, leads, and repeat-business follow-up. Most businesses are fully set up and live in less than 7 days.",
  },
  {
    q: "Will this work with the tools we already use?",
    a: "Yes. InstaClient is designed to work alongside the systems your business already uses — including Jane App, Mindbody, Calendly, Acuity, HubSpot, and more — so your team can improve response and follow-up without rebuilding everything from scratch.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[oklch(0.96_0.008_265)] border border-[oklch(0.88_0.015_265)] text-[oklch(0.42_0.19_265)] text-xs font-semibold font-display tracking-wide mb-5">
              FAQ
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-[oklch(0.14_0.015_265)] leading-tight mb-4" style={{ fontWeight: 800 }}>
              Everything you need to know
            </h2>
            <p className="text-lg text-[oklch(0.45_0.015_265)] leading-relaxed mb-8">
              Can't find what you're looking for? Our team is happy to answer any questions.
            </p>
            <button
              onClick={() => document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold font-display"
            >
              Book a Free Demo
            </button>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-colors ${
                  open === i
                    ? "border-[oklch(0.42_0.19_265)] bg-[oklch(0.97_0.005_265)]"
                    : "border-[oklch(0.91_0.006_265)] bg-white"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className={`font-display font-semibold text-base ${open === i ? "text-[oklch(0.42_0.19_265)]" : "text-[oklch(0.14_0.015_265)]"}`}>
                    {faq.q}
                  </span>
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    open === i ? "bg-[oklch(0.42_0.19_265)] text-white" : "bg-[oklch(0.91_0.006_265)] text-[oklch(0.45_0.015_265)]"
                  }`}>
                    {open === i ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                  </div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-base text-[oklch(0.45_0.015_265)] leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
