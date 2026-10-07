"use client";

import Image from "next/image";
import { useId } from "react";
import { motion } from "framer-motion";
import { PiArrowDown, PiArrowUpRight, PiTerminalWindow } from "react-icons/pi";
import { SiFastapi, SiNextdotjs } from "react-icons/si";
import { useLanguage } from "@/hooks/useLanguage";
import Typewriter from "./ui/Typewriter";
import OracleMark from "./ui/OracleMark";
import CompareSlider from "./CompareSlider";

function Word({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={`flex overflow-hidden pb-[0.08em] ${className}`}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          data-letter
          className="inline-block"
          initial={{ y: "105%", rotate: 6 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

function SpinBadge({ className = "h-32 w-32 md:h-44 md:w-44" }: { className?: string }) {
  const label = "ORACLE FORMS * PL/SQL * FASTAPI * NEXT.JS * ";
  const id = `circ-${useId().replace(/:/g, "")}`;
  return (
    <a href="#stack" className={`relative block group ${className}`} aria-label="Scroll">
      <svg viewBox="0 0 200 200" className="absolute inset-0 animate-spin-slow">
        <defs>
          <path id={id} d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
        </defs>
        <text fontSize="14" fontFamily="JetBrains Mono, monospace" fontWeight="700" fill="#4C86FF">
          <textPath href={`#${id}`} textLength="496" lengthAdjust="spacing">
            {label}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-[22%] rounded-full bg-azul text-ink flex items-center justify-center group-hover:bg-bone transition-colors">
        <PiArrowDown size={30} />
      </span>
    </a>
  );
}

export default function Hero() {
  const { language } = useLanguage();
  const es = language === "es";

  const phrases = es
    ? ["Oracle Forms & Reports", "PL/SQL y tuning de SQL", "APIs con FastAPI", "interfaces con Next.js", "automatización a medida"]
    : ["Oracle Forms & Reports", "PL/SQL and SQL tuning", "FastAPI services", "Next.js interfaces", "custom automation"];

  const strip = [
    { icon: <OracleMark size={30} />, t: "Forms & Reports", s: "11g / 19c", c: "text-forge" },
    { icon: <span className="font-display font-black text-xl leading-none">PL/SQL</span>, t: es ? "Triggers y paquetes" : "Triggers & packages", s: "SQL tuning", c: "text-forge" },
    { icon: <SiFastapi size={26} />, t: "FastAPI", s: "Python async", c: "text-azul" },
    { icon: <SiNextdotjs size={26} />, t: "Next.js 14", s: "React / TypeScript", c: "text-azul" },
  ];

  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0 reg-corners opacity-60 m-3 md:m-5 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto gutter pt-12 md:pt-20">
        <div className="flex items-start justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.25em] text-muted">
          <div className="flex flex-1 flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4">
            <span>[ 001 ] {es ? "Portafolio" : "Portfolio"} — 2026</span>
            <span className="flex items-center gap-2 text-bone">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inset-0 rounded-full bg-azul animate-ping-slow" />
                <span className="relative h-2 w-2 rounded-full bg-azul" />
              </span>
              {es ? "Disponible para proyectos" : "Open for projects"}
            </span>
          </div>
          <div className="shrink-0 lg:hidden">
            <SpinBadge className="h-24 w-24 sm:h-32 sm:w-32" />
          </div>
        </div>

        <div className="relative mt-8 md:mt-24">
          <h1 className="font-black uppercase tracking-tighter leading-[0.85] text-[clamp(2.6rem,13vw,4.5rem)] md:text-[clamp(3.2rem,12vw,12rem)] display-wide">
            <Word text="DARIO" className="text-bone" delay={0.1} />
            <Word text="AVALOS" className="text-outline-azul md:ml-[6vw]" delay={0.45} />
          </h1>

          <div className="hidden lg:block lg:absolute lg:right-0 lg:top-0">
            <SpinBadge />
          </div>
        </div>

        <div className="mt-16 md:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-5 flex flex-col gap-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-56 md:w-72 mb-3 mx-auto lg:mx-0">
              <div className="absolute -inset-2 border border-azul/60 pointer-events-none" />
              <div className="relative bg-azul/15 pt-4 px-4 overflow-hidden">
                <Image
                  src="/dario-pixel.png"
                  alt="Dario Avalos"
                  width={1086}
                  height={1448}
                  sizes="(min-width: 768px) 288px, 224px"
                  priority
                  className="block w-full h-auto"
                />
              </div>
              <span className="absolute -bottom-2 left-3 translate-y-full font-mono text-[10px] uppercase tracking-[0.2em] text-muted pt-2">
                Dario Avalos / DA
              </span>
            </div>
            <p data-perch className="mt-6 font-display font-black uppercase text-3xl md:text-5xl leading-[0.95] tracking-tight">
              {es ? "Ingeniero Informático" : "Computer Engineer"}
            </p>
            <p className="font-mono text-sm md:text-base text-muted">
              <span className="text-forge">$</span> {es ? "trabajo con" : "i work with"}{" "}
              <Typewriter phrases={phrases} className="text-azul" />
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-7 flex flex-col gap-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xl md:text-2xl leading-relaxed text-bone/90">
              {es ? (
                <>
                  Resuelvo problemas reales en dos mundos. Por un lado, sistemas <span className="bg-forge text-ink px-1.5 font-semibold">Oracle</span> que no pueden fallar: Forms, Reports 11g / 19c, triggers y PL/SQL. Por el otro, desarrollo <span className="bg-azul text-ink px-1.5 font-semibold">Full Stack</span> con Python, FastAPI, Node.js, Next.js y PostgreSQL.
                </>
              ) : (
                <>
                  I solve real problems in two worlds. On one side, <span className="bg-forge text-ink px-1.5 font-semibold">Oracle</span> systems that can&apos;t fail: Forms, Reports 11g / 19c, triggers and PL/SQL. On the other, <span className="bg-azul text-ink px-1.5 font-semibold">Full Stack</span> development with Python, FastAPI, Node.js, Next.js and PostgreSQL.
                </>
              )}
            </p>
            <p className="text-muted leading-relaxed">
              {es ? "También automatizo procesos y armo herramientas a medida." : "I also automate processes and build custom tools."}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#terminal-section"
                data-perch
                className="flex items-center gap-3 bg-azul text-ink font-display font-extrabold uppercase text-xs tracking-wider pl-5 pr-4 py-4 hover:bg-bone transition-colors"
              >
                <PiTerminalWindow size={18} />
                {es ? "Abrir terminal" : "Open terminal"}
              </a>
              <a
                href="#contact"
                className="flex items-center gap-3 border border-bone/40 hover:border-azul hover:text-azul font-display font-extrabold uppercase text-xs tracking-wider pl-5 pr-4 py-4 transition-colors"
              >
                {es ? "Contactar" : "Contact"}
                <PiArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          data-perch
          className="mt-20 md:mt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <CompareSlider />
        </motion.div>
      </div>

      <div className="mt-20 md:mt-32 border-y border-line safe-x">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-line">
          {strip.map((s, i) => (
            <div key={i} data-perch className="flex items-center gap-4 px-4 md:px-10 py-6 bg-ink hover:bg-ink-2 transition-colors">
              <span className={`${s.c} shrink-0 flex items-center`}>{s.icon}</span>
              <span>
                <span className="block font-display font-extrabold uppercase text-sm leading-tight">{s.t}</span>
                <span className="block font-mono text-[11px] text-muted mt-0.5">{s.s}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
