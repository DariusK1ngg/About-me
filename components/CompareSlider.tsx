"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import {
  PiArrowsLeftRight,
  PiFloppyDisk,
  PiMagnifyingGlass,
  PiArrowLeft,
  PiArrowRight,
  PiTrash,
  PiDoorOpen,
  PiCheckCircle,
} from "react-icons/pi";
import { useLanguage } from "@/hooks/useLanguage";

function LegacyForm({ es }: { es: boolean }) {
  const rows = [
    { l: es ? "Cliente" : "Customer", v: "CLI-0042" },
    { l: es ? "Nombre" : "Name", v: es ? "Cliente de ejemplo" : "Sample customer" },
    { l: es ? "Límite crédito" : "Credit limit", v: "12,000.00" },
    { l: es ? "Saldo actual" : "Balance", v: "8,450.00" },
    { l: es ? "Monto pedido" : "Order amount", v: "2,300.00", hl: true },
  ];

  return (
    <div
      className="absolute inset-0 bg-win text-black select-none flex flex-col"
      style={{ fontFamily: "Tahoma, 'Segoe UI', Verdana, sans-serif", fontSize: 12 }}
    >
      <div className="flex items-center justify-between px-1.5 py-1 text-white font-bold" style={{ background: "linear-gradient(90deg,#000080,#1084d0)" }}>
        <span className="truncate">Oracle Forms Runtime - PEDIDO_CLIENTE (FRM-0042)</span>
        <span className="flex gap-0.5 shrink-0">
          {["_", "□", "x"].map((c) => (
            <span key={c} className="bevel-out bg-win text-black w-4 h-4 flex items-center justify-center leading-none text-[10px] font-bold">
              {c}
            </span>
          ))}
        </span>
      </div>

      <div className="flex gap-4 px-2 py-0.5 border-b border-[#808080] text-[12px] overflow-hidden whitespace-nowrap">
        {(es
          ? ["Acción", "Edición", "Consulta", "Bloque", "Registro", "Campo", "Ayuda"]
          : ["Action", "Edit", "Query", "Block", "Record", "Field", "Help"]
        ).map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>

      <div className="flex gap-1 px-2 py-1.5 border-b border-[#808080]">
        {[PiFloppyDisk, PiMagnifyingGlass, PiArrowLeft, PiArrowRight, PiTrash, PiDoorOpen].map((Icon, i) => (
          <span key={i} className="bevel-out bg-win w-7 h-7 flex items-center justify-center">
            <Icon size={15} />
          </span>
        ))}
      </div>

      <div className="flex-1 p-3 md:p-5 flex flex-col gap-3 min-h-0">
        <div className="bevel-in bg-win relative p-3 pt-5 flex-1 w-full max-w-3xl mx-auto">
          <span className="absolute -top-2 left-3 bg-win px-1 font-bold">PEDIDO_CLIENTE</span>
          <div className="flex flex-col gap-2">
            {rows.map((r) => (
              <div key={r.l} className="flex items-center gap-3">
                <span className="w-24 md:w-28 text-right shrink-0">{r.l}:</span>
                <span className={`bevel-in flex-1 px-1.5 py-0.5 ${r.hl ? "bg-[#FFFFCC]" : "bg-white"}`}>
                  {r.v}
                  {r.hl && <span className="inline-block w-[1px] h-3 bg-black align-middle ml-px animate-blink" />}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4">
            <span>{es ? "Registro: 1/1" : "Record: 1/1"}</span>
            <span className="flex gap-2">
              <span className="bevel-out bg-win px-3 py-1 font-bold">{es ? "Guardar" : "Save"}</span>
              <span className="bevel-out bg-win px-3 py-1">{es ? "Salir" : "Exit"}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="bevel-in bg-win mx-2 mb-2 px-2 py-1 flex justify-between gap-2">
        <span className="truncate">
          {es
            ? "FRM-40400: Transacción completa: 1 registros aplicados y guardados."
            : "FRM-40400: Transaction complete: 1 records applied and saved."}
        </span>
        <span className="shrink-0 hidden sm:block">Count: *1</span>
      </div>
    </div>
  );
}

function ModernForm({ es }: { es: boolean }) {
  return (
    <div className="absolute inset-0 bg-ink-2 flex flex-col">
      <div className="flex items-center gap-2 px-3 h-9 border-b border-line">
        <span className="flex gap-1.5">
          <i className="h-2.5 w-2.5 bg-line" />
          <i className="h-2.5 w-2.5 bg-line" />
          <i className="h-2.5 w-2.5 bg-azul" />
        </span>
        <span className="ml-2 flex-1 h-5 bg-ink px-2 flex items-center font-mono text-[10px] text-muted truncate">
          app.local/pedidos/nuevo
        </span>
      </div>

      <div className="flex-1 p-5 md:p-8 flex flex-col gap-5 justify-center w-full max-w-2xl mx-auto">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-azul">{es ? "Pedido nuevo" : "New order"}</p>
          <p className="font-display font-black text-2xl md:text-3xl uppercase leading-none mt-1">
            {es ? "Cliente de ejemplo" : "Sample customer"}
          </p>
          <p className="font-mono text-[11px] text-muted mt-1">CLI-0042</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { l: es ? "Saldo actual" : "Balance", v: "8,450.00" },
            { l: es ? "Monto pedido" : "Order amount", v: "2,300.00", hl: true },
          ].map((f) => (
            <div key={f.l} className={`border-b-2 pb-1.5 ${f.hl ? "border-azul" : "border-line"}`}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{f.l}</p>
              <p className="font-display font-extrabold text-xl md:text-2xl tabular-nums">{f.v}</p>
            </div>
          ))}
        </div>

        <div>
          <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted mb-1.5">
            <span>{es ? "Uso del límite" : "Credit usage"}</span>
            <span className="text-bone">10,750 / 12,000</span>
          </div>
          <div className="h-3 bg-ink border border-line">
            <div className="h-full bg-azul" style={{ width: "89.6%" }} />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 text-azul font-mono text-[11px]">
            <PiCheckCircle size={16} />
            201 Created
          </span>
          <span className="bg-azul text-ink font-display font-extrabold uppercase text-xs px-5 py-2.5 tracking-wider">
            {es ? "Crear pedido" : "Create order"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CompareSlider() {
  const { language } = useLanguage();
  const es = language === "es";
  const boxRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [touched, setTouched] = useState(false);
  const pos = useMotionValue(100);
  const clip = useTransform(pos, (v) => `inset(0 ${100 - v}% 0 0)`);
  const left = useTransform(pos, (v) => `${v}%`);

  useEffect(() => {
    const controls = animate(pos, 50, { duration: 1.6, delay: 1.1, ease: [0.76, 0, 0.24, 1] });
    return () => controls.stop();
  }, [pos]);

  const setFromEvent = (e: PointerEvent<HTMLDivElement>) => {
    const rect = boxRef.current?.getBoundingClientRect();
    if (!rect) return;
    pos.set(Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100)));
  };

  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    setTouched(true);
    pos.stop();
    setFromEvent(e);
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") pos.set(Math.max(0, pos.get() - 5));
    if (e.key === "ArrowRight") pos.set(Math.min(100, pos.get() + 5));
    setTouched(true);
  };

  return (
    <div className="flex flex-col gap-3">
      <div
        ref={boxRef}
        onPointerDown={onDown}
        onPointerMove={(e) => dragging && setFromEvent(e)}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
        className={`relative h-[440px] md:h-[560px] border border-line overflow-hidden touch-pan-y bg-ink-2 ${
          dragging ? "cursor-grabbing" : "cursor-ew-resize"
        }`}
      >
        <ModernForm es={es} />

        <motion.div className="absolute inset-0" style={{ clipPath: clip }}>
          <LegacyForm es={es} />
        </motion.div>

        <motion.div
          className="absolute top-0 bottom-0 w-px bg-azul z-20 pointer-events-none"
          style={{ left }}
        >
          <div
            role="slider"
            tabIndex={0}
            aria-label={es ? "Comparar legacy y moderno" : "Compare legacy and modern"}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={onKey}
            className="pointer-events-auto absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 h-12 w-12 bg-azul text-ink flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-bone"
          >
            <PiArrowsLeftRight size={22} />
          </div>
        </motion.div>

        <span className="absolute left-3 bottom-12 z-10 bg-forge text-ink font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 pointer-events-none">
          Legacy / Oracle Forms 11g
        </span>
        <span className="absolute right-3 top-12 z-10 bg-azul text-ink font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 pointer-events-none">
          Modern / Next.js + FastAPI
        </span>

        {!touched && (
          <span className="absolute left-1/2 -translate-x-1/2 bottom-4 z-30 bg-ink text-bone border border-line font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 pointer-events-none animate-pulse">
            {es ? "Arrastra para comparar" : "Drag to compare"}
          </span>
        )}
      </div>
      <p className="font-mono text-[11px] text-muted uppercase tracking-widest flex items-center gap-2">
        <span className="h-px w-8 bg-muted" />
        {es ? "Misma regla de negocio, dos épocas: validar el límite de crédito" : "Same business rule, two eras: credit limit validation"}
      </p>
    </div>
  );
}
