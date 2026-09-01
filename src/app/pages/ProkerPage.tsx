import { useState } from "react";
import { Calendar, MapPin, Users, ChevronDown, ChevronUp } from "lucide-react";
import { JURUSAN_LIST, PROKER, type Proker } from "../data";
import { usePageMeta } from "../hooks/usePageMeta";

function PageBanner({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="relative bg-gradient-to-b from-[#071F11] via-[#0B2E1A] to-[#05170D] pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#F4B400_0%,_transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest mb-4 font-caption border border-accent/30">
          Program Kerja
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4 leading-tight">{title}</h1>
        {sub && <p className="text-white/60 text-base font-body max-w-2xl mx-auto">{sub}</p>}
      </div>
    </div>
  );
}

const STATUS_STYLE: Record<string, string> = {
  Berjalan: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30",
  Selesai: "bg-blue-500/15 text-blue-700 dark:text-blue-400 border border-blue-500/30",
  Perencanaan: "bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30",
};

function ProkerCard({ p }: { p: Proker }) {
  const [expanded, setExpanded] = useState(false);
  const j = JURUSAN_LIST.find((x) => x.id === p.jurusan);

  return (
    <div className="bg-card rounded-[20px] border border-border shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all">
      <div
        className="cursor-pointer p-5 sm:p-6"
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className="px-2.5 py-1 rounded-lg text-xs font-semibold font-caption"
                style={{ backgroundColor: j?.warnaLight, color: j?.warna }}
              >
                {j?.label}
              </span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium font-caption ${STATUS_STYLE[p.status] || ""}`}>
                {p.status}
              </span>
              <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-muted text-muted-foreground font-caption">
                {p.kategori}
              </span>
            </div>
            <h3 className="font-display font-bold text-foreground text-base sm:text-lg mb-2 leading-snug">{p.nama}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body line-clamp-2">{p.deskripsi}</p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 text-xs text-muted-foreground font-caption">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />{p.tanggal}
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />{p.lokasi}
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />{p.anggota.length} anggota
              </div>
            </div>
          </div>
          <button className="shrink-0 p-2 rounded-xl hover:bg-muted transition-colors">
            {expanded ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-border bg-background/50">
          {/* Progress timeline */}
          <div className="p-6 border-b border-border">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 font-caption">Progress Timeline</h4>
            <div className="flex items-center gap-2">
              {["Observasi", "Perencanaan", "Pelaksanaan", "Evaluasi"].map((fase, i) => {
                const done = p.status === "Selesai" ? 4 : p.status === "Berjalan" ? 3 : 2;
                const active = i < done;
                return (
                  <div key={fase} className="flex items-center flex-1">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-caption transition-colors ${
                          active ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <div className={`text-xs mt-1 font-caption text-center leading-tight ${active ? "text-primary font-medium" : "text-muted-foreground"}`}>
                        {fase}
                      </div>
                    </div>
                    {i < 3 && (
                      <div className={`flex-1 h-0.5 mx-1 rounded-full transition-colors ${i < done - 1 ? "bg-primary" : "bg-muted"}`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-6 space-y-4 border-b md:border-b-0 md:border-r border-border">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 font-caption">Latar Belakang</h4>
                <p className="text-foreground/75 text-sm leading-relaxed font-body">{p.latarBelakang}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 font-caption">Tujuan</h4>
                <p className="text-foreground/75 text-sm leading-relaxed font-body">{p.tujuan}</p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 font-caption">Hasil</h4>
                <p className="text-foreground/75 text-sm leading-relaxed font-body">{p.hasil}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 font-caption">Anggota Tim</h4>
                <div className="flex flex-wrap gap-2">
                  {p.anggota.map((a) => (
                    <span key={a} className="px-2.5 py-1 rounded-lg text-xs font-body" style={{ backgroundColor: j?.warnaLight, color: j?.warna }}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProkerPage() {
  usePageMeta("Program Kerja", "Daftar program kerja dari 4 jurusan KKNT Desa Ngariboyo 2026 — PGSD, Teknik Informatika, Manajemen, dan Ilmu Keolahragaan.");
  const [activeJurusan, setActiveJurusan] = useState("semua");
  const [activeStatus, setActiveStatus] = useState("semua");

  const filtered = PROKER.filter((p) => {
    const matchJ = activeJurusan === "semua" || p.jurusan === activeJurusan;
    const matchS = activeStatus === "semua" || p.status === activeStatus;
    return matchJ && matchS;
  });

  const summary = JURUSAN_LIST.map((j) => ({
    ...j,
    total: PROKER.filter((p) => p.jurusan === j.id).length,
    berjalan: PROKER.filter((p) => p.jurusan === j.id && p.status === "Berjalan").length,
    selesai: PROKER.filter((p) => p.jurusan === j.id && p.status === "Selesai").length,
  }));

  return (
    <>
      <PageBanner
        title="Program Kerja KKNT"
        sub="14 program kerja terencana dari 4 jurusan untuk mengabdi di Desa Ngariboyo 2026"
      />

      {/* Summary cards */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {summary.map((j) => (
              <button
                key={j.id}
                onClick={() => setActiveJurusan(activeJurusan === j.id ? "semua" : j.id)}
                className={`text-left p-5 rounded-[20px] border-2 transition-all hover:-translate-y-1 ${
                  activeJurusan === j.id
                    ? "border-primary dark:border-accent bg-card shadow-lg"
                    : "border-border bg-card shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                }`}
              >
                <div className="font-display font-extrabold text-3xl mb-1" style={{ color: j.warna }}>{j.total}</div>
                <div className="font-semibold text-foreground font-body mb-3">{j.label}</div>
                <div className="flex flex-wrap gap-2 text-xs font-caption">
                  <span className="text-emerald-700 dark:text-emerald-400 bg-emerald-500/15 border border-emerald-500/20 px-2 py-0.5 rounded-full">{j.berjalan} Berjalan</span>
                  <span className="text-blue-700 dark:text-blue-400 bg-blue-500/15 border border-blue-500/20 px-2 py-0.5 rounded-full">{j.selesai} Selesai</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 bg-muted border-y border-border sticky top-[65px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap gap-3 items-center">
          <span className="text-xs text-muted-foreground font-caption font-semibold uppercase tracking-wider shrink-0">Filter:</span>
          {/* Jurusan filter */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveJurusan("semua")}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium font-body transition-all ${activeJurusan === "semua" ? "bg-primary text-white shadow-sm" : "bg-card border border-border text-foreground/70 hover:border-primary/40"}`}
            >
              Semua Jurusan
            </button>
            {JURUSAN_LIST.map((j) => (
              <button
                key={j.id}
                onClick={() => setActiveJurusan(j.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium font-body transition-all border ${
                  activeJurusan === j.id
                    ? "shadow-sm"
                    : "bg-card border-border text-foreground/70 hover:border-primary/40"
                }`}
                style={activeJurusan === j.id ? { backgroundColor: j.warna, color: "white", borderColor: j.warna } : {}}
              >
                {j.label}
              </button>
            ))}
          </div>
          <div className="w-px h-5 bg-border mx-1 hidden sm:block" />
          {/* Status filter */}
          <div className="flex gap-2 flex-wrap">
            {["semua", "Berjalan", "Selesai", "Perencanaan"].map((s) => (
              <button
                key={s}
                onClick={() => setActiveStatus(s)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium font-body transition-all ${activeStatus === s ? "bg-primary dark:bg-accent text-white dark:text-primary-foreground shadow-sm" : "bg-card border border-border text-foreground/70 hover:border-foreground/40"}`}
              >
                {s === "semua" ? "Semua Status" : s}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program list */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-sm text-muted-foreground font-caption mb-6">
            Menampilkan <span className="font-semibold text-foreground">{filtered.length}</span> dari {PROKER.length} program kerja
          </div>
          <div className="space-y-5">
            {filtered.map((p) => (
              <ProkerCard key={p.id} p={p} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground font-body">
              <div className="text-5xl mb-4">🔍</div>
              <p>Tidak ada program kerja yang sesuai filter.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
