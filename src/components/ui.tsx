import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker: string;
}) {
  return (
    <div className="mb-12 flex items-end justify-between border-b border-border-soft pb-4">
      <div>
        <p className="mono mb-2 text-[11px] tracking-wide text-signal">{kicker}</p>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      </div>
      <span className="mono hidden text-xs text-ink-faint sm:block">{index}</span>
    </div>
  );
}

/** A rectangular panel with corner brackets, evoking a targeting/inspection frame. */
export function BracketPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative border border-border bg-surface/60 ${className}`}>
      <Corner className="left-0 top-0 -translate-x-px -translate-y-px border-l border-t" />
      <Corner className="right-0 top-0 translate-x-px -translate-y-px border-r border-t" />
      <Corner className="bottom-0 left-0 -translate-x-px translate-y-px border-b border-l" />
      <Corner className="bottom-0 right-0 translate-x-px translate-y-px border-b border-r" />
      {children}
    </div>
  );
}

function Corner({ className }: { className: string }) {
  return <span className={`pointer-events-none absolute h-3 w-3 border-signal-dim ${className}`} />;
}

export function StatusPill({ label, value, tone = "ok" }: { label: string; value: string; tone?: "ok" | "signal" | "warn" }) {
  const dot = { ok: "bg-ok", signal: "bg-signal", warn: "bg-warn" }[tone];
  return (
    <div className="mono flex items-center justify-between gap-4 border border-border-soft px-3 py-2 text-[11px]">
      <span className="tracking-wide text-ink-faint">{label}</span>
      <span className="flex items-center gap-1.5 text-ink">
        <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
        {value}
      </span>
    </div>
  );
}

export function RevealOnScroll({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
