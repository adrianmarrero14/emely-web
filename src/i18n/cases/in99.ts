import type { Localized } from '..';

// Content of the in99 case study. `en` must have exactly the shape of `es` (checked by the type).
// Strings may contain <strong> only; they are rendered with set:html.

const es = {
  tagline: 'Una calculadora de ahorro móvil para una startup de servicios profesionales.',
  description:
    'in99 ofrece servicios profesionales exclusivamente online. Gracias a una nueva alianza con entidades financieras, quiere acercar a sus clientes los productos de esas instituciones.',
  brief:
    'Diseñar una app móvil que funcione como calculadora de ahorro: que permita calcular y planificar los ahorros en función de distintas variables financieras.',
  details: [
    { label: 'Cliente', value: 'in99' },
    { label: 'Rol', value: 'Diseñadora UX/UI' },
    { label: 'Ubicación', value: 'Madrid, España' },
    { label: 'Tipo', value: 'App móvil fintech' },
  ],
  note: '',
  // Table of contents (short titles)
  toc: {
    challenge: 'El reto',
    process: 'Proceso de diseño',
    persona: 'User persona',
    empathy: 'Mapa de empatía',
    hmw: 'HMW y JTBD',
    hypothesis: 'Hipótesis y experimento',
    solution: 'La solución',
    flow: 'Flujo de usuario',
    wireframes: 'Wireframes',
    prototype: 'Prototipo',
    heuristics: 'Análisis heurístico',
    testing: 'Próximo paso',
  },
  // Section headings, when longer than the table of contents entry
  titles: {
    hmw: 'How Might We y Jobs To Be Done',
    prototype: 'Prototipo en alta fidelidad',
    testing: 'Próximo paso: probar con usuarios',
  },
  challenge: {
    callout:
      'Equilibrar la complejidad financiera con la usabilidad: una herramienta flexible, clara y accesible que, además, cumpla la normativa financiera y proteja la privacidad de los datos personales.',
    cards: [
      { title: 'Complejidad financiera', text: 'Ingresos, gastos deducibles, impuestos y productos de ahorro en una sola herramienta.' },
      { title: 'Usabilidad', text: 'Una interfaz clara y flexible para personas que no son expertas en finanzas.' },
      { title: 'Normativa y privacidad', text: 'Cumplir la regulación financiera y proteger los datos personales.' },
    ],
  },
  process: {
    text: 'Seguí un proceso de Design Thinking en cinco fases, de la investigación a la validación.',
    steps: [
      { title: 'Empatizar', text: 'Investigar las necesidades financieras de los usuarios.' },
      { title: 'Definir', text: 'Fijar los objetivos de la calculadora de ahorro y las funcionalidades necesarias.' },
      { title: 'Idear', text: 'Crear el flujo de usuario y wireframes interactivos para simular la experiencia.' },
      {
        title: 'Prototipar',
        text: 'Construir una interfaz atractiva y coherente, siguiendo principios de usabilidad y diseño centrado en el usuario.',
      },
      { title: 'Probar', text: 'Validar que la aplicación sea intuitiva y cumpla las expectativas de los usuarios.' },
    ],
  },
  persona: {
    alt: 'Antonio Valdés, user persona del proyecto',
    quote: '“El ahorro para la educación de mis hijos es mi prioridad”.',
    facts: [
      { label: 'Edad', value: '44 años' },
      { label: 'Ubicación', value: 'Madrid, España' },
      { label: 'Ocupación', value: 'Director de orquesta, autónomo' },
      { label: 'Familia', value: 'Casado, con 2 hijos y 1 en camino' },
    ],
    bio: 'Trabaja bajo el Régimen Especial de Trabajadores Autónomos. Con el tercer bebé en camino pasarán a ser familia numerosa, y su principal preocupación es ahorrar para la educación de sus hijos. Le gustan la música clásica y la danza contemporánea.',
    cards: [
      {
        title: 'Necesidades',
        text: 'Ahorrar dinero, equilibrar gastos y ahorro sin renunciar al estilo de vida de su familia y mejorar su situación económica.',
      },
      {
        title: 'Puntos de dolor',
        text: 'Necesita una solución flexible y sin burocracia que le ayude, de forma práctica, a ahorrar y mantener el estilo de vida familiar.',
      },
      {
        title: 'Perfil digital',
        text: 'Se maneja con soltura en internet, redes sociales, compras online y aplicaciones móviles.',
      },
    ],
  },
  empathy: {
    quadrants: [
      {
        title: '¿Qué piensa y siente?',
        hint: 'Preocupaciones y aspiraciones',
        items: ['Ahorrar para la universidad de sus hijos', 'La llegada del nuevo bebé', 'Controlar sus ingresos'],
      },
      {
        title: '¿Qué oye?',
        hint: 'Lo que dicen sus amigos y su familia',
        items: ['Su esposa, preocupada por los gastos', 'Planes de viaje con amigos', 'Su hijo mayor, emocionado por la universidad'],
      },
      {
        title: '¿Qué ve?',
        hint: 'Su entorno y lo que ofrece el mercado',
        items: ['Amigos que viajan con sus hijos', 'Su hijo mayor entra en la universidad', 'El nacimiento de su bebé', 'Planes de jubilación'],
      },
      {
        title: '¿Qué dice y hace?',
        hint: 'Actitud en público y con los demás',
        items: ['Profesional en su trabajo', 'Familiar', 'Comprometido', 'Amable con el personal de la orquesta', 'Los músicos con los que trabaja lo admiran'],
      },
    ],
    pains: {
      title: 'Dolores',
      hint: 'Miedos, frustraciones y obstáculos',
      items: ['Su situación económica con 3 hijos', 'Todo lo que paga en la declaración de la renta', 'Que se complique el parto'],
    },
    gains: {
      title: 'Ganancias',
      hint: 'Deseos, necesidades y logros',
      items: ['Mantener su calidad de vida y la de su familia', 'El bebé en camino', 'El premio de la orquesta'],
    },
  },
  hmw: {
    intro:
      'Las preguntas <strong>How Might We (HMW)</strong> convierten los retos difíciles en oportunidades creativas. La teoría de <strong>Jobs To Be Done (JTBD)</strong> sostiene que las personas no compran productos: buscan soluciones a los problemas de su vida.',
    quote:
      '“Cuando haga la declaración de la renta este año quiero pagar menos y ahorrar para la universidad de mis hijos, tener dinero para lo que necesite el bebé que viene y planificar las vacaciones de verano”.',
    hmwTitle: 'How Might We…',
    questions: [
      '¿Cómo podemos ayudar a Antonio a pagar menos en su declaración de la renta?',
      '¿Cómo podemos ayudar a Antonio a controlar los gastos del nuevo bebé?',
      '¿Cómo podemos ayudar a Antonio a ahorrar para la universidad de sus hijos?',
      '¿Cómo podemos ayudar a Antonio a planificar los gastos de sus vacaciones de verano?',
    ],
    jtbdTitle: 'Jobs To Be Done',
    jobs: [
      'Si Antonio paga menos en la declaración de la renta, tendrá más dinero disponible para sus planes de ahorro.',
      'Si Antonio controla los gastos del bebé que está por nacer, podrá planificar sin problemas las vacaciones de verano.',
    ],
  },
  hypothesis: {
    hypothesisTitle: 'Hipótesis',
    hypothesis:
      'Usuarios como Antonio, de familias numerosas y con dificultades económicas, buscan estrategias para pagar menos impuestos, ahorrar para necesidades futuras y mantener su nivel de vida y el de su familia.',
    experimentTitle: 'Experimento',
    experiment:
      'El experimento se centra en <strong>optimizar el cálculo de gastos deducibles</strong> para maximizar el ahorro en su actividad económica:',
    items: [
      'Una consulta de gastos para registrar y categorizar los gastos asociados a la llegada del bebé.',
      'Conexión con sus bancos para un registro detallado.',
      'Una calculadora de gastos deducibles que muestra el ahorro acumulado, con acceso a los detalles fiscales y a la estimación de pagos futuros.',
      'Asesoría fiscal, modelos de declaración y soporte para resolver consultas con Hacienda.',
      'Descuentos por invitar a amigos a unirse a la plataforma.',
    ],
  },
  solution: {
    text: 'Una <strong>calculadora de ahorro</strong> que ayuda a planificar y gestionar productos financieros para maximizar el rendimiento de las inversiones, adaptada al perfil y las metas de cada persona. Sus funciones clave:',
    features: [
      {
        title: 'Calculadora de ahorro',
        text: 'Planificar el ahorro y ver cuánto se acumula según el perfil y las metas personales.',
      },
      {
        title: 'Contratación de productos financieros',
        text: 'Acceder a los productos de las entidades asociadas para hacer crecer el rendimiento de las inversiones.',
      },
      {
        title: 'Invitar a amigos',
        text: 'Obtener descuentos al invitar a otras personas a unirse a la plataforma.',
      },
    ],
  },
  flow: {
    text: 'Estos son los pasos que sigue el usuario al usar la calculadora.',
    alt: 'Diagrama del flujo de usuario de la calculadora de ahorro',
    link: 'Ver el diagrama a tamaño completo',
  },
  wireframes: {
    text: 'Los wireframes de baja fidelidad representan la estructura básica de la interfaz: se centran en la disposición de los elementos, la funcionalidad y la organización del contenido, sin detalles visuales.',
    alt: 'Mapa de wireframes de in99: registro, inicio, ingresos, gastos, productos, invitar amigos y perfil',
    link: 'Ver los wireframes en Figma',
  },
  prototype: {
    text: 'El <strong>prototipo interactivo</strong> recorre el inicio de sesión y el camino feliz, la contratación de un plan de ahorro y la conexión con el banco.',
    // Same order as the screens in the view: login, home, expenses, summary
    alts: [
      'Inicio de sesión con correo, contraseña y huella',
      'Inicio con ingresos, gastos, impuestos y previsión del mes',
      'Registro de un gasto deducible con su explicación fiscal',
      'Resumen mensual del ahorro por categorías',
    ],
    cta: 'Pruébalo tú: navega por las pantallas como lo haría Antonio.',
    link: 'Abrir el prototipo en Figma',
  },
  heuristics: {
    intro:
      'Para definir la UX evalué la interfaz con las <strong>10 heurísticas de usabilidad de Jakob Nielsen</strong>, pautas que ayudan a detectar problemas potenciales y mejorar la experiencia. Así se aplica cada una en in99:',
    of: 'de',
    prev: 'Heurística anterior',
    next: 'Heurística siguiente',
    // Same order as heuristica-01…10.png
    items: [
      {
        title: 'Visibilidad del estado del sistema',
        text: 'El sistema debe mantener siempre informado al usuario, con una respuesta adecuada y en un tiempo razonable. Unas migas de pan o los pasos de un proceso ayudan a saber dónde se está en cada momento.',
        alt: 'Registro por pasos con barra de progreso, validación de campos y aviso de error de conexión',
      },
      {
        title: 'Coincidencia entre el sistema y el mundo real',
        text: 'Hablar el mismo idioma que los usuarios, con palabras y conceptos que les resulten familiares, y ordenar la información de forma natural y lógica.',
        alt: 'Pantallas de gastos deducibles explicados con ejemplos cotidianos',
      },
      {
        title: 'Control y libertad del usuario',
        text: 'Ofrecer siempre una forma de volver, eliminar, deshacer o editar.',
        alt: 'Pantallas de gastos con botón para volver y opción de añadir o guardar',
      },
      {
        title: 'Consistencia y estándares',
        text: 'Los usuarios no deberían preguntarse si palabras, situaciones o acciones distintas significan lo mismo. Si un botón de acción es verde, debe verse igual en todas las pantallas.',
        alt: 'Flujo del plan de ahorro con el mismo botón principal en todas las pantallas',
      },
      {
        title: 'Prevención de errores',
        text: 'Antes de diseñar buenos mensajes de error, hay que intentar evitarlos. En los formularios, explicar bien los requisitos de cada campo.',
        alt: 'Formulario con los requisitos de cada campo indicados de antemano',
      },
      {
        title: 'Reconocer mejor que recordar',
        text: 'Evitar que el usuario tenga que memorizar objetos, acciones u opciones: deben estar visibles para no tener que recordar información de un paso a otro.',
        alt: 'Resumen de ahorro con la información del paso anterior siempre visible',
      },
      {
        title: 'Flexibilidad y eficiencia de uso',
        text: 'Los atajos, invisibles para quien empieza, aceleran la interacción de los usuarios expertos. Así el sistema sirve a ambos.',
        alt: 'Pantalla de ahorro con accesos rápidos',
      },
      {
        title: 'Diseño estético y minimalista',
        text: 'Menos es más: cada dato extra compite con la información importante y le resta jerarquía.',
        alt: 'Pantallas limpias con la información esencial',
      },
      {
        title: 'Reconocer, diagnosticar y recuperarse de errores',
        text: 'Un lenguaje común y llano ayuda a identificar el problema y sugiere una solución.',
        alt: 'Mensajes de error claros con la solución propuesta',
      },
      {
        title: 'Ayuda y documentación',
        text: 'Lo ideal es que la app se use sin documentación. Aun así, un buen buscador, un asistente o unas buenas preguntas frecuentes ayudan en caso de duda.',
        alt: 'Pantallas de ayuda con buscador, información y preguntas frecuentes',
      },
    ],
  },
  testing: {
    text: 'Con la solución definida, toca validarla sin olvidar que <strong>no somos el usuario final</strong>. Estos son los métodos propuestos:',
    cards: [
      {
        title: 'Test de percepción',
        text: 'Mostrar una pantalla durante 2 a 5 segundos y preguntar después qué se ha entendido de ella.',
      },
      {
        title: 'Mapas de calor y grabaciones',
        text: 'Observar cómo se desplazan los usuarios y qué zonas captan su atención mientras usan la app.',
      },
      {
        title: 'Test con usuarios',
        text: 'Probar con personas reales para alinear el diseño con sus expectativas y corregir errores antes del lanzamiento.',
      },
    ],
  },
};

const en: typeof es = {
  tagline: 'A mobile savings calculator for a professional services startup.',
  description:
    'in99 offers professional services exclusively online. Through a new partnership with financial institutions, it wants to bring those institutions’ products closer to its customers.',
  brief:
    'Design a mobile app that works as a savings calculator, letting people calculate and plan their savings based on different financial variables.',
  details: [
    { label: 'Client', value: 'in99' },
    { label: 'Role', value: 'UX/UI Designer' },
    { label: 'Location', value: 'Madrid, Spain' },
    { label: 'Type', value: 'Fintech mobile app' },
  ],
  note: 'in99 is a Spanish product, so its screens, wireframes and user flow keep their original language.',
  toc: {
    challenge: 'The challenge',
    process: 'Design process',
    persona: 'User persona',
    empathy: 'Empathy map',
    hmw: 'HMW and JTBD',
    hypothesis: 'Hypothesis and experiment',
    solution: 'The solution',
    flow: 'User flow',
    wireframes: 'Wireframes',
    prototype: 'Prototype',
    heuristics: 'Heuristic evaluation',
    testing: 'Next step',
  },
  titles: {
    hmw: 'How Might We and Jobs To Be Done',
    prototype: 'High-fidelity prototype',
    testing: 'Next step: testing with users',
  },
  challenge: {
    callout:
      'Balancing financial complexity with usability: a flexible, clear and accessible tool that also complies with financial regulations and protects the privacy of personal data.',
    cards: [
      { title: 'Financial complexity', text: 'Income, deductible expenses, taxes and savings products in a single tool.' },
      { title: 'Usability', text: 'A clear, flexible interface for people who are not finance experts.' },
      { title: 'Regulation and privacy', text: 'Complying with financial regulations and protecting personal data.' },
    ],
  },
  process: {
    text: 'I followed a five-phase Design Thinking process, from research to validation.',
    steps: [
      { title: 'Empathize', text: 'Research the financial needs of users.' },
      { title: 'Define', text: 'Set the goals of the savings calculator and the features it needs.' },
      { title: 'Ideate', text: 'Create the user flow and interactive wireframes to simulate the experience.' },
      {
        title: 'Prototype',
        text: 'Build an appealing, consistent interface that follows usability and user-centred design principles.',
      },
      { title: 'Test', text: 'Validate that the app is intuitive and meets users’ expectations.' },
    ],
  },
  persona: {
    alt: 'Antonio Valdés, the project’s user persona',
    quote: '“Saving for my children’s education is my priority.”',
    facts: [
      { label: 'Age', value: '44' },
      { label: 'Location', value: 'Madrid, Spain' },
      { label: 'Occupation', value: 'Orchestra conductor, self-employed' },
      { label: 'Family', value: 'Married, with 2 children and 1 on the way' },
    ],
    bio: 'He is registered as self-employed under the Spanish special scheme for freelancers. With a third baby on the way they will become a large family, and his main concern is saving for his children’s education. He enjoys classical music and contemporary dance.',
    cards: [
      {
        title: 'Needs',
        text: 'Save money, balance spending and saving without giving up his family’s lifestyle, and improve his financial situation.',
      },
      {
        title: 'Pain points',
        text: 'He needs a flexible, bureaucracy-free solution that helps him, in a practical way, to save and keep up the family lifestyle.',
      },
      {
        title: 'Digital profile',
        text: 'Comfortable with the internet, social media, online shopping and mobile apps.',
      },
    ],
  },
  empathy: {
    quadrants: [
      {
        title: 'What does he think and feel?',
        hint: 'Worries and aspirations',
        items: ['Saving for his children’s university', 'The arrival of the new baby', 'Keeping his income under control'],
      },
      {
        title: 'What does he hear?',
        hint: 'What his friends and family say',
        items: ['His wife, worried about expenses', 'Travel plans with friends', 'His eldest son, excited about university'],
      },
      {
        title: 'What does he see?',
        hint: 'His surroundings and what the market offers',
        items: ['Friends travelling with their children', 'His eldest son starting university', 'The birth of his baby', 'Retirement plans'],
      },
      {
        title: 'What does he say and do?',
        hint: 'How he behaves in public and with others',
        items: ['Professional at work', 'Family-oriented', 'Committed', 'Kind to the orchestra staff', 'Admired by the musicians he works with'],
      },
    ],
    pains: {
      title: 'Pains',
      hint: 'Fears, frustrations and obstacles',
      items: ['His financial situation with 3 children', 'Everything he pays in his tax return', 'Complications during the birth'],
    },
    gains: {
      title: 'Gains',
      hint: 'Wishes, needs and achievements',
      items: ['Keeping his and his family’s quality of life', 'The baby on the way', 'The orchestra award'],
    },
  },
  hmw: {
    intro:
      '<strong>How Might We (HMW)</strong> questions turn hard challenges into creative opportunities. The <strong>Jobs To Be Done (JTBD)</strong> theory holds that people don’t buy products: they look for solutions to the problems in their lives.',
    quote:
      '“When I file my tax return this year, I want to pay less and save for my children’s university, have money for whatever the new baby needs, and plan our summer holidays.”',
    hmwTitle: 'How Might We…',
    questions: [
      'How might we help Antonio pay less on his tax return?',
      'How might we help Antonio keep the new baby’s expenses under control?',
      'How might we help Antonio save for his children’s university?',
      'How might we help Antonio plan the costs of his summer holidays?',
    ],
    jtbdTitle: 'Jobs To Be Done',
    jobs: [
      'If Antonio pays less on his tax return, he will have more money available for his savings plans.',
      'If Antonio keeps the expenses of the baby on the way under control, he will be able to plan the summer holidays without trouble.',
    ],
  },
  hypothesis: {
    hypothesisTitle: 'Hypothesis',
    hypothesis:
      'Users like Antonio, from large families facing financial difficulties, look for strategies to pay less tax, save for future needs and maintain their own and their family’s standard of living.',
    experimentTitle: 'Experiment',
    experiment:
      'The experiment focuses on <strong>optimising the calculation of deductible expenses</strong> to maximise the savings of his business activity:',
    items: [
      'An expense tracker to record and categorise the costs related to the baby’s arrival.',
      'A connection with his banks for detailed records.',
      'A deductible expenses calculator that shows the accumulated savings, with access to tax details and an estimate of future payments.',
      'Tax advice, tax return forms and support to resolve queries with the Spanish Tax Agency.',
      'Discounts for inviting friends to join the platform.',
    ],
  },
  solution: {
    text: 'A <strong>savings calculator</strong> that helps people plan and manage financial products to maximise the return on their investments, tailored to each person’s profile and goals. Its key features:',
    features: [
      {
        title: 'Savings calculator',
        text: 'Plan savings and see how much builds up according to personal profile and goals.',
      },
      {
        title: 'Financial products',
        text: 'Access the products of partner institutions to grow the return on investments.',
      },
      {
        title: 'Invite friends',
        text: 'Get discounts by inviting other people to join the platform.',
      },
    ],
  },
  flow: {
    text: 'These are the steps a user follows when using the calculator.',
    alt: 'User flow diagram of the savings calculator',
    link: 'View the full-size diagram',
  },
  wireframes: {
    text: 'The low-fidelity wireframes show the basic structure of the interface: they focus on the layout of elements, functionality and content organisation, without visual detail.',
    alt: 'in99 wireframe map: sign-up, home, income, expenses, products, invite friends and profile',
    link: 'View the wireframes in Figma',
  },
  prototype: {
    text: 'The <strong>interactive prototype</strong> covers signing in and the happy path, taking out a savings plan and connecting to the bank.',
    alts: [
      'Sign-in with email, password and fingerprint',
      'Home with income, expenses, taxes and the monthly forecast',
      'Logging a deductible expense with its tax explanation',
      'Monthly savings summary by category',
    ],
    cta: 'Try it yourself: move through the screens as Antonio would.',
    link: 'Open the prototype in Figma',
  },
  heuristics: {
    intro:
      'To shape the UX, I evaluated the interface against <strong>Jakob Nielsen’s 10 usability heuristics</strong>, guidelines that help spot potential problems and improve the experience. This is how each one applies to in99:',
    of: 'of',
    prev: 'Previous heuristic',
    next: 'Next heuristic',
    items: [
      {
        title: 'Visibility of system status',
        text: 'The system should always keep users informed, with appropriate feedback within a reasonable time. Breadcrumbs or the steps of a process help people know where they are at any moment.',
        alt: 'Step-by-step sign-up with a progress bar, field validation and a connection error message',
      },
      {
        title: 'Match between the system and the real world',
        text: 'Speak the users’ language, with words and concepts that are familiar to them, and present information in a natural, logical order.',
        alt: 'Deductible expense screens explained with everyday examples',
      },
      {
        title: 'User control and freedom',
        text: 'Always offer a way to go back, delete, undo or edit.',
        alt: 'Expense screens with a back button and the option to add or save',
      },
      {
        title: 'Consistency and standards',
        text: 'Users should not have to wonder whether different words, situations or actions mean the same thing. If an action button is green, it should look the same on every screen.',
        alt: 'Savings plan flow with the same primary button on every screen',
      },
      {
        title: 'Error prevention',
        text: 'Before designing good error messages, try to prevent errors in the first place. In forms, explain the requirements of each field clearly.',
        alt: 'Form with the requirements of each field stated upfront',
      },
      {
        title: 'Recognition rather than recall',
        text: 'Don’t make users memorise objects, actions or options: keep them visible so nobody has to remember information from one step to the next.',
        alt: 'Savings summary with the information from the previous step always visible',
      },
      {
        title: 'Flexibility and efficiency of use',
        text: 'Shortcuts, invisible to newcomers, speed up the interaction for expert users. That way the system serves both.',
        alt: 'Savings screen with quick shortcuts',
      },
      {
        title: 'Aesthetic and minimalist design',
        text: 'Less is more: every extra piece of data competes with the important information and weakens its hierarchy.',
        alt: 'Clean screens showing only the essential information',
      },
      {
        title: 'Help users recognise, diagnose and recover from errors',
        text: 'Plain, everyday language helps identify the problem and suggests a solution.',
        alt: 'Clear error messages with a suggested solution',
      },
      {
        title: 'Help and documentation',
        text: 'Ideally the app can be used without documentation. Even so, a good search, an assistant or a solid FAQ help whenever there is doubt.',
        alt: 'Help screens with search, information and frequently asked questions',
      },
    ],
  },
  testing: {
    text: 'With the solution defined, it is time to validate it, without forgetting that <strong>we are not the end user</strong>. These are the proposed methods:',
    cards: [
      {
        title: 'Five-second test',
        text: 'Show a screen for 2 to 5 seconds and then ask what people understood from it.',
      },
      {
        title: 'Heatmaps and session recordings',
        text: 'Watch how users move around and which areas catch their attention while they use the app.',
      },
      {
        title: 'User testing',
        text: 'Test with real people to align the design with their expectations and fix errors before launch.',
      },
    ],
  },
};

export default { es, en } satisfies Localized<typeof es>;
