"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const WhatsappIcon = ({ size = 22, className = "" }) => (
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

  const content = {
    es: {
      title: "Listos para construir algo excepcional.",
      subtitle: "Ponte en contacto para discutir tu próximo proyecto.",
      copied: "Email Copiado",
      copy: "Copiar Email",
      copyright: "© Todos los derechos reservados 2026 — Ingeniero de Software"
    },
    en: {
      title: "Ready to build something exceptional.",
      subtitle: "Get in touch to discuss your next project.",
      copied: "Email Copied",
      copy: "Copy Email",
      copyright: "© All rights reserved 2026 — Software Engineer"
    }
  };

  const t = content[language];

  return (
    <motion.footer
      id="contact"
      className="py-10 border-t border-white/10 flex flex-col gap-10 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight">{t.title}</h2>
          <p className="text-steel-light text-lg font-light">{t.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4">
        <a
          href="https://github.com/DariusK1ngg"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-cobalt-blue hover:border-cobalt-blue/30 transition-all duration-300 shadow-lg"
          aria-label="GitHub Profile"
        >
          <Github size={22} strokeWidth={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/in/dario-avalos-927b56307/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-cobalt-blue hover:border-cobalt-blue/30 transition-all duration-300 shadow-lg"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={22} strokeWidth={1.5} />
        </a>
        <a
          href="https://wa.me/595981279526"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-green-400 hover:border-green-400/30 transition-all duration-300 shadow-lg"
          aria-label="WhatsApp Contact"
        >
          <WhatsappIcon size={22} className="opacity-80 group-hover:opacity-100 transition-opacity" />
        </a>
        <button
          onClick={copyEmail}
          className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-cobalt-blue/30 transition-all duration-300 text-sm font-medium tracking-wide shadow-lg"
        >
          {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
          {copied ? <span className="text-green-400">{t.copied}</span> : <span>{t.copy}</span>}
        </button>
      </div>
      </div>
      
      <div className="text-center text-steel-light/60 text-sm font-light mt-4">
        {t.copyright}
      </div>
    </motion.footer>
  );
}
