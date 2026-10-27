import type { Localized } from '..';

// Content of the CrudeBeauty case study. `en` must have exactly the shape of `es` (checked by the type).
// Strings may contain <strong> only; they are rendered with set:html.

const es = {
  tagline: 'Identidad de marca y tienda online para una firma de aceites esenciales orgánicos.',
  description:
    'CrudeBeauty ofrece 9 aceites esenciales que conservan íntegras las propiedades originales de sus ingredientes y de los componentes usados en su elaboración.',
  brief:
    'Diseñar el sitio web y la tienda online de CrudeBeauty para presentar al mercado esta nueva marca de aceites esenciales de origen orgánico.',
  details: [
    { label: 'Cliente', value: 'CrudeBeauty' },
    { label: 'Rol', value: 'Diseñadora UX/UI' },
    { label: 'Ubicación', value: 'Madrid, España' },
    { label: 'Tipo', value: 'E-commerce y branding' },
  ],
  note: '',
  sections: {
    challenge: 'El reto',
    process: 'Proceso de diseño',
    competitors: 'Análisis competitivo',
    persona: 'User persona',
    solution: 'La solución',
    branding: 'Branding',
    prototype: 'Prototipo',
    conclusions: 'Conclusiones',
  },
  challenge: {
    callout:
      'Crear un diseño atractivo, juvenil y limpio con recursos limitados, a la altura de la competencia, que atrajera a nuevos usuarios, influencers, inversores y socios.',
    alt: 'Productos de CrudeBeauty',
  },
  process: {
    text: 'Seguí un proceso centrado en el usuario, de la investigación al prototipo validado.',
    steps: [
      { title: 'Empatizar', items: ['Investigación', 'Análisis de competencia', 'Personas'] },
      { title: 'Definir', items: ['Solución', 'MVP'] },
      { title: 'Idear', items: ['User flow', 'Wireframe'] },
      { title: 'Prototipar', items: ['Branding', 'Prototipo en alta'] },
      { title: 'Testear', items: ['User testing', 'Conclusiones'] },
    ],
  },
  competitors: {
    text: "Analicé las webs de tres marcas de referencia, <strong>The Ordinary, La Roche-Posay y Kiehl's</strong>, para identificar qué funcionalidades espera encontrar el usuario en una tienda de cosmética.",
    screensAlt: 'Web de {name} en escritorio y en móvil',
    logoAlt: 'Logotipo de {name}',
    featuresLabel: 'Funcionalidades de la web de {name}',
    conLabel: 'En contra:',
    // `pros` are the features each site offers; `cons` what works against it
    brands: [
      {
        pros: [
          'Banner con productos',
          'Galería de imágenes del producto',
          'Carrito de compras',
          'Recomendaciones y reseñas',
          'Registro y cuenta personal',
          'Sección “acerca de ellos”',
          'Newsletter',
          'Localizador de tiendas',
          'Preguntas frecuentes',
          'Bolsa de empleo',
          'Perfiles sociales',
        ],
        cons: [] as string[],
      },
      {
        pros: [
          'Banner con productos',
          'Banner promocional',
          'Carrito de compras',
          'Recomendaciones y reseñas',
          'Registro y cuenta personal',
          'Sección “acerca de ellos”',
          'Newsletter',
          'Localizador de tiendas',
          'Preguntas frecuentes',
          'Vídeos con productos',
          'Perfiles sociales',
          'Interfaz limpia',
        ],
        cons: [] as string[],
      },
      {
        pros: [
          'Banner con productos',
          'Banner promocional',
          'Carrito de compras',
          'Recomendaciones y reseñas',
          'Registro y cuenta personal',
          'Sección “acerca de ellos”',
          'Newsletter',
          'Localizador de tiendas',
          'Preguntas frecuentes',
          'Sección “Diagnóstico virtual”',
          'Perfiles sociales',
        ],
        cons: ['Interfaz con mucha información, elementos y colores'],
      },
    ],
  },
  persona: {
    alt: 'María Morales, user persona del proyecto',
    facts: [
      { label: 'Edad', value: '28 años' },
      { label: 'Ubicación', value: 'Madrid, España' },
      { label: 'Estado civil', value: 'Soltera' },
      { label: 'Estudios', value: 'Lengua y Literatura' },
      { label: 'Profesión', value: 'Profesora de idiomas' },
      { label: 'Ingresos', value: '24.000 € brutos al año' },
    ],
    bio: 'Enseña inglés y francés en una escuela de idiomas. Cuida su piel con una rutina de skincare y comparte en redes sociales los productos que va descubriendo.',
    cards: [
      {
        title: 'Motivación',
        text: 'Considera el cuidado de su piel una parte importante de su salud y bienestar.',
      },
      {
        title: 'Necesidades',
        text: 'Productos de calidad, eficaces para mantener la piel sana y seguros de usar.',
      },
      {
        title: 'Miedos',
        text: 'Usar mal un producto y sufrir daños permanentes, como manchas o irritaciones.',
      },
    ],
    shoppingTitle: '¿Cómo compra María sus productos de belleza?',
    shoppingText:
      'Antes de comprar, investiga: lee reseñas en línea, revisa los ingredientes y valora las necesidades de su piel. También sigue a bloggers y expertos para obtener recomendaciones.',
  },
  solution: {
    cards: [
      {
        title: 'Una estética fresca y juvenil',
        text: 'Creé un nuevo logotipo y diseñé envases que reflejan la identidad de la marca.',
      },
      {
        title: 'Una web que vende',
        text: 'Banners llamativos, recomendaciones de aceites según el tipo de piel y carrito de compra.',
      },
      {
        title: 'Un MVP para aprender rápido',
        text: 'Lanzar cuanto antes con las funciones mínimas para atraer a los primeros usuarios y validar mejoras con el menor esfuerzo.',
      },
    ],
    alt: 'Web de CrudeBeauty en móvil: página de inicio y blog',
    featuresLabel: 'Funcionalidades del MVP',
    features: [
      'Banner con producto',
      'Banner promocional',
      'Carrito de compras',
      'Blog',
      'Perfiles sociales',
      'Sección «Nosotros»',
      'Interfaz limpia',
    ],
  },
  branding: {
    text: 'El logotipo combina dos palabras en una tipografía elegante y natural, dividida en dos líneas para lograr equilibrio visual y rematada con un punto final.',
    logoAlt: 'Logotipo de CrudeBeauty',
    colorsTitle: 'Colores',
    typeTitle: 'Tipografía',
    type: [
      { label: 'Títulos', value: 'Gotham Book' },
      { label: 'Subtítulos', value: 'Gotham Book' },
      { label: 'Párrafos', value: 'Gotham Book' },
      { label: 'Precios', value: 'Gotham Medium' },
    ],
    colorsAlt: 'Envases de CrudeBeauty con la paleta de la marca',
    iconsTitle: 'Iconografía',
    iconsText:
      'Elegí un conjunto de iconos fiel a la estética de la marca para garantizar una apariencia uniforme en todo el producto.',
    iconsAlt: 'Conjunto de iconos de CrudeBeauty',
  },
  prototype: {
    text: 'Explora el <strong>prototipo interactivo</strong> y descubre todas las posibilidades de la interfaz.',
    title: 'Prototipo interactivo de CrudeBeauty en Figma',
  },
  conclusions: {
    paragraphs: [
      'Las pruebas de la solución confirmaron una estrategia sólida para dar visibilidad a CrudeBeauty. La estética fresca y juvenil, el nuevo logotipo y unos envases que capturan la esencia de la marca sentaron las bases de una identidad visual vibrante y atractiva.',
      'La web, con banners cautivadores y carrito de compra, ofrece una plataforma sólida para atraer a los primeros usuarios. Concebida como un MVP, reúne un conjunto básico pero eficaz de funcionalidades que permite salir al mercado en tiempo récord.',
    ],
    callout:
      'Recoger feedback desde el inicio permitirá ajustar y ampliar las funcionalidades según las necesidades reales de los clientes, garantizando un crecimiento continuo y una gran experiencia de usuario.',
  },
};

const en: typeof es = {
  tagline: 'Brand identity and online store for an organic essential oils company.',
  description:
    'CrudeBeauty offers 9 essential oils that fully preserve the original properties of their ingredients and of the components used to make them.',
  brief:
    'Design the CrudeBeauty website and online store to introduce this new brand of organic essential oils to the market.',
  details: [
    { label: 'Client', value: 'CrudeBeauty' },
    { label: 'Role', value: 'UX/UI Designer' },
    { label: 'Location', value: 'Madrid, Spain' },
    { label: 'Type', value: 'E-commerce & branding' },
  ],
  note: 'The online store was designed in Spanish, so its screens keep their original language.',
  sections: {
    challenge: 'The challenge',
    process: 'Design process',
    competitors: 'Competitive analysis',
    persona: 'User persona',
    solution: 'The solution',
    branding: 'Branding',
    prototype: 'Prototype',
    conclusions: 'Conclusions',
  },
  challenge: {
    callout:
      'Create an attractive, youthful and clean design on a limited budget, on a par with the competition, that would draw in new users, influencers, investors and partners.',
    alt: 'CrudeBeauty products',
  },
  process: {
    text: 'I followed a user-centred process, from research to a validated prototype.',
    steps: [
      { title: 'Empathize', items: ['Research', 'Competitive analysis', 'Personas'] },
      { title: 'Define', items: ['Solution', 'MVP'] },
      { title: 'Ideate', items: ['User flow', 'Wireframe'] },
      { title: 'Prototype', items: ['Branding', 'High-fidelity prototype'] },
      { title: 'Test', items: ['User testing', 'Conclusions'] },
    ],
  },
  competitors: {
    text: "I analysed the websites of three benchmark brands, <strong>The Ordinary, La Roche-Posay and Kiehl's</strong>, to find out which features people expect from a cosmetics store.",
    screensAlt: '{name} website on desktop and mobile',
    logoAlt: '{name} logo',
    featuresLabel: 'Features of the {name} website',
    conLabel: 'Downside:',
    brands: [
      {
        pros: [
          'Product banner',
          'Product image gallery',
          'Shopping cart',
          'Recommendations and reviews',
          'Sign-up and personal account',
          '“About us” section',
          'Newsletter',
          'Store locator',
          'FAQ',
          'Careers page',
          'Social media profiles',
        ],
        cons: [],
      },
      {
        pros: [
          'Product banner',
          'Promotional banner',
          'Shopping cart',
          'Recommendations and reviews',
          'Sign-up and personal account',
          '“About us” section',
          'Newsletter',
          'Store locator',
          'FAQ',
          'Product videos',
          'Social media profiles',
          'Clean interface',
        ],
        cons: [],
      },
      {
        pros: [
          'Product banner',
          'Promotional banner',
          'Shopping cart',
          'Recommendations and reviews',
          'Sign-up and personal account',
          '“About us” section',
          'Newsletter',
          'Store locator',
          'FAQ',
          '“Virtual diagnosis” section',
          'Social media profiles',
        ],
        cons: ['Interface crowded with information, elements and colours'],
      },
    ],
  },
  persona: {
    alt: 'María Morales, the project’s user persona',
    facts: [
      { label: 'Age', value: '28' },
      { label: 'Location', value: 'Madrid, Spain' },
      { label: 'Marital status', value: 'Single' },
      { label: 'Education', value: 'Language and Literature' },
      { label: 'Occupation', value: 'Language teacher' },
      { label: 'Income', value: '€24,000 gross per year' },
    ],
    bio: 'She teaches English and French at a language school. She looks after her skin with a skincare routine and shares the products she discovers on social media.',
    cards: [
      {
        title: 'Motivation',
        text: 'She sees skincare as an important part of her health and wellbeing.',
      },
      {
        title: 'Needs',
        text: 'Quality products that keep her skin healthy and are safe to use.',
      },
      {
        title: 'Fears',
        text: 'Using a product the wrong way and suffering lasting damage, such as dark spots or irritation.',
      },
    ],
    shoppingTitle: 'How does María buy her beauty products?',
    shoppingText:
      'She does her research before buying: she reads online reviews, checks the ingredients and considers what her skin needs. She also follows bloggers and experts for recommendations.',
  },
  solution: {
    cards: [
      {
        title: 'A fresh, youthful look',
        text: 'I created a new logo and designed packaging that reflects the brand identity.',
      },
      {
        title: 'A website that sells',
        text: 'Eye-catching banners, oil recommendations by skin type and a shopping cart.',
      },
      {
        title: 'An MVP to learn fast',
        text: 'Launch as soon as possible with the minimum features needed to attract the first users and validate improvements with the least effort.',
      },
    ],
    alt: 'CrudeBeauty website on mobile: home page and blog',
    featuresLabel: 'MVP features',
    features: [
      'Product banner',
      'Promotional banner',
      'Shopping cart',
      'Blog',
      'Social profiles',
      '“About us” section',
      'Clean interface',
    ],
  },
  branding: {
    text: 'The logo combines two words in an elegant, natural typeface, split over two lines for visual balance and finished with a full stop.',
    logoAlt: 'CrudeBeauty logo',
    colorsTitle: 'Colours',
    typeTitle: 'Typography',
    type: [
      { label: 'Headings', value: 'Gotham Book' },
      { label: 'Subheadings', value: 'Gotham Book' },
      { label: 'Body text', value: 'Gotham Book' },
      { label: 'Prices', value: 'Gotham Medium' },
    ],
    colorsAlt: 'CrudeBeauty packaging with the brand palette',
    iconsTitle: 'Iconography',
    iconsText: 'I chose an icon set true to the brand’s look to keep the appearance consistent across the whole product.',
    iconsAlt: 'CrudeBeauty icon set',
  },
  prototype: {
    text: 'Explore the <strong>interactive prototype</strong> and discover everything the interface can do.',
    title: 'CrudeBeauty interactive prototype in Figma',
  },
  conclusions: {
    paragraphs: [
      'Testing the solution confirmed a solid strategy to put CrudeBeauty on the map. The fresh, youthful look, the new logo and packaging that captures the essence of the brand laid the foundations of a vibrant, appealing visual identity.',
      'The website, with captivating banners and a shopping cart, is a solid platform to attract the first customers. Conceived as an MVP, it brings together a basic but effective set of features that made it possible to go to market in record time.',
    ],
    callout:
      'Gathering feedback from day one will make it possible to adjust and extend the features to customers’ real needs, ensuring continuous growth and a great user experience.',
  },
};

export default { es, en } satisfies Localized<typeof es>;
