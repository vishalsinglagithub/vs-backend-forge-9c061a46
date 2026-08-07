"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT, NAV_LINKS } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-[76rem] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="gradient-border grid h-10 w-10 place-items-center rounded-xl bg-secondary font-display text-sm font-bold text-primary">
              VS
            </span>
            <span className="font-display text-sm font-semibold">Vishal Singla</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Java • Spring Boot Backend Developer building scalable, secure,
            production-ready backend systems.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-semibold">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold">Connect</h2>
          <div className="mt-4 flex items-center gap-2">
            {[
              { href: CONTACT.github, Icon: Github, label: "GitHub" },
              { href: CONTACT.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${CONTACT.email}`, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">{CONTACT.email}</p>
          <p className="text-sm text-muted-foreground">{CONTACT.phone}</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-[76rem] flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Vishal Singla. All rights reserved.</p>
          <p>Designed with ❤️ using React and Next.js</p>
        </div>
      </div>
    </footer>
  );
}
