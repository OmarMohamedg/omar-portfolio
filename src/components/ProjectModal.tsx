import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Terminal, X } from "lucide-react";
import type { Project } from "../types";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] flex items-start justify-center overflow-y-auto bg-void/85 p-4 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            layoutId={`project-${project.id}`}
            onClick={(e) => e.stopPropagation()}
            className="my-8 w-full max-w-2xl border border-border bg-surface"
          >
            <div className="flex items-start justify-between border-b border-border-soft p-6">
              <div>
                <p className="mono mb-2 text-[11px] tracking-wide text-signal">
                  {project.caseNumber} · {project.domain}
                </p>
                <h2 id="project-modal-title" className="font-display text-2xl font-semibold text-ink">
                  {project.title}
                </h2>
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close project details"
                className="p-1 text-ink-faint transition-colors hover:text-ink"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6 p-6">
              <Field label="Overview" value={project.details.overview} />
              <Field label="Problem" value={project.details.problem} />
              <Field label="Solution" value={project.details.solution} />
              <Field label="Architecture" value={project.details.architecture} />

              <div>
                <FieldLabel>Technologies</FieldLabel>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.details.technologies.map((t) => (
                    <span key={t} className="mono border border-border-soft px-2 py-0.5 text-[10.5px] text-ink-dim">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <FieldLabel>Security Concepts</FieldLabel>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.details.securityConcepts.map((t) => (
                    <span key={t} className="mono border border-signal-dim/50 px-2 py-0.5 text-[10.5px] text-signal">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <FieldLabel>Engineering Decisions</FieldLabel>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-ink-dim">
                  {project.details.engineeringDecisions.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>

              <Field label="Challenges" value={project.details.challenges} />
              <Field label="Lessons Learned" value={project.details.lessonsLearned} />
            </div>

            <div className="flex items-center gap-4 border-t border-border-soft p-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mono flex items-center gap-2 border border-border px-4 py-2 text-[12px] text-ink transition-colors hover:border-signal"
                >
                  <Terminal size={14} /> View Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="mono flex items-center gap-2 border border-border px-4 py-2 text-[12px] text-ink transition-colors hover:border-signal"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <p className="mono text-[11px] tracking-wide text-ink-faint">{children}</p>;
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">{value}</p>
    </div>
  );
}
