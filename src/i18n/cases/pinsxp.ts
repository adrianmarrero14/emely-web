import type { Localized } from '..';

// Content of the PinsXP case study. `en` must have exactly the shape of `es` (checked by the type).
// Strings may contain <strong> only; they are rendered with set:html.

const es = {
  tagline: 'Cómo escalé un sistema de diseño complejo con ayuda de la IA.',
  description:
    'Lideré la conceptualización, la arquitectura y el escalado de Compass, el sistema de diseño de PinsXP: una plataforma social para guardar, compartir y conectar momentos y lugares. Integré flujos de trabajo asistidos por IA para unificar y acelerar el diseño de nuevas experiencias.',
  brief:
    'Diseñar un sistema de diseño que garantice una experiencia visual coherente y escalable en todos los productos digitales de PinsXP.',
  details: [
    { label: 'Cliente', value: 'PinsXP' },
    { label: 'Rol', value: 'Lead Product Designer' },
    { label: 'Ubicación', value: 'Madrid, España' },
    { label: 'Tipo', value: 'Sistema de diseño' },
  ],
  sections: {
    challenge: 'El reto',
    solution: 'La solución: Compass',
    impact: 'El impacto',
    next: 'Próximos pasos',
  },
  challenge: {
    text: 'En PinsXP, los usuarios guardan sus lugares favoritos, crean itinerarios de viaje o planes y comparten momentos en grupo con sus amigos. A medida que la startup crecía, diseñar pantallas y flujos de forma aislada empezó a generar <strong>inconsistencias visuales y a ralentizar el desarrollo</strong>.',
    alts: [
      'Pantallas de PinsXP antes del sistema de diseño',
      'Detalle de componentes sin estandarizar',
      'Pantalla de la app con un estado complejo',
    ],
    problemTitle: 'El problema',
    problems: [
      {
        title: 'Componentes sin estándar',
        text: 'La falta de estandarización ralentizaba la creación de nuevos flujos y pantallas.',
      },
      {
        title: 'Elementos cotidianos dispares',
        text: 'Tarjetas de lugares guardados, creación de grupos o listados de planes se resolvían de formas distintas.',
      },
      {
        title: 'Fricción con ingeniería',
        text: 'Gestionar estados vacíos o el cambio entre modo claro y oscuro consumía demasiado tiempo operativo.',
      },
    ],
  },
  solution: {
    text: 'Diseñé la estrategia y la arquitectura de un sistema de diseño pensado para crecer con el producto.',
    alts: ['Arquitectura de componentes de Compass', 'Componentes de Compass en modo claro y oscuro'],
    callout:
      'Lo llamé <strong>Compass</strong> porque funciona como una brújula: guía a diseño e ingeniería en una misma dirección para que guardar, compartir y descubrir lugares mantenga siempre el mismo pulso visual y de usabilidad.',
    cards: [
      {
        title: 'Primitivas y semánticas',
        text: 'Separé los valores base (primitivas) de la capa con propósito funcional (semánticas). Así, el cambio entre modo claro y oscuro se gestiona de forma limpia y automatizada.',
      },
      {
        title: 'Asistencia con Claude',
        text: 'Integré Claude como asistente estratégico para definir y alinear las reglas de diseño, la nomenclatura y las especificaciones técnicas del sistema de forma ágil y rigurosa.',
      },
      {
        title: 'Handoff a desarrollo',
        text: 'Cada componente nuevo se entrega documentado: desbordamiento de texto, restricciones de tamaño y todos sus estados (cargando, vacío, error, éxito y deshabilitado).',
      },
    ],
  },
  impact: {
    panel: {
      // [before, highlighted, after]: the highlighted part is shown in bold
      title: ['Panel de propiedades ', 'en Figma', ''],
      tokens: [
        {
          term: 'Primitivas (Tokens Base):',
          text: 'La paleta cruda de valores fijos (colores, escalas y medidas) que sirven como cimiento inalterable del sistema.',
        },
        {
          term: 'Semánticas (Tokens de Intención):',
          text: 'Capa lógica que asigna un propósito funcional a cada valor (ej. fondos, textos, bordes o estados), permitiendo una gestión limpia y automatizada entre el Light Mode y el Dark Mode sin romper la coherencia visual.',
        },
      ],
    },
    alt: 'Variables de Compass en Figma: la colección de primitivas y la de semánticas con sus valores en modo claro y oscuro',
    cards: [
      {
        title: 'De la fricción a la modularidad',
        text: 'Crear flujos sociales nuevos, como compartir colecciones o coordinar planes en grupo, pasó de ser un proceso artesanal a uno modular y predecible.',
      },
      {
        title: 'Sinergia total con ingeniería',
        text: 'Alinear las variables de diseño con la estructura del equipo de desarrollo redujo al mínimo los errores y el tiempo de revisión en código.',
      },
      {
        title: 'Una experiencia coherente',
        text: 'Cada pantalla refleja ahora una interfaz cohesiva, accesible y optimizada para guardar y compartir experiencias sin fricción.',
      },
    ],
  },
  next: {
    title: 'Llevar Compass a la web (desktop y responsive)',
    text: 'A medida que PinsXP crece, los usuarios necesitan gestionar sus itinerarios y colecciones compartidas con más comodidad desde pantallas grandes. El reto: trasladar el ecosistema móvil a una experiencia web robusta y responsive.',
    cards: [
      {
        title: 'Retícula y breakpoints',
        text: 'Una nueva capa de componentes web en Figma con retículas flexibles, breakpoints claros y densidades de información pensadas para escritorio, sin perder la paridad visual con la app.',
      },
      {
        title: 'Componentes web-ready',
        text: 'Inspirados en shadcn/ui: tablas de itinerarios, menús desplegables de grupos, modales anidados y navegación lateral que se sientan nativos en web y en móvil.',
      },
      {
        title: 'Coherencia de marca',
        text: 'La misma filosofía de brújula para que recordar y compartir momentos sea igual de fluido en el móvil y en el ordenador.',
      },
    ],
  },
};

const en: typeof es = {
  tagline: 'How I scaled a complex design system with the help of AI.',
  description:
    'I led the concept, architecture and scaling of Compass, the design system of PinsXP: a social platform to save, share and connect moments and places. I brought AI-assisted workflows into the process to unify and speed up the design of new experiences.',
  brief: 'Design a system that guarantees a consistent, scalable visual experience across every PinsXP digital product.',
  details: [
    { label: 'Client', value: 'PinsXP' },
    { label: 'Role', value: 'Lead Product Designer' },
    { label: 'Location', value: 'Madrid, Spain' },
    { label: 'Type', value: 'Design system' },
  ],
  sections: {
    challenge: 'The challenge',
    solution: 'The solution: Compass',
    impact: 'The impact',
    next: 'Next steps',
  },
  challenge: {
    text: 'On PinsXP, people save their favourite places, build travel itineraries or plans, and share moments with groups of friends. As the startup grew, designing screens and flows in isolation began to cause <strong>visual inconsistencies and slow down development</strong>.',
    alts: [
      'PinsXP screens before the design system',
      'Close-up of non-standardised components',
      'App screen with a complex state',
    ],
    problemTitle: 'The problem',
    problems: [
      {
        title: 'No standard components',
        text: 'The lack of standards slowed down the creation of new flows and screens.',
      },
      {
        title: 'Everyday elements done differently',
        text: 'Saved-place cards, group creation and plan lists were each solved in a different way.',
      },
      {
        title: 'Friction with engineering',
        text: 'Handling empty states or switching between light and dark mode took up too much operational time.',
      },
    ],
  },
  solution: {
    text: 'I designed the strategy and architecture of a design system built to grow with the product.',
    alts: ['Compass component architecture', 'Compass components in light and dark mode'],
    callout:
      'I named it <strong>Compass</strong> because it works like one: it points design and engineering in the same direction, so saving, sharing and discovering places always keeps the same visual and usability rhythm.',
    cards: [
      {
        title: 'Primitives and semantics',
        text: 'I separated the base values (primitives) from the layer with a functional purpose (semantics). That way, switching between light and dark mode is handled cleanly and automatically.',
      },
      {
        title: 'Assisted by Claude',
        text: 'I brought in Claude as a strategic assistant to define and align the design rules, naming and technical specs of the system in a fast and rigorous way.',
      },
      {
        title: 'Developer handoff',
        text: 'Every new component ships documented: text overflow, size constraints and all of its states (loading, empty, error, success and disabled).',
      },
    ],
  },
  impact: {
    panel: {
      title: ['', 'Figma', ' Properties Panel'],
      tokens: [
        {
          term: 'Primitives (Base Tokens):',
          text: 'The raw palette of fixed values (colors, scales, and measurements) that serve as the unalterable foundation of the system.',
        },
        {
          term: 'Semantics (Intent Tokens):',
          text: 'The logical layer assigning a functional purpose to each value (e.g., backgrounds, text, borders, or states), enabling clean, automated management between Light Mode and Dark Mode without breaking visual consistency.',
        },
      ],
    },
    alt: 'Compass variables in Figma: the primitives collection and the semantics collection with their light and dark mode values',
    cards: [
      {
        title: 'From friction to modularity',
        text: 'Building new social flows, such as sharing collections or coordinating group plans, went from a handcrafted process to a modular, predictable one.',
      },
      {
        title: 'Full synergy with engineering',
        text: 'Aligning the design variables with the structure of the development team kept errors and code review time to a minimum.',
      },
      {
        title: 'A consistent experience',
        text: 'Every screen now reflects a cohesive, accessible interface, optimised for saving and sharing experiences without friction.',
      },
    ],
  },
  next: {
    title: 'Bringing Compass to the web (desktop and responsive)',
    text: 'As PinsXP grows, people need to manage their itineraries and shared collections more comfortably on large screens. The challenge: turning the mobile ecosystem into a robust, responsive web experience.',
    cards: [
      {
        title: 'Grid and breakpoints',
        text: 'A new layer of web components in Figma with flexible grids, clear breakpoints and information densities designed for desktop, while keeping visual parity with the app.',
      },
      {
        title: 'Web-ready components',
        text: 'Inspired by shadcn/ui: itinerary tables, group dropdowns, nested modals and side navigation that feel native on both web and mobile.',
      },
      {
        title: 'Brand consistency',
        text: 'The same compass philosophy, so remembering and sharing moments feels just as smooth on a phone as on a computer.',
      },
    ],
  },
};

export default { es, en } satisfies Localized<typeof es>;
