import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsFinePointer } from "../hooks/useIsFinePointer";

/**
 * A minimal ring-and-dot cursor. It expands into a bracket-style target
 * over interactive elements, and briefly shows a horizontal scan line —
 * a nod to the security-panel theme without becoming a gimmick.
 */
export default function CustomCursor() {
  const isFine = useIsFinePointer();
  const [isPointer, setIsPointer] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const visibleRef = useRef(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!isFine) return;

    document.documentElement.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
      const target = e.target as HTMLElement;
      setIsPointer(Boolean(target.closest("a, button, [role='button'], input, textarea, [data-cursor-hover]")));
    };

    const down = () => setIsDown(true);
    const up = () => setIsDown(false);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [isFine, x, y]);

  if (!isFine) return null;

  const size = isPointer ? 44 : isDown ? 14 : 20;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[999] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.div
        animate={{ width: size, height: size, borderRadius: isPointer ? 4 : 999 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="border border-ink"
        style={{ borderColor: "#e7eaf0" }}
      />
    </motion.div>
  );
}
