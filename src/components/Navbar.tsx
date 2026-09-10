import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";
import { personal } from "../data/portfolioData";

const NAV_ITEMS = [
  { id: "home", num: "01", label: "Home" },
  { id: "about", num: "02", label: "About" },
  { id: "skills", num: "03", label: "Skills" },
  { id: "projects", num: "04", label: "Projects" },
  { id: "certifications", num: "05", label: "Certifications" },
  { id: "journey", num: "06", label: "Journey" },
  { id: "contact", num: "07", label: "Contact" },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <nav
          aria-label="Primary"
          className="flex w-full max-w-5xl items-center justify-between border border-border-soft bg-surface/80 px-4 py-2.5 backdrop-blur-md"
        >
          <button
            onClick={() => scrollToId("home")}
            className="mono flex items-center gap-2 text-[13px] tracking-wide text-ink"
            data-cursor-hover
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ok shadow-[0_0_6px_theme(colors.ok)]" />
            {personal.shortName.split(" ")[0].toUpperCase()}.SYS
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToId(item.id)}
                  data-cursor-hover
                  className="mono group relative px-3 py-2 text-[11px] tracking-wide text-ink-dim transition-colors hover:text-ink"
                  aria-current={active === item.id ? "true" : undefined}
                >
                  <span className={active === item.id ? "text-ink" : ""}>
                    <span className="text-ink-faint">{item.num}</span> {item.label.toUpperCase()}
                  </span>
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-[1px] h-[2px] bg-signal"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToId("contact")}
            data-cursor-hover
            className="mono hidden border border-border px-3 py-1.5 text-[11px] tracking-wide text-ink-dim transition-colors hover:border-signal hover:text-ink md:block"
          >
            LET'S CONNECT
          </button>

          <button
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
            className="p-1 text-ink md:hidden"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-void/95 backdrop-blur-sm md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="ml-auto flex h-full w-4/5 max-w-xs flex-col border-l border-border bg-surface p-6"
            >
              <button
                aria-label="Close navigation menu"
                onClick={() => setDrawerOpen(false)}
                className="mb-8 self-end p-1 text-ink"
              >
                <X size={22} />
              </button>
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setDrawerOpen(false);
                        scrollToId(item.id);
                      }}
                      className="mono flex w-full items-baseline gap-3 border-b border-border-soft py-4 text-left text-sm tracking-wide text-ink-dim"
                    >
                      <span className="text-ink-faint">{item.num}</span>
                      <span className="font-display text-base text-ink">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
