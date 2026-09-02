import { Link } from "react-router";
import { MapPin, Mail, Instagram, ArrowUp, Phone } from "lucide-react";
import { NAV_LINKS } from "../data";
import logoTransparent from "../../assets/logos/kknt/logo-kknt-removebg.png";

export default function Footer() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gradient-to-b from-[#071F11] to-[#04120A] text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-white rounded-full p-1.5 shrink-0 shadow-md overflow-hidden border-2 border-white/40 flex items-center justify-center">
                <img src={logoTransparent} alt="Logo KKNT" className="w-full h-full object-contain" loading="lazy" decoding="async" />
              </div>
              <div>
                <div className="font-display font-extrabold text-lg text-white">KKNT 2026</div>
                <div className="text-white/75 text-xs font-caption">Desa Ngariboyo</div>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed font-body">
              Kuliah Kerja Nyata Tematik Universitas Negeri Surabaya di Desa Ngariboyo, Kecamatan Ngariboyo, Kabupaten Magetan, Jawa Timur (13 Agustus – 25 September 2026).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-display font-bold mb-5 text-sm uppercase tracking-wider text-accent">Navigasi</h5>
            <ul className="space-y-2.5">
              {NAV_LINKS.filter((n) => n.href !== "/").map((n) => (
                <li key={n.href}>
                  <Link
                    to={n.href}
                    className="text-sm text-white/80 hover:text-accent transition-colors font-body inline-block"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Program */}
          <div>
            <h5 className="font-display font-bold mb-5 text-sm uppercase tracking-wider text-accent">Program</h5>
            <ul className="space-y-2.5 text-sm text-white/80 font-body">
              <li>PGSD (Pendidikan Guru SD)</li>
              <li>Teknik Informatika</li>
              <li>Manajemen</li>
              <li>Ilmu Keolahragaan</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h5 className="font-display font-bold mb-5 text-sm uppercase tracking-wider text-accent">Kontak</h5>
            <ul className="space-y-3 text-sm text-white/85 font-body">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Desa Ngariboyo, Kec. Ngariboyo, Kab. Magetan, Jawa Timur 63351</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:kknt.ngariboyo2026@gmail.com" className="hover:text-accent transition-colors">kknt.ngariboyo2026@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-accent shrink-0" />
                <a href="https://instagram.com/kknt_ngariboyo26" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@kknt_ngariboyo26</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>0812-3456-7890</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + bottom */}
        <div className="border-t border-white/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/65 text-xs font-caption text-center sm:text-left">
            © 2026 KKNT Desa Ngariboyo · Universitas Negeri Surabaya · Dibuat dengan semangat pengabdian
          </p>
          <button
            onClick={backToTop}
            className="flex items-center gap-2 px-5 py-2.5 bg-accent text-[#0F3A1D] rounded-xl text-sm font-bold hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 motion-reduce:hover:scale-100 font-body shadow-lg"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            Kembali ke Atas
          </button>
        </div>
      </div>
    </footer>
  );
}
