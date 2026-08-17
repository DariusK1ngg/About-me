"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal() {
  const { language } = useLanguage();
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const terminalScreenRef = useRef<HTMLDivElement>(null);

  const commandList = [
    { cmd: "oracle", label: "oracle.cmd" },
    { cmd: "modern", label: "modern.cmd" },
    { cmd: "dualstack", label: "dualstack.cmd" },
    { cmd: "metrics", label: "metrics.cmd" },
    { cmd: "bio", label: "bio.cmd" },
    { cmd: "help", label: "help.cmd" },
  ];

  const getCommandOutput = (cmd: string): React.ReactNode => {
    const cleanCmd = cmd.trim().toLowerCase();

    if (cleanCmd === "oracle") {
      return (
        <div className="space-y-1 text-[#CCCCCC] cmd-font text-xs md:text-sm">
          <div className="text-[#00FFFF] font-bold">
            [ORACLE ENTERPRISE 11g / 19c & PL/SQL CORE]
          </div>
          <p className="text-[#AAAAAA] text-xs">
            {language === "es"
              ? "Desarrollo, mantenimiento y optimización de sistemas en Oracle:"
              : "Development, maintenance and optimization in Oracle systems:"}
          </p>
          <div className="pl-3 border-l border-[#444444] space-y-1 mt-1 text-xs">
            <div>
              <span className="text-[#00FF00] font-bold">Oracle Forms (11g/19c):</span>{" "}
              {language === "es"
                ? "Lógica empresarial en triggers (WHEN-VALIDATE-ITEM, POST-QUERY), Canvas, Bloques y Record Groups."
                : "Business logic in triggers (WHEN-VALIDATE-ITEM, POST-QUERY), Canvas, Data Blocks & Record Groups."}
            </div>
            <div>
              <span className="text-[#00FF00] font-bold">Oracle Reports & PL/SQL (11g/19c):</span>{" "}
              {language === "es"
                ? "Reportes matriciales, Stored Procedures, Paquetes, Triggers BD y Tuning SQL con EXPLAIN PLAN."
                : "Matrix Reports, Stored Procedures, Packages, DB Triggers & EXPLAIN PLAN tuning."}
            </div>
          </div>
        </div>
      );
    }

    if (cleanCmd === "modern") {
      return (
        <div className="space-y-1 text-[#CCCCCC] cmd-font text-xs md:text-sm">
          <div className="text-[#00FFFF] font-bold">
            [FULL STACK MODERN WEB ARCHITECTURE]
          </div>
          <div className="pl-3 border-l border-[#444444] space-y-1 mt-1 text-xs">
            <div>
              <span className="text-[#FFFF00] font-bold">Backend Services:</span> Python 3.11+, FastAPI (Async), Node.js, REST APIs, JWT, ORMs.
            </div>
            <div>
              <span className="text-[#FFFF00] font-bold">Frontend UI:</span> Next.js 14, React, TypeScript, Tailwind CSS.
            </div>
            <div>
              <span className="text-[#FFFF00] font-bold">Databases:</span> PostgreSQL, Oracle DB (11g/19c), MySQL, Prisma ORM, SQL Nativo.
            </div>
          </div>
        </div>
      );
    }

    if (cleanCmd === "dualstack" || cleanCmd === "migrate") {
      return (
        <div className="space-y-1 text-[#CCCCCC] cmd-font text-xs md:text-sm">
          <div className="text-[#FF77FF] font-bold">
            [DUAL ENVIRONMENT MANAGEMENT & INTEGRATION]
          </div>
          <p className="text-[#AAAAAA] text-xs">
            {language === "es"
              ? "Capacidad para convivir, mantener e integrar ambos ecosistemas en paralelo:"
              : "Ability to manage, maintain and integrate both ecosystems:"}
          </p>
          <div className="pl-3 border-l border-[#444444] space-y-1 text-xs">
            <div className="text-[#CCCCCC]">1. Soporte activo en Oracle Forms/Reports (11g/19c) y PL/SQL.</div>
            <div className="text-[#FF77FF]">2. APIs REST con FastAPI/Python conectando BD Oracle y PostgreSQL.</div>
            <div className="text-[#00FFFF]">3. Frontend reactivo en Next.js/React de alto rendimiento.</div>
            <div className="text-[#00FF00]">4. Scripts a medida para automatización y reporte de datos.</div>
          </div>
        </div>
      );
    }

    if (cleanCmd === "metrics") {
      return (
        <div className="space-y-1 text-[#CCCCCC] cmd-font text-xs md:text-sm">
          <div className="text-[#00FF00] font-bold">
            [SYSTEM PERFORMANCE METRICS]
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono mt-1">
            <div className="bg-[#1E1E1E] p-2 border border-[#333333] rounded">
              <span className="text-[#00FF00] font-bold block text-sm">-75%</span>
              <span className="text-[#AAAAAA] text-[11px]">{language === "es" ? "Tiempo Consulta SQL" : "SQL Query Time"}</span>
            </div>
            <div className="bg-[#1E1E1E] p-2 border border-[#333333] rounded">
              <span className="text-[#00FF00] font-bold block text-sm">100%</span>
              <span className="text-[#AAAAAA] text-[11px]">Type-Safety (TS/Py)</span>
            </div>
            <div className="bg-[#1E1E1E] p-2 border border-[#333333] rounded">
              <span className="text-[#00FF00] font-bold block text-sm">2</span>
              <span className="text-[#AAAAAA] text-[11px]">{language === "es" ? "Entornos Coexistentes" : "Coexisting Stacks"}</span>
            </div>
            <div className="bg-[#1E1E1E] p-2 border border-[#333333] rounded">
              <span className="text-[#00FF00] font-bold block text-sm">99.9%</span>
              <span className="text-[#AAAAAA] text-[11px]">Uptime</span>
            </div>
          </div>
        </div>
      );
    }

    if (cleanCmd === "bio") {
      return (
        <div className="space-y-1 text-[#CCCCCC] cmd-font text-xs md:text-sm">
          <div className="text-[#00FFFF] font-bold">DARIO AVALOS — INGENIERO EN INFORMÁTICA</div>
          <p className="text-[#CCCCCC] leading-relaxed text-xs">
            {language === "es"
              ? "Ingeniero Informático con enfoque práctico en la resolución de problemas reales, automatización de procesos empresariales y desarrollo de herramientas a medida. Experiencia consolidada operando simultáneamente en la arquitectura empresarial Oracle Forms y Reports (11g / 19c, PL/SQL) y en el stack web moderno (Python, FastAPI, Node, Next.js, PostgreSQL)."
              : "Computer Engineer focused on solving real-world problems, enterprise process automation, and custom tool development. Solid experience operating concurrently across Oracle Forms & Reports enterprise architecture (11g / 19c, PL/SQL) and modern web stacks (Python, FastAPI, Node, Next.js, PostgreSQL)."}
          </p>
        </div>
      );
    }

    if (cleanCmd === "help") {
      return (
        <div className="space-y-1 text-xs cmd-font text-[#CCCCCC]">
          <div className="text-[#AAAAAA] font-bold mb-1">
            {language === "es" ? "Comandos disponibles:" : "Available commands:"}
          </div>
          <div><span className="text-[#00FFFF] font-bold">oracle</span>    - {language === "es" ? "Experiencia en Oracle Forms/Reports (11g/19c) y PL/SQL" : "Oracle Forms/Reports (11g/19c) & PL/SQL"}</div>
          <div><span className="text-[#00FFFF] font-bold">modern</span>    - {language === "es" ? "Habilidades en Stack Moderno (FastAPI, Python, Next.js, Node)" : "Modern Full Stack skills"}</div>
          <div><span className="text-[#FF77FF] font-bold">dualstack</span> - {language === "es" ? "Gestión e integración de entornos duales" : "Dual environment integration"}</div>
          <div><span className="text-[#00FF00] font-bold">metrics</span>   - {language === "es" ? "Métricas de rendimiento y estándares" : "Performance metrics"}</div>
          <div><span className="text-[#FFFF00] font-bold">bio</span>       - {language === "es" ? "Perfil profesional e ingeniería" : "Professional profile"}</div>
          <div><span className="text-[#FF5555] font-bold">cls</span>       - {language === "es" ? "Limpiar pantalla de la consola" : "Clear screen"}</div>
        </div>
      );
    }

    if (cleanCmd === "cls" || cleanCmd === "clear") {
      setHistory([]);
      return null;
    }

    return (
      <div className="text-[#FF5555] text-xs cmd-font">
        {language === "es"
          ? <>&quot;{cmd}&quot; no se reconoce como un comando interno o externo, programa o archivo por lotes ejecutable. Escribe <span className="underline cursor-pointer text-[#FFFFFF]" onClick={() => executeCmd("help")}>help</span> para ayuda.</>
          : <>&quot;{cmd}&quot; is not recognized as an internal or external command, operable program or batch file. Type <span className="underline cursor-pointer text-[#FFFFFF]" onClick={() => executeCmd("help")}>help</span> for commands.</>}
      </div>
    );
  };

  const executeCmd = (commandStr: string) => {
    if (!commandStr.trim()) return;
    if (commandStr.trim().toLowerCase() === "cls" || commandStr.trim().toLowerCase() === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }
    const output = getCommandOutput(commandStr);
    setHistory(prev => [...prev, { command: commandStr, output }]);
    setInputVal("");
  };

  useEffect(() => {
    setHistory([
      {
        command: "ver",
        output: (
          <div className="text-xs cmd-font text-[#CCCCCC] space-y-1">
            <div>Microsoft Windows [Versión 10.0.19045.3693]</div>
            <div>(c) Microsoft Corporation. Todos los derechos reservados.</div>
            <div className="text-[#AAAAAA] pt-1">
              {language === "es"
                ? "Escribe 'help' o haz clic en los botones de ejecutable de abajo."
                : "Type 'help' or click executable command buttons below."}
            </div>
          </div>
        )
      }
    ]);
  }, [language]);

  // Scroll ONLY inner terminal screen container without moving page scroll
  useEffect(() => {
    if (terminalScreenRef.current) {
      terminalScreenRef.current.scrollTop = terminalScreenRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div id="terminal-section" className="w-full cmd-font">
      {/* Windows Command Prompt (cmd.exe) Window Frame */}
      <div className="rounded-lg overflow-hidden border border-[#333333] shadow-2xl bg-[#0C0C0C]">
        
        {/* Windows Command Prompt Title Bar */}
        <div className="bg-[#1F1F1F] px-3 py-1.5 flex items-center justify-between border-b border-[#2A2A2A] select-none">
          <div className="flex items-center gap-2">
            {/* Windows cmd icon */}
            <div className="w-4 h-4 bg-[#000000] border border-[#555555] text-[10px] cmd-font text-white flex items-center justify-center font-bold">
              C:\
            </div>
            <span className="text-xs cmd-font text-[#E0E0E0] tracking-tight font-medium">
              {language === "es" ? "Símbolo del sistema - cmd.exe" : "Command Prompt - cmd.exe"}
            </span>
          </div>

          {/* Windows Window Control Buttons */}
          <div className="flex items-center text-xs text-[#888888]">
            <span className="px-2.5 py-0.5 hover:bg-[#333333] hover:text-white cursor-pointer cmd-font">_</span>
            <span className="px-2.5 py-0.5 hover:bg-[#333333] hover:text-white cursor-pointer cmd-font">🗖</span>
            <span className="px-2.5 py-0.5 hover:bg-[#E81123] hover:text-white cursor-pointer cmd-font">✕</span>
          </div>
        </div>

        {/* Windows cmd Terminal Screen Body */}
        <div
          ref={terminalScreenRef}
          className="p-4 cmd-font text-xs md:text-sm max-h-[380px] overflow-y-auto space-y-3 bg-[#0C0C0C] text-[#CCCCCC] leading-relaxed"
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1 cmd-font">
              {/* Windows cmd Prompt Line */}
              <div className="flex items-center gap-1 cmd-font">
                <span className="text-[#CCCCCC]">C:\Users\DarioAvalos&gt;</span>
                <span className="text-[#FFFFFF] font-bold">{item.command}</span>
              </div>
              {item.output && <div className="pl-2 pt-0.5 cmd-font">{item.output}</div>}
            </div>
          ))}

          {/* Active Input Line */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              executeCmd(inputVal);
            }}
            className="flex items-center gap-1 pt-1 cmd-font"
          >
            <span className="text-[#CCCCCC] shrink-0 cmd-font">C:\Users\DarioAvalos&gt;</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="bg-transparent text-xs md:text-sm cmd-font text-[#FFFFFF] focus:outline-none flex-1"
              autoComplete="off"
              spellCheck="false"
            />
          </form>
        </div>

        {/* Bottom Command Buttons Bar (Windows Cmd Chips) */}
        <div className="bg-[#1A1A1A] px-4 py-2 border-t border-[#2A2A2A] flex items-center justify-between flex-wrap gap-2 text-xs cmd-font text-[#AAAAAA]">
          <span className="text-[11px] cmd-font text-slate-400 font-semibold">{language === "es" ? "Comandos rápidos:" : "Quick commands:"}</span>
          <div className="flex items-center gap-2 flex-wrap cmd-font">
            {commandList.map((item) => (
              <button
                key={item.cmd}
                onClick={() => executeCmd(item.cmd)}
                className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-[#E0E0E0] hover:text-[#FFFFFF] border border-[#444444] text-xs cmd-font px-3 py-1 rounded transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
