import cardIqbal from "../../assets/id-card/iqbal maulana_kordes_Manajemen.svg";
import cardAdelia from "../../assets/id-card/Adelia Putri Luthfian Dava_sekretaris_PGSD.svg";
import cardFriska from "../../assets/id-card/Friska Virginia Vahlevi_sekretaris_PGSD.svg";
import cardIlham from "../../assets/id-card/ilham khoiru rizki_bendahara_manajemen.svg";
import cardDevita from "../../assets/id-card/Devita Natalysa_acara_Ilmu keolahragaan.svg";
import cardPutera from "../../assets/id-card/Putera Al Khalidi_acara_Teknik Informatika.svg";
import cardNaufal from "../../assets/id-card/Naufal Akbar Putra Pradana_acara_Teknik Informatika.svg";
import cardDesi from "../../assets/id-card/Desi Alfi Khoiriyah_acara_manajemen.svg";
import cardBella from "../../assets/id-card/Bella Ayu Istiani_humas_imu keolahragaan.svg";
import cardJovanka from "../../assets/id-card/Jovanka Hafidl Celesta_humas_manajemen.svg";
import cardRifki from "../../assets/id-card/Rifki Wahyu Dwi Saputra_perkap_ilmu keolahragaan.svg";
import cardValencia from "../../assets/id-card/Valencia Sindu Putra_perkap_manajemen.svg";
import cardArfin from "../../assets/id-card/Muhammad Arfin Baihaqi_perkap_manajemen.svg";
import cardRizma from "../../assets/id-card/rizma indra pramudya_Pubdedok_Teknik Informatika.svg";
import cardIzora from "../../assets/id-card/Izora Elverda Narulita Putri_Pubdedok_Teknik Informatika.svg";

export interface IdCardMember {
  id: number;
  nama: string;
  nim: string;
  divisi: string;
  divisiKey: "inti" | "acara" | "humas" | "logistik" | "pdd";
  divisiLabel: string;
  prodi: string;
  fakultas: string;
  email: string;
  jurusanKey: "pgsd" | "ti" | "manajemen" | "ikor";
  warnaDivisi: string;
  svg: string;
}

export const ID_CARD_MEMBERS: IdCardMember[] = [
  // ── 1. KORDES / PIMPINAN INTI ───────────────────────────────────────────
  {
    id: 1,
    nama: "Iqbal Maulana Setyo Prayogi",
    nim: "24111784051",
    divisi: "Koordinator Desa (KORDES)",
    divisiKey: "inti",
    divisiLabel: "Pimpinan Inti",
    prodi: "Manajemen",
    fakultas: "PSDKU",
    email: "24111784051@mhs.unesa.ac.id",
    jurusanKey: "manajemen",
    warnaDivisi: "#1E5E2F",
    svg: cardIqbal,
  },
  {
    id: 2,
    nama: "Adelia Putri Luthfian Dava",
    nim: "24111744136",
    divisi: "Sekretaris",
    divisiKey: "inti",
    divisiLabel: "Pimpinan Inti",
    prodi: "PGSD",
    fakultas: "PSDKU",
    email: "24111744136@mhs.unesa.ac.id",
    jurusanKey: "pgsd",
    warnaDivisi: "#1E5E2F",
    svg: cardAdelia,
  },
  {
    id: 3,
    nama: "Friska Virginia Vahlevi",
    nim: "24111744138",
    divisi: "Sekretaris",
    divisiKey: "inti",
    divisiLabel: "Pimpinan Inti",
    prodi: "PGSD",
    fakultas: "PSDKU",
    email: "24111744138@mhs.unesa.ac.id",
    jurusanKey: "pgsd",
    warnaDivisi: "#1E5E2F",
    svg: cardFriska,
  },
  {
    id: 4,
    nama: "Ilham Khoiru Rizki",
    nim: "24111784052",
    divisi: "Bendahara",
    divisiKey: "inti",
    divisiLabel: "Pimpinan Inti",
    prodi: "Manajemen",
    fakultas: "PSDKU",
    email: "24111784052@mhs.unesa.ac.id",
    jurusanKey: "manajemen",
    warnaDivisi: "#1E5E2F",
    svg: cardIlham,
  },

  // ── 2. DIVISI ACARA ───────────────────────────────────────────────────────
  {
    id: 5,
    nama: "Devita Natalysa",
    nim: "24060484050",
    divisi: "Divisi Acara",
    divisiKey: "acara",
    divisiLabel: "Acara",
    prodi: "Ilmu Keolahragaan",
    fakultas: "FIKK",
    email: "24060484050@mhs.unesa.ac.id",
    jurusanKey: "ikor",
    warnaDivisi: "#1565C0",
    svg: cardDevita,
  },
  {
    id: 6,
    nama: "Putera Al Khalidi",
    nim: "25051204362",
    divisi: "Divisi Acara",
    divisiKey: "acara",
    divisiLabel: "Acara",
    prodi: "Teknik Informatika",
    fakultas: "Teknik",
    email: "25051204362@mhs.unesa.ac.id",
    jurusanKey: "ti",
    warnaDivisi: "#1565C0",
    svg: cardPutera,
  },
  {
    id: 7,
    nama: "Naufal Akbar Putra Pradana",
    nim: "25051204322",
    divisi: "Divisi Acara",
    divisiKey: "acara",
    divisiLabel: "Acara",
    prodi: "Teknik Informatika",
    fakultas: "Teknik",
    email: "25051204322@mhs.unesa.ac.id",
    jurusanKey: "ti",
    warnaDivisi: "#1565C0",
    svg: cardNaufal,
  },
  {
    id: 8,
    nama: "Desi Alfi Khoiriyah",
    nim: "24111784114",
    divisi: "Divisi Acara",
    divisiKey: "acara",
    divisiLabel: "Acara",
    prodi: "Manajemen",
    fakultas: "PSDKU",
    email: "24111784114@mhs.unesa.ac.id",
    jurusanKey: "manajemen",
    warnaDivisi: "#1565C0",
    svg: cardDesi,
  },

  // ── 3. DIVISI HUMAS ───────────────────────────────────────────────────────
  {
    id: 9,
    nama: "Bella Ayu Istiani",
    nim: "24060484058",
    divisi: "Divisi Humas",
    divisiKey: "humas",
    divisiLabel: "Humas",
    prodi: "Ilmu Keolahragaan",
    fakultas: "FIKK",
    email: "24060484058@mhs.unesa.ac.id",
    jurusanKey: "ikor",
    warnaDivisi: "#E65100",
    svg: cardBella,
  },
  {
    id: 10,
    nama: "Jovanka Hafidl Celesta",
    nim: "24111784049",
    divisi: "Divisi Humas",
    divisiKey: "humas",
    divisiLabel: "Humas",
    prodi: "Manajemen",
    fakultas: "PSDKU",
    email: "24111784049@mhs.unesa.ac.id",
    jurusanKey: "manajemen",
    warnaDivisi: "#E65100",
    svg: cardJovanka,
  },

  // ── 4. DIVISI LOGISTIK ────────────────────────────────────────────────────
  {
    id: 11,
    nama: "Rifki Wahyu Dwi Saputra",
    nim: "24060484027",
    divisi: "Divisi Logistik",
    divisiKey: "logistik",
    divisiLabel: "Logistik",
    prodi: "Ilmu Keolahragaan",
    fakultas: "FIKK",
    email: "24060484027@mhs.unesa.ac.id",
    jurusanKey: "ikor",
    warnaDivisi: "#14532D",
    svg: cardRifki,
  },
  {
    id: 12,
    nama: "Valencia Sindu Putra",
    nim: "24111784181",
    divisi: "Divisi Logistik",
    divisiKey: "logistik",
    divisiLabel: "Logistik",
    prodi: "Manajemen",
    fakultas: "PSDKU",
    email: "24111784181@mhs.unesa.ac.id",
    jurusanKey: "manajemen",
    warnaDivisi: "#14532D",
    svg: cardValencia,
  },
  {
    id: 13,
    nama: "Muhammad Arfin Baihaqi",
    nim: "24111784182",
    divisi: "Divisi Logistik",
    divisiKey: "logistik",
    divisiLabel: "Logistik",
    prodi: "Manajemen",
    fakultas: "PSDKU",
    email: "24111784182@mhs.unesa.ac.id",
    jurusanKey: "manajemen",
    warnaDivisi: "#14532D",
    svg: cardArfin,
  },

  // ── 5. DIVISI PDD (PUBLIKASI, DOKUMENTASI & DESAIN) ───────────────────────
  {
    id: 14,
    nama: "Rizma Indra Pramudya",
    nim: "25051204370",
    divisi: "Divisi PDD",
    divisiKey: "pdd",
    divisiLabel: "PDD",
    prodi: "Teknik Informatika",
    fakultas: "Teknik",
    email: "25051204370@mhs.unesa.ac.id",
    jurusanKey: "ti",
    warnaDivisi: "#6A1B9A",
    svg: cardRizma,
  },
  {
    id: 15,
    nama: "Izora Elverda Narulita Putri",
    nim: "25051204287",
    divisi: "Divisi PDD",
    divisiKey: "pdd",
    divisiLabel: "PDD",
    prodi: "Teknik Informatika",
    fakultas: "Teknik",
    email: "25051204287@mhs.unesa.ac.id",
    jurusanKey: "ti",
    warnaDivisi: "#6A1B9A",
    svg: cardIzora,
  },
];

export const DIVISI_TABS = [
  { id: "semua", label: "Semua Anggota", count: 15, color: "#14532D" },
  { id: "inti", label: "Pimpinan Inti", count: 4, color: "#1E5E2F" },
  { id: "acara", label: "Divisi Acara", count: 4, color: "#1565C0" },
  { id: "humas", label: "Divisi Humas", count: 2, color: "#E65100" },
  { id: "logistik", label: "Divisi Logistik", count: 3, color: "#14532D" },
  { id: "pdd", label: "Divisi PDD", count: 2, color: "#6A1B9A" },
];
