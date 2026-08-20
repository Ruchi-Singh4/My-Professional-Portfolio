import { Download, GraduationCap, MapPin, Sparkles } from "lucide-react";
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
              I'm a software engineer with experience in Java full stack development — React.js, Spring Boot and
              PostgreSQL — building healthcare applications and the REST APIs behind them. I joined this field
              straight out of an engineering degree and stayed because the problems are unusually concrete. A
              billing screen that takes four seconds to load costs a receptionist real time, every single day.
            </p>
            <p>
              My work spans the whole delivery cycle: PostgreSQL schema design, Spring Boot APIs, then the React
              interface on top. I like the seam where the two meet — pagination contracts, error shapes, and making a
              slow query fast enough that nobody notices it ran.
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

            <a className="btn" href={ME.resume} download>
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
