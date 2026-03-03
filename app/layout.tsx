import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelas Pekerja",
  description: "Arsip sunyi orang-orang yang tetap bekerja"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
