"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function Hero() {
  const { language } = useLanguage();

  const content = {
    es: {
      role: "Ingeniero en Informática | Full Stack Developer",
      bio: <>Especialista en el desarrollo de aplicaciones de extremo a extremo. Experto en construir interfaces reactivas con <strong className="font-semibold text-white">React/TypeScript</strong> y arquitecturas de backend robustas utilizando <strong className="font-semibold text-white">Node.js</strong> y <strong className="font-semibold text-white">Python (FastAPI)</strong>. Enfoque total en la integridad de datos y eficiencia mediante <strong>PostgreSQL</strong> y <strong>Prisma ORM</strong>.</>,
      contact: "Contactar"
    },
    en: {
      role: "Computer Engineer | Full Stack Developer",
      bio: <>End-to-end application development specialist. Expert in building reactive interfaces with <strong className="font-semibold text-white">React/TypeScript</strong> and robust backend architectures using <strong className="font-semibold text-white">Node.js</strong> and <strong className="font-semibold text-white">Python (FastAPI)</strong>. Total focus on data integrity and efficiency through <strong>PostgreSQL</strong> and <strong>Prisma ORM</strong>.</>,
      contact: "Contact Me"
    }
  };

  const t = content[language];

  return (
    <section className="flex flex-col gap-6 pt-16 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-steel-light font-medium tracking-widest text-[10px] md:text-sm uppercase bg-white/5 border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full inline-block">
          {t.role}
        </span>
      </motion.div>

      <motion.h1
        className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      >
        <span className="text-gradient drop-shadow-sm">Dario Avalos</span>
      </motion.h1>

      <motion.p
        className="text-steel-light text-base md:text-xl lg:text-2xl max-w-3xl leading-relaxed mt-4 md:mt-6 font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {t.bio}
      </motion.p>

      <motion.div
        className="flex items-center gap-4 mt-8 md:mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <a
          href="#contact"
          className="bg-cobalt-blue hover:bg-blue-600 text-white px-6 py-3.5 md:px-8 md:py-4 rounded-full font-medium transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(0,71,255,0.4)] hover:shadow-[0_0_30px_rgba(0,71,255,0.6)] text-sm md:text-base"
        >
          {t.contact}
          <ChevronRight size={18} className="shrink-0 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
