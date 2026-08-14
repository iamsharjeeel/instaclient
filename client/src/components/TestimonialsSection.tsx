import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef } from "react";
import { luxuryTransition, staggerTransition, view } from "@/lib/motion";

const MEDSPA_IMG = "/images/medspa-cropped.webp";

const testimonials = [
  {
    quote: "We were losing calls every single day and didn't realize how much it was costing us. In the first 30 days, InstaClient booked 15 appointments from calls we would have never followed up on. That's over $18,000 in revenue we would have just left on the table.",
    author: "Dr. Amanda Chen",
    role: "Owner, Radiance Aesthetics & MedSpa",
    avatar: "/images/amanda-chen.jpg",
    revenue: "$18,400 recovered",
    stars: 5,
    featured: true,
  },
  {
    quote: "I assumed our front desk had follow-up under control. Turns out we were dropping 8 to 10 calls a week — mostly after hours. InstaClient recovered 6 consults in the first two weeks alone. Patients actually comment on how fast we respond now.",
    author: "Dr. Dinakar Golla",
    role: "Owner, Golla Plastic Surgery",
    avatar: "/images/dr-golla.webp",
    revenue: "$11,200 recovered",
    stars: 5,
    featured: false,
  },
  {
    quote: "Setup was faster than I expected — we were live in under a week. Within the first 10 days we had 4 new appointments booked without anyone on my team doing anything manually. The time savings alone would have justified it. The revenue was just a bonus.",
    author: "Michael Thornton",
    role: "Owner, American Laser Med Spa",
    avatar: "/images/michael-thornton.jpg",
    revenue: "$9,200 recovered",
    stars: 5,
    featured: false,
  },
  {
    quote: "Website leads were sitting for hours before anyone followed up. Once InstaClient was live, they were getting a response in seconds. Our consult booking rate went up noticeably in the first month and we didn't change a single other thing.",
    author: "Dr. Rachel Nguyen",
    role: "Medical Director, Lux Med Spa",
    avatar: "/images/rachel-nguyen.jpg",
    revenue: "$14,600 recovered",
    stars: 5,
    featured: false,
  },
  {
    quote: "We had a patient list we hadn't touched in over a year. InstaClient ran a reactivation campaign and we generated $31,500 in booked appointments from existing patients in just over 45 days. That's revenue that was already sitting there — we just needed a system to go get it.",
    author: "Dr. James Worry",
    role: "Owner, Golla Dermatology",
    avatar: "/images/dr-worry.webp",
    revenue: "$31,500 reactivated",
    stars: 5,
    featured: false,
  },
];

export default function TestimonialsSection() {
  const featuredRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: featuredRef,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={luxuryTransition}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[oklch(0.96_0.008_265)] border border-[oklch(0.88_0.015_265)] text-[oklch(0.42_0.19_265)] text-xs font-semibold font-display tracking-wide mb-5">
            Customer Stories
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-[oklch(0.14_0.015_265)] leading-tight mb-4" style={{ fontWeight: 800 }}>
            Real businesses.{" "}
            <span className="gradient-text">Real revenue recovered.</span>
          </h2>
          <p className="text-lg text-[oklch(0.45_0.015_265)] leading-relaxed">
            The businesses that respond fastest win the most clients. Here's what that looks like in practice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            ref={featuredRef}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            transition={luxuryTransition}
            className="lg:col-span-1 lg:row-span-2 rounded-3xl overflow-hidden"
            style={{ position: "relative", minHeight: "520px" }}
          >
            <motion.img
              src={MEDSPA_IMG}
              alt="Premium medical spa interior"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                scale: imgScale,
              }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,18,35,1) 0%, rgba(15,18,35,0.65) 45%, rgba(15,18,35,0.15) 75%, transparent 100%)" }} />
            <div style={{ position: "absolute", inset: 0, zIndex: 10, padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Quote className="w-8 h-8 text-[oklch(0.72_0.15_195)] mb-4" />
              <p className="text-white text-lg leading-relaxed font-medium mb-6">
                "{testimonials[0].quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonials[0].avatar}
                  alt={testimonials[0].author}
                  className="w-12 h-12 rounded-full border-2 border-white/30 object-cover"
                />
                <div>
                  <div className="text-white font-semibold font-display text-sm">{testimonials[0].author}</div>
                  <div className="text-white/60 text-xs">{testimonials[0].role}</div>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[oklch(0.72_0.15_195)] text-[oklch(0.14_0.015_265)] text-xs font-bold font-display w-fit">
                {testimonials[0].revenue}
              </div>
            </div>
          </motion.div>

          {testimonials.slice(1).map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={view}
              transition={staggerTransition(i + 1)}
              className="bg-white rounded-2xl p-6 border border-[oklch(0.91_0.006_265)] card-hover"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-[oklch(0.25_0.015_265)] text-base leading-relaxed mb-5">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-[oklch(0.91_0.006_265)]"
                  />
                  <div>
                    <div className="text-base font-semibold font-display text-[oklch(0.14_0.015_265)]">{t.author}</div>
                    <div className="text-base text-[oklch(0.55_0.015_265)]">{t.role}</div>
                  </div>
                </div>
                <div className="text-xs font-bold font-mono-stat text-[oklch(0.42_0.19_265)] bg-[oklch(0.96_0.008_265)] px-2.5 py-1 rounded-lg">
                  {t.revenue}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
