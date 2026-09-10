import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const STEPS = ["Loading grid", "Activating nodes", "Initializing status", "Connecting modules"];

export default function BootSequence({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setVisible(false);
      onDone();
      return;
    }

    const stepDuration = 350;
    const timers = STEPS.map((_, i) =>
      window.setTimeout(() => setStep(i + 1), stepDuration * (i + 1)),
    );
    const end = window.setTimeout(() => {
      setVisible(false);
      onDone();
    }, stepDuration * STEPS.length + 200);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(end);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-base"
        >
          <div className="w-72 select-none">
            <div className="mono mb-4 flex items-center justify-between text-[11px] tracking-wider text-ink-faint">
              <span>SYSTEM BOOT</span>
              <span>{Math.min(100, Math.round((step / STEPS.length) * 100))}%</span>
            </div>
            <div className="h-px w-full bg-border">
              <motion.div
                className="h-full bg-signal"
                initial={{ width: "0%" }}
                animate={{ width: `${(step / STEPS.length) * 100}%` }}
                transition={{ ease: "easeOut", duration: 0.3 }}
              />
            </div>
            <div className="mono mt-4 space-y-1 text-[11px] text-ink-faint">
              {STEPS.map((s, i) => (
                <div key={s} className={i < step ? "text-signal" : ""}>
                  {i < step ? "✓" : "·"} {s}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
