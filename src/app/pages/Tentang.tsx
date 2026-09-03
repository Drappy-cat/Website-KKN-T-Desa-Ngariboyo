import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { IDENTITAS, LOGO_ELEMEN } from "../data";
import { usePageMeta } from "../hooks/usePageMeta";
import logoTransparent from "../../assets/logos/kknt/logo-kknt-removebg.png";
import IDCardGallery from "../components/IDCardGallery";
import vestFront from "../../assets/perlengkapan/43.svg";
import vestBack from "../../assets/perlengkapan/41.svg";
import lanyardImg from "../../assets/perlengkapan/42.svg";
import izoraIdCard from "../../assets/id-card/Izora Elverda Narulita Putri_Pubdedok_Teknik Informatika.svg";

function IDCardSway() {
  const [hovered, setHovered] = useState(false);
  return (
    <>
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
          <div className="w-56 rounded-[20px] overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.25)] border-2 border-white/60 dark:border-white/10 -mt-2 bg-gradient-to-b from-white/80 to-white/40 dark:from-muted/80 dark:to-muted/40 backdrop-blur-sm">
            <img src={izoraIdCard} alt="ID Card Izora" className="w-full h-auto object-contain" />
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
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-card text-primary dark:text-accent mb-4 font-caption border border-border shadow-sm">Tujuan</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary">Tujuan Program</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { no: "01", judul: "Pengabdian Nyata", deskripsi: "Mengaplikasikan ilmu pengetahuan mahasiswa untuk memecahkan permasalahan nyata yang dihadapi masyarakat desa." },
              { no: "02", judul: "Kolaborasi Multidisiplin", deskripsi: "Mempertemukan berbagai disiplin ilmu dalam satu program terpadu untuk menciptakan solusi yang komprehensif." },
              { no: "03", judul: "Pemberdayaan Warga", deskripsi: "Meningkatkan kapasitas dan kemandirian warga desa melalui pelatihan, pendampingan, dan transfer pengetahuan." },
            ].map((t) => (
              <div key={t.no} className="bg-card rounded-[20px] p-7 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-border hover:-translate-y-1 transition-all">
                <div className="font-display font-extrabold text-5xl text-primary/10 dark:text-accent/15 mb-2">{t.no}</div>
                <h3 className="font-display font-bold text-primary dark:text-accent text-xl mb-3">{t.judul}</h3>
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
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-accent text-xs font-semibold uppercase tracking-widest mb-5 font-caption border border-primary/20">Misi</span>
              <ul className="space-y-4">
                {IDENTITAS.misi.map((m, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary dark:text-emerald-400 shrink-0 mt-0.5" />
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
              <h3 className="font-display font-bold text-primary dark:text-accent text-xl">{IDENTITAS.tagline}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILOSOFI LOGO ────────────────────────────────────────────────── */}
      <section id="filosofi" className="py-20 sm:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-card text-primary dark:text-accent mb-4 font-caption border border-border shadow-sm">Identitas Visual</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-3">Filosofi Logo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body text-sm sm:text-base">{IDENTITAS.filosofi}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Logo display */}
            <div className="lg:sticky lg:top-28 flex flex-col items-center gap-6">
              <div className="bg-card rounded-[24px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-border">
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
              Setiap peserta KKNT dilengkapi atribut identitas resmi vest, lanyard, dan ID card yang mencerminkan semangat dan identitas program.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* ── VEST ─────────────────────────────────────────────── */}
            <div className="bg-card rounded-[20px] p-8 border border-border shadow-[0_10px_30px_rgba(0,0,0,0.07)] flex flex-col items-center text-center hover:-translate-y-1 transition-all group">
              <div className="mb-6 relative" style={{ perspective: "1000px" }}>
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl scale-125 group-hover:scale-150 transition-transform duration-500" />
                
                <div 
                  className="w-64 h-64 sm:w-80 sm:h-80 drop-shadow-xl relative z-10 transition-transform duration-700 cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <style>{`
                    .vest-flip-container:hover .vest-flipper {
                      transform: rotateY(180deg);
                    }
                  `}</style>
                  {/* Container flipper yang dikontrol oleh hover parent card */}
                  <div className="w-full h-full relative transition-transform duration-700 group-hover:[transform:rotateY(180deg)]" style={{ transformStyle: "preserve-3d" }}>
                    
                    {/* Bagian Depan (43.svg) */}
                    <div className="absolute inset-0 flex items-center justify-center" style={{ backfaceVisibility: "hidden" }}>
                      <img src={vestFront} alt="Vest Depan" className="w-[140%] h-[140%] max-w-none object-contain" />
                    </div>
                    
                    {/* Bagian Belakang (41.svg) */}
                    <div className="absolute inset-0 flex items-center justify-center" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                      <img src={vestBack} alt="Vest Belakang" className="w-[140%] h-[140%] max-w-none object-contain" />
                    </div>
                    
                  </div>
                </div>
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-2">Vest Peserta</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Vest hijau tua berlogo KKNT di dada kiri dengan identitas UNESA di bagian belakang. Dikenakan saat kegiatan lapangan.
              </p>
            </div>

            {/* ── LANYARD ──────────────────────────────────────────── */}
            <div className="bg-card rounded-[20px] p-8 border border-border shadow-[0_10px_30px_rgba(0,0,0,0.07)] flex flex-col items-center text-center hover:-translate-y-1 transition-all group">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl scale-125 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="w-64 h-64 sm:w-80 sm:h-80 drop-shadow-xl relative z-10 transition-transform duration-700 cursor-pointer flex items-center justify-center">
                  <img src={lanyardImg} alt="Lanyard Peserta" className="w-[170%] h-[170%] max-w-none object-contain translate-y-10" />
                </div>
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-2">Lanyard</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Lanyard tiga warna (hijau–kuning emas–hijau) dengan ID card peserta. Dikenakan di leher selama program berlangsung.
              </p>
            </div>

            {/* ── ID CARD OVERVIEW ─────────────────────────────────── */}
            <div className="bg-card rounded-[20px] p-8 border border-border shadow-[0_10px_30px_rgba(0,0,0,0.07)] flex flex-col items-center text-center">
              <IDCardSway />
              <h3 className="font-display font-bold text-foreground text-lg mb-2 mt-6">ID Card Resmi</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Kartu identitas resmi peserta berisi nama, NIM, jurusan, dan media sosial kknt. Arahkan kursor untuk melihat animasinya.
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
