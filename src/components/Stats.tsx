import { STATS } from "@/data/profile";

export function Stats() {
  return (
    <section className="stats-band">
      <div className="wrap stats">
        {STATS.map((stat, i) => (
          <div className="stat" key={stat.l} data-rv style={{ transitionDelay: `${i * 80}ms` }}>
            <strong>{stat.n}</strong>
            {stat.href ? (
              <a href={stat.href} target="_blank" rel="noreferrer">
                <span>{stat.l}</span>
              </a>
            ) : (
              <span>{stat.l}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
