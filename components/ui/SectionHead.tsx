import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface Props {
  index: string;
  label: string;
  title: ReactNode;
  lead?: string;
  accent?: "forge" | "azul";
}

export default function SectionHead({ index, label, title, lead, accent = "azul" }: Props) {
  const color = accent === "azul" ? "text-azul" : "text-forge";
  return (
    <Reveal className="flex flex-col gap-6">
      <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-muted">
        <span className={`${color} font-bold`}>{index}</span>
        <span className="h-px flex-1 bg-line" />
        <span>{label}</span>
      </div>
      <h2 data-perch className="text-[clamp(1.75rem,9vw,2.25rem)] sm:text-6xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter max-w-6xl break-words">
        {title}
      </h2>
      {lead && <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">{lead}</p>}
    </Reveal>
  );
}
