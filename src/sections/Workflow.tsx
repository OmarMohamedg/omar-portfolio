import { motion } from "framer-motion";
import { workflowStages } from "../data/portfolioData";

export default function Workflow() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="mono mb-10 text-center text-[11px] tracking-wide text-ink-faint">
          ENGINEERING WORKFLOW
        </p>

        <div className="relative grid gap-6 sm:grid-cols-5 sm:gap-0">
          <div className="absolute left-0 right-0 top-[22px] hidden h-px bg-border sm:block" />

          {workflowStages.map((stage, i) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative flex flex-col items-start sm:items-center sm:px-3 sm:text-center"
            >
              <div className="relative z-10 flex h-11 w-11 items-center justify-center border border-signal-dim bg-surface">
                <span className="mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-display mt-3 text-base font-semibold text-ink">{stage.label}</h3>
              <p className="mt-1.5 max-w-[190px] text-[13px] leading-relaxed text-ink-faint">
                {stage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
