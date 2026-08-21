import { FileDown, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { ME } from "@/data/profile";

export function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <h2 className="sec-t" data-rv>
          About <span className="grad">me</span>
        </h2>

        <div className="about">
          <div className="about-copy" data-rv>
            <h3>Java Full Stack Developer</h3>
            <p>
              I’m a Java full-stack developer in Hyderabad. I build web apps with React, Spring Boot, and PostgreSQL
              — the API, the database, and the UI. Right now that’s at Ratna Global Tech, after a Java training year
              at JSpiders.
            </p>
            <p>
              A normal day is a screen, an endpoint, and a query. I spend time on the unglamorous bits: validation,
              roles, pagination, and making sure errors make sense.
            </p>

            <ul className="facts">
              <li>
                <MapPin size={15} /> {ME.location}
              </li>
              <li>
                <GraduationCap size={15} /> B.Tech CSE, 2024
              </li>
              <li>
                <Sparkles size={15} /> Open to new roles
              </li>
            </ul>

            <div className="about-cta">
              <a className="btn" href={ME.resume} download>
                <FileDown size={16} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
