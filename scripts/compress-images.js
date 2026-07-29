import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '..', 'public')

const tasks = [
  // Car images — compress from ~2MB PNG to ~100KB WebP
  { src: 'images/cars/sedan.png', dest: 'images/cars/sedan.webp', width: 400, quality: 80 },
  { src: 'images/cars/etios.png', dest: 'images/cars/etios.webp', width: 400, quality: 80 },
  { src: 'images/cars/SUV.png', dest: 'images/cars/SUV.webp', width: 400, quality: 80 },
  { src: 'images/cars/innova.png', dest: 'images/cars/innova.webp', width: 400, quality: 80 },
  // Logo — compress from ~180KB to ~20KB
  { src: 'logo.png', dest: 'logo.webp', width: 200, quality: 85 },
]

async function compress() {
  for (const task of tasks) {
    const srcPath = path.join(publicDir, task.src)
    const destPath = path.join(publicDir, task.dest)

    if (!fs.existsSync(srcPath)) {
      console.warn(`⚠ Skipping ${task.src} — file not found`)
      continue
    }

    const originalSize = fs.statSync(srcPath).size
    
    await sharp(srcPath)
      .resize(task.width)
      .webp({ quality: task.quality })
      .toFile(destPath)

    const newSize = fs.statSync(destPath).size
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1)
    console.log(`✓ ${task.src} (${(originalSize / 1024).toFixed(0)}KB) → ${task.dest} (${(newSize / 1024).toFixed(0)}KB) — ${savings}% smaller`)
  }

  console.log('\\nDone! WebP images generated. Original PNGs are preserved as fallbacks.')
}

compress().catch(console.error)
