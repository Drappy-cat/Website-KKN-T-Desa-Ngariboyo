import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Mail, Phone, Search, X, Award, BookOpen, Users } from "lucide-react";
import { DPL, MAHASISWA, JURUSAN_LIST } from "../data";
import { usePageMeta } from "../hooks/usePageMeta";

function PageBanner({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="relative bg-gradient-to-b from-[#071F11] via-[#0B2E1A] to-[#05170D] pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#F4B400_0%,_transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest mb-4 font-caption border border-accent/30">
          Tim Kami
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4 leading-tight">{title}</h1>
        {sub && <p className="text-white/60 text-base font-body max-w-2xl mx-auto">{sub}</p>}
      </div>
    </div>
  );
}

const PROKER_PER_MAHASISWA: Record<number, string[]> = {
  1: ["Bimbingan Belajar Gratis SD–SMP", "English Fun Class Anak Desa", "Pembangunan Perpustakaan Mini Desa"],
  2: ["Bimbingan Belajar Gratis SD–SMP", "Program Literasi Membaca Anak", "Pelatihan Pedagogi Guru SD Lokal"],
  3: ["Bimbingan Belajar Gratis SD–SMP", "English Fun Class Anak Desa"],
  4: ["Program Literasi Membaca Anak", "Pembangunan Perpustakaan Mini Desa"],
  5: ["Website Profil Desa Ngariboyo", "Aplikasi Pencatatan UMKM Digital", "Pengelolaan Media Sosial Desa", "Sistem Inventaris BUMDes Digital"],
  6: ["Pelatihan Microsoft Office Warga", "Pengelolaan Media Sosial Desa"],
  7: ["Website Profil Desa Ngariboyo", "Aplikasi Pencatatan UMKM Digital", "Sistem Inventaris BUMDes Digital"],
  8: ["Pelatihan Microsoft Office Warga", "Pengelolaan Media Sosial Desa"],
  9: ["Digitalisasi 25 UMKM Desa", "Pelatihan Kemasan & Branding Produk", "Koperasi Simpan Pinjam Digital"],
  10: ["Digitalisasi 25 UMKM Desa", "Pelatihan Kemasan & Branding Produk", "Pemasaran Online Produk Lokal"],
  11: ["Pemasaran Online Produk Lokal", "BUMDes Goes Digital"],
  12: ["BUMDes Goes Digital", "Koperasi Simpan Pinjam Digital"],
  13: ["Senam Pagi Bersama", "Turnamen Olahraga Antar RT", "Sosialisasi Hidup Aktif & Sehat"],
  14: ["Sosialisasi Hidup Aktif & Sehat", "Pelatihan Instruktur Senam Desa"],
  15: ["Senam Pagi Bersama", "Turnamen Sepak Bola Mini Anak", "Pelatihan Instruktur Senam Desa"],
};

const DESKRIPSI_MAHASISWA: Record<number, string> = {
  1: "Ahmad Fauzi adalah ketua kelompok KKNT yang berperan sebagai koordinator utama seluruh kegiatan. Dengan latar belakang PGSD, ia fokus pada program pendidikan dan literasi anak-anak desa.",
  2: "Siti Rahmah berperan sebagai wakil ketua yang aktif dalam program bimbingan belajar dan literasi membaca. Ia dikenal sebagai fasilitator yang sabar dan kreatif.",
  3: "Budi Santoso aktif dalam pengajaran matematika dan sains untuk bimbingan belajar. Pendekatan gamifikasi yang ia terapkan membuat siswa lebih antusias belajar.",
  4: "Dewi Lestari berfokus pada program literasi dan pengembangan perpustakaan mini. Ia mengelola koleksi buku dan sistem peminjaman dengan rapi.",
  5: "Kevin Oktavian adalah kepala divisi teknologi. Ia memimpin pengembangan website desa dan aplikasi digital untuk mendukung transformasi smart village.",
  6: "Alya Rahma mengelola konten media sosial desa dengan estetika visual yang konsisten. Kreativitasnya membuat konten desa viral di berbagai platform.",
  7: "Deni Firmansyah adalah backend developer yang membangun sistem inventaris BUMDes dan aplikasi pencatatan UMKM.",
  8: "Citra Dewi bertanggung jawab untuk pelatihan Microsoft Office kepada warga desa, membantu meningkatkan literasi digital masyarakat.",
  9: "Rini Wulandari memimpin program digitalisasi UMKM. Dengan latar belakang manajemen, ia mendampingi 25 UMKM untuk hadir di ekosistem digital.",
  10: "Bagas Prasetyo ahli dalam strategi pemasaran online. Ia membantu UMKM desa memasuki marketplace dan meningkatkan omzet secara signifikan.",
  11: "Lita Amelia fokus pada program BUMDes Goes Digital dan pemasaran online produk lokal, membantu memperluas jangkauan pasar.",
  12: "Yoga Saputra mengerjakan program koperasi simpan pinjam digital dan digitalisasi BUMDes untuk memodernisasi sistem keuangan desa.",
  13: "Haris Budiman adalah koordinator lapangan program olahraga. Dengan keahlian di bidang ilmu keolahragaan, ia memimpin senam pagi dan turnamen.",
  14: "Endah Rahayu aktif dalam sosialisasi hidup sehat dan pelatihan instruktur senam. Ia juga menangani dokumentasi video kegiatan olahraga.",
  15: "Fandi Ardiansyah berfokus pada turnamen sepak bola mini dan pelatihan instruktur senam, mendukung keberlanjutan program olahraga desa.",
};

function getJurusan(prodi: string) {
  if (prodi === "PGSD") return JURUSAN_LIST[0];
  if (prodi === "Teknik Informatika") return JURUSAN_LIST[1];
  if (prodi === "Manajemen") return JURUSAN_LIST[2];
  if (prodi === "Ilmu Keolahragaan") return JURUSAN_LIST[3];
  return JURUSAN_LIST[0];
}

// ── Mahasiswa Detail Modal ────────────────────────────────────────────────────
function MahasiswaModal({ m }: { m: typeof MAHASISWA[0] }) {
  const j = getJurusan(m.prodi);
  const proker = PROKER_PER_MAHASISWA[m.id] || [];
  const desc = DESKRIPSI_MAHASISWA[m.id] || "";

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="group bg-card rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all border border-border cursor-pointer hover:-translate-y-1">
          <div className="relative">
            <img
              src={m.foto}
              alt={m.nama}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-semibold font-caption text-white" style={{ backgroundColor: j.warna }}>
                {m.prodi}
              </span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-display font-bold text-foreground mb-0.5 text-base group-hover:text-primary dark:group-hover:text-accent transition-colors">{m.nama}</h3>
            <div className="text-xs text-muted-foreground font-caption mb-1">{m.nim}</div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground font-body">{m.peran}</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-caption" style={{ backgroundColor: `${j.warna}20`, color: j.warna }}>
                {m.divisi}
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
            Detail profil {m.nama} — mahasiswa {m.prodi} peserta KKNT Desa Ngariboyo 2024.
          </Dialog.Description>
          <Dialog.Close className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-card/80 backdrop-blur-sm hover:bg-muted transition-colors border border-border">
            <X className="w-4 h-4 text-foreground" />
          </Dialog.Close>

          {/* Hero image */}
          <div className="relative h-56 overflow-hidden rounded-t-[24px]">
            <img src={m.foto} alt={m.nama} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-6 right-16">
              <span className="inline-block px-3 py-1 rounded-xl text-xs font-semibold font-caption text-white mb-2" style={{ backgroundColor: j.warna }}>
                {m.prodi}
              </span>
              <Dialog.Title className="font-display font-extrabold text-2xl text-white">{m.nama}</Dialog.Title>
              <p className="text-white/70 text-sm font-caption">{m.nim}</p>
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
  usePageMeta("Tim KKNT", "Profil 15 mahasiswa dan Dosen Pembimbing Lapangan KKNT Desa Ngariboyo 2024.");

  const [filter, setFilter] = useState("semua");
  const [search, setSearch] = useState("");

  const filtered = MAHASISWA.filter((m) => {
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
  });

  return (
    <>
      <PageBanner
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
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {DPL.map((d, i) => (
              <div key={i} className="group bg-card rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all border border-border hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <img src={d.foto} alt={d.nama} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-accent text-xs font-semibold uppercase tracking-wider mb-1 font-caption">{d.jabatan}</div>
                    <h3 className="font-display font-bold text-white text-lg leading-snug">{d.nama}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground text-sm font-body mb-4">{d.prodi} · {d.fakultas}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 text-sm text-foreground/65 font-body">
                      <Mail className="w-4 h-4 text-primary dark:text-accent shrink-0" />
                      <span className="truncate">{d.email}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-foreground/65 font-body">
                      <Phone className="w-4 h-4 text-primary dark:text-accent shrink-0" />
                      {d.telp}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRUKTUR ─────────────────────────────────────────────────────── */}
      <section id="struktur" className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-card text-primary dark:text-accent mb-4 font-caption border border-border">Organisasi</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-accent">Struktur Organisasi</h2>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-primary text-white rounded-[20px] px-8 py-4 text-center shadow-lg">
              <div className="text-xs text-accent font-caption uppercase tracking-wider mb-1">Pembimbing</div>
              <div className="font-display font-bold">Dosen Pembimbing Lapangan (DPL)</div>
            </div>
            <div className="w-px h-8 bg-primary/30 dark:bg-accent/30" />
            <div className="bg-secondary text-white rounded-[20px] px-8 py-4 text-center shadow-lg">
              <div className="text-xs text-accent/80 font-caption uppercase tracking-wider mb-1">Ketua Kelompok</div>
              <div className="font-display font-bold">Ahmad Fauzi</div>
              <div className="text-white/60 text-sm font-body">PGSD</div>
            </div>
            <div className="w-px h-8 bg-primary/30 dark:bg-accent/30" />
            <div className="grid sm:grid-cols-3 gap-4 w-full max-w-2xl">
              {[
                { peran: "Wakil Ketua", nama: "Siti Rahmah", prodi: "PGSD" },
                { peran: "Sekretaris", nama: "Kevin Oktavian", prodi: "Teknik Informatika" },
                { peran: "Bendahara", nama: "Deni Firmansyah", prodi: "Teknik Informatika" },
              ].map((s) => (
                <div key={s.peran} className="bg-card rounded-[20px] px-5 py-4 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-border">
                  <div className="text-xs text-primary dark:text-accent font-caption uppercase tracking-wider mb-1">{s.peran}</div>
                  <div className="font-display font-bold text-foreground text-sm">{s.nama}</div>
                  <div className="text-muted-foreground text-xs font-body">{s.prodi}</div>
                </div>
              ))}
            </div>
            <div className="w-px h-8 bg-primary/30 dark:bg-accent/30" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              {[
                { divisi: "Pendidikan", warna: "#14532D" },
                { divisi: "Teknologi", warna: "#1565C0" },
                { divisi: "Ekonomi", warna: "#E65100" },
                { divisi: "Olahraga", warna: "#6A1B9A" },
              ].map((d) => (
                <div key={d.divisi} className="rounded-[16px] px-4 py-3 text-center text-white text-sm font-semibold font-body" style={{ backgroundColor: d.warna }}>
                  {d.divisi}
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
            <p className="text-muted-foreground font-body">Klik kartu untuk melihat profil lengkap, divisi, dan program yang diikuti.</p>
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
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-[16px] text-sm font-body outline-none focus:border-primary dark:focus:border-accent transition-colors shadow-sm"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {[{ id: "semua", label: "Semua" }, ...JURUSAN_LIST.map((j) => ({ id: j.id, label: j.label.split(" ")[0] }))].map((f) => {
                const j = JURUSAN_LIST.find((x) => x.id === f.id);
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className="px-4 py-2.5 rounded-[16px] text-sm font-medium transition-all font-body border"
                    style={filter === f.id
                      ? { backgroundColor: j?.warna || "#14532D", color: "white", borderColor: j?.warna || "#14532D" }
                      : { backgroundColor: "transparent", borderColor: "#e2e8f0", color: "inherit" }
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
