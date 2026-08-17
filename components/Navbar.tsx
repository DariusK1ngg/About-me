"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { SquareCode, Languages } from "lucide-react";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#05070A]/85 backdrop-blur-md border-b border-slate-800/80 px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Brand / Title */}
        <a href="#" className="text-sm font-bold tracking-tight text-white hover:text-cyber-cyan transition-colors">
          Dario Avalos
        </a>

        {/* Right: Controls (Terminal Link & Language Toggle using main sans font) */}
        <div className="flex items-center gap-3">
          <a
            href="#terminal-section"
            className="flex items-center gap-2 text-xs font-semibold tracking-tight text-slate-200 hover:text-cyber-cyan bg-slate-900 border border-slate-700 hover:border-cyber-cyan/50 px-3.5 py-2 rounded-xl transition-all"
          >
            <SquareCode size={15} className="text-cyber-cyan" />
            <span>{language === "es" ? "Terminal CLI" : "CLI Terminal"}</span>
          </a>

          {/* Language Switcher using main sans font - No hover rotate animation */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-cyber-cyan/50 text-slate-200 px-3.5 py-2 rounded-xl transition-all text-xs font-semibold tracking-tight"
            title={language === "es" ? "Cambiar Idioma / Switch Language" : "Switch Language"}
          >
            <Languages size={15} className="text-cyber-cyan" />
            <span className={language === 'es' ? 'text-white font-bold' : 'text-slate-400'}>ES</span>
            <span className="text-slate-600">/</span>
            <span className={language === 'en' ? 'text-white font-bold' : 'text-slate-400'}>EN</span>
          </button>
        </div>
      </div>
    </header>
  );
}
