import { benefits } from '../data/benefits';
import { ICONS } from '../components/Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Benefits.css';

export default function Benefits() {
  const ref = useScrollReveal({ selector: '.benefit-item, .section-head', y: 30, stagger: 0.1 });

  return (
    <section className="section benefits" ref={ref}>
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Por qué elegirnos</span>
          <h2 className="display-lg">Confianza construida sobre cada detalle</h2>
        </div>

        <div className="benefits__grid">
          {benefits.map((b) => {
            const Icon = ICONS[b.icon];
            return (
              <div className="benefit-item reveal" key={b.id}>
                <div className="benefit-item__icon"><Icon /></div>
                <h3 className="display-md">{b.title}</h3>
                <p className="body-sm">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
