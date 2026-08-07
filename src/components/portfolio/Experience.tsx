"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { CERTIFICATIONS, EXPERIENCE_POINTS } from "./data";
import { Reveal, SectionHeading } from "./motion-primitives";

export function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Professional Timeline"
          description="Production backend engineering across Spring Boot modules, secured APIs, and query-level performance work."
        />

        <div className="relative pl-6 sm:pl-10">
          <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-3" />

          <Reveal>
            <div className="relative">
              <span className="absolute -left-6 top-1.5 grid h-6 w-6 place-items-center rounded-full border border-primary/40 bg-background text-primary sm:-left-[2.35rem]">
                <Briefcase className="h-3 w-3" />
              </span>
              <div className="gradient-border glass rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      Software Developer
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">Incedo</p>
                  </div>
                  <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground">
                    June 2024 — Present
                  </span>
                </div>

                <ul className="mt-6 grid gap-3">
                  {EXPERIENCE_POINTS.map((point, i) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      whileHover={{ x: 4 }}
                      className="flex gap-3 rounded-xl border border-border/60 bg-secondary/30 p-3.5 text-sm leading-relaxed text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-6">
            <div className="relative">
              <span className="absolute -left-6 top-1.5 grid h-6 w-6 place-items-center rounded-full border border-accent-blue/40 bg-background text-accent-blue sm:-left-[2.35rem]">
                <GraduationCap className="h-3 w-3" />
              </span>
              <div className="gradient-border glass rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      Bachelor of Engineering — Computer Science
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      J.C. Bose University of Science and Technology, YMCA Faridabad
                    </p>
                  </div>
                  <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground">
                    2021 - 2024
                  </span>
                </div>
                <p className="mt-4 font-mono text-sm text-muted-foreground">
                  CGPA <span className="text-foreground">8.1 / 10</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="font-display text-xl font-semibold">Certifications</h3>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {CERTIFICATIONS.map((cert, i) => (
              <Reveal key={cert} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="gradient-border glass h-full rounded-2xl p-6"
                >
                  <Award className="h-5 w-5 text-primary" />
                  <p className="mt-4 font-display text-base font-semibold">{cert}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
