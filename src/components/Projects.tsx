import { PROJECTS } from "@/data/projects";

export function Projects() {
  return (
    <section className="sec alt" id="projects">
      <div className="wrap">
        <h2 className="sec-t" data-rv>
          My <span className="grad">projects</span>
        </h2>
        <p className="sec-l" data-rv>
          Products in production, plus what I build on weekends.
        </p>

        <div className="projs">
          {PROJECTS.map((project, i) => (
              <article
                className={`proj hue-${project.hue}`}
                key={project.title}
                data-rv
                style={{ transitionDelay: `${(i % 2) * 90}ms` }}
              >
                <div
                  className="proj-thumb"
                  style={
                    project.image
                      ? {
                          backgroundImage: `url(${project.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                >

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
                    {project.title === "Food Waste Management System" && project.repo ? (
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    ) : null}
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live link
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
