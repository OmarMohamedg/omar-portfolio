import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { stats } from "../data/portfolioData";

const ITEMS = [
  { key: "projects", label: "Projects" },
  { key: "certifications", label: "Certifications" },
  { key: "technologies", label: "Technologies" },
  { key: "securityDomains", label: "Security Domains" },
] as const;

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReduced = useReducedMotion();
  const [display, setDisplay] = useState(prefersReduced ? value : 0);

  useEffect(() => {
    if (!inView || prefersReduced) return;
    const duration = 800;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, prefersReduced]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold text-ink sm:text-5xl">
      {display}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative border-y border-border-soft px-4 py-14 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="text-center sm:text-left"
          >
            <Counter value={stats[item.key]} />
            <p className="mono mt-1 text-[11px] tracking-wide text-ink-faint">{item.label.toUpperCase()}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
