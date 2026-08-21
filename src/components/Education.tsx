import { Award, GraduationCap, Medal, Trophy } from "lucide-react";
import { EDUCATION, HONORS } from "@/data/stack";

export function Education() {
  const degree = EDUCATION[0];

  return (
    <section className="sec edu-sec" id="education">
      <div className="wrap">
        <h2 className="sec-t" data-pop>
          Edu<span className="grad">cation</span>
        </h2>

        <div className="edu-box">
          {degree ? (
            <div className="edu-degree" data-pop>
              <GraduationCap size={22} />
              <div>
                <p className="edu-when">{degree.when}</p>
                <h3>{degree.title}</h3>
                <p className="edu-school">{degree.where}</p>
              </div>
              <p className="edu-gpa">
                <strong>7.73</strong>
                <span>CGPA / 10</span>
              </p>
            </div>
          ) : null}

          <ul className="edu-honors">
            {HONORS.map((honor, i) => {
              const Icon =
                honor.kind === "trophy" ? Trophy : honor.kind === "medal" ? Medal : Award;
              return (
                <li
                  className={`edu-honor tone-${honor.tone}`}
                  key={honor.title}
                  data-pop
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <Icon size={16} />
                  <strong>{honor.title}</strong>
                  <span>{honor.meta}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
