const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videosDir = path.join(__dirname, '../public/videos');
const files = fs.readdirSync(videosDir).filter(file => file.endsWith('.mp4'));

console.log(`Found ${files.length} MP4 videos to convert...`);

files.forEach((file, index) => {
  const inputPath = path.join(videosDir, file);
  const parsed = path.parse(file);
  const outputPath = path.join(videosDir, `${parsed.name}.webm`);

  console.log(`\n[${index + 1}/${files.length}] Converting ${file} to WebM...`);
  console.log(`This might take a few minutes...`);
  
  try {
    // Using VP9 codec for good compression/quality ratio
    execSync(`ffmpeg -y -i "${inputPath}" -c:v libvpx-vp9 -crf 35 -b:v 0 -b:a 128k -c:a libopus "${outputPath}"`, { 
      stdio: 'inherit' 
    });
    console.log(`✅ Successfully converted to ${parsed.name}.webm`);
  } catch (error) {
    console.error(`❌ Failed to convert ${file}:`, error.message);
  }
});

console.log('\n🎉 All video conversions completed!');
