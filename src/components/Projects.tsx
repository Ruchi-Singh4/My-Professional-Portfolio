import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  return (
    <section className="sec alt" id="projects">
      <div className="wrap">
        <h2 className="sec-t" data-rv>
          My <span className="grad">projects</span>
        </h2>
        <p className="sec-l" data-rv>
          Full-stack apps I can walk through — from work and on my own.
        </p>

        <div className="projs">
          {PROJECTS.map((project, i) => {
            return (
              <article
                className={`proj hue-${project.hue}`}
                key={project.title}
                data-rv
                style={{ transitionDelay: `${(i % 2) * 90}ms` }}
              >
                <div className="proj-thumb">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}
                  <span className="proj-kind">{project.kind}</span>
                </div>
                <div className="proj-body">
                  <h3>{project.title}</h3>
                  <ul className="proj-points">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <ul className="tags">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="proj-links">
                    {project.repo ? (
                      <a className="proj-git" href={project.repo} target="_blank" rel="noreferrer">
                        <Github size={15} /> GitHub
                      </a>
                    ) : (
                      <span className="proj-link-slot" aria-hidden="true" />
                    )}
                    {project.live ? (
                      <a className="proj-live" href={project.live} target="_blank" rel="noreferrer">
                        <ExternalLink size={15} /> Live
                      </a>
                    ) : (
                      <span className="proj-link-slot" aria-hidden="true" />
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
