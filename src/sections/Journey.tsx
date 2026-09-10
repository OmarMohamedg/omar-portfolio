import { timeline } from "../data/portfolioData";
import { RevealOnScroll, SectionHeading } from "../components/ui";

export default function Journey() {
  return (
    <section id="journey" className="relative px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="06 / 07" kicker="Activity Log" title="Journey" />

        <div className="relative border-l border-border-soft pl-8">
          {timeline.map((entry, i) => (
            <RevealOnScroll key={entry.year} delay={i * 0.06} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[41px] top-1 h-3 w-3 border border-signal bg-base" />
              <div className="mono mb-1 text-[11px] tracking-wide text-signal">{entry.year}</div>
              <h3 className="font-display text-lg font-semibold text-ink">{entry.label}</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {entry.items.map((item) => (
                  <li
                    key={item}
                    className="mono border border-border-soft px-2.5 py-1 text-[11px] text-ink-dim"
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
