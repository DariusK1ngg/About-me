"use client";

import { TableProperties, Binary, Workflow, Boxes } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function BridgeArchitecture() {
  const { language } = useLanguage();

  return (
    <section className="flex flex-col gap-8 my-8">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-oracle-amber font-bold text-xs uppercase tracking-widest">
          <Boxes size={15} />
          <span>{language === "es" ? "Coexistencia & Arquitectura Enterprise" : "Enterprise Dual Architecture"}</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
          {language === "es" ? (
            <>
              Dominio Dual: <span className="text-oracle-amber">Oracle Enterprise</span> & <span className="text-cyber-cyan">Stack Moderno</span>
            </>
          ) : (
            <>
              Dual Mastery: <span className="text-oracle-amber">Oracle Enterprise</span> & <span className="text-cyber-cyan">Modern Stack</span>
            </>
          )}
        </h2>
        <p className="text-slate-200 text-sm md:text-base font-medium max-w-3xl leading-relaxed">
          {language === "es"
            ? "Desarrollo, mantenimiento e integración directa entre sistemas empresariales Oracle (Forms, Reports, PL/SQL) y aplicaciones web modernas de alto rendimiento (Python, FastAPI, Node.js, Next.js)."
            : "Development, maintenance, and seamless integration between Oracle enterprise systems (Forms, Reports, PL/SQL) and high-performance modern web applications (Python, FastAPI, Node.js, Next.js)."}
        </p>
      </div>

      {/* Asymmetric Architecture Pipeline visual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Card 1: Oracle Legacy Stack (Left 4 cols) */}
        <div className="lg:col-span-4 glass-card-oracle p-5 md:p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-oracle-amber/10 rounded-full blur-3xl pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-oracle-amber/20 text-oracle-amber border border-oracle-amber/40 uppercase tracking-wide">
                {language === "es" ? "NÚCLEO ORACLE" : "ORACLE CORE"}
              </span>
              <TableProperties size={22} className="text-oracle-amber" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {language === "es" ? "Núcleo Enterprise Oracle" : "Oracle Enterprise Core"}
            </h3>
            <p className="text-xs text-slate-200 font-medium mb-4 leading-relaxed">
              {language === "es"
                ? "Sistemas críticos transaccionales, generación de reportes complejos y lógica de negocio en BD."
                : "Transactional critical systems, complex reporting engine and database business logic."}
            </p>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-200">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-oracle-amber shrink-0" />
                <span>Oracle Forms (11g / 19c)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-oracle-amber shrink-0" />
                <span>{language === "es" ? "Oracle Reports (11g / 19c)" : "Oracle Reports (11g / 19c)"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-oracle-amber shrink-0" />
                <span>{language === "es" ? "Triggers, Paquetes y Funciones PL/SQL" : "PL/SQL Triggers, Packages & Functions"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-oracle-amber shrink-0" />
                <span>{language === "es" ? "Esquemas Complejos en BD Oracle y Optimización SQL" : "Complex Oracle DB Schemas & Tuning"}</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-oracle-amber/20 text-[11px] font-bold text-oracle-amber">
            {language === "es" ? "Estado: Producción & Soporte Activo" : "Status: Active Production & Support"}
          </div>
        </div>

        {/* Card 2: Middleware & ETL Pipeline (Middle 4 cols) */}
        <div className="lg:col-span-4 glass-card p-5 md:p-6 flex flex-col justify-between border-purple-500/30 relative overflow-hidden bg-slate-950/80">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-purple-500/20 text-purple-400 border border-purple-500/40 uppercase tracking-wide">
                {language === "es" ? "CAPA DE INTEGRACIÓN" : "INTEGRATION LAYER"}
              </span>
              <Workflow size={22} className="text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {language === "es" ? "APIs y Automatización de Procesos" : "APIs & Process Automation"}
            </h3>
            <p className="text-xs text-slate-200 font-medium mb-4 leading-relaxed">
              {language === "es"
                ? "Conexión de datos en tiempo real, automatización de tareas y desarrollo de microservicios."
                : "Real-time data connection, process automation, and microservices development."}
            </p>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-200">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                <span>{language === "es" ? "Scripts en Python y Herramientas a Medida" : "Python Scripts & Custom Automation Tools"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                <span>{language === "es" ? "Endpoints REST Asíncronos con FastAPI" : "FastAPI Async REST Endpoints"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                <span>{language === "es" ? "Mapeo de Datos SQL y Validación de Integridad" : "SQL Data Mapping & Integrity Validation"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                <span>{language === "es" ? "Conectores de Alta Disponibilidad" : "High-Availability Connectors"}</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-purple-500/20 text-[11px] font-bold text-purple-400">
            {language === "es" ? "Acción: Integración Activa" : "Action: Active Integration"}
          </div>
        </div>

        {/* Card 3: Modern Stack (Right 4 cols) */}
        <div className="lg:col-span-4 glass-card-modern p-5 md:p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 uppercase tracking-wide">
                {language === "es" ? "STACK FULL STACK MODERNO" : "MODERN FULL STACK"}
              </span>
              <Binary size={22} className="text-cyber-cyan" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {language === "es" ? "Stack Web Moderno" : "Modern Web Stack"}
            </h3>
            <p className="text-xs text-slate-200 font-medium mb-4 leading-relaxed">
              {language === "es"
                ? "Interfaces reactivas modernas, tipado estricto de extremo a extremo y arquitecturas escalables."
                : "Modern reactive interfaces, strict end-to-end typing and scalable architectures."}
            </p>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-200">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan shrink-0" />
                <span>Next.js 14 & React TypeScript</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan shrink-0" />
                <span>{language === "es" ? "FastAPI + Validación de Datos en Python" : "FastAPI + Python Data Validation"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan shrink-0" />
                <span>{language === "es" ? "Servicios de Backend en Node.js" : "Node.js Backend Services"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan shrink-0" />
                <span>{language === "es" ? "PostgreSQL y Bases de Datos Relacionales" : "PostgreSQL & Relational DBs"}</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-cyber-cyan/20 text-[11px] font-bold text-cyber-cyan">
            {language === "es" ? "Rendimiento: Escalabilidad Máxima" : "Performance: Maximum Scalability"}
          </div>
        </div>
      </div>
    </section>
  );
}
