export const routesMasterDataset = [
  // ── Published High Priority Routes ──
  { from: 'Trichy', to: 'Chennai', slug: 'trichy-to-chennai', priority: 'High', status: 'Published', estDistance: '330 km', highway: 'NH45' },
  { from: 'Chennai', to: 'Trichy', slug: 'chennai-to-trichy', priority: 'High', status: 'Published', estDistance: '330 km', highway: 'NH45' },
  { from: 'Coimbatore', to: 'Ooty', slug: 'coimbatore-to-ooty', priority: 'High', status: 'Published', estDistance: '85 km', highway: 'NH181' },
  { from: 'Madurai', to: 'Rameshwaram', slug: 'madurai-to-rameswaram', priority: 'High', status: 'Published', estDistance: '175 km', highway: 'NH87' },
  { from: 'Chennai Airport', to: 'Puducherry', slug: 'chennai-airport-to-pondicherry', priority: 'High', status: 'Published', estDistance: '140 km', highway: 'ECR / NH32' },
  { from: 'Trichy', to: 'Madurai', slug: 'trichy-to-madurai', priority: 'High', status: 'Published', estDistance: '135 km', highway: 'NH38' },
  { from: 'Salem', to: 'Bengaluru', slug: 'salem-to-bengaluru', priority: 'High', status: 'Published', estDistance: '205 km', highway: 'NH44' },
  { from: 'Chennai', to: 'Puducherry', slug: 'chennai-to-pondicherry', priority: 'High', status: 'Published', estDistance: '160 km', highway: 'ECR' },
  { from: 'Tirunelveli', to: 'Kanyakumari', slug: 'tirunelveli-to-kanyakumari', priority: 'High', status: 'Published', estDistance: '85 km', highway: 'NH44' },
  { from: 'Vellore', to: 'Chennai', slug: 'vellore-to-chennai', priority: 'High', status: 'Published', estDistance: '140 km', highway: 'NH48' },
  { from: 'Trichy', to: 'Bengaluru', slug: 'trichy-to-bengaluru', priority: 'High', status: 'Published', estDistance: '345 km', highway: 'NH44' },
  { from: 'Coimbatore', to: 'Bengaluru', slug: 'coimbatore-to-bengaluru', priority: 'High', status: 'Published', estDistance: '365 km', highway: 'NH544' },

  // ── Medium Priority Planned Routes (Roadmap Dataset) ──
  { from: 'Trichy', to: 'Salem', slug: 'trichy-to-salem', priority: 'Medium', status: 'Planned', estDistance: '140 km', highway: 'NH81' },
  { from: 'Trichy', to: 'Erode', slug: 'trichy-to-erode', priority: 'Medium', status: 'Planned', estDistance: '155 km', highway: 'NH81' },
  { from: 'Trichy', to: 'Coimbatore', slug: 'trichy-to-coimbatore', priority: 'Medium', status: 'Planned', estDistance: '215 km', highway: 'NH81' },
  { from: 'Madurai', to: 'Kodaikanal', slug: 'madurai-to-kodaikanal', priority: 'High', status: 'Planned', estDistance: '115 km', highway: 'SH156' },
  { from: 'Coimbatore', to: 'Tiruppur', slug: 'coimbatore-to-tiruppur', priority: 'Medium', status: 'Planned', estDistance: '55 km', highway: 'NH544' },
  { from: 'Chennai', to: 'Tirupati', slug: 'chennai-to-tirupati', priority: 'High', status: 'Planned', estDistance: '135 km', highway: 'NH716' },
  { from: 'Chennai', to: 'Vellore', slug: 'chennai-to-vellore', priority: 'High', status: 'Planned', estDistance: '140 km', highway: 'NH48' },
  { from: 'Chennai', to: 'Coimbatore', slug: 'chennai-to-coimbatore', priority: 'High', status: 'Planned', estDistance: '500 km', highway: 'NH544' },
  { from: 'Chennai', to: 'Madurai', slug: 'chennai-to-madurai', priority: 'High', status: 'Planned', estDistance: '460 km', highway: 'NH45' },
];

export function getRoutesFromOrigin(originName) {
  if (!originName) return [];
  const normalized = originName.toLowerCase();
  return routesMasterDataset.filter(
    (r) => r.from.toLowerCase().includes(normalized) || normalized.includes(r.from.toLowerCase())
  );
}

export function findMatchingRouteSlug(fromName, toName) {
  if (!fromName || !toName) return null;
  const match = routesMasterDataset.find(
    (r) =>
      r.status === 'Published' &&
      r.from.toLowerCase().includes(fromName.toLowerCase()) &&
      r.to.toLowerCase().includes(toName.toLowerCase())
  );
  return match ? match.slug : null;
}
