import { WORK } from "@/data/stack";

export function Experience() {
  return (
    <section className="sec alt" id="experience">
      <div className="wrap">
        <h2 className="sec-t" data-pop>
          Work <span className="grad">experience</span>
        </h2>
        <p className="sec-l" data-pop>
          Software Engineer at Ratna, then the JSpiders training year before that.
        </p>

        <div className="jobs">
          {WORK.map((entry) => (
            <article className={`job tone-${entry.tone}`} key={entry.title} data-pop>
              <p className="job-when">{entry.when}</p>
              <h3>{entry.title}</h3>
              <p className="job-where">{entry.where}</p>
              <p className="job-body">{entry.body}</p>
              {entry.points ? (
                <ul className="job-points">
                  {entry.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
              <p className="job-tags">{entry.tags}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
