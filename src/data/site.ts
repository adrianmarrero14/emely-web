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
  title: 'Emely Aponte | Diseñadora UX/UI en Madrid',
  description:
    'Portafolio de Emely Aponte, diseñadora UX/UI y de producto en Madrid. Casos de estudio de sistemas de diseño, banca móvil y e-commerce.',
  location: 'Madrid, España',
  // The Framer site links two CV files: one from the home page, one from "Acerca de mí".
  cvHome: 'https://drive.google.com/file/d/1UstvP3TviDANhi7TG-Btqu81VbkWWR1_/view?usp=sharing',
  cvAbout: 'https://drive.google.com/file/d/1mfQPhDmBcE3dlHyk5-rFMhvECJi-pxbM/view?usp=sharing',
  linkedin: 'https://www.linkedin.com/in/emiikira/',
  behance: 'https://www.behance.net/emiikira',
};

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/contacto', label: 'Contacto' },
] as const;

export interface Project {
  slug: string;
  name: string;
  /** Short label shown as a tag on cards. */
  category: string;
  /** One sentence that tells what was designed and for whom. */
  summary: string;
  cover: ImageMetadata;
  portrait: ImageMetadata;
  /** Projects with a published case study get a link; the rest show `status`. */
  href?: string;
  status?: string;
}

export const projects: Project[] = [
  {
    slug: 'pinsxp',
    name: 'PinsXP',
    category: 'Sistema de diseño',
    summary: 'Compass, un sistema de diseño escalable y asistido por IA para una app social de lugares y momentos.',
    cover: homePinsxp,
    portrait: portfolioPinsxp,
    href: '/proyectos/pinsxp',
  },
  {
    slug: 'mercantil',
    name: 'Mercantil Banco',
    category: 'Banca móvil',
    summary: 'Rediseño de la app de Mercantil Banco Panamá para sus clientes en Venezuela, centrado en las transferencias internacionales.',
    cover: homeMercantil,
    portrait: portfolioMercantil,
    href: '/proyectos/mercantil',
  },
  {
    slug: 'crudebeauty',
    name: 'CrudeBeauty',
    category: 'E-commerce y branding',
    summary: 'Identidad de marca y tienda online para una firma de aceites esenciales orgánicos.',
    cover: homeCrudebeauty,
    portrait: portfolioCrudebeauty,
    href: '/proyectos/crudebeauty',
  },
  {
    slug: 'in99',
    name: 'in99',
    category: 'Fintech',
    summary: 'Calculadora de ahorro para una startup que ofrece servicios profesionales.',
    cover: homeIn99,
    portrait: portfolioIn99,
    status: 'Caso de estudio en preparación',
  },
];

export const upcomingProjects = [
  { name: 'Centro Médico IS', category: 'En construcción', portrait: portfolioCentroMedico },
  { name: 'Nuva', category: 'En construcción', portrait: portfolioNuva },
];
