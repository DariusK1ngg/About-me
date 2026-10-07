const words = ["ORACLE FORMS", "PL/SQL", "ORACLE REPORTS", "SQL TUNING", "FASTAPI", "NEXT.JS", "PYTHON", "POSTGRESQL", "TYPESCRIPT", "NODE.JS"];

function Star() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" className="shrink-0" aria-hidden>
      <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill="currentColor" />
    </svg>
  );
}

function Band({ className, rev }: { className: string; rev?: boolean }) {
  const items = [...words, ...words];
  return (
    <div className={`absolute left-[-5%] right-[-5%] overflow-hidden ${className}`}>
      <div className={`flex w-max items-center gap-8 py-3 ${rev ? "animate-marquee-rev" : "animate-marquee"}`}>
        {[0, 1].map((k) =>
          items.map((w, i) => (
            <span key={`${k}-${i}`} className="flex items-center gap-8 font-display font-black uppercase text-2xl md:text-4xl whitespace-nowrap">
              {w}
              <Star />
            </span>
          ))
        )}
      </div>
    </div>
  );
}

export default function TechBands() {
  return (
    <div aria-hidden className="relative h-44 md:h-56 overflow-hidden">
      <Band className="top-8 md:top-12 bg-azul text-ink -rotate-2" />
      <Band className="top-16 md:top-24 bg-forge text-ink rotate-[1.5deg]" rev />
    </div>
  );
}
