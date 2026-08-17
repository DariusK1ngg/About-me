"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Database,
  Cpu,
  Layers,
  Zap,
  Activity,
  Server,
  Code2,
  FileCode2,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  ArrowRightLeft,
  ChevronRight,
  Sparkles,
  Command,
  HardDrive,
  Workflow,
  BarChart3,
  RotateCcw,
  Play
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

// Terminal Command Types
interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export default function AboutMe() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"architecture" | "terminal" | "timeline">("architecture");
  const [stackMode, setStackMode] = useState<"legacy" | "modern" | "hybrid">("hybrid");

  // Terminal state
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const t = {
    es: {
      sectionBadge: "EXP-8024 // TELEMETRÍA Y BIOGRAFÍA TÉCNICA",
      title: "Arquitectura & Transición Informática",
      subtitle: "Estudiante Avanzado de Ingeniería Informática con dominio especializado en la coexistencia, optimización y migración entre entornos Enterprise Legacy Oracle y la Web Moderna.",
      statusOnline: "PL/SQL ENGINE ACTIVE",
      statusFastAPI: "FASTAPI / NODE ONLINE",
      statusEngineering: "ING. INFORMÁTICA - 80%+",
      metrics: {
        plsqlOps: "300K+ Consultas/Día",
        legacyExp: "Oracle Forms & Reports",
        modernStack: "FastAPI / Node / Next.js",
        automation: "Automatización & Migración"
      },
      tabs: {
        architecture: "Matriz Legacy vs Modern Stack",
        terminal: "Terminal Interactiva CLI",
        timeline: "Hitos y Migración de Sistemas"
      },
      legacyTitle: "Enterprise Legacy Core",
      legacySub: "Mantenimiento, Triggers & Lógica de Negocio",
      modernTitle: "Infraestructura Moderna",
      modernSub: "APIs Asíncronas, Microservicios & React/Next",
      hybridTitle: "Integración Híbrida & Automatización",
      hybridSub: "Puentes de datos, migración SQL y herramientas a medida",
      terminalHelp: "Terminal v2.4 initialized. Escribe un comando o selecciona una opción rápida:",
      timelineItems: [
        {
          period: "SISTEMA ENTERPRISE & LEGACY",
          role: "Oracle Forms & Reports Master",
          desc: "Desarrollo y mantenimiento de sistemas críticos. Programación de triggers PL/SQL complejos, lógica de negocio embebida en base de datos y optimización profunda de consultas SQL para reportes empresariales con altos volúmenes de registros.",
          techs: ["Oracle Forms", "Oracle Reports", "PL/SQL", "SQL Optimization", "Stored Procedures"]
        },
        {
          period: "INGENIERÍA & AUTOMATIZACIÓN",
          role: "Ingeniería Informática & Scripts de Migración",
          desc: "Diseño de procesos automatizados para extracción, transformación y carga (ETL) de datos legados. Creación de herramientas personalizadas en Python para reemplazar tareas manuales repetitivas en entornos corporativos.",
          techs: ["Python", "Pandas", "ETL Pipelines", "Data Migration", "Relational Databases"]
        },
        {
          period: "FULL STACK MODERNO",
          role: "Arquitectura Asíncrona & Web UI",
          desc: "Construcción de dashboards de alto rendimiento y microservicios con FastAPI y Node.js. Integración de bases de datos relacionales modernas y frontends reactivos tipo Next.js orientados a la mejor experiencia UI/UX.",
          techs: ["FastAPI", "Node.js", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"]
        }
      ]
    },
    en: {
      sectionBadge: "EXP-8024 // TELEMETRY & TECHNICAL BIO",
      title: "Architecture & System Transition",
      subtitle: "Advanced Computer Engineering student with specialized expertise in coexisting, optimizing, and migrating between Enterprise Legacy Oracle environments and Modern Web.",
      statusOnline: "PL/SQL ENGINE ACTIVE",
      statusFastAPI: "FASTAPI / NODE ONLINE",
      statusEngineering: "COMP. ENGINEERING - 80%+",
      metrics: {
        plsqlOps: "300K+ Queries/Day",
        legacyExp: "Oracle Forms & Reports",
        modernStack: "FastAPI / Node / Next.js",
        automation: "Automation & Migration"
      },
      tabs: {
        architecture: "Legacy vs Modern Stack Matrix",
        terminal: "CLI Interactive Terminal",
        timeline: "Milestones & System Migration"
      },
      legacyTitle: "Enterprise Legacy Core",
      legacySub: "Maintenance, Triggers & Business Logic",
      modernTitle: "Modern Infrastructure",
      modernSub: "Async APIs, Microservices & React/Next",
      hybridTitle: "Hybrid Integration & Automation",
      hybridSub: "Data bridges, SQL migration & custom tools",
      terminalHelp: "Terminal v2.4 initialized. Type a command or select a quick option:",
      timelineItems: [
        {
          period: "ENTERPRISE & LEGACY SYSTEMS",
          role: "Oracle Forms & Reports Specialist",
          desc: "Development and maintenance of mission-critical systems. Programming complex PL/SQL triggers, embedded database business logic, and deep SQL query optimization for enterprise reports handling high data volumes.",
          techs: ["Oracle Forms", "Oracle Reports", "PL/SQL", "SQL Optimization", "Stored Procedures"]
        },
        {
          period: "ENGINEERING & AUTOMATION",
          role: "Computer Engineering & Migration Scripts",
          desc: "Design of automated ETL processes for legacy data. Custom Python tooling to replace manual repetitive workflows within corporate environments.",
          techs: ["Python", "Pandas", "ETL Pipelines", "Data Migration", "Relational Databases"]
        },
        {
          period: "MODERN FULL STACK",
          role: "Async Architecture & Web UI",
          desc: "Building high-performance dashboards and microservices with FastAPI and Node.js. Integrating modern relational databases and reactive Next.js frontends crafted for premium UI/UX.",
          techs: ["FastAPI", "Node.js", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"]
        }
      ]
    }
  }[language];

  // Commands available in interactive CLI
  const handleRunCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    let res: React.ReactNode = null;

    switch (cleanCmd) {
      case "help":
        res = (
          <div className="space-y-1 text-xs md:text-sm text-steel-light">
            <p className="text-blue-400 font-semibold mb-2">Comandos disponibles / Available Commands:</p>
            <p><span className="text-emerald-400 font-mono">bio</span> : Resumen del perfil profesional / Profile summary</p>
            <p><span className="text-emerald-400 font-mono">oracle</span> : Detalles de Oracle Forms & Reports / Legacy details</p>
            <p><span className="text-emerald-400 font-mono">modern</span> : Arquitectura FastAPI, Node & Next.js</p>
            <p><span className="text-emerald-400 font-mono">metrics</span> : Métricas de rendimiento / Metrics & stats</p>
            <p><span className="text-emerald-400 font-mono">education</span> : Información sobre Ingeniería Informática</p>
            <p><span className="text-emerald-400 font-mono">clear</span> : Limpiar terminal / Clear terminal screen</p>
          </div>
        );
        break;
      case "bio":
        res = (
          <div className="space-y-2 text-xs md:text-sm text-slate-200">
            <p className="text-blue-400 font-bold">[PROFILE INFOCARD]</p>
            <p>Dario Avalos — Estudiante Avanzado de Ingeniería Informática.</p>
            <p className="text-steel-light leading-relaxed">
              Enfocado en resolver problemas complejos de ingeniería de software. Combino la solidez del desarrollo de sistemas empresariales monolíticos (Oracle PL/SQL, Forms/Reports) con la rapidez y escalabilidad de frameworks modernos (Python FastAPI, Node, Next.js, Tailwind).
            </p>
          </div>
        );
        break;
      case "oracle":
        res = (
          <div className="space-y-2 text-xs md:text-sm text-amber-200/90">
            <p className="text-amber-400 font-mono font-bold">[ORACLE FORMS & REPORTS TELEMETRY]</p>
            <p>• Triggers PL/SQL: PRE-QUERY, POST-CHANGE, KEY-COMMIT, WHEN-BUTTON-PRESSED.</p>
            <p>• Business Logic: Package Bodies, Cursor loops, Exception handlers, Subqueries.</p>
            <p>• Oracle Reports: Data Models, Group Breaks, Matrix layouts, Execution tuning.</p>
            <p>• SQL Tuning: Explain Plan, Indexes, Partitioning, Query Refactoring.</p>
          </div>
        );
        break;
      case "modern":
        res = (
          <div className="space-y-2 text-xs md:text-sm text-cyan-200/90">
            <p className="text-cyan-400 font-mono font-bold">[MODERN FULL STACK TELEMETRY]</p>
            <p>• Python / FastAPI: Pydantic schemas, Dependency Injection, Async SQLAlchemy.</p>
            <p>• Node.js / TypeScript: REST APIs, Express/Nest pipelines, Type safety.</p>
            <p>• Next.js & UI: Server components, Framer Motion, Tailwind CSS custom design system.</p>
            <p>• Relational SQL: PostgreSQL, MySQL, Prisma ORM, Migration scripts.</p>
          </div>
        );
        break;
      case "metrics":
        res = (
          <div className="grid grid-cols-2 gap-2 text-xs md:text-sm font-mono mt-1">
            <div className="p-2 bg-white/5 border border-white/10 rounded">
              <span className="text-steel-light block">SQL Optimization:</span>
              <span className="text-emerald-400 font-bold">Up to 70% query time cut</span>
            </div>
            <div className="p-2 bg-white/5 border border-white/10 rounded">
              <span className="text-steel-light block">PL/SQL Triggers:</span>
              <span className="text-blue-400 font-bold">Robust Data Integrity</span>
            </div>
            <div className="p-2 bg-white/5 border border-white/10 rounded">
              <span className="text-steel-light block">APIs Created:</span>
              <span className="text-purple-400 font-bold">FastAPI / REST async</span>
            </div>
            <div className="p-2 bg-white/5 border border-white/10 rounded">
              <span className="text-steel-light block">Engineering Status:</span>
              <span className="text-amber-400 font-bold">Advanced Semester</span>
            </div>
          </div>
        );
        break;
      case "education":
        res = (
          <div className="space-y-1 text-xs md:text-sm text-slate-200">
            <p className="text-indigo-400 font-bold">[FACULTAD DE INGENIERÍA - INGENIERÍA INFORMÁTICA]</p>
            <p className="text-steel-light">Formación en ciencias de la computación, estructuras de datos avanzadas, ingeniería de software, arquitectura de computadoras y diseño de bases de datos relacionales.</p>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      default:
        res = (
          <span className="text-rose-400 text-xs md:text-sm font-mono">
            Comando no reconocido &apos;{cmdStr}&apos;. Escribe <span className="underline">help</span> para lista de comandos.
          </span>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: res }]);
    setInputVal("");
  };

  useEffect(() => {
    // Initializing terminal default welcoming message
    if (history.length === 0) {
      setHistory([
        {
          command: "system --check-profile",
          output: (
            <div className="text-xs md:text-sm text-slate-300 font-mono space-y-1">
              <p className="text-emerald-400 font-bold">[STATUS OK] Systems synchronized.</p>
              <p className="text-steel-light">{t.terminalHelp}</p>
            </div>
          )
        }
      ]);
    }
  }, [t.terminalHelp, history.length]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <section id="sobre-mi" className="flex flex-col gap-12 pt-8 md:pt-16 pb-6 w-full relative">
      {/* Background Subtle Cyber Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none rounded-3xl" />

      {/* Header section with telemetry bar */}
      <div className="flex flex-col gap-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] md:text-xs font-mono text-emerald-400 tracking-wider font-semibold uppercase">
              {t.sectionBadge}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-steel-light flex items-center gap-1.5">
              <Database size={13} className="text-amber-400" />
              {t.statusOnline}
            </span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-steel-light flex items-center gap-1.5">
              <Server size={13} className="text-cyan-400" />
              {t.statusFastAPI}
            </span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-steel-light flex items-center gap-1.5">
              <Cpu size={13} className="text-indigo-400" />
              {t.statusEngineering}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          <div className="lg:col-span-8 flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {t.title}
            </h2>
            <p className="text-steel-light text-base md:text-xl font-light leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Metric cards column */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3">
            <div className="glass-card p-4 flex flex-col justify-between border-l-2 border-l-amber-500/80">
              <span className="text-[10px] uppercase tracking-wider text-steel-light font-mono">PL/SQL Engine</span>
              <span className="text-sm md:text-base font-bold text-white mt-1">{t.metrics.plsqlOps}</span>
              <span className="text-[10px] text-amber-400/90 font-mono mt-2 flex items-center gap-1">
                <CheckCircle2 size={11} /> High Volume SQL
              </span>
            </div>
            <div className="glass-card p-4 flex flex-col justify-between border-l-2 border-l-cyan-500/80">
              <span className="text-[10px] uppercase tracking-wider text-steel-light font-mono">Modern Core</span>
              <span className="text-sm md:text-base font-bold text-white mt-1">{t.metrics.modernStack}</span>
              <span className="text-[10px] text-cyan-400/90 font-mono mt-2 flex items-center gap-1">
                <Zap size={11} /> REST & Async
              </span>
            </div>
            <div className="glass-card p-4 flex flex-col justify-between border-l-2 border-l-blue-500/80">
              <span className="text-[10px] uppercase tracking-wider text-steel-light font-mono">Enterprise Legacy</span>
              <span className="text-sm md:text-base font-bold text-white mt-1">{t.metrics.legacyExp}</span>
              <span className="text-[10px] text-blue-400/90 font-mono mt-2 flex items-center gap-1">
                <ShieldCheck size={11} /> Mission Critical
              </span>
            </div>
            <div className="glass-card p-4 flex flex-col justify-between border-l-2 border-l-purple-500/80">
              <span className="text-[10px] uppercase tracking-wider text-steel-light font-mono">Automation</span>
              <span className="text-sm md:text-base font-bold text-white mt-1">{t.metrics.automation}</span>
              <span className="text-[10px] text-purple-400/90 font-mono mt-2 flex items-center gap-1">
                <Workflow size={11} /> Custom Tooling
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Navigation Tabs for the Interactive Section */}
      <div className="flex flex-wrap items-center gap-3 border-b border-white/10 pb-4">
        <button
          onClick={() => setActiveTab("architecture")}
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
            activeTab === "architecture"
              ? "bg-cobalt-blue text-white shadow-[0_0_20px_rgba(0,71,255,0.4)] border border-blue-400/40"
              : "bg-white/5 text-steel-light hover:bg-white/10 hover:text-white border border-white/10"
          }`}
        >
          <Layers size={16} />
          {t.tabs.architecture}
        </button>

        <button
          onClick={() => setActiveTab("terminal")}
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
            activeTab === "terminal"
              ? "bg-cobalt-blue text-white shadow-[0_0_20px_rgba(0,71,255,0.4)] border border-blue-400/40"
              : "bg-white/5 text-steel-light hover:bg-white/10 hover:text-white border border-white/10"
          }`}
        >
          <Terminal size={16} />
          {t.tabs.terminal}
        </button>

        <button
          onClick={() => setActiveTab("timeline")}
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
            activeTab === "timeline"
              ? "bg-cobalt-blue text-white shadow-[0_0_20px_rgba(0,71,255,0.4)] border border-blue-400/40"
              : "bg-white/5 text-steel-light hover:bg-white/10 hover:text-white border border-white/10"
          }`}
        >
          <Activity size={16} />
          {t.tabs.timeline}
        </button>
      </div>

      {/* TAB 1: ARCHITECTURE MATRIX & COMPARISON */}
      {activeTab === "architecture" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-8"
        >
          {/* Sub-selector for Stack Focus */}
          <div className="flex flex-wrap justify-between items-center bg-white/[0.02] border border-white/10 rounded-2xl p-3 gap-4">
            <span className="text-xs font-mono text-steel-light uppercase px-2 flex items-center gap-2">
              <Command size={14} className="text-cobalt-blue" />
              Seleccionar Vista de Stack:
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setStackMode("legacy")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  stackMode === "legacy"
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold"
                    : "text-steel-light hover:text-white bg-white/5"
                }`}
              >
                Oracle Legacy
              </button>
              <button
                onClick={() => setStackMode("hybrid")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  stackMode === "hybrid"
                    ? "bg-cobalt-blue/30 text-blue-300 border border-cobalt-blue/50 font-bold"
                    : "text-steel-light hover:text-white bg-white/5"
                }`}
              >
                Puente / Híbrido
              </button>
              <button
                onClick={() => setStackMode("modern")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  stackMode === "modern"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold"
                    : "text-steel-light hover:text-white bg-white/5"
                }`}
              >
                Full Stack Moderno
              </button>
            </div>
          </div>

          {/* Interactive Stack Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Oracle Enterprise Card */}
            <div
              className={`glass-card p-6 md:p-8 flex flex-col justify-between gap-6 transition-all duration-300 relative overflow-hidden ${
                stackMode === "legacy" || stackMode === "hybrid"
                  ? "border-amber-500/40 shadow-[0_0_30px_rgba(245,158,11,0.1)] bg-white/[0.04]"
                  : "opacity-60"
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
                    <Database size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.legacyTitle}</h3>
                    <p className="text-xs text-amber-400/80 font-mono">{t.legacySub}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2.5 py-1 rounded-full uppercase">
                  Legacy Enterprise
                </span>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-steel-light font-light leading-relaxed">
                <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-white font-mono text-xs border-b border-white/10 pb-1.5">
                    <span className="flex items-center gap-1.5 text-amber-400">
                      <FileCode2 size={13} /> PL/SQL Block & Trigger
                    </span>
                    <span className="text-[10px] text-steel-light">Oracle 11g / 19c</span>
                  </div>
                  <pre className="text-[11px] font-mono text-amber-200/90 overflow-x-auto p-1 leading-snug">
{`CREATE OR REPLACE TRIGGER trg_calc_inventory
BEFORE INSERT OR UPDATE ON fn_facturacion
FOR EACH ROW
BEGIN
  IF :NEW.monto > 100000 THEN
    pkg_audit.log_high_value(:NEW.id);
  END IF;
END;`}
                  </pre>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                    Competencias Clave Oracle:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <li className="flex items-center gap-2 bg-white/5 p-2 rounded border border-white/5">
                      <ChevronRight size={14} className="text-amber-400 shrink-0" />
                      Oracle Forms (Canvas, Canvas Stack)
                    </li>
                    <li className="flex items-center gap-2 bg-white/5 p-2 rounded border border-white/5">
                      <ChevronRight size={14} className="text-amber-400 shrink-0" />
                      Oracle Reports (SQL Data Models)
                    </li>
                    <li className="flex items-center gap-2 bg-white/5 p-2 rounded border border-white/5">
                      <ChevronRight size={14} className="text-amber-400 shrink-0" />
                      Lógica de Negocio en PL/SQL
                    </li>
                    <li className="flex items-center gap-2 bg-white/5 p-2 rounded border border-white/5">
                      <ChevronRight size={14} className="text-amber-400 shrink-0" />
                      Optimización de Consultas SQL
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Modern Stack Card */}
            <div
              className={`glass-card p-6 md:p-8 flex flex-col justify-between gap-6 transition-all duration-300 relative overflow-hidden ${
                stackMode === "modern" || stackMode === "hybrid"
                  ? "border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.1)] bg-white/[0.04]"
                  : "opacity-60"
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400">
                    <Server size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.modernTitle}</h3>
                    <p className="text-xs text-cyan-400/80 font-mono">{t.modernSub}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-2.5 py-1 rounded-full uppercase">
                  Modern Core
                </span>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-steel-light font-light leading-relaxed">
                <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-white font-mono text-xs border-b border-white/10 pb-1.5">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <Code2 size={13} /> FastAPI Async Endpoint
                    </span>
                    <span className="text-[10px] text-steel-light">Python 3.11+</span>
                  </div>
                  <pre className="text-[11px] font-mono text-cyan-200/90 overflow-x-auto p-1 leading-snug">
{`@app.post("/api/v1/facturas", response_model=FacturaOut)
async def create_factura(payload: FacturaCreate, db: AsyncSession = Depends()):
    result = await service.process_invoice(db, payload)
    return result`}
                  </pre>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                    Stack Moderno Destacado:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <li className="flex items-center gap-2 bg-white/5 p-2 rounded border border-white/5">
                      <ChevronRight size={14} className="text-cyan-400 shrink-0" />
                      Python / FastAPI APIs Asíncronas
                    </li>
                    <li className="flex items-center gap-2 bg-white/5 p-2 rounded border border-white/5">
                      <ChevronRight size={14} className="text-cyan-400 shrink-0" />
                      Node.js / TypeScript Services
                    </li>
                    <li className="flex items-center gap-2 bg-white/5 p-2 rounded border border-white/5">
                      <ChevronRight size={14} className="text-cyan-400 shrink-0" />
                      Next.js Frontend Interactivo
                    </li>
                    <li className="flex items-center gap-2 bg-white/5 p-2 rounded border border-white/5">
                      <ChevronRight size={14} className="text-cyan-400 shrink-0" />
                      PostgreSQL & Relational SQL
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Hybrid Integration Banner */}
          <div className="glass-card p-6 border-l-4 border-l-cobalt-blue flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cobalt-blue/20 text-cobalt-blue border border-cobalt-blue/30 rounded-2xl shrink-0">
                <ArrowRightLeft size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">{t.hybridTitle}</h4>
                <p className="text-steel-light text-xs md:text-sm font-light mt-1">
                  {t.hybridSub} — Soluciones prácticas para conectar bases de datos legadas con interfaces y automatizaciones modernas sin interrumpir la operación empresarial.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-mono bg-white/5 text-blue-300 px-3 py-1.5 rounded-full border border-white/10">
                SQL Data ETL
              </span>
              <span className="text-xs font-mono bg-white/5 text-emerald-300 px-3 py-1.5 rounded-full border border-white/10">
                Python Scripts
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* TAB 2: INTERACTIVE SIMULATED CLI TERMINAL */}
      {activeTab === "terminal" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-4 md:p-6 border border-white/15 bg-black/80 font-mono text-sm shadow-2xl relative overflow-hidden rounded-2xl"
        >
          {/* Terminal Window Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs text-steel-light font-mono">
                dario@oracle-to-modern:~ (bash)
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-steel-light">
              <span className="hidden sm:inline-block">SHELL v2.4</span>
              <button
                onClick={() => setHistory([])}
                className="hover:text-white flex items-center gap-1 transition-colors"
                title="Clear Terminal"
              >
                <RotateCcw size={12} /> Clear
              </button>
            </div>
          </div>

          {/* Quick Command Pills for User to Click */}
          <div className="flex flex-wrap items-center gap-2 mb-4 p-2 bg-white/5 rounded-xl border border-white/5 text-xs">
            <span className="text-steel-light text-[11px] font-sans mr-1">Ejecutar comando rápido:</span>
            {["bio", "oracle", "modern", "metrics", "education", "help"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleRunCommand(cmd)}
                className="px-2.5 py-1 bg-white/10 hover:bg-cobalt-blue text-white rounded font-mono transition-colors text-[11px] flex items-center gap-1"
              >
                <Play size={10} /> {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Logs Window */}
          <div className="max-h-80 overflow-y-auto space-y-4 pr-2 font-mono text-xs md:text-sm scrollbar-thin">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-steel-light">
                  <span className="text-emerald-400 font-bold">dario@engineering:~$</span>
                  <span className="text-white font-bold">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-white/10 py-1">
                  {item.output}
                </div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Interactive Command Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (inputVal) handleRunCommand(inputVal);
            }}
            className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10"
          >
            <span className="text-emerald-400 font-bold text-xs md:text-sm">dario@engineering:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Escribe 'help', 'bio', 'oracle', 'modern' o 'metrics'..."
              className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs md:text-sm placeholder:text-white/20"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-cobalt-blue hover:bg-blue-600 text-white rounded text-xs font-sans transition-colors"
            >
              Exec
            </button>
          </form>
        </motion.div>
      )}

      {/* TAB 3: TIMELINE & EVOLUTION */}
      {activeTab === "timeline" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="relative border-l border-white/10 pl-6 md:pl-10 ml-2 md:ml-4 space-y-10"
        >
          {t.timelineItems.map((item, index) => (
            <div key={index} className="relative group">
              {/* Animated Timeline Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-cobalt-blue border-4 border-obsidian group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(0,71,255,0.8)]" />

              <div className="glass-card p-6 md:p-8 flex flex-col gap-4 border-white/10 hover:border-cobalt-blue/30 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <span className="text-xs font-mono text-cobalt-blue tracking-widest uppercase font-bold">
                    {item.period}
                  </span>
                  <span className="text-xs text-steel-light font-mono flex items-center gap-1">
                    <Sparkles size={12} className="text-amber-400" /> Key Milestone
                  </span>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{item.role}</h3>
                  <p className="text-steel-light text-sm md:text-base font-light leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-steel-light group-hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
