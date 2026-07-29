export const routesList = [
  {
    slug: 'trichy-to-chennai',
    from: 'Trichy',
    to: 'Chennai',
    fromSlug: 'tiruchirappalli',
    toSlug: 'chennai',
    name: 'Trichy to Chennai One-Way Taxi',
  },
  {
    slug: 'chennai-to-trichy',
    from: 'Chennai',
    to: 'Trichy',
    fromSlug: 'chennai',
    toSlug: 'tiruchirappalli',
    name: 'Chennai to Trichy One-Way Taxi',
  },
  {
    slug: 'coimbatore-to-ooty',
    from: 'Coimbatore',
    to: 'Ooty',
    fromSlug: 'coimbatore',
    toSlug: 'nilgiris',
    name: 'Coimbatore to Ooty One-Way Taxi',
  },
  {
    slug: 'madurai-to-rameswaram',
    from: 'Madurai',
    to: 'Rameshwaram',
    fromSlug: 'madurai',
    toSlug: 'ramanathapuram',
    name: 'Madurai to Rameshwaram One-Way Taxi',
  },
  {
    slug: 'chennai-airport-to-pondicherry',
    from: 'Chennai Airport',
    to: 'Puducherry',
    fromSlug: 'chennai',
    toSlug: 'viluppuram',
    name: 'Chennai Airport to Pondicherry One-Way Taxi',
  },
  {
    slug: 'trichy-to-madurai',
    from: 'Trichy',
    to: 'Madurai',
    fromSlug: 'tiruchirappalli',
    toSlug: 'madurai',
    name: 'Trichy to Madurai One-Way Taxi',
  },
  {
    slug: 'salem-to-bengaluru',
    from: 'Salem',
    to: 'Bengaluru',
    fromSlug: 'salem',
    toSlug: 'krishnagiri',
    name: 'Salem to Bengaluru One-Way Taxi',
  },
  {
    slug: 'chennai-to-pondicherry',
    from: 'Chennai',
    to: 'Puducherry',
    fromSlug: 'chennai',
    toSlug: 'viluppuram',
    name: 'Chennai to Pondicherry One-Way Taxi',
  },
  {
    slug: 'tirunelveli-to-kanyakumari',
    from: 'Tirunelveli',
    to: 'Kanyakumari',
    fromSlug: 'tirunelveli',
    toSlug: 'kanyakumari',
    name: 'Tirunelveli to Kanyakumari One-Way Taxi',
  },
  {
    slug: 'vellore-to-chennai',
    from: 'Vellore',
    to: 'Chennai',
    fromSlug: 'vellore',
    toSlug: 'chennai',
    name: 'Vellore to Chennai One-Way Taxi',
  },
  {
    slug: 'trichy-to-bengaluru',
    from: 'Trichy',
    to: 'Bengaluru',
    fromSlug: 'tiruchirappalli',
    toSlug: 'krishnagiri',
    name: 'Trichy to Bengaluru One-Way Taxi',
  },
  {
    slug: 'coimbatore-to-bengaluru',
    from: 'Coimbatore',
    to: 'Bengaluru',
    fromSlug: 'coimbatore',
    toSlug: 'krishnagiri',
    name: 'Coimbatore to Bengaluru One-Way Taxi',
  },
];

export function getRouteBySlug(slug) {
  if (!slug) return null;
  return routesList.find((r) => r.slug.toLowerCase() === slug.toLowerCase()) || null;
}

export function getRouteUrl(slug) {
  return `/one-way-taxi/${slug}`;
}
