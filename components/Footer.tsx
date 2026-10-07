"use client";

import { useState } from "react";
import { PiCopy, PiCheck, PiArrowUpRight, PiArrowUp } from "react-icons/pi";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { useLanguage } from "@/hooks/useLanguage";
import Reveal from "./ui/Reveal";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();
  const es = language === "es";

  const email = "darioavalos20000@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    { href: "https://github.com/DariusK1ngg", icon: <FaGithub size={18} />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/dario-avalos-927b56307/", icon: <FaLinkedinIn size={18} />, label: "LinkedIn" },
    { href: "https://wa.me/595981279526", icon: <FaWhatsapp size={18} />, label: "WhatsApp" },
  ];

  return (
    <footer id="contact" className="relative bg-azul text-ink overflow-hidden scroll-mt-14">
      <div className="max-w-[1400px] mx-auto gutter pt-16 md:pt-24 pb-[max(2rem,env(safe-area-inset-bottom))]">
        <Reveal>
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em]">
            <span className="font-bold">04</span>
            <span className="h-px flex-1 bg-ink/30" />
            <span>{es ? "Contacto" : "Contact"}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 font-extrabold uppercase tracking-[0.01em] leading-[0.9] text-[clamp(2.6rem,10vw,9rem)] break-words">
            {es ? "Hablemos" : "Let's talk"}
            <span className="text-forge">.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-6">
            <p className="font-display font-extrabold text-2xl md:text-3xl leading-tight uppercase">
              {es ? "¿Construimos o integramos tu próximo proyecto?" : "Shall we build or integrate your next project?"}
            </p>
            <p className="mt-3 text-ink/70 max-w-lg leading-relaxed">
              {es
                ? "Disponible para proyectos en Oracle Forms/Reports (11g/19c), desarrollo web Full Stack a medida y automatización de procesos."
                : "Available for Oracle Forms/Reports (11g/19c) projects, custom Full Stack web development and process automation."}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-6 flex flex-col gap-3" delay={0.1}>
            <a
              href={`mailto:${email}`}
              className="group flex items-center justify-between gap-4 bg-ink text-bone px-6 py-5 hover:bg-forge hover:text-ink transition-colors"
            >
              <span className="font-display font-extrabold text-lg md:text-2xl break-all">{email}</span>
              <PiArrowUpRight size={30} className="shrink-0" />
            </a>
            <button
              onClick={copyEmail}
              className="flex items-center justify-center gap-2 border-2 border-ink px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider hover:bg-ink hover:text-azul transition-colors"
            >
              {copied ? <PiCheck size={16} /> : <PiCopy size={16} />}
              {copied ? (es ? "Copiado" : "Copied") : es ? "Copiar correo" : "Copy email"}
            </button>
          </Reveal>
        </div>

        <div className="mt-16 pt-6 border-t-2 border-ink flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex flex-wrap items-center gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 border-2 border-ink px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider hover:bg-ink hover:text-azul transition-colors"
              >
                {l.icon}
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-center md:text-right">
              © 2026 Dario Avalos — {es ? "Ingeniero Informático" : "Computer Engineer"}
            </span>
            <a
              href="#"
              aria-label={es ? "Volver arriba" : "Back to top"}
              className="flex h-10 w-10 shrink-0 items-center justify-center bg-ink text-azul hover:bg-forge hover:text-ink transition-colors"
            >
              <PiArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
