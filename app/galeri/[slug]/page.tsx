import Link from "next/link";
import { notFound } from "next/navigation";

interface PageParams {
  slug: string;
}

interface PageProps {
  params: Promise<PageParams>;
}

interface BookData {
  title: string;
  content: string;
}

const booksData: Record<string, BookData> = {
  lembur: {
    title: "Lembur",
    content: `Di ruang yang sunyi ini, waktu bergerak dengan irama yang berbeda. Bukan lagi detik yang diukur, melainkan hembusan napas yang tertahan. Lembur bukan sekadar tambahan jam di belakang meja, tapi perjuangan sunyi melawan kelelahan yang merayap di tulang-tulang.

Kami yang tertinggal di sini, di antara dinding-dinding yang menyerap cahaya, memahami sesuatu yang tak terucap. Bahwa kerja itu bukan hanya soal upah, tapi soal eksistensi. Soal bukti bahwa kita ada, bahwa kita mampu, bahwa kita pantas.

Lampu neon berkedip-kedip di atas kepala, menciptakan bayangan yang menari di sudut-sudut ruangan. Di luar, kota telah tertidur. Tapi di sini, di dalam ruang sunyi ini, ada yang masih terjaga. Ada yang masih berjuang. Ada yang masih percaya bahwa esok akan lebih baik, meski esok itu datang dengan lembur yang lain lagi.

Suara mesin printer terdengar seperti detak jantung. Ritme yang monoton namun menenangkan. Kertas demi kertas keluar, membawa hasil kerja yang mungkin tak akan pernah diapresiasi sepenuhnya. Tapi itu tak penting. Yang penting adalah kita telah melakukan yang terbaik. Di tengah sunyi, di tengah lelah, di tengah malam yang panjang.`
  },
  upah: {
    title: "Upah",
    content: `Upah bukan sekadar angka di slip gaji. Ia adalah cerita panjang tentang pengorbanan, tentang waktu yang tak bisa kembali, tentang tenaga yang terkuras habis. Setiap rupiah yang masuk ke rekening membawa beban tak terlihat: mata yang perih, punggung yang pegal, pikiran yang tak pernah benar-benar istirahat.

Kami berdiri di pasar tenaga kerja yang tak pernah adil. Di mana harga diri seringkali ditawar murah. Di mana kerja keras tak selalu berbanding lurus dengan imbalan. Tapi apa pilihan yang kita punya? Hidup harus diteruskan. Keluarga menunggu di rumah. Impian-impian kecil yang masih tersimpan rapat di laci hati.

Ada yang bilang, jangan bekerja hanya untuk uang. Tapi mereka yang mengatakan itu mungkin tak pernah merasakan perut yang keroncongan. Tak pernah harus memilih antara membayar listrik atau membeli obat untuk anak. Upah adalah nyawa kita yang diuangkan. Dan kita pantas mendapatkannya dengan layak.

Malam ini, aku menghitung lagi. Berapa jam yang tersisa? Berapa tenaga yang masih bisa kukeluarkan? Berapa harga diri yang harus kutekan agar bisa bertahan hidup? Pertanyaan-pertanyaan yang tak pernah ada jawabnya. Hanya siklus yang berputar.`
  },
  malam: {
    title: "Malam",
    content: `Malam adalah sahabat sekaligus musuh bagi kami yang bekerja di balik tirai kegelapan. Ketika dunia lain tertidur, kami terjaga. Menjaga mesin yang tak pernah lelah. Menjaga sistem yang harus terus berjalan. Malam membawa sunyi yang pekat, tapi juga membawa pemikiran-pemikiran liar yang mengganggu.

Di keheningan jam dua dini hari, pikiran menjadi paling tajam. Kita mulai bertanya-tanya: untuk apa semua ini? Apakah ini yang kita impikan ketika masih muda dan penuh cita-cita? Tapi kemudian kita menggelengkan kepala. Tak ada gunanya menyesali jalan yang telah dipilih. Yang penting sekarang adalah bertahan.

Cahaya dari layar monitor menjadi satu-satunya matahari yang kami kenal di malam hari. Biru pucat yang membuat mata perih. Tapi kami terbiasa. Kami selalu terbiasa dengan segala sesuatu yang menyakitkan. Itulah kekuatan kami. Itulah yang membuat kami bertahan.

Suara jangkrik terkadang terdengar dari luar jendela. Mengingatkan kami bahwa ada dunia lain di sana. Dunia yang normal. Dunia yang tidur di malam dan bangun di pagi. Tapi kami bukan bagian dari dunia itu. Kami adalah penjaga malam. Yang melihat fajar datang dengan mata lelah tapi hati yang masih utuh.`
  },
  sunyi: {
    title: "Sunyi",
    content: `Sunyi bukan kekosongan. Sunyi adalah penuh sesak dengan suara-suara yang tak terucap. Di ruang kerja yang sepi, kami mendengar banyak hal: desisan pendingin udara, dengung lampu, ketukan jari di keyboard. Tapi yang paling keras adalah suara pikiran kita sendiri.

Di sinilah kita benar-benar bertemu dengan diri sendiri. Tanpa distraksi. Tanpa alasan untuk lari. Sunyi memaksa kita untuk menghadapi apa yang sebenarnya kita rasakan: ketakutan, keraguan, kerinduan, dan segala bentuk kerapuhan manusiawi.

Kami yang terbiasa dengan sunyi memiliki cara berkomunikasi yang berbeda. Sebuah anggukan menggantikan kata-kata. Sebuah tatapan mengandung ribuan makna. Kami memahami bahwa tidak semua hal perlu diucapkan. Bahwa kadang, kehadiran adalah cukup.

Tapi sunyi juga bisa menjadi penjara. Ketika terlalu lama sendiri, kita mulai kehilangan kata-kata. Mulai lupa bagaimana berbicara. Mulai ragu dengan suara kita sendiri. Itulah sebabnya kami saling menyapa, meski hanya dengan senyum tipis. Sebagai pengingat bahwa kita masih ada. Bahwa kita masih manusia.`
  },
  "harga-diri": {
    title: "Harga Diri",
    content: `Berapa harga diri kita? Pertanyaan yang mengganggu di malam-malam panjang. Ketika bos memarahi di depan umum. Ketika klien menolak hasil kerja keras kita. Ketika rekan kerja mengambil kredit atas ide kita. Di saat-saat itulah harga diri kita goyah.

Tapi kami belajar sesuatu: harga diri bukan tentang bagaimana orang lain memperlakukan kita. Itu tentang bagaimana kita memperlakukan diri sendiri. Tentang batas yang kita tetapkan. Tentang "tidak" yang berani kita ucapkan. Tentang penghargaan yang kita berikan pada kerja keras kita sendiri.

Kadang kita harus menekannya. Menelan kepahitan demi mempertahankan pekerjaan. Tapi ada garis yang tak bisa dilewati. Garis di mana kita berkata: cukup. Di mana kita memilih kehilangan pekerjaan daripada kehilangan diri sendiri. Itu adalah momen paling menakutkan sekaligus paling membebaskan.

Harga diri juga terlihat di hal-hal kecil. Cara kita merapikan meja kerja. Cara kita menulis email dengan tata bahasa yang benar. Cara kita hadir tepat waktu meski tak ada yang memperhatikan. Itu adalah tanda bahwa kita menghargai diri sendiri. Bahwa kita tahu, kita pantas dihargai.`
  }
};

function toTitleCase(slug: string): string {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function BookDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const book = booksData[slug];

  if (!book) {
    notFound();
  }

  const paragraphs = book.content.split("\n\n");

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "100px 20px"
      }}
    >
      <article
        style={{
          maxWidth: "720px",
          margin: "0 auto"
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: 400,
            marginBottom: "80px",
            textAlign: "center",
            letterSpacing: "0.05em"
          }}
        >
          {toTitleCase(slug)}
        </h1>

        <div
          style={{
            fontSize: "18px",
            lineHeight: "2.2",
            opacity: 0.9
          }}
        >
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              style={{
                marginBottom: "2em",
                textAlign: "justify"
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div
          style={{
            marginTop: "100px",
            textAlign: "center"
          }}
        >
          <Link
            href="/galeri"
            style={{
              display: "inline-block",
              padding: "16px 32px",
              border: "1px solid rgba(228, 226, 223, 0.3)",
              color: "#e4e2df",
              textDecoration: "none",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              transition: "opacity 0.3s ease",
              background: "transparent",
              opacity: 0.7
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.7";
            }}
          >
            Kembali ke Rak
          </Link>
        </div>
      </article>
    </div>
  );
}
