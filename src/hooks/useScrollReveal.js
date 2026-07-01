import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useScrollReveal
 * Animates every element matching `selector` inside the returned ref
 * with a fade + slide-up as it enters the viewport.
 *
 * @param {Object} options
 * @param {string} options.selector - CSS selector (default: '.reveal')
 * @param {number} options.y - initial vertical offset in px
 * @param {number} options.stagger - stagger between items in seconds
 * @param {number} options.duration - animation duration in seconds
 * @param {string} options.start - ScrollTrigger start position
 */
export function useScrollReveal({
  selector = '.reveal',
  y = 40,
  stagger = 0.12,
  duration = 1,
  start = 'top 82%',
} = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const targets = container.querySelectorAll(selector);
    if (!targets.length) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start,
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [selector, y, stagger, duration, start]);

  return containerRef;
}

/**
 * useParallax
 * Applies a subtle vertical parallax translate to a ref'd element
 * as the page scrolls through its container.
 */
export function useParallax(amount = 60) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -amount / 2 },
        {
          y: amount / 2,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [amount]);

  return ref;
}
