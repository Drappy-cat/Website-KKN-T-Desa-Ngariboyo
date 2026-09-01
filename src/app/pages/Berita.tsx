import { useState } from "react";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { BERITA } from "../data";
import { usePageMeta } from "../hooks/usePageMeta";

function PageBanner({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="relative bg-gradient-to-b from-[#071F11] via-[#0B2E1A] to-[#05170D] pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#F4B400_0%,_transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest mb-4 font-caption border border-accent/30">
          Berita
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4 leading-tight">{title}</h1>
        {sub && <p className="text-white/60 text-base font-body max-w-2xl mx-auto">{sub}</p>}
      </div>
    </div>
  );
}

const KAT_WARNA: Record<string, { bg: string; text: string }> = {
  Pertanian: { bg: "#E8F5E9", text: "#2E7D32" },
  Pendidikan: { bg: "#E3F2FD", text: "#1565C0" },
  Ekonomi: { bg: "#FFF3E0", text: "#E65100" },
  Teknologi: { bg: "#EDE7F6", text: "#4527A0" },
  Olahraga: { bg: "#F3E5F5", text: "#6A1B9A" },
  Lingkungan: { bg: "#E0F2F1", text: "#00695C" },
  Kesehatan: { bg: "#FCE4EC", text: "#C62828" },
};

export default function Berita() {
  usePageMeta("Berita & Aktivitas", "Laporan dan cerita terkini dari kegiatan KKNT Desa Ngariboyo 2024.");
  const [selected, setSelected] = useState<typeof BERITA[0] | null>(null);
  const [filterKat, setFilterKat] = useState("Semua");

  const kategori = ["Semua", ...Array.from(new Set(BERITA.map((b) => b.kat)))];
  const filtered = BERITA.filter((b) => filterKat === "Semua" || b.kat === filterKat);

  if (selected) {
    const k = KAT_WARNA[selected.kat] || { bg: "#E8F5E9", text: "#14532D" };
    const related = BERITA.filter((b) => b.id !== selected.id && b.kat === selected.kat).slice(0, 2);
    return (
      <>
        <PageBanner title="Detail Berita" />
        <div className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <button
              onClick={() => setSelected(null)}
              className="flex items-center gap-2 text-primary font-semibold mb-8 hover:gap-3 transition-all font-body"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali ke Berita
            </button>
            <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-border">
              <div className="relative h-72 sm:h-96 overflow-hidden">
                <img src={selected.img} alt={selected.judul} className="w-full h-full object-cover" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span
                  className="absolute top-5 left-5 px-3 py-1.5 rounded-xl text-sm font-semibold font-caption"
                  style={{ backgroundColor: k.bg, color: k.text }}
                >
                  {selected.kat}
                </span>
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-5 font-caption">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />{selected.tgl}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />{selected.penulis}
                  </div>
                </div>
                <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground mb-6 leading-snug">
                  {selected.judul}
                </h1>
                <div className="prose max-w-none">
                  <p className="text-foreground/75 text-base leading-relaxed font-body">{selected.isi}</p>
                  <p className="text-foreground/75 text-base leading-relaxed font-body mt-4">
                    Kegiatan ini merupakan bagian dari program KKNT Desa Ngariboyo 2024 yang dilaksanakan oleh mahasiswa Universitas Negeri Surabaya. Program ini bertujuan untuk memberikan dampak nyata bagi masyarakat desa melalui berbagai kegiatan yang terencana dan terstruktur.
                  </p>
                  <p className="text-foreground/75 text-base leading-relaxed font-body mt-4">
                    Partisipasi aktif warga sangat mendukung keberhasilan program ini. Ke depannya, diharapkan program serupa dapat terus dilanjutkan dan dikembangkan secara mandiri oleh masyarakat Desa Ngariboyo.
                  </p>
                </div>
              </div>
            </div>

            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="font-display font-bold text-xl text-primary mb-6">Berita Terkait</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {related.map((b) => {
                    const rk = KAT_WARNA[b.kat] || { bg: "#E8F5E9", text: "#14532D" };
                    return (
                      <article
                        key={b.id}
                        className="group bg-white rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all border border-border cursor-pointer"
                        onClick={() => { setSelected(b); window.scrollTo(0, 0); }}
                      >
                        <div className="relative h-36 overflow-hidden">
                          <img src={b.img} alt={b.judul} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
                          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-lg text-xs font-semibold font-caption" style={{ backgroundColor: rk.bg, color: rk.text }}>{b.kat}</span>
                        </div>
                        <div className="p-4">
                          <h3 className="font-display font-bold text-foreground text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">{b.judul}</h3>
                          <div className="text-muted-foreground text-xs mt-2 font-caption">{b.tgl}</div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageBanner
        title="Berita & Aktivitas"
        sub="Ikuti perkembangan, dokumentasi kegiatan, dan cerita pengabdian KKNT Desa Ngariboyo 2024"
      />

      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {kategori.map((k) => {
              const active = filterKat === k;
              return (
                <button
                  key={k}
                  onClick={() => setFilterKat(k)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all font-body ${
                    active
                      ? "bg-primary text-white shadow-md"
                      : "bg-white border border-border text-foreground/60 hover:border-primary/40"
                  }`}
                >
                  {k}
                </button>
              );
            })}
          </div>

          {/* Featured (first article) */}
          {filtered.length > 0 && (
            <article
              className="group mb-8 bg-white rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-border cursor-pointer hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] transition-all"
              onClick={() => setSelected(filtered[0])}
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img src={filtered[0].img} alt={filtered[0].judul} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span
                    className="inline-block px-3 py-1 rounded-xl text-sm font-semibold font-caption mb-4"
                    style={{ backgroundColor: KAT_WARNA[filtered[0].kat]?.bg || "#E8F5E9", color: KAT_WARNA[filtered[0].kat]?.text || "#14532D" }}
                  >
                    {filtered[0].kat}
                  </span>
                  <h2 className="font-display font-extrabold text-2xl text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {filtered[0].judul}
                  </h2>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5 line-clamp-3">{filtered[0].isi}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-caption">
                    <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{filtered[0].tgl}</div>
                    <div className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{filtered[0].penulis}</div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Rest of articles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.slice(1).map((b) => {
              const k = KAT_WARNA[b.kat] || { bg: "#E8F5E9", text: "#14532D" };
              return (
                <article
                  key={b.id}
                  className="group bg-white rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 border border-border cursor-pointer"
                  onClick={() => setSelected(b)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={b.img} alt={b.judul} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold font-caption"
                      style={{ backgroundColor: k.bg, color: k.text }}
                    >
                      {b.kat}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 font-caption">
                      <div className="flex items-center gap-1"><Calendar className="w-3 h-3" />{b.tgl}</div>
                      <div className="flex items-center gap-1"><User className="w-3 h-3" />{b.penulis}</div>
                    </div>
                    <h3 className="font-display font-bold text-foreground text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">{b.judul}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body line-clamp-2">{b.isi}</p>
                  </div>
                </article>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground font-body">
              <div className="text-5xl mb-4">📰</div>
              <p>Tidak ada berita untuk kategori ini.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
