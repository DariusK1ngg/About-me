"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PiPlus, PiMinus, PiArrowUpRight } from "react-icons/pi";
import { SiPython, SiFastapi, SiNodedotjs, SiNextdotjs, SiReact, SiTypescript, SiPostgresql } from "react-icons/si";
import { useLanguage } from "@/hooks/useLanguage";
import SectionHead from "./ui/SectionHead";
import Reveal from "./ui/Reveal";
import OracleMark from "./ui/OracleMark";

interface Row {
  n: string;
  tag: string;
  title: string;
  desc: string;
  items: string[];
  footer: string;
  logos: ReactNode[];
  open: string;
  hoverTitle: string;
  badge: string;
}

export default function BridgeArchitecture() {
  const { language } = useLanguage();
  const es = language === "es";
  const [current, setCurrent] = useState(0);

  const rows: Row[] = [
    {
      n: "01",
      tag: es ? "Núcleo Oracle" : "Oracle core",
      title: es ? "Núcleo Enterprise Oracle" : "Oracle Enterprise Core",
      desc: es
        ? "Sistemas críticos transaccionales, generación de reportes complejos y lógica de negocio dentro de la base de datos."
        : "Critical transactional systems, complex reporting and business logic inside the database.",
      items: [
        "Oracle Forms (11g / 19c)",
        "Oracle Reports (11g / 19c)",
        es ? "Triggers, paquetes y funciones PL/SQL" : "PL/SQL triggers, packages & functions",
        es ? "Esquemas complejos en BD Oracle y optimización SQL" : "Complex Oracle DB schemas & tuning",
      ],
      footer: es ? "Producción y soporte activo" : "Active production & support",
      logos: [<OracleMark key="o" size={34} />, <span key="p" className="font-display font-black text-lg">PL/SQL</span>],
      open: "bg-forge text-ink",
      hoverTitle: "group-hover:text-forge",
      badge: "bg-ink text-forge",
    },
    {
      n: "02",
      tag: es ? "Capa de integración" : "Integration layer",
      title: es ? "APIs y Automatización" : "APIs & Automation",
      desc: es
        ? "Conexión de datos en tiempo real, automatización de tareas y microservicios que unen los dos mundos."
        : "Real-time data connection, task automation and microservices that join both worlds.",
      items: [
        es ? "Scripts en Python y herramientas a medida" : "Python scripts & custom tools",
        es ? "Endpoints REST asíncronos con FastAPI" : "FastAPI async REST endpoints",
        es ? "Mapeo de datos SQL y validación de integridad" : "SQL data mapping & integrity validation",
        es ? "Conectores de alta disponibilidad" : "High-availability connectors",
      ],
      footer: es ? "Integración activa" : "Active integration",
      logos: [<SiPython key="py" size={30} />, <SiFastapi key="fa" size={30} />, <SiNodedotjs key="no" size={30} />],
      open: "bg-bone text-ink",
      hoverTitle: "group-hover:text-bone",
      badge: "bg-ink text-bone",
    },
    {
      n: "03",
      tag: es ? "Stack moderno" : "Modern stack",
      title: es ? "Stack Web Moderno" : "Modern Web Stack",
      desc: es
        ? "Interfaces reactivas, tipado estricto de punta a punta y arquitecturas que escalan."
        : "Reactive interfaces, strict end-to-end typing and architectures that scale.",
      items: [
        "Next.js 14 & React TypeScript",
        es ? "FastAPI + validación de datos en Python" : "FastAPI + Python data validation",
        es ? "Servicios de backend en Node.js" : "Node.js backend services",
        es ? "PostgreSQL y bases de datos relacionales" : "PostgreSQL & relational DBs",
      ],
      footer: es ? "Pensado para escalar" : "Built to scale",
      logos: [<SiNextdotjs key="nx" size={30} />, <SiReact key="re" size={30} />, <SiTypescript key="ts" size={26} />, <SiPostgresql key="pg" size={30} />],
      open: "bg-azul text-ink",
      hoverTitle: "group-hover:text-azul",
      badge: "bg-ink text-azul",
    },
  ];

  return (
    <section id="stack" className="flex flex-col gap-14 scroll-mt-20">
      <SectionHead
        index="01"
        label={es ? "Arquitectura enterprise" : "Enterprise architecture"}
        accent="forge"
        title={
          es ? (
            <>
              Dos mundos. <span className="text-outline-forge">Un solo</span> desarrollador.
            </>
          ) : (
            <>
              Two worlds. <span className="text-outline-forge">One</span> developer.
            </>
          )
        }
        lead={
          es
            ? "Desarrollo, mantenimiento e integración entre sistemas empresariales Oracle y aplicaciones web modernas. Toca cada franja para abrirla."
            : "Development, maintenance and integration between Oracle enterprise systems and modern web apps. Tap each band to open it."
        }
      />

      <Reveal>
        <div className="border-b border-line">
          {rows.map((r, i) => {
            const isOpen = current === i;
            return (
              <div key={r.n} data-perch className={`border-t border-line transition-colors duration-300 ${isOpen ? r.open : "hover:bg-ink-2"}`}>
                <button
                  onClick={() => setCurrent(i)}
                  className="group w-full text-left px-3 sm:px-4 md:px-8 py-6 md:py-8 flex items-center gap-3 sm:gap-4 md:gap-8"
                  aria-expanded={isOpen}
                >
                  <span className={`font-mono text-sm w-6 sm:w-8 shrink-0 ${isOpen ? "text-ink" : "text-muted"}`}>{r.n}</span>
                  <span
                    className={`flex-1 min-w-0 break-words font-display font-black uppercase tracking-tighter leading-[0.95] text-[clamp(1.2rem,6.4vw,1.875rem)] sm:text-5xl lg:text-7xl transition-colors ${
                      isOpen ? "" : `text-bone ${r.hoverTitle}`
                    }`}
                  >
                    {r.title}
                  </span>
                  <span className={`hidden md:flex items-center gap-4 ${isOpen ? "text-ink" : "text-muted"}`}>{r.logos}</span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center border ${
                      isOpen ? "border-ink" : "border-line group-hover:border-bone"
                    }`}
                  >
                    {isOpen ? <PiMinus size={18} /> : <PiPlus size={18} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-8 pb-8 md:pb-10 md:pl-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-5 flex flex-col gap-5">
                          <span className={`self-start font-mono text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 ${r.badge}`}>
                            {r.tag}
                          </span>
                          <p className="text-lg md:text-xl leading-snug font-medium">{r.desc}</p>
                          <p className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider mt-auto">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inset-0 rounded-full bg-ink animate-ping-slow" />
                              <span className="relative h-2 w-2 rounded-full bg-ink" />
                            </span>
                            {r.footer}
                          </p>
                        </div>

                        <ul className="lg:col-span-7 grid grid-cols-2 gap-px bg-ink/25">
                          {r.items.map((item, k) => (
                            <motion.li
                              key={item}
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.15 + k * 0.08 }}
                              className={`flex flex-col justify-between gap-4 sm:gap-6 p-3 sm:p-5 min-h-[110px] sm:min-h-[120px] ${r.open.split(" ")[0]}`}
                            >
                              <span className="flex justify-between font-mono text-[11px] opacity-70">
                                <span>{r.n}.{k + 1}</span>
                                <PiArrowUpRight size={16} />
                              </span>
                              <span className="font-display font-extrabold uppercase text-[13px] sm:text-lg leading-tight break-words">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
