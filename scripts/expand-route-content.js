import fs from 'fs';

let fileContent = fs.readFileSync('./src/data/routeContent.js', 'utf-8');

const routeEnhancements = {
  'trichy-to-chennai': {
    fromSlug: 'tiruchirappalli',
    toSlug: 'chennai',
    returnRouteSlug: 'chennai-to-trichy',
    popularFor: ['Business Travel', 'Airport Transfer', 'Family Trips', 'Medical Appointments'],
  },
  'chennai-to-trichy': {
    fromSlug: 'chennai',
    toSlug: 'tiruchirappalli',
    returnRouteSlug: 'trichy-to-chennai',
    popularFor: ['Home & Family Visits', 'Airport Pickups', 'Temple Pilgrimage', 'Corporate Travel'],
  },
  'coimbatore-to-ooty': {
    fromSlug: 'coimbatore',
    toSlug: 'nilgiris',
    returnRouteSlug: null,
    popularFor: ['Hill Station Resort Stay', 'Tourism & Honeymoon', 'Tea Garden Tours', 'Family Vacations'],
  },
  'madurai-to-rameswaram': {
    fromSlug: 'madurai',
    toSlug: 'ramanathapuram',
    returnRouteSlug: null,
    popularFor: ['Sacred Temple Pilgrimage', 'Agni Theertham Visit', 'Dhanushkodi Tour', 'Family Trips'],
  },
  'chennai-airport-to-pondicherry': {
    fromSlug: 'chennai',
    toSlug: 'viluppuram',
    returnRouteSlug: null,
    popularFor: ['Auroville Retreat', 'Airport Pickup Transfer', 'Beach Weekend', 'Corporate Getaway'],
  },
  'trichy-to-madurai': {
    fromSlug: 'tiruchirappalli',
    toSlug: 'madurai',
    returnRouteSlug: null,
    popularFor: ['Airport Connection', 'Temple Pilgrimage', 'Business Visits', 'Family Trips'],
  },
  'salem-to-bengaluru': {
    fromSlug: 'salem',
    toSlug: 'krishnagiri',
    returnRouteSlug: null,
    popularFor: ['IT & Corporate Travel', 'Interstate Transit', 'BLR Airport Drops', 'Business Meetings'],
  },
  'chennai-to-pondicherry': {
    fromSlug: 'chennai',
    toSlug: 'viluppuram',
    returnRouteSlug: 'chennai-airport-to-pondicherry',
    popularFor: ['ECR Scenic Roadtrip', 'Weekend Getaway', 'Auroville Retreat', 'Beach Tourism'],
  },
  'tirunelveli-to-kanyakumari': {
    fromSlug: 'tirunelveli',
    toSlug: 'kanyakumari',
    returnRouteSlug: null,
    popularFor: ['Sunset & Sunrise Tour', 'Vivekananda Rock Visit', 'Coastal Pilgrimage', 'Day Trips'],
  },
  'vellore-to-chennai': {
    fromSlug: 'vellore',
    toSlug: 'chennai',
    returnRouteSlug: null,
    popularFor: ['CMC Medical Transfer', 'MAA Airport Drop', 'Golden Temple Trip', 'Corporate Commute'],
  },
  'trichy-to-bengaluru': {
    fromSlug: 'tiruchirappalli',
    toSlug: 'krishnagiri',
    returnRouteSlug: null,
    popularFor: ['Interstate Travel', 'BLR Airport Drop', 'IT Commute', 'Family Trips'],
  },
  'coimbatore-to-bengaluru': {
    fromSlug: 'coimbatore',
    toSlug: 'krishnagiri',
    returnRouteSlug: null,
    popularFor: ['Industrial & IT Travel', 'BLR Airport Transfer', 'Interstate Route', 'Business Visits'],
  },
};

for (const [slug, data] of Object.entries(routeEnhancements)) {
  const popularForStr = JSON.stringify(data.popularFor);
  const patch = `\n    fromSlug: '${data.fromSlug}',\n    toSlug: '${data.toSlug}',\n    returnRouteSlug: ${data.returnRouteSlug ? `'${data.returnRouteSlug}'` : 'null'},\n    popularFor: ${popularForStr},`;

  fileContent = fileContent.replace(
    new RegExp(`('${slug}':\\s*{[\\s\\S]*?from:\\s*['"].*?['"],)`, 'g'),
    `$1${patch}`
  );
}

fs.writeFileSync('./src/data/routeContent.js', fileContent);
console.log('Successfully expanded routeContent.js data model!');
