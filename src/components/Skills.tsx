import { Sparkles } from "lucide-react";
import { STACK } from "@/data/stack";

function iconSrc(slug: string, color: string): string {
  return `https://cdn.simpleicons.org/${slug}/${color}`;
}

export function Skills() {
  return (
    <section className="sec" id="skills">
      <div className="wrap">
        <p className="stack-kicker" data-pop>
          <Sparkles size={14} /> My stack
        </p>
        <h2 className="sec-t stack-title" data-pop>
          What I <span className="grad">use</span>
        </h2>
        <p className="sec-l" data-pop>
          React, Spring Boot, SQL, and the tools around them.
        </p>

        <div className="stack">
          {STACK.map((group) => (
            <div className="stack-row" key={group.title}>
              <h3 className="stack-cat" data-pop>
                {group.title}
              </h3>
              <ul className="stack-list">
                {group.items.map((item, i) => (
                  <li
                    className="stack-item"
                    key={item.name}
                    data-pop
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <span className="stack-ico" style={{ "--ico": `#${item.color}` } as never}>
                      <img src={iconSrc(item.slug, item.color)} alt="" width={28} height={28} />
                    </span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
