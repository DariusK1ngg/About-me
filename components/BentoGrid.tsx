"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Server, Database } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function BentoGrid() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Stack Principal",
      expertise: "Experiencia"
    },
    en: {
      title: "Core Tech Stack",
      expertise: "Expertise"
    }
  };

  const t = content[language];

  const stack = [
    {
      title: "Languages",
      description: "TypeScript, JavaScript, Python, HTML, CSS",
      icon: Code2,
      colSpan: "md:col-span-2",
    },
    {
      title: "Frontend",
      description: "React, Next.js, Tailwind",
      icon: Layout,
      colSpan: "md:col-span-1",
    },
    {
      title: "Backend",
      description: "Node.js, FastAPI",
      icon: Server,
      colSpan: "md:col-span-1",
    },
    {
      title: "Database",
      description: "PostgreSQL, MySQL, Prisma ORM",
      icon: Database,
      colSpan: "md:col-span-2",
    },
  ];

  return (
    <section className="flex flex-col gap-10">
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

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {stack.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`glass-card p-8 md:p-10 flex flex-col justify-between group hover:border-cobalt-blue/40 transition-all duration-300 hover:bg-white/[0.05] relative overflow-hidden ${item.colSpan}`}
          >
            {/* Subtle light effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cobalt-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex justify-between items-start mb-12 relative z-10">
              <div className="bg-white/5 p-4 rounded-2xl text-white group-hover:text-cobalt-blue group-hover:scale-110 transition-all duration-300 border border-white/10 group-hover:border-cobalt-blue/30 shadow-lg group-hover:shadow-[0_0_20px_rgba(0,71,255,0.2)]">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest bg-white/5 text-steel-light px-4 py-1.5 rounded-full border border-white/5 group-hover:border-cobalt-blue/20 group-hover:text-blue-300 transition-colors">
                {t.expertise}
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-3 tracking-tight">{item.title}</h3>
              <p className="text-steel-light text-lg font-light leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
