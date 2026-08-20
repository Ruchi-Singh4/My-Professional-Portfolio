import { Code2, Database, Download, Github, Linkedin, Mail, Server } from "lucide-react";
import { ME, ROLES } from "@/data/profile";
import { useTyping } from "@/hooks/useTyping";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export function Hero() {
  const typed = useTyping(ROLES);
  const scrollTo = useSmoothScroll();

  return (
    <section className="hero" id="home">
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="hi">Hello, my name is</p>
          <h1 className="big">
            {ME.first} <span className="grad">{ME.last}</span>
          </h1>
          <h2 className="typed">
            And I'm a <span>{typed}</span>
            <i className="caret" />
          </h2>
          <p className="lede">
            I build hospital software — front desk, billing, pharmacy — and the Spring Boot APIs behind it.
            1.5+ years in software delivery.
          </p>

          <div className="socials">
            <a href={ME.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={ME.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={`mailto:${ME.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
          </div>

          <div className="btns">
            <a className="btn" href="#contact" onClick={scrollTo("contact")}>
              Hire me
            </a>
            <a className="btn out" href={ME.resume} download>
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="ring">
            <div className="ring-in">
              {ME.photo ? <img src={ME.photo} alt={ME.name} /> : <div className="initials">RS</div>}
            </div>
          </div>
          <span className="orbit o1">
            <Code2 size={16} />
          </span>
          <span className="orbit o2">
            <Database size={16} />
          </span>
          <span className="orbit o3">
            <Server size={16} />
          </span>
        </div>
      </div>
    </section>
  );
}
