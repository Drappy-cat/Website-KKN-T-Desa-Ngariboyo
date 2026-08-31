import os
import sys
from pathlib import Path

# Ensure UTF-8 stdout on Windows
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except AttributeError:
        pass

import numpy as np
from PIL import Image
from collections import deque
from convert_to_svg import convert_to_svg

def remove_white_background(
    image_path: Path,
    output_path: Path = None,
    threshold: int = 240,
    feather: int = 20,
    floodfill_only: bool = True
):
    """
    Menghapus background putih dari gambar dengan teknik Connected Floodfill & Anti-Aliasing.
    - threshold: Nilai batas kecerahan (0-255) yang dianggap putih (default 240).
    - feather: Rentang kehalusan tepi agar tidak bergerigi/pixelated (default 20).
    - floodfill_only: Hanya menghapus putih yang terhubung ke tepi luar (menjaga elemen putih di dalam logo).
    """
    if output_path is None:
        output_path = image_path

    try:
        img = Image.open(image_path).convert("RGBA")
        width, height = img.size
        arr = np.array(img, dtype=np.float32)

        # Hitung kecerahan (grayscale / minimum color component)
        # Warna putih: R > threshold, G > threshold, B > threshold
        r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
        min_rgb = np.minimum(np.minimum(r, g), b)
        
        # Masker awal untuk piksel yang tergolong putih/sangat terang
        is_white = (min_rgb >= (threshold - feather)) & (a > 0)

        if floodfill_only:
            # Lakukan BFS Floodfill dari tepi luar (border)
            bg_mask = np.zeros((height, width), dtype=bool)
            visited = np.zeros((height, width), dtype=bool)
            queue = deque()

            # Masukkan semua piksel di 4 sisi tepi (border) yang berwarna putih
            for x in range(width):
                if is_white[0, x]:
                    queue.append((0, x))
                    visited[0, x] = True
                if is_white[height - 1, x]:
                    queue.append((height - 1, x))
                    visited[height - 1, x] = True

            for y in range(height):
                if is_white[y, 0]:
                    queue.append((y, 0))
                    visited[y, 0] = True
                if is_white[y, width - 1]:
                    queue.append((y, width - 1))
                    visited[y, width - 1] = True

            # BFS traversal
            while queue:
                cy, cx = queue.popleft()
                bg_mask[cy, cx] = True

                for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                    ny, nx = cy + dy, cx + dx
                    if 0 <= ny < height and 0 <= nx < width:
                        if not visited[ny, nx] and is_white[ny, nx]:
                            visited[ny, nx] = True
                            queue.append((ny, nx))
        else:
            bg_mask = is_white

        # Hitung Alpha dengan Anti-Aliasing halus pada area background yang terdeteksi
        # Jika min_rgb >= threshold -> Alpha = 0 (100% transparan)
        # Jika min_rgb antara (threshold - feather) dan threshold -> Alpha gradual
        low_t = threshold - feather
        alpha_scale = np.clip((threshold - min_rgb) / max(feather, 1), 0.0, 1.0)
        
        # Terapkan alpha baru hanya pada area background yang terhubung
        new_alpha = np.where(bg_mask, a * alpha_scale, a)
        arr[:, :, 3] = np.clip(new_alpha, 0, 255)

        # Defringing: kurangi bias putih pada piksel semi-transparan di tepi
        semi_mask = bg_mask & (new_alpha > 0) & (new_alpha < 255)
        if np.any(semi_mask):
            alpha_norm = (new_alpha[semi_mask] / 255.0)[:, np.newaxis]
            for c in range(3):
                arr[semi_mask, c] = np.clip((arr[semi_mask, c] - 255 * (1.0 - alpha_norm[:, 0])) / np.maximum(alpha_norm[:, 0], 0.1), 0, 255)

        # Simpan kembali sebagai PNG RGBA
        result = Image.fromarray(arr.astype(np.uint8), "RGBA")
        result.save(output_path, "PNG")

        # Konversi juga ke SVG yang sesuai
        svg_path = output_path.with_suffix(".svg")
        convert_to_svg(output_path, svg_path)

        print(f"[OK] Background putih berhasil dihapus: {image_path.name} -> PNG & SVG Transparan")
        return True
    except Exception as e:
        print(f"[ERROR] Gagal memproses {image_path.name}: {e}")
        return False

def process_directory(dir_path: Path):
    extensions = {".png", ".jpg", ".jpeg"}
    files = []
    for ext in extensions:
        files.extend(dir_path.rglob(f"*{ext}"))

    unique_files = sorted(list(set(files)))
    if not unique_files:
        print(f"Tidak ada gambar di {dir_path}")
        return

    print(f"Memproses {len(unique_files)} file di {dir_path.name}...")
    for file in unique_files:
        remove_white_background(file)

if __name__ == "__main__":
    root = Path(__file__).resolve().parent.parent
    logos_dir = root / "src" / "assets" / "logos"

    if len(sys.argv) > 1:
        target = Path(sys.argv[1])
        if target.is_dir():
            process_directory(target)
        elif target.is_file():
            remove_white_background(target)
    else:
        print("Memulai proses penghapusan background putih pada semua logo di src/assets/logos/...\n")
        
        target_dirs = [
            logos_dir / "desa",
            logos_dir / "jurusan",
            logos_dir / "kknt"
        ]

        for folder in target_dirs:
            if folder.exists():
                print(f"Direktori: {folder.relative_to(root)}")
                process_directory(folder)
                print()

        print("Selesai: Seluruh logo telah bersih dari background putih dan versi SVG-nya otomatis diperbarui!")
