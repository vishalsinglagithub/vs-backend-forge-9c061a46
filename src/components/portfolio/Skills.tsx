"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { SKILL_CATEGORIES, type Skill } from "./skills-data";
import { SkillMotif } from "./SkillMotif";
import { Reveal, SectionHeading } from "./motion-primitives";

export function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Java + Spring Boot backend specialization"
          description="Organized by how I actually use them in production: backend frameworks, persistence and databases, authentication and security, plus the tooling around them."
        />

        <div className="space-y-14">
          {SKILL_CATEGORIES.map((category, ci) => (
            <div key={category.title}>
              <Reveal delay={ci * 0.05}>
                <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">
                    {category.title}
                  </h3>
                  <span className="h-px flex-1 min-w-8 bg-border" />
                  <p className="font-mono text-[11.5px] text-muted-foreground">
                    {category.blurb}
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill, si) => (
                  <Reveal
                    key={`${category.title}-${skill.name}`}
                    delay={ci * 0.05 + si * 0.09}
                  >
                    <SkillCard skill={skill} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      whileHover={{ scale: 1.025, y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="gradient-border glass h-full rounded-2xl p-6 outline-none transition-shadow duration-300 hover:glow-ring focus-visible:glow-ring"
    >
      <div className="flex items-start gap-3">
        <SkillMotif motif={skill.motif} active={hovered} />
        <div>
          <h4 className="font-display text-base font-semibold">{skill.name}</h4>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {skill.description}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-baseline justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Proficiency
          </span>
          <motion.span
            animate={{ color: hovered ? "var(--primary)" : "var(--muted-foreground)" }}
            className="font-mono text-xs"
          >
            {skill.level}%
          </motion.span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "var(--gradient-accent)" }}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
          />
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          opacity: hovered ? 1 : 0.55,
          height: "auto",
        }}
        className="mt-4"
      >
        <ul className="flex flex-wrap gap-2">
          {skill.highlights.map((h, i) => (
            <motion.li
              key={h}
              animate={{ y: hovered ? 0 : 2, opacity: hovered ? 1 : 0.75 }}
              transition={{ duration: 0.3, delay: hovered ? i * 0.035 : 0 }}
              className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {h}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.article>
  );
}
