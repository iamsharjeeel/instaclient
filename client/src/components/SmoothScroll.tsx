import { useEffect } from "react";
import Lenis from "lenis";
import { getLenis, setLenis } from "@/lib/motion";

export default function SmoothScroll() {
  useEffect(() => {
    const fineQuery = window.matchMedia("(pointer: fine)");
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const setup = () => {
      getLenis()?.destroy();
      setLenis(null);
      if (!fineQuery.matches || reduceQuery.matches) return;
      const lenis = new Lenis({
        lerp: 0.08,
        autoRaf: true,
        syncTouch: false,
      });
      setLenis(lenis);
    };

    setup();
    fineQuery.addEventListener("change", setup);
    reduceQuery.addEventListener("change", setup);
    return () => {
      fineQuery.removeEventListener("change", setup);
      reduceQuery.removeEventListener("change", setup);
      getLenis()?.destroy();
      setLenis(null);
    };
  }, []);

  return null;
}
