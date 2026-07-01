import { useEffect, useState } from 'react';
import { NAV_LINKS, CONTACT, getWhatsappLink } from '../constants/site';
import Button from './Button';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${open ? 'navbar--open' : ''}`}>
      <div className="navbar__inner container">
        <a href="#top" className="navbar__brand" onClick={closeMenu}>
          {CONTACT.brand}
        </a>

        <nav className="navbar__links" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__cta">
          <Button href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" size="sm" variant="secondary">
            Solicitar presupuesto
          </Button>
        </div>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="navbar__mobile">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <Button href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" variant="primary" onClick={closeMenu}>
          Solicitar presupuesto
        </Button>
      </div>
    </header>
  );
}
