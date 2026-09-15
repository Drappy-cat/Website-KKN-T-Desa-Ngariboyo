# 🏡 Folder Aset Suasana Desa Ngariboyo

Folder ini digunakan untuk menaruh foto dan gambar suasana desa yang ditampilkan pada bagian **Suasana Desa** di halaman **Profil Desa** (`/desa`) dan dokumentasi.

---

## 📁 Daftar File & Keterangan Suasana

| No | Nama File Default | Keterangan Suasana Desa | Rekomendasi Foto |
|:---|:---|:---|:---|
| 1 | `suasana-1.svg` / `.jpg` | **Lanskap Persawahan & Gunung Lawu** | Foto panorama sawah hijau dengan latar belakang Gunung Lawu atau kabut pagi |
| 2 | `suasana-2.svg` / `.jpg` | **Balai Desa & Kantor Pemerintahan** | Foto tampak depan Balai Desa Ngariboyo atau kegiatan pelayanan warga |
| 3 | `suasana-3.svg` / `.jpg` | **Pemukiman & Lingkungan Warga** | Foto deretan rumah warga yang asri, pekarangan, atau suasana sore hari di pemukiman |
| 4 | `suasana-4.svg` / `.jpg` | **Wisata Embung Pendem** | Foto danau/embung, gazebo tepi air, atau suasana rekreasi santai warga |
| 5 | `suasana-5.svg` / `.jpg` | **Gotong Royong & Kegiatan Warga** | Momen kebersamaan kerja bakti, posyandu, poskamling, atau senam |
| 6 | `suasana-6.svg` / `.jpg` | **Jalan & Sudut Asri Pedesaan** | Foto jalan desa beraspal bersih yang diapit pepohonan rindang atau persawahan |

---

## 💡 Cara Menaruh / Mengganti Foto Asli

1. Siapkan foto dokumentasi suasana desa asli Anda (format `.jpg`, `.jpeg`, `.png`, atau `.webp`).
2. Masukkan file foto ke dalam folder ini (`src/assets/suasana-desa/`).
3. Anda bisa:
   - **Opsi A (Paling Mudah)**: Beri nama file sesuai daftar di atas (misalnya `suasana-1.jpg`, `suasana-2.jpg`, dst).
   - **Opsi B**: Buka file [index.ts](file:///d:/kknt/Website-KKN-T-Desa-Ngariboyo/src/assets/suasana-desa/index.ts) lalu sesuaikan nama file pada baris `import`:
     ```ts
     import suasana1 from "./suasana-1.jpg";
     import suasana2 from "./suasana-2.jpg";
     // ... dst
     ```

## 📐 Rekomendasi Ukuran Gambar
- **Rasio**: 16:9 atau 3:2 (Lanskap / Horizontal)
- **Resolusi**: Minimal `800 x 533 px` atau `1200 x 800 px`
- **Ukuran File**: Disarankan di bawah `500 KB` per foto (dapat dikompresi di [tinypng.com](https://tinypng.com)) agar website tetap memuat dengan cepat dan lancar.
