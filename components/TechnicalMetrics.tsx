"use client";

import { motion } from "framer-motion";
import { BarChart3, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function TechnicalMetrics() {
  const { language } = useLanguage();

  const metricsData = [
    {
      metric: "75%",
      label: language === "es" ? "Reducción en tiempo de consulta SQL" : "SQL Query Latency Reduction",
      detail: language === "es" ? "Optimización mediante EXPLAIN PLAN, índices y afinamiento de consultas PL/SQL" : "EXPLAIN PLAN tuning, indexing & PL/SQL query optimization",
      color: "text-oracle-amber border-oracle-amber/30 bg-oracle-amber/5",
    },
    {
      metric: "2",
      label: language === "es" ? "Ecosistemas Dominados (Enterprise & Modern)" : "Mastered Ecosystems (Enterprise & Modern)",
      detail: language === "es" ? "Oracle Forms/Reports (11g/19c) + Stack Python/FastAPI/Next.js" : "Oracle Forms/Reports (11g/19c) + Python/FastAPI/Next.js Stack",
      color: "text-cyber-cyan border-cyber-cyan/30 bg-cyber-cyan/5",
    },
    {
      metric: "100%",
      label: language === "es" ? "Tipado Estricto de Extremo a Extremo" : "End-to-End Type Safety",
      detail: language === "es" ? "TypeScript + Python en aplicaciones web de alto rendimiento" : "TypeScript + Python across high-performance web applications",
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
    },
    {
      metric: "99.9%",
      label: language === "es" ? "Disponibilidad en Sistemas Empresariales" : "Enterprise Systems Uptime",
      detail: language === "es" ? "Servicios y herramientas operativas en producción de alto impacto" : "Operational services and high-impact production tools",
      color: "text-purple-400 border-purple-500/30 bg-purple-500/5",
    },
  ];

  const coreSkills = [
    {
      category: language === "es" ? "Núcleo Oracle Enterprise" : "Oracle Enterprise Core",
      items: ["Oracle Forms (11g / 19c)", "Oracle Reports Engine (11g / 19c)", "PL/SQL Packages & Triggers", "Oracle Database Tuning", "SQL Developer / TOAD"],
      color: "border-oracle-amber/40 text-oracle-amber",
    },
    {
      category: language === "es" ? "Backend Moderno & APIs" : "Modern Backend & APIs",
      items: ["Python 3.11+", "FastAPI (Async)", "Node.js / Express", "PostgreSQL & Prisma ORM", "RESTful API Architecture"],
      color: "border-cyber-cyan/40 text-cyber-cyan",
    },
    {
      category: language === "es" ? "Frontend UI/UX & Web" : "Frontend UI/UX & Web",
      items: ["Next.js 14 (App Router)", "React & TypeScript", "Tailwind CSS", "Framer Motion Animations", "Responsive Glassmorphism"],
      color: "border-blue-400/40 text-blue-400",
    },
    {
      category: language === "es" ? "Automatización & Herramientas" : "Automation & Tooling",
      items: ["Automatización de Procesos", "Conexión entre Sistemas", "Herramientas Web a Medida", "Git & CI/CD Workflows", "Linux Terminal Scripting"],
      color: "border-emerald-400/40 text-emerald-400",
    },
  ];

  return (
    <section className="flex flex-col gap-10 my-8">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-widest">
          <BarChart3 size={15} />
          <span>{language === "es" ? "Métricas Reales & Telemetría" : "Real Metrics & Telemetry"}</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
          {language === "es" ? "Indicadores de Rendimiento y Dominio Técnico" : "Performance Indicators & Technical Mastery"}
        </h2>
      </div>

      {/* Metrics 4 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricsData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`border rounded-2xl p-5 flex flex-col justify-between ${item.color}`}
          >
            <div>
              <span className="text-3xl md:text-4xl font-extrabold tracking-tight block mb-2">{item.metric}</span>
              <span className="text-xs font-bold text-white block mb-1">{item.label}</span>
            </div>
            <p className="text-xs text-slate-200 font-medium mt-3 border-t border-slate-800/80 pt-2 leading-relaxed">{item.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* Skills & Badges 4 Column Asymmetric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {coreSkills.map((col, idx) => (
          <div key={idx} className="bg-[#0B1017] border border-slate-800 p-5 rounded-2xl flex flex-col gap-3">
            <h3 className={`text-sm font-semibold tracking-tight uppercase pb-2 border-b border-slate-800 ${col.color.split(' ')[1]}`}>
              {col.category}
            </h3>
            <ul className="space-y-2.5 font-sans text-xs text-slate-200 font-medium">
              {col.items.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-center gap-2">
                  <BadgeCheck size={14} className="text-slate-400 shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
