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
    nama: "Pendampingan Pawai Karnaval Siswa TK/PAUD Se-Kecamatan Ngariboyo",
    jurusan: "pgsd",
    kategori: "Pendidikan",
    status: "Selesai",
    tanggal: "24 Agustus 2026",
    lokasi: "Lingkungan Kecamatan Ngariboyo",
    deskripsi: "Partisipasi aktif dalam pendampingan teknis barisan, pengawalan rute anak-anak TK/PAUD, serta persiapan dan pembersihan panggung kehormatan karnaval kemerdekaan.",
    anggota: ["Adelia Putri Luthfian Dava", "Friska Virginia Vahlevi"],
    latarBelakang: "Pawai karnaval anak-anak usia dini memerlukan pendampingan ekstra agar rute barisan tertib, aman, dan perayaan karnaval berjalan lancar.",
    tujuan: "Menyukseskan pawai kemerdekaan anak-anak usia dini serta melatih keberanian dan ekspresi percaya diri siswa di ruang publik.",
    hasil: "Kegiatan karnaval berjalan aman, semarak, dan tertib dengan partisipasi ratusan anak TK/PAUD se-Kecamatan Ngariboyo.",
  },
  {
    id: 2,
    nama: "Latihan Teknis dan Simulasi Perlombaan Siswa di SDN 1 Ngariboyo",
    jurusan: "pgsd",
    kategori: "Pendidikan",
    status: "Selesai",
    tanggal: "25 Agustus 2026",
    lokasi: "SDN 1 Ngariboyo & Posko KKNT",
    deskripsi: "Pelaksanaan simulasi teknis lomba bersama dewan guru dan siswa di SDN 1 Ngariboyo, serta pembungkusan puluhan paket hadiah lomba di posko.",
    anggota: ["Adelia Putri Luthfian Dava", "Friska Virginia Vahlevi"],
    latarBelakang: "Perlunya pemahaman teknis aturan lomba bagi siswa dan persiapan cermat hadiah agar perlombaan berlangsung tertib dan meriah.",
    tujuan: "Memastikan kesiapan sarana prasarana perlombaan dan memberikan pemahaman teknis yang menyenangkan kepada para siswa.",
    hasil: "Gladi simulasi perlombaan tuntas dilaksanakan dan puluhan paket kado hadiah berhasil dibungkus rapi siap dibagikan.",
  },
  {
    id: 3,
    nama: "Penyelenggaraan dan Babak Final Lomba Semarak HUT RI ke-81 di SDN 1 Ngariboyo",
    jurusan: "pgsd",
    kategori: "Pendidikan",
    status: "Selesai",
    tanggal: "26 – 27 Agustus 2026",
    lokasi: "SDN 1 Ngariboyo",
    deskripsi: "Penyelenggaraan aneka lomba kreatif dan seru yang dirancang mahasiswa dari babak penyisihan hingga babak final penyerahan hadiah bagi siswa SDN 1 Ngariboyo.",
    anggota: ["Adelia Putri Luthfian Dava", "Friska Virginia Vahlevi"],
    latarBelakang: "Momentum perayaan HUT RI ke-81 merupakan sarana edukasi yang sangat baik untuk melatih sportivitas, kekompakan, dan kreativitas siswa sekolah dasar.",
    tujuan: "Menumbuhkan jiwa kompetitif yang positif, sportivitas, dan kegembiraan belajar bersama antar siswa di lingkungan sekolah.",
    hasil: "Seluruh cabang perlombaan dan babak final sukses terlaksana dengan antusiasme luar biasa dari para siswa, guru, dan kepala sekolah.",
  },
  {
    id: 4,
    nama: "Pendampingan Pembelajaran Interaktif dan Literasi Siswa di SDN 1 Ngariboyo",
    jurusan: "pgsd",
    kategori: "Pendidikan",
    status: "Berjalan",
    tanggal: "25 Agustus – 15 September 2026",
    lokasi: "SDN 1 Ngariboyo",
    deskripsi: "Program pendampingan lanjutan di kelas bersama guru untuk membantu kegiatan belajar mengajar interaktif dan penguatan literasi siswa sekolah dasar.",
    anggota: ["Adelia Putri Luthfian Dava", "Friska Virginia Vahlevi"],
    latarBelakang: "Kerjasama erat pasca-kegiatan lomba membuka peluang pengabdian pendidikan yang lebih mendalam dalam mendukung proses belajar mengajar siswa.",
    tujuan: "Mendukung bimbingan materi pelajaran sekolah dan menciptakan suasana belajar yang aktif, ceria, dan memotivasi siswa.",
    hasil: "Program pendampingan kelas aktif berjalan sesuai jadwal kerjasama dengan dewan guru SDN 1 Ngariboyo.",
  },

  // ── Teknik Informatika ────────────────────────────────────────────────────
  {
    id: 5,
    nama: "Pengembangan Website Resmi Profil KKNT Desa Ngariboyo",
    jurusan: "ti",
    kategori: "Teknologi",
    status: "Berjalan",
    tanggal: "31 Agustus – 15 September 2026",
    lokasi: "Posko KKNT Desa Ngariboyo",
    deskripsi: "Perancangan desain antarmuka (UI/UX), draf sistem awal, arsitektur basis data, serta integrasi rekam jejak berita kegiatan pengabdian mahasiswa ke dalam website resmi.",
    anggota: ["Izora Elverda Narulita Putri", "Rizma Indra Pramudya", "Naufal Akbar Putra Pradana", "Putera Al Khalidi"],
    latarBelakang: "Kebutuhan portal informasi digital terpadu untuk mempublikasikan profil desa, potensi wilayah, dan keterbukaan rekam jejak kegiatan KKNT.",
    tujuan: "Membangun sistem informasi website yang modern, responsif, berkinerja tinggi, dan mudah diakses oleh warga serta publik luas.",
    hasil: "Draf UI/UX dan sistem basis data selesai dirancang pada 31 Agustus dan kini dalam tahap implementasi fitur interaktif penuh.",
  },
  {
    id: 6,
    nama: "Produksi dan Publikasi Konten Kreatif Media Sosial TikTok/Instagram KKN-T",
    jurusan: "ti",
    kategori: "Teknologi",
    status: "Selesai",
    tanggal: "08 – 18 Agustus 2026",
    lokasi: "Posko KKNT & Online",
    deskripsi: "Perancangan konsep, editing video transisi dinamis, kurasi audio, dan penerbitan video konten TikTok/Instagram sesi 1 dan sesi 2 kegiatan pengabdian.",
    anggota: ["Izora Elverda Narulita Putri", "Rizma Indra Pramudya"],
    latarBelakang: "Pemanfaatan media sosial berbasis video pendek yang efektif untuk menjangkau masyarakat luas dan memperkenalkan dinamika pengabdian mahasiswa.",
    tujuan: "Mempublikasikan kegiatan KKN-T secara kreatif, estetik, dan informatif melalui format video yang diminati generasi muda.",
    hasil: "Rangkaian video konten sesi 1 dan sesi 2 berhasil diproduksi, diedit, dan dipublikasikan dengan respon positif dari warganet.",
  },
  {
    id: 7,
    nama: "Pengelolaan Publikasi, Dekorasi, dan Dokumentasi (PDD) Multimedia KKN-T",
    jurusan: "ti",
    kategori: "Teknologi",
    status: "Berjalan",
    tanggal: "06 Agustus – 15 September 2026",
    lokasi: "Lingkungan Desa Ngariboyo & Online",
    deskripsi: "Pelaksanaan tugas divisi PDD meliputi peliputan fotografi, perekaman video, dekorasi panggung acara, penulisan artikel berita, dan pengarsipan berkas digital.",
    anggota: ["Izora Elverda Narulita Putri", "Rizma Indra Pramudya", "Putera Al Khalidi"],
    latarBelakang: "Pentingnya divisi PDD dalam mendokumentasikan setiap tahapan kegiatan pengabdian secara profesional sebagai bukti kegiatan dan arsip resmi.",
    tujuan: "Menghasilkan arsip visual berkualitas tinggi serta mempublikasikan seluruh rekam jejak kegiatan pengabdian mahasiswa secara berkala.",
    hasil: "Lebih dari 27 artikel dokumentasi berita terperinci dan ratusan berkas foto/video telah terorganisir rapi di sistem.",
  },

  // ── Manajemen ─────────────────────────────────────────────────────────────
  {
    id: 8,
    nama: "Perencanaan Manajemen Proker, Matriks Kegiatan, dan Evaluasi Posko KKN-T",
    jurusan: "manajemen",
    kategori: "Manajemen",
    status: "Selesai",
    tanggal: "06 – 18 Agustus 2026",
    lokasi: "Posko KKNT & Daring",
    deskripsi: "Pembentukan struktur organisasi kelompok, penyusunan matriks program kerja, alokasi anggaran bendahara, dan evaluasi progres divisi secara berkala.",
    anggota: ["Iqbal Maulana Setyo Prayogi", "Ilham Khoiru Rizki", "Desi Alfi Khoiriyah", "Valencia Sindu Putra"],
    latarBelakang: "Manajemen organisasi dan perencanaan matriks kegiatan yang matang menjadi fondasi utama keberhasilan pelaksanaan seluruh agenda di lapangan.",
    tujuan: "Menata pembagian peran anggota kelompok, jadwal kegiatan yang terstruktur, dan pengelolaan anggaran posko yang akuntabel.",
    hasil: "Struktur inti kepengurusan terbentuk, matriks kegiatan rampung, dan pemasangan banner resmi posko terlaksana pada 18 Agustus.",
  },
  {
    id: 9,
    nama: "Observasi Kunjungan dan Pemetaan Potensi Usaha BUMDes Desa Ngariboyo",
    jurusan: "manajemen",
    kategori: "Manajemen",
    status: "Selesai",
    tanggal: "23 – 28 Agustus 2026",
    lokasi: "Kantor & Unit BUMDes Desa Ngariboyo",
    deskripsi: "Pelaksanaan observasi langsung ke kantor BUMDes Desa Ngariboyo untuk memahami maksud tujuan pengembangan serta memetakan unit usaha desa.",
    anggota: ["Iqbal Maulana Setyo Prayogi", "Ilham Khoiru Rizki", "Muhammad Arfin Baihaqi", "Jovanka Hafidl Celesta"],
    latarBelakang: "BUMDes sebagai pilar perekonomian desa memerlukan pemetaan potensi unit usaha agar dapat berkembang lebih produktif dan berdaya guna.",
    tujuan: "Menghimpun data faktual mengenai tata kelola dan potensi unit usaha BUMDes sebagai dasar masukan strategis pengembangan ekonomi desa.",
    hasil: "Kegiatan kunjungan observasi pada 23 Agustus berhasil terlaksana dan terdata profil awal unit usaha BUMDes Ngariboyo.",
  },
  {
    id: 10,
    nama: "Observasi Mendalam Administrasi dan Profil Kelembagaan Kantor Desa Ngariboyo",
    jurusan: "manajemen",
    kategori: "Manajemen",
    status: "Berjalan",
    tanggal: "28 Agustus – 12 September 2026",
    lokasi: "Kantor Balai Desa Ngariboyo",
    deskripsi: "Observasi mendalam dan audiensi bersama perangkat desa terkait tata kelola administrasi kependudukan dan penyusunan profil resmi Desa Ngariboyo.",
    anggota: ["Iqbal Maulana Setyo Prayogi", "Desi Alfi Khoiriyah", "Jovanka Hafidl Celesta", "Muhammad Arfin Baihaqi"],
    latarBelakang: "Kebutuhan analisis administrasi tata kelola pemerintahan desa yang akurat guna mendukung kelengkapan profil desa terstandarisasi.",
    tujuan: "Mempelajari dan membantu penyusunan administrasi dan profil desa yang benar sesuai arahan perangkat dan standar pemerintahan desa.",
    hasil: "Sesi observasi mendalam dimulai pada 28 Agustus di kantor desa dan kini dalam proses penyempurnaan data profil kelembagaan desa.",
  },

  // ── Ilmu Keolahragaan ─────────────────────────────────────────────────────
  {
    id: 11,
    nama: "Pelatihan Koreografi dan Gladi Gerak Joget Senam Jalan Sehat Warga",
    jurusan: "ikor",
    kategori: "Olahraga",
    status: "Selesai",
    tanggal: "19 – 21 Agustus 2026",
    lokasi: "Lingkungan Desa Ngariboyo",
    deskripsi: "Pemanduan gladi kotor malam hari dan gladi bersih pematangan formasi joget senam jalan sehat bersama warga dan ibu-ibu setempat.",
    anggota: ["Bella Ayu Istiani", "Devita Natalysa", "Rifki Wahyu Dwi Saputra"],
    latarBelakang: "Mempersiapkan penampilan flashmob senam dan joget jalan sehat agar seragam, kompak, dan menyenangkan bagi seluruh kalangan warga.",
    tujuan: "Melatih keselarasan gerak senam, penentuan lagu berirama ceria, serta membangun antusiasme kebersamaan warga sebelum hari jalan sehat.",
    hasil: "Gladi kotor pada 19 Agustus dan gladi bersih pada 21 Agustus berhasil mematangkan kekompakan formasi gerakan warga.",
  },
  {
    id: 12,
    nama: "Penyelenggaraan dan Pemanduan Jalan Sehat Lingkungan RT 02/RW 02 Desa Ngariboyo",
    jurusan: "ikor",
    kategori: "Olahraga",
    status: "Selesai",
    tanggal: "23 Agustus 2026",
    lokasi: "Lingkungan RT 02 / RW 02 Desa Ngariboyo",
    deskripsi: "Pemanduan senam pembuka, pengawalan rute, dan joget bersama warga RT 02/RW 02 selama acara jalan sehat berlangsung dari awal hingga akhir acara.",
    anggota: ["Bella Ayu Istiani", "Devita Natalysa", "Rifki Wahyu Dwi Saputra"],
    latarBelakang: "Semarak peringatan kemerdekaan di tingkat RT yang memerlukan pemandu senam dan pengawalan acara agar berjalan tertib dan penuh kegembiraan.",
    tujuan: "Mendorong partisipasi warga dalam berolahraga bersama secara gembira serta mempererat kerukunan antarwarga lingkungan RT 02/RW 02.",
    hasil: "Acara jalan sehat RT 02/RW 02 berjalan sangat meriah dengan partisipasi penuh warga yang berjoget dan berolahraga bersama.",
  },
  {
    id: 13,
    nama: "Partisipasi dan Pendampingan Jalan Sehat Massal Semarak HUT RI Kecamatan Ngariboyo",
    jurusan: "ikor",
    kategori: "Olahraga",
    status: "Selesai",
    tanggal: "29 Agustus 2026",
    lokasi: "Lingkungan Kecamatan Ngariboyo",
    deskripsi: "Keikutsertaan wajib seluruh anggota kelompok mahasiswa KKN-T dalam menyemarakkan kegiatan jalan sehat akbar se-Kecamatan Ngariboyo bersama warga.",
    anggota: ["Rifki Wahyu Dwi Saputra", "Devita Natalysa", "Bella Ayu Istiani"],
    latarBelakang: "Partisipasi aktif mahasiswa dalam perhelatan olahraga massal tingkat kecamatan untuk membangun kebugaran dan keakraban lintas desa.",
    tujuan: "Mendukung kesuksesan jalan sehat kecamatan serta menggalang semangat kebersamaan dan kesehatan jasmani masyarakat.",
    hasil: "Seluruh mahasiswa KKN-T sukses menyelesaikan rute jalan sehat kecamatan dengan tertib dan membaur harmonis bersama masyarakat.",
  },
  {
    id: 14,
    nama: "Partisipasi dan Pengawalan Olahraga Jalan Sehat Bersama Warga Desa Ngariboyo",
    jurusan: "ikor",
    kategori: "Olahraga",
    status: "Berjalan",
    tanggal: "30 Agustus – 15 September 2026",
    lokasi: "Lingkungan Desa Ngariboyo",
    deskripsi: "Partisipasi seluruh anggota kelompok dalam jalan sehat desa serta pembudayaan kegiatan olahraga kebugaran jasmani rutin bersama warga desa.",
    anggota: ["Bella Ayu Istiani", "Devita Natalysa", "Rifki Wahyu Dwi Saputra"],
    latarBelakang: "Menjaga momentum semangat berolahraga warga desa pasca-jalan sehat 30 Agustus agar kebiasaan fisik bugar tetap berkelanjutan.",
    tujuan: "Mewujudkan masyarakat Desa Ngariboyo yang gemar berolahraga teratur dan sehat bugar melalui agenda olahraga mingguan.",
    hasil: "Jalan sehat desa pada 30 Agustus sukses besar dan kegiatan olahraga bersama warga kini berlanjut secara berkala.",
  },
];

// ── TIMELINE ─────────────────────────────────────────────────────────────────
export const TIMELINE = [
  {
    bulan: "06 – 31 Agustus 2026",
    fase: "Fase 1: Koordinasi, Semarak Kemerdekaan & Observasi",
    warna: "#14532D",
    kegiatan: [
      "Pertemuan awal, survei posko, dan pembukaan resmi KKNT di Kecamatan Ngariboyo",
      "Penyelenggaraan lomba HUT RI di SDN 1 Ngariboyo dan karnaval TK/PAUD",
      "Partisipasi jalan sehat RT 02/RW 02, Kecamatan, dan Desa Ngariboyo",
      "Observasi kunjungan potensi BUMDes dan observasi mendalam Kantor Desa",
    ],
  },
  {
    bulan: "01 – 15 September 2026",
    fase: "Fase 2: Pengembangan Sistem & Evaluasi Program",
    warna: "#F4B400",
    kegiatan: [
      "Penyelesaian dan implementasi platform Website Resmi KKNT Desa Ngariboyo",
      "Tindak lanjut observasi administrasi kelembagaan Kantor Desa",
      "Kelanjutan program pendampingan pendidikan dan olahraga kebugaran warga",
      "Evaluasi pengabdian, penuntasan arsip PDD, dan perpisahan resmi dengan warga",
    ],
  },
];

// ── BERITA ───────────────────────────────────────────────────────────────────
export const BERITA = [
  {
    id: 1,
    judul: "Berdiskusi Pertama dan Kedua Secara Online Melalui Google Meet",
    tgl: "06 Agustus 2026",
    kat: "Umum",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Seluruh anggota kelompok mahasiswa KKN-T mengadakan diskusi daring pertama dan kedua via Google Meet untuk pembentukan struktur pengurus kelompok, perumusan ide program kerja, serta penentuan jadwal survei lapangan.",
    kontenLengkap: [
      "Mengawali tahapan persiapan KKN-T, seluruh anggota kelompok mahasiswa melaksanakan diskusi daring pertama dan kedua melalui platform Google Meet guna mengonsolidasikan rencana awal pengabdian.",
      "Sesi diskusi pertama diisi dengan perkenalan antaranggota kelompok, musyawarah pembentukan struktur inti kelompok (Koordinator Desa, Sekretaris, Bendahara, dan divisi lainnya), serta perumusan ide-ide awal program kerja dan kelengkapan berkas penting dalam suasana yang terbuka terhadap masukan.",
      "Setelah melalui pertimbangan mendalam dan dukungan dari seluruh rekan kelompok, penulis resmi dipercaya untuk mengemban amanah di divisi Publikasi, Dekorasi, dan Dokumentasi (PDD).",
      "Pada hari yang sama sekitar pukul 19.15 WIB, dilanjutkan sesi Google Meet kedua yang menghasilkan kesepakatan penting, di antaranya penentuan tanggal pertemuan luring serta penjadwalan waktu keberangkatan untuk survei langsung ke Desa Ngariboyo.",
    ],
    img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 2,
    judul: "Pelaksanaan Survey pertama Penempatan Posko untuk kegiatan KKN-T",
    tgl: "07 Agustus 2026",
    kat: "Umum",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Sebanyak 15 mahasiswa angkatan 2024 melaksanakan survei perdana penempatan posko wajib untuk kegiatan KKN-T secara langsung di Desa Ngariboyo. Kegiatan ini meliputi penyampaian tujuan kepada perangkat desa, pencarian lokasi, pelaporan dokumentasi, hingga diskusi pemecahan kendala teknis.",
    kontenLengkap: [
      "Seluruh anggota kelompok mahasiswa Kuliah Kerja Nyata Tematik (KKN-T) angkatan 2024 yang berjumlah 15 orang melaksanakan survei perdana penempatan posko. Kegiatan yang bersifat wajib ini mengharuskan para mahasiswa untuk turun langsung meninjau lokasi pengabdian di Desa Ngariboyo.",
      "Langkah awal kegiatan survei ini diisi dengan silaturahmi kepada perangkat Desa Ngariboyo guna menyampaikan maksud serta tujuan dari pelaksanaan program KKN-T. Selain itu, tim juga menerapkan arahan dari panitia mengenai tata cara yang tepat dalam mencari dan menyeleksi lokasi posko yang ideal.",
      "Fokus lain dari peninjauan ini adalah pengambilan data lapangan secara komprehensif. Para mahasiswa bertugas mengumpulkan laporan berupa dokumentasi foto-foto kandidat lokasi penempatan posko, serta melengkapi berbagai pemberkasan penting yang disyaratkan oleh panitia KKN-T.",
      "Agenda survei lapangan ini kemudian ditutup dengan sesi diskusi dan evaluasi internal. Sesi tersebut dimanfaatkan sebagai ruang untuk tanya jawab dan mencari solusi bersama guna mengatasi berbagai kendala yang ditemukan mahasiswa saat melakukan peninjauan di lapangan.",
    ],
    img: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 3,
    judul: "Pertemuan Perdana dan Koordinasi Awal Kegiatan KKN-T",
    tgl: "07 Agustus 2026",
    kat: "Umum",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Seluruh anggota kelompok KKN-T Ngariboyo melaksanakan pertemuan perdana dan koordinasi awal secara luring. Agenda utama meliputi pembahasan ide program kerja, penyusunan matriks kegiatan, serta pembagian tugas divisi masing-masing anggota.",
    kontenLengkap: [
      "Seluruh anggota kelompok mahasiswa Kuliah Kerja Nyata Tematik (KKN-T) Desa Ngariboyo mengadakan pertemuan perdana dan koordinasi awal. Kegiatan yang berlangsung secara luring selama 180 menit ini menjadi langkah konsolidasi pertama sebelum tim terjun ke lokasi pengabdian.",
      "Agenda utama pertemuan dipimpin langsung oleh ketua kelompok dengan fokus pada penyampaian rencana dan arahan strategis. Fokus pembahasan mencakup penggalian ide-ide program kerja (proker) yang relevan dengan kebutuhan desa, serta edukasi mengenai tata cara penyusunan matriks kegiatan yang baik dan terstruktur.",
      "Selain mematangkan konsep program kerja, pertemuan ini juga diisi dengan pembentukan struktur organisasi dan pembagian tugas pokok setiap anggota. Distribusi peran ini dilakukan untuk memastikan kelancaran eksekusi program di lapangan sekaligus penyelesaian berbagai pemberkasan administrasi yang penting.",
      "Dalam proses pembagian tugas tersebut, penulis secara resmi dipercaya untuk mengemban amanah di divisi Publikasi, Dekorasi, dan Dokumentasi (PDD). Tanggung jawab utama dari peran ini adalah mengelola dan mendokumentasikan seluruh rangkaian kegiatan kelompok KKN-T selama masa pengabdian di Desa Ngariboyo.",
    ],
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 4,
    judul: "Membuat dan Mengedit Video Konten TikTok Kegiatan KKN-T (Sesi 1)",
    tgl: "08 Agustus 2026",
    kat: "Teknologi",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Divisi PDD melaksanakan penyusunan konsep dan editing video konten TikTok perdana untuk mempublikasikan rangkaian awal kegiatan pengabdian KKN-T Desa Ngariboyo.",
    kontenLengkap: [
      "Sebagai bagian dari tanggung jawab divisi Publikasi, Dekorasi, dan Dokumentasi (PDD), penulis melaksanakan proses perancangan dan editing konten video kreatif untuk platform media sosial TikTok.",
      "Tahapan kegiatan dimulai dari perumusan ide tema konten, penentuan alur visual (storyboard), serta teknik transisi video yang dinamis dan sedang tren di media sosial.",
      "Hasil dari sesi editing ini berupa draf video awal yang mengabadikan aktivitas persiapan mahasiswa KKN-T serta keseruan interaksi awal dengan lingkungan desa.",
      "Draf video kemudian dievaluasi bersama rekan kelompok sebelum dipublikasikan secara resmi sebagai materi promosi dan dokumentasi digital kelompok.",
    ],
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 5,
    judul: "Pelaksanaan Survey Bagian Kedua Penempatan Posko untuk Kegiatan KKN-T",
    tgl: "09 Agustus 2026",
    kat: "Umum",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Perwakilan mahasiswa KKN-T melaksanakan survei lapangan lanjutan di Desa Ngariboyo untuk kepastian sewa lokasi posko dengan pemilik rumah, kelengkapan perizinan tempat, dan menetapkan 2 opsi posko utama.",
    kontenLengkap: [
      "Perwakilan kelompok mahasiswa KKN-T angkatan 2024 kembali turun langsung ke lokasi Desa Ngariboyo untuk melaksanakan agenda wajib survei tahap kedua penempatan posko kegiatan.",
      "Peninjauan lanjutan ini difokuskan pada pengambilan keputusan serta kesepakatan bersama pemilik rumah terkait kepastian penyewaan tempat tinggal selama masa pengabdian KKN-T.",
      "Tim mahasiswa juga memastikan pemenuhan perizinan tempat tinggal yang benar, penyusunan surat persetujuan menempati posko, serta kelengkapan berkas administratif penting lainnya yang disyaratkan panitia.",
      "Dari hasil survei bagian kedua ini, tim mahasiswa berhasil menetapkan 2 opsi lokasi posko yang layak, nyaman, dan strategis untuk mendukung seluruh rangkaian kegiatan KKN-T di Desa Ngariboyo.",
    ],
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 6,
    judul: "Melaksanakan Kegiatan Bersama Warga Ngariboyo Donor Darah, Lomba Kecamatan Ngariboyo, dan Gladi Bersih Acara Pelepasan",
    tgl: "12 Agustus 2026",
    kat: "Umum",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Perwakilan mahasiswa KKN-T Desa Ngariboyo berkolaborasi dalam aksi donor darah dan perlombaan tingkat kecamatan, serta seluruh anggota mengikuti gladi bersih persiapan upacara pelepasan mahasiswa KKN-T se-Kecamatan Ngariboyo.",
    kontenLengkap: [
      "Perwakilan mahasiswa KKN-T Desa Ngariboyo berpartisipasi aktif dalam serangkaian kegiatan kemasyarakatan, mulai dari kepesertaan pada aksi donor darah bersama warga hingga turut memeriahkan perlombaan di tingkat Kecamatan Ngariboyo.",
      "Selain itu, seluruh anggota KKN-T se-Kecamatan Ngariboyo diwajibkan untuk turun langsung mengikuti gladi bersih persiapan upacara pelepasan mahasiswa KKN-T 2026 agar prosesi pembukaan nantinya dapat berlangsung tertib dan khidmat.",
      "Dalam rangkaian acara tersebut, mahasiswa juga bergotong royong memberikan bantuan tenaga untuk mempersiapkan berbagai kelengkapan logistik dan sarana prasarana yang dibutuhkan panitia dan masyarakat.",
      "Kolaborasi ini mempererat hubungan kekeluargaan dan semangat kebersamaan antara mahasiswa KKN-T dengan warga dan aparatur Kecamatan Ngariboyo.",
    ],
    img: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 7,
    judul: "Melaksanakan Kegiatan Pembukaan dan Pelepasan KKN-T Serta Diskusi dengan DPL Semester Gasal 2026/2027",
    tgl: "13 Agustus 2026",
    kat: "Pendidikan",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Seluruh mahasiswa KKN-T mengikuti upacara pembukaan dan pelepasan resmi di Kecamatan Ngariboyo, dilanjutkan dengan sesi pembekalan tata tertib desa serta diskusi progres dan kerangka kegiatan bersama DPL Ibu Delia.",
    kontenLengkap: [
      "Seluruh mahasiswa KKN-T Semester Gasal 2026/2027 mengikuti kegiatan wajib pembukaan dan pelepasan resmi yang diselenggarakan langsung di Kecamatan Ngariboyo.",
      "Rangkaian acara diawali dengan sambutan dari panitia dan pemangku kepentingan kecamatan, disertai pengarahan mendalam terkait etika, tata tertib, dan pedoman hidup bermasyarakat selama menjalankan masa pengabdian di desa.",
      "Agenda penting berikutnya adalah sesi pembekalan teknis bagi seluruh peserta KKN-T untuk memastikan setiap program kerja berjalan terarah dan sesuai dengan kebutuhan riil masyarakat.",
      "Pertemuan ini kemudian dilanjutkan dengan sesi diskusi khusus bersama Dosen Pembimbing Lapangan (DPL), Ibu Delia. Dalam kesempatan ini, tim memaparkan lokasi posko terpilih, melaporkan progres awal yang telah dicapai, serta merumuskan kerangka strategis kegiatan pengabdian yang akan dijalankan ke depannya.",
    ],
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 8,
    judul: "Melaksanakan Kegiatan Lomba RT 02/RW 02 dan Membantu Memasang Terop",
    tgl: "14 Agustus 2026",
    kat: "Umum",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Seluruh anggota kelompok mahasiswa KKN-T melaksanakan kegiatan lomba di lingkungan warga RT 02/RW 02 serta membantu pemasangan tenda terop secara gotong royong demi kelancaran persiapan acara warga.",
    kontenLengkap: [
      "Seluruh anggota kelompok mahasiswa Kuliah Kerja Nyata Tematik (KKN-T) melaksanakan kegiatan wajib berupa pendampingan perlombaan di lingkungan warga RT 02/RW 02 Desa Ngariboyo serta membantu proses pemasangan terop (tenda acara).",
      "Kegiatan ini diawali dengan menerima pengarahan teknis dari panitia warga setempat mengenai alur dan susunan perlombaan yang akan diselenggarakan bagi masyarakat sekitar.",
      "Selain itu, para mahasiswa turut menyumbangkan tenaga dalam proses pendirian tenda terop secara tepat dan aman, sekaligus menata area perlombaan agar siap digunakan warga dengan nyaman.",
      "Sesi gotong royong ini menjadi wujud nyata kebersamaan dan kepedulian mahasiswa KKN-T dalam membaur dan membantu persiapan yang dibutuhkan warga sebelum rangkaian acara perlombaan berlangsung.",
    ],
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 9,
    judul: "Membantu Pelaksanaan Lomba RT 02/RW 02 serta Silaturahmi ke Kediaman Ketua RT",
    tgl: "15 Agustus 2026",
    kat: "Umum",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Mahasiswa KKN-T mendampingi jalannya perlombaan anak-anak RT 02/RW 02, ikut memeriahkan lomba kemerdekaan, serta melakukan kunjungan silaturahmi ke kediaman Ketua RT setempat.",
    kontenLengkap: [
      "Seluruh anggota kelompok mahasiswa KKN-T melaksanakan kegiatan wajib berupa pendampingan berbagai perlombaan 17 Agustusan di lingkungan RT 02/RW 02 Desa Ngariboyo.",
      "Para mahasiswa aktif membantu memandu dan mengarahkan adik-adik peserta lomba, menjaga sportivitas arena tanding, bahkan turut serta memeriahkan perlombaan untuk membangun keakraban dengan warga.",
      "Di samping menyukseskan perlombaan, tim mahasiswa juga menyempatkan waktu untuk melakukan kunjungan silaturahmi langsung ke rumah kediaman Ketua RT 02.",
      "Kunjungan ramah tamah ini memperkuat koordinasi antara mahasiswa dan pengurus RT setempat dalam mendukung seluruh program KKN-T yang akan berjalan di lingkungan RT 02/RW 02.",
    ],
    img: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 10,
    judul: "Mengikuti dan Membantu Acara Malam Tirakatan Peringatan 17 Agustus di Desa Ngariboyo",
    tgl: "16 Agustus 2026",
    kat: "Umum",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Mahasiswa KKN-T berbaur bersama masyarakat dalam malam tasyakuran tirakatan kemerdekaan, meliputi doa bersama, renungan suci, pentas seni, dan penyerahan hadiah pemenang lomba 17 Agustus.",
    kontenLengkap: [
      "Seluruh mahasiswa KKN-T turut hadir dan berkontribusi langsung dalam menyukseskan acara Malam Tirakatan 17 Agustusan yang diselenggarakan di lingkungan warga Desa Ngariboyo.",
      "Rangkaian malam tasyakuran diisi dengan doa bersama, renungan nilai-nilai perjuangan kemerdekaan, persembahan pentas seni warga, serta penganugerahan hadiah bagi para pemenang lomba yang telah digelar pada 15 Agustus 2026.",
      "Mahasiswa ikut membantu kelancaran teknis acara dengan mengatur penyerahan piala dan hadiah, menata tempat duduk warga, hingga memastikan jalannya tasyakuran berlangsung lancar dan tertib.",
      "Penulis bersama tim PDD mendokumentasikan momen keakraban dan haru ini sebagai arsip berharga pengabdian mahasiswa di tengah-tengah masyarakat Desa Ngariboyo.",
    ],
    img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 11,
    judul: "Mengikuti Upacara Penaikan dan Penurunan Bendera 17 Agustus di Lapangan Mojopurno",
    tgl: "17 Agustus 2026",
    kat: "Umum",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Seluruh mahasiswa KKN-T mengikuti upacara khidmat pengibaran dan penurunan bendera peringatan HUT Kemerdekaan RI di Lapangan Mojopurno, serta meliput penampilan atraksi pelajar dan Paskibraka.",
    kontenLengkap: [
      "Dalam rangka memperingati Hari Ulang Tahun ke-81 Kemerdekaan Republik Indonesia, seluruh anggota kelompok mahasiswa KKN-T menghadiri upacara bendera di Lapangan Mojopurno dari pagi hingga sore hari.",
      "Mahasiswa mengikuti seluruh rangkaian prosesi penaikan bendera pusaka secara khidmat, menyaksikan atraksi formasi dari pasukan pengibar bendera (Paskibraka), serta menikmati penampilan seni dari siswa-siswi SD, SMP, hingga SMA setempat.",
      "Sebagai perwakilan divisi PDD, penulis secara aktif mengabadikan setiap momen bersejarah ini ke dalam rekaman lensa foto dan video berkualitas tinggi.",
      "Seluruh dokumentasi visual ini kemudian diarsipkan ke Google Drive kegiatan harian kelompok serta diunggah secara berkala ke media sosial Instagram dan TikTok resmi KKN-T Ngariboyo.",
    ],
    img: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 12,
    judul: "Diskusi Rencana Program Kerja dan Pemasangan Banner Resmi di Posko KKN-T",
    tgl: "18 Agustus 2026",
    kat: "Umum",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Seluruh anggota kelompok mahasiswa berdiskusi mematangkan progres program kerja serta bergotong royong memasang banner identitas resmi di posko KKN-T Ngariboyo.",
    kontenLengkap: [
      "Seluruh anggota kelompok mahasiswa KKN-T berkumpul di posko untuk melaksanakan rapat koordinasi intensif yang dipimpin oleh ketua kelompok.",
      "Diskusi berfokus pada evaluasi capaian progres masing-masing divisi, penajaman target program kerja unggulan, serta mitigasi kendala teknis yang dihadapi di lapangan.",
      "Seusai rapat kerja, seluruh mahasiswa secara serentak bergotong royong melakukan pemasangan banner identitas resmi KKN-T di depan posko pengabdian.",
      "Pemasangan banner ini menjadi penanda resmi keberadaan posko mahasiswa KKN-T UNESA sekaligus memudahkan warga sekitar dalam berkoordinasi dan berkunjung.",
    ],
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 13,
    judul: "Membuat dan Mengedit Video Konten TikTok Kegiatan KKN-T (Sesi 2)",
    tgl: "18 Agustus 2026",
    kat: "Teknologi",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Melanjutkan publikasi digital kegiatan, divisi PDD mengedit dan memproduksi video konten TikTok sesi kedua yang mendokumentasikan dinamika pengabdian mahasiswa di lapangan.",
    kontenLengkap: [
      "Penulis selaku penanggung jawab PDD kembali melaksanakan sesi editing video lanjutan untuk akun TikTok resmi kelompok KKN-T Desa Ngariboyo.",
      "Fokus konten pada sesi kedua ini menyajikan kompilasi momen-momen gotong royong, persiapan perayaan kemerdekaan, serta kehangatan canda tawa mahasiswa bersama warga desa.",
      "Proses kreatif meliputi pemilihan backsound yang pas, penambahan teks keterangan (caption), serta penyempurnaan pewarnaan video (color grading) agar visual tampak estetik dan menarik minat audiens muda.",
      "Konten video yang dihasilkan berhasil dipublikasikan dan mendapatkan respon positif, memperluas eksposur positif tentang Desa Ngariboyo di media sosial.",
    ],
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 14,
    judul: "Gladi Kotor Latihan Joget Bersama Merayakan Jalan Sehat di Desa Ngariboyo",
    tgl: "19 Agustus 2026",
    kat: "Umum",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Seluruh mahasiswi KKN-T melaksanakan gladi kotor latihan joget bersama warga pada malam hari guna mematangkan formasi, pemilihan lagu, dan kekompakan gerakan senam jalan sehat.",
    kontenLengkap: [
      "Seluruh anggota perempuan KKN-T Desa Ngariboyo mengikuti agenda wajib latihan gladi kotor joget bersama warga yang dilaksanakan langsung di area desa pada malam hari.",
      "Latihan bersama ini difokuskan pada penentuan formasi tarian, kurasi pemilihan lagu berirama ceria, serta penyelarasan gerakan joget yang seru dan mudah diikuti oleh warga segala usia.",
      "Partisipasi aktif mahasiswi disambut antusias oleh warga dan ibu-ibu setempat yang ikut berlatih dengan penuh semangat.",
      "Gladi kotor ini menjadi persiapan matang agar penampilan flashmob joget saat hari pelaksanaan jalan sehat dapat berlangsung semarak dan memukau.",
    ],
    img: "https://images.unsplash.com/photo-1545224144-b38cd309ef69?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 15,
    judul: "Membantu Warga RT 02 / RW 02 Desa Ngariboyo Membungkus Kado Hadiah Jalan Sehat",
    tgl: "20 Agustus 2026",
    kat: "Umum",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Seluruh mahasiswi kelompok KKN-T Ngariboyo bergotong royong bersama warga RT 02 / RW 02 membantu proses pembungkusan ratusan kado dan doorprize untuk hadiah jalan sehat.",
    kontenLengkap: [
      "Seluruh anggota perempuan kelompok KKN-T Desa Ngariboyo turun langsung ke lingkungan warga RT 02 / RW 02 untuk membantu proses persiapan hadiah jalan sehat.",
      "Kegiatan dimulai dengan pembagian tugas kelompok dan pemilahan aneka doorprize, dilanjutkan dengan teknik membungkus kado yang rapi, menarik, dan efisien sesuai arahan ibu-ibu warga setempat.",
      "Bantuan tenaga dari para mahasiswi sukses mempercepat proses pembungkusan puluhan paket kado dan hadiah utama jalan sehat.",
      "Suasana kekeluargaan dan canda tawa mewarnai kegiatan gotong royong ini, semakin mempererat hubungan antara mahasiswi KKN-T dan masyarakat Desa Ngariboyo.",
    ],
    img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 16,
    judul: "Melaksanakan Gladi Bersih Joget Jalan Sehat dan Kunjungan Observasi Lomba HUT SDN 1 Ngariboyo",
    tgl: "21 Agustus 2026",
    kat: "Umum",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Perwakilan mahasiswa KKN-T mengikuti gladi bersih kekompakan formasi joget untuk jalan sehat serta melakukan kunjungan observasi guna membantu pelaksanaan lomba perayaan HUT di SDN 1 Ngariboyo.",
    kontenLengkap: [
      "Perwakilan anggota kelompok KKN-T Desa Ngariboyo melaksanakan dua agenda penting yang bertempat di lingkungan desa dan gedung SDN 1 Ngariboyo.",
      "Agenda pertama diisi dengan gladi bersih joget bersama warga guna mematangkan kekompakan formasi dan keselarasan gerakan untuk memeriahkan jalan sehat warga.",
      "Selanjutnya, tim melakukan observasi kunjungan ke SDN 1 Ngariboyo untuk membantu menyusun dan mematangkan konsep aneka perlombaan dalam rangka peringatan HUT sekolah bersama para guru dan siswa.",
      "Selaku tim PDD, penulis menjalankan tugas peliputan dengan mendokumentasikan seluruh rangkaian kegiatan melalui foto dan video berkualitas untuk laporan resmi dan publikasi.",
    ],
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 17,
    judul: "Melakukan Dekor Panggung di RT 02 / RW 02 untuk Acara Jalan Sehat Memperingati HUT 81 Tahun Indonesia",
    tgl: "22 Agustus 2026",
    kat: "Umum",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Seluruh anggota kelompok mahasiswa KKN-T melaksanakan gotong royong dekorasi panggung bersama warga RT 02 / RW 02 dalam rangka mempersiapkan acara jalan sehat peringatan HUT Kemerdekaan RI.",
    kontenLengkap: [
      "Seluruh anggota kelompok mahasiswa Kuliah Kerja Nyata Tematik (KKN-T) melaksanakan kegiatan wajib gotong royong bersama warga RT 02 / RW 02 Desa Ngariboyo untuk mendekorasi panggung utama acara jalan sehat.",
      "Kegiatan diawali dengan penyampaian konsep hiasan panggung dari panitia warga setempat, dilanjutkan dengan penataan tata letak ornamen dekorasi secara tepat, rapi, dan meriah.",
      "Sebagai perwakilan divisi Publikasi, Dekorasi, dan Dokumentasi (PDD), penulis turut berkontribusi aktif memberikan bantuan tenaga untuk menghias lokasi panggung serta mengambil dokumentasi foto proses jalannya kegiatan untuk kelengkapan arsip dan pemberkasan penting.",
      "Kebersamaan antara warga dan mahasiswa terjalin sangat hangat hingga seluruh dekorasi panggung berhasil diselesaikan dengan baik dan siap digunakan.",
    ],
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 18,
    judul: "Melaksanakan Kegiatan Jalan Sehat Bersama Warga RT 02/RW 02 Desa Ngariboyo dan Observasi Kunjungan ke BUMDes",
    tgl: "23 Agustus 2026",
    kat: "Manajemen",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Mahasiswa KKN-T mengikuti jalan sehat bersama warga RT 02/RW 02 dengan penuh antusias serta melaksanakan observasi kunjungan ke BUMDes Desa Ngariboyo untuk memetakan potensi unit usaha desa.",
    kontenLengkap: [
      "Mahasiswa Kuliah Kerja Nyata Tematik (KKN-T) berbaur akrab bersama seluruh warga RT 02 / RW 02 Desa Ngariboyo dalam rangka memeriahkan agenda jalan sehat kerukunan warga.",
      "Suasana jalan sehat berlangsung sangat semarak, di mana tim mahasiswa turut memandu serta mengikuti keceriaan senam dan joget bersama warga sepanjang rute kegiatan.",
      "Selain mengikuti jalan sehat, agenda dilanjutkan dengan pelaksanaan kunjungan observasi ke Badan Usaha Milik Desa (BUMDes) Ngariboyo guna menggali informasi serta potensi pengembangan unit usaha ekonomi desa.",
      "Selaku tim Publikasi, Dekorasi, dan Dokumentasi (PDD), penulis mengabadikan setiap momen dari awal pembukaan, kebersamaan di sepanjang jalan, hingga akhir observasi ke dalam arsip foto dan rekaman video.",
    ],
    img: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 19,
    judul: "Kegiatan Perayaan Karnaval HUT RI Tingkat TK/PAUD Se-Kecamatan Ngariboyo dan Persiapan Lomba di SDN 1 Ngariboyo",
    tgl: "24 Agustus 2026",
    kat: "Pendidikan",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Mahasiswa KKN-T berpartisipasi menyukseskan karnaval anak TK/PAUD se-Kecamatan Ngariboyo dalam rangka HUT RI ke-81, dilanjutkan persiapan perlombaan di SDN 1 Ngariboyo.",
    kontenLengkap: [
      "Kelompok mahasiswa KKN-T terjun membantu kelancaran kegiatan perayaan karnaval kemerdekaan untuk anak-anak TK dan PAUD se-Kecamatan Ngariboyo yang berlangsung dengan sangat meriah dan penuh warna.",
      "Tim mahasiswa membantu penataan barisan peserta cilik, pendampingan sepanjang rute parade karnaval, serta penataan dan pembersihan area panggung kehormatan sebelum dan sesudah acara selesai.",
      "Setelah agenda karnaval selesai, tim bergegas menuju SDN 1 Ngariboyo guna berkoordinasi dan menyiapkan sarana prasarana perlombaan sekolah yang akan diadakan esok hari.",
      "Sebagai perwakilan divisi PDD, penulis mendokumentasikan tingkah lucu anak-anak peserta karnaval, kekompakan barisan, serta kerja bakti persiapan panggung ke dalam jepretan foto dan video.",
    ],
    img: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 20,
    judul: "Melaksanakan Latihan Lomba di SDN 1 Ngariboyo dan Membungkus Hadiah Bersama",
    tgl: "25 Agustus 2026",
    kat: "Pendidikan",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Seluruh anggota kelompok KKN-T melaksanakan gladi latihan teknis perlombaan di SDN 1 Ngariboyo serta melakukan pembungkusan aneka hadiah menarik di posko pengabdian.",
    kontenLengkap: [
      "Menjelang puncak perlombaan sekolah, seluruh mahasiswa KKN-T melaksanakan gladi simulasi dan latihan teknis perlombaan bersama para guru dan siswa di SDN 1 Ngariboyo.",
      "Latihan ini bertujuan agar aturan dan sistem perlombaan dapat dipahami dengan baik oleh adik-adik siswa sehingga acara kompetisi dapat berjalan tertib dan menyenangkan.",
      "Kegiatan kemudian berlanjut di posko pengabdian dengan agenda gotong royong membungkus puluhan kado dan paket hadiah menarik bagi para pemenang lomba nantinya.",
      "Penulis dari divisi PDD bertugas mendokumentasikan momen latihan siswa di sekolah serta suasana kebersamaan mahasiswa saat membungkus hadiah sebagai bahan arsip dan laporan kegiatan.",
    ],
    img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 21,
    judul: "Pelaksanaan Perlombaan Merayakan HUT RI ke-81 Bersama Siswa SDN 1 Ngariboyo",
    tgl: "26 Agustus 2026",
    kat: "Pendidikan",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Mahasiswa KKN-T sukses menyelenggarakan serangkaian lomba semarak perayaan HUT ke-81 Kemerdekaan RI yang disambut antusias oleh para siswa SDN 1 Ngariboyo.",
    kontenLengkap: [
      "Kegiatan wajib mahasiswa KKN-T terlaksana dengan penuh keceriaan di lingkungan SDN 1 Ngariboyo dalam rangka memeriahkan peringatan Hari Kemerdekaan Republik Indonesia ke-81.",
      "Aneka ragam perlombaan seru dan edukatif yang telah dirancang sebelumnya oleh mahasiswa berlangsung sengit dan disambut sorak gembira para guru maupun seluruh murid sekolah.",
      "Para mahasiswa bertindak sebagai penanggung jawab lomba, pemandu teknis lapangan, dan juri yang menjunjung tinggi nilai sportivitas serta kegembiraan anak-anak.",
      "Selaku tim PDD, penulis meliput setiap momen kompetisi dari babak penyisihan, tawa ekspresif siswa, hingga interaksi hangat antara guru dan mahasiswa dalam bentuk foto serta video.",
    ],
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 22,
    judul: "Pelaksanaan Babak Final Lomba HUT RI ke-81 dan Pengumuman Pemenang di SDN 1 Ngariboyo",
    tgl: "27 Agustus 2026",
    kat: "Pendidikan",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Puncak kemeriahan perayaan HUT ke-81 RI di SDN 1 Ngariboyo ditutup dengan babak final perlombaan dan pengumuman para juara yang penuh rasa bangga dan kebersamaan.",
    kontenLengkap: [
      "Seluruh anggota kelompok mahasiswa KKN-T mengawal pelaksanaan babak final aneka perlombaan menyambut HUT RI ke-81 di halaman sekolah SDN 1 Ngariboyo.",
      "Persaingan di babak penentuan berjalan seru dengan dukungan meriah dari rekan-rekan sekelas dan arahan langsung dari dewan guru pendamping.",
      "Acara diakhiri dengan pengumuman pemenang lomba serta penyerahan piala dan paket hadiah yang disambut bangga oleh para siswa berprestasi.",
      "Penulis menjalankan tugas PDD dengan mengabadikan potret bahagia para pemenang saat menerima hadiah serta foto bersama keluarga besar SDN 1 Ngariboyo dan mahasiswa KKN-T.",
    ],
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 23,
    judul: "Pelepasan Panitia 17 Agustus dan Observasi Mendalam Administrasi Profil di Kantor Desa Ngariboyo",
    tgl: "28 Agustus 2026",
    kat: "Umum",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Mahasiswa KKN-T menghadiri acara pelepasan panitia peringatan 17 Agustus serta melakukan observasi mendalam mengenai tata kelola administrasi dan profil desa di Balai Desa Ngariboyo.",
    kontenLengkap: [
      "Bertempat di Kantor Desa Ngariboyo, mahasiswa KKN-T bersama jajaran perangkat desa dan tokoh masyarakat melangsungkan agenda pelepasan panitia peringatan HUT Kemerdekaan RI.",
      "Acara diisi dengan penyampaian apresiasi dan rasa terima kasih atas kerja keras seluruh panitia dan relawan yang telah menyukseskan rangkaian semarak 17 Agustusan di Desa Ngariboyo.",
      "Kegiatan dilanjutkan dengan sesi observasi mendalam dan audiensi bersama perangkat desa untuk menghimpun data profil desa, struktur kelembagaan, serta data kependudukan terkini.",
      "Sebagai tim PDD, penulis mendokumentasikan jalannya pertemuan resmi, sesi ramah tamah, dan proses telaah berkas data di balai desa untuk keperluan laporan pengabdian.",
    ],
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 24,
    judul: "Mengikuti dan Mendokumentasikan Semarak Jalan Sehat Tingkat Kecamatan Ngariboyo",
    tgl: "29 Agustus 2026",
    kat: "Olahraga",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Seluruh mahasiswa KKN-T berpartisipasi aktif dalam kegiatan jalan sehat massal tingkat Kecamatan Ngariboyo untuk memupuk kebugaran dan mempererat tali silaturahmi antardesa.",
    kontenLengkap: [
      "Sebagai wujud kebersamaan dengan masyarakat di tingkat kecamatan, seluruh mahasiswa kelompok KKN-T Desa Ngariboyo mengikuti agenda akbar jalan sehat Kecamatan Ngariboyo.",
      "Kegiatan jalan sehat diikuti oleh ribuan peserta dari berbagai unsur masyarakat, instansi pemerintah kecamatan, sekolah, dan kelompok pemuda.",
      "Rute jalan sehat menyusuri jalanan utama kecamatan dengan panorama asri pedesaan, disusul dengan hiburan musik dan pembagian aneka doorprize spektakuler di garis finish.",
      "Penulis yang mengemban tugas PDD aktif mendokumentasikan jalannya jalan sehat dari garis start hingga panggung hiburan, mengabadikan kemeriahan warga serta kekompakan kelompok KKN-T.",
    ],
    img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 25,
    judul: "Partisipasi dan Peliputan Acara Jalan Sehat Warga di Lingkungan Desa Ngariboyo",
    tgl: "30 Agustus 2026",
    kat: "Olahraga",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Mahasiswa KKN-T turut berpartisipasi meramaikan agenda jalan sehat warga Desa Ngariboyo serta melakukan dokumentasi komprehensif seluruh rangkaian kemeriahan acara.",
    kontenLengkap: [
      "Kelompok mahasiswa KKN-T kembali terjun membaur bersama masyarakat dalam perhelatan jalan sehat yang digelar khusus di lingkungan Desa Ngariboyo.",
      "Sejak pagi hari, antusiasme warga dari anak-anak hingga para lansia tampak sangat tinggi mengikuti setiap tahapan rute yang telah ditentukan panitia.",
      "Mahasiswa turut mengawal barisan warga, membantu kelancaran teknis pos-pos rute, dan menyemangati peserta di sepanjang perjalanan.",
      "Selaku tim PDD, penulis mengabadikan momen-momen hangat kebersamaan warga, ekspresi kegembiraan peraih undian hadiah, serta foto bersama panitia sebagai arsip kegiatan resmi.",
    ],
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 26,
    judul: "Mengerjakan Proyek Pengembangan Website Profil dan Informasi KKN-T Desa Ngariboyo",
    tgl: "31 Agustus 2026",
    kat: "Teknologi",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Tim mahasiswa KKN-T berkolaborasi mengerjakan pengembangan sistem website resmi desa dan portal informasi KKN-T Ngariboyo di posko pengabdian.",
    kontenLengkap: [
      "Bertempat di posko mahasiswa, tim KKN-T fokus melaksanakan perancangan dan pengembangan proyek sistem website profil Desa Ngariboyo.",
      "Agenda diawali dengan perancangan antarmuka (UI/UX), pemetaan struktur menu, penyusunan database informasi potensi desa, serta integrasi modul dokumentasi kegiatan mahasiswa.",
      "Sesi diskusi dan tinjauan teknis dilakukan secara berkala antar anggota tim guna memastikan website interaktif, ramah pengguna, dan mampu menyajikan data desa secara akurat dan informatif.",
      "Penulis turut membantu penyusunan konten narasi dan materi visual yang akan ditampilkan, sekaligus mendokumentasikan progres perancangan sistem informasi desa ini.",
    ],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 27,
    judul: "Mendokumentasikan Gotong Royong Pencopotan Lampu Kelap-Kelip Hiasan 17 Agustusan",
    tgl: "01 September 2026",
    kat: "Umum",
    penulis: "Izora Elverda Narulita Putri",
    isi: "Mahasiswa KKN-T bersama warga Desa Ngariboyo bergotong royong mencopot instalasi lampu hias 17 Agustus serta mendokumentasikan momen kerja bakti pasca-kegiatan kemerdekaan.",
    kontenLengkap: [
      "Memasuki awal bulan September, mahasiswa KKN-T bersama warga sekitar melaksanakan aksi gotong royong pembersihan dan pencopotan instalasi lampu kelap-kelip hiasan peringatan kemerdekaan.",
      "Kerja bakti diawali dengan pengarahan teknis keselamatan agar proses pembongkaran instalasi kabel dan pelepasan lampu di sepanjang jalan desa berjalan lancar dan aman.",
      "Warga dan mahasiswa bahu-membahu menurunkan, menggulung kabel secara teratur, dan merapikan ornamen hiasan untuk disimpan kembali dengan baik.",
      "Sebagai divisi PDD, penulis mendokumentasikan seluruh rangkaian gotong royong mulai dari pencopotan lampu hingga lokasi desa kembali rapi dan bersih seperti sedia kala.",
    ],
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=380&fit=crop&auto=format",
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
  { src: slide1, alt: "Survey Di Kantor Desa Ngariboyo", kat: "Desa" },
  { src: slide2, alt: "Pembukaan & Pelaksanaa KKN-T Universitas Negeri Surabaya", kat: "Desa" },
  { src: slide3, alt: "Melaksanakan Jalan Sehat Memperingati 17 Agustusan RT 02/RW 02 Desa Ngariboyo", kat: "Olahraga" },
  { src: slide4, alt: "Mengikuti dan Membantu Jalannya Acara Jalan Santai di Kecamatan Ngariboyo", kat: "Olahraga" },
  { src: slide5, alt: "Mengikuti Jalan Sehat Memperingati 17 Agustusan RT 02/RW 02 Desa Ngariboyo", kat: "Olahraga" },
  { src: slide6, alt: "Melaksanakan Senam Sehat dan Lomba 17 Agustusan di SDN 1 Ngariboyo ", kat: "Olahraga dan Pendidikan" },
  { src: slide7, alt: "Mengikuti dan Meramaikan Upacara 17 Agustusan di Lapangan Mojopurno", kat: "Upacara Kemerdekaan" },
  { src: slide8, alt: "Membantu dan Mengikuti Acara Malam Tirakatan", kat: "Kegiatan" },
  { src: buktiBannerProker, alt: "Dokumentasi & Bukti Pelaksanaan Proker", kat: "Desa" },
];
