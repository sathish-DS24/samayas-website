import { districts } from './districts.js';

export const actingDriversDataset = districts.map((d) => {
  const districtName = d.name;
  const slug = d.slug;

  return {
    id: `driver-${slug}`,
    district: districtName,
    state: 'Tamil Nadu',
    slug: slug,
    hero: {
      title: `Professional Acting Driver in ${districtName}`,
      subtitle: `24×7 Driver on Call in ${districtName} • Verified, Experienced & Uniformed Drivers`,
      tagline: `Book a trusted acting driver for local city travel, outstation road trips, weddings & hospital visits in your own car.`
    },
    description: `Need a reliable acting driver in ${districtName}? SAMAYAS provides 24/7 background-verified, licensed drivers for your personal vehicle. Whether you need a local city trip, outstation highway drive across Tamil Nadu, one-way drop driver, or a dedicated personal chauffeur, our drivers arrive at your doorstep in 30 minutes.`,
    popularLocations: [
      `${districtName} Central Railway Station & Bus Stand`,
      `${districtName} Commercial & Shopping Centers`,
      `${districtName} Hospitals & Diagnostic Labs`,
      `${districtName} Residential Neighborhoods & Suburbs`,
      `${districtName} Marriage Halls & Event Venues`
    ],
    pricing: {
      hourly: '₹500 (4 Hours / Max 20 km + Food)',
      outOfCity: '₹600 (4 Hours / 20–30 km + Food)',
      dropTariff: '₹1,200 (50 km incl. bus fare + Food)',
      fullDay: '₹1,100 (10 Hours / Local)',
      outstationBata: '₹800 (6 Hours / 150 km + Food)',
      outstationDaily: '₹1,300 - ₹1,500 / Day + Food + Accommodation',
      waitingCharges: '₹80 - ₹90 / additional hour'
    },
    driverCategories: [
      { name: 'Local City Driver (4 Hours)', desc: 'Local city errands, hospital visits & market shopping in your car (Up to 20 km + Food).', rate: 'From ₹500' },
      { name: 'Out-of-City Local Driver (4 Hours)', desc: 'Flexible 4-hour package for 20-30 km local errands & suburbs + Food.', rate: 'From ₹600' },
      { name: 'One-Way Drop Driver (50 km)', desc: 'Intercity one-way drop driver service including bus return fare + food.', rate: 'From ₹1,200' },
      { name: 'Outstation Highway Driver (150 km)', desc: 'Outstation round trip (min 6 hrs / 150 km + food).', rate: 'From ₹800' },
      { name: 'Full-Day City Driver (10 Hours)', desc: '10-hour complete day availability for intensive city commuting.', rate: 'From ₹1,100' },
      { name: 'Multi-Day Highway Driver', desc: 'Outstation road trips below 300km/day + food + accommodation.', rate: '₹1,300 / Day' },
      { name: 'Late Night & Party Driver', desc: 'Designated 24/7 night driver for safe return after evening celebrations.', rate: 'From ₹500' },
      { name: 'Wedding & Corporate Chauffeur', desc: 'Uniformed chauffeur for decorated marriage cars & executive clients.', rate: 'From ₹1,200' }
    ],
    services: [
      'Hourly Driver on Call',
      'Outstation Highway Driver',
      'Night Designated Driver',
      'Wedding Chauffeur Service',
      'Senior Citizen Patient Driver',
      'Corporate Executive Driver'
    ],
    reviews: [
      {
        name: `Senthil Kumar (${districtName})`,
        rating: 5,
        text: `Hired an acting driver in ${districtName} for a local family trip. Driver arrived right on time, drove very smoothly, and knew all shortcuts.`,
        date: '2026-07-22'
      },
      {
        name: `Lakshmi Narayanan (${districtName})`,
        rating: 5,
        text: `Excellent outstation driver service from ${districtName}. Booked for a 2-day trip to Chennai. Clean, polite, and very professional.`,
        date: '2026-07-26'
      }
    ],
    faq: [
      {
        q: `How quickly can an acting driver arrive at my location in ${districtName}?`,
        a: `We dispatch the nearest verified driver to your doorstep in ${districtName} within 30 to 45 minutes of booking confirmation.`
      },
      {
        q: `Are SAMAYAS acting drivers in ${districtName} background verified?`,
        a: `Yes! 100% of our drivers undergo strict 5-tier verification: Driving License check, Aadhar ID verification, Police antecedents check, road driving test, and customer service etiquette training.`
      },
      {
        q: `Can I hire an acting driver in ${districtName} for outstation travel in my SUV or automatic car?`,
        a: `Yes, all our drivers are experienced in handling manual, automatic, hybrid, and luxury vehicles (Sedans, Fortuner, Innova, BMW, Audi, Mercedes).`
      }
    ],
    seo: {
      title: `Acting Driver in ${districtName} | 24x7 Driver on Call | SAMAYAS`,
      description: `Hire 24/7 verified acting drivers in ${districtName} for your own car. Local packages from ₹500 (4 hrs), outstation from ₹800. Doorstep pickup in 30 mins.`,
      keywords: [
        `acting driver in ${districtName.toLowerCase()}`,
        `driver on call ${districtName.toLowerCase()}`,
        `temporary driver ${districtName.toLowerCase()}`,
        `outstation driver ${districtName.toLowerCase()}`,
        `hourly driver hire ${districtName.toLowerCase()}`
      ]
    }
  };
});

export function getActingDriverBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return actingDriversDataset.find((item) => item.slug.toLowerCase() === normalized) || null;
}
