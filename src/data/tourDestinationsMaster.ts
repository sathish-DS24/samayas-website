export interface TourDestination {
  id: string
  slug: string
  name: string
  state: 'Tamil Nadu' | 'Kerala' | 'Karnataka' | 'Andhra Pradesh' | 'Telangana'
  category: string
  categorySlug: string
  tagline: string
  heroImage: string
  overview: string
  history: string
  bestTime: string
  weather: {
    summer: string
    winter: string
    monsoon: string
  }
  coordinates: {
    lat: number
    lng: number
  }
  googleMapEmbedUrl: string
  topAttractions: Array<{
    name: string
    description: string
    category: 'Sightseeing' | 'Nature' | 'Heritage' | 'Temple' | 'Photography'
    image?: string
  }>
  activities: string[]
  localFood: Array<{
    name: string
    type: string
    description: string
  }>
  shopping: string[]
  hotels: Array<{
    name: string
    category: 'Luxury' | 'Mid-Range' | 'Budget'
    area: string
  }>
  travelTips: string[]
  connectivity: {
    nearestAirport: string
    nearestRailway: string
    roadConnectivity: string
  }
  recommendedVehicle: string
  popularPackages: string[] // package slugs
  nearbyDestinations: Array<{
    name: string
    slug: string
    distanceKm: number
  }>
  reviews: Array<{
    author: string
    rating: number
    comment: string
    date: string
  }>
  faq: Array<{
    question: string
    answer: string
  }>
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export const tourDestinationsDataset: TourDestination[] = [
  // TAMIL NADU
  {
    id: 'ooty',
    slug: 'ooty',
    name: 'Ooty (Udhagamandalam)',
    state: 'Tamil Nadu',
    category: 'Hill Station',
    categorySlug: 'hill-stations',
    tagline: 'Queen of Hill Stations in Nilgiri Hills',
    heroImage: '/images/cars/sedan.webp',
    overview: 'Ooty is South India’s premier hill station situated at 2,240 meters elevation in the Nilgiri Hills. Famous for its sprawling tea estates, colonial architecture, Nilgiri Mountain Toy Train, and serene lakes.',
    history: 'Originally inhabited by the Toda tribe, Ooty was developed as a summer retreat by John Sullivan, the Collector of Coimbatore, during the British Raj in 1819.',
    bestTime: 'October to June',
    weather: {
      summer: '15°C – 24°C (Pleasant)',
      winter: '5°C – 15°C (Chilly & Misty)',
      monsoon: '12°C – 20°C (Heavy Showers)'
    },
    coordinates: { lat: 11.4102, lng: 76.6950 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62575.46781258661!2d76.6669!3d11.4102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bd84b5f3d68d%3A0x9597c5f87b8d009b!2sOoty%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Ooty Botanical Gardens', description: '55-acre garden featuring exotic flora, a 20-million-year-old fossilized tree, and annual flower show.', category: 'Nature' },
      { name: 'Ooty Lake & Boating', description: 'Scenic artificial lake constructed in 1824 offering paddle boating and motorboat rides.', category: 'Sightseeing' },
      { name: 'Doddabetta Peak', description: 'Highest mountain in Nilgiris (2,637 m) offering 360-degree panoramic views.', category: 'Photography' },
      { name: 'Nilgiri Mountain Railway', description: 'UNESCO World Heritage steam toy train operating between Mettupalayam and Ooty.', category: 'Heritage' },
      { name: 'Tea Factory & Tea Museum', description: 'Learn about tea processing and sample authentic fresh Nilgiri tea.', category: 'Sightseeing' }
    ],
    activities: ['Boating at Ooty Lake', 'Toy Train Ride', 'Tea Estate Trekking', 'Homemade Chocolate Shopping', 'Toda Village Cultural Visit'],
    localFood: [
      { name: 'Ooty Homemade Chocolates', type: 'Sweets', description: 'Rich artisan dark and milk chocolates with nuts and fruits.' },
      { name: 'Nilgiri Fresh Tea & Varkey', type: 'Snacks', description: 'Crispy Nilgiri bakery varkey served with hot cardamon tea.' }
    ],
    shopping: ['Handmade Chocolates', 'Nilgiri Tea & Essential Oils', 'Toda Embroidery Crafts', 'Eucalyptus Oil'],
    hotels: [
      { name: 'Savoy - IHCL SeleQtions', category: 'Luxury', area: 'Charing Cross' },
      { name: 'Hotel Gem Park', category: 'Mid-Range', area: 'Sheddon Road' },
      { name: 'Zostel Ooty', category: 'Budget', area: 'Lovedale' }
    ],
    travelTips: ['Carry warm woolens even in summer evenings.', 'Pre-book Nilgiri Toy Train tickets 30 days in advance via IRCTC.', 'Book private cab for comfortable hill navigation.'],
    connectivity: {
      nearestAirport: 'Coimbatore International Airport (CJB) - 88 km',
      nearestRailway: 'Udhagamandalam Railway Station (Toy Train) / Mettupalayam Station (47 km)',
      roadConnectivity: 'Well connected via NH181 from Coimbatore (88 km), Mysore (125 km), and Bangalore (270 km).'
    },
    recommendedVehicle: 'Sedan or SUV (Innova / Ertiga) with experienced hills driver.',
    popularPackages: ['ooty-2-days', 'ooty-3-days', 'coimbatore-to-ooty-tour-package', 'chennai-to-ooty-tour-package'],
    nearbyDestinations: [
      { name: 'Coonoor', slug: 'coonoor', distanceKm: 19 },
      { name: 'Kotagiri', slug: 'kotagiri', distanceKm: 29 },
      { name: 'Mudumalai Wildlife Sanctuary', slug: 'mudumalai', distanceKm: 31 }
    ],
    reviews: [
      { author: 'Siddharth M.', rating: 5, comment: 'Awesome 3-day trip to Ooty with SAMAYAS cab. Driver knew all shortcuts to dodge traffic jams near Botanical Garden!', date: '2026-06-15' }
    ],
    faq: [
      { question: 'How many days are needed to visit Ooty?', answer: 'A 2-day or 3-day trip is ideal to cover major attractions like Doddabetta, Botanical Garden, Tea Factory, and Coonoor sightseeing.' },
      { question: 'What is the distance from Coimbatore to Ooty by cab?', answer: 'The distance is 88 km and takes approximately 2.5 to 3 hours via Mettupalayam ghat road.' }
    ],
    seo: {
      title: 'Ooty Tour Packages | Private Cab Sightseeing & Taxi | SAMAYAS',
      description: 'Book Ooty tour packages with private cab & driver. 2-day, 3-day sightseeing itineraries from Coimbatore, Chennai & Bangalore with transparent pricing.',
      keywords: ['ooty tour package', 'ooty cab booking', 'coimbatore to ooty taxi', 'ooty 3 days itinerary']
    }
  },
  {
    id: 'kodaikanal',
    slug: 'kodaikanal',
    name: 'Kodaikanal',
    state: 'Tamil Nadu',
    category: 'Hill Station',
    categorySlug: 'hill-stations',
    tagline: 'The Princess of Hill Stations in Palani Hills',
    heroImage: '/images/cars/suv.webp',
    overview: 'Kodaikanal is a serene hill station set around a star-shaped lake in the Palani Hills of Tamil Nadu, renowned for evergreen forests, waterfalls, rock pillars, and misty hills.',
    history: 'Established in 1845 as a refuge from summer heat by American missionaries and British bureaucrats.',
    bestTime: 'September to May',
    weather: { summer: '17°C – 26°C', winter: '8°C – 18°C', monsoon: '14°C – 20°C' },
    coordinates: { lat: 10.2381, lng: 77.4892 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62740.098754125!2d77.4892!3d10.2381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9dfa539c3683f%3A0xb3514a383d4e0e57!2sKodaikanal%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Kodai Lake & Coakers Walk', description: 'Star-shaped lake with peddling boats and a 1-km pedestrian path offering breathtaking valley views.', category: 'Sightseeing' },
      { name: 'Pillar Rocks', description: 'Three massive granite boulders standing vertically 122 meters high.', category: 'Photography' },
      { name: 'Bryant Park & Solar Observatory', description: 'Manicured botanical garden with dahlias, roses, and a 100-year-old eucalyptus tree.', category: 'Nature' },
      { name: 'Silver Cascade Waterfalls', description: '180-foot waterfall tumbling down steep rocks along the main Kodai road.', category: 'Nature' }
    ],
    activities: ['Cycling around Kodai Lake', 'Boating', 'Walking at Coaker’s Walk', 'Trekking to Dolphin’s Nose'],
    localFood: [{ name: 'Kodai Cheese & Chocolates', type: 'Dairy & Sweets', description: 'Artisanal organic cheese and handmade chocolates.' }],
    shopping: ['Organic Honey', 'Handmade Soaps', 'Spices & Essential Oils', 'Kodai Cheese'],
    hotels: [
      { name: 'The Carlton Kodaikanal', category: 'Luxury', area: 'Lake Road' },
      { name: 'Kodai Resort Hotel', category: 'Mid-Range', area: 'Coakers Walk' }
    ],
    travelTips: ['Watch out for afternoon mist at viewpoints.', 'Book cab early for peak summer season (May).'],
    connectivity: {
      nearestAirport: 'Madurai Airport (IXM) - 135 km',
      nearestRailway: 'Kodai Road Railway Station (KQN) - 80 km',
      roadConnectivity: 'Connected via Batlagundu ghat road from Madurai (120 km) and Dindigul (90 km).'
    },
    recommendedVehicle: 'Sedan or SUV with experienced mountain driver.',
    popularPackages: ['kodaikanal-2-days', 'madurai-to-kodaikanal-tour-package'],
    nearbyDestinations: [{ name: 'Palani', slug: 'palani', distanceKm: 65 }],
    reviews: [{ author: 'Divya R.', rating: 5, comment: 'Great trip with SAMAYAS cab from Madurai to Kodaikanal! Smooth driving up the hairpin bends.', date: '2026-05-20' }],
    faq: [{ question: 'How far is Kodaikanal from Madurai by cab?', answer: 'The distance is 120 km and takes about 3 hours via Batlagundu ghat road.' }],
    seo: {
      title: 'Kodaikanal Tour Packages | Private Cab & Sightseeing | SAMAYAS',
      description: 'Book Kodaikanal tour packages with private cab. 2-day & 3-day sightseeing from Madurai, Trichy & Coimbatore with experienced driver.',
      keywords: ['kodaikanal tour package', 'madurai to kodaikanal cab', 'kodai lake sightseeing']
    }
  },
  {
    id: 'rameswaram',
    slug: 'rameswaram',
    name: 'Rameswaram',
    state: 'Tamil Nadu',
    category: 'Pilgrimage',
    categorySlug: 'temple-tours',
    tagline: 'Sacred Island Temple & Pamban Bridge Marvel',
    heroImage: '/images/cars/suv.webp',
    overview: 'Rameswaram is a holy island town connected to mainland India by the famous Pamban Sea Bridge. One of the Char Dham pilgrimage sites, famous for Ramanathaswamy Temple and Dhanushkodi ghost town.',
    history: 'According to Ramayana, Lord Rama constructed the Ram Setu bridge from Rameswaram to Lanka to rescue Sita.',
    bestTime: 'October to March',
    weather: { summer: '28°C – 37°C', winter: '20°C – 30°C', monsoon: '25°C – 32°C' },
    coordinates: { lat: 9.2876, lng: 79.3129 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62915.28912!2d79.3129!3d9.2876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01e3b6e82c5e5b%3A0xd6803730e2f5b5b4!2sRameswaram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Ramanathaswamy Temple', description: 'Famous for its long 1,000-pillar corridor and 22 holy water wells (Teerthams).', category: 'Temple' },
      { name: 'Pamban Sea Bridge', description: 'Historic 2-km railway cantilever sea bridge spanning Palk Strait.', category: 'Heritage' },
      { name: 'Dhanushkodi Beach & Ghost Town', description: 'The eastern tip of Rameswaram island where Indian Ocean and Bay of Bengal meet.', category: 'Photography' },
      { name: 'Dr. APJ Abdul Kalam Memorial', description: 'Tribute memorial to India’s former President and missile scientist.', category: 'Sightseeing' }
    ],
    activities: ['Taking holy dip in 22 Teerthams', 'Dhanushkodi sea point drive', 'Pamban bridge photo stop'],
    localFood: [{ name: 'Rameswaram Seafood & South Indian Thali', type: 'Meals', description: 'Fresh coastal fish curry and pure vegetarian temple prasadam.' }],
    shopping: ['Seashell Handicrafts', 'Pooja Items & Rudraksha', 'Palm Leaf Crafts'],
    hotels: [
      { name: 'Hyatt Place Rameswaram', category: 'Luxury', area: 'Madurai-Rameswaram Road' },
      { name: 'Hotel Tamil Nadu', category: 'Mid-Range', area: 'Bus Stand' }
    ],
    travelTips: ['Temple dress code applies (Dhoti/Saree or Kurta).', 'Visit Dhanushkodi in early morning for best sea views.'],
    connectivity: {
      nearestAirport: 'Madurai Airport (IXM) - 175 km',
      nearestRailway: 'Rameswaram Railway Station (RMM)',
      roadConnectivity: 'NH87 connects Rameswaram via Pamban road bridge to Madurai (170 km) and Trichy (230 km).'
    },
    recommendedVehicle: 'Comfortable Sedan or SUV for long coastal road drives.',
    popularPackages: ['rameswaram-pilgrimage', 'trichy-to-rameswaram-tour-package', 'madurai-rameswaram-kanyakumari-tour'],
    nearbyDestinations: [{ name: 'Devipattinam', slug: 'devipattinam', distanceKm: 55 }, { name: 'Madurai', slug: 'madurai', distanceKm: 170 }],
    reviews: [{ author: 'Murugan K.', rating: 5, comment: 'Seamless trip from Trichy to Rameswaram with SAMAYAS cab! Driver helped with temple parking.', date: '2026-04-10' }],
    faq: [{ question: 'How far is Rameswaram from Trichy by cab?', answer: 'The distance is 230 km and takes around 4 to 4.5 hours via NH210 highway.' }],
    seo: {
      title: 'Rameswaram Tour Packages | Rameswaram Taxi & Pilgrimage | SAMAYAS',
      description: 'Book Rameswaram pilgrimage tour packages with private cab. Dhanushkodi, Pamban bridge & temple darshan packages from Trichy, Madurai & Chennai.',
      keywords: ['rameswaram tour package', 'trichy to rameswaram cab', 'dhanushkodi taxi', 'rameswaram pilgrimage tour']
    }
  },
  {
    id: 'kanyakumari',
    slug: 'kanyakumari',
    name: 'Kanyakumari',
    state: 'Tamil Nadu',
    category: 'Coastal / Heritage',
    categorySlug: 'beach-destinations',
    tagline: 'Southernmost Tip of Mainland India',
    heroImage: '/images/cars/innova.webp',
    overview: 'Kanyakumari is the southernmost tip of mainland India, where the Bay of Bengal, Arabian Sea, and Indian Ocean meet (Triveni Sangam). Renowned for spectacular sunrise & sunset over the ocean.',
    history: 'Ancient seaport mentioned by Ptolemy, named after goddess Devi Kanya Kumari.',
    bestTime: 'October to March',
    weather: { summer: '25°C – 35°C', winter: '20°C – 30°C', monsoon: '23°C – 30°C' },
    coordinates: { lat: 8.0883, lng: 77.5385 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63200!2d77.5385!3d8.0883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04ed3d50893395%3A0xb3514a383d4e0e57!2sKanyakumari%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Vivekananda Rock Memorial', description: 'Monument built on a rock island where Swami Vivekananda meditated in 1892.', category: 'Heritage' },
      { name: 'Thiruvalluvar Statue', description: '133-foot stone statue of Tamil poet-philosopher Thiruvalluvar.', category: 'Heritage' },
      { name: 'Kumari Amman Temple', description: '3000-year-old coastal temple dedicated to goddess Kanya Kumari.', category: 'Temple' },
      { name: 'Triveni Sangam & Sunset Point', description: 'Confluence point of three seas offering concurrent sunrise and sunset views.', category: 'Photography' }
    ],
    activities: ['Ferry boat ride to Rock Memorial', 'Sunrise watching at Triveni Sangam', 'Shopping sea shell artifacts'],
    localFood: [{ name: 'Kanyakumari Fish Fry & Nanjil Meals', type: 'Coastal Cuisine', description: 'South Tamil Nadu style coconut fish curry and red rice.' }],
    shopping: ['Conch Shells & Seashell Mirrors', 'Palm Jaggery', 'Spice Craftwork'],
    hotels: [{ name: 'Anantya Resorts', category: 'Luxury', area: 'Chittar Lake' }, { name: 'Hotel Sea View', category: 'Mid-Range', area: 'East Car Street' }],
    travelTips: ['Reach Triveni Sangam by 5:45 AM for sunrise.', 'Pre-buy ferry tickets for Vivekananda Rock to avoid queue.'],
    connectivity: {
      nearestAirport: 'Trivandrum International Airport (TRV) - 95 km',
      nearestRailway: 'Kanyakumari Railway Station (CAPE)',
      roadConnectivity: 'NH44 terminal point; excellent 4-lane road from Madurai (245 km) and Trivandrum (90 km).'
    },
    recommendedVehicle: 'Sedan or Innova for family coast trip.',
    popularPackages: ['madurai-rameswaram-kanyakumari-tour'],
    nearbyDestinations: [{ name: 'Padmanabhapuram Palace', slug: 'padmanabhapuram', distanceKm: 35 }, { name: 'Suchindram', slug: 'suchindram', distanceKm: 12 }],
    reviews: [{ author: 'Gopal Krishnan', rating: 5, comment: 'SAMAYAS Innova drive from Madurai to Kanyakumari was top notch!', date: '2026-03-12' }],
    faq: [{ question: 'What is the distance from Trivandrum to Kanyakumari?', answer: 'The distance is 90 km and takes about 2.5 hours by cab.' }],
    seo: {
      title: 'Kanyakumari Tour Packages | Private Cab & Sightseeing | SAMAYAS',
      description: 'Book Kanyakumari tour packages with private cab. Sunset points, Vivekananda rock memorial, temple & Trivandrum pickup options.',
      keywords: ['kanyakumari tour package', 'kanyakumari taxi service', 'madurai to kanyakumari cab']
    }
  },
  {
    id: 'yercaud',
    slug: 'yercaud',
    name: 'Yercaud',
    state: 'Tamil Nadu',
    category: 'Hill Station',
    categorySlug: 'hill-stations',
    tagline: 'Jewel of the Shevaroy Hills',
    heroImage: '/images/cars/sedan.webp',
    overview: 'Yercaud is a quiet hill station situated at 1,515 meters in the Shevaroy Hills near Salem. Famous for its central Emerald Lake, coffee plantations, citrus groves, and 20 hairpin bends.',
    history: 'Developed by Sir Thomas Munro and Scottish planters in the 1840s.',
    bestTime: 'October to June',
    weather: { summer: '16°C – 28°C', winter: '11°C – 19°C', monsoon: '14°C – 22°C' },
    coordinates: { lat: 11.7753, lng: 78.2093 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62512!2d78.2093!3d11.7753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf0c5a2c5e5b%3A0xb3514a383d4e0e57!2sYercaud%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Yercaud Lake & Anna Park', description: 'Natural lake surrounded by gardens and deer park.', category: 'Nature' },
      { name: 'Lady’s Seat & Pagoda Point', description: 'Scenic viewpoints offering night views of Salem city lights.', category: 'Photography' },
      { name: 'Kiliyur Waterfalls', description: '90-foot waterfall cascading into Raja Rajeshwari valley.', category: 'Nature' }
    ],
    activities: ['Coffee estate walks', 'Boating at Emerald Lake', '20 Hairpin bend drive'],
    localFood: [{ name: 'Fresh Estate Coffee & Pepper', type: 'Spices', description: 'Aromatic Arabica coffee and black pepper.' }],
    shopping: ['Organic Coffee Beans', 'Spices & Perfumes', 'Fresh Oranges'],
    hotels: [{ name: 'Great Trails Yercaud by GRT Hotels', category: 'Luxury', area: 'Pagoda Point Road' }],
    travelTips: ['Easily reachable from Salem (30 km). Perfect 2-day getaway.'],
    connectivity: {
      nearestAirport: 'Salem Airport (SXV) - 38 km / Trichy Airport - 165 km',
      nearestRailway: 'Salem Junction (SA) - 32 km',
      roadConnectivity: '30 km upward road from Salem via 20 scenic hairpin bends.'
    },
    recommendedVehicle: 'Sedan or SUV.',
    popularPackages: ['yercaud-weekend'],
    nearbyDestinations: [{ name: 'Salem', slug: 'salem', distanceKm: 30 }],
    reviews: [{ author: 'Manish V.', rating: 5, comment: 'Nice relaxed weekend getaway from Bangalore via Salem with SAMAYAS cab.', date: '2026-02-18' }],
    faq: [{ question: 'How many hairpin bends are there on Yercaud ghat road?', answer: 'There are 20 well-paved hairpin bends from Salem to Yercaud.' }],
    seo: { title: 'Yercaud Tour Packages | Salem to Yercaud Cab | SAMAYAS', description: 'Book Yercaud tour packages with private cab. Coffee estate tours & lake boating from Salem, Trichy & Bangalore.', keywords: ['yercaud tour package', 'salem to yercaud taxi', 'yercaud 2 days itinerary'] }
  },
  {
    id: 'yelagiri',
    slug: 'yelagiri',
    name: 'Yelagiri',
    state: 'Tamil Nadu',
    category: 'Hill Station',
    categorySlug: 'hill-stations',
    tagline: 'Quiet Hill Retreat between Chennai & Bangalore',
    heroImage: '/images/cars/sedan.webp',
    overview: 'Yelagiri is an uncrowded hill station located in Tirupathur district at 1,110 meters, surrounded by orchards, rose gardens, and green valleys.',
    history: 'Former private zamindari estate of the Yelagiri Zamindar family prior to independence.',
    bestTime: 'November to February',
    weather: { summer: '18°C – 30°C', winter: '12°C – 22°C', monsoon: '15°C – 24°C' },
    coordinates: { lat: 12.5786, lng: 78.6385 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62400!2d78.6385!3d12.5786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac0c5a2c5e5b%3A0xb3514a383d4e0e57!2sYelagiri%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Punganoor Lake Park', description: 'Boating lake with connected garden and fountain.', category: 'Nature' },
      { name: 'Swamimalai Hills Trek', description: 'Highest point in Yelagiri (4,338 ft) popular for easy trekking.', category: 'Sightseeing' },
      { name: 'Jalagamparai Waterfalls', description: 'Scenic waterfall on Attaru river near Yelagiri.', category: 'Nature' }
    ],
    activities: ['Trekking Swamimalai', 'Boating at Punganoor Lake', 'Ziplining at adventure parks'],
    localFood: [{ name: 'Organic Honey & Fruit Jams', type: 'Local Produce', description: 'Wild forest honey and jackfruit products.' }],
    shopping: ['Wild Honey', 'Homegrown Spices'],
    hotels: [{ name: 'Sterling Yelagiri', category: 'Mid-Range', area: 'Nilavoor Road' }],
    travelTips: ['Great 1-2 day road trip from Chennai (230 km) or Bangalore (160 km).'],
    connectivity: { nearestAirport: 'Bangalore (BLR) - 160 km / Chennai (MAA) - 220 km', nearestRailway: 'Jolarpettai Junction (JTJ) - 21 km', roadConnectivity: 'Connected via Chennai-Bangalore highway (NH48) turning at Ponneri.' },
    recommendedVehicle: 'Sedan or Hatchback.',
    popularPackages: ['yelagiri-weekend'],
    nearbyDestinations: [{ name: 'Jolarpettai', slug: 'jolarpettai', distanceKm: 21 }],
    reviews: [{ author: 'Kavitha P.', rating: 5, comment: 'Short quiet weekend escape from Chennai. Car was prompt and comfortable.', date: '2026-01-22' }],
    faq: [{ question: 'Is Yelagiri suitable for a 1-day weekend road trip?', answer: 'Yes! It is located halfway between Chennai and Bangalore, making it ideal for a quick weekend retreat.' }],
    seo: { title: 'Yelagiri Tour Packages | Private Cab Trip | SAMAYAS', description: 'Book Yelagiri hill station tour packages with private cab. Quick weekend getaway from Chennai & Bangalore.', keywords: ['yelagiri tour package', 'chennai to yelagiri cab', 'yelagiri trekking trip'] }
  },
  {
    id: 'mahabalipuram',
    slug: 'mahabalipuram',
    name: 'Mahabalipuram (Mamallapuram)',
    state: 'Tamil Nadu',
    category: 'Heritage / Beach',
    categorySlug: 'heritage-tours',
    tagline: 'UNESCO Shore Temples & Rock Carvings on East Coast Road',
    heroImage: '/images/cars/sedan.webp',
    overview: 'Mahabalipuram is a famous UNESCO World Heritage coastal town 55 km from Chennai on ECR road, celebrated for 7th-century Pallava cave temples, monolithic rathas, and Shore Temple.',
    history: 'Major 7th-century seaport of the Pallava dynasty named after King Narasimhavarman I (Mamalla).',
    bestTime: 'October to March',
    weather: { summer: '26°C – 36°C', winter: '20°C – 28°C', monsoon: '24°C – 30°C' },
    coordinates: { lat: 12.6269, lng: 80.1927 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62300!2d80.1927!3d12.6269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5323a2c5e5b%3A0xb3514a383d4e0e57!2sMahabalipuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Shore Temple', description: '8th-century granite rock-cut temple overlooking the Bay of Bengal.', category: 'Heritage' },
      { name: 'Pancha Rathas', description: 'Five monolithic stone chariots carved out of single rock boulders.', category: 'Heritage' },
      { name: 'Arjunas Penance & Krishnas Butterball', description: 'Giant bas-relief carving and precariously balanced natural boulder.', category: 'Photography' }
    ],
    activities: ['Sculpture spotting', 'Beach walks on ECR', 'Surfing at Kovalam beach'],
    localFood: [{ name: 'Fresh Coastal Seafood', type: 'Seafood', description: 'Grilled prawns, squid, and fried pomfret at beachside shacks.' }],
    shopping: ['Stone Carvings & Sculptures', 'Seashell Jewelry'],
    hotels: [{ name: 'Radisson Blu Resort Temple Bay', category: 'Luxury', area: 'ECR Road' }],
    travelTips: ['Best visited along with Chennai to Pondicherry ECR drive.'],
    connectivity: { nearestAirport: 'Chennai International Airport (MAA) - 55 km', nearestRailway: 'Chengalpattu Junction (CGL) - 29 km', roadConnectivity: 'Scenic East Coast Road (ECR) from Chennai (55 km).' },
    recommendedVehicle: 'Sedan or SUV.',
    popularPackages: ['chennai-to-pondicherry-tour-package'],
    nearbyDestinations: [{ name: 'Pondicherry', slug: 'pondicherry', distanceKm: 95 }, { name: 'Kanchipuram', slug: 'kanchipuram', distanceKm: 65 }],
    reviews: [{ author: 'Nitin G.', rating: 5, comment: 'Great day trip along ECR road. Driver took us to all 5 rathas smoothly.', date: '2026-03-05' }],
    faq: [{ question: 'Is Mahabalipuram a UNESCO World Heritage site?', answer: 'Yes, its 7th and 8th century Pallava rock-cut monuments were designated a UNESCO site in 1984.' }],
    seo: { title: 'Mahabalipuram Tour Packages | ECR Cab Drive | SAMAYAS', description: 'Book Mahabalipuram tour packages with private cab. Shore temple, Pancha Rathas & ECR beach drive from Chennai.', keywords: ['mahabalipuram tour package', 'chennai to mahabalipuram cab', 'ecr day tour'] }
  },
  {
    id: 'kanchipuram',
    slug: 'kanchipuram',
    name: 'Kanchipuram',
    state: 'Tamil Nadu',
    category: 'Pilgrimage / Heritage',
    categorySlug: 'temple-tours',
    tagline: 'City of Thousand Temples & Silk Sarees',
    heroImage: '/images/cars/sedan.webp',
    overview: 'Kanchipuram is one of the seven sacred cities of Hinduism (Mokshapuri) and a major temple city famous for Pallava temple architecture and pure mulberry Kanjivaram silk sarees.',
    history: 'Capital of the Pallava Empire between the 4th and 9th centuries AD, renowned as a seat of learning for Buddhism and Hinduism.',
    bestTime: 'October to March',
    weather: { summer: '28°C – 38°C', winter: '20°C – 30°C', monsoon: '24°C – 32°C' },
    coordinates: { lat: 12.8342, lng: 79.7036 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62200!2d79.7036!3d12.8342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c3a2c5e5b%3A0xb3514a383d4e0e57!2sKanchipuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Kamakshi Amman Temple', description: 'One of the 51 Shakti Peethas and primary Kamakshi shrine in South India.', category: 'Temple' },
      { name: 'Ekambareswarar Temple', description: 'Vast 25-acre temple representing the Earth element (Prithvi Stalam) with a 3500-year-old mango tree.', category: 'Temple' },
      { name: 'Kailasanathar Temple', description: 'Oldest sandstone temple structure built by Pallava king Rajasimha.', category: 'Heritage' },
      { name: 'Varadharaja Perumal Temple', description: 'Grand Vishnu temple famous for its 100-pillar stone hall.', category: 'Temple' }
    ],
    activities: ['Temple darshan trail', 'Silk weaver loom visits', 'Kanjivaram saree shopping'],
    localFood: [{ name: 'Kanchipuram Idli', type: 'Traditional Breakfast', description: 'Steamed idli seasoned with pepper, cumin, ginger, and ghee in sothu leaves.' }],
    shopping: ['Pure Kanjivaram Silk Sarees', 'Brass Idols & Lamps'],
    hotels: [{ name: 'MM Legacy', category: 'Mid-Range', area: 'Ennaikaran' }],
    travelTips: ['Buy silk sarees directly from certified weaver co-operative societies.'],
    connectivity: { nearestAirport: 'Chennai International Airport (MAA) - 60 km', nearestRailway: 'Kanchipuram Railway Station (CJ)', roadConnectivity: 'Connected via Chennai-Bangalore highway (NH48) 75 km from Chennai.' },
    recommendedVehicle: 'Sedan or SUV for day shopping & temple tour.',
    popularPackages: ['kanchipuram-day-tour'],
    nearbyDestinations: [{ name: 'Vellore', slug: 'vellore', distanceKm: 70 }, { name: 'Chennai', slug: 'chennai', distanceKm: 75 }],
    reviews: [{ author: 'Lakshmi Narayanan', rating: 5, comment: 'Wonderful temple & saree shopping trip with SAMAYAS cab from Chennai!', date: '2026-02-10' }],
    faq: [{ question: 'How far is Kanchipuram from Chennai?', answer: 'The distance is 75 km and takes about 1.5 to 2 hours by cab via NH48.' }],
    seo: { title: 'Kanchipuram Temple & Silk Tour Packages | SAMAYAS Cabs', description: 'Book Kanchipuram tour packages with private cab. Visit Kamakshi Amman, Ekambareswarar & silk weavers from Chennai.', keywords: ['kanchipuram tour package', 'chennai to kanchipuram cab', 'kanjivaram saree shopping cab'] }
  },
  {
    id: 'madurai',
    slug: 'madurai',
    name: 'Madurai',
    state: 'Tamil Nadu',
    category: 'Heritage / Pilgrimage',
    categorySlug: 'temple-tours',
    tagline: 'Cultural Capital of Tamil Nadu & Meenakshi Temple City',
    heroImage: '/images/cars/suv.webp',
    overview: 'Madurai is one of the world’s oldest continuously inhabited cities, built around the iconic Meenakshi Amman Temple on the banks of Vaigai River. Celebrated for Sangam Tamil heritage, night street food, and Thirumalai Nayakar Palace.',
    history: 'Ancient capital of the Pandyan dynasty, famous for ancient Tamil Sangams and trade with Rome.',
    bestTime: 'October to March',
    weather: { summer: '28°C – 40°C', winter: '20°C – 30°C', monsoon: '24°C – 32°C' },
    coordinates: { lat: 9.9252, lng: 78.1198 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62850!2d78.1198!3d9.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5a2c5e5b%3A0xb3514a383d4e0e57!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Meenakshi Amman Temple', description: 'Historic temple with 14 gopurams decorated with thousands of colorful stone figures.', category: 'Temple' },
      { name: 'Thirumalai Nayakar Palace', description: '17th-century palace featuring massive white pillars and sound-and-light show.', category: 'Heritage' },
      { name: 'Gandhi Memorial Museum', description: 'Historical museum containing the blood-stained garment worn by Mahatma Gandhi.', category: 'Heritage' },
      { name: 'Alagar Kovil & Thirupparamkunram', description: 'Sacred hillside temples dedicated to Lord Vishnu and Murugan.', category: 'Temple' }
    ],
    activities: ['Meenakshi temple night ceremony', 'Jigarthanda tasting at Famous Jigarthanda shop', 'Night street food crawl'],
    localFood: [
      { name: 'Madurai Famous Jigarthanda', type: 'Beverage', description: 'Chilled milk dessert with almond gum, basundi, and nannari syrup.' },
      { name: 'Kari Dosa & Bun Parotta', type: 'Street Food', description: 'Crispy mutton-topped dosa and layered fluffy bun parottas.' }
    ],
    shopping: ['Sungudi Cotton Sarees', 'Brass Oil Lamps', 'Madurai Jasmine Flowers'],
    hotels: [{ name: 'Heritage Madurai', category: 'Luxury', area: 'Kochadai' }, { name: 'Hotel Supreme', category: 'Mid-Range', area: 'West Perumal Maistry Street' }],
    travelTips: ['Mobile phones are not allowed inside Meenakshi Temple inner complex (use cloakroom).'],
    connectivity: { nearestAirport: 'Madurai Airport (IXM) - 12 km', nearestRailway: 'Madurai Junction (MDU)', roadConnectivity: 'Major highway hub connecting Trichy (135 km), Tirunelveli (160 km), and Kanyakumari (245 km).' },
    recommendedVehicle: 'Sedan or SUV.',
    popularPackages: ['madurai-rameswaram-kanyakumari-tour', 'madurai-to-kodaikanal-tour-package'],
    nearbyDestinations: [{ name: 'Rameswaram', slug: 'rameswaram', distanceKm: 170 }, { name: 'Kodaikanal', slug: 'kodaikanal', distanceKm: 120 }],
    reviews: [{ author: 'Senthil Kumar', rating: 5, comment: 'Excellent tour cab from Madurai to Rameswaram and Kodaikanal. Driver was super helpful!', date: '2026-04-02' }],
    faq: [{ question: 'What is the best time to visit Meenakshi Temple?', answer: 'Early morning 6:00 AM to 9:00 AM or evening 6:00 PM to 8:30 PM to avoid heavy crowds.' }],
    seo: { title: 'Madurai Tour Packages | Meenakshi Temple Cab | SAMAYAS', description: 'Book Madurai tour packages with private cab. Visit Meenakshi Temple, Thirumalai Nayakar Palace & outstation trips to Kodai & Rameswaram.', keywords: ['madurai tour package', 'madurai taxi service', 'madurai to rameswaram cab'] }
  },
  {
    id: 'thanjavur',
    slug: 'thanjavur',
    name: 'Thanjavur (Tanjore)',
    state: 'Tamil Nadu',
    category: 'Heritage / Temple',
    categorySlug: 'heritage-tours',
    tagline: 'Cradle of Chola Architecture & Tanjore Paintings',
    heroImage: '/images/cars/sedan.webp',
    overview: 'Thanjavur is the historic heartland of the Chola Empire, home to the magnificent UNESCO World Heritage Brihadisvara (Big Temple), Tanjore Royal Palace, and Tanjore art plates.',
    history: 'Capital of the Chola Empire under Rajaraja Chola I in the 10th-11th centuries.',
    bestTime: 'October to March',
    weather: { summer: '28°C – 38°C', winter: '20°C – 29°C', monsoon: '24°C – 31°C' },
    coordinates: { lat: 10.7870, lng: 79.1378 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62600!2d79.1378!3d10.7870!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab5a2c5e5b%3A0xb3514a383d4e0e57!2sThanjavur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Brihadisvara Temple (Big Temple)', description: '1000-year-old UNESCO Chola temple featuring a 216-foot vimana and single-stone Nandi.', category: 'Heritage' },
      { name: 'Thanjavur Maratha Palace & Saraswathi Mahal Library', description: 'Royal palace complex with ancient manuscripts and Maratha art gallery.', category: 'Heritage' }
    ],
    activities: ['Exploring Big Temple shadow-less vimana architecture', 'Tanjore painting workshop visit'],
    localFood: [{ name: 'Tanjore Meals & Ash Gourd Halwa', type: 'Traditional Meal', description: 'Rich Delta rice meals with authentic sambar and sweets.' }],
    shopping: ['Tanjore Gold Foil Paintings', 'Dancing Dolls (Thanjavur Thalaiyatti Bommai)', 'Bronze Idols'],
    hotels: [{ name: 'Svatma Thanjavur', category: 'Luxury', area: 'Blake High School Road' }],
    travelTips: ['Best paired with Trichy (55 km) day tour.'],
    connectivity: { nearestAirport: 'Trichy International Airport (TRZ) - 55 km', nearestRailway: 'Thanjavur Junction (TJ)', roadConnectivity: 'NH67 connects Thanjavur to Trichy (55 km) and Nagapattinam (85 km).' },
    recommendedVehicle: 'Sedan or SUV.',
    popularPackages: ['trichy-thanjavur-day-tour'],
    nearbyDestinations: [{ name: 'Kumbakonam', slug: 'kumbakonam', distanceKm: 40 }, { name: 'Trichy', slug: 'trichy', distanceKm: 55 }],
    reviews: [{ author: 'Balaji S.', rating: 5, comment: 'Stunning Big Temple visit! SAMAYAS cab driver took us to Tanjore painting shops.', date: '2026-03-25' }],
    faq: [{ question: 'How far is Thanjavur from Trichy Airport?', answer: 'The distance is 55 km and takes about 1 hour by cab via NH67 highway.' }],
    seo: { title: 'Thanjavur Tour Packages | Tanjore Big Temple Cab | SAMAYAS', description: 'Book Thanjavur tour packages with private cab. Visit UNESCO Big Temple, Royal Palace & Kumbakonam from Trichy.', keywords: ['thanjavur tour package', 'trichy to thanjavur cab', 'tanjore big temple taxi'] }
  },
  {
    id: 'chidambaram',
    slug: 'chidambaram',
    name: 'Chidambaram',
    state: 'Tamil Nadu',
    category: 'Pilgrimage / Nature',
    categorySlug: 'temple-tours',
    tagline: 'Cosmic Dance Shrine of Lord Nataraja & Pichavaram Mangroves',
    heroImage: '/images/cars/sedan.webp',
    overview: 'Chidambaram is famous for the Thillai Nataraja Temple representing Ether (Akasha Stalam), and the world’s second largest mangrove forest at nearby Pichavaram.',
    history: 'Ancient Chola temple complex celebrating Nataraja, the cosmic dancer form of Shiva.',
    bestTime: 'October to March',
    weather: { summer: '26°C – 37°C', winter: '20°C – 28°C', monsoon: '23°C – 30°C' },
    coordinates: { lat: 11.3992, lng: 79.6936 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62550!2d79.6936!3d11.3992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9a5a2c5e5b%3A0xb3514a383d4e0e57!2sChidambaram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Thillai Nataraja Temple', description: '5-hall golden roofed temple of Shiva as Lord Nataraja.', category: 'Temple' },
      { name: 'Pichavaram Mangrove Forest', description: 'World’s 2nd largest mangrove forest offering scenic boat rides through narrow water canals.', category: 'Nature' }
    ],
    activities: ['Pichavaram row boat safari', 'Nataraja temple worship'],
    localFood: [{ name: 'Chidambaram Brinjal Gotsu & Idli', type: 'Breakfast', description: 'Spicy tangy eggplant gravy served with hot idlis.' }],
    shopping: ['Brass Pooja Utensils', 'Handloom Towels'],
    hotels: [{ name: 'Hotel Saradharam', category: 'Mid-Range', area: 'VGP Street' }],
    travelTips: ['Combine Nataraja temple morning darshan with Pichavaram afternoon boating.'],
    connectivity: { nearestAirport: 'Pondicherry Airport - 65 km / Trichy Airport - 165 km', nearestRailway: 'Chidambaram Railway Station (CDM)', roadConnectivity: 'ECR & NH32 connects Chidambaram to Cuddalore (45 km) and Pondicherry (65 km).' },
    recommendedVehicle: 'Sedan or SUV.',
    popularPackages: ['chidambaram-pichavaram-day-tour'],
    nearbyDestinations: [{ name: 'Pichavaram', slug: 'pichavaram', distanceKm: 15 }, { name: 'Pondicherry', slug: 'pondicherry', distanceKm: 65 }],
    reviews: [{ author: 'Meenakshi N.', rating: 5, comment: 'Pichavaram mangrove boat ride was wonderful! Great cab trip with SAMAYAS.', date: '2026-02-14' }],
    faq: [{ question: 'How far is Pichavaram mangrove forest from Chidambaram town?', answer: 'Pichavaram is just 15 km away and takes 25 minutes by taxi.' }],
    seo: { title: 'Chidambaram & Pichavaram Tour Packages | SAMAYAS Cabs', description: 'Book Chidambaram tour packages with private cab. Nataraja temple & Pichavaram mangrove boating from Pondicherry & Trichy.', keywords: ['chidambaram tour package', 'pichavaram mangrove cab', 'pondicherry to chidambaram taxi'] }
  },
  {
    id: 'velankanni',
    slug: 'velankanni',
    name: 'Velankanni',
    state: 'Tamil Nadu',
    category: 'Pilgrimage',
    categorySlug: 'temple-tours',
    tagline: 'Lourdes of the East & Basilica of Our Lady of Good Health',
    heroImage: '/images/cars/sedan.webp',
    overview: 'Velankanni is a famous coastal shrine town on the Coromandel Coast, home to the Basilica of Our Lady of Good Health, attracting millions of pilgrims of all faiths.',
    history: 'Miraculous Marian apparitions reported in the 16th and 17th centuries by local shepherds and Portuguese sailors.',
    bestTime: 'August to March',
    weather: { summer: '27°C – 37°C', winter: '20°C – 28°C', monsoon: '23°C – 30°C' },
    coordinates: { lat: 10.6811, lng: 79.8458 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62650!2d79.8458!3d10.6811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9a8a2c5e5b%3A0xb3514a383d4e0e57!2sVelankanni%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Basilica of Our Lady of Good Health', description: 'Gothic-style Catholic basilica with white towers facing the ocean.', category: 'Temple' },
      { name: 'Velankanni Beach & Museum', description: 'Quiet coastal beach and museum displaying holy offerings.', category: 'Sightseeing' }
    ],
    activities: ['Holy Mass prayer', 'Beach walks', 'Offering wax figures at shrine'],
    localFood: [{ name: 'Coastal Fish Curry & Bakery Snacks', type: 'Meals', description: 'Fresh seafood thalis and local bakery items.' }],
    shopping: ['Religious Candles & Rosaries', 'Seashell Crafts'],
    hotels: [{ name: 'Hotel Clinton Park', category: 'Mid-Range', area: 'Main Road' }],
    travelTips: ['Annual Feast festival takes place from August 29 to September 8.'],
    connectivity: { nearestAirport: 'Trichy International Airport (TRZ) - 150 km', nearestRailway: 'Velankanni Railway Station (VLNK)', roadConnectivity: 'NH83 connects Velankanni to Nagapattinam (12 km), Thanjavur (95 km), and Trichy (150 km).' },
    recommendedVehicle: 'Sedan or SUV.',
    popularPackages: ['velankanni-pilgrimage-tour'],
    nearbyDestinations: [{ name: 'Nagapattinam', slug: 'nagapattinam', distanceKm: 12 }, { name: 'Nagore', slug: 'nagore', distanceKm: 20 }],
    reviews: [{ author: 'Joseph D.', rating: 5, comment: 'Comfortable family cab trip from Trichy to Velankanni. On time and smooth driver.', date: '2026-03-30' }],
    faq: [{ question: 'How far is Velankanni from Trichy by cab?', answer: 'The distance is 150 km and takes about 3.5 hours by taxi.' }],
    seo: { title: 'Velankanni Tour Packages | Church Pilgrimage Taxi | SAMAYAS', description: 'Book Velankanni church pilgrimage packages with private cab from Trichy, Chennai & Madurai.', keywords: ['velankanni tour package', 'trichy to velankanni cab', 'velankanni church taxi'] }
  },
  {
    id: 'courtallam',
    slug: 'courtallam',
    name: 'Courtallam (Kuttralam)',
    state: 'Tamil Nadu',
    category: 'Nature / Waterfalls',
    categorySlug: 'adventure-tours',
    tagline: 'Spa of South India & Herbal Waterfall Haven',
    heroImage: '/images/cars/suv.webp',
    overview: 'Courtallam is a famous waterfall town in Tirunelveli district, renowned for 9 natural waterfalls infused with Western Ghats herbal plant properties.',
    history: 'Celebrated in Sangam literature as a natural healing resort on the Chittar river.',
    bestTime: 'June to September (Monsoon Season)',
    weather: { summer: '24°C – 34°C', winter: '18°C – 28°C', monsoon: '20°C – 26°C (Brisk Drizzle)' },
    coordinates: { lat: 8.9328, lng: 77.2687 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63100!2d77.2687!3d8.9328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04a5a2c5e5b%3A0xb3514a383d4e0e57!2sCourtallam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Main Falls (Peraruvi)', description: '60-meter high waterfall cascading down rock steps.', category: 'Nature' },
      { name: 'Five Falls (Aintharuvi)', description: 'Unique waterfall splitting into 5 distinct cascades.', category: 'Nature' },
      { name: 'Old Courtallam & Chitraruvi', description: 'Gentle scenic waterfalls suitable for families.', category: 'Nature' }
    ],
    activities: ['Herbal waterfall bath', 'Tirunelveli Halwa tasting at Tenkasi', 'Kutralanathar temple visit'],
    localFood: [{ name: 'Tenkasi Parotta & Border Rahmath Biryani', type: 'Non-veg Specialty', description: 'Famous Border Rahmath mutton biryani and flaky parottas.' }],
    shopping: ['Herbal Oils', 'Fresh Spices', 'Tirunelveli Wheat Halwa'],
    hotels: [{ name: 'Saaral Resort', category: 'Mid-Range', area: 'Tenkasi Road' }],
    travelTips: ['Peak waterfall season is June to September during southwest monsoon.'],
    connectivity: { nearestAirport: 'Trivandrum Airport (TRV) - 100 km / Madurai Airport - 160 km', nearestRailway: 'Tenkasi Junction (TSI) - 6 km', roadConnectivity: 'Connected via NH744 to Tenkasi (6 km), Madurai (160 km), and Trivandrum (100 km).' },
    recommendedVehicle: 'SUV or Sedan.',
    popularPackages: ['courtallam-waterfall-tour'],
    nearbyDestinations: [{ name: 'Tenkasi', slug: 'tenkasi', distanceKm: 6 }, { name: 'Papanasam', slug: 'papanasam', distanceKm: 35 }],
    reviews: [{ author: 'Nagarajan P.', rating: 5, comment: 'Amazing waterfall bath at Five Falls! SAMAYAS driver knew the best non-crowded spots.', date: '2026-07-05' }],
    faq: [{ question: 'Which month is best for Courtallam waterfalls?', answer: 'June to August is peak season when the waterfalls are full of mountain herbal water.' }],
    seo: { title: 'Courtallam Waterfalls Tour Packages | SAMAYAS Taxi', description: 'Book Courtallam waterfall tour packages with private cab. Visit Main Falls, Five Falls & Tenkasi from Madurai & Trivandrum.', keywords: ['courtallam tour package', 'courtallam waterfall cab', 'madurai to courtallam taxi'] }
  },

  // KERALA
  {
    id: 'munnar',
    slug: 'munnar',
    name: 'Munnar',
    state: 'Kerala',
    category: 'Hill Station',
    categorySlug: 'hill-stations',
    tagline: 'Tea Plantation Paradise of the Western Ghats',
    heroImage: '/images/cars/suv.webp',
    overview: 'Munnar is Kerala’s premier hill station situated at 1,600 meters where three mountain streams meet (Mudrapuzha, Nallathanni, Kundala). World famous for rolling tea hills, Neelakurinji blooms, and Eravikulam National Park.',
    history: 'Summer resort of the former British Administration in South India, transformed into tea estates by Tata Tea & Finlay.',
    bestTime: 'September to May',
    weather: { summer: '15°C – 25°C', winter: '5°C – 15°C', monsoon: '12°C – 20°C' },
    coordinates: { lat: 10.0889, lng: 77.0595 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62780!2d77.0595!3d10.0889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9d0a2c5e5b%3A0xb3514a383d4e0e57!2sMunnar%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Eravikulam National Park (Rajamalai)', description: 'Home to the endangered Nilgiri Tahr mountain goat and Anamudi peak.', category: 'Nature' },
      { name: 'Mattupetty Dam & Echo Point', description: 'Scenic concrete gravity dam surrounded by tea gardens offering speedboating.', category: 'Sightseeing' },
      { name: 'Tea Museum & Lockhart Gap', description: 'Historical tea museum and breathtaking valley viewpoint.', category: 'Photography' }
    ],
    activities: ['Tea plantation walk', 'Speedboating at Mattupetty', 'Elephant safari', 'Spices shopping'],
    localFood: [{ name: 'Kerala Sadya & Appam with Stew', type: 'Kerala Cuisine', description: 'Fluffy rice appam with coconut vegetable or chicken stew.' }],
    shopping: ['Fresh Munnar Tea', 'Cardamom & Spices', 'Homemade Chocolates', 'Essential Oils'],
    hotels: [{ name: 'Fragrant Nature Munnar', category: 'Luxury', area: 'Pothamedu' }, { name: 'Tea County Munnar', category: 'Mid-Range', area: 'Ikka Nagar' }],
    travelTips: ['Book Eravikulam park safari tickets online in advance to skip lines.'],
    connectivity: { nearestAirport: 'Cochin International Airport (COK) - 110 km', nearestRailway: 'Aluva Railway Station (AWY) - 110 km / Ernakulam (125 km)', roadConnectivity: 'Connected via Kochi-Dhanushkodi Highway (NH85) from Kochi (125 km), Madurai (160 km), and Coimbatore (160 km).' },
    recommendedVehicle: 'SUV (Innova Crysta / Ertiga) with experienced hills driver.',
    popularPackages: ['munnar-weekend', 'kerala-backwater-family-tour'],
    nearbyDestinations: [{ name: 'Thekkady', slug: 'thekkady', distanceKm: 85 }, { name: 'Kochi', slug: 'kochi', distanceKm: 125 }],
    reviews: [{ author: 'Anish Varghese', rating: 5, comment: 'Breathtaking Munnar trip with SAMAYAS cab! Driver was skilled on fog-covered roads.', date: '2026-05-10' }],
    faq: [{ question: 'How many days are recommended for Munnar?', answer: 'A 3-day / 2-night trip is ideal to explore Rajamalai, Mattupetty, Tea Museum, and Marayoor.' }],
    seo: { title: 'Munnar Tour Packages | Private Cab & Tea Garden Sightseeing | SAMAYAS', description: 'Book Munnar tour packages with private cab. 2-day & 3-day sightseeing from Kochi, Madurai & Coimbatore with expert driver.', keywords: ['munnar tour package', 'kochi to munnar cab', 'munnar tea estate taxi'] }
  },
  {
    id: 'thekkady',
    slug: 'thekkady',
    name: 'Thekkady (Periyar)',
    state: 'Kerala',
    category: 'Wildlife / Nature',
    categorySlug: 'adventure-tours',
    tagline: 'Periyar Tiger Reserve & Spice Plantations',
    heroImage: '/images/cars/suv.webp',
    overview: 'Thekkady is South India’s premier wildlife sanctuary centered around Periyar Lake. Celebrated for wild elephant herds, tiger reserve boat safaris, spice gardens, and Kalaripayattu martial arts shows.',
    history: 'Declared a wildlife sanctuary in 1934 by the Maharaja of Travancore.',
    bestTime: 'September to May',
    weather: { summer: '18°C – 29°C', winter: '14°C – 22°C', monsoon: '15°C – 24°C' },
    coordinates: { lat: 9.6031, lng: 77.1612 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62810!2d77.1612!3d9.6031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9d8a2c5e5b%3A0xb3514a383d4e0e57!2sThekkady%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Periyar Lake Boat Safari', description: 'Boat cruise on Periyar lake to spot wild elephants, gaur, and deer on lake shores.', category: 'Nature' },
      { name: 'Spice Plantation Tour', description: 'Guided walk through cardamom, pepper, cinnamon, and vanilla estates.', category: 'Sightseeing' },
      { name: 'Kathakali & Kalaripayattu Centre', description: 'Traditional Kerala classical dance and martial arts performance.', category: 'Heritage' }
    ],
    activities: ['Periyar Lake boat cruise', 'Elephant bathing & ride', 'Bamboo rafting', 'Night jungle patrol'],
    localFood: [{ name: 'Kerala Spice Chicken & Malabar Parotta', type: 'Non-veg', description: 'Spiced chicken roasted with green pepper and cardamom.' }],
    shopping: ['Green Cardamom & Black Pepper', 'Cinnamon & Cloves', 'Handcrafted Wood Carvings'],
    hotels: [{ name: 'Spice Village - CGH Earth', category: 'Luxury', area: 'Kumily' }],
    travelTips: ['Book Periyar boat safari tickets online via Kerala Forest Dept website.'],
    connectivity: { nearestAirport: 'Madurai Airport (IXM) - 140 km / Cochin (145 km)', nearestRailway: 'Kottayam Railway Station (KTYM) - 105 km', roadConnectivity: 'Connected via KK Road (NH183) from Madurai (140 km) and Kottayam (105 km).' },
    recommendedVehicle: 'SUV (Ertiga / Innova).',
    popularPackages: ['munnar-thekkady-tour'],
    nearbyDestinations: [{ name: 'Munnar', slug: 'munnar', distanceKm: 85 }, { name: 'Alleppey', slug: 'alleppey', distanceKm: 138 }],
    reviews: [{ author: 'Naveen K.', rating: 5, comment: 'Saw wild elephant herd during Periyar boat safari! Excellent cab service from Madurai.', date: '2026-04-18' }],
    faq: [{ question: 'How far is Thekkady from Munnar by cab?', answer: 'The distance is 85 km and takes about 3 hours via mountain road.' }],
    seo: { title: 'Thekkady Tour Packages | Periyar Safari Cab | SAMAYAS', description: 'Book Thekkady tour packages with private cab. Periyar lake safari, spice garden tours & Kathakali shows from Madurai & Cochin.', keywords: ['thekkady tour package', 'periyar boat safari cab', 'munnar to thekkady taxi'] }
  },
  {
    id: 'alleppey',
    slug: 'alleppey',
    name: 'Alleppey (Alappuzha)',
    state: 'Kerala',
    category: 'Backwaters',
    categorySlug: 'honeymoon-packages',
    tagline: 'Venice of the East & Houseboat Backwaters',
    heroImage: '/images/cars/sedan.webp',
    overview: 'Alleppey is Kerala’s famous backwater capital, renowned for tranquil palm-fringed canals, Kettuvallam houseboats, paddy fields below sea level in Kuttanad, and Marari beach.',
    history: 'Built as a planned port city in 1762 by Raja Kesavadas, the Prime Minister of Travancore.',
    bestTime: 'October to March',
    weather: { summer: '25°C – 34°C', winter: '20°C – 30°C', monsoon: '23°C – 29°C' },
    coordinates: { lat: 9.4981, lng: 76.3388 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62870!2d76.3388!3d9.4981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9e0a2c5e5b%3A0xb3514a383d4e0e57!2sAlleppey%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Vembanad Lake Backwaters', description: 'Vast palm-lined lagoon network navigated by luxury houseboats.', category: 'Nature' },
      { name: 'Alleppey Beach & Lighthouse', description: 'Historic 150-year-old pier and lighthouse on Arabian sea.', category: 'Sightseeing' },
      { name: 'Kuttanad Paddy Fields', description: 'Unique region where farming is done below sea level.', category: 'Photography' }
    ],
    activities: ['Overnight houseboat cruise', 'Shikara boat ride through narrow canals', 'Sunset at Marari beach'],
    localFood: [{ name: 'Karimeen Pollichathu & Toddy Shop Duck Curry', type: 'Backwater Cuisine', description: 'Pearl spot fish marinated in banana leaf roast.' }],
    shopping: ['Coir Crafts & Mats', 'Banana Chips in Coconut Oil', 'Spices'],
    hotels: [{ name: 'Lake Palace Resort', category: 'Luxury', area: 'Punnamada' }],
    travelTips: ['Check-in for overnight houseboats is 12:00 PM.'],
    connectivity: { nearestAirport: 'Cochin International Airport (COK) - 75 km', nearestRailway: 'Alappuzha Railway Station (ALLP)', roadConnectivity: 'NH66 connects Alleppey to Kochi (55 km), Trivandrum (150 km), and Madurai (260 km).' },
    recommendedVehicle: 'Sedan or SUV.',
    popularPackages: ['kerala-backwater-family-tour'],
    nearbyDestinations: [{ name: 'Kumarakom', slug: 'kumarakom', distanceKm: 32 }, { name: 'Kochi', slug: 'kochi', distanceKm: 55 }],
    reviews: [{ author: 'Vikram S.', rating: 5, comment: 'Houseboat experience was magical! Driver transferred us smoothly from Cochin airport to jetty.', date: '2026-02-15' }],
    faq: [{ question: 'How far is Alleppey from Cochin Airport?', answer: 'The distance is 75 km and takes about 2 hours by cab.' }],
    seo: { title: 'Alleppey Backwater Tour Packages | Houseboat Cab | SAMAYAS', description: 'Book Alleppey backwater tour packages with private cab. Houseboat cruises, shikara rides & Marari beach from Kochi.', keywords: ['alleppey tour package', 'kochi to alleppey cab', 'alleppey houseboat package'] }
  },

  // KARNATAKA
  {
    id: 'mysore',
    slug: 'mysore',
    name: 'Mysore (Mysuru)',
    state: 'Karnataka',
    category: 'Heritage',
    categorySlug: 'heritage-tours',
    tagline: 'City of Palaces, Silk & Royal Heritage',
    heroImage: '/images/cars/innova.webp',
    overview: 'Mysore is Karnataka’s cultural capital, famous for the magnificent Amba Vilas Mysore Palace, Chamundi Hill temple, Dasara festival, Mysore Silk, and Mysore Pak.',
    history: 'Historic capital of the Kingdom of Mysore ruled by the Wodeyar dynasty for over six centuries.',
    bestTime: 'October to March',
    weather: { summer: '22°C – 34°C', winter: '15°C – 28°C', monsoon: '20°C – 28°C' },
    coordinates: { lat: 12.2958, lng: 76.6394 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62450!2d76.6394!3d12.2958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9f0a2c5e5b%3A0xb3514a383d4e0e57!2sMysore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Mysore Palace (Amba Vilas)', description: 'Grand Indo-Saracenic royal palace illuminated by 100,000 bulbs on Sundays.', category: 'Heritage' },
      { name: 'Chamundeshwari Temple & Nandi', description: 'Hilltop temple with giant 16-foot monolithic Nandi bull.', category: 'Temple' },
      { name: 'Brindavan Gardens & KRS Dam', description: 'Terraced gardens famous for musical fountain light shows.', category: 'Sightseeing' },
      { name: 'St. Philomena’s Cathedral', description: 'Neo-Gothic church with 175-foot twin spires.', category: 'Heritage' }
    ],
    activities: ['Sunday night Mysore palace illumination', 'Mysore Pak tasting at Guru Sweets', 'Brindavan musical fountain show'],
    localFood: [{ name: 'Mylari Masala Dosa & Mysore Pak', type: 'Karnataka Specialty', description: 'Butter-loaded soft Mylari dosa and melt-in-mouth ghee Mysore Pak.' }],
    shopping: ['Pure Mysore Silk Sarees', 'Sandalwood Carvings & Oil', 'Mysore Pak'],
    hotels: [{ name: 'Grand Mercure Mysore', category: 'Luxury', area: 'Sayyaji Rao Road' }],
    travelTips: ['Palace illumination is on Sundays & public holidays from 7:00 PM to 7:45 PM.'],
    connectivity: { nearestAirport: 'Mysore Airport (MYQ) / Bangalore (BLR) - 170 km', nearestRailway: 'Mysore Junction (MYS)', roadConnectivity: 'Connected via 10-lane Bengaluru-Mysuru Expressway (145 km from Bangalore).' },
    recommendedVehicle: 'Sedan or SUV.',
    popularPackages: ['coorg-mysore-tour', 'bangalore-to-mysore-tour-package'],
    nearbyDestinations: [{ name: 'Coorg', slug: 'coorg', distanceKm: 118 }, { name: 'Seringapatam', slug: 'seringapatam', distanceKm: 15 }],
    reviews: [{ author: 'Pradeep R.', rating: 5, comment: 'Awesome Mysore Palace & Chamundi hill tour with SAMAYAS cab from Bangalore!', date: '2026-01-15' }],
    faq: [{ question: 'How long does it take from Bangalore to Mysore by cab via Expressway?', answer: 'It takes just 2 to 2.5 hours via the new Bengaluru-Mysuru Expressway.' }],
    seo: { title: 'Mysore Tour Packages | Bangalore to Mysore Cab | SAMAYAS', description: 'Book Mysore tour packages with private cab. Visit Mysore Palace, Chamundi Hills & Brindavan Gardens from Bangalore.', keywords: ['mysore tour package', 'bangalore to mysore cab', 'mysore palace sightseeing'] }
  },
  {
    id: 'coorg',
    slug: 'coorg',
    name: 'Coorg (Kodagu)',
    state: 'Karnataka',
    category: 'Hill Station',
    categorySlug: 'hill-stations',
    tagline: 'Scotland of India & Coffee Capital',
    heroImage: '/images/cars/suv.webp',
    overview: 'Coorg is a picturesque hill region on the slopes of the Western Ghats in Karnataka, famous for misty coffee plantations, Abbey Waterfalls, Raja’s Seat, and Namdroling Tibetan Monastery.',
    history: 'Land of the Kodava warrior clan with rich martial culture and coffee heritage.',
    bestTime: 'October to May',
    weather: { summer: '18°C – 30°C', winter: '10°C – 20°C', monsoon: '14°C – 22°C' },
    coordinates: { lat: 12.4244, lng: 75.7382 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62480!2d75.7382!3d12.4244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9f8a2c5e5b%3A0xb3514a383d4e0e57!2sCoorg%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Abbey Falls', description: 'Roaring waterfall nestled amidst coffee bushes and spice trees.', category: 'Nature' },
      { name: 'Raja’s Seat', description: 'Seasonal garden offering panoramic sunset views over valley hills.', category: 'Photography' },
      { name: 'Namdroling Tibetan Monastery (Golden Temple)', description: 'Vibrant Tibetan settlement at Bylakuppe featuring 40ft golden Buddha statues.', category: 'Heritage' },
      { name: 'Dubare Elephant Camp', description: 'Elephant training camp on the banks of Cauvery river.', category: 'Nature' }
    ],
    activities: ['Coffee plantation trail', 'Elephant feeding at Dubare', 'River rafting at Barapole', 'Sunset watching at Raja’s Seat'],
    localFood: [{ name: 'Pandi Curry & Kadambuttu', type: 'Kodava Cuisine', description: 'Coorg black pepper pork curry served with steamed rice dumplings.' }],
    shopping: ['Robusta & Arabica Coffee', 'Coorg Spices & Honey', 'Homemade Wines'],
    hotels: [{ name: 'Evolve Back Coorg', category: 'Luxury', area: 'Siddapur' }, { name: 'Tamara Coorg', category: 'Luxury', area: 'Yavakapadi' }],
    travelTips: ['Combine Coorg with Mysore for a complete 4-day trip.'],
    connectivity: { nearestAirport: 'Kannur Airport (CNN) - 90 km / Mangalore (140 km) / Bangalore (265 km)', nearestRailway: 'Mysore Railway Station (MYS) - 118 km', roadConnectivity: 'Connected via NH275 from Mysore (118 km) and Bangalore (265 km).' },
    recommendedVehicle: 'SUV (Innova / XUV700) for hill curves.',
    popularPackages: ['coorg-family-tour', 'bangalore-to-coorg-tour-package'],
    nearbyDestinations: [{ name: 'Mysore', slug: 'mysore', distanceKm: 118 }, { name: 'Wayanad', slug: 'wayanad', distanceKm: 110 }],
    reviews: [{ author: 'Rohan Mehta', rating: 5, comment: 'Unreal greenery in Coorg! SAMAYAS driver knew the best coffee estate homestays.', date: '2026-05-02' }],
    faq: [{ question: 'What is the distance from Bangalore to Coorg by cab?', answer: 'The distance is 265 km and takes about 5.5 hours by taxi via Mysore expressway.' }],
    seo: { title: 'Coorg Tour Packages | Bangalore to Coorg Cab | SAMAYAS', description: 'Book Coorg tour packages with private cab. Coffee estate stay, Abbey falls & Dubare elephant camp from Bangalore & Mysore.', keywords: ['coorg tour package', 'bangalore to coorg cab', 'coorg 3 days itinerary'] }
  },

  // ANDHRA PRADESH
  {
    id: 'tirupati',
    slug: 'tirupati',
    name: 'Tirupati (Tirumala)',
    state: 'Andhra Pradesh',
    category: 'Pilgrimage',
    categorySlug: 'temple-tours',
    tagline: 'World Famous Abode of Lord Sri Venkateswara',
    heroImage: '/images/cars/suv.webp',
    overview: 'Tirupati is the world’s most visited Hindu pilgrimage center, situated at the foot of Seshachalam hills in Andhra Pradesh. Home to the holy Tirumala Venkateswara Temple.',
    history: 'Ancient temple patronized by the Chola, Hoysala, and Vijayanagara emperors, particularly Emperor Krishnadevaraya.',
    bestTime: 'September to March',
    weather: { summer: '26°C – 40°C', winter: '16°C – 28°C', monsoon: '22°C – 30°C' },
    coordinates: { lat: 13.6288, lng: 79.4192 },
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62050!2d79.4192!3d13.6288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b5a2c5e5b%3A0xb3514a383d4e0e57!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    topAttractions: [
      { name: 'Sri Venkateswara Swamy Temple (Tirumala)', description: 'World famous hilltop temple of Lord Balaji.', category: 'Temple' },
      { name: 'Padmavathi Ammavari Temple (Tiruchanur)', description: 'Sacred temple dedicated to Goddess Padmavathi.', category: 'Temple' },
      { name: 'Silathoranam (Natural Arch)', description: 'Rare natural rock arch in Tirumala hills dating back millions of years.', category: 'Nature' }
    ],
    activities: ['Tirumala Balaji Darshan', 'Tonsure hair offering', 'Tirupati Laddu prasadam pickup'],
    localFood: [{ name: 'Tirupati Laddu & Andhra Meal', type: 'Prasadam & Thali', description: 'Famous GI-tagged ghee Tirupati laddu.' }],
    shopping: ['Tirupati Laddu Prasadam', 'Wooden Idols', 'Brass Items'],
    hotels: [{ name: 'Fortune Select Grand Ridge', category: 'Luxury', area: 'Tiruchanur Road' }],
    travelTips: ['Book TTD Special Entry Darshan (Rs 300) online well in advance.'],
    connectivity: { nearestAirport: 'Tirupati Airport (TIR) - 15 km', nearestRailway: 'Tirupati Main (TPTY) / Renigunta (RU)', roadConnectivity: 'NH71 connects Tirupati to Chennai (135 km) and Bangalore (250 km).' },
    recommendedVehicle: 'Sedan or SUV for hill climb to Tirumala.',
    popularPackages: ['tirupati-balaji-tour', 'chennai-to-tirupati-tour-package'],
    nearbyDestinations: [{ name: 'Srikalahasti', slug: 'srikalahasti', distanceKm: 36 }, { name: 'Kanipakam', slug: 'kanipakam', distanceKm: 70 }],
    reviews: [{ author: 'Srinivasa Rao', rating: 5, comment: 'Very smooth Tirupati trip from Chennai with SAMAYAS cab! Driver navigated Tirumala ghat road easily.', date: '2026-03-28' }],
    faq: [{ question: 'How far is Tirupati from Chennai by cab?', answer: 'The distance is 135 km and takes about 3 hours via Tiruttani road.' }],
    seo: { title: 'Tirupati Tour Packages | Chennai to Tirupati Cab | SAMAYAS', description: 'Book Tirupati Balaji tour packages with private cab. Tirumala darshan, Padmavathi temple & Srikalahasti trips from Chennai.', keywords: ['tirupati tour package', 'chennai to tirupati cab', 'tirumala balaji taxi'] }
  }
]
