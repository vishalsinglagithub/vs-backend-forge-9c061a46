"use client";

import { motion } from "motion/react";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { CONTACT } from "./data";
import { Reveal, SectionHeading } from "./motion-primitives";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1000),
});

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const DETAILS = [
  { Icon: MapPin, label: "Location", value: CONTACT.location, href: undefined },
  { Icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  {
    Icon: Phone,
    label: "Phone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  },
  { Icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: CONTACT.linkedin },
];

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: FieldErrors = {};
      for (const issue of result.error.issues) {
        next[String(issue.path[0]) as keyof FieldErrors] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio enquiry from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client with the message ready to send.");
    setValues({ name: "", email: "", message: "" });
  };

  const field =
    "mt-2 w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60";

  return (
    <section id="contact" className="relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build something reliable"
          description="Open to backend engineering roles and collaboration on Java and Spring Boot systems."
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="gradient-border glass rounded-2xl p-6 sm:p-8"
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  maxLength={100}
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder="Your full name"
                  className={field}
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-xs text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={255}
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="you@company.com"
                  className={field}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1000}
                  value={values.message}
                  onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="Tell me about the role or project"
                  className={`${field} resize-y`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-ring hover:brightness-110"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {DETAILS.map(({ Icon, label, value, href }, i) => {
              const inner = (
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="gradient-border glass flex h-full items-center gap-4 rounded-2xl p-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      {label}
                    </span>
                    <span className="mt-1 block text-sm font-medium">{value}</span>
                  </span>
                </motion.div>
              );
              return (
                <Reveal key={label} delay={i * 0.07} direction="left">
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="block"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
