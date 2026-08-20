"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "./data";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean,
    ) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.01, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 88;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    setActive(href);
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-2" : "border-b border-transparent py-4"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-[76rem] items-center justify-between px-5"
      >
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label="Vishal Singla — home"
        >
          <span className="gradient-border grid h-10 w-10 place-items-center rounded-xl bg-secondary font-display text-sm font-bold text-primary transition-transform duration-300 group-hover:scale-105">
            VS
          </span>
          <span className="hidden font-display text-sm font-semibold sm:block">
            Vishal Singla
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={scrollTo(link.href)}
                aria-current={active === link.href ? "page" : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-secondary"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={resumeAsset.url}
            download="Vishal_Singla_Resume.pdf"
            className="hidden rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-ring hover:brightness-110 sm:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="mx-5 mt-3 grid gap-1 rounded-2xl border border-border bg-card/95 p-3 backdrop-blur-xl">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={scrollTo(link.href)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
