// ── NAV ─────────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Tentang KKNT", href: "/tentang",
    sub: [
      { label: "Tentang Program", href: "/tentang#program" },
      { label: "Visi & Misi", href: "/tentang#visi-misi" },
      { label: "Filosofi Logo", href: "/tentang#filosofi" },
    ],
  },
  {
    label: "Profil Desa", href: "/desa",
    sub: [
      { label: "Sejarah", href: "/desa#sejarah" },
      { label: "Potensi Desa", href: "/desa#potensi" },
      { label: "Peta Desa", href: "/desa#peta" },
    ],
  },
  {
    label: "Tim KKNT", href: "/tim",
    sub: [
      { label: "Dosen Pembimbing", href: "/tim#dpl" },
      { label: "Struktur Organisasi", href: "/tim#struktur" },
      { label: "Profil Mahasiswa", href: "/tim#mahasiswa" },
    ],
  },
  { label: "Program Kerja", href: "/proker" },
  { label: "Dokumentasi", href: "/dokumentasi" },
  { label: "Berita", href: "/berita" },
  { label: "Kontak", href: "/kontak" },
];

// ── IDENTITAS ────────────────────────────────────────────────────────────────
export const IDENTITAS = {
  slogan: "Melangkah Bersama Membangun Desa",
  tagline: "Unesa Satu Langkah di Depan",
  visi: "Mewujudkan Desa Ngariboyo sebagai desa yang maju, mandiri, berbudaya, sejahtera, dan berkelanjutan melalui kolaborasi mahasiswa dan masyarakat.",
  misi: [
    "Meningkatkan kualitas pendidikan dan literasi masyarakat Desa Ngariboyo.",
    "Mendorong pertumbuhan ekonomi lokal melalui pemberdayaan UMKM dan digitalisasi.",
    "Meningkatkan derajat kesehatan dan kesejahteraan masyarakat desa.",
    "Mendukung pertanian berkelanjutan berbasis teknologi dan kearifan lokal.",
    "Memperkuat keolahragaan dan hidup aktif sebagai fondasi produktivitas warga.",
  ],
  filosofi:
    "Logo KKNT Desa Ngariboyo menggambarkan semangat pengabdian mahasiswa yang bersinergi bersama masyarakat untuk membangun desa yang maju, mandiri, berbudaya, sejahtera, dan berkelanjutan — dengan berlandaskan kolaborasi, kearifan lokal, dan inovasi.",
  maknakeseluruhan:
    "Logo ini mencerminkan potensi komoditas unggulan Desa Ngariboyo (padi dan jagung) yang didukung oleh alam yang subur dan masyarakat yang bersinergi. Mahasiswa KKNT hadir sebagai agen perubahan untuk memberi kontribusi nyata demi kemajuan desa yang berkelanjutan.",
};

export const LOGO_ELEMEN = [
  { no: "01", nama: "Padi", warna: "#F4B400", makna: "Melambangkan kemakmuran, sumber pangan utama masyarakat, kerja keras, dan keberlanjutan hasil pertanian yang menjadi penopang kehidupan desa." },
  { no: "02", nama: "Jagung", warna: "#4CAF50", makna: "Melambangkan potensi unggulan desa, sumber ekonomi penting, serta semangat inovasi dan kemandirian dalam mengelola hasil pertanian." },
  { no: "03", nama: "Gunung Lawu", warna: "#2E7D32", makna: "Melambangkan identitas geografis dan kearifan lokal Magetan, kekuatan alam, serta keteguhan masyarakat dalam menghadapi tantangan." },
  { no: "04", nama: "Aliran Air & Sawah", warna: "#2196F3", makna: "Melambangkan sumber kehidupan, kesuburan lahan, serta harmoni antara manusia dan alam dalam mewujudkan desa yang lestari." },
  { no: "05", nama: "Tiga Sosok", warna: "#FF6F00", makna: "Melambangkan kolaborasi antara mahasiswa, masyarakat, dan pemerintah desa yang bersatu untuk membangun desa melalui gotong royong." },
  { no: "06", nama: "Bintang", warna: "#F4B400", makna: "Melambangkan harapan, cita-cita, dan cahaya inspirasi untuk menuju masa depan desa yang lebih baik." },
  { no: "07", nama: "Rumah & Pohon", warna: "#14532D", makna: "Rumah melambangkan tempat tinggal, kenyamanan, dan kebersamaan. Pohon melambangkan kehidupan, pertumbuhan, dan kelestarian lingkungan desa." },
];

// ── DESA ─────────────────────────────────────────────────────────────────────
export const DESA = {
  sejarah: `Desa Ngariboyo merupakan salah satu desa di Kecamatan Ngariboyo, Kabupaten Magetan, Jawa Timur yang kaya akan kearifan lokal dan potensi alam. Nama "Ngariboyo" konon berasal dari kata dalam bahasa Jawa yang bermakna tempat yang aman dan makmur, mencerminkan harapan leluhur akan kehidupan yang sejahtera bagi seluruh warganya.

Desa ini memiliki sejarah panjang sejak masa kolonial Belanda, dengan masyarakat yang dikenal gigih dalam bertani dan menjaga tradisi gotong royong. Sawah-sawah yang menghijau di kaki Gunung Lawu menjadi saksi bisu perjuangan generasi demi generasi warga Ngariboyo dalam membangun dan mempertahankan kehidupan desa.`,
  potensi: [
    { judul: "Pertanian Padi & Jagung", ikon: "🌾", deskripsi: "Lahan pertanian subur menghasilkan padi dan jagung berkualitas tinggi yang menjadi komoditas utama perekonomian desa." },
    { judul: "Pariwisata Alam", ikon: "🏔️", deskripsi: "Pemandangan alam indah kaki Gunung Lawu dengan udara sejuk dan lanskap persawahan yang menawan berpotensi sebagai destinasi agrowisata." },
    { judul: "UMKM Produk Lokal", ikon: "🏪", deskripsi: "Lebih dari 25 UMKM aktif memproduksi olahan makanan, kerajinan, dan produk lokal bernilai tinggi yang siap dipasarkan secara digital." },
    { judul: "Sumber Daya Air", ikon: "💧", deskripsi: "Aliran sungai dan irigasi yang melimpah mendukung pertanian intensif dan budidaya ikan air tawar sepanjang tahun." },
    { judul: "Sumber Daya Manusia", ikon: "👥", deskripsi: "Warga yang aktif dan semangat belajar tinggi, dengan banyak pemuda yang terbuka terhadap inovasi dan teknologi digital." },
    { judul: "Budaya & Tradisi", ikon: "🎭", deskripsi: "Kekayaan tradisi lokal, seni budaya Jawa, dan kearifan lokal yang masih terjaga menjadi identitas dan daya tarik unik desa." },
  ],
  permasalahan: [
    { judul: "Literasi Digital Rendah", ikon: "📱", deskripsi: "Sebagian besar warga belum memanfaatkan teknologi digital secara optimal untuk produktivitas dan pemasaran produk lokal." },
    { judul: "Keterbatasan Akses Pasar", ikon: "📦", deskripsi: "Produk UMKM lokal belum memiliki akses pasar yang luas karena minimnya pengetahuan e-commerce dan branding digital." },
    { judul: "Infrastruktur Pendukung", ikon: "🏗️", deskripsi: "Beberapa fasilitas umum seperti saluran irigasi dan jalan desa perlu perbaikan untuk mendukung aktivitas pertanian dan mobilitas warga." },
    { judul: "Kualitas SDM Pertanian", ikon: "🌿", deskripsi: "Petani masih banyak yang menggunakan metode konvensional dan belum mengenal teknologi pertanian organik yang lebih efisien." },
  ],
  statistik: [
    { nilai: "±8.5", satuan: "km²", label: "Luas Wilayah" },
    { nilai: "1240", satuan: "KK", label: "Jumlah Keluarga" },
    { nilai: "4800", satuan: "jiwa", label: "Total Penduduk" },
    { nilai: "6", satuan: "RW", label: "Wilayah RT/RW" },
  ],
};

// ── DPL ──────────────────────────────────────────────────────────────────────
export const DPL = [
  {
    nama: "Dr. Ir. Bambang Widodo, M.T.",
    jabatan: "Dosen Pembimbing Lapangan I",
    prodi: "Teknik Sipil",
    fakultas: "Fakultas Teknik",
    email: "b.widodo@unesa.ac.id",
    telp: "0812-3456-7890",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format",
  },
  {
    nama: "Dr. Sri Wahyuni, M.Pd.",
    jabatan: "Dosen Pembimbing Lapangan II",
    prodi: "Pendidikan Dasar",
    fakultas: "Fakultas Ilmu Pendidikan",
    email: "s.wahyuni@unesa.ac.id",
    telp: "0813-4567-8901",
    foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format",
  },
];

// ── MAHASISWA ────────────────────────────────────────────────────────────────
export const MAHASISWA = [
  { id: 1, nama: "Ahmad Fauzi", nim: "22010174001", prodi: "PGSD", divisi: "Koordinator", peran: "Ketua Kelompok", foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format" },
  { id: 2, nama: "Siti Rahmah", nim: "22010174002", prodi: "PGSD", divisi: "Pendidikan", peran: "Wakil Ketua", foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&auto=format" },
  { id: 3, nama: "Budi Santoso", nim: "22010174003", prodi: "PGSD", divisi: "Pendidikan", peran: "Pengajar", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&auto=format" },
  { id: 4, nama: "Dewi Lestari", nim: "22010174004", prodi: "PGSD", divisi: "Pendidikan", peran: "Pengajar", foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&auto=format" },
  { id: 5, nama: "Kevin Oktavian", nim: "22050514001", prodi: "Teknik Informatika", divisi: "Teknologi", peran: "Sekretaris", foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&auto=format" },
  { id: 6, nama: "Alya Rahma", nim: "22050514002", prodi: "Teknik Informatika", divisi: "Teknologi", peran: "Anggota", foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&auto=format" },
  { id: 7, nama: "Deni Firmansyah", nim: "22050514003", prodi: "Teknik Informatika", divisi: "Teknologi", peran: "Bendahara I", foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&auto=format" },
  { id: 8, nama: "Citra Dewi", nim: "22050514004", prodi: "Teknik Informatika", divisi: "Teknologi", peran: "Anggota", foto: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop&auto=format" },
  { id: 9, nama: "Rini Wulandari", nim: "22080574001", prodi: "Manajemen", divisi: "Ekonomi", peran: "Bendahara II", foto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&auto=format" },
  { id: 10, nama: "Bagas Prasetyo", nim: "22080574002", prodi: "Manajemen", divisi: "Ekonomi", peran: "Humas I", foto: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&auto=format" },
  { id: 11, nama: "Lita Amelia", nim: "22080574003", prodi: "Manajemen", divisi: "Ekonomi", peran: "Humas II", foto: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&auto=format" },
  { id: 12, nama: "Yoga Saputra", nim: "22080574004", prodi: "Manajemen", divisi: "Ekonomi", peran: "Anggota", foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&auto=format" },
  { id: 13, nama: "Haris Budiman", nim: "22060424001", prodi: "Ilmu Keolahragaan", divisi: "Kesehatan & Olahraga", peran: "Koordinator Lapangan", foto: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=300&h=300&fit=crop&auto=format" },
  { id: 14, nama: "Endah Rahayu", nim: "22060424002", prodi: "Ilmu Keolahragaan", divisi: "Kesehatan & Olahraga", peran: "Dokumentasi", foto: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&auto=format" },
  { id: 15, nama: "Fandi Ardiansyah", nim: "22060424003", prodi: "Ilmu Keolahragaan", divisi: "Kesehatan & Olahraga", peran: "Anggota", foto: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=300&h=300&fit=crop&auto=format" },
];

// ── JURUSAN ──────────────────────────────────────────────────────────────────
export type StatusProker = "Berjalan" | "Selesai" | "Perencanaan";

export interface Proker {
  id: number;
  nama: string;
  jurusan: string;
  kategori: string;
  status: StatusProker;
  tanggal: string;
  lokasi: string;
  deskripsi: string;
  anggota: string[];
  latarBelakang: string;
  tujuan: string;
  hasil: string;
}

export const JURUSAN_LIST = [
  { id: "pgsd", label: "PGSD", warna: "#14532D", warnaLight: "#E8F5E9" },
  { id: "ti", label: "Teknik Informatika", warna: "#1565C0", warnaLight: "#E3F2FD" },
  { id: "manajemen", label: "Manajemen", warna: "#E65100", warnaLight: "#FFF3E0" },
  { id: "ikor", label: "Ilmu Keolahragaan", warna: "#6A1B9A", warnaLight: "#F3E5F5" },
];

export const PROKER: Proker[] = [
  // PGSD
  {
    id: 1,
    nama: "Bimbingan Belajar Gratis SD–SMP",
    jurusan: "pgsd",
    kategori: "Pendidikan",
    status: "Berjalan",
    tanggal: "Agustus – November 2024",
    lokasi: "Balai Desa Ngariboyo",
    deskripsi: "Program bimbingan belajar gratis untuk siswa SD dan SMP di Desa Ngariboyo yang dilaksanakan setiap hari Senin–Jumat sore.",
    anggota: ["Ahmad Fauzi", "Siti Rahmah", "Budi Santoso", "Dewi Lestari"],
    latarBelakang: "Masih banyak siswa SD–SMP yang membutuhkan bimbingan belajar tambahan namun terkendala biaya.",
    tujuan: "Meningkatkan prestasi akademik siswa SD dan SMP Desa Ngariboyo melalui bimbingan belajar intensif dan gratis.",
    hasil: "60+ siswa aktif mengikuti bimbel dengan peningkatan rata-rata nilai ujian sebesar 15%.",
  },
  {
    id: 2,
    nama: "Program Literasi Membaca Anak",
    jurusan: "pgsd",
    kategori: "Pendidikan",
    status: "Berjalan",
    tanggal: "Agustus – Oktober 2024",
    lokasi: "SD Negeri Ngariboyo & Perpustakaan Mini",
    deskripsi: "Membangun budaya membaca sejak dini dengan mendirikan pojok baca dan mengadakan program storytelling interaktif.",
    anggota: ["Siti Rahmah", "Dewi Lestari"],
    latarBelakang: "Rendahnya minat baca anak-anak desa akibat terbatasnya akses buku dan aktivitas literasi.",
    tujuan: "Meningkatkan minat baca dan kemampuan literasi anak-anak Desa Ngariboyo.",
    hasil: "Perpustakaan mini dengan 500+ koleksi buku, 45 anak aktif berkunjung setiap minggu.",
  },
  {
    id: 3,
    nama: "English Fun Class Anak Desa",
    jurusan: "pgsd",
    kategori: "Pendidikan",
    status: "Berjalan",
    tanggal: "September – November 2024",
    lokasi: "Balai Desa Ngariboyo",
    deskripsi: "Kelas Bahasa Inggris menyenangkan untuk anak SD dengan metode bermain dan lagu agar mudah dipahami.",
    anggota: ["Ahmad Fauzi", "Budi Santoso"],
    latarBelakang: "Kemampuan Bahasa Inggris siswa SD masih sangat rendah dan butuh pendekatan kreatif.",
    tujuan: "Memperkenalkan Bahasa Inggris dasar dengan cara menyenangkan kepada anak-anak desa.",
    hasil: "35 anak mengikuti kelas rutin dengan antusiasme tinggi dan kemampuan kosakata dasar yang meningkat.",
  },
  {
    id: 4,
    nama: "Pembangunan Perpustakaan Mini Desa",
    jurusan: "pgsd",
    kategori: "Pendidikan",
    status: "Selesai",
    tanggal: "Agustus 2024",
    lokasi: "Balai Desa Ngariboyo",
    deskripsi: "Pembangunan dan pengisian perpustakaan mini di balai desa sebagai pusat literasi masyarakat.",
    anggota: ["Ahmad Fauzi", "Siti Rahmah", "Budi Santoso", "Dewi Lestari"],
    latarBelakang: "Desa Ngariboyo belum memiliki fasilitas perpustakaan yang memadai untuk mendukung literasi warga.",
    tujuan: "Menyediakan fasilitas perpustakaan mini yang dapat diakses seluruh warga desa.",
    hasil: "Perpustakaan mini dengan 500+ buku terkelola dan sistem peminjaman aktif.",
  },
  {
    id: 5,
    nama: "Pelatihan Pedagogi Guru SD Lokal",
    jurusan: "pgsd",
    kategori: "Pendidikan",
    status: "Perencanaan",
    tanggal: "Oktober – November 2024",
    lokasi: "SD Negeri Ngariboyo",
    deskripsi: "Pelatihan metode pengajaran modern untuk guru SD lokal agar lebih efektif dalam menyampaikan materi.",
    anggota: ["Ahmad Fauzi", "Siti Rahmah"],
    latarBelakang: "Beberapa guru SD masih menggunakan metode pengajaran konvensional yang kurang melibatkan siswa secara aktif.",
    tujuan: "Meningkatkan kompetensi pedagogis guru SD melalui pelatihan metode pembelajaran aktif.",
    hasil: "Dalam perencanaan — target 12 guru SD terlatih.",
  },
  // Teknik Informatika
  {
    id: 6,
    nama: "Website Profil Desa Ngariboyo",
    jurusan: "ti",
    kategori: "Teknologi",
    status: "Berjalan",
    tanggal: "Agustus – November 2024",
    lokasi: "Online / Desa Ngariboyo",
    deskripsi: "Pengembangan website resmi Desa Ngariboyo sebagai wajah digital desa yang menampilkan profil, potensi, UMKM, dan agenda kegiatan.",
    anggota: ["Kevin Oktavian", "Alya Rahma", "Deni Firmansyah", "Citra Dewi"],
    latarBelakang: "Desa Ngariboyo belum memiliki platform digital resmi untuk mempromosikan potensi dan UMKM lokal.",
    tujuan: "Membangun kehadiran digital Desa Ngariboyo melalui website profesional yang mudah diakses.",
    hasil: "Website live dengan 500+ pengunjung dalam 2 minggu pertama peluncuran.",
  },
  {
    id: 7,
    nama: "Aplikasi Pencatatan UMKM Digital",
    jurusan: "ti",
    kategori: "Teknologi",
    status: "Berjalan",
    tanggal: "September – November 2024",
    lokasi: "Desa Ngariboyo",
    deskripsi: "Pembuatan aplikasi pencatatan keuangan sederhana berbasis smartphone untuk pelaku UMKM desa.",
    anggota: ["Kevin Oktavian", "Deni Firmansyah"],
    latarBelakang: "UMKM desa masih mencatat transaksi secara manual sehingga sulit memantau perkembangan bisnis.",
    tujuan: "Membantu pelaku UMKM mengelola keuangan dengan lebih terstruktur dan digital.",
    hasil: "Aplikasi sederhana berbasis spreadsheet pintar yang digunakan 15 UMKM aktif.",
  },
  {
    id: 8,
    nama: "Pelatihan Microsoft Office Warga",
    jurusan: "ti",
    kategori: "Teknologi",
    status: "Selesai",
    tanggal: "Agustus – September 2024",
    lokasi: "Balai Desa Ngariboyo",
    deskripsi: "Pelatihan penggunaan Microsoft Word, Excel, dan PowerPoint untuk warga desa guna meningkatkan literasi komputer.",
    anggota: ["Alya Rahma", "Citra Dewi"],
    latarBelakang: "Rendahnya kemampuan komputer warga menghambat produktivitas kerja dan administrasi desa.",
    tujuan: "Meningkatkan kemampuan digital warga desa melalui pelatihan komputer praktis.",
    hasil: "40 peserta dari berbagai kalangan usia menyelesaikan pelatihan 3 sesi.",
  },
  {
    id: 9,
    nama: "Pengelolaan Media Sosial Desa",
    jurusan: "ti",
    kategori: "Teknologi",
    status: "Berjalan",
    tanggal: "Agustus – November 2024",
    lokasi: "Online",
    deskripsi: "Pengelolaan akun Instagram, TikTok, dan YouTube Desa Ngariboyo untuk mempromosikan potensi desa secara digital.",
    anggota: ["Alya Rahma", "Citra Dewi", "Kevin Oktavian"],
    latarBelakang: "Desa belum memanfaatkan media sosial sebagai sarana promosi potensi dan kegiatan desa.",
    tujuan: "Membangun brand awareness Desa Ngariboyo di media sosial secara konsisten dan profesional.",
    hasil: "1.200+ pengikut Instagram, 32 konten terpublikasi, jangkauan 12.000+ akun.",
  },
  {
    id: 10,
    nama: "Sistem Inventaris BUMDes Digital",
    jurusan: "ti",
    kategori: "Teknologi",
    status: "Perencanaan",
    tanggal: "Oktober – November 2024",
    lokasi: "Kantor BUMDes Ngariboyo",
    deskripsi: "Pengembangan sistem inventaris digital untuk BUMDes agar pengelolaan aset dan stok lebih tertib.",
    anggota: ["Kevin Oktavian", "Deni Firmansyah"],
    latarBelakang: "BUMDes masih menggunakan pencatatan manual yang rentan kesalahan dan sulit diaudit.",
    tujuan: "Modernisasi sistem pencatatan BUMDes melalui digitalisasi inventaris aset dan produk.",
    hasil: "Dalam perencanaan — sistem berbasis Google Sheets terintegrasi.",
  },
  // Manajemen
  {
    id: 11,
    nama: "Digitalisasi 25 UMKM Desa",
    jurusan: "manajemen",
    kategori: "Ekonomi",
    status: "Berjalan",
    tanggal: "Agustus – November 2024",
    lokasi: "Desa Ngariboyo",
    deskripsi: "Pendampingan 25 UMKM lokal dalam mendaftarkan bisnis ke platform digital, marketplace, dan media sosial.",
    anggota: ["Rini Wulandari", "Bagas Prasetyo", "Lita Amelia", "Yoga Saputra"],
    latarBelakang: "Mayoritas UMKM desa belum hadir di platform digital sehingga potensi pasar sangat terbatas.",
    tujuan: "Membantu 25 UMKM Desa Ngariboyo hadir di ekosistem digital untuk memperluas pasar.",
    hasil: "20 UMKM sudah terdaftar di marketplace, 18 memiliki akun Instagram aktif.",
  },
  {
    id: 12,
    nama: "Pelatihan Kemasan & Branding Produk",
    jurusan: "manajemen",
    kategori: "Ekonomi",
    status: "Selesai",
    tanggal: "September 2024",
    lokasi: "Balai Desa Ngariboyo",
    deskripsi: "Workshop desain kemasan menarik, fotografi produk, dan strategi personal branding untuk pelaku UMKM.",
    anggota: ["Rini Wulandari", "Bagas Prasetyo"],
    latarBelakang: "Produk UMKM desa belum memiliki kemasan yang menarik dan kompetitif di pasar modern.",
    tujuan: "Meningkatkan daya saing produk UMKM lokal melalui kemasan profesional dan branding yang kuat.",
    hasil: "25 pelaku UMKM berhasil mendesain ulang kemasan produk dengan nilai jual lebih tinggi.",
  },
  {
    id: 13,
    nama: "BUMDes Goes Digital",
    jurusan: "manajemen",
    kategori: "Ekonomi",
    status: "Berjalan",
    tanggal: "September – November 2024",
    lokasi: "Kantor BUMDes Ngariboyo",
    deskripsi: "Transformasi digital BUMDes melalui pelatihan manajemen online, e-commerce, dan pelaporan digital.",
    anggota: ["Yoga Saputra", "Lita Amelia"],
    latarBelakang: "BUMDes Ngariboyo belum memiliki kapasitas digital yang cukup untuk berkembang secara modern.",
    tujuan: "Meningkatkan kapasitas BUMDes dalam pengelolaan bisnis berbasis digital.",
    hasil: "BUMDes aktif di 2 marketplace dengan omzet meningkat 30% dibanding bulan sebelumnya.",
  },
  {
    id: 14,
    nama: "Pemasaran Online Produk Lokal",
    jurusan: "manajemen",
    kategori: "Ekonomi",
    status: "Berjalan",
    tanggal: "Agustus – November 2024",
    lokasi: "Online / Desa Ngariboyo",
    deskripsi: "Program pendampingan pemasaran online melalui marketplace, WhatsApp Business, dan Instagram Shopping.",
    anggota: ["Rini Wulandari", "Bagas Prasetyo", "Lita Amelia"],
    latarBelakang: "Produk lokal Desa Ngariboyo belum menembus pasar luar daerah karena keterbatasan pemasaran.",
    tujuan: "Membuka akses pasar yang lebih luas bagi produk lokal Desa Ngariboyo melalui saluran digital.",
    hasil: "Produk lokal kini dipasarkan ke 5 kota besar dengan peningkatan omzet rata-rata 40%.",
  },
  {
    id: 15,
    nama: "Koperasi Simpan Pinjam Digital",
    jurusan: "manajemen",
    kategori: "Ekonomi",
    status: "Perencanaan",
    tanggal: "Oktober – November 2024",
    lokasi: "Balai Desa Ngariboyo",
    deskripsi: "Pelatihan dan pembentukan koperasi simpan pinjam berbasis aplikasi digital untuk warga desa.",
    anggota: ["Rini Wulandari", "Yoga Saputra"],
    latarBelakang: "Akses keuangan formal warga desa masih terbatas sehingga banyak yang bergantung pada rentenir.",
    tujuan: "Membentuk koperasi simpan pinjam digital yang mudah diakses seluruh warga Desa Ngariboyo.",
    hasil: "Dalam perencanaan — target 50 anggota koperasi terdaftar.",
  },
  // Ilmu Keolahragaan
  {
    id: 16,
    nama: "Senam Pagi Bersama",
    jurusan: "ikor",
    kategori: "Olahraga",
    status: "Berjalan",
    tanggal: "Agustus – November 2024",
    lokasi: "Lapangan Desa Ngariboyo",
    deskripsi: "Program senam aerobik rutin setiap Minggu pagi bersama warga desa untuk mewujudkan gaya hidup aktif dan sehat.",
    anggota: ["Haris Budiman", "Endah Rahayu", "Fandi Ardiansyah"],
    latarBelakang: "Kurangnya kegiatan fisik rutin warga desa terutama lansia dan ibu rumah tangga.",
    tujuan: "Membiasakan gaya hidup aktif warga Desa Ngariboyo melalui senam pagi rutin bersama.",
    hasil: "80–120 warga rutin hadir setiap Minggu pagi dengan semangat tinggi.",
  },
  {
    id: 17,
    nama: "Turnamen Olahraga Antar RT",
    jurusan: "ikor",
    kategori: "Olahraga",
    status: "Berjalan",
    tanggal: "Oktober 2024",
    lokasi: "Lapangan Desa Ngariboyo",
    deskripsi: "Turnamen olahraga multi-cabang (sepak bola, voli, badminton) antar RT untuk mempererat kebersamaan warga.",
    anggota: ["Haris Budiman", "Fandi Ardiansyah"],
    latarBelakang: "Interaksi antar RT di Desa Ngariboyo masih kurang dan perlu wadah kebersamaan yang positif.",
    tujuan: "Mempererat persaudaraan dan sportivitas antar warga melalui kompetisi olahraga yang sehat.",
    hasil: "18 RT berpartisipasi, 200+ warga hadir sebagai penonton dan peserta.",
  },
  {
    id: 18,
    nama: "Sosialisasi Hidup Aktif & Sehat",
    jurusan: "ikor",
    kategori: "Kesehatan",
    status: "Selesai",
    tanggal: "Agustus 2024",
    lokasi: "Balai Desa & Posyandu",
    deskripsi: "Penyuluhan pentingnya aktivitas fisik, pola makan sehat, dan gaya hidup aktif untuk seluruh kelompok usia.",
    anggota: ["Haris Budiman", "Endah Rahayu"],
    latarBelakang: "Tingginya kasus tekanan darah tinggi dan diabetes warga akibat gaya hidup kurang aktif.",
    tujuan: "Meningkatkan kesadaran warga tentang pentingnya aktivitas fisik dan pola hidup sehat.",
    hasil: "150+ warga mengikuti penyuluhan di 3 lokasi berbeda dengan antusias.",
  },
  {
    id: 19,
    nama: "Pelatihan Instruktur Senam Desa",
    jurusan: "ikor",
    kategori: "Olahraga",
    status: "Berjalan",
    tanggal: "September – Oktober 2024",
    lokasi: "Lapangan Desa Ngariboyo",
    deskripsi: "Pelatihan instruktur senam lokal agar program senam dapat berlanjut secara mandiri setelah KKNT berakhir.",
    anggota: ["Endah Rahayu", "Fandi Ardiansyah"],
    latarBelakang: "Program senam butuh keberlanjutan dan tidak boleh berhenti ketika mahasiswa KKNT sudah kembali.",
    tujuan: "Mencetak instruktur senam lokal yang mampu memimpin kegiatan secara mandiri dan berkelanjutan.",
    hasil: "5 instruktur lokal terlatih dan siap memimpin senam desa secara mandiri.",
  },
  {
    id: 20,
    nama: "Turnamen Sepak Bola Mini Anak",
    jurusan: "ikor",
    kategori: "Olahraga",
    status: "Perencanaan",
    tanggal: "November 2024",
    lokasi: "Lapangan Desa Ngariboyo",
    deskripsi: "Turnamen sepak bola mini khusus anak-anak SD sebagai sarana pembinaan olahraga sejak dini.",
    anggota: ["Haris Budiman", "Fandi Ardiansyah"],
    latarBelakang: "Bakat olahraga anak-anak desa belum banyak yang terfasilitasi dan dibina secara terstruktur.",
    tujuan: "Menyediakan wadah kompetisi yang sehat untuk pembinaan bakat olahraga anak-anak desa.",
    hasil: "Dalam perencanaan — target 8 tim SD berpartisipasi.",
  },
];

// ── TIMELINE ─────────────────────────────────────────────────────────────────
export const TIMELINE = [
  {
    bulan: "Agustus 2024",
    fase: "Observasi & Persiapan",
    warna: "#14532D",
    kegiatan: ["Orientasi dan pengenalan wilayah", "Observasi kondisi desa", "Penyusunan program kerja", "Koordinasi dengan perangkat desa"],
  },
  {
    bulan: "September 2024",
    fase: "Pelaksanaan Program I",
    warna: "#2E7D32",
    kegiatan: ["Bimbingan belajar aktif", "Pelatihan UMKM digital", "Senam pagi perdana", "Penyuluhan kesehatan"],
  },
  {
    bulan: "Oktober 2024",
    fase: "Pelaksanaan Program II",
    warna: "#F4B400",
    kegiatan: ["Festival Desa Ngariboyo", "Turnamen olahraga antar RT", "Workshop kemasan produk", "Launching website desa"],
  },
  {
    bulan: "November 2024",
    fase: "Evaluasi & Pelaporan",
    warna: "#1565C0",
    kegiatan: ["Evaluasi seluruh program", "Penyusunan laporan akhir", "Serah terima produk", "Perpisahan dengan warga"],
  },
];

// ── BERITA ───────────────────────────────────────────────────────────────────
export const BERITA = [
  {
    id: 1,
    judul: "Penyuluhan Pertanian Organik untuk 40 Petani Desa",
    tgl: "15 Agustus 2024",
    kat: "Pertanian",
    penulis: "Ahmad Fauzi",
    isi: "Divisi Pertanian mengadakan penyuluhan teknik budidaya organik kepada petani lokal. Antusiasme petani sangat tinggi untuk meningkatkan kualitas dan nilai jual hasil panen mereka. Narasumber dari Dinas Pertanian Kabupaten Magetan hadir memberikan materi terkini tentang pupuk organik dan pengendalian hama terpadu.",
    img: "https://images.unsplash.com/photo-1500382017968-0a04a3e16c5c?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 2,
    judul: "60 Anak Antusias Ikuti Bimbingan Belajar Gratis",
    tgl: "22 Agustus 2024",
    kat: "Pendidikan",
    penulis: "Siti Rahmah",
    isi: "Program bimbingan belajar sore mendapat respons luar biasa dari warga desa. Mahasiswa mendampingi siswa SD-SMP dalam pelajaran matematika, IPA, dan bahasa. Para orang tua sangat mengapresiasi program ini karena membantu anak mereka yang kesulitan belajar mandiri di rumah.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 3,
    judul: "Workshop Kemasan Produk Tingkatkan Daya Saing UMKM",
    tgl: "20 Agustus 2024",
    kat: "Ekonomi",
    penulis: "Rini Wulandari",
    isi: "25 pelaku UMKM mengikuti pelatihan desain kemasan, fotografi produk, dan strategi pemasaran digital yang digelar Divisi Manajemen. Produk-produk lokal kini tampil lebih profesional dan siap bersaing di pasar modern serta platform e-commerce.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 4,
    judul: "Launching Website Desa: Ngariboyo Hadir di Dunia Digital",
    tgl: "25 Agustus 2024",
    kat: "Teknologi",
    penulis: "Kevin Oktavian",
    isi: "Tim IT resmi meluncurkan website Desa Ngariboyo yang memuat profil desa, katalog UMKM, dan agenda kegiatan secara real-time. Kepala Desa Ngariboyo menyambut antusias inisiatif ini sebagai langkah nyata menuju smart village.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 5,
    judul: "Senam Pagi Rutin: 100 Warga Bergerak Bersama",
    tgl: "1 September 2024",
    kat: "Olahraga",
    penulis: "Haris Budiman",
    isi: "Antusiasme warga luar biasa di senam pagi pertama bersama mahasiswa KKNT Ilmu Keolahragaan. Lebih dari 100 warga dari berbagai usia hadir memenuhi lapangan desa. Program ini akan terus dilanjutkan setiap Minggu pagi.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 6,
    judul: "Kerja Bakti: Revitalisasi Taman dan Saluran Irigasi",
    tgl: "28 Agustus 2024",
    kat: "Lingkungan",
    penulis: "Ahmad Fauzi",
    isi: "Lebih dari 100 warga dan mahasiswa bergotong royong memperbaiki saluran irigasi dan menanam pohon penghijauan di taman desa. Kegiatan ini mempererat hubungan antara mahasiswa KKNT dengan masyarakat Desa Ngariboyo.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=380&fit=crop&auto=format",
  },
];

// ── STATISTIK HOME ───────────────────────────────────────────────────────────
export const STATISTIK = [
  { target: 15, label: "Mahasiswa", satuan: "" },
  { target: 20, label: "Program Kerja", satuan: "+" },
  { target: 4, label: "Jurusan", satuan: "" },
  { target: 4800, label: "Jiwa Terdampak", satuan: "+" },
];

// ── GALERI ───────────────────────────────────────────────────────────────────
export const GALERI = [
  { src: "https://images.unsplash.com/photo-1500382017968-0a04a3e16c5c?w=600&h=400&fit=crop", alt: "Sawah Desa Ngariboyo", kat: "Desa" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=800&fit=crop", alt: "Bimbingan Belajar", kat: "Pendidikan" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop", alt: "Senam Bersama", kat: "Olahraga" },
  { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", alt: "Workshop UMKM", kat: "Ekonomi" },
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=600&fit=crop", alt: "Kerja Bakti", kat: "Lingkungan" },
  { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop", alt: "Teknologi Desa", kat: "Teknologi" },
  { src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=800&fit=crop", alt: "Posyandu", kat: "Kesehatan" },
  { src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop", alt: "Kegiatan Bersama", kat: "Kegiatan" },
  { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=600&fit=crop", alt: "Kesehatan Warga", kat: "Kesehatan" },
];
