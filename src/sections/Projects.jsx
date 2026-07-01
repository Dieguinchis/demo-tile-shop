import { projects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

export default function Projects() {
  const ref = useScrollReveal({ selector: '.project-item, .section-head', y: 40, stagger: 0.08 });

  return (
    <section id="proyectos" className="section projects" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Portfolio</span>
          <h2 className="display-lg">Proyectos realizados</h2>
          <p className="body-lg">
            Una selección de obras residenciales, comerciales y corporativas donde el material
            fue protagonista del diseño final.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((p) => (
            <article className="project-item reveal" key={p.id}>
              <div className="project-item__frame">
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <div className="project-item__meta">
                <h3 className="display-md">{p.name}</h3>
                <span className="caption">{p.category}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
