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
    description: `Need a reliable acting driver in ${districtName}? SAMAYAS provides 24/7 background-verified, licensed drivers for your personal vehicle. Whether you need a 2-hour local shopping driver, outstation highway driver to Chennai/Bengaluru, or a dedicated personal chauffeur, our drivers arrive at your doorstep in 30 minutes.`,
    popularLocations: [
      `${districtName} Central Railway Station & Bus Stand`,
      `${districtName} Commercial & Shopping Centers`,
      `${districtName} Hospitals & Diagnostic Labs`,
      `${districtName} Residential Neighborhoods & Suburbs`,
      `${districtName} Marriage Halls & Event Venues`
    ],
    pricing: {
      hourly: '₹350 (First 2 Hours)',
      halfDay: '₹650 (5 Hours / Local)',
      fullDay: '₹1,100 (10 Hours / Local)',
      outstationBata: '₹900 / Day (12 Hours Window)',
      nightCharges: '₹150 (10 PM to 6 AM)',
      waitingCharges: '₹80 / additional hour'
    },
    driverCategories: [
      { name: 'Hourly Acting Driver', desc: 'Short 2 to 4-hour local trips, hospital visits & market shopping in your car.', rate: 'From ₹350' },
      { name: 'Half-Day Driver', desc: '5-hour flexible package for local business errands & social visits.', rate: 'From ₹650' },
      { name: 'Full-Day Driver', desc: '10-hour complete day availability for intensive city commuting.', rate: 'From ₹1,100' },
      { name: 'Outstation Highway Driver', desc: 'Long-distance intercity road trips & weekend vacations across South India.', rate: '₹900 / Day Bata' },
      { name: 'Late Night & Party Driver', desc: 'Designated 24/7 night driver for safe return after evening celebrations.', rate: 'From ₹450' },
      { name: 'Senior Citizen Driver', desc: 'Gentle, patient driver with door-to-door arm support & wheelchair assistance.', rate: 'From ₹400' },
      { name: 'Wedding & Event Driver', desc: 'Uniformed chauffeur for decorated marriage cars & guest shuttles.', rate: 'From ₹1,200' },
      { name: 'Corporate Chauffeur', desc: 'Polite executive driver for CEO commutes & business client transfers.', rate: 'From ₹1,400' }
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
      description: `Hire 24/7 verified acting drivers in ${districtName} for your own car. Hourly rates from ₹350, outstation bata ₹900/day. Doorstep pickup in 30 mins.`,
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
