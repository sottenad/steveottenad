const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const OUTPUT_DIR = path.join(PUBLIC_DIR, 'images/optimized');

// Create the output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Get all images in the images directory
const imageFiles = fs.readdirSync(IMAGES_DIR).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
});

// Process each image
async function processImages() {
  for (const file of imageFiles) {
    // Skip already optimized images
    if (file.includes('optimized-')) continue;

    const inputPath = path.join(IMAGES_DIR, file);
    const fileExt = path.extname(file);
    const fileName = path.basename(file, fileExt);
    
    // Create multiple sizes for responsive images
    const sizes = [
      { width: 320, suffix: 'xs' },
      { width: 640, suffix: 'sm' },
      { width: 960, suffix: 'md' },
      { width: 1280, suffix: 'lg' }
    ];

    console.log(`Processing ${file}...`);

    // Process image in WebP format (better compression)
    for (const size of sizes) {
      const outputPath = path.join(OUTPUT_DIR, `${fileName}-${size.suffix}.webp`);
      await sharp(inputPath)
        .resize(size.width)
        .webp({ quality: 80 })
        .toFile(outputPath);
    }

    // Also save original format in medium size for fallback
    const outputPathOriginal = path.join(OUTPUT_DIR, `${fileName}-md${fileExt}`);
    await sharp(inputPath)
      .resize(960)
      .toFile(outputPathOriginal);
    
    console.log(`✓ Optimized ${file} to multiple sizes`);
  }
}

processImages().then(() => {
  console.log('All images optimized successfully!');
}).catch(err => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});