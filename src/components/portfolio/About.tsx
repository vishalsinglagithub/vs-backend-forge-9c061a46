"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { HIGHLIGHTS } from "./data";
import { Reveal, SectionHeading } from "./motion-primitives";

const PARAGRAPHS = [
  "I am a Java Backend Developer with 2 years of experience designing and developing production-grade backend applications using Java, Spring Boot, Spring Security, Hibernate, Spring Data JPA, and MySQL.",
  "I enjoy solving backend challenges, designing scalable architectures, optimizing database queries, securing REST APIs, and building maintainable enterprise applications.",
  "I have worked on client-facing backend systems, delivering reliable APIs while following Agile development practices and clean architecture principles.",
];

export function About() {
  return (
    <section id="about" className="relative">
      <div className="section-shell">
        <SectionHeading eyebrow="About" title="About Me" />
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            {PARAGRAPHS.map((p, i) => (
              <Reveal key={p} delay={i * 0.1}>
                <p className="text-base leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h} delay={i * 0.07} direction="left">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="gradient-border glass flex h-full items-center gap-3 rounded-xl p-4"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">{h}</span>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
