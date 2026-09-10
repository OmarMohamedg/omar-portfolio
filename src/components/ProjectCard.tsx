import { motion } from "framer-motion";
import { ArrowUpRight, Terminal } from "lucide-react";
import type { Project } from "../types";

const STATUS_TONE: Record<Project["status"], string> = {
  Active: "text-signal",
  Completed: "text-ok",
  "In Progress": "text-warn",
};

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <motion.div
      layoutId={`project-${project.id}`}
      className="group relative flex flex-col border border-border bg-surface p-6 transition-colors hover:border-signal-dim"
    >
      {/* scan line, on hover only */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-signal opacity-0 group-hover:opacity-100"
        initial={false}
        whileHover={{ top: ["0%", "100%"] }}
        transition={{ duration: 1.1, ease: "linear", repeat: Infinity }}
        style={{ top: 0 }}
      />

      <div className="mono mb-4 flex items-center justify-between text-[11px] tracking-wide text-ink-faint">
        <span>{project.caseNumber}</span>
        <span className={STATUS_TONE[project.status]}>● {project.status.toUpperCase()}</span>
      </div>

      <h3 className="font-display text-xl font-semibold text-ink">{project.title}</h3>
      <p className="mono mt-1 text-[11px] tracking-wide text-signal">{project.domain}</p>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-dim">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span key={tech} className="mono border border-border-soft px-2 py-0.5 text-[10.5px] text-ink-faint">
            {tech}
          </span>
        ))}
      </div>

      <div className="mono mt-5 border-t border-border-soft pt-3 text-[11px] text-ink-faint">
        SECURITY FOCUS <span className="text-ink-dim">— {project.securityFocus}</span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <button
          onClick={onOpen}
          data-cursor-hover
          className="mono flex items-center gap-1.5 text-[12px] tracking-wide text-ink transition-colors hover:text-signal"
        >
          Open case file <ArrowUpRight size={14} />
        </button>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            aria-label={`${project.title} on GitHub`}
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <Terminal size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
