import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { personal, social, stats } from "../data/portfolioData";

const LINES = [
  `> whoami`,
  `${personal.shortName.toLowerCase().replace(" ", "_")}`,
  `> cat focus.txt`,
  `Cybersecurity, software engineering, and AI.`,
  `> stats --summary`,
  `${stats.projects} projects · ${stats.technologies} technologies · ${stats.certifications} credentials in progress`,
  `> contact --secure`,
  `${social.email}`,
  `> _`,
];

export default function EasterEggTerminal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes("mac");
      const modifier = isMac ? e.metaKey : e.ctrlKey;
      if (modifier && e.shiftKey && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          role="dialog"
          aria-label="Hidden terminal"
          className="fixed bottom-6 right-6 z-[180] w-[min(360px,calc(100vw-3rem))] border border-signal-dim bg-surface shadow-[0_0_30px_rgba(91,143,249,0.15)]"
        >
          <div className="mono flex items-center justify-between border-b border-border-soft px-3 py-2 text-[11px] tracking-wide text-ink-faint">
            <span>hidden-terminal — access granted</span>
            <button onClick={() => setOpen(false)} aria-label="Close terminal" className="text-ink-faint hover:text-ink">
              <X size={14} />
            </button>
          </div>
          <div className="mono max-h-64 overflow-y-auto p-3 text-[12px] leading-relaxed text-ink-dim">
            {LINES.map((line, i) => (
              <div key={i} className={line.startsWith(">") ? "text-signal" : ""}>
                {line}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
