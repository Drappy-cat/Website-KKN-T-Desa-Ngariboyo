/**
 * PageBanner — Shared hero banner for inner pages.
 * Digunakan di: Tim, Kontak, ProfilDesa, Tentang, Berita, dll.
 */
export default function PageBanner({
  title,
  sub,
  badge,
}: {
  title: string;
  sub?: string;
  badge?: string;
}) {
  return (
    <div className="relative bg-gradient-to-b from-[#071F11] via-[#0B2E1A] to-[#05170D] pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#F4B400_0%,_transparent_60%)]" />
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-background"
        style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {badge && (
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest mb-4 font-caption border border-accent/30">
            {badge}
          </span>
        )}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4 leading-tight">
          {title}
        </h1>
        {sub && (
          <p className="text-white/60 text-base font-body max-w-2xl mx-auto">
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}
