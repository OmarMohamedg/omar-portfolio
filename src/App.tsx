import { useState } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import BootSequence from "./components/BootSequence";
import CustomCursor from "./components/CustomCursor";
import EasterEggTerminal from "./components/EasterEggTerminal";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Stats from "./sections/Stats";
import Workflow from "./sections/Workflow";

export default function App() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <a
        href="#home"
        className="mono fixed left-2 top-2 z-[300] -translate-y-16 bg-signal px-4 py-2 text-xs text-void transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <BootSequence onDone={() => setBooted(true)} />
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Workflow />
        <Projects />
        <Stats />
        <Certifications />
        <Journey />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      <EasterEggTerminal />

      <span className="sr-only" aria-live="polite">
        {booted ? "Interface ready." : ""}
      </span>
    </>
  );
}
