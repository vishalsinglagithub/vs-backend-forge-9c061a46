"use client";

import { motion } from "motion/react";
import {
  Braces,
  Database,
  GitBranch,
  KeyRound,
  Leaf,
  Search,
  ShieldCheck,
  TableProperties,
  TerminalSquare,
  type LucideIcon,
} from "lucide-react";
import type { Skill } from "./skills-data";

const ICONS: Record<Skill["motif"], LucideIcon> = {
  code: Braces,
  spring: Leaf,
  shield: ShieldCheck,
  entities: Database,
  mapping: TableProperties,
  query: Search,
  token: KeyRound,
  branch: GitBranch,
  terminal: TerminalSquare,
};

/** Technology-specific micro-animation shown behind/next to the icon. */
export function SkillMotif({
  motif,
  active,
}: {
  motif: Skill["motif"];
  active: boolean;
}) {
  const Icon = ICONS[motif];

  return (
    <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary">
      <MotifLayer motif={motif} active={active} />
      <motion.span
        animate={
          active
            ? motif === "spring"
              ? { rotate: [0, -12, 8, 0], scale: 1.12 }
              : motif === "branch"
                ? { y: [0, -3, 0], scale: 1.12 }
                : { scale: 1.15 }
            : { scale: 1, rotate: 0, y: 0 }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10"
      >
        <Icon className="h-5 w-5" />
      </motion.span>
    </span>
  );
}

function MotifLayer({
  motif,
  active,
}: {
  motif: Skill["motif"];
  active: boolean;
}) {
  const common = "pointer-events-none absolute inset-0 overflow-hidden rounded-xl";

  if (motif === "shield" || motif === "token") {
    return (
      <span className={common}>
        <motion.span
          className="absolute inset-0 rounded-xl border border-primary/50"
          animate={active ? { scale: [1, 1.35], opacity: [0.7, 0] } : { opacity: 0 }}
          transition={{ duration: 1.2, repeat: active ? Infinity : 0 }}
        />
      </span>
    );
  }

  if (motif === "entities" || motif === "mapping") {
    return (
      <span className={common}>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute left-1 h-px w-9 bg-primary/45"
            style={{ top: `${28 + i * 12}%` }}
            animate={active ? { scaleX: [0.2, 1, 0.2] } : { scaleX: 0.4 }}
            transition={{ duration: 1.6, repeat: active ? Infinity : 0, delay: i * 0.18 }}
          />
        ))}
      </span>
    );
  }

  if (motif === "query") {
    return (
      <span className={common}>
        <motion.span
          className="absolute inset-y-0 w-6 bg-gradient-to-r from-transparent via-primary/25 to-transparent"
          animate={active ? { x: ["-40%", "160%"] } : { x: "-60%" }}
          transition={{ duration: 1.4, repeat: active ? Infinity : 0, ease: "easeInOut" }}
        />
      </span>
    );
  }

  if (motif === "terminal" || motif === "code") {
    return (
      <span className={common}>
        <motion.span
          className="absolute bottom-1.5 right-1.5 h-2.5 w-1 bg-primary"
          animate={active ? { opacity: [1, 0, 1] } : { opacity: 0.35 }}
          transition={{ duration: 0.9, repeat: active ? Infinity : 0 }}
        />
      </span>
    );
  }

  return (
    <span className={common}>
      <motion.span
        className="absolute inset-0 rounded-xl"
        style={{ background: "var(--gradient-accent)", opacity: 0.14 }}
        animate={active ? { opacity: [0.1, 0.28, 0.1] } : { opacity: 0 }}
        transition={{ duration: 1.8, repeat: active ? Infinity : 0 }}
      />
    </span>
  );
}
