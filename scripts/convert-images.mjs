import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imagesDir = path.resolve(__dirname, '..', 'src', 'assets', 'images');

const imageExtensions = ['.png', '.jpg', '.jpeg', '.tiff'];

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (imageExtensions.includes(ext)) {
        const outPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.webp';
        
        // Skip if webp exists and is newer
        if (fs.existsSync(outPath)) {
            const inStat = fs.statSync(fullPath);
            const outStat = fs.statSync(outPath);
            if (outStat.mtime > inStat.mtime) {
                continue;
            }
        }

        let maxWidth = 800; // default
        if (fullPath.includes('working-drawings')) maxWidth = 1600;
        else if (fullPath.includes('automation')) maxWidth = 1200;
        else if (fullPath.includes('hero')) maxWidth = 1920;

        try {
          await sharp(fullPath)
            .resize({ width: maxWidth, withoutEnlargement: true })
            .webp({ quality: 82 })
            .toFile(outPath);
          console.log(`Converted: ${fullPath} -> .webp`);
        } catch (err) {
          console.error(`Error processing ${fullPath}:`, err);
        }
      }
    }
  }
}

async function run() {
    if (fs.existsSync(imagesDir)) {
        console.log('Starting image conversion...');
        await processDirectory(imagesDir);
        console.log('Image conversion complete.');
    } else {
        console.log('Image directory not found:', imagesDir);
    }
}

run();
