import { DESA } from "../data";
import { usePageMeta } from "../hooks/usePageMeta";

function PageBanner({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="relative bg-gradient-to-b from-[#071F11] via-[#0B2E1A] to-[#05170D] pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#F4B400_0%,_transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest mb-4 font-caption border border-accent/30">
          Profil Desa
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4 leading-tight">{title}</h1>
        {sub && <p className="text-white/60 text-base font-body max-w-2xl mx-auto">{sub}</p>}
      </div>
    </div>
  );
}

export default function ProfilDesa() {
  usePageMeta("Profil Desa", "Sejarah, potensi, permasalahan, dan peta Desa Ngariboyo, Kecamatan Ngariboyo, Kabupaten Magetan, Jawa Timur.");
  return (
    <>
      <PageBanner
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
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PETA ─────────────────────────────────────────────────────────── */}
      <section id="peta" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white text-primary mb-4 font-caption">Lokasi</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-3">Peta Desa Ngariboyo</h2>
            <p className="text-muted-foreground font-body">Desa Ngariboyo, Kecamatan Ngariboyo, Kabupaten Magetan, Jawa Timur</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-4 ring-primary/10">
              <iframe
                title="Peta Desa Ngariboyo"
                src="https://www.openstreetmap.org/export/embed.html?bbox=111.43%2C-7.70%2C111.52%2C-7.61&layer=mapnik&marker=-7.652%2C111.472"
                className="w-full"
                style={{ height: 440 }}
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-[20px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-border">
                <h4 className="font-display font-bold text-primary mb-4">Informasi Administratif</h4>
                {[
                  { l: "Desa", v: "Ngariboyo" },
                  { l: "Kecamatan", v: "Ngariboyo" },
                  { l: "Kabupaten", v: "Magetan" },
                  { l: "Provinsi", v: "Jawa Timur" },
                  { l: "Kode Pos", v: "63351" },
                ].map(({ l, v }) => (
                  <div key={l} className="flex justify-between py-2 border-b border-border last:border-0 text-sm">
                    <span className="text-muted-foreground font-body">{l}</span>
                    <span className="text-foreground font-semibold font-body">{v}</span>
                  </div>
                ))}
              </div>
              <div className="bg-primary rounded-[20px] p-6 text-white">
                <h4 className="font-display font-bold mb-4">Lokasi Strategis</h4>
                <p className="text-white/70 text-sm font-body leading-relaxed">
                  Terletak di kaki Gunung Lawu, Desa Ngariboyo memiliki udara sejuk, tanah subur, dan akses mudah dari pusat Kota Magetan (~15 km).
                </p>
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
            <p className="text-muted-foreground max-w-2xl mx-auto font-body">Desa Ngariboyo memiliki beragam potensi yang siap dikembangkan untuk kemakmuran warga.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESA.potensi.map((p) => (
              <div
                key={p.judul}
                className="group bg-white rounded-[20px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all border border-border"
              >
                <div className="text-4xl mb-4">{p.ikon}</div>
                <h3 className="font-display font-bold text-primary text-lg mb-2 group-hover:text-secondary transition-colors">{p.judul}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">{p.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERMASALAHAN ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white text-primary mb-4 font-caption">Tantangan</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-3">Permasalahan Desa</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body">Inilah permasalahan yang kami identifikasi dan menjadi fokus program KKNT.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {DESA.permasalahan.map((p, i) => (
              <div
                key={p.judul}
                className="bg-white rounded-[20px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-l-4 border-accent border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center text-2xl shrink-0">{p.ikon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-display font-bold text-foreground text-base">{p.judul}</span>
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-caption">#{i + 1}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body">{p.deskripsi}</p>
                  </div>
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
                <img src={src} alt={`Suasana desa ${i + 1}`} className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
