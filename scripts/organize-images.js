const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join(__dirname, '../public/photos');
const categorizedDir = path.join(__dirname, '../public/images');

// Create category directories
const categories = {
  'kitchens': ['kitchen', 'cabinets'],
  'bathrooms': ['bathroom', 'bath'],
  'basements': ['basement', 'entertainment'],
  'living-rooms': ['living', 'family room'],
  'outdoor': ['deck', 'patio', 'fence', 'exterior'],
  'custom-work': ['custom', 'built-in', 'shelving', 'carpentry'],
  'before-after': ['before', 'after'],
  'gallery': [], // For general showcase images
};

// Create directories if they don't exist
Object.keys(categories).forEach(category => {
  const dir = path.join(categorizedDir, category);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Image optimization settings
const imageSettings = {
  jpg: {
    quality: 80,
    progressive: true,
  },
  webp: {
    quality: 75,
  },
};

// Function to generate SEO-friendly filename
function generateSeoFilename(originalName, category) {
  const baseName = path.parse(originalName).name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
  
  return `${category}-${baseName}`;
}

// Process and organize images
async function processImage(file, category) {
  const sourceFile = path.join(sourceDir, file);
  const ext = path.extname(file).toLowerCase();
  
  // Skip non-image files and HEIC files (we'll handle JPG versions)
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return;
  }

  const seoFilename = generateSeoFilename(file, category);
  const outputJpg = path.join(categorizedDir, category, `${seoFilename}.jpg`);
  const outputWebp = path.join(categorizedDir, category, `${seoFilename}.webp`);

  try {
    const image = sharp(sourceFile);
    
    // Get image metadata
    const metadata = await image.metadata();
    
    // Resize if width is larger than 2000px
    if (metadata.width > 2000) {
      image.resize(2000, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }

    // Save as JPG
    await image
      .jpeg(imageSettings.jpg)
      .toFile(outputJpg);

    // Save as WebP
    await image
      .webp(imageSettings.webp)
      .toFile(outputWebp);

    console.log(`✓ Processed: ${file} -> ${category}`);
  } catch (error) {
    console.error(`✗ Error processing ${file}:`, error);
  }
}

// Read all files and process them
async function organizeImages() {
  const files = fs.readdirSync(sourceDir);
  
  for (const file of files) {
    // Skip HEIC files
    if (file.toLowerCase().endsWith('.heic')) {
      continue;
    }

    // Determine category based on filename
    let assigned = false;
    for (const [category, keywords] of Object.entries(categories)) {
      if (keywords.some(keyword => file.toLowerCase().includes(keyword))) {
        await processImage(file, category);
        assigned = true;
        break;
      }
    }

    // If no category matched, put in gallery
    if (!assigned) {
      await processImage(file, 'gallery');
    }
  }
}

// Create a JSON file with image metadata
function createImageMetadata() {
  const metadata = {
    categories: {},
    lastUpdated: new Date().toISOString()
  };

  Object.keys(categories).forEach(category => {
    const categoryDir = path.join(categorizedDir, category);
    const files = fs.readdirSync(categoryDir);
    
    metadata.categories[category] = files
      .filter(file => file.endsWith('.jpg')) // Only include JPG files in metadata
      .map(file => ({
        filename: file,
        webp: file.replace('.jpg', '.webp'),
        alt: file
          .replace('.jpg', '')
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      }));
  });

  fs.writeFileSync(
    path.join(categorizedDir, 'metadata.json'),
    JSON.stringify(metadata, null, 2)
  );
}

// Run the organization process
async function main() {
  try {
    await organizeImages();
    createImageMetadata();
    console.log('✓ Image organization complete!');
  } catch (error) {
    console.error('✗ Error during image organization:', error);
  }
}

main(); 