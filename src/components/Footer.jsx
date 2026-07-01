import { CONTACT, NAV_LINKS, getWhatsappLink } from '../constants/site';
import {
  InstagramIcon,
  FacebookIcon,
  WhatsappIcon,
  LocationPinIcon,
  MailIcon,
  QuoteIcon
} from './Icons';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Column 1: Brand Info */}
        <div className="footer__column footer__column--brand">
          <div className="footer__logo">
            <span className="logo-text">{CONTACT.brand}</span>

          </div>
          <p className="footer__tagline">
            Pisos, cerámicas y porcelanatos de excelencia para proyectos residenciales, comerciales y de arquitectura.
          </p>
          <div className="footer__social">
            <a href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsappIcon />
            </a>
            <a href="#instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer__column footer__column--nav">
          <h3 className="footer__heading">Navegación</h3>
          <ul className="footer__list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>
                  <span className="arrow">&gt;</span> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer__column">
          <h3 className="footer__heading">Contacto</h3>
          <div className="footer__contact-list">
            <div className="footer__contact-item">
              <div className="contact-icon-wrapper">
                <LocationPinIcon />
              </div>
              <div className="contact-info">
                <span className="contact-label">Visitanos en Buenos Aires</span>
                <a href="#sucursales" className="contact-value">Ver Showrooms</a>
              </div>
            </div>

            <div className="footer__contact-item">
              <div className="contact-icon-wrapper">
                <MailIcon />
              </div>
              <div className="contact-info">
                <span className="contact-label">Envianos un correo</span>
                <a href={`mailto:${CONTACT.email}`} className="contact-value">{CONTACT.email}</a>
              </div>
            </div>

            <div className="footer__contact-item">
              <div className="contact-icon-wrapper">
                <QuoteIcon />
              </div>
              <div className="contact-info">
                <span className="contact-label">¿Necesitás presupuesto?</span>
                <a href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" className="contact-value">Solicitar Cotización</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span className="caption">© {year} {CONTACT.brandFull}. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}



