import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const files = [
  'src/assets/logos/desa/logo-desa-ngariboyo',
  'src/assets/logos/jurusan/logo-ikor',
  'src/assets/logos/jurusan/logo-manajemen',
  'src/assets/logos/jurusan/logo-pgsd',
  'src/assets/logos/jurusan/logo-ti',
  'src/assets/logos/kknt/logo-kknt-banner',
  'src/assets/logos/kknt/logo-kknt-filosofi',
  'src/assets/logos/kknt/logo-kknt-full',
  'src/assets/logos/kknt/logo-kknt-vest',
];

// 1. Simpan versi transparan saat ini sebagai -transparent.png dan -transparent.svg
files.forEach(basePath => {
  ['.png', '.svg'].forEach(ext => {
    const currentFile = path.join(root, basePath + ext);
    const transFile = path.join(root, basePath + '-transparent' + ext);
    if (fs.existsSync(currentFile)) {
      fs.copyFileSync(currentFile, transFile);
      console.log('✓ Versi Transparan:', path.relative(root, transFile));
    }
  });
});

// 2. Ekstrak versi asli berlatar putih dari commit 9add71f sebagai -white-bg.png / .svg
files.forEach(basePath => {
  ['.png', '.svg'].forEach(ext => {
    const gitPath = basePath.replace(/\\/g, '/') + ext;
    const whiteBgFile = path.join(root, basePath + '-white-bg' + ext);
    try {
      const buffer = execSync(`git show 9add71f:"${gitPath}"`, { maxBuffer: 50 * 1024 * 1024 });
      fs.writeFileSync(whiteBgFile, buffer);
      console.log('✓ Versi Asli Background Putih:', path.relative(root, whiteBgFile));
    } catch (e) {
      console.error('Gagal mengekstrak:', gitPath, e.message);
    }
  });
});

console.log('\n✨ Berhasil menduplikasi: Sekarang tersedia versi transparan (-transparent) dan versi background putih (-white-bg)!');
