// ============================================================
// GROW UP SYSTEM — Configuración de contenido (v2)
// Todo el texto, precios y links editables viven aquí.
// ============================================================

export const contact = {
  whatsappNumber: "56933342831",
  whatsappMessageGeneric: "Hola Harold, vi Grow Up System y quiero saber qué plan me conviene.",
  instagramUser: "haroldtrainerf",
  instagramUrl: "https://www.instagram.com/haroldtrainerf/",
  email: "haroldtrainerf@gmail.com",
  diagnosticFormUrl: "https://tally.so/r/RG6WLl",
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    message ?? contact.whatsappMessageGeneric
  )}`;

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Método", href: "#metodo" },
  { label: "Planes", href: "#planes" },
  { label: "Sobre Harold", href: "#sobre-harold" },
  { label: "Evaluación", href: "#evaluacion" },
];

export const hero = {
  headlineLine1: "ENTRENAMIENTO PERSONALIZADO.",
  headlineLine2: "NADA QUEDA AL AZAR.",
  subline:
    "Te ayudo a construir un cuerpo más fuerte y saludable mediante un proceso de entrenamiento estructurado, progresivo y adaptado a ti.",
  ctaPrimaryLabel: "COMENZAR AHORA",
  ctaSecondaryLabel: "HABLAR CON HAROLD",
  tag: "ENTRENAMIENTO PRESENCIAL · ENTRENAMIENTO ONLINE",
  photoSrc: "/images/hero-harold.jpg", // [REEMPLAZAR] foto potente de Harold entrenando
  photoAlt: "Harold entrenando — Grow Up System",
};

export const problem = {
  heading: "NO NECESITAS ENTRENAR MÁS.",
  headingLine2: "NECESITAS ENTRENAR MEJOR.",
  paragraphs: [
    "Entrenar sin planificación puede hacer que pases meses esforzándote sin saber si realmente estás avanzando.",
    "Grow Up System nace para cambiar eso.",
    "Un sistema de entrenamiento estructurado, progresivo y adaptado a ti, diseñado para que sepas qué hacer, por qué hacerlo y cómo avanzar.",
  ],
  pillars: ["PLANIFICACIÓN", "PROGRESIÓN", "ACOMPAÑAMIENTO", "ADHERENCIA"],
  closingLines: ["SIN IMPROVISAR.", "SIN FALSAS PROMESAS.", "SIN QUEDARTE SOLO."],
  tagline: "NADA QUEDA AL AZAR.",
};

export const growMethod = {
  heading: "4 ETAPAS.",
  headingLine2: "UN CICLO DE PROGRESIÓN.",
  intro:
    "Grow Up System se estructura en ciclos de aproximadamente 4 meses, en los que atraviesas cuatro etapas de entrenamiento. Cada etapa prepara la siguiente. No nos saltamos pasos y no entrenamos al azar. Al finalizar el ciclo, evaluamos tu progreso y volvemos a comenzar el proceso, pero desde un nuevo punto de partida: más experiencia, nuevas cargas y nuevos desafíos.",
  cycleClosing: "El ciclo termina. Tu progreso no.",
  cycleTagline: "NO VOLVEMOS AL PRINCIPIO. VOLVEMOS A CRECER.",
  photoSrc: "/images/method-harold.jpg", // [REEMPLAZAR] foto de Harold entrenando con mancuernas
  photoAlt: "Harold entrenando con mancuernas",
  phases: [
    {
      letter: "G",
      name: "GENERAR",
      color: "generar" as const,
      description:
        "Construimos la base. Aprendes la técnica, desarrollas adaptación al entrenamiento y comenzamos a construir adherencia.",
    },
    {
      letter: "R",
      name: "REFORZAR",
      color: "reforzar" as const,
      description:
        "Reforzamos lo aprendido. El entrenamiento comienza a ser más específico a tus objetivos y aumentamos progresivamente el trabajo.",
    },
    {
      letter: "O",
      name: "OPTIMIZAR",
      color: "optimizar" as const,
      description:
        "Optimizamos el entrenamiento. Aumentamos estratégicamente las cargas y trabajamos con mayor intención sobre fuerza y desarrollo muscular.",
    },
    {
      letter: "W",
      name: "WORK",
      color: "work" as const,
      description:
        "Aumentamos la intensidad del trabajo. Reducimos volumen cuando corresponde y ponemos mayor énfasis en fuerza, resistencia y rendimiento.",
    },
  ],
};

export type Plan = {
  id: string;
  name: string;
  priceCLP: number;
  priceNote?: string; // ej. "TOTAL para 2 personas"
  features: string[];
  description: string;
  paypalHostedButtonId: string;
};

export const inPersonSection = {
  heading: "ENTRENAMIENTO PRESENCIAL",
  subheading: "Entrena conmigo presencialmente.",
  description:
    "Un proceso de entrenamiento acompañado directamente por Harold, con planificación, seguimiento y una metodología adaptada a tu nivel y objetivos.",
};

export const inPersonPlans: Plan[] = [
  {
    id: "grow-up-1a1",
    name: "GROW UP 1:1",
    priceCLP: 210000,
    features: [
      "12 clases al mes",
      "Entrenamiento presencial individual",
      "Seguimiento mensual",
      "Soporte por WhatsApp",
      "Plan de alimentación personalizado",
    ],
    description:
      "Pensado para personas que buscan un acompañamiento completamente personalizado, con atención individual durante sus sesiones y un proceso adaptado a sus objetivos, nivel y necesidades.",
    paypalHostedButtonId: "78CUEV6QN949",
  },
  {
    id: "grow-up-duo",
    name: "GROW UP DUO",
    priceCLP: 349900,
    priceNote: "TOTAL para 2 personas",
    features: [
      "12 clases al mes",
      "Entrenamiento presencial para 2 personas",
      "Seguimiento mensual",
      "Soporte por WhatsApp",
      "Plan de alimentación personalizado",
    ],
    description:
      "Pensado para personas que quieren comenzar o continuar su proceso junto a alguien, como una pareja, amigo o familiar, compartiendo el entrenamiento y manteniendo el compromiso de avanzar juntos.",
    paypalHostedButtonId: "YEJEJTVV3WJRL",
  },
];

export const onlineSection = {
  heading: "ENTRENAMIENTO ONLINE",
  subheading: "Lleva Grow Up System contigo.",
  description:
    "Entrena desde donde estés con una planificación estructurada, seguimiento y distintos niveles de acompañamiento según lo que necesites.",
};

export const onlinePlans: Plan[] = [
  {
    id: "grow-essential",
    name: "GROW ESSENTIAL",
    priceCLP: 89900,
    features: [
      "Rutina personalizada",
      "Videos de cada ejercicio",
      "Seguimiento mensual",
      "Soporte por WhatsApp",
    ],
    description:
      "Pensado para personas que ya tienen conocimientos básicos de entrenamiento y pueden desenvolverse por sí mismas, pero necesitan una planificación estructurada, seguimiento y alguien que las guíe durante el proceso.",
    paypalHostedButtonId: "AQ9PJV52LHE6S",
  },
  {
    id: "grow-premium",
    name: "GROW PREMIUM",
    priceCLP: 149900,
    features: [
      "Rutina personalizada",
      "Videos de cada ejercicio",
      "8 clases al mes por videollamada",
      "Seguimiento mensual",
      "Soporte por WhatsApp",
      "Plan de alimentación personalizado",
    ],
    description:
      "Pensado para personas que quieren empezar en serio, necesitan aprender a entrenar correctamente y se benefician de tener un acompañamiento más cercano durante sus sesiones.",
    paypalHostedButtonId: "6TZTYJXJUR2QJ",
  },
  {
    id: "grow-gold",
    name: "GROW GOLD",
    priceCLP: 209900,
    features: [
      "Rutina personalizada",
      "Videos de cada ejercicio",
      "12 clases al mes por videollamada",
      "Seguimiento semanal",
      "Soporte por WhatsApp",
      "Plan de alimentación personalizado",
    ],
    description:
      "Pensado para personas que buscan un acompañamiento cercano y constante, necesitan mayor supervisión y quieren seguir un proceso estructurado para avanzar hacia sus objetivos sin tener que hacerlo por su cuenta.",
    paypalHostedButtonId: "EU7ZUTDS5VJFS",
  },
];

export const paypalNote =
  "Pago procesado en USD mediante PayPal. El valor final puede variar según el tipo de cambio aplicado por PayPal o tu medio de pago.";

export const buyButtonLabel = "COMPRAR AHORA";

export const inPersonComparison = {
  columns: ["GROW UP 1:1", "GROW UP DUO"],
  rows: [
    { label: "Entrenamiento presencial", values: [true, true] },
    { label: "Entrenamiento individual", values: [true, false] },
    { label: "Entrenamiento para 2 personas", values: [false, true] },
    { label: "12 clases al mes", values: [true, true] },
    { label: "Seguimiento mensual", values: [true, true] },
    { label: "Soporte por WhatsApp", values: [true, true] },
    { label: "Plan de alimentación personalizado", values: [true, true] },
  ],
};

export const onlineComparison = {
  columns: ["ESSENTIAL", "PREMIUM", "GOLD"],
  rows: [
    { label: "Rutina personalizada", values: [true, true, true] },
    { label: "Videos de ejercicios", values: [true, true, true] },
    { label: "Clases por videollamada", values: ["—", "8/mes", "12/mes"] },
    { label: "Seguimiento mensual", values: [true, true, true] },
    { label: "Seguimiento semanal", values: [false, false, true] },
    { label: "Soporte por WhatsApp", values: [true, true, true] },
    { label: "Plan de alimentación personalizado", values: [false, true, true] },
  ],
};

export const planForYou = {
  heading: "¿NO SABES QUÉ PLAN ES PARA TI?",
  paragraphs: [
    "No tienes que decidirlo solo.",
    "Cada persona parte desde una situación diferente. Por eso, antes de recomendarte un programa, quiero conocer un poco más sobre ti, tus objetivos, tu experiencia y tus necesidades.",
    "Completa la Evaluación Inicial Grow Up System y revisaré personalmente tus respuestas para orientarte sobre la modalidad y el plan que considero más adecuado para ti.",
  ],
  ctaLabel: "QUIERO HACER MI EVALUACIÓN",
  note: "La evaluación no te obliga a contratar ningún plan.",
  secondaryCtaLabel: "HABLAR CON HAROLD",
};

export const about = {
  heading: "SOBRE HAROLD",
  paragraphs: [
    "Soy Harold. Y esto es Grow Up System.",
    "El entrenamiento forma parte de mi vida desde hace años. Lo que comenzó como una pasión, con el tiempo se convirtió en mi profesión y, sobre todo, en mi propósito: ayudar a otras personas a sentirse más seguras, fuertes y capaces.",
    "Durante mi camino entendí algo: muchas personas comienzan con ganas de cambiar, pero terminan abandonando. No porque no quieran lograrlo, sino porque muchas veces no saben cómo avanzar, no ven resultados o simplemente no tienen un seguimiento real que las acompañe en el proceso.",
    "También vi a muchas personas entrar al gimnasio con inseguridad, sin saber qué hacer y tratando de resolverlo todo por su cuenta.",
    "Por eso decidí formarme, certificarme y seguir aprendiendo hasta convertirme en Técnico de Nivel Superior en Entrenamiento Personal.",
    "De ahí nace Grow Up System: una metodología estructurada y progresiva, diseñada para adaptarse a ti, acompañarte y ayudarte a avanzar de manera constante.",
    "Porque entrenar no se trata de hacerlo perfecto. Se trata de aprender, progresar y construir una versión más fuerte de ti.",
  ],
  profileLine: "Soy Harold, entrenador personal y preparador físico desde 2022.",
  objective:
    "Ayudar a personas, tengan o no experiencia entrenando, a mejorar su condición física, desarrollar musculatura y, especialmente, lograr una pérdida de peso sostenible mediante un proceso de entrenamiento planificado y adaptado a cada persona.",
  focusAreas: [
    "Pérdida de peso",
    "Composición corporal",
    "Ganancia muscular",
    "Fuerza",
    "Condición física",
    "Rendimiento",
    "Hábitos",
    "Adherencia",
  ],
  photoSrc: "/images/about-harold.jpg", // [REEMPLAZAR] foto personal de Harold
  photoAlt: "Harold, entrenador personal",
};

export const philosophy = {
  quoteLine1: "NO ENTRENAMOS PARA VERNOS MEJOR.",
  quoteLine2: "ENTRENAMOS PARA VIVIR MEJOR.",
  paragraph:
    "El entrenamiento no puede garantizarte una vida libre de enfermedades, pero sí puede ayudarte a construir un cuerpo más fuerte, saludable y preparado para las exigencias de la vida.",
};

export type Certification = {
  name: string;
};

export const education = {
  heading: "FORMACIÓN Y CERTIFICACIONES",
  mainProgram: "Técnico de Nivel Superior en Entrenamiento Personal",
  mainProgramDuration: "2,5 años de estudios técnicos",
  certifications: [
    "Fitness Personal Training",
    "Pro Functional Training System",
    "PRO HIIT",
    "Levantamiento Olímpico",
    "Reanimación Cardiopulmonar (RCP)",
  ] as string[],
};

export type Testimonial = {
  name: string;
  quote: string;
  photoSrc: string;
};

// Sin testimonios reales todavía — la sección no se muestra hasta que agregues el primero.
export const testimonials: Testimonial[] = [];

export const faq = [
  {
    question: "¿Necesito experiencia para comenzar?",
    answer:
      "No, no necesitas experiencia previa. Diseño el proceso a partir de tu situación actual, así que se adapta a tu nivel real, tengas experiencia o estés empezando desde cero.",
  },
  {
    question: "¿Puedo entrenar si llevo mucho tiempo sin hacerlo?",
    answer:
      "Sí. Ajusto tu plan a tu punto de partida real, incluyendo si vuelves después de un tiempo sin entrenar.",
  },
  {
    question: "¿Cuál es la diferencia entre entrenamiento presencial y online?",
    answer:
      "En el presencial te acompaño directamente en cada sesión. En el online seguimos la misma metodología, pero entrenas por tu cuenta con tu rutina, los videos y mi seguimiento a distancia.",
  },
  {
    question: "¿Cómo sé qué plan elegir?",
    answer:
      "Puedes completar la Evaluación Inicial y yo te oriento personalmente, o escribirme directo por WhatsApp para conversarlo.",
  },
  {
    question: "¿Qué ocurre después de comprar?",
    answer: "Te contacto directamente para continuar el proceso y coordinar los siguientes pasos.",
  },
  {
    question: "¿Cómo funcionan los ciclos de Grow Up System?",
    answer:
      "Cada ciclo dura aproximadamente 4 meses y recorre las 4 etapas del método. Al terminar, evalúo tu progreso junto contigo y comenzamos un nuevo ciclo desde un punto más avanzado.",
  },
  {
    question: "¿Puedo cambiar de plan posteriormente?",
    answer: "[AGREGAR INFORMACIÓN]",
  },
  {
    question: "¿Cómo funcionan las clases por videollamada?",
    answer: "[AGREGAR INFORMACIÓN]",
  },
  {
    question: "¿El plan de alimentación es personalizado?",
    answer:
      "Sí, te armo un plan de alimentación adaptado a ti, de acuerdo con tus datos, objetivos y necesidades, en conjunto con un profesional de la materia.",
  },
];

export const finalCta = {
  heading: "EL PRIMER PASO YA LO DISTE.",
  subheading: "Ahora solo falta comenzar.",
  paragraph: "No necesitas hacerlo perfecto. Necesitas empezar, aprender, avanzar y mantenerte constante.",
  ctaPrimaryLabel: "COMENZAR AHORA",
  ctaSecondaryLabel: "HABLAR CON HAROLD",
  ctaTertiaryLabel: "QUIERO HACER MI EVALUACIÓN",
  closingBrand: "GROW UP SYSTEM",
  closingTagline: "NO VOLVEMOS AL PRINCIPIO. VOLVEMOS A CRECER.",
};

export const legalNote =
  "El contenido de este sitio es de carácter formativo y de acompañamiento deportivo. No sustituye una evaluación médica.";
