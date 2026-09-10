import { ShieldCheck } from "lucide-react";
import { credentials } from "../data/portfolioData";
import { RevealOnScroll, SectionHeading } from "../components/ui";
import type { CredentialStatus } from "../types";

const STATUS_STYLE: Record<CredentialStatus, string> = {
  COMPLETED: "text-ok border-ok/40",
  "IN PROGRESS": "text-signal border-signal-dim",
  TRAINING: "text-warn border-warn/40",
  WORKSHOP: "text-ink-dim border-border",
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05 / 07" kicker="Verified Credentials" title="Certifications & Training" />

        <div className="grid gap-3 sm:grid-cols-2">
          {credentials.map((c, i) => (
            <RevealOnScroll key={c.id} delay={i * 0.04}>
              <div className="flex items-start gap-4 border border-border bg-surface p-5">
                <ShieldCheck size={18} className="mt-0.5 shrink-0 text-signal-dim" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-ink">{c.name}</p>
                  <p className="mono mt-1 text-[11px] tracking-wide text-ink-faint">{c.issuer}</p>
                </div>
                <span
                  className={`mono shrink-0 border px-2 py-1 text-[10px] tracking-wide ${STATUS_STYLE[c.status]}`}
                >
                  {c.status}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
