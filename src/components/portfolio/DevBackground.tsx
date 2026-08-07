"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

const FLOATERS = [
  { text: "@RestController", x: "8%", y: "18%", d: 0 },
  { text: "GET /api/v1/orders  200 OK", x: "68%", y: "12%", d: 1.2 },
  { text: "@Transactional", x: "78%", y: "62%", d: 2.1 },
  { text: "SELECT * FROM users", x: "12%", y: "72%", d: 0.7 },
  { text: "JWT · Bearer", x: "44%", y: "84%", d: 1.7 },
  { text: "@SpringBootApplication", x: "52%", y: "36%", d: 2.6 },
];

const NODES = [
  { cx: 120, cy: 160 },
  { cx: 420, cy: 90 },
  { cx: 760, cy: 220 },
  { cx: 300, cy: 380 },
  { cx: 640, cy: 460 },
  { cx: 980, cy: 340 },
];

export function DevBackground() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });
  const slowX = useTransform(sx, (v) => v * 0.5);
  const slowY = useTransform(sy, (v) => v * 0.5);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 40);
      my.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 12%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 12%) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(circle at 50% 30%, #000 20%, transparent 78%)",
        }}
      />

      <motion.svg
        style={{ x: slowX, y: slowY }}
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        viewBox="0 0 1100 560"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="oklch(0.546 0.245 262.9 / 40%)" strokeWidth="1" fill="none">
          <path d="M120 160 L420 90 L760 220 L980 340" />
          <path d="M120 160 L300 380 L640 460 L980 340" />
          <path d="M420 90 L640 460" />
        </g>
        {[0, 1, 2].map((i) => (
          <circle key={i} r="3.2" fill="oklch(0.705 0.187 47.6)" opacity="0.9">
            <animateMotion
              dur="6s"
              begin={`${i * 2}s`}
              repeatCount="indefinite"
              path={
                i === 1
                  ? "M120 160 L300 380 L640 460 L980 340"
                  : i === 2
                    ? "M420 90 L640 460"
                    : "M120 160 L420 90 L760 220 L980 340"
              }
            />
          </circle>
        ))}
        {NODES.map((n, i) => (
          <g key={n.cx} transform={`translate(${n.cx} ${n.cy})`}>
            <motion.circle
              r="6"
              fill="oklch(0.19 0.022 268)"
              stroke="oklch(0.705 0.187 47.6 / 60%)"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.6 }}
            />
            <motion.circle
              r="14"
              fill="none"
              stroke="oklch(0.705 0.187 47.6 / 25%)"
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{ scale: [0.5, 1.6], opacity: [0.5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.5 }}
            />
          </g>
        ))}

      </motion.svg>

      <motion.div style={{ x: sx, y: sy }} className="absolute inset-0">
        {FLOATERS.map((f) => (
          <motion.span
            key={f.text}
            className="absolute font-mono text-[11px] tracking-tight text-muted-foreground/35 sm:text-xs"
            style={{ left: f.x, top: f.y }}
            animate={{ y: [0, -16, 0], opacity: [0.25, 0.6, 0.25] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: f.d,
              ease: "easeInOut",
            }}
          >
            {f.text}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="absolute -left-24 top-1/3 h-72 w-72 rounded-full blur-[120px]"
        style={{ background: "oklch(0.705 0.187 47.6 / 22%)" }}
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full blur-[130px]"
        style={{ background: "oklch(0.546 0.245 262.9 / 20%)" }}
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
