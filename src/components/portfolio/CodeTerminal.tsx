"use client";

import { motion } from "motion/react";
import { Database, Server, ShieldCheck } from "lucide-react";

const LINES = [
  { t: "@RestController", c: "text-primary" },
  { t: '@RequestMapping("/api/v1/orders")', c: "text-accent-blue" },
  { t: "public class OrderController {", c: "text-foreground" },
  { t: "  @GetMapping(\"/{id}\")", c: "text-primary" },
  { t: "  @PreAuthorize(\"hasRole('USER')\")", c: "text-accent-blue" },
  { t: "  public ResponseEntity<OrderDTO> get(", c: "text-foreground" },
  { t: "      @PathVariable Long id) {", c: "text-foreground" },
  { t: "    return ok(service.findById(id));", c: "text-muted-foreground" },
  { t: "  }", c: "text-foreground" },
  { t: "}", c: "text-foreground" },
];

const FLOW = [
  { Icon: Server, label: "Spring Boot", detail: "Service layer" },
  { Icon: ShieldCheck, label: "Spring Security", detail: "JWT filter chain" },
  { Icon: Database, label: "MySQL", detail: "JPA / Hibernate" },
];

export function CodeTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 6 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="gradient-border glass relative overflow-hidden rounded-2xl"
      >
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-blue/70" />
          <span className="ml-2 font-mono text-[11px] text-muted-foreground">
            OrderController.java
          </span>
        </div>

        <div className="space-y-1.5 px-4 py-5 font-mono text-[11.5px] leading-relaxed sm:text-xs">
          {LINES.map((line, i) => (
            <motion.div
              key={line.t}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.09, duration: 0.4 }}
              className="flex gap-4"
            >
              <span className="w-4 shrink-0 select-none text-right text-muted-foreground/40">
                {i + 1}
              </span>
              <span className={`${line.c} whitespace-pre`}>{line.t}</span>
            </motion.div>
          ))}
          <motion.span
            className="ml-8 inline-block h-3.5 w-1.5 bg-primary align-middle"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          />
        </div>

        <div className="border-t border-border px-4 py-4">
          <div className="flex items-center justify-between font-mono text-[11px] text-muted-foreground">
            <span>GET /api/v1/orders/42</span>
            <span className="rounded-md bg-primary/15 px-2 py-0.5 text-primary">
              200 OK · 0.8s
            </span>
          </div>
          <div className="relative mt-3 h-px w-full bg-border">
            <motion.span
              className="absolute -top-[3px] h-1.5 w-1.5 rounded-full bg-primary"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {FLOW.map(({ Icon, label, detail }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.15, duration: 0.5 }}
                className="rounded-xl border border-border bg-secondary/40 p-3"
              >
                <Icon className="h-4 w-4 text-primary" />
                <p className="mt-2 text-xs font-semibold">{label}</p>
                <p className="font-mono text-[10px] text-muted-foreground">{detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
