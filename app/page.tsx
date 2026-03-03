"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"]
});

const writings = [
  "Kami tidak banyak bicara. Kami hanya pulang lebih malam.",
  "Lelah itu biasa. Menyerah itu mewah.",
  "Kami bekerja dalam sunyi, tapi mimpi kami tidak kecil.",
  "Tidak semua perjuangan perlu sorotan.",
  "Upah bisa kecil. Harga diri jangan.",
  "Kami bangun sebelum matahari, pulang setelah lampu jalan menyala.",
  "Kadang yang paling kuat adalah yang paling jarang mengeluh.",
  "Sunyi bukan berarti kosong.",
  "Kerja keras tidak selalu terlihat, tapi selalu terasa.",
  "Kami bukan siapa-siapa, tapi kami tetap ada."
];

export default function Home() {
  const [text, setText] = useState(
    writings[Math.floor(Math.random() * writings.length)]
  );
  const [fade, setFade] = useState(false);
  const [pageVisible, setPageVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setPageVisible(true), 200);
  }, []);

  const generateNew = () => {
    setFade(true);
    setTimeout(() => {
      const random =
        writings[Math.floor(Math.random() * writings.length)];
      setText(random);
      setFade(false);
    }, 300);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        transition: "opacity 1.2s ease, transform 1.2s ease",
        opacity: pageVisible ? 1 : 0,
        transform: pageVisible ? "translateY(0px)" : "translateY(20px)"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "780px",
          backgroundColor: "#151413",
          padding: "130px 80px",
          border: "1px solid #1c1b1a",
          boxShadow: "0 0 80px rgba(0,0,0,0.7)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Grain */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "4px 4px",
            opacity: 0.15,
            pointerEvents: "none"
          }}
        />

        <h1
          style={{
            fontSize: "24px",
            letterSpacing: "8px",
            marginBottom: "40px",
            fontWeight: 400
          }}
        >
          KELAS PEKERJA
        </h1>

        <p
          style={{
            opacity: 0.35,
            marginBottom: "100px",
            fontSize: "13px",
            letterSpacing: "2px"
          }}
        >
          arsip sunyi orang-orang yang tetap bekerja
        </p>

        <div
          className={cormorant.className}
          style={{
            fontSize: "30px",
            lineHeight: "2.3",
            transition: "opacity 0.5s ease",
            opacity: fade ? 0 : 1
          }}
        >
          {text}
        </div>

        <button
          onClick={generateNew}
          style={{
            marginTop: "110px",
            padding: "8px 20px",
            background: "transparent",
            border: "1px solid #2a2a2a",
            color: "#888",
            cursor: "pointer",
            fontSize: "12px",
            letterSpacing: "3px"
          }}
        >
          HALAMAN LAIN
        </button>

        <Link href="/galeri" style={{ textDecoration: "none" }}>
          <div
            style={{
              marginTop: "30px",
              fontSize: "12px",
              letterSpacing: "3px",
              color: "#666",
              cursor: "pointer"
            }}
          >
            GALERI LAIN
          </div>
        </Link>
      </div>
    </main>
  );
}
