import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KAJY MAZAVA | Application de Gestion de Cotisations pour Associations",
  description: "L'application mobile Android pour gérer facilement la trésorerie de votre association. Suivez les cotisations, dépenses, exportez vos bilans en PDF/Excel et gardez vos données sécurisées hors-ligne.",
  keywords: ["gestion association", "cotisations", "trésorerie", "logiciel association", "application mobile", "finance", "Kajy Mazava", "apk"],
  authors: [{ name: "KAJY MAZAVA" }],
  creator: "KAJY MAZAVA",
  openGraph: {
    title: "KAJY MAZAVA | Simplifiez la trésorerie associative",
    description: "L'application mobile incontournable pour gérer vos montants de cotisation et vos membres, même sans accès internet. Téléchargez l'APK Android.",
    url: "https://domain-a-remplacer.com",
    siteName: "KAJY MAZAVA",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAJY MAZAVA | Gestion de Cotisations pour Associations",
    description: "Gérez votre trésorerie associative de la meilleure des manières avec Kajy Mazava.",
  },
  metadataBase: new URL('https://domain-a-remplacer.com'),
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kajy Mazava",
    "operatingSystem": "ANDROID",
    "applicationCategory": "FinanceApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "MGA"
    },
    "description": "L'application mobile Android pour gérer facilement la trésorerie de votre association en mode hors-ligne."
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
