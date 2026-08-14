/*
 * InstaClient Features Section
 * Design: Split layout — left feature list, right animated SMS demo
 * Animation: SMS bubbles appear sequentially to simulate real conversation
 * Updated: Larger text, improved readability, stronger contrast on feature cards
 */

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Brain, Calendar, Bell, BarChart3, Shield } from "lucide-react";
import { luxuryEase, luxuryTransition, staggerTransition, view } from "@/lib/motion";

const features = [
  {
    icon: Zap,
    title: "Instant Missed-Call Recovery",
    description: "When a call goes unanswered, the follow-up starts fast so booking intent does not disappear into voicemail and silence.",
    stat: "21x",
    statLabel: "higher conversion",
  },
  {
    icon: Brain,
    title: "Fast Follow-Up for Current Leads",
    description: "Website leads and other inbound opportunities get worked while they are still warm, instead of waiting too long for staff follow-up.",
    stat: "3x",
    statLabel: "better lead quality",
  },
  {
    icon: Calendar,
    title: "After-Hours Coverage",
    description: "Nights, weekends, and front-desk bottlenecks stop becoming dead zones for new conversations and booking intent.",
    stat: "24/7",
    statLabel: "always on",
  },
  {
    icon: Bell,
    title: "Repeat Business from Current Customers",
    description: "Turn your current customer list into more immediate appointments, consults, and return visits without relying only on new acquisition.",
    stat: "40%",
    statLabel: "more repeat revenue",
  },
  {
    icon: BarChart3,
    title: "Live Two-Way Conversations",
    description: "Keep conversations moving in a way that feels responsive and natural instead of relying on stale autoresponders.",
    stat: "$19K",
    statLabel: "avg monthly ROI",
  },
  {
    icon: Shield,
    title: "Clear Tracking and Team Handoff",
    description: "See which conversations were recovered, which ones turned serious, and when your team should step in to close the loop.",
    stat: "100%",
    statLabel: "visibility",
  },
];

const smsMessages = [
  { id: 1, from: "ai", text: "Hi Sarah! We noticed you just called Luxe MedSpa. We're sorry we missed you! Can I help you book an appointment? 😊", delay: 0 },
  { id: 2, from: "user", text: "Yes! I'm interested in a Botox consultation.", delay: 1400 },
  { id: 3, from: "ai", text: "Wonderful! Our Botox consultations are complimentary and take about 30 minutes. Are you a new patient?", delay: 2600 },
  { id: 4, from: "user", text: "Yes, first time!", delay: 3800 },
  { id: 5, from: "ai", text: "Perfect! I have openings this week:\n• Tomorrow (Wed) at 2:00 PM\n• Thursday at 10:00 AM\n• Friday at 4:30 PM\n\nWhich works best?", delay: 5000 },
  { id: 6, from: "user", text: "Thursday at 10am please!", delay: 6400 },
  { id: 7, from: "ai", text: "✅ Booked! Your consultation is confirmed for Thursday at 10:00 AM. You'll receive a reminder 24 hours before. See you then, Sarah!", delay: 7600 },
];

function SMSDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inView) return;
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    smsMessages.forEach((msg, i) => {
      if (msg.from === "ai" && i > 0) {
        const typingTimeout = setTimeout(() => setIsTyping(true), msg.delay - 600);
        timeouts.push(typingTimeout);
      }
      const t = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((prev) => [...prev, msg.id]);
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }, msg.delay);
      timeouts.push(t);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [inView]);

  return (
    <div ref={ref} className="bg-white rounded-3xl shadow-2xl border border-[oklch(0.91_0.006_265)] overflow-hidden max-w-sm mx-auto lg:mx-0">
      {/* Header */}
      <div className="gradient-bg-primary px-5 py-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <Zap className="w-5 h-5 text-white fill-white" />
        </div>
        <div>
          <div className="text-white font-semibold font-display text-sm">InstaClient AI</div>
          <div className="text-white/70 text-xs flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.15_195)] animate-pulse" />
            Active — responding instantly
          </div>
        </div>
        <div className="ml-auto text-white/60 text-xs font-mono-stat">9:41 AM</div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="p-4 space-y-3 h-80 overflow-y-auto"
        style={{ scrollBehavior: "smooth" }}
      >
        {smsMessages.map((msg) =>
          visibleMessages.includes(msg.id) ? (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: luxuryEase }}
              className={`flex ${msg.from === "ai" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                  msg.from === "ai" ? "sms-bubble-ai" : "sms-bubble-user"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ) : null
        )}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="sms-bubble-ai px-4 py-3 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-[oklch(0.91_0.006_265)] bg-[oklch(0.985_0.003_265)] flex items-center gap-2">
        <div className="flex-1 bg-white rounded-xl px-3 py-2 text-xs text-[oklch(0.65_0.015_265)] border border-[oklch(0.91_0.006_265)]">
          Message...
        </div>
        <div className="w-8 h-8 rounded-xl gradient-bg-primary flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-[oklch(0.985_0.003_265)]">
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
            Features
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-[oklch(0.14_0.015_265)] leading-tight mb-4" style={{ fontWeight: 800 }}>
            Everything you need to{" "}
            <span className="gradient-text">uncover more revenue</span>
          </h2>
          <p className="text-xl text-[oklch(0.45_0.015_265)] leading-relaxed">
            Everything you need to recover more from the calls, leads, and customers you already have.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Feature list */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={view}
                  transition={staggerTransition(i)}
                  className="bg-white rounded-2xl p-6 border border-[oklch(0.91_0.006_265)] card-hover group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl gradient-bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-mono-stat text-2xl font-bold text-[oklch(0.42_0.19_265)]">
                      {feature.stat}
                      <span className="text-xs font-normal text-[oklch(0.55_0.015_265)] ml-1 font-display">{feature.statLabel}</span>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-[oklch(0.14_0.015_265)] text-base mb-2" style={{ fontWeight: 700 }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[oklch(0.40_0.015_265)] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Live SMS Demo */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={luxuryTransition}
            className="lg:sticky lg:top-24"
          >
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-[oklch(0.14_0.015_265)] mb-2" style={{ fontWeight: 700 }}>
                Watch the AI in action
              </h3>
              <p className="text-[oklch(0.45_0.015_265)] text-base">
                This is a real conversation flow — the AI handles the entire booking process automatically.
              </p>
            </div>
            <SMSDemo />
            <p className="text-sm text-[oklch(0.65_0.015_265)] mt-3 text-center">
              Scroll down to trigger the live demo animation
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
