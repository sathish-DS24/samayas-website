function computeAirportFare(distanceKm) {
  const billableKm = Math.max(distanceKm, 130);
  return {
    hatchback: Math.round(billableKm * 15),
    sedan: Math.round(billableKm * 15),
    suv: Math.round(billableKm * 20),
    innova: Math.round(billableKm * 22),
    hycross: Math.round(billableKm * 25),
    traveller: Math.round(billableKm * 30),
  };
}

export const airportRoutesDataset = [
  // ── TRICHY AIRPORT ROUTES ──
  {
    id: 'trz-thanjavur',
    slug: 'trichy-airport-to-thanjavur',
    airportSlug: 'tiruchirappalli-international-airport',
    airportName: 'Tiruchirappalli International Airport',
    airportIata: 'TRZ',
    destination: 'Thanjavur',
    direction: 'AirportToCity',
    distanceKm: 55,
    travelTime: '1.0 Hours',
    vehicleFare: computeAirportFare(55),
    tollEstimate: '₹40 - ₹70',
    parkingEstimate: 'Included at actuals',
    driverAllowance: 'Included in fare',
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d250819.3496359567!2d78.7180!3d10.7700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3baa8d4512e9b027%3A0xe54ef7790b4d4b17!2sTiruchirappalli%20International%20Airport!3m2!1d10.7654!2d78.7097!4m5!1s0x3baaab021b344795%3A0xb3044101e4a42b10!2sThanjavur!3m2!1d10.7870!2d79.1378!5e0!3m2!1sen!2sin!4v1700000000000',
    pickupLocations: [
      'Trichy Airport New Integrated Terminal Building (NITB) Concourse',
      'Trichy Airport Arrivals Exit Gate (Meet & Greet)',
      'Trichy Airport VIP Lounge Gate'
    ],
    dropLocations: [
      'Thanjavur Brihadeeswarar Big Temple Area',
      'Thanjavur Railway Station & Bus Stand',
      'Thanjavur Old & New Bus Stand Hotels',
      'Thanjavur Residential Doorsteps & Resorts'
    ],
    highwayInfo: ['NH83 Four-lane Toll Highway'],
    exploreAlongRoute: {
      restaurants: [
        { name: 'Sathars Restaurant Trichy', cuisine: 'South Indian & Biryani', famousFor: 'Mutton Biryani & Parotta', detour: '2 km Detour', mealType: ['Lunch', 'Dinner'], rating: '4.6★' }
      ],
      temples: [
        { name: 'Thanjavur Brihadeeswarar Big Temple', description: 'UNESCO World Heritage 1,000-year-old Chola granite temple.', detour: '1 km Detour', stopDuration: '1.5 Hours' }
      ],
      localSpecialties: [
        { name: 'Thanjavur Dancing Dolls & Art Plates', location: 'Thanjavur Palace Bazaar', famousFor: 'Traditional GI Tagged Handicrafts' }
      ]
    },
    relatedRoutes: [
      { name: 'Thanjavur to Trichy Airport', slug: 'thanjavur-to-trichy-airport', distance: '55 km', startingFare: 1950 },
      { name: 'Trichy Airport to Kumbakonam', slug: 'trichy-airport-to-kumbakonam', distance: '90 km', startingFare: 1950 },
      { name: 'Trichy Airport to Velankanni', slug: 'trichy-airport-to-velankanni', distance: '155 km', startingFare: 2325 }
    ],
    faq: [
      { q: 'How far is Thanjavur from Trichy Airport and how much does a cab cost?', a: 'Thanjavur is 55 km from Trichy Airport (TRZ). Travel time is approx 1 hour via NH83. Under SAMAYAS tariff (min 130 km billing), Hatchback/Sedan fare is ₹1,950 with zero return charges.' },
      { q: 'Will the driver wait if my flight to Trichy Airport gets delayed?', a: 'Yes! We track your flight live using your flight number. Driver pickup timing updates automatically with no delay penalties.' }
    ],
    reviews: [
      { name: 'Ramanathan K. (NRI Malaysia)', rating: 5, text: 'Landed at Trichy Airport late night. Driver was waiting at exit with my name card. Smooth drive to Thanjavur doorstep.', date: '2026-07-15' },
      { name: 'Deepa S.', rating: 5, text: 'Clean sedan car, driver helped with heavy international luggage. Highly recommended for airport transfers!', date: '2026-07-20' }
    ],
    seo: {
      title: 'Trichy Airport to Thanjavur Taxi | ₹15/km Cab Booking | SAMAYAS',
      description: 'Book 24/7 taxi from Trichy Airport (TRZ) to Thanjavur. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. Live flight delay tracking & doorstep pickup.',
      keywords: ['trichy airport to thanjavur taxi', 'trz airport to thanjavur cab', 'trichy airport thanjavur cab booking']
    }
  },

  {
    id: 'thanjavur-trz',
    slug: 'thanjavur-to-trichy-airport',
    airportSlug: 'tiruchirappalli-international-airport',
    airportName: 'Tiruchirappalli International Airport',
    airportIata: 'TRZ',
    destination: 'Thanjavur',
    direction: 'CityToAirport',
    distanceKm: 55,
    travelTime: '1.0 Hours',
    vehicleFare: computeAirportFare(55),
    tollEstimate: '₹40 - ₹70',
    parkingEstimate: 'Included at actuals',
    driverAllowance: 'Included in fare',
    pickupLocations: [
      'Thanjavur Home / Hotel Doorstep Pickup',
      'Thanjavur Big Temple Precincts',
      'Thanjavur Bus Stand / Junction'
    ],
    dropLocations: [
      'Trichy Airport Terminal Departure Gate'
    ],
    highwayInfo: ['NH83 Four-lane Highway'],
    relatedRoutes: [
      { name: 'Trichy Airport to Thanjavur', slug: 'trichy-airport-to-thanjavur', distance: '55 km', startingFare: 1950 }
    ],
    faq: [
      { q: 'How early should I book my cab from Thanjavur to Trichy Airport for an international flight?', a: 'We recommend departing Thanjavur 4 hours prior to international flight departure time. Drive time is 1 hour via NH83.' }
    ],
    reviews: [
      { name: 'Karthik Raja', rating: 5, text: 'Prompt pickup at 3:00 AM from Thanjavur for early morning flight to Singapore. Reached Trichy airport effortlessly.', date: '2026-07-18' }
    ],
    seo: {
      title: 'Thanjavur to Trichy Airport Taxi | ₹15/km Cab Booking | SAMAYAS',
      description: 'Book 24/7 doorstep taxi from Thanjavur to Trichy Airport (TRZ). Guaranteed timely airport drop with zero return fee.',
      keywords: ['thanjavur to trichy airport taxi', 'thanjavur to trz airport cab']
    }
  },

  // ── CHENNAI AIRPORT ROUTES ──
  {
    id: 'maa-pondicherry',
    slug: 'chennai-airport-to-pondicherry',
    airportSlug: 'chennai-international-airport',
    airportName: 'Chennai International Airport',
    airportIata: 'MAA',
    destination: 'Pondicherry',
    direction: 'AirportToCity',
    distanceKm: 145,
    travelTime: '3.0 Hours',
    vehicleFare: computeAirportFare(145),
    tollEstimate: '₹110 - ₹160',
    parkingEstimate: 'Included at actuals',
    driverAllowance: 'Included in fare',
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d497698.8123!2d80.05!3d12.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a525fc964893be5%3A0xdff70ef6631b6e4e!2sChennai%20International%20Airport!3m2!1d12.9941!2d80.1709!4m5!1s0x3a5361ab8e49cfcf%3A0xcc6bd32773198083!2sPuducherry!3m2!1d11.9416!2d79.8083!5e0!3m2!1sen!2sin!4v1700000000000',
    pickupLocations: [
      'Chennai Airport Terminal 1 (Domestic Arrivals)',
      'Chennai Airport Terminal 2 (International Arrivals)',
      'Chennai Airport Taxi Concourse'
    ],
    dropLocations: [
      'Pondicherry White Town French Quarter Hotels',
      'Pondicherry Promenade Rock Beach Resorts',
      'Auroville Township Guest Houses',
      'Pondicherry Bus Stand & Railway Station'
    ],
    highwayInfo: ['ECR Scenic Coastal Highway (NH332A)'],
    exploreAlongRoute: {
      restaurants: [
        { name: 'Baker Street French Bakery', cuisine: 'French & European', famousFor: 'Croissants, Quiche & Eclairs', detour: '1 km ECR Detour', mealType: ['Breakfast', 'Snacks'], rating: '4.7★' }
      ],
      attractions: [
        { name: 'Mahabalipuram Shore Temple', description: '7th-century UNESCO heritage shore temple on ECR route.', visitDuration: '1.5 Hours', familyFriendly: true }
      ]
    },
    relatedRoutes: [
      { name: 'Pondicherry to Chennai Airport', slug: 'pondicherry-to-chennai-airport', distance: '145 km', startingFare: 2175 },
      { name: 'Chennai Airport to Vellore', slug: 'chennai-airport-to-vellore', distance: '135 km', startingFare: 2025 }
    ],
    faq: [
      { q: 'What is the cab fare from Chennai Airport to Pondicherry?', a: 'Distance is 145 km. Hatchback/Sedan fare is ₹2,175 ($145 km x ₹15/km). Travel duration is approx 3 hours via ECR Coastal Highway.' }
    ],
    reviews: [
      { name: 'Jean-Luc M.', rating: 5, text: 'Fantastic ride from Chennai airport T2 straight to White Town Pondicherry. Driver spoke good English and drove safely.', date: '2026-07-22' }
    ],
    seo: {
      title: 'Chennai Airport to Pondicherry Taxi | ₹15/km Cab Booking | SAMAYAS',
      description: 'Book 24/7 Chennai Airport (MAA) to Pondicherry cab. Hatchback from ₹2,175, Sedan ₹2,175, SUV ₹2,900. Scenic ECR coastal route with doorstep drop.',
      keywords: ['chennai airport to pondicherry taxi', 'maa airport to pondicherry cab', 'chennai airport to pondicherry cab fare']
    }
  },

  // ── COIMBATORE AIRPORT ROUTES ──
  {
    id: 'cjb-ooty',
    slug: 'coimbatore-airport-to-ooty',
    airportSlug: 'coimbatore-international-airport',
    airportName: 'Coimbatore International Airport',
    airportIata: 'CJB',
    destination: 'Ooty',
    direction: 'AirportToCity',
    distanceKm: 85,
    travelTime: '2.75 Hours',
    vehicleFare: computeAirportFare(85),
    tollEstimate: '₹60 - ₹100',
    parkingEstimate: 'Included at actuals',
    driverAllowance: 'Included in fare',
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d497698.8123!2d76.95!3d11.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3ba859af2f971e47%3A0xb23171542f7c0068!2sCoimbatore%20International%20Airport!3m2!1d11.0300!2d77.0434!4m5!1s0x3ba8960717208151%3A0xe54e69d7b420f18d!2sOoty!3m2!1d11.4102!2d76.6950!5e0!3m2!1sen!2sin!4v1700000000000',
    pickupLocations: [
      'Coimbatore Airport Passenger Terminal Arrivals',
      'Coimbatore Airport Reserved Taxi Concourse'
    ],
    dropLocations: [
      'Ooty Town Hotels & Resorts',
      'Ooty Commercial Road & Charring Cross',
      'Lovedale / Coonoor Road Homestays'
    ],
    highwayInfo: ['NH181 Mettupalayam Ghat Road (36 Hairpin Bends)'],
    exploreAlongRoute: {
      scenicViews: [
        { name: 'Nilgiri Hairpin Bends Viewpoint', viewType: 'Mountain Valley Cloud View', stopDuration: '15 Mins' }
      ],
      localSpecialties: [
        { name: 'Ooty Homemade Chocolates & Tea', location: 'Ooty Town', famousFor: 'Freshly made dark chocolates & Nilgiri tea' }
      ]
    },
    relatedRoutes: [
      { name: 'Ooty to Coimbatore Airport', slug: 'ooty-to-coimbatore-airport', distance: '85 km', startingFare: 1950 },
      { name: 'Coimbatore Airport to Coonoor', slug: 'coimbatore-airport-to-coonoor', distance: '70 km', startingFare: 1950 }
    ],
    faq: [
      { q: 'Are SAMAYAS drivers experienced in hill driving for Coimbatore Airport to Ooty trips?', a: 'Yes! All drivers operating the Nilgiri ghat road are certified hill driving specialists.' }
    ],
    reviews: [
      { name: 'Vikram A.', rating: 5, text: 'Picked up right after our flight landed at CJB. Driver handled the 36 hairpin bends smoothly and comfortably.', date: '2026-07-24' }
    ],
    seo: {
      title: 'Coimbatore Airport to Ooty Taxi | ₹15/km Cab Booking | SAMAYAS',
      description: 'Book 24/7 Coimbatore Airport (CJB) to Ooty cab. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. Hill-certified drivers & doorstep resort drop.',
      keywords: ['coimbatore airport to ooty taxi', 'cjb airport to ooty cab', 'coimbatore airport to ooty fare']
    }
  },

  // ── MADURAI AIRPORT ROUTES ──
  {
    id: 'ixm-rameswaram',
    slug: 'madurai-airport-to-rameswaram',
    airportSlug: 'madurai-airport',
    airportName: 'Madurai Airport',
    airportIata: 'IXM',
    destination: 'Rameshwaram',
    direction: 'AirportToCity',
    distanceKm: 175,
    travelTime: '3.5 Hours',
    vehicleFare: computeAirportFare(175),
    tollEstimate: '₹120 - ₹180',
    parkingEstimate: 'Included at actuals',
    driverAllowance: 'Included in fare',
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d497698.8123!2d78.09!3d9.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3b00c5bc62237435%3A0xea82c4be3e95ebef!2sMadurai%20Airport!3m2!1d9.8345!2d78.0934!4m5!1s0x3b01e3d36b8565a5%3A0x6b4f74d49a4f479a!2sRameswaram!3m2!1d9.2876!2d79.3129!5e0!3m2!1sen!2sin!4v1700000000000',
    pickupLocations: [
      'Madurai Airport Integrated Terminal Exit'
    ],
    dropLocations: [
      'Rameshwaram Ramanathaswamy Temple Area',
      'Rameshwaram Agni Theertham Beach Hotels',
      'Dhanushkodi Entrance Checkpost'
    ],
    highwayInfo: ['NH87 Madurai-Rameshwaram Expressway & Pamban Sea Bridge'],
    exploreAlongRoute: {
      temples: [
        { name: 'Ramanathaswamy Temple 22 Holy Wells', description: 'World famous 1,000 pillar corridor Jyotirlinga shrine.', stopDuration: '2 Hours' }
      ],
      selfieSpots: [
        { name: 'Pamban Rail & Highway Sea Bridge', type: 'Sea Bridge View', location: 'Pamban Causeway' }
      ]
    },
    relatedRoutes: [
      { name: 'Rameshwaram to Madurai Airport', slug: 'rameswaram-to-madurai-airport', distance: '175 km', startingFare: 2625 }
    ],
    faq: [
      { q: 'What is the cab fare from Madurai Airport to Rameshwaram?', a: 'Distance is 175 km. Hatchback/Sedan fare is ₹2,625 ($175 km x ₹15/km) with zero return charges.' }
    ],
    reviews: [
      { name: 'Meenakshi Sundaram', rating: 5, text: 'Seamless airport transfer for my elderly parents from IXM straight to Rameshwaram hotel doorstep.', date: '2026-07-21' }
    ],
    seo: {
      title: 'Madurai Airport to Rameshwaram Taxi | ₹15/km Cab Booking | SAMAYAS',
      description: 'Book 24/7 Madurai Airport (IXM) to Rameshwaram cab. Hatchback/Sedan from ₹2,625, SUV ₹3,500. Direct doorstep drop at Temple or Agni Theertham.',
      keywords: ['madurai airport to rameshwaram taxi', 'ixm airport to rameshwaram cab']
    }
  }
];

export function getAirportRouteBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return airportRoutesDataset.find((r) => r.slug.toLowerCase() === normalized) || null;
}

export function getAirportRoutesByAirport(airportSlug) {
  if (!airportSlug) return [];
  const normalized = airportSlug.toLowerCase().trim();
  return airportRoutesDataset.filter((r) => r.airportSlug.toLowerCase() === normalized);
}
