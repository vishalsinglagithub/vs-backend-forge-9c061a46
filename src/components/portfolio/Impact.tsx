"use client";

import { motion } from "motion/react";
import { COUNTERS } from "./data";
import { Counter, Reveal, SectionHeading } from "./motion-primitives";

export function Impact() {
  return (
    <section id="projects" className="relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Engineering Impact"
          title="Production numbers, not side projects"
          description="Measured outcomes delivered on client-facing Spring Boot systems at Incedo."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTERS.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="gradient-border glass h-full rounded-2xl p-7"
              >
                <Counter
                  value={c.value}
                  suffix={c.suffix}
                  className="font-display text-4xl font-bold text-gradient sm:text-5xl"
                />
                <p className="mt-3 text-sm text-muted-foreground">{c.label}</p>
              </motion.div>
            </Reveal>
          ))}

          <Reveal delay={0.35}>
            <div className="gradient-border glass h-full rounded-2xl p-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Response time
              </p>
              <p className="mt-3 font-display text-3xl font-bold">
                1.4s <span className="text-muted-foreground">→</span>{" "}
                <span className="text-gradient">0.8s</span>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Achieved by optimizing Spring Data JPA and Hibernate queries.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
