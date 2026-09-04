import { useState, useMemo } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Mail, Phone, Search, X, Award, BookOpen, Users } from "lucide-react";
import { DPL, MAHASISWA, JURUSAN_LIST, PROKER } from "../data";
import { usePageMeta } from "../hooks/usePageMeta";
import PageBanner from "../components/PageBanner";

// Maps prodi name to jurusan id
const PRODI_TO_JURUSAN_ID: Record<string, string> = {
  "PGSD": "pgsd",
  "Teknik Informatika": "ti",
  "Manajemen": "manajemen",
  "Ilmu Keolahragaan": "ikor",
};

function getJurusan(prodi: string) {
  const jurusanId = PRODI_TO_JURUSAN_ID[prodi];
  return JURUSAN_LIST.find((j) => j.id === jurusanId) ?? JURUSAN_LIST[0];
}

// Derived dynamically from PROKER data - no more manual duplication
function getProkerForMahasiswa(nama: string): string[] {
  return PROKER.filter((p) => p.anggota.includes(nama)).map((p) => p.nama);
}

const DESKRIPSI_MAHASISWA: Record<number, string> = {
  1: "Iqbal Maulana Setyo Prayogi adalah Koordinator Desa (KORDES) yang memimpin dan mengoordinasikan seluruh pelaksanaan program KKNT di Desa Ngariboyo.",
  2: "Adelia Putri Luthfian Dava bertindak sebagai Sekretaris I yang mengelola persuratan, administrasi, dan koordinasi program kerja pendidikan di desa.",
  3: "Friska Virginia Vahlevi bertindak sebagai Sekretaris II yang bertanggung jawab atas dokumentasi notulensi, arsip kegiatan, dan laporan berkala kelompok.",
  4: "Ilham Khoiru Rizki adalah Bendahara kelompok yang mengelola anggaran, alokasi dana operasional, dan laporan pertanggungjawaban keuangan.",
  5: "Devita Natalysa adalah anggota Divisi Acara yang mengorganisir jadwal, konsep, dan pelaksanaan berbagai program kemasyarakatan.",
  6: "Putera Al Khalidi berkontribusi dalam Divisi Acara dan integrasi teknologi untuk mendukung kelancaran seluruh agenda kegiatan KKNT.",
  7: "Naufal Akbar Putra Pradana adalah Koordinator Divisi Acara yang memimpin perancangan timeline kegiatan, lokakarya, dan agenda puncak.",
  8: "Desi Alfi Khoiriyah adalah anggota Divisi Acara dengan fokus pada pengorganisasian kegiatan pemberdayaan ekonomi dan UMKM warga.",
  9: "Bella Ayu Istiani adalah Koordinator Divisi Humas yang menjalin komunikasi aktif dengan perangkat desa, karang taruna, dan tokoh masyarakat.",
  10: "Jovanka Hafidl Celesta bertugas di Divisi Humas dalam publikasi informasi dan sosialisasi program kepada seluruh warga Desa Ngariboyo.",
  11: "Rifki Wahyu Dwi Saputra bertugas di Divisi Logistik dalam pengadaan perlengkapan, fasilitas lapangan, dan sarana prasarana program.",
  12: "Valencia Sindu Putra bertugas di Divisi Logistik yang memastikan seluruh kebutuhan teknis dan logistik posko serta kegiatan terpenuhi.",
  13: "Muhammad Arfin Baihaqi adalah Koordinator Divisi Logistik yang memimpin manajemen inventaris, operasional, dan mobilitas tim.",
  14: "Rizma Indra Pramudya bertugas di Divisi PDD (Publikasi, Dokumentasi & Desain) yang mengembangkan website, multimedia, dan sistem digital desa.",
  15: "Izora Elverda Narulita Putri adalah Koordinator Divisi PDD yang mengarahkan desain visual, dokumentasi fotografi/videografi, dan identitas resmi KKNT.",
};

// ── Mahasiswa Detail Modal ────────────────────────────────────────────────────
function MahasiswaModal({ m }: { m: typeof MAHASISWA[0] }) {
  const j = getJurusan(m.prodi);
  const proker = getProkerForMahasiswa(m.nama);
  const desc = DESKRIPSI_MAHASISWA[m.id] || "";

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="group bg-card rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all border border-border cursor-pointer hover:-translate-y-1">
          <div className="relative bg-muted/30">
            <img
              src={m.foto}
              alt={m.nama}
              className="w-full h-52 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-semibold font-caption text-white shadow-sm" style={{ backgroundColor: j.warna }}>
                {m.prodi}
              </span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-display font-bold text-foreground mb-0.5 text-base group-hover:text-primary dark:group-hover:text-accent transition-colors line-clamp-1">{m.nama}</h3>
            <div className="text-xs text-muted-foreground font-caption mb-2 font-mono">NIM: {m.nim}</div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-body line-clamp-1">{m.peran}</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-caption font-semibold shrink-0" style={{ backgroundColor: `${j.warna}20`, color: j.warna }}>
                Divisi {m.divisi}
              </span>
            </div>
            <div className="mt-3 pt-3 border-t border-border">
              <span className="text-xs text-primary dark:text-accent font-semibold font-caption">Lihat Detail →</span>
            </div>
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[160] w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-[24px] shadow-2xl border border-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-top-[48%]">
          <Dialog.Description className="sr-only">
            Detail profil {m.nama} — mahasiswa {m.prodi} peserta KKNT Desa Ngariboyo 2026.
          </Dialog.Description>
          <Dialog.Close className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-card/80 backdrop-blur-sm hover:bg-muted transition-colors border border-border">
            <X className="w-4 h-4 text-foreground" />
          </Dialog.Close>

          {/* Hero image */}
          <div className="relative h-64 overflow-hidden rounded-t-[24px] bg-muted/40">
            <img src={m.foto} alt={m.nama} className="w-full h-full object-cover object-top" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            <div className="absolute bottom-5 left-6 right-16">
              <span className="inline-block px-3 py-1 rounded-xl text-xs font-semibold font-caption text-white mb-2 shadow-sm" style={{ backgroundColor: j.warna }}>
                {m.prodi}
              </span>
              <Dialog.Title className="font-display font-extrabold text-2xl text-white">{m.nama}</Dialog.Title>
              <p className="text-white/80 text-sm font-caption font-mono">NIM: {m.nim}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Info badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-xl text-sm font-body">
                <Award className="w-4 h-4 text-primary dark:text-accent" />
                <span className="text-foreground font-medium">{m.peran}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-xl text-sm font-body">
                <Users className="w-4 h-4 text-primary dark:text-accent" />
                <span className="text-foreground font-medium">Divisi {m.divisi}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-xl text-sm font-body">
                <BookOpen className="w-4 h-4 text-primary dark:text-accent" />
                <span className="text-foreground font-medium">{m.prodi}</span>
              </div>
            </div>

            {/* Deskripsi */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 font-caption">Tentang</h4>
              <p className="text-foreground/75 text-sm leading-relaxed font-body">{desc}</p>
            </div>

            {/* Kontribusi */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 font-caption">
                Program yang Diikuti ({proker.length})
              </h4>
              <ul className="space-y-2">
                {proker.map((pk, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold font-caption text-white shrink-0" style={{ backgroundColor: j.warna }}>
                      {i + 1}
                    </div>
                    <span className="text-sm text-foreground font-body">{pk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontribusi meter */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 font-caption">Tingkat Kontribusi</h4>
              <div className="space-y-2">
                {[
                  { label: "Keaktifan Program", nilai: Math.min(95, 70 + proker.length * 7) },
                  { label: "Kerja Tim", nilai: 88 },
                  { label: "Inovasi", nilai: 82 },
                ].map((k) => (
                  <div key={k.label} className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground font-caption w-36 shrink-0">{k.label}</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${k.nilai}%`, backgroundColor: j.warna }} />
                    </div>
                    <span className="text-xs font-bold font-caption text-foreground w-8 text-right">{k.nilai}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// ── Tim Page ──────────────────────────────────────────────────────────────────
export default function Tim() {
  usePageMeta("Tim KKNT", "Profil 15 mahasiswa dan Dosen Pembimbing Lapangan KKNT Desa Ngariboyo 2026.");

  const [filter, setFilter] = useState("semua");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => MAHASISWA.filter((m) => {
    const matchFilter =
      filter === "semua" ||
      (filter === "pgsd" && m.prodi === "PGSD") ||
      (filter === "ti" && m.prodi === "Teknik Informatika") ||
      (filter === "manajemen" && m.prodi === "Manajemen") ||
      (filter === "ikor" && m.prodi === "Ilmu Keolahragaan");
    const matchSearch =
      search === "" ||
      m.nama.toLowerCase().includes(search.toLowerCase()) ||
      m.nim.includes(search) ||
      m.prodi.toLowerCase().includes(search.toLowerCase()) ||
      m.peran.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  }), [filter, search]);

  return (
    <>
      <PageBanner
        badge="Tim Kami"
        title="Tim KKNT Ngariboyo"
        sub="15 mahasiswa dari 4 jurusan bersatu untuk mengabdi dan membangun Desa Ngariboyo"
      />

      {/* ── DPL ──────────────────────────────────────────────────────────── */}
      <section id="dpl" className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-muted text-primary dark:text-accent mb-4 font-caption">Pembimbing</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-accent mb-3">Dosen Pembimbing Lapangan</h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">Dosen yang membimbing dan mendampingi seluruh program KKNT di Desa Ngariboyo.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
            {DPL.map((d, i) => (
              <div key={i} className="w-full max-w-sm group rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all border border-border hover:-translate-y-1">
                <div className="relative h-80 overflow-hidden">
                  <img src={d.foto} alt={d.nama} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="text-accent text-xs font-semibold uppercase tracking-wider mb-1 font-caption">{d.jabatan}</div>
                    <h3 className="font-display font-bold text-white text-xl leading-snug">{d.nama}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRUKTUR ─────────────────────────────────────────────────────── */}
      <section id="struktur" className="py-16 sm:py-24 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-card text-primary dark:text-accent mb-4 font-caption border border-border shadow-sm">Bagan Tim</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-accent">Struktur Organisasi</h2>
            <p className="text-muted-foreground text-sm font-body mt-2">Susunan kepengurusan, divisi, dan program studi mahasiswa KKNT Desa Ngariboyo 2026</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            {/* DPL */}
            <div className="bg-primary text-white rounded-[22px] px-8 py-5 text-center shadow-xl border border-primary/20 max-w-md w-full">
              <div className="text-xs text-accent font-caption uppercase tracking-wider mb-1 font-semibold">Dosen Pembimbing Lapangan (DPL)</div>
              <div className="font-display font-bold text-lg sm:text-xl">Dr. Delia Indrawati, S.Pd., M.Pd.</div>
              <div className="inline-block mt-2 px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs font-caption border border-white/20">
                Koordinator S1 PGSD · UNESA Kampus Magetan
              </div>
            </div>

            <div className="w-px h-8 bg-primary/40 dark:bg-accent/40" />

            {/* Kordes */}
            <div className="bg-secondary text-white rounded-[22px] px-8 py-5 text-center shadow-xl border border-secondary/20 max-w-md w-full">
              <div className="text-xs text-accent/90 font-caption uppercase tracking-wider mb-1 font-semibold">Ketua Kelompok (KORDES)</div>
              <div className="font-display font-bold text-lg sm:text-xl">Iqbal Maulana Setyo Prayogi</div>
              <div className="inline-block mt-2 px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs font-caption border border-white/20">
                S1 Manajemen
              </div>
            </div>

            <div className="w-px h-8 bg-primary/40 dark:bg-accent/40" />

            {/* Pimpinan Inti */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
              {[
                { peran: "Sekretaris I", nama: "Adelia Putri Luthfian Dava", prodi: "S1 PGSD", warna: "#14532D" },
                { peran: "Sekretaris II", nama: "Friska Virginia Vahlevi", prodi: "S1 PGSD", warna: "#14532D" },
                { peran: "Bendahara", nama: "Ilham Khoiru Rizki", prodi: "S1 Manajemen", warna: "#E65100" },
              ].map((s) => (
                <div key={s.peran} className="bg-card rounded-[20px] p-4 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-border hover:-translate-y-0.5 transition-all">
                  <div className="text-xs text-primary dark:text-accent font-caption uppercase tracking-wider mb-1 font-bold">{s.peran}</div>
                  <div className="font-display font-bold text-foreground text-sm leading-snug mb-2">{s.nama}</div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-caption font-semibold" style={{ backgroundColor: `${s.warna}18`, color: s.warna }}>
                    {s.prodi}
                  </span>
                </div>
              ))}
            </div>

            <div className="w-px h-8 bg-primary/40 dark:bg-accent/40" />

            {/* 4 Divisi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {[
                {
                  divisi: "Acara", warna: "#1565C0",
                  anggota: [
                    { nama: "Naufal Akbar Putra Pradana", prodi: "S1 Teknik Informatika", jabatan: "Koordinator" },
                    { nama: "Desi Alfi Khoiriyah", prodi: "S1 Manajemen" },
                    { nama: "Devita Natalysa", prodi: "S1 Ilmu Keolahragaan" },
                    { nama: "Putera Al Khalidi", prodi: "S1 Teknik Informatika" },
                  ],
                },
                {
                  divisi: "Humas", warna: "#E65100",
                  anggota: [
                    { nama: "Bella Ayu Istiani", prodi: "S1 Ilmu Keolahragaan", jabatan: "Koordinator" },
                    { nama: "Jovanka Hafidl Celesta", prodi: "S1 Manajemen" },
                  ],
                },
                {
                  divisi: "Logistik", warna: "#14532D",
                  anggota: [
                    { nama: "Muhammad Arfin Baihaqi", prodi: "S1 Manajemen", jabatan: "Koordinator" },
                    { nama: "Valencia Sindu Putra", prodi: "S1 Manajemen" },
                    { nama: "Rifki Wahyu Dwi Saputra", prodi: "S1 Ilmu Keolahragaan" },
                  ],
                },
                {
                  divisi: "PDD (Pubdekdok)", warna: "#6A1B9A",
                  anggota: [
                    { nama: "Izora Elverda Narulita Putri", prodi: "S1 Teknik Informatika", jabatan: "Koordinator" },
                    { nama: "Rizma Indra Pramudya", prodi: "S1 Teknik Informatika" },
                  ],
                },
              ].map((d) => (
                <div key={d.divisi} className="bg-card rounded-[20px] p-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-border flex flex-col items-center hover:-translate-y-0.5 transition-all">
                  <div className="px-3.5 py-1 mb-4 rounded-full text-white text-xs font-bold font-caption uppercase tracking-wider w-max shadow-sm" style={{ backgroundColor: d.warna }}>
                    Divisi {d.divisi}
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    {d.anggota.map((m) => (
                      <div key={m.nama} className="p-2.5 rounded-xl bg-muted/40 border border-border/60 text-left">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="font-display font-semibold text-foreground text-xs leading-snug line-clamp-1">{m.nama}</span>
                          {"jabatan" in m && m.jabatan && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-600 dark:text-amber-400 font-caption font-bold shrink-0">
                              Koord
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-muted-foreground font-caption">{m.prodi}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAHASISWA ─────────────────────────────────────────────────────── */}
      <section id="mahasiswa" className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-muted text-primary dark:text-accent mb-4 font-caption">Anggota</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-accent mb-3">Profil 15 Mahasiswa</h2>
            <p className="text-muted-foreground font-body text-sm sm:text-base">Klik kartu untuk melihat profil lengkap, divisi, dan program yang diikuti.</p>
          </div>

          {/* Filter & Search */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari nama, NIM, prodi, atau peran..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-[16px] text-sm text-foreground font-body outline-none focus:border-primary dark:focus:border-accent transition-colors shadow-sm"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {[{ id: "semua", label: "Semua" }, ...JURUSAN_LIST.map((j) => ({ id: j.id, label: j.label.split(" ")[0] }))].map((f) => {
                const j = JURUSAN_LIST.find((x) => x.id === f.id);
                const isActive = filter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className={`px-4 py-2.5 rounded-[16px] text-sm font-medium transition-all font-body border ${
                      isActive
                        ? "shadow-sm"
                        : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                    }`}
                    style={isActive
                      ? { backgroundColor: j?.warna || "#14532D", color: "white", borderColor: j?.warna || "#14532D" }
                      : {}
                    }
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="text-sm text-muted-foreground font-caption mb-6">
            Menampilkan <span className="font-semibold text-foreground">{filtered.length}</span> dari {MAHASISWA.length} mahasiswa
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {filtered.map((m) => (
              <MahasiswaModal key={m.id} m={m} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground font-body">
              <div className="text-5xl mb-4">🔍</div>
              <p>Tidak ada mahasiswa yang sesuai pencarian.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
