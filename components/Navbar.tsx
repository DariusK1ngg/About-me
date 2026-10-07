"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PiArrowUpRight, PiList, PiTranslate, PiX } from "react-icons/pi";
import { useLanguage } from "@/hooks/useLanguage";

const sections = [
  { id: "stack", n: "01", es: "Arquitectura", en: "Architecture" },
  { id: "terminal-section", n: "02", es: "Terminal", en: "Terminal" },
  { id: "metrics", n: "03", es: "Métricas", en: "Metrics" },
  { id: "contact", n: "04", es: "Contacto", en: "Contact" },
];

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const es = language === "es";
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const goTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    setOpen(false);

    const targetTop = () => Math.max(0, el.getBoundingClientRect().top + window.scrollY - 84);
    window.scrollTo({ top: targetTop(), behavior: "smooth" });
    setTimeout(() => {
      if (Math.abs(window.scrollY - targetTop()) > 8) window.scrollTo({ top: targetTop(), behavior: "smooth" });
    }, 900);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-[max(0.75rem,env(safe-area-inset-top))] left-0 right-0 z-50 pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))] md:pl-[max(1.5rem,env(safe-area-inset-left))] md:pr-[max(1.5rem,env(safe-area-inset-right))]"
    >
      <div
        className={`relative mx-auto max-w-[1100px] border backdrop-blur-md transition-all duration-300 ${
          open ? "rounded-[28px]" : "rounded-full"
        } ${scrolled ? "bg-ink/90 border-line shadow-[0_8px_30px_rgba(0,0,0,0.5)]" : "bg-ink-2/70 border-line/70"}`}
      >
        <div className="flex items-center justify-between gap-2 p-1.5">
          <a href="#" className="flex items-center gap-2 lg:gap-3 pl-1 pr-2 lg:pr-3 group min-w-0" aria-label="Dario Avalos">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-azul text-ink font-display font-black text-sm">
              DA
            </span>
            <span className="flex md:hidden lg:flex flex-col leading-none min-w-0">
              <span className="font-display font-extrabold text-[14px] lg:text-[15px] whitespace-nowrap group-hover:text-azul transition-colors">Dario Avalos</span>
              <span className="hidden min-[380px]:block lg:block mt-1 font-mono text-[9px] lg:text-[10px] uppercase tracking-[0.08em] lg:tracking-[0.16em] text-muted whitespace-nowrap">
                Oracle <span className="text-forge">+</span> Full Stack
              </span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => goTo(e, s.id)}
                  className={`relative flex items-center gap-2 h-10 px-4 rounded-full font-display font-bold text-[13px] transition-colors ${
                    isActive ? "text-ink" : "text-bone/80 hover:text-bone hover:bg-ink-3"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-azul"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span className={`relative font-mono text-[10px] ${isActive ? "text-ink/60" : "text-forge"}`}>{s.n}</span>
                  <span className="relative">{es ? s.es : s.en}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleLanguage}
              className="flex items-center h-10 rounded-full bg-ink-3 p-1 font-mono text-[11px] font-bold uppercase"
              title={es ? "Cambiar idioma" : "Switch language"}
              aria-label={es ? "Cambiar idioma" : "Switch language"}
            >
              <PiTranslate size={15} className="mx-1.5 md:mx-2 text-azul" />
              {(["es", "en"] as const).map((l) => (
                <span key={l} className="relative flex h-8 w-8 md:w-9 items-center justify-center">
                  {language === l && <motion.span layoutId="lang-pill" className="absolute inset-0 rounded-full bg-bone" />}
                  <span className={`relative ${language === l ? "text-ink" : "text-muted"}`}>{l}</span>
                </span>
              ))}
            </button>

            <a
              href="#contact"
              onClick={(e) => goTo(e, "contact")}
              className="hidden md:flex items-center gap-1.5 h-10 pl-5 pr-4 rounded-full bg-forge text-ink font-display font-extrabold text-[13px] hover:bg-bone transition-colors"
            >
              {es ? "Hablemos" : "Let's talk"}
              <PiArrowUpRight size={16} />
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-forge text-ink"
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <PiX size={18} /> : <PiList size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden"
            >
              <nav className="px-4 pb-4 pt-1 flex flex-col max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain">
                {sections.map((s, i) => (
                  <motion.a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={(e) => goTo(e, s.id)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                    className={`flex items-baseline gap-4 py-3.5 border-t border-line ${active === s.id ? "text-azul" : "text-bone"}`}
                  >
                    <span className="font-mono text-xs text-forge">{s.n}</span>
                    <span className="flex-1 font-display font-extrabold text-3xl leading-none">{es ? s.es : s.en}</span>
                    <PiArrowUpRight size={22} />
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
