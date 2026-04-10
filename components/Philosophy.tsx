"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Layers } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function Philosophy() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Filosofía de Ingeniería",
      principles: [
        {
          title: "Código Limpio",
          description: "Código legible, mantenible y estructurado siguiendo estrictamente las mejores prácticas.",
          icon: Zap,
        },
        {
          title: "Tipado Seguro",
          description: "Desarrollo predictivo y robusto previniendo errores en tiempo de ejecución de extremo a extremo.",
          icon: ShieldCheck,
        },
        {
          title: "Arquitectura Escalable",
          description: "Diseño de sistemas modulares preparados para crecer en tráfico, alta disponibilidad y rendimiento óptimo.",
          icon: Layers,
        },
      ]
    },
    en: {
      title: "Engineering Philosophy",
      principles: [
        {
          title: "Clean Code",
          description: "Readable, maintainable, and strictly structured code following industry standard best practices.",
          icon: Zap,
        },
        {
          title: "Type Safety",
          description: "Predictive, robust development by preventing runtime errors end-to-end with strict typing.",
          icon: ShieldCheck,
        },
        {
          title: "Scalable Architecture",
          description: "Design of modular systems ready to scale with traffic, high availability, and optimal performance.",
          icon: Layers,
        },
      ]
    }
  };

  const t = content[language];

  return (
    <section className="flex flex-col gap-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-3"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.title}</h2>
        <div className="h-1 w-20 bg-cobalt-blue rounded-full shadow-[0_0_10px_rgba(0,71,255,0.5)]"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        {t.principles.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            className="flex flex-col gap-5 p-2"
          >
            <div className="text-white bg-white/5 border border-white/10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
              <item.icon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
            <p className="text-steel-light font-light leading-relaxed text-lg">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
