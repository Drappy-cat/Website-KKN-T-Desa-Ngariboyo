import { MapPin, Mail, Phone, Instagram, Send } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

function PageBanner({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="relative bg-gradient-to-b from-[#071F11] via-[#0B2E1A] to-[#05170D] pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#F4B400_0%,_transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest mb-4 font-caption border border-accent/30">
          Kontak
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4 leading-tight">{title}</h1>
        {sub && <p className="text-white/60 text-base font-body max-w-2xl mx-auto">{sub}</p>}
      </div>
    </div>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-label="TikTok">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z" />
    </svg>
  );
}

export default function Kontak() {
  usePageMeta("Kontak", "Hubungi tim KKNT Desa Ngariboyo 2024 — Universitas Negeri Surabaya.");
  return (
    <>
      <PageBanner
        title="Hubungi Kami"
        sub="Ada pertanyaan, masukan, atau ingin berkolaborasi? Kami siap mendengar dan merespons."
      />

      {/* ── INFO KONTAK ───────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-muted text-primary mb-5 font-caption">Kontak</span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-4 leading-tight">
                  Mari Berkolaborasi
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Kami terbuka untuk berbagai bentuk kolaborasi, pertanyaan tentang program KKNT, maupun masukan dari masyarakat Desa Ngariboyo dan publik umum.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { Ikon: MapPin, label: "Alamat", value: "Desa Ngariboyo, Kec. Ngariboyo, Kab. Magetan, Jawa Timur 63351" },
                  { Ikon: Mail, label: "Email", value: "kknt.ngariboyo2024@gmail.com" },
                  { Ikon: Phone, label: "Telepon", value: "0812-3456-7890 (Ahmad Fauzi)" },
                  { Ikon: Instagram, label: "Instagram", value: "@kknt_ngariboyo24" },
                ].map(({ Ikon, label, value }) => (
                  <div key={label} className="bg-white rounded-[20px] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-border hover:-translate-y-0.5 transition-all">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                        <Ikon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-caption">{label}</span>
                    </div>
                    <p className="text-foreground text-sm font-body leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>

              {/* Media Sosial */}
              <div>
                <h3 className="font-display font-bold text-primary mb-4">Ikuti Kami di Media Sosial</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Instagram */}
                  <a
                    href="#"
                    className="group block rounded-[20px] p-5 text-white relative overflow-hidden hover:-translate-y-1 transition-all shadow-lg"
                    style={{ background: "linear-gradient(135deg, #833AB4, #FD1D1D, #FCB045)" }}
                  >
                    <Instagram className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-white/70 text-xs mb-0.5 font-caption">Instagram</div>
                    <div className="font-display font-bold text-lg mb-2">@kknt_ngariboyo24</div>
                    <div className="flex gap-4 text-sm">
                      <div><span className="font-bold">1.2K</span><div className="text-white/60 text-xs font-caption">Pengikut</div></div>
                      <div><span className="font-bold">48</span><div className="text-white/60 text-xs font-caption">Postingan</div></div>
                    </div>
                  </a>
                  {/* TikTok */}
                  <a
                    href="#"
                    className="group block bg-gray-900 rounded-[20px] p-5 text-white border border-white/10 hover:-translate-y-1 transition-all shadow-lg"
                  >
                    <div className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform">
                      <TikTokIcon />
                    </div>
                    <div className="text-white/70 text-xs mb-0.5 font-caption">TikTok</div>
                    <div className="font-display font-bold text-lg mb-2">@kknt.ngariboyo24</div>
                    <div className="flex gap-4 text-sm">
                      <div><span className="font-bold">856</span><div className="text-white/60 text-xs font-caption">Pengikut</div></div>
                      <div><span className="font-bold">32</span><div className="text-white/60 text-xs font-caption">Video</div></div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Hashtag */}
              <div>
                <h4 className="font-semibold text-foreground mb-3 font-body text-sm">Gunakan tagar kami:</h4>
                <div className="flex flex-wrap gap-2">
                  {["#KKNTNgariboyo2024", "#SmartVillageNgariboyo", "#BergerakBersama", "#MahasiswaMengabdi", "#DesaNgariboyo"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-muted border border-primary/20 text-primary text-xs rounded-xl font-medium font-caption">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <div className="bg-white rounded-[24px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-border">
                <h3 className="font-display font-bold text-primary text-xl mb-6">Kirim Pesan</h3>
                <form
                  className="space-y-4"
                  onSubmit={(e) => { e.preventDefault(); alert("Pesan terkirim! Kami akan merespons segera."); }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground/60 mb-1.5 uppercase tracking-wider font-caption">Nama</label>
                      <input
                        type="text"
                        required
                        placeholder="Nama Anda"
                        className="w-full px-4 py-3 bg-background border border-border rounded-[16px] text-sm font-body outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground/60 mb-1.5 uppercase tracking-wider font-caption">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="email@anda.com"
                        className="w-full px-4 py-3 bg-background border border-border rounded-[16px] text-sm font-body outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground/60 mb-1.5 uppercase tracking-wider font-caption">Subjek</label>
                    <input
                      type="text"
                      required
                      placeholder="Subjek pesan"
                      className="w-full px-4 py-3 bg-background border border-border rounded-[16px] text-sm font-body outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground/60 mb-1.5 uppercase tracking-wider font-caption">Pesan</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tulis pesan Anda di sini..."
                      className="w-full px-4 py-3 bg-background border border-border rounded-[16px] text-sm font-body outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-semibold rounded-[16px] hover:bg-secondary transition-all hover:scale-101 active:scale-99 shadow-md font-body"
                  >
                    Kirim Pesan <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PETA GOOGLE ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white text-primary mb-4 font-caption">Lokasi</span>
            <h2 className="font-display font-extrabold text-3xl text-primary">Temukan Kami</h2>
          </div>
          <div className="rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-4 ring-primary/10">
            <iframe
              title="Lokasi Desa Ngariboyo di peta"
              src="https://www.openstreetmap.org/export/embed.html?bbox=111.43%2C-7.70%2C111.52%2C-7.61&layer=mapnik&marker=-7.652%2C111.472"
              className="w-full"
              style={{ height: 450 }}
              loading="lazy"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/search/Desa+Ngariboyo+Magetan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-border rounded-xl text-sm font-semibold text-primary hover:bg-muted transition-colors font-body shadow-sm"
            >
              <MapPin className="w-4 h-4" />
              Buka di Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
