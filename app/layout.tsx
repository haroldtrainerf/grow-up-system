import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GROW UP SYSTEM | Entrenamiento Personalizado — Harold",
  description:
    "Entrenamiento personal presencial y online con Grow Up System: un método estructurado, progresivo y adaptado a ti. Nada queda al azar.",
  openGraph: {
    title: "GROW UP SYSTEM | Entrenamiento Personalizado — Harold",
    description:
      "Entrenamiento personal presencial y online con Grow Up System: un método estructurado, progresivo y adaptado a ti.",
    url: "https://growupsystem.com",
    siteName: "GROW UP SYSTEM",
    locale: "es_CL",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // [REEMPLAZAR] agrega tu favicon en /public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${anton.variable} ${montserrat.variable} font-body bg-paper text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
