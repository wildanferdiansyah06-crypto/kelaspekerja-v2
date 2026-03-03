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
        backgroundColor: "#111111",
        color: "#e8e6e3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Georgia, serif",
        textAlign: "center",
        padding: "40px"
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          letterSpacing: "4px",
          marginBottom: "20px",
          fontWeight: 400
        }}
      >
        KELAS PEKERJA
      </h1>

      <p
        style={{
          opacity: 0.4,
          marginBottom: "80px",
          fontSize: "14px"
        }}
      >
        catatan bagi mereka yang tetap berdiri
      </p>

      <div
        style={{
          maxWidth: "640px",
          fontSize: "22px",
          lineHeight: "2",
          transition: "opacity 0.4s ease",
          opacity: fade ? 1 : 0
        }}
      >
        {text}
      </div>

      <button
        onClick={generateNew}
        style={{
          marginTop: "80px",
          padding: "8px 18px",
          background: "transparent",
          border: "1px solid #333",
          color: "#aaa",
          cursor: "pointer",
          fontSize: "13px",
          letterSpacing: "1px"
        }}
      >
        halaman lain
      </button>
    </main>
  );
}
