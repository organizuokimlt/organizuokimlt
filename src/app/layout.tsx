import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Organizuokim.lt",
  description: "Profesionalų kūrybos aljansas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="lt">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}