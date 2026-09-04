import { useState } from "react";
import { MapPin, Mail, Phone, Instagram, Send } from "lucide-react";
import { toast } from "sonner";
import { usePageMeta } from "../hooks/usePageMeta";
import DesaMap from "../components/DesaMap";
import PageBanner from "../components/PageBanner";
import { KONTAK } from "../data";

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-label="TikTok">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z" />
    </svg>
  );
}

export default function Kontak() {
  usePageMeta("Kontak", "Hubungi tim KKNT Desa Ngariboyo 2026 — Universitas Negeri Surabaya.");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Pesan berhasil terkirim!", {
        description: "Kami akan merespons dalam 1x24 jam. Terima kasih!",
      });
      (e.target as HTMLFormElement).reset();
    }, 1200);
  }

  const kontakItems = [
    { Ikon: MapPin, label: "Alamat", value: KONTAK.alamat },
    { Ikon: Mail, label: "Email", value: KONTAK.email },
    { Ikon: Phone, label: "Telepon", value: `${KONTAK.telepon} (${KONTAK.kontakPerson})` },
    { Ikon: Instagram, label: "Instagram", value: KONTAK.instagram.handle },
  ];

  return (
    <>
      <PageBanner
        badge="Kontak"
        title="Hubungi Kami"
        sub="Punya pertanyaan seputar program KKNT atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami."
      />

      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div className="space-y-8">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-muted text-primary dark:text-accent mb-4 font-caption">
                  Informasi Kontak
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-3">
                  Mari Terhubung
                </h2>
                <p className="text-muted-foreground font-body text-sm sm:text-base leading-relaxed">
                  Kami siap menerima masukan, saran, serta pertanyaan mengenai seluruh agenda dan program kerja KKNT Desa Ngariboyo 2026.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {kontakItems.map(({ Ikon, label, value }) => (
                  <div key={label} className="bg-card rounded-[20px] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-border hover:-translate-y-0.5 transition-all">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                        <Ikon className="w-4 h-4 text-primary dark:text-accent" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-caption">{label}</span>
                    </div>
                    <p className="text-foreground text-sm font-body leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-display font-bold text-primary dark:text-accent mb-4">Ikuti Kami di Media Sosial</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href={KONTAK.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-[20px] p-5 text-white relative overflow-hidden hover:-translate-y-1 transition-all shadow-lg"
                    style={{ background: "linear-gradient(135deg, #833AB4, #FD1D1D, #FCB045)" }}
                  >
                    <Instagram className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-white/70 text-xs mb-0.5 font-caption">Instagram</div>
                    <div className="font-display font-bold text-lg mb-2">{KONTAK.instagram.handle}</div>
                    <div className="flex gap-4 text-sm">
                      <div><span className="font-bold">{KONTAK.instagram.pengikut}</span><div className="text-white/60 text-xs font-caption">Pengikut</div></div>
                      <div><span className="font-bold">{KONTAK.instagram.postingan}</span><div className="text-white/60 text-xs font-caption">Postingan</div></div>
                    </div>
                  </a>
                  <a
                    href={KONTAK.tiktok.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-gray-900 rounded-[20px] p-5 text-white border border-white/10 hover:-translate-y-1 transition-all shadow-lg"
                  >
                    <div className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform">
                      <TikTokIcon />
                    </div>
                    <div className="text-white/70 text-xs mb-0.5 font-caption">TikTok</div>
                    <div className="font-display font-bold text-lg mb-2">{KONTAK.tiktok.handle}</div>
                    <div className="flex gap-4 text-sm">
                      <div><span className="font-bold">{KONTAK.tiktok.pengikut}</span><div className="text-white/60 text-xs font-caption">Pengikut</div></div>
                      <div><span className="font-bold">{KONTAK.tiktok.video}</span><div className="text-white/60 text-xs font-caption">Video</div></div>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3 font-body text-sm">Gunakan tagar kami:</h4>
                <div className="flex flex-wrap gap-2">
                  {KONTAK.hashtags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-muted border border-primary/20 text-primary dark:text-accent text-xs rounded-xl font-medium font-caption">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <div className="bg-card rounded-[24px] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-border">
                <h3 className="font-display font-bold text-primary dark:text-accent text-xl mb-6">Kirim Pesan</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider font-caption">Nama</label>
                      <input id="kontak-nama" name="nama" type="text" required placeholder="Nama Anda" className="w-full px-4 py-3 bg-muted/40 dark:bg-card border border-border rounded-[16px] text-sm text-foreground font-body outline-none focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider font-caption">Email</label>
                      <input id="kontak-email" name="email" type="email" required placeholder="email@anda.com" className="w-full px-4 py-3 bg-muted/40 dark:bg-card border border-border rounded-[16px] text-sm text-foreground font-body outline-none focus:border-primary transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider font-caption">Subjek</label>
                    <input id="kontak-subjek" name="subjek" type="text" required placeholder="Subjek pesan" className="w-full px-4 py-3 bg-muted/40 dark:bg-card border border-border rounded-[16px] text-sm text-foreground font-body outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider font-caption">Pesan</label>
                    <textarea id="kontak-pesan" name="pesan" required rows={5} placeholder="Tulis pesan Anda di sini..." className="w-full px-4 py-3 bg-muted/40 dark:bg-card border border-border rounded-[16px] text-sm text-foreground font-body outline-none focus:border-primary transition-colors resize-none" />
                  </div>
                  <button
                    id="kontak-submit"
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-semibold rounded-[16px] hover:bg-secondary transition-all hover:scale-101 active:scale-99 shadow-md font-body disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>Kirim Pesan <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-card text-primary dark:text-accent mb-4 font-caption border border-border shadow-sm">
              Lokasi &amp; Navigasi
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-3">
              Peta Lokasi Desa Ngariboyo
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto text-sm sm:text-base">
              Temukan posko KKNT UNESA 2026, balai desa, fasilitas umum, dan sentra UMKM di Desa Ngariboyo dengan peta interaktif resmi.
            </p>
          </div>
          <DesaMap />
        </div>
      </section>
    </>
  );
}
