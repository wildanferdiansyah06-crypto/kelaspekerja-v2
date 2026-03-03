import "./globals.css";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"]
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"]
});

export const metadata = {
  title: "Kelas Pekerja V2",
  description: "Arsip sunyi orang-orang yang tetap bekerja."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${playfair.className}`}>
        {children}
      </body>
    </html>
  );
}
