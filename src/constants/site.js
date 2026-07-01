export const NAV_LINKS = [
  { label: 'Categorías', href: '#categorias' },
  { label: 'Inspiración', href: '#inspiracion' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Testimonios', href: '#testimonios' },
];

export const CONTACT = {
  whatsappNumber: '5491100000000', // TODO: reemplazar por el número real de la empresa
  whatsappMessage: 'Hola, quiero solicitar un presupuesto para pisos y porcelanatos.',
  email: 'contacto@empresa.com',
  brand: 'GRES',
  brandFull: 'GRES Pisos & Porcelanatos',
};

export const getWhatsappLink = (customMessage) => {
  const message = encodeURIComponent(customMessage || CONTACT.whatsappMessage);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${message}`;
};
