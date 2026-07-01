import { getWhatsappLink } from '../constants/site';
import { WhatsappIcon } from './Icons';
import './WhatsappFloat.css';

export default function WhatsappFloat() {
  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Escribir por WhatsApp"
    >
      <WhatsappIcon />
      <span className="wa-float__label">Escribinos</span>
    </a>
  );
}
