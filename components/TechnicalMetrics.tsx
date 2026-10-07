"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { PiGauge, PiGear, PiGitBranch, PiDatabase } from "react-icons/pi";
import {
  SiPython,
  SiFastapi,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiLinux,
} from "react-icons/si";
import { useLanguage } from "@/hooks/useLanguage";
import SectionHead from "./ui/SectionHead";
import CountUp from "./ui/CountUp";
import Reveal from "./ui/Reveal";
import OracleMark from "./ui/OracleMark";

interface Tile {
  name: string;
  icon: ReactNode;
  group: "oracle" | "back" | "front" | "tools";
  slot?: string;
}

const groupStyle = {
  oracle: { dot: "bg-forge", hover: "hover:bg-forge", label: "Oracle" },
  back: { dot: "bg-bone", hover: "hover:bg-bone", label: "Backend" },
  front: { dot: "bg-azul", hover: "hover:bg-azul", label: "Frontend" },
  tools: { dot: "bg-muted", hover: "hover:bg-muted", label: "Tools" },
} as const;

export default function TechnicalMetrics() {
  const { language } = useLanguage();
  const es = language === "es";

  const metrics = [
    {
      value: 80,
      decimals: 0,
      suffix: "%+",
      bar: 80,
      label: es ? "De la carrera aprobada" : "Of the degree completed",
      detail: es ? "Estudiante avanzado de Ingeniería Informática" : "Advanced Computer Engineering student",
      num: "text-forge",
      fill: "bg-forge",
    },
    {
      value: 2,
      decimals: 0,
      suffix: "",
      bar: 100,
      label: es ? "Ecosistemas dominados" : "Mastered ecosystems",
      detail: es ? "Oracle Forms/Reports (11g/19c) + Python/FastAPI/Next.js" : "Oracle Forms/Reports (11g/19c) + Python/FastAPI/Next.js",
      num: "text-bone",
      fill: "bg-bone",
    },
    {
      value: 100,
      decimals: 0,
      suffix: "%",
      bar: 100,
      label: es ? "Tipado estricto de punta a punta" : "End-to-end type safety",
      detail: es ? "TypeScript + Python en aplicaciones web de alto rendimiento" : "TypeScript + Python across high-performance web apps",
      num: "text-azul",
      fill: "bg-azul",
    },
    {
      value: 99.9,
      decimals: 1,
      suffix: "%",
      bar: 99.9,
      label: es ? "Disponibilidad en sistemas empresariales" : "Enterprise systems uptime",
      detail: es ? "Servicios y herramientas operativas en producción" : "Operational services and tools in production",
      num: "text-bone",
      fill: "bg-bone",
    },
  ];

  const tiles: Tile[] = [
    { name: "Oracle Forms", icon: <OracleMark size={40} />, group: "oracle", slot: "oracle-forms" },
    { name: "Oracle Reports", icon: <OracleMark size={40} />, group: "oracle", slot: "oracle-reports" },
    { name: "PL/SQL", icon: <span className="font-display font-black text-2xl leading-none">PL/SQL</span>, group: "oracle", slot: "plsql" },
    { name: es ? "Tuning SQL" : "SQL Tuning", icon: <PiGauge size={38} />, group: "oracle" },
    { name: "SQL Developer / TOAD", icon: <PiDatabase size={38} />, group: "oracle" },
    { name: "Python", icon: <SiPython size={36} />, group: "back", slot: "python" },
    { name: "FastAPI", icon: <SiFastapi size={36} />, group: "back", slot: "fastapi" },
    { name: "Node.js", icon: <SiNodedotjs size={36} />, group: "back", slot: "node" },
    { name: "PostgreSQL", icon: <SiPostgresql size={36} />, group: "back", slot: "postgres" },
    { name: "Prisma ORM", icon: <SiPrisma size={36} />, group: "back" },
    { name: "Next.js 14", icon: <SiNextdotjs size={36} />, group: "front", slot: "nextjs" },
    { name: "React", icon: <SiReact size={36} />, group: "front", slot: "react" },
    { name: "TypeScript", icon: <SiTypescript size={34} />, group: "front", slot: "typescript" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={36} />, group: "front" },
    { name: "Git", icon: <SiGit size={34} />, group: "tools" },
    { name: "Linux", icon: <SiLinux size={34} />, group: "tools" },
    { name: es ? "Automatización" : "Automation", icon: <PiGear size={38} />, group: "tools" },
    { name: "CI/CD", icon: <PiGitBranch size={38} />, group: "tools" },
  ];

  return (
    <section id="metrics" className="flex flex-col gap-14 scroll-mt-20">
      <SectionHead
        index="03"
        label={es ? "Métricas y herramientas" : "Metrics & tooling"}
        accent="azul"
        title={
          es ? (
            <>
              Números y <span className="text-outline-azul">herramientas</span>
            </>
          ) : (
            <>
              Numbers & <span className="text-outline-azul">tools</span>
            </>
          )
        }
      />

      <Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {metrics.map((m, i) => (
            <div key={i} data-perch className="bg-ink hover:bg-ink-2 transition-colors p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-6 sm:gap-8 min-h-[230px] sm:min-h-[300px]">
              <span className="font-mono text-[11px] text-muted">/0{i + 1}</span>
              <div>
                <span className={`display-wide font-display font-black tracking-tighter leading-none block text-4xl sm:text-6xl xl:text-7xl ${m.num}`}>
                  <CountUp to={m.value} decimals={m.decimals} suffix={m.suffix} />
                </span>
                <div className="h-1 bg-line mt-5 mb-4">
                  <motion.div
                    className={`h-full ${m.fill}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.bar}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <p className="font-display font-extrabold uppercase text-[13px] sm:text-base leading-tight break-words">{m.label}</p>
                <p className="text-muted text-[11px] sm:text-xs mt-2 leading-relaxed break-words">{m.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-muted mb-4">
          {Object.values(groupStyle).map((g) => (
            <span key={g.label} className="flex items-center gap-2">
              <span className={`h-2 w-2 ${g.dot}`} />
              {g.label}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-line border border-line">
          {tiles.map((t, i) => {
            const g = groupStyle[t.group];
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className={`group bg-ink ${g.hover} hover:text-ink transition-colors aspect-[5/4] p-4 flex flex-col justify-between`}
              >
                <span className={`h-2 w-2 ${g.dot} group-hover:bg-ink`} />
                {t.slot ? (
                  <span className="flex items-center">
                    <span data-mascot-slot={t.slot} className="mascot-slot">
                      {t.icon}
                    </span>
                  </span>
                ) : (
                  <span className="flex items-center h-12">{t.icon}</span>
                )}
                <span className="font-mono text-[11px] uppercase tracking-wider leading-tight">{t.name}</span>
              </motion.div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
