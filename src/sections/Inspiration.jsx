import { useRef, useEffect } from 'react';
import { ambients } from '../data/ambients';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Inspiration.css';

export default function Inspiration() {
  const revealRef = useScrollReveal({ selector: '.amb-card, .section-head', y: 50, stagger: 0.08 });
  
  const stripRef = useRef(null);
  const isDragging = useRef(false);
  const isTouchActive = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  // Triple the items to allow seamless infinite scroll wrapping
  const tripledAmbients = [...ambients, ...ambients, ...ambients];

  const calculateSingleSetWidth = () => {
    if (!stripRef.current) return 0;
    const cards = stripRef.current.children;
    const count = ambients.length;
    if (cards.length >= count * 2) {
      return cards[count].offsetLeft - cards[0].offsetLeft;
    }
    return 0;
  };

  useEffect(() => {
    const container = stripRef.current;
    if (!container) return;

    let animationFrameId;

    const setInitialScroll = () => {
      const width = calculateSingleSetWidth();
      if (width > 0) {
        container.scrollLeft = width;
      }
    };

    // Delay slightly to ensure browser has processed initial layout
    const timer = setTimeout(setInitialScroll, 50);

    const autoScroll = () => {
      if (!isDragging.current && !isTouchActive.current && container) {
        const width = calculateSingleSetWidth();
        if (width > 0) {
          container.scrollLeft += 0.8; // Scroll speed (pixels per frame)

          if (container.scrollLeft >= width * 2) {
            container.scrollLeft -= width;
          } else if (container.scrollLeft <= 0) {
            container.scrollLeft += width;
          }
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
    };
  }, []);

  // Scroll boundary listener for manual scroll/drag transitions
  const handleScroll = () => {
    const container = stripRef.current;
    if (!container) return;
    const width = calculateSingleSetWidth();
    if (width <= 0) return;

    if (container.scrollLeft >= width * 2) {
      container.scrollLeft -= width;
      if (isDragging.current) {
        scrollStart.current -= width;
      }
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += width;
      if (isDragging.current) {
        scrollStart.current += width;
      }
    }
  };

  // Mouse drag interactions
  const handleMouseDown = (e) => {
    if (!stripRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - stripRef.current.offsetLeft;
    scrollStart.current = stripRef.current.scrollLeft;
    stripRef.current.style.scrollBehavior = 'auto';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !stripRef.current) return;
    e.preventDefault();
    const x = e.pageX - stripRef.current.offsetLeft;
    const walk = x - startX.current;
    stripRef.current.scrollLeft = scrollStart.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (stripRef.current) {
      stripRef.current.style.scrollBehavior = 'smooth';
    }
  };

  // Touch controls for mobile responsiveness
  const handleTouchStart = () => {
    isTouchActive.current = true;
    if (stripRef.current) {
      stripRef.current.style.scrollBehavior = 'auto';
    }
  };

  const handleTouchEnd = () => {
    isTouchActive.current = false;
    if (stripRef.current) {
      stripRef.current.style.scrollBehavior = 'smooth';
    }
  };

  return (
    <section id="inspiracion" className="section inspiration" ref={revealRef}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Inspiración</span>
          <h2 className="display-lg">Ambientes que muestran el material en su contexto real</h2>
        </div>
      </div>

      <div
        className="inspiration__strip"
        ref={stripRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {tripledAmbients.map((amb, index) => {
          const isEven = (index % ambients.length) % 2 === 1;
          return (
            <figure
              className={`amb-card reveal ${isEven ? 'amb-card--even' : ''}`}
              key={`${amb.id}-${index}`}
            >
              <img
                src={amb.image}
                alt={`Ambiente ${amb.name}`}
                loading="lazy"
                draggable="false"
              />
              <figcaption className="caption" style={{ pointerEvents: 'none' }}>
                {amb.name}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

