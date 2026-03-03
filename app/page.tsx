"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const sentences: string[] = [
  "Kita bekerja bukan untuk hidup, tapi hidup terpaksa bekerja.",
  "Lelah adalah bahasa yang hanya dimengerti oleh tubuh.",
  "Di balik setiap produktivitas, ada sunyi yang tak terucap.",
  "Kelas pekerja tidur dengan mimpi yang belum sempat dikejar.",
  "Upah kita adalah waktu yang tak bisa kembali.",
  "Kerja keras adalah kebanggaan yang sering disalahartikan.",
  "Di ruang sunyi ini, kita menemukan suara diri sendiri.",
  "Lembur adalah puisi yang ditulis dengan mata perih.",
  "Harga diri tidak bisa ditukar dengan bonus akhir tahun.",
  "Kita adalah mesin yang belajar merasakan lelah.",
  "Setiap pagi adalah pertempuran melawan kemalasan yang wajar.",
  "Kerja itu ibadah, tapi ibadah juga butuh istirahat.",
  "Di antara deadline, kita lupa bahwa waktu adalah milik kita.",
  "Sunyi bukan kekosongan, tapi ruang untuk bertahan.",
  "Pekerjaan baik adalah yang membiarkan kita tetap manusia.",
  "Kita menukar mimpi dengan stabilitas yang rapuh.",
  "Lelah fisik sembuh dengan tidur, lelah jiwa butuh makna.",
  "Kelas pekerja adalah kelas yang terlalu sibuk untuk protes.",
  "Di balik layar, ada mata yang perih dan punggung yang bungkuk.",
  "Kerja adalah cara kita membuktikan eksistensi.",
  "Tapi eksistensi seharusnya tidak perlu dibuktikan.",
  "Kita adalah arsip sunyi peradaban yang terus berjalan.",
  "Setiap gaji adalah pengakuan sekaligus penolakan terhadap nilai kita.",
  "Malam adalah sahabat pekerja yang terlambat pulang.",
  "Kita membangun impian orang lain sambil menunda impian sendiri.",
  "Hemat senyum di kantor, karena senyum juga butuh tenaga.",
  "Di toilet kantor, ada air mata yang tak pernah terlihat.",
  "Kelas pekerja adalah pahlawan tanpa topeng.",
  "Kita bertahan bukan karena kuat, tapi karena harus.",
  "Suatu hari nanti, sunyi ini akan berbicara."
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    setCurrentIndex(randomIndex);
    
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(loadTimer);
  }, []);

  const handleNextPage = () => {
    setIsVisible(false);
    
    setTimeout(() => {
      let newIndex = Math.floor(Math.random() * sentences.length);
      while (newIndex === currentIndex && sentences.length > 1) {
        newIndex = Math.floor(Math.random() * sentences.length);
      }
      setCurrentIndex(newIndex);
      setIsVisible(true);
    }, 300);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px"
      }}
    >
      <main
        style={{
          maxWidth: "760px",
          width: "100%",
          padding: "120px 60px",
          border: "1px solid rgba(228, 226, 223, 0.15)",
          boxShadow: "0 0 60px rgba(0, 0, 0, 0.5)",
          textAlign: "center",
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease"
        }}
      >
        <h1
          style={{
            fontSize: "12px",
            letterSpacing: "0.6em",
            textTransform: "uppercase",
            marginBottom: "16px",
            fontWeight: 400,
            opacity: 0.9
          }}
        >
          Kelas Pekerja
        </h1>

        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.15em",
            opacity: 0.6,
            marginBottom: "80px",
            fontStyle: "italic"
          }}
        >
          arsip sunyi orang-orang yang tetap bekerja
        </p>

        <div
          style={{
            minHeight: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "80px"
          }}
        >
          <p
            style={{
              fontSize: "24px",
              lineHeight: "2.2",
              fontStyle: "italic",
              opacity: isVisible ? 0.9 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
              maxWidth: "600px"
            }}
          >
            {sentences[currentIndex]}
          </p>
        </div>

        <button
          onClick={handleNextPage}
          style={{
            padding: "16px 32px",
            border: "1px solid rgba(228, 226, 223, 0.3)",
            background: "transparent",
            color: "#e4e2df",
            fontFamily: "inherit",
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            cursor: "pointer",
            marginBottom: "40px",
            transition: "opacity 0.3s ease",
            opacity: 0.7
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "0.7";
          }}
        >
          Halaman Lain
        </button>

        <div>
          <Link
            href="/galeri"
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#e4e2df",
              textDecoration: "none",
              opacity: 0.5,
              transition: "opacity 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.5";
            }}
          >
            Galeri Lain
          </Link>
        </div>
      </main>
    </div>
  );
}
