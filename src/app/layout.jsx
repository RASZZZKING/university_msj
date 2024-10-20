import { Gabarito } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Muslimah Sejati",
  description: "Pondok Pesantren Muslimah Sejati Tambun Selatan Tridayasakti",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bodaynya">
      <body className={`${gabarito.className} `}>{children}</body>
    </html>
  );
}
