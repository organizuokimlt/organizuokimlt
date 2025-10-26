// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Organizuokim.lt",
  description: "Profesionalų kūrybos aljansas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lt">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}