/*
 * InstaClient Hero Section
 * Design: Asymmetric layout — bold left headline + right phone mockup
 * Features: Animated SMS bubbles, gradient orb background, scroll CTA
 */

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, CheckCircle2, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/23E3gilc602mXSvb0I5jYs/sandbox/oZhnKX3lU2Z5SX2jn7peHi-img-1_1771990972000_na1fn_Y2xpZW50Zmxvdy1oZXJvLWJn.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMjNFM2dpbGM2MDJtWFN2YjBJNWpZcy9zYW5kYm94L29aaG5LWDNsVTJaNVNYMmpuN3BlSGktaW1nLTFfMTc3MTk5MDk3MjAwMF9uYTFmbl9ZMnhwWlc1MFpteHZkeTFvWlhKdkxXSm4ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DOROOANnm3hR91apZ-HgwLeZR51x5eqOKueF9RWT97IeK6BeQcCzyAGvbmHxryfSiqiBdqBPn6CA9soezbWpZUclGAkjjqTPROOYyg18KpEznWwVsTm0-XAOxsiaI1Pc8~ouk8fqyaaUBoBUXzcYFNh-1X~STzFXbRtT3ooUfSIBHOt8SxURM4KtCQPSbKRhyhNbnQGR5~-09Fwpym84AmS60QS5yo~807vIrEN6wVbEH-C9PZHuDi2JyzOB4oYSMIcoP8aI946IH9va3T~DW4dRCMmV5ciVxnqG2r6mKeG~aVSee~jUr3107K3q376~g5FHx7VNJ5uhyKY1c9abjw__";

const PHONE_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/23E3gilc602mXSvb0I5jYs/sandbox/oZhnKX3lU2Z5SX2jn7peHi-img-2_1771990879000_na1fn_Y2xpZW50Zmxvdy1waG9uZS1tb2NrdXA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMjNFM2dpbGM2MDJtWFN2YjBJNWpZcy9zYW5kYm94L29aaG5LWDNsVTJaNVNYMmpuN3BlSGktaW1nLTJfMTc3MTk5MDg3OTAwMF9uYTFmbl9ZMnhwWlc1MFpteHZkeTF3YUc5dVpTMXRiMk5yZFhBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lMmSR9JeVyQS8yg4UP3WqiV5TMBS4celo53HMvfzGpdA4bu4Mb95tMZgCHVfDhVjK8tYg2DU82rafzr7VqLxD-2FHtyjdywltxBPpDTuQnx5SjL6Frs-VCTwEAVsJsB~FD7WuJdg8isXgeJtNn~14ufEJGMhoIj~wLhjEOIwBFk4jVEo3y2~MO-9Kmu5r5Ff6pue0UPpBI2CdVJsVgetjXCV-w11kVlhBE~FV93WrR30XPu3cclWMvR1veYvPdQ6a7C36Nlh5yr30nlKckwHFMSpt1whVnNW~vpoKtDYgTc~HHxPGiWmIo5IzFRCSeca6rNQQqDAz-lZCwdAMgt21A__";



const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function AnimatedCounter({ end, prefix = "", suffix = "", duration = 2000 }: { end: number; prefix?: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.6,
        }}
      />
      {/* White fade overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/95 to-white/40" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/20 via-transparent to-white/60" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
          {/* Left: Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Eyebrow badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[oklch(0.96_0.008_265)] border border-[oklch(0.88_0.015_265)] text-[oklch(0.42_0.19_265)] text-xs font-semibold font-display tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.15_195)] animate-pulse" />
                AI-Powered Speed-to-Lead
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight text-[oklch(0.14_0.015_265)] mb-6 font-display"
              style={{ fontWeight: 800 }}
            >
              Turn Every{" "}
              <span className="gradient-text">Missed Call and Slow Follow-Up</span>{" "}
              Into an Instant Booked Appointment.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-[oklch(0.45_0.015_265)] leading-relaxed mb-8 font-inter"
            >
              InstaClient helps consult-driven local businesses stop losing appointments to missed calls and slow follow-up, and turn existing customers into more immediate revenue without spending more on ads.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#cta"
                onClick={(e) => { e.preventDefault(); document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold font-display"
              >
                Book a Free Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => { e.preventDefault(); document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold font-display text-[oklch(0.42_0.19_265)] border-2 border-[oklch(0.88_0.015_265)] hover:border-[oklch(0.42_0.19_265)] hover:bg-[oklch(0.97_0.005_265)] transition-all"
              >
                See How It Works
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-[oklch(0.45_0.015_265)]">
                <Clock className="w-4 h-4 text-[oklch(0.42_0.19_265)]" />
                <span>Responds in &lt; 60 seconds</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[oklch(0.45_0.015_265)]">
                <CheckCircle2 className="w-4 h-4 text-[oklch(0.55_0.15_165)]" />
                <span>67% avg booking rate</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[oklch(0.45_0.015_265)]">
                <PhoneCall className="w-4 h-4 text-[oklch(0.60_0.18_30)]" />
                <span>Live in under 7 days</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end -mt-8 lg:-mt-16"
          >
            {/* Glow behind phone */}
            <div className="absolute inset-0 glow-orb scale-110 opacity-60" />
            <div className="absolute top-1/4 right-1/4 w-64 h-64 teal-glow opacity-40" />

            {/* Phone image */}
            <div className="relative z-10 w-72 lg:w-80 xl:w-96">
              <img
                src={PHONE_IMG}
                alt="InstaClient AI SMS conversation demo"
                className="w-full drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 30px 60px oklch(0.42 0.19 265 / 0.25))" }}
              />

              {/* Floating notification card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -left-8 top-16 bg-white rounded-2xl shadow-xl border border-[oklch(0.91_0.006_265)] p-3 w-52"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full gradient-bg-primary flex items-center justify-center">
                    <PhoneCall className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs font-semibold font-display text-[oklch(0.14_0.015_265)]">Missed Call Detected</span>
                </div>
                <p className="text-xs text-[oklch(0.52_0.018_265)]">AI responding in <span className="text-[oklch(0.42_0.19_265)] font-semibold">3 seconds...</span></p>
                <div className="mt-2 flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.42_0.19_265)] animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.42_0.19_265)] animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.42_0.19_265)] animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </motion.div>

              {/* Booked badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="absolute -right-6 bottom-24 bg-[oklch(0.42_0.19_265)] rounded-2xl shadow-xl p-3 text-white"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[oklch(0.72_0.15_195)]" />
                  <div>
                    <div className="text-xs font-bold font-display">Appointment Booked!</div>
                    <div className="text-xs opacity-75">+$450 revenue</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
