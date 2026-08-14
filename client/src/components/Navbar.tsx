import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { luxuryEase, luxuryTransition, scrollToHash, scrollToTop } from "@/lib/motion";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "ROI", href: "#roi" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollToHash(href);
  };

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={luxuryTransition}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-[oklch(0.91_0.006_265)]"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            <div className="w-8 h-8 rounded-lg gradient-bg-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="font-display font-800 text-xl text-[oklch(0.14_0.015_265)] tracking-tight" style={{ fontWeight: 800 }}>
              Insta<span className="text-[oklch(0.42_0.19_265)]">Client</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-[oklch(0.40_0.015_265)] hover:text-[oklch(0.42_0.19_265)] transition-colors rounded-lg hover:bg-[oklch(0.97_0.005_265)]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#cta")}
              className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold font-display"
            >
              Book a Demo
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-[oklch(0.97_0.005_265)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-[oklch(0.42_0.19_265)]"
        style={{ scaleX: progress }}
      />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: luxuryEase }}
            className="md:hidden bg-white border-b border-[oklch(0.91_0.006_265)] overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-[oklch(0.40_0.015_265)] hover:text-[oklch(0.42_0.19_265)] hover:bg-[oklch(0.97_0.005_265)] rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-[oklch(0.91_0.006_265)] mt-2">
                <button
                  onClick={() => handleNavClick("#cta")}
                  className="btn-primary w-full py-3 rounded-xl text-sm font-semibold font-display"
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
