"use client";

import { motion } from "motion/react";
import { Download, FileText } from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";
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
              <object
                data={`${resumeAsset.url}#toolbar=0&view=FitH`}
                type="application/pdf"
                aria-label="Resume preview of Vishal Singla"
                className="h-[380px] w-full"
              >
                <div className="grid h-[380px] place-items-center p-6 text-center">
                  <div>
                    <FileText className="mx-auto h-8 w-8 text-primary" />
                    <p className="mt-3 text-sm text-muted-foreground">
                      Preview unavailable in this browser — download the PDF below.
                    </p>
                  </div>
                </div>
              </object>
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
