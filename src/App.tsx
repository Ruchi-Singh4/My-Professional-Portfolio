import { About } from "@/components/About";
import { Aurora } from "@/components/Aurora";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useReveal } from "@/hooks/useReveal";
import { useScrollToggle } from "@/hooks/useScrollToggle";

export default function App() {
  useReveal();
  useScrollToggle();

  return (
    <div className="site">
      <Aurora />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}
