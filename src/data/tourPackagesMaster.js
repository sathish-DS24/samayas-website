export const tourPackagesDataset = [
  {
    id: 'ooty-2-days',
    slug: 'ooty-2-days',
    title: 'Ooty 2 Days Sightseeing Tour Package',
    subtitle: 'Explore Ooty Lake, Botanical Garden, Doddabetta & Tea Estates in 2 Days',
    destination: 'Ooty',
    destinationSlug: 'ooty',
    category: 'Hill Station',
    categorySlug: 'hill-stations',
    duration: '2 Days / 1 Night',
    originCity: 'Coimbatore / Mettupalayam',
    startingPrice: 4800,
    heroImage: '/images/cars/sedan.webp',
    overview: 'Experience the essence of Ooty in a 2-day private cab tour. Visit the highest Nilgiri peak at Doddabetta, stroll through 55-acre Botanical Gardens, enjoy boating at Ooty Lake, and explore fresh tea plantations with a dedicated private driver.',
    idealFor: ['Weekend Travellers', 'Couples', 'Families', 'Corporate Groups'],
    itinerary: [
      {
        day: 1,
        title: 'Day 1: Arrival & Core Ooty Sightseeing',
        activities: [
          'Pickup from Coimbatore Airport / Railway Station or Mettupalayam by SAMAYAS AC cab.',
          'Scenic drive up Nilgiri ghat road with photo stops at Ketti Valley Viewpoint.',
          'Check-in at Ooty hotel and relax.',
          'Afternoon visit to Government Botanical Garden and Rose Garden.',
          'Evening boat ride at Ooty Lake & shopping for homemade chocolates.'
        ],
        overnightStay: 'Ooty Hotel'
      },
      {
        day: 2,
        title: 'Day 2: Doddabetta Peak, Tea Factory & Return Drive',
        activities: [
          'Early morning trip to Doddabetta Peak (2,637 m) for panoramic valley views.',
          'Guided tour of Tea Factory & Tea Museum with fresh tea tasting.',
          'Visit Pine Forest & Kamraj Sagar Dam.',
          'Evening return drive to Coimbatore / Mettupalayam for drop.'
        ]
      }
    ],
    included: ['Private AC Sedan / SUV cab for 2 full days', 'Experienced hills driver allowances & fuel', 'Toll charges & parking fees', 'Doorstep pickup & drop'],
    excluded: ['Hotel accommodation', 'Sightseeing entrance tickets & boating fees', 'Meals & personal expenses'],
    recommendedVehicle: 'Etios / DZire Sedan for couples or Innova Crysta for families.',
    pricingOverview: [
      { vehicleType: 'Sedan (Etios / DZire)', seatingCapacity: '4 Passengers', estimatedPrice: 4800 },
      { vehicleType: 'SUV (Ertiga)', seatingCapacity: '6 Passengers', estimatedPrice: 6500 },
      { vehicleType: 'Innova Crysta', seatingCapacity: '7 Passengers', estimatedPrice: 8500 }
    ],
    travelTips: ['Carry light jacket for evening lake breezes.', 'Pre-book hotel in Ooty advance.'],
    reviews: [
      { author: 'Vikram Seth', location: 'Chennai', rating: 5, comment: 'Perfect 2-day weekend tour! Cab was clean, driver was punctual.', date: '2026-06-10' }
    ],
    faq: [
      { question: 'Is driver stay cost included in the cab price?', answer: 'Yes! Driver bata and night allowances are fully included in the total fare.' }
    ],
    seo: {
      title: 'Ooty 2 Days Sightseeing Tour Package by Private Cab | SAMAYAS',
      description: 'Book Ooty 2 days sightseeing tour package with private AC cab. Includes Doddabetta, Botanical Garden, Ooty Lake & Tea Factory with doorstep pickup.',
      keywords: ['ooty 2 days tour package', 'ooty 2 day cab itinerary', 'coimbatore to ooty 2 day trip']
    }
  },
  {
    id: 'ooty-3-days',
    slug: 'ooty-3-days',
    title: 'Ooty & Coonoor 3 Days Sightseeing Package',
    subtitle: 'Complete Nilgiri Experience including Ooty, Coonoor & Pykara Lake',
    destination: 'Ooty',
    destinationSlug: 'ooty',
    category: 'Hill Station',
    categorySlug: 'hill-stations',
    duration: '3 Days / 2 Nights',
    originCity: 'Coimbatore / Chennai',
    startingPrice: 6900,
    heroImage: '/images/cars/innova.webp',
    overview: 'A comprehensive 3-day private cab holiday package covering Ooty, Coonoor tea gardens, Sim’s Park, Lamb’s Rock, Dolphin’s Nose, and Pykara Waterfalls & Lake.',
    idealFor: ['Families', 'Honeymoon Couples', 'Photographers'],
    itinerary: [
      { day: 1, title: 'Day 1: Arrival & Ooty Town Highlights', activities: ['Pickup from Coimbatore / Salem', 'Check-in hotel', 'Botanical Garden & Ooty Lake boating'] },
      { day: 2, title: 'Day 2: Coonoor Excursion & Toy Train Ride', activities: ['Experience Nilgiri Toy Train to Coonoor', 'Visit Sim’s Park, Lamb’s Rock & Dolphin’s Nose viewpoint', 'Tea plantation walk'] },
      { day: 3, title: 'Day 3: Pykara Lake, Waterfalls & Departure', activities: ['Morning drive to Pykara Lake & Shooting Medow (Pine Forest)', 'Speedboating at Pykara', 'Return transfer to Coimbatore'] }
    ],
    included: ['Private AC vehicle for 3 days', 'All driver charges, toll & parking', 'Fuel costs'],
    excluded: ['Hotel stay', 'Entry tickets & Toy train tickets'],
    recommendedVehicle: 'Innova / Ertiga SUV',
    pricingOverview: [
      { vehicleType: 'Sedan (Etios / DZire)', seatingCapacity: '4 Passengers', estimatedPrice: 6900 },
      { vehicleType: 'Innova Crysta', seatingCapacity: '7 Passengers', estimatedPrice: 11500 }
    ],
    travelTips: ['Book Toy train tickets early on IRCTC.'],
    reviews: [{ author: 'Karthik N.', location: 'Bangalore', rating: 5, comment: 'Coonoor trip on Day 2 was unbelievable! Highly recommend SAMAYAS driver.', date: '2026-05-18' }],
    faq: [{ question: 'Is Coonoor sightseeing included in 3 days Ooty tour?', answer: 'Yes! Day 2 is fully dedicated to Coonoor tea gardens, Sim’s Park, and Dolphin’s Nose.' }],
    seo: {
      title: 'Ooty Coonoor 3 Days Sightseeing Tour Package | SAMAYAS Cab',
      description: 'Book Ooty 3 days tour package covering Ooty, Coonoor, Doddabetta, Pykara & Nilgiri toy train with private taxi.',
      keywords: ['ooty 3 days tour package', 'ooty coonoor cab package', 'coimbatore to ooty 3 day trip']
    }
  },
  {
    id: 'kodaikanal-2-days',
    slug: 'kodaikanal-2-days',
    title: 'Kodaikanal 2 Days Hill Escape Package',
    subtitle: 'Kodai Lake, Pillar Rocks, Coakers Walk & Waterfalls',
    destination: 'Kodaikanal',
    destinationSlug: 'kodaikanal',
    category: 'Hill Station',
    categorySlug: 'hill-stations',
    duration: '2 Days / 1 Night',
    originCity: 'Madurai / Dindigul',
    startingPrice: 5200,
    heroImage: '/images/cars/suv.webp',
    overview: 'Escape to the princess of hill stations in a private 2-day cab tour from Madurai or Dindigul. Experience Kodai Lake boating, Pillar Rocks, Bryant Park, and Silver Cascade falls.',
    idealFor: ['Weekend Getaways', 'Couples', 'Families'],
    itinerary: [
      { day: 1, title: 'Day 1: Madurai to Kodai Ghat & Sightseeing', activities: ['Pickup from Madurai', 'Ghat road drive via Dum Dum Rock & Silver Cascade', 'Kodai Lake boating & Coaker’s Walk'] },
      { day: 2, title: 'Day 2: Pillar Rocks, Green Valley & Return', activities: ['Visit Pillar Rocks, Moir Point & Pine Forest', 'Bryant Park floral gardens', 'Evening drop at Madurai'] }
    ],
    included: ['Private AC Sedan / SUV cab', 'Driver allowances & fuel', 'Toll & parking fees'],
    excluded: ['Hotel accommodation', 'Boating & entry tickets'],
    recommendedVehicle: 'Sedan or SUV',
    pricingOverview: [
      { vehicleType: 'Sedan (Etios / DZire)', seatingCapacity: '4 Passengers', estimatedPrice: 5200 },
      { vehicleType: 'Innova Crysta', seatingCapacity: '7 Passengers', estimatedPrice: 8900 }
    ],
    travelTips: ['Enjoy cycling around Kodai Lake in early morning.'],
    reviews: [{ author: 'Sujatha P.', location: 'Madurai', rating: 5, comment: 'Excellent driver and clean car. Madurai to Kodai drive was fast and safe.', date: '2026-04-12' }],
    faq: [{ question: 'How far is Kodaikanal from Madurai by cab?', answer: 'The distance is 120 km and takes approximately 3 hours.' }],
    seo: {
      title: 'Kodaikanal 2 Days Tour Package by Private Cab | SAMAYAS',
      description: 'Book Kodaikanal 2 days tour package with private AC cab from Madurai. Includes Pillar Rocks, Kodai Lake, Coakers Walk & Bryant Park.',
      keywords: ['kodaikanal 2 days tour package', 'madurai to kodaikanal tour package', 'kodai cab sightseeing']
    }
  },
  {
    id: 'rameswaram-pilgrimage',
    slug: 'rameswaram-pilgrimage',
    name: 'Rameswaram Pilgrimage Special',
    title: 'Rameswaram & Dhanushkodi Spiritual Tour Package',
    subtitle: 'Ramanathaswamy Temple 22 Teertham Dip, Pamban Bridge & Dhanushkodi Point',
    destination: 'Rameswaram',
    destinationSlug: 'rameswaram',
    category: 'Pilgrimage',
    categorySlug: 'temple-tours',
    duration: '2 Days / 1 Night',
    originCity: 'Trichy / Madurai',
    startingPrice: 5800,
    heroImage: '/images/cars/suv.webp',
    overview: 'Embark on a sacred pilgrimage to Rameswaram island. Experience the 22 holy Teertham bath at Ramanathaswamy Temple, drive across Pamban Sea Bridge, and visit Dhanushkodi ghost town.',
    idealFor: ['Pilgrims', 'Senior Citizens', 'Families'],
    itinerary: [
      { day: 1, title: 'Day 1: Pickup & Rameswaram Temple Darshan', activities: ['Pickup from Trichy / Madurai', 'Cross historic Pamban Sea Bridge', 'Check-in hotel', 'Evening 22 Teertham holy dip & Ramanathaswamy Temple darshan'] },
      { day: 2, title: 'Day 2: Dhanushkodi & APJ Kalam Memorial', activities: ['Early morning drive to Dhanushkodi sea point (Ram Setu starting point)', 'Visit Dr. APJ Abdul Kalam Memorial', 'Return transfer to Trichy / Madurai'] }
    ],
    included: ['Private AC Sedan / SUV cab', 'Driver allowances & toll charges', 'Doorstep pickup & drop'],
    excluded: ['Hotel accommodation', 'Temple puja fees'],
    recommendedVehicle: 'Sedan or Innova for family comfort',
    pricingOverview: [
      { vehicleType: 'Sedan (Etios / DZire)', seatingCapacity: '4 Passengers', estimatedPrice: 5800 },
      { vehicleType: 'Innova Crysta', seatingCapacity: '7 Passengers', estimatedPrice: 9600 }
    ],
    travelTips: ['Follow temple dress code (Dhoti/Saree or Kurta).'],
    reviews: [{ author: 'Ranganathan V.', rating: 5, comment: 'Great pilgrimage cab tour from Trichy. Driver helped elderly parents at temple gates.', date: '2026-03-15' }],
    faq: [{ question: 'Are 22 Teerthams open for bath daily?', answer: 'Yes, 22 Teerthams are open for morning holy bath inside temple premises.' }],
    seo: {
      title: 'Rameswaram Pilgrimage Tour Package | Dhanushkodi Cab | SAMAYAS',
      description: 'Book Rameswaram 2-day pilgrimage package with private cab from Trichy & Madurai. Covers Ramanathaswamy Temple, Pamban Bridge & Dhanushkodi.',
      keywords: ['rameswaram tour package', 'rameswaram pilgrimage cab', 'trichy to rameswaram tour package']
    }
  },
  {
    id: 'munnar-weekend',
    slug: 'munnar-weekend',
    title: 'Munnar Tea Estate Weekend Tour Package',
    subtitle: '3 Days in Kerala’s Tea Paradise with Private Taxi',
    destination: 'Munnar',
    destinationSlug: 'munnar',
    category: 'Hill Station',
    categorySlug: 'hill-stations',
    duration: '3 Days / 2 Nights',
    originCity: 'Kochi / Madurai',
    startingPrice: 7500,
    heroImage: '/images/cars/suv.webp',
    overview: 'Discover the tea garden capital of Kerala with SAMAYAS private cab. Visit Eravikulam National Park, Mattupetty Dam, Echo Point, Tea Museum, and Lockhart Gap.',
    idealFor: ['Couples', 'Families', 'Honeymooners'],
    itinerary: [
      { day: 1, title: 'Day 1: Kochi/Madurai to Munnar Scenic Drive', activities: ['Pickup from Kochi Airport or Madurai', 'Drive past Cheeyappara & Valara waterfalls', 'Hotel check-in & tea estate stroll'] },
      { day: 2, title: 'Day 2: Eravikulam Park & Mattupetty Sightseeing', activities: ['Morning Eravikulam safari (Nilgiri Tahr)', 'Mattupetty Dam boating & Echo Point', 'Tea Museum tour'] },
      { day: 3, title: 'Day 3: Lockhart Gap & Return Transfer', activities: ['Lockhart Gap viewpoint', 'Spices shopping', 'Return drop at Kochi / Madurai'] }
    ],
    included: ['Private AC SUV / Sedan cab for 3 full days', 'Driver fees, fuel & state permits'],
    excluded: ['Hotel stay', 'Entry tickets & boating fees'],
    recommendedVehicle: 'Innova Crysta or Ertiga SUV',
    pricingOverview: [
      { vehicleType: 'Sedan (Etios / DZire)', seatingCapacity: '4 Passengers', estimatedPrice: 7500 },
      { vehicleType: 'Innova Crysta', seatingCapacity: '7 Passengers', estimatedPrice: 12500 }
    ],
    travelTips: ['Carry light woolen sweaters for cool evenings.'],
    reviews: [{ author: 'Deepak & Ritu', location: 'Bangalore', rating: 5, comment: 'Unbelievable honeymoon trip! Driver was polite and car was super comfortable.', date: '2026-05-12' }],
    faq: [{ question: 'Do you provide Kerala inter-state permit cabs?', answer: 'Yes! All SAMAYAS cabs carry valid all-India tourist permits for seamless travel into Kerala.' }],
    seo: {
      title: 'Munnar 3 Days Tour Package by Private Cab | SAMAYAS',
      description: 'Book Munnar 3 days tour package with private cab from Kochi or Madurai. Tea garden sightseeing, Eravikulam park & Mattupetty dam.',
      keywords: ['munnar 3 days tour package', 'kochi to munnar tour package', 'munnar cab sightseeing']
    }
  },

  // HIGH-INTENT TOUR ROUTES (Phase 6.5)
  {
    id: 'chennai-to-ooty-tour-package',
    slug: 'chennai-to-ooty-tour-package',
    title: 'Chennai to Ooty Tour Package with Private Cab',
    subtitle: 'Comfortable Outstation Road Trip from Chennai to Nilgiris',
    destination: 'Ooty',
    destinationSlug: 'ooty',
    category: 'Hill Station',
    categorySlug: 'hill-stations',
    duration: '3 Days / 2 Nights',
    originCity: 'Chennai',
    startingPrice: 12500,
    heroImage: '/images/cars/innova.webp',
    overview: 'Travel hassle-free from Chennai to Ooty in a dedicated private AC cab. Enjoy doorstep pickup from Chennai, scenic road drive via Salem & Mettupalayam, and 2 full days of Ooty-Coonoor sightseeing.',
    idealFor: ['Chennai Families', 'Couples', 'Friends Groups'],
    itinerary: [
      { day: 1, title: 'Day 1: Chennai to Ooty Drive (540 km)', activities: ['Early morning pickup from your Chennai doorstep', 'Drive along NH44 via Salem & Mettupalayam', 'Check-in Ooty hotel & evening relax'] },
      { day: 2, title: 'Day 2: Full Day Ooty Sightseeing', activities: ['Doddabetta Peak, Botanical Garden, Tea Factory & Ooty Lake boating'] },
      { day: 3, title: 'Day 3: Coonoor Visit & Return to Chennai', activities: ['Sim’s Park & Lamb’s Rock Coonoor', 'Afternoon return drive to Chennai with evening drop'] }
    ],
    included: ['Doorstep Chennai pickup & drop', 'Private AC vehicle for entire tour', 'Tolls, driver charges & parking'],
    excluded: ['Hotel accommodation', 'Entry tickets'],
    recommendedVehicle: 'Innova Crysta or Ertiga for long road trips',
    pricingOverview: [
      { vehicleType: 'Sedan (Etios / DZire)', seatingCapacity: '4 Passengers', estimatedPrice: 12500 },
      { vehicleType: 'Innova Crysta', seatingCapacity: '7 Passengers', estimatedPrice: 18500 }
    ],
    travelTips: ['Early 5 AM departure from Chennai helps reach Ooty by 2 PM.'],
    reviews: [{ author: 'Kannan R.', location: 'Chennai', rating: 5, comment: 'Great highway drive from Chennai to Ooty! Innova was clean and driver drove safely.', date: '2026-06-01' }],
    faq: [{ question: 'How long is the drive from Chennai to Ooty by cab?', answer: 'The distance is approx 540 km and takes about 9 to 10 hours via NH44.' }],
    seo: {
      title: 'Chennai to Ooty Tour Package with Private Cab | SAMAYAS',
      description: 'Book Chennai to Ooty tour package with private AC cab. Doorstep pickup from Chennai, 3 days Ooty & Coonoor sightseeing with experienced driver.',
      keywords: ['chennai to ooty tour package', 'chennai to ooty cab', 'chennai ooty road trip']
    }
  },
  {
    id: 'coimbatore-to-ooty-tour-package',
    slug: 'coimbatore-to-ooty-tour-package',
    title: 'Coimbatore to Ooty Tour Package with Private Taxi',
    subtitle: 'Direct Airport/Station Pickup for Ooty 2 & 3 Day Trips',
    destination: 'Ooty',
    destinationSlug: 'ooty',
    category: 'Hill Station',
    categorySlug: 'hill-stations',
    duration: '2 Days / 1 Night',
    originCity: 'Coimbatore',
    startingPrice: 4800,
    heroImage: '/images/cars/sedan.webp',
    overview: 'Instant pickup from Coimbatore Airport (CJB) or Junction railway station directly to Ooty hills. Enjoy private sightseeing at Doddabetta, Botanical Garden, and Coonoor tea gardens.',
    idealFor: ['Flight & Train Passengers', 'Weekend Travellers'],
    itinerary: [
      { day: 1, title: 'Day 1: Coimbatore Pickup & Ooty Sightseeing', activities: ['Pickup from Coimbatore Airport/Station', 'Scenic drive via Mettupalayam', 'Botanical Garden & Ooty Lake'] },
      { day: 2, title: 'Day 2: Doddabetta & Return to Coimbatore', activities: ['Doddabetta Peak & Tea Museum', 'Return drop at Coimbatore Airport/Station'] }
    ],
    included: ['Coimbatore pickup & drop', 'Private AC cab for 2 days', 'All driver & toll fees'],
    excluded: ['Hotels & entry tickets'],
    recommendedVehicle: 'Sedan or SUV',
    pricingOverview: [
      { vehicleType: 'Sedan (Etios / DZire)', seatingCapacity: '4 Passengers', estimatedPrice: 4800 },
      { vehicleType: 'Innova Crysta', seatingCapacity: '7 Passengers', estimatedPrice: 8500 }
    ],
    travelTips: ['Driver monitors flight arrival time for prompt pickup.'],
    reviews: [{ author: 'Neha Gupta', location: 'Delhi', rating: 5, comment: 'Landed at Coimbatore airport and SAMAYAS cab was waiting right outside. Smooth Ooty trip!', date: '2026-05-25' }],
    faq: [{ question: 'Can SAMAYAS pick us up from Coimbatore Airport?', answer: 'Yes! We provide 24/7 direct airport pickup from Coimbatore Airport (CJB).' }],
    seo: {
      title: 'Coimbatore to Ooty Tour Package | Private Airport Cab | SAMAYAS',
      description: 'Book Coimbatore to Ooty tour package with private AC taxi. Direct pickup from Coimbatore Airport/Railway Station for 2 & 3 day Ooty sightseeing.',
      keywords: ['coimbatore to ooty tour package', 'coimbatore airport to ooty cab', 'coimbatore to ooty taxi package']
    }
  },
  {
    id: 'madurai-to-kodaikanal-tour-package',
    slug: 'madurai-to-kodaikanal-tour-package',
    title: 'Madurai to Kodaikanal Tour Package',
    subtitle: 'Direct Cab Tour from Temple City to Kodai Hills',
    destination: 'Kodaikanal',
    destinationSlug: 'kodaikanal',
    category: 'Hill Station',
    categorySlug: 'hill-stations',
    duration: '2 Days / 1 Night',
    originCity: 'Madurai',
    startingPrice: 5200,
    heroImage: '/images/cars/suv.webp',
    overview: 'Seamless road trip package from Madurai to Kodaikanal by private AC taxi. Includes Kodai Lake, Pillar Rocks, Coakers Walk, Silver Cascade, and Bryant Park.',
    idealFor: ['Madurai Residents', 'Tourists', 'Families'],
    itinerary: [
      { day: 1, title: 'Day 1: Madurai to Kodai Drive & Lake Sightseeing', activities: ['Pickup from Madurai hotel/station', 'Batlagundu ghat drive', 'Kodai Lake boating & Coaker’s Walk'] },
      { day: 2, title: 'Day 2: Pillar Rocks & Madurai Return', activities: ['Pillar Rocks, Pine Forest & Bryant Park', 'Return transfer to Madurai'] }
    ],
    included: ['Madurai pickup & drop', 'Private AC cab', 'Fuel, driver & toll fees'],
    excluded: ['Hotels & entry tickets'],
    recommendedVehicle: 'Sedan or SUV',
    pricingOverview: [
      { vehicleType: 'Sedan (Etios / DZire)', seatingCapacity: '4 Passengers', estimatedPrice: 5200 },
      { vehicleType: 'Innova Crysta', seatingCapacity: '7 Passengers', estimatedPrice: 8900 }
    ],
    travelTips: ['Add Meenakshi temple visit before departing from Madurai.'],
    reviews: [{ author: 'Aravind S.', location: 'Madurai', rating: 5, comment: 'Superb cab service from Madurai to Kodaikanal! Very safe driving.', date: '2026-04-15' }],
    faq: [{ question: 'How long does Madurai to Kodaikanal take by cab?', answer: 'The 120 km drive takes approx 3 hours.' }],
    seo: {
      title: 'Madurai to Kodaikanal Tour Package by Private Cab | SAMAYAS',
      description: 'Book Madurai to Kodaikanal tour package with private AC taxi. Doorstep pickup from Madurai, 2 days Kodai hill sightseeing with expert driver.',
      keywords: ['madurai to kodaikanal tour package', 'madurai to kodaikanal cab', 'madurai to kodai taxi package']
    }
  },
  {
    id: 'trichy-to-rameswaram-tour-package',
    slug: 'trichy-to-rameswaram-tour-package',
    title: 'Trichy to Rameswaram Pilgrimage Tour Package',
    subtitle: 'Comfortable Temple Pilgrimage from Trichy Airport / Junction',
    destination: 'Rameswaram',
    destinationSlug: 'rameswaram',
    category: 'Pilgrimage',
    categorySlug: 'temple-tours',
    duration: '2 Days / 1 Night',
    originCity: 'Trichy',
    startingPrice: 5800,
    heroImage: '/images/cars/suv.webp',
    overview: 'Pilgrimage cab tour from Trichy Airport (TRZ) or Junction to Rameswaram island. Includes 22 Teertham holy bath, Ramanathaswamy Temple darshan, Pamban bridge, and Dhanushkodi.',
    idealFor: ['NRI Pilgrims', 'Families', 'Senior Citizens'],
    itinerary: [
      { day: 1, title: 'Day 1: Trichy to Rameswaram & Temple Bath', activities: ['Trichy airport/hotel pickup', 'Pamban bridge drive', 'Ramanathaswamy temple bath & darshan'] },
      { day: 2, title: 'Day 2: Dhanushkodi & Trichy Return', activities: ['Dhanushkodi sea point drive', 'Kalam Memorial', 'Return drop at Trichy'] }
    ],
    included: ['Trichy pickup & drop', 'Private AC cab', 'Tolls & driver fees'],
    excluded: ['Hotels & temple tickets'],
    recommendedVehicle: 'Sedan or Innova',
    pricingOverview: [
      { vehicleType: 'Sedan (Etios / DZire)', seatingCapacity: '4 Passengers', estimatedPrice: 5800 },
      { vehicleType: 'Innova Crysta', seatingCapacity: '7 Passengers', estimatedPrice: 9600 }
    ],
    travelTips: ['Trichy airport direct pickup available for NRI flights.'],
    reviews: [{ author: 'Shanmugam T.', rating: 5, comment: 'Landed from Singapore at Trichy airport and SAMAYAS cab drove us straight to Rameswaram. 5 stars!', date: '2026-03-20' }],
    faq: [{ question: 'What is the distance from Trichy Airport to Rameswaram?', answer: 'The distance is 230 km and takes about 4 hours by cab.' }],
    seo: {
      title: 'Trichy to Rameswaram Pilgrimage Tour Package | SAMAYAS Cab',
      description: 'Book Trichy to Rameswaram tour package with private AC taxi. Pickup from Trichy Airport/Railway Station, Dhanushkodi & temple darshan.',
      keywords: ['trichy to rameswaram tour package', 'trichy airport to rameswaram cab', 'trichy to rameswaram taxi package']
    }
  },
  {
    id: 'chennai-to-pondicherry-tour-package',
    slug: 'chennai-to-pondicherry-tour-package',
    title: 'Chennai to Pondicherry ECR Tour Package',
    subtitle: 'Scenic Coastal Road Trip via Mahabalipuram & French Quarter',
    destination: 'Pondicherry',
    destinationSlug: 'pondicherry',
    category: 'Weekend Getaways',
    categorySlug: 'weekend-getaways',
    duration: '2 Days / 1 Night',
    originCity: 'Chennai',
    startingPrice: 4200,
    heroImage: '/images/cars/sedan.webp',
    overview: 'Drive down the iconic East Coast Road (ECR) from Chennai to Pondicherry. Visit Mahabalipuram Shore Temple, Auroville, French Colony, Promenade Beach, and Paradise Beach.',
    idealFor: ['Couples', 'Friends', 'Weekend Travellers'],
    itinerary: [
      { day: 1, title: 'Day 1: Chennai to Pondy via ECR & French Town', activities: ['Chennai doorstep pickup', 'Mahabalipuram Shore Temple stop', 'French Quarter heritage walk & Promenade beach'] },
      { day: 2, title: 'Day 2: Auroville, Paradise Beach & Chennai Return', activities: ['Auroville Matrimandir viewpoint', 'Paradise beach speedboat', 'Return drive to Chennai'] }
    ],
    included: ['Chennai pickup & drop', 'Private AC vehicle', 'ECR toll fees & driver charges'],
    excluded: ['Hotels & water sports'],
    recommendedVehicle: 'Sedan or SUV',
    pricingOverview: [
      { vehicleType: 'Sedan (Etios / DZire)', seatingCapacity: '4 Passengers', estimatedPrice: 4200 },
      { vehicleType: 'Innova Crysta', seatingCapacity: '7 Passengers', estimatedPrice: 7200 }
    ],
    travelTips: ['Enjoy French bakeries in White Town.'],
    reviews: [{ author: 'Ananya S.', location: 'Chennai', rating: 5, comment: 'Awesome weekend ECR road trip to Pondy! Cab driver was very friendly.', date: '2026-02-28' }],
    faq: [{ question: 'How long is the drive from Chennai to Pondicherry via ECR?', answer: 'The 150 km drive takes about 3 hours via East Coast Road.' }],
    seo: {
      title: 'Chennai to Pondicherry Tour Package | ECR Road Trip Cab | SAMAYAS',
      description: 'Book Chennai to Pondicherry tour package with private AC cab. Scenic ECR drive, Mahabalipuram, Auroville & French Quarter sightseeing.',
      keywords: ['chennai to pondicherry tour package', 'chennai to pondicherry cab', 'ecr road trip to pondicherry']
    }
  },
  {
    id: 'bangalore-to-coorg-tour-package',
    slug: 'bangalore-to-coorg-tour-package',
    title: 'Bangalore to Coorg Tour Package with Private Taxi',
    subtitle: '3 Days Coffee Estate & Waterfall Retreat from Bangalore',
    destination: 'Coorg',
    destinationSlug: 'coorg',
    category: 'Hill Station',
    categorySlug: 'hill-stations',
    duration: '3 Days / 2 Nights',
    originCity: 'Bangalore',
    startingPrice: 8900,
    heroImage: '/images/cars/suv.webp',
    overview: 'Travel from Bangalore to Coorg in comfort. Visit Golden Temple Tibetan Monastery, Abbey Falls, Raja’s Seat, Dubare Elephant Camp, and coffee estates.',
    idealFor: ['Bangalore Families', 'IT Professionals', 'Couples'],
    itinerary: [
      { day: 1, title: 'Day 1: Bangalore to Coorg via Mysore Highway', activities: ['Bangalore doorstep pickup', 'Visit Namdroling Monastery Bylakuppe', 'Check-in Coorg estate stay'] },
      { day: 2, title: 'Day 2: Abbey Falls, Dubare & Raja’s Seat', activities: ['Dubare elephant camp', 'Abbey Falls & coffee walk', 'Sunset at Raja’s Seat'] },
      { day: 3, title: 'Day 3: Talakaveri & Bangalore Return', activities: ['Talakaveri Cauvery river origin', 'Return transfer to Bangalore'] }
    ],
    included: ['Bangalore pickup & drop', 'Private AC SUV / Sedan', 'Interstate toll & driver fees'],
    excluded: ['Hotels & activity fees'],
    recommendedVehicle: 'Innova Crysta or SUV',
    pricingOverview: [
      { vehicleType: 'Sedan (Etios / DZire)', seatingCapacity: '4 Passengers', estimatedPrice: 8900 },
      { vehicleType: 'Innova Crysta', seatingCapacity: '7 Passengers', estimatedPrice: 14500 }
    ],
    travelTips: ['Enjoy authentic Kodava Pandi curry.'],
    reviews: [{ author: 'Vikrant Roy', location: 'Bangalore', rating: 5, comment: 'Seamless 3-day Coorg trip from Bangalore. Driver was very polite.', date: '2026-05-15' }],
    faq: [{ question: 'How far is Coorg from Bangalore by cab?', answer: 'The distance is 265 km and takes about 5.5 hours by taxi.' }],
    seo: {
      title: 'Bangalore to Coorg Tour Package with Private Cab | SAMAYAS',
      description: 'Book Bangalore to Coorg tour package with private AC taxi. Includes Bylakuppe Tibetan Monastery, Abbey Falls, Dubare Elephant Camp & Mysore expressway drive.',
      keywords: ['bangalore to coorg tour package', 'bangalore to coorg cab', 'bangalore to coorg road trip']
    }
  }
]
