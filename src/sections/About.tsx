import { aboutIntro, personal, profileFacts } from "../data/portfolioData";
import { BracketPanel, RevealOnScroll, SectionHeading } from "../components/ui";
import portrait from "../assets/omar-photo.jpg";

const FACT_ROWS: Array<[string, string]> = [
  ["IDENTITY", profileFacts.identity],
  ["ROLE", profileFacts.role],
  ["SPECIALIZATION", profileFacts.specialization],
  ["ENGINEERING", profileFacts.engineering],
];

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02 / 07" kicker="Security Profile" title="About" />

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <RevealOnScroll>
            <p className="text-balance text-xl leading-relaxed text-ink sm:text-2xl">
              {aboutIntro}
            </p>
            <div className="mono mt-8 flex flex-wrap gap-x-8 gap-y-2 text-[12px] text-ink-faint">
              <span>{personal.university}</span>
              <span>{personal.faculty}</span>
              <span>{personal.degree} — {personal.academicLevel}</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <BracketPanel className="overflow-hidden p-5">
              <div className="mono mb-4 text-[11px] tracking-wide text-ink-faint">PROFILE.DAT</div>

              <div className="relative -mx-5 -mt-5 mb-5 aspect-[4/3] overflow-hidden border-b border-border-soft">
                <img
                  src={portrait}
                  alt={personal.name}
                  className="h-full w-full object-cover object-top grayscale contrast-110"
                  loading="lazy"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(11,13,18,0.95), rgba(11,13,18,0.1) 55%), linear-gradient(160deg, rgba(91,143,249,0.22), transparent 60%)",
                  }}
                />
                <span className="mono absolute left-3 top-3 flex items-center gap-1.5 text-[10px] tracking-wide text-ok">
                  <span className="h-1.5 w-1.5 rounded-full bg-ok" /> PROFILE LOADED
                </span>
              </div>

              <dl className="divide-y divide-border-soft">
                {FACT_ROWS.map(([label, value]) => (
                  <div key={label} className="mono flex items-center justify-between py-2.5 text-[12.5px]">
                    <dt className="tracking-wide text-ink-faint">{label}</dt>
                    <dd className="text-ink">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mono mt-2 pt-2 text-[11px] tracking-wide text-ink-faint">INTERESTS</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {profileFacts.interests.map((interest) => (
                  <span
                    key={interest}
                    className="mono border border-border-soft px-2.5 py-1 text-[11px] text-ink-dim"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </BracketPanel>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
