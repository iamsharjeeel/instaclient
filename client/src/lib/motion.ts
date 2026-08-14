import type { Transition, Variants } from "framer-motion";
import type Lenis from "lenis";

export const luxuryEase = [0.22, 1, 0.36, 1] as const;

export const luxuryTransition: Transition = {
  duration: 0.8,
  ease: luxuryEase,
};

export function staggerTransition(index: number, step = 0.07): Transition {
  return {
    duration: 0.8,
    ease: luxuryEase,
    delay: index * step,
  };
}

export const view = {
  once: true,
  amount: 0.25,
  margin: "-10% 0px",
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: luxuryTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: luxuryTransition },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: luxuryTransition },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: luxuryTransition },
};

export const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: luxuryEase },
  },
};

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export function setLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

const scrollEase = (t: number) => 1 - (1 - t) ** 3;

export function scrollToHash(hash: string) {
  const el = document.querySelector(hash);
  if (!(el instanceof HTMLElement)) return;
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { offset: -72, duration: 1.1, easing: scrollEase });
    return;
  }
  el.scrollIntoView({ behavior: "smooth" });
}

export function scrollToTop() {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.1, easing: scrollEase });
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}
