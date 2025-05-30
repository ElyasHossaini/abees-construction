const fs = require('fs').promises;
const path = require('path');
const heicConvert = require('heic-convert');

async function convertHeicToJpg(inputPath, outputPath) {
    try {
        const inputBuffer = await fs.readFile(inputPath);
        const outputBuffer = await heicConvert({
            buffer: inputBuffer,
            format: 'JPEG',
            quality: 1
        });
        await fs.writeFile(outputPath, outputBuffer);
        console.log(`Converted ${path.basename(inputPath)} to ${path.basename(outputPath)}`);
    } catch (error) {
        console.error(`Error converting ${inputPath}:`, error.message);
    }
}

async function processDirectory(directoryPath) {
    try {
        const files = await fs.readdir(directoryPath);
        
        for (const file of files) {
            if (file.toUpperCase().endsWith('.HEIC')) {
                const inputPath = path.join(directoryPath, file);
                const outputPath = path.join(directoryPath, file.replace(/\.HEIC$/i, '.jpg'));
                await convertHeicToJpg(inputPath, outputPath);
            }
        }
        
        console.log('Conversion completed!');
    } catch (error) {
        console.error('Error processing directory:', error.message);
    }
}

// Start the conversion
const photosDir = path.join(__dirname, 'public', 'photos');
processDirectory(photosDir); 