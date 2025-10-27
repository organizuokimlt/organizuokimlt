// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Organizuokim.lt",
  description: "Profesionalų kūrybos aljansas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lt">
      <body>{children}</body>
    </html>
  );
}
