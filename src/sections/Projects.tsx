import { useState } from "react";
import { projects } from "../data/portfolioData";
import { RevealOnScroll, SectionHeading } from "../components/ui";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import type { Project } from "../types";

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04 / 07" kicker="Security Case Files" title="Projects" />

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 0.05}>
              <ProjectCard project={project} onOpen={() => setOpen(project)} />
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
