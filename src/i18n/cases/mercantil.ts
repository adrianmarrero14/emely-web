import type { Localized } from '..';

// Content of the Mercantil Banco case study. `en` must have exactly the shape of `es` (checked by the type).
// Strings may contain <strong> only; they are rendered with set:html.

const es = {
  tagline: 'Rediseño de la banca móvil de Mercantil Banco Panamá para sus clientes en Venezuela.',
  description:
    'Mercantil Banco, S.A. forma parte del sistema financiero de Panamá, donde opera desde hace cuatro décadas. Desde 2007 cuenta con licencia general para ofrecer productos y servicios bancarios a personas y empresas en el mercado local.',
  brief: 'Rediseñar la aplicación de banca móvil de Mercantil Banco Panamá para los clientes que viven en Venezuela.',
  details: [
    { label: 'Cliente', value: 'Mercantil Banco' },
    { label: 'Rol', value: 'Diseñadora UX/UI' },
    { label: 'Ubicación', value: 'Ciudad de Panamá, Panamá' },
    { label: 'Tipo', value: 'Banca móvil' },
  ],
  note: '',
  // Table of contents (short) and section headings
  toc: {
    challenge: 'El reto',
    process: 'Proceso de diseño',
    persona: 'User persona',
    empathy: 'Mapa de empatía',
    interviews: 'Entrevistas',
    data: 'Análisis de datos',
    goals: 'Desafíos y objetivos',
    solution: 'La solución',
    sketches: 'Prototipado rápido',
    prototype: 'Prototipo',
    conclusions: 'Testeo y conclusiones',
  },
  titles: {
    goals: 'Desafíos, oportunidades y objetivos',
    prototype: 'Prototipo en alta fidelidad',
  },
  phases: {
    empathize: 'Empatizar',
    define: 'Definir',
    ideate: 'Idear',
    prototype: 'Prototipar',
    test: 'Probar',
  },
  challenge: {
    callout:
      'Lograr un diseño atractivo y profesional que mantuviera la identidad de la marca y el flujo de usuario existente, y que al mismo tiempo se adaptara a las regulaciones, el mercado, las restricciones financieras y las necesidades concretas de los usuarios en Venezuela.',
    alt: 'Ilustración de Mercantil Banco',
  },
  process: {
    text: 'Trabajé con la metodología Design Thinking en cinco fases: <strong>empatizar, definir, idear, prototipar y probar</strong>.',
    steps: [
      {
        title: 'Empatizar',
        items: [
          'Comprender profundamente a los usuarios venezolanos que usen Mercantil Panamá, sus necesidades financieras, desafíos y expectativas.',
          'Realizar entrevistas, encuestas y análisis de datos para obtener una comprensión completa de los usuarios y su contexto.',
        ],
      },
      {
        title: 'Definir',
        items: [
          'Definir los desafíos, oportunidades y objetivos del rediseño.',
          'Establecer puntos clave que la aplicación debe abordar para satisfacer las necesidades de los usuarios, cumplir con las regulaciones y mantener la identidad de la marca.',
        ],
      },
      {
        title: 'Idear',
        items: ['Prototipado rápido y exploración de diversas opciones para mejorar la experiencia del usuario.'],
      },
      {
        title: 'Prototipar',
        items: ['Crear prototipos de la aplicación bancaria rediseñada.'],
      },
      {
        title: 'Probar',
        items: [
          'Someter los prototipos a pruebas con usuarios reales para evaluar su usabilidad, identificar puntos débiles y recopilar retroalimentación.',
        ],
      },
    ],
  },
  persona: {
    alt: 'Leonardo Gil Rojas, user persona del proyecto',
    facts: [
      { label: 'Edad', value: '26 años' },
      { label: 'Ubicación', value: 'Caracas, Venezuela' },
      { label: 'Estado civil', value: 'Soltero' },
      { label: 'Estudios', value: 'Escuela Nacional de Arte Dramático de Caracas' },
      { label: 'Profesión', value: 'Actor de teatro y animador de motion graphics' },
      { label: 'Ingresos', value: '600 € brutos al mes' },
    ],
    bioTitle: 'Biografía',
    bio: 'Leonardo es un apasionado de las artes escénicas y la animación. Tras el instituto, se formó como actor en la Escuela Nacional de Arte Dramático de Caracas. En paralelo, aprendió de forma autodidacta motion graphics y animación por ordenador, lo que le permitió lanzar una exitosa carrera freelance: hoy trabaja para clientes internacionales a través de plataformas en línea.',
    needsTitle: 'Necesidades',
    needs: [
      'Acceso a servicios financieros internacionales.',
      'Seguridad y estabilidad financiera.',
      'Facilidad de uso y acceso remoto.',
      'Herramientas para manejar divisas, ya que trabaja con clientes internacionales.',
    ],
    painsTitle: 'Puntos de dolor',
    pains: [
      'Restricciones para acceder a divisas extranjeras.',
      'Inestabilidad económica.',
      'Dificultades para hacer transacciones internacionales.',
      'Servicios financieros limitados.',
    ],
  },
  empathy: {
    text: 'Qué piensa, siente, oye, ve, dice y hace Leonardo, y cuáles son sus frustraciones y motivaciones.',
    label:
      'Mapa de empatía de Leonardo: le preocupa la estabilidad económica, valora la independencia laboral y busca opciones para gestionar sus finanzas',
    quadrants: [
      {
        title: '¿Piensa y siente?',
        hint: '¿Principales preocupaciones? ¿Preocupaciones y aspiraciones?',
        items: [
          'Preocupación sobre la estabilidad',
          'Orgullo por sus habilidades creativas',
          'Deseo de encontrar una situación financiera más estable y segura.',
        ],
      },
      {
        title: '¿Qué oye?',
        hint: '¿Qué dicen los amigos? ¿Qué dice la familia? ¿Qué dicen los clientes?',
        items: ['Solicitudes de proyectos', 'Inestabilidad Económica', 'Experiencias de Otros Freelancers'],
      },
      {
        title: '¿Qué ve?',
        hint: 'Ambiente, amigos. ¿Qué ofrece el mercado?',
        items: ['Clientes Internacionales', 'Plataformas Digitales de Trabajo', 'Fluctuaciones Económicas en Venezuela'],
      },
      {
        title: '¿Qué dice y hace?',
        hint: 'Actitud en publico. Apariencia. ¿Comportamiento hacia los demás?',
        items: [
          'Dedica tiempo a proyectos de animación',
          'Comprometido',
          'Colabora con Clientes',
          'Creativo',
          'Investiga y consulta diferentes opciones para gestionar mejor sus finanzas',
        ],
      },
      {
        title: '¿Qué le duele?',
        hint: 'Miedos, frustraciones, obstáculos',
        items: [
          'Preocupación constante sobre la volatilidad económica',
          'Limitaciones Bancarias',
          'Expectativas de cumplir con las demandas creativas de sus clientes mientras enfrenta desafíos financieros.',
        ],
      },
      {
        title: '¿Qué gana?',
        hint: 'Deseo/necesidad, medidas de éxito, logros',
        items: [
          'Experiencia Internacional',
          'Satisfacción Creativa',
          'Independencia Laboral: Libertad para trabajar de manera independiente y seguir sus pasiones creativas.',
        ],
      },
    ],
  },
  interviews: {
    text: 'Estas frases resumen las opiniones de usuarios en Venezuela sobre la app de Mercantil Banco Panamá: lo que valoran y lo que se puede mejorar.',
    items: [
      {
        name: 'Giovanna Gripa',
        quote:
          'Es frustrante que la app no ofrezca opciones claras para las transacciones internacionales. Me hace perder tiempo y dinero con comisiones altas.',
        insight: 'Necesita opciones claras',
      },
      {
        name: 'Anneliesse Istillarte',
        quote:
          'Aprecio la aplicación, pero necesita una interfaz más amigable. Sería genial si fuera más intuitiva para usuarios no tan familiarizados con la tecnología.',
        insight: 'Interfaz amigable (evaluación heurística)',
      },
      {
        name: 'Leonardo Gil Rojas',
        quote:
          'Me gustaría ver más opciones para gestionar divisas extranjeras. Sería genial tener herramientas más flexibles para trabajar con mis clientes internacionales.',
        insight: 'Necesita gestionar sus divisas',
      },
    ],
  },
  data: {
    text: 'Los datos de uso me ayudaron a contextualizar el problema y a orientar el diseño, validando comportamientos que reflejan las necesidades y dificultades reales de los usuarios.',
    groups: [
      {
        group: 'Patrones de uso',
        stats: [
          { value: '70 %', label: 'Frecuencia de acceso', text: 'de los usuarios entra en la app al menos dos veces al día.' },
          { value: '60 %', label: 'Funciones más usadas', text: 'de las interacciones son transferencias y consultas de saldo.' },
          { value: '+30 %', label: 'Momento de mayor uso', text: 'de tráfico los viernes por la mañana.' },
        ],
      },
      {
        group: 'Transacciones',
        stats: [
          { value: '45 %', label: 'Tipo de transacción', text: 'son transferencias entre cuentas propias.' },
          { value: '20 %', label: 'Internacionales', text: 'de las transacciones mensuales, sobre todo a EE. UU. y Colombia.' },
        ],
      },
      {
        group: 'Perfil de los usuarios',
        stats: [
          { value: '55 %', label: 'Ubicación', text: 'vive en Caracas, seguido de Maracaibo con un 20 %.' },
          { value: '65 %', label: 'Edad y género', text: 'tiene entre 25 y 40 años, con una distribución equitativa entre géneros.' },
        ],
      },
      {
        group: 'Retención y abandono',
        stats: [
          { value: '80 %', label: 'Retención', text: 'de los usuarios vuelve a la app cada semana.' },
          {
            value: '25 %',
            label: 'Punto de abandono',
            text: 'abandona al intentar una transacción internacional por falta de claridad en las tarifas.',
          },
        ],
      },
      {
        group: 'Opiniones de los usuarios',
        stats: [
          { value: '70 %', label: 'Reseñas positivas', text: 'destaca la facilidad de uso.' },
          { value: '30 %', label: 'Reseñas críticas', text: 'pide más claridad en las transacciones internacionales.' },
          { value: '40 %', label: 'Encuestas', text: 'reclama más herramientas para gestionar divisas extranjeras.' },
        ],
      },
    ],
    callout:
      'El dato clave: el 25 % de los usuarios abandona al intentar una transacción internacional porque no entiende las tarifas.',
    gifAlt: 'Animación con los datos de uso de la app',
  },
  goals: {
    text: 'Con la investigación, resumí así lo que había que mejorar en la aplicación:',
    cards: [
      {
        title: 'Desafíos',
        items: [
          'Dar claridad a las transacciones internacionales.',
          'Mejorar la accesibilidad para quienes están menos familiarizados con la tecnología.',
          'Garantizar la seguridad y la estabilidad de las operaciones.',
        ],
      },
      {
        title: 'Oportunidades',
        items: [
          'Ampliar las herramientas para manejar divisas extranjeras.',
          'Simplificar la interfaz para hacerla más intuitiva.',
          'Potenciar la experiencia con funcionalidades eficientes.',
        ],
      },
      {
        title: 'Objetivos',
        items: [
          '<strong>Optimizar las transacciones internacionales</strong> para agilizarlas y reducir tiempos y costes.',
          '<strong>Mejorar la usabilidad</strong> para que la app sea intuitiva y accesible para todos.',
          '<strong>Aumentar la confianza y la satisfacción</strong> con una plataforma segura, estable y funcional.',
        ],
      },
    ],
    alt: 'Ilustración de una persona trabajando con su portátil',
  },
  solution: {
    text: 'Tras valorar varias alternativas basadas en las necesidades de los usuarios y los desafíos detectados, el equipo eligió la solución más eficaz, centrada en tres frentes de experiencia de usuario y accesibilidad:',
    cards: [
      {
        title: 'Transacciones internacionales',
        text: 'Una interfaz clara y detallada para operaciones globales, con tasas, plazos y opciones de conversión visibles.',
      },
      {
        title: 'Usabilidad y accesibilidad',
        text: 'Una interfaz más simple para usuarios menos familiarizados con la tecnología, con iconografía intuitiva y una navegación clara.',
      },
      {
        title: 'Seguridad y estabilidad',
        text: 'Medidas de seguridad reforzadas para proteger la información financiera, y una app más estable que evita bloqueos y errores frecuentes.',
      },
    ],
  },
  sketches: {
    text: 'Exploré soluciones con bocetos rápidos de las pantallas y funciones clave. Estos esquemas me permitieron probar ideas con flexibilidad y agilidad antes de pasar a alta fidelidad.',
    alts: [
      'Boceto del flujo de envío: importe, cuenta de destino y comisión',
      'Boceto de transferencia internacional con detalle de tasas y tiempos',
      'Boceto del resumen de la operación y la verificación con código de seguridad',
      'Boceto de la navegación hacia enviar dinero y transferencias internacionales',
    ],
  },
  prototype: {
    text: 'Explora el <strong>prototipo interactivo</strong> y descubre todas las posibilidades de la nueva experiencia.',
    iframeTitle: 'Prototipo interactivo de Mercantil Banco en Figma',
  },
  conclusions: {
    text: 'Probé el rediseño en distintas etapas con pruebas de usabilidad y feedback de usuarios con perfiles variados, desde personas poco familiarizadas con la tecnología hasta usuarios expertos.',
    cards: [
      {
        title: 'Más claridad',
        text: 'La interfaz resultó más clara y fácil de navegar, sobre todo en las transacciones internacionales. La información sobre tasas, plazos y conversión fue muy valorada, incluso por quienes tenían poca experiencia.',
      },
      {
        title: 'Más accesible',
        text: 'La nueva iconografía y la navegación simplificada permitieron a los usuarios menos tecnológicos moverse por la app con más fluidez y seguridad.',
      },
      {
        title: 'Más confianza',
        text: 'Los usuarios percibieron transacciones más fiables y una disminución significativa de los errores y bloqueos que sufrían antes.',
      },
    ],
    callout:
      'El resultado: una banca móvil más amigable, funcional y segura para los clientes de Mercantil Banco Panamá en Venezuela, respaldada por los comentarios y resultados de las pruebas.',
  },
};

const en: typeof es = {
  tagline: 'Redesigning the Mercantil Banco Panamá mobile banking app for its customers in Venezuela.',
  description:
    'Mercantil Banco, S.A. is part of the Panamanian financial system, where it has operated for four decades. Since 2007 it has held a general licence to offer banking products and services to individuals and businesses in the local market.',
  brief: 'Redesign the Mercantil Banco Panamá mobile banking app for customers living in Venezuela.',
  details: [
    { label: 'Client', value: 'Mercantil Banco' },
    { label: 'Role', value: 'UX/UI Designer' },
    { label: 'Location', value: 'Panama City, Panama' },
    { label: 'Type', value: 'Mobile banking' },
  ],
  note: 'Hand-drawn sketches keep their original language, Spanish.',
  toc: {
    challenge: 'The challenge',
    process: 'Design process',
    persona: 'User persona',
    empathy: 'Empathy map',
    interviews: 'Interviews',
    data: 'Data analysis',
    goals: 'Challenges and goals',
    solution: 'The solution',
    sketches: 'Rapid prototyping',
    prototype: 'Prototype',
    conclusions: 'Testing and conclusions',
  },
  titles: {
    goals: 'Challenges, opportunities and goals',
    prototype: 'High-fidelity prototype',
  },
  phases: {
    empathize: 'Empathize',
    define: 'Define',
    ideate: 'Ideate',
    prototype: 'Prototype',
    test: 'Test',
  },
  challenge: {
    callout:
      'Create an attractive, professional design that kept the brand identity and the existing user flow, while adapting to the regulations, the market, the financial restrictions and the specific needs of users in Venezuela.',
    alt: 'Mercantil Banco illustration',
  },
  process: {
    text: 'I followed the Design Thinking methodology in five phases: <strong>empathize, define, ideate, prototype and test</strong>.',
    steps: [
      {
        title: 'Empathize',
        items: [
          'Gain a deep understanding of Venezuelan users of Mercantil Panamá: their financial needs, challenges and expectations.',
          'Run interviews, surveys and data analysis to fully understand the users and their context.',
        ],
      },
      {
        title: 'Define',
        items: [
          'Define the challenges, opportunities and goals of the redesign.',
          'Set out the key points the app must address to meet users’ needs, comply with regulations and keep the brand identity.',
        ],
      },
      {
        title: 'Ideate',
        items: ['Rapid prototyping and exploration of different options to improve the user experience.'],
      },
      {
        title: 'Prototype',
        items: ['Build prototypes of the redesigned banking app.'],
      },
      {
        title: 'Test',
        items: [
          'Test the prototypes with real users to assess their usability, spot weak points and gather feedback.',
        ],
      },
    ],
  },
  persona: {
    alt: 'Leonardo Gil Rojas, the project’s user persona',
    facts: [
      { label: 'Age', value: '26' },
      { label: 'Location', value: 'Caracas, Venezuela' },
      { label: 'Marital status', value: 'Single' },
      { label: 'Education', value: 'National School of Dramatic Art, Caracas' },
      { label: 'Occupation', value: 'Stage actor and motion graphics animator' },
      { label: 'Income', value: '€600 gross per month' },
    ],
    bioTitle: 'Biography',
    bio: 'Leonardo is passionate about the performing arts and animation. After secondary school he trained as an actor at the National School of Dramatic Art in Caracas. At the same time, he taught himself motion graphics and computer animation, which let him build a successful freelance career: today he works for international clients through online platforms.',
    needsTitle: 'Needs',
    needs: [
      'Access to international financial services.',
      'Financial security and stability.',
      'Ease of use and remote access.',
      'Tools to handle foreign currency, since he works with international clients.',
    ],
    painsTitle: 'Pain points',
    pains: [
      'Restricted access to foreign currency.',
      'Economic instability.',
      'Difficulties making international transactions.',
      'Limited financial services.',
    ],
  },
  empathy: {
    text: 'What Leonardo thinks, feels, hears, sees, says and does, and what frustrates and motivates him.',
    label:
      'Leonardo’s empathy map: he worries about economic stability, values working independently and looks for ways to manage his finances',
    quadrants: [
      {
        title: 'What does he think and feel?',
        hint: 'Main worries? Concerns and aspirations?',
        items: [
          'Worry about stability',
          'Pride in his creative skills',
          'Wish for a more stable and secure financial situation.',
        ],
      },
      {
        title: 'What does he hear?',
        hint: 'What do friends say? What does family say? What do clients say?',
        items: ['Project requests', 'Economic instability', 'Other freelancers’ experiences'],
      },
      {
        title: 'What does he see?',
        hint: 'Environment, friends. What does the market offer?',
        items: ['International clients', 'Digital work platforms', 'Economic fluctuations in Venezuela'],
      },
      {
        title: 'What does he say and do?',
        hint: 'Attitude in public. Appearance. Behaviour towards others?',
        items: [
          'Spends time on animation projects',
          'Committed',
          'Works closely with clients',
          'Creative',
          'Researches and compares options to manage his finances better',
        ],
      },
      {
        title: 'What hurts?',
        hint: 'Fears, frustrations, obstacles',
        items: [
          'Constant worry about economic volatility',
          'Banking limitations',
          'Pressure to meet his clients’ creative demands while facing financial challenges.',
        ],
      },
      {
        title: 'What does he gain?',
        hint: 'Wants/needs, measures of success, achievements',
        items: [
          'International experience',
          'Creative fulfilment',
          'Independence: the freedom to work on his own terms and follow his creative passions.',
        ],
      },
    ],
  },
  interviews: {
    text: 'These quotes sum up what users in Venezuela think of the Mercantil Banco Panamá app: what they value and what could be better.',
    items: [
      {
        name: 'Giovanna Gripa',
        quote:
          'It’s frustrating that the app doesn’t offer clear options for international transactions. I lose time and money on high fees.',
        insight: 'Needs clear options',
      },
      {
        name: 'Anneliesse Istillarte',
        quote:
          'I like the app, but it needs a friendlier interface. It would be great if it were more intuitive for people who aren’t so comfortable with technology.',
        insight: 'Friendly interface (heuristic evaluation)',
      },
      {
        name: 'Leonardo Gil Rojas',
        quote:
          'I’d like more options to manage foreign currency. It would be great to have more flexible tools to work with my international clients.',
        insight: 'Needs to manage his currencies',
      },
    ],
  },
  data: {
    text: 'Usage data helped me put the problem in context and steer the design, confirming behaviours that reflect users’ real needs and difficulties.',
    groups: [
      {
        group: 'Usage patterns',
        stats: [
          { value: '70%', label: 'Access frequency', text: 'of users open the app at least twice a day.' },
          { value: '60%', label: 'Most used features', text: 'of interactions are transfers and balance checks.' },
          { value: '+30%', label: 'Peak time', text: 'more traffic on Friday mornings.' },
        ],
      },
      {
        group: 'Transactions',
        stats: [
          { value: '45%', label: 'Transaction type', text: 'are transfers between the user’s own accounts.' },
          { value: '20%', label: 'International', text: 'of monthly transactions, mostly to the US and Colombia.' },
        ],
      },
      {
        group: 'User profile',
        stats: [
          { value: '55%', label: 'Location', text: 'live in Caracas, followed by Maracaibo with 20%.' },
          { value: '65%', label: 'Age and gender', text: 'are between 25 and 40, with an even gender split.' },
        ],
      },
      {
        group: 'Retention and drop-off',
        stats: [
          { value: '80%', label: 'Retention', text: 'of users come back to the app every week.' },
          {
            value: '25%',
            label: 'Drop-off point',
            text: 'give up when trying an international transaction because the fees are unclear.',
          },
        ],
      },
      {
        group: 'User feedback',
        stats: [
          { value: '70%', label: 'Positive reviews', text: 'highlight how easy it is to use.' },
          { value: '30%', label: 'Critical reviews', text: 'ask for more clarity in international transactions.' },
          { value: '40%', label: 'Surveys', text: 'want more tools to manage foreign currency.' },
        ],
      },
    ],
    callout:
      'The key insight: 25% of users drop off when trying an international transaction because they don’t understand the fees.',
    gifAlt: 'Animation with the app’s usage data',
  },
  goals: {
    text: 'From the research, I summed up what needed to improve in the app:',
    cards: [
      {
        title: 'Challenges',
        items: [
          'Bring clarity to international transactions.',
          'Improve accessibility for people less familiar with technology.',
          'Guarantee secure and stable operations.',
        ],
      },
      {
        title: 'Opportunities',
        items: [
          'Expand the tools for handling foreign currency.',
          'Simplify the interface to make it more intuitive.',
          'Enhance the experience with efficient features.',
        ],
      },
      {
        title: 'Goals',
        items: [
          '<strong>Optimise international transactions</strong> to speed them up and cut time and costs.',
          '<strong>Improve usability</strong> so the app is intuitive and accessible to everyone.',
          '<strong>Increase trust and satisfaction</strong> with a secure, stable and functional platform.',
        ],
      },
    ],
    alt: 'Illustration of a person working on a laptop',
  },
  solution: {
    text: 'After weighing several alternatives based on users’ needs and the challenges we had identified, the team chose the most effective solution, focused on three areas of user experience and accessibility:',
    cards: [
      {
        title: 'International transactions',
        text: 'A clear, detailed interface for global operations, with fees, timescales and conversion options in plain sight.',
      },
      {
        title: 'Usability and accessibility',
        text: 'A simpler interface for users less familiar with technology, with intuitive icons and clear navigation.',
      },
      {
        title: 'Security and stability',
        text: 'Stronger security measures to protect financial information, and a more stable app that avoids frequent freezes and errors.',
      },
    ],
  },
  sketches: {
    text: 'I explored solutions with quick sketches of the key screens and features. These drafts let me test ideas flexibly and quickly before moving to high fidelity.',
    alts: [
      'Sketch of the send flow: amount, destination account and fee',
      'Sketch of an international transfer with fee and timing details',
      'Sketch of the transaction summary and verification with a security code',
      'Sketch of the navigation to send money and international transfers',
    ],
  },
  prototype: {
    text: 'Explore the <strong>interactive prototype</strong> and discover everything the new experience can do.',
    iframeTitle: 'Interactive Mercantil Banco prototype in Figma',
  },
  conclusions: {
    text: 'I tested the redesign at different stages with usability tests and feedback from users with a range of profiles, from people unfamiliar with technology to expert users.',
    cards: [
      {
        title: 'More clarity',
        text: 'The interface proved clearer and easier to navigate, especially for international transactions. Information about fees, timescales and conversion was highly valued, even by less experienced users.',
      },
      {
        title: 'More accessible',
        text: 'The new icons and simplified navigation let less tech-savvy users move around the app more smoothly and confidently.',
      },
      {
        title: 'More trust',
        text: 'Users perceived transactions as more reliable and noticed a significant drop in the errors and freezes they used to suffer.',
      },
    ],
    callout:
      'The result: friendlier, more functional and more secure mobile banking for Mercantil Banco Panamá customers in Venezuela, backed by user feedback and test results.',
  },
};

export default { es, en } satisfies Localized<typeof es>;
