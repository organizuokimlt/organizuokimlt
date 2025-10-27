// src/app/layout.tsx
import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Organizuokim.lt",
  description: "Profesionalų kūrybos aljansas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lt">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}