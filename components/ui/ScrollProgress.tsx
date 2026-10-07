"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [pct, setPct] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => setPct(Math.round(v * 100)));

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-azul"
        style={{ scaleX: scrollYProgress }}
      />
      <div
        aria-hidden
        className="hidden xl:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 font-mono text-[10px] text-muted"
      >
        <span className="[writing-mode:vertical-rl] tracking-[0.3em] uppercase">scroll</span>
        <span className="relative h-24 w-px bg-line">
          <span className="absolute left-0 top-0 w-px bg-azul" style={{ height: `${pct}%` }} />
        </span>
        <span className="text-bone tabular-nums">{String(pct).padStart(3, "0")}</span>
      </div>
    </>
  );
}
