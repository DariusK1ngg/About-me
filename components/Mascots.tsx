"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { SiFastapi, SiNextdotjs, SiPython, SiReact, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import OracleMark from "./ui/OracleMark";

const ORACLE = "#C74634";
const PYTHON = "#3776AB";
const FASTAPI = "#009688";
const NODE = "#5FA04E";
const POSTGRES = "#4169E1";
const NEXT = "#FFFFFF";
const REACT = "#61DAFB";
const TS = "#3178C6";

type Spot = "top" | "hang" | "inside" | "wedge";
type Pose = "stand" | "hang" | "seated";

interface Member {
  slot: string;
  color: string;
  logo: ReactNode;
  letter: number;
  spot: Spot;
  fx: number;
  eyeY?: number;
  limbs?: Record<string, string>;
}

// Letras: D0 A1 R2 I3 O4 / A5 V6 A7 L8 O9 S10
const crew: Member[] = [
  { slot: "oracle-forms", color: ORACLE, logo: <OracleMark size={44} />, letter: 0, spot: "top", fx: 0.42, eyeY: 25 },
  {
    slot: "plsql",
    color: ORACLE,
    logo: (
      <span className="m-badge">
        PL
        <br />
        SQL
      </span>
    ),
    letter: 3,
    spot: "hang",
    fx: 0.86,
    eyeY: 4,
  },
  { slot: "python", color: PYTHON, logo: <SiPython size={42} style={{ fill: "url(#m-python)" }} />, letter: 2, spot: "top", fx: 0.4 },
  { slot: "nextjs", color: NEXT, logo: <SiNextdotjs size={42} />, letter: 9, spot: "inside", fx: 0.5 },
  { slot: "fastapi", color: FASTAPI, logo: <SiFastapi size={42} />, letter: 4, spot: "top", fx: 0.5 },
  { slot: "oracle-reports", color: ORACLE, logo: <OracleMark size={44} />, letter: 5, spot: "top", fx: 0.5, eyeY: 25 },
  { slot: "react", color: REACT, logo: <SiReact size={44} />, letter: 1, spot: "top", fx: 0.5, eyeY: 17 },
  { slot: "postgres", color: POSTGRES, logo: <BiLogoPostgresql size={46} />,
    letter: 10,
    spot: "top",
    fx: 0.5,
    limbs: { "--ax": "6px", "--ay": "18px", "--lt": "33px" },
  },
  { slot: "typescript", color: TS, logo: <SiTypescript size={40} />, letter: 8, spot: "hang", fx: 0.34, eyeY: 8 },
  { slot: "node", color: NODE, logo: <FaNodeJs size={44} />, letter: 6, spot: "wedge", fx: 0.5 },
];

const N = crew.length;
const W0 = 52;
const H0 = 60;
const PREP = 110;

// Proporciones aproximadas del titular (line-height 0.85)
const CAP_TOP = 0.065;
const BASELINE = 0.757;

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const frac = (v: number) => v - Math.floor(v);

function bounce(t: number) {
  const n = 7.5625;
  const d = 2.75;
  if (t < 1 / d) return n * t * t;
  if (t < 2 / d) return n * (t -= 1.5 / d) * t + 0.75;
  if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + 0.9375;
  return n * (t -= 2.625 / d) * t + 0.984375;
}

interface Pt {
  x: number;
  y: number;
  k: number;
  pose: Pose;
}

type Perch = { kind: "letter" } | { kind: "el"; el: Element; j: number } | { kind: "slot"; el: Element };

export default function Mascots() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>(".mascot"));
    const cache = new Map<Element, DOMRect>();
    const mouse = { x: -1, y: -1 };
    const start = performance.now();
    let letters: Element[] = [];
    let routes: Perch[][] = [];
    let built = false;
    let raf = 0;

    const st = els.map((_, i) => ({
      idx: 0,
      jumping: false,
      from: 0,
      to: 0,
      t0: 0,
      dur: 0,
      h: 0,
      wait: 0,
      drag: null as { dx: number; dy: number; cx: number; cy: number } | null,
      free: null as Pt | null,
      cur: { x: 0, y: 0, k: 1, pose: "stand" } as Pt,
      tilt: 0,
      landAt: 0,
      introAt: 0,
      nextHop: start + 5000 + Math.random() * 8000,
      glance: 0,
      glanceAt: 0,
      lx: 0,
      ly: 0,
      tf: "",
      state: "",
      op: -1,
      thr: 0.6 + 0.2 * frac(i * 0.618),
    }));

    document.documentElement.classList.add("has-mascots");

    const rect = (el: Element) => {
      let r = cache.get(el);
      if (!r) {
        r = el.getBoundingClientRect();
        cache.set(el, r);
      }
      return r;
    };

    const build = () => {
      letters = Array.from(document.querySelectorAll("[data-letter]"));
      const perches = Array.from(document.querySelectorAll("[data-perch]"))
        .map((el) => ({ el, r: el.getBoundingClientRect() }))
        .filter((p) => p.r.width > 0)
        .sort((a, b) => a.r.top - b.r.top);

      routes = crew.map((m, i) => {
        const route: Perch[] = [];
        if (letters.length > m.letter) route.push({ kind: "letter" });
        perches.forEach((p, j) => {
          const every = p.r.width >= 320 ? 2 : 4;
          if ((i + j) % every === 0) route.push({ kind: "el", el: p.el, j });
        });
        const slot = document.querySelector(`[data-mascot-slot="${m.slot}"]`);
        if (slot) route.push({ kind: "slot", el: slot });
        return route;
      });
      built = false;
    };

    const point = (i: number, idx: number, S: number, mobile: boolean): Pt => {
      const p = routes[i][idx];
      const m = crew[i];

      if (p.kind === "letter") {
        const r = rect(letters[m.letter]);
        const F = r.height / 0.85;
        const capTop = r.top + S + F * CAP_TOP;
        const k = clamp(F / 180, 0.5, 1);
        const x = r.left + r.width * m.fx;
        if (m.spot === "hang") return { x: x + 31 * k, y: capTop + (H0 + 3) * k, k, pose: "hang" };
        if (m.spot === "inside") return { x, y: r.top + S + F * (BASELINE - 0.17), k: k * 0.78, pose: "stand" };
        if (m.spot === "wedge") return { x, y: capTop + F * 0.3, k, pose: "stand" };
        return { x, y: capTop + 2, k, pose: "stand" };
      }

      const r = rect(p.el);
      if (p.kind === "slot") return { x: r.left + r.width / 2, y: r.bottom + S - 1, k: r.width / W0, pose: "seated" };

      const k = mobile ? 0.62 : 0.85;
      const pad = Math.min(26, r.width / 2);
      const fx = 0.06 + 0.88 * frac(i * 0.618 + p.j * 0.377);
      return { x: clamp(r.left + r.width * fx, r.left + pad, r.right - pad), y: r.top + S + 3, k, pose: "stand" };
    };

    const pick = (i: number, cur: number, S: number, H: number, mobile: boolean) => {
      const route = routes[i];
      const last = route.length - 1;
      const thr = st[i].thr;
      const gate = 30 + i * 22;
      const hasLetter = route[0].kind === "letter";
      const vy = (j: number) => point(i, j, S, mobile).y - S;

      if (hasLetter && S < gate - 15) return 0;

      let c = cur;
      while (c < last) {
        if (c === 0 && hasLetter && S < gate) break;
        const ny = vy(c + 1);
        if (ny < H * thr || (vy(c) < 70 && ny < H)) c++;
        else break;
      }
      while (c > 0 && vy(c) > H * (thr + 0.2)) c--;
      return c;
    };

    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("resize", build);
    build();

    const cleanups = els.map((el, i) => {
      const s = st[i];
      const down = (e: PointerEvent) => {
        if (s.op < 1) return;
        e.preventDefault();
        el.setPointerCapture(e.pointerId);
        s.drag = { dx: s.cur.x - e.clientX, dy: s.cur.y - window.scrollY - e.clientY, cx: e.clientX, cy: e.clientY };
        s.jumping = false;
        s.free = null;
        el.classList.add("dragging");
      };
      const move = (e: PointerEvent) => {
        if (!s.drag) return;
        s.drag.cx = e.clientX;
        s.drag.cy = e.clientY;
      };
      const up = () => {
        if (!s.drag) return;
        s.drag = null;
        el.classList.remove("dragging");
        const mobile = window.innerWidth < 640;
        const want = pick(i, s.idx, window.scrollY, window.innerHeight, mobile);
        const b = point(i, want, window.scrollY, mobile);
        const dist = Math.hypot(b.x - s.cur.x, b.y - s.cur.y);
        s.free = { ...s.cur };
        s.jumping = true;
        s.from = want;
        s.to = want;
        s.t0 = performance.now() - PREP;
        s.dur = clamp(320 + dist / 1.5, 360, 800);
        s.h = clamp(dist * 0.3, 26, 170);
        s.wait = 0;
      };
      el.addEventListener("pointerdown", down);
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerup", up);
      el.addEventListener("pointercancel", up);
      return () => {
        el.removeEventListener("pointerdown", down);
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerup", up);
        el.removeEventListener("pointercancel", up);
      };
    });

    const frame = (now: number) => {
      cache.clear();
      const W = window.innerWidth;
      const H = window.innerHeight;
      const S = window.scrollY;
      const mobile = W < 640;

      for (let i = 0; i < N; i++) {
        const el = els[i];
        const s = st[i];
        const route = routes[i];
        if (!route || route.length === 0) continue;

        if (!built) {
          s.idx = pick(i, 0, S, H, mobile);
          s.jumping = false;
          if (s.op < 0) s.introAt = s.idx === 0 ? start + 1700 + i * 110 : start;
        }

        if (!s.jumping && !s.drag) {
          const want = pick(i, s.idx, S, H, mobile);
          if (want !== s.idx) {
            if (!s.wait) s.wait = now + Math.random() * 260;
            else if (now >= s.wait) {
              const a = point(i, s.idx, S, mobile);
              const b = point(i, want, S, mobile);
              const dist = Math.hypot(b.x - a.x, b.y - a.y);
              s.jumping = true;
              s.from = s.idx;
              s.to = want;
              s.t0 = now;
              s.dur = clamp(320 + dist / 1.5, 360, 800);
              s.h = clamp(dist * 0.3, 26, 170);
              s.wait = 0;
            }
          } else {
            s.wait = 0;
            if (now > s.nextHop) {
              s.nextHop = now + 4000 + Math.random() * 9000;
              const pose = point(i, s.idx, S, mobile).pose;
              if (pose === "stand" && now > s.introAt + 900) {
                s.jumping = true;
                s.free = null;
                s.from = s.idx;
                s.to = s.idx;
                s.t0 = now;
                s.dur = 300;
                s.h = 12;
              }
            }
          }
        }

        let p: Pt;
        let sx = 1;
        let sy = 1;
        let rot = 0;
        let state: string;
        let dir = 0;
        let air = -1;

        if (s.drag) {
          const x = s.drag.cx + s.drag.dx;
          s.tilt += (clamp((x - s.cur.x) * 1.6, -28, 28) - s.tilt) * 0.2;
          p = { x, y: s.drag.cy + S + s.drag.dy, k: s.cur.k, pose: "stand" };
          rot = s.tilt;
          state = "jump";
        } else if (s.jumping) {
          const a = s.free ?? point(i, s.from, S, mobile);
          const b = point(i, s.to, S, mobile);
          dir = Math.sign(b.x - a.x);
          const t = (now - s.t0 - PREP) / s.dur;
          if (t < 0) {
            const q = 1 + t * (s.dur / PREP);
            p = a;
            state = a.pose;
            if (a.pose !== "hang") {
              sy = 1 - 0.22 * q;
              sx = 1 + 0.14 * q;
            }
          } else if (t >= 1) {
            s.jumping = false;
            s.free = null;
            s.idx = s.to;
            s.landAt = now;
            p = b;
            state = b.pose;
          } else {
            const e = t * 0.5 + t * t * (3 - 2 * t) * 0.5;
            const arc = Math.sin(Math.PI * t);
            p = { x: lerp(a.x, b.x, e), y: lerp(a.y, b.y, e) - s.h * 4 * t * (1 - t), k: lerp(a.k, b.k, e), pose: "stand" };
            sy = 1 + 0.14 * arc;
            sx = 1 - 0.07 * arc;
            rot = dir * 12 * (1 - 2 * t);
            state = "jump";
            air = t;
          }
        } else {
          p = point(i, s.idx, S, mobile);
          state = p.pose;
          const q = (now - s.landAt) / 260;
          if (q < 1 && p.pose !== "hang") {
            const amp = (1 - q) * (1 - q) * Math.cos(q * 5);
            sy = 1 - 0.22 * amp;
            sx = 1 + 0.15 * amp;
          }
        }

        let y = p.y;
        let op = 1;
        if (now < s.introAt) op = 0;
        else {
          const q = (now - s.introAt) / 650;
          if (q < 1) {
            y -= (1 - bounce(q)) * 150;
            op = Math.min(1, q * 6);
          }
        }

        s.cur = { x: p.x, y, k: p.k, pose: p.pose };

        if (state !== s.state) {
          s.state = state;
          el.dataset.state = state;
        }

        let tx = 0;
        let ty = 0;
        if (air >= 0) {
          tx = dir * 2;
          ty = air < 0.5 ? -1.5 : 1.5;
        } else {
          const dx = mouse.x - p.x;
          const dy = mouse.y + S - (y - 30 * p.k);
          const d = Math.hypot(dx, dy);
          if (mouse.x >= 0 && d < 280 && d > 1) {
            tx = (dx / d) * 2;
            ty = (dy / d) * 1.5;
          } else {
            if (now > s.glanceAt) {
              s.glanceAt = now + 1400 + Math.random() * 2800;
              s.glance = Math.round(Math.random() * 2 - 1) * 2;
            }
            tx = s.glance;
          }
        }
        const lx = s.lx + (tx - s.lx) * 0.18;
        const ly = s.ly + (ty - s.ly) * 0.18;
        if (Math.abs(lx - s.lx) > 0.02 || Math.abs(ly - s.ly) > 0.02) {
          s.lx = lx;
          s.ly = ly;
          el.style.setProperty("--lx", `${lx.toFixed(2)}px`);
          el.style.setProperty("--ly", `${ly.toFixed(2)}px`);
        }

        const tf = `translate3d(${(p.x - W0 / 2).toFixed(1)}px, ${(y - H0).toFixed(1)}px, 0) rotate(${rot.toFixed(1)}deg) scale(${(p.k * sx).toFixed(3)}, ${(p.k * sy).toFixed(3)})`;
        if (tf !== s.tf) {
          s.tf = tf;
          el.style.transform = tf;
        }
        if (op !== s.op) {
          s.op = op;
          el.style.opacity = String(op);
        }
      }

      built = true;
      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      cleanups.forEach((fn) => fn());
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", build);
      document.documentElement.classList.remove("has-mascots");
    };
  }, []);

  return (
    <div ref={rootRef} aria-hidden className="absolute left-0 top-0 h-0 w-full z-40 pointer-events-none">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="m-python" x1="0" y1="0" x2="1" y2="1">
            <stop offset="50%" stopColor="#3776AB" />
            <stop offset="50%" stopColor="#FFD43B" />
          </linearGradient>
        </defs>
      </svg>
      {crew.map((c, i) => (
        <div key={c.slot} className="mascot" data-state="stand" style={{ "--c": c.color, ...c.limbs,"--bd": `${-i * 0.7}s` } as CSSProperties}>
          <div className="m-inner">
            <i className="m-arm l" />
            <i className="m-arm r" />
            <i className="m-leg l" />
            <i className="m-leg r" />
            <div className="m-body">
              <div className="m-logo">{c.logo}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
