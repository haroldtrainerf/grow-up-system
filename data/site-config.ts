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
