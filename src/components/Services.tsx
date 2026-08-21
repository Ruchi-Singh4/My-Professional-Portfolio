import { SERVICES } from "@/data/services";

export function Services() {
  return (
    <section className="sec alt" id="services">
      <div className="wrap">
        <h2 className="sec-t" data-rv>
          What I <span className="grad">do</span>
        </h2>
        <p className="sec-l" data-rv>
          Frontend, backend, and the auth in between.
        </p>

        <div className="cards">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <article className="card" key={service.title} data-rv style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="card-ic">
                  <Icon size={24} strokeWidth={1.7} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
