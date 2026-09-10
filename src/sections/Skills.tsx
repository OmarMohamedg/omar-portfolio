import { skillGroups } from "../data/portfolioData";
import { RevealOnScroll, SectionHeading } from "../components/ui";

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03 / 07" kicker="Security Arsenal" title="Technical Skills" />

        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <RevealOnScroll key={group.category} delay={i * 0.04} className="bg-surface p-6">
              <div className="mb-4 flex items-baseline justify-between">
                <h3 className="font-display text-lg font-semibold text-ink">{group.category}</h3>
                <span className="mono text-[11px] text-ink-faint">{String(group.items.length).padStart(2, "0")}</span>
              </div>
              <p className="mono mb-4 text-[11px] tracking-wide text-ink-faint">{group.description}</p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="mono border border-border-soft px-2.5 py-1 text-[11.5px] text-ink-dim transition-colors hover:border-signal-dim hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
