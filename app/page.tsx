'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Array kutipan panjang — reflektif, puisi, sastra
const quotes = [
  "Kami adalah orang-orang yang tetap bekerja ketika semua orang sudah pulang. Bukan karena terpaksa, tapi karena diam adalah satu-satunya cara kami mengerti dunia.",
  "Di antara deru mesin dan hening malam, kami menemukan bahwa kerja bukanlah kutukan, tapi doa yang dilafalkan dengan tangan.",
  "Mereka bilang kami kelas bawah. Kami bilang: kami adalah fondasi yang tak pernah tidur, penjaga api yang tak pernah padam.",
  "Setiap goresan di tangan kami adalah aksara dalam bahasa yang hanya dipahami oleh waktu dan kesabaran.",
  "Kami tidak menunggu izin untuk hidup. Kami hidup dalam setiap gerakan, setiap napas, setiap hasil kerja yang jujur.",
  "Ketika kota tertidur, kami terjaga. Bukan karena insomnia, tapi karena ada sesuatu yang lebih besar dari mimpi yang harus dijaga.",
  "Kelas pekerja bukanlah identitas yang diberikan. Itu adalah pilihan untuk tetap berarti dalam kesunyian.",
  "Kami adalah arsip hidup dari semua hal yang tidak pernah diucapkan tapi selalu dirasakan.",
  "Di ruang sunyi ini, kami belajar bahwa kekuatan sejati bukan dalam teriakan, tapi dalam konsistensi yang tak terlihat.",
  "Mereka mencari keabadian dalam nama. Kami menemukannya dalam jejak yang kami tinggalkan di setiap pekerjaan yang terselesaikan.",
  "Setiap hari adalah halaman kosong. Kami mengisinya dengan keringat yang tidak pernah mengeluh.",
  "Kami adalah penulis tak terlihat dari sejarah yang sedang berlangsung, menyaksikan dari dekat tapi tak pernah diminta tanda tangan.",
  "Di antara baris-bris waktu yang sempit, kami menemukan celah-celah kecil untuk bernafas dan bermakna.",
  "Bukan kekayaan yang kami cari, tapi keadilan dalam setiap jam yang kami lewati di hadapan yang tak pernah lelah meminta.",
  "Kami adalah kelas yang bekerja bukan untuk menjadi kaya, tapi untuk tetap menjadi manusia.",
  "Malam adalah sahabat kami yang paling setia. Dia tahu semua cerita yang kami simpan dalam tulang-tulang lelah.",
  "Ketika yang lain berbicara tentang revolusi, kami diam dan bekerja. Karena kami tahu: perubahan dimulai dari tangan, bukan mulut.",
  "Kami adalah museum hidup dari semua kerja keras yang tak pernah masuk sejarah resmi.",
  "Di setiap sudut yang terlupakan, ada kami. Menjaga. Memperbaiki. Menyambung hidup yang hampir putus.",
  "Kelas pekerja adalah puisi yang ditulis dengan tubuh, dibaca oleh waktu, dan dimengerti oleh mereka yang pernah merasakan beban.",
  "Kami tidak butuh panggung. Kami butuh ruang untuk bernafas tanpa harus meminta izin.",
  "Setiap benda yang kamu sentuh hari ini, ada kemungkinan besar tangan kami yang pertama menyentuhnya.",
  "Kami adalah penjaga ritme kota yang tak pernah berhenti berdetak, meski jarang diperhatikan.",
  "Bekerja bukanlah penghambaan ketika kami tahu mengapa kami melakukannya. Bekerja adalah penolakan untuk menjadi tidak-ada.",
  "Di dalam sunyi, kami menemukan suara kami yang sebenarnya. Bukan yang keras, tapi yang tahan lama.",
  "Kami adalah generasi yang belajar bahwa martabat tidak dibeli, tapi dibangun satu hari demi satu hari.",
  "Ketika semua gemerlap padam, kami masih ada. Menjadi fondasi yang tak terlihat tapi menopang segalanya.",
  "Kelas pekerja adalah jawaban dari pertanyaan yang tak pernah diajukan: siapa yang menjaga dunia tetap berjalan?",
  "Kami tidak mencari pengakuan. Kami mencari kehidupan yang layak dihidupi, dan ruang untuk tetap menjadi diri sendiri.",
  "Di setiap napas yang terengah di antara shift, ada doa yang tak pernah kami ucapkan tapi selalu kami rasakan."
];

export default function Home() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  // Animasi masuk saat load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Fungsi ganti kutipan dengan transisi halus
  const changeQuote = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
      setIsFading(false);
    }, 400);
  };

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <>
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400&display=swap');
        
        :root {
          --bg-primary: #0a0a0a;
          --bg-secondary: #111111;
          --text-primary: #e8e6e3;
          --text-secondary: #8a8680;
          --text-muted: #5a5752;
          --accent: #3d3d3d;
          --transition-slow: 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          --transition-medium: 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-family: 'Cormorant Garamond', Georgia, serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>

      <main style={styles.container}>
        {/* Layer atmosferik - subtle gradient background */}
        <div style={styles.atmosphere} />

        {/* Konten utama dengan animasi masuk */}
        <div 
          style={{
            ...styles.content,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {/* Header Section */}
          <header style={styles.header}>
            <h1 style={styles.title}>KELAS PEKERJA</h1>
            <p style={styles.subtitle}>
              arsip sunyi orang-orang yang tetap bekerja<br />
              ketika dunia berpura-pura tidur
            </p>
          </header>

          {/* Quote Section - Jantung halaman */}
          <section style={styles.quoteSection}>
            <div 
              style={{
                ...styles.quoteContainer,
                opacity: isFading ? 0 : 1,
                transform: isFading ? 'translateY(-10px)' : 'translateY(0)',
              }}
            >
              <span style={styles.quoteMark}>"</span>
              <blockquote style={styles.quote}>
                {currentQuote}
              </blockquote>
              <span style={styles.quoteMarkEnd}>"</span>
            </div>

            {/* Tombol ganti kutipan */}
            <button 
              onClick={changeQuote}
              style={styles.button}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.letterSpacing = '0.15em';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.letterSpacing = '0.1em';
              }}
            >
              kutipan lain
            </button>
          </section>

          {/* Footer Navigation */}
          <footer style={styles.footer}>
            <Link 
              href="/galeri" 
              style={styles.link}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderBottomColor = 'var(--text-secondary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderBottomColor = 'transparent';
              }}
            >
              lihat galeri →
            </Link>
          </footer>
        </div>

        {/* Decorative elements - subtle vertical lines */}
        <div style={styles.decorLineLeft} />
        <div style={styles.decorLineRight} />
      </main>
    </>
  );
}

// Styles object - minimal, clean, tanpa Tailwind
const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '2rem',
  },
  
  atmosphere: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(ellipse at 50% 0%, #1a1a1a 0%, #0a0a0a 70%)',
    opacity: 0.5,
    pointerEvents: 'none',
    zIndex: 0,
  },

  content: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '800px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4rem',
    transition: 'opacity 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },

  header: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },

  title: {
    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
    fontWeight: 300,
    letterSpacing: '0.2em',
    color: '#e8e6e3',
    textTransform: 'uppercase',
    lineHeight: 1.1,
    fontFamily: "'Cormorant Garamond', Georgia, serif",
  },

  subtitle: {
    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
    fontWeight: 300,
    letterSpacing: '0.05em',
    color: '#8a8680',
    lineHeight: 1.8,
    fontStyle: 'italic',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
  },

  quoteSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
    width: '100%',
    padding: '0 1rem',
  },

  quoteContainer: {
    position: 'relative',
    textAlign: 'center',
    transition: 'opacity 400ms ease, transform 400ms ease',
  },

  quoteMark: {
    fontSize: '6rem',
    lineHeight: 0,
    color: '#3d3d3d',
    position: 'absolute',
    top: '2rem',
    left: '-2rem',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: 300,
    userSelect: 'none',
  },

  quoteMarkEnd: {
    fontSize: '6rem',
    lineHeight: 0,
    color: '#3d3d3d',
    position: 'absolute',
    bottom: '0',
    right: '-2rem',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: 300,
    userSelect: 'none',
  },

  quote: {
    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
    fontWeight: 400,
    lineHeight: 1.9,
    color: '#e8e6e3',
    fontStyle: 'italic',
    padding: '0 2rem',
    position: 'relative',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    letterSpacing: '0.01em',
  },

  button: {
    backgroundColor: 'transparent',
    border: '1px solid #3d3d3d',
    color: '#8a8680',
    padding: '0.75rem 2rem',
    fontSize: '0.75rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 300,
    transition: 'all 300ms ease',
    outline: 'none',
    marginTop: '1rem',
  },

  footer: {
    marginTop: '2rem',
  },

  link: {
    color: '#8a8680',
    textDecoration: 'none',
    fontSize: '0.875rem',
    letterSpacing: '0.05em',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 300,
    borderBottom: '1px solid transparent',
    transition: 'color 300ms ease, border-bottom-color 300ms ease',
    paddingBottom: '2px',
  },

  decorLineLeft: {
    position: 'fixed',
    left: '5%',
    top: '20%',
    bottom: '20%',
    width: '1px',
    background: 'linear-gradient(to bottom, transparent, #2a2a2a, transparent)',
    opacity: 0.3,
    pointerEvents: 'none',
  },

  decorLineRight: {
    position: 'fixed',
    right: '5%',
    top: '20%',
    bottom: '20%',
    width: '1px',
    background: 'linear-gradient(to bottom, transparent, #2a2a2a, transparent)',
    opacity: 0.3,
    pointerEvents: 'none',
  },
};
