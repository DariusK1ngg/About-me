"use client";

import { useState, useEffect, useRef, type KeyboardEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { PiMinus, PiSquare, PiX, PiTerminalWindow, PiLeaf, PiWifiHigh, PiSpeakerHigh, PiBatteryFull } from "react-icons/pi";
import { useLanguage } from "@/hooks/useLanguage";

interface HistoryItem {
  command: string;
  output: ReactNode;
}

const commandList = ["oracle", "modern", "dualstack", "metrics", "bio", "help", "clear"];

function Prompt() {
  return (
    <span className="shrink-0 whitespace-pre">
      <span className="text-[#87CF3E] font-bold">dario@mint</span>
      <span className="text-bone/70">:</span>
      <span className="text-[#729FCF] font-bold">~</span>
      <span className="text-bone/70">$ </span>
    </span>
  );
}

function PanelClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 20000);
    return () => clearInterval(id);
  }, []);

  if (!now) return <span className="w-24" />;
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const date = `${String(now.getDate()).padStart(2, "0")}/${String(now.getMonth() + 1).padStart(2, "0")}`;

  return (
    <span className="flex flex-col items-end leading-none text-[11px] text-[#dcdcdc] font-sans">
      <span className="font-semibold">{hh}:{mm}</span>
      <span className="text-[#9a9a9a] mt-0.5">{date}</span>
    </span>
  );
}

export default function InteractiveTerminal() {
  const { language } = useLanguage();
  const es = language === "es";
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const screenRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pastCommands = useRef<string[]>([]);
  const pastIndex = useRef(-1);

  const getOutput = (cmd: string): ReactNode => {
    const clean = cmd.trim().toLowerCase();

    if (clean === "oracle") {
      return (
        <div className="space-y-1">
          <div className="text-[#34E2E2] font-bold">[ORACLE ENTERPRISE 11g / 19c & PL/SQL CORE]</div>
          <p className="text-[#9a9a9a]">
            {es ? "Desarrollo, mantenimiento y optimización de sistemas en Oracle:" : "Development, maintenance and optimization in Oracle systems:"}
          </p>
          <div className="pl-3 border-l border-[#444] space-y-1 mt-1">
            <div>
              <span className="text-[#8AE234] font-bold">Oracle Forms (11g/19c):</span>{" "}
              {es
                ? "Lógica empresarial en triggers (WHEN-VALIDATE-ITEM, POST-QUERY), Canvas, Bloques y Record Groups."
                : "Business logic in triggers (WHEN-VALIDATE-ITEM, POST-QUERY), Canvas, Data Blocks & Record Groups."}
            </div>
            <div>
              <span className="text-[#8AE234] font-bold">Oracle Reports & PL/SQL (11g/19c):</span>{" "}
              {es
                ? "Reportes matriciales, Stored Procedures, Paquetes, Triggers BD y Tuning SQL con EXPLAIN PLAN."
                : "Matrix Reports, Stored Procedures, Packages, DB Triggers & EXPLAIN PLAN tuning."}
            </div>
          </div>
        </div>
      );
    }

    if (clean === "modern") {
      return (
        <div className="space-y-1">
          <div className="text-[#34E2E2] font-bold">[FULL STACK MODERN WEB ARCHITECTURE]</div>
          <div className="pl-3 border-l border-[#444] space-y-1 mt-1">
            <div><span className="text-[#FCE94F] font-bold">Backend:</span> Python 3.11+, FastAPI (Async), Node.js, REST APIs, JWT, ORMs.</div>
            <div><span className="text-[#FCE94F] font-bold">Frontend:</span> Next.js 14, React, TypeScript, Tailwind CSS.</div>
            <div><span className="text-[#FCE94F] font-bold">{es ? "Bases de datos" : "Databases"}:</span> PostgreSQL, Oracle DB (11g/19c), MySQL, Prisma ORM, SQL.</div>
          </div>
        </div>
      );
    }

    if (clean === "dualstack" || clean === "migrate") {
      return (
        <div className="space-y-1">
          <div className="text-[#AD7FA8] font-bold">[DUAL ENVIRONMENT MANAGEMENT & INTEGRATION]</div>
          <p className="text-[#9a9a9a]">
            {es ? "Capacidad para convivir, mantener e integrar ambos ecosistemas en paralelo:" : "Ability to manage, maintain and integrate both ecosystems:"}
          </p>
          <div className="pl-3 border-l border-[#444] space-y-1">
            <div>1. {es ? "Soporte activo en Oracle Forms/Reports (11g/19c) y PL/SQL." : "Active support on Oracle Forms/Reports (11g/19c) and PL/SQL."}</div>
            <div className="text-[#AD7FA8]">2. {es ? "APIs REST con FastAPI/Python conectando BD Oracle y PostgreSQL." : "FastAPI/Python REST APIs connecting Oracle and PostgreSQL."}</div>
            <div className="text-[#34E2E2]">3. {es ? "Frontend reactivo en Next.js/React de alto rendimiento." : "High-performance reactive frontend in Next.js/React."}</div>
            <div className="text-[#8AE234]">4. {es ? "Scripts a medida para automatización y reporte de datos." : "Custom scripts for automation and data reporting."}</div>
          </div>
        </div>
      );
    }

    if (clean === "metrics") {
      const m = [
        { v: "80%+", l: es ? "Carrera aprobada" : "Degree completed" },
        { v: "100%", l: "Type-safety (TS/Py)" },
        { v: "2", l: es ? "Entornos coexistentes" : "Coexisting stacks" },
        { v: "99.9%", l: "Uptime" },
      ];
      return (
        <div className="space-y-1">
          <div className="text-[#8AE234] font-bold">[SYSTEM PERFORMANCE METRICS]</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-1">
            {m.map((x) => (
              <div key={x.l} className="bg-[#1e1e1e] p-2 border border-[#333]">
                <span className="text-[#8AE234] font-bold block text-sm">{x.v}</span>
                <span className="text-[#9a9a9a] text-[11px]">{x.l}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (clean === "bio") {
      return (
        <div className="space-y-1">
          <div className="text-[#34E2E2] font-bold">DARIO AVALOS — {es ? "INGENIERO EN INFORMÁTICA" : "COMPUTER ENGINEER"}</div>
          <p className="leading-relaxed">
            {es
              ? "Ingeniero Informático con enfoque práctico en la resolución de problemas reales, automatización de procesos empresariales y desarrollo de herramientas a medida. Experiencia consolidada operando simultáneamente en la arquitectura empresarial Oracle Forms y Reports (11g / 19c, PL/SQL) y en el stack web moderno (Python, FastAPI, Node, Next.js, PostgreSQL)."
              : "Computer Engineer focused on solving real-world problems, enterprise process automation, and custom tool development. Solid experience operating concurrently across Oracle Forms & Reports enterprise architecture (11g / 19c, PL/SQL) and modern web stacks (Python, FastAPI, Node, Next.js, PostgreSQL)."}
          </p>
        </div>
      );
    }

    if (clean === "help") {
      const rows: [string, string, string][] = [
        ["oracle", "text-[#34E2E2]", es ? "Experiencia en Oracle Forms/Reports (11g/19c) y PL/SQL" : "Oracle Forms/Reports (11g/19c) & PL/SQL"],
        ["modern", "text-[#34E2E2]", es ? "Habilidades en stack moderno (FastAPI, Python, Next.js, Node)" : "Modern full stack skills"],
        ["dualstack", "text-[#AD7FA8]", es ? "Gestión e integración de entornos duales" : "Dual environment integration"],
        ["metrics", "text-[#8AE234]", es ? "Métricas de rendimiento y estándares" : "Performance metrics"],
        ["bio", "text-[#FCE94F]", es ? "Perfil profesional e ingeniería" : "Professional profile"],
        ["clear", "text-[#EF2929]", es ? "Limpiar la pantalla" : "Clear the screen"],
      ];
      return (
        <div className="space-y-0.5">
          <div className="text-[#9a9a9a] font-bold mb-1">{es ? "Comandos disponibles:" : "Available commands:"}</div>
          {rows.map(([c, color, d]) => (
            <div key={c}>
              <span className={`${color} font-bold inline-block w-24`}>{c}</span>
              <span>{d}</span>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="text-[#EF2929]">
        {es ? (
          <>
            bash: {cmd}: orden no encontrada. Escribe{" "}
            <span className="underline cursor-pointer text-bone" onClick={() => executeCmd("help")}>help</span> para ver los comandos.
          </>
        ) : (
          <>
            bash: {cmd}: command not found. Type{" "}
            <span className="underline cursor-pointer text-bone" onClick={() => executeCmd("help")}>help</span> to list commands.
          </>
        )}
      </div>
    );
  };

  const executeCmd = (commandStr: string) => {
    const value = commandStr.trim();
    if (!value) return;
    if (value.toLowerCase() === "clear" || value.toLowerCase() === "cls") {
      setHistory([]);
      setInputVal("");
      return;
    }
    const output = getOutput(value);
    setHistory((prev) => [...prev, { command: value, output }]);
    pastCommands.current.push(value);
    pastIndex.current = -1;
    setInputVal("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const past = pastCommands.current;
    if (e.key === "ArrowUp" && past.length) {
      e.preventDefault();
      pastIndex.current = Math.min(pastIndex.current + 1, past.length - 1);
      setInputVal(past[past.length - 1 - pastIndex.current]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      pastIndex.current = Math.max(pastIndex.current - 1, -1);
      setInputVal(pastIndex.current === -1 ? "" : past[past.length - 1 - pastIndex.current]);
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = commandList.find((c) => inputVal && c.startsWith(inputVal.toLowerCase()));
      if (match) setInputVal(match);
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  useEffect(() => {
    setHistory([
      {
        command: "./bienvenida.sh",
        output: (
          <div className="space-y-1">
            <div className="text-[#8AE234]">Linux Mint XFCE — xfce4-terminal</div>
            <div className="text-[#9a9a9a]">
              {es
                ? "Escribe 'help' o usa los botones de abajo. Tab autocompleta y las flechas recorren el historial."
                : "Type 'help' or use the buttons below. Tab completes and arrows walk through history."}
            </div>
          </div>
        ),
      },
    ]);
  }, [language]);

  useEffect(() => {
    if (screenRef.current) screenRef.current.scrollTop = screenRef.current.scrollHeight;
  }, [history]);

  const menu = es ? ["Archivo", "Editar", "Ver", "Terminal", "Pestañas", "Ayuda"] : ["File", "Edit", "View", "Terminal", "Tabs", "Help"];

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden border border-[#1b261f] bg-[#1d2a22] shadow-[10px_10px_0_0_#4C86FF] flex flex-col">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: "repeating-radial-gradient(circle at 78% 110%, #87CF3E 0 2px, transparent 2px 46px)" }}
        />

        <div className="relative px-3 py-6 md:px-14 md:py-12">
          <div className="mx-auto max-w-4xl rounded-lg overflow-hidden border border-black/60 shadow-[0_18px_40px_rgba(0,0,0,0.55)] font-sans">
            <div className="relative bg-[#2d2d2d] h-9 flex items-center justify-center select-none border-b border-black/50">
              <span className="absolute left-3 flex items-center text-[#cfcfcf]">
                <PiTerminalWindow size={16} />
              </span>
              <span className="text-[13px] font-semibold text-[#dcdcdc]">dario@mint: ~</span>
              <span className="absolute right-2 flex items-center gap-1.5 text-[#cfcfcf]">
                {[
                  { I: PiMinus, h: "hover:bg-[#4a4a4a]", s: 13 },
                  { I: PiSquare, h: "hover:bg-[#4a4a4a]", s: 12 },
                  { I: PiX, h: "hover:bg-[#e0453b] hover:text-white", s: 13 },
                ].map(({ I, h, s }, i) => (
                  <span key={i} className={`flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#3a3a3a] cursor-pointer transition-colors ${h}`}>
                    <I size={s} />
                  </span>
                ))}
              </span>
            </div>

            <div className="bg-[#353535] text-[#dcdcdc] text-[13px] flex gap-1 px-1 border-b border-black/40 select-none overflow-x-auto">
              {menu.map((m) => (
                <span key={m} className="px-2.5 py-1 hover:bg-[#4a4a4a] cursor-default whitespace-nowrap">{m}</span>
              ))}
            </div>

            <div
              ref={screenRef}
              onClick={() => inputRef.current?.focus()}
              className="cmd-font text-[13px] leading-relaxed bg-[#101010] text-[#d3d7cf] p-3 md:p-4 h-[360px] overflow-y-auto cursor-text space-y-2"
            >
              {history.map((item, idx) => (
                <div key={`${idx}-${item.command}`} className="animate-reveal">
                  <div className="flex flex-wrap">
                    <Prompt />
                    <span className="text-bone">{item.command}</span>
                  </div>
                  {item.output && <div className="pt-1">{item.output}</div>}
                </div>
              ))}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  executeCmd(inputVal);
                }}
                className="flex items-center"
              >
                <Prompt />
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="cmd-font bg-transparent text-bone focus:outline-none flex-1 min-w-0 caret-[#87CF3E] text-[16px] md:text-[13px]"
                  autoComplete="off"
                  autoCapitalize="none"
                  autoCorrect="off"
                  enterKeyHint="send"
                  spellCheck="false"
                  aria-label="terminal"
                />
              </form>
            </div>

            <div className="bg-[#2d2d2d] border-t border-black/50 px-3 py-2 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-[11px] text-[#9a9a9a]">{es ? "Comandos rápidos" : "Quick commands"}</span>
              <div className="flex flex-wrap gap-1.5">
                {commandList.map((c) => (
                  <button
                    key={c}
                    onClick={() => executeCmd(c)}
                    className="cmd-font text-[12px] px-3 py-2 md:px-2.5 md:py-1 rounded bg-[#3f3f3f] hover:bg-[#505050] text-[#e6e6e6] border border-black/40 transition-colors"
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-[#252525] border-t border-black/60 h-10 flex items-center gap-3 px-2 font-sans select-none">
          <span className="flex items-center gap-2 h-7 pl-1.5 pr-3 rounded bg-[#333] text-[#dcdcdc] text-xs font-semibold">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#87CF3E] text-[#1a1a1a]">
              <PiLeaf size={13} />
            </span>
            Menú
          </span>
          <span className="h-5 w-px bg-black/60" />
          <span className="flex items-center gap-2 h-7 px-3 bg-[#3c3c3c] border-b-2 border-[#87CF3E] text-[#dcdcdc] text-xs">
            <PiTerminalWindow size={14} />
            <span className="hidden sm:inline">dario@mint: ~</span>
          </span>
          <span className="flex-1" />
          <span className="hidden sm:flex items-center gap-3 text-[#cfcfcf]">
            <PiWifiHigh size={16} />
            <PiSpeakerHigh size={16} />
            <PiBatteryFull size={16} />
          </span>
          <PanelClock />
        </div>
      </div>
    </motion.div>
  );
}
