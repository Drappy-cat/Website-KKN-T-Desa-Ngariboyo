import os
import sys
import base64
from pathlib import Path
from PIL import Image

def get_image_info(image_path: Path):
    with Image.open(image_path) as img:
        width, height = img.size
        img_format = (img.format or "").lower()
        if img_format in ["jpg", "jpeg"]:
            mime_type = "image/jpeg"
        elif img_format == "png":
            mime_type = "image/png"
        elif img_format == "webp":
            mime_type = "image/webp"
        elif img_format == "gif":
            mime_type = "image/gif"
        else:
            mime_type = f"image/{img_format}"
        return width, height, mime_type

def convert_to_svg(src_path: Path, dest_path: Path = None):
    if not src_path.exists():
        print(f"Error: File tidak ditemukan: {src_path}")
        return False

    if dest_path is None:
        dest_path = src_path.with_suffix(".svg")

    try:
        width, height, mime_type = get_image_info(src_path)
        with open(src_path, "rb") as f:
            encoded = base64.b64encode(f.read()).decode("utf-8")
        
        data_uri = f"data:{mime_type};base64,{encoded}"

        # Dual href + xlink:href for universal SVG 1.1 + SVG 2 + IDE preview compatibility
        svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 {width} {height}">
  <image x="0" y="0" width="{width}" height="{height}" href="{data_uri}" xlink:href="{data_uri}"/>
</svg>
"""
        with open(dest_path, "w", encoding="utf-8") as f:
            f.write(svg_content)

        print(f"[OK] Berhasil: {src_path.name} -> {dest_path.name} ({width}x{height}px)")
        return True
    except Exception as e:
        print(f"[ERROR] Gagal mengonversi {src_path.name}: {e}")
        return False

def convert_directory(dir_path: Path, recursive: bool = True):
    extensions = {".png", ".jpg", ".jpeg", ".webp", ".bmp"}
    target_files = []
    
    if recursive:
        for ext in extensions:
            target_files.extend(dir_path.rglob(f"*{ext}"))
            target_files.extend(dir_path.rglob(f"*{ext.upper()}"))
    else:
        for ext in extensions:
            target_files.extend(dir_path.glob(f"*{ext}"))
            target_files.extend(dir_path.glob(f"*{ext.upper()}"))

    unique_files = sorted(list(set(target_files)))
    if not unique_files:
        print(f"Tidak ada gambar ditemukan di {dir_path}")
        return

    print(f"Ditemukan {len(unique_files)} file gambar untuk dikonversi ke SVG...\n")
    success_count = 0
    for file in unique_files:
        if convert_to_svg(file):
            success_count += 1

    print(f"\nSelesai: {success_count}/{len(unique_files)} gambar berhasil dikonversi ke SVG kompatibel universal.")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        target = Path(sys.argv[1])
        if target.is_dir():
            convert_directory(target)
        elif target.is_file():
            convert_to_svg(target)
    else:
        root = Path(__file__).resolve().parent.parent
        src_assets = root / "src" / "assets"
        
        if src_assets.exists():
            convert_directory(src_assets)
