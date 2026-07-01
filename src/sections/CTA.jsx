import { useState } from 'react';
import Button from '../components/Button';
import { WhatsappIcon } from '../components/Icons';
import { getWhatsappLink } from '../constants/site';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './CTA.css';

const initialForm = { name: '', phone: '', message: '' };

export default function CTA() {
  const ref = useScrollReveal({ selector: '.reveal', y: 36, stagger: 0.1 });
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend defined yet: por ahora confirmamos localmente.
    // Reemplazar con la llamada real a services/ cuando exista el endpoint.
    setStatus('sent');
    setForm(initialForm);
  };

  return (
    <section className="section cta" ref={ref}>
      <div className="container cta__inner">
        <div className="cta__intro reveal">
          <span className="eyebrow">Empecemos</span>
          <h2 className="display-xl">Tu proyecto merece el material correcto</h2>
          <p className="body-lg">
            Contanos qué estás construyendo y te ayudamos a elegir el piso, la cerámica
            o el porcelanato ideal, con presupuesto en menos de 24 horas.
          </p>

          <Button
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            icon={<WhatsappIcon />}
            className="cta__whatsapp"
          >
            Escribinos por WhatsApp
          </Button>
        </div>

        <form className="cta__form reveal" onSubmit={handleSubmit}>
          <div className="cta__field">
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Tu nombre" />
          </div>

          <div className="cta__field">
            <label htmlFor="phone">Teléfono</label>
            <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+54 9 11 0000 0000" />
          </div>

          <div className="cta__field">
            <label htmlFor="message">Contanos sobre tu proyecto</label>
            <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Metros cuadrados, tipo de ambiente, plazos..." />
          </div>

          <Button as="button" type="submit" variant="secondary" className="cta__submit">
            Solicitar presupuesto
          </Button>

          {status === 'sent' && (
            <p className="cta__success body-sm" role="status">
              Gracias, recibimos tu consulta. Te contactaremos a la brevedad.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
