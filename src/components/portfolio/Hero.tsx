"use client";

import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import { CONTACT } from "./data";
import { CodeTerminal } from "./CodeTerminal";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section id="home" className="relative">
      <div className="section-shell grid items-center gap-16 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:pt-44">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Software Developer @ Incedo
          </motion.span>

          <motion.p
            variants={item}
            className="mt-8 font-display text-lg text-muted-foreground"
          >
            Hi, I&apos;m
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-2 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            {["Vishal", "Singla"].map((word, w) => (
              <motion.span
                key={word}
                className="mr-[0.3em] inline-block whitespace-nowrap"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: w * 0.9,
                }}
                whileHover={{ scale: 1.04, transition: { duration: 0.25 } }}
              >
                {word.split("").map((char, i) => {
                  const index = w * 7 + i;
                  return (
                    <motion.span
                      key={`${char}-${i}`}
                      className={`inline-block ${w === 1 ? "text-gradient" : ""}`}
                      initial={{ opacity: 0, y: 34, rotateX: -70, filter: "blur(8px)" }}
                      animate={{
                        opacity: 1,
                        y: [0, -10, 0],
                        rotateX: 0,
                        filter: "blur(0px)",
                      }}
                      transition={{
                        opacity: { duration: 0.6, delay: 0.35 + index * 0.05 },
                        rotateX: { duration: 0.7, delay: 0.35 + index * 0.05 },
                        filter: { duration: 0.6, delay: 0.35 + index * 0.05 },
                        y: {
                          duration: 2.6,
                          repeat: Infinity,
                          repeatDelay: 1.4,
                          delay: 1.1 + index * 0.09,
                          ease: "easeInOut",
                        },
                      }}
                      whileHover={{ scale: 1.14, transition: { duration: 0.2 } }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.span>
            ))}
          </motion.h1>
          <motion.span
            aria-hidden
            className="mt-3 block h-[3px] w-40 origin-left rounded-full"
            style={{ background: "var(--gradient-accent)" }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          />

          <motion.p
            variants={item}
            className="mt-5 font-display text-xl font-medium text-foreground/90 sm:text-2xl"
          >
            Java <span className="text-primary">•</span> Spring Boot Backend Developer
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            Building scalable backend systems, secure REST APIs, and production-ready
            Spring Boot applications with a focus on clean architecture, performance,
            and maintainability.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={resumeAsset.url}
              download="Vishal_Singla_Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-ring hover:brightness-110"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#experience"
              className="gradient-border inline-flex items-center gap-2 rounded-xl bg-secondary/70 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              View Experience
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <div className="flex items-center gap-2">
              {[
                { href: CONTACT.github, Icon: Github, label: "GitHub" },
                { href: CONTACT.linkedin, Icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <CodeTerminal />
      </div>
    </section>
  );
}
