'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface Quote {
  text: string;
}

const quotes: Quote[] = [
  { text: "Lelah adalah harga yang kami bayar untuk tetap menjadi manusia." },
  { text: "Di antara deru mesin, kami menemukan irama doa yang tak terucap." },
  { text: "Setiap hari adalah halaman kosong yang kami isi dengan keringat." },
  { text: "Kami bekerja bukan untuk hidup, tapi hidup dalam setiap kerja." },
  { text: "Sunyi adalah sahabat kami yang paling setia di malam hari." },
  { text: "Tangan yang bekerja adalah tangan yang berdoa tanpa kata." },
  { text: "Kelas pekerja adalah fondasi yang tak pernah tidur." },
  { text: "Kami adalah arsip hidup dari semua yang tak terucapkan." },
  { text: "Di ruang sunyi ini, kami belajar arti kesabaran sejati." },
  { text: "Bekerja adalah penolakan untuk menjadi tidak-ada." },
  { text: "Kami tidak menunggu izin untuk bernafas dan berarti." },
  { text: "Setiap goresan di tangan adalah aksara dalam bahasa waktu." },
  { text: "Ketika kota tertidur, kami terjaga menjaga api kehidupan." },
  { text: "Kami adalah penjaga ritme yang tak pernah berhenti berdetak." },
  { text: "Martabat tidak dibeli, tapi dibangun satu hari demi hari." },
  { text: "Di antara shift yang panjang, kami menemukan celah untuk bermakna." },
  { text: "Kami adalah jawaban dari pertanyaan yang tak pernah diajukan." },
  { text: "Kerja keras adalah puisi yang ditulis dengan tubuh." },
  { text: "Kami tidak butuh panggung, hanya ruang untuk bernafas." },
  { text: "Setiap benda yang kamu sentuh, mungkin tangan kami yang pertama." },
  { text: "Kami adalah museum hidup dari kerja keras yang tak terlihat." },
  { text: "Di sudut yang terlupakan, ada kami yang menyambung hidup." },
  { text: "Kelas pekerja adalah pilihan untuk tetap berarti dalam kesunyian." },
  { text: "Kami belajar bahwa kekuatan ada dalam konsistensi, bukan teriakan." },
  { text: "Malam tahu semua cerita yang kami simpan dalam tulang lelah." },
  { text: "Perubahan dimulai dari tangan yang bekerja, bukan mulut yang berbicara." },
  { text: "Kami adalah generasi yang menolak untuk menjadi tidak-ada." },
  { text: "Di setiap napas terengah, ada doa yang tak terucapkan." },
  { text: "Kami adalah penulis tak terlihat dari sejarah yang berlangsung." },
  { text: "Bekerja adalah cara kami mengucapkan syukur atas nafas ini." },
];

const START_DATE = new Date('2024-01-01');

function formatNumber(num: number): string {
  return num.toString().padStart(2, '0');
}

function getDaysSinceStart(): number {
  const now = new Date();
  const diffTime = now.getTime() - START_DATE.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

function getCurrentTime(): string {
  const now = new Date();
  const hours = formatNumber(now.getHours());
  const minutes = formatNumber(now.getMinutes());
  return `${hours}:${minutes}`;
}

export default function Home(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [daysCount, setDaysCount] = useState<number>(0);

  useEffect(() => {
    setCurrentTime(getCurrentTime());
    setDaysCount(getDaysSinceStart());
    
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  const handleNextPage = useCallback(() => {
    if (isFading) return;
    
    setIsFading(true);
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
      setIsFading(false);
    }, 400);
  }, [isFading]);

  const currentQuote = quotes[currentIndex];

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    boxSizing: 'border-box',
  };

  const bookStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '760px',
    border: '1px solid rgba(228, 226, 223, 0.15)',
    boxShadow: '0 0 60px rgba(0, 0, 0, 0.5)',
    padding: '120px 60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 1.2s ease, transform 1.2s ease',
  };

  const topLineStyle: React.CSSProperties = {
    position: 'absolute',
    top: '60px',
    left: '60px',
    right: '60px',
    height: '1px',
    backgroundColor: 'rgba(228, 226, 223, 0.1)',
  };

  const bottomLineStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '60px',
    left: '60px',
    right: '60px',
    height: '1px',
    backgroundColor: 'rgba(228, 226, 223, 0.1)',
  };

  const daysStyle: React.CSSProperties = {
    fontSize: '11px',
    letterSpacing: '0.15em',
    color: 'rgba(228, 226, 223, 0.5)',
    textTransform: 'uppercase',
    marginBottom: '60px',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: 400,
  };

  const timeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '80px',
    right: '60px',
    fontSize: '11px',
    letterSpacing: '0.1em',
    color: 'rgba(228, 226, 223, 0.3)',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: 400,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(28px, 5vw, 42px)',
    letterSpacing: '0.35em',
    color: '#e4e2df',
    textTransform: 'uppercase',
    marginBottom: '16px',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: 400,
    textAlign: 'center',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '13px',
    letterSpacing: '0.08em',
    color: 'rgba(228, 226, 223, 0.6)',
    fontStyle: 'italic',
    marginBottom: '80px',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: 400,
    textAlign: 'center',
  };

  const quoteContainerStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'center',
    marginBottom: '60px',
    opacity: isFading ? 0 : 1,
    transform: isFading ? 'translateY(-8px)' : 'translateY(0)',
    transition: 'opacity 0.4s ease, transform 0.4s ease',
  };

  const quoteStyle: React.CSSProperties = {
    fontSize: 'clamp(18px, 3vw, 24px)',
    lineHeight: 2.2,
    color: '#e4e2df',
    fontStyle: 'italic',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: 400,
    letterSpacing: '0.02em',
    margin: 0,
    padding: '0 20px',
  };

  const noteStyle: React.CSSProperties = {
    fontSize: '11px',
    letterSpacing: '0.1em',
    color: 'rgba(228, 226, 223, 0.4)',
    fontStyle: 'italic',
    marginBottom: '40px',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: 400,
  };

  const pageNumberStyle: React.CSSProperties = {
    fontSize: '12px',
    letterSpacing: '0.15em',
    color: 'rgba(228, 226, 223, 0.5)',
    marginBottom: '40px',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: 400,
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: '1px solid rgba(228, 226, 223, 0.25)',
    color: 'rgba(228, 226, 223, 0.7)',
    padding: '14px 32px',
    fontSize: '11px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: 400,
    transition: 'all 0.3s ease',
    marginBottom: '30px',
  };

  const linkStyle: React.CSSProperties = {
    fontSize: '11px',
    letterSpacing: '0.15em',
    color: 'rgba(228, 226, 223, 0.4)',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: 400,
    transition: 'color 0.3s ease',
    borderBottom: '1px solid transparent',
    paddingBottom: '2px',
  };

  return (
    <main style={containerStyle}>
      <div style={bookStyle}>
        <div style={topLineStyle} />
        <div style={bottomLineStyle} />
        
        <div style={timeStyle}>{currentTime}</div>
        
        <div style={daysStyle}>Hari ke-{daysCount} dalam bekerja</div>
        
        <h1 style={titleStyle}>KELAS PEKERJA</h1>
        
        <p style={subtitleStyle}>arsip sunyi orang-orang yang tetap bekerja</p>
        
        <div style={quoteContainerStyle}>
          <p style={quoteStyle}>{currentQuote.text}</p>
        </div>
        
        <p style={noteStyle}>ditulis dalam sunyi</p>
        
        <div style={pageNumberStyle}>
          {formatNumber(currentIndex + 1)} / {formatNumber(quotes.length)}
        </div>
        
        <button 
          style={buttonStyle}
          onClick={handleNextPage}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(228, 226, 223, 0.5)';
            e.currentTarget.style.color = 'rgba(228, 226, 223, 0.9)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(228, 226, 223, 0.25)';
            e.currentTarget.style.color = 'rgba(228, 226, 223, 0.7)';
          }}
        >
          HALAMAN LAIN
        </button>
        
        <Link 
          href="/galeri"
          style={linkStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'rgba(228, 226, 223, 0.7)';
            e.currentTarget.style.borderBottomColor = 'rgba(228, 226, 223, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(228, 226, 223, 0.4)';
            e.currentTarget.style.borderBottomColor = 'transparent';
          }}
        >
          GALERI LAIN
        </Link>
      </div>
    </main>
  );
}
