import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { GALERI } from "../data";
import { usePageMeta } from "../hooks/usePageMeta";

function PageBanner({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="relative bg-gradient-to-b from-[#071F11] via-[#0B2E1A] to-[#05170D] pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#F4B400_0%,_transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest mb-4 font-caption border border-accent/30">
          Dokumentasi
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4 leading-tight">{title}</h1>
        {sub && <p className="text-white/60 text-base font-body max-w-2xl mx-auto">{sub}</p>}
      </div>
    </div>
  );
}

const KATEGORI = ["Semua", "Desa", "Pendidikan", "Olahraga", "Ekonomi", "Lingkungan", "Teknologi", "Kesehatan", "Kegiatan"];

const VIDEOS = [
  { judul: "Opening KKNT Desa Ngariboyo 2024", durasi: "3:45", thumb: "https://images.unsplash.com/photo-1500382017968-0a04a3e16c5c?w=500&h=280&fit=crop", yt: "https://youtube.com" },
  { judul: "Senam Pagi Bersama Warga Desa", durasi: "5:12", thumb: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=280&fit=crop", yt: "https://youtube.com" },
  { judul: "Workshop Kemasan Produk UMKM", durasi: "8:30", thumb: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=280&fit=crop", yt: "https://youtube.com" },
  { judul: "Bimbingan Belajar Gratis SD–SMP", durasi: "6:15", thumb: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=280&fit=crop", yt: "https://youtube.com" },
  { judul: "Launching Website Desa Ngariboyo", durasi: "4:00", thumb: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=280&fit=crop", yt: "https://youtube.com" },
  { judul: "Kerja Bakti Revitalisasi Taman Desa", durasi: "7:20", thumb: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=280&fit=crop", yt: "https://youtube.com" },
];

export default function Dokumentasi() {
  usePageMeta("Dokumentasi", "Galeri foto dan video kegiatan KKNT Desa Ngariboyo 2024.");
  const [filterKat, setFilterKat] = useState("Semua");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [tab, setTab] = useState<"foto" | "video">("foto");

  const filteredGaleri = GALERI.filter((g) => filterKat === "Semua" || g.kat === filterKat);

  const prev = () => setLightbox((v) => (v !== null ? (v - 1 + filteredGaleri.length) % filteredGaleri.length : null));
  const next = () => setLightbox((v) => (v !== null ? (v + 1) % filteredGaleri.length : null));

  return (
    <>
      <PageBanner
        title="Dokumentasi KKNT"
        sub="Kumpulan foto dan video kegiatan KKNT Desa Ngariboyo sepanjang program berlangsung"
      />

      {/* Tab */}
      <section className="bg-background border-b border-border sticky top-[65px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-0">
            {(["foto", "video"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-4 font-semibold text-sm capitalize transition-colors border-b-2 font-body ${
                  tab === t ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {t === "foto" ? `📷 Foto (${GALERI.length})` : `🎬 Video (${VIDEOS.length})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {tab === "foto" && (
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {KATEGORI.map((k) => (
                <button
                  key={k}
                  onClick={() => setFilterKat(k)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all font-body ${
                    filterKat === k
                      ? "bg-primary text-white shadow-md"
                      : "bg-white border border-border text-foreground/60 hover:border-primary/40"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>

            <div className="text-sm text-muted-foreground font-caption mb-6">
              {filteredGaleri.length} foto ditampilkan
            </div>

            {/* Masonry gallery */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {filteredGaleri.map((g, i) => (
                <div
                  key={i}
                  className="break-inside-avoid group rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all relative cursor-pointer"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <span className="text-white text-sm font-semibold font-body">{g.alt}</span>
                    <span className="text-white/70 text-xs font-caption">{g.kat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {tab === "video" && (
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VIDEOS.map((v, i) => (
                <a
                  key={i}
                  href={v.yt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-1 border border-border"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={v.thumb}
                      alt={v.judul}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-primary ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded font-caption">{v.durasi}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-foreground text-sm leading-snug group-hover:text-primary transition-colors">{v.judul}</h3>
                    <p className="text-muted-foreground text-xs mt-1 font-caption">KKNT Desa Ngariboyo 2024</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3 rounded-xl hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3 rounded-xl hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-7 h-7" />
          </button>
          <div className="max-w-4xl max-h-[85vh] mx-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredGaleri[lightbox].src.replace("w=600", "w=1200")}
              alt={filteredGaleri[lightbox].alt}
              className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl"
            />
            <div className="text-center mt-4">
              <p className="text-white font-semibold font-body">{filteredGaleri[lightbox].alt}</p>
              <p className="text-white/50 text-sm font-caption">{lightbox + 1} / {filteredGaleri.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
