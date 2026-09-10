import { personal, social } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border-soft px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-semibold tracking-wide text-ink">
            {personal.shortName.toUpperCase()}
          </p>
          <p className="mono mt-1 text-[10.5px] tracking-wide text-ink-faint">
            CYBERSECURITY × SOFTWARE ENGINEERING × AI
          </p>
        </div>
        <p className="max-w-sm text-left text-[13px] text-ink-faint sm:text-right">
          Securing systems. Engineering software. Exploring smarter solutions.
        </p>
      </div>
      <div className="mono mx-auto mt-6 flex max-w-6xl flex-wrap items-center justify-between gap-2 border-t border-border-soft pt-4 text-[10.5px] text-ink-faint">
        <span>© {year} {personal.name}</span>
        <a href={social.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
          {social.github.replace("https://", "")}
        </a>
      </div>
    </footer>
  );
}
