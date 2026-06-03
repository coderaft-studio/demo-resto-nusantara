import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Nusantara Kitchen — Cita Rasa Autentik, Sajian Modern",
  description:
    "Nikmati kelezatan masakan Nusantara yang otentik dengan sentuhan modern. Buka setiap hari pukul 10.00–22.00.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={geist.className}>
      <body>{children}</body>
    </html>
  );
}
