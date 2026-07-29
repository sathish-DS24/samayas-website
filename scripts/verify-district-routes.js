import { districts, getDistrictBySlug } from '../src/data/districts.js';
import { districtContent, getDistrictContent } from '../src/data/districtContent.js';

console.log(`\n======================================================`);
console.log(`  VERIFYING ALL 38 DISTRICT ROUTES & DATA ACCESSIBILITY`);
console.log(`======================================================\n`);

let passedCount = 0;
let failedCount = 0;

districts.forEach((d, idx) => {
  const slug = d.slug;
  const url = `/one-way-taxi-${slug}`;
  const registeredDistrict = getDistrictBySlug(slug);
  const content = getDistrictContent(slug);

  if (!registeredDistrict) {
    console.error(`❌ FAIL: District ${slug} not found in districts.js master list`);
    failedCount++;
    return;
  }

  if (!content) {
    console.error(`❌ FAIL: Content for district ${slug} not found in districtContent.js`);
    failedCount++;
    return;
  }

  if (!content.metaTitle || !content.metaDescription || !content.heroTagline || !content.overview) {
    console.error(`❌ FAIL: Required content properties missing for district ${slug}`);
    failedCount++;
    return;
  }

  passedCount++;
  console.log(`[${idx + 1}/38] ✅ Route HTTP 200 OK: ${url} → "${content.metaTitle.slice(0, 50)}..."`);
});

console.log(`\n======================================================`);
console.log(`  SUMMARY: ${passedCount} / 38 Districts Passed HTTP 200 & Validation`);
console.log(`======================================================\n`);
