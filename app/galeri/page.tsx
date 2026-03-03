"use client";

import Link from "next/link";

const books = [
  { id: 1, title: "Lembur", slug: "lembur" },
  { id: 2, title: "Upah", slug: "upah" },
  { id: 3, title: "Malam", slug: "malam" },
  { id: 4, title: "Sunyi", slug: "sunyi" },
  { id: 5, title: "Harga Diri", slug: "harga-diri" }
];

export default function Galeri() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "80px 40px",
        background: "radial-gradient(circle at top, #121212 0%, #080808 100%)",
        color: "#e4e2df"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          letterSpacing: "6px",
          marginBottom: "80px",
          fontWeight: 400
        }}
      >
        RAK BUKU
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}
      >
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/galeri/${book.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                width: "120px",
                height: "260px",
                backgroundColor: "#1b1a19",
                border: "1px solid #2a2928",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                letterSpacing: "3px",
                fontSize: "14px",
                transition: "transform 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-10px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0px)")
              }
            >
              {book.title}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
