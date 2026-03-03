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

  const generateNew = () => {
    const random = writings[Math.floor(Math.random() * writings.length)];
    setText(random);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f0f0f",
        color: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "serif",
        textAlign: "center",
        padding: "40px"
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
        KELAS PEKERJA
      </h1>

      <p style={{ opacity: 0.6, marginBottom: "60px" }}>
        Ruang sunyi untuk mereka yang tetap berdiri.
      </p>

      <div style={{ maxWidth: "600px", fontSize: "20px", lineHeight: "1.8" }}>
        {text}
      </div>

      <button
        onClick={generateNew}
        style={{
          marginTop: "60px",
          padding: "10px 20px",
          background: "transparent",
          border: "1px solid #555",
          color: "#f5f5f5",
          cursor: "pointer"
        }}
      >
        Baca yang lain
      </button>
    </main>
  );
}
