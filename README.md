# Emely Aponte · Portafolio

Sitio estático hecho con [Astro](https://astro.build). El diseño sale del archivo de Figma "Emely" (página *Emely web design*) y el contenido, de la web en Framer.

## Comandos

| Comando           | Qué hace                                 |
| ----------------- | ---------------------------------------- |
| `npm install`     | Instala las dependencias                 |
| `npm run dev`     | Servidor local con recarga en caliente   |
| `npm run build`   | Genera el sitio en `dist/`               |
| `npm run preview` | Sirve la versión de `dist/`              |
| `npm run check`   | Comprueba los tipos de los `.astro`      |

## Estructura

- `src/pages/`: Inicio, ¿Quién soy? (`sobre-mi`), ¿Qué hago? (`portafolio`), Contacto y los casos de estudio en `proyectos/`.
- `src/data/site.ts`: enlaces (CV, LinkedIn, Behance), ID del formulario y datos de los proyectos.
- `src/assets/`: imágenes que Astro optimiza (`figma/` viene de Figma y `projects/` del Framer).
- `public/icons/`: SVG exportados de Figma (logos, flechas, redes).

## Pendiente de configurar

- **Formulario de contacto**: crea un formulario gratuito en [Formspark](https://formspark.io) y pon su ID en `formsparkId` (`src/data/site.ts`). Hasta entonces, al enviar el formulario se pide al visitante que escriba por LinkedIn.
- **Dominio**: cuando haya dominio, añade `site` en `astro.config.mjs` para generar las URL canónicas.
