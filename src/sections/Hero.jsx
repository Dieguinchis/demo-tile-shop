import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Button from '../components/Button';
import { ArrowIcon } from '../components/Icons';
import { getWhatsappLink } from '../constants/site';
import './Hero.css';

const TITLE_LINE_1 = 'Transformamos espacios';
const TITLE_LINE_2 = 'con pisos y porcelanatos de excelencia';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=80',
  'https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&w=2200&q=80',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2200&q=80',
];

export default function Hero() {
  const rootRef = useRef(null);
  const bgRef = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIdx(currentIdx);
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIdx]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Signature moment: tile panels slide away like freshly-laid porcelain
      // panels being lifted to reveal the headline underneath.
      tl.to('.hero-tile', {
        yPercent: -100,
        duration: 1.1,
        stagger: 0.07,
        delay: 0.2,
      })
        .from(
          '.hero-line',
          { yPercent: 110, duration: 1, stagger: 0.12 },
          '-=0.9'
        )
        .from('.hero-sub', { opacity: 0, y: 16, duration: 0.8 }, '-=0.5')
        .from('.hero-actions', { opacity: 0, y: 16, duration: 0.8 }, '-=0.55')
        .from('.navbar', { opacity: 0, y: -12, duration: 0.6 }, '-=1.4');

      // Subtle continuous parallax on the background image
      gsap.to(bgRef.current, {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="hero" ref={rootRef}>
      <div className="hero__bg" ref={bgRef}>
        {HERO_IMAGES.map((src, index) => {
          let className = '';
          if (index === currentIdx) className = 'active';
          else if (index === prevIdx) className = 'previous';
          return (
            <img
              key={src}
              src={src}
              alt={`Ambiente moderno con piso de porcelanato ${index + 1}`}
              className={className}
            />
          );
        })}
        <div className="hero__scrim" />
      </div>

      <div className="hero-tiles" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <span className="hero-tile" key={i} />
        ))}
      </div>

      <div className="hero__content container">
        <span className="eyebrow hero-sub">Pisos · Cerámicas · Porcelanatos</span>

        <h1 className="hero__title">
          <span className="hero-line-wrap">
            <span className="hero-line">{TITLE_LINE_1}</span>
          </span>
          <span className="hero-line-wrap">
            <span className="hero-line">{TITLE_LINE_2}</span>
          </span>
        </h1>

        <p className="body-lg hero-sub hero__subtitle">
          Seleccionamos, asesoramos e instalamos superficies de excelencia para arquitectos,
          estudios de interiorismo y hogares que no negocian el detalle.
        </p>

        <div className="hero-actions hero__actions">
          <Button href="#categorias" variant="light" icon={<ArrowIcon />}>
            Ver catálogo
          </Button>
          <Button href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" variant="ghost">
            Solicitar presupuesto
          </Button>
        </div>
      </div>

      <div className="hero__dots" aria-label="Indicadores de imagen">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            className={`hero__dot${index === currentIdx ? ' hero__dot--active' : ''}`}
            aria-label={`Ir a imagen ${index + 1}`}
            onClick={() => {
              setPrevIdx(currentIdx);
              setCurrentIdx(index);
            }}
          />
        ))}
      </div>
    </section>
  );
}
