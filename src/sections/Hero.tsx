import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { personal } from "../data/portfolioData";
import { BracketPanel, StatusPill } from "../components/ui";
import TerminalTyping from "../components/TerminalTyping";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pb-16 pt-32 sm:px-6 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        {/* Left: identity + headline */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mono mb-6 text-[12px] tracking-wide text-ink-faint"
          >
            {personal.location} · {personal.university}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6 }}
            className="text-balance font-display text-[2.6rem] font-semibold leading-[1.08] text-ink sm:text-6xl lg:text-[3.6rem]"
          >
            {personal.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55 }}
            className="mono mt-4 text-lg text-signal"
          >
            {personal.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.55 }}
            className="mt-6 max-w-lg text-balance text-base leading-relaxed text-ink-dim sm:text-lg"
          >
            {personal.heroStatement}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollToId("projects")}
              data-cursor-hover
              className="group flex items-center gap-2 bg-signal px-5 py-3 text-sm font-medium text-void transition-transform hover:-translate-y-0.5"
            >
              Explore My Work
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollToId("contact")}
              data-cursor-hover
              className="border border-border px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-signal"
            >
              Let's Connect
            </button>
          </motion.div>
        </div>

        {/* Right: command-center panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <BracketPanel className="p-5">
            <div className="mono mb-4 flex items-center justify-between text-[11px] text-ink-faint">
              <span className="tracking-wide">OMAR.SYS — SESSION</span>
              <span className="flex items-center gap-1.5 text-ok">
                <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                ONLINE
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <StatusPill label="SYSTEM STATUS" value="ONLINE" tone="ok" />
              <StatusPill label="ENGINEERING MODE" value="ACTIVE" tone="signal" />
              <StatusPill label="CURRENT FOCUS" value="WEB SECURITY" tone="signal" />
              <StatusPill label="SECURITY LEVEL" value="ADVANCED" tone="warn" />
            </div>

            <div className="mt-4 border-t border-border-soft pt-4">
              <p className="mono mb-2 text-[11px] tracking-wide text-ink-faint">// process.log</p>
              <TerminalTyping
                lines={[
                  "scanning application layer...",
                  "reviewing access control...",
                  "compiling secure build...",
                ]}
              />
            </div>
          </BracketPanel>

          <div className="mono mt-4 flex items-center justify-between text-[11px] text-ink-faint">
            <span>{personal.degree} · {personal.academicLevel}</span>
            <span>{personal.faculty}</span>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToId("about")}
        aria-label="Scroll to About section"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-ink-faint sm:block"
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}
