import card6Svg from "../../assets/id-card/idcard/6.svg";
import card7Svg from "../../assets/id-card/idcard/7.svg";
import card8Svg from "../../assets/id-card/idcard/8.svg";
import card9Svg from "../../assets/id-card/idcard/9.svg";
import card10Svg from "../../assets/id-card/idcard/10.svg";
import card11Svg from "../../assets/id-card/idcard/11.svg";
import card12Svg from "../../assets/id-card/idcard/12.svg";
import card13Svg from "../../assets/id-card/idcard/13.svg";
import card14Svg from "../../assets/id-card/idcard/14.svg";
import card15Svg from "../../assets/id-card/idcard/15.svg";
import card16Svg from "../../assets/id-card/idcard/16.svg";
import card17Svg from "../../assets/id-card/idcard/17.svg";
import card18Svg from "../../assets/id-card/idcard/18.svg";
import card19Svg from "../../assets/id-card/idcard/19.svg";
import card20Svg from "../../assets/id-card/idcard/20.svg";

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
    svg: card6Svg,
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
    svg: card7Svg,
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
    svg: card8Svg,
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
    svg: card9Svg,
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
    svg: card10Svg,
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
    svg: card11Svg,
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
    svg: card12Svg,
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
    svg: card13Svg,
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
    svg: card14Svg,
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
    svg: card15Svg,
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
    svg: card16Svg,
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
    svg: card17Svg,
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
    svg: card18Svg,
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
    svg: card19Svg,
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
    svg: card20Svg,
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
