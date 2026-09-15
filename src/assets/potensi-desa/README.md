# 🌾 Folder Aset Potensi Desa Ngariboyo

Folder ini digunakan untuk menaruh foto dan gambar potensi Desa Ngariboyo yang ditampilkan pada halaman **Profil Desa** (`/desa#potensi`).

---

## 📁 Daftar File & Keterangan Potensi

| No | Nama File Default | Potensi Desa | Rekomendasi Foto |
|:---|:---|:---|:---|
| 1 | `pertanian.svg` / `.jpg` | **Pertanian Padi & Jagung** | Lanskap persawahan hijau/menguning atau ladang jagung di Desa Ngariboyo |
| 2 | `wisata-air-embung.svg` / `.jpg` | **Wisata Air & Waduk (Embung Pendem)** | Foto Embung Pendem dengan pemandangan air, kano, atau gazebo pinggir embung |
| 3 | `wisata-religi.svg` / `.jpg` | **Destinasi Wisata Religi & Sejarah** | Situs Makam Kuno Ngariboyo atau cagar budaya bersejarah |
| 4 | `umkm-anyaman.svg` / `.jpg` | **UMKM Anyaman Tas & Produk Lokal** | Pengrajin anyaman tas di Dukuh Jetis atau produk tas anyaman siap jual |
| 5 | `sumber-daya-air.svg` / `.jpg` | **Sumber Daya Air & Irigasi** | Saluran irigasi pertanian yang jernih atau sungai desa |
| 6 | `budaya-tradisi.svg` / `.jpg` | **Budaya & Tradisi** | Kegiatan tradisi adat Jawa Mataraman, kirab, atau acara Bersih Desa |

---

## 💡 Cara Menaruh / Mengganti Foto Asli

1. Siapkan foto asli Anda (format `.jpg`, `.jpeg`, `.png`, atau `.webp`).
2. Masukkan file foto ke dalam folder ini (`src/assets/potensi-desa/`).
3. Anda bisa:
   - **Opsi A (Paling Mudah)**: Simpan dengan nama file yang sama (misal `pertanian.jpg`, `wisata-air-embung.jpg`, dll).
   - **Opsi B**: Buka file [index.ts](file:///d:/kknt/Website-KKN-T-Desa-Ngariboyo/src/assets/potensi-desa/index.ts) lalu sesuaikan nama file pada baris `import`:
     ```ts
     import imgPertanian from "./pertanian.jpg";
     import imgWisataAir from "./wisata-air-embung.jpg";
     // ... dst
     ```

## 📐 Rekomendasi Ukuran Gambar
- **Rasio**: 16:9 atau 3:2 (Lanskap / Horizontal)
- **Resolusi**: Minimal `800 x 533 px` atau `1200 x 800 px`
- **Ukuran File**: Disarankan di bawah `500 KB` per foto (dapat dikompresi di [tinypng.com](https://tinypng.com)) agar website tetap memuat dengan sangat cepat.
