import { lazy, Suspense } from "react";
import { DESA } from "../data";
import { usePageMeta } from "../hooks/usePageMeta";
import PageBanner from "../components/PageBanner";

const DesaMap = lazy(() => import("../components/DesaMap"));

function MapSkeleton() {
  return (
    <div className="w-full h-[520px] rounded-[26px] bg-muted/40 animate-pulse flex flex-col items-center justify-center border border-border">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-3" />
      <p className="text-muted-foreground text-sm font-body">Memuat Peta Interaktif Desa Ngariboyo...</p>
    </div>
  );
}


export default function ProfilDesa() {
  usePageMeta("Profil Desa", "Sejarah, potensi, permasalahan, dan peta Desa Ngariboyo, Kecamatan Ngariboyo, Kabupaten Magetan, Jawa Timur.");
  return (
    <>
      <PageBanner
        badge="Profil Desa"
        title="Profil Desa Ngariboyo"
        sub="Mengenal lebih dekat desa di kaki Gunung Lawu yang kaya potensi dan kearifan lokal"
      />

      {/* ── STATISTIK DESA ───────────────────────────────────────────────── */}
      <section className="py-10 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {DESA.statistik.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-primary">
                  {s.nilai}
                  <span className="text-lg ml-1">{s.satuan}</span>
                </div>
                <div className="text-primary/60 text-sm font-body mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEJARAH ──────────────────────────────────────────────────────── */}
      <section id="sejarah" className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-muted text-primary mb-5 font-caption">Sejarah</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-6 leading-tight">Sejarah Singkat Desa</h2>
              {DESA.sejarah.split("\n\n").map((p, i) => (
                <p key={i} className="text-muted-foreground text-base leading-relaxed mb-4 font-body">{p}</p>
              ))}
            </div>
            <div className="rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1500382017968-0a04a3e16c5c?w=700&h=500&fit=crop&auto=format"
                alt="Desa Ngariboyo"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PETA WILAYAH INTERAKTIF DESA NGARIBOYO ───────────────────────── */}
      <section id="peta" className="py-20 sm:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-card text-primary dark:text-accent mb-4 font-caption shadow-sm border border-border">
              Peta Administratif & Titik Lokasi
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-3">
              Peta Wilayah Desa Ngariboyo
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto text-sm sm:text-base">
              Eksplorasi batas wilayah resmi Desa Ngariboyo yang dibatasi garis hijau interaktif, lengkap dengan sebaran fasilitas umum, sentra UMKM, dan Posko KKNT UNESA 2026.
            </p>
          </div>

          {/* Leaflet Interactive Map with Boundary Polygon */}
          <div className="mb-10">
            <Suspense fallback={<MapSkeleton />}>
              <DesaMap />
            </Suspense>
          </div>

          {/* Kartu Informasi Administratif & Geografis */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-card rounded-[22px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-border">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 font-caption">
                Kecamatan / Kabupaten
              </div>
              <div className="font-display font-bold text-foreground text-lg">
                Ngariboyo, Magetan
              </div>
              <div className="text-xs text-primary dark:text-accent mt-2 font-caption font-semibold">
                Jawa Timur · Kode Pos 63351
              </div>
            </div>

            <div className="bg-card rounded-[22px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-border">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 font-caption">
                Luas Wilayah
              </div>
              <div className="font-display font-bold text-primary text-2xl">
                ±8.5 <span className="text-base font-normal text-muted-foreground">km²</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2 font-caption">
                Dominasi persawahan & pemukiman
              </div>
            </div>

            <div className="bg-card rounded-[22px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-border">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 font-caption">
                Struktur Dusun
              </div>
              <div className="font-display font-bold text-foreground text-lg">
                6 RW / 18 RT
              </div>
              <div className="text-xs text-muted-foreground mt-2 font-caption">
                Dusun I, II, dan sekitarnya
              </div>
            </div>

            <div className="bg-primary rounded-[22px] p-6 text-white shadow-[0_10px_30px_rgba(20,83,45,0.2)]">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-1 font-caption">
                Aksesibilitas
              </div>
              <div className="font-display font-bold text-white text-lg">
                Kaki Gunung Lawu
              </div>
              <div className="text-xs text-white/70 mt-2 font-caption">
                ±15 km dari pusat Kota Magetan
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POTENSI DESA ─────────────────────────────────────────────────── */}
      <section id="potensi" className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-muted text-primary mb-4 font-caption">Potensi</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-3">Potensi Desa</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body text-sm sm:text-base">Desa Ngariboyo memiliki beragam potensi yang siap dikembangkan untuk kemakmuran warga.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESA.potensi.map((p) => (
              <div
                key={p.judul}
                className="group bg-card rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all border border-border flex flex-col"
              >
                <div className="w-full h-48 sm:h-56 overflow-hidden relative">
                  {/* Decorative Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image */}
                  <img 
                    src={p.img} 
                    alt={p.judul} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy" 
                  />
                  

                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-primary dark:text-accent text-lg mb-2 group-hover:text-secondary transition-colors">
                    {p.judul}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">
                    {p.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERMASALAHAN ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-card text-primary dark:text-accent mb-4 font-caption border border-border shadow-sm">Tantangan</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-3">Permasalahan Desa</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body text-sm sm:text-base">Inilah permasalahan yang kami identifikasi dan menjadi fokus program KKNT.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {DESA.permasalahan.map((p, i) => (
              <div
                key={p.judul}
                className="bg-card rounded-[20px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-l-4 border-accent border border-border"
              >
                <div className="flex flex-col">
                  <h3 className="font-display font-bold text-foreground text-base mb-2">{p.judul}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body text-justify">{p.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERI DESA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-muted text-primary mb-4 font-caption">Galeri</span>
            <h2 className="font-display font-extrabold text-3xl text-primary">Suasana Desa</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1500382017968-0a04a3e16c5c?w=500&h=350&fit=crop",
              "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&h=350&fit=crop",
              "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=350&fit=crop",
              "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=350&fit=crop",
              "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=350&fit=crop",
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=350&fit=crop",
            ].map((src, i) => (
              <div key={i} className="rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] group hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all">
                <img src={src} alt={`Suasana desa ${i + 1}`} className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
