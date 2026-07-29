import { districtContent } from '../src/data/districtContent.js';
import fs from 'fs';

const keys = Object.keys(districtContent);
let out = '# All 38 Districts SEO Metadata & Hero Taglines\n\n';

keys.forEach((key, idx) => {
  const d = districtContent[key];
  const name = key.charAt(0).toUpperCase() + key.slice(1);
  out += `### ${idx + 1}. ${name}\n`;
  out += `- **Hero Tagline**: "${d.heroTagline}"\n`;
  out += `- **SEO Title**: \`${d.metaTitle}\`\n`;
  out += `- **Meta Description**: \`${d.metaDescription}\`\n\n`;
});

fs.writeFileSync('./scripts/all_districts_metadata.md', out);
console.log('Saved to scripts/all_districts_metadata.md');
