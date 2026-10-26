// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  redirects: {
    // Old URL of the projects page
    '/portafolio': '/proyectos',
  },
  // Production URL, used for canonical links. Change it when the site gets its own domain.
  site: 'https://endearing-pasca-3b9ea3.netlify.app',
});
