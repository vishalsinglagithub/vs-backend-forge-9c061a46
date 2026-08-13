"use client";

import { motion } from "motion/react";
import {
  Boxes,
  Braces,
  Brain,
  Database,
  Layers,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { STACK_GROUPS, SKILL_LEVELS } from "./data";
import { Reveal, SectionHeading } from "./motion-primitives";

const ICONS: Record<string, LucideIcon> = {
  Languages: Braces,
  Frameworks: Layers,
  Databases: Database,
  Tools: Wrench,
  Concepts: Boxes,
  "AI Tools": Brain,
};

export function TechStack() {
  return (
    <section id="stack" className="relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I build backends with"
          description="A production-focused toolkit across Java, the Spring ecosystem, relational data, and modern AI-assisted development."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STACK_GROUPS.map((group, gi) => {
            const Icon = ICONS[group.title] ?? Boxes;
            return (
              <Reveal key={group.title} delay={gi * 0.06}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="gradient-border glass group h-full rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/12 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-base font-semibold">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1.5 font-mono text-[11.5px] text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {SKILL_LEVELS.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.05}>
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "var(--gradient-accent)" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
