export interface DriverServiceItem {
  id: string;
  slug: string;
  serviceName: string;
  shortName: string;
  tagline: string;
  description: string;
  idealFor: string[];
  benefits: { title: string; desc: string }[];
  pricing: {
    baseRate: string;
    unit: string;
    minimumBooking: string;
    overtimeRate: string;
    nightAllowance: string;
  };
  features: string[];
  faq: { q: string; a: string }[];
  reviews: { name: string; rating: number; text: string; location: string; date: string }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const driverServicesDataset: DriverServiceItem[] = [
  {
    id: 'hourly-driver',
    slug: 'hourly-driver',
    serviceName: 'Hourly Acting Driver on Call',
    shortName: 'Hourly Driver',
    tagline: 'Hire a professional driver by the hour for local city errands & short trips',
    description: 'Flexibility at its best. Book an experienced acting driver for 2, 4, or 8 hours for local shopping, hospital visits, railway station pick-drops, or city meetings in your own car.',
    idealFor: [
      'Local Shopping & Market Visits',
      'Hospital & Doctor Appointments',
      'Railway Station & Bus Stand Drop/Pickup',
      'Short Business Errands & Meetings',
      'Senior Citizen Local Travel'
    ],
    benefits: [
      { title: 'Pay Only for Hours Used', desc: 'Transparent hourly billing with 2-hour minimum package.' },
      { title: 'Doorstep Pickup in 30 Mins', desc: 'Verified driver arrives directly at your home or location.' },
      { title: 'Manual & Automatic Experts', desc: 'Drivers proficient in all hatchback, sedan, luxury, and SUV models.' },
      { title: 'Stress-Free City Parking', desc: 'Driver handles congested traffic, parking search, and valet waiting.' }
    ],
    pricing: {
      baseRate: '₹350',
      unit: 'First 2 Hours',
      minimumBooking: '2 Hours (₹350)',
      overtimeRate: '₹90 / additional hour',
      nightAllowance: '₹150 (10 PM to 6 AM)'
    },
    features: [
      'Instant 24/7 Driver On Call',
      'Govt ID & License Verified',
      'Zero Petrol/Vehicle Wear Charges (Your Car)',
      'Local Route & Traffic Expertise',
      'Clean & Courteous Uniformed Drivers'
    ],
    faq: [
      { q: 'What is the minimum booking duration for an hourly acting driver?', a: 'Our minimum booking starts at 2 hours (₹350). Additional hours are charged at ₹90/hour.' },
      { q: 'Can I hire an hourly driver for automatic or luxury cars?', a: 'Yes! All SAMAYAS acting drivers are tested and proficient in driving automatic transmission, hybrid, and luxury vehicles (BMW, Audi, Mercedes, Fortuner).' },
      { q: 'How quickly can a driver reach my location?', a: 'We dispatch nearest verified drivers for doorstep arrival within 30 to 45 minutes of booking confirmation.' }
    ],
    reviews: [
      { name: 'Kavitha R.', rating: 5, text: 'Booked an hourly driver for T. Nagar shopping in Chennai. Driver handled parking effortlessly while we shopped peacefully.', location: 'Chennai', date: '2026-07-20' },
      { name: 'Senthil Nathan', rating: 5, text: 'Very polite driver for hospital visit with my elderly father in Trichy. On time and driven smoothly.', location: 'Tiruchirappalli', date: '2026-07-25' }
    ],
    seo: {
      title: 'Hourly Acting Driver on Call | Hire Driver by Hour | SAMAYAS',
      description: 'Hire 24/7 hourly acting drivers for local city travel in your own car. Rates start from ₹350 for 2 hours. Verified, courteous & experienced drivers.',
      keywords: ['hourly acting driver', 'driver on call', 'temporary driver per hour', 'local driver hire', 'acting driver near me']
    }
  },

  {
    id: 'outstation-driver',
    slug: 'outstation-driver',
    serviceName: 'Outstation & Intercity Acting Driver',
    shortName: 'Outstation Driver',
    tagline: 'Reliable, long-distance highway drivers for your family road trips',
    description: 'Travel long distances in the comfort of your own vehicle without driver fatigue. Our highway-certified outstation acting drivers take you safely to any destination across South India.',
    idealFor: [
      'Family Outstation Road Trips',
      'Pilgrimage & Temple Tours',
      'Weekend Gateway Vacations',
      'Interstate Business Journeys',
      'Relocation & Long Drives'
    ],
    benefits: [
      { title: 'Highway Certified Drivers', desc: 'Specialized in NH/SH speed management, night driving & ghat roads.' },
      { title: 'Fixed Daily Driver Allowance', desc: 'Clear ₹900/day driver bata with no hidden charges.' },
      { title: 'Comfort of Your Own Car', desc: 'Enjoy your own vehicle space, music, and cleanliness on long trips.' },
      { title: 'Zero Driver Stay Hassle', desc: 'Driver arranges their own food/rest or minimal food allowance.' }
    ],
    pricing: {
      baseRate: '₹900',
      unit: 'Per Day (12 Hours / Outstation)',
      minimumBooking: '1 Day (₹900 Bata)',
      overtimeRate: '₹80 / overtime hour',
      nightAllowance: '₹200 (10 PM to 6 AM)'
    },
    features: [
      'Ghat Road & Mountain Certified (Ooty, Kodaikanal, Yercaud)',
      '10+ Years Highway Driving Experience',
      'Punctual & Alcohol-Free Guarantee',
      'South India Route Knowledge (TN, KL, KA, AP, TS)',
      'Luggage Loading & Vehicle Care'
    ],
    faq: [
      { q: 'How is the outstation driver bata calculated?', a: 'Outstation driver fee is ₹900 per calendar day (12 hours of driving window). Food/night allowance applies if overnight stay is required.' },
      { q: 'Are drivers experienced in hill station ghat roads like Ooty or Kodaikanal?', a: 'Yes, we assign specialized hill-certified drivers with hairpin bend experience for Ooty, Kodaikanal, Valparai, and Yercaud trips.' }
    ],
    reviews: [
      { name: 'Dr. Rajesh Kumar', rating: 5, text: 'Hired an outstation driver for a 3-day Trichy to Kodaikanal trip in my Innova. Exceptional driving and route knowledge.', location: 'Coimbatore', date: '2026-07-18' }
    ],
    seo: {
      title: 'Outstation Acting Driver Hire | Intercity Highway Drivers | SAMAYAS',
      description: 'Book verified outstation acting drivers for long-distance road trips in your own car. Highway & ghat road certified drivers from ₹900/day.',
      keywords: ['outstation acting driver', 'outstation driver hire', 'driver for long drive', 'intercity acting driver', 'ghat road driver hire']
    }
  },

  {
    id: 'night-driver',
    slug: 'night-driver',
    serviceName: 'Late Night & Party Acting Driver',
    shortName: 'Night Driver',
    tagline: 'Safe, responsible designated night drivers for late-night travel & celebrations',
    description: 'Never drive tired or after a party. Our 24/7 designated night drivers ensure you and your loved ones arrive home safely in your own car late at night.',
    idealFor: [
      'Late Night Party & Pub Returns',
      'Late Airport Pickups & Drops',
      'Night Highway Travel',
      'Emergency Midnight Runs',
      'Dinner Parties & Weddings'
    ],
    benefits: [
      { title: '100% Safe & Designated Driving', desc: 'Zero alcohol tolerance. 100% safe return home guaranteed.' },
      { title: 'Available 24/7 Midnight', desc: 'Drivers ready for dispatch even at 2 AM or 4 AM.' },
      { title: 'Avoid Traffic Fines & Hazards', desc: 'Protect your license and safety after night events.' }
    ],
    pricing: {
      baseRate: '₹450',
      unit: 'First 2 Hours (Night)',
      minimumBooking: '2 Hours (₹450)',
      overtimeRate: '₹100 / additional hour',
      nightAllowance: 'Included in Night Base Rate'
    },
    features: [
      'Alert & Night-Vision Experienced Drivers',
      'Quick 20-30 Min Night Dispatch',
      'Safe Drop Right Inside Apartment/Home Garage',
      'Polite & Discrete Service'
    ],
    faq: [
      { q: 'Is night driver booking available at 2 AM or 3 AM?', a: 'Yes, SAMAYAS operates 24/7 round-the-clock dispatch for night drivers.' }
    ],
    reviews: [
      { name: 'Venkatesh P.', rating: 5, text: 'Lifesaver after a late office party in Chennai. Driver arrived in 20 mins and parked my car safely in my basement.', location: 'Chennai', date: '2026-07-22' }
    ],
    seo: {
      title: 'Late Night Acting Driver | Designated Party Driver | SAMAYAS',
      description: 'Book 24/7 late night acting drivers and designated party drivers for safe return home in your own car. Fast midnight dispatch.',
      keywords: ['night acting driver', 'designated driver', 'party driver hire', 'late night driver on call', 'night driver near me']
    }
  },

  {
    id: 'wedding-driver',
    slug: 'wedding-driver',
    serviceName: 'Wedding & Marriage Event Driver Service',
    shortName: 'Wedding Driver',
    tagline: 'Dignified, uniformed drivers for bride/groom cars, VIP guest shuttles & marriage events',
    description: 'Ensure smooth event transportation on your special day. We provide uniformed, courteous acting drivers for decorated wedding cars, family mobility, and guest hall shuttles.',
    idealFor: [
      'Bride & Groom Wedding Luxury Cars',
      'Marriage Guest Shuttle Services',
      'VIP & Relative Transportation',
      'Multi-Day Wedding Ceremonies',
      'Reception & Mandapam Chauffeurs'
    ],
    benefits: [
      { title: 'Uniformed Professional Chauffeurs', desc: 'Dressed in clean formal attire for a premium wedding look.' },
      { title: 'Punctual Event Coordination', desc: 'Drivers arrive 30 mins before schedule for zero event delays.' },
      { title: 'Careful Decorated Car Handling', desc: 'Trained to drive flower-decorated cars with maximum care.' }
    ],
    pricing: {
      baseRate: '₹1,200',
      unit: 'Full Day (10 Hours)',
      minimumBooking: 'Full Day (₹1,200)',
      overtimeRate: '₹100 / additional hour',
      nightAllowance: '₹200 (if after 10 PM)'
    },
    features: [
      'Formal Uniform & White Glove Etiquette',
      'Decorated Car Care & Careful Maneuvering',
      'Multi-Car Bulk Driver Booking Available',
      'Local Venue & Mandapam Route Knowledge'
    ],
    faq: [
      { q: 'Can we book multiple acting drivers for a 2-day wedding event?', a: 'Yes! We supply team packages of 2 to 10+ uniformed drivers for multi-day marriage functions and guest shuttles.' }
    ],
    reviews: [
      { name: 'Srinivasan & Family', rating: 5, text: 'Booked 4 wedding drivers for our daughter’s marriage in Madurai. Excellent service, punctual and very polite.', location: 'Madurai', date: '2026-07-12' }
    ],
    seo: {
      title: 'Wedding Acting Driver Service | Marriage Car Driver | SAMAYAS',
      description: 'Hire professional uniformed acting drivers for wedding luxury cars, guest shuttles, and marriage functions across Tamil Nadu.',
      keywords: ['wedding acting driver', 'marriage car driver hire', 'wedding chauffeur', 'event driver booking', 'uniformed wedding driver']
    }
  },

  {
    id: 'corporate-driver',
    slug: 'corporate-driver',
    serviceName: 'Corporate & Executive Chauffeur Service',
    shortName: 'Corporate Driver',
    tagline: 'Professional chauffeurs for CEOs, business delegates, and corporate fleet mobility',
    description: 'Elevate your corporate image with trained executive chauffeurs. Ideal for business meetings, client airport transfers, executive commutes, and company events.',
    idealFor: [
      'CEO & CXO Daily Commute',
      'Corporate Client Airport Transfers',
      'Business Delegation & Conferences',
      'Temporary Corporate Fleet Replacement',
      'VIP Visitor Mobility'
    ],
    benefits: [
      { title: 'Executive Etiquette Trained', desc: 'Refined communication, door opening etiquette, and privacy discretion.' },
      { title: 'GST Invoicing & Corporate Billing', desc: 'Official GST tax invoices for company expense claims.' },
      { title: 'Luxury Car Expertise', desc: 'Proven proficiency in Mercedes, BMW, Audi, Jaguar, and Land Rover.' }
    ],
    pricing: {
      baseRate: '₹1,400',
      unit: '10 Hours Corporate Shift',
      minimumBooking: '10 Hours (₹1,400)',
      overtimeRate: '₹120 / additional hour',
      nightAllowance: '₹200'
    },
    features: [
      'GST Invoice Compliant',
      'Strict NDA & Confidentiality Standard',
      'Punctual Arrival 15 Mins Prior',
      'English & Multi-Lingual Speaking Drivers'
    ],
    faq: [
      { q: 'Do you provide monthly corporate driver retainer contracts?', a: 'Yes, we offer custom monthly acting driver retainer contracts with dedicated assigned chauffeurs for corporate executives.' }
    ],
    reviews: [
      { name: 'Anand V., VP Operations', rating: 5, text: 'Impeccable executive chauffeur service for our visiting delegates in Chennai. Highly professional.', location: 'Chennai', date: '2026-07-14' }
    ],
    seo: {
      title: 'Corporate Acting Driver & Executive Chauffeur | SAMAYAS',
      description: 'Book professional corporate acting drivers and executive chauffeurs for business meetings, CEOs, and client transfers with GST invoicing.',
      keywords: ['corporate acting driver', 'executive chauffeur hire', 'business driver on call', 'corporate car driver', 'gst driver booking']
    }
  },

  {
    id: 'personal-chauffeur',
    slug: 'personal-chauffeur',
    serviceName: 'Dedicated Personal Chauffeur',
    shortName: 'Personal Chauffeur',
    tagline: 'Your private, dedicated driver for daily family, business, and personal mobility',
    description: 'Experience the luxury of a dedicated personal chauffeur. Available on daily, weekly, or monthly flexible retainers to handle all your family commuting needs.',
    idealFor: [
      'Daily Family & Office Commute',
      'Children School & Tuition Pickups',
      'Shopping & Social Engagements',
      'VIP Luxury Car Ownership',
      'Busy Professionals & Business Owners'
    ],
    benefits: [
      { title: 'Dedicated Same Driver Option', desc: 'Build trust with a regular assigned driver for your household.' },
      { title: 'Complete Vehicle Upkeep', desc: 'Driver assists with car cleaning, pressure checks, and service drops.' },
      { title: 'Flexible Daily / Monthly Retainer', desc: 'Cost-effective long-term rates.' }
    ],
    pricing: {
      baseRate: '₹1,100',
      unit: 'Per Day (10 Hours)',
      minimumBooking: '1 Day (₹1,100)',
      overtimeRate: '₹90 / additional hour',
      nightAllowance: '₹150'
    },
    features: [
      'Dedicated Household Driver Options',
      'Car Maintenance & Wash Care',
      'Child & Family Safety Certified',
      'Background Checked & Police Verified'
    ],
    faq: [
      { q: 'Can I hire a personal chauffeur on a monthly retainer basis?', a: 'Yes, we provide flexible monthly personal driver packages starting from 26 days/month.' }
    ],
    reviews: [
      { name: 'Dr. Meena Swaminathan', rating: 5, text: 'Our regular personal driver handles my daily clinic commute and school pickups. Extremely trustworthy.', location: 'Coimbatore', date: '2026-07-19' }
    ],
    seo: {
      title: 'Personal Chauffeur & Private Driver Hire | SAMAYAS',
      description: 'Hire dedicated personal chauffeurs and private drivers for daily family commute, school drops, and luxury cars.',
      keywords: ['personal chauffeur', 'private driver hire', 'daily personal driver', 'family chauffeur service', 'monthly driver hire']
    }
  },

  {
    id: 'driver-for-senior-citizens',
    slug: 'driver-for-senior-citizens',
    serviceName: 'Driver Service for Senior Citizens',
    shortName: 'Senior Citizen Driver',
    tagline: 'Patient, gentle, and respectful drivers trained for elderly mobility & hospital visits',
    description: 'Give your elderly parents the gift of safe, comfortable travel. Our compassionate drivers provide extra assistance with wheelchair/walker loading, gentle driving, and arm support.',
    idealFor: [
      'Elderly Parent Medical & Hospital Trips',
      'Temple Visits & Religious Pilgrimages',
      'Bank, Pension & Social Visits',
      'NRIs Booking Driver for Parents in India',
      'Senior Citizen Shopping & Outings'
    ],
    benefits: [
      { title: 'Patient & Gentle Driving', desc: 'Smooth braking, low speeds, and zero jerky acceleration.' },
      { title: 'Arm Support & Walker Assistance', desc: 'Driver assists elderly passengers into and out of the vehicle.' },
      { title: 'NRI Pre-Booking Support', desc: 'Children living abroad can easily book and track their parents trip.' }
    ],
    pricing: {
      baseRate: '₹400',
      unit: 'First 3 Hours',
      minimumBooking: '3 Hours (₹400)',
      overtimeRate: '₹85 / additional hour',
      nightAllowance: '₹150'
    },
    features: [
      'Empathy & Patience Trained Drivers',
      'Door-to-Door Arm Assistance',
      'Hospital Waiting & Wheelchair Handling',
      'Real-Time WhatsApp Tracking for Children'
    ],
    faq: [
      { q: 'Can NRIs book a driver for their parents living in Tamil Nadu from abroad?', a: 'Yes! NRIs can book online via WhatsApp or website form. We send driver details and live updates directly to the children abroad.' }
    ],
    reviews: [
      { name: 'Vikram S. (NRI Singapore)', rating: 5, text: 'Booked a driver for my 75-year-old mother in Trichy for hospital visits. Driver was extremely patient and helpful. God bless!', location: 'Tiruchirappalli', date: '2026-07-21' }
    ],
    seo: {
      title: 'Driver for Senior Citizens | Elderly Car Driver Hire | SAMAYAS',
      description: 'Book patient, compassionate acting drivers for senior citizens and elderly parents. Ideal for hospital visits, temple trips, and NRI family bookings.',
      keywords: ['driver for senior citizens', 'elderly driver hire', 'driver for hospital visit', 'nri booking driver for parents', 'patient acting driver']
    }
  },

  {
    id: 'designated-driver',
    slug: 'designated-driver',
    serviceName: 'Designated Driver & Event Safe Return',
    shortName: 'Designated Driver',
    tagline: 'Safe, responsible drivers for club events, parties, and night celebrations',
    description: 'Enjoy your evening without worrying about driving back. Our designated drivers arrive at your event venue to drive you home safely in your own vehicle.',
    idealFor: [
      'Club Parties & Pub Outings',
      'Cocktail & Dinner Parties',
      'Bachelor Parties & Celebrations',
      'New Year & Festival Parties',
      'Late Night Social Gatherings'
    ],
    benefits: [
      { title: '100% Safe Home Return', desc: 'Drive your own car home safely without traffic violations or risks.' },
      { title: 'Flexible Venue Pickup', desc: 'Driver meets you at club/hotel valet entrance.' },
      { title: 'Flat Transparent Rates', desc: 'No peak surge fees during weekends or holidays.' }
    ],
    pricing: {
      baseRate: '₹450',
      unit: 'First 2 Hours',
      minimumBooking: '2 Hours (₹450)',
      overtimeRate: '₹100 / additional hour',
      nightAllowance: 'Included'
    },
    features: [
      'Prompt Venue Entrance Pickup',
      'Strict Zero Alcohol Policy for Drivers',
      'Vehicle Parking in Your Garage Included',
      'Available 24 Hours / 365 Days'
    ],
    faq: [
      { q: 'How do I locate my designated driver at the party venue?', a: 'The driver contacts you 15 mins prior and waits directly at the valet drop-off / main exit concourse.' }
    ],
    reviews: [
      { name: 'Dinesh Kumar', rating: 5, text: 'Seamless experience. Driver met me at the hotel valet in Chennai and drove us back safely. Best decision!', location: 'Chennai', date: '2026-07-24' }
    ],
    seo: {
      title: 'Designated Driver Hire | Safe Return Party Driver | SAMAYAS',
      description: 'Book reliable designated acting drivers for party returns, club events, and night celebrations. 100% safe travel in your own car.',
      keywords: ['designated driver', 'party return driver', 'safe driver hire', 'pub return driver', 'club designated driver']
    }
  }
];

export function getDriverServiceBySlug(slug?: string): DriverServiceItem | null {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return driverServicesDataset.find((s) => s.slug.toLowerCase() === normalized) || null;
}
