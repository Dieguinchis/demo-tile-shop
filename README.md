# GRES — Landing Premium de Pisos, Cerámicas y Porcelanatos

Landing page publicitaria (no e-commerce) construida en **React + Vite + CSS puro**,
con animaciones **GSAP ScrollTrigger**, siguiendo la estructura de carpetas definida
en el punto **3.1 Frontend — React** del Implementation Plan de Otter.ly.

## Cómo correr el proyecto

```bash
npm install
npm run dev       # entorno de desarrollo
npm run build     # build de producción -> carpeta dist/
npm run preview   # sirve el build de producción localmente
```

## Antes de publicar

1. **WhatsApp**: reemplazá `whatsappNumber` en `src/constants/site.js` por el número
   real de la empresa (formato internacional, sin `+` ni espacios, ej: `5491122334455`).
2. **Email de contacto**: actualizá `CONTACT.email` en el mismo archivo.
3. **Formulario de contacto**: el formulario de `src/sections/CTA.jsx` actualmente
   solo confirma en pantalla. Cuando exista un backend, reemplazá el `handleSubmit`
   por una llamada real ubicada en `src/services/` (por ejemplo `services/contact.js`
   con un `fetch`/`axios` hacia el endpoint definitivo).
4. **Imágenes**: se usan fotos de stock de Unsplash como placeholder de alta calidad.
   Podés reemplazarlas por fotografía propia de obras terminadas editando
   `src/data/categories.js`, `ambients.js` y `projects.js`.

## Estructura (según 3.1 del Implementation Plan)

```
src/
├── assets/
│   ├── fonts/       (vacío — se usan Google Fonts: Fraunces + Inter)
│   ├── images/      (vacío — imágenes remotas de alta resolución vía data/)
│   └── styles/      tokens.css (paleta, tipografía, motion) y typography.css
├── components/      Button, Navbar, Footer, WhatsappFloat, Icons (reutilizables)
├── sections/        Hero, Categories, Inspiration, Benefits, Projects, Testimonials, CTA
├── hooks/           useScrollReveal / useParallax (wrappers de GSAP ScrollTrigger)
├── constants/       site.js — nav links, WhatsApp, marca
├── data/            categories.js, ambients.js, benefits.js, projects.js, testimonials.js
├── utils/           (reservado para helpers futuros)
├── locals/          (reservado para i18n si se necesita)
├── App.jsx
└── main.jsx
```

## Dirección de diseño

- **Paleta**: porcelana (#FAFAF7), papel (#F3F1EC), basalto (#17140F), ceniza (#6E695F),
  piedra (#B8AC97) y arcilla (#8A6F52) como acento cálido — ligada al vocabulario
  del propio material (gres, arcilla, basalto) en lugar de una paleta genérica.
- **Tipografía**: `Fraunces` (display editorial, peso liviano) + `Inter` (texto).
- **Firma visual**: al cargar el Hero, paneles oscuros —a modo de baldosas recién
  colocadas— se deslizan para revelar el título, referenciando literalmente el oficio
  de instalación de pisos.
- **Movimiento**: fade + slide-up al hacer scroll (`useScrollReveal`) y parallax sutil
  en el Hero, respetando `prefers-reduced-motion`.
