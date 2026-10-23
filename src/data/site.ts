import type { ImageMetadata } from 'astro';

import homePinsxp from '../assets/projects/home/pinsxp.jpg';
import homeIn99 from '../assets/projects/home/in99.png';
import homeMercantil from '../assets/projects/home/mercantil.png';
import homeCrudebeauty from '../assets/projects/home/crudebeauty.jpg';
import portfolioPinsxp from '../assets/projects/portfolio/pinsxp.jpg';
import portfolioIn99 from '../assets/projects/portfolio/in99.jpg';
import portfolioMercantil from '../assets/projects/portfolio/mercantil.jpg';
import portfolioCrudebeauty from '../assets/projects/portfolio/crudebeauty.jpg';
import portfolioCentroMedico from '../assets/projects/portfolio/centro-medico-is.jpg';
import portfolioNuva from '../assets/projects/portfolio/nuva.jpg';

export const site = {
  name: 'Emely Aponte',
  title: 'Emely Aponte | Diseñadora UX/UI',
  description:
    'Portafolio de Emely Aponte, diseñadora UX/UI en Madrid: usabilidad, diseño de interfaces, diseño web, marketing digital e ilustración.',
  location: 'Madrid',
  // Two CV links exist on the Framer site: one on the home page, one on "Acerca de mí".
  cvHome: 'https://drive.google.com/file/d/1UstvP3TviDANhi7TG-Btqu81VbkWWR1_/view?usp=sharing',
  cvAbout: 'https://drive.google.com/file/d/1mfQPhDmBcE3dlHyk5-rFMhvECJi-pxbM/view?usp=sharing',
  linkedin: 'https://www.linkedin.com/in/emiikira/',
  behance: 'https://www.behance.net/emiikira',
  // Formspark form ID (https://formspark.io). While empty, the contact form points visitors to LinkedIn instead.
  formsparkId: '',
};

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-mi', label: '¿Quién soy?' },
  { href: '/portafolio', label: '¿Qué hago?' },
  { href: '/contacto', label: 'Contacto' },
] as const;

export interface Project {
  slug: string;
  name: string;
  /** Home card copy, split so the middle part can be emphasised. */
  intro: [string, string, string];
  /** Short label used in the portfolio grid. */
  category: string;
  cover: ImageMetadata;
  portrait: ImageMetadata;
  /** Only projects with a published case study get a link. */
  href?: string;
}

export const projects: Project[] = [
  {
    slug: 'pinsxp',
    name: 'PinsXP',
    intro: ['Diseñando un', 'Sistema de Diseño', 'para una startup de experiencias sociales'],
    category: 'Aplicación de experiencias',
    cover: homePinsxp,
    portrait: portfolioPinsxp,
    href: '/proyectos/pinsxp',
  },
  {
    slug: 'in99',
    name: 'in99',
    intro: ['Diseñando una', 'calculadora de ahorro', 'para una startup que brinda servicios profesionales.'],
    category: 'Calculadora financiera',
    cover: homeIn99,
    portrait: portfolioIn99,
  },
  {
    slug: 'mercantil',
    name: 'Mercantil',
    intro: ['Diseñando la', 'aplicación móvil de banco', 'ubicado en Panamá'],
    category: 'Banca móvil',
    cover: homeMercantil,
    portrait: portfolioMercantil,
  },
  {
    slug: 'crudebeauty',
    name: 'CrudeBeauty',
    intro: ['Diseñando', 'la web', 'de una empresa de aceites esenciales orgánicos.'],
    category: 'Página web',
    cover: homeCrudebeauty,
    portrait: portfolioCrudebeauty,
    href: '/proyectos/crudebeauty',
  },
];

export const upcomingProjects = [
  { name: 'Centro Médico IS', portrait: portfolioCentroMedico },
  { name: 'Nuva', portrait: portfolioNuva },
];
