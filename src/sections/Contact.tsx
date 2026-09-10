import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Mail, Send, Terminal } from "lucide-react";
import { personal, social } from "../data/portfolioData";
import { BracketPanel, SectionHeading } from "../components/ui";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`,
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="07 / 07" kicker="Secure Channel" title="Contact" />

        <BracketPanel className="p-6 sm:p-8">
          <div className="mono mb-6 flex items-center justify-between text-[11px] tracking-wide text-ink-faint">
            <span>CONNECTION STATUS</span>
            <span className="flex items-center gap-1.5 text-ok">
              <span className="h-1.5 w-1.5 rounded-full bg-ok" />
              READY
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" htmlFor="name">
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full border border-border-soft bg-base px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal"
                  autoComplete="name"
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full border border-border-soft bg-base px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal"
                  autoComplete="email"
                />
              </Field>
            </div>
            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full resize-none border border-border-soft bg-base px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal"
              />
            </Field>

            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              data-cursor-hover
              className="mono flex items-center gap-2 bg-signal px-5 py-3 text-[13px] font-medium tracking-wide text-void"
            >
              <Send size={14} />
              TRANSMIT MESSAGE
            </motion.button>
            {sent && (
              <p role="status" className="mono text-[12px] text-ok">
                Opening your mail client with this message ready to send.
              </p>
            )}
          </form>

          <div className="mono mt-8 flex flex-wrap gap-4 border-t border-border-soft pt-6 text-[12px] text-ink-dim">
            <a href={social.github} target="_blank" rel="noreferrer" data-cursor-hover className="flex items-center gap-2 transition-colors hover:text-ink">
              <Terminal size={15} /> GitHub
            </a>
            <a href={social.linkedin} target="_blank" rel="noreferrer" data-cursor-hover className="flex items-center gap-2 transition-colors hover:text-ink">
              <Briefcase size={15} /> LinkedIn
            </a>
            <a href={`mailto:${social.email}`} data-cursor-hover className="flex items-center gap-2 transition-colors hover:text-ink">
              <Mail size={15} /> {social.email}
            </a>
          </div>
        </BracketPanel>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mono mb-1.5 block text-[11px] tracking-wide text-ink-faint">
        {label.toUpperCase()}
      </label>
      {children}
    </div>
  );
}
