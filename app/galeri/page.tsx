"use client";
import Link from "next/link";

interface Book {
  title: string;
  slug: string;
}

const books: Book[] = [
  { title: "Lembur", slug: "lembur" },
  { title: "Upah", slug: "upah" },
  { title: "Malam", slug: "malam" },
  { title: "Sunyi", slug: "sunyi" },
  { title: "Harga Diri", slug: "harga-diri" }
];

export default function GalleryPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 20px"
      }}
    >
      <h1
        style={{
          fontSize: "12px",
          letterSpacing: "0.6em",
          textTransform: "uppercase",
          marginBottom: "120px",
          fontWeight: 400,
          opacity: 0.9
        }}
      >
        Rak Buku
      </h1>

      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "calc(100% + 60px)",
            height: "12px",
            background: "linear-gradient(180deg, #3d3229 0%, #2a231c 50%, #1a1612 100%)",
            borderRadius: "2px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.8), 0 8px 40px rgba(0,0,0,0.6)"
          }}
        />

        <div
          style={{
            display: "flex",
            gap: "8px",
            paddingBottom: "12px",
            alignItems: "flex-end"
          }}
        >
          {books.map((book, index) => {
            const hue = 15 + index * 8;
            return (
              <Link
                key={book.slug}
                href={`/galeri/${book.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    width: "110px",
                    height: "260px",
                    background: `linear-gradient(90deg, 
                      hsl(${hue}, 20%, 22%) 0%, 
                      hsl(${hue}, 18%, 28%) 15%, 
                      hsl(${hue}, 15%, 32%) 50%, 
                      hsl(${hue}, 18%, 26%) 85%, 
                      hsl(${hue}, 20%, 20%) 100%)`,
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderLeft: "2px solid rgba(255,255,255,0.15)",
                    borderRight: "2px solid rgba(0,0,0,0.3)",
                    borderRadius: "2px 4px 4px 2px",
                    boxShadow: "inset 2px 0 4px rgba(255,255,255,0.05), -2px 0 8px rgba(0,0,0,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-15px)";
                    e.currentTarget.style.boxShadow = "inset 2px 0 4px rgba(255,255,255,0.05), -4px 8px 24px rgba(0,0,0,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "inset 2px 0 4px rgba(255,255,255,0.05), -2px 0 8px rgba(0,0,0,0.4)";
                  }}
                >
                  <span
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      fontSize: "16px",
                      letterSpacing: "0.15em",
                      color: "#e4e2df",
                      opacity: 0.85,
                      padding: "20px 0",
                      textShadow: "0 1px 2px rgba(0,0,0,0.5)"
                    }}
                  >
                    {book.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
