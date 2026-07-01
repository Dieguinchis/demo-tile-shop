import { testimonials } from '../data/testimonials';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Testimonials.css';

export default function Testimonials() {
  const ref = useScrollReveal({ selector: '.testimonial-card, .section-head', y: 36, stagger: 0.12 });

  return (
    <section id="testimonios" className="section testimonials" ref={ref}>
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Testimonios</span>
          <h2 className="display-lg">La confianza de quienes ya transformaron su espacio</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <blockquote className="testimonial-card reveal" key={t.id}>
              <p className="display-md testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <span className="body-sm testimonial-card__author">{t.author}</span>
                <span className="caption">{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
