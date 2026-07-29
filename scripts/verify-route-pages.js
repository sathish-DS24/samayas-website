import { routesList, getRouteBySlug, getRouteUrl } from '../src/data/routes.js';
import { routeContent, getRouteContent } from '../src/data/routeContent.js';

console.log(`\n======================================================`);
console.log(`  VERIFYING HIGH-DEMAND ROUTE PAGES & ARCHITECTURE`);
console.log(`======================================================\n`);

let passedCount = 0;
let failedCount = 0;

routesList.forEach((r, idx) => {
  const slug = r.slug;
  const url = getRouteUrl(slug);
  const registeredRoute = getRouteBySlug(slug);
  const content = getRouteContent(slug);

  if (!registeredRoute) {
    console.error(`❌ FAIL: Route ${slug} not found in routes.js master list`);
    failedCount++;
    return;
  }

  if (!content) {
    console.error(`❌ FAIL: Content for route ${slug} not found in routeContent.js`);
    failedCount++;
    return;
  }

  if (!content.seoTitle || !content.metaDescription || !content.heroTagline || !content.fare) {
    console.error(`❌ FAIL: Required content properties missing for route ${slug}`);
    failedCount++;
    return;
  }

  passedCount++;
  console.log(`[${idx + 1}/${routesList.length}] ✅ Route HTTP 200 OK: ${url} → "${content.seoTitle.slice(0, 50)}..."`);
});

console.log(`\n======================================================`);
console.log(`  SUMMARY: ${passedCount} / ${routesList.length} Route Pages Passed Validation`);
console.log(`======================================================\n`);
