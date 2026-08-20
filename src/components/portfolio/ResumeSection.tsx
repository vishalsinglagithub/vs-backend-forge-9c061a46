"use client";

import { motion } from "motion/react";
import { Download, FileText } from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import resumePreview from "@/assets/resume-preview.jpg.asset.json";
import { Reveal, SectionHeading } from "./motion-primitives";

export function ResumeSection() {
  return (
    <section id="resume" className="relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Resume"
          title="Full resume, one click away"
          description="Java • Spring Boot backend engineering experience, skills, and education in a single PDF."
        />

        <Reveal>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="gradient-border glass grid items-center gap-8 rounded-3xl p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-secondary/40">
              <a
                href={resumeAsset.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group block overflow-hidden"
                aria-label="Open Vishal Singla's resume PDF in a new tab"
              >
                <motion.img
                  src={resumePreview.url}
                  alt="Preview of Vishal Singla's Java backend developer resume"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
                  className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </a>
              <a
                href={resumeAsset.url}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-2 border-t border-border py-3 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <FileText className="h-3.5 w-3.5" />
                Open full PDF in a new tab
              </a>
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold">
                Vishal Singla — Java Backend Developer
              </h3>
              <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
                <li>2 years of production Spring Boot experience</li>
                <li>40+ production REST APIs across multiple modules</li>
                <li>Spring Security & JWT-secured endpoints</li>
                <li>Query optimization with Spring Data JPA and Hibernate</li>
              </ul>
              <a
                href={resumeAsset.url}
                download="Vishal_Singla_Resume.pdf"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-ring hover:brightness-110"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
