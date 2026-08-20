import type { CSSProperties } from "react";
import { Award, Trophy } from "lucide-react";
import { SKILLS, TOOLBOX } from "@/data/skills";
import { CERTS, EXTRAS, TIMELINE } from "@/data/timeline";

/** Lets the bar width come from a CSS custom property so the fill can animate on reveal. */
type BarStyle = CSSProperties & { "--w": string };

export function Skills() {
  return (
    <section className="sec" id="skills">
      <div className="wrap">
        <h2 className="sec-t" data-rv>
          My <span className="grad">skills</span>
        </h2>
        <p className="sec-l" data-rv>
          What I reach for day to day.
        </p>

        <div className="skills-grid">
          <div className="bars" data-rv>
            {SKILLS.map((skill, i) => (
              <div className="bar-row" key={skill.name}>
                <div className="bar-top">
                  <span>{skill.name}</span>
                  <span className="pct">{skill.pct}%</span>
                </div>
                <div className="track">
                  <i
                    className="fill"
                    style={{ "--w": `${skill.pct}%`, transitionDelay: `${i * 90}ms` } as BarStyle}
                  />
                </div>
              </div>
            ))}

            <div className="toolbox">
              <h4>Also working with</h4>
              <ul>
                {TOOLBOX.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="time" data-rv>
            {TIMELINE.map((entry) => (
              <div className="tl" key={entry.what}>
                <span className="tl-when">{entry.when}</span>
                <h3>{entry.what}</h3>
                <p className="tl-where">{entry.where}</p>
                <ul>
                  {entry.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

              </div>
            ))}

            <div className="tl">
              <span className="tl-when">Certifications</span>
              <ul className="certs">
                {CERTS.map((cert) => (
                  <li key={cert}>
                    <Award size={13} /> {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="tl">
              <span className="tl-when">Campus</span>
              <ul className="certs">
                {EXTRAS.map((extra) => (
                  <li key={extra}>
                    <Trophy size={13} /> {extra}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
