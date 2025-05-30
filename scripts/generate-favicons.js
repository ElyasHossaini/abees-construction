const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SOURCE_LOGO = path.join(__dirname, '../public/favicon/base-logo.svg');
const FAVICON_DIR = path.join(__dirname, '../public/favicon');

// Create favicon directory if it doesn't exist
if (!fs.existsSync(FAVICON_DIR)) {
  fs.mkdirSync(FAVICON_DIR, { recursive: true });
}

const sizes = {
  'icon-16x16.png': 16,
  'icon-32x32.png': 32,
  'icon-96x96.png': 96,
  'icon-192x192.png': 192,
  'icon-512x512.png': 512,
  'apple-touch-icon.png': 180,
  'ms-icon-70x70.png': 70,
  'ms-icon-150x150.png': 150,
  'ms-icon-310x310.png': 310
};

async function generateFavicons() {
  try {
    // Generate PNG files in different sizes
    for (const [filename, size] of Object.entries(sizes)) {
      await sharp(SOURCE_LOGO)
        .resize(size, size)
        .png()
        .toFile(path.join(FAVICON_DIR, filename));
      
      console.log(`Generated ${filename}`);
    }

    // Generate ICO file (16x16 and 32x32)
    await sharp(SOURCE_LOGO)
      .resize(32, 32)
      .toFormat('ico')
      .toFile(path.join(FAVICON_DIR, 'favicon.ico'));
    
    console.log('Generated favicon.ico');

    // Copy SVG for Safari pinned tab
    fs.copyFileSync(SOURCE_LOGO, path.join(FAVICON_DIR, 'safari-pinned-tab.svg'));
    console.log('Generated safari-pinned-tab.svg');

    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 