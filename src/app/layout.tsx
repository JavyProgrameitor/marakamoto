import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MARAKAMOTO | Taller de motos en Talavera la Real",
    template: "%s | MARAKAMOTO",
  },

  description:
    "MARAKAMOTO, taller de motos en Talavera la Real, Badajoz. Mecánica y reparación de motocicletas, mantenimiento, revisiones, neumáticos, recambios y accesorios.",

  keywords: [
    "MARAKAMOTO",
    "taller de motos Talavera la Real",
    "taller de motos Badajoz",
    "mecánico de motos Badajoz",
    "reparación de motos",
    "mantenimiento de motocicletas",
    "neumáticos de moto",
    "recambios de motos",
  ],

  authors: [
    {
      name: "MARAKAMOTO",
    },
  ],

  creator: "MARAKAMOTO",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "MARAKAMOTO",
    title: "MARAKAMOTO | Taller de motos en Talavera la Real",
    description:
      "Mecánica, reparación, mantenimiento, neumáticos, recambios y accesorios para tu moto en Talavera la Real, Badajoz.",
    images: [
      {
        url: "/images/hero-marakamoto-1.png",
        width: 1200,
        height: 630,
        alt: "MARAKAMOTO - Taller de motos en Talavera la Real",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MARAKAMOTO | Taller de motos en Talavera la Real",
    description:
      "Mecánica, reparación, mantenimiento, neumáticos y recambios para tu moto.",
    images: ["/images/hero-marakamoto-1.png"],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}