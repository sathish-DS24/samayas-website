import { districts } from './districts.js';

export interface DistrictRecoveryItem {
  id: string;
  district: string;
  state: string;
  slug: string;
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
  };
  description: string;
  coverageAreas: string[];
  highways: string[];
  services: string[];
  supportedVehicles: string[];
  pricing: {
    callOutFee: string;
    perKmRate: string;
    nightCharges: string;
    waitingCharges: string;
  };
  recoveryVehicles: {
    name: string;
    type: string;
    desc: string;
  }[];
  reviews: {
    name: string;
    rating: number;
    text: string;
    date: string;
  }[];
  faq: {
    q: string;
    a: string;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const recoveryMasterDataset: DistrictRecoveryItem[] = districts.map((d) => {
  const districtName = d.name;
  const slug = d.slug;

  return {
    id: `recovery-${slug}`,
    district: districtName,
    state: 'Tamil Nadu',
    slug: slug,
    hero: {
      title: `Vehicle Recovery & Towing in ${districtName}`,
      subtitle: `24×7 Emergency Roadside Assistance in ${districtName} • Fast 15-30 Min Dispatch`,
      tagline: `Call anytime for instant car recovery, flatbed towing, bike towing & highway breakdown help.`
    },
    description: `Stuck with a vehicle breakdown, flat tyre, dead battery, or accident in ${districtName}? SAMAYAS provides 24/7 emergency vehicle recovery, hydraulic flatbed towing, and roadside assistance across ${districtName} city and connecting highways.`,
    coverageAreas: [
      `${districtName} Central Railway Station & Bus Terminal`,
      `${districtName} City Center & Commercial Streets`,
      `${districtName} Airport & Industrial Estates`,
      `${districtName} Highway Bypass & Toll Plazas`,
      `${districtName} Residential Neighborhoods & Ring Roads`
    ],
    highways: [
      `NH44 / NH45 / NH83 Expressway Corridors in ${districtName}`,
      `${districtName} State Highway Bypasses`,
      `Ring Road & Ring Highway Junctions`
    ],
    services: [
      '24/7 Car Recovery',
      'Hydraulic Flatbed Towing',
      'Two-Wheeler & Superbike Recovery',
      'Accident Recovery & Crane Service',
      'Battery Jump Start',
      'Flat Tyre Puncture Assistance',
      'Emergency Fuel Delivery',
      'EV Car Towing'
    ],
    supportedVehicles: [
      'Hatchbacks & Compact Cars',
      'Sedans & Executive Cars',
      'SUVs & MUVs',
      'Luxury Cars (BMW/Merc/Audi)',
      'Electric Vehicles (EVs)',
      'Motorcycles & Superbikes',
      'Mini Trucks & LCVs'
    ],
    pricing: {
      callOutFee: '₹800 Base Hook Fee',
      perKmRate: '₹40 / Km Towing Charge',
      nightCharges: '₹200 (10 PM to 6 AM)',
      waitingCharges: '₹100 / Hour'
    },
    recoveryVehicles: [
      { name: 'Hydraulic Flatbed Truck', type: 'Tilt-Tray Flatbed', desc: '100% zero-wheel-contact towing for automatic, EV & luxury cars.' },
      { name: 'Wheel-Lift Tow Truck', type: 'Under-Lift Boom', desc: 'Fast city towing for sedan & hatchback breakdowns.' },
      { name: 'Heavy Duty Crane & Winch Truck', type: 'Accident Crane', desc: '20-ton winching capacity for off-road ditch slips & severe crash damage.' },
      { name: 'Specialized Bike Carrier', type: 'Ramp Carrier', desc: 'Scratch-free soft-strap motorcycle towing for 2-wheelers & superbikes.' }
    ],
    reviews: [
      {
        name: `Ramesh Kumar (${districtName})`,
        rating: 5,
        text: `Car engine overheated near ${districtName} bypass at midnight. SAMAYAS recovery truck arrived in 25 mins and delivered my car safely.`,
        date: '2026-07-21'
      },
      {
        name: `Dhanasekar (${districtName})`,
        rating: 5,
        text: `Fast flatbed towing service in ${districtName}. Safe handling for my automatic sedan. Highly recommended emergency team!`,
        date: '2026-07-26'
      }
    ],
    faq: [
      {
        q: `How quickly can a recovery tow truck reach my location in ${districtName}?`,
        a: `Our average response time in ${districtName} is 15 to 30 minutes for city locations and 30 to 45 minutes on highways.`
      },
      {
        q: `What types of towing trucks are available in ${districtName}?`,
        a: `We operate hydraulic tilt-tray flatbed trucks, wheel-lift tow trucks, heavy-duty accident cranes, winching vehicles, and specialized motorcycle carriers.`
      },
      {
        q: `Can I request a flatbed tow truck specifically for an automatic or EV car in ${districtName}?`,
        a: `Yes! You can specifically request a flatbed truck during your emergency call to ensure zero-wheel-contact transport.`
      }
    ],
    seo: {
      title: `Vehicle Recovery in ${districtName} | 24x7 Towing Service | SAMAYAS`,
      description: `Book 24/7 vehicle recovery & flatbed towing in ${districtName}. 15-30 min fast arrival, car towing, bike recovery & breakdown help. Call now!`,
      keywords: [
        `vehicle recovery in ${districtName.toLowerCase()}`,
        `car towing ${districtName.toLowerCase()}`,
        `tow truck near me ${districtName.toLowerCase()}`,
        `roadside assistance ${districtName.toLowerCase()}`,
        `flatbed towing ${districtName.toLowerCase()}`
      ]
    }
  };
});

export function getRecoveryBySlug(slug?: string): DistrictRecoveryItem | null {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return recoveryMasterDataset.find((item) => item.slug.toLowerCase() === normalized) || null;
}
