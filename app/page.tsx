"use client";

import { useState } from "react";

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
  const [fade, setFade] = useState(true);

  const generateNew = () => {
    setFade(false);
    setTimeout(() => {
      const random = writings[Math.floor(Math.random() * writings.length)];
      setText(random);
      setFade(true);
    }, 200);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b0b0b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "760px",
          backgroundColor: "#141414",
          padding: "100px 60px",
          border: "1px solid #1f1f1f",
          boxShadow: "0 0 40px rgba(0,0,0,0.5)",
          color: "#e8e6e3",
          fontFamily: "Georgia, serif",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            fontSize: "22px",
            letterSpacing: "6px",
            marginBottom: "30px",
            fontWeight: 400
          }}
        >
          KELAS PEKERJA
        </h1>

        <p
          style={{
            opacity: 0.35,
            marginBottom: "80px",
            fontSize: "13px"
          }}
        >
          arsip sunyi orang-orang yang tetap bekerja
        </p>

        <div
          style={{
            fontSize: "24px",
            lineHeight: "2.2",
            transition: "opacity 0.4s ease",
            opacity: fade ? 1 : 0
          }}
        >
          {text}
        </div>

        <button
          onClick={generateNew}
          style={{
            marginTop: "90px",
            padding: "6px 18px",
            background: "transparent",
            border: "1px solid #2a2a2a",
            color: "#888",
            cursor: "pointer",
            fontSize: "12px",
            letterSpacing: "2px"
          }}
        >
          halaman lain
        </button>
      </div>
    </main>
  );
}
