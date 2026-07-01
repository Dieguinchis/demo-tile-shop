import { categories } from '../data/categories';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowIcon } from '../components/Icons';
import { getWhatsappLink } from '../constants/site';
import './Categories.css';

export default function Categories() {
  const ref = useScrollReveal({ selector: '.cat-card, .section-head', y: 46, stagger: 0.1 });

  return (
    <section id="categorias" className="section categories" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Catálogo</span>
          <h2 className="display-lg">Cada superficie, una categoría con carácter propio</h2>
          <p className="body-lg">
            Desde grandes formatos técnicos hasta texturas naturales para exteriores:
            encontrá el material exacto para cada ambiente del proyecto.
          </p>
        </div>

        <div className="categories__grid">
          {categories.map((cat, i) => (
            <a
              href={getWhatsappLink(`Hola, quiero más información sobre ${cat.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`cat-card reveal ${i === 0 ? 'cat-card--wide' : ''}`}
              key={cat.id}
            >
              <div className="cat-card__media">
                <img src={cat.image} alt={cat.name} loading="lazy" />
              </div>
              <div className="cat-card__body">
                <h3 className="display-md">{cat.name}</h3>
                <p className="body-sm">{cat.description}</p>
                <span className="cat-card__link">
                  Consultar <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
