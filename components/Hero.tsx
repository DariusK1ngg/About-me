"use client";

import { motion } from "framer-motion";
import { SquareCode, TableProperties, Binary, ChevronRight, FileCode, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import InteractiveTerminal from "./InteractiveTerminal";

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section className="pt-20 md:pt-28 pb-8 flex flex-col gap-10">
      {/* Asymmetric Hero Header Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column (7 cols): Hero Pitch & Profile */}
        <motion.div
          className="lg:col-span-7 flex flex-col gap-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Status Badge Pills (Main Sans Font) */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-tight">
            <span className="bg-oracle-amber/10 border border-oracle-amber/30 text-oracle-amber px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
              <TableProperties size={14} />
              <span>ORACLE FORMS & REPORTS (11g / 19c)</span>
            </span>
            <span className="bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
              <Binary size={14} />
              <span>FASTAPI & NEXT.JS</span>
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Dario Avalos
            </h1>
            <p className="text-xl md:text-2xl font-bold tracking-tight text-cyber-cyan">
              {language === "es"
                ? "Ingeniero Informático | Oracle Enterprise & Stack Moderno"
                : "Computer Engineer | Oracle Enterprise & Modern Stack"}
            </p>
          </div>

          {/* Narrative / Bio */}
          <p className="text-slate-200 text-base md:text-lg leading-relaxed font-medium">
            {language === "es" ? (
              <>
                Ingeniero Informático enfocado en la resolución de problemas reales, gestión y desarrollo en ambos entornos: sistemas <strong className="text-oracle-amber font-bold">Oracle Enterprise Legacy</strong> (Oracle Forms, Oracle Reports 11g / 19c, triggers y lógica de negocio PL/SQL) e <strong className="text-cyber-cyan font-bold">Infraestructura Moderna Full Stack</strong> (Python, FastAPI, Node.js, Next.js, PostgreSQL). Automatización de procesos y desarrollo de herramientas a medida.
              </>
            ) : (
              <>
                Computer Engineer focused on real-world problem solving, managing and developing across both environments: <strong className="text-oracle-amber font-bold">Oracle Enterprise Legacy systems</strong> (Oracle Forms, Oracle Reports 11g / 19c, PL/SQL triggers & logic) and <strong className="text-cyber-cyan font-bold">Modern Full Stack Infrastructure</strong> (Python, FastAPI, Node.js, Next.js, PostgreSQL). Process automation and custom software solutions.
              </>
            )}
          </p>

          {/* Quick Action CTA Buttons (Solid colors, main font) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#terminal-section"
              className="bg-cobalt-blue hover:bg-blue-600 text-white font-bold tracking-tight px-6 py-3.5 rounded-xl text-xs md:text-sm flex items-center gap-2 transition-colors shadow-lg shadow-cobalt-blue/20"
            >
              <SquareCode size={16} />
              <span>{language === "es" ? "Ejecutar Terminal CLI" : "Launch CLI Terminal"}</span>
            </a>

            <a
              href="#contact"
              className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold tracking-tight px-6 py-3.5 rounded-xl text-xs md:text-sm flex items-center gap-2 transition-colors"
            >
              <span>{language === "es" ? "Contactar" : "Contact Me"}</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right Column (5 cols): High-Quality Dual Stack Card */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="bg-[#0D1522] border border-slate-700/80 rounded-2xl p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-tight text-slate-200">
                <FileCode size={16} className="text-oracle-amber" />
                <span className="font-semibold">dual_stack_environment.sys</span>
              </div>
              <span className="text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2.5 py-1 rounded-md flex items-center gap-1">
                <CheckCircle2 size={12} />
                <span>{language === "es" ? "ACTIVO" : "ACTIVE"}</span>
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-[#141E2E] border border-oracle-amber/40 text-slate-100">
                <span className="text-oracle-amber text-xs font-extrabold tracking-tight block mb-1 uppercase">
                  {language === "es" ? "Núcleo Enterprise Oracle" : "Oracle Enterprise Core"}
                </span>
                <span className="text-slate-100 text-xs block font-medium leading-relaxed">
                  {language === "es"
                    ? "Oracle Forms & Reports (11g / 19c), Triggers PL/SQL, Consultas SQL."
                    : "Oracle Forms & Reports (11g / 19c), PL/SQL Triggers, SQL Queries."}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141E2E] border border-cyber-cyan/40 text-slate-100">
                <span className="text-cyber-cyan text-xs font-extrabold tracking-tight block mb-1 uppercase">
                  {language === "es" ? "Núcleo Stack Moderno" : "Modern Stack Core"}
                </span>
                <span className="text-slate-100 text-xs block font-medium leading-relaxed">
                  {language === "es"
                    ? "Rutas Asíncronas Python, APIs REST, React 18, Next.js, PostgreSQL."
                    : "Python Async Routes, REST APIs, React 18, Next.js, PostgreSQL."}
                </span>
              </div>
            </div>

            <div className="pt-2 text-xs font-semibold text-slate-200 flex items-center justify-between border-t border-slate-700/60">
              <span className="text-slate-200">{language === "es" ? "Estado: Entorno Dual Listo" : "Status: Dual Environment Ready"}</span>
              <span className="text-cyber-cyan font-bold">v2.4.0</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Embedded Terminal Section */}
      <InteractiveTerminal />
    </section>
  );
}
