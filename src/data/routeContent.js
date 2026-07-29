export const routeContent = {
  'trichy-to-chennai': {
    from: 'Trichy',
    to: 'Chennai',
    distanceKm: 330,
    timeHours: 5.5,
    distanceDisplay: '330 km',
    durationDisplay: '5.5 Hours',
    heroTagline: 'Affordable One-Way Taxi from Trichy to Chennai. Doorstep pickup, transparent pricing, and 24/7 service.',
    seoTitle: 'Trichy to Chennai One-Way Taxi | ₹10/km Cab Booking | SAMAYAS',
    metaDescription: 'Book Trichy to Chennai one-way taxi with SAMAYAS. Hatchback from ₹3,300, Sedan ₹3,960, SUV ₹5,280. Doorstep pickup across Trichy to Chennai Airport & city drops. 24/7 service.',
    
    fare: {
      hatchback: 3300,
      sedan: 3960,
      suv: 5280,
      innova: 6270,
      traveller: 9900,
    },
    
    highways: ['NH38 (Trichy-Ulundurpet)', 'NH45 (GST Road)', 'NH32'],
    
    tolls: {
      costRange: '₹420 - ₹520',
      plazasCount: 4,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges extra where applicable.',
    },
    
    pickupLocations: [
      'Rockfort / Teppakulam',
      'Srirangam Temple Gate',
      'Trichy International Airport (TRZ)',
      'Trichy Railway Junction (TPJ)',
      'KK Nagar & TVS Tolgate',
      'Thillai Nagar & Main Guard Gate',
      'Cantonment & Central Bus Stand',
      'Woraiyur & Vayalur Road',
    ],
    
    dropLocations: [
      'T. Nagar & Central Business District',
      'OMR IT Corridor (Navalur, Sholinganallur)',
      'Guindy & Kathipara Junction',
      'Velachery & Perungudi',
      'Anna Nagar & Koyambedu CMBT',
      'Porur & Ramachandra Hospital',
      'Tambaram & Perungalathur',
      'Chennai International Airport (MAA)',
    ],
    
    placesOnTheWay: [
      { name: 'Trichy', type: 'Origin', desc: 'Doorstep pickup across all residential & commercial zones.' },
      { name: 'Perambalur', type: 'Rest Stop', desc: 'Major highway rest stop with clean restrooms and multi-cuisine restaurants.' },
      { name: 'Ulundurpet', type: 'Junction Stop', desc: 'NH-45 & NH-79 interchange; popular for authentic South Indian breakfast.' },
      { name: 'Viluppuram', type: 'Fuel & Refreshment', desc: 'Highway fuel stations, tea stalls, and brief relaxation stops.' },
      { name: 'Tindivanam', type: 'Food Stop', desc: 'Highway food plaza featuring popular dining chains and fresh coffee.' },
      { name: 'Chengalpattu', type: 'Outer Gateway', desc: 'Gateway to Chennai suburban zone and Mahindra World City.' },
      { name: 'Chennai', type: 'Destination', desc: 'Final destination — direct drop to any home, office, hotel, or airport.' },
    ],
    
    faqs: [
      {
        q: 'How much is the one-way taxi fare from Trichy to Chennai?',
        a: 'The one-way taxi fare from Trichy to Chennai starts at ₹3,300 for a Hatchback, ₹3,960 for a Sedan, ₹5,280 for an SUV, and ₹6,270 for Innova Crysta. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Trichy to Chennai?',
        a: 'The road distance is approx 330 km via NH-45. Travel time is typically 5 to 5.5 hours under normal traffic conditions.',
      },
    ],
    
    reviews: [
      {
        name: 'Karthik Raja',
        rating: 5,
        text: 'Booked a one-way Sedan from Srirangam, Trichy to Chennai Airport for an early flight. Driver arrived early, car was spotless, and reached MAA Airport in 5 hours.',
        route: 'Trichy to Chennai Airport',
      },
      {
        name: 'Senthil Kumar V.',
        rating: 5,
        text: 'Regularly travel from Trichy Cantonment to OMR Chennai for corporate work. SAMAYAS offers transparent per-km billing without asking for return fares.',
        route: 'Trichy to Chennai OMR',
      },
    ],
    
    nearbyRoutes: [
      { name: 'Trichy to Madurai', slug: 'trichy-to-madurai', distance: '135 km', fare: '₹1,500' },
      { name: 'Trichy to Bengaluru', slug: 'trichy-to-bengaluru', distance: '345 km', fare: '₹4,200' },
      { name: 'Chennai to Trichy', slug: 'chennai-to-trichy', distance: '330 km', fare: '₹3,300' },
    ],
  },

  'chennai-to-trichy': {
    from: 'Chennai',
    to: 'Trichy',
    distanceKm: 330,
    timeHours: 5.5,
    distanceDisplay: '330 km',
    durationDisplay: '5.5 Hours',
    heroTagline: 'Affordable One-Way Taxi from Chennai to Trichy. Pickups from Chennai Airport, Central, and any doorstep.',
    seoTitle: 'Chennai to Trichy One-Way Taxi | ₹10/km Cab Booking | SAMAYAS',
    metaDescription: 'Book Chennai to Trichy one-way taxi with SAMAYAS. Hatchback ₹3,300, Sedan ₹3,960, SUV ₹5,280. Pickups from Chennai Airport, Central & OMR to Srirangam & Trichy. 24/7 service.',
    
    fare: {
      hatchback: 3300,
      sedan: 3960,
      suv: 5280,
      innova: 6270,
      traveller: 9900,
    },
    
    highways: ['NH45 (GST Road)', 'NH38 (Ulundurpet-Trichy)'],
    
    tolls: {
      costRange: '₹420 - ₹520',
      plazasCount: 4,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges extra where applicable.',
    },
    
    pickupLocations: [
      'Chennai International Airport (MAA)',
      'Chennai Central Railway Station (MAS)',
      'T. Nagar & Vadapalani',
      'OMR (Sholinganallur, Navalur)',
      'Velachery & Guindy',
      'Tambaram & Perungalathur',
    ],
    
    dropLocations: [
      'Srirangam Temple & Car Street',
      'Trichy Railway Junction (TPJ)',
      'Trichy International Airport (TRZ)',
      'Thillai Nagar & Main Guard Gate',
      'Cantonment & Central Bus Stand',
    ],
    
    placesOnTheWay: [
      { name: 'Chennai', type: 'Origin', desc: 'Doorstep pickup across Chennai city, suburbs & MAA airport.' },
      { name: 'Chengalpattu', type: 'Outer Ring', desc: 'Exit from Chennai Metropolitan area onto NH-45 GST Expressway.' },
      { name: 'Tindivanam', type: 'Refreshment', desc: 'Highway food plazas and tea breaks.' },
      { name: 'Ulundurpet', type: 'Junction Stop', desc: 'Midway food plaza stop along NH-45.' },
      { name: 'Trichy', type: 'Destination', desc: 'Doorstep drop to Srirangam, TRZ Airport, Junction or home.' },
    ],
    
    faqs: [
      {
        q: 'What is the one-way fare from Chennai Airport (MAA) to Trichy?',
        a: 'The one-way taxi fare from Chennai Airport to Trichy starts at ₹3,300 for a Hatchback, ₹3,960 for a Sedan, and ₹5,280 for an SUV.',
      },
    ],
    
    reviews: [
      {
        name: 'Venkatesh S.',
        rating: 5,
        text: 'Landed late at Chennai Airport and needed an urgent cab to Srirangam. Driver arrived in 10 minutes.',
        route: 'Chennai Airport to Srirangam',
      },
    ],
    
    nearbyRoutes: [
      { name: 'Trichy to Chennai', slug: 'trichy-to-chennai', distance: '330 km', fare: '₹3,300' },
      { name: 'Chennai to Pondicherry', slug: 'chennai-to-pondicherry', distance: '160 km', fare: '₹2,100' },
    ],
  },

  'coimbatore-to-ooty': {
    from: 'Coimbatore',
    to: 'Ooty',
    distanceKm: 85,
    timeHours: 2.75,
    distanceDisplay: '85 km',
    durationDisplay: '2.75 Hours',
    heroTagline: 'Scenic One-Way Mountain Cab from Coimbatore to Ooty. Expert hill drivers for Mettupalayam hairpin bends.',
    seoTitle: 'Coimbatore to Ooty One-Way Taxi | Mountain Cab Booking | SAMAYAS',
    metaDescription: 'Book Coimbatore to Ooty one-way hill taxi with SAMAYAS. Hatchback ₹2,200, Sedan ₹2,600, SUV ₹3,600. Pickups from Coimbatore Airport (CJB) & Junction. Hill experts.',
    
    fare: {
      hatchback: 2200,
      sedan: 2600,
      suv: 3600,
      innova: 4500,
      traveller: 6800,
    },
    
    highways: ['NH181 (Coimbatore-Mettupalayam-Ooty Road)', '36 Hairpin Bends Route'],
    
    tolls: {
      costRange: '₹60 - ₹100',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Hill entry toll and parking fees extra at actuals.',
    },
    
    pickupLocations: [
      'Coimbatore International Airport (CJB)',
      'Coimbatore Junction Railway Station (CBE)',
      'Gandhipuram Central Bus Stand',
      'RS Puram & Race Course',
      'Peelamedu & Hopes College',
    ],
    
    dropLocations: [
      'Ooty Town & Charing Cross',
      'Ooty Lake & Boathouse Gate',
      'Botanical Gardens & Rose Garden',
      'Doddabetta Peak Viewpoint',
      'Coonoor Town & Sim\'s Park',
    ],
    
    placesOnTheWay: [
      { name: 'Coimbatore', type: 'Origin', desc: 'Doorstep pickup from CJB Airport or CBE Junction.' },
      { name: 'Mettupalayam', type: 'Foothills', desc: 'Base of Nilgiris; optional breakfast stop.' },
      { name: 'Coonoor', type: 'Tea Gardens', desc: 'Beautiful tea plantation town.' },
      { name: 'Ooty', type: 'Destination', desc: 'Queen of Hill Stations.' },
    ],
    
    faqs: [
      {
        q: 'What is the taxi fare from Coimbatore Airport (CJB) to Ooty?',
        a: 'The one-way taxi fare from Coimbatore Airport to Ooty starts at ₹2,200 for a Hatchback, ₹2,600 for a Sedan, and ₹3,600 for an SUV.',
      },
    ],
    
    reviews: [
      {
        name: 'Deepak & Ananya',
        rating: 5,
        text: 'Landed at Coimbatore Airport and booked a SAMAYAS cab to Ooty resort. Driver handled the 36 hairpin bends masterfully.',
        route: 'Coimbatore Airport to Ooty',
      },
    ],
    
    nearbyRoutes: [
      { name: 'Coimbatore to Bengaluru', slug: 'coimbatore-to-bengaluru', distance: '365 km', fare: '₹4,500' },
    ],
  },

  'madurai-to-rameswaram': {
    from: 'Madurai',
    to: 'Rameshwaram',
    distanceKm: 175,
    timeHours: 3.5,
    distanceDisplay: '175 km',
    durationDisplay: '3.5 Hours',
    heroTagline: 'Sacred One-Way Pilgrimage Taxi from Madurai to Rameshwaram. Direct drops to Ramanathaswamy Temple & Dhanushkodi.',
    seoTitle: 'Madurai to Rameshwaram One-Way Taxi | Temple Cab | SAMAYAS',
    metaDescription: 'Book Madurai to Rameshwaram one-way taxi with SAMAYAS. Hatchback ₹2,400, Sedan ₹2,800, SUV ₹3,900. Pickups from Madurai Airport (IXM) & Meenakshi Temple. 24/7 service.',
    
    fare: {
      hatchback: 2400,
      sedan: 2800,
      suv: 3900,
      innova: 4800,
      traveller: 7200,
    },
    
    highways: ['NH87 (Madurai-Rameshwaram Highway)', 'Pamban Sea Bridge Route'],
    
    tolls: {
      costRange: '₹120 - ₹180',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Pamban bridge entry extra at actuals.',
    },
    
    pickupLocations: [
      'Madurai International Airport (IXM)',
      'Madurai Junction Railway Station (MDU)',
      'Meenakshi Amman Temple Gate',
      'Mattuthavani Bus Stand',
    ],
    
    dropLocations: [
      'Arulmigu Ramanathaswamy Temple',
      'Agni Theertham Beach',
      'Pamban Sea Bridge',
      'Dhanushkodi Beach',
    ],
    
    placesOnTheWay: [
      { name: 'Madurai', type: 'Origin', desc: 'Pickup from Airport or Temple.' },
      { name: 'Paramakudi', type: 'Rest Stop', desc: 'Popular food stop.' },
      { name: 'Ramanathapuram', type: 'District HQ', desc: 'Sethupathi Palace city.' },
      { name: 'Pamban Bridge', type: 'Iconic Bridge', desc: 'Ocean sea bridge crossing.' },
      { name: 'Rameshwaram', type: 'Destination', desc: 'Sacred island temple town.' },
    ],
    
    faqs: [
      {
        q: 'What is the taxi fare from Madurai Airport to Rameshwaram?',
        a: 'The one-way taxi fare from Madurai Airport to Rameshwaram starts at ₹2,400 for a Hatchback, ₹2,800 for a Sedan, and ₹3,900 for an SUV.',
      },
    ],
    
    reviews: [
      {
        name: 'Ramesh Shastri',
        rating: 5,
        text: 'Booked a one-way cab from Madurai to Rameshwaram. Smooth drive over Pamban bridge and courteous driver.',
        route: 'Madurai to Rameshwaram',
      },
    ],
    
    nearbyRoutes: [
      { name: 'Trichy to Madurai', slug: 'trichy-to-madurai', distance: '135 km', fare: '₹1,500' },
    ],
  },

  'chennai-airport-to-pondicherry': {
    from: 'Chennai Airport',
    to: 'Puducherry',
    distanceKm: 140,
    timeHours: 2.75,
    distanceDisplay: '140 km',
    durationDisplay: '2.75 Hours',
    heroTagline: 'Express One-Way Airport Taxi from Chennai Airport (MAA) to Pondicherry. 24/7 flight tracking and instant pickup.',
    seoTitle: 'Chennai Airport to Pondicherry Taxi | ₹10/km Cab | SAMAYAS',
    metaDescription: 'Book Chennai Airport to Pondicherry one-way taxi with SAMAYAS. Hatchback ₹1,900, Sedan ₹2,300, SUV ₹3,300. Direct airport terminal pickups to Auroville & French Quarter.',
    
    fare: {
      hatchback: 1900,
      sedan: 2300,
      suv: 3300,
      innova: 4200,
      traveller: 6300,
    },
    
    highways: ['ECR (East Coast Road)', 'NH32 (Chennai-Tindivanam-Pondicherry)'],
    
    tolls: {
      costRange: '₹140 - ₹180',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'ECR toll plaza charges extra where applicable.',
    },
    
    pickupLocations: [
      'Chennai Airport Terminal 1 (Domestic)',
      'Chennai Airport Terminal 2 (International)',
      'GST Road Airport Gate',
      'Meenambakkam Metro Station',
    ],
    
    dropLocations: [
      'White Town (French Quarter)',
      'Auroville Visitor Centre & Matrimandir',
      'Promenade Beach Front',
      'Pondicherry Bus Stand',
      'Heritage Town & Boulevard',
    ],
    
    placesOnTheWay: [
      { name: 'Chennai Airport', type: 'Origin', desc: 'Doorstep terminal arrival pickup.' },
      { name: 'Mahabalipuram', type: 'Coastal Heritage', desc: 'ECR coastal scenic drive.' },
      { name: 'Marakkanam', type: 'Salt Pans', desc: 'Coastal backwaters & salt pans.' },
      { name: 'Puducherry', type: 'Destination', desc: 'Direct drop to Auroville, White Town or beach resort.' },
    ],
    
    faqs: [
      {
        q: 'What is the taxi fare from Chennai Airport to Pondicherry?',
        a: 'The one-way taxi fare from Chennai Airport (MAA) to Pondicherry starts at ₹1,900 for a Hatchback, ₹2,300 for a Sedan, and ₹3,300 for an SUV.',
      },
    ],
    
    reviews: [
      {
        name: 'Camille L.',
        rating: 5,
        text: 'Landed at Chennai International Airport and took SAMAYAS cab directly to Auroville. Flight was delayed by 1 hour but driver waited without extra charges.',
        route: 'Chennai Airport to Auroville',
      },
    ],
    
    nearbyRoutes: [
      { name: 'Chennai to Pondicherry', slug: 'chennai-to-pondicherry', distance: '160 km', fare: '₹2,100' },
    ],
  },

  'trichy-to-madurai': {
    from: 'Trichy',
    to: 'Madurai',
    distanceKm: 135,
    timeHours: 2.25,
    distanceDisplay: '135 km',
    durationDisplay: '2.25 Hours',
    heroTagline: 'Express One-Way Taxi from Trichy to Madurai. 24/7 pickups from TRZ Airport and Trichy Junction.',
    seoTitle: 'Trichy to Madurai One-Way Taxi | Cab Booking | SAMAYAS',
    metaDescription: 'Book Trichy to Madurai one-way taxi with SAMAYAS. Hatchback ₹1,500, Sedan ₹1,800, SUV ₹2,600. Direct drops to Madurai Airport (IXM) & Meenakshi Temple.',
    
    fare: {
      hatchback: 1500,
      sedan: 1800,
      suv: 2600,
      innova: 3400,
      traveller: 5200,
    },
    
    highways: ['NH38 (Trichy-Madurai Four-Lane Expressway)'],
    
    tolls: {
      costRange: '₹140 - ₹180',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll charges extra where applicable.',
    },
    
    pickupLocations: [
      'Trichy International Airport (TRZ)',
      'Trichy Railway Junction (TPJ)',
      'Srirangam Temple Gate',
      'Thillai Nagar & Cantonment',
    ],
    
    dropLocations: [
      'Madurai International Airport (IXM)',
      'Meenakshi Amman Temple Gate',
      'Madurai Junction Railway Station (MDU)',
      'Mattuthavani Central Bus Stand',
    ],
    
    placesOnTheWay: [
      { name: 'Trichy', type: 'Origin', desc: 'Doorstep pickup across Trichy.' },
      { name: 'Viralimalai', type: 'Peacock Sanctuary', desc: 'Famous Murugan temple hill.' },
      { name: 'Melur', type: 'Suburbs', desc: 'Approach town to Madurai city.' },
      { name: 'Madurai', type: 'Destination', desc: 'Direct drop to IXM Airport, Meenakshi Temple or hotel.' },
    ],
    
    faqs: [
      {
        q: 'What is the one-way fare from Trichy to Madurai?',
        a: 'The one-way taxi fare from Trichy to Madurai starts at ₹1,500 for a Hatchback, ₹1,800 for a Sedan, and ₹2,600 for an SUV.',
      },
    ],
    
    reviews: [
      {
        name: 'Saravanan M.',
        rating: 5,
        text: 'Quick 2-hour cab ride from Trichy Junction to Madurai Airport. Clean car and smooth driving.',
        route: 'Trichy to Madurai Airport',
      },
    ],
    
    nearbyRoutes: [
      { name: 'Trichy to Chennai', slug: 'trichy-to-chennai', distance: '330 km', fare: '₹3,300' },
    ],
  },

  'salem-to-bengaluru': {
    from: 'Salem',
    to: 'Bengaluru',
    distanceKm: 205,
    timeHours: 3.75,
    distanceDisplay: '205 km',
    durationDisplay: '3.75 Hours',
    heroTagline: 'Express One-Way Intercity Taxi from Salem to Bengaluru. Direct expressway drops to Hosur, Silk Board & BLR Airport.',
    seoTitle: 'Salem to Bengaluru One-Way Taxi | Cab Booking | SAMAYAS',
    metaDescription: 'Book Salem to Bengaluru one-way taxi with SAMAYAS. Hatchback ₹2,600, Sedan ₹3,100, SUV ₹4,200. Direct drops to Silk Board, Electronic City, Indiranagar & BLR Airport.',
    
    fare: {
      hatchback: 2600,
      sedan: 3100,
      suv: 4200,
      innova: 5400,
      traveller: 8100,
    },
    
    highways: ['NH44 (Salem-Dharmapuri-Hosur-Bengaluru Expressway)'],
    
    tolls: {
      costRange: '₹280 - ₹340',
      plazasCount: 3,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Interstate permit and toll charges extra at actuals.',
    },
    
    pickupLocations: [
      'Salem Railway Junction (SA)',
      'New Bus Stand & Five Roads',
      'Yercaud Foothills Gate',
      'Steel Plant & Suramangalam',
    ],
    
    dropLocations: [
      'Silk Board & Electronic City',
      'Koramangala & Indiranagar',
      'Bengaluru City Railway Station (SBC)',
      'Kempegowda International Airport (BLR)',
    ],
    
    placesOnTheWay: [
      { name: 'Salem', type: 'Origin', desc: 'Doorstep pickup across Salem city.' },
      { name: 'Dharmapuri', type: 'Rest Stop', desc: 'Highway food plaza stop.' },
      { name: 'Krishnagiri', type: 'Mango City', desc: 'NH-44 junction stop.' },
      { name: 'Hosur', type: 'Border SEZ', desc: 'Tamil Nadu - Karnataka border town.' },
      { name: 'Bengaluru', type: 'Destination', desc: 'Direct drop to Electronic City, Silk Board, or BLR Airport.' },
    ],
    
    faqs: [
      {
        q: 'What is the fare from Salem to Bengaluru?',
        a: 'The one-way taxi fare from Salem to Bengaluru starts at ₹2,600 for a Hatchback, ₹3,100 for a Sedan, and ₹4,200 for an SUV.',
      },
    ],
    
    reviews: [
      {
        name: 'Pradeep N.',
        rating: 5,
        text: 'Comfortable ride from Salem Five Roads to Electronic City Bengaluru. Professional driver with good highway experience.',
        route: 'Salem to Bengaluru',
      },
    ],
    
    nearbyRoutes: [
      { name: 'Coimbatore to Bengaluru', slug: 'coimbatore-to-bengaluru', distance: '365 km', fare: '₹4,500' },
    ],
  },

  'chennai-to-pondicherry': {
    from: 'Chennai',
    to: 'Puducherry',
    distanceKm: 160,
    timeHours: 3.25,
    distanceDisplay: '160 km',
    durationDisplay: '3.25 Hours',
    heroTagline: 'Scenic One-Way Coastal Taxi from Chennai to Pondicherry. Travel via East Coast Road (ECR) with zero return fare.',
    seoTitle: 'Chennai to Pondicherry One-Way Taxi | ECR Cab | SAMAYAS',
    metaDescription: 'Book Chennai to Pondicherry one-way taxi with SAMAYAS via ECR. Hatchback ₹2,100, Sedan ₹2,500, SUV ₹3,600. Pickups from Chennai Central, T. Nagar & OMR. 24/7 service.',
    
    fare: {
      hatchback: 2100,
      sedan: 2500,
      suv: 3600,
      innova: 4500,
      traveller: 6800,
    },
    
    highways: ['ECR (East Coast Road)', 'NH32'],
    
    tolls: {
      costRange: '₹140 - ₹180',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'ECR toll plaza charges extra at actuals.',
    },
    
    pickupLocations: [
      'Chennai Central Railway Station (MAS)',
      'T. Nagar & Adyar',
      'OMR (Sholinganallur, Thoraipakkam)',
      'Velachery & ECR Kovalam',
    ],
    
    dropLocations: [
      'White Town (French Quarter)',
      'Auroville Visitor Centre',
      'Promenade Beach',
      'Pondicherry Central Bus Stand',
    ],
    
    placesOnTheWay: [
      { name: 'Chennai', type: 'Origin', desc: 'Pickup from home, hotel or station.' },
      { name: 'Mahabalipuram', type: 'UNESCO Heritage', desc: 'Shore Temple & Pancha Rathas view stop.' },
      { name: 'Marakkanam', type: 'Backwaters', desc: 'Salt pans & coastal views.' },
      { name: 'Puducherry', type: 'Destination', desc: 'Direct drop to French Quarter or Auroville.' },
    ],
    
    faqs: [
      {
        q: 'What is the fare from Chennai to Pondicherry via ECR?',
        a: 'The one-way taxi fare from Chennai to Pondicherry via ECR starts at ₹2,100 for a Hatchback, ₹2,500 for a Sedan, and ₹3,600 for an SUV.',
      },
    ],
    
    reviews: [
      {
        name: 'Arjun & Neha',
        rating: 5,
        text: 'Awesome coastal drive along ECR from Chennai T. Nagar to Pondicherry White Town. Driver stopped briefly at Mahabalipuram for coffee.',
        route: 'Chennai to Pondicherry',
      },
    ],
    
    nearbyRoutes: [
      { name: 'Chennai Airport to Pondicherry', slug: 'chennai-airport-to-pondicherry', distance: '140 km', fare: '₹1,900' },
    ],
  },

  'tirunelveli-to-kanyakumari': {
    from: 'Tirunelveli',
    to: 'Kanyakumari',
    distanceKm: 85,
    timeHours: 1.75,
    distanceDisplay: '85 km',
    durationDisplay: '1.75 Hours',
    heroTagline: 'Express One-Way Taxi from Halwa City Tirunelveli to Kanyakumari. 24/7 doorstep pickup.',
    seoTitle: 'Tirunelveli to Kanyakumari One-Way Taxi | Cab Booking | SAMAYAS',
    metaDescription: 'Book Tirunelveli to Kanyakumari one-way taxi with SAMAYAS. Hatchback ₹1,400, Sedan ₹1,700, SUV ₹2,500. Direct drops to Vivekananda Rock & Sunset Point.',
    
    fare: {
      hatchback: 1400,
      sedan: 1700,
      suv: 2500,
      innova: 3200,
      traveller: 4800,
    },
    
    highways: ['NH44 (Tirunelveli-Kanyakumari Four-Lane Expressway)'],
    
    tolls: {
      costRange: '₹80 - ₹110',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll charges extra where applicable.',
    },
    
    pickupLocations: [
      'Tirunelveli Junction Railway Station (TEN)',
      'Palayamkottai & High Ground',
      'Nellaiappar Temple Gate',
      'New Bus Stand (Vennarpettai)',
    ],
    
    dropLocations: [
      'Vivekananda Rock Ferry Counter',
      'Sunset Point & Beach Road',
      'Kanyakumari Railway Station (CAPE)',
      'Bhagavathy Amman Temple Gate',
    ],
    
    placesOnTheWay: [
      { name: 'Tirunelveli', type: 'Origin', desc: 'Doorstep pickup across Tirunelveli & Palayamkottai.' },
      { name: 'Nanguneri', type: 'Rest Stop', desc: 'Historic temple town.' },
      { name: 'Vallioor', type: 'Windmill Zone', desc: 'Famous Aralvaimozhi windmill pass.' },
      { name: 'Kanyakumari', type: 'Destination', desc: 'Southernmost tip of India.' },
    ],
    
    faqs: [
      {
        q: 'What is the fare from Tirunelveli to Kanyakumari?',
        a: 'The one-way taxi fare from Tirunelveli to Kanyakumari starts at ₹1,400 for a Hatchback, ₹1,700 for a Sedan, and ₹2,500 for an SUV.',
      },
    ],
    
    reviews: [
      {
        name: 'Muruganandam P.',
        rating: 5,
        text: 'Fast 1.5 hour ride from Tirunelveli Junction to Kanyakumari sunset point. Very clean car.',
        route: 'Tirunelveli to Kanyakumari',
      },
    ],
    
    nearbyRoutes: [
      { name: 'Madurai to Rameshwaram', slug: 'madurai-to-rameswaram', distance: '175 km', fare: '₹2,400' },
    ],
  },

  'vellore-to-chennai': {
    from: 'Vellore',
    to: 'Chennai',
    distanceKm: 140,
    timeHours: 2.75,
    distanceDisplay: '140 km',
    durationDisplay: '2.75 Hours',
    heroTagline: 'Medical & Outstation One-Way Taxi from Vellore to Chennai. Direct drops from CMC Hospital to MAA Airport.',
    seoTitle: 'Vellore to Chennai One-Way Taxi | CMC Hospital Cab | SAMAYAS',
    metaDescription: 'Book Vellore to Chennai one-way taxi with SAMAYAS. Hatchback ₹1,900, Sedan ₹2,200, SUV ₹3,200. Direct pickups from CMC Hospital & Katpadi to Chennai Airport & Central.',
    
    fare: {
      hatchback: 1900,
      sedan: 2200,
      suv: 3200,
      innova: 4100,
      traveller: 6200,
    },
    
    highways: ['NH48 (Chennai-Bengaluru Expressway)'],
    
    tolls: {
      costRange: '₹140 - ₹180',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll charges extra where applicable.',
    },
    
    pickupLocations: [
      'CMC Hospital Main Gate & Campus',
      'Katpadi Junction Railway Station (KPD)',
      'Sripuram Golden Temple Gate',
      'Vellore Fort & Bagayam',
    ],
    
    dropLocations: [
      'Chennai International Airport (MAA)',
      'Chennai Central Railway Station (MAS)',
      'T. Nagar & Vadapalani',
      'OMR IT Corridor',
    ],
    
    placesOnTheWay: [
      { name: 'Vellore', type: 'Origin', desc: 'Doorstep pickup from CMC Hospital or Katpadi.' },
      { name: 'Ranipet', type: 'Industrial Zone', desc: 'Leather manufacturing cluster.' },
      { name: 'Kanchipuram Bypass', type: 'Silk Gateway', desc: 'Sriperumbudur industrial hub approach.' },
      { name: 'Chennai', type: 'Destination', desc: 'Direct drop to MAA Airport, Central or home.' },
    ],
    
    faqs: [
      {
        q: 'What is the fare from Vellore CMC Hospital to Chennai Airport?',
        a: 'The one-way taxi fare from Vellore CMC Hospital to Chennai Airport starts at ₹1,900 for a Hatchback, ₹2,200 for a Sedan, and ₹3,200 for an SUV.',
      },
    ],
    
    reviews: [
      {
        name: 'Dr. Banerjee',
        rating: 5,
        text: 'Booked SAMAYAS for patient transfer from Vellore CMC to Chennai Airport. Driver was extremely gentle and polite.',
        route: 'Vellore CMC to Chennai Airport',
      },
    ],
    
    nearbyRoutes: [
      { name: 'Trichy to Chennai', slug: 'trichy-to-chennai', distance: '330 km', fare: '₹3,300' },
    ],
  },

  'trichy-to-bengaluru': {
    from: 'Trichy',
    to: 'Bengaluru',
    distanceKm: 345,
    timeHours: 6.25,
    distanceDisplay: '345 km',
    durationDisplay: '6.25 Hours',
    heroTagline: 'Interstate One-Way Taxi from Trichy to Bengaluru. Direct drops to Electronic City, Silk Board & BLR Airport.',
    seoTitle: 'Trichy to Bengaluru One-Way Taxi | Intercity Cab | SAMAYAS',
    metaDescription: 'Book Trichy to Bengaluru one-way taxi with SAMAYAS. Hatchback ₹4,200, Sedan ₹4,900, SUV ₹6,800. Doorstep pickups across Trichy to Electronic City, Koramangala & BLR Airport.',
    
    fare: {
      hatchback: 4200,
      sedan: 4900,
      suv: 6800,
      innova: 8200,
      traveller: 12500,
    },
    
    highways: ['NH44 / NH81 (Trichy-Namakkal-Salem-Bengaluru Expressway)'],
    
    tolls: {
      costRange: '₹480 - ₹580',
      plazasCount: 5,
      fastagSupported: true,
      cashAccepted: true,
      note: 'State permit and toll charges extra at actuals.',
    },
    
    pickupLocations: [
      'Trichy International Airport (TRZ)',
      'Trichy Railway Junction (TPJ)',
      'Srirangam Temple Gate',
      'Cantonment & Thillai Nagar',
    ],
    
    dropLocations: [
      'Electronic City & Silk Board',
      'Koramangala & Indiranagar',
      'Kempegowda International Airport (BLR)',
      'Bengaluru City Railway Station (SBC)',
    ],
    
    placesOnTheWay: [
      { name: 'Trichy', type: 'Origin', desc: 'Doorstep pickup across Trichy.' },
      { name: 'Namakkal', type: 'Egg Capital', desc: 'Anjaneyar Temple city.' },
      { name: 'Salem', type: 'Steel City', desc: 'Major highway interchange.' },
      { name: 'Hosur', type: 'Border Gate', desc: 'Karnataka state border.' },
      { name: 'Bengaluru', type: 'Destination', desc: 'Direct drop to Electronic City or BLR Airport.' },
    ],
    
    faqs: [
      {
        q: 'What is the fare from Trichy to Bengaluru?',
        a: 'The one-way taxi fare from Trichy to Bengaluru starts at ₹4,200 for a Hatchback, ₹4,900 for a Sedan, and ₹6,800 for an SUV.',
      },
    ],
    
    reviews: [
      {
        name: 'Vidyasagar M.',
        rating: 5,
        text: 'Traveled from Srirangam to Bengaluru Electronic City. Driver was punctual, polite, and drove very safely on the expressway.',
        route: 'Trichy to Bengaluru',
      },
    ],
    
    nearbyRoutes: [
      { name: 'Trichy to Chennai', slug: 'trichy-to-chennai', distance: '330 km', fare: '₹3,300' },
    ],
  },

  'coimbatore-to-bengaluru': {
    from: 'Coimbatore',
    to: 'Bengaluru',
    distanceKm: 365,
    timeHours: 6.5,
    distanceDisplay: '365 km',
    durationDisplay: '6.5 Hours',
    heroTagline: 'Express One-Way Taxi from Coimbatore to Bengaluru. 24/7 pickups from CJB Airport and Junction.',
    seoTitle: 'Coimbatore to Bengaluru One-Way Taxi | Cab Booking | SAMAYAS',
    metaDescription: 'Book Coimbatore to Bengaluru one-way taxi with SAMAYAS. Hatchback ₹4,500, Sedan ₹5,200, SUV ₹7,200. Pickups from CJB Airport to Electronic City & BLR Airport.',
    
    fare: {
      hatchback: 4500,
      sedan: 5200,
      suv: 7200,
      innova: 8800,
      traveller: 13200,
    },
    
    highways: ['NH544 / NH44 (Coimbatore-Salem-Hosur-Bengaluru Expressway)'],
    
    tolls: {
      costRange: '₹520 - ₹620',
      plazasCount: 6,
      fastagSupported: true,
      cashAccepted: true,
      note: 'State permit and toll charges extra at actuals.',
    },
    
    pickupLocations: [
      'Coimbatore International Airport (CJB)',
      'Coimbatore Junction Railway Station (CBE)',
      'Gandhipuram & RS Puram',
      'Peelamedu & Saravanampatti',
    ],
    
    dropLocations: [
      'Electronic City & Silk Board',
      'Koramangala & Indiranagar',
      'Kempegowda International Airport (BLR)',
      'Bengaluru City Railway Station (SBC)',
    ],
    
    placesOnTheWay: [
      { name: 'Coimbatore', type: 'Origin', desc: 'Doorstep pickup from CJB Airport or home.' },
      { name: 'Erode Bypass', type: 'Textile Hub', desc: 'NH-544 highway corridor.' },
      { name: 'Salem', type: 'Interchange', desc: 'NH-44 join towards Bengaluru.' },
      { name: 'Hosur', type: 'State Border', desc: 'Border toll plaza.' },
      { name: 'Bengaluru', type: 'Destination', desc: 'Direct drop to Electronic City or BLR Airport.' },
    ],
    
    faqs: [
      {
        q: 'What is the fare from Coimbatore to Bengaluru?',
        a: 'The one-way taxi fare from Coimbatore to Bengaluru starts at ₹4,500 for a Hatchback, ₹5,200 for a Sedan, and ₹7,200 for an SUV.',
      },
    ],
    
    reviews: [
      {
        name: 'Gowri Shankar',
        rating: 5,
        text: 'Booked a one-way cab from Peelamedu Coimbatore to Koramangala Bengaluru. Excellent vehicle condition and hassle-free journey.',
        route: 'Coimbatore to Bengaluru',
      },
    ],
    
    nearbyRoutes: [
      { name: 'Coimbatore to Ooty', slug: 'coimbatore-to-ooty', distance: '85 km', fare: '₹2,200' },
    ],
  },
};

export function getRouteContent(slug) {
  if (!slug) return null;
  return routeContent[slug.toLowerCase()] || null;
}
