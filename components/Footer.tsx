"use client";

import { useState } from "react";
import { Github, Linkedin, Copy, Check, MailCheck, Send } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const WhatsappIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    stroke="none"
  >
    <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.552 4.195 1.6 6.02L.211 23.361l5.485-1.44a11.96 11.96 0 0 0 6.335 1.8h.005c6.645 0 12.03-5.385 12.03-12.031S18.676 0 12.031 0zm0 21.688a9.98 9.98 0 0 1-5.092-1.39l-.364-.216-3.784.992.992-3.784-.236-.376A9.957 9.957 0 0 1 2.03 12.03c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.495-7.502c-.302-.151-1.786-.882-2.063-.982-.276-.1-.477-.151-.678.151-.2.302-.779.982-.955 1.183-.176.201-.352.226-.653.076-.302-.151-1.275-.47-2.43-1.498-.897-.801-1.503-1.79-1.68-2.091-.176-.302-.019-.465.132-.616.135-.136.302-.352.452-.528.151-.176.201-.302.302-.503.1-.2.05-.377-.025-.528-.076-.151-.678-1.634-.93-2.237-.245-.589-.494-.509-.678-.518-.176-.009-.377-.009-.578-.009s-.528.075-.804.377c-.276.302-1.055 1.03-1.055 2.513s1.08 2.915 1.231 3.116c.151.201 2.126 3.242 5.147 4.544.718.309 1.28.494 1.718.633.722.23 1.38.197 1.895.12.576-.086 1.786-.73 2.037-1.434.251-.704.251-1.307.176-1.434-.075-.127-.276-.201-.578-.352z"/>
  </svg>
);

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();

  const email = "darioavalos20000@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="mt-16 border-t border-slate-800 bg-[#070B12] pt-12 pb-8 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-10">
        
        {/* Upper Call to Action & Card */}
        <div className="glass-card p-6 md:p-8 bg-[#0C1524] border-slate-700/80 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-cyber-cyan font-bold text-xs uppercase tracking-widest">
              <Send size={14} />
              <span>{language === "es" ? "Inicio de Protocolo de Contacto" : "Contact Protocol Initiated"}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              {language === "es" ? "¿Construimos o integramos tu próximo proyecto?" : "Shall we build or integrate your next project?"}
            </h3>
            <p className="text-slate-200 text-sm font-medium max-w-xl leading-relaxed">
              {language === "es"
                ? "Disponible para proyectos en Oracle Forms/Reports (11g/19c), desarrollo web Full Stack a medida y automatización de procesos empresariales."
                : "Available for Oracle Forms/Reports (11g/19c) systems, custom Full Stack web development, and enterprise process automation."}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-cyber-cyan text-cyber-cyan px-4 py-3 rounded-xl font-semibold tracking-tight text-xs transition-colors"
            >
              {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
              <span>{copied ? (language === "es" ? "Copiado al Portapapeles" : "Copied to Clipboard") : email}</span>
            </button>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 bg-cobalt-blue hover:bg-blue-600 text-white font-bold tracking-tight px-5 py-3 rounded-xl text-xs transition-colors shadow-lg shadow-cobalt-blue/20"
            >
              <MailCheck size={15} />
              <span>{language === "es" ? "Enviar Correo" : "Send Email"}</span>
            </a>
          </div>
        </div>

        {/* Lower Links & Copyright (Main Sans Font) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/60 font-sans text-xs font-semibold text-slate-300 tracking-tight">
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/DariusK1ngg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyber-cyan transition-colors flex items-center gap-1.5"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dario-avalos-927b56307/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyber-cyan transition-colors flex items-center gap-1.5"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://wa.me/595981279526"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <WhatsappIcon size={16} />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="text-slate-300 font-medium text-center sm:text-right">
            © 2026 Dario Avalos — {language === "es" ? "Ingeniero Informático | Enterprise & Modern Full Stack" : "Computer Engineer | Enterprise & Modern Full Stack"}
          </div>
        </div>

      </div>
    </footer>
  );
}
