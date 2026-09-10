import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function TerminalTyping({ lines }: { lines: string[] }) {
  const prefersReduced = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState<string[]>([]);

  useEffect(() => {
    if (prefersReduced) return;
    if (lineIndex >= lines.length) return;

    const current = lines[lineIndex];
    if (charIndex <= current.length) {
      const t = window.setTimeout(() => setCharIndex((c) => c + 1), 22);
      return () => clearTimeout(t);
    }

    const pause = window.setTimeout(() => {
      setDone((d) => [...d, current]);
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, 500);
    return () => clearTimeout(pause);
  }, [charIndex, lineIndex, lines, prefersReduced]);

  if (prefersReduced) {
    return (
      <div className="mono space-y-1 text-[12.5px] leading-relaxed text-ink-dim">
        {lines.map((line, i) => (
          <div key={i}>
            <span className="text-signal">$</span> {line}
          </div>
        ))}
      </div>
    );
  }

  const current = lines[lineIndex]?.slice(0, charIndex) ?? "";

  return (
    <div className="mono space-y-1 text-[12.5px] leading-relaxed text-ink-dim">
      {done.map((line, i) => (
        <div key={i}>
          <span className="text-signal">$</span> {line}
        </div>
      ))}
      {lineIndex < lines.length && (
        <div>
          <span className="text-signal">$</span> {current}
          <span className="animate-pulse text-signal">▍</span>
        </div>
      )}
    </div>
  );
}
