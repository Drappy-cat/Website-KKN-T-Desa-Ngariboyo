import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Helper to get image dimensions from binary buffer (PNG, JPEG, WebP, GIF)
function getImageDimensions(buffer, ext) {
  ext = ext.toLowerCase();

  // PNG
  if (ext === '.png') {
    if (buffer.length >= 24 && buffer.toString('hex', 0, 8) === '89504e470d0a1a0a') {
      const width = buffer.readUInt32BE(16);
      const height = buffer.readUInt32BE(20);
      return { width, height, mime: 'image/png' };
    }
  }

  // GIF
  if (ext === '.gif') {
    if (buffer.length >= 10 && buffer.toString('ascii', 0, 3) === 'GIF') {
      const width = buffer.readUInt16LE(6);
      const height = buffer.readUInt16LE(8);
      return { width, height, mime: 'image/gif' };
    }
  }

  // WEBP
  if (ext === '.webp') {
    if (buffer.length >= 30 && buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP') {
      const type = buffer.toString('ascii', 12, 16);
      if (type === 'VP8 ') {
        const width = buffer.readUInt16LE(26) & 0x3fff;
        const height = buffer.readUInt16LE(28) & 0x3fff;
        return { width, height, mime: 'image/webp' };
      } else if (type === 'VP8L') {
        const b0 = buffer[21];
        const b1 = buffer[22];
        const b2 = buffer[23];
        const b3 = buffer[24];
        const width = 1 + (((b1 & 0x3f) << 8) | b0);
        const height = 1 + (((b3 & 0xf) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6));
        return { width, height, mime: 'image/webp' };
      } else if (type === 'VP8X') {
        const width = 1 + buffer.readUIntLE(24, 3);
        const height = 1 + buffer.readUIntLE(27, 3);
        return { width, height, mime: 'image/webp' };
      }
    }
  }

  // JPEG / JPG
  if (ext === '.jpg' || ext === '.jpeg') {
    let offset = 2;
    while (offset < buffer.length) {
      if (buffer[offset] !== 0xFF) break;
      const marker = buffer[offset + 1];
      if (
        (marker >= 0xC0 && marker <= 0xC3) ||
        (marker >= 0xC5 && marker <= 0xC7) ||
        (marker >= 0xC9 && marker <= 0xCB) ||
        (marker >= 0xCD && marker <= 0xCF)
      ) {
        const height = buffer.readUInt16BE(offset + 5);
        const width = buffer.readUInt16BE(offset + 7);
        return { width, height, mime: 'image/jpeg' };
      }
      const length = buffer.readUInt16BE(offset + 2);
      offset += 2 + length;
    }
    return { width: 800, height: 600, mime: 'image/jpeg' };
  }

  return { width: 800, height: 600, mime: 'image/png' };
}

export function convertFileToSvg(filePath, destPath = null) {
  const ext = path.extname(filePath);
  const buffer = fs.readFileSync(filePath);
  const { width, height, mime } = getImageDimensions(buffer, ext);
  const base64Data = buffer.toString('base64');
  const dataUri = `data:${mime};base64,${base64Data}`;

  // Use both href and xlink:href with x="0" y="0" for universal SVG 1.1 + SVG 2 + VS Code Preview compatibility
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <image x="0" y="0" width="${width}" height="${height}" href="${dataUri}" xlink:href="${dataUri}"/>
</svg>
`;

  const targetPath = destPath || filePath.replace(/\.[^/.]+$/, '.svg');
  fs.writeFileSync(targetPath, svgContent, 'utf-8');
  console.log(`✓ Konversi sukses: ${path.basename(filePath)} -> ${path.basename(targetPath)} (${width}x${height}px)`);
  return targetPath;
}

function scanAndConvert(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      scanAndConvert(fullPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        convertFileToSvg(fullPath);
      }
    }
  }
}

// Main execution
const targetArg = process.argv[2];
if (targetArg) {
  const resolved = path.resolve(process.cwd(), targetArg);
  if (fs.statSync(resolved).isDirectory()) {
    scanAndConvert(resolved);
  } else {
    convertFileToSvg(resolved);
  }
} else {
  console.log('🚀 Memulai konversi semua gambar di src/assets dan src/imports...\n');
  scanAndConvert(path.join(projectRoot, 'src', 'assets'));
  scanAndConvert(path.join(projectRoot, 'src', 'imports'));
  console.log('\n✨ Semua gambar berhasil dikonversi ke SVG kompatibel universal (SVG 1.1 + SVG 2)!');
}
