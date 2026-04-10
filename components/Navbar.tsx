"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-end items-center pointer-events-none">
      <div 
        className="pointer-events-auto bg-white/5 border border-white/10 backdrop-blur-md rounded-full p-1 flex items-center shadow-lg relative cursor-pointer" 
        onClick={toggleLanguage}
      >
        {/* Animated Background Indicator */}
        <motion.div
          className="absolute left-1 w-[50px] h-[32px] bg-cobalt-blue rounded-full shadow-[0_0_15px_rgba(0,71,255,0.4)]"
          layout
          initial={false}
          animate={{ x: language === 'es' ? 0 : 50 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
        
        <div className={`relative z-10 w-[50px] text-center text-sm font-bold transition-colors duration-300 py-1.5 ${language === 'es' ? 'text-white' : 'text-steel-light'}`}>
          ES
        </div>
        <div className={`relative z-10 w-[50px] text-center text-sm font-bold transition-colors duration-300 py-1.5 ${language === 'en' ? 'text-white' : 'text-steel-light'}`}>
          EN
        </div>
      </div>
    </nav>
  );
}
