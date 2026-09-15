// ── ASET GAMBAR POTENSI DESA NGARIBOYO ──────────────────────────────────────
//
// CARA MENGGANTI DENGAN FOTO ASLI:
// 1. Simpan foto asli Anda di folder ini (src/assets/potensi-desa/)
// 2. Anda bisa memakai format .jpg, .jpeg, .png, atau .webp
// 3. Ubah import di bawah sesuai dengan nama & ekstensi file foto baru Anda
// ─────────────────────────────────────────────────────────────────────────────

// 1. Pertanian Padi & Jagung
import imgPertanian from "./pertanian.jpeg";

// 2. Pasar Tradisional Desa Ngariboyo
import imgPasarDesa from "./pasar desa ngariboyo.jpg";

// 3. Wisata Religi & Makam Kuno
import imgWisataReligi from "./wisata-religi.jpeg";

// 4. UMKM Anyaman Tas Dukuh Jetis
import imgUmkmAnyaman from "./umkm-anyaman.jpeg";

// 5. Sumber Daya Air & Irigasi
import imgSumberDayaAir from "./sumber-daya-air.jpeg";

// 6. Budaya & Tradisi (Bersih Desa)
import imgBudayaTradisi from "./genteng.jpeg";

// 7. Industri Genteng Lokal
import imgGenteng from "./genteng.jpeg";

export {
  imgPertanian,
  imgPasarDesa,
  imgPasarDesa as imgWisataAir,
  imgWisataReligi,
  imgUmkmAnyaman,
  imgSumberDayaAir,
  imgBudayaTradisi,
  imgGenteng,
};

export default {
  pertanian: imgPertanian,
  pasarDesa: imgPasarDesa,
  wisataAir: imgPasarDesa,
  wisataReligi: imgWisataReligi,
  umkmAnyaman: imgUmkmAnyaman,
  sumberDayaAir: imgSumberDayaAir,
  budayaTradisi: imgBudayaTradisi,
  genteng: imgGenteng,
};
