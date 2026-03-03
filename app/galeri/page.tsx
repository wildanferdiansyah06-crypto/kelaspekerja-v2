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
        padding: "100px 40px",
        background: "radial-gradient(circle at top, #111 0%, #050505 100%)",
        color: "#e4e2df"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          letterSpacing: "6px",
          marginBottom: "120px",
          fontWeight: 400
        }}
      >
        RAK BUKU
      </h1>

      {/* Shelf Container */}
      <div
        style={{
          position: "relative",
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        {/* Wooden Shelf */}
        <div
          style={{
            position: "absolute",
            bottom: "-15px",
            left: 0,
            right: 0,
            height: "20px",
            background: "linear-gradient(to bottom, #2a1f17, #1a120d)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.8)"
          }}
        />

        {/* Books Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px"
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
                  width: "110px",
                  height: "260px",
                  background:
                    "linear-gradient(to right, #1a1a1a, #242323, #1a1a1a)",
                  border: "1px solid #2d2c2b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  letterSpacing: "3px",
                  fontSize: "14px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.6)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-15px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(0,0,0,0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0px)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0,0,0,0.6)";
                }}
              >
                {book.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
