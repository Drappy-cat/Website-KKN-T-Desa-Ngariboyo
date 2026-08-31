import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight, Calendar, MapPin, Users, ChevronRight,
  BookOpen, Monitor, Briefcase, Dumbbell,
} from "lucide-react";
import { STATISTIK, JURUSAN_LIST, PROKER, BERITA, TIMELINE, GALERI, IDENTITAS } from "../data";
import { usePageMeta } from "../hooks/usePageMeta";
import logoTransparent from "../../imports/LOGO_VERSI_FIX_NON_PISAH_ELEMENT-removebg-preview.png";

// ── Counter Hook ───────────────────────────────────────────────────────────────
function useCounter(target: number, started: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const step = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

function StatCard({ target, label, satuan, started }: { target: number; label: string; satuan: string; started: boolean }) {
  const count = useCounter(target, started);
  return (
    <div className="text-center p-6 bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow">
      <div className="font-display font-extrabold text-4xl sm:text-5xl text-primary mb-1">
        {count.toLocaleString("id-ID")}{satuan}
      </div>
      <div className="text-muted-foreground text-sm font-body">{label}</div>
    </div>
  );
}

// ── Jurusan Icon Map ──────────────────────────────────────────────────────────
const JURUSAN_ICONS: Record<string, typeof BookOpen> = {
  pgsd: BookOpen,
  ti: Monitor,
  manajemen: Briefcase,
  ikor: Dumbbell,
};

// ── Main Component ─────────────────────────────────────────────────────────────
export default function Home() {
  usePageMeta("Beranda", "Website resmi KKNT Desa Ngariboyo 2024 — 15 mahasiswa Universitas Negeri Surabaya mengabdi di Magetan, Jawa Timur.");
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const prokerHighlight = PROKER.filter((p) => p.status === "Berjalan").slice(0, 4);
  const beritaPreview = BERITA.slice(0, 3);

  return (
    <>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes cloudLeft { 0%,100%{transform:translateX(0)} 50%{transform:translateX(-18px)} }
        @keyframes cloudRight { 0%,100%{transform:translateX(0)} 50%{transform:translateX(14px)} }
        @keyframes mountainRise { from { opacity:0; transform:translateY(60px) scale(0.95); } to { opacity:1; transform:translateY(0) scale(1); } }
        @keyframes logoPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }
        .anim-fade-up-0 { opacity:0; animation: fadeUp 0.7s ease forwards 0.1s; }
        .anim-fade-up-1 { opacity:0; animation: fadeUp 0.7s ease forwards 0.4s; }
        .anim-fade-up-2 { opacity:0; animation: fadeUp 0.7s ease forwards 0.7s; }
        .anim-fade-up-3 { opacity:0; animation: fadeUp 0.7s ease forwards 1.0s; }
        .anim-mountain { opacity:0; animation: mountainRise 1.2s cubic-bezier(.16,1,.3,1) forwards 0.2s; }
        .cloud-l { animation: cloudLeft 8s ease-in-out infinite; }
        .cloud-r { animation: cloudRight 10s ease-in-out infinite; }
        .logo-pulse { animation: logoPulse 4s ease-in-out infinite; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500382017968-0a04a3e16c5c?w=1920&h=1080&fit=crop&auto=format')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />

        {/* Decorative clouds */}
        <div className="cloud-l absolute top-1/4 left-[10%] w-32 h-16 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="cloud-r absolute top-1/3 right-[12%] w-24 h-12 bg-white/8 rounded-full blur-xl pointer-events-none" />

        {/* Content */}
        <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto pt-24 pb-20 transition-opacity duration-500 ${heroLoaded ? "opacity-100" : "opacity-0"}`}>
          {/* Logo with mountain-rise animation */}
          <div className="anim-mountain flex justify-center mb-8">
            <div className="logo-pulse w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-white shadow-2xl border-4 border-white/50 flex items-center justify-center overflow-hidden">
              <img src={logoTransparent} alt="KKNT Ngariboyo" className="w-36 h-36 sm:w-44 sm:h-44 object-contain" />
            </div>
          </div>

          {/* Location badge */}
          <div className="anim-fade-up-0 inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 text-accent text-sm font-medium mb-5 font-body">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            Universitas Negeri Surabaya · Magetan, Jawa Timur · 2024
          </div>

          {/* Title */}
          <h1 className="anim-fade-up-1 font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-4">
            KKNT Desa Ngariboyo
          </h1>

          {/* Slogan */}
          <p className="anim-fade-up-1 text-2xl sm:text-3xl text-accent font-display font-bold italic mb-3">
            "{IDENTITAS.slogan}"
          </p>
          <p className="anim-fade-up-1 text-white/60 text-base mb-8 font-caption">{IDENTITAS.tagline}</p>

          {/* Meta */}
          <div className="anim-fade-up-2 flex flex-wrap justify-center gap-6 text-sm text-white/55 mb-10 font-body">
            {[
              { Icon: Calendar, text: "Agustus – November 2024" },
              { Icon: MapPin, text: "Ngariboyo, Magetan, Jatim" },
              { Icon: Users, text: "15 Mahasiswa · 4 Jurusan" },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-accent shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="anim-fade-up-3 flex flex-wrap justify-center gap-4">
            <Link
              to="/proker"
              className="flex items-center gap-2 px-7 py-3.5 bg-accent text-primary font-semibold rounded-2xl hover:bg-accent/90 transition-all hover:scale-103 active:scale-97 shadow-lg font-body"
            >
              Lihat Program Kerja
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/tim"
              className="flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white rounded-2xl hover:bg-white/10 transition-all font-body"
            >
              Profil Tim
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <div className="text-xs font-caption tracking-widest uppercase">Scroll</div>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ── TENTANG SINGKAT ──────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-muted text-primary mb-4 font-caption">
                Tentang Program
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-5 leading-tight">
                Apa itu KKNT<br />Desa Ngariboyo?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6 font-body">
                Kuliah Kerja Nyata Tematik (KKNT) adalah program pengabdian masyarakat mahasiswa Universitas Negeri Surabaya yang dilaksanakan di Desa Ngariboyo, Kecamatan Ngariboyo, Kabupaten Magetan, Jawa Timur. Program ini menempatkan 15 mahasiswa dari 4 jurusan berbeda untuk bersinergi membangun desa.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 font-body">
                Berlandaskan kolaborasi, kearifan lokal, dan inovasi, kami hadir untuk mewujudkan desa yang maju, mandiri, berbudaya, sejahtera, dan berkelanjutan.
              </p>
              <Link
                to="/tentang"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-2xl hover:bg-secondary transition-all hover:scale-103 font-body"
              >
                Pelajari Lebih Lanjut <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "🎓", judul: "4 Jurusan", sub: "PGSD, TI, Manajemen, Ikor" },
                { emoji: "📅", judul: "4 Bulan", sub: "Agustus – November 2024" },
                { emoji: "🏘️", judul: "1 Desa", sub: "Ngariboyo, Magetan" },
                { emoji: "🤝", judul: "20+ Proker", sub: "Beragam bidang pengabdian" },
              ].map((item) => (
                <div
                  key={item.judul}
                  className="bg-white rounded-[20px] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all"
                >
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <div className="font-display font-bold text-primary text-lg">{item.judul}</div>
                  <div className="text-muted-foreground text-xs font-caption mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATISTIK ────────────────────────────────────────────────────── */}
      <section ref={statsRef} className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {STATISTIK.map((s) => (
              <StatCard key={s.label} target={s.target} label={s.label} satuan={s.satuan} started={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHT JURUSAN ─────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-muted text-primary mb-4 font-caption">Jurusan</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-3">4 Jurusan Bersatu</h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-body">Mahasiswa dari berbagai disiplin ilmu berkolaborasi untuk memberikan dampak nyata bagi Desa Ngariboyo.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {JURUSAN_LIST.map((j) => {
              const Icon = JURUSAN_ICONS[j.id];
              const count = PROKER.filter((p) => p.jurusan === j.id).length;
              return (
                <Link
                  key={j.id}
                  to="/proker"
                  className="group bg-white rounded-[20px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2.5 transition-all border border-border"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-6"
                    style={{ backgroundColor: j.warnaLight }}
                  >
                    <Icon className="w-6 h-6" style={{ color: j.warna }} />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-1 text-lg">{j.label}</h3>
                  <p className="text-muted-foreground text-sm font-body mb-4">{count} Program Kerja</p>
                  <div className="flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2" style={{ color: j.warna }}>
                    Lihat Detail <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHT PROKER ──────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white text-primary mb-4 font-caption">Program Unggulan</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary">Program Berjalan</h2>
            </div>
            <Link to="/proker" className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all font-body">
              Lihat Semua <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {prokerHighlight.map((p) => {
              const j = JURUSAN_LIST.find((x) => x.id === p.jurusan);
              return (
                <div
                  key={p.id}
                  className="group bg-white rounded-[20px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-2.5 transition-all border border-border cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold font-caption"
                      style={{ backgroundColor: j?.warnaLight, color: j?.warna }}
                    >
                      {j?.label}
                    </span>
                    <span className="px-2.5 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium font-caption">
                      Berjalan
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{p.nama}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-body line-clamp-2">{p.deskripsi}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-caption">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {p.tanggal}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {p.lokasi}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-accent/20 text-accent mb-4 font-caption border border-accent/30">
              Timeline
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">Perjalanan KKNT</h2>
            <p className="text-white/60 max-w-xl mx-auto font-body">Dari observasi hingga pelaporan — 4 bulan penuh dedikasi dan pengabdian.</p>
          </div>
          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-white/15" />
            <div className="grid md:grid-cols-4 gap-8">
              {TIMELINE.map((t, i) => (
                <div key={i} className="relative flex flex-col items-center text-center md:items-center">
                  {/* Node */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-display font-extrabold text-xl mb-5 shadow-lg relative z-10 border-4 border-primary"
                    style={{ backgroundColor: t.warna }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="text-accent text-xs font-semibold uppercase tracking-wider mb-1 font-caption">{t.bulan}</div>
                  <h3 className="font-display font-bold text-white mb-3">{t.fase}</h3>
                  <ul className="space-y-1.5">
                    {t.kegiatan.map((k) => (
                      <li key={k} className="text-white/55 text-sm font-body flex items-center gap-1.5 justify-center">
                        <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                        {k}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PREVIEW GALERI ───────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-muted text-primary mb-4 font-caption">Dokumentasi</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary">Momen Terbaik</h2>
            </div>
            <Link to="/dokumentasi" className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all font-body">
              Lihat Semua <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          {/* Masonry-style grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {GALERI.slice(0, 8).map((g, i) => (
              <div
                key={i}
                className="break-inside-avoid group rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all relative cursor-pointer"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-xs font-caption font-medium">{g.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREVIEW BERITA ───────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white text-primary mb-4 font-caption">Berita & Aktivitas</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary">Terkini dari Lapangan</h2>
            </div>
            <Link to="/berita" className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all font-body">
              Semua Berita <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {beritaPreview.map((b) => (
              <article
                key={b.id}
                className="group bg-white rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 border border-border"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={b.img}
                    alt={b.judul}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-white rounded-lg text-xs font-caption font-semibold">
                    {b.kat}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3 font-caption">
                    <Calendar className="w-3.5 h-3.5" />
                    {b.tgl}
                  </div>
                  <h3 className="font-display font-bold text-foreground text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {b.judul}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body line-clamp-2">{b.isi}</p>
                  <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all font-body">
                    Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-4">
            Ikuti Perjalanan Kami
          </h2>
          <p className="text-primary/70 text-base mb-8 font-body max-w-2xl mx-auto">
            Tetap terhubung dengan kegiatan KKNT Desa Ngariboyo melalui media sosial dan berita terkini kami.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/berita"
              className="px-7 py-3.5 bg-primary text-white font-semibold rounded-2xl hover:bg-secondary transition-all hover:scale-103 font-body shadow-lg"
            >
              Baca Berita
            </Link>
            <Link
              to="/kontak"
              className="px-7 py-3.5 bg-white text-primary font-semibold rounded-2xl hover:bg-white/90 transition-all hover:scale-103 font-body"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
