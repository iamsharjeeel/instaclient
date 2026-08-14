/*
 * InstaClient ROI Section
 * Design: Dark indigo background for contrast, large stat numbers, dashboard mockup
 * Updated: Revenue $19,400, Net ROI 640%, interactive ROI calculator modal
 */

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, DollarSign, Users, Clock, X, Calculator } from "lucide-react";
import { luxuryEase, luxuryTransition, scrollToHash, staggerTransition, view } from "@/lib/motion";

const DASHBOARD_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/23E3gilc602mXSvb0I5jYs/sandbox/oZhnKX3lU2Z5SX2jn7peHi-img-3_1771990878000_na1fn_Y2xpZW50Zmxvdy1kYXNoYm9hcmQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMjNFM2dpbGM2MDJtWFN2YjBJNWpZcy9zYW5kYm94L29aaG5LWDNsVTJaNVNYMmpuN3BlSGktaW1nLTNfMTc3MTk5MDg3ODAwMF9uYTFmbl9ZMnhwWlc1MFpteHZkeTFrWVhOb1ltOWhjbVEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TJiMl98pX~XY4~Yk3XCdi~ubFfldgVSxjY7fDYKnJ6ZOaEmIvZlKQuoy8T2Cg2JzWXs2mzeuaiAsXiwN0uZ2SFVAmT4Er-KLQJb0dgfKOB4b-Pkd3FCpn88uVX0zKaGhhPLQE-BgWNdDTR9E51z~KDXMrlYJcxiwzTcz~HKT8AclBo0Hcn0AMM704nbf7S5dCuM9pCE62hZCAYLVDEgK2BQ~1omZV6jrCndgbqjru430fJ8yxqieOVrNR-I0KBDMnD~xoquJ1-NmIxwjt5mWxjhSYQeUq~Ymh~vNWABNME1jEO4smEnQIhoBoxG8EaUUxi1oK~wTWWUuk~Cj6S6zhg__";

function CountUp({ end, prefix = "", suffix = "", decimals = 0 }: { end: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const duration = 2200;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, decimals]);

  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  {
    icon: DollarSign,
    value: 9700,
    prefix: "$",
    suffix: "",
    label: "Average Monthly Revenue Recovered",
    sublabel: "Per business using InstaClient",
  },
  {
    icon: Users,
    value: 58,
    prefix: "",
    suffix: "%",
    label: "Lead-to-Appointment Conversion Rate",
    sublabel: "vs. industry average of 22%",
  },
  {
    icon: Clock,
    value: 41,
    prefix: "",
    suffix: "s",
    label: "Average First Response Time",
    sublabel: "Competitors average 47 minutes",
  },
  {
    icon: TrendingUp,
    value: 380,
    prefix: "",
    suffix: "%",
    label: "Average ROI in First 90 Days",
    sublabel: "Based on customer data",
  },
];

const roiCalcItems = [
  { label: "Missed calls per month", value: "~25 calls" },
  { label: "Average ticket value", value: "$350–$1,200" },
  { label: "InstaClient recovery rate", value: "58%" },
  { label: "Monthly revenue recovered", value: "$5,075–$17,400" },
  { label: "InstaClient monthly cost", value: "from $297/mo" },
  { label: "Net ROI", value: "380%" },
];

// Interactive ROI Calculator Modal
function ROICalculatorModal({ onClose }: { onClose: () => void }) {
  const [calls, setCalls] = useState(25);
  const [ticket, setTicket] = useState(500);
  const [plan] = useState(297); // Recover tier base price
  const recoveryRate = 0.58;

  const recovered = Math.round(calls * ticket * recoveryRate);
  const roi = Math.round(((recovered - plan) / plan) * 100);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: luxuryEase }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 8 }}
          transition={{ duration: 0.4, ease: luxuryEase }}
          className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-bg-primary flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-[oklch(0.14_0.015_265)] text-lg" style={{ fontWeight: 700 }}>ROI Calculator</h3>
                <p className="text-xs text-[oklch(0.55_0.015_265)]">Estimate your monthly revenue recovery</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-[oklch(0.96_0.008_265)] flex items-center justify-center hover:bg-[oklch(0.91_0.006_265)] transition-colors"
            >
              <X className="w-4 h-4 text-[oklch(0.45_0.015_265)]" />
            </button>
          </div>

          {/* Sliders */}
          <div className="space-y-6 mb-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold font-display text-[oklch(0.35_0.015_265)]">
                  Missed calls per month
                </label>
                <span className="font-mono-stat text-lg font-bold text-[oklch(0.42_0.19_265)]">{calls}</span>
              </div>
              <input
                type="range"
                min={5}
                max={100}
                value={calls}
                onChange={(e) => setCalls(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, oklch(0.42 0.19 265) ${((calls - 5) / 95) * 100}%, oklch(0.91 0.006 265) ${((calls - 5) / 95) * 100}%)`
                }}
              />
              <div className="flex justify-between text-xs text-[oklch(0.65_0.015_265)] mt-1">
                <span>5</span><span>100</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold font-display text-[oklch(0.35_0.015_265)]">
                  Average ticket value
                </label>
                <span className="font-mono-stat text-lg font-bold text-[oklch(0.42_0.19_265)]">${ticket.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={100}
                max={5000}
                step={50}
                value={ticket}
                onChange={(e) => setTicket(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, oklch(0.42 0.19 265) ${((ticket - 100) / 4900) * 100}%, oklch(0.91 0.006 265) ${((ticket - 100) / 4900) * 100}%)`
                }}
              />
              <div className="flex justify-between text-xs text-[oklch(0.65_0.015_265)] mt-1">
                <span>$100</span><span>$5,000</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="rounded-2xl bg-[oklch(0.18_0.06_265)] p-6 text-white">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-white/60 text-xs mb-1">Monthly Revenue Recovered</div>
                <div className="font-mono-stat text-3xl font-bold text-[oklch(0.72_0.15_195)]">
                  ${recovered.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-white/60 text-xs mb-1">Your ROI</div>
                <div className="font-mono-stat text-3xl font-bold text-white">
                  {roi.toLocaleString()}%
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-white/15 flex items-center justify-between">
              <span className="text-white/60 text-xs">InstaClient cost: ${plan}/mo</span>
              <span className="text-white/60 text-xs">Net gain: ${(recovered - plan).toLocaleString()}/mo</span>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              scrollToHash("#cta");
            }}
            className="btn-primary w-full py-3.5 rounded-xl font-semibold font-display text-sm mt-4 flex items-center justify-center gap-2"
          >
            Book a Demo — Start Recovering Revenue
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ROISection() {
  const [showCalc, setShowCalc] = useState(false);

  return (
    <section id="roi" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Dark indigo background */}
      <div className="absolute inset-0 bg-[oklch(0.18_0.06_265)]" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.42 0.19 265 / 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.72 0.15 195 / 0.2) 0%, transparent 40%)"
      }} />
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle, oklch(0.85 0.01 265) 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }} />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={luxuryTransition}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[oklch(0.72_0.15_195)] text-xs font-semibold font-display tracking-wide mb-5">
            Revenue Impact
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4" style={{ fontWeight: 800 }}>
            The numbers don't lie.{" "}
            <span style={{ color: "oklch(0.72 0.15 195)" }}>Missed calls cost you thousands.</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            The average local service business misses 25+ calls per month. At a $500 average ticket, that's over $7,000 in potential revenue walking out the door — every single month.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={staggerTransition(i)}
                className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/15 hover:border-white/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/15 transition-colors">
                  <Icon className="w-5 h-5 text-[oklch(0.72_0.15_195)]" />
                </div>
                <div className="font-mono-stat text-3xl lg:text-4xl font-bold text-white mb-1">
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-white/90 font-display mb-1">{stat.label}</div>
                <div className="text-xs text-white/50">{stat.sublabel}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Dashboard image + ROI breakdown */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={luxuryTransition}
          >
            <img
              src={DASHBOARD_IMG}
                alt="InstaClient revenue dashboard showing $19,400 recovered"
              className="w-full rounded-2xl shadow-2xl"
              style={{ boxShadow: "0 30px 80px oklch(0.10 0.05 265 / 0.6)" }}
            />
          </motion.div>

          {/* ROI breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={luxuryTransition}
          >
            <h3 className="font-display text-2xl font-bold text-white mb-2" style={{ fontWeight: 700 }}>
              Your ROI, calculated
            </h3>
            <p className="text-white/60 text-sm mb-6">
              Based on average numbers from our customer base across med spas and home services.
            </p>
            <div className="space-y-3">
              {roiCalcItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={view}
                  transition={staggerTransition(i)}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl ${
                    i === roiCalcItems.length - 1
                      ? "bg-[oklch(0.72_0.15_195)] text-[oklch(0.14_0.015_265)]"
                      : "bg-white/8 border border-white/10"
                  }`}
                >
                  <span className={`text-sm font-medium ${i === roiCalcItems.length - 1 ? "font-bold font-display" : "text-white/80"}`}>
                    {item.label}
                  </span>
                  <span className={`text-sm font-bold font-mono-stat ${i === roiCalcItems.length - 1 ? "text-[oklch(0.14_0.015_265)]" : "text-white"}`}>
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={view}
              transition={{ ...luxuryTransition, delay: 0.2 }}
              className="mt-6"
            >
              <button
                onClick={() => setShowCalc(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[oklch(0.42_0.19_265)] font-semibold font-display text-sm hover:bg-white/90 transition-colors shadow-lg"
              >
                <Calculator className="w-4 h-4" />
                Calculate My ROI
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ROI Calculator Modal */}
      {showCalc && <ROICalculatorModal onClose={() => setShowCalc(false)} />}
    </section>
  );
}
