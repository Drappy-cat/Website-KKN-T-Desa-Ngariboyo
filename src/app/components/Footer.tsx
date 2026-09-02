import { Link } from "react-router";
import { MapPin, Mail, Instagram, ArrowUp, Phone } from "lucide-react";
import { NAV_LINKS } from "../data";
import logoVest from "../../assets/logos/kknt/logo-kknt-vest.png";

export default function Footer() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gradient-to-b from-[#071F11] to-[#04120A] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-white rounded-full p-1.5 shrink-0 shadow-md overflow-hidden border-2 border-white/40 flex items-center justify-center">
                <img src={logoVest} alt="Logo KKNT" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-display font-extrabold text-lg">KKNT 2024</div>
                <div className="text-primary-foreground/60 text-xs font-caption">Desa Ngariboyo</div>
              </div>
            </div>
            <p className="text-primary-foreground/65 text-sm leading-relaxed font-body">
              Kuliah Kerja Nyata Tematik Universitas Negeri Surabaya di Desa Ngariboyo, Kecamatan Ngariboyo, Kabupaten Magetan, Jawa Timur.
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
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-colors font-body"
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
            <ul className="space-y-2.5 text-sm text-primary-foreground/60 font-body">
              <li>PGSD</li>
              <li>Teknik Informatika</li>
              <li>Manajemen</li>
              <li>Ilmu Keolahragaan</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h5 className="font-display font-bold mb-5 text-sm uppercase tracking-wider text-accent">Kontak</h5>
            <ul className="space-y-3 text-sm text-primary-foreground/65 font-body">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Desa Ngariboyo, Kec. Ngariboyo, Kab. Magetan, Jawa Timur 63351</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>kknt.ngariboyo2024@gmail.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-accent shrink-0" />
                <span>@kknt_ngariboyo24</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>0812-3456-7890</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-xs font-caption text-center sm:text-left">
            © 2024 KKNT Desa Ngariboyo · Universitas Negeri Surabaya · Dibuat dengan semangat pengabdian
          </p>
          <button
            onClick={backToTop}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-primary rounded-xl text-sm font-semibold hover:bg-accent/90 transition-all active:scale-95 font-body hover:scale-105 motion-safe:hover:scale-105 motion-reduce:hover:scale-100"
          >
            <ArrowUp className="w-4 h-4" />
            Kembali ke Atas
          </button>
        </div>
      </div>
    </footer>
  );
}
