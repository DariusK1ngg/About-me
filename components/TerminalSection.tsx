"use client";

import { useLanguage } from "@/hooks/useLanguage";
import SectionHead from "./ui/SectionHead";
import InteractiveTerminal from "./InteractiveTerminal";

export default function TerminalSection() {
  const { language } = useLanguage();
  const es = language === "es";

  return (
    <section id="terminal-section" className="flex flex-col gap-14 scroll-mt-20">
      <SectionHead
        index="02"
        label="xfce4-terminal"
        accent="forge"
        title={
          es ? (
            <>
              Pregúntale a la <span className="text-outline-forge">terminal</span>
            </>
          ) : (
            <>
              Ask the <span className="text-outline-forge">terminal</span>
            </>
          )
        }
        lead={
          es
            ? "Escribe un comando o toca uno de los botones. Prueba con help, oracle o dualstack."
            : "Type a command or tap one of the buttons. Try help, oracle or dualstack."
        }
      />
      <div data-perch>
        <InteractiveTerminal />
      </div>
    </section>
  );
}
