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

// ── IDENTITAS ─────────────────────────
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

// ── KONTAK ────────────────────────────────────────────────────────────────────
export const KONTAK = {
  alamat: "Desa Ngariboyo, Kec. Ngariboyo, Kab. Magetan, Jawa Timur 63351",
  email: "kknt.ngariboyo2026@gmail.com",
  telepon: "0812-3456-7890",
  kontakPerson: "Iqbal Maulana - Kordes",
  instagram: {
    handle: "@kknt_ngariboyo26",
    url: "https://instagram.com/kknt_ngariboyo26",
    pengikut: "1.2K",
    postingan: "48",
  },
  tiktok: {
    handle: "@kknt.ngariboyo26",
    url: "https://tiktok.com/@kknt.ngariboyo26",
    pengikut: "856",
    video: "32",
  },
  hashtags: [
    "#KKNTNgariboyo2026",
    "#SmartVillageNgariboyo",
    "#BergerakBersama",
    "#MahasiswaMengabdi",
    "#DesaNgariboyo",
  ],
};

// ── DESA ─────────────────────────────────────────────────────────────────────
export const DESA = {
  sejarah: `Desa Ngariboyo merupakan salah satu desa di Kecamatan Ngariboyo, Kabupaten Magetan, Jawa Timur yang kaya akan kearifan lokal dan potensi alam. Nama "Ngariboyo" konon berasal dari kata dalam bahasa Jawa yang bermakna tempat yang aman dan makmur, mencerminkan harapan leluhur akan kehidupan yang sejahtera bagi seluruh warganya.

Desa ini memiliki sejarah panjang sejak masa kolonial Belanda, dengan masyarakat yang dikenal gigih dalam bertani dan menjaga tradisi gotong royong. Sawah-sawah yang menghijau di kaki Gunung Lawu menjadi saksi bisu perjuangan generasi demi generasi warga Ngariboyo dalam membangun dan mempertahankan kehidupan desa.`,
  potensi: [
    { judul: "Pertanian Padi & Jagung", ikon: "🌾", img: "https://images.unsplash.com/photo-1586771107445-d3af07e86e10?w=600&h=400&fit=crop", deskripsi: "Lahan pertanian subur menghasilkan padi dan jagung berkualitas tinggi yang menjadi komoditas utama perekonomian desa." },
    { judul: "Wisata Air & Waduk (Embung Pendem)", ikon: "🌊", img: "https://images.unsplash.com/photo-1437482078695-73f5ff6e6559?w=600&h=400&fit=crop", deskripsi: "Fasilitas penampungan air buatan Embung Pendem yang dikembangkan menjadi objek wisata air, menawarkan panorama persawahan yang menawan serta wahana perahu kano untuk pengunjung." },
    { judul: "Destinasi Wisata Religi & Sejarah", ikon: "🕌", img: "https://images.unsplash.com/photo-1574895067204-c1fb700fbe76?w=600&h=400&fit=crop", deskripsi: "Adanya situs Makam Kuno Ngariboyo yang menjadi pusat ziarah religius bagi masyarakat serta pusat pelestarian sejarah cagar budaya lokal." },
    { judul: "UMKM Anyaman Tas & Produk Lokal", ikon: "🛍️", img: "https://images.unsplash.com/photo-1605814510757-5561a0d8bb5d?w=600&h=400&fit=crop", deskripsi: "Sentra industri rumah tangga kreatif yang berfokus pada kerajinan anyaman tas di Dukuh Jetis, didukung oleh lebih dari 25 UMKM aktif yang siap Go Digital." },
    { judul: "Sumber Daya Air", ikon: "💧", img: "https://images.unsplash.com/photo-1517409249719-756d11f92c10?w=600&h=400&fit=crop", deskripsi: "Aliran sungai melimpah dan jaringan irigasi embung yang andal untuk mendukung pertanian intensif serta budidaya ikan air tawar sepanjang tahun." },
    { judul: "Budaya & Tradisi", ikon: "🎭", img: "https://images.unsplash.com/photo-1604928141064-207cea6f5822?w=600&h=400&fit=crop", deskripsi: "Kekayaan adat Jawa Mataraman yang masih terjaga melalui tradisi bersih desa dan seni budaya lokal, menjadi identitas serta daya tarik unik desa." },
  ],
  permasalahan: [
    { judul: "Tata Kelola Pemerintahan (Kasus Korupsi)", ikon: "⚖️", deskripsi: "Desa Ngariboyo mengalami masalah serius dalam transparansi anggaran. Mantan Kepala Desa, Sumadi, terjerat kasus korupsi dan penyalahgunaan Dana Desa berturut-turut (proyek fiktif 2019 & penyimpangan anggaran 2023), menghambat pembangunan fisik." },
    { judul: "Banjir Luapan Akibat Sampah & Drainase", ikon: "🌊", deskripsi: "Meski di kaki gunung, area perempatan dan utara Puskesmas Ngariboyo kerap banjir saat hujan deras akibat buruknya pengelolaan limbah. Saluran tersumbat tumpukan sampah hingga air meluap ke jalan raya setinggi pinggang." },
    { judul: "Ancaman Kekeringan & Krisis Air Bersih", ikon: "🏜️", deskripsi: "Tantangan alam berupa ancaman kekeringan saat kemarau panjang. Sektor pertanian sangat bergantung pada pasokan air, rentan mengalami krisis air dan penurunan produktivitas lahan jika jaringan embung tidak dikelola baik." },
    { judul: "Kendala Distribusi & Harga Pupuk Subsidi", ikon: "🌱", deskripsi: "Sebagai desa penghasil padi & jagung, petani dihadapkan pada carut-marut distribusi pupuk bersubsidi. Sempat muncul sengketa akibat dugaan penjualan tidak merata dan harga di atas HET yang mencekik modal petani." },
  ],
  statistik: [
    { nilai: "±8.5", satuan: "km²", label: "Luas Wilayah" },
    { nilai: "1240", satuan: "KK", label: "Jumlah Keluarga" },
    { nilai: "4800", satuan: "jiwa", label: "Total Penduduk" },
    { nilai: "6", satuan: "RW", label: "Wilayah RT/RW" },
  ],
};

// ── DPL ──────────────────────────────────────────────────────────────────────
import fotoDplDelia from "../../assets/dosen/delia-indrawati-1.jpg";

export const DPL = [
  {
    nama: "Dr. Delia Indrawati, S.Pd., M.Pd.",
    jabatan: "Dosen Pembimbing Lapangan",
    prodi: "Pendidikan Guru Sekolah Dasar (PGSD)",
    fakultas: "Fakultas Ilmu Pendidikan / Kampus Magetan",
    email: "deliaindrawati@unesa.ac.id",
    telp: "0812-3456-7890",
    foto: fotoDplDelia,
  },
];

// ── MAHASISWA ────────────────────────────────────────────────────────────────
import mhs1Iqbal from "../../assets/mahasiswa/mhs_1_iqbal.png";
import mhs2Adelia from "../../assets/mahasiswa/mhs_2_adelia.png";
import mhs3Friska from "../../assets/mahasiswa/mhs_3_friska.png";
import mhs4Ilham from "../../assets/mahasiswa/mhs_4_ilham.png";
import mhs5Devita from "../../assets/mahasiswa/mhs_5_devita.png";
import mhs6Putera from "../../assets/mahasiswa/mhs_6_putera.png";
import mhs7Naufal from "../../assets/mahasiswa/mhs_7_naufal.png";
import mhs8Desi from "../../assets/mahasiswa/mhs_8_desi.png";
import mhs9Bella from "../../assets/mahasiswa/mhs_9_bella.png";
import mhs10Jovanka from "../../assets/mahasiswa/mhs_10_jovanka.png";
import mhs11Rifki from "../../assets/mahasiswa/mhs_11_rifki.png";
import mhs12Valencia from "../../assets/mahasiswa/mhs_12_valencia.png";
import mhs13Arfin from "../../assets/mahasiswa/mhs_13_arfin.png";
import mhs14Rizma from "../../assets/mahasiswa/mhs_14_rizma.png";
import mhs15Izora from "../../assets/mahasiswa/mhs_15_izora.png";

export const MAHASISWA = [
  { id: 1, nama: "Iqbal Maulana Setyo Prayogi", nim: "24111784051", prodi: "Manajemen", divisi: "Inti", peran: "Kordes / Ketua Kelompok", foto: mhs1Iqbal },
  { id: 2, nama: "Adelia Putri Luthfian Dava", nim: "24111744136", prodi: "PGSD", divisi: "Inti", peran: "Sekretaris I", foto: mhs2Adelia },
  { id: 3, nama: "Friska Virginia Vahlevi", nim: "24111744138", prodi: "PGSD", divisi: "Inti", peran: "Sekretaris II", foto: mhs3Friska },
  { id: 4, nama: "Ilham Khoiru Rizki", nim: "24111784052", prodi: "Manajemen", divisi: "Inti", peran: "Bendahara", foto: mhs4Ilham },
  { id: 5, nama: "Devita Natalysa", nim: "24060484050", prodi: "Ilmu Keolahragaan", divisi: "Acara", peran: "Anggota", foto: mhs5Devita },
  { id: 6, nama: "Putera Al Khalidi", nim: "25051204362", prodi: "Teknik Informatika", divisi: "Acara", peran: "Anggota", foto: mhs6Putera },
  { id: 7, nama: "Naufal Akbar Putra Pradana", nim: "25051204322", prodi: "Teknik Informatika", divisi: "Acara", peran: "Koordinator", foto: mhs7Naufal },
  { id: 8, nama: "Desi Alfi Khoiriyah", nim: "24111784114", prodi: "Manajemen", divisi: "Acara", peran: "Anggota", foto: mhs8Desi },
  { id: 9, nama: "Bella Ayu Istiani", nim: "24060484058", prodi: "Ilmu Keolahragaan", divisi: "Humas", peran: "Koordinator", foto: mhs9Bella },
  { id: 10, nama: "Jovanka Hafidl Celesta", nim: "24111784049", prodi: "Manajemen", divisi: "Humas", peran: "Anggota", foto: mhs10Jovanka },
  { id: 11, nama: "Rifki Wahyu Dwi Saputra", nim: "24060484027", prodi: "Ilmu Keolahragaan", divisi: "Logistik", peran: "Anggota", foto: mhs11Rifki },
  { id: 12, nama: "Valencia Sindu Putra", nim: "24111784181", prodi: "Manajemen", divisi: "Logistik", peran: "Anggota", foto: mhs12Valencia },
  { id: 13, nama: "Muhammad Arfin Baihaqi", nim: "24111784182", prodi: "Manajemen", divisi: "Logistik", peran: "Koordinator", foto: mhs13Arfin },
  { id: 14, nama: "Rizma Indra Pramudya", nim: "25051204370", prodi: "Teknik Informatika", divisi: "PDD", peran: "Anggota", foto: mhs14Rizma },
  { id: 15, nama: "Izora Elverda Narulita Putri", nim: "25051204287", prodi: "Teknik Informatika", divisi: "PDD", peran: "Koordinator", foto: mhs15Izora },
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
  // ── PGSD ──────────────────────────────────────────────────────────────────
  {
    id: 1,
    nama: "Bimbingan Belajar Gratis SD–SMP",
    jurusan: "pgsd",
    kategori: "Pendidikan",
    status: "Berjalan",
    tanggal: "13 Agustus – 25 September 2026",
    lokasi: "Balai Desa Ngariboyo",
    deskripsi: "Program bimbingan belajar gratis untuk siswa SD dan SMP di Desa Ngariboyo yang dilaksanakan secara rutin untuk membantu pemahaman materi sekolah.",
    anggota: ["Adelia Putri Luthfian Dava", "Friska Virginia Vahlevi"],
    latarBelakang: "Siswa SD–SMP membutuhkan pendampingan belajar tambahan di luar jam sekolah agar prestasi akademik meningkat.",
    tujuan: "Membantu siswa memahami materi pelajaran dan meningkatkan semangat belajar anak-anak desa.",
    hasil: "Bimbel aktif berjalan dengan kelompok belajar siswa SD dan SMP.",
  },
  {
    id: 2,
    nama: "Program Literasi Membaca Anak & Pojok Baca",
    jurusan: "pgsd",
    kategori: "Pendidikan",
    status: "Berjalan",
    tanggal: "Agustus – September 2026",
    lokasi: "SD Negeri Ngariboyo & Balai Desa",
    deskripsi: "Membangun budaya gemar membaca sejak dini dengan mendirikan pojok baca dan mengadakan program storytelling interaktif.",
    anggota: ["Adelia Putri Luthfian Dava", "Friska Virginia Vahlevi"],
    latarBelakang: "Rendahnya minat baca anak-anak desa akibat terbatasnya akses buku dan aktivitas literasi.",
    tujuan: "Meningkatkan minat baca dan kemampuan literasi anak-anak Desa Ngariboyo.",
    hasil: "Pojok baca mulai disiapkan dengan koleksi buku cerita edukatif.",
  },
  {
    id: 3,
    nama: "English Fun Class Anak Desa",
    jurusan: "pgsd",
    kategori: "Pendidikan",
    status: "Perencanaan",
    tanggal: "September 2026",
    lokasi: "Balai Desa Ngariboyo",
    deskripsi: "Kelas Bahasa Inggris menyenangkan untuk anak SD dengan metode permainan dan lagu agar mudah dipahami.",
    anggota: ["Adelia Putri Luthfian Dava", "Friska Virginia Vahlevi"],
    latarBelakang: "Kemampuan Bahasa Inggris dasar sangat penting diperkenalkan sejak dini dengan metode yang ceria.",
    tujuan: "Memperkenalkan kosakata Bahasa Inggris dasar dengan cara yang menyenangkan.",
    hasil: "Dalam tahap persiapan modul dan jadwal pertemuan.",
  },
  {
    id: 4,
    nama: "Penyuluhan Edukasi & Karakter Anak",
    jurusan: "pgsd",
    kategori: "Pendidikan",
    status: "Perencanaan",
    tanggal: "September 2026",
    lokasi: "SD Negeri Ngariboyo",
    deskripsi: "Edukasi pembentukan karakter, etika bermedia, dan anti-bullying bagi siswa sekolah dasar.",
    anggota: ["Adelia Putri Luthfian Dava", "Friska Virginia Vahlevi"],
    latarBelakang: "Pentingnya penguatan karakter dan etika anak di era digital saat ini.",
    tujuan: "Menanamkan nilai moral, sopan santun, dan kebersamaan antar siswa.",
    hasil: "Dalam perencanaan koordinasi dengan pihak sekolah.",
  },

  // ── Teknik Informatika ────────────────────────────────────────────────────
  {
    id: 5,
    nama: "Pengembangan Website Resmi Desa Ngariboyo",
    jurusan: "ti",
    kategori: "Teknologi",
    status: "Berjalan",
    tanggal: "13 Agustus – 25 September 2026",
    lokasi: "Online / Desa Ngariboyo",
    deskripsi: "Pengembangan website resmi Desa Ngariboyo sebagai portal digital yang menampilkan profil desa, potensi, UMKM, galeri, dan agenda kegiatan.",
    anggota: ["Rizma Indra Pramudya", "Izora Elverda Narulita Putri", "Naufal Akbar Putra Pradana", "Putera Al Khalidi"],
    latarBelakang: "Desa Ngariboyo memerlukan kehadiran platform digital terpadu untuk mempromosikan potensi dan transparansi informasi publik.",
    tujuan: "Membangun sistem informasi dan website desa modern yang responsif, cepat, dan mudah diakses.",
    hasil: "Website resmi berhasil dibangun dan siap digunakan oleh warga dan perangkat desa.",
  },
  {
    id: 6,
    nama: "Digitalisasi Pencatatan & Katalog UMKM Desa",
    jurusan: "ti",
    kategori: "Teknologi",
    status: "Berjalan",
    tanggal: "Agustus – September 2026",
    lokasi: "Desa Ngariboyo",
    deskripsi: "Pembuatan katalog digital UMKM dan sistem pencatatan keuangan sederhana berbasis digital untuk pelaku usaha lokal.",
    anggota: ["Putera Al Khalidi", "Naufal Akbar Putra Pradana"],
    latarBelakang: "Banyak produk UMKM unggulan desa yang belum terdata secara digital dan membutuhkan sarana promosi modern.",
    tujuan: "Mendukung transformasi UMKM desa melalui pencatatan dan katalog produk digital.",
    hasil: "Tahap pendataan produk UMKM lokal dan integrasi ke website.",
  },
  {
    id: 7,
    nama: "Pelatihan Literasi Digital & Pengenalan Komputer",
    jurusan: "ti",
    kategori: "Teknologi",
    status: "Perencanaan",
    tanggal: "September 2026",
    lokasi: "Balai Desa Ngariboyo",
    deskripsi: "Pelatihan penggunaan aplikasi perkantoran, internet sehat, dan teknologi informasi untuk pemuda dan perangkat desa.",
    anggota: ["Rizma Indra Pramudya", "Izora Elverda Narulita Putri"],
    latarBelakang: "Perlunya peningkatan keterampilan teknologi informasi bagi generasi muda dan administrasi desa.",
    tujuan: "Meningkatkan kemampuan pemanfaatan teknologi digital masyarakat desa.",
    hasil: "Dalam perencanaan jadwal pelatihan.",
  },
  {
    id: 8,
    nama: "Pengelolaan Media Sosial & Dokumentasi Kreatif Desa",
    jurusan: "ti",
    kategori: "Teknologi",
    status: "Berjalan",
    tanggal: "13 Agustus – 25 September 2026",
    lokasi: "Online",
    deskripsi: "Pengelolaan media sosial resmi dan dokumentasi kreatif seluruh rangkaian kegiatan pengabdian KKNT di Desa Ngariboyo.",
    anggota: ["Izora Elverda Narulita Putri", "Rizma Indra Pramudya"],
    latarBelakang: "Publikasi kegiatan yang konsisten meningkatkan branding desa dan menjangkau masyarakat lebih luas.",
    tujuan: "Membuat konten visual, video reels, dan informasi kegiatan yang informatif dan estetik.",
    hasil: "Konten media sosial dan dokumentasi kegiatan aktif dipublikasikan berkala.",
  },

  // ── Manajemen ─────────────────────────────────────────────────────────────
  {
    id: 9,
    nama: "Pendampingan Manajemen & Pemasaran UMKM Lokal",
    jurusan: "manajemen",
    kategori: "Ekonomi",
    status: "Berjalan",
    tanggal: "Agustus – September 2026",
    lokasi: "Desa Ngariboyo",
    deskripsi: "Pendampingan pelaku usaha mikro desa dalam pembukuan, strategi penetapan harga, dan perluasan saluran pemasaran.",
    anggota: ["Iqbal Maulana Setyo Prayogi", "Ilham Khoiru Rizki", "Desi Alfi Khoiriyah", "Jovanka Hafidl Celesta"],
    latarBelakang: "Pelaku UMKM membutuhkan strategi manajemen usaha yang lebih terstruktur untuk memperluas jangkauan pasar.",
    tujuan: "Membantu UMKM desa meningkatkan efisiensi usaha dan pendapatan melalui manajemen yang baik.",
    hasil: "Identifikasi profil 15+ UMKM potensial di Desa Ngariboyo.",
  },
  {
    id: 10,
    nama: "Workshop Desain Kemasan & Branding Produk",
    jurusan: "manajemen",
    kategori: "Ekonomi",
    status: "Perencanaan",
    tanggal: "September 2026",
    lokasi: "Balai Desa Ngariboyo",
    deskripsi: "Workshop perancangan label kemasan menarik dan strategi branding agar produk lokal bernilai jual lebih tinggi.",
    anggota: ["Desi Alfi Khoiriyah", "Valencia Sindu Putra", "Muhammad Arfin Baihaqi"],
    latarBelakang: "Kemasan produk lokal masih sangat sederhana dan butuh sentuhan desain modern.",
    tujuan: "Meningkatkan daya saing produk khas Ngariboyo di pasar oleh-oleh dan modern.",
    hasil: "Dalam perencanaan contoh konsep kemasan baru.",
  },
  {
    id: 11,
    nama: "Optimalisasi Tata Kelola & Potensi BUMDes",
    jurusan: "manajemen",
    kategori: "Ekonomi",
    status: "Perencanaan",
    tanggal: "September 2026",
    lokasi: "Kantor BUMDes Ngariboyo",
    deskripsi: "Kajian dan diskusi strategi pengembangan unit usaha BUMDes agar semakin produktif dan berdaya guna.",
    anggota: ["Iqbal Maulana Setyo Prayogi", "Ilham Khoiru Rizki", "Valencia Sindu Putra"],
    latarBelakang: "BUMDes memiliki peran sentral dalam mendorong perekonomian desa secara berkelanjutan.",
    tujuan: "Merumuskan rekomendasi tata kelola dan pengembangan unit bisnis BUMDes.",
    hasil: "Dalam tahap koordinasi awal dengan pengelola BUMDes.",
  },

  // ── Ilmu Keolahragaan ─────────────────────────────────────────────────────
  {
    id: 12,
    nama: "Program Senam Sehat Bugar Warga Desa",
    jurusan: "ikor",
    kategori: "Olahraga",
    status: "Berjalan",
    tanggal: "Agustus – September 2026",
    lokasi: "Lapangan / Balai Desa Ngariboyo",
    deskripsi: "Kegiatan senam aerobik dan peregangan rutin bersama ibu-ibu, lansia, dan warga desa untuk menjaga kebugaran jasmani.",
    anggota: ["Bella Ayu Istiani", "Devita Natalysa", "Rifki Wahyu Dwi Saputra"],
    latarBelakang: "Meningkatkan kesadaran masyarakat desa akan pentingnya aktivitas fisik teratur untuk kesehatan.",
    tujuan: "Mewujudkan masyarakat Desa Ngariboyo yang sehat, bugar, dan penuh semangat kebersamaan.",
    hasil: "Senam perdana sukses terlaksana dengan antusiasme puluhan warga.",
  },
  {
    id: 13,
    nama: "Sosialisasi Gaya Hidup Aktif & Kesehatan Jasmani",
    jurusan: "ikor",
    kategori: "Kesehatan",
    status: "Perencanaan",
    tanggal: "September 2026",
    lokasi: "Balai Desa & Posyandu",
    deskripsi: "Edukasi kesehatan mengenai pencegahan penyakit tidak menular, pola makan seimbang, dan aktivitas fisik harian.",
    anggota: ["Devita Natalysa", "Bella Ayu Istiani"],
    latarBelakang: "Pola hidup sehat perlu terus disosialisasikan untuk meningkatkan derajat kesehatan warga.",
    tujuan: "Memberikan wawasan praktis hidup sehat yang mudah diterapkan sehari-hari.",
    hasil: "Materi dan leaflet kesehatan dalam proses penyusunan.",
  },
  {
    id: 14,
    nama: "Aktivitas Olahraga Gembira & Permainan Tradisional",
    jurusan: "ikor",
    kategori: "Olahraga",
    status: "Perencanaan",
    tanggal: "September 2026",
    lokasi: "Lapangan Desa Ngariboyo",
    deskripsi: "Kegiatan olahraga rekreasi dan pelestarian permainan tradisional untuk anak-anak dan pemuda desa.",
    anggota: ["Rifki Wahyu Dwi Saputra", "Muhammad Arfin Baihaqi"],
    latarBelakang: "Membangun interaksi sosial positif anak-anak di luar gawai melalui olahraga menyenangkan.",
    tujuan: "Menumbuhkan sportivitas, kegembiraan, dan keakraban antar generasi muda desa.",
    hasil: "Dalam perencanaan skema permainan dan perlengkapan.",
  },
];

// ── TIMELINE ─────────────────────────────────────────────────────────────────
export const TIMELINE = [
  {
    bulan: "13 – 31 Agustus 2026",
    fase: "Fase 1: Pembukaan, Observasi & Koordinasi",
    warna: "#14532D",
    kegiatan: [
      "Penerimaan dan pembukaan resmi KKNT di Balai Desa Ngariboyo",
      "Observasi lapangan dan pemetaan kebutuhan masyarakat",
      "Koordinasi intensif dengan perangkat desa, BUMDes, dan RT/RW",
      "Inisiasi website resmi desa dan program bimbingan belajar",
    ],
  },
  {
    bulan: "1 – 25 September 2026",
    fase: "Fase 2: Eksekusi Program & Penutupan",
    warna: "#F4B400",
    kegiatan: [
      "Pelaksanaan workshop UMKM dan bimbingan literasi digital",
      "Kegiatan senam bugar dan edukasi kesehatan warga",
      "Penyelesaian seluruh modul program kerja dan serah terima aset website",
      "Penutupan, evaluasi pengabdian, dan perpisahan resmi dengan warga",
    ],
  },
];

// ── BERITA ───────────────────────────────────────────────────────────────────
export const BERITA = [
  {
    id: 1,
    judul: "Penerimaan & Pembukaan Resmi KKNT UNESA 2026 di Desa Ngariboyo",
    tgl: "13 Agustus 2026",
    kat: "Pendidikan",
    penulis: "Iqbal Maulana Setyo Prayogi",
    isi: "Mahasiswa KKNT Universitas Negeri Surabaya resmi diterima oleh Kepala Desa dan perangkat Desa Ngariboyo, Kecamatan Ngariboyo, Kabupaten Magetan. Pertemuan pembukaan berlangsung hangat dan penuh semangat kolaborasi untuk memajukan potensi desa selama periode 13 Agustus hingga 25 September 2026.",
    img: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 2,
    judul: "Observasi Lapangan & Pemetaan Potensi Pertanian dan UMKM Desa",
    tgl: "16 Agustus 2026",
    kat: "Ekonomi",
    penulis: "Desi Alfi Khoiriyah",
    isi: "Tim mahasiswa KKNT melaksanakan survei dan observasi ke berbagai dusun di Desa Ngariboyo untuk memetakan potensi komoditas padi, jagung, serta ragam produk UMKM olahan warga. Data ini menjadi fondasi utama dalam perancangan program kerja yang tepat sasaran.",
    img: "https://images.unsplash.com/photo-1500382017968-0a04a3e16c5c?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 3,
    judul: "Inisiasi Website Resmi Desa Ngariboyo Menuju Transformasi Digital",
    tgl: "20 Agustus 2026",
    kat: "Teknologi",
    penulis: "Rizma Indra Pramudya",
    isi: "Divisi PDD bersama tim Teknik Informatika memulai pengembangan website profil Desa Ngariboyo. Website ini dirancang modern dan cepat untuk memuat informasi sejarah desa, struktur organisasi, potensi agrowisata, katalog UMKM, serta arsip kegiatan pengabdian.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 4,
    judul: "Semangat Belajar Anak-Anak Desa dalam Bimbingan Belajar Perdana",
    tgl: "24 Agustus 2026",
    kat: "Pendidikan",
    penulis: "Adelia Putri Luthfian Dava",
    isi: "Program bimbingan belajar gratis resmi dimulai di Balai Desa Ngariboyo. Puluhan siswa SD dan SMP hadir dengan antusiasme tinggi untuk belajar matematika, membaca, dan materi sekolah bersama mahasiswa PGSD.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 5,
    judul: "Senam Pagi Rutin: Warga Desa Ngariboyo Bergerak Bersama",
    tgl: "28 Agustus 2026",
    kat: "Olahraga",
    penulis: "Putera Al Khalidi",
    isi: "Antusiasme warga luar biasa di senam pagi bersama mahasiswa KKNT Ilmu Keolahragaan. Warga dari berbagai usia hadir memenuhi lapangan desa. Program ini bertujuan meningkatkan kebugaran jasmani masyarakat.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 6,
    judul: "Revitalisasi Fasilitas Desa dan Gerakan Lingkungan Bersih",
    tgl: "1 September 2026",
    kat: "Lingkungan",
    penulis: "Rifki Wahyu Dwi Saputra",
    isi: "Warga dan mahasiswa bergotong royong membersihkan area publik dan menata fasilitas umum di Desa Ngariboyo guna menciptakan lingkungan yang asri, nyaman, dan sehat.",
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
import slide1 from "../../assets/galeri/bagian 1.png";
import slide2 from "../../assets/galeri/bagian 2.png";
import slide3 from "../../assets/galeri/bagian 3.png";
import slide4 from "../../assets/galeri/bagian 4.png";
import slide5 from "../../assets/galeri/bagian 5.png";
import slide6 from "../../assets/galeri/bagian 6.png";
import slide7 from "../../assets/galeri/bagian 7.png";
import slide8 from "../../assets/galeri/bagian 8.png";
import buktiBannerProker from "../../assets/proker/bukti-proker.png";

export const GALERI = [
  { src: slide1, alt: "Suasana Lanskap & Sawah Desa Ngariboyo", kat: "Desa" },
  { src: slide2, alt: "Kegiatan Bimbingan Belajar Anak Desa", kat: "Pendidikan" },
  { src: slide3, alt: "Senam Bugar Sehat Bersama Warga", kat: "Olahraga" },
  { src: slide4, alt: "Pemberdayaan Produk Unggulan UMKM", kat: "Ekonomi" },
  { src: slide5, alt: "Gotong Royong & Kerja Bakti Lingkungan", kat: "Lingkungan" },
  { src: slide6, alt: "Edukasi Literasi & Teknologi Desa", kat: "Teknologi" },
  { src: slide7, alt: "Pemeriksaan Kesehatan di Posyandu", kat: "Kesehatan" },
  { src: slide8, alt: "Kebersamaan Mahasiswa KKNT & Warga", kat: "Kegiatan" },
  { src: buktiBannerProker, alt: "Dokumentasi & Bukti Pelaksanaan Proker", kat: "Desa" },
];
