import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { IDENTITAS, LOGO_ELEMEN } from "../data";
import { usePageMeta } from "../hooks/usePageMeta";
import logoTransparent from "../../assets/logos/kknt/logo-kknt-removebg.png";
import IDCardGallery from "../components/IDCardGallery";

function IDCardSway({ logoSrc }: { logoSrc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <style>{`
        @keyframes kkntCardSway {
          0%,100% { transform: perspective(600px) rotateZ(-5deg) rotateY(-6deg); }
          20%     { transform: perspective(600px) rotateZ(7deg)  rotateY(8deg);  }
          40%     { transform: perspective(600px) rotateZ(-4deg) rotateY(-4deg); }
          60%     { transform: perspective(600px) rotateZ(8deg)  rotateY(7deg);  }
          80%     { transform: perspective(600px) rotateZ(-6deg) rotateY(-8deg); }
        }
      `}</style>
      <div
        className="flex flex-col items-center cursor-pointer select-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          style={{
            transformOrigin: "top center",
            animation: hovered ? "kkntCardSway 2.6s ease-in-out infinite" : "none",
          }}
          className="flex flex-col items-center"
        >
          {/* Lanyard string */}
          <div className="w-1.5 h-14 bg-gradient-to-b from-accent via-accent/80 to-accent/60 rounded-full shadow-sm" />
          {/* Metal clip */}
          <div className="w-6 h-2.5 bg-gray-300 dark:bg-gray-600 rounded-sm border border-gray-400/50 shadow -mt-px" />

          {/* ID Card */}
          <div className="w-44 rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.25)] border border-border -mt-0.5">
            {/* Header */}
            <div className="bg-primary px-4 pt-5 pb-4 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-10 translate-x-10 pointer-events-none" />
              <div className="flex items-center justify-center gap-2 mb-1 relative z-10">
                <div className="w-9 h-9 rounded-full bg-white/15 border border-white/25 flex items-center justify-center overflow-hidden shrink-0">
                  <img src={logoSrc} className="w-8 h-8 object-contain" alt="Logo" />
                </div>
                <div className="text-left">
                  <div className="text-white font-display font-extrabold text-[11px] leading-tight">KKNT 2026</div>
                  <div className="text-accent text-[8px] font-caption leading-tight">Univ. Negeri Surabaya</div>
                </div>
              </div>
              <div className="text-white/50 text-[7px] font-caption tracking-widest mt-1 relative z-10">DESA NGARIBOYO · MAGETAN</div>
            </div>

            {/* Body */}
            <div className="bg-white dark:bg-card px-4 py-3">
              {/* Photo */}
              <div className="w-16 h-20 mx-auto rounded-xl mb-3 border-2 border-border bg-muted overflow-hidden flex flex-col items-center justify-end">
                <div className="w-10 h-10 rounded-full bg-foreground/10 mb-0.5" />
                <div className="w-14 h-8 rounded-t-full bg-foreground/10" />
              </div>

              {/* Info rows */}
              <div className="text-center space-y-1 mb-3">
                <div className="font-display font-extrabold text-foreground text-xs">NAMA MAHASISWA</div>
                <div className="text-muted-foreground text-[9px] font-caption">NIM · 25051204XXX</div>
                <span className="inline-block px-2.5 py-0.5 bg-primary/10 text-primary text-[9px] font-semibold rounded-full border border-primary/20">
                  Teknik Informatika
                </span>
              </div>

              {/* Barcode */}
              <div className="flex justify-center gap-px mb-1">
                {Array.from({ length: 26 }, (_, i) => (
                  <div
                    key={i}
                    className="bg-foreground/75 rounded-[1px]"
                    style={{ width: "1.5px", height: `${10 + (i % 5) * 3}px` }}
                  />
                ))}
              </div>
              <div className="text-[7px] text-center text-muted-foreground font-caption tracking-widest">25051204XXX</div>
            </div>

            {/* Footer */}
            <div className="bg-primary/5 dark:bg-primary/15 border-t border-border px-3 py-1.5 flex items-center justify-between">
              <div className="text-[7px] text-muted-foreground font-caption">Berlaku: 13 Agt – 25 Sept 2026</div>
              <div className="w-2 h-2 rounded-full bg-primary/40" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PageBanner({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="relative bg-gradient-to-b from-[#071F11] via-[#0B2E1A] to-[#05170D] pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#F4B400_0%,_transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest mb-4 font-caption border border-accent/30">
          Tentang Kami
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4 leading-tight">{title}</h1>
        {sub && <p className="text-white/60 text-base font-body max-w-2xl mx-auto">{sub}</p>}
      </div>
    </div>
  );
}

export default function Tentang() {
  usePageMeta("Tentang KKNT", "Visi, misi, filosofi logo, dan latar belakang program KKNT Desa Ngariboyo 2026.");
  return (
    <>
      <PageBanner
        title="Tentang KKNT"
        sub="Program Kuliah Kerja Nyata Tematik Universitas Negeri Surabaya di Desa Ngariboyo"
      />

      {/* ── APA ITU KKNT ─────────────────────────────────────────────────── */}
      <section id="program" className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-muted text-primary mb-5 font-caption">Program</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-5 leading-tight">Apa itu KKNT?</h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-5 font-body">
                Kuliah Kerja Nyata Tematik (KKNT) adalah bentuk pengabdian masyarakat yang wajib ditempuh mahasiswa Universitas Negeri Surabaya. Program ini menempatkan mahasiswa langsung di tengah masyarakat untuk mengaplikasikan ilmu yang telah dipelajari di bangku kuliah.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-5 font-body">
                Di Desa Ngariboyo, KKNT berjalan selama periode 13 Agustus – 25 September 2026 dengan melibatkan 15 mahasiswa dari 4 jurusan: PGSD, Teknik Informatika, Manajemen, dan Ilmu Keolahragaan.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed font-body">
                Seluruh program kerja dirancang berdasarkan hasil observasi dan diskusi langsung dengan warga dan perangkat desa, sehingga setiap kegiatan benar-benar menjawab kebutuhan nyata masyarakat.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { nilai: "15", label: "Mahasiswa", sub: "Dari 4 jurusan berbeda" },
                { nilai: "2 Bln", label: "Durasi Program", sub: "13 Agustus – 25 September 2026" },
                { nilai: "14", label: "Program Kerja", sub: "Terencana & Berjalan" },
                { nilai: "4.800+", label: "Jiwa Terdampak", sub: "Warga Desa Ngariboyo" },
              ].map((item) => (
                <div key={item.label} className="bg-card rounded-[20px] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] text-center border border-border">
                  <div className="font-display font-extrabold text-3xl text-primary mb-1">{item.nilai}</div>
                  <div className="font-semibold text-foreground text-sm font-body">{item.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 font-caption">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TUJUAN ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white text-primary mb-4 font-caption">Tujuan</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary">Tujuan Program</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { no: "01", judul: "Pengabdian Nyata", deskripsi: "Mengaplikasikan ilmu pengetahuan mahasiswa untuk memecahkan permasalahan nyata yang dihadapi masyarakat desa." },
              { no: "02", judul: "Kolaborasi Multidisiplin", deskripsi: "Mempertemukan berbagai disiplin ilmu dalam satu program terpadu untuk menciptakan solusi yang komprehensif." },
              { no: "03", judul: "Pemberdayaan Warga", deskripsi: "Meningkatkan kapasitas dan kemandirian warga desa melalui pelatihan, pendampingan, dan transfer pengetahuan." },
            ].map((t) => (
              <div key={t.no} className="bg-card rounded-[20px] p-7 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-border hover:-translate-y-1 transition-all">
                <div className="font-display font-extrabold text-5xl text-primary/10 mb-2">{t.no}</div>
                <h3 className="font-display font-bold text-primary text-xl mb-3">{t.judul}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">{t.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISI & MISI ──────────────────────────────────────────────────── */}
      <section id="visi-misi" className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Visi */}
            <div className="bg-primary rounded-[20px] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-16 translate-x-16 pointer-events-none" />
              <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest mb-5 font-caption border border-accent/30">Visi</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-snug mb-4">{IDENTITAS.visi}</h2>
              <div className="w-16 h-1 bg-accent rounded-full" />
            </div>

            {/* Misi */}
            <div className="bg-card rounded-[20px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-border">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-5 font-caption border border-primary/20">Misi</span>
              <ul className="space-y-4">
                {IDENTITAS.misi.map((m, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm leading-relaxed font-body">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Slogan + Moto */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="bg-accent rounded-[20px] p-7 text-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-3 font-caption">Slogan</div>
              <h3 className="font-display font-extrabold text-2xl text-primary italic">"{IDENTITAS.slogan}"</h3>
            </div>
            <div className="bg-muted rounded-[20px] p-7 text-center border border-border">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 font-caption">Tagline</div>
              <h3 className="font-display font-bold text-primary text-xl">{IDENTITAS.tagline}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILOSOFI LOGO ────────────────────────────────────────────────── */}
      <section id="filosofi" className="py-20 sm:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white text-primary mb-4 font-caption">Identitas Visual</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-3">Filosofi Logo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body">{IDENTITAS.filosofi}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Logo display */}
            <div className="lg:sticky lg:top-28 flex flex-col items-center gap-6">
              <div className="bg-white rounded-[24px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-border">
                <img src={logoTransparent} alt="Logo KKNT Desa Ngariboyo" className="w-64 h-64 sm:w-80 sm:h-80 object-contain" loading="lazy" decoding="async" />
              </div>
              <div className="bg-primary rounded-[20px] p-6 text-center w-full max-w-sm">
                <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-2 font-caption">Makna Keseluruhan</div>
                <p className="text-white/80 text-sm leading-relaxed font-body">{IDENTITAS.maknakeseluruhan}</p>
              </div>
            </div>

            {/* Elemen */}
            <div className="space-y-4">
              {LOGO_ELEMEN.map((el) => (
                <div
                  key={el.no}
                  className="flex gap-4 items-start p-5 bg-card rounded-[20px] border border-border shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-display font-extrabold text-sm"
                    style={{ backgroundColor: `${el.warna}20`, color: el.warna }}
                  >
                    {el.no}
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground text-base mb-1">{el.nama}</div>
                    <div className="text-muted-foreground text-sm leading-relaxed font-body">{el.makna}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DESAIN ATRIBUT ───────────────────────────────────────────────── */}
      <section id="atribut" className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-muted text-primary mb-4 font-caption border border-border">Identitas Fisik</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-3">Desain Atribut</h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-body text-sm">
              Setiap peserta KKNT dilengkapi atribut identitas resmi — vest, lanyard, dan ID card — yang mencerminkan semangat dan identitas program.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* ── VEST ─────────────────────────────────────────────── */}
            <div className="bg-card rounded-[20px] p-8 border border-border shadow-[0_10px_30px_rgba(0,0,0,0.07)] flex flex-col items-center text-center hover:-translate-y-1 transition-all group">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500" />
                <svg viewBox="0 0 200 230" className="w-44 h-48 drop-shadow-xl relative z-10" fill="none">
                  {/* Vest body */}
                  <path d="M 50 55 L 25 100 L 58 108 L 58 205 L 142 205 L 142 108 L 175 100 L 150 55 Q 125 18 100 38 Q 75 18 50 55 Z"
                        fill="#14532D" />
                  {/* Darker side panels */}
                  <path d="M 50 55 L 25 100 L 58 108 L 58 130 Q 40 120 30 105 Z" fill="#0F3D1E" opacity="0.5" />
                  <path d="M 150 55 L 175 100 L 142 108 L 142 130 Q 160 120 170 105 Z" fill="#0F3D1E" opacity="0.5" />
                  {/* V-collar */}
                  <path d="M 82 38 L 100 68 L 118 38" fill="#0F3D1E" stroke="#1E5D3A" strokeWidth="2" strokeLinejoin="round" />
                  {/* Left chest pocket */}
                  <rect x="62" y="118" width="38" height="28" rx="5" fill="#0F3D1E" opacity="0.5" />
                  {/* Chest logo area */}
                  <circle cx="81" cy="132" r="14" fill="#F4B400" opacity="0.15" />
                  <text x="81" y="128" textAnchor="middle" fill="#F4B400" fontSize="7" fontFamily="sans-serif" fontWeight="900">KKNT</text>
                  <text x="81" y="138" textAnchor="middle" fill="white" fontSize="5.5" fontFamily="sans-serif" opacity="0.8">NGARIBOYO</text>
                  {/* Center text */}
                  <text x="100" y="170" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="700" opacity="0.8">UNIVERSITAS</text>
                  <text x="100" y="182" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" opacity="0.6">NEGERI SURABAYA</text>
                  <text x="100" y="197" textAnchor="middle" fill="#F4B400" fontSize="11" fontFamily="sans-serif" fontWeight="900">2026</text>
                  {/* Center buttons */}
                  <circle cx="100" cy="115" r="3" fill="white" opacity="0.35" />
                  <circle cx="100" cy="128" r="3" fill="white" opacity="0.35" />
                  <circle cx="100" cy="141" r="3" fill="white" opacity="0.35" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-2">Vest Peserta</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Vest hijau tua berlogo KKNT di dada kiri dengan identitas UNESA di bagian belakang. Dikenakan saat kegiatan lapangan.
              </p>
            </div>

            {/* ── LANYARD ──────────────────────────────────────────── */}
            <div className="bg-card rounded-[20px] p-8 border border-border shadow-[0_10px_30px_rgba(0,0,0,0.07)] flex flex-col items-center text-center hover:-translate-y-1 transition-all group">
              <div className="mb-6 flex flex-col items-center">
                {/* Lanyard strap */}
                <div className="flex gap-0.5 mb-0">
                  <div className="w-3 h-20 bg-gradient-to-b from-primary to-primary/80 rounded-t-full shadow-sm" />
                  <div className="w-3 h-20 bg-gradient-to-b from-accent to-accent/80 rounded-t-full shadow-sm" />
                  <div className="w-3 h-20 bg-gradient-to-b from-primary to-primary/80 rounded-t-full shadow-sm" />
                </div>
                {/* Metal clip */}
                <div className="w-7 h-3.5 border-2 border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700 rounded-sm shadow-inner -mt-px" />
                {/* Card holder preview */}
                <div className="mt-1 w-32 bg-white dark:bg-muted rounded-2xl border border-border shadow-[0_8px_24px_rgba(0,0,0,0.15)] overflow-hidden">
                  {/* Card header */}
                  <div className="bg-primary px-3 py-2 text-center">
                    <span className="text-accent text-[8px] font-display font-extrabold">KKNT 2026</span>
                    <div className="text-white/60 text-[7px] font-caption">DESA NGARIBOYO</div>
                  </div>
                  {/* Card body */}
                  <div className="px-3 py-2 flex gap-2 items-start">
                    <div className="w-10 h-12 bg-gray-100 dark:bg-card rounded-lg border border-border shrink-0 flex flex-col items-center justify-end overflow-hidden">
                      <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-muted" />
                      <div className="w-8 h-4 rounded-t-full bg-gray-200 dark:bg-muted" />
                    </div>
                    <div className="flex-1 space-y-1.5 pt-1">
                      <div className="h-1.5 w-full bg-foreground/15 rounded-full" />
                      <div className="h-1.5 w-3/4 bg-foreground/10 rounded-full" />
                      <div className="h-1.5 w-1/2 bg-primary/30 rounded-full" />
                    </div>
                  </div>
                  <div className="flex justify-center gap-px pb-2 px-3">
                    {Array.from({ length: 18 }, (_, i) => (
                      <div key={i} className="bg-foreground/50 rounded-px" style={{ width: "1.5px", height: `${8 + (i % 3) * 3}px` }} />
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-2">Lanyard</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Lanyard tiga warna (hijau–kuning emas–hijau) dengan ID card peserta. Dikenakan di leher selama program berlangsung.
              </p>
            </div>

            {/* ── ID CARD OVERVIEW ─────────────────────────────────── */}
            <div className="bg-card rounded-[20px] p-8 border border-border shadow-[0_10px_30px_rgba(0,0,0,0.07)] flex flex-col items-center text-center">
              <IDCardSway logoSrc={logoTransparent} />
              <h3 className="font-display font-bold text-foreground text-lg mb-2 mt-6">ID Card Resmi</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Kartu identitas resmi peserta berisi nama, NIM, jurusan, dan barcode. Arahkan kursor untuk melihat animasinya.
              </p>
            </div>
          </div>

          {/* ── GALERI ID CARD SELURUH ANGGOTA PER DIVISI ─────────────────── */}
          <div className="mt-20 pt-16 border-t border-border">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:text-accent mb-4 font-caption">
                Koleksi Identitas
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-foreground mb-3">
                Galeri ID Card Anggota KKNT
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto font-body text-sm sm:text-base">
                ID Card resmi untuk seluruh 15 mahasiswa peserta KKNT Desa Ngariboyo 2026 yang dikelompokkan berdasarkan divisi dan program studi.
              </p>
            </div>

            <IDCardGallery />
          </div>
        </div>
      </section>

      {/* ── Palet Warna ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-primary mb-2">Palet Warna Logo</h2>
            <p className="text-muted-foreground font-body text-sm">Setiap warna dipilih dengan makna dan filosofi yang mendalam.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            {[
              { hex: "#1E5D3A", nama: "Hijau Tua", makna: "Keseimbangan" },
              { hex: "#4CAF50", nama: "Hijau Muda", makna: "Pertumbuhan" },
              { hex: "#8BC34A", nama: "Hijau Segar", makna: "Kesuburan" },
              { hex: "#F4B400", nama: "Kuning Emas", makna: "Kemakmuran" },
              { hex: "#2196F3", nama: "Biru", makna: "Air & Kehidupan" },
              { hex: "#795548", nama: "Coklat", makna: "Tanah & Kearifan" },
            ].map((w) => (
              <div key={w.hex} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl shadow-md border-2 border-white" style={{ backgroundColor: w.hex }} />
                <div className="text-xs font-caption text-center">
                  <div className="font-semibold text-foreground">{w.nama}</div>
                  <div className="text-muted-foreground">{w.hex}</div>
                  <div className="text-primary font-medium">({w.makna})</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
