export const airportsMasterDataset = [
  // ── TAMIL NADU AIRPORTS ──
  {
    id: 'maa',
    name: 'Chennai International Airport',
    slug: 'chennai-international-airport',
    shortName: 'Chennai Airport',
    iata: 'MAA',
    icao: 'VOMM',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    type: 'International',
    coordinates: { lat: 12.9941, lng: 80.1709 },
    description: 'Premier gateway to South India. Serving over 20 million international and domestic passengers annually with 24/7 round-the-clock doorstep taxi pickups to all Tamil Nadu districts.',
    featured: true,
    airportImage: '/airports/chennai.jpg',
    terminals: ['Terminal 1 (Domestic T1)', 'Terminal 2 (International T2)'],
    operatingHours: '24 Hours / 7 Days',
    airportFacilities: [
      { name: '24/7 Taxi Pick-up Zone', type: 'Transport', description: 'Dedicated SAMAYAS doorstep taxi pick-up bay at T1 & T2 arrivals.' },
      { name: 'Currency Exchange & Forex', type: 'Financial', description: 'Thomas Cook & EbixCash Forex counters at international arrivals.' },
      { name: 'Free Wi-Fi & Charging Plugs', type: 'Connectivity', description: 'High-speed 45-min free Wi-Fi and universal charging stations.' },
      { name: 'Executive Lounges', type: 'Lounge', description: 'Travel Club Lounge in domestic & international departure terminals.' },
      { name: 'Duty-Free Shopping', type: 'Retail', description: 'World-class international duty-free perfumes, cosmetics & spirits.' }
    ],
    nearbyHotels: [
      { name: 'Radisson Blu Hotel Chennai Airport', category: '5-Star Luxury', distance: '2.0 km' },
      { name: 'ITC Grand Chola', category: '5-Star Luxury Heritage', distance: '6.5 km' },
      { name: 'Trident Hotel Chennai', category: '5-Star Hotel', distance: '3.0 km' },
      { name: 'Le Royal Méridien', category: '5-Star Hotel', distance: '5.0 km' }
    ],
    nearbyRestaurants: [
      { name: 'Sangeetha Pure Veg Restaurant', category: 'South Indian Tiffin', distance: '1.5 km' },
      { name: 'A2B Pure Veg (GST Road)', category: 'South & North Indian', distance: '2.0 km' },
      { name: 'Buhari Hotel Chennai', category: 'Famous Biryani & Non-Veg', distance: '3.5 km' }
    ],
    nearbyRailwayStations: [
      { name: 'Tirusulam Railway Station (Suburban)', category: 'Suburban Line', distance: '0.5 km' },
      { name: 'Chennai Central Railway Station (MAS)', category: 'Major Railway Hub', distance: '18.0 km' },
      { name: 'Chennai Egmore Railway Station (MS)', category: 'Major Railway Hub', distance: '16.0 km' }
    ],
    nearbyBusStand: [
      { name: 'Kilambakkam KCBT Bus Terminus', category: 'Interstate & District Bus Hub', distance: '18.0 km' },
      { name: 'Koyambedu CMBT Bus Stand', category: 'Major City Bus Terminal', distance: '14.0 km' }
    ],
    popularRoutes: [
      { destination: 'Pondicherry', slug: 'chennai-airport-to-pondicherry', distance: '145 km', travelTime: '3.0 Hours', startingFare: 2175, type: 'Tourist' },
      { destination: 'Vellore (CMC Hospital)', slug: 'chennai-airport-to-vellore', distance: '135 km', travelTime: '2.75 Hours', startingFare: 2025, type: 'City' },
      { destination: 'Kanchipuram', slug: 'chennai-airport-to-kanchipuram', distance: '65 km', travelTime: '1.5 Hours', startingFare: 1950, type: 'Pilgrimage' },
      { destination: 'Mahabalipuram', slug: 'chennai-airport-to-mahabalipuram', distance: '55 km', travelTime: '1.25 Hours', startingFare: 1950, type: 'Tourist' },
      { destination: 'Tirupati (Andhra Pradesh)', slug: 'chennai-airport-to-tirupati', distance: '135 km', travelTime: '3.25 Hours', startingFare: 2025, type: 'Pilgrimage' },
      { destination: 'Trichy', slug: 'chennai-airport-to-trichy', distance: '320 km', travelTime: '5.5 Hours', startingFare: 4800, type: 'District' }
    ],
    faq: [
      { q: 'Where will the SAMAYAS cab driver meet me at Chennai Airport (MAA)?', a: 'Our driver will meet you directly at the Arrival Gate exit pillar with a personalized nameboard (Meet & Greet service) and assist with your luggage.' },
      { q: 'What happens if my international flight to Chennai Airport gets delayed?', a: 'We track your flight live using your flight number. Our driver automatically adjusts pickup time with zero penalty for flight delays.' },
      { q: 'Can NRIs pre-book a cab from abroad for their family in Tamil Nadu?', a: 'Yes! NRIs can book online in advance via WhatsApp or our booking form. You receive instant driver contact details and real-time trip tracking.' }
    ],
    seo: {
      title: 'Chennai Airport Taxi Booking (MAA) | 24/7 Doorstep Cabs | SAMAYAS',
      description: 'Book 24/7 Chennai Airport taxi service (MAA). Guaranteed doorstep pickup, live flight tracking, transparent per-km fares & zero return charges.',
      keywords: ['chennai airport taxi', 'maa airport cab booking', 'chennai airport pickup', 'nri airport taxi chennai', 'chennai airport to pondicherry cab']
    }
  },

  {
    id: 'trz',
    name: 'Tiruchirappalli International Airport',
    slug: 'tiruchirappalli-international-airport',
    shortName: 'Trichy Airport',
    iata: 'TRZ',
    icao: 'VOTR',
    city: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    country: 'India',
    type: 'International',
    coordinates: { lat: 10.7654, lng: 78.7097 },
    description: 'Central Tamil Nadu’s busiest international airport. Primary hub for NRIs and pilgrims traveling to Thanjavur, Kumbakonam, Karur, Pudukkottai, Nagapattinam & Delta districts.',
    featured: true,
    airportImage: '/airports/trichy.jpg',
    terminals: ['New Integrated Terminal Building (NITB)'],
    operatingHours: '24 Hours / 7 Days',
    airportFacilities: [
      { name: 'SAMAYAS Doorstep Pickup Bay', type: 'Transport', description: 'Immediate door-to-door cab pickup at main arrival concourse.' },
      { name: 'Forex & Money Exchange', type: 'Financial', description: '24/7 International currency conversion counters.' },
      { name: 'Prepaid SIM & Wi-Fi', type: 'Connectivity', description: 'Airtel & Jio tourist SIM card helpdesk at arrivals.' },
      { name: 'VIP Executive Lounge', type: 'Lounge', description: 'Comfortable air-conditioned lounge with refreshment bar.' }
    ],
    nearbyHotels: [
      { name: 'SRM Hotel Trichy Airport', category: '4-Star Luxury', distance: '1.0 km' },
      { name: 'Breeze Residency', category: '3-Star Premium', distance: '4.5 km' },
      { name: 'Hotel Sangam Trichy', category: '4-Star Heritage', distance: '6.0 km' }
    ],
    nearbyRestaurants: [
      { name: 'Banana Leaf South Indian Restaurant', category: 'Authentic Meals', distance: '0.8 km' },
      { name: 'Vasantha Bhavan Pure Veg', category: 'South Indian Tiffin', distance: '2.5 km' }
    ],
    nearbyRailwayStations: [
      { name: 'Trichy Junction Railway Station (TPJ)', category: 'Major Railway Hub', distance: '6.5 km' },
      { name: 'Trichy Fort Railway Station (TP)', category: 'Suburban Station', distance: '8.0 km' }
    ],
    nearbyBusStand: [
      { name: 'Central Bus Stand Trichy', category: 'Major Bus Terminus', distance: '6.0 km' },
      { name: 'Chatram Bus Stand Trichy', category: 'City Bus Stand', distance: '9.0 km' }
    ],
    popularRoutes: [
      { destination: 'Thanjavur', slug: 'trichy-airport-to-thanjavur', distance: '55 km', travelTime: '1.0 Hours', startingFare: 1950, type: 'District' },
      { destination: 'Kumbakonam', slug: 'trichy-airport-to-kumbakonam', distance: '90 km', travelTime: '2.0 Hours', startingFare: 1950, type: 'Pilgrimage' },
      { destination: 'Velankanni', slug: 'trichy-airport-to-velankanni', distance: '155 km', travelTime: '3.5 Hours', startingFare: 2325, type: 'Pilgrimage' },
      { destination: 'Pudukkottai', slug: 'trichy-airport-to-pudukkottai', distance: '50 km', travelTime: '1.0 Hours', startingFare: 1950, type: 'District' },
      { destination: 'Karur', slug: 'trichy-airport-to-karur', distance: '85 km', travelTime: '1.75 Hours', startingFare: 1950, type: 'City' },
      { destination: 'Chennai', slug: 'trichy-airport-to-chennai', distance: '330 km', travelTime: '5.5 Hours', startingFare: 4950, type: 'City' }
    ],
    faq: [
      { q: 'Is 24/7 airport taxi booking available at Trichy Airport (TRZ)?', a: 'Yes, SAMAYAS provides round-the-clock 24/7 doorstep pickup directly from Trichy International Airport new terminal.' },
      { q: 'How far is Thanjavur from Trichy Airport and what is the taxi fare?', a: 'Thanjavur is 55 km from Trichy Airport. The travel time is ~1 hour and starting fare is ₹1,950 under our 130 km minimum tariff limit.' }
    ],
    seo: {
      title: 'Trichy Airport Taxi Booking (TRZ) | 24/7 Doorstep Cabs | SAMAYAS',
      description: 'Book 24/7 Trichy International Airport taxi service (TRZ). Doorstep pickup to Thanjavur, Kumbakonam, Velankanni & all Delta districts with zero return fee.',
      keywords: ['trichy airport taxi', 'trz airport cab booking', 'trichy airport to thanjavur cab', 'trichy airport to kumbakonam taxi', 'nri taxi trichy airport']
    }
  },

  {
    id: 'cjb',
    name: 'Coimbatore International Airport',
    slug: 'coimbatore-international-airport',
    shortName: 'Coimbatore Airport',
    iata: 'CJB',
    icao: 'VOCB',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    country: 'India',
    type: 'International',
    coordinates: { lat: 11.0300, lng: 77.0434 },
    description: 'Western Tamil Nadu’s premier airport serving Coimbatore, Nilgiris (Ooty/Coonoor), Tiruppur textile hub, Salem, Erode & Kerala border districts.',
    featured: true,
    airportImage: '/airports/coimbatore.jpg',
    terminals: ['Integrated Passenger Terminal'],
    operatingHours: '24 Hours / 7 Days',
    airportFacilities: [
      { name: 'Hill Station Certified Cab Fleet', type: 'Transport', description: 'Specialized drivers with hill gear expertise for Ooty, Coonoor & Valparai.' },
      { name: 'Executive Airport Lounge', type: 'Lounge', description: 'Air-conditioned quiet zone with Wi-Fi & buffet.' },
      { name: 'Forex Exchange Counter', type: 'Financial', description: '24-hour foreign currency exchange desk.' }
    ],
    nearbyHotels: [
      { name: 'Fairfield by Marriott Coimbatore', category: '4-Star Business', distance: '0.8 km' },
      { name: 'Radisson Blu Coimbatore', category: '5-Star Luxury', distance: '5.0 km' },
      { name: 'The Residency Towers', category: '5-Star Hotel', distance: '7.0 km' }
    ],
    nearbyRestaurants: [
      { name: 'Anapoorna Gowrishankar Pure Veg', category: 'Famous Sambar Dosa', distance: '1.2 km' },
      { name: 'Haribhavanam Non-Veg', category: 'Kongu Style Cuisine', distance: '3.0 km' }
    ],
    nearbyRailwayStations: [
      { name: 'Coimbatore Junction (CBE)', category: 'Major Railway Station', distance: '11.0 km' },
      { name: 'Peelamedu Railway Station (PLMG)', category: 'Local Station', distance: '3.5 km' }
    ],
    nearbyBusStand: [
      { name: 'Gandhipuram Bus Stand', category: 'Central Bus Terminal', distance: '9.0 km' },
      { name: 'Singanallur Bus Stand', category: 'Intercity Bus Station', distance: '6.5 km' }
    ],
    popularRoutes: [
      { destination: 'Ooty (Nilgiris)', slug: 'coimbatore-airport-to-ooty', distance: '85 km', travelTime: '2.75 Hours', startingFare: 1950, type: 'Tourist' },
      { destination: 'Coonoor', slug: 'coimbatore-airport-to-coonoor', distance: '70 km', travelTime: '2.25 Hours', startingFare: 1950, type: 'Tourist' },
      { destination: 'Valparai', slug: 'coimbatore-airport-to-valparai', distance: '105 km', travelTime: '3.5 Hours', startingFare: 1950, type: 'Tourist' },
      { destination: 'Tiruppur', slug: 'coimbatore-airport-to-tiruppur', distance: '45 km', travelTime: '1.0 Hours', startingFare: 1950, type: 'City' },
      { destination: 'Erode', slug: 'coimbatore-airport-to-erode', distance: '100 km', travelTime: '2.0 Hours', startingFare: 1950, type: 'City' },
      { destination: 'Salem', slug: 'coimbatore-airport-to-salem', distance: '165 km', travelTime: '3.0 Hours', startingFare: 2475, type: 'City' }
    ],
    faq: [
      { q: 'Do SAMAYAS drivers have hill driving experience for Coimbatore to Ooty cab trips?', a: 'Yes! All drivers operating Nilgiri routes (Ooty, Coonoor, Valparai) are hill-certified experts in mountain gear control and hairpin bend navigation.' },
      { q: 'Can I book a cab from Coimbatore Airport to Palakkad in Kerala?', a: 'Yes, we provide seamless interstate transfers from Coimbatore Airport to Palakkad, Thrissur & Kerala border destinations.' }
    ],
    seo: {
      title: 'Coimbatore Airport Taxi Booking (CJB) | Ooty & Intercity Cabs | SAMAYAS',
      description: 'Book 24/7 Coimbatore Airport taxi service (CJB). Reliable hill-certified cabs to Ooty, Coonoor, Valparai, Tiruppur & Salem with zero return charges.',
      keywords: ['coimbatore airport taxi', 'cjb airport cab booking', 'coimbatore airport to ooty cab', 'coimbatore airport to coonoor taxi']
    }
  },

  {
    id: 'ixm',
    name: 'Madurai Airport',
    slug: 'madurai-airport',
    shortName: 'Madurai Airport',
    iata: 'IXM',
    icao: 'VOMD',
    city: 'Madurai',
    state: 'Tamil Nadu',
    country: 'India',
    type: 'International',
    coordinates: { lat: 9.8345, lng: 78.0934 },
    description: 'Southern Tamil Nadu’s key aviation hub. Serving pilgrims and travelers heading to Meenakshi Temple, Rameswaram, Kodaikanal, Tiruchendur & Tirunelveli.',
    featured: true,
    airportImage: '/airports/madurai.jpg',
    terminals: ['Integrated Terminal'],
    operatingHours: '24 Hours / 7 Days',
    airportFacilities: [
      { name: 'Doorstep Airport Pickup Point', type: 'Transport', description: 'Direct terminal entrance pickup with driver waiting assistance.' },
      { name: 'Tourist Information Helpdesk', type: 'Information', description: 'Pilgrimage and tourist guidance desk.' }
    ],
    nearbyHotels: [
      { name: 'Heritage Madurai', category: '5-Star Resort', distance: '12.0 km' },
      { name: 'Courtyard by Marriott Madurai', category: '4-Star Hotel', distance: '10.0 km' }
    ],
    nearbyRestaurants: [
      { name: 'Murugan Idli Shop Madurai', category: 'Famous Dosa & Idli', distance: '9.0 km' },
      { name: 'Famous Famous Jigarthanda Stall', category: 'Famous Dessert', distance: '8.0 km' }
    ],
    nearbyRailwayStations: [
      { name: 'Madurai Junction (MDU)', category: 'Major Railway Hub', distance: '12.0 km' }
    ],
    nearbyBusStand: [
      { name: 'Mattuthavani Bus Stand (MIBT)', category: 'Major Integrated Bus Stand', distance: '15.0 km' },
      { name: 'Arapalayam Bus Stand', category: 'District Bus Hub', distance: '14.0 km' }
    ],
    popularRoutes: [
      { destination: 'Rameshwaram', slug: 'madurai-airport-to-rameswaram', distance: '175 km', travelTime: '3.5 Hours', startingFare: 2625, type: 'Pilgrimage' },
      { destination: 'Kodaikanal', slug: 'madurai-airport-to-kodaikanal', distance: '115 km', travelTime: '3.0 Hours', startingFare: 1950, type: 'Tourist' },
      { destination: 'Tiruchendur', slug: 'madurai-airport-to-tiruchendur', distance: '180 km', travelTime: '3.5 Hours', startingFare: 2700, type: 'Pilgrimage' },
      { destination: 'Tirunelveli', slug: 'madurai-airport-to-tirunelveli', distance: '160 km', travelTime: '2.75 Hours', startingFare: 2400, type: 'City' }
    ],
    faq: [
      { q: 'What is the taxi fare from Madurai Airport to Rameshwaram?', a: 'The distance is 175 km. Travel time is ~3.5 hours via NH87, and the starting Hatchback/Sedan fare is ₹2,625 with zero return fees.' }
    ],
    seo: {
      title: 'Madurai Airport Taxi Booking (IXM) | Rameshwaram & Kodaikanal | SAMAYAS',
      description: 'Book 24/7 Madurai Airport taxi (IXM). Doorstep cabs to Rameshwaram, Kodaikanal, Tiruchendur & Tirunelveli with live flight tracking.',
      keywords: ['madurai airport taxi', 'ixm airport cab', 'madurai airport to rameshwaram cab', 'madurai airport to kodaikanal taxi']
    }
  },

  // ── KERALA AIRPORTS ──
  {
    id: 'cok',
    name: 'Cochin International Airport',
    slug: 'cochin-international-airport',
    shortName: 'Cochin Airport',
    iata: 'COK',
    icao: 'VOCI',
    city: 'Kochi',
    state: 'Kerala',
    country: 'India',
    type: 'International',
    coordinates: { lat: 10.1520, lng: 76.4019 },
    description: 'World’s first fully solar-powered airport and Kerala’s primary international hub. Connecting travelers to Munnar, Alleppey backwaters, Fort Kochi & Tamil Nadu border districts.',
    featured: true,
    airportImage: '/airports/cochin.jpg',
    terminals: ['Terminal 1 (Domestic)', 'Terminal 3 (International T3)'],
    operatingHours: '24 Hours / 7 Days',
    airportFacilities: [
      { name: 'Solar Eco Canopy Pickup', type: 'Transport', description: 'Shaded EV & taxi pickup zone.' },
      { name: 'Duty Free & Lounge', type: 'Lounge', description: 'Premium Earth Lounge in T3.' }
    ],
    nearbyHotels: [
      { name: 'Courtyard by Marriott Kochi Airport', category: '4-Star Luxury', distance: '1.2 km' },
      { name: 'Flora Airport Hotel', category: '4-Star Business', distance: '1.0 km' }
    ],
    nearbyRestaurants: [
      { name: 'Vindhyas Pure Veg', category: 'South Indian & Kerala Meals', distance: '1.5 km' }
    ],
    nearbyRailwayStations: [
      { name: 'Angamaly Railway Station (AFK)', category: 'Nearest Station', distance: '5.5 km' },
      { name: 'Ernakulam Junction (ERS)', category: 'Major Hub', distance: '28.0 km' }
    ],
    nearbyBusStand: [
      { name: 'KSRTC Bus Stand Angamaly', category: 'Regional Bus Stand', distance: '6.0 km' }
    ],
    popularRoutes: [
      { destination: 'Munnar', slug: 'cochin-airport-to-munnar', distance: '110 km', travelTime: '3.5 Hours', startingFare: 1950, type: 'Tourist' },
      { destination: 'Alleppey (Alappuzha)', slug: 'cochin-airport-to-alleppey', distance: '85 km', travelTime: '2.25 Hours', startingFare: 1950, type: 'Tourist' },
      { destination: 'Coimbatore (Tamil Nadu)', slug: 'cochin-airport-to-coimbatore', distance: '165 km', travelTime: '3.5 Hours', startingFare: 2475, type: 'City' }
    ],
    faq: [
      { q: 'Can I book a cab from Cochin Airport to Munnar or Coimbatore?', a: 'Yes! SAMAYAS provides 24/7 interstate cabs from Cochin Airport (COK) to Munnar, Alleppey, Coimbatore & all South Indian destinations.' }
    ],
    seo: {
      title: 'Cochin Airport Taxi Booking (COK) | Munnar & Intercity Cabs | SAMAYAS',
      description: 'Book 24/7 Cochin International Airport taxi service (COK). Reliable cabs to Munnar, Alleppey & Coimbatore with zero return charges.',
      keywords: ['cochin airport taxi', 'cok airport cab', 'cochin airport to munnar cab', 'cochin airport to coimbatore taxi']
    }
  },

  {
    id: 'trv',
    name: 'Thiruvananthapuram International Airport',
    slug: 'thiruvananthapuram-international-airport',
    shortName: 'Trivandrum Airport',
    iata: 'TRV',
    icao: 'VOTV',
    city: 'Thiruvananthapuram',
    state: 'Kerala',
    country: 'India',
    type: 'International',
    coordinates: { lat: 8.4821, lng: 76.9200 },
    description: 'Capital airport of Kerala, serving Kovalam beach, Varkala cliff, Kanyakumari (Tamil Nadu), Nagercoil & southern pilgrimage destinations.',
    featured: false,
    airportImage: '/airports/trivandrum.jpg',
    terminals: ['Terminal 1 (Domestic T1)', 'Terminal 2 (International T2)'],
    operatingHours: '24 Hours / 7 Days',
    airportFacilities: [
      { name: '24/7 International Arrival Pickup', type: 'Transport', description: 'Immediate doorstep cab pickup.' }
    ],
    nearbyHotels: [
      { name: 'Uday Samudra Leisure Beach Resort Kovalam', category: '5-Star Resort', distance: '12.0 km' },
      { name: 'Vivanta Thiruvananthapuram', category: '5-Star Hotel', distance: '6.0 km' }
    ],
    nearbyRestaurants: [
      { name: 'Villa Maya Heritage Restaurant', category: 'Fine Dining Kerala', distance: '3.0 km' }
    ],
    nearbyRailwayStations: [
      { name: 'Trivandrum Central (TVC)', category: 'Major Railway Hub', distance: '5.5 km' }
    ],
    nearbyBusStand: [
      { name: 'KSRTC Central Bus Station Thampanoor', category: 'Major Bus Terminal', distance: '5.5 km' }
    ],
    popularRoutes: [
      { destination: 'Kanyakumari (Tamil Nadu)', slug: 'trivandrum-airport-to-kanyakumari', distance: '90 km', travelTime: '2.25 Hours', startingFare: 1950, type: 'Tourist' },
      { destination: 'Kovalam Beach', slug: 'trivandrum-airport-to-kovalam', distance: '15 km', travelTime: '0.5 Hours', startingFare: 1950, type: 'Tourist' },
      { destination: 'Varkala Cliff', slug: 'trivandrum-airport-to-varkala', distance: '45 km', travelTime: '1.25 Hours', startingFare: 1950, type: 'Tourist' }
    ],
    faq: [
      { q: 'Is taxi service available from Trivandrum Airport to Kanyakumari in Tamil Nadu?', a: 'Yes! We provide smooth interstate taxi transfers from Trivandrum Airport (TRV) directly to Kanyakumari, Nagercoil & Tirunelveli.' }
    ],
    seo: {
      title: 'Trivandrum Airport Taxi Booking (TRV) | Kanyakumari & Kovalam | SAMAYAS',
      description: 'Book 24/7 Trivandrum International Airport taxi (TRV). Direct cabs to Kanyakumari, Kovalam & Varkala with live flight delay tracking.',
      keywords: ['trivandrum airport taxi', 'trv airport cab', 'trivandrum airport to kanyakumari cab']
    }
  },

  {
    id: 'ccj',
    name: 'Calicut International Airport',
    slug: 'calicut-international-airport',
    shortName: 'Calicut Airport (Kozhikode)',
    iata: 'CCJ',
    icao: 'VOCL',
    city: 'Kozhikode',
    state: 'Kerala',
    country: 'India',
    type: 'International',
    coordinates: { lat: 11.1368, lng: 75.9553 },
    description: 'Major Malabar airport serving Kozhikode, Wayanad hill station, Malappuram, Palakkad & Coimbatore region.',
    featured: false,
    airportImage: '/airports/calicut.jpg',
    terminals: ['Integrated Passenger Terminal'],
    operatingHours: '24 Hours / 7 Days',
    airportFacilities: [
      { name: '24/7 Pickup Service', type: 'Transport', description: 'Doorstep pickup concourse.' }
    ],
    nearbyHotels: [
      { name: 'The Gateway Hotel Beach Road Calicut', category: '5-Star Hotel', distance: '26.0 km' }
    ],
    nearbyRestaurants: [
      { name: 'Paragon Restaurant Kozhikode', category: 'Famous Malabar Biryani', distance: '25.0 km' }
    ],
    nearbyRailwayStations: [
      { name: 'Ferok Railway Station', category: 'Local Station', distance: '18.0 km' },
      { name: 'Kozhikode Main (CLT)', category: 'Major Station', distance: '26.0 km' }
    ],
    nearbyBusStand: [
      { name: 'KSRTC Kozhikode Bus Stand', category: 'Major Terminal', distance: '25.0 km' }
    ],
    popularRoutes: [
      { destination: 'Wayanad', slug: 'calicut-airport-to-wayanad', distance: '95 km', travelTime: '2.75 Hours', startingFare: 1950, type: 'Tourist' },
      { destination: 'Palakkad', slug: 'calicut-airport-to-palakkad', distance: '100 km', travelTime: '2.5 Hours', startingFare: 1950, type: 'City' }
    ],
    faq: [
      { q: 'Can I book a cab from Calicut Airport to Wayanad?', a: 'Yes, SAMAYAS offers 24/7 doorstep cab pickups from Calicut Airport (Karipur) directly to Wayanad resorts.' }
    ],
    seo: {
      title: 'Calicut Airport Taxi Booking (CCJ) | Wayanad & Malabar Cabs | SAMAYAS',
      description: 'Book 24/7 Calicut International Airport taxi service (CCJ). Comfortable cabs to Wayanad, Kozhikode & Palakkad.',
      keywords: ['calicut airport taxi', 'ccj airport cab', 'calicut airport to wayanad taxi']
    }
  },

  {
    id: 'cnn',
    name: 'Kannur International Airport',
    slug: 'kannur-international-airport',
    shortName: 'Kannur Airport',
    iata: 'CNN',
    icao: 'VOKN',
    city: 'Kannur',
    state: 'Kerala',
    country: 'India',
    type: 'International',
    coordinates: { lat: 11.9160, lng: 75.5480 },
    description: 'Modern North Malabar airport connecting international Gulf travelers to Kannur, Bekal Fort, Coorg & Mysore.',
    featured: false,
    airportImage: '/airports/kannur.jpg',
    terminals: ['Integrated Passenger Terminal'],
    operatingHours: '24 Hours / 7 Days',
    airportFacilities: [
      { name: 'Passenger Taxi Hub', type: 'Transport', description: '24/7 taxi dispatch bay.' }
    ],
    nearbyHotels: [
      { name: 'The Malabar Beach Resort', category: 'Beach Resort', distance: '25.0 km' }
    ],
    nearbyRestaurants: [
      { name: 'MRA Restaurant Kannur', category: 'Malabar Snacks & Biryani', distance: '20.0 km' }
    ],
    nearbyRailwayStations: [
      { name: 'Thalassery Railway Station (TLY)', category: 'Nearby Station', distance: '25.0 km' },
      { name: 'Kannur Main (CAN)', category: 'Major Station', distance: '26.0 km' }
    ],
    nearbyBusStand: [
      { name: 'Mattannur Bus Stand', category: 'Local Bus Hub', distance: '5.0 km' }
    ],
    popularRoutes: [
      { destination: 'Coorg (Karnataka)', slug: 'kannur-airport-to-coorg', distance: '90 km', travelTime: '2.5 Hours', startingFare: 1950, type: 'Tourist' },
      { destination: 'Bekal', slug: 'kannur-airport-to-bekal', distance: '85 km', travelTime: '2.25 Hours', startingFare: 1950, type: 'Tourist' }
    ],
    faq: [
      { q: 'Do SAMAYAS cabs operate from Kannur Airport to Coorg?', a: 'Yes, we provide 24/7 doorstep cabs from Kannur Airport (CNN) to Coorg hill resorts & Karnataka border towns.' }
    ],
    seo: {
      title: 'Kannur Airport Taxi Booking (CNN) | Coorg & Malabar Cabs | SAMAYAS',
      description: 'Book 24/7 Kannur International Airport taxi service (CNN). Reliable cabs to Coorg, Bekal & Thalassery.',
      keywords: ['kannur airport taxi', 'cnn airport cab', 'kannur airport to coorg taxi']
    }
  },

  // ── KARNATAKA AIRPORTS ──
  {
    id: 'blr',
    name: 'Kempegowda International Airport Bengaluru',
    slug: 'kempegowda-international-airport-bengaluru',
    shortName: 'Bengaluru Airport (BLR)',
    iata: 'BLR',
    icao: 'VOBL',
    city: 'Bengaluru',
    state: 'Karnataka',
    country: 'India',
    type: 'International',
    coordinates: { lat: 13.1986, lng: 77.7066 },
    description: 'South India’s largest corporate & tech aviation hub (Terminal 1 & Terminal 2 Garden Terminal). Providing seamless interstate long-distance cabs to Hosur, Chennai, Salem, Vellore, Mysore & Tirupati.',
    featured: true,
    airportImage: '/airports/bengaluru.jpg',
    terminals: ['Terminal 1 (Domestic)', 'Terminal 2 (Garden International T2)'],
    operatingHours: '24 Hours / 7 Days',
    airportFacilities: [
      { name: '0km Doorstep Concourse Pickup', type: 'Transport', description: 'SAMAYAS reserved arrival pickup zone at T1 & T2.' },
      { name: '080 Lounge T2', type: 'Lounge', description: 'Award-winning luxury airport lounge.' },
      { name: '24/7 Currency Exchange', type: 'Financial', description: 'Multiple international forex desks.' }
    ],
    nearbyHotels: [
      { name: 'Taj Bangalore (Airport Terminal)', category: '5-Star Luxury Terminal Hotel', distance: '0.2 km' },
      { name: 'JW Marriott Bengaluru Prestige Golfshire', category: '5-Star Resort', distance: '12.0 km' }
    ],
    nearbyRestaurants: [
      { name: 'Windmills Craftworks Airport', category: 'Fine Dining & Brewpub', distance: '0.5 km' },
      { name: 'Nandi Upachar Pure Veg', category: 'South Indian Breakfast', distance: '8.0 km' }
    ],
    nearbyRailwayStations: [
      { name: 'KSR Bengaluru City Railway Station (SBC)', category: 'Major Hub', distance: '35.0 km' },
      { name: 'Yelahanka Junction (YNK)', category: 'Nearby Station', distance: '18.0 km' }
    ],
    nearbyBusStand: [
      { name: 'Majestic Bus Stand (KBS)', category: 'Central Bus Terminal', distance: '35.0 km' }
    ],
    popularRoutes: [
      { destination: 'Hosur (Tamil Nadu)', slug: 'bengaluru-airport-to-hosur', distance: '75 km', travelTime: '1.75 Hours', startingFare: 1950, type: 'City' },
      { destination: 'Vellore (Tamil Nadu)', slug: 'bengaluru-airport-to-vellore', distance: '210 km', travelTime: '4.0 Hours', startingFare: 3150, type: 'City' },
      { destination: 'Chennai (Tamil Nadu)', slug: 'bengaluru-airport-to-chennai', distance: '350 km', travelTime: '6.0 Hours', startingFare: 5250, type: 'City' },
      { destination: 'Salem (Tamil Nadu)', slug: 'bengaluru-airport-to-salem', distance: '240 km', travelTime: '4.5 Hours', startingFare: 3600, type: 'City' },
      { destination: 'Tirupati (Andhra Pradesh)', slug: 'bengaluru-airport-to-tirupati', distance: '250 km', travelTime: '4.5 Hours', startingFare: 3750, type: 'Pilgrimage' },
      { destination: 'Mysore', slug: 'bengaluru-airport-to-mysore', distance: '185 km', travelTime: '3.5 Hours', startingFare: 2775, type: 'Tourist' }
    ],
    faq: [
      { q: 'Can I book a long-distance taxi from Bengaluru Airport (BLR) to Hosur or Chennai in Tamil Nadu?', a: 'Yes! We specialize in long-distance interstate cabs from Bengaluru Airport T1/T2 to Hosur, Salem, Vellore, Chennai & all South Indian cities with zero return fee.' }
    ],
    seo: {
      title: 'Bengaluru Airport Taxi Booking (BLR) | Tamil Nadu & Interstate Cabs | SAMAYAS',
      description: 'Book 24/7 Kempegowda Bengaluru Airport taxi (BLR). Long-distance interstate cabs to Hosur, Chennai, Salem, Vellore & Tirupati.',
      keywords: ['bengaluru airport taxi', 'blr airport cab', 'bengaluru airport to hosur cab', 'bengaluru airport to chennai taxi']
    }
  },

  {
    id: 'ixe',
    name: 'Mangaluru International Airport',
    slug: 'mangaluru-international-airport',
    shortName: 'Mangalore Airport',
    iata: 'IXE',
    icao: 'VOAT',
    city: 'Mangaluru',
    state: 'Karnataka',
    country: 'India',
    type: 'International',
    coordinates: { lat: 12.9613, lng: 74.8900 },
    description: 'Coastal Karnataka international gateway serving Mangaluru, Udupi, Manipal University, Murudeshwar & Kasaragod (Kerala).',
    featured: false,
    airportImage: '/airports/mangalore.jpg',
    terminals: ['Integrated Terminal'],
    operatingHours: '24 Hours / 7 Days',
    airportFacilities: [
      { name: 'Prepaid & SAMAYAS Pickup Bay', type: 'Transport', description: 'Dedicated door-to-door cab pickup.' }
    ],
    nearbyHotels: [
      { name: 'The Gateway Hotel Old Port Road Mangalore', category: '4-Star Hotel', distance: '14.0 km' }
    ],
    nearbyRestaurants: [
      { name: 'Giri Manjas Seafood', category: 'Famous Mangalorean Fish Curry', distance: '13.0 km' }
    ],
    nearbyRailwayStations: [
      { name: 'Mangaluru Central (MAQ)', category: 'Major Station', distance: '15.0 km' },
      { name: 'Mangaluru Junction (MAJN)', category: 'Major Station', distance: '12.0 km' }
    ],
    nearbyBusStand: [
      { name: 'KSRTC Bus Stand Mangaluru', category: 'Central Bus Terminal', distance: '12.0 km' }
    ],
    popularRoutes: [
      { destination: 'Udupi / Manipal', slug: 'mangalore-airport-to-udupi', distance: '60 km', travelTime: '1.25 Hours', startingFare: 1950, type: 'City' },
      { destination: 'Murudeshwar', slug: 'mangalore-airport-to-murudeshwar', distance: '160 km', travelTime: '3.25 Hours', startingFare: 2400, type: 'Pilgrimage' }
    ],
    faq: [
      { q: 'What is the cab fare from Mangalore Airport to Udupi or Manipal?', a: 'Distance is 60 km (~1.25 hours). Starting fare is ₹1,950 under our 130 km minimum tariff limit.' }
    ],
    seo: {
      title: 'Mangalore Airport Taxi Booking (IXE) | Udupi & Manipal Cabs | SAMAYAS',
      description: 'Book 24/7 Mangaluru International Airport taxi service (IXE). Reliable doorstep cabs to Udupi, Manipal & Kasaragod.',
      keywords: ['mangalore airport taxi', 'ixe airport cab', 'mangalore airport to udupi taxi']
    }
  },

  // ── ANDHRA PRADESH AIRPORTS ──
  {
    id: 'vtz',
    name: 'Visakhapatnam International Airport',
    slug: 'visakhapatnam-international-airport',
    shortName: 'Vizag Airport',
    iata: 'VTZ',
    icao: 'VOVZ',
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    country: 'India',
    type: 'International',
    coordinates: { lat: 17.7211, lng: 83.2245 },
    description: 'Andhra Pradesh’s largest coastal airport serving Vizag port city, Araku Valley, Ananthagiri hills & North Coastal Andhra.',
    featured: false,
    airportImage: '/airports/vizag.jpg',
    terminals: ['Integrated Passenger Terminal'],
    operatingHours: '24 Hours / 7 Days',
    airportFacilities: [
      { name: '24/7 Pickup Bay', type: 'Transport', description: 'Doorstep cab pickup concourse.' }
    ],
    nearbyHotels: [
      { name: 'Novotel Visakhapatnam Varun Beach', category: '5-Star Luxury Resort', distance: '12.0 km' }
    ],
    nearbyRestaurants: [
      { name: 'Kamat Restaurant Vizag', category: 'Andhra Thali & Meals', distance: '8.0 km' }
    ],
    nearbyRailwayStations: [
      { name: 'Visakhapatnam Junction (VSKP)', category: 'Major Railway Station', distance: '8.0 km' }
    ],
    nearbyBusStand: [
      { name: 'Dwaraka Bus Stand Vizag (RTC)', category: 'Major Bus Station', distance: '9.0 km' }
    ],
    popularRoutes: [
      { destination: 'Araku Valley', slug: 'vizag-airport-to-araku', distance: '115 km', travelTime: '3.25 Hours', startingFare: 1950, type: 'Tourist' },
      { destination: 'Vijayawada', slug: 'vizag-airport-to-vijayawada', distance: '350 km', travelTime: '6.5 Hours', startingFare: 5250, type: 'City' }
    ],
    faq: [
      { q: 'Is taxi service available from Vizag Airport to Araku Valley?', a: 'Yes, SAMAYAS provides 24/7 doorstep cabs from Visakhapatnam Airport (VTZ) to Araku Valley hill station.' }
    ],
    seo: {
      title: 'Vizag Airport Taxi Booking (VTZ) | Araku & Intercity Cabs | SAMAYAS',
      description: 'Book 24/7 Visakhapatnam International Airport taxi service (VTZ). Reliable cabs to Araku Valley & Vijayawada.',
      keywords: ['vizag airport taxi', 'vtz airport cab', 'vizag airport to araku taxi']
    }
  },

  {
    id: 'vga',
    name: 'Vijayawada International Airport',
    slug: 'vijayawada-international-airport',
    shortName: 'Vijayawada Airport',
    iata: 'VGA',
    icao: 'VOBZ',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    country: 'India',
    type: 'International',
    coordinates: { lat: 16.5304, lng: 80.7968 },
    description: 'Capital region airport serving Vijayawada, Amaravati, Guntur, Eluru & Andhra commercial centers.',
    featured: false,
    airportImage: '/airports/vijayawada.jpg',
    terminals: ['Integrated Terminal'],
    operatingHours: '24 Hours / 7 Days',
    airportFacilities: [
      { name: 'Doorstep Taxi Pick-up Bay', type: 'Transport', description: 'Immediate arrival gate cab pickup.' }
    ],
    nearbyHotels: [
      { name: 'Novotel Vijayawada Varun', category: '5-Star Hotel', distance: '18.0 km' }
    ],
    nearbyRestaurants: [
      { name: 'Babai Hotel Vijayawada', category: 'Famous Andhra Tiffin & Idli', distance: '16.0 km' }
    ],
    nearbyRailwayStations: [
      { name: 'Vijayawada Junction (BZA)', category: 'Major Railway Station', distance: '20.0 km' }
    ],
    nearbyBusStand: [
      { name: 'Pandit Nehru Bus Station (PNBS)', category: 'Major Bus Station', distance: '21.0 km' }
    ],
    popularRoutes: [
      { destination: 'Guntur', slug: 'vijayawada-airport-to-guntur', distance: '50 km', travelTime: '1.25 Hours', startingFare: 1950, type: 'City' },
      { destination: 'Hyderabad', slug: 'vijayawada-airport-to-hyderabad', distance: '275 km', travelTime: '5.0 Hours', startingFare: 4125, type: 'City' }
    ],
    faq: [
      { q: 'Can I book a cab from Vijayawada Airport to Guntur or Hyderabad?', a: 'Yes, we provide 24/7 doorstep intercity cabs from Vijayawada Airport (VGA) to Guntur, Hyderabad & all Andhra towns.' }
    ],
    seo: {
      title: 'Vijayawada Airport Taxi Booking (VGA) | Guntur & Intercity Cabs | SAMAYAS',
      description: 'Book 24/7 Vijayawada Airport taxi service (VGA). Reliable cabs to Guntur, Amaravati & Hyderabad.',
      keywords: ['vijayawada airport taxi', 'vga airport cab', 'vijayawada airport to guntur taxi']
    }
  },

  {
    id: 'tir',
    name: 'Tirupati Airport',
    slug: 'tirupati-airport',
    shortName: 'Tirupati Airport',
    iata: 'TIR',
    icao: 'VOTP',
    city: 'Tirupati',
    state: 'Andhra Pradesh',
    country: 'India',
    type: 'Domestic',
    coordinates: { lat: 13.6325, lng: 79.5436 },
    description: 'Primary pilgrimage gateway to Tirumala Lord Venkateswara Temple. Serving pilgrims heading to Tirupati, Chennai (Tamil Nadu), Vellore & Kanchipuram.',
    featured: true,
    airportImage: '/airports/tirupati.jpg',
    terminals: ['Garuda Terminal'],
    operatingHours: '24 Hours / 7 Days',
    airportFacilities: [
      { name: 'Pilgrimage Priority Taxi Service', type: 'Transport', description: 'Immediate doorstep cab dispatch for Darshan timings.' },
      { name: 'TTD Information Desk', type: 'Information', description: 'Tirumala Darshan guidance counter.' }
    ],
    nearbyHotels: [
      { name: 'Fortune Select Grand Ridge Tirupati', category: '5-Star Hotel', distance: '12.0 km' },
      { name: 'Marasa Sarovar Premiere', category: '5-Star Hotel', distance: '14.0 km' }
    ],
    nearbyRestaurants: [
      { name: 'Minerva Grand Pure Veg', category: 'South Indian Thali', distance: '13.0 km' }
    ],
    nearbyRailwayStations: [
      { name: 'Tirupati Main Railway Station (TPTY)', category: 'Major Railway Hub', distance: '15.0 km' },
      { name: 'Renigunta Junction (RU)', category: 'Major Junction', distance: '3.5 km' }
    ],
    nearbyBusStand: [
      { name: 'Tirupati Central Bus Stand (APSRTC)', category: 'Major Bus Station', distance: '14.0 km' }
    ],
    popularRoutes: [
      { destination: 'Tirumala Hill Temple', slug: 'tirupati-airport-to-tirumala', distance: '38 km', travelTime: '1.0 Hours', startingFare: 1950, type: 'Pilgrimage' },
      { destination: 'Chennai (Tamil Nadu)', slug: 'tirupati-airport-to-chennai', distance: '135 km', travelTime: '3.25 Hours', startingFare: 2025, type: 'City' },
      { destination: 'Vellore (Tamil Nadu)', slug: 'tirupati-airport-to-vellore', distance: '110 km', travelTime: '2.5 Hours', startingFare: 1950, type: 'City' },
      { destination: 'Kanchipuram (Tamil Nadu)', slug: 'tirupati-airport-to-kanchipuram', distance: '115 km', travelTime: '2.5 Hours', startingFare: 1950, type: 'Pilgrimage' }
    ],
    faq: [
      { q: 'Can I book a cab from Tirupati Airport to Chennai or Vellore in Tamil Nadu?', a: 'Yes! We specialize in interstate cabs from Tirupati Airport (Renigunta) directly to Chennai, Vellore, Kanchipuram & Tirumala hill.' }
    ],
    seo: {
      title: 'Tirupati Airport Taxi Booking (TIR) | Tirumala & Chennai Cabs | SAMAYAS',
      description: 'Book 24/7 Tirupati Airport taxi (TIR). Direct doorstep cabs to Tirumala Temple, Chennai, Vellore & Kanchipuram with zero return fee.',
      keywords: ['tirupati airport taxi', 'tir airport cab', 'tirupati airport to tirumala cab', 'tirupati airport to chennai taxi']
    }
  },

  // ── TELANGANA AIRPORT ──
  {
    id: 'hyd',
    name: 'Rajiv Gandhi International Airport Hyderabad',
    slug: 'rajiv-gandhi-international-airport-hyderabad',
    shortName: 'Hyderabad Airport (HYD)',
    iata: 'HYD',
    icao: 'VOHS',
    city: 'Hyderabad',
    state: 'Telangana',
    country: 'India',
    type: 'International',
    coordinates: { lat: 17.2403, lng: 78.4294 },
    description: 'Premier mega aviation hub in Shamshabad. Serving Telangana, Andhra Pradesh & interstate long-distance corporate & family travelers.',
    featured: true,
    airportImage: '/airports/hyderabad.jpg',
    terminals: ['Integrated Passenger Terminal'],
    operatingHours: '24 Hours / 7 Days',
    airportFacilities: [
      { name: '24/7 SAMAYAS Doorstep Concourse', type: 'Transport', description: 'Reserved cab pickup area.' },
      { name: 'Plaza Premium Lounge', type: 'Lounge', description: 'Luxury international lounge.' }
    ],
    nearbyHotels: [
      { name: 'Novotel Hyderabad Airport (Shamshabad)', category: '5-Star Terminal Hotel', distance: '1.0 km' }
    ],
    nearbyRestaurants: [
      { name: 'Paradise Biryani Airport', category: 'Famous Hyderabadi Biryani', distance: '0.5 km' },
      { name: 'Chutneys Pure Veg', category: 'South Indian Breakfast', distance: '0.8 km' }
    ],
    nearbyRailwayStations: [
      { name: 'Secunderabad Junction (SC)', category: 'Major Railway Station', distance: '38.0 km' },
      { name: 'Kacheguda Railway Station (KCG)', category: 'Major Station', distance: '30.0 km' }
    ],
    nearbyBusStand: [
      { name: 'Mahatma Gandhi Bus Station (MGBS)', category: 'Central Bus Terminal', distance: '30.0 km' }
    ],
    popularRoutes: [
      { destination: 'Vijayawada (Andhra Pradesh)', slug: 'hyderabad-airport-to-vijayawada', distance: '275 km', travelTime: '5.0 Hours', startingFare: 4125, type: 'City' },
      { destination: 'Warangal', slug: 'hyderabad-airport-to-warangal', distance: '175 km', travelTime: '3.5 Hours', startingFare: 2625, type: 'City' },
      { destination: 'Kurnool', slug: 'hyderabad-airport-to-kurnool', distance: '190 km', travelTime: '3.5 Hours', startingFare: 2850, type: 'City' }
    ],
    faq: [
      { q: 'Can I book a long-distance cab from Hyderabad Airport (HYD) to Vijayawada?', a: 'Yes! We provide 24/7 long-distance intercity cabs from Hyderabad Airport to Vijayawada, Warangal, Kurnool & all South Indian destinations.' }
    ],
    seo: {
      title: 'Hyderabad Airport Taxi Booking (HYD) | Intercity & NRI Cabs | SAMAYAS',
      description: 'Book 24/7 Rajiv Gandhi International Airport taxi (HYD). Long-distance intercity cabs to Vijayawada, Warangal & Kurnool with zero return fee.',
      keywords: ['hyderabad airport taxi', 'hyd airport cab', 'hyderabad airport to vijayawada cab']
    }
  }
];

export function getAirportBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return airportsMasterDataset.find((a) => a.slug.toLowerCase() === normalized) || null;
}

export function getAirportByIata(iata) {
  if (!iata) return null;
  const normalized = iata.toUpperCase().trim();
  return airportsMasterDataset.find((a) => a.iata.toUpperCase() === normalized) || null;
}

export function getAirportsByState(state) {
  if (!state || state === 'All') return airportsMasterDataset;
  const normalized = state.toLowerCase().trim();
  return airportsMasterDataset.filter((a) => a.state.toLowerCase() === normalized);
}

export function getAirportsByType(type) {
  if (!type || type === 'All') return airportsMasterDataset;
  return airportsMasterDataset.filter((a) => a.type === type);
}
