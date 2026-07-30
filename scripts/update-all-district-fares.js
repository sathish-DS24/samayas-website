import fs from 'fs';

// Read districtContent.js
let content = fs.readFileSync('./src/data/districtContent.js', 'utf-8');

// Regex replace startingFare values in routes array based on Math.max(distanceKm, 130) * 15
content = content.replace(/distanceKm:\s*(\d+),\s*timeHours:\s*([0-9.]+),\s*startingFare:\s*\d+/g, (match, dist, time) => {
  const km = parseInt(dist, 10);
  const billableKm = Math.max(km, 130);
  const fare = Math.round(billableKm * 15);
  return `distanceKm: ${km}, timeHours: ${time}, startingFare: ${fare}`;
});

// Regex replace fareTable values based on 130 km minimum limit rules:
// hatchback: Math.max(distanceKm, 130) * 15
// sedan: Math.max(distanceKm, 130) * 15
// suv: Math.max(distanceKm, 130) * 20
content = content.replace(/distanceKm:\s*(\d+),\s*timeHours:\s*([0-9.]+),\s*hatchback:\s*\d+,\s*sedan:\s*\d+,\s*suv:\s*\d+/g, (match, dist, time) => {
  const km = parseInt(dist, 10);
  const billableKm = Math.max(km, 130);
  const hatchback = Math.round(billableKm * 15);
  const sedan = Math.round(billableKm * 15);
  const suv = Math.round(billableKm * 20);
  return `distanceKm: ${km}, timeHours: ${time}, hatchback: ${hatchback}, sedan: ${sedan}, suv: ${suv}`;
});

fs.writeFileSync('./src/data/districtContent.js', content, 'utf-8');
console.log('✅ All 38 district routes and fare tables recalculated with 130km minimum billing limit (₹1,950 min)!');
