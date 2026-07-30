/**
 * Enhanced district content data — per-district unique content
 * for the redesigned SEO landing page template.
 *
 * Structure:  districtContent[slug] = { ... }
 *
 * Start with Tiruchirappalli (Trichy) as the reference district.
 * Remaining 37 districts can be added using the same shape.
 */

export const districtContent = {

  // ─────────────────────────────────────────────────────────
  // TIRUCHIRAPPALLI (TRICHY) — Reference / Template District
  // ─────────────────────────────────────────────────────────
  tiruchirappalli: {

    // § 2 — Hero tagline (1–2 sentences, district-specific)
    heroTagline:
      'Planning a trip from Trichy? Book a 24/7 one-way taxi with SAMAYAS. Convenient pickups across Trichy, including Rock Fort, Srirangam, and TRZ Airport, with travel to anywhere in Tamil Nadu.',

    // § 4 — District overview (structured for easy reading)
    overview: `Tiruchirappalli, popularly known as Trichy, is a major transportation hub in central Tamil Nadu situated on the banks of the river Kaveri.

The city serves as a natural crossroads connecting northern, southern, and coastal Tamil Nadu via major highways including NH-45, NH-67, and NH-210.

Whether commuting for business at BHEL, attending university at NIT-Trichy, or visiting sacred sites like Srirangam, SAMAYAS provides seamless 24/7 one-way taxi connections.`,

    overviewHighlights: [
      'Strategic central TN location with direct NH-45 highway connectivity',
      'High demand corridors for pilgrims, students, business, and airport transit',
      'Transparent flat one-way fares to all 38 districts with zero return charges'
    ],

    // § 5 — Popular routes (enhanced with distance + time + starting fare)
    routes: [
      { name: 'Trichy to Chennai', to: 'Chennai', distanceKm: 330, timeHours: 5.5, startingFare: 4950 },
      { name: 'Trichy to Madurai', to: 'Madurai', distanceKm: 135, timeHours: 2.5, startingFare: 2025 },
      { name: 'Trichy to Coimbatore', to: 'Coimbatore', distanceKm: 215, timeHours: 4, startingFare: 3225 },
      { name: 'Trichy to Thanjavur', to: 'Thanjavur', distanceKm: 57, timeHours: 1.25, startingFare: 1950 },
      { name: 'Trichy to Bengaluru', to: 'Bengaluru', distanceKm: 345, timeHours: 6, startingFare: 5175 },
      { name: 'Trichy to Pondicherry', to: 'Pondicherry', distanceKm: 210, timeHours: 4, startingFare: 3150 },
      { name: 'Trichy to Salem', to: 'Salem', distanceKm: 140, timeHours: 2.5, startingFare: 2100 },
      { name: 'Trichy to Kumbakonam', to: 'Kumbakonam', distanceKm: 95, timeHours: 2, startingFare: 1950 },
      { name: 'Trichy to Dindigul', to: 'Dindigul', distanceKm: 95, timeHours: 2, startingFare: 1950 },
    ],

    // § 6 — Fare table (top 6 routes with per-vehicle-type pricing)
    fareTable: [
      { to: 'Chennai',     distanceKm: 330, timeHours: 5.5, hatchback: 4950, sedan: 4950, suv: 6600 },
      { to: 'Madurai',     distanceKm: 135, timeHours: 2.5, hatchback: 2025, sedan: 2025, suv: 2700 },
      { to: 'Coimbatore',  distanceKm: 215, timeHours: 4, hatchback: 3225, sedan: 3225, suv: 4300 },
      { to: 'Thanjavur',   distanceKm: 57, timeHours: 1.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Bengaluru',   distanceKm: 345, timeHours: 6, hatchback: 5175, sedan: 5175, suv: 6900 },
      { to: 'Salem',       distanceKm: 140, timeHours: 2.5, hatchback: 2100, sedan: 2100, suv: 2800 },
    ],

    // § 7 — Popular pickup & drop locations
    pickupLocations: [
      'Trichy Central Bus Stand (Chatram)',
      'Srirangam',
      'Trichy Airport (TRZ)',
      'Trichy Junction Railway Station',
      'Thillai Nagar',
      'Cantonment',
      'KK Nagar',
      'Woraiyur',
      'Puthur',
      'TVS Tollgate',
    ],
    dropLocations: [
      'Chennai',
      'Madurai',
      'Coimbatore',
      'Thanjavur',
      'Bengaluru',
      'Pondicherry',
      'Salem',
      'Kumbakonam',
      'Dindigul',
      'Karur',
    ],

    // § 8 — Transport hubs
    transportHubs: {
      busStands: [
        { name: 'Trichy Central Bus Stand (Chatram Bus Stand)', address: 'Chatram, Tiruchirappalli - 620002' },
        { name: 'Srirangam Bus Stand', address: 'Srirangam, Tiruchirappalli - 620006' },
      ],
      railwayStations: [
        { name: 'Tiruchirappalli Junction', code: 'TPJ', address: 'Junction Road, Tiruchirappalli - 620001' },
        { name: 'Srirangam Railway Station', code: 'SRR', address: 'Srirangam, Tiruchirappalli' },
        { name: 'Golden Rock (Ponmalai)', code: 'GOC', address: 'Ponmalai, Tiruchirappalli' },
      ],
      airports: [
        { name: 'Tiruchirappalli International Airport', code: 'TRZ', distanceKm: 8, address: 'Airport Road, Tiruchirappalli - 620007' },
      ],
    },

    // § 9 — Tourist attractions
    touristAttractions: [
      { name: 'Rockfort Ucchi Pillayar Temple', description: 'Ancient rock-cut temple perched on a 83-metre high rock — the most iconic landmark of Trichy.', distanceKm: 0 },
      { name: 'Sri Ranganathaswamy Temple', description: 'One of the largest functioning Hindu temples in the world, spread across 156 acres in Srirangam.', distanceKm: 8 },
      { name: 'Jambukeswarar Temple (Thiruvanaikaval)', description: 'One of the five Pancha Bhoota Sthalams, dedicated to Lord Shiva representing the element of water.', distanceKm: 7 },
      { name: 'Kallanai Dam (Grand Anicut)', description: 'The oldest water-diversion structure in the world, built by Chola King Karikalan on the river Kaveri.', distanceKm: 24 },
      { name: 'Mukkombu (Upper Anicut)', description: 'Scenic dam and picnic spot where the Kaveri splits into the Kollidam and the Kaveri proper.', distanceKm: 18 },
    ],

    // § 10 — Major industries & business info
    industries: [
      'BHEL (Bharat Heavy Electricals Limited)',
      'Golden Rock Railway Workshop',
      'Ordnance Factory Tiruchirappalli (OFT)',
      'ELCOT IT Park / TIDEL Park',
      'NIT Trichy (National Institute of Technology)',
      'Bharathidasan University',
    ],
    businessInfo:
      'Tiruchirappalli is a major industrial, educational, and defense hub in Tamil Nadu. The city hosts BHEL — one of India\'s largest engineering enterprises — the Golden Rock Railway Workshop, and the Ordnance Factory. Business travelers frequently commute between Trichy and Chennai, Coimbatore, and Bengaluru. SAMAYAS provides reliable airport pickups, corporate commute services, and outstation taxi bookings tailored for business travelers from Trichy.',

    // § 13 — Customer reviews
    reviews: [
      {
        name: 'Ramesh K.',
        rating: 5,
        text: 'Booked a one-way taxi from Trichy to Chennai at midnight. Driver was on time and very professional. Will definitely use SAMAYAS again.',
        route: 'Trichy to Chennai',
      },
      {
        name: 'Priya S.',
        rating: 5,
        text: 'Needed an airport pickup at Trichy Airport for my parents. The driver was waiting before the flight landed. Excellent service!',
        route: 'Trichy Airport Pickup',
      },
      {
        name: 'Venkatesh R.',
        rating: 4,
        text: 'Used the acting driver service from Trichy to Thanjavur for a family wedding. Driver was experienced and courteous throughout the trip.',
        route: 'Trichy to Thanjavur',
      },
      {
        name: 'Lakshmi M.',
        rating: 5,
        text: 'Affordable fares and no hidden charges. I regularly book one-way from Trichy to Madurai via SAMAYAS. Highly recommended!',
        route: 'Trichy to Madurai',
      },
    ],

    // § 14 — District-specific FAQs (Tier 1 — unique per district)
    faqs: [
      {
        q: 'What is the one-way taxi fare from Trichy to Chennai?',
        a: 'The one-way taxi fare from Trichy to Chennai starts from approximately ₹3,800 for a Hatchback (Swift, WagonR), ₹4,300 for a Sedan (Dzire, Amaze), and ₹5,800 for an SUV (Ertiga, Innova). Prices may vary based on the exact pickup and drop location.',
      },
      {
        q: 'How long does it take to travel from Trichy to Madurai by taxi?',
        a: 'The distance from Tiruchirappalli to Madurai is approximately 135 km via NH-45B. A one-way taxi ride takes around 2.5 hours depending on traffic conditions.',
      },
      {
        q: 'Is taxi pickup available at Trichy Airport (TRZ)?',
        a: 'Yes, SAMAYAS provides 24/7 taxi pickup and drop services at Tiruchirappalli International Airport (TRZ). Our driver will be waiting at the arrivals area before your flight lands. Pre-book for guaranteed availability.',
      },
      {
        q: 'Can I book an acting driver in Trichy for a temple visit to Srirangam?',
        a: 'Absolutely. SAMAYAS offers professional acting drivers in Trichy for local trips including Srirangam, Thiruvanaikaval, and Rockfort Temple visits. You can book for a few hours or the entire day.',
      },
      {
        q: 'Which vehicle types are available for one-way taxi from Trichy?',
        a: 'We offer Hatchbacks (Swift, WagonR), Sedans (Dzire, Amaze), SUVs (Creta, Ertiga), and Premium SUVs (Innova Crysta, Innova Hycross) for one-way taxi trips from Tiruchirappalli.',
      },
    ],

    // SEO meta
    metaTitle: 'Trichy One-Way Taxi | 24/7 Cab Booking | SAMAYAS',
    metaDescription:
      'Travel comfortably from Trichy (Tiruchirappalli), Tamil Nadu. Direct one-way taxi to Chennai, Madurai, Srirangam & Thanjavur. Airport pickup & drop with Hatchbacks from ₹10/km. Book online today with SAMAYAS.',
  },

  // ─────────────────────────────────────────────────────────
  // ARIYALUR — District 2
  // ─────────────────────────────────────────────────────────
  ariyalur: {
    heroTagline:
      'Traveling from Ariyalur? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Ariyalur, including Gangaikonda Cholapuram and cement industrial zones.',

    overview: `Ariyalur district, situated in central-eastern Tamil Nadu along the fertile northern bank of the Kollidam River, is renowned both as the 'Cement City of South India' and as a treasure trove of ancient Chola architecture and prehistoric marine fossils.

Bounded by Cuddalore to the north, Perambalur to the west, Thanjavur to the south, and Mayiladuthurai to the east, Ariyalur occupies a strategically crucial position connecting the central delta region with the northern industrial corridors. The district is world-famous for its massive limestone deposits, hosting major industrial giants including Ramco Cements, UltraTech Cement, Dalmia Bharat, and TANCEM. Beyond its industrial clout, Ariyalur is home to the UNESCO World Heritage site Gangaikonda Cholapuram—the historic capital of King Rajendra Chola I—and the Karaivetti Bird Sanctuary, one of South India's largest freshwater sanctuaries.

Transport in Ariyalur is anchored by the Ariyalur Railway Junction on the main Chennai–Trichy chord line and state highways SH-139 and SH-27. Whether you are an industrial executive visiting limestone plants, a scholar exploring Cretaceous fossil beds, or a family traveling for heritage tourism, SAMAYAS offers reliable 24/7 one-way taxi transfers from Ariyalur with transparent per-kilometer pricing and zero return fare penalties.`,

    overviewHighlights: [
      'Industrial powerhouse with direct access to top cement manufacturing hubs and limestone mines',
      'Gateway to Gangaikonda Cholapuram Chola heritage site and Karaivetti Bird Sanctuary',
      '24/7 direct one-way taxi connections to Chennai, Trichy Airport, Thanjavur, and Pondicherry'
    ],

    routes: [
      { name: 'Ariyalur to Chennai', to: 'Chennai', distanceKm: 265, timeHours: 4.75, startingFare: 3975 },
      { name: 'Ariyalur to Trichy', to: 'Trichy', distanceKm: 60, timeHours: 1.25, startingFare: 1950 },
      { name: 'Ariyalur to Thanjavur', to: 'Thanjavur', distanceKm: 65, timeHours: 1.3, startingFare: 1950 },
      { name: 'Ariyalur to Jayankondam', to: 'Jayankondam', distanceKm: 32, timeHours: 0.6, startingFare: 1950 },
      { name: 'Ariyalur to Chidambaram', to: 'Chidambaram', distanceKm: 85, timeHours: 1.75, startingFare: 1950 },
      { name: 'Ariyalur to Kumbakonam', to: 'Kumbakonam', distanceKm: 55, timeHours: 1.2, startingFare: 1950 },
      { name: 'Ariyalur to Perambalur', to: 'Perambalur', distanceKm: 30, timeHours: 0.5, startingFare: 1950 },
      { name: 'Ariyalur to Pondicherry', to: 'Pondicherry', distanceKm: 135, timeHours: 2.75, startingFare: 2025 },
      { name: 'Ariyalur to Madurai', to: 'Madurai', distanceKm: 195, timeHours: 3.5, startingFare: 2925 },
    ],

    fareTable: [
      { to: 'Chennai',     distanceKm: 265, timeHours: 4.75, hatchback: 3975, sedan: 3975, suv: 5300 },
      { to: 'Trichy',      distanceKm: 60, timeHours: 1.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Thanjavur',   distanceKm: 65, timeHours: 1.3, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chidambaram', distanceKm: 85, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Kumbakonam',  distanceKm: 55, timeHours: 1.2, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Pondicherry', distanceKm: 135, timeHours: 2.75, hatchback: 2025, sedan: 2025, suv: 2700 },
    ],

    pickupLocations: [
      'Ariyalur Railway Junction (ALU)',
      'Ariyalur New Bus Stand',
      'Jayankondam Bus Stand',
      'Sendurai Road',
      'Cement Nagar / Ramco Plant Gate',
      'UltraTech Cement Township',
      'Udayarpalayam Market',
      'Government Hospital Road',
      'Thirumanur Bus Stop',
      'Keelapalur Junction',
    ],
    dropLocations: [
      'Chennai',
      'Trichy',
      'Thanjavur',
      'Jayankondam',
      'Chidambaram',
      'Kumbakonam',
      'Perambalur',
      'Pondicherry',
      'Madurai',
    ],

    transportHubs: {
      busStands: [
        { name: 'Ariyalur New Bus Stand', address: 'Bus Stand Road, Ariyalur - 621704' },
        { name: 'Jayankondam Bus Stand', address: 'Trichy Main Road, Jayankondam - 621802' },
      ],
      railwayStations: [
        { name: 'Ariyalur Railway Junction', code: 'ALU', address: 'Station Road, Ariyalur - 621704' },
        { name: 'Sendurai Railway Station', code: 'SLTH', address: 'Sendurai, Ariyalur District' },
      ],
      airports: [
        { name: 'Tiruchirappalli International Airport (Nearest)', code: 'TRZ', distanceKm: 60, address: 'Airport Road, Tiruchirappalli - 620007' },
      ],
    },

    touristAttractions: [
      { name: 'Gangaikonda Cholapuram Temple', description: 'UNESCO World Heritage monument built by Rajendra Chola I to commemorate his victory up to the River Ganges.', distanceKm: 38 },
      { name: 'Ariyalur Fossil Park & Museum', description: 'Fascinating paleontological site displaying 100-million-year-old Cretaceous marine fossils and dinosaur egg beds.', distanceKm: 5 },
      { name: 'Karaivetti Bird Sanctuary', description: 'One of South India\'s largest freshwater sanctuaries, attracting thousands of migratory waterfowl species in winter.', distanceKm: 25 },
      { name: 'Elakurichi Church (Adaikala Matha)', description: 'Historic 18th-century shrine constructed by the famous Italian Jesuit missionary Father Constanzo Beschi (Veeramamunivar).', distanceKm: 32 },
      { name: 'Solagangam Lake (Ponneri)', description: 'Massive artificial reservoir created by Rajendra Chola I as a water monument of victory.', distanceKm: 36 },
    ],

    industries: [
      'Ramco Cements Limited (Ramasamy Raja Nagar)',
      'UltraTech Cement Works (Reddipalayam)',
      'Dalmia Bharat Cement (Dalmiapuram / Kallakudi)',
      'Tamil Nadu Cements Corporation (TANCEM - Ariyalur)',
      'Chettinad Cement Corporation',
      'Jayankondam Cashew Nut Processing Cluster',
    ],
    businessInfo:
      'Ariyalur\'s economy revolves heavily around its massive limestone reserves, housing premier cement manufacturing units like Ramco, UltraTech, Dalmia Bharat, and TANCEM. Executives, heavy machinery engineers, quality auditors, and raw material suppliers travel daily between Ariyalur plants and headquarters in Chennai, Trichy, and Coimbatore. SAMAYAS delivers reliable corporate taxi services, plant site pickups, and comfortable outstation transfer vehicles equipped for business travel.',

    reviews: [
      {
        name: 'Karthik Raja M.',
        rating: 5,
        text: 'Booked a sedan from Ramco Cements plant in Ariyalur to Trichy Airport for an urgent flight. The driver was at the plant gate 10 minutes early. Excellent driving.',
        route: 'Ariyalur to Trichy Airport',
      },
      {
        name: 'Sudha Narayanan',
        rating: 5,
        text: 'Visited Gangaikonda Cholapuram with my elderly parents. The SAMAYAS driver took us safely from Ariyalur junction to the temple and then dropped us in Chennai.',
        route: 'Ariyalur to Chennai',
      },
      {
        name: 'Balamurugan T.',
        rating: 5,
        text: 'Regularly book one-way cabs between Ariyalur and Thanjavur for business trips. Fares are completely transparent with no hidden kilometer fees.',
        route: 'Ariyalur to Thanjavur',
      },
      {
        name: 'Dr. Arunkumar S.',
        rating: 4,
        text: 'Very comfortable Innova booking for our research team visiting the Ariyalur Fossil Park. Clean vehicle and polite driver.',
        route: 'Ariyalur to Pondicherry',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Ariyalur to Chennai?',
        a: 'The one-way taxi fare from Ariyalur to Chennai starts from approximately ₹3,200 for a Hatchback, ₹3,600 for a Sedan (Dzire, Amaze), and ₹4,900 for an SUV (Ertiga, Innova).',
      },
      {
        q: 'How far is Tiruchirappalli Airport from Ariyalur and what is the taxi fare?',
        a: 'Tiruchirappalli International Airport (TRZ) is approximately 60 km from Ariyalur city. A cab ride takes around 1 hour 15 minutes and costs starting from ₹1,000.',
      },
      {
        q: 'Can I book a cab from Ariyalur Railway Station to Gangaikonda Cholapuram?',
        a: 'Yes, SAMAYAS provides direct taxis from Ariyalur Railway Junction to Gangaikonda Cholapuram (38 km) as well as drop-offs to Chennai, Kumbakonam, or Chidambaram.',
      },
      {
        q: 'Are taxi pickups available directly from cement factory townships in Ariyalur?',
        a: 'Yes, we provide 24/7 pickup service from all industrial plants and townships including Ramco Cements, UltraTech Reddipalayam, Dalmiapuram, and TANCEM.',
      },
      {
        q: 'Which vehicles are available for one-way rental in Ariyalur?',
        a: 'We offer Hatchbacks (Swift), Sedans (Dzire, Etios), SUVs (Ertiga), and Premium SUVs (Innova Crysta) for all intercity routes from Ariyalur.',
      },
    ],

    metaTitle: 'Book One-Way Taxi from Ariyalur | No Return Fare | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Ariyalur? Direct one-way taxi to Gangaikonda Cholapuram, Trichy Airport & Chennai. Transparent per-km rates with zero return fee.',
  },

  // ─────────────────────────────────────────────────────────
  // CHENGALPATTU — District 3
  // ─────────────────────────────────────────────────────────
  chengalpattu: {
    heroTagline:
      'Heading out from Chengalpattu? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Chengalpattu, including Mahindra World City and Mahabalipuram.',

    overview: `Chengalpattu district, strategically positioned immediately south of Chennai along the booming Grand Southern Trunk (GST) Road corridor (NH-48), serves as the primary southern gateway to the Chennai Metropolitan Region.

Formed by bifurcating the historic Kanchipuram district, Chengalpattu has emerged as one of Tamil Nadu's fastest-growing economic powerhouses. The district encompasses major industrial and IT zones including Mahindra World City (India's first integrated business city), Maraimalai Nagar industrial estate, and the aerospace and automobile hubs near Oragadam. Beyond modern technology and manufacturing, Chengalpattu boasts the world-famous UNESCO World Heritage coastal town of Mahabalipuram (Mamallapuram), featuring 7th-century Pallava rock-cut Shore Temples, Pancha Rathas, and Arjuna's Penance.

Transportation infrastructure in Chengalpattu is exceptionally well-connected, centered around Chengalpattu Railway Junction—a major multi-railway line interchange—and direct proximity to Chennai International Airport (MAA) just 40 km north. Whether you are an IT executive commuting from Mahindra World City, a medical tourist visiting SRM Medical Complex, or a vacationer traveling along the East Coast Road (ECR), SAMAYAS provides premium, reliable 24/7 one-way cabs from Chengalpattu with zero return charges.`,

    overviewHighlights: [
      'Premier industrial and IT hub housing Mahindra World City, Maraimalai Nagar & top MNCs',
      'Home to UNESCO World Heritage site Mahabalipuram and Vedanthangal Bird Sanctuary',
      'Direct 24/7 one-way taxi connections to Chennai Airport, Puducherry, Trichy, and Bengaluru'
    ],

    routes: [
      { name: 'Chengalpattu to Chennai Airport', to: 'Chennai Airport', distanceKm: 40, timeHours: 0.75, startingFare: 1950 },
      { name: 'Chengalpattu to Puducherry', to: 'Puducherry', distanceKm: 110, timeHours: 2.25, startingFare: 1950 },
      { name: 'Chengalpattu to Mahabalipuram', to: 'Mahabalipuram', distanceKm: 30, timeHours: 0.5, startingFare: 1950 },
      { name: 'Chengalpattu to Trichy', to: 'Trichy', distanceKm: 290, timeHours: 4.75, startingFare: 4350 },
      { name: 'Chengalpattu to Bengaluru', to: 'Bengaluru', distanceKm: 320, timeHours: 5.5, startingFare: 4800 },
      { name: 'Chengalpattu to Vellore', to: 'Vellore', distanceKm: 115, timeHours: 2.2, startingFare: 1950 },
      { name: 'Chengalpattu to Kanchipuram', to: 'Kanchipuram', distanceKm: 35, timeHours: 0.75, startingFare: 1950 },
      { name: 'Chengalpattu to Tiruvannamalai', to: 'Tiruvannamalai', distanceKm: 145, timeHours: 3, startingFare: 2175 },
      { name: 'Chengalpattu to Madurai', to: 'Madurai', distanceKm: 420, timeHours: 6.5, startingFare: 6300 },
    ],

    fareTable: [
      { to: 'Chennai Airport', distanceKm: 40, timeHours: 0.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Puducherry',      distanceKm: 110, timeHours: 2.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Mahabalipuram',   distanceKm: 30, timeHours: 0.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Trichy',          distanceKm: 290, timeHours: 4.75, hatchback: 4350, sedan: 4350, suv: 5800 },
      { to: 'Bengaluru',       distanceKm: 320, timeHours: 5.5, hatchback: 4800, sedan: 4800, suv: 6400 },
      { to: 'Tiruvannamalai',  distanceKm: 145, timeHours: 3, hatchback: 2175, sedan: 2175, suv: 2900 },
    ],

    pickupLocations: [
      'Chengalpattu Railway Junction (CGL)',
      'Chengalpattu New Bus Stand',
      'Mahindra World City (Canopy / Club)',
      'Maraimalai Nagar Industrial Estate',
      'SRM University Gate (Kattankulathur)',
      'Mahabalipuram ECR Junction',
      'Guduvancheri Bus Stop',
      'Singaperumal Koil',
      'Paranur Toll Plaza',
      'Chengalpattu Government Medical College',
    ],
    dropLocations: [
      'Chennai Airport',
      'Puducherry',
      'Mahabalipuram',
      'Trichy',
      'Bengaluru',
      'Vellore',
      'Kanchipuram',
      'Tiruvannamalai',
      'Madurai',
    ],

    transportHubs: {
      busStands: [
        { name: 'Chengalpattu New Bus Stand', address: 'GST Road, Chengalpattu - 603001' },
        { name: 'Maraimalai Nagar Bus Terminal', address: 'NH-48, Maraimalai Nagar - 603209' },
      ],
      railwayStations: [
        { name: 'Chengalpattu Junction', code: 'CGL', address: 'Station Road, Chengalpattu - 603001' },
        { name: 'Singaperumal Koil Station', code: 'SKL', address: 'Singaperumal Koil, Chengalpattu' },
        { name: 'Paranur Railway Station', code: 'PWU', address: 'Mahindra World City Entrance, Paranur' },
      ],
      airports: [
        { name: 'Chennai International Airport (Nearest)', code: 'MAA', distanceKm: 40, address: 'GST Road, Meenambakkam, Chennai - 600027' },
      ],
    },

    touristAttractions: [
      { name: 'Shore Temple & Pancha Rathas (Mahabalipuram)', description: 'UNESCO World Heritage 7th-century rock-cut monuments and monolithic temples overlooking the Bay of Bengal.', distanceKm: 30 },
      { name: 'Vedanthangal Bird Sanctuary', description: 'One of the oldest water bird sanctuaries in India, hosting over 40,000 migratory birds during peak season.', distanceKm: 30 },
      { name: 'Muttukadu Boat House', description: 'Popular backwater watersports complex offering speedboats, kayaking, and banana rides on the East Coast Road.', distanceKm: 42 },
      { name: 'Alamparai Fort Ruins', description: 'Atmospheric 18th-century Mughal-era sea fort ruins surrounded by backwaters and palm groves.', distanceKm: 55 },
      { name: 'Covelong Beach (Kovalam)', description: 'Famous surfing beach village with historic Dutch fort heritage, luxury resorts, and water sports.', distanceKm: 38 },
    ],

    industries: [
      'Mahindra World City (Infosys, Wipro, BMW, Renault-Nissan, Capgemini)',
      'Maraimalai Nagar Industrial Estate (Ford India, TVS Motors)',
      'Oragadam Automotive Corridor (Hyundai, Daimler, Apollo Tyres proximity)',
      'SRM Institute of Science & Technology (Kattankulathur)',
      'Chengalpattu Government Medical College & Hospital',
      'ECR Beach Resort & Hospitality Sector',
    ],
    businessInfo:
      'Chengalpattu is a premier industrial and technology corridor in South India. It houses Mahindra World City—an eco-friendly 1,500-acre business city—and major automotive clusters at Maraimalai Nagar and nearby Oragadam. Software engineers, corporate executives, global delegates, and medical travelers require frequent round-the-clock taxi rides to Chennai Airport, Puducherry resorts, and outstation tech hubs. SAMAYAS offers executive sedan rentals, corporate invoicing, and reliable 24/7 airport transfers from Chengalpattu.',

    reviews: [
      {
        name: 'Deepak V.',
        rating: 5,
        text: 'Needed an early 4 AM cab from Mahindra World City to Chennai Airport. Driver arrived 15 minutes before time. Very clean sedan and polite service.',
        route: 'Chengalpattu to Chennai Airport',
      },
      {
        name: 'Ananya Roy',
        rating: 5,
        text: 'Took a weekend one-way trip from SRM Kattankulathur to Pondicherry. Booking was super smooth via SAMAYAS and the fare was much cheaper than local quotes.',
        route: 'Chengalpattu to Pondicherry',
      },
      {
        name: 'Ganesh Kumar',
        rating: 5,
        text: 'Booked an SUV for a family trip to Mahabalipuram Shore Temple. The driver was knowledgeable about ECR traffic routes and drove safely throughout.',
        route: 'Chengalpattu to Mahabalipuram',
      },
      {
        name: 'Sridhar R.',
        rating: 4,
        text: 'Regularly rely on SAMAYAS for corporate travel between Maraimalai Nagar and Bengaluru. Transparent pricing and zero return fare hassle.',
        route: 'Chengalpattu to Bengaluru',
      },
    ],

    faqs: [
      {
        q: 'What is the taxi fare from Chengalpattu to Chennai Airport (MAA)?',
        a: 'The one-way taxi fare from Chengalpattu to Chennai Airport starts at approximately ₹800 for a Hatchback, ₹1,000 for a Sedan, and ₹1,400 for an SUV. Travel time is around 45 minutes.',
      },
      {
        q: 'How far is Mahabalipuram from Chengalpattu and how to book a cab?',
        a: 'Mahabalipuram is approximately 30 km from Chengalpattu. You can pre-book a SAMAYAS one-way or round-trip cab online or via phone for ₹600 (Hatchback) or ₹750 (Sedan).',
      },
      {
        q: 'Are 24/7 taxi pickups available inside Mahindra World City?',
        a: 'Yes, SAMAYAS drivers provide round-the-clock pickup directly from all Mahindra World City IT parks, commercial zones, residential townships, and Paranur station.',
      },
      {
        q: 'Can I book a one-way taxi from Chengalpattu to Puducherry along ECR?',
        a: 'Yes, we operate daily direct one-way taxis from Chengalpattu to Puducherry via East Coast Road (ECR) or GST Road starting from ₹1,700.',
      },
      {
        q: 'Which cars are recommended for family travel from Chengalpattu to outstation destinations?',
        a: 'We recommend our comfortable Sedans (Dzire, Amaze) for up to 4 passengers or spacious SUVs (Ertiga, Innova Crysta) for families with extra luggage.',
      },
    ],

    metaTitle: 'Chengalpattu Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Need airport transfers from Chengalpattu? Direct one-way taxi to Mahabalipuram coastal resorts, Chennai Airport, Mahindra World City & Puducherry. Instant booking confirmation.',
  },

  // ─────────────────────────────────────────────────────────
  // CHENNAI — District 4
  // ─────────────────────────────────────────────────────────
  chennai: {
    heroTagline:
      'Booking a taxi from Chennai? Book a 24/7 one-way cab with SAMAYAS. Convenient pickups from Chennai Airport, Central Station, and OMR IT corridor to anywhere in Tamil Nadu.',

    overview: `Chennai, the historic capital of Tamil Nadu and the official 'Gateway to South India', is one of Asia's most prominent economic, cultural, educational, and healthcare metropolises. Situated on the Coromandel Coast along the Bay of Bengal, Chennai is India's 4th largest city and the undisputed healthcare capital of the nation.

Renowned globally as the 'Detroit of South India', Chennai produces over one-third of India's automobiles, hosting mega factories for Hyundai, Ford, BMW, Renault-Nissan, and Royal Enfield. Along the iconic Rajiv Gandhi Salai (Old Mahabalipuram Road - OMR), Chennai features a massive IT expressway housing global giants like TCS, Cognizant, Wipro, and Infosys. Furthermore, world-renowned medical institutions such as Apollo Hospitals, MIOT International, and Fortis Malar attract tens of thousands of international and intercity medical tourists monthly.

As the central transit hub of South India, Chennai is anchored by Chennai International Airport (MAA), Dr. MGR Chennai Central Railway Station (MAS), Chennai Egmore (MS), and Asia's largest bus terminus at Koyambedu (CMBT) as well as Kilambakkam (KCBT). Whether you are arriving at Chennai Central for an outstation pilgrimage, commuting from OMR IT parks, or traveling for medical care, SAMAYAS provides transparent, round-the-clock one-way cabs from Chennai to all 38 districts with zero return charges.`,

    overviewHighlights: [
      'Capital metropolis and premier transport hub of Tamil Nadu with 24/7 airport and railway pickups',
      'Major industrial and IT powerhouse spanning the OMR IT Expressway and Sriperumbudur auto corridor',
      'Direct one-way cab connections from Chennai to Puducherry, Trichy, Bengaluru, Madurai, and Tirupati'
    ],

    routes: [
      { name: 'Chennai to Puducherry', to: 'Puducherry', distanceKm: 150, timeHours: 3, startingFare: 2250 },
      { name: 'Chennai to Trichy', to: 'Trichy', distanceKm: 330, timeHours: 5.5, startingFare: 4950 },
      { name: 'Chennai to Bengaluru', to: 'Bengaluru', distanceKm: 345, timeHours: 6, startingFare: 5175 },
      { name: 'Chennai to Tirupati', to: 'Tirupati', distanceKm: 135, timeHours: 3.25, startingFare: 2025 },
      { name: 'Chennai to Vellore', to: 'Vellore', distanceKm: 140, timeHours: 2.75, startingFare: 2100 },
      { name: 'Chennai to Madurai', to: 'Madurai', distanceKm: 460, timeHours: 7.5, startingFare: 6900 },
      { name: 'Chennai to Coimbatore', to: 'Coimbatore', distanceKm: 500, timeHours: 8.5, startingFare: 7500 },
      { name: 'Chennai to Salem', to: 'Salem', distanceKm: 340, timeHours: 5.75, startingFare: 5100 },
      { name: 'Chennai to Tiruvannamalai', to: 'Tiruvannamalai', distanceKm: 195, timeHours: 3.75, startingFare: 2925 },
    ],

    fareTable: [
      { to: 'Puducherry',     distanceKm: 150, timeHours: 3, hatchback: 2250, sedan: 2250, suv: 3000 },
      { to: 'Trichy',         distanceKm: 330, timeHours: 5.5, hatchback: 4950, sedan: 4950, suv: 6600 },
      { to: 'Bengaluru',      distanceKm: 345, timeHours: 6, hatchback: 5175, sedan: 5175, suv: 6900 },
      { to: 'Tirupati',       distanceKm: 135, timeHours: 3.25, hatchback: 2025, sedan: 2025, suv: 2700 },
      { to: 'Vellore',        distanceKm: 140, timeHours: 2.75, hatchback: 2100, sedan: 2100, suv: 2800 },
      { to: 'Tiruvannamalai', distanceKm: 195, timeHours: 3.75, hatchback: 2925, sedan: 2925, suv: 3900 },
    ],

    pickupLocations: [
      'Chennai Central Railway Station (MAS)',
      'Chennai International Airport (MAA)',
      'Chennai Egmore Railway Station (MS)',
      'Koyambedu CMBT Bus Stand',
      'T. Nagar (Panagal Park / Usman Road)',
      'OMR IT Corridor (Sholinganallur / Perungudi)',
      'Velachery Railway Station / Phoenix Marketcity',
      'Anna Nagar (Tower Park)',
      'Guindy Industrial Estate / Olympus',
      'Tambaram Railway Station (TBM)',
      'Porur Junction / Ramachandra Hospital',
      'Adyar / Besant Nagar',
    ],
    dropLocations: [
      'Puducherry',
      'Trichy',
      'Bengaluru',
      'Tirupati',
      'Vellore',
      'Madurai',
      'Coimbatore',
      'Salem',
      'Tiruvannamalai',
    ],

    transportHubs: {
      busStands: [
        { name: 'Koyambedu CMBT (Puratchi Thalaivar Dr. MGR Bus Terminus)', address: 'Inner Ring Road, Koyambedu, Chennai - 600107' },
        { name: 'Kilambakkam Bus Terminus (KCBT)', address: 'GST Road, Kilambakkam, Chennai - 603210' },
      ],
      railwayStations: [
        { name: 'Dr. MGR Chennai Central Railway Station', code: 'MAS', address: 'Kannappar Thidall, Periyamet, Chennai - 600003' },
        { name: 'Chennai Egmore Railway Station', code: 'MS', address: 'Gandhi Irwin Road, Egmore, Chennai - 600008' },
        { name: 'Tambaram Railway Station', code: 'TBM', address: 'GST Road, Tambaram, Chennai - 600045' },
      ],
      airports: [
        { name: 'Chennai International Airport', code: 'MAA', address: 'GST Road, Meenambakkam, Chennai - 600027' },
      ],
    },

    touristAttractions: [
      { name: 'Marina Beach', description: 'The second-longest natural urban beach in the world, stretching 13 km along the Coromandel Coast of the Bay of Bengal.', distanceKm: 0 },
      { name: 'Kapaleeshwarar Temple, Mylapore', description: 'Historic 7th-century Dravidian architectural masterpiece dedicated to Lord Shiva and Goddess Karpagambal.', distanceKm: 4 },
      { name: 'Fort St. George & Museum', description: 'First English fortress built in India in 1644, housing the Secretariat, Legislative Assembly, and colonial artifact museum.', distanceKm: 2 },
      { name: 'San Thome Cathedral Basilica', description: 'Majestic neo-Gothic Catholic basilica built over the tomb of St. Thomas, one of the twelve apostles of Jesus Christ.', distanceKm: 5 },
      { name: 'Government Museum, Egmore', description: 'India\'s second-oldest museum complex featuring magnificent Chola bronze galleries and paleontology collections.', distanceKm: 3 },
    ],

    industries: [
      'Rajiv Gandhi Salai OMR IT Corridor (TCS, Cognizant, Wipro, Infosys, Accenture)',
      'TIDEL Park & Ramanujan IT City (Taramani)',
      'Sriperumbudur & Oragadam Auto Corridor (Hyundai, Royal Enfield, Renault-Nissan, Yamaha)',
      'Guindy Industrial Estate (Ambattur Industrial Estate proximity)',
      'Greams Road Medical Corridor (Apollo Hospitals, Fortis Malar, MIOT)',
      'Chennai Port & Kamarajar Ennore Port Maritime Logistics',
    ],
    businessInfo:
      'Chennai is India\'s automotive capital, IT powerhouse, and medical tourism destination. Tens of thousands of software architects on OMR, automotive engineers in Oragadam, corporate executives at Guindy, and international patients at Apollo Hospitals require reliable 24/7 intercity taxi transfers. SAMAYAS delivers executive sedans, spacious SUVs for families, zero-wait airport doorstep pickups, and corporate invoicing for business travelers across Chennai.',

    reviews: [
      {
        name: 'Siddharth M.',
        rating: 5,
        text: 'Booked a one-way cab from Chennai Central to Puducherry via East Coast Road. Driver arrived on time at the station entrance. Excellent scenic drive!',
        route: 'Chennai Central to Puducherry',
      },
      {
        name: 'Meenakshi Sundaram',
        rating: 5,
        text: 'Needed an early morning airport pickup at Chennai Airport for a trip to Tirupati. Driver was extremely professional and drove safely through the hills.',
        route: 'Chennai Airport to Tirupati',
      },
      {
        name: 'Rajesh K.',
        rating: 5,
        text: 'Regularly book SAMAYAS from OMR Sholinganallur to Bengaluru for weekend family visits. Fares are reasonable and cars are spotless.',
        route: 'Chennai to Bengaluru',
      },
      {
        name: 'Dr. Jennifer A.',
        rating: 4,
        text: 'Arranged an outstation taxi for medical delegates traveling from Apollo Greams Road to Trichy. Seamless booking experience and great driver communication.',
        route: 'Chennai to Trichy',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Chennai to Puducherry?',
        a: 'The one-way taxi fare from Chennai to Puducherry via ECR or ECR-Tindivanam starts at approximately ₹2,200 for a Hatchback, ₹2,500 for a Sedan (Dzire, Etios), and ₹3,400 for an SUV (Ertiga).',
      },
      {
        q: 'How long does it take to travel from Chennai Airport to Tirupati by cab?',
        a: 'The distance from Chennai International Airport (MAA) to Tirupati is approximately 135 km. A one-way cab ride takes about 3 hours and 15 minutes depending on border checkpost traffic.',
      },
      {
        q: 'Is doorstep taxi pickup available 24/7 across all areas in Chennai?',
        a: 'Yes, SAMAYAS provides round-the-clock doorstep pickup from any location in Chennai including OMR, T. Nagar, Velachery, Anna Nagar, Tambaram, Porur, and Koyambedu.',
      },
      {
        q: 'Can I book a one-way cab from Chennai Central Railway Station (MAS)?',
        a: 'Yes, we provide 24/7 dedicated train station pickup at Chennai Central and Egmore. Our driver will coordinate with you at the station exit gate before your train arrives.',
      },
      {
        q: 'Are tolls and driver allowances included in the fare?',
        a: 'SAMAYAS offers transparent per-km billing with zero return fare charges. Standard driver bata is included in the base fare quote; highway toll charges are paid as actuals.',
      },
    ],

    metaTitle: 'One-Way Cab from Chennai | Book Online 24/7 | SAMAYAS',
    metaDescription:
      'Book a taxi for your next trip from Chennai, Tamil Nadu. Direct one-way taxi to Puducherry, Trichy, Bengaluru & Tirupati. Doorstep pickup available 24/7.',
  },

  // ─────────────────────────────────────────────────────────
  // COIMBATORE — District 5
  // ─────────────────────────────────────────────────────────
  coimbatore: {
    heroTagline:
      'Exploring Tamil Nadu from Coimbatore? Book a 24/7 one-way taxi with SAMAYAS. Convenient pickups across Coimbatore, including CJB Airport, Isha Yoga, and Railway Junction.',

    overview: `Coimbatore, affectionately dubbed the 'Manchester of South India', is the second-largest city in Tamil Nadu, nestled dramatically against the backdrop of the Western Ghats and the Palakkad Gap.

As one of India's most vibrant industrial and entrepreneurial hubs, Coimbatore manufactures nearly half of India's water pumps and motors, alongside housing vast textile spinning mills, precision engineering foundries, and the rapidly expanding TIDEL Park Coimbatore and CHIL SEZ at Saravanampatti. Beyond heavy industry, Coimbatore is acclaimed as an educational mecca with premier institutions like PSG Tech, CIT, and Amrita Vishwa Vidyapeetham, as well as a global spiritual destination home to the world-renowned Adiyogi Shiva Statue at Isha Yoga Center.

Coimbatore's transport network is anchored by Coimbatore International Airport (CJB) at Peelamedu, Coimbatore Junction Railway Station (CBE), and major intercity bus terminals at Gandhipuram, Singanallur, and Ukkadam. Serving as the primary gateway to Nilgiris hill stations like Ooty, Coonoor, and Valparai, SAMAYAS provides reliable 24/7 one-way taxi transfers from Coimbatore across Tamil Nadu and neighbouring states with zero return fare penalties.`,

    overviewHighlights: [
      'Industrial and IT powerhouse famed for textiles, pump manufacturing, and TIDEL Park SEZ',
      'Primary gateway to Ooty, Coonoor, Valparai hill stations, and Isha Yoga Center Adiyogi',
      '24/7 direct one-way taxi transfers from Coimbatore Airport & Junction to Ooty, Chennai, Bengaluru & Trichy'
    ],

    routes: [
      { name: 'Coimbatore to Ooty', to: 'Ooty', distanceKm: 85, timeHours: 3, startingFare: 1950 },
      { name: 'Coimbatore to Chennai', to: 'Chennai', distanceKm: 500, timeHours: 8.5, startingFare: 7500 },
      { name: 'Coimbatore to Trichy', to: 'Trichy', distanceKm: 215, timeHours: 4, startingFare: 3225 },
      { name: 'Coimbatore to Madurai', to: 'Madurai', distanceKm: 210, timeHours: 4, startingFare: 3150 },
      { name: 'Coimbatore to Bengaluru', to: 'Bengaluru', distanceKm: 365, timeHours: 6.5, startingFare: 5475 },
      { name: 'Coimbatore to Salem', to: 'Salem', distanceKm: 165, timeHours: 3, startingFare: 2475 },
      { name: 'Coimbatore to Erode', to: 'Erode', distanceKm: 100, timeHours: 2, startingFare: 1950 },
      { name: 'Coimbatore to Tiruppur', to: 'Tiruppur', distanceKm: 55, timeHours: 1.1, startingFare: 1950 },
      { name: 'Coimbatore to Palakkad', to: 'Palakkad', distanceKm: 50, timeHours: 1.25, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Ooty',       distanceKm: 85, timeHours: 3, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chennai',    distanceKm: 500, timeHours: 8.5, hatchback: 7500, sedan: 7500, suv: 10000 },
      { to: 'Trichy',     distanceKm: 215, timeHours: 4, hatchback: 3225, sedan: 3225, suv: 4300 },
      { to: 'Madurai',    distanceKm: 210, timeHours: 4, hatchback: 3150, sedan: 3150, suv: 4200 },
      { to: 'Bengaluru',  distanceKm: 365, timeHours: 6.5, hatchback: 5475, sedan: 5475, suv: 7300 },
      { to: 'Salem',      distanceKm: 165, timeHours: 3, hatchback: 2475, sedan: 2475, suv: 3300 },
    ],

    pickupLocations: [
      'Coimbatore International Airport (CJB)',
      'Coimbatore Junction Railway Station (CBE)',
      'Gandhipuram Central Bus Stand',
      'Peelamedu / SITRA Junction',
      'RS Puram (DB Road)',
      'Saravanampatti IT Corridor (CHIL SEZ)',
      'TIDEL Park ELCOT SEZ (Avinashi Road)',
      'Race Course Road',
      'Singanallur Bus Stand',
      'Ukkadam Bus Terminus',
      'Kuniamuthur / Palakkad Road',
      'Thudiyalur / Mettupalayam Road',
    ],
    dropLocations: [
      'Ooty',
      'Chennai',
      'Trichy',
      'Madurai',
      'Bengaluru',
      'Salem',
      'Erode',
      'Tiruppur',
      'Palakkad',
    ],

    transportHubs: {
      busStands: [
        { name: 'Gandhipuram Central Bus Stand', address: 'Cross Cut Road, Gandhipuram, Coimbatore - 641012' },
        { name: 'Singanallur Bus Terminus', address: 'Trichy Road, Singanallur, Coimbatore - 641005' },
        { name: 'Ukkadam Bus Stand', address: 'Palakkad Road, Ukkadam, Coimbatore - 641001' },
      ],
      railwayStations: [
        { name: 'Coimbatore Junction Railway Station', code: 'CBE', address: 'State Bank Road, Gopalapuram, Coimbatore - 641018' },
        { name: 'Coimbatore North Station', code: 'CBF', address: 'Mettupalayam Road, Coimbatore - 641043' },
        { name: 'Podanur Junction', code: 'PTJ', address: 'Podanur, Coimbatore - 641023' },
      ],
      airports: [
        { name: 'Coimbatore International Airport', code: 'CJB', address: 'Airport Road, Peelamedu, Coimbatore - 641014' },
      ],
    },

    touristAttractions: [
      { name: 'Adiyogi Shiva Statue & Isha Yoga Center', description: 'Majestic 112-foot consecrated steel statue of Lord Shiva located at the foothills of the Velliangiri Mountains.', distanceKm: 30 },
      { name: 'Marudhamalai Murugan Temple', description: 'Enchanting 12th-century hilltop temple dedicated to Lord Murugan surrounded by medicinal herbal flora.', distanceKm: 14 },
      { name: 'Siruvani Waterfalls & Dam', description: 'Breathtaking waterfall located in dense reserve forests, famed for supplying the world\'s 2nd tastiest drinking water.', distanceKm: 36 },
      { name: 'VOC Park & Zoo', description: 'Popular city center park featuring a mini-zoo, botanical gardens, train rides, and recreational areas.', distanceKm: 2 },
      { name: 'Eachanari Vinayagar Temple', description: 'Historic 16th-century temple housing a massive 6-foot monolithic granite idol of Lord Ganesha.', distanceKm: 10 },
    ],

    industries: [
      'Textile Mills & Cotton Spinning Industry Cluster',
      'Motor Pump & Foundry Manufacturing Corridor (Texmo, Suguna, Mahendra)',
      'TIDEL Park Coimbatore & ELCOT SEZ (Avinashi Road)',
      'Saravanampatti IT Park (Bosch, Cognizant, Wipro)',
      'PSG College of Technology & Educational Corridor',
      'CODISSIA Trade & Exhibition Complex',
    ],
    businessInfo:
      'Coimbatore is South India\'s premier industrial powerhouse for textiles, motor pump manufacturing, engineering foundries, and IT services. Thousands of corporate executives, industrial auditors, trade delegates attending CODISSIA expos, and software engineers require frequent 24/7 intercity taxi rides. SAMAYAS delivers executive sedans, spacious SUVs for hill road travel to Ooty/Valparai, airport pickup guarantees at Peelamedu, and corporate billing options for business travelers.',

    reviews: [
      {
        name: 'Vidyut R.',
        rating: 5,
        text: 'Booked a one-way cab from Coimbatore Airport to Ooty for a holiday trip. The driver was experienced with hill hairpins and drove smoothly. Highly satisfied!',
        route: 'Coimbatore Airport to Ooty',
      },
      {
        name: 'Senthil Nathan',
        rating: 5,
        text: 'Took an outstation taxi from Saravanampatti IT Park to Bengaluru. Driver arrived 10 minutes early and the fare was exact to the quote. Great service by SAMAYAS.',
        route: 'Coimbatore to Bengaluru',
      },
      {
        name: 'Nandhini K.',
        rating: 5,
        text: 'Booked a family cab to Isha Yoga Center Adiyogi. Clean vehicle, courteous driver, and zero hidden charges.',
        route: 'Coimbatore to Isha Yoga Center',
      },
      {
        name: 'Anand Kumar M.',
        rating: 4,
        text: 'Regularly book one-way cabs between Coimbatore and Trichy for industrial supply visits. Transparent pricing and prompt response.',
        route: 'Coimbatore to Trichy',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Coimbatore to Ooty?',
        a: 'The one-way taxi fare from Coimbatore to Ooty starts from approximately ₹2,200 for a Hatchback, ₹2,600 for a Sedan, and ₹3,600 for an SUV (Ertiga, Innova). Travel time is around 3 hours.',
      },
      {
        q: 'How far is Isha Yoga Center Adiyogi from Coimbatore Railway Station?',
        a: 'Isha Yoga Center (Adiyogi Shiva Statue) is located approximately 30 km from Coimbatore Junction Railway Station. A cab ride takes around 45–60 minutes and starts at ₹800.',
      },
      {
        q: 'Is 24/7 pickup available at Coimbatore International Airport (CJB)?',
        a: 'Yes, SAMAYAS provides 24/7 dedicated pickup and drop services at Peelamedu Airport (CJB). Our driver will be waiting at the arrival terminal before your flight lands.',
      },
      {
        q: 'Can I book a one-way cab from Coimbatore to Bengaluru?',
        a: 'Yes, we operate daily direct one-way cabs from Coimbatore to Bengaluru (365 km via Salem/Hosur) starting from ₹4,500 with zero return charges.',
      },
      {
        q: 'Which vehicles are best suited for hill trips to Ooty or Valparai?',
        a: 'For mountain terrain trips to Ooty, Coonoor, or Valparai, we recommend our comfortable Sedans (Dzire, Etios) or powerful SUVs (Ertiga, Innova Crysta) for optimum safety and comfort.',
      },
    ],

    metaTitle: 'Coimbatore One-Way Taxi | 24/7 Cab Booking | SAMAYAS',
    metaDescription:
      'Travel comfortably from Coimbatore, Tamil Nadu. Direct one-way taxi to Ooty, Mysuru, Isha Yoga Center, Chennai & Bengaluru. Available 24/7 with zero return fare.',
  },

  // ─────────────────────────────────────────────────────────
  // CUDDALORE — District 6
  // ─────────────────────────────────────────────────────────
  cuddalore: {
    heroTagline:
      'Need a one-way cab from Cuddalore? Book a 24/7 taxi with SAMAYAS. Doorstep pickups across Cuddalore, including Neyveli NLC and Chidambaram Natarajar Temple.',

    overview: `Cuddalore district, situated on the scenic Coromandel Coast of east-central Tamil Nadu, is a major coastal powerhouse renowned for its massive energy industries, ancient spiritual heritage, and vast mangrove ecosystems.

Bordered by Puducherry and Villupuram to the north, Bay of Bengal to the east, Mayiladuthurai to the south, and Perambalur, Ariyalur, and Kallakurichi to the west, Cuddalore occupies a pivotal coastal corridor. The district is home to NLC India Limited in Neyveli—one of India's largest lignite mining and thermal power generation complexes—as well as the expansive SIPCOT Chemical and Pharmaceutical Industrial Park at Kudikadu. Culturally, Cuddalore is world-celebrated for Chidambaram, home to the ancient Thillai Natarajar Temple representing the Akasha (space) element of Shiva's cosmic dance, and the Pichavaram Mangrove Forest—the second largest mangrove forest system in the world.

Transportation across Cuddalore is served by Cuddalore Port Junction (CUPJ), Thirupadripulyur (TDPR), and Chidambaram (CDM) railway stations, along with Cuddalore Central Bus Stand on ECR/NH-45A. Whether you are a power plant engineer traveling to Neyveli, a pilgrim visiting Chidambaram, or a traveler taking the coastal ECR route to Chennai or Puducherry, SAMAYAS provides reliable 24/7 one-way taxi services from Cuddalore with zero return fare charges.`,

    overviewHighlights: [
      'Energy and chemical hub housing NLC India Neyveli Lignite Township and Cuddalore SIPCOT Park',
      'Home to world-famous Chidambaram Natarajar Temple and Pichavaram Mangrove Forest boat safaris',
      '24/7 direct one-way cabs from Cuddalore to Chennai, Puducherry, Trichy, Thanjavur, and Kumbakonam'
    ],

    routes: [
      { name: 'Cuddalore to Chennai', to: 'Chennai', distanceKm: 180, timeHours: 3.75, startingFare: 2700 },
      { name: 'Cuddalore to Puducherry', to: 'Puducherry', distanceKm: 22, timeHours: 0.5, startingFare: 1950 },
      { name: 'Cuddalore to Chidambaram', to: 'Chidambaram', distanceKm: 45, timeHours: 1, startingFare: 1950 },
      { name: 'Cuddalore to Neyveli', to: 'Neyveli', distanceKm: 32, timeHours: 0.7, startingFare: 1950 },
      { name: 'Cuddalore to Trichy', to: 'Trichy', distanceKm: 185, timeHours: 3.5, startingFare: 2775 },
      { name: 'Cuddalore to Kumbakonam', to: 'Kumbakonam', distanceKm: 85, timeHours: 1.75, startingFare: 1950 },
      { name: 'Cuddalore to Salem', to: 'Salem', distanceKm: 210, timeHours: 4, startingFare: 3150 },
      { name: 'Cuddalore to Villupuram', to: 'Villupuram', distanceKm: 45, timeHours: 1, startingFare: 1950 },
      { name: 'Cuddalore to Thanjavur', to: 'Thanjavur', distanceKm: 120, timeHours: 2.5, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Chennai',     distanceKm: 180, timeHours: 3.75, hatchback: 2700, sedan: 2700, suv: 3600 },
      { to: 'Puducherry',  distanceKm: 22, timeHours: 0.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chidambaram', distanceKm: 45, timeHours: 1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Neyveli',     distanceKm: 32, timeHours: 0.7, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Trichy',      distanceKm: 185, timeHours: 3.5, hatchback: 2775, sedan: 2775, suv: 3700 },
      { to: 'Kumbakonam',  distanceKm: 85, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
    ],

    pickupLocations: [
      'Cuddalore Port Junction Railway Station (CUPJ)',
      'Thirupadripulyur Railway Station (TDPR)',
      'Cuddalore Central Bus Stand (Imperial Road)',
      'Neyveli Township (Block 1–30 / NLC Gate)',
      'Chidambaram Temple Car Street',
      'SIPCOT Kudikadu Industrial Complex',
      'Silver Beach Road',
      'Manjakuppam Signal',
      'Vadalur Vallalar Temple Road',
      'Panruti Bus Stand & Jackfruit Market',
    ],
    dropLocations: [
      'Chennai',
      'Puducherry',
      'Chidambaram',
      'Neyveli',
      'Trichy',
      'Kumbakonam',
      'Salem',
      'Villupuram',
      'Thanjavur',
    ],

    transportHubs: {
      busStands: [
        { name: 'Cuddalore Central Bus Stand', address: 'Imperial Road, Manjakuppam, Cuddalore - 607001' },
        { name: 'Chidambaram Central Bus Stand', address: 'Near Railway Station, Chidambaram - 608001' },
      ],
      railwayStations: [
        { name: 'Cuddalore Port Junction', code: 'CUPJ', address: 'Semmandalam, Cuddalore - 607003' },
        { name: 'Thirupadripulyur Station', code: 'TDPR', address: 'Subbarayalu Nagar, Cuddalore - 607002' },
        { name: 'Chidambaram Railway Station', code: 'CDM', address: 'Station Road, Chidambaram - 608001' },
      ],
      airports: [
        { name: 'Puducherry Airport (Nearest)', code: 'PNY', distanceKm: 30, address: 'Lawspet, Puducherry - 605008' },
        { name: 'Chennai International Airport', code: 'MAA', distanceKm: 170, address: 'GST Road, Meenambakkam, Chennai - 600027' },
      ],
    },

    touristAttractions: [
      { name: 'Thillai Natarajar Temple (Chidambaram)', description: 'Ancient 10th-century Chola temple representing Akasha (space), famous for the cosmic dance of Lord Nataraja.', distanceKm: 45 },
      { name: 'Pichavaram Mangrove Forest', description: 'The 2nd largest mangrove forest in the world, featuring 1,100 hectares of natural water channels for boat safaris.', distanceKm: 60 },
      { name: 'Silver Beach & Fort St. David', description: 'Pristine 2nd longest beach on the Coromandel Coast alongside historic 17th-century British fort ruins.', distanceKm: 3 },
      { name: 'Padaleeswarar Temple (Thirupapuliyur)', description: 'Historic 7th-century Paadal Petra Sthalam Shiva temple featuring sacred cannon-ball tree (Nagalingam) groves.', distanceKm: 2 },
      { name: 'Sathya Gnana Sabai (Vadalur)', description: 'Spiritual sanctuary founded in 1872 by saint Vallalar (Ramalinga Swamigal) centered on eternal universal light.', distanceKm: 28 },
    ],

    industries: [
      'NLC India Limited (Neyveli Lignite Thermal Power Plants & Open Cast Mines)',
      'SIPCOT Chemical & Pharmaceutical Industrial Complex (Kudikadu)',
      'Panruti Cashew Nut & Jackfruit Agricultural Processing Cluster',
      'Cuddalore Port Marine Logistics & Commercial Fishing Industry',
      'Sugar Mills & Ethanol Distilleries (EID Parry Nellikuppam)',
    ],
    businessInfo:
      'Cuddalore\'s economic engine is anchored by energy giant NLC India in Neyveli, EID Parry sugar mills, and the chemical/pharmaceutical SIPCOT industrial corridor at Kudikadu. Engineers, mining consultants, chemical safety auditors, and cashew export traders commute daily between Cuddalore, Chennai, Puducherry, and Trichy. SAMAYAS offers executive sedan rentals, site visit vehicle drops, zero-wait airport pickups from Puducherry/Chennai, and corporate invoicing for business travelers.',

    reviews: [
      {
        name: 'Manojkumar P.',
        rating: 5,
        text: 'Booked a one-way sedan from NLC Neyveli Township to Chennai Airport for an official trip. The SAMAYAS driver arrived on time and drove safely along GST Road.',
        route: 'Neyveli to Chennai Airport',
      },
      {
        name: 'Saraswathi Ammal',
        rating: 5,
        text: 'Traveled with family from Cuddalore to Chidambaram Natarajar Temple and Pichavaram mangroves. Very polite driver and comfortable SUV.',
        route: 'Cuddalore to Chidambaram',
      },
      {
        name: 'Kannan B.',
        rating: 5,
        text: 'Regularly book one-way cabs between Cuddalore SIPCOT and Puducherry for plant visits. Honest pricing and transparent per-km billing.',
        route: 'Cuddalore to Puducherry',
      },
      {
        name: 'Dr. Subramanian V.',
        rating: 4,
        text: 'Booked an Innova from Cuddalore to Trichy for a family function. Clean car, pleasant AC, and smooth driving throughout.',
        route: 'Cuddalore to Trichy',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Cuddalore to Chennai?',
        a: 'The one-way taxi fare from Cuddalore to Chennai via ECR or ECR-Puducherry starts at approximately ₹2,500 for a Hatchback, ₹2,900 for a Sedan (Dzire, Etios), and ₹3,900 for an SUV (Ertiga).',
      },
      {
        q: 'How far is Puducherry from Cuddalore and what is the taxi fare?',
        a: 'Puducherry is just 22 km from Cuddalore. A one-way taxi ride takes around 30 minutes and starts at ₹500 for a Hatchback or ₹650 for a Sedan.',
      },
      {
        q: 'Can I book a cab from Cuddalore directly to Chidambaram Natarajar Temple and Pichavaram?',
        a: 'Yes, SAMAYAS provides one-way and round-trip taxi packages covering Chidambaram Natarajar Temple (45 km) and Pichavaram Mangrove boat safaris (60 km).',
      },
      {
        q: 'Are taxi pickups available directly inside NLC Neyveli Township blocks?',
        a: 'Yes, SAMAYAS drivers provide 24/7 doorstep pickup directly from all NLC Neyveli township blocks, plant gates, and Neyveli railway station.',
      },
      {
        q: 'Which cars are recommended for long coastal drives along ECR from Cuddalore?',
        a: 'Our comfortable Sedans (Dzire, Amaze) and spacious 7-seater SUVs (Ertiga, Innova Crysta) are ideal for comfortable coastal drives along East Coast Road.',
      },
    ],

    metaTitle: 'Book One-Way Taxi from Cuddalore | No Return Fare | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Cuddalore? Direct one-way taxi to Puducherry, Chidambaram Natarajar Temple, Neyveli & Chennai. Reserve your cab now with SAMAYAS.',
  },

  // ─────────────────────────────────────────────────────────
  // DHARMAPURI — District 7
  // ─────────────────────────────────────────────────────────
  dharmapuri: {
    heroTagline:
      'Planning a journey from Dharmapuri? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Dharmapuri, including Hogenakkal Falls and Adhiyaman Fort.',

    overview: `Dharmapuri district, situated in northwestern Tamil Nadu at the foothills of the Eastern Ghats, is famed across South India for the breathtaking Hogenakkal Falls, its rich Sangam-era royal heritage, and its leadership in horticulture and sericulture.

Bounded by Krishnagiri to the north, Thirupathur and Tiruvannamalai to the east, Salem to the south, and the River Kaveri bordering Karnataka to the west, Dharmapuri holds immense natural beauty and commercial importance. Historically known as Tagadur, the region was ruled by the legendary Sangam king Adhiyaman Neduman Anji, renowned for his patronage of the poetess Avvaiyar. Today, Dharmapuri is Tamil Nadu's leading producer of Alphonso and Totapuri mangoes, a major silk cocoon cocoon-reeling market, and a prime stone quarrying center for high-grade black granite. The famous Hogenakkal Falls—often called the 'Niagara of India'—attracts millions of tourists annually for coracle boat rides and therapeutic herbal river baths.

Strategically traversed by National Highway NH-44 (North-South Corridor), Dharmapuri offers rapid road connectivity between Bengaluru, Hosur, Salem, and Coimbatore. SAMAYAS delivers round-the-clock 24/7 one-way cabs from Dharmapuri, Pennagaram, Harur, and Palacode to all destinations across Tamil Nadu and Karnataka with zero return fare charges.`,

    overviewHighlights: [
      'Gateway to Hogenakkal Waterfalls (Niagara of India) and historic Tagadur Adhiyaman heritage',
      'Horticulture capital famed for premium mango processing, silk cocoon markets, and black granite',
      'Direct 24/7 one-way taxi connections along NH-44 to Bengaluru, Hosur, Salem, and Chennai'
    ],

    routes: [
      { name: 'Dharmapuri to Hogenakkal', to: 'Hogenakkal', distanceKm: 46, timeHours: 1.1, startingFare: 1950 },
      { name: 'Dharmapuri to Bengaluru', to: 'Bengaluru', distanceKm: 140, timeHours: 2.75, startingFare: 2100 },
      { name: 'Dharmapuri to Salem', to: 'Salem', distanceKm: 68, timeHours: 1.25, startingFare: 1950 },
      { name: 'Dharmapuri to Hosur', to: 'Hosur', distanceKm: 90, timeHours: 1.75, startingFare: 1950 },
      { name: 'Dharmapuri to Chennai', to: 'Chennai', distanceKm: 290, timeHours: 5.25, startingFare: 4350 },
      { name: 'Dharmapuri to Coimbatore', to: 'Coimbatore', distanceKm: 230, timeHours: 4.25, startingFare: 3450 },
      { name: 'Dharmapuri to Trichy', to: 'Trichy', distanceKm: 210, timeHours: 3.75, startingFare: 3150 },
      { name: 'Dharmapuri to Krishnagiri', to: 'Krishnagiri', distanceKm: 45, timeHours: 0.8, startingFare: 1950 },
      { name: 'Dharmapuri to Tiruvannamalai', to: 'Tiruvannamalai', distanceKm: 115, timeHours: 2.5, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Hogenakkal', distanceKm: 46, timeHours: 1.1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Bengaluru',  distanceKm: 140, timeHours: 2.75, hatchback: 2100, sedan: 2100, suv: 2800 },
      { to: 'Salem',      distanceKm: 68, timeHours: 1.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Hosur',      distanceKm: 90, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chennai',    distanceKm: 290, timeHours: 5.25, hatchback: 4350, sedan: 4350, suv: 5800 },
      { to: 'Coimbatore', distanceKm: 230, timeHours: 4.25, hatchback: 3450, sedan: 3450, suv: 4600 },
    ],

    pickupLocations: [
      'Dharmapuri Railway Station (DPJ)',
      'Dharmapuri Central Bus Stand (Nethaji Bypass)',
      'Hogenakkal Bus Stand & Boat Jetty',
      'Pennagaram Bus Stand Junction',
      'Harur Bus Terminus',
      'Palacode Mango Market / Bus Stand',
      'Government Medical College Hospital Road',
      'Collectorate Complex / Salem Bypass',
      'Nallampalli NH-44 Toll Plaza',
      'Gundalapatti Junction',
    ],
    dropLocations: [
      'Hogenakkal',
      'Bengaluru',
      'Salem',
      'Hosur',
      'Chennai',
      'Coimbatore',
      'Trichy',
      'Krishnagiri',
      'Tiruvannamalai',
    ],

    transportHubs: {
      busStands: [
        { name: 'Dharmapuri Central Bus Stand', address: 'Nethaji Bypass Road, Dharmapuri - 636701' },
        { name: 'Pennagaram Bus Stand', address: 'Main Road, Pennagaram - 636810' },
        { name: 'Harur Bus Terminus', address: 'Bye Pass Road, Harur - 636903' },
      ],
      railwayStations: [
        { name: 'Dharmapuri Railway Station', code: 'DPJ', address: 'Station Road, Dharmapuri - 636701' },
        { name: 'Palacode Railway Station', code: 'PCV', address: 'Palacode, Dharmapuri District - 636808' },
      ],
      airports: [
        { name: 'Salem Airport (Nearest Domestic)', code: 'SXV', distanceKm: 55, address: 'Kamalapuram, Salem - 636309' },
        { name: 'Bengaluru Kempegowda International Airport', code: 'BLR', distanceKm: 175, address: 'Devanahalli, Bengaluru - 560300' },
      ],
    },

    touristAttractions: [
      { name: 'Hogenakkal Waterfalls', description: 'Spectacular series of waterfalls on River Kaveri with circular coracle boat rides and carbonatite rock formations.', distanceKm: 46 },
      { name: 'Adhiyaman Kottai & Chenraya Perumal Temple', description: 'Oval-shaped historic fort ruins and 16th-century Krishna temple built by Sangam King Adhiyaman.', distanceKm: 9 },
      { name: 'Theerthamalai Sri Theerthagirishwarar Temple', description: 'Scenic hilltop Shiva temple in Harur featuring five sacred natural springs falling from rock cliffs.', distanceKm: 55 },
      { name: 'Subramanya Siva Memorial (Pappanapatti)', description: 'National memorial museum honoring freedom fighter and close associate of Subramania Bharati.', distanceKm: 12 },
      { name: 'Vathalmalai Hill Station', description: 'Unspoiled hill station at 4,000 feet altitude offering pleasant climate, coffee estates, and panoramic valley views.', distanceKm: 25 },
    ],

    industries: [
      'Mango Pulping & Fruit Processing Industry Cluster (Palacode / Pennagaram)',
      'Silk Cocoon Reeling & Sericulture Trade Market',
      'Black Granite Mining & Export Polishing Units',
      'Agriculture & Floriculture Produce Distribution',
      'Precision Machinery & Auto Ancillary Workshops',
    ],
    businessInfo:
      'Dharmapuri\'s economy is powered by its vast horticultural wealth, leading India in mango processing and silk cocoon reeling alongside black granite extraction. Agricultural merchants, granite exporters, industrial auditors, and tourists visiting Hogenakkal Falls rely heavily on intercity road transport. SAMAYAS delivers comfortable outstation cabs, sight-seeing day trip rentals for Hogenakkal, fast airport transfers to Bengaluru BLR Airport, and zero-return fare One-Way rentals across NH-44.',

    reviews: [
      {
        name: 'Gowtham S.',
        rating: 5,
        text: 'Booked a one-way cab from Dharmapuri to Bengaluru Electronic City. Driver arrived 10 minutes early and took NH-44 smoothly. Fare was exact to the online quote!',
        route: 'Dharmapuri to Bengaluru',
      },
      {
        name: 'Revathi Murugan',
        rating: 5,
        text: 'Took a family weekend trip to Hogenakkal Falls with SAMAYAS. The driver waited patiently during our coracle ride and dropped us safely back at Salem.',
        route: 'Dharmapuri to Hogenakkal',
      },
      {
        name: 'Prakash Rajan',
        rating: 5,
        text: 'Regularly book cabs for granite export business trips from Dharmapuri to Chennai. Transparent pricing and clean Sedans every time.',
        route: 'Dharmapuri to Chennai',
      },
      {
        name: 'Kavitha N.',
        rating: 4,
        text: 'Booked an Ertiga SUV for family temple trip to Tiruvannamalai. Courteous driver, good AC, and zero return charges.',
        route: 'Dharmapuri to Tiruvannamalai',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Dharmapuri to Bengaluru?',
        a: 'The one-way taxi fare from Dharmapuri to Bengaluru starts at approximately ₹2,100 for a Hatchback, ₹2,450 for a Sedan (Dzire, Etios), and ₹3,400 for an SUV (Ertiga). Travel time is around 2.75 hours.',
      },
      {
        q: 'How far is Hogenakkal Falls from Dharmapuri town and what is the cab charge?',
        a: 'Hogenakkal Falls is approximately 46 km from Dharmapuri town. A one-way taxi ride takes about 1 hour 10 minutes and costs starting from ₹850.',
      },
      {
        q: 'Can I book a cab from Dharmapuri directly to Kempegowda Airport (BLR)?',
        a: 'Yes, SAMAYAS provides direct 24/7 airport transfer cabs from Dharmapuri directly to Bengaluru Kempegowda International Airport (BLR - 175 km) via Hosur bypass.',
      },
      {
        q: 'Are taxi pickups available in Pennagaram, Harur, and Palacode?',
        a: 'Yes, SAMAYAS operates 24/7 pickups across all taluks in Dharmapuri district including Pennagaram, Harur, Palacode, Pappireddipatti, and Nallampalli.',
      },
      {
        q: 'Which vehicles are best for family trips to Hogenakkal Falls?',
        a: 'We recommend our spacious 7-seater SUVs (Ertiga, Innova Crysta) for family trips to Hogenakkal to comfortably store extra clothes and luggage after boat rides.',
      },
    ],

    metaTitle: 'Dharmapuri Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Need a cab for your trip from Dharmapuri? Direct one-way taxi to Hogenakkal Falls, Bengaluru, Salem & Hosur. Transparent per-km rates with zero return fee.',
  },

  // ─────────────────────────────────────────────────────────
  // DINDIGUL — District 8
  // ─────────────────────────────────────────────────────────
  dindigul: {
    heroTagline:
      'Heading out from Dindigul? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Dindigul, including Dindigul Rock Fort, Palani Temple, and Kodaikanal foothills.',

    overview: `Dindigul district, strategically positioned in south-central Tamil Nadu between the Sirumalai and Palani hill ranges, is internationally renowned for its 17th-century Rock Fort, GI-tagged lock craftsmanship, world-famous biryani culinary heritage, and as the gateway to Kodaikanal.

Bounded by Tiruppur and Karur to the north, Trichy to the east, Madurai and Theni to the south, and Kerala state to the west, Dindigul occupies a pivotal position in Tamil Nadu's transit network. The city's history revolves around the majestic Dindigul Rock Fort—a 280-foot natural granite hill fortress built by the Madurai Nayaks and later fortified by Hyder Ali and Tipu Sultan. Dindigul is also home to Palani, one of the sacred Arupadai Veedu (six abodes) of Lord Murugan, and Oddanchatram, host to South India's largest wholesale vegetable export market. Above all, Dindigul serves as the principal starting point for travelers ascending to Kodaikanal—the 'Princess of Hill Stations'.

Transportation in Dindigul is anchored by Dindigul Railway Junction (DG), Kodaikanal Road Station (KQN), and Dindigul Central Bus Stand, connected seamlessly via NH-44 and NH-83. Whether you are traveling uphill to Kodaikanal, visiting Palani Murugan Temple, or commuting for business in leather tanneries and lock manufacturing units, SAMAYAS offers reliable 24/7 one-way cabs from Dindigul with zero return fare charges.`,

    overviewHighlights: [
      'Historic Rock Fort city and primary gateway to Kodaikanal hill station and Palani Murugan Temple',
      'Industrial hub famed for GI-tagged Dindigul locks, leather tanneries, and Oddanchatram market',
      'Direct 24/7 one-way taxi transfers from Dindigul Junction to Kodaikanal, Madurai, Trichy, and Chennai'
    ],

    routes: [
      { name: 'Dindigul to Kodaikanal', to: 'Kodaikanal', distanceKm: 95, timeHours: 3, startingFare: 1950 },
      { name: 'Dindigul to Palani', to: 'Palani', distanceKm: 60, timeHours: 1.2, startingFare: 1950 },
      { name: 'Dindigul to Madurai', to: 'Madurai', distanceKm: 65, timeHours: 1.25, startingFare: 1950 },
      { name: 'Dindigul to Trichy', to: 'Trichy', distanceKm: 95, timeHours: 1.75, startingFare: 1950 },
      { name: 'Dindigul to Chennai', to: 'Chennai', distanceKm: 420, timeHours: 7, startingFare: 6300 },
      { name: 'Dindigul to Coimbatore', to: 'Coimbatore', distanceKm: 155, timeHours: 3.25, startingFare: 2325 },
      { name: 'Dindigul to Salem', to: 'Salem', distanceKm: 170, timeHours: 3.25, startingFare: 2550 },
      { name: 'Dindigul to Karur', to: 'Karur', distanceKm: 75, timeHours: 1.5, startingFare: 1950 },
      { name: 'Dindigul to Theni', to: 'Theni', distanceKm: 75, timeHours: 1.5, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Kodaikanal', distanceKm: 95, timeHours: 3, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Palani',     distanceKm: 60, timeHours: 1.2, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Madurai',    distanceKm: 65, timeHours: 1.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Trichy',     distanceKm: 95, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chennai',    distanceKm: 420, timeHours: 7, hatchback: 6300, sedan: 6300, suv: 8400 },
      { to: 'Coimbatore', distanceKm: 155, timeHours: 3.25, hatchback: 2325, sedan: 2325, suv: 3100 },
    ],

    pickupLocations: [
      'Dindigul Junction Railway Station (DG)',
      'Dindigul Central Bus Stand (Dudley School Rd)',
      'Kodaikanal Road Railway Station (KQN)',
      'Palani Bus Stand & Temple Foothills',
      'Oddanchatram Vegetable Market',
      'Batlagundu Bypass Junction',
      'Begambur Mosque Area',
      'GTN Arts College Road',
      'Dindigul Rock Fort Entrance',
      'Chennamanayakanpatti / Madurai Road',
    ],
    dropLocations: [
      'Kodaikanal',
      'Palani',
      'Madurai',
      'Trichy',
      'Chennai',
      'Coimbatore',
      'Salem',
      'Karur',
      'Theni',
    ],

    transportHubs: {
      busStands: [
        { name: 'Dindigul Central Bus Stand', address: 'Dudley School Road, Dindigul - 624001' },
        { name: 'Palani Bus Terminus', address: 'Bus Stand Road, Palani - 624601' },
        { name: 'Batlagundu Bus Stand', address: 'Dindigul Road, Batlagundu - 624202' },
      ],
      railwayStations: [
        { name: 'Dindigul Junction Railway Station', code: 'DG', address: 'Railway Station Road, Dindigul - 624001' },
        { name: 'Kodaikanal Road Station', code: 'KQN', address: 'Ammainaickanur, Dindigul District - 624201' },
        { name: 'Palani Railway Station', code: 'PLNI', address: 'Station Road, Palani - 624601' },
      ],
      airports: [
        { name: 'Madurai Airport (Nearest International)', code: 'IXM', distanceKm: 80, address: 'Airport Road, Madurai - 625022' },
        { name: 'Tiruchirappalli International Airport', code: 'TRZ', distanceKm: 100, address: 'Airport Road, Tiruchirappalli - 620007' },
      ],
    },

    touristAttractions: [
      { name: 'Kodaikanal Hill Station & Lake', description: 'Picturesque star-shaped artificial lake, Coaker\'s Walk, and Pillar Rocks in the misty Palani Hills.', distanceKm: 95 },
      { name: 'Palani Arulmigu Dhandayuthapani Swamy Temple', description: 'One of the sacred Arupadai Veedu of Lord Murugan atop Sivagiri Hill, accessible by ropeway and winch.', distanceKm: 60 },
      { name: 'Dindigul Rock Fort', description: '17th-century rock-cut fort built by Madurai Nayaks and fortified by Hyder Ali and Tipu Sultan atop a 280-ft rock.', distanceKm: 2 },
      { name: 'Sirumalai Hill Station', description: 'Scenic, peaceful hill range famous for its unique Sirumalai hill bananas, dense forest cover, and fresh air.', distanceKm: 25 },
      { name: 'Athoor Kamarajar Dam', description: 'Serene eco-tourism reservoir nestled at the base of the Western Ghats, popular for nature walks and birding.', distanceKm: 22 },
    ],

    industries: [
      'GI-Tagged Dindigul Handcrafted Lock & Brassware Industry',
      'Leather Tanning & Export Processing Cluster',
      'Oddanchatram Wholesale Agricultural & Vegetable Export Market',
      'Cotton Textile & Yarn Spinning Mills',
      'Culinary & Hospitality Sector (Famous Dindigul Thalappakatti & Venu Biryani hubs)',
    ],
    businessInfo:
      'Dindigul is a major commercial node famous for its lock manufacturing, leather tanneries, and Oddanchatram agricultural export hub. Thousands of business executives, leather traders, and hill station vacationers ascending to Kodaikanal rely heavily on intercity road travel. SAMAYAS provides executive sedan rentals, experienced hill drivers for Kodaikanal ghat roads, airport transfers to Madurai/Trichy airports, and zero-return fare One-Way cabs from Dindigul.',

    reviews: [
      {
        name: 'Murugesh K.',
        rating: 5,
        text: 'Booked a sedan from Dindigul Junction to Kodaikanal Lake for a honeymoon trip. Driver was an expert on ghat roads and drove very safely. Highly recommended!',
        route: 'Dindigul to Kodaikanal',
      },
      {
        name: 'Sridevi Balan',
        rating: 5,
        text: 'Took a family cab from Dindigul to Palani temple. The driver dropped us right at the ropeway station and picked us back on time.',
        route: 'Dindigul to Palani',
      },
      {
        name: 'Venkatesan T.',
        rating: 5,
        text: 'Regularly book one-way cabs from Dindigul lock industrial area to Chennai for trade visits. Transparent pricing and clean cars.',
        route: 'Dindigul to Chennai',
      },
      {
        name: 'Dr. Joseph R.',
        rating: 4,
        text: 'Used SAMAYAS cab service from Dindigul to Madurai Airport for a flight. Prompt morning pickup and zero return charges.',
        route: 'Dindigul to Madurai Airport',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Dindigul to Kodaikanal?',
        a: 'The one-way taxi fare from Dindigul to Kodaikanal starts at approximately ₹2,400 for a Hatchback, ₹2,800 for a Sedan (Dzire, Etios), and ₹3,800 for an SUV (Ertiga, Innova). Travel time is around 3 hours.',
      },
      {
        q: 'How far is Palani Murugan Temple from Dindigul and what is the cab fare?',
        a: 'Palani Murugan Temple is approximately 60 km from Dindigul city. A one-way cab ride takes about 1 hour 15 minutes and starts at ₹1,100.',
      },
      {
        q: 'Can I book a cab from Kodaikanal Road Railway Station (KQN) up to Kodaikanal hill station?',
        a: 'Yes, SAMAYAS provides dedicated hill pickup cabs directly from Kodaikanal Road Station (KQN) to Kodaikanal hotels and resorts.',
      },
      {
        q: 'Are drivers experienced with hill driving on Kodaikanal ghat roads?',
        a: 'Absolutely. All SAMAYAS drivers assigned to Kodaikanal, Sirumalai, or Ooty routes are specially trained and highly experienced in mountain hairpins and fog driving.',
      },
      {
        q: 'Which vehicles are recommended for family hill trips to Kodaikanal?',
        a: 'We recommend our spacious SUVs (Ertiga, Innova Crysta) for family hill trips to comfortably navigate incline curves with luggage.',
      },
    ],

    metaTitle: 'One-Way Cab from Dindigul | Book Online 24/7 | SAMAYAS',
    metaDescription:
      'Travel comfortably from Dindigul, Tamil Nadu. Direct one-way taxi to Kodaikanal, Palani, Madurai & Trichy. Experienced hill drivers available. Book online today.',
  },

  // ─────────────────────────────────────────────────────────
  // ERODE — District 9
  // ─────────────────────────────────────────────────────────
  erode: {
    heroTagline:
      'Traveling from Erode? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Erode, including Texvalley markets, Railway Junction, and Bhavani.',

    overview: `Erode district, situated along the northern banks of the River Kaveri in western Tamil Nadu, is globally acclaimed as the 'Turmeric City' and 'Loom City' of South India.

Bounded by Salem, Namakkal, and Karur to the east, Tiruppur and Coimbatore to the south and west, the Nilgiris to the northwest, and Karnataka state to the north, Erode holds an immense commercial footprint. The city hosts one of Asia's largest turmeric auction centers alongside Texvalley—a massive B2B textile trade market—and the Perundurai SIPCOT Industrial Complex housing textile dyeing, leather tanning, and food processing industries. Spiritually, Erode is celebrated for Bhavani Kooduthurai (Sangameswarar Temple), sacred Triveni Sangam of the South where the Kaveri, Bhavani, and subterranean Amudha rivers converge. The district also houses the colossal Bhavanisagar Dam—one of the largest earthen dams in the world—and the Sathyamangalam Tiger Reserve.

Transportation in Erode is anchored by Erode Junction (ED)—a major A1-category railway junction on the Salem-Coimbatore trunk line—and Erode Central Bus Stand. Whether you are a textile buyer visiting Texvalley, a merchant attending turmeric auctions, or a traveler taking an outstation trip to Ooty, Coimbatore, or Bengaluru, SAMAYAS provides reliable 24/7 one-way cabs from Erode with zero return fare charges.`,

    overviewHighlights: [
      'Turmeric City & Textile Capital hosting Asia\'s largest turmeric auctions and Texvalley market',
      'Home to Bhavani Sangameswarar Kooduthurai temple, Bhavanisagar Dam, and Sathyamangalam Tiger Reserve',
      '24/7 direct one-way taxi connections from Erode Junction to Coimbatore, Salem, Tiruppur, and Bengaluru'
    ],

    routes: [
      { name: 'Erode to Coimbatore', to: 'Coimbatore', distanceKm: 100, timeHours: 2, startingFare: 1950 },
      { name: 'Erode to Salem', to: 'Salem', distanceKm: 65, timeHours: 1.25, startingFare: 1950 },
      { name: 'Erode to Tiruppur', to: 'Tiruppur', distanceKm: 50, timeHours: 1, startingFare: 1950 },
      { name: 'Erode to Chennai', to: 'Chennai', distanceKm: 400, timeHours: 6.75, startingFare: 6000 },
      { name: 'Erode to Bengaluru', to: 'Bengaluru', distanceKm: 285, timeHours: 5.25, startingFare: 4275 },
      { name: 'Erode to Ooty', to: 'Ooty', distanceKm: 140, timeHours: 4, startingFare: 2100 },
      { name: 'Erode to Trichy', to: 'Trichy', distanceKm: 150, timeHours: 3, startingFare: 2250 },
      { name: 'Erode to Madurai', to: 'Madurai', distanceKm: 195, timeHours: 3.75, startingFare: 2925 },
      { name: 'Erode to Karur', to: 'Karur', distanceKm: 65, timeHours: 1.25, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Coimbatore', distanceKm: 100, timeHours: 2, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Salem',      distanceKm: 65, timeHours: 1.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Tiruppur',   distanceKm: 50, timeHours: 1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chennai',    distanceKm: 400, timeHours: 6.75, hatchback: 6000, sedan: 6000, suv: 8000 },
      { to: 'Bengaluru',  distanceKm: 285, timeHours: 5.25, hatchback: 4275, sedan: 4275, suv: 5700 },
      { to: 'Ooty',       distanceKm: 140, timeHours: 4, hatchback: 2100, sedan: 2100, suv: 2800 },
    ],

    pickupLocations: [
      'Erode Junction Railway Station (ED)',
      'Erode Central Bus Stand (Mettur Road)',
      'Texvalley B2B Textile Market (Gangapuram)',
      'Perundurai SIPCOT Industrial Estate',
      'Bhavani Sangameswarar Temple Gate',
      'Chithode Bypass Junction',
      'Gobichettipalayam Bus Stand',
      'Sathyamangalam Bus Terminus',
      'Solar Integrated Bus Stand Area',
      'Perundurai Road / Collectorate',
    ],
    dropLocations: [
      'Coimbatore',
      'Salem',
      'Tiruppur',
      'Chennai',
      'Bengaluru',
      'Ooty',
      'Trichy',
      'Madurai',
      'Karur',
    ],

    transportHubs: {
      busStands: [
        { name: 'Erode Central Bus Stand', address: 'Mettur Road, Erode - 638011' },
        { name: 'Solar Integrated Bus Terminus', address: 'Karur Bye-pass Road, Solar, Erode - 638002' },
        { name: 'Gobichettipalayam Bus Stand', address: 'Main Road, Gobichettipalayam - 638452' },
      ],
      railwayStations: [
        { name: 'Erode Junction Railway Station', code: 'ED', address: 'Railway Station Road, Erode - 638002' },
        { name: 'Perundurai Railway Station', code: 'PY', address: 'Perundurai, Erode District - 638052' },
      ],
      airports: [
        { name: 'Coimbatore International Airport (Nearest)', code: 'CJB', distanceKm: 85, address: 'Airport Road, Peelamedu, Coimbatore - 641014' },
        { name: 'Salem Airport', code: 'SXV', distanceKm: 70, address: 'Kamalapuram, Salem - 636309' },
      ],
    },

    touristAttractions: [
      { name: 'Bhavani Sangameswarar Temple (Kooduthurai)', description: 'Sacred Triveni Sangam where rivers Kaveri, Bhavani, and subterranean Amudha meet; renowned pilgrimage site.', distanceKm: 12 },
      { name: 'Bhavanisagar Dam & Park', description: 'Colossal earthen dam constructed across the Bhavani River featuring manicured gardens, children\'s park, and boating.', distanceKm: 80 },
      { name: 'Chennimalai Murugan Temple', description: 'Famous hilltop shrine dedicated to Lord Murugan, accessible by 1,320 steps or ghat road, renowned for weaver heritage.', distanceKm: 28 },
      { name: 'Kodiveri Dam & Waterfalls', description: 'Picturesque 17th-century masonry dam built across Bhavani River featuring cascading waterfalls and coracle rides.', distanceKm: 55 },
      { name: 'Sathyamangalam Tiger Reserve', description: 'Vast protected forest reserve in the Western Ghats connecting Nilgiris and Eastern Ghats, rich in wildlife.', distanceKm: 65 },
    ],

    industries: [
      'Global Turmeric Auction Market & Processing Hub',
      'Texvalley B2B Textile & Garment Market (Gangapuram)',
      'Perundurai SIPCOT Industrial Complex (Textile Dyeing, Leather Tanning)',
      'Powerloom & Handloom Weaving Industry Clusters',
      'Sugar Mills & Agricultural Commodity Markets',
    ],
    businessInfo:
      'Erode is a commercial colossus in western Tamil Nadu, powering South India\'s textile trade and global turmeric supply chains. Hundreds of textile buyers visiting Texvalley, turmeric traders at auction centers, and plant managers at Perundurai SIPCOT commute daily to Coimbatore, Salem, and Bengaluru. SAMAYAS delivers executive sedans, spacious outstation cabs, Coimbatore Airport pickup guarantees, and corporate billing options for business travelers.',

    reviews: [
      {
        name: 'Dhandapani P.',
        rating: 5,
        text: 'Booked a one-way cab from Texvalley Erode to Coimbatore Airport for a business flight. Driver was prompt, vehicle was spotless, and fare was fair.',
        route: 'Erode to Coimbatore Airport',
      },
      {
        name: 'Bhuvaneswari K.',
        rating: 5,
        text: 'Took a family weekend cab from Erode to Bhavani Kooduthurai temple and Kodiveri Dam. Driver was courteous and drove safely.',
        route: 'Erode to Bhavani Temple',
      },
      {
        name: 'Pradeep Chandran',
        rating: 5,
        text: 'Regularly use SAMAYAS for textile business trips between Erode and Bengaluru. Honest billing and zero return charges.',
        route: 'Erode to Bengaluru',
      },
      {
        name: 'Gokulnath M.',
        rating: 4,
        text: 'Booked an Ertiga cab for a family trip from Erode to Ooty. Great driver who navigated hill roads comfortably.',
        route: 'Erode to Ooty',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Erode to Coimbatore Airport?',
        a: 'The one-way taxi fare from Erode to Coimbatore International Airport (CJB - 85 km) starts at approximately ₹1,400 for a Hatchback, ₹1,650 for a Sedan, and ₹2,300 for an SUV.',
      },
      {
        q: 'How far is Bhavani Sangameswarar Temple from Erode Railway Station?',
        a: 'Bhavani Kooduthurai (Sangameswarar Temple) is approximately 12 km from Erode Junction. A one-way taxi ride takes around 20 minutes and costs starting from ₹350.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Texvalley and Perundurai SIPCOT?',
        a: 'Yes, SAMAYAS drivers provide round-the-clock doorstep pickup from Texvalley B2B market, Perundurai SIPCOT complex, Chithode, and all surrounding industrial townships.',
      },
      {
        q: 'Can I book a one-way cab from Erode to Bengaluru?',
        a: 'Yes, we operate daily direct one-way cabs from Erode to Bengaluru (285 km via Salem/Hosur) starting from ₹3,600 with zero return fare charges.',
      },
      {
        q: 'Which vehicles are recommended for trips from Erode to Ooty hill station?',
        a: 'For hill trips to Ooty via Mettupalayam or Kotagiri, we recommend our comfortable Sedans (Dzire, Etios) or spacious 7-seater SUVs (Ertiga, Innova Crysta).',
      },
    ],

    metaTitle: 'Erode One-Way Taxi | 24/7 Cab Booking | SAMAYAS',
    metaDescription:
      'Book a taxi for your next trip from Erode, Tamil Nadu. Direct one-way taxi to Coimbatore, Salem, Tiruppur, Ooty & Bengaluru. Instant booking confirmation.',
  },

  // ─────────────────────────────────────────────────────────
  // KALLAKURICHI — District 10
  // ─────────────────────────────────────────────────────────
  kallakurichi: {
    heroTagline:
      'Looking for a reliable cab from Kallakurichi? Book a 24/7 one-way taxi with SAMAYAS. Known for its sugar industry, rice processing clusters, and Kalvarayan Hills eco-tourism.',

    overview: `Kallakurichi district, strategically located at the foothills of the Kalvarayan Hills along the Ulundurpet NH-79 & NH-45 expressway interchange in north-central Tamil Nadu, is known for its sugar industry, rice processing clusters, and emerging eco-tourism.

Carved out of Viluppuram district in 2019, Kallakurichi is powered by sugar processing facilities including Kallakurichi Cooperative Sugar Mills and Kothari Sugars, alongside hundreds of modern rice processing plants. Geographically, Kallakurichi is blessed with the pristine Kalvarayan Hills—part of the Eastern Ghats—home to breathtaking Periyar Waterfalls (Vellimalai), Megam Falls, Gomukhi Dam reservoir, and tribal heritage.

Kallakurichi occupies an indispensable transport position anchored by Ulundurpet—where National Highways NH-45 (Chennai-Trichy) and NH-79 (Salem-Chennai expressway) meet—as well as Chinnasalem Railway Station (CS). Whether you are a sugar industry professional, an agricultural merchant, or a traveler exploring Kalvarayan Hills, SAMAYAS provides reliable 24/7 one-way cabs from Kallakurichi with zero return fare charges.`,

    overviewHighlights: [
      'Sugar Capital of Tamil Nadu home to top cooperative sugar mills and rice processing clusters',
      'Gateway to Kalvarayan Hills eco-tourism, Periyar Waterfalls, and Gomukhi Dam reservoir',
      '24/7 direct one-way taxi transfers via Ulundurpet NH-79/NH-45 junction to Chennai, Salem & Trichy'
    ],

    routes: [
      { name: 'Kallakurichi to Chennai', to: 'Chennai', distanceKm: 240, timeHours: 4.25, startingFare: 3600 },
      { name: 'Kallakurichi to Salem', to: 'Salem', distanceKm: 75, timeHours: 1.3, startingFare: 1950 },
      { name: 'Kallakurichi to Trichy', to: 'Trichy', distanceKm: 135, timeHours: 2.5, startingFare: 2025 },
      { name: 'Kallakurichi to Puducherry', to: 'Puducherry', distanceKm: 110, timeHours: 2.25, startingFare: 1950 },
      { name: 'Kallakurichi to Tiruvannamalai', to: 'Tiruvannamalai', distanceKm: 60, timeHours: 1.2, startingFare: 1950 },
      { name: 'Kallakurichi to Cuddalore', to: 'Cuddalore', distanceKm: 100, timeHours: 2, startingFare: 1950 },
      { name: 'Kallakurichi to Kalvarayan Hills', to: 'Kalvarayan Hills', distanceKm: 45, timeHours: 1.25, startingFare: 1950 },
      { name: 'Kallakurichi to Villupuram', to: 'Villupuram', distanceKm: 70, timeHours: 1.25, startingFare: 1950 },
      { name: 'Kallakurichi to Bengaluru', to: 'Bengaluru', distanceKm: 230, timeHours: 4.5, startingFare: 3450 },
    ],

    fareTable: [
      { to: 'Chennai',        distanceKm: 240, timeHours: 4.25, hatchback: 3600, sedan: 3600, suv: 4800 },
      { to: 'Salem',          distanceKm: 75, timeHours: 1.3, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Trichy',         distanceKm: 135, timeHours: 2.5, hatchback: 2025, sedan: 2025, suv: 2700 },
      { to: 'Puducherry',     distanceKm: 110, timeHours: 2.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Tiruvannamalai', distanceKm: 60, timeHours: 1.2, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Kalvarayan Hills', distanceKm: 45, timeHours: 1.25, hatchback: 1950, sedan: 1950, suv: 2600 },
    ],

    pickupLocations: [
      'Kallakurichi Central Bus Stand (Kachirapalayam Rd)',
      'Chinnasalem Railway Station (CS)',
      'Ulundurpet Bypass Junction (NH-79 / NH-45)',
      'Salem Main Road / Collectorate Complex',
      'Gomukhi Dam Junction',
      'Sankarapuram Bus Stand',
      'Thirukoilur Temple Gate',
      'Kallakurichi Cooperative Sugar Mill Gate',
      'Kallakurichi Government Medical College',
      'Kachirapalayam Bus Stop',
    ],
    dropLocations: [
      'Chennai',
      'Salem',
      'Trichy',
      'Puducherry',
      'Tiruvannamalai',
      'Cuddalore',
      'Kalvarayan Hills',
      'Villupuram',
      'Bengaluru',
    ],

    transportHubs: {
      busStands: [
        { name: 'Kallakurichi Central Bus Stand', address: 'Kachirapalayam Road, Kallakurichi - 606202' },
        { name: 'Ulundurpet Bus Stand', address: 'GST Road, Ulundurpet - 606107' },
        { name: 'Sankarapuram Bus Stand', address: 'Main Road, Sankarapuram - 606401' },
      ],
      railwayStations: [
        { name: 'Chinnasalem Railway Station', code: 'CS', address: 'Station Road, Chinnasalem - 606201' },
        { name: 'Ulundurpet Railway Station', code: 'ULT', address: 'Ulundurpet, Kallakurichi District - 606107' },
      ],
      airports: [
        { name: 'Salem Domestic Airport (Nearest)', code: 'SXV', distanceKm: 85, address: 'Kamalapuram, Salem - 636309' },
        { name: 'Chennai International Airport', code: 'MAA', distanceKm: 220, address: 'GST Road, Meenambakkam, Chennai - 600027' },
      ],
    },

    touristAttractions: [
      { name: 'Kalvarayan Hills & Periyar Waterfalls (Vellimalai)', description: 'Scenic eco-tourism hill range featuring Periyar and Megam waterfalls near Vellimalai, tribal hamlets, and pristine forests.', distanceKm: 45 },
      { name: 'Gomukhi Dam', description: 'Picturesque irrigation reservoir constructed at the base of Kalvarayan Hills, popular for family picnics and boating.', distanceKm: 16 },
      { name: 'Thirukoilur Ulagalantha Perumal Temple', description: 'Historic Chola temple featuring a giant 35-foot deity of Lord Vamana, counted among the 108 Divya Desams.', distanceKm: 38 },
      { name: 'Megam Waterfalls', description: 'Hidden natural waterfall cascading over granite rocks deep inside Kalvarayan reserve forest.', distanceKm: 50 },
      { name: 'Ulundurpet Sri Sharadambal Temple', description: 'Spiritual temple complex located near the Ulundurpet highway interchange, renowned for peaceful architecture.', distanceKm: 35 },
    ],

    industries: [
      'Sugar Manufacturing Industry (Kallakurichi Cooperative & Kothari Sugars)',
      'Modern Rice Mills & Paddy Processing Clusters',
      'Agricultural Produce Markets (Sugarcane, Tapioca, Groundnut)',
      'Granite Quarrying & Stone Processing Units',
      'NH-79 & NH-45 Highway Logistics & Automobile Workshops',
    ],
    businessInfo:
      'Kallakurichi\'s economy is powered by sugarcane cultivation, sugar refining, and paddy processing. Mill executives, agricultural commodity traders, granite quarry owners, and highway commuters along the Salem-Chennai NH-79 corridor travel daily between Kallakurichi, Salem, Chennai, and Trichy. SAMAYAS delivers comfortable sedans, spacious SUVs for hill road travel to Kalvarayan Hills, prompt airport drops, and corporate billing options for business travelers.',

    reviews: [
      {
        name: 'Elangovan R.',
        rating: 5,
        text: 'Booked a one-way cab from Kallakurichi Sugar Mill to Salem for an official meeting. The driver arrived on time and took NH-79 smoothly. Very happy with SAMAYAS.',
        route: 'Kallakurichi to Salem',
      },
      {
        name: 'Suganya M.',
        rating: 5,
        text: 'Took a weekend trip with family to Kalvarayan Hills and Gomukhi Dam. The driver navigated hill bends safely and was very courteous.',
        route: 'Kallakurichi to Kalvarayan Hills',
      },
      {
        name: 'Venkatesh Babu',
        rating: 5,
        text: 'Regularly book one-way taxis from Ulundurpet junction to Chennai. Transparent per-km rates and zero return fare.',
        route: 'Ulundurpet to Chennai',
      },
      {
        name: 'Dr. Ramesh Kumar',
        rating: 4,
        text: 'Used SAMAYAS cab from Chinnasalem to Trichy Airport. Clean car, pleasant driving, and exact fare as quoted.',
        route: 'Chinnasalem to Trichy Airport',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Kallakurichi to Chennai?',
        a: 'The one-way taxi fare from Kallakurichi to Chennai via GST Road starts at approximately ₹3,000 for a Hatchback, ₹3,400 for a Sedan (Dzire, Etios), and ₹4,600 for an SUV (Ertiga).',
      },
      {
        q: 'How far is Kalvarayan Hills from Kallakurichi town and what is the cab charge?',
        a: 'Kalvarayan Hills is approximately 45 km from Kallakurichi town. A one-way cab ride takes about 1 hour 15 minutes and costs starting from ₹900.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Ulundurpet Bypass Junction?',
        a: 'Yes, SAMAYAS provides 24/7 round-the-clock pickups at Ulundurpet NH-79/NH-45 highway junction, Chinnasalem, and all towns across Kallakurichi district.',
      },
      {
        q: 'Can I book a one-way cab from Kallakurichi to Salem?',
        a: 'Yes, we operate daily direct one-way cabs from Kallakurichi to Salem (75 km via NH-79 expressway) starting from ₹1,150 with zero return charges.',
      },
      {
        q: 'Which vehicles are recommended for family trips to Kalvarayan Hills waterfalls?',
        a: 'We recommend our spacious SUVs (Ertiga, Innova Crysta) or comfortable Sedans (Dzire, Etios) for family eco-tours to Kalvarayan Hills.',
      },
    ],

    metaTitle: 'Book One-Way Taxi from Kallakurichi | No Return Fare | SAMAYAS',
    metaDescription:
      'Travel comfortably from Kallakurichi, Tamil Nadu. Direct one-way taxi to Kalvarayan Hills, Salem, Chennai, Trichy & Puducherry. Available 24/7 with zero return fare.',
  },

  // ─────────────────────────────────────────────────────────
  // KANCHIPURAM — District 11
  // ─────────────────────────────────────────────────────────
  kanchipuram: {
    heroTagline:
      'Planning a trip from Silk City Kanchipuram? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Kanchipuram, including Kamakshi Temple and Sriperumbudur SEZ.',

    overview: `Kanchipuram district, situated in northeastern Tamil Nadu just 70 km southwest of Chennai, is globally revered as the 'Silk City of India' and the sacred 'City of Thousand Temples'.

Bounded by Tiruvallur to the north, Chengalpattu to the east, Ranipet to the west, and Tiruvannamalai to the south, Kanchipuram is one of the seven Moksha Puri (salvation) cities in Hinduism and the historic capital of the Pallava Dynasty. Spiritually, the city houses iconic monuments including Kamakshi Amman Temple (a premier Shakti Peetha), Ekambareswarar Temple (representing the Prithvi/Earth element of Pancha Bhoota Sthalam), Varadharaja Perumal Temple, and the 7th-century sandstone Kailasanathar Temple. Economically, Kanchipuram is famous worldwide for GI-tagged handloom Kanchipuram silk sarees, while its Sriperumbudur and Oragadam industrial corridors serve as South India's largest electronics and automotive manufacturing SEZs, hosting Hyundai, Samsung, Foxconn, and Salcomp.

Transportation in Kanchipuram is anchored by Kanchipuram Railway Station (CKM), Kanchipuram Central Bus Stand, and Sriperumbudur Junction along the Chennai-Bengaluru expressway (NH-48), with Chennai International Airport (MAA) just 60 km away. Whether you are shopping for silk sarees, visiting ancient temples, commuting to Sriperumbudur SEZs, or catching a flight, SAMAYAS provides reliable 24/7 one-way cabs from Kanchipuram with zero return fare charges.`,

    overviewHighlights: [
      'Silk City of India famed for GI-tagged handloom sarees, Kamakshi Amman, and Pallava heritage',
      'Major electronics & automotive manufacturing hub housing Sriperumbudur & Oragadam SEZs',
      '24/7 direct one-way taxi transfers to Chennai Airport, Bengaluru, Vellore, Puducherry & Tirupati'
    ],

    routes: [
      { name: 'Kanchipuram to Chennai Airport', to: 'Chennai Airport', distanceKm: 60, timeHours: 1.2, startingFare: 1950 },
      { name: 'Kanchipuram to Chennai City', to: 'Chennai City', distanceKm: 70, timeHours: 1.5, startingFare: 1950 },
      { name: 'Kanchipuram to Bengaluru', to: 'Bengaluru', distanceKm: 275, timeHours: 5, startingFare: 4125 },
      { name: 'Kanchipuram to Vellore', to: 'Vellore', distanceKm: 70, timeHours: 1.3, startingFare: 1950 },
      { name: 'Kanchipuram to Puducherry', to: 'Puducherry', distanceKm: 115, timeHours: 2.3, startingFare: 1950 },
      { name: 'Kanchipuram to Tiruvannamalai', to: 'Tiruvannamalai', distanceKm: 110, timeHours: 2.25, startingFare: 1950 },
      { name: 'Kanchipuram to Tirupati', to: 'Tirupati', distanceKm: 125, timeHours: 3, startingFare: 1950 },
      { name: 'Kanchipuram to Trichy', to: 'Trichy', distanceKm: 260, timeHours: 4.5, startingFare: 3900 },
      { name: 'Kanchipuram to Mahabalipuram', to: 'Mahabalipuram', distanceKm: 65, timeHours: 1.25, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Chennai Airport', distanceKm: 60, timeHours: 1.2, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chennai City',    distanceKm: 70, timeHours: 1.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Bengaluru',       distanceKm: 275, timeHours: 5, hatchback: 4125, sedan: 4125, suv: 5500 },
      { to: 'Vellore',         distanceKm: 70, timeHours: 1.3, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Puducherry',      distanceKm: 115, timeHours: 2.3, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Tiruvannamalai',  distanceKm: 110, timeHours: 2.25, hatchback: 1950, sedan: 1950, suv: 2600 },
    ],

    pickupLocations: [
      'Kanchipuram Railway Station (CKM)',
      'Kanchipuram Central Bus Stand (West Raja St)',
      'Kamakshi Amman Temple Car Street',
      'Gandhi Road Silk Saree Showrooms',
      'Sriperumbudur SIPCOT Industrial Park Gate',
      'Oragadam Industrial Corridor Junction',
      'Sunguvarchatram Bypass',
      'Enathur SCSVMV University Gate',
      'Little Kanchipuram / Varadharaja Temple',
      'Walajabad Junction',
    ],
    dropLocations: [
      'Chennai Airport',
      'Chennai City',
      'Bengaluru',
      'Vellore',
      'Puducherry',
      'Tiruvannamalai',
      'Tirupati',
      'Trichy',
      'Mahabalipuram',
    ],

    transportHubs: {
      busStands: [
        { name: 'Kanchipuram Central Bus Stand', address: 'West Raja Street, Kanchipuram - 631502' },
        { name: 'Sriperumbudur Bus Stand', address: 'NH-48, Sriperumbudur - 602105' },
      ],
      railwayStations: [
        { name: 'Kanchipuram Railway Station', code: 'CKM', address: 'Station Road, Kanchipuram - 631501' },
        { name: 'Kanchipuram East Station', code: 'CJE', address: 'East Kanchipuram - 631502' },
        { name: 'Walajabad Railway Station', code: 'WJ', address: 'Walajabad, Kanchipuram District - 631605' },
      ],
      airports: [
        { name: 'Chennai International Airport (Nearest)', code: 'MAA', distanceKm: 60, address: 'GST Road, Meenambakkam, Chennai - 600027' },
      ],
    },

    touristAttractions: [
      { name: 'Kamakshi Amman Temple', description: 'One of the 51 sacred Shakti Peethas and premier temple of Kanchipuram featuring a majestic golden gopuram and vimanam.', distanceKm: 1 },
      { name: 'Ekambareswarar Temple', description: 'Ancient Pancha Bhoota Sthalam representing the Earth element, famous for its 59-meter tall gopuram and 3,500-year-old mango tree.', distanceKm: 2 },
      { name: 'Varadharaja Perumal Temple', description: 'Grand Vishnu temple counted among the 108 Divya Desams, renowned for its 100-pillared monolithic carved hall and golden lizard shrine.', distanceKm: 4 },
      { name: 'Kailasanathar Temple', description: 'Oldest surviving sandstone structural temple in Kanchipuram built in the 7th century by Pallava King Rajasimha.', distanceKm: 3 },
      { name: 'Sriperumbudur Rajiv Gandhi Memorial', description: 'Stately national memorial garden constructed at Sriperumbudur, dedicated to former Prime Minister Rajiv Gandhi.', distanceKm: 30 },
    ],

    industries: [
      'GI-Tagged Kanchipuram Handloom Silk Saree Weaver Cooperatives & Retail Sector',
      'Sriperumbudur SIPCOT Hi-Tech SEZ (Hyundai, Samsung, Foxconn, Salcomp)',
      'Oragadam Automotive & Electronics Industrial Corridor',
      'Sunguvarchatram Industrial Hub',
      'SCSVMV Deemed University & Higher Educational Corridor',
    ],
    businessInfo:
      'Kanchipuram is a unique economic powerhouse blending heritage silk craftsmanship with global electronics and automotive manufacturing. Thousands of silk saree buyers, electronics engineers at Sriperumbudur SIPCOT, automotive delegates at Oragadam, and temple pilgrims commute daily to Chennai Airport, Bengaluru, and Puducherry. SAMAYAS delivers executive sedans, spacious shopping cabs for silk saree buyers, prompt Chennai Airport drops, and corporate billing options for business travelers.',

    reviews: [
      {
        name: 'Soundarya R.',
        rating: 5,
        text: 'Booked a one-way cab from Kanchipuram silk saree shops to Chennai Airport. Driver arrived promptly, helped load all our shopping luggage, and drove smoothly!',
        route: 'Kanchipuram to Chennai Airport',
      },
      {
        name: 'Jayachandran V.',
        rating: 5,
        text: 'Took a temple tour cab to Kamakshi Amman and Ekambareswarar temples, followed by a drop at Puducherry. Excellent driver and clean car by SAMAYAS.',
        route: 'Kanchipuram to Puducherry',
      },
      {
        name: 'Kwang-Sun Lee',
        rating: 5,
        text: 'Regularly book SAMAYAS cabs for business trips between Sriperumbudur Samsung plant and Bengaluru. Reliable service and polite drivers.',
        route: 'Sriperumbudur to Bengaluru',
      },
      {
        name: 'Nalini V.',
        rating: 4,
        text: 'Booked an Ertiga SUV for family trip to Tirupati temple from Kanchipuram. Smooth drive along the expressway and fair pricing.',
        route: 'Kanchipuram to Tirupati',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Kanchipuram to Chennai Airport (MAA)?',
        a: 'The one-way taxi fare from Kanchipuram to Chennai International Airport (MAA - 60 km) starts at approximately ₹1,100 for a Hatchback, ₹1,300 for a Sedan (Dzire, Etios), and ₹1,800 for an SUV (Ertiga).',
      },
      {
        q: 'How far is Sriperumbudur SIPCOT from Kanchipuram and what is the taxi fare?',
        a: 'Sriperumbudur SIPCOT is approximately 30 km from Kanchipuram town via NH-44. A one-way cab ride takes around 30 minutes and starts at ₹600.',
      },
      {
        q: 'Can I book a cab for a full-day temple and silk saree shopping tour in Kanchipuram?',
        a: 'Yes, SAMAYAS provides local hourly packages and dedicated outstation cabs covering Kamakshi Amman, Ekambareswarar, Varadharaja temples, and Gandhi Road silk stores.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Sriperumbudur and Oragadam industrial zones?',
        a: 'Yes, we provide round-the-clock doorstep pickup directly from all Sriperumbudur SIPCOT plants, Oragadam auto corridor, Sunguvarchatram, and Walajabad.',
      },
      {
        q: 'Can I book a one-way cab from Kanchipuram to Bengaluru?',
        a: 'Yes, we operate daily direct one-way cabs from Kanchipuram to Bengaluru (275 km via NH-48 expressway) starting from ₹3,500 with zero return charges.',
      },
    ],

    metaTitle: 'Kanchipuram Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Need airport pickup & drop from Kanchipuram? Direct one-way taxi to Chennai Airport, Sriperumbudur SEZ, Puducherry & Bengaluru. Reserve your cab now with SAMAYAS.',
  },

  // ─────────────────────────────────────────────────────────
  // KANYAKUMARI — District 12
  // ─────────────────────────────────────────────────────────
  kanyakumari: {
    heroTagline:
      'Starting your trip from Kanyakumari? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Kanyakumari, including Vivekananda Rock Memorial and Sunset Point.',

    overview: `Kanyakumari district, occupying the southernmost tip of mainland India, is a world-renowned coastal sanctuary situated at the spectacular Triveni Sangam confluence of the Arabian Sea, the Bay of Bengal, and the Indian Ocean.

Bordered by Tirunelveli district to the north and east, the Arabian Sea to the south and west, and Kerala's Thiruvananthapuram district to the northwest, Kanyakumari is famous for being the only place in India where one can witness both sunrise and sunset over the ocean from the same vantage point. The district's iconic skyline features the majestic 133-foot stone statue of Tamil poet-saint Thiruvalluvar and the sacred Vivekananda Rock Memorial, standing on twin granite rock islands 500 meters off the coast. Beyond tourism, Kanyakumari is a major agricultural and industrial center, hosting Nagercoil (the district administrative headquarters), the massive Muppandal Wind Farm complex (one of the largest onshore wind energy hubs in Asia), extensive rubber plantations in Marthandam, and thriving marine seafood exports.

Transportation in Kanyakumari is anchored by Kanyakumari Railway Station (CAPE), Nagercoil Junction (NCJ), and Kanyakumari Central Bus Stand on NH-44, with Trivandrum International Airport (TRV) just 90 km away. Whether you are taking an oceanfront vacation, visiting Suchindram Temple, traveling to Trivandrum Airport, or embarking on an outstation trip along NH-44, SAMAYAS provides reliable 24/7 one-way cabs from Kanyakumari with zero return fare charges.`,

    overviewHighlights: [
      'Southernmost tip of mainland India where Arabian Sea, Bay of Bengal & Indian Ocean converge',
      'Home to 133-ft Thiruvalluvar Statue, Vivekananda Rock Memorial, and Suchindram Temple',
      'Direct 24/7 one-way taxi transfers to Trivandrum Airport, Madurai, Tirunelveli, and Rameshwaram'
    ],

    routes: [
      { name: 'Kanyakumari to Trivandrum', to: 'Trivandrum', distanceKm: 85, timeHours: 2.25, startingFare: 1950 },
      { name: 'Kanyakumari to Madurai', to: 'Madurai', distanceKm: 245, timeHours: 4, startingFare: 3675 },
      { name: 'Kanyakumari to Tirunelveli', to: 'Tirunelveli', distanceKm: 85, timeHours: 1.5, startingFare: 1950 },
      { name: 'Kanyakumari to Rameshwaram', to: 'Rameshwaram', distanceKm: 310, timeHours: 5.5, startingFare: 4650 },
      { name: 'Kanyakumari to Chennai', to: 'Chennai', distanceKm: 700, timeHours: 11.5, startingFare: 10500 },
      { name: 'Kanyakumari to Coimbatore', to: 'Coimbatore', distanceKm: 430, timeHours: 7.5, startingFare: 6450 },
      { name: 'Kanyakumari to Kochi', to: 'Kochi', distanceKm: 285, timeHours: 6.5, startingFare: 4275 },
      { name: 'Kanyakumari to Thoothukudi', to: 'Thoothukudi', distanceKm: 115, timeHours: 2.25, startingFare: 1950 },
      { name: 'Kanyakumari to Kodaikanal', to: 'Kodaikanal', distanceKm: 340, timeHours: 6.75, startingFare: 5100 },
    ],

    fareTable: [
      { to: 'Trivandrum',  distanceKm: 85, timeHours: 2.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Madurai',     distanceKm: 245, timeHours: 4, hatchback: 3675, sedan: 3675, suv: 4900 },
      { to: 'Tirunelveli', distanceKm: 85, timeHours: 1.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Rameshwaram', distanceKm: 310, timeHours: 5.5, hatchback: 4650, sedan: 4650, suv: 6200 },
      { to: 'Chennai',     distanceKm: 700, timeHours: 11.5, hatchback: 10500, sedan: 10500, suv: 14000 },
      { to: 'Kochi',       distanceKm: 285, timeHours: 6.5, hatchback: 4275, sedan: 4275, suv: 5700 },
    ],

    pickupLocations: [
      'Kanyakumari Railway Station (CAPE)',
      'Kanyakumari Sunset Point / Beach Road',
      'Nagercoil Junction Railway Station (NCJ)',
      'Nagercoil Christopher Bus Stand',
      'Vadasery Bus Stand (Nagercoil)',
      'Suchindram Thanumalayayan Temple Gate',
      'Marthandam Bus Stand & Rubber Market',
      'Padmanabhapuram Palace / Thuckalay',
      'Kanyakumari Ferry Jetty Entrance',
      'Kaliyakkavilai Kerala Border Gate',
    ],
    dropLocations: [
      'Trivandrum',
      'Madurai',
      'Tirunelveli',
      'Rameshwaram',
      'Chennai',
      'Coimbatore',
      'Kochi',
      'Thoothukudi',
      'Kodaikanal',
    ],

    transportHubs: {
      busStands: [
        { name: 'Kanyakumari Central Bus Stand', address: 'Beach Road, Kanyakumari - 629702' },
        { name: 'Nagercoil Christopher Bus Stand', address: 'Cape Road, Nagercoil - 629001' },
        { name: 'Vadasery Bus Stand', address: 'Vadasery, Nagercoil - 629001' },
      ],
      railwayStations: [
        { name: 'Kanyakumari Railway Station', code: 'CAPE', address: 'Station Road, Kanyakumari - 629702' },
        { name: 'Nagercoil Junction', code: 'NCJ', address: 'Station Road, Nagercoil - 629001' },
        { name: 'Nagercoil Town Station', code: 'NJT', address: 'Nagercoil Town - 629001' },
      ],
      airports: [
        { name: 'Thiruvananthapuram International Airport (Nearest)', code: 'TRV', distanceKm: 90, address: 'Airport Road, Chacka, Thiruvananthapuram, Kerala - 695008' },
        { name: 'Madurai Airport', code: 'IXM', distanceKm: 240, address: 'Airport Road, Madurai - 625022' },
      ],
    },

    touristAttractions: [
      { name: 'Vivekananda Rock Memorial & Thiruvalluvar Statue', description: 'Iconic twin island monuments featuring the 133-foot granite statue of Thiruvalluvar and Swami Vivekananda\'s meditation hall.', distanceKm: 1 },
      { name: 'Devi Kanyakumari Bhagavathy Amman Temple', description: '3,000-year-old coastal shrine dedicated to the virgin goddess Kanyakumari, famous for its sparkling diamond nose ring.', distanceKm: 0.5 },
      { name: 'Padmanabhapuram Palace', description: 'Exquisite 16th-century wooden palace of the Travancore Maharajas showcasing traditional Kerala architecture in Thuckalay.', distanceKm: 35 },
      { name: 'Suchindram Thanumalayayan Temple', description: 'Architectural marvel featuring a unique Trinity idol representing Brahma, Vishnu, and Shiva, and 18-foot Hanuman idol.', distanceKm: 13 },
      { name: 'Thirparappu Waterfalls', description: 'Picturesque 50-foot cascading natural waterfall on the Kodayar River featuring a Shiva temple and boat rides.', distanceKm: 55 },
    ],

    industries: [
      'Muppandal Wind Farm (One of Asia\'s largest onshore wind energy turbine clusters)',
      'Natural Rubber Plantation & Processing (Marthandam / Nagercoil)',
      'Marine Commercial Fishing & Seafood Export Processing',
      'Cashew Nut Processing & Coir Handicrafts Cluster',
      'Tourism, Pilgrimage & Coastal Hospitality Industry',
    ],
    businessInfo:
      'Kanyakumari\'s economy blends thriving coastal tourism with wind energy production, natural rubber processing, and marine exports. Wind power engineers, rubber plantation owners, seafood export traders, and international tourists commute daily between Kanyakumari, Nagercoil, Trivandrum Airport, and Madurai. SAMAYAS delivers executive sedans, spacious tourist SUVs for coastal sightseeing, 24/7 Trivandrum Airport drops, and corporate billing options for business travelers.',

    reviews: [
      {
        name: 'Alexander M.',
        rating: 5,
        text: 'Booked a one-way cab from Kanyakumari Sunset Point to Trivandrum Airport. Driver arrived early, helped with luggage, and reached the airport smoothly along NH-66.',
        route: 'Kanyakumari to Trivandrum Airport',
      },
      {
        name: 'Sundaramurthy G.',
        rating: 5,
        text: 'Traveled with family from Kanyakumari to Suchindram temple and Padmanabhapuram palace. Driver was very polite and knew all the local historical spots.',
        route: 'Kanyakumari Local Sightseeing',
      },
      {
        name: 'Vinoj Nair',
        rating: 5,
        text: 'Regularly book SAMAYAS for wind farm business trips between Muppandal/Nagercoil and Madurai. Honest per-km rates and clean cars every time.',
        route: 'Kanyakumari to Madurai',
      },
      {
        name: 'Priyadarshini S.',
        rating: 4,
        text: 'Booked an Innova from Kanyakumari to Rameshwaram for a family temple tour. Clean car, pleasant AC, and smooth driving.',
        route: 'Kanyakumari to Rameshwaram',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Kanyakumari to Trivandrum Airport (TRV)?',
        a: 'The one-way taxi fare from Kanyakumari to Thiruvananthapuram International Airport (TRV - 90 km) starts at approximately ₹1,800 for a Hatchback, ₹2,100 for a Sedan (Dzire, Etios), and ₹2,900 for an SUV (Ertiga).',
      },
      {
        q: 'How far is Suchindram Temple from Kanyakumari and what is the taxi fare?',
        a: 'Suchindram Thanumalayayan Temple is approximately 13 km from Kanyakumari Beach. A one-way taxi ride takes around 20 minutes and costs starting from ₹400.',
      },
      {
        q: 'Can I book a cab from Nagercoil Junction Railway Station (NCJ)?',
        a: 'Yes, SAMAYAS provides 24/7 dedicated train station pickup at Nagercoil Junction (NCJ) and Kanyakumari Railway Station (CAPE) for transfers to hotels or outstation cities.',
      },
      {
        q: 'Are one-way cabs available from Kanyakumari to Madurai along NH-44?',
        a: 'Yes, we operate daily direct one-way cabs from Kanyakumari to Madurai (245 km via Tirunelveli expressway) starting from ₹3,200 with zero return fare charges.',
      },
      {
        q: 'Which vehicles are best for family sightseeing tours around Kanyakumari?',
        a: 'We recommend our comfortable Sedans (Dzire, Etios) or spacious 7-seater SUVs (Ertiga, Innova Crysta) for family day tours to Vivekananda Rock Ferry, Padmanabhapuram Palace, and Thirparappu Falls.',
      },
    ],

    metaTitle: 'One-Way Cab from Kanyakumari | Book Online 24/7 | SAMAYAS',
    metaDescription:
      'Travel comfortably from Kanyakumari, Tamil Nadu. Direct one-way taxi to Trivandrum Airport, Madurai, Tirunelveli & Rameshwaram. Transparent per-km rates with zero return fee.',
  },

  // ─────────────────────────────────────────────────────────
  // KARUR — District 13
  // ─────────────────────────────────────────────────────────
  karur: {
    heroTagline:
      'Need an outstation cab from Karur? Book a 24/7 one-way taxi with SAMAYAS. Convenient pickups across Karur—one of India\'s leading home textile export hubs.',

    overview: `Karur district, centrally situated along the fertile banks of the Amaravathi and Kaveri rivers in western Tamil Nadu, is recognized as one of India's leading home textile export hubs and a major manufacturing engine.

Bounded by Tiruchirappalli, Namakkal, Erode, Tiruppur, and Dindigul, Karur supplies global markets in bed linen, kitchen textiles, and curtains for Europe and North America. The district is home to major industrial plants including TNPL (Tamil Nadu Newsprint and Papers Limited at Kagithapuram—one of Asia's largest eco-friendly paper mills), Chettipalayam bus body building industry, and cement manufacturing units. Spiritually, Karur is anchored by Arulmigu Pasupatheeswarar Temple—a sacred 7th-century Paadal Petra Sthalam—and Mayanur Barrage promenade.

Transportation is anchored by Karur Junction (KRR)—a vital five-way railway intersection in Southern Railway—and Central Bus Stand on NH-44 and NH-81. Whether you are an international textile buyer visiting manufacturing plants, a TNPL corporate executive, or a traveler taking an express cab to Trichy Airport (TRZ - 80 km) or Coimbatore, SAMAYAS provides reliable 24/7 one-way cabs from Karur with zero return fare charges.`,

    overviewHighlights: [
      'Home Textile Capital of India exporting over ₹6,000 Cr home furnishings globally',
      'Major bus body building cluster manufacturing 60% of South India\'s private buses & home to TNPL paper mill',
      '24/7 direct one-way taxi connections to Trichy Airport, Coimbatore, Salem, Erode, and Chennai'
    ],

    routes: [
      { name: 'Karur to Trichy', to: 'Trichy', distanceKm: 80, timeHours: 1.5, startingFare: 1950 },
      { name: 'Karur to Coimbatore', to: 'Coimbatore', distanceKm: 130, timeHours: 2.5, startingFare: 1950 },
      { name: 'Karur to Salem', to: 'Salem', distanceKm: 85, timeHours: 1.5, startingFare: 1950 },
      { name: 'Karur to Erode', to: 'Erode', distanceKm: 65, timeHours: 1.25, startingFare: 1950 },
      { name: 'Karur to Dindigul', to: 'Dindigul', distanceKm: 75, timeHours: 1.5, startingFare: 1950 },
      { name: 'Karur to Chennai', to: 'Chennai', distanceKm: 370, timeHours: 6.25, startingFare: 5550 },
      { name: 'Karur to Bengaluru', to: 'Bengaluru', distanceKm: 290, timeHours: 5.25, startingFare: 4350 },
      { name: 'Karur to Madurai', to: 'Madurai', distanceKm: 140, timeHours: 2.75, startingFare: 2100 },
      { name: 'Karur to Namakkal', to: 'Namakkal', distanceKm: 45, timeHours: 0.8, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Trichy',     distanceKm: 80, timeHours: 1.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Coimbatore', distanceKm: 130, timeHours: 2.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Salem',      distanceKm: 85, timeHours: 1.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Erode',      distanceKm: 65, timeHours: 1.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chennai',    distanceKm: 370, timeHours: 6.25, hatchback: 5550, sedan: 5550, suv: 7400 },
      { to: 'Bengaluru',  distanceKm: 290, timeHours: 5.25, hatchback: 4350, sedan: 4350, suv: 5800 },
    ],

    pickupLocations: [
      'Karur Junction Railway Station (KRR)',
      'Karur Central Bus Stand (MGA Road)',
      'Kovai Road Textile Industrial Area',
      'Gandhigramam / Bye Pass Road',
      'Light House Corner / Collectorate',
      'TNPL Plant Gate (Velayuthampalayam)',
      'Chettinad Cement Plant Gate (Puliyur)',
      'Mayanur Barrage Road',
      'Manmangalam Bus Stop',
      'Thanthonimalai Temple Foot',
    ],
    dropLocations: [
      'Trichy',
      'Coimbatore',
      'Salem',
      'Erode',
      'Dindigul',
      'Chennai',
      'Bengaluru',
      'Madurai',
      'Namakkal',
    ],

    transportHubs: {
      busStands: [
        { name: 'Karur Central Bus Stand', address: 'MGA Road, Karur - 639001' },
        { name: 'Karur New Bus Terminus', address: 'Bypass Road, Karur - 639002' },
      ],
      railwayStations: [
        { name: 'Karur Junction Railway Station', code: 'KRR', address: 'Station Road, Karur - 639001' },
        { name: 'Pugalur Railway Station', code: 'PGR', address: 'Pugalur, Karur District - 639113' },
      ],
      airports: [
        { name: 'Tiruchirappalli International Airport (Nearest)', code: 'TRZ', distanceKm: 85, address: 'Airport Road, Tiruchirappalli - 620007' },
        { name: 'Salem Airport', code: 'SXV', distanceKm: 90, address: 'Kamalapuram, Salem - 636309' },
        { name: 'Coimbatore International Airport', code: 'CJB', distanceKm: 125, address: 'Airport Road, Peelamedu, Coimbatore - 641014' },
      ],
    },

    touristAttractions: [
      { name: 'Arulmigu Pasupatheeswarar Temple', description: 'Ancient 7th-century Chola Shiva temple featuring a 5-foot swayambhu lingam, counted among the 7 Kongu Shiva Sthalams.', distanceKm: 1 },
      { name: 'Mayanur Barrage & Eco Park', description: 'Massive barrage across the Kaveri River featuring scenic backwaters, parks, and riverfront picnic spots.', distanceKm: 20 },
      { name: 'Thanthonimalai Sri Kalyana Venkataramana Temple', description: 'Historic hilltop Vishnu temple known as South Tirupati, featuring a rock-cut deity carved out of natural granite.', distanceKm: 5 },
      { name: 'Pugazhimalai Sri Subramanyaswamy Temple', description: 'Ancient hill temple dedicated to Lord Murugan in Velayuthampalayam featuring ancient Brahmi stone inscriptions.', distanceKm: 18 },
      { name: 'Chettipalayam Amaravathi Promenade', description: 'Scenic riverfront area on the Amaravathi River, popular for evening walks and golden sunsets.', distanceKm: 4 },
    ],

    industries: [
      'Home Textile Export Industry Cluster (Bed Linen, Table Linen, Curtains to USA/EU)',
      'Bus Body Building & Commercial Vehicle Construction Workshops',
      'TNPL (Tamil Nadu Newsprint and Papers Limited, Velayuthampalayam)',
      'Chettinad Cement Corporation Plant (Puliyur)',
      'Karur Vysya Bank Corporate Headquarters & Financial Sector',
    ],
    businessInfo:
      'Karur is South India\'s home textile export capital and bus body manufacturing epicenter. International buyers from Europe and the US, bus body construction engineers, paper mill auditors at TNPL, and banking executives from KVB travel daily between Karur, Trichy Airport, Coimbatore, and Chennai. SAMAYAS offers executive sedan rentals, corporate billing options, prompt Trichy/Coimbatore Airport drops, and reliable 24/7 one-way cabs from Karur.',

    reviews: [
      {
        name: 'Ravichandran S.',
        rating: 5,
        text: 'Booked a one-way cab from Karur textile export unit to Trichy Airport for an international buyer flight. SAMAYAS driver was on time and vehicle was spotless.',
        route: 'Karur to Trichy Airport',
      },
      {
        name: 'Kavitha Nallasamy',
        rating: 5,
        text: 'Traveled with family from Karur to Pasupatheeswarar temple and Mayanur barrage. Driver was very polite and knew all the local routes.',
        route: 'Karur Local Tour',
      },
      {
        name: 'Suresh Kumar B.',
        rating: 5,
        text: 'Regularly book SAMAYAS for bus body manufacturing business trips from Karur to Salem and Bengaluru. Transparent pricing and no return charges.',
        route: 'Karur to Bengaluru',
      },
      {
        name: 'Dr. Mohanraj P.',
        rating: 4,
        text: 'Booked a cab from TNPL Pugalur to Coimbatore. Excellent driving, clean sedan, and exact fare as quoted online.',
        route: 'Karur TNPL to Coimbatore',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Karur to Trichy Airport (TRZ)?',
        a: 'The one-way taxi fare from Karur to Tiruchirappalli International Airport (TRZ - 85 km) starts at approximately ₹1,300 for a Hatchback, ₹1,550 for a Sedan (Dzire, Etios), and ₹2,150 for an SUV (Ertiga).',
      },
      {
        q: 'How far is TNPL Paper Mill Velayuthampalayam from Karur town and what is the cab fare?',
        a: 'TNPL Pugalur (Velayuthampalayam) is approximately 18 km from Karur town. A one-way taxi ride takes about 25 minutes and costs starting from ₹450.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Karur Junction Railway Station (KRR)?',
        a: 'Yes, SAMAYAS provides 24/7 dedicated train station pickup at Karur Junction (KRR), Kovai Road, and all surrounding industrial townships.',
      },
      {
        q: 'Can I book a one-way cab from Karur to Coimbatore or Salem?',
        a: 'Yes, we operate daily direct one-way cabs from Karur to Coimbatore (130 km) starting from ₹2,000 and to Salem (85 km) starting from ₹1,350 with zero return charges.',
      },
      {
        q: 'Which vehicles are recommended for corporate business travel in Karur?',
        a: 'For business travelers visiting textile export houses or TNPL mills, we recommend our comfortable Sedans (Dzire, Etios) or premium SUVs (Innova Crysta).',
      },
    ],

    metaTitle: 'Karur One-Way Taxi | 24/7 Cab Booking | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Karur? Direct one-way taxi to Trichy Airport, Coimbatore, Salem, Erode & Chennai. Instant booking confirmation.',
  },

  // ─────────────────────────────────────────────────────────
  // KRISHNAGIRI — District 14
  // ─────────────────────────────────────────────────────────
  krishnagiri: {
    heroTagline:
      'Traveling from Krishnagiri? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Krishnagiri, including KRP Dam and Hosur industrial SEZ.',

    overview: `Krishnagiri district, situated at the northwestern frontier of Tamil Nadu bordering Karnataka and Andhra Pradesh, is celebrated nationwide as the 'Mango Capital of India' and a powerhouse of automotive manufacturing.

Bounded by Tirupathur and Dharmapuri to the south and east, and Karnataka's Bengaluru Urban and Ramanagara districts to the west and north, Krishnagiri is Tamil Nadu's primary gateway along the North-South highway corridor (NH-44 / NH-48). The district cultivates over 40,000 hectares of Totapuri and Alphonso mangoes, exporting hundreds of thousands of tonnes of processed mango pulp globally. On the industrial front, Krishnagiri's Hosur region is one of Asia's largest automotive and EV manufacturing hubs, hosting giant plants including TVS Motor, Ashok Leyland, Ather Energy, Ola Electric, and Titan Industries, alongside the new Pochampalli SIPCOT park.

Historically, Krishnagiri is guarded by the majestic 16th-century Syed Basha hill fort built by Vijayanagara Emperor Krishnadevaraya, and the scenic Krishnagiri Reservoir Project (KRP Dam) across the Thenpennai river. Transportation is anchored by Hosur Railway Station (HSRA), Hosur MGR Bus Stand, and Krishnagiri Central Bus Stand. Whether you are an auto industry engineer commuting to Hosur SEZs, an agricultural merchant, or a traveler taking an airport run to Bengaluru Kempegowda Airport (BLR), SAMAYAS provides reliable 24/7 one-way cabs from Krishnagiri with zero return fare charges.`,

    overviewHighlights: [
      'Mango Capital of India exporting global fruit pulp & home to Hosur Auto & EV Manufacturing SEZ',
      'Historical gateway guarded by 16th-century Vijayanagara Hill Fort and KRP Dam reservoir park',
      '24/7 direct one-way taxi connections to Bengaluru Airport (BLR), Hosur, Salem, Chennai, and Vellore'
    ],

    routes: [
      { name: 'Krishnagiri to Bengaluru', to: 'Bengaluru', distanceKm: 90, timeHours: 1.75, startingFare: 1950 },
      { name: 'Krishnagiri to Hosur', to: 'Hosur', distanceKm: 45, timeHours: 0.8, startingFare: 1950 },
      { name: 'Krishnagiri to Salem', to: 'Salem', distanceKm: 110, timeHours: 2, startingFare: 1950 },
      { name: 'Krishnagiri to Chennai', to: 'Chennai', distanceKm: 260, timeHours: 4.75, startingFare: 3900 },
      { name: 'Krishnagiri to Dharmapuri', to: 'Dharmapuri', distanceKm: 45, timeHours: 0.8, startingFare: 1950 },
      { name: 'Krishnagiri to Tirupathur', to: 'Tirupathur', distanceKm: 60, timeHours: 1.2, startingFare: 1950 },
      { name: 'Krishnagiri to Vellore', to: 'Vellore', distanceKm: 120, timeHours: 2.25, startingFare: 1950 },
      { name: 'Krishnagiri to Coimbatore', to: 'Coimbatore', distanceKm: 270, timeHours: 5, startingFare: 4050 },
      { name: 'Krishnagiri to Hogenakkal', to: 'Hogenakkal', distanceKm: 85, timeHours: 2, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Bengaluru',  distanceKm: 90, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Hosur',      distanceKm: 45, timeHours: 0.8, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Salem',      distanceKm: 110, timeHours: 2, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chennai',    distanceKm: 260, timeHours: 4.75, hatchback: 3900, sedan: 3900, suv: 5200 },
      { to: 'Vellore',    distanceKm: 120, timeHours: 2.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Coimbatore', distanceKm: 270, timeHours: 5, hatchback: 4050, sedan: 4050, suv: 5400 },
    ],

    pickupLocations: [
      'Krishnagiri Central Bus Stand (Salem Road)',
      'Hosur Railway Station (HSRA)',
      'Hosur MGR Bus Stand',
      'Hosur SIPCOT Phase 1 & 2 Gates',
      'Zuzuvadi Interstate Toll Plaza',
      'Krishnagiri KRP Dam Junction',
      'Pochampalli SIPCOT EV Hub',
      'Bargur Bus Stand / Mango Market',
      'Rayakottai Road Junction',
      'Krishnagiri Collectorate Complex',
    ],
    dropLocations: [
      'Bengaluru',
      'Hosur',
      'Salem',
      'Chennai',
      'Dharmapuri',
      'Tirupathur',
      'Vellore',
      'Coimbatore',
      'Hogenakkal',
    ],

    transportHubs: {
      busStands: [
        { name: 'Krishnagiri Central Bus Stand', address: 'Salem Road, Krishnagiri - 635001' },
        { name: 'Hosur MGR Bus Stand', address: 'NH-44, Hosur - 635109' },
        { name: 'Bargur Bus Stand', address: 'Main Road, Bargur - 635104' },
      ],
      railwayStations: [
        { name: 'Hosur Railway Station', code: 'HSRA', address: 'Station Road, Hosur - 635109' },
        { name: 'Rayakottai Railway Station', code: 'RYT', address: 'Rayakottai, Krishnagiri District - 635116' },
      ],
      airports: [
        { name: 'Bengaluru Kempegowda International Airport (Nearest)', code: 'BLR', distanceKm: 95, address: 'Devanahalli, Bengaluru, Karnataka - 560300' },
        { name: 'Salem Airport', code: 'SXV', distanceKm: 100, address: 'Kamalapuram, Salem - 636309' },
      ],
    },

    touristAttractions: [
      { name: 'Krishnagiri Reservoir Project (KRP Dam)', description: 'Picturesque dam across Thenpennai River featuring manicured flower gardens, children\'s park, and boating.', distanceKm: 7 },
      { name: 'Krishnagiri Syed Basha Hill Fort', description: 'Historic 16th-century hill fortress built by Vijayanagara King Krishnadevaraya offering panoramic valley views.', distanceKm: 2 },
      { name: 'Rayakottai Hill Fort', description: 'Imposing British-era hill fortification featuring ancient stone ramparts and scenic trekking trails.', distanceKm: 30 },
      { name: 'Chandira Choodeswarar Temple, Hosur', description: 'Ancient hilltop Shiva shrine offering a commanding view of Hosur industrial town and sunset vistas.', distanceKm: 45 },
      { name: 'Mallachandram Megalithic Site', description: 'Fascinating prehistoric dolmens and megalithic burial site near Bargur dating back over 3,000 years.', distanceKm: 20 },
    ],

    industries: [
      'Hosur Automotive & EV Manufacturing Hub (TVS Motor, Ashok Leyland, Ather Energy, Ola Electric)',
      'Global Mango Processing & Fruit Pulp Export Cluster (Bargur / Krishnagiri)',
      'Pochampalli SIPCOT Industrial Park (Electronics, EV Ancillaries)',
      'Floriculture & Cut-Rose Flower Export Nurseries',
      'Granite Mining & Stone Polishing Industry',
    ],
    businessInfo:
      'Krishnagiri district, anchored by Hosur and Pochampalli industrial zones, is South India\'s automotive manufacturing and EV powerhouse. Auto engineers, EV plant managers, mango pulp exporters, and cross-border commuters traveling to Bengaluru Airport (BLR) commute daily between Krishnagiri, Hosur, Bengaluru, and Chennai. SAMAYAS delivers executive sedan rentals, 24/7 Bengaluru Airport transfer cabs, corporate billing options, and zero-return fare One-Way rentals across NH-44.',

    reviews: [
      {
        name: 'Prashanth Reddy',
        rating: 5,
        text: 'Booked a one-way cab from Hosur SIPCOT to Kempegowda Airport (BLR). The driver arrived 15 minutes early and took the STRR bypass smoothly. Excellent service!',
        route: 'Hosur to Bengaluru Airport',
      },
      {
        name: 'Meenakshi Sundaram',
        rating: 5,
        text: 'Traveled with family from Krishnagiri to KRP Dam and Rayakottai fort. Driver was courteous and drove safely through scenic routes.',
        route: 'Krishnagiri Local Tour',
      },
      {
        name: 'Girish Sharma',
        rating: 5,
        text: 'Regularly book SAMAYAS for mango pulp business trips between Bargur and Chennai. Clear per-km pricing and clean cars.',
        route: 'Krishnagiri to Chennai',
      },
      {
        name: 'Anand V.',
        rating: 4,
        text: 'Used SAMAYAS cab from Pochampalli Ola plant to Salem. Prompt morning pickup, pleasant AC, and zero return charges.',
        route: 'Pochampalli to Salem',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Krishnagiri to Bengaluru Kempegowda Airport (BLR)?',
        a: 'The one-way taxi fare from Krishnagiri to Bengaluru International Airport (BLR - 130 km) starts at approximately ₹2,100 for a Hatchback, ₹2,450 for a Sedan (Dzire, Etios), and ₹3,400 for an SUV (Ertiga). From Hosur, fares start at ₹1,500.',
      },
      {
        q: 'How far is Hosur SIPCOT from Krishnagiri town and what is the taxi fare?',
        a: 'Hosur SIPCOT is approximately 45 km from Krishnagiri town via NH-44. A one-way cab ride takes about 45 minutes and costs starting from ₹750.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Zuzuvadi Interstate Border Toll Plaza?',
        a: 'Yes, SAMAYAS provides 24/7 round-the-clock pickups at Zuzuvadi toll plaza, Hosur MGR Bus Stand, Hosur Railway Station (HSRA), and all industrial plants in Hosur.',
      },
      {
        q: 'Can I book a one-way cab from Krishnagiri to Chennai or Salem along NH-44?',
        a: 'Yes, we operate daily direct one-way cabs from Krishnagiri to Salem (110 km) starting from ₹1,700 and to Chennai (260 km via AH45) starting from ₹3,300 with zero return charges.',
      },
      {
        q: 'Which vehicles are best for corporate business travel in Hosur and Krishnagiri?',
        a: 'We recommend our comfortable Sedans (Dzire, Etios) or premium 7-seater SUVs (Innova Crysta, Ertiga) for corporate executives traveling between Hosur SEZs and Bengaluru Airport.',
      },
    ],

    metaTitle: 'Book One-Way Taxi from Krishnagiri | No Return Fare | SAMAYAS',
    metaDescription:
      'Need airport transfers from Krishnagiri? Direct one-way taxi to Bengaluru Airport, Hosur, Salem, Chennai & Vellore. Doorstep pickup available 24/7.',
  },

  // ─────────────────────────────────────────────────────────
  // MADURAI — District 15
  // ─────────────────────────────────────────────────────────
  madurai: {
    heroTagline:
      'Need a one-way cab from Madurai? Book a 24/7 taxi with SAMAYAS. Convenient pickups across Madurai, including Meenakshi Amman Temple and Madurai Airport (IXM).',

    overview: `Madurai district, situated on the banks of the River Vaigai in south-central Tamil Nadu, is globally celebrated as the 'Cultural Capital of Tamil Nadu', 'Thoonga Nagaram' (the City That Never Sleeps), and the 'Temple City'.

Bounded by Dindigul to the north, Tiruchirappalli and Sivaganga to the east, Virudhunagar to the south, and Theni to the west, Madurai possesses over 2,500 years of unbroken Sangam Tamil history. At its heart stands the world-famous Arulmigu Meenakshi Sundareswarar Temple, an architectural marvel adorned with 14 towering gopurams and the Thousand Pillar Hall. The district also houses Thirumalai Nayakkar Palace, Thiruparankundram Murugan Temple (the 1st of the 6 sacred Arupadai Veedu shrines), and Pazhamudhircholai. Beyond heritage, Madurai is a thriving commercial metropolis renowned for GI-tagged Madurai Malligai (jasmine flowers), Sungudi cotton sarees, ELCOT IT Parks at Vadapalanji, rubber industries, and world-class medical tourism centered around Aravind Eye Hospital.

Transportation in Madurai is anchored by Madurai Junction Railway Station (MDU)—one of South India's busiest railway hubs—Mattuthavani Integrated Bus Terminus (MIBT), Arappalayam Bus Stand, and Madurai International Airport (IXM). Whether you are embarking on the sacred Rameshwaram-Kanyakumari pilgrimage circuit, heading up to Kodaikanal hills, commuting to IT parks, or catching an international flight, SAMAYAS provides reliable 24/7 one-way cabs from Madurai with zero return fare charges.`,

    overviewHighlights: [
      'Cultural Capital of Tamil Nadu home to iconic Meenakshi Amman Temple & 2,500-year Sangam heritage',
      'Major hub for GI-tagged Madurai Malligai jasmine, ELCOT IT Parks, and world-leading eye care hospitals',
      '24/7 direct one-way taxi transfers to Rameshwaram, Kodaikanal, Kanyakumari, Trichy, and Chennai'
    ],

    routes: [
      { name: 'Madurai to Rameshwaram', to: 'Rameshwaram', distanceKm: 175, timeHours: 3.25, startingFare: 2625 },
      { name: 'Madurai to Kodaikanal', to: 'Kodaikanal', distanceKm: 115, timeHours: 3.25, startingFare: 1950 },
      { name: 'Madurai to Kanyakumari', to: 'Kanyakumari', distanceKm: 245, timeHours: 4, startingFare: 3675 },
      { name: 'Madurai to Trichy', to: 'Trichy', distanceKm: 135, timeHours: 2.25, startingFare: 2025 },
      { name: 'Madurai to Chennai', to: 'Chennai', distanceKm: 460, timeHours: 7.5, startingFare: 6900 },
      { name: 'Madurai to Coimbatore', to: 'Coimbatore', distanceKm: 215, timeHours: 4.25, startingFare: 3225 },
      { name: 'Madurai to Tirunelveli', to: 'Tirunelveli', distanceKm: 160, timeHours: 2.75, startingFare: 2400 },
      { name: 'Madurai to Theni', to: 'Theni', distanceKm: 75, timeHours: 1.5, startingFare: 1950 },
      { name: 'Madurai to Munnar', to: 'Munnar', distanceKm: 155, timeHours: 4.5, startingFare: 2325 },
    ],

    fareTable: [
      { to: 'Rameshwaram', distanceKm: 175, timeHours: 3.25, hatchback: 2625, sedan: 2625, suv: 3500 },
      { to: 'Kodaikanal',  distanceKm: 115, timeHours: 3.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Kanyakumari', distanceKm: 245, timeHours: 4, hatchback: 3675, sedan: 3675, suv: 4900 },
      { to: 'Trichy',      distanceKm: 135, timeHours: 2.25, hatchback: 2025, sedan: 2025, suv: 2700 },
      { to: 'Chennai',     distanceKm: 460, timeHours: 7.5, hatchback: 6900, sedan: 6900, suv: 9200 },
      { to: 'Coimbatore',  distanceKm: 215, timeHours: 4.25, hatchback: 3225, sedan: 3225, suv: 4300 },
    ],

    pickupLocations: [
      'Madurai Junction Railway Station (MDU)',
      'Mattuthavani Integrated Bus Terminus (MIBT)',
      'Arappalayam Bus Terminus',
      'Madurai International Airport (IXM)',
      'Meenakshi Amman Temple West Tower',
      'Periyar Bus Stand Area',
      'Kalavasal Junction / Theni Road',
      'Goripalayam / Apollo Hospital',
      'KK Nagar / ELCOT IT Park',
      'Teppakulam Floating Tank Area',
    ],
    dropLocations: [
      'Rameshwaram',
      'Kodaikanal',
      'Kanyakumari',
      'Trichy',
      'Chennai',
      'Coimbatore',
      'Tirunelveli',
      'Theni',
      'Munnar',
    ],

    transportHubs: {
      busStands: [
        { name: 'Mattuthavani MGR Integrated Bus Terminus (MIBT)', address: 'KK Nagar Bypass Road, Madurai - 625020' },
        { name: 'Arappalayam Bus Terminus', address: 'Arappalayam Main Road, Madurai - 625016' },
        { name: 'Periyar Bus Stand', address: 'Station Road, Madurai - 625001' },
      ],
      railwayStations: [
        { name: 'Madurai Junction Railway Station', code: 'MDU', address: 'Railway Station Road, Madurai - 625001' },
        { name: 'Kudal Nagar Railway Station', code: 'KDN', address: 'Kudal Nagar, Madurai - 625018' },
        { name: 'Thiruparankundram Station', code: 'TDN', address: 'Thiruparankundram, Madurai - 625005' },
      ],
      airports: [
        { name: 'Madurai International Airport', code: 'IXM', distanceKm: 12, address: 'Airport Road, Avaniyapuram, Madurai - 625022' },
      ],
    },

    touristAttractions: [
      { name: 'Arulmigu Meenakshi Sundareswarar Temple', description: 'World-famous 2,500-year-old Dravidian temple complex featuring 14 sculpted gopurams and 1,000-pillar hall.', distanceKm: 1 },
      { name: 'Thirumalai Nayakkar Palace', description: 'Grand 17th-century palace constructed by King Thirumalai Nayak, featuring massive whitewashed pillars and light shows.', distanceKm: 2 },
      { name: 'Thiruparankundram Murugan Temple', description: 'First sacred abode (Arupadai Veedu) of Lord Murugan, carved out of rock hill where Murugan wed Deivanai.', distanceKm: 8 },
      { name: 'Alagar Kovil & Pazhamudhircholai', description: 'Scenic hilltop temple complex dedicated to Lord Vishnu (Kallazhagar) and the 6th Arupadai Veedu shrine of Murugan.', distanceKm: 21 },
      { name: 'Vandiyur Mariamman Teppakulam', description: 'Colossal 16-acre temple tank built in 1645 with a beautiful central island mandapam host to annual float festival.', distanceKm: 4 },
    ],

    industries: [
      'ELCOT IT Park I & II (Vadapalanji & Ilandhaikulam Software SEZ)',
      'GI-Tagged Madurai Malligai Jasmine Cultivation & Global Export Market',
      'Medical Tourism Sector (Aravind Eye Hospital, Apollo Hospitals, Velammal)',
      'Rubber & Tyre Manufacturing Plants (TVS Srichakra, Fenner India)',
      'Handloom Sungudi Saree Weaving & Textile Trade Cluster',
    ],
    businessInfo:
      'Madurai is the commercial, cultural, and medical gateway of Southern Tamil Nadu. IT professionals at ELCOT IT Parks, eye care specialists and international patients at Aravind Eye Hospital, rubber manufacturing executives, and millions of heritage tourists embarking on Southern temple circuits commute daily between Madurai Airport, Rameshwaram, Kodaikanal, and Chennai. SAMAYAS delivers executive sedans, 24/7 Madurai Airport transfer guarantees, experienced hill drivers for Kodaikanal/Munnar, and zero-return fare One-Way cabs across South India.',

    reviews: [
      {
        name: 'Venkataraman S.',
        rating: 5,
        text: 'Booked a one-way cab from Madurai Junction to Rameshwaram Pamban Bridge for a family temple trip. Driver arrived on time, was extremely polite, and drove very safely.',
        route: 'Madurai to Rameshwaram',
      },
      {
        name: 'Anitha Pandian',
        rating: 5,
        text: 'Took a morning cab from Madurai Airport to Meenakshi Amman temple and Thirumalai Nayakkar Palace, followed by drop at Kodaikanal. Outstanding service by SAMAYAS!',
        route: 'Madurai Airport to Kodaikanal',
      },
      {
        name: 'Subhash Chandra',
        rating: 5,
        text: 'Regularly book SAMAYAS for IT client visits to ELCOT Vadapalanji. Transparent per-km billing, clean sedans, and polite drivers.',
        route: 'Madurai to Chennai',
      },
      {
        name: 'Dr. Elizabeth Taylor',
        rating: 4,
        text: 'Used SAMAYAS cab for hospital transfer from Madurai to Munnar resort. Excellent driver who managed mountain twists comfortably.',
        route: 'Madurai to Munnar',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Madurai to Rameshwaram?',
        a: 'The one-way taxi fare from Madurai to Rameshwaram (175 km via NH-87) starts at approximately ₹2,400 for a Hatchback, ₹2,750 for a Sedan (Dzire, Etios), and ₹3,800 for an SUV (Ertiga, Innova). Travel time is around 3.25 hours.',
      },
      {
        q: 'How far is Madurai Airport (IXM) from Meenakshi Amman Temple and what is the taxi fare?',
        a: 'Madurai International Airport (IXM) is approximately 12 km from Meenakshi Amman Temple. A one-way taxi transfer takes about 25 minutes and starts at ₹450.',
      },
      {
        q: 'Can I book a one-way cab from Madurai to Kodaikanal hill station?',
        a: 'Yes, SAMAYAS operates daily direct one-way cabs from Madurai to Kodaikanal (115 km via Ghat Road) starting from ₹2,800 with experienced mountain drivers.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Mattuthavani Bus Stand (MIBT) and Madurai Junction?',
        a: 'Yes, SAMAYAS provides round-the-clock doorstep pickup from Madurai Junction (MDU), Mattuthavani MGR Bus Stand (MIBT), Arappalayam, and all hotels across Madurai.',
      },
      {
        q: 'Which vehicles are recommended for family trips covering Madurai, Rameshwaram, and Kanyakumari?',
        a: 'We recommend our spacious 7-seater SUVs (Ertiga, Innova Crysta) or comfortable Sedans (Dzire, Etios) for multi-city Southern Tamil Nadu temple tours.',
      },
    ],

    metaTitle: 'Madurai Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Travel comfortably from Madurai, Tamil Nadu. Direct one-way taxi to Rameshwaram, Kodaikanal, Kanyakumari, Trichy & Chennai. Book online today with SAMAYAS.',
  },

  // ─────────────────────────────────────────────────────────
  // MAYILADUTHURAI — District 16
  // ─────────────────────────────────────────────────────────
  mayiladuthurai: {
    heroTagline:
      'Planning a temple pilgrimage from Mayiladuthurai? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Mayiladuthurai, including Mayuranathaswamy Temple and Vaitheeswaran Kovil.',

    overview: `Mayiladuthurai district, situated at the sacred heart of the fertile Kaveri Delta along the Coromandel Coast, is world-famous as the principal nerve center for Navagraha temple pilgrimages and Sangam Chola literary heritage.

Carved out of Nagapattinam district in 2020, Mayiladuthurai is bounded by Cuddalore to the north, Thanjavur and Tiruvarur to the west and south, and the Bay of Bengal to the east. Ancient legend holds that Goddess Parvati worshipped Lord Shiva here in the form of a peacock ('Mayil'), giving the town its name. Spiritually, Mayiladuthurai is the central launching point for the world-renowned Navagraha Temple Circuit, housing Vaitheeswaran Kovil (Mars/Angarakan), Thiruvengadu (Mercury/Budhan), Keezhperumpallam (Kethu), and nearby shrines. The district also boasts Mayuranathaswamy Temple on the banks of the River Kaveri (famous for Tula Ghat dip), Sirkazhi Sattainathar Temple, and Thirumanancheri (sacred for marriage remedies). Geographically, it encompasses the historic port of Poompuhar (Kaveripoompattinam)—the legendary Sangam Chola capital featured in the epic Silappatikaram.

Transportation in Mayiladuthurai is anchored by Mayiladuthurai Junction Railway Station (MV)—a major railway junction connecting Chennai, Trichy, and Tanjore—alongside Sirkazhi Station (SY) and Mayiladuthurai Central Bus Stand. Whether you are undertaking a Navagraha temple pilgrimage, seeking Nadi astrology at Vaitheeswaran Kovil, visiting Thirumanancheri, or traveling to Trichy Airport, SAMAYAS provides reliable 24/7 one-way cabs from Mayiladuthurai with zero return fare charges.`,

    overviewHighlights: [
      'Sacred Peacock Temple City and primary gateway to Vaitheeswaran Kovil & Navagraha temple circuit',
      'Historic Sangam Chola port city of Poompuhar, Thirumanancheri, and Kaveri Tula Ghat heritage',
      '24/7 direct one-way taxi transfers to Kumbakonam, Chidambaram, Thanjavur, Trichy, and Chennai'
    ],

    routes: [
      { name: 'Mayiladuthurai to Kumbakonam', to: 'Kumbakonam', distanceKm: 35, timeHours: 0.75, startingFare: 1950 },
      { name: 'Mayiladuthurai to Chidambaram', to: 'Chidambaram', distanceKm: 40, timeHours: 0.8, startingFare: 1950 },
      { name: 'Mayiladuthurai to Thanjavur', to: 'Thanjavur', distanceKm: 75, timeHours: 1.5, startingFare: 1950 },
      { name: 'Mayiladuthurai to Trichy', to: 'Trichy', distanceKm: 130, timeHours: 2.5, startingFare: 1950 },
      { name: 'Mayiladuthurai to Chennai', to: 'Chennai', distanceKm: 270, timeHours: 5.25, startingFare: 4050 },
      { name: 'Mayiladuthurai to Puducherry', to: 'Puducherry', distanceKm: 115, timeHours: 2.25, startingFare: 1950 },
      { name: 'Mayiladuthurai to Nagapattinam', to: 'Nagapattinam', distanceKm: 55, timeHours: 1.1, startingFare: 1950 },
      { name: 'Mayiladuthurai to Velankanni', to: 'Velankanni', distanceKm: 70, timeHours: 1.4, startingFare: 1950 },
      { name: 'Mayiladuthurai to Karaikal', to: 'Karaikal', distanceKm: 60, timeHours: 1.2, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Kumbakonam', distanceKm: 35, timeHours: 0.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chidambaram', distanceKm: 40, timeHours: 0.8, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Thanjavur',  distanceKm: 75, timeHours: 1.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Trichy',     distanceKm: 130, timeHours: 2.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chennai',    distanceKm: 270, timeHours: 5.25, hatchback: 4050, sedan: 4050, suv: 5400 },
      { to: 'Puducherry', distanceKm: 115, timeHours: 2.25, hatchback: 1950, sedan: 1950, suv: 2600 },
    ],

    pickupLocations: [
      'Mayiladuthurai Junction Railway Station (MV)',
      'Mayiladuthurai Central Bus Stand (Pattamangalam St)',
      'Vaitheeswaran Kovil Temple Gate',
      'Sirkazhi Bus Stand / Railway Station',
      'Poompuhar Beach Road & Museum',
      'Thirumanancheri Temple Gate',
      'Cuttery Junction / ECR Bypass',
      'Mahadana Street / Tula Ghat',
      'Manalmedu Bus Stop',
      'Kuthalam Railway Station Area',
    ],
    dropLocations: [
      'Kumbakonam',
      'Chidambaram',
      'Thanjavur',
      'Trichy',
      'Chennai',
      'Puducherry',
      'Nagapattinam',
      'Velankanni',
      'Karaikal',
    ],

    transportHubs: {
      busStands: [
        { name: 'Mayiladuthurai Central Bus Stand', address: 'Pattamangalam Street, Mayiladuthurai - 609001' },
        { name: 'Sirkazhi Bus Stand', address: 'Main Road, Sirkazhi - 609110' },
      ],
      railwayStations: [
        { name: 'Mayiladuthurai Junction Railway Station', code: 'MV', address: 'Station Road, Mayiladuthurai - 609001' },
        { name: 'Sirkazhi Railway Station', code: 'SY', address: 'Station Road, Sirkazhi - 609110' },
        { name: 'Kuthalam Railway Station', code: 'KTM', address: 'Kuthalam, Mayiladuthurai District - 609801' },
      ],
      airports: [
        { name: 'Tiruchirappalli International Airport (Nearest)', code: 'TRZ', distanceKm: 130, address: 'Airport Road, Tiruchirappalli - 620007' },
        { name: 'Puducherry Airport', code: 'PNY', distanceKm: 115, address: 'Lawspet, Puducherry - 605008' },
        { name: 'Chennai International Airport', code: 'MAA', distanceKm: 260, address: 'GST Road, Meenambakkam, Chennai - 600027' },
      ],
    },

    touristAttractions: [
      { name: 'Arulmigu Mayuranathaswamy Temple', description: 'Ancient Chola Shiva temple where Goddess Parvati worshipped as a peacock, featuring a majestic 9-tier gopuram and Tula Ghat.', distanceKm: 1 },
      { name: 'Arulmigu Vaitheeswaran Kovil', description: 'Renowned Navagraha Angarakan (Mars) temple dedicated to Lord Shiva as the divine healer, famous worldwide for Nadi Astrology.', distanceKm: 14 },
      { name: 'Poompuhar Beach & Heritage Complex', description: 'Historic Sangam Chola seaport city immortalized in Silappatikaram, featuring an art gallery museum and lighthouse.', distanceKm: 26 },
      { name: 'Sirkazhi Sattainathar Temple', description: 'Historic Chola shrine, birthplace of Saint Thirugnana Sambandar, featuring three distinct architectural temple tiers.', distanceKm: 20 },
      { name: 'Thirumanancheri Udhvahanathar Temple', description: 'Sacred Chola temple famous for marriage obstacle remedies where Lord Shiva and Parvati wed in divine matrimony.', distanceKm: 22 },
    ],

    industries: [
      'Navagraha Pilgrimage & Heritage Tourism Hospitality Sector',
      'Agriculture & Paddy Milling Cluster in Kaveri Delta',
      'Handloom Silk Weaving & Traditional Brassware Artifacts',
      'Marine Commercial Fishing & Aquaculture (Poompuhar / Thirumullaivasal)',
      'Traditional Nadi Astrology & Siddha Herbal Healing Centres',
    ],
    businessInfo:
      'Mayiladuthurai is the central hub for pilgrimage and agricultural commerce in the Kaveri Delta. Thousands of pilgrims undertaking Navagraha temple tours, Nadi astrology seekers at Vaitheeswaran Kovil, marriage-seeking families at Thirumanancheri, and paddy merchants commute daily between Mayiladuthurai, Kumbakonam, Chidambaram, and Trichy Airport. SAMAYAS delivers comfortable sedan rentals, custom Navagraha tour cabs, prompt Trichy/Puducherry Airport drops, and 24/7 one-way rentals with zero return charges.',

    reviews: [
      {
        name: 'Swaminathan K.',
        rating: 5,
        text: 'Booked a one-way cab from Mayiladuthurai Junction for Navagraha temple tour covering Vaitheeswaran Kovil and Thiruvengadu. Driver knew all temple timings perfectly!',
        route: 'Mayiladuthurai Navagraha Tour',
      },
      {
        name: 'Vijayalakshmi R.',
        rating: 5,
        text: 'Traveled with family from Mayiladuthurai to Thirumanancheri temple and Poompuhar beach. Clean sedan, polite driver, and very comfortable ride.',
        route: 'Mayiladuthurai to Poompuhar',
      },
      {
        name: 'Ganesh Moorthy',
        rating: 5,
        text: 'Regularly book SAMAYAS for business trips between Mayiladuthurai grain market and Chennai. Clear per-km pricing and zero return fare.',
        route: 'Mayiladuthurai to Chennai',
      },
      {
        name: 'Anand Kumar',
        rating: 4,
        text: 'Used SAMAYAS cab from Sirkazhi to Trichy Airport. Arrived right on schedule, driver drove safely, and fare matched online quote.',
        route: 'Sirkazhi to Trichy Airport',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Mayiladuthurai to Kumbakonam?',
        a: 'The one-way taxi fare from Mayiladuthurai to Kumbakonam (35 km via SH-64) starts at approximately ₹650 for a Hatchback, ₹800 for a Sedan (Dzire, Etios), and ₹1,200 for an SUV (Ertiga). Travel time is around 45 minutes.',
      },
      {
        q: 'How far is Vaitheeswaran Kovil from Mayiladuthurai and what is the cab fare?',
        a: 'Vaitheeswaran Kovil is approximately 14 km from Mayiladuthurai town. A one-way cab ride takes about 20 minutes and costs starting from ₹350.',
      },
      {
        q: 'Can I book a dedicated taxi for Navagraha temple tour starting from Mayiladuthurai?',
        a: 'Yes, SAMAYAS offers customized day-tour taxi packages covering all 9 Navagraha temples starting directly from Mayiladuthurai Junction or your hotel.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Mayiladuthurai Junction (MV) and Sirkazhi?',
        a: 'Yes, we provide 24/7 round-the-clock train station pickup at Mayiladuthurai Junction (MV), Sirkazhi Station (SY), and all surrounding delta towns.',
      },
      {
        q: 'Which vehicles are best for family temple pilgrimages in Mayiladuthurai?',
        a: 'We recommend our comfortable Sedans (Dzire, Etios) or spacious 7-seater SUVs (Ertiga, Innova Crysta) for family temple tours to Thirumanancheri and Vaitheeswaran Kovil.',
      },
    ],

    metaTitle: 'One-Way Cab from Mayiladuthurai | Book Online 24/7 | SAMAYAS',
    metaDescription:
      'Book a taxi for your next trip from Mayiladuthurai, Tamil Nadu. Direct one-way taxi to Kumbakonam, Chidambaram, Thanjavur, Trichy & Chennai. Available 24/7 with zero return fare.',
  },

  // ─────────────────────────────────────────────────────────
  // NAGAPATTINAM — District 17
  // ─────────────────────────────────────────────────────────
  nagapattinam: {
    heroTagline:
      'Heading out from coastal Nagapattinam? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Nagapattinam, including Velankanni Basilica and Nagore Dargah.',

    overview: `Nagapattinam district, stretched along the scenic Coromandel Coast of the Bay of Bengal in eastern Tamil Nadu, is globally celebrated for its multi-faith spiritual harmony, ancient Chola maritime heritage, and rich marine biodiversity.

Bounded by the Karaikal enclave of Puducherry, Tiruvarur and Mayiladuthurai to the west and north, and the Palk Strait to the south, Nagapattinam has been a major international trading port since the Sangam Chola era. The district is world-famous as the site of Velankanni—home to the Basilica of Our Lady of Good Health (revered as the 'Lourdes of the East')—and Nagore Sharif, host to the historic 500-year-old Nagore Dargah of Sufi Saint Shahul Hamid. Nagapattinam town itself features the ancient Kayarohanaswamy Temple (a Saptha Vidangam Shiva shrine). Nature lovers flock to Point Calimere (Kodiakarai) Wildlife and Bird Sanctuary, home to tens of thousands of migratory pink flamingos and wild blackbuck deer.

Economically, Nagapattinam thrives on marine commercial fishing, seafood processing, CPCL oil refining, and salt production at Vedaranyam. Transportation is anchored by Nagapattinam Junction (NGT), Velankanni Railway Station (VLNK), and Nagapattinam Central Bus Stand along the East Coast Road (ECR). Whether you are embarking on a pilgrimage to Velankanni and Nagore, visiting Point Calimere, or taking an outstation journey to Chennai, Trichy Airport, or Rameshwaram, SAMAYAS provides reliable 24/7 one-way cabs from Nagapattinam with zero return fare charges.`,

    overviewHighlights: [
      'Global spiritual sanctuary housing Velankanni Basilica (Lourdes of the East) and 500-year Nagore Dargah',
      'Historic Chola port city with CPCL refinery, marine fishing harbor, and Point Calimere wildlife reserve',
      '24/7 direct one-way taxi transfers along ECR to Thanjavur, Trichy Airport, Chennai, Puducherry & Rameshwaram'
    ],

    routes: [
      { name: 'Nagapattinam to Velankanni', to: 'Velankanni', distanceKm: 12, timeHours: 0.3, startingFare: 1950 },
      { name: 'Nagapattinam to Thanjavur', to: 'Thanjavur', distanceKm: 85, timeHours: 1.75, startingFare: 1950 },
      { name: 'Nagapattinam to Trichy', to: 'Trichy', distanceKm: 145, timeHours: 2.75, startingFare: 2175 },
      { name: 'Nagapattinam to Chennai', to: 'Chennai', distanceKm: 310, timeHours: 6, startingFare: 4650 },
      { name: 'Nagapattinam to Puducherry', to: 'Puducherry', distanceKm: 140, timeHours: 2.75, startingFare: 2100 },
      { name: 'Nagapattinam to Rameshwaram', to: 'Rameshwaram', distanceKm: 230, timeHours: 4.5, startingFare: 3450 },
      { name: 'Nagapattinam to Kumbakonam', to: 'Kumbakonam', distanceKm: 65, timeHours: 1.3, startingFare: 1950 },
      { name: 'Nagapattinam to Karaikal', to: 'Karaikal', distanceKm: 20, timeHours: 0.5, startingFare: 1950 },
      { name: 'Nagapattinam to Madurai', to: 'Madurai', distanceKm: 210, timeHours: 4.25, startingFare: 3150 },
    ],

    fareTable: [
      { to: 'Velankanni',  distanceKm: 12, timeHours: 0.3, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Thanjavur',   distanceKm: 85, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Trichy',      distanceKm: 145, timeHours: 2.75, hatchback: 2175, sedan: 2175, suv: 2900 },
      { to: 'Chennai',     distanceKm: 310, timeHours: 6, hatchback: 4650, sedan: 4650, suv: 6200 },
      { to: 'Puducherry',  distanceKm: 140, timeHours: 2.75, hatchback: 2100, sedan: 2100, suv: 2800 },
      { to: 'Rameshwaram', distanceKm: 230, timeHours: 4.5, hatchback: 3450, sedan: 3450, suv: 4600 },
    ],

    pickupLocations: [
      'Nagapattinam Junction Railway Station (NGT)',
      'Nagapattinam Central Bus Stand (Public Office Rd)',
      'Velankanni Basilica Church Square',
      'Velankanni Railway Station (VLNK)',
      'Nagore Dargah Main Entrance',
      'Point Calimere (Kodiakarai) Gate',
      'Nagapattinam Port / Beach Road',
      'Vedaranyam Bus Stand',
      'Keechankuppam Fishing Harbor',
      'Collectorate Office Complex',
    ],
    dropLocations: [
      'Velankanni',
      'Thanjavur',
      'Trichy',
      'Chennai',
      'Puducherry',
      'Rameshwaram',
      'Kumbakonam',
      'Karaikal',
      'Madurai',
    ],

    transportHubs: {
      busStands: [
        { name: 'Nagapattinam Central Bus Stand', address: 'Public Office Road, Nagapattinam - 611001' },
        { name: 'Velankanni Bus Stand', address: 'Main Road, Velankanni - 611111' },
        { name: 'Vedaranyam Bus Stand', address: 'Bus Stand Road, Vedaranyam - 614810' },
      ],
      railwayStations: [
        { name: 'Nagapattinam Junction Railway Station', code: 'NGT', address: 'Station Road, Nagapattinam - 611001' },
        { name: 'Velankanni Railway Station', code: 'VLNK', address: 'Station Road, Velankanni - 611111' },
        { name: 'Nagore Railway Station', code: 'NCR', address: 'Nagore, Nagapattinam - 611002' },
      ],
      airports: [
        { name: 'Tiruchirappalli International Airport (Nearest)', code: 'TRZ', distanceKm: 145, address: 'Airport Road, Tiruchirappalli - 620007' },
        { name: 'Puducherry Airport', code: 'PNY', distanceKm: 140, address: 'Lawspet, Puducherry - 605008' },
        { name: 'Chennai International Airport', code: 'MAA', distanceKm: 300, address: 'GST Road, Meenambakkam, Chennai - 600027' },
      ],
    },

    touristAttractions: [
      { name: 'Basilica of Our Lady of Good Health, Velankanni', description: 'World-famous Marian pilgrimage shrine on the Bay of Bengal coast, attracting millions of multi-faith pilgrims.', distanceKm: 12 },
      { name: 'Nagore Dargah (Nagore Sharif)', description: 'Historic 500-year-old Sufi shrine of Saint Hazrath Shahul Hamid featuring five majestic minarets.', distanceKm: 5 },
      { name: 'Point Calimere (Kodiakarai) Wildlife Sanctuary', description: 'Coastal wetland sanctuary famous for wintering pink flamingos, wild blackbuck deer, and dolphins.', distanceKm: 45 },
      { name: 'Kayarohanaswamy Temple', description: 'Ancient Chola Shiva temple featuring a rare lapis lazuli Thyagaraja idol, counted among the 7 Saptha Vidangam shrines.', distanceKm: 1 },
      { name: 'Vedaranyeswarar Temple & Salt March Site', description: 'Historic coastal temple and beach site where C. Rajagopalachari led the 1930 Vedaranyam Salt Satyagraha.', distanceKm: 48 },
    ],

    industries: [
      'Multi-Faith Pilgrimage & Coastal Hospitality Sector (Velankanni / Nagore)',
      'Marine Commercial Fishing & Seafood Export Processing Harbor',
      'CPCL Petroleum Refining & Chemical Processing Complex',
      'Vedaranyam Marine Salt Production & Mineral Works',
      'Agriculture & Paddy Farming in Delta Coastal Belt',
    ],
    businessInfo:
      'Nagapattinam is a premier coastal and spiritual center in Eastern Tamil Nadu. Millions of international and national pilgrims visiting Velankanni Church and Nagore Dargah, CPCL refinery engineers, seafood export merchants, and eco-tourists visiting Point Calimere rely daily on intercity road transport. SAMAYAS delivers comfortable sedans, spacious family 7-seater SUVs for pilgrimage groups, prompt Trichy/Puducherry Airport transfers, and 24/7 one-way rentals with zero return fare charges.',

    reviews: [
      {
        name: 'Joseph Xavier',
        rating: 5,
        text: 'Booked an Ertiga SUV from Nagapattinam Junction to Velankanni Church for our family annual feast pilgrimage. Driver was punctual, polite, and very helpful with luggage.',
        route: 'Nagapattinam to Velankanni',
      },
      {
        name: 'Syed Nizamuddin',
        rating: 5,
        text: 'Took a one-way cab from Nagore Sharif to Trichy Airport for an international flight. Smooth ride along the highway, clean car, and exact fare as quoted.',
        route: 'Nagore to Trichy Airport',
      },
      {
        name: 'Karthikeyan B.',
        rating: 5,
        text: 'Regularly book SAMAYAS for seafood export business travel between Nagapattinam harbor and Chennai. Reliable per-km pricing and zero return charges.',
        route: 'Nagapattinam to Chennai',
      },
      {
        name: 'Deepa Natarajan',
        rating: 4,
        text: 'Booked a cab from Nagapattinam to Point Calimere bird sanctuary for a weekend trip. Driver drove carefully and waited during our flamingo sighting tour.',
        route: 'Nagapattinam to Point Calimere',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Nagapattinam to Velankanni?',
        a: 'The one-way taxi fare from Nagapattinam to Velankanni (12 km) starts at approximately ₹400 for a Hatchback, ₹500 for a Sedan (Dzire, Etios), and ₹800 for an SUV (Ertiga). Travel time is around 20 minutes.',
      },
      {
        q: 'How far is Nagore Dargah from Nagapattinam Railway Station and what is the taxi charge?',
        a: 'Nagore Dargah is approximately 5 km from Nagapattinam Junction (NGT). A one-way cab ride takes about 10 minutes and costs starting from ₹250.',
      },
      {
        q: 'Can I book a direct one-way cab from Velankanni to Trichy Airport (TRZ)?',
        a: 'Yes, SAMAYAS operates daily direct 24/7 one-way cabs from Velankanni and Nagapattinam directly to Tiruchirappalli International Airport (TRZ - 145 km) starting from ₹2,200.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Velankanni Railway Station (VLNK)?',
        a: 'Yes, we provide 24/7 round-the-clock train station pickup at Velankanni Station (VLNK), Nagapattinam Junction (NGT), and all church hostels and hotels in Velankanni.',
      },
      {
        q: 'Which vehicles are recommended for family pilgrimage trips to Velankanni and Nagore?',
        a: 'We recommend our spacious 7-seater SUVs (Ertiga, Innova Crysta) for family pilgrimage groups traveling with luggage and elderly relatives.',
      },
    ],

    metaTitle: 'Nagapattinam One-Way Taxi | 24/7 Cab Booking | SAMAYAS',
    metaDescription:
      'Travel comfortably from Nagapattinam, Tamil Nadu. Direct one-way taxi to Velankanni Basilica, Thanjavur, Trichy, Chennai & Rameshwaram. Reserve your cab now.',
  },

  // ─────────────────────────────────────────────────────────
  // NAMAKKAL — District 18
  // ─────────────────────────────────────────────────────────
  namakkal: {
    heroTagline:
      'Traveling from the Transport Capital of Namakkal? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Namakkal, including Anjaneyar Temple and Kolli Hills road.',

    overview: `Namakkal district, situated in west-central Tamil Nadu along the eastern banks of the Kaveri River, is nationally celebrated as the 'Egg City', 'Lorry City', and the gateway to the misty Kolli Hills.

Bounded by Salem to the north, Karur to the south, Erode to the west, and Tiruchirappalli and Perambalur to the east, Namakkal holds an immense industrial and agricultural footprint. The district is India's leading poultry hub, producing over 5 crore eggs daily and exporting fresh eggs across South Asia and the Middle East. It is equally famous as South India's truck transportation epicenter, housing massive lorry body building workshops, rig unit manufacturing plants, and heavy transport fleets. Atop a single giant rock monolith in the city center stands the 16th-century Namakkal Fort, flanked by Sri Namagiri Thayar Sametha Narasimhaswamy Temple and the iconic 18-foot monolithic Anjaneyar (Hanuman) statue.

Nature enthusiasts flock to Kolli Hills (Kolli Malai)—a serene mountain range famous for 70 thrilling hairpin bends, Agaya Gangai Waterfalls, fruit orchards, and the ancient Arapaleeswarar Temple. Transportation is anchored by Namakkal Railway Station (NMKL) on the Salem-Karur line and Namakkal Central Bus Stand along NH-44. Whether you are a poultry entrepreneur, transport fleet auditor, Kolli Hills trekker, or pilgrim, SAMAYAS provides reliable 24/7 one-way cabs from Namakkal with zero return fare charges.`,

    overviewHighlights: [
      'Poultry & Transport Capital producing 5 Cr eggs daily and hosting South India\'s largest lorry body building cluster',
      'Home to 18-foot monolithic Anjaneyar Temple, 16th-century Rock Fort, and Kolli Hills (70 hairpin bends)',
      '24/7 direct one-way taxi transfers along NH-44 to Salem, Karur, Trichy Airport, Erode, and Bengaluru'
    ],

    routes: [
      { name: 'Namakkal to Salem', to: 'Salem', distanceKm: 50, timeHours: 1, startingFare: 1950 },
      { name: 'Namakkal to Karur', to: 'Karur', distanceKm: 45, timeHours: 0.8, startingFare: 1950 },
      { name: 'Namakkal to Trichy', to: 'Trichy', distanceKm: 85, timeHours: 1.5, startingFare: 1950 },
      { name: 'Namakkal to Kolli Hills', to: 'Kolli Hills', distanceKm: 55, timeHours: 1.75, startingFare: 1950 },
      { name: 'Namakkal to Coimbatore', to: 'Coimbatore', distanceKm: 165, timeHours: 3.25, startingFare: 2475 },
      { name: 'Namakkal to Erode', to: 'Erode', distanceKm: 60, timeHours: 1.1, startingFare: 1950 },
      { name: 'Namakkal to Chennai', to: 'Chennai', distanceKm: 370, timeHours: 6.25, startingFare: 5550 },
      { name: 'Namakkal to Bengaluru', to: 'Bengaluru', distanceKm: 245, timeHours: 4.25, startingFare: 3675 },
      { name: 'Namakkal to Madurai', to: 'Madurai', distanceKm: 155, timeHours: 2.75, startingFare: 2325 },
    ],

    fareTable: [
      { to: 'Salem',       distanceKm: 50, timeHours: 1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Karur',       distanceKm: 45, timeHours: 0.8, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Trichy',      distanceKm: 85, timeHours: 1.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Kolli Hills', distanceKm: 55, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Coimbatore',  distanceKm: 165, timeHours: 3.25, hatchback: 2475, sedan: 2475, suv: 3300 },
      { to: 'Bengaluru',   distanceKm: 245, timeHours: 4.25, hatchback: 3675, sedan: 3675, suv: 4900 },
    ],

    pickupLocations: [
      'Namakkal Railway Station (NMKL)',
      'Namakkal Central Bus Stand (Salem Rd)',
      'Anjaneyar Temple Gate',
      'Mohanur Road Lorry Body Building Workshop Area',
      'Collectorate Complex / Salem Bypass',
      'Paramathi Velur Bus Stand',
      'Rasipuram Bus Stand & Railway Station',
      'Tiruchengode Arthanareeswarar Temple Foot',
      'Senthamangalam / Kolli Hills Foothills',
      'Semmedu (Kolli Hills Top)',
    ],
    dropLocations: [
      'Salem',
      'Karur',
      'Trichy',
      'Kolli Hills',
      'Coimbatore',
      'Erode',
      'Chennai',
      'Bengaluru',
      'Madurai',
    ],

    transportHubs: {
      busStands: [
        { name: 'Namakkal Central Bus Stand', address: 'Salem Road, Namakkal - 637001' },
        { name: 'Tiruchengode Bus Stand', address: 'Main Road, Tiruchengode - 637211' },
        { name: 'Rasipuram Bus Stand', address: 'Bus Stand Road, Rasipuram - 637408' },
      ],
      railwayStations: [
        { name: 'Namakkal Railway Station', code: 'NMKL', address: 'Station Road, Namakkal - 637001' },
        { name: 'Rasipuram Railway Station', code: 'RASP', address: 'Rasipuram, Namakkal District - 637408' },
        { name: 'Mohanur Railway Station', code: 'MYU', address: 'Mohanur, Namakkal District - 637015' },
      ],
      airports: [
        { name: 'Salem Domestic Airport (Nearest)', code: 'SXV', distanceKm: 65, address: 'Kamalapuram, Salem - 636309' },
        { name: 'Tiruchirappalli International Airport', code: 'TRZ', distanceKm: 95, address: 'Airport Road, Tiruchirappalli - 620007' },
        { name: 'Coimbatore International Airport', code: 'CJB', distanceKm: 155, address: 'Airport Road, Peelamedu, Coimbatore - 641014' },
      ],
    },

    touristAttractions: [
      { name: 'Namakkal Anjaneyar Temple', description: 'World-renowned open-air shrine featuring a 18-foot monolithic granite statue of Lord Hanuman standing under open sky.', distanceKm: 1 },
      { name: 'Kolli Hills (Kolli Malai)', description: 'Unspoiled hill station famous for 70 mountain hairpin bends, Agaya Gangai Waterfalls, pineapple orchards, and fresh mountain air.', distanceKm: 55 },
      { name: 'Namakkal Fort & Narasimhaswamy Temple', description: '16th-century rock-cut hill fort constructed atop a giant single granite monolith rock by Thirumalai Nayak.', distanceKm: 1.5 },
      { name: 'Tiruchengode Arthanareeswarar Temple', description: 'Unique hilltop shrine dedicated to the half-male half-female form of Lord Shiva and Parvati, featuring 60-ft hill steps.', distanceKm: 35 },
      { name: 'Agaya Gangai Waterfalls', description: 'Breathtaking 300-foot waterfall cascading into a deep jungle gorge in Kolli Hills, reached via 1,000 steps.', distanceKm: 60 },
    ],

    industries: [
      'Poultry Farming & Egg Export Industry Cluster (Producing 5 Cr eggs daily for India & Middle East)',
      'Truck & Lorry Body Building Workshops & Heavy Transport Fleet Hub',
      'Borewell Rig & Water Drilling Equipment Manufacturing Industry',
      'Paper Mills & Sugar Refining Factories (Mohanur / Paramathi Velur)',
      'Powerloom Textile Weaving Industry in Tiruchengode',
    ],
    businessInfo:
      'Namakkal is India\'s egg capital and South India\'s lorry body building center. Poultry farm owners, egg exporters, lorry fleet operators, drilling rig manufacturers, and eco-tourists driving up to Kolli Hills commute daily between Namakkal, Salem, Trichy Airport, and Bengaluru. SAMAYAS delivers executive sedans, experienced hill drivers for Kolli Hills 70 hairpin bends, prompt Trichy/Salem Airport drops, and 24/7 one-way rentals across NH-44.',

    reviews: [
      {
        name: 'Shanmugasundaram P.',
        rating: 5,
        text: 'Booked a one-way cab from Namakkal poultry market to Trichy Airport for an egg export meeting. Driver was early, car was spotless, and driving was smooth.',
        route: 'Namakkal to Trichy Airport',
      },
      {
        name: 'Deepika Subramani',
        rating: 5,
        text: 'Took a weekend family trip from Namakkal to Kolli Hills Agaya Gangai falls. The driver handled all 70 hairpin bends effortlessly and drove very safely.',
        route: 'Namakkal to Kolli Hills',
      },
      {
        name: 'Karthik N.',
        rating: 5,
        text: 'Regularly book SAMAYAS for lorry body workshop business trips from Namakkal to Salem and Bengaluru. Transparent rates and no return charges.',
        route: 'Namakkal to Bengaluru',
      },
      {
        name: 'Venkatesh R.',
        rating: 4,
        text: 'Booked a cab from Tiruchengode temple to Erode. Courteous driver, good AC, and exact online fare.',
        route: 'Tiruchengode to Erode',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Namakkal to Salem?',
        a: 'The one-way taxi fare from Namakkal to Salem (50 km via NH-44) starts at approximately ₹800 for a Hatchback, ₹950 for a Sedan (Dzire, Etios), and ₹1,350 for an SUV (Ertiga). Travel time is around 1 hour.',
      },
      {
        q: 'How far is Kolli Hills from Namakkal town and what is the cab charge?',
        a: 'Kolli Hills (Semmedu) is approximately 55 km from Namakkal town. A one-way taxi ride takes about 1 hour 45 minutes through the 70 hairpin bends and costs starting from ₹1,500.',
      },
      {
        q: 'Are SAMAYAS drivers experienced in driving up Kolli Hills 70 hairpin bends?',
        a: 'Yes, all drivers assigned to Kolli Hills mountain routes are specially trained and highly experienced in handling steep hairpin curves and mountain hairpins safely.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Namakkal Railway Station (NMKL)?',
        a: 'Yes, we provide 24/7 round-the-clock train station pickup at Namakkal Station (NMKL), Rasipuram, Tiruchengode, and all poultry and industrial hubs in Namakkal.',
      },
      {
        q: 'Can I book a one-way cab from Namakkal to Bengaluru or Trichy Airport?',
        a: 'Yes, we operate daily direct one-way cabs from Namakkal to Bengaluru (245 km via NH-44) starting from ₹3,200 and to Trichy Airport (95 km) starting from ₹1,350.',
      },
    ],

    metaTitle: 'Book One-Way Taxi from Namakkal | No Return Fare | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Namakkal? Direct one-way taxi to Salem, Kolli Hills, Trichy, Erode & Bengaluru. Transparent per-km rates with zero return fee.',
  },

  // ─────────────────────────────────────────────────────────
  // NILGIRIS — District 19
  // ─────────────────────────────────────────────────────────
  nilgiris: {
    heroTagline:
      'Exploring the Blue Mountains of Nilgiris? Book a 24/7 mountain one-way taxi with SAMAYAS. Doorstep pickups across Ooty, Coonoor, and Doddabetta Peak.',

    overview: `Nilgiris district, perched high in the Western Ghats at the tri-junction of Tamil Nadu, Kerala, and Karnataka, is internationally renowned as the 'Queen of Hill Stations' and South India's premier mountain paradise.

Crowned by Ooty (Udhagamandalam), Coonoor, Kotagiri, and Gudalur, the district's elevation ranges from 1,000 to 2,637 meters at Doddabetta Peak—the highest point in Tamil Nadu. The Nilgiris is world-famous for the UNESCO World Heritage Nilgiri Mountain Railway (NMR steam toy train), rolling tea gardens producing aromatic high-altitude Nilgiri teas, eucalyptus oil distilleries, artisanal chocolates, and indigenous Toda tribal culture. The district is also home to the Defense Services Staff College (DSSC) in Wellington and the pristine Mudumalai Tiger Reserve & Theppakadu Elephant Camp.

Navigating mountain roads requires specialized skill. SAMAYAS employs expert mountain drivers trained specifically in navigating the 36 hairpin bends of the Mettupalayam ghat road, Kotagiri curves, and Gudalur forest passes. Transportation in Nilgiris is anchored by Ooty Central Bus Stand (ATC), Coonoor Station (ONR), and Mettupalayam Railway Station (MTP) at the foothills, with Coimbatore International Airport (CJB) just 88 km away from Coonoor. Whether you are taking an outstation hill descent to Coimbatore Airport, traveling to Mysuru, Wayanad, or Bengaluru, SAMAYAS provides reliable 24/7 one-way cabs from Nilgiris with zero return fare charges.`,

    overviewHighlights: [
      'Queen of Hill Stations crowning Ooty, Coonoor, Doddabetta Peak, and UNESCO Nilgiri Mountain Railway',
      'Famed for high-altitude tea plantations, Mudumalai Tiger Reserve, DSSC Wellington, and Toda heritage',
      '24/7 mountain one-way cabs with expert hill drivers to Coimbatore Airport (CJB), Mysuru, Bengaluru & Wayanad'
    ],

    routes: [
      { name: 'Ooty to Coimbatore Airport', to: 'Coimbatore Airport', distanceKm: 85, timeHours: 3, startingFare: 1950 },
      { name: 'Ooty to Mettupalayam', to: 'Mettupalayam', distanceKm: 50, timeHours: 2, startingFare: 1950 },
      { name: 'Ooty to Mysuru', to: 'Mysuru', distanceKm: 125, timeHours: 3.5, startingFare: 1950 },
      { name: 'Ooty to Bengaluru', to: 'Bengaluru', distanceKm: 270, timeHours: 6.5, startingFare: 4050 },
      { name: 'Ooty to Wayanad', to: 'Wayanad', distanceKm: 110, timeHours: 3.25, startingFare: 1950 },
      { name: 'Ooty to Salem', to: 'Salem', distanceKm: 165, timeHours: 4.5, startingFare: 2475 },
      { name: 'Ooty to Chennai', to: 'Chennai', distanceKm: 540, timeHours: 10.5, startingFare: 8100 },
      { name: 'Ooty to Kochi', to: 'Kochi', distanceKm: 280, timeHours: 7.5, startingFare: 4200 },
      { name: 'Ooty to Erode', to: 'Erode', distanceKm: 140, timeHours: 4, startingFare: 2100 },
    ],

    fareTable: [
      { to: 'Coimbatore Airport', distanceKm: 85, timeHours: 3, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Mettupalayam',       distanceKm: 50, timeHours: 2, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Mysuru',             distanceKm: 125, timeHours: 3.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Bengaluru',          distanceKm: 270, timeHours: 6.5, hatchback: 4050, sedan: 4050, suv: 5400 },
      { to: 'Wayanad',            distanceKm: 110, timeHours: 3.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Salem',              distanceKm: 165, timeHours: 4.5, hatchback: 2475, sedan: 2475, suv: 3300 },
    ],

    pickupLocations: [
      'Ooty Central Bus Stand (ATC)',
      'Ooty Railway Station (UAM)',
      'Charing Cross / Commercial Road',
      'Government Botanical Garden Gate',
      'Coonoor Bus Stand & Railway Station (ONR)',
      'Kotagiri Bus Stand',
      'Gudalur Main Bus Stand',
      'Doddabetta Peak Gate',
      'Pykara Lake / Boat House Entrance',
      'Wellington Cantonment / DSSC Gate',
    ],
    dropLocations: [
      'Coimbatore',
      'Mettupalayam',
      'Mysuru',
      'Bengaluru',
      'Wayanad',
      'Salem',
      'Chennai',
      'Kochi',
      'Erode',
    ],

    transportHubs: {
      busStands: [
        { name: 'Ooty ATC Central Bus Stand', address: 'Commercial Road, Ooty - 643001' },
        { name: 'Coonoor Bus Stand', address: 'VP Street, Coonoor - 643101' },
        { name: 'Kotagiri Bus Stand', address: 'Main Road, Kotagiri - 643217' },
      ],
      railwayStations: [
        { name: 'Udhagamandalam (Ooty) Railway Station', code: 'UAM', address: 'Station Road, Ooty - 643001' },
        { name: 'Coonoor Railway Station', code: 'ONR', address: 'Coonoor, Nilgiris - 643101' },
        { name: 'Mettupalayam Railway Station (Foothills)', code: 'MTP', address: 'Mettupalayam - 641301' },
      ],
      airports: [
        { name: 'Coimbatore International Airport (Nearest)', code: 'CJB', distanceKm: 88, address: 'Airport Road, Peelamedu, Coimbatore - 641014' },
        { name: 'Mysore Airport', code: 'MYQ', distanceKm: 115, address: 'Kharakola, Mysuru, Karnataka - 571311' },
      ],
    },

    touristAttractions: [
      { name: 'Government Botanical Garden & Ooty Lake', description: 'Iconic 55-acre terraced garden established in 1848 featuring a 20-million-year-old fossil tree and 65-acre lake with boating.', distanceKm: 1 },
      { name: 'Doddabetta Peak', description: 'Highest mountain peak in the Nilgiri range at 2,637 meters altitude, featuring a telescope observatory and 360-degree views.', distanceKm: 9 },
      { name: 'UNESCO Nilgiri Mountain Railway (NMR)', description: 'Historic 1908 meter-gauge heritage steam train winding through mountain tunnels, bridges, and misty tea estates.', distanceKm: 0.5 },
      { name: 'Sim\'s Park & Dolphin\'s Nose, Coonoor', description: 'Picturesque 12-hectare botanical park in Coonoor and dramatic cliff viewpoint offering vistas of Catherine Falls.', distanceKm: 18 },
      { name: 'Mudumalai Tiger Reserve & Elephant Camp', description: 'Protected wildlife sanctuary in the Western Ghats home to Bengal tigers, Asian elephants, panthers, and gaur.', distanceKm: 35 },
    ],

    industries: [
      'Nilgiri High-Altitude Tea Estates & Processing Factories (Orthodox & CTC teas)',
      'Luxury Hill Resort, Eco-Tourism & Hospitality Industry',
      'Eucalyptus Oil Distilleries & Homemade Artisanal Chocolate Cottage Units',
      'Exotic Horticulture Farming (Carrots, Strawberries, Exotic Cut Flowers)',
      'Cordite Factory Aruvankadu & Defense Services Staff College (DSSC Wellington)',
    ],
    businessInfo:
      'Nilgiris is South India\'s primary hill station economy driven by tea exports, luxury hospitality, defense institutions (DSSC Wellington), and high-altitude horticulture. Tea estate buyers, defense officers, resort managers, honeymooners, and international vacationers rely heavily on specialized mountain road transport. SAMAYAS delivers expert hill drivers trained for ghat hairpin bends, 24/7 Coimbatore Airport drops, luggage-friendly SUVs, and zero-return fare One-Way mountain cabs.',

    reviews: [
      {
        name: 'Siddharth M.',
        rating: 5,
        text: 'Booked a one-way cab from Ooty Lake to Coimbatore Airport for our return flight. Driver was a true expert on Mettupalayam ghat road hairpin bends and reached CJB on time!',
        route: 'Ooty to Coimbatore Airport',
      },
      {
        name: 'Anupama Menon',
        rating: 5,
        text: 'Traveled with family from Coonoor to Mysuru via Bandipur forest. Safe driving, pristine vehicle, and polite driver from SAMAYAS.',
        route: 'Coonoor to Mysuru',
      },
      {
        name: 'Major Rajeev Nair',
        rating: 5,
        text: 'Regularly book SAMAYAS for transfers between DSSC Wellington cantonment and Bengaluru. Clean cars and reliable billing.',
        route: 'Wellington to Bengaluru',
      },
      {
        name: 'Pooja Hegde',
        rating: 4,
        text: 'Booked an Ertiga SUV for a family tour covering Doddabetta peak, Pykara lake, and Mudumalai safari. Wonderful hill driving experience!',
        route: 'Nilgiris Local Tour',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Ooty to Coimbatore Airport (CJB)?',
        a: 'The one-way taxi fare from Ooty to Coimbatore International Airport (CJB - 85 km via Mettupalayam ghat) starts at approximately ₹2,400 for a Hatchback, ₹2,800 for a Sedan (Dzire, Etios), and ₹3,900 for an SUV (Ertiga, Innova). Travel time is around 3 hours.',
      },
      {
        q: 'Are SAMAYAS drivers experienced with mountain fog and hairpin bends in Nilgiris?',
        a: 'Yes! All drivers assigned to Nilgiris routes (Ooty, Coonoor, Kotagiri, Gudalur) are local hill experts specifically trained in mountain gear control, fog driving, and hairpin turns.',
      },
      {
        q: 'Can I book a one-way cab from Ooty to Mysuru or Bengaluru?',
        a: 'Yes, we operate daily direct one-way cabs from Ooty/Coonoor to Mysuru (125 km via Bandipur) starting from ₹2,900 and to Bengaluru (270 km) starting from ₹4,800.',
      },
      {
        q: 'Are 24/7 taxi pickups available in Coonoor, Kotagiri, and Gudalur?',
        a: 'Yes, SAMAYAS provides round-the-clock doorstep pickup from all towns, resorts, tea estates, and hotels across Ooty, Coonoor, Kotagiri, Gudalur, and Wellington.',
      },
      {
        q: 'Which vehicles are recommended for family hill trips in the Nilgiris?',
        a: 'We recommend our comfortable Sedans (Dzire, Etios) or spacious 7-seater SUVs (Ertiga, Innova Crysta) to comfortably navigate mountain inclines with luggage.',
      },
    ],

    metaTitle: 'Nilgiris Taxi Service | Ooty Hill & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Travel comfortably from Nilgiris (Ooty & Coonoor), Tamil Nadu. Direct hill cabs to Coimbatore Airport, Mysuru, Bengaluru & Mettupalayam. Instant booking confirmation.',
  },

  // ─────────────────────────────────────────────────────────
  // PERAMBALUR — District 20
  // ─────────────────────────────────────────────────────────
  perambalur: {
    heroTagline:
      'Looking for an outstation cab from Perambalur? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Perambalur, including MRF Tyre plant and Dhanalakshmi Srinivasan complex.',

    overview: `Perambalur district, strategically located along the multi-lane Chennai-Trichy National Highway (NH-45) in central Tamil Nadu, is a major industrial manufacturing, higher educational, and heritage hub.

Bounded by Ariyalur, Tiruchirappalli, Cuddalore, and Salem, Perambalur serves as an essential transport gateway between North and South Tamil Nadu. The district's economic profile is anchored by massive industrial manufacturing complexes including the MRF Tyre Manufacturing Plant at Naranamangalam, sugar mills, and a thriving Special Economic Zone (SEZ). Perambalur is equally famous as an educational hub, housing the vast Dhanalakshmi Srinivasan Group of Institutions and Roever Educational Trust, drawing thousands of students and faculty nationwide.

Historically, Perambalur features the imposing 17th-century Ranjankudi Fort—a well-preserved granite fortress built by the Nawab of the Carnatic that witnessed historic Anglo-French battles. Transportation is anchored by Perambalur Central Bus Stand on NH-45, with Tiruchirappalli International Airport (TRZ) located just 55 km south. Whether you are an MRF industrial executive, an educational delegate, or a traveler taking an express cab to Trichy Airport or Chennai, SAMAYAS provides reliable 24/7 one-way cabs from Perambalur with zero return fare charges.`,

    overviewHighlights: [
      'Industrial & Agricultural hub hosting MRF Tyre Mega Plant, Eraiyur SEZ, and top shallot farming',
      'Historical landmark guarded by 17th-century Ranjankudi Fort, Siruvachur Temple, and Sathanur Fossil Park',
      '24/7 direct one-way taxi transfers along NH-45 to Trichy Airport (55 km), Chennai, Salem, and Ariyalur'
    ],

    routes: [
      { name: 'Perambalur to Trichy', to: 'Trichy', distanceKm: 55, timeHours: 1, startingFare: 1950 },
      { name: 'Perambalur to Chennai', to: 'Chennai', distanceKm: 280, timeHours: 4.75, startingFare: 4200 },
      { name: 'Perambalur to Salem', to: 'Salem', distanceKm: 105, timeHours: 2, startingFare: 1950 },
      { name: 'Perambalur to Ariyalur', to: 'Ariyalur', distanceKm: 30, timeHours: 0.6, startingFare: 1950 },
      { name: 'Perambalur to Kallakurichi', to: 'Kallakurichi', distanceKm: 65, timeHours: 1.25, startingFare: 1950 },
      { name: 'Perambalur to Puducherry', to: 'Puducherry', distanceKm: 145, timeHours: 2.75, startingFare: 2175 },
      { name: 'Perambalur to Coimbatore', to: 'Coimbatore', distanceKm: 215, timeHours: 4.25, startingFare: 3225 },
      { name: 'Perambalur to Thanjavur', to: 'Thanjavur', distanceKm: 95, timeHours: 1.75, startingFare: 1950 },
      { name: 'Perambalur to Madurai', to: 'Madurai', distanceKm: 185, timeHours: 3.25, startingFare: 2775 },
    ],

    fareTable: [
      { to: 'Trichy',     distanceKm: 55, timeHours: 1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chennai',    distanceKm: 280, timeHours: 4.75, hatchback: 4200, sedan: 4200, suv: 5600 },
      { to: 'Salem',      distanceKm: 105, timeHours: 2, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Ariyalur',   distanceKm: 30, timeHours: 0.6, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Puducherry', distanceKm: 145, timeHours: 2.75, hatchback: 2175, sedan: 2175, suv: 2900 },
      { to: 'Coimbatore', distanceKm: 215, timeHours: 4.25, hatchback: 3225, sedan: 3225, suv: 4300 },
    ],

    pickupLocations: [
      'Perambalur New Bus Stand (NH-45 Bypass)',
      'Perambalur Old Bus Stand',
      'MRF Tyre Plant Gate (Nabalur)',
      'Ranjankudi Fort Gate',
      'Collectorate Complex / Four Road Junction',
      'Siruvachur Mathura Kaliamman Temple Gate',
      'Eraiyur SEZ Industrial Park Gate',
      'Veppanthattai Bus Stop',
      'Padalur NH-45 Toll Plaza Area',
      'Kunnam Bus Stop',
    ],
    dropLocations: [
      'Trichy',
      'Chennai',
      'Salem',
      'Ariyalur',
      'Kallakurichi',
      'Puducherry',
      'Coimbatore',
      'Thanjavur',
      'Madurai',
    ],

    transportHubs: {
      busStands: [
        { name: 'Perambalur New Bus Stand', address: 'NH-45 Bypass Road, Perambalur - 621212' },
        { name: 'Perambalur Old Bus Stand', address: 'Main Road, Perambalur - 621212' },
      ],
      railwayStations: [
        { name: 'Ariyalur Railway Station (Nearest Main Line)', code: 'ALU', address: 'Station Road, Ariyalur - 621704' },
      ],
      airports: [
        { name: 'Tiruchirappalli International Airport (Nearest)', code: 'TRZ', distanceKm: 55, address: 'Airport Road, Tiruchirappalli - 620007' },
        { name: 'Salem Domestic Airport', code: 'SXV', distanceKm: 110, address: 'Kamalapuram, Salem - 636309' },
      ],
    },

    touristAttractions: [
      { name: 'Ranjankudi Fort', description: 'Imposing 17th-century stone fortress constructed by the Jagirdar of the Carnatic Nawab featuring complete ramparts and palace ruins.', distanceKm: 17 },
      { name: 'Siruvachur Mathura Kaliamman Temple', description: 'Renowned 1,000-year-old temple sacred to Goddess Kali, famous across Tamil Nadu for Monday and Friday worship rituals.', distanceKm: 8 },
      { name: 'Sathanur Petrified Wood Fossil Park', description: 'Geological national monument featuring a 120-million-year-old petrified tree trunk preserved from the Cretaceous era.', distanceKm: 25 },
      { name: 'Pachaimalai Hills & Koraiyar Waterfalls', description: 'Scenic Eastern Ghats hill range featuring tribal hamlets, lemon orchards, and refreshing natural waterfalls.', distanceKm: 40 },
      { name: 'Chettikulam Arulmigu Ekambareswarar Temple', description: 'Ancient Chola Shiva & Murugan temples located atop a scenic hillock in Chettikulam.', distanceKm: 22 },
    ],

    industries: [
      'MRF Tyre Manufacturing Mega Plant at Nabalur',
      'Perambalur Eraiyur SEZ Industrial Park (Textiles & Light Engineering)',
      'Agriculture Sector — Tamil Nadu\'s Top Producer of Shallots (Small Onions) & Maize',
      'Granite Mining & Stone Crushing Industry',
      'NH-45 Highway Transport & Logistics Support Hub',
    ],
    businessInfo:
      'Perambalur is an essential manufacturing and agricultural transit hub on the NH-45 highway. Plant engineers visiting MRF Tyres Nabalur, SEZ industrial executives at Eraiyur, agricultural merchants trading shallots and maize, and travelers commuting to Trichy Airport rely heavily on highway taxi services. SAMAYAS delivers executive sedan rentals, prompt 45-minute Trichy Airport transfers, corporate billing options, and 24/7 one-way cabs with zero return charges.',

    reviews: [
      {
        name: 'Murugesan K.',
        rating: 5,
        text: 'Booked a one-way cab from MRF Tyre Nabalur plant to Trichy Airport for an official flight. SAMAYAS driver was on time and reached the airport in just 50 minutes along NH-45.',
        route: 'Perambalur MRF to Trichy Airport',
      },
      {
        name: 'Karpagam V.',
        rating: 5,
        text: 'Traveled with family from Perambalur to Siruvachur temple and Ranjankudi fort. Clean car, polite driver, and very affordable fare.',
        route: 'Perambalur Local Sightseeing',
      },
      {
        name: 'Santhosh Kumar',
        rating: 5,
        text: 'Regularly book SAMAYAS for shallot trading business trips from Perambalur to Chennai. Honest per-km rates and zero return fare.',
        route: 'Perambalur to Chennai',
      },
      {
        name: 'Dinesh Raja',
        rating: 4,
        text: 'Booked a cab from Eraiyur SEZ to Salem. Smooth drive along the four-lane highway and exact fare as quoted.',
        route: 'Perambalur to Salem',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Perambalur to Trichy Airport (TRZ)?',
        a: 'The one-way taxi fare from Perambalur to Tiruchirappalli International Airport (TRZ - 55 km via NH-45) starts at approximately ₹900 for a Hatchback, ₹1,100 for a Sedan (Dzire, Etios), and ₹1,550 for an SUV (Ertiga). Travel time is around 50 minutes.',
      },
      {
        q: 'How far is Ranjankudi Fort from Perambalur town and what is the cab fare?',
        a: 'Ranjankudi Fort is approximately 17 km from Perambalur town along NH-45. A one-way taxi ride takes about 20 minutes and costs starting from ₹400.',
      },
      {
        q: 'Are 24/7 taxi pickups available at MRF Tyres Nabalur and Eraiyur SEZ?',
        a: 'Yes, SAMAYAS provides 24/7 round-the-clock doorstep pickup from MRF Tyre plant Nabalur, Eraiyur SEZ, Perambalur Four Roads, and all surrounding industrial plants.',
      },
      {
        q: 'Can I book a one-way cab from Perambalur to Chennai or Salem along NH-45?',
        a: 'Yes, we operate daily direct one-way cabs from Perambalur to Chennai (280 km) starting from ₹3,600 and to Salem (105 km) starting from ₹1,650 with zero return charges.',
      },
      {
        q: 'Which vehicles are recommended for corporate business travel in Perambalur?',
        a: 'For business travelers visiting MRF Tyres or Eraiyur SEZ, we recommend our comfortable Sedans (Dzire, Etios) or premium SUVs (Innova Crysta).',
      },
    ],

    metaTitle: 'One-Way Cab from Perambalur | Book Online 24/7 | SAMAYAS',
    metaDescription:
      'Need airport pickup & drop from Perambalur? Direct one-way taxi to Trichy Airport, Chennai, Salem & Ariyalur. Doorstep pickup available 24/7.',
  },

  // ─────────────────────────────────────────────────────────
  // PUDUKKOTTAI — District 21
  // ─────────────────────────────────────────────────────────
  pudukkottai: {
    heroTagline:
      'Planning a trip from Princely Pudukkottai? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Pudukkottai, including Sittanavasal Caves and Thirumayam Fort.',

    overview: `Pudukkottai district, situated in south-central Tamil Nadu, is an archaeological goldmine celebrated for its royal Tondaiman heritage, 2nd-century BCE rock-cut cave paintings, and as the historic entry to the Chettinad cultural region.

Bounded by Tiruchirappalli to the north, Thanjavur to the east, Sivaganga and Ramanathapuram to the south, and the Palk Strait to the southeast, Pudukkottai was the only princely state in Tamil Nadu to maintain independent royal status until merging with India in 1948. The district is world-renowned for Sittanavasal (Arivar Kovil)—a 2nd-century BCE Jain rock-cut cave complex featuring rare mineral fresco paintings—and Thirumayam Fort, a 17th-century fortress built by the Sethupathi kings featuring side-by-side rock-cut Shiva and Vishnu cave temples. Pudukkottai is also famous for Kudumiyanmalai (featuring 7th-century Sanskrit musical stone inscriptions), Avudaiyarkoil, and its proximity to the palatial heritage mansions of Chettinad (Kanadukathan).

Transportation in Pudukkottai is anchored by Pudukkottai Railway Station (PDKT) and Pudukkottai Central Bus Stand along NH-336 and NH-536, with Tiruchirappalli International Airport (TRZ) located just 50 km north. Whether you are exploring rock-cut architecture, visiting Chettinad heritage mansions, traveling to Trichy Airport, or taking an outstation journey to Rameshwaram, SAMAYAS provides reliable 24/7 one-way cabs from Pudukkottai with zero return fare charges.`,

    overviewHighlights: [
      'Historic Princely State home to 2nd-century BCE Sittanavasal cave frescoes, Thirumayam Fort & Kudumiyanmalai',
      'Gateway to Chettinad heritage mansions, SIPCOT Mathur industrial estate, and 2nd largest museum in TN',
      '24/7 direct one-way taxi transfers to Trichy Airport (50 km), Chettinad, Madurai, Thanjavur, and Rameshwaram'
    ],

    routes: [
      { name: 'Pudukkottai to Trichy Airport', to: 'Trichy Airport', distanceKm: 50, timeHours: 1, startingFare: 1950 },
      { name: 'Pudukkottai to Madurai', to: 'Madurai', distanceKm: 105, timeHours: 2, startingFare: 1950 },
      { name: 'Pudukkottai to Thanjavur', to: 'Thanjavur', distanceKm: 55, timeHours: 1.1, startingFare: 1950 },
      { name: 'Pudukkottai to Chettinad', to: 'Chettinad', distanceKm: 35, timeHours: 0.75, startingFare: 1950 },
      { name: 'Pudukkottai to Rameshwaram', to: 'Rameshwaram', distanceKm: 165, timeHours: 3.25, startingFare: 2475 },
      { name: 'Pudukkottai to Chennai', to: 'Chennai', distanceKm: 390, timeHours: 6.5, startingFare: 5850 },
      { name: 'Pudukkottai to Karaikudi', to: 'Karaikudi', distanceKm: 40, timeHours: 0.8, startingFare: 1950 },
      { name: 'Pudukkottai to Coimbatore', to: 'Coimbatore', distanceKm: 260, timeHours: 5, startingFare: 3900 },
      { name: 'Pudukkottai to Dindigul', to: 'Dindigul', distanceKm: 120, timeHours: 2.25, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Trichy Airport', distanceKm: 50, timeHours: 1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Madurai',        distanceKm: 105, timeHours: 2, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Thanjavur',      distanceKm: 55, timeHours: 1.1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chettinad',      distanceKm: 35, timeHours: 0.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Rameshwaram',    distanceKm: 165, timeHours: 3.25, hatchback: 2475, sedan: 2475, suv: 3300 },
      { to: 'Chennai',        distanceKm: 390, timeHours: 6.5, hatchback: 5850, sedan: 5850, suv: 7800 },
    ],

    pickupLocations: [
      'Pudukkottai Railway Station (PDKT)',
      'Pudukkottai Central Bus Stand (Tondaiman Rd)',
      'Old Bus Stand Area',
      'Thirumayam Fort Entrance',
      'Sittanavasal Cave Entrance',
      'SIPCOT Mathur Industrial Estate',
      'Government Rajah Hospital / Collectorate',
      'Kudumiyanmalai Temple Foot',
      'Aranthangi Bus Stand',
      'Machuvadi Bypass Junction',
    ],
    dropLocations: [
      'Trichy Airport',
      'Madurai',
      'Thanjavur',
      'Chettinad',
      'Rameshwaram',
      'Chennai',
      'Karaikudi',
      'Coimbatore',
      'Dindigul',
    ],

    transportHubs: {
      busStands: [
        { name: 'Pudukkottai Central Bus Stand', address: 'Tondaiman Road, Pudukkottai - 622001' },
        { name: 'Aranthangi Bus Stand', address: 'Main Road, Aranthangi - 614616' },
      ],
      railwayStations: [
        { name: 'Pudukkottai Railway Station', code: 'PDKT', address: 'Station Road, Pudukkottai - 622001' },
        { name: 'Thirumayam Railway Station', code: 'TYM', address: 'Thirumayam, Pudukkottai District - 622507' },
      ],
      airports: [
        { name: 'Tiruchirappalli International Airport (Nearest)', code: 'TRZ', distanceKm: 50, address: 'Airport Road, Tiruchirappalli - 620007' },
        { name: 'Madurai International Airport', code: 'IXM', distanceKm: 110, address: 'Airport Road, Madurai - 625022' },
      ],
    },

    touristAttractions: [
      { name: 'Sittanavasal Cave & Arivar Kovil', description: 'World-famous 2nd century BCE Jain rock-cut cave featuring ancient natural mineral fresco paintings and stone beds.', distanceKm: 16 },
      { name: 'Thirumayam Fort & Rock-Cut Cave Temples', description: 'Historic 17th-century hill fortress featuring massive stone walls and ancient Shiva & Vishnu rock-cut shrines.', distanceKm: 18 },
      { name: 'Kudumiyanmalai Sikhagiriswarar Temple', description: 'Ancient rock-cut Shiva shrine famous for its 7th-century Sanskrit musical inscription carved into granite rocks.', distanceKm: 20 },
      { name: 'Avudaiyarkoil Athmanathar Temple', description: 'Architectural Chola/Pandya masterpiece featuring intricate granite stone roof carvings, famous for no idol worship.', distanceKm: 45 },
      { name: 'Pudukkottai Government Museum', description: 'Second largest museum in Tamil Nadu showcasing rare Tondaiman royal weapons, ancient bronzes, and fossils.', distanceKm: 2 },
    ],

    industries: [
      'Chettinad Heritage Tourism & Culinary Hospitality Sector',
      'SIPCOT Mathur Industrial Complex (Engineering & Auto Components)',
      'Agriculture & Paddy Farming in Delta Borders',
      'Granite Mining & Traditional Stone Carving Workshops',
      'Handloom Weaving & Coir Fiber Processing Clusters',
    ],
    businessInfo:
      'Pudukkottai is a major heritage tourism and industrial center in Central Tamil Nadu. Archeological researchers visiting Sittanavasal, tourists exploring Chettinad palatial mansions, SIPCOT Mathur factory executives, and travelers catching flights from nearby Trichy Airport (TRZ) commute daily between Pudukkottai, Trichy, Madurai, and Rameshwaram. SAMAYAS delivers executive sedans, spacious tourist SUVs, 45-minute Trichy Airport transfers, and 24/7 one-way rentals with zero return fare charges.',

    reviews: [
      {
        name: 'Doctor Subbiah T.',
        rating: 5,
        text: 'Booked a one-way cab from Pudukkottai town to Trichy Airport for an international flight. SAMAYAS driver arrived 10 minutes early and reached TRZ airport smoothly in under 50 minutes.',
        route: 'Pudukkottai to Trichy Airport',
      },
      {
        name: 'Meenakshi Achi',
        rating: 5,
        text: 'Took a family heritage cab to Sittanavasal cave paintings, Thirumayam Fort, and drop at Chettinad Kanadukathan. Pristine vehicle and polite driver.',
        route: 'Pudukkottai to Chettinad',
      },
      {
        name: 'Karthikeyan P.',
        rating: 5,
        text: 'Regularly book SAMAYAS for SIPCOT Mathur factory business trips to Madurai and Chennai. Clear per-km pricing and zero return charges.',
        route: 'Pudukkottai to Madurai',
      },
      {
        name: 'Francois Laurent',
        rating: 4,
        text: 'Booked a cab from Pudukkottai museum to Rameshwaram temple. Great driver who navigated the highways safely.',
        route: 'Pudukkottai to Rameshwaram',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Pudukkottai to Trichy Airport (TRZ)?',
        a: 'The one-way taxi fare from Pudukkottai to Tiruchirappalli International Airport (TRZ - 50 km via NH-336) starts at approximately ₹850 for a Hatchback, ₹1,050 for a Sedan (Dzire, Etios), and ₹1,500 for an SUV (Ertiga). Travel time is under 50 minutes.',
      },
      {
        q: 'How far is Sittanavasal Cave from Pudukkottai town and what is the cab charge?',
        a: 'Sittanavasal Jain Cave is approximately 16 km from Pudukkottai town. A one-way taxi ride takes about 25 minutes and costs starting from ₹400.',
      },
      {
        q: 'Can I book a cab for a day tour covering Sittanavasal, Thirumayam Fort, and Chettinad mansions?',
        a: 'Yes, SAMAYAS offers custom day-tour taxi packages covering all major rock-cut sites and Chettinad heritage mansions with pick-up from Pudukkottai station or hotel.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Pudukkottai Railway Station (PDKT)?',
        a: 'Yes, we provide 24/7 round-the-clock train station pickup at Pudukkottai Station (PDKT), SIPCOT Mathur, and all surrounding towns.',
      },
      {
        q: 'Which vehicles are recommended for family heritage tours around Pudukkottai and Chettinad?',
        a: 'We recommend our comfortable Sedans (Dzire, Etios) or spacious 7-seater SUVs (Ertiga, Innova Crysta) for family heritage and temple tours.',
      },
    ],

    metaTitle: 'Pudukkottai One-Way Taxi | 24/7 Cab Booking | SAMAYAS',
    metaDescription:
      'Travel comfortably from Pudukkottai, Tamil Nadu. Direct one-way taxi to Trichy Airport, Chettinad, Madurai, Thanjavur & Rameshwaram. Book online today with SAMAYAS.',
  },

  // ─────────────────────────────────────────────────────────
  // RAMANATHAPURAM — District 22
  // ─────────────────────────────────────────────────────────
  ramanathapuram: {
    heroTagline:
      'Heading to Sacred Rameshwaram from Ramanathapuram? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Ramanathapuram, Rameshwaram, and Pamban.',

    overview: `Ramanathapuram district, situated along the southeastern Palk Strait and Gulf of Mannar coastline of Tamil Nadu, is world-famous as the sacred threshold to Rameshwaram Island and India's legendary sea passage.

Bounded by Sivaganga, Pudukkottai, Virudhunagar, and Thoothukudi to the north and west, and the Indian Ocean to the south and east, Ramanathapuram holds a unique position in Indian spiritual and maritime history. The district's crowning jewel is Rameshwaram Island—one of Hinduism's four holy Char Dham pilgrimages—home to Arulmigu Ramanathaswamy Temple featuring the world's longest 1,200-meter pillared corridor and 22 sacred teertham wells. The island is linked to the mainland by the iconic 2.06 km Pamban Sea Bridge, India's first vertical lift sea cantilever bridge. Ramanathapuram is also home to the ghost town of Dhanushkodi at Ram Setu (Adam's Bridge), Ramnad Palace of the Sethupathi Maharajas, Ervadi Dargah shrine, and the birthplace memorial of Dr. A.P.J. Abdul Kalam.

Transportation in Ramanathapuram is anchored by Ramanathapuram Railway Station (RMD), Rameshwaram Railway Station (RMM), and Ramanathapuram Central Bus Stand on NH-87, with Madurai International Airport (IXM) located 115 km west. Whether you are embarking on the Char Dham Rameshwaram pilgrimage, visiting Dhanushkodi beach, exploring Pamban Bridge, or taking an outstation taxi to Madurai, Trichy, or Kanyakumari, SAMAYAS provides reliable 24/7 one-way cabs from Ramanathapuram with zero return fare charges.`,

    overviewHighlights: [
      'Gateway to Char Dham Rameshwaram Island, Ramanathaswamy Temple (22 Holy Wells) & Pamban Sea Bridge',
      'Historic seat of Sethupathi Kings, ghost town of Dhanushkodi (Ram Setu), and Dr. A.P.J. Abdul Kalam Memorial',
      '24/7 direct one-way taxi transfers to Madurai Airport (115 km), Trichy, Kanyakumari, and Chennai'
    ],

    routes: [
      { name: 'Ramanathapuram to Rameshwaram', to: 'Rameshwaram', distanceKm: 55, timeHours: 1.1, startingFare: 1950 },
      { name: 'Ramanathapuram to Madurai', to: 'Madurai', distanceKm: 115, timeHours: 2.25, startingFare: 1950 },
      { name: 'Ramanathapuram to Dhanushkodi', to: 'Dhanushkodi', distanceKm: 75, timeHours: 1.75, startingFare: 1950 },
      { name: 'Ramanathapuram to Trichy', to: 'Trichy', distanceKm: 175, timeHours: 3.5, startingFare: 2625 },
      { name: 'Ramanathapuram to Kanyakumari', to: 'Kanyakumari', distanceKm: 310, timeHours: 5.5, startingFare: 4650 },
      { name: 'Ramanathapuram to Chennai', to: 'Chennai', distanceKm: 530, timeHours: 9.25, startingFare: 7950 },
      { name: 'Ramanathapuram to Thoothukudi', to: 'Thoothukudi', distanceKm: 140, timeHours: 2.75, startingFare: 2100 },
      { name: 'Ramanathapuram to Tirunelveli', to: 'Tirunelveli', distanceKm: 190, timeHours: 3.75, startingFare: 2850 },
      { name: 'Ramanathapuram to Coimbatore', to: 'Coimbatore', distanceKm: 330, timeHours: 6.5, startingFare: 4950 },
    ],

    fareTable: [
      { to: 'Rameshwaram', distanceKm: 55, timeHours: 1.1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Madurai',     distanceKm: 115, timeHours: 2.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Dhanushkodi', distanceKm: 75, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Trichy',      distanceKm: 175, timeHours: 3.5, hatchback: 2625, sedan: 2625, suv: 3500 },
      { to: 'Kanyakumari', distanceKm: 310, timeHours: 5.5, hatchback: 4650, sedan: 4650, suv: 6200 },
      { to: 'Chennai',     distanceKm: 530, timeHours: 9.25, hatchback: 7950, sedan: 7950, suv: 10600 },
    ],

    pickupLocations: [
      'Ramanathapuram Railway Station (RMD)',
      'Ramanathapuram Central Bus Stand (Madurai Rd)',
      'Rameshwaram Railway Station (RMM)',
      'Rameshwaram Temple West Gate',
      'Pamban Bridge Viewpoint Entrance',
      'Dhanushkodi Beach Road End',
      'Ramnad Palace / Aranmanai Area',
      'Paramakudi Bus Stand',
      'Kilakarai Coastal Town',
      'Ervadi Dargah Gate',
    ],
    dropLocations: [
      'Rameshwaram',
      'Madurai',
      'Dhanushkodi',
      'Trichy',
      'Kanyakumari',
      'Chennai',
      'Thoothukudi',
      'Tirunelveli',
      'Coimbatore',
    ],

    transportHubs: {
      busStands: [
        { name: 'Ramanathapuram Central Bus Stand', address: 'Madurai Road, Ramanathapuram - 623501' },
        { name: 'Rameshwaram Bus Terminus', address: 'NH-87, Rameshwaram - 623526' },
        { name: 'Paramakudi Bus Stand', address: 'Main Road, Paramakudi - 623707' },
      ],
      railwayStations: [
        { name: 'Ramanathapuram Railway Station', code: 'RMD', address: 'Station Road, Ramanathapuram - 623501' },
        { name: 'Rameshwaram Railway Station', code: 'RMM', address: 'Station Road, Rameshwaram - 623526' },
        { name: 'Pamban Railway Station', code: 'PBM', address: 'Pamban, Ramanathapuram District - 623521' },
      ],
      airports: [
        { name: 'Madurai International Airport (Nearest)', code: 'IXM', distanceKm: 115, address: 'Airport Road, Avaniyapuram, Madurai - 625022' },
        { name: 'Tuticorin Airport', code: 'TCR', distanceKm: 135, address: 'Vagaikulam, Thoothukudi - 628103' },
      ],
    },

    touristAttractions: [
      { name: 'Arulmigu Ramanathaswamy Temple, Rameshwaram', description: 'Sacred Char Dham shrine featuring the world\'s longest 1,200-meter pillared corridor and 22 holy water teertham wells.', distanceKm: 55 },
      { name: 'Pamban Sea Bridge & Viewpoint', description: 'Historic 2.06 km sea bridge across Palk Strait, India\'s first cantilever railway sea bridge connecting island to mainland.', distanceKm: 42 },
      { name: 'Dhanushkodi Beach & Ram Setu', description: 'Eerie ghost town destroyed in 1964 cyclone, marking the starting point of legendary Ram Setu (Adam\'s Bridge).', distanceKm: 75 },
      { name: 'Dr. A.P.J. Abdul Kalam National Memorial', description: 'Inspiring national memorial museum in Peokarumbu honoring India\'s 11th President and Missile Man.', distanceKm: 50 },
      { name: 'Ervadi Badusha Dargah', description: 'Historic 840-year-old Islamic shrine and spiritual healing center located in Kilakarai taluk.', distanceKm: 25 },
    ],

    industries: [
      'Char Dham Pilgrimage & Island Tourism Hospitality Industry',
      'Marine Commercial Fishing & Dry Fish Export Processing',
      'Gulf of Mannar Marine Bio-Resource & Salt Production',
      'Dr. A.P.J. Abdul Kalam Memorial National Tourism',
      'Palm Jaggery & Coir Craft Cottage Handicrafts',
    ],
    businessInfo:
      'Ramanathapuram district is India\'s premier coastal pilgrimage gateway. Millions of national and international pilgrims visiting Char Dham Rameshwaram, marine export merchants, sea bridge engineering auditors, tourists visiting Dhanushkodi, and travelers commuting to Madurai Airport (IXM) rely daily on intercity road transport. SAMAYAS delivers executive sedans, spacious family 7-seater SUVs for pilgrimage groups, prompt Madurai Airport drops, and 24/7 one-way rentals with zero return fare charges.',

    reviews: [
      {
        name: 'Ranganathan V.',
        rating: 5,
        text: 'Booked an Innova SUV from Ramanathapuram station for a family Char Dham Rameshwaram pilgrimage covering all 22 teerthams and Pamban bridge. Driver was exceptionally polite and helpful.',
        route: 'Ramanathapuram to Rameshwaram',
      },
      {
        name: 'Fatima Zohra',
        rating: 5,
        text: 'Took a one-way cab from Ervadi Dargah to Madurai Airport for a domestic flight. Driver arrived right on time, drove safely along NH-87, and reached in 2 hours.',
        route: 'Ervadi to Madurai Airport',
      },
      {
        name: 'Senthil Kumar M.',
        rating: 5,
        text: 'Regularly book SAMAYAS for marine seafood export business trips from Ramanathapuram harbor to Chennai. Transparent rates and zero return charges.',
        route: 'Ramanathapuram to Chennai',
      },
      {
        name: 'Alok Sharma',
        rating: 4,
        text: 'Booked a cab for a tour of Dr. Kalam Memorial and Dhanushkodi ghost town beach. Driver gave us plenty of time for photos and drove smoothly.',
        route: 'Ramanathapuram to Dhanushkodi',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Ramanathapuram to Rameshwaram?',
        a: 'The one-way taxi fare from Ramanathapuram to Rameshwaram (55 km via NH-87 across Pamban Bridge) starts at approximately ₹900 for a Hatchback, ₹1,100 for a Sedan (Dzire, Etios), and ₹1,550 for an SUV (Ertiga). Travel time is around 1 hour.',
      },
      {
        q: 'How far is Madurai Airport (IXM) from Ramanathapuram and what is the cab charge?',
        a: 'Madurai International Airport (IXM) is approximately 115 km from Ramanathapuram. A one-way taxi transfer takes about 2 hours 15 minutes and costs starting from ₹1,700.',
      },
      {
        q: 'Can I book a cab for a full-day tour of Pamban Bridge, Dr. Kalam Memorial, and Dhanushkodi?',
        a: 'Yes, SAMAYAS offers dedicated day-tour cab packages covering Pamban Bridge, Dr. Kalam Memorial, Rameshwaram Temple, and Dhanushkodi Beach with pickup from Ramanathapuram or Rameshwaram.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Rameshwaram Railway Station (RMM) and Pamban?',
        a: 'Yes, we provide 24/7 round-the-clock station pickup at Rameshwaram Railway Station (RMM), Ramanathapuram Station (RMD), Pamban, and all island hotels.',
      },
      {
        q: 'Which vehicles are recommended for family pilgrimage trips to Rameshwaram and Dhanushkodi?',
        a: 'We recommend our spacious 7-seater SUVs (Ertiga, Innova Crysta) for family pilgrimage trips to comfortably hold luggage, holy water containers, and travel over sandy coastal roads.',
      },
    ],

    metaTitle: 'Book One-Way Taxi from Ramanathapuram | No Return Fare | SAMAYAS',
    metaDescription:
      'Book a taxi for your next trip from Ramanathapuram & Rameshwaram. Direct one-way taxi to Sacred Rameshwaram, Madurai, Dhanushkodi, Trichy & Kanyakumari. Available 24/7.',
  },

  // ─────────────────────────────────────────────────────────
  // RANIPET — District 23
  // ─────────────────────────────────────────────────────────
  ranipet: {
    heroTagline:
      'Need a corporate or outstation cab from Ranipet? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Ranipet, including leather export hubs and BHEL plant.',

    overview: `Ranipet district, strategically situated in the Palar River valley of northern Tamil Nadu along the Chennai-Bengaluru NH-48 industrial corridor, is an international leather manufacturing powerhouse and heavy engineering hub.

Carved out of Vellore district in 2019, Ranipet is bounded by Vellore to the west, Kanchipuram and Tiruvallur to the east, Tirupattur and Tiruvannamalai to the south, and Andhra Pradesh to the north. The district is world-renowned for Finished Leather Footwear & Garment Exports in Ranipet and Walajapet, housing hundreds of tanneries and shoe factories supplying international fashion brands in Europe and America. Ranipet hosts massive public-sector engineering plants including BHEL (Bharat Heavy Electricals Limited Boiler Auxiliaries Plant at Mukundarayapuram) and SIPCOT Industrial Estate.

Historically, Ranipet district encompasses historic Arcot—the ancient capital of the Nawabs of the Carnatic, famous for Arot Nawab Biryani—and the hill shrine of Sholinghur Arulmigu Lakshmi Narasimha Swamy Temple. Transportation is anchored by Mukundarayapuram Railway Station (MCN), Walajah Road Junction (WJR), and Ranipet Bus Stand, with Chennai International Airport (MAA) located 100 km east. Whether you are an international leather buyer, a BHEL engineer, or a commuter booking an express cab to Chennai Airport or Tirupati, SAMAYAS provides reliable 24/7 one-way cabs from Ranipet with zero return fare charges.`,

    overviewHighlights: [
      'Leather Capital of South India hosting finished footwear exports, SIPCOT SEZs Phase 1-3 & BHEL plant',
      'Historic Carnatic Nawab capital of Arcot, Walajapet silk weaving, and Sholinghur Narasimha temple',
      '24/7 direct one-way taxi transfers to Chennai Airport (95 km), Vellore, Kanchipuram, Tirupati & Bengaluru'
    ],

    routes: [
      { name: 'Ranipet to Chennai Airport', to: 'Chennai Airport', distanceKm: 95, timeHours: 1.75, startingFare: 1950 },
      { name: 'Ranipet to Chennai City', to: 'Chennai City', distanceKm: 105, timeHours: 2.25, startingFare: 1950 },
      { name: 'Ranipet to Vellore', to: 'Vellore', distanceKm: 25, timeHours: 0.5, startingFare: 1950 },
      { name: 'Ranipet to Kanchipuram', to: 'Kanchipuram', distanceKm: 35, timeHours: 0.75, startingFare: 1950 },
      { name: 'Ranipet to Bengaluru', to: 'Bengaluru', distanceKm: 230, timeHours: 4.25, startingFare: 3450 },
      { name: 'Ranipet to Tirupati', to: 'Tirupati', distanceKm: 105, timeHours: 2.25, startingFare: 1950 },
      { name: 'Ranipet to Puducherry', to: 'Puducherry', distanceKm: 135, timeHours: 2.75, startingFare: 2025 },
      { name: 'Ranipet to Tiruvannamalai', to: 'Tiruvannamalai', distanceKm: 85, timeHours: 1.75, startingFare: 1950 },
      { name: 'Ranipet to Salem', to: 'Salem', distanceKm: 235, timeHours: 4.25, startingFare: 3525 },
    ],

    fareTable: [
      { to: 'Chennai Airport', distanceKm: 95, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chennai City',    distanceKm: 105, timeHours: 2.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Vellore',         distanceKm: 25, timeHours: 0.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Kanchipuram',     distanceKm: 35, timeHours: 0.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Bengaluru',       distanceKm: 230, timeHours: 4.25, hatchback: 3450, sedan: 3450, suv: 4600 },
      { to: 'Tirupati',        distanceKm: 105, timeHours: 2.25, hatchback: 1950, sedan: 1950, suv: 2600 },
    ],

    pickupLocations: [
      'Ranipet Central Bus Stand',
      'Walajah Road Railway Station (WJR)',
      'SIPCOT Industrial Complex Phase 1 & 2 Gates',
      'BHEL Plant Gate (Ranipet)',
      'Arcot Bus Stand / Clock Tower',
      'Walajapet Main Bazaar & Municipality Gate',
      'Mukundarayapuram Railway Station (MCN)',
      'Navlock NH-48 Bypass Toll Plaza',
      'Sholinghur Bus Stand',
      'Arakkonam Junction',
    ],
    dropLocations: [
      'Chennai Airport',
      'Chennai City',
      'Vellore',
      'Kanchipuram',
      'Bengaluru',
      'Tirupati',
      'Puducherry',
      'Tiruvannamalai',
      'Salem',
    ],

    transportHubs: {
      busStands: [
        { name: 'Ranipet Central Bus Stand', address: 'Main Road, Ranipet - 632401' },
        { name: 'Arcot Bus Stand', address: 'Bazaar Street, Arcot - 632503' },
        { name: 'Walajapet Bus Stand', address: 'MBT Road, Walajapet - 632513' },
      ],
      railwayStations: [
        { name: 'Walajah Road Junction', code: 'WJR', address: 'Station Road, Walajapet - 632513' },
        { name: 'Mukundarayapuram Station', code: 'MCN', address: 'Mukundarayapuram, Ranipet - 632406' },
        { name: 'Katpadi Junction (Nearest Mainline)', code: 'KPD', address: 'Katpadi, Vellore - 632007' },
      ],
      airports: [
        { name: 'Chennai International Airport (Nearest)', code: 'MAA', distanceKm: 95, address: 'GST Road, Meenambakkam, Chennai - 600027' },
      ],
    },

    touristAttractions: [
      { name: 'Sholinghur Arulmigu Lakshmi Narasimha Swamy Temple', description: 'Sacred hilltop 108 Divya Desam shrine perched on a 750-step granite hill, offering panoramic valley views.', distanceKm: 28 },
      { name: 'Historic Arcot Fort & Delhi Gate', description: 'Imposing historical gateway built by the Carnatic Nawabs, famous for Robert Clive\'s historic 1751 Siege of Arcot.', distanceKm: 6 },
      { name: 'Mahendravadi Rock-Cut Cave Temple', description: 'Historic 7th-century Pallava cave temple commissioned by King Mahendravarman I, dedicated to Lord Vishnu.', distanceKm: 22 },
      { name: 'Ratnagiri Balamurugan Temple', description: 'Renowned hilltop Murugan shrine featuring panoramic views of the Palar river valley, built by Balamurugan Adigalar.', distanceKm: 15 },
      { name: 'Ranipet Clock Tower & Palar Promenade', description: 'Historic British-era clock tower landmark built in the heart of Ranipet industrial city near Palar riverbed.', distanceKm: 2 },
    ],

    industries: [
      'Leather Tanning & Finished Footwear Export Industry (Global exports to Europe/US)',
      'SIPCOT Industrial Complex Phase 1, 2 & 3 (Chemicals, Automotive Parts)',
      'BHEL (Bharat Heavy Electricals Limited, Boiler Auxiliary Plant)',
      'Handloom Silk Weaving & Leather Goods Trade in Walajapet',
      'Food Processing & Culinary Sector (Famous Arcot Makkan Peda)',
    ],
    businessInfo:
      'Ranipet is South India\'s leather manufacturing hub and heavy industrial engine. International footwear buyers, BHEL engineers, SIPCOT factory managers, and cross-border commuters traveling to Chennai Airport (MAA) or Bengaluru via NH-48 rely daily on intercity road transport. SAMAYAS delivers executive sedans, 90-minute Chennai Airport drops, corporate billing options, and 24/7 one-way cabs with zero return fare charges.',

    reviews: [
      {
        name: 'Giuseppe Rossi',
        rating: 5,
        text: 'Booked a one-way cab from Ranipet SIPCOT leather footwear factory to Chennai Airport for an international flight back to Milan. Driver was on time, car was spotless, and trip was smooth.',
        route: 'Ranipet to Chennai Airport',
      },
      {
        name: 'Venkatesan M.',
        rating: 5,
        text: 'Traveled with family from Arcot to Sholinghur Narasimha temple and Ratnagiri temple. Driver was very polite, patient, and drove safely.',
        route: 'Ranipet Local Tour',
      },
      {
        name: 'Subramanian BHEL',
        rating: 5,
        text: 'Regularly book SAMAYAS for BHEL BAP plant business trips from Ranipet to Bengaluru and Vellore. Honest rates and prompt service.',
        route: 'Ranipet to Bengaluru',
      },
      {
        name: 'Farooq Arcot',
        rating: 4,
        text: 'Booked a cab from Walajapet to Tirupati. Smooth drive along the highway and exact fare as quoted.',
        route: 'Walajapet to Tirupati',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Ranipet to Chennai Airport (MAA)?',
        a: 'The one-way taxi fare from Ranipet to Chennai International Airport (MAA - 95 km via NH-48 expressway) starts at approximately ₹1,500 for a Hatchback, ₹1,750 for a Sedan (Dzire, Etios), and ₹2,400 for an SUV (Ertiga). Travel time is around 1.75 hours.',
      },
      {
        q: 'How far is Sholinghur Narasimha Temple from Ranipet and what is the cab charge?',
        a: 'Sholinghur Lakshmi Narasimha Temple is approximately 28 km from Ranipet town. A one-way taxi ride takes about 40 minutes and costs starting from ₹550.',
      },
      {
        q: 'Are 24/7 taxi pickups available at SIPCOT Ranipet Phase 1, 2 & 3 and BHEL plant?',
        a: 'Yes, SAMAYAS provides 24/7 round-the-clock doorstep pickup from all SIPCOT Ranipet gates, BHEL plant, Arcot town, and Walajapet.',
      },
      {
        q: 'Can I book a one-way cab from Ranipet to Vellore or Kanchipuram?',
        a: 'Yes, we operate daily direct one-way cabs from Ranipet to Vellore (25 km) starting from ₹500 and to Kanchipuram (35 km) starting from ₹650 with zero return charges.',
      },
      {
        q: 'Which vehicles are recommended for corporate business travel in Ranipet?',
        a: 'For business delegates visiting SIPCOT leather export plants or BHEL, we recommend our comfortable Sedans (Dzire, Etios) or premium SUVs (Innova Crysta).',
      },
    ],

    metaTitle: 'Ranipet Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Need airport transfers from Ranipet? Direct one-way taxi to Chennai Airport, Vellore, Kanchipuram, Tirupati & Bengaluru. Reserve your cab now with SAMAYAS.',
  },

  // ─────────────────────────────────────────────────────────
  // SALEM — District 24
  // ─────────────────────────────────────────────────────────
  salem: {
    heroTagline:
      'Traveling from the Steel City of Salem? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Salem, including Railway Junction, Yercaud foothill, and Mettur.',

    overview: `Salem district, situated at the heart of north-central Tamil Nadu surrounded by five hill ranges (Shevaroy, Nagaramalai, Jeragamalai, Kanjamalai, and Godumalai), is globally acclaimed as the 'Steel City of Tamil Nadu', 'Mango City', and the gateway to Yercaud.

As the fifth largest urban agglomeration in Tamil Nadu, Salem occupies a central position on the state's transport and industrial grid. The city is world-famous for the Salem Steel Plant (SAIL stainless steel unit), Sagoserve (India's premier sago/sabudana marketing cluster), magnesite mining, and Elampillai handloom sarees. Geographically, Salem district houses the colossal Mettur Dam (Stanley Reservoir) across the River Kaveri—one of India's largest and oldest masonry dams—and Yercaud ('Jewel of the Southern Trees'), a tranquil hill station perched at 1,515 meters altitude in the Shevaroy Hills.

Transportation in Salem is anchored by Salem Junction Railway Station (SA)—a major division headquarters connecting North and South India—Salem Domestic Airport (SXV), and Salem New Integrated Bus Stand (Meyyanur) at the junction of NH-44 and NH-79. Whether you are an industrial executive visiting SAIL steel plant, a sago merchant, a tourist driving up 20 hairpin bends to Yercaud, or a traveler commuting to Bengaluru, Coimbatore, or Chennai, SAMAYAS provides reliable 24/7 one-way cabs from Salem with zero return fare charges.`,

    overviewHighlights: [
      'Steel & Mango City hosting SAIL Stainless Steel Plant, Sagoserve, and Mettur Dam Stanley Reservoir',
      'Gateway to Yercaud hill station (Jewel of the Southern Trees) with 20 scenic hairpin bends',
      '24/7 direct one-way taxi transfers from Salem Junction to Bengaluru (200 km), Coimbatore, and Chennai'
    ],

    routes: [
      { name: 'Salem to Yercaud', to: 'Yercaud', distanceKm: 30, timeHours: 1, startingFare: 1950 },
      { name: 'Salem to Bengaluru', to: 'Bengaluru', distanceKm: 200, timeHours: 3.5, startingFare: 3000 },
      { name: 'Salem to Coimbatore', to: 'Coimbatore', distanceKm: 160, timeHours: 3, startingFare: 2400 },
      { name: 'Salem to Chennai', to: 'Chennai', distanceKm: 340, timeHours: 5.75, startingFare: 5100 },
      { name: 'Salem to Erode', to: 'Erode', distanceKm: 65, timeHours: 1.25, startingFare: 1950 },
      { name: 'Salem to Trichy', to: 'Trichy', distanceKm: 140, timeHours: 2.75, startingFare: 2100 },
      { name: 'Salem to Namakkal', to: 'Namakkal', distanceKm: 50, timeHours: 1, startingFare: 1950 },
      { name: 'Salem to Dharmapuri', to: 'Dharmapuri', distanceKm: 68, timeHours: 1.25, startingFare: 1950 },
      { name: 'Salem to Mettur Dam', to: 'Mettur Dam', distanceKm: 50, timeHours: 1, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Yercaud',    distanceKm: 30, timeHours: 1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Bengaluru',  distanceKm: 200, timeHours: 3.5, hatchback: 3000, sedan: 3000, suv: 4000 },
      { to: 'Coimbatore', distanceKm: 160, timeHours: 3, hatchback: 2400, sedan: 2400, suv: 3200 },
      { to: 'Chennai',    distanceKm: 340, timeHours: 5.75, hatchback: 5100, sedan: 5100, suv: 6800 },
      { to: 'Erode',      distanceKm: 65, timeHours: 1.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Trichy',     distanceKm: 140, timeHours: 2.75, hatchback: 2100, sedan: 2100, suv: 2800 },
    ],

    pickupLocations: [
      'Salem Junction Railway Station (SA)',
      'Salem New Integrated Bus Stand (Meyyanur)',
      'Salem Airport (SXV - Kamalapuram)',
      'Salem Steel Plant Gate (SAIL)',
      'Hasthampatti / Collectorate Area',
      'Five Roads Junction',
      'Yercaud Foothills (Kondappanaickenpatti)',
      'Mettur Bus Stand / Dam Gate',
      'Attur Bus Stand',
      'Omalur Junction / NH-44 Toll',
    ],
    dropLocations: [
      'Yercaud',
      'Bengaluru',
      'Coimbatore',
      'Chennai',
      'Erode',
      'Trichy',
      'Namakkal',
      'Dharmapuri',
      'Mettur Dam',
    ],

    transportHubs: {
      busStands: [
        { name: 'Salem New Bus Stand', address: 'Meyyanur Bypass Road, Salem - 636004' },
        { name: 'Salem Town Bus Stand', address: 'Town Railway Station Road, Salem - 636001' },
        { name: 'Mettur Bus Stand', address: 'Main Road, Mettur Dam - 636401' },
      ],
      railwayStations: [
        { name: 'Salem Junction Railway Station', code: 'SA', address: 'Suramangalam, Salem - 636005' },
        { name: 'Salem Town Railway Station', code: 'SXT', address: 'Town Station Road, Salem - 636001' },
        { name: 'Omalur Junction', code: 'OML', address: 'Omalur, Salem District - 636455' },
      ],
      airports: [
        { name: 'Salem Domestic Airport', code: 'SXV', distanceKm: 15, address: 'Kamalapuram, Omalur, Salem - 636309' },
        { name: 'Tiruchirappalli International Airport', code: 'TRZ', distanceKm: 140, address: 'Airport Road, Tiruchirappalli - 620007' },
        { name: 'Bengaluru Kempegowda International Airport', code: 'BLR', distanceKm: 240, address: 'Devanahalli, Bengaluru - 560300' },
      ],
    },

    touristAttractions: [
      { name: 'Yercaud Hill Station & Emerald Lake', description: 'Tranquil hill station in the Shevaroy Hills featuring Emerald Lake, Lady\'s Seat, Pagoda Point, and Killiyur Falls.', distanceKm: 30 },
      { name: 'Mettur Dam & Stanley Reservoir', description: 'Colossal 1934 masonry dam across Kaveri River featuring manicured Ellis Park, hydroelectric stations, and vast backwaters.', distanceKm: 50 },
      { name: 'Kottai Mariamman & Sugavaneswarar Temple', description: 'Historic 1,000-year-old temples in Salem city center famous for annual car festivals and ancient Chola inscriptions.', distanceKm: 2 },
      { name: 'Kanjamalai Siddhar Kovil & Iron Ore Hill', description: 'Sacred hill range famous for natural mineral springs, ancient Siddhar herbal legends, and rich magnetite deposits.', distanceKm: 14 },
      { name: 'Kurumbapatti Zoological Park', description: 'Lush mini-zoo at the foothills of the Shevaroy Hills featuring spotted deer, white peacocks, and forest trails.', distanceKm: 12 },
    ],

    industries: [
      'Salem Steel Plant (SAIL Special Stainless Steel Manufacturing Unit)',
      'Sagoserve — India\'s Largest Sago (Tapioca Sabudana) & Starch Marketing Cluster',
      'Tamil Nadu Magnesite & Bauxite Mining Industry',
      'Handloom & Powerloom Textile Weaving (Elampillai Saree Hub)',
      'Salem Malgova & Alphonso Mango Cultivation & Fruit Trade',
    ],
    businessInfo:
      'Salem is a commercial powerhouse in central Tamil Nadu, leading India in special steel, sago, and magnesite production. SAIL steel engineers, Sagoserve sago merchants, Elampillai textile traders, and hill tourists ascending to Yercaud rely daily on intercity road transport. SAMAYAS delivers executive sedans, experienced hill drivers for Yercaud\'s 20 hairpin bends, 24/7 Salem Airport & Junction drops, and zero-return fare One-Way cabs across South India.',

    reviews: [
      {
        name: 'Venkatesh S.',
        rating: 5,
        text: 'Booked a one-way cab from Salem Junction to Yercaud Emerald Lake for a family weekend trip. Driver was an expert on mountain curves and reached Yercaud smoothly.',
        route: 'Salem to Yercaud',
      },
      {
        name: 'Anand Viswanathan',
        rating: 5,
        text: 'Took a one-way taxi from Salem Steel Plant to Bengaluru Electronic City. Driver arrived 10 minutes early, drove safely along NH-44, and fare was exact to quote.',
        route: 'Salem to Bengaluru',
      },
      {
        name: 'Kavitha Elangovan',
        rating: 5,
        text: 'Regularly book SAMAYAS for textile business trips from Elampillai to Coimbatore. Clear per-km pricing and zero return charges.',
        route: 'Salem to Coimbatore',
      },
      {
        name: 'Dr. Subramanian R.',
        rating: 4,
        text: 'Booked a cab from Salem New Bus Stand to Mettur Dam. Smooth drive along the highway and polite driver.',
        route: 'Salem to Mettur Dam',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Salem to Yercaud hill station?',
        a: 'The one-way taxi fare from Salem to Yercaud (30 km via 20 hairpin bends) starts at approximately ₹800 for a Hatchback, ₹1,000 for a Sedan (Dzire, Etios), and ₹1,450 for an SUV (Ertiga). Travel time is around 1 hour.',
      },
      {
        q: 'What is the one-way taxi fare from Salem to Bengaluru?',
        a: 'The one-way taxi fare from Salem to Bengaluru (200 km via NH-44 expressway) starts at approximately ₹2,700 for a Hatchback, ₹3,100 for a Sedan, and ₹4,300 for an SUV. Travel time is around 3.5 hours.',
      },
      {
        q: 'Are SAMAYAS drivers experienced in driving up Yercaud 20 hairpin bends?',
        a: 'Yes, all drivers assigned to Yercaud mountain routes are local hill experts trained in navigating mountain inclines, fog, and hairpin bends safely.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Salem Junction Railway Station (SA) and Salem Airport (SXV)?',
        a: 'Yes, SAMAYAS provides round-the-clock 24/7 pickup from Salem Junction (SA), Salem Airport (SXV), Five Roads, Hasthampatti, and all hotels in Salem.',
      },
      {
        q: 'Can I book a one-way cab from Salem to Mettur Dam or Coimbatore?',
        a: 'Yes, we operate daily direct one-way cabs from Salem to Mettur Dam (50 km) starting from ₹850 and to Coimbatore (160 km) starting from ₹2,200 with zero return charges.',
      },
    ],

    metaTitle: 'One-Way Cab from Salem | Book Online 24/7 | SAMAYAS',
    metaDescription:
      'Travel comfortably from Salem, Tamil Nadu. Direct one-way taxi to Bengaluru, Yercaud, Coimbatore, Chennai & Mettur. Transparent per-km rates with zero return fee.',
  },

  // ─────────────────────────────────────────────────────────
  // SIVAGANGA — District 25
  // ─────────────────────────────────────────────────────────
  sivaganga: {
    heroTagline:
      'Exploring Chettinad heritage from Sivaganga? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Karaikudi, Pillayarpatti, and Sivaganga.',

    overview: `Sivaganga district, situated in southern Tamil Nadu, is globally celebrated as the cultural home of the Chettinad heritage region, historic kingdom of Rani Velu Nachiyar, and the ancient Sangam civilization of Keezhadi.

Bounded by Madurai to the west, Pudukkottai and Tiruchirappalli to the north, Ramanathapuram to the east, and Virudhunagar to the south, Sivaganga holds an illustrious historical and architectural legacy. The district's commercial and cultural hub is Karaikudi, the capital of Chettinad—renowned worldwide for 19th-century merchant palatial mansions adorned with Italian marble, European stained glass, Burmese teakwood, and Athangudi handmade floor tiles, alongside world-famous Chettinad gastronomy. Historically, Sivaganga is the land of Queen Velu Nachiyar (India's first queen to wage war against British colonial rule) and the Maruthu Pandiyar brothers of Kalaiyarkoil. Scientifically, Keezhadi excavation site along River Vaigai has rewritten ancient Indian history by uncovering a 2,600-year-old urban Sangam Tamil civilization.

Spiritually, Sivaganga is home to Pillayarpatti Arulmigu Karpaga Vinayagar 1,600-year-old rock-cut cave temple, Kundrakudi Murugan Temple, and Kalaiyarkoil. Transportation is anchored by Karaikudi Junction (KKDI), Sivaganga Station (SVGA), and Manamadurai Junction (MNM), with Madurai International Airport (IXM) located just 45 km away. Whether you are exploring Chettinad palatial mansions, visiting Keezhadi Museum, buying Athangudi tiles, or taking an outstation transfer to Madurai Airport, Trichy, or Rameshwaram, SAMAYAS provides reliable 24/7 one-way cabs from Sivaganga with zero return fare charges.`,

    overviewHighlights: [
      'Heartland of Chettinad heritage mansions (Karaikudi), Athangudi handmade tiles, and Chettinad cuisine',
      'Historic land of Rani Velu Nachiyar, Maruthu Pandiyars, Pillayarpatti Cave Temple & Keezhadi Museum',
      '24/7 direct one-way taxi transfers from Karaikudi/Sivaganga to Madurai Airport (45 km), Trichy, and Rameshwaram'
    ],

    routes: [
      { name: 'Sivaganga to Madurai Airport', to: 'Madurai Airport', distanceKm: 48, timeHours: 1, startingFare: 1950 },
      { name: 'Karaikudi to Trichy', to: 'Trichy', distanceKm: 90, timeHours: 1.75, startingFare: 1950 },
      { name: 'Sivaganga to Rameshwaram', to: 'Rameshwaram', distanceKm: 135, timeHours: 2.75, startingFare: 2025 },
      { name: 'Sivaganga to Pudukkottai', to: 'Pudukkottai', distanceKm: 40, timeHours: 0.8, startingFare: 1950 },
      { name: 'Sivaganga to Thanjavur', to: 'Thanjavur', distanceKm: 110, timeHours: 2.1, startingFare: 1950 },
      { name: 'Sivaganga to Chennai', to: 'Chennai', distanceKm: 420, timeHours: 7.25, startingFare: 6300 },
      { name: 'Sivaganga to Coimbatore', to: 'Coimbatore', distanceKm: 245, timeHours: 4.75, startingFare: 3675 },
      { name: 'Sivaganga to Kanyakumari', to: 'Kanyakumari', distanceKm: 290, timeHours: 5.25, startingFare: 4350 },
      { name: 'Sivaganga to Dindigul', to: 'Dindigul', distanceKm: 105, timeHours: 2.1, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Madurai Airport', distanceKm: 48, timeHours: 1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Trichy',          distanceKm: 90, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Rameshwaram',     distanceKm: 135, timeHours: 2.75, hatchback: 2025, sedan: 2025, suv: 2700 },
      { to: 'Pudukkottai',     distanceKm: 40, timeHours: 0.8, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Thanjavur',       distanceKm: 110, timeHours: 2.1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chennai',         distanceKm: 420, timeHours: 7.25, hatchback: 6300, sedan: 6300, suv: 8400 },
    ],

    pickupLocations: [
      'Karaikudi Junction Railway Station (KKDI)',
      'Sivaganga Railway Station (SVGA)',
      'Karaikudi New Bus Stand',
      'Sivaganga Central Bus Stand',
      'Pillayarpatti Temple Gate',
      'Kanadukathan Chettinad Palace Gate',
      'Athangudi Tile Workshop Area',
      'Kalaiyarkoil Temple Gate',
      'Devakottai Bus Stand',
      'Manamadurai Junction (MNM)',
    ],
    dropLocations: [
      'Madurai Airport',
      'Trichy',
      'Rameshwaram',
      'Pudukkottai',
      'Thanjavur',
      'Chennai',
      'Coimbatore',
      'Kanyakumari',
      'Dindigul',
    ],

    transportHubs: {
      busStands: [
        { name: 'Karaikudi New Bus Stand', address: '100 Feet Road, Karaikudi - 630001' },
        { name: 'Sivaganga Central Bus Stand', address: 'Bus Stand Road, Sivaganga - 630561' },
        { name: 'Devakottai Bus Stand', address: 'Main Road, Devakottai - 630302' },
      ],
      railwayStations: [
        { name: 'Karaikudi Junction', code: 'KKDI', address: 'Station Road, Karaikudi - 630001' },
        { name: 'Sivaganga Railway Station', code: 'SVGA', address: 'Station Road, Sivaganga - 630561' },
        { name: 'Manamadurai Junction', code: 'MNM', address: 'Manamadurai, Sivaganga District - 630606' },
      ],
      airports: [
        { name: 'Madurai International Airport (Nearest)', code: 'IXM', distanceKm: 45, address: 'Airport Road, Avaniyapuram, Madurai - 625022' },
        { name: 'Tiruchirappalli International Airport', code: 'TRZ', distanceKm: 90, address: 'Airport Road, Tiruchirappalli - 620007' },
      ],
    },

    touristAttractions: [
      { name: 'Chettinad Heritage Mansions, Kanadukathan', description: 'Opulent 19th-century merchant palaces featuring European stained glass, Italian marble, and Burmese teakwood.', distanceKm: 15 },
      { name: 'Pillayarpatti Karpaga Vinayagar Temple', description: 'Historic 1,600-year-old rock-cut cave temple dedicated to Lord Ganesha, featuring a 6-foot bas-relief idol.', distanceKm: 12 },
      { name: 'Keezhadi Sangam Age Excavation Site & Museum', description: 'World-famous archaeological museum showcasing a 2,600-year-old urban Sangam Tamil civilization along River Vaigai.', distanceKm: 35 },
      { name: 'Kalaiyarkoil Kaleeswarar Someswarar Temple', description: 'Imposing fortress-temple complex featuring 150-ft towers, sacred to the heroic Maruthu Pandiyar brothers.', distanceKm: 18 },
      { name: 'Athangudi Handmade Tile Workshops', description: 'Traditional artisan village world-renowned for eco-friendly handcrafted geometric glass floor tiles.', distanceKm: 12 },
    ],

    industries: [
      'Chettinad Heritage Tourism & International Heritage Resort Sector',
      'Athangudi Handcrafted Glass Floor Tile Manufacturing',
      'Manamadurai Traditional Brassware & Clay Pottery Handicraft Cluster',
      'Agriculture Sector — Paddy Farming & Rice Milling Units',
      'Chettinad Culinary & Spice Processing Export Industry',
    ],
    businessInfo:
      'Sivaganga district is South India\'s premier cultural heritage tourism hub. International travelers visiting Chettinad palatial mansions, archaeology scholars at Keezhadi Museum, Athangudi tile buyers, brassware traders from Manamadurai, and pilgrims visiting Pillayarpatti rely daily on intercity road transport. SAMAYAS delivers executive sedans, spacious tourist SUVs, 50-minute Madurai Airport drops, and 24/7 one-way rentals with zero return fare charges.',

    reviews: [
      {
        name: 'Meyyappan Chettiar',
        rating: 5,
        text: 'Booked a one-way cab from Kanadukathan Chettinad palace to Madurai Airport for a flight to Singapore. SAMAYAS driver was right on time and reached IXM airport smoothly in 50 minutes.',
        route: 'Kanadukathan to Madurai Airport',
      },
      {
        name: 'Elizabeth Taylor',
        rating: 5,
        text: 'Wonderful heritage tour cab service! Covered Pillayarpatti Ganesha cave temple, Athangudi tile workshop, and Keezhadi museum. Clean car and courteous driver.',
        route: 'Chettinad Local Sightseeing',
      },
      {
        name: 'Palanivelu K.',
        rating: 5,
        text: 'Regularly book SAMAYAS for Athangudi tile business trips from Karaikudi to Trichy and Chennai. Honest per-km pricing and zero return charges.',
        route: 'Karaikudi to Trichy',
      },
      {
        name: 'Suresh Kumar M.',
        rating: 4,
        text: 'Booked a cab from Sivaganga town to Rameshwaram temple. Safe driving along the highway and excellent service.',
        route: 'Sivaganga to Rameshwaram',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Karaikudi/Sivaganga to Madurai Airport (IXM)?',
        a: 'The one-way taxi fare from Sivaganga/Karaikudi to Madurai International Airport (IXM - 48 km via NH-85/NH-36) starts at approximately ₹850 for a Hatchback, ₹1,050 for a Sedan (Dzire, Etios), and ₹1,500 for an SUV (Ertiga). Travel time is around 50 minutes.',
      },
      {
        q: 'How far is Pillayarpatti Temple from Karaikudi and what is the cab fare?',
        a: 'Pillayarpatti Karpaga Vinayagar Temple is approximately 12 km from Karaikudi town. A one-way taxi ride takes about 20 minutes and costs starting from ₹350.',
      },
      {
        q: 'Can I book a cab for a full-day tour of Chettinad mansions, Athangudi tiles, and Keezhadi Museum?',
        a: 'Yes! SAMAYAS offers customized full-day heritage cab packages covering Kanadukathan mansions, Athangudi tile workshops, Pillayarpatti temple, and Keezhadi Museum.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Karaikudi Junction (KKDI) and Sivaganga Station (SVGA)?',
        a: 'Yes, we provide 24/7 round-the-clock station pickup at Karaikudi Junction (KKDI), Sivaganga Station (SVGA), Manamadurai Junction (MNM), and all Chettinad resorts.',
      },
      {
        q: 'Which vehicles are recommended for family heritage tours around Chettinad?',
        a: 'We recommend our comfortable Sedans (Dzire, Etios) or spacious 7-seater SUVs (Ertiga, Innova Crysta) to easily accommodate luggage, Athangudi tiles, and family members.',
      },
    ],

    metaTitle: 'Sivaganga One-Way Taxi | Karaikudi & Chettinad Cabs | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Sivaganga & Karaikudi? Direct one-way taxi to Madurai Airport, Chettinad heritage mansions, Trichy & Rameshwaram. Instant booking confirmation.',
  },

  // ─────────────────────────────────────────────────────────
  // TENKASI — District 26
  // ─────────────────────────────────────────────────────────
  tenkasi: {
    heroTagline:
      'Planning a waterfall visit or trip from Tenkasi? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Tenkasi, Courtallam Waterfalls, and Kasi Viswanathar Temple.',

    overview: `Tenkasi district, nestling at the foot of the Western Ghats along the border of Kerala in southwestern Tamil Nadu, is nationally celebrated as the 'Spa of South India' and 'Kashi of the South'.

Carved out of Tirunelveli district in 2019, Tenkasi is bounded by Tirunelveli to the south, Virudhunagar to the north, Kollam and Pathanamthitta districts of Kerala to the west. The district is world-famous for Courtallam (Kutralam) waterfalls—including Main Falls (Peraruvi), Five Falls (Aintharuvi), Old Courtallam, Chitraruvi, and Shenbagadevi Falls—fed by medicinal herbal mountain air flowing through the Western Ghats during the June-September southwest monsoon. Spiritually, Tenkasi is crowned by the ancient Kasi Viswanathar Temple built by Parakrama Pandya King, featuring a colossal 180-foot gopuram and musical granite pillars, alongside the syncretic Sankarankovil Sankaranarayanaswamy Temple and Thirumalai Kovil.

Transportation in Tenkasi is anchored by Tenkasi Junction (TSI), Sengottai Railway Station (SCT) along the scenic Punalur mountain rail line, and Tenkasi Central Bus Stand, with Trivandrum International Airport (TRV) just 105 km away across the Shenkottai Pass and Tuticorin Airport (TCR) 95 km east. Whether you are taking a monsoon family vacation to Courtallam waterfalls, attending temple festivals, or traveling across the Kerala border to Trivandrum Airport, SAMAYAS provides reliable 24/7 one-way cabs from Tenkasi with zero return fare charges.`,

    overviewHighlights: [
      'Spa of South India hosting Courtallam Waterfalls (Peraruvi & Aintharuvi) and Western Ghats herbal breezes',
      'Kashi of the South home to 180-ft gopuram Kasi Viswanathar Temple and Sankarankovil syncretic shrine',
      '24/7 direct one-way taxi transfers across Shenkottai Pass to Trivandrum Airport (105 km), Tirunelveli, and Madurai'
    ],

    routes: [
      { name: 'Tenkasi to Courtallam', to: 'Courtallam', distanceKm: 6, timeHours: 0.2, startingFare: 1950 },
      { name: 'Tenkasi to Tirunelveli', to: 'Tirunelveli', distanceKm: 55, timeHours: 1.1, startingFare: 1950 },
      { name: 'Tenkasi to Trivandrum Airport', to: 'Trivandrum Airport', distanceKm: 105, timeHours: 2.75, startingFare: 1950 },
      { name: 'Tenkasi to Madurai', to: 'Madurai', distanceKm: 160, timeHours: 3.1, startingFare: 2400 },
      { name: 'Tenkasi to Kanyakumari', to: 'Kanyakumari', distanceKm: 130, timeHours: 2.75, startingFare: 1950 },
      { name: 'Tenkasi to Tuticorin Airport', to: 'Tuticorin Airport', distanceKm: 95, timeHours: 2, startingFare: 1950 },
      { name: 'Tenkasi to Kollam', to: 'Kollam', distanceKm: 100, timeHours: 2.5, startingFare: 1950 },
      { name: 'Tenkasi to Chennai', to: 'Chennai', distanceKm: 620, timeHours: 10.5, startingFare: 9300 },
      { name: 'Tenkasi to Coimbatore', to: 'Coimbatore', distanceKm: 320, timeHours: 6.25, startingFare: 4800 },
    ],

    fareTable: [
      { to: 'Courtallam',          distanceKm: 6, timeHours: 0.2, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Tirunelveli',         distanceKm: 55, timeHours: 1.1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Trivandrum Airport', distanceKm: 105, timeHours: 2.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Madurai',             distanceKm: 160, timeHours: 3.1, hatchback: 2400, sedan: 2400, suv: 3200 },
      { to: 'Kanyakumari',         distanceKm: 130, timeHours: 2.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Tuticorin Airport',   distanceKm: 95, timeHours: 2, hatchback: 1950, sedan: 1950, suv: 2600 },
    ],

    pickupLocations: [
      'Tenkasi Junction Railway Station (TSI)',
      'Tenkasi Central Bus Stand (Madurai Rd)',
      'Courtallam Main Falls (Peraruvi)',
      'Courtallam Five Falls (Aintharuvi)',
      'Sengottai Railway Station (SCT)',
      'Sankarankovil Temple Gate',
      'Kadayanallur Bus Stand',
      'Shenkottai Puliyarai Checkpost',
      'Surandai Bus Stand',
      'Panpoli Thirumalai Kovil Foot',
    ],
    dropLocations: [
      'Courtallam',
      'Tirunelveli',
      'Trivandrum Airport',
      'Madurai',
      'Kanyakumari',
      'Tuticorin Airport',
      'Kollam',
      'Chennai',
      'Coimbatore',
    ],

    transportHubs: {
      busStands: [
        { name: 'Tenkasi Central Bus Stand', address: 'Madurai Road, Tenkasi - 627811' },
        { name: 'Courtallam Bus Stand', address: 'Bus Stand Road, Courtallam - 627802' },
        { name: 'Sengottai Bus Stand', address: 'Main Road, Sengottai - 627809' },
      ],
      railwayStations: [
        { name: 'Tenkasi Junction Railway Station', code: 'TSI', address: 'Station Road, Tenkasi - 627811' },
        { name: 'Sengottai Railway Station', code: 'SCT', address: 'Sengottai, Tenkasi District - 627809' },
        { name: 'Sankarankovil Railway Station', code: 'SNKL', address: 'Sankarankovil - 627756' },
      ],
      airports: [
        { name: 'Tuticorin Airport', code: 'TCR', distanceKm: 95, address: 'Vagaikulam, Thoothukudi - 628103' },
        { name: 'Trivandrum International Airport', code: 'TRV', distanceKm: 105, address: 'Chacka, Thiruvananthapuram, Kerala - 695008' },
        { name: 'Madurai International Airport', code: 'IXM', distanceKm: 160, address: 'Airport Road, Avaniyapuram, Madurai - 625022' },
      ],
    },

    touristAttractions: [
      { name: 'Courtallam Waterfalls (Peraruvi & Aintharuvi)', description: 'World-famous medicinal mountain waterfalls cascading over Western Ghats rocks, celebrated as the \'Spa of South India\'.', distanceKm: 6 },
      { name: 'Tenkasi Kasi Viswanathar Temple', description: 'Majestic 15th-century Pandyan temple featuring a colossal 180-foot gopuram and musical granite pillars.', distanceKm: 1 },
      { name: 'Sankarankovil Sankaranarayanaswamy Temple', description: 'Renowned 11th-century temple housing the unique syncretic idol of half-Shiva half-Vishnu, famous for Aadi Tapas festival.', distanceKm: 34 },
      { name: 'Shenkottai & Aryankavu Pass', description: 'Scenic mountain border pass connecting Tamil Nadu and Kerala through dense evergreen rainforests.', distanceKm: 15 },
      { name: 'Thirumalai Kovil, Panpoli', description: 'Scenic hilltop Murugan temple reached via 544 steps or mountain ghat road, offering sweeping views of paddy fields.', distanceKm: 14 },
    ],

    industries: [
      'Eco-Tourism & Monsoon Waterfall Hospitality Industry (Peak June-September season)',
      'Agro-Processing & Fruit Trade (Mango, Guava, Lemon, Amla Orchards)',
      'Cotton Spinning Mills & Handloom Weaving (Sankarankovil & Kadayanallur)',
      'Inter-State Transport & Commerce across Shenkottai Pass to Kerala',
      'Coir Fiber & Eco-Friendly Agricultural Processing',
    ],
    businessInfo:
      'Tenkasi district is South India\'s premier waterfall wellness destination and inter-state trade gateway to Kerala. Millions of monsoon vacationers visiting Courtallam waterfalls, pilgrims at Kasi Viswanathar and Sankarankovil, fruit orchard traders, and commuters traveling across the Shenkottai pass to Trivandrum Airport (TRV) rely heavily on road transport. SAMAYAS delivers executive sedans, spacious family SUVs for waterfall luggage, 2.5-hour Trivandrum Airport drops, and 24/7 one-way cabs with zero return charges.',

    reviews: [
      {
        name: 'Pandian S.',
        rating: 5,
        text: 'Booked an Ertiga SUV from Tenkasi Junction for a family monsoon vacation to Courtallam Main Falls and Five Falls. Driver was very courteous and drove safely.',
        route: 'Tenkasi to Courtallam',
      },
      {
        name: 'Dr. Anita Pillai',
        rating: 5,
        text: 'Took a one-way cab from Tenkasi town across the Shenkottai pass to Trivandrum Airport for a flight to Dubai. Smooth mountain drive and reached TRV airport right on time.',
        route: 'Tenkasi to Trivandrum Airport',
      },
      {
        name: 'Ganesh Sankarankovil',
        rating: 5,
        text: 'Regularly book SAMAYAS for textile business trips from Sankarankovil to Madurai and Tirunelveli. Clean cars and honest billing.',
        route: 'Sankarankovil to Madurai',
      },
      {
        name: 'Mathew Thomas',
        rating: 4,
        text: 'Booked a cab from Sengottai station to Kanyakumari. Excellent highway driving experience with SAMAYAS.',
        route: 'Sengottai to Kanyakumari',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Tenkasi to Courtallam waterfalls?',
        a: 'The one-way taxi fare from Tenkasi town/station to Courtallam Main Falls (6 km) starts at approximately ₹300 for a Hatchback, ₹400 for a Sedan, and ₹650 for an SUV. Travel time is under 15 minutes.',
      },
      {
        q: 'What is the one-way taxi fare from Tenkasi to Trivandrum Airport (TRV)?',
        a: 'The one-way taxi fare from Tenkasi to Trivandrum International Airport (TRV - 105 km via Shenkottai/Aryankavu pass) starts at approximately ₹2,100 for a Hatchback, ₹2,450 for a Sedan, and ₹3,500 for an SUV. Travel time is around 2.75 hours.',
      },
      {
        q: 'Are SAMAYAS cabs available during the peak Courtallam monsoon season (June to September)?',
        a: 'Yes, SAMAYAS operates 24/7 dedicated cabs during the peak Courtallam waterfall season with advance online and WhatsApp booking.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Tenkasi Junction (TSI) and Sengottai Railway Station (SCT)?',
        a: 'Yes, we provide round-the-clock 24/7 train station pickup at Tenkasi Junction (TSI), Sengottai Station (SCT), and all Courtallam resorts.',
      },
      {
        q: 'Which vehicles are recommended for family waterfall trips to Courtallam?',
        a: 'We recommend our spacious 7-seater SUVs (Ertiga, Innova Crysta) for family waterfall trips to comfortably store extra clothes, oil bottles, and luggage.',
      },
    ],

    metaTitle: 'Book One-Way Taxi from Tenkasi | Courtallam Cabs | SAMAYAS',
    metaDescription:
      'Travel comfortably from Tenkasi & Courtallam, Tamil Nadu. Direct one-way taxi to Courtallam Waterfalls, Trivandrum Airport, Tirunelveli, Madurai & Kanyakumari. Available 24/7.',
  },

  // ─────────────────────────────────────────────────────────
  // THANJAVUR — District 27
  // ─────────────────────────────────────────────────────────
  thanjavur: {
    heroTagline:
      'Visiting the UNESCO Big Temple in Thanjavur? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Thanjavur, including Brihadeeswarar Temple and Maratha Palace.',

    overview: `Thanjavur district, situated in the fertile Kaveri Delta region of eastern Tamil Nadu, is globally celebrated as the cultural capital of Tamil Nadu, the 'Rice Bowl of Tamil Nadu', and the grand imperial capital of the Chola Dynasty.

Bounded by Ariyalur and Tiruchirappalli to the west, Mayiladuthurai and Tiruvarur to the east, Pudukkottai to the south, and the Palk Strait to the southeast, Thanjavur holds an incomparable architectural, musical, and artistic legacy. The district's crowning jewel is the UNESCO World Heritage Brihadeeswarar Temple (The 'Big Temple' or Peruvudaiyar Kovil)—a 1,000-year-old architectural titan built by Emperor Raja Raja Chola I featuring a 216-foot vimana topped by an 81-ton single granite stone capstone. Thanjavur is also home to the Thanjavur Maratha Palace & Saraswathi Mahal Library (one of Asia's oldest libraries housing 60,000 rare palm-leaf manuscripts), Darasuram Airavatesvara Temple, Thiruvaiyaru (the cradle of Carnatic music), and the temple city of Kumbakonam.

World-renowned for GI-tagged traditional handicrafts—including Thanjavur Art Plates, Thanjavur Dancing Dolls (Thalaiyatti Bommai), hand-carved Saraswathi Veenai, and Swamimalai bronze icon casting—the district is a center for arts and agriculture. Transportation is anchored by Thanjavur Junction (TJ), Kumbakonam Railway Station (KMU), and Thanjavur New Bus Stand, with Tiruchirappalli International Airport (TRZ) located just 55 km west. Whether you are exploring Chola architecture, taking a Navagraha temple tour, visiting Thiruvaiyaru, or catching a flight from Trichy Airport, SAMAYAS provides reliable 24/7 one-way cabs from Thanjavur with zero return fare charges.`,

    overviewHighlights: [
      'Cultural Capital of Tamil Nadu home to UNESCO Brihadeeswarar Big Temple & Maratha Palace Saraswathi Mahal',
      'Cradle of GI-tagged Thanjavur Art Plates, Saraswathi Veenai, Bronze Icons, and Carnatic music (Thiruvaiyaru)',
      '24/7 direct one-way taxi transfers to Trichy Airport (55 km), Kumbakonam Navagraha circuit, Madurai & Chennai'
    ],

    routes: [
      { name: 'Thanjavur to Trichy Airport', to: 'Trichy Airport', distanceKm: 55, timeHours: 1, startingFare: 1950 },
      { name: 'Thanjavur to Kumbakonam', to: 'Kumbakonam', distanceKm: 40, timeHours: 0.8, startingFare: 1950 },
      { name: 'Thanjavur to Madurai', to: 'Madurai', distanceKm: 190, timeHours: 3.5, startingFare: 2850 },
      { name: 'Thanjavur to Chennai', to: 'Chennai', distanceKm: 340, timeHours: 6, startingFare: 5100 },
      { name: 'Thanjavur to Velankanni', to: 'Velankanni', distanceKm: 90, timeHours: 1.75, startingFare: 1950 },
      { name: 'Thanjavur to Pudukkottai', to: 'Pudukkottai', distanceKm: 55, timeHours: 1.1, startingFare: 1950 },
      { name: 'Thanjavur to Coimbatore', to: 'Coimbatore', distanceKm: 270, timeHours: 5.25, startingFare: 4050 },
      { name: 'Thanjavur to Salem', to: 'Salem', distanceKm: 140, timeHours: 2.75, startingFare: 2100 },
      { name: 'Thanjavur to Rameshwaram', to: 'Rameshwaram', distanceKm: 220, timeHours: 4.25, startingFare: 3300 },
    ],

    fareTable: [
      { to: 'Trichy Airport', distanceKm: 55, timeHours: 1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Kumbakonam',     distanceKm: 40, timeHours: 0.8, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Madurai',        distanceKm: 190, timeHours: 3.5, hatchback: 2850, sedan: 2850, suv: 3800 },
      { to: 'Chennai',        distanceKm: 340, timeHours: 6, hatchback: 5100, sedan: 5100, suv: 6800 },
      { to: 'Velankanni',     distanceKm: 90, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Pudukkottai',    distanceKm: 55, timeHours: 1.1, hatchback: 1950, sedan: 1950, suv: 2600 },
    ],

    pickupLocations: [
      'Thanjavur Junction Railway Station (TJ)',
      'Thanjavur New Bus Stand (Trichy Rd)',
      'Old Bus Stand / Clock Tower',
      'Brihadeeswarar Temple South Gate (Big Temple)',
      'Thanjavur Maratha Palace / Saraswathi Mahal Gate',
      'Kumbakonam Railway Station (KMU)',
      'Swamimalai Temple Foot',
      'Thiruvaiyaru Tyagaraja Aradhana Ground',
      'Papanasam Bus Stand',
      'Pattukkottai Bus Stand',
    ],
    dropLocations: [
      'Trichy Airport',
      'Kumbakonam',
      'Madurai',
      'Chennai',
      'Velankanni',
      'Pudukkottai',
      'Coimbatore',
      'Salem',
      'Rameshwaram',
    ],

    transportHubs: {
      busStands: [
        { name: 'Thanjavur New Bus Stand', address: 'Trichy Road, Thanjavur - 613005' },
        { name: 'Thanjavur Old Bus Stand', address: 'South Rampart, Thanjavur - 613001' },
        { name: 'Kumbakonam Central Bus Stand', address: 'Town Hall Road, Kumbakonam - 612001' },
      ],
      railwayStations: [
        { name: 'Thanjavur Junction Railway Station', code: 'TJ', address: 'Station Road, Thanjavur - 613001' },
        { name: 'Kumbakonam Railway Station', code: 'KMU', address: 'Station Road, Kumbakonam - 612001' },
        { name: 'Papanasam Railway Station', code: 'PAV', address: 'Papanasam, Thanjavur District - 614205' },
      ],
      airports: [
        { name: 'Tiruchirappalli International Airport (Nearest)', code: 'TRZ', distanceKm: 55, address: 'Airport Road, Tiruchirappalli - 620007' },
      ],
    },

    touristAttractions: [
      { name: 'UNESCO Brihadeeswarar Temple (The Big Temple)', description: '1,000-year-old Chola architectural masterpiece featuring a 216-foot vimana topped by an 81-ton single granite capstone.', distanceKm: 1.5 },
      { name: 'Thanjavur Maratha Palace & Saraswathi Mahal Library', description: 'Historic 16th-century royal palace complex housing Asia\'s oldest library with 60,000 ancient manuscripts and Maratha art.', distanceKm: 2 },
      { name: 'Swamimalai Swaminathaswamy Temple, Kumbakonam', description: 'Sacred 4th Arupadai Veedu shrine dedicated to Lord Murugan teaching the Pranava Mantra to Lord Shiva.', distanceKm: 32 },
      { name: 'Thiruvaiyaru Aiyarappar Temple & Tyagaraja Samadhi', description: 'Sacred Kaveri riverfront pilgrimage site famous as the birthplace and samadhi of Carnatic music legend Saint Tyagaraja.', distanceKm: 11 },
      { name: 'Airavatesvara Temple, Darasuram', description: 'UNESCO World Heritage Chola temple celebrated for stone chariot architecture and intricate miniature relief carvings.', distanceKm: 36 },
    ],

    industries: [
      'Kaveri Delta Agricultural Sector — Paddy Cultivation, Rice Milling & Storage Hub',
      'UNESCO Heritage Tourism & International Cultural Hospitality Sector',
      'GI-Tagged Handicrafts Industry — Thanjavur Art Plates, Saraswathi Veenai & Bronze Casting',
      'Swamimalai & Kumbakonam Traditional Brass & Bronze Metalware Industry',
      'Thirubhuvanam Silk Handloom Weaving Cluster',
    ],
    businessInfo:
      'Thanjavur is South India\'s cultural capital and rice bowl. Architectural historians visiting the Big Temple, Carnatic music artists visiting Thiruvaiyaru, Navagraha temple pilgrims, rice mill exporters, and handicraft traders buying Thanjavur Art Plates rely daily on intercity road transport. SAMAYAS delivers executive sedans, 50-minute Trichy Airport drops, spacious tourist SUVs for family temple circuits, and 24/7 one-way rentals with zero return fare charges.',

    reviews: [
      {
        name: 'Dr. Swaminathan S.',
        rating: 5,
        text: 'Booked a one-way cab from Thanjavur Big Temple to Trichy Airport for an international flight. Driver was prompt, vehicle was spotless, and reached TRZ airport in 50 minutes.',
        route: 'Thanjavur to Trichy Airport',
      },
      {
        name: 'Vidya Balasubramanian',
        rating: 5,
        text: 'Wonderful temple tour experience! Took a cab from Thanjavur station covering Darasuram, Swamimalai, and drop at Kumbakonam. Driver was very polite and knew all temple timings.',
        route: 'Thanjavur to Kumbakonam',
      },
      {
        name: 'Ramanathan Art Plates',
        rating: 5,
        text: 'Regularly book SAMAYAS for Thanjavur art plate handicraft export business trips to Chennai. Transparent rates and zero return fare.',
        route: 'Thanjavur to Chennai',
      },
      {
        name: 'Professor Jean-Luc',
        rating: 4,
        text: 'Booked a cab from Saraswathi Mahal library to Madurai. Great driver who navigated the highways safely.',
        route: 'Thanjavur to Madurai',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Thanjavur to Trichy Airport (TRZ)?',
        a: 'The one-way taxi fare from Thanjavur town/station to Tiruchirappalli International Airport (TRZ - 55 km via NH-83) starts at approximately ₹900 for a Hatchback, ₹1,100 for a Sedan (Dzire, Etios), and ₹1,550 for an SUV (Ertiga). Travel time is around 50 to 60 minutes.',
      },
      {
        q: 'How far is Kumbakonam from Thanjavur and what is the cab charge?',
        a: 'Kumbakonam is approximately 40 km from Thanjavur. A one-way taxi ride takes about 50 minutes and costs starting from ₹700.',
      },
      {
        q: 'Can I book a cab for a full-day tour of Brihadeeswarar Big Temple, Maratha Palace, and Thiruvaiyaru?',
        a: 'Yes! SAMAYAS provides dedicated full-day heritage cab packages covering the Big Temple, Saraswathi Mahal Palace, Thiruvaiyaru, and Darasuram with doorstep pickup.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Thanjavur Junction (TJ) and Kumbakonam Station (KMU)?',
        a: 'Yes, we provide round-the-clock 24/7 train station pickup at Thanjavur Junction (TJ), Kumbakonam Station (KMU), and all hotels across Thanjavur.',
      },
      {
        q: 'Which vehicles are recommended for Navagraha temple tours starting from Thanjavur?',
        a: 'We recommend our comfortable Sedans (Dzire, Etios) or spacious 7-seater SUVs (Ertiga, Innova Crysta) for family Navagraha temple circuits.',
      },
    ],

    metaTitle: 'Thanjavur Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Need airport pickup & drop from Thanjavur? Direct one-way taxi to Trichy Airport, Kumbakonam, Madurai, Chennai & Velankanni. Book online today with SAMAYAS.',
  },

  // ─────────────────────────────────────────────────────────
  // THENI — District 28
  // ─────────────────────────────────────────────────────────
  theni: {
    heroTagline:
      'Heading to mountain resorts from Theni? Book a 24/7 mountain one-way taxi with SAMAYAS. Doorstep pickups across Theni, Cardamom Valley, and Munnar road.',

    overview: `Theni district, nestling in a lush Western Ghats mountain valley along the Kerala border in southwestern Tamil Nadu, is nationally celebrated as the 'Cardamom & Garlic Capital of South India' and the premier gateway to Munnar and Meghamalai.

Bounded by Dindigul to the north, Madurai to the east, Virudhunagar to the south, and Idukki district of Kerala to the west, Theni possesses an extraordinarily rich agro-climatic landscape. The district houses the world-famous Cumbum Valley—one of Asia's most fertile agricultural troughs cultivating green Muscat grapes year-round—and Bodinayakanur (Bodi), India's premier commercial cardamom trade hub. Theni is world-renowned for its pristine mountain hill stations including Meghamalai ('Cloud Mountain' tea estates at 1,500m elevation), Suruli Waterfalls (falling 150 ft in two tiers amidst medicinal forests), Vaigai Dam, Kumbakkarai Waterfalls near Periyakulam, and proximity to Munnar (85 km via Bodi Ghat) and Thekkady / Periyar Tiger Reserve.

Transportation in Theni is anchored by Bodinayakanur Railway Station (BDNK), Theni New Bus Stand along NH-85 (Kochi-Dhanushkodi Highway), and the Bodi-Munnar ghat road, with Madurai International Airport (IXM) located 80 km east. Whether you are taking a hill vacation to Munnar or Meghamalai, buying spices in Bodi, exploring Cumbum grape vineyards, or booking a direct airport transfer to Madurai or Kochi, SAMAYAS provides reliable 24/7 one-way cabs from Theni with zero return fare charges.`,

    overviewHighlights: [
      'Cardamom & Grape Capital hosting Bodi spice markets, Cumbum Valley grape vineyards, and Vaigai Dam',
      'Gateway to Meghamalai Cloud Mountain, Suruli Waterfalls, Munnar ghat road, and Thekkady tiger reserve',
      '24/7 direct one-way mountain taxi transfers to Munnar (85 km), Madurai Airport (80 km), Meghamalai, and Kochi'
    ],

    routes: [
      { name: 'Theni to Munnar', to: 'Munnar', distanceKm: 85, timeHours: 2.75, startingFare: 1950 },
      { name: 'Theni to Madurai Airport', to: 'Madurai Airport', distanceKm: 80, timeHours: 1.5, startingFare: 1950 },
      { name: 'Theni to Meghamalai', to: 'Meghamalai', distanceKm: 70, timeHours: 2.5, startingFare: 1950 },
      { name: 'Theni to Thekkady', to: 'Thekkady', distanceKm: 60, timeHours: 1.75, startingFare: 1950 },
      { name: 'Theni to Kodaikanal', to: 'Kodaikanal', distanceKm: 85, timeHours: 2.75, startingFare: 1950 },
      { name: 'Theni to Dindigul', to: 'Dindigul', distanceKm: 75, timeHours: 1.5, startingFare: 1950 },
      { name: 'Theni to Kochi', to: 'Kochi', distanceKm: 175, timeHours: 4.5, startingFare: 2625 },
      { name: 'Theni to Chennai', to: 'Chennai', distanceKm: 510, timeHours: 9, startingFare: 7650 },
      { name: 'Theni to Coimbatore', to: 'Coimbatore', distanceKm: 195, timeHours: 4, startingFare: 2925 },
    ],

    fareTable: [
      { to: 'Munnar',          distanceKm: 85, timeHours: 2.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Madurai Airport', distanceKm: 80, timeHours: 1.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Meghamalai',      distanceKm: 70, timeHours: 2.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Thekkady',        distanceKm: 60, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Kodaikanal',      distanceKm: 85, timeHours: 2.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Kochi',           distanceKm: 175, timeHours: 4.5, hatchback: 2625, sedan: 2625, suv: 3500 },
    ],

    pickupLocations: [
      'Theni New Bus Stand (Madurai Rd)',
      'Bodinayakanur Railway Station (BDNK)',
      'Bodi Cardamom Market Area',
      'Cumbum Bus Stand',
      'Periyakulam Bus Stand',
      'Vaigai Dam Entrance Gate',
      'Suruli Waterfalls Entrance',
      'Chinnamanur / Meghamalai Foothill Checkpost',
      'Utthamapalayam Bus Stop',
      'Andipatti Bus Stand',
    ],
    dropLocations: [
      'Munnar',
      'Madurai Airport',
      'Meghamalai',
      'Thekkady',
      'Kodaikanal',
      'Dindigul',
      'Kochi',
      'Chennai',
      'Coimbatore',
    ],

    transportHubs: {
      busStands: [
        { name: 'Theni Central Bus Stand', address: 'Madurai Road, Theni - 625531' },
        { name: 'Bodinayakanur Bus Stand', address: 'Main Road, Bodinayakanur - 625513' },
        { name: 'Cumbum Bus Stand', address: 'Bypass Road, Cumbum - 625516' },
      ],
      railwayStations: [
        { name: 'Bodinayakanur Railway Station', code: 'BDNK', address: 'Station Road, Bodinayakanur - 625513' },
        { name: 'Theni Railway Station', code: 'THNI', address: 'Station Road, Theni - 625531' },
      ],
      airports: [
        { name: 'Madurai International Airport (Nearest)', code: 'IXM', distanceKm: 80, address: 'Airport Road, Avaniyapuram, Madurai - 625022' },
        { name: 'Cochin International Airport', code: 'COK', distanceKm: 175, address: 'Nedumbassery, Kochi, Kerala - 683111' },
      ],
    },

    touristAttractions: [
      { name: 'Meghamalai (Cloud Mountain & Highwavys Estate)', description: 'Serene hill station located at 1,500 meters featuring mist-covered tea plantations, Highwavys Dam, and wild elephants.', distanceKm: 70 },
      { name: 'Suruli Waterfalls', description: 'Cascading 150-foot two-tiered waterfall surrounded by dense medicinal forests mentioned in ancient Silappatikaram epic.', distanceKm: 45 },
      { name: 'Cumbum Grape Farms & Valley', description: 'Fertile agricultural paradise world-famous for cultivating green Muscat grapes year-round across vast vineyards.', distanceKm: 40 },
      { name: 'Vaigai Dam & Garden', description: 'Iconic 111-foot high dam constructed across River Vaigai featuring manicured gardens, children\'s park, and boating.', distanceKm: 16 },
      { name: 'Kumbakkarai Waterfalls, Periyakulam', description: 'Pristine natural rock waterfall pool located at the base of Kodaikanal hills, famous for crystal-clear mountain streams.', distanceKm: 24 },
    ],

    industries: [
      'Bodinayakanur Cardamom & Spices Trade Cluster (India\'s premier cardamom market)',
      'Cumbum Valley Muscat Grape Cultivation & Wine/Fruit Export Industry',
      'Meghamalai & Munnar Gateway Hill Tourism & Eco-Resort Sector',
      'Textile & Cotton Spinning Mills in Periyakulam & Andipatti',
      'Garlic & Mango Agricultural Processing Industry',
    ],
    businessInfo:
      'Theni district is a vital mountain agriculture and hill tourism gateway. Cardamom merchants from Bodi market, grape exporters from Cumbum valley, tea estate managers from Highwavys and Munnar, hill vacationers climbing to Meghamalai, and travelers catching flights from Madurai Airport (IXM) rely daily on intercity road transport. SAMAYAS delivers executive sedans, experienced hill drivers for Bodi-Munnar hairpin bends, 90-minute Madurai Airport transfers, and 24/7 one-way cabs with zero return charges.',

    reviews: [
      {
        name: 'Balamurugan Cardamoms',
        rating: 5,
        text: 'Booked a one-way cab from Bodi spice market to Madurai Airport for a spice export flight to Dubai. Driver was early, vehicle was clean, and reached IXM airport in 1.5 hours.',
        route: 'Bodi to Madurai Airport',
      },
      {
        name: 'Dr. Archana Ramesh',
        rating: 5,
        text: 'Took a family mountain cab from Theni to Meghamalai Cloud Mountain resorts. The driver handled the steep estate hairpin roads effortlessly.',
        route: 'Theni to Meghamalai',
      },
      {
        name: 'Santhosh Cumbum',
        rating: 5,
        text: 'Regularly book SAMAYAS for grape trade business trips from Cumbum to Kochi and Madurai. Transparent per-km rates and zero return fare.',
        route: 'Cumbum to Kochi',
      },
      {
        name: 'Kevin D\'Souza',
        rating: 4,
        text: 'Booked an Ertiga SUV from Theni to Munnar hill station. Great mountain driving experience with SAMAYAS.',
        route: 'Theni to Munnar',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Theni to Munnar hill station?',
        a: 'The one-way taxi fare from Theni to Munnar (85 km via Bodi Ghat road) starts at approximately ₹2,200 for a Hatchback, ₹2,550 for a Sedan (Dzire, Etios), and ₹3,600 for an SUV (Ertiga). Travel time is around 2.75 hours.',
      },
      {
        q: 'What is the one-way taxi fare from Theni to Madurai Airport (IXM)?',
        a: 'The one-way taxi fare from Theni to Madurai International Airport (IXM - 80 km via NH-85) starts at approximately ₹1,350 for a Hatchback, ₹1,600 for a Sedan, and ₹2,200 for an SUV. Travel time is around 1.5 hours.',
      },
      {
        q: 'Are SAMAYAS drivers experienced in driving up Bodi Ghat to Munnar and Meghamalai roads?',
        a: 'Yes! All drivers assigned to Theni mountain routes are local hill experts trained in gear control, fog driving, and steep estate hairpin curves.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Bodinayakanur Railway Station (BDNK) and Bodi market?',
        a: 'Yes, we provide round-the-clock 24/7 pickup from Bodinayakanur Station (BDNK), Bodi cardamom markets, Cumbum, and all Theni hotels.',
      },
      {
        q: 'Which vehicles are recommended for family mountain trips to Meghamalai or Munnar?',
        a: 'We recommend our spacious 7-seater SUVs (Ertiga, Innova Crysta) for family hill trips to comfortably handle luggage and mountain inclines.',
      },
    ],

    metaTitle: 'One-Way Cab from Theni | Munnar & Meghamalai Cabs | SAMAYAS',
    metaDescription:
      'Travel comfortably from Theni, Tamil Nadu. Direct hill cabs to Munnar, Meghamalai, Madurai Airport, Thekkady & Kodaikanal. Experienced mountain drivers. Doorstep pickup 24/7.',
  },

  // ─────────────────────────────────────────────────────────
  // THOOTHUKUDI — District 29
  // ─────────────────────────────────────────────────────────
  thoothukudi: {
    heroTagline:
      'Traveling from the Pearl City of Thoothukudi? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Thoothukudi, VOC Port, and Tiruchendur Murugan Temple.',

    overview: `Thoothukudi district (Tuticorin), situated along the Gulf of Mannar coastline in southern Tamil Nadu, is globally celebrated as the 'Pearl City of India' (Muthu Nagar), 'Sea Gateway of South India', and home to VO Chidambaranar Port.

Bounded by Tirunelveli to the west and south, Virudhunagar and Ramanathapuram to the north, and the Indian Ocean to the east, Thoothukudi possesses a vast maritime and industrial heritage. The district hosts VO Chidambaranar Port (Tuticorin Port)—one of India's 12 major deep-sea container ports—vast coastal salt pans (making Tamil Nadu India's second-largest salt producer), SPIC chemical fertilizer complex, thermal power stations, and major frozen seafood export processing plants. Spiritually, Thoothukudi is world-famous for Arulmigu Subramaniya Swamy Temple in Tiruchendur—the 2nd Arupadai Veedu of Lord Murugan, uniquely situated right on the seashore of Gulf of Mannar where Lord Murugan vanquished Surapadman.

Historically, the district is the proud birthplace of freedom fighters V.O. Chidambaram Pillai ('Kappalottiya Tamilan') in Ottapidaram and Mahakavi Subramania Bharati in Ettayapuram, alongside the ancient 8th-century Pandya rock-cut temple at Kalugumalai. Transportation is anchored by Tuticorin Airport (TCR - Vagaikulam), Tuticorin Railway Station (TN), Tiruchendur Station (TCN), Kovilpatti Station (CVP), and Tuticorin New Bus Stand on NH-138. Whether you are taking a seashore pilgrimage to Tiruchendur Temple, attending shipping logistics meetings at VOC Port, buying salt/seafood, or taking a direct flight from Tuticorin Airport, SAMAYAS provides reliable 24/7 one-way cabs from Thoothukudi with zero return fare charges.`,

    overviewHighlights: [
      'Pearl City & Sea Gateway hosting VO Chidambaranar Port, coastal salt pans & SPIC chemical complex',
      'Home to Tiruchendur Murugan Temple (2nd Arupadai Veedu on seashore), Ettayapuram & Kalugumalai rock caves',
      '24/7 direct one-way taxi transfers from Tuticorin Airport (TCR) & City to Tiruchendur (40 km), Tirunelveli, and Madurai'
    ],

    routes: [
      { name: 'Thoothukudi to Tiruchendur', to: 'Tiruchendur', distanceKm: 40, timeHours: 0.8, startingFare: 1950 },
      { name: 'Thoothukudi to Tirunelveli', to: 'Tirunelveli', distanceKm: 50, timeHours: 1, startingFare: 1950 },
      { name: 'Thoothukudi to Madurai', to: 'Madurai', distanceKm: 150, timeHours: 2.75, startingFare: 2250 },
      { name: 'Thoothukudi to Kanyakumari', to: 'Kanyakumari', distanceKm: 115, timeHours: 2.25, startingFare: 1950 },
      { name: 'Thoothukudi to Chennai', to: 'Chennai', distanceKm: 600, timeHours: 10, startingFare: 9000 },
      { name: 'Thoothukudi to Rameshwaram', to: 'Rameshwaram', distanceKm: 160, timeHours: 3.25, startingFare: 2400 },
      { name: 'Thoothukudi to Trivandrum', to: 'Trivandrum', distanceKm: 195, timeHours: 4.25, startingFare: 2925 },
      { name: 'Thoothukudi to Coimbatore', to: 'Coimbatore', distanceKm: 360, timeHours: 6.5, startingFare: 5400 },
      { name: 'Thoothukudi to Nagercoil', to: 'Nagercoil', distanceKm: 125, timeHours: 2.5, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Tiruchendur', distanceKm: 40, timeHours: 0.8, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Tirunelveli', distanceKm: 50, timeHours: 1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Madurai',    distanceKm: 150, timeHours: 2.75, hatchback: 2250, sedan: 2250, suv: 3000 },
      { to: 'Kanyakumari',distanceKm: 115, timeHours: 2.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chennai',    distanceKm: 600, timeHours: 10, hatchback: 9000, sedan: 9000, suv: 12000 },
      { to: 'Rameshwaram',distanceKm: 160, timeHours: 3.25, hatchback: 2400, sedan: 2400, suv: 3200 },
    ],

    pickupLocations: [
      'Tuticorin Railway Station (TN)',
      'Tuticorin Airport (TCR - Vagaikulam)',
      'VOC Port Main Gate / Harbor Beach',
      'Tuticorin New Bus Stand (Palayamkottai Rd)',
      'Tiruchendur Temple Sea Shore Gate',
      'Ettayapuram Mahakavi Bharatiyar Memorial',
      'SPIC Industrial Complex Gate',
      'Kovilpatti Railway Station (CVP)',
      'Ottapidaram VOC House',
      'Kayalpattinam Coastal Town',
    ],
    dropLocations: [
      'Tiruchendur',
      'Tirunelveli',
      'Madurai',
      'Kanyakumari',
      'Chennai',
      'Rameshwaram',
      'Trivandrum',
      'Coimbatore',
      'Nagercoil',
    ],

    transportHubs: {
      busStands: [
        { name: 'Tuticorin New Bus Stand', address: 'Palayamkottai Road, Thoothukudi - 628002' },
        { name: 'Tiruchendur Bus Stand', address: 'Temple Road, Tiruchendur - 628215' },
        { name: 'Kovilpatti Bus Stand', address: 'Main Road, Kovilpatti - 628501' },
      ],
      railwayStations: [
        { name: 'Tuticorin Railway Station', code: 'TN', address: 'Station Road, Thoothukudi - 628001' },
        { name: 'Tiruchendur Railway Station', code: 'TCN', address: 'Station Road, Tiruchendur - 628215' },
        { name: 'Kovilpatti Railway Station', code: 'CVP', address: 'Station Road, Kovilpatti - 628501' },
      ],
      airports: [
        { name: 'Tuticorin Airport (Vagaikulam)', code: 'TCR', distanceKm: 15, address: 'Airport Road, Vagaikulam, Thoothukudi - 628103' },
        { name: 'Madurai International Airport', code: 'IXM', distanceKm: 150, address: 'Airport Road, Avaniyapuram, Madurai - 625022' },
      ],
    },

    touristAttractions: [
      { name: 'Arulmigu Subramaniya Swamy Temple, Tiruchendur', description: 'Sacred 2nd Arupadai Veedu shrine of Lord Murugan uniquely situated on the shores of Gulf of Mannar.', distanceKm: 40 },
      { name: 'VOC Port & Roche Park Beach', description: 'Majestic deep-sea commercial port harbor promenade and scenic coastal beach park in Tuticorin city.', distanceKm: 5 },
      { name: 'Mahakavi Bharatiyar Memorial, Ettayapuram', description: 'Historic birthplace monument of legendary Tamil nationalist poet Subramania Bharati.', distanceKm: 42 },
      { name: 'V.O. Chidambaram Pillai Memorial, Ottapidaram', description: 'Ancestral home of \'Kappalottiya Tamilan\' who launched India\'s first indigenous shipping company against the British.', distanceKm: 25 },
      { name: 'Kalugumalai Rock-Cut Temples & Vettuvan Kovil', description: '8th-century Pandya rock-cut architectural marvel carved out of a single granite hill monolith.', distanceKm: 55 },
    ],

    industries: [
      'VO Chidambaranar Major Container Port & Shipping Logistics Maritime Sector',
      'Coastal Marine Salt Pans (Tamil Nadu\'s Largest Sea Salt Producer)',
      'Heavy Chemical & Fertilizer Manufacturing (SPIC Industrial Complex)',
      'Seafood Catch, Cold Storage & Frozen Seafood Export Processing',
      'Thermal Power Generation & Heavy Engineering Industrial Cluster',
    ],
    businessInfo:
      'Thoothukudi is South India\'s maritime gateway and heavy chemical industrial power. Shipping logistics executives visiting VOC Port, salt export merchants, SPIC chemical engineers, seafood exporters, millions of seashore pilgrims visiting Tiruchendur Murugan Temple, and air travelers using Tuticorin Airport (TCR - Vagaikulam) rely daily on intercity road transport. SAMAYAS delivers executive sedans, 20-minute Tuticorin Airport transfers, spacious 7-seater SUVs for seashore pilgrimage groups, and 24/7 one-way rentals with zero return fare charges.',

    reviews: [
      {
        name: 'Shanmuga Sundaram',
        rating: 5,
        text: 'Booked an Innova SUV from Tuticorin Airport (TCR) directly to Tiruchendur Murugan temple for a family seashore pilgrimage. Driver was waiting outside terminal, car was super clean, and driving was smooth.',
        route: 'Tuticorin Airport to Tiruchendur',
      },
      {
        name: 'Captain Rajesh V.',
        rating: 5,
        text: 'Took a one-way cab from VOC Port shipping office to Madurai Airport. SAMAYAS driver was early, knew the express route, and reached Madurai in 2.5 hours.',
        route: 'Thoothukudi to Madurai Airport',
      },
      {
        name: 'Kandasamy Salt Works',
        rating: 5,
        text: 'Regularly book SAMAYAS for salt trade business trips from Thoothukudi to Tirunelveli and Chennai. Transparent pricing and no return charges.',
        route: 'Thoothukudi to Tirunelveli',
      },
      {
        name: 'Josephine Mary',
        rating: 4,
        text: 'Booked a cab for Ettayapuram Bharatiyar memorial and Kovilpatti. Excellent driving and polite driver.',
        route: 'Thoothukudi Local Sightseeing',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Thoothukudi to Tiruchendur temple?',
        a: 'The one-way taxi fare from Thoothukudi town/station to Tiruchendur Murugan Temple (40 km via SH-176 coastal road) starts at approximately ₹700 for a Hatchback, ₹850 for a Sedan (Dzire, Etios), and ₹1,250 for an SUV (Ertiga). Travel time is around 45 to 50 minutes.',
      },
      {
        q: 'What is the one-way taxi fare from Tuticorin Airport (TCR - Vagaikulam) to Tiruchendur or City center?',
        a: 'The one-way taxi transfer from Tuticorin Airport (TCR) to Thoothukudi city center (15 km) starts at ₹450, and to Tiruchendur (40 km) starts at ₹800 with direct flight pickup.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Tuticorin Airport (TCR) for all arriving flights?',
        a: 'Yes! SAMAYAS provides 24/7 flight-synchronized doorstep pickup at Tuticorin Airport (TCR - Vagaikulam), VOC Port, and Tuticorin Railway Station (TN).',
      },
      {
        q: 'Can I book a one-way cab from Thoothukudi to Kanyakumari or Rameshwaram?',
        a: 'Yes, we operate daily direct one-way cabs from Thoothukudi to Kanyakumari (115 km) starting from ₹1,800 and to Rameshwaram (160 km) starting from ₹2,400 with zero return charges.',
      },
      {
        q: 'Which vehicles are recommended for family pilgrimage trips to Tiruchendur Murugan Temple?',
        a: 'We recommend our comfortable Sedans (Dzire, Etios) or spacious 7-seater SUVs (Ertiga, Innova Crysta) for family seashore temple visits.',
      },
    ],

    metaTitle: 'Thoothukudi One-Way Taxi | Tuticorin & Temple Cabs | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Thoothukudi (Tuticorin)? Direct one-way taxi to Tiruchendur Murugan Temple, Tirunelveli, Madurai & Kanyakumari. Reserve your cab now.',
  },

  // ─────────────────────────────────────────────────────────
  // TIRUNELVELI — District 30
  // ─────────────────────────────────────────────────────────
  tirunelveli: {
    heroTagline:
      'Looking for 24/7 one-way cabs in Tirunelveli? Book a taxi with SAMAYAS. Doorstep pickups across Tirunelveli, Nellaiappar Temple, and Junction station.',

    overview: `Tirunelveli district, situated along the sacred perennial Thamirabarani River in southern Tamil Nadu, is globally celebrated as the 'Halwa City' and the historic cultural capital of the Pandyan Kingdom.

Bounded by Tenkasi to the west, Virudhunagar and Thoothukudi to the north and east, Kanyakumari to the south, and Kerala to the southwest, Tirunelveli holds an immense spiritual and ecological inheritance. The city is crowned by Arulmigu Nellaiappar & Kanthimathi Amman Temple—a 2,000-year-old Pandyan architectural marvel covering 14 acres, famous for its musical granite pillars, Tamra Sabha (Hall of Copper), and 1,000-pillar mandapam. Sister city Palayamkottai, known as the 'Oxford of South India', houses century-old educational institutions. Nature lovers flock to Manjolai Hills (tea estates at 1,100m inside Kalakkad Mundanthurai Tiger Reserve - KMTR), Agasthiyar Falls, Banatheertham, Manimuthar Dam, and Krishnapuram Temple's exquisite life-size stone sculptures.

Tirunelveli is equally famous for its mouth-watering wheat halwa prepared with Thamirabarani river water. Transportation is anchored by Tirunelveli Junction (TEN)—a major rail division hub in Southern Railway—Palayamkottai Station, and Tirunelveli New Bus Stand (Vellemeedu) on NH-44, with Tuticorin Airport (TCR - Vagaikulam) just 40 km east and Trivandrum Airport (TRV) 130 km southwest. Whether you are buying authentic Tirunelveli halwa, exploring Nellaiappar Temple, visiting Manjolai Hills, or catching a flight from Tuticorin or Trivandrum Airport, SAMAYAS provides reliable 24/7 one-way cabs from Tirunelveli with zero return fare charges.`,

    overviewHighlights: [
      'Halwa City & Oxford of South India home to 2,000-year-old Nellaiappar Temple and Palayamkottai institutes',
      'Gateway to Manjolai Hills, Kalakkad Mundanthurai Tiger Reserve (KMTR), Agasthiyar Falls & Krishnapuram statues',
      '24/7 direct one-way taxi transfers to Tuticorin Airport (40 km), Kanyakumari, Trivandrum Airport & Madurai'
    ],

    routes: [
      { name: 'Tirunelveli to Tuticorin Airport', to: 'Tuticorin Airport', distanceKm: 40, timeHours: 0.75, startingFare: 1950 },
      { name: 'Tirunelveli to Kanyakumari', to: 'Kanyakumari', distanceKm: 85, timeHours: 1.75, startingFare: 1950 },
      { name: 'Tirunelveli to Madurai', to: 'Madurai', distanceKm: 160, timeHours: 2.75, startingFare: 2400 },
      { name: 'Tirunelveli to Trivandrum Airport', to: 'Trivandrum Airport', distanceKm: 130, timeHours: 3.25, startingFare: 1950 },
      { name: 'Tirunelveli to Courtallam', to: 'Courtallam', distanceKm: 55, timeHours: 1.1, startingFare: 1950 },
      { name: 'Tirunelveli to Nagercoil', to: 'Nagercoil', distanceKm: 75, timeHours: 1.5, startingFare: 1950 },
      { name: 'Tirunelveli to Chennai', to: 'Chennai', distanceKm: 620, timeHours: 9.75, startingFare: 9300 },
      { name: 'Tirunelveli to Rameshwaram', to: 'Rameshwaram', distanceKm: 190, timeHours: 3.75, startingFare: 2850 },
      { name: 'Tirunelveli to Coimbatore', to: 'Coimbatore', distanceKm: 360, timeHours: 6.25, startingFare: 5400 },
    ],

    fareTable: [
      { to: 'Tuticorin Airport',   distanceKm: 40, timeHours: 0.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Kanyakumari',         distanceKm: 85, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Madurai',             distanceKm: 160, timeHours: 2.75, hatchback: 2400, sedan: 2400, suv: 3200 },
      { to: 'Trivandrum Airport', distanceKm: 130, timeHours: 3.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Courtallam',          distanceKm: 55, timeHours: 1.1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Nagercoil',           distanceKm: 75, timeHours: 1.5, hatchback: 1950, sedan: 1950, suv: 2600 },
    ],

    pickupLocations: [
      'Tirunelveli Junction Railway Station (TEN)',
      'Tirunelveli New Bus Stand (Vellemeedu)',
      'Nellaiappar Temple East Car Street',
      'Palayamkottai Bus Stand & College Area',
      'High Ground Government Hospital Area',
      'Tirunelveli Town Station (SNVT)',
      'Gangaikondan SIPCOT Industrial Gate',
      'Papanasam Bus Stand / Agasthiyar Falls Foot',
      'Kalakkad Main Bazaar',
      'Valliyur Bus Stand & NH-44 Toll Area',
    ],
    dropLocations: [
      'Tuticorin Airport',
      'Kanyakumari',
      'Madurai',
      'Trivandrum Airport',
      'Courtallam',
      'Nagercoil',
      'Chennai',
      'Rameshwaram',
      'Coimbatore',
    ],

    transportHubs: {
      busStands: [
        { name: 'Tirunelveli New Bus Stand', address: 'Vellemeedu, NH-44, Tirunelveli - 627007' },
        { name: 'Palayamkottai Bus Stand', address: 'Market Road, Palayamkottai - 627002' },
        { name: 'Tirunelveli Town Bus Stand', address: 'Car Street, Tirunelveli Town - 627006' },
      ],
      railwayStations: [
        { name: 'Tirunelveli Junction Railway Station', code: 'TEN', address: 'Station Road, Tirunelveli - 627001' },
        { name: 'Palayamkottai Railway Station', code: 'PDK', address: 'Palayamkottai - 627002' },
        { name: 'Tirunelveli Town Station', code: 'SNVT', address: 'Tirunelveli Town - 627006' },
      ],
      airports: [
        { name: 'Tuticorin Airport (Nearest)', code: 'TCR', distanceKm: 40, address: 'Airport Road, Vagaikulam, Thoothukudi - 628103' },
        { name: 'Trivandrum International Airport', code: 'TRV', distanceKm: 130, address: 'Chacka, Thiruvananthapuram, Kerala - 695008' },
        { name: 'Madurai International Airport', code: 'IXM', distanceKm: 160, address: 'Airport Road, Avaniyapuram, Madurai - 625022' },
      ],
    },

    touristAttractions: [
      { name: 'Arulmigu Nellaiappar & Kanthimathi Amman Temple', description: 'Magnificent 2,000-year-old Pandyan temple complex covering 14 acres, famous for musical pillars and Tamra Sabha.', distanceKm: 2 },
      { name: 'Manjolai Hills & Upper Kodayar', description: 'Picturesque hill station situated at 1,100 meters inside KMTR tiger reserve, featuring tea estates and Manimuthar Dam.', distanceKm: 55 },
      { name: 'Agasthiyar Falls & Papanasam Dam', description: 'Sacred waterfall on River Thamirabarani surrounded by dense Western Ghats reserve forests, sacred to Sage Agastya.', distanceKm: 45 },
      { name: 'Kalakkad Mundanthurai Tiger Reserve (KMTR)', description: 'India\'s premier tiger sanctuary protecting rich Western Ghats biodiversity, lion-tailed macaques, and waterfalls.', distanceKm: 48 },
      { name: 'Krishnapuram Venkatachalapathy Temple', description: '16th-century Nayak architectural marvel world-famous for its life-size, intricately carved granite statues.', distanceKm: 12 },
    ],

    industries: [
      'Traditional Wheat Halwa Culinary & Confectionery Sector (Tirunelveli Halwa)',
      'Educational Sector — Palayamkottai \'Oxford of South India\' Institutional Hub',
      'Gangaikondan SIPCOT Industrial Park (Automotive, Beverage & Light Engineering)',
      'Renewable Wind Power Energy Generation (Muppandal & Valliyur Wind Farms)',
      'Agro-Processing, Paddy Milling & Cotton Spinning Industry',
    ],
    businessInfo:
      'Tirunelveli is South India\'s educational powerhouse, agricultural delta hub, and renewable energy capital. Gangaikondan SIPCOT factory engineers, wind turbine auditors, educational delegates visiting Palayamkottai, tourists ascending to Manjolai Hills, and commuters catching flights from Tuticorin Airport (TCR - 40km) rely daily on intercity road transport. SAMAYAS delivers executive sedans, 45-minute Tuticorin Airport transfers, 3.25-hour Trivandrum Airport drops, and 24/7 one-way cabs with zero return fare charges.',

    reviews: [
      {
        name: 'Nellai Kannan',
        rating: 5,
        text: 'Booked a one-way cab from Tirunelveli Junction to Tuticorin Airport (TCR) for a domestic flight. SAMAYAS driver arrived 10 minutes early, drove smoothly along NH-138, and reached in 40 minutes!',
        route: 'Tirunelveli to Tuticorin Airport',
      },
      {
        name: 'Dr. Stella Mary',
        rating: 5,
        text: 'Took a family tourist cab from Palayamkottai to Manjolai Hills tea estates and Papanasam Agasthiyar falls. Driver was polite, patient, and handled mountain roads very safely.',
        route: 'Tirunelveli to Manjolai Hills',
      },
      {
        name: 'Murugan Halwa Works',
        rating: 5,
        text: 'Regularly book SAMAYAS for Halwa distribution business trips from Tirunelveli town to Kanyakumari and Madurai. Transparent per-km rates and zero return fare.',
        route: 'Tirunelveli to Kanyakumari',
      },
      {
        name: 'Suresh Kumar G.',
        rating: 4,
        text: 'Booked a cab from Gangaikondan SIPCOT to Trivandrum Airport. Excellent highway driving experience with SAMAYAS.',
        route: 'Tirunelveli to Trivandrum Airport',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Tirunelveli to Tuticorin Airport (TCR)?',
        a: 'The one-way taxi fare from Tirunelveli town/station to Tuticorin Airport (TCR - 40 km via NH-138) starts at approximately ₹700 for a Hatchback, ₹850 for a Sedan (Dzire, Etios), and ₹1,250 for an SUV (Ertiga). Travel time is around 40 to 45 minutes.',
      },
      {
        q: 'What is the one-way taxi fare from Tirunelveli to Kanyakumari?',
        a: 'The one-way taxi fare from Tirunelveli to Kanyakumari (85 km via NH-44 four-lane highway) starts at approximately ₹1,400 for a Hatchback, ₹1,650 for a Sedan, and ₹2,350 for an SUV. Travel time is around 1.75 hours.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Tirunelveli Junction Railway Station (TEN)?',
        a: 'Yes, SAMAYAS provides 24/7 round-the-clock train station pickup at Tirunelveli Junction (TEN), Palayamkottai, and all hotels in Tirunelveli.',
      },
      {
        q: 'Can I book a one-way cab from Tirunelveli to Trivandrum Airport or Madurai?',
        a: 'Yes, we operate daily direct one-way cabs from Tirunelveli to Trivandrum International Airport (130 km) starting from ₹2,400 and to Madurai (160 km) starting from ₹2,200.',
      },
      {
        q: 'Which vehicles are recommended for family trips to Manjolai Hills or Papanasam?',
        a: 'We recommend our comfortable Sedans (Dzire, Etios) or spacious 7-seater SUVs (Ertiga, Innova Crysta) for family hill trips to comfortably handle luggage and mountain roads.',
      },
    ],

    metaTitle: 'Book One-Way Taxi from Tirunelveli | No Return Fare | SAMAYAS',
    metaDescription:
      'Travel comfortably from Tirunelveli, Tamil Nadu. Direct one-way taxi to Kanyakumari, Madurai, Trivandrum Airport, Tuticorin & Courtallam. Instant booking confirmation.',
  },

  // ─────────────────────────────────────────────────────────
  // TIRUPATTUR — District 31
  // ─────────────────────────────────────────────────────────
  tirupattur: {
    heroTagline:
      'Planning a weekend trip to Yelagiri Hills from Tirupattur? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Tirupattur, Jolarpettai Junction, and Ambur.',

    overview: `Tirupattur district, situated in northern Tamil Nadu along the fertile Palar and Ponnaiyar river valleys, is globally celebrated as the 'Sandalwood Capital of Tamil Nadu' and the premier gateway to Yelagiri Hills.

Carved out of Vellore district in 2019, Tirupattur is bounded by Vellore to the east, Krishnagiri to the west, Tiruvannamalai to the south, and Chittoor district of Andhra Pradesh to the north. The district's crowning jewel is Yelagiri Hills (Yelagiri Malai)—a pristine hill station perched at 1,110 meters altitude featuring Athanavur, Punganoor Lake with boating, Nature Park, Swamimalai trekking peak, and Jalagamparai Waterfalls. Transport in the district is anchored by Jolarpettai Junction (JTJ)—one of South India's oldest and largest railway intersections connecting Chennai, Bengaluru, and Kerala rail trunks.

Tirupattur district is internationally famous for leather shoe manufacturing and exports in Ambur and Vaniyambadi, the world-renowned Ambur Biryani culinary tradition, and the Vainu Bappu Observatory in Kavalur (housing Asia's second-largest 2.3-meter optical telescope operated by the Indian Institute of Astrophysics). Aligned along the Chennai-Bengaluru expressway (NH-48), with Bengaluru Kempegowda Airport (BLR) 165 km west and Chennai Airport (MAA) 210 km east. Whether you are taking a weekend hill trip to Yelagiri, visiting Jolarpettai Junction, attending leather trade meetings in Ambur, or booking a direct airport transfer to Bengaluru or Chennai, SAMAYAS provides reliable 24/7 one-way cabs from Tirupattur with zero return fare charges.`,

    overviewHighlights: [
      'Sandalwood Capital & Gateway to Yelagiri Hills (1,110m altitude, Punganoor Lake, Swamimalai Peak)',
      'Home to Jolarpettai Junction (JTJ), Kavalur Vainu Bappu Observatory, Ambur leather export hub & Ambur Biryani',
      '24/7 direct one-way taxi transfers along NH-48 to Bengaluru (145 km), Chennai Airport, Vellore & Krishnagiri'
    ],

    routes: [
      { name: 'Tirupattur to Yelagiri Hills', to: 'Yelagiri Hills', distanceKm: 28, timeHours: 0.75, startingFare: 1950 },
      { name: 'Tirupattur to Bengaluru', to: 'Bengaluru', distanceKm: 145, timeHours: 2.75, startingFare: 2175 },
      { name: 'Tirupattur to Chennai Airport', to: 'Chennai Airport', distanceKm: 210, timeHours: 3.75, startingFare: 3150 },
      { name: 'Tirupattur to Vellore', to: 'Vellore', distanceKm: 85, timeHours: 1.5, startingFare: 1950 },
      { name: 'Tirupattur to Krishnagiri', to: 'Krishnagiri', distanceKm: 45, timeHours: 0.8, startingFare: 1950 },
      { name: 'Tirupattur to Tiruvannamalai', to: 'Tiruvannamalai', distanceKm: 85, timeHours: 1.75, startingFare: 1950 },
      { name: 'Tirupattur to Salem', to: 'Salem', distanceKm: 135, timeHours: 2.5, startingFare: 2025 },
      { name: 'Tirupattur to Tirupati', to: 'Tirupati', distanceKm: 175, timeHours: 3.5, startingFare: 2625 },
      { name: 'Tirupattur to Hosur', to: 'Hosur', distanceKm: 90, timeHours: 1.75, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Yelagiri Hills',   distanceKm: 28, timeHours: 0.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Bengaluru',        distanceKm: 145, timeHours: 2.75, hatchback: 2175, sedan: 2175, suv: 2900 },
      { to: 'Chennai Airport',  distanceKm: 210, timeHours: 3.75, hatchback: 3150, sedan: 3150, suv: 4200 },
      { to: 'Vellore',          distanceKm: 85, timeHours: 1.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Krishnagiri',      distanceKm: 45, timeHours: 0.8, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Tiruvannamalai',   distanceKm: 85, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
    ],

    pickupLocations: [
      'Jolarpettai Junction Railway Station (JTJ)',
      'Tirupattur Railway Station (TPT)',
      'Tirupattur Central Bus Stand',
      'Yelagiri Hills (Athanavur / Punganoor Lake Gate)',
      'Vaniyambadi Bus Stand & Station (VN)',
      'Ambur Bus Stand & Station (AB)',
      'Natrampalli Bus Stop / NH-48 Toll',
      'Kavalur Vainu Bappu Observatory Gate',
      'Bargur Junction / NH-48',
      'Alangayam Bus Stand',
    ],
    dropLocations: [
      'Yelagiri Hills',
      'Bengaluru',
      'Chennai Airport',
      'Vellore',
      'Krishnagiri',
      'Tiruvannamalai',
      'Salem',
      'Tirupati',
      'Hosur',
    ],

    transportHubs: {
      busStands: [
        { name: 'Tirupattur Central Bus Stand', address: 'Main Road, Tirupattur - 635601' },
        { name: 'Vaniyambadi Central Bus Stand', address: 'CL Road, Vaniyambadi - 635751' },
        { name: 'Ambur Bus Stand', address: 'MC Road, Ambur - 635802' },
      ],
      railwayStations: [
        { name: 'Jolarpettai Junction', code: 'JTJ', address: 'Jolarpettai, Tirupattur District - 635851' },
        { name: 'Tirupattur Railway Station', code: 'TPT', address: 'Station Road, Tirupattur - 635601' },
        { name: 'Vaniyambadi Railway Station', code: 'VN', address: 'Vaniyambadi - 635751' },
        { name: 'Ambur Railway Station', code: 'AB', address: 'Ambur - 635802' },
      ],
      airports: [
        { name: 'Bengaluru Kempegowda International Airport', code: 'BLR', distanceKm: 165, address: 'Devanahalli, Bengaluru - 560300' },
        { name: 'Chennai International Airport', code: 'MAA', distanceKm: 210, address: 'GST Road, Meenambakkam, Chennai - 600027' },
      ],
    },

    touristAttractions: [
      { name: 'Yelagiri Hills & Punganoor Lake', description: 'Serene mountain retreat at 1,100 meters altitude featuring a tranquil boating lake, Nature Park, and Swamimalai trek.', distanceKm: 28 },
      { name: 'Vainu Bappu Observatory, Kavalur', description: 'Premier astronomical observatory operated by Indian Institute of Astrophysics housing a 2.3-meter optical telescope.', distanceKm: 30 },
      { name: 'Jalagamparai Waterfalls', description: 'Picturesque mountain waterfall on the Attaru river cascading down the slopes of Yelagiri Hills.', distanceKm: 14 },
      { name: 'Historic Jolarpettai Rail Yard', description: 'One of India\'s oldest and largest railway junction yards built during the British era, connecting North and South rail lines.', distanceKm: 7 },
      { name: 'Ambur & Vaniyambadi Leather Craft Bazaars', description: 'World-renowned centers for leather shoe exports, leather garments, and famous authentic Ambur Dum Biryani.', distanceKm: 20 },
    ],

    industries: [
      'Sandalwood & Natural Forest Resource Trade Hub',
      'Finished Leather Footwear & Leather Garment Export Cluster (Ambur & Vaniyambadi)',
      'Yelagiri Hill Station Resort, Adventure & Eco-Tourism Industry',
      'Jolarpettai Railway Junction Logistics & Maintenance Hub',
      'Culinary & Food Processing Sector (World-Famous Ambur Dum Biryani)',
    ],
    businessInfo:
      'Tirupattur district is a key industrial, transport, and hill resort hub in Northern Tamil Nadu. Leather exporters from Ambur and Vaniyambadi, astronomers visiting Kavalur Observatory, Jolarpettai railway officers, tourists ascending to Yelagiri Hills, and commuters traveling to Bengaluru Airport (BLR) via NH-48 rely daily on intercity road transport. SAMAYAS delivers executive sedans, experienced hill drivers for Yelagiri mountain hairpin bends, 2.75-hour Bengaluru drops, and 24/7 one-way cabs with zero return charges.',

    reviews: [
      {
        name: 'Gowtham V.',
        rating: 5,
        text: 'Booked a one-way cab from Jolarpettai Junction to Yelagiri Hills Punganoor Lake for a weekend family stay. Driver arrived on time at JTJ station, drove safely up the 14 hairpin bends, and reached in 45 minutes.',
        route: 'Jolarpettai to Yelagiri Hills',
      },
      {
        name: 'Mohammed Mansoor',
        rating: 5,
        text: 'Took a one-way cab from Ambur leather shoe export plant to Bengaluru Kempegowda Airport. Driver was early, vehicle was spotless, and trip along NH-48 was super comfortable.',
        route: 'Ambur to Bengaluru Airport',
      },
      {
        name: 'Dr. Srinivas IIA',
        rating: 5,
        text: 'Regularly book SAMAYAS for scientific staff transfers between Kavalur Observatory and Bengaluru/Chennai. Professional drivers and clear corporate billing.',
        route: 'Kavalur to Bengaluru',
      },
      {
        name: 'Preethi Sundaram',
        rating: 4,
        text: 'Booked a cab from Tirupattur town to Vellore CMC hospital. Smooth drive and very courteous driver.',
        route: 'Tirupattur to Vellore',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Tirupattur / Jolarpettai to Yelagiri Hills?',
        a: 'The one-way taxi fare from Tirupattur town or Jolarpettai Junction (JTJ) to Yelagiri Hills (28 km via 14 hairpin bends) starts at approximately ₹750 for a Hatchback, ₹900 for a Sedan (Dzire, Etios), and ₹1,350 for an SUV (Ertiga). Travel time is around 45 minutes.',
      },
      {
        q: 'What is the one-way taxi fare from Tirupattur / Ambur to Bengaluru?',
        a: 'The one-way taxi fare from Tirupattur/Ambur to Bengaluru (145 km via NH-48 expressway) starts at approximately ₹2,100 for a Hatchback, ₹2,450 for a Sedan, and ₹3,400 for an SUV. Travel time is around 2.75 hours.',
      },
      {
        q: 'Are SAMAYAS drivers experienced in driving up Yelagiri Hills 14 hairpin bends?',
        a: 'Yes, all drivers assigned to Yelagiri hill routes are local experts specifically trained in mountain gear control and hairpin turns.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Jolarpettai Junction (JTJ) for all arriving trains?',
        a: 'Yes! SAMAYAS provides 24/7 train-synchronized doorstep pickup at Jolarpettai Junction (JTJ), Tirupattur Station (TPT), Ambur (AB), and Vaniyambadi (VN).',
      },
      {
        q: 'Which vehicles are recommended for corporate trips to Ambur leather factories or family trips to Yelagiri?',
        a: 'We recommend our comfortable Sedans (Dzire, Etios) for corporate factory visits or spacious 7-seater SUVs (Ertiga, Innova Crysta) for family hill trips.',
      },
    ],

    metaTitle: 'Tirupattur Taxi Service | Yelagiri Hill & Station Cabs | SAMAYAS',
    metaDescription:
      'Need an outstation cab from Tirupattur & Jolarpettai? Direct one-way taxi to Yelagiri Hills, Bengaluru, Chennai, Vellore & Krishnagiri. Transparent per-km rates with zero return fee.',
  },

  // ─────────────────────────────────────────────────────────
  // TIRUPPUR — District 32
  // ─────────────────────────────────────────────────────────
  tiruppur: {
    heroTagline:
      'Need an executive cab from Knitwear Capital Tiruppur? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Tiruppur, Netaji Apparel Park, and Avinashi.',

    overview: `Tiruppur district, strategically located in the Noyyal River valley of western Tamil Nadu between Coimbatore and Erode, is globally acclaimed as the 'Knitwear Capital of India', 'Dollar City', and South India's premier garment manufacturing engine.

Bounded by Coimbatore to the west, Erode to the north and east, Karur and Dindigul to the south, and Idukki district of Kerala to the southwest, Tiruppur is an industrial powerhouse contributing over 90% of India's total cotton knitwear exports to global markets in Europe and America. The district houses massive industrial textile complexes including Netaji Apparel Park, Nethaji Garment Park, TEA (Tirupur Exporters Association) SEZ, and thousands of hosiery, dyeing, and spinning units. Spiritually and historically, Tiruppur is anchored by Avinashi Arulmigu Lingeshwarar Temple—the ancient 1,000-year-old 'Kashi of Kongu Nadu'—and Sukreeswarar Temple in Nallur.

Nature enthusiasts and travelers explore Amaravathi Dam & Crocodile Bank in Udumalpet, Thirumoorthy Hills & Waterfalls, Kangeyam (famous for Kangeyam bull breeding), and Uthukuli (world-famous for organic Ghee and Butter). Transportation is anchored by Tiruppur Railway Station (TUP) on the Salem-Coimbatore main trunk line, Udumalpet Station (UDT), and Tiruppur New Bus Stand, with Coimbatore International Airport (CJB) located just 45 km west. Whether you are an international garment buyer, textile mill owner, pilgrim visiting Avinashi, or a traveler taking an express cab to Coimbatore Airport or Ooty, SAMAYAS provides reliable 24/7 one-way cabs from Tiruppur with zero return fare charges.`,

    overviewHighlights: [
      'Knitwear Capital of India & Dollar City contributing 90%+ of India\'s cotton garment exports',
      'Home to Netaji Apparel Park, TEA SEZ, Avinashi Lingeshwarar Temple & Amaravathi Crocodile Bank',
      '24/7 direct one-way taxi transfers to Coimbatore Airport (45 km), Erode, Salem, Ooty, and Bengaluru'
    ],

    routes: [
      { name: 'Tiruppur to Coimbatore Airport', to: 'Coimbatore Airport', distanceKm: 45, timeHours: 1, startingFare: 1950 },
      { name: 'Tiruppur to Coimbatore City', to: 'Coimbatore City', distanceKm: 55, timeHours: 1.25, startingFare: 1950 },
      { name: 'Tiruppur to Erode', to: 'Erode', distanceKm: 50, timeHours: 1.1, startingFare: 1950 },
      { name: 'Tiruppur to Salem', to: 'Salem', distanceKm: 120, timeHours: 2.25, startingFare: 1950 },
      { name: 'Tiruppur to Ooty', to: 'Ooty', distanceKm: 110, timeHours: 3.5, startingFare: 1950 },
      { name: 'Tiruppur to Munnar', to: 'Munnar', distanceKm: 155, timeHours: 4.5, startingFare: 2325 },
      { name: 'Tiruppur to Chennai', to: 'Chennai', distanceKm: 450, timeHours: 7.75, startingFare: 6750 },
      { name: 'Tiruppur to Bengaluru', to: 'Bengaluru', distanceKm: 310, timeHours: 5.5, startingFare: 4650 },
      { name: 'Tiruppur to Trichy', to: 'Trichy', distanceKm: 190, timeHours: 3.5, startingFare: 2850 },
    ],

    fareTable: [
      { to: 'Coimbatore Airport', distanceKm: 45, timeHours: 1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Coimbatore City',    distanceKm: 55, timeHours: 1.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Erode',              distanceKm: 50, timeHours: 1.1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Salem',              distanceKm: 120, timeHours: 2.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Ooty',               distanceKm: 110, timeHours: 3.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Bengaluru',          distanceKm: 310, timeHours: 5.5, hatchback: 4650, sedan: 4650, suv: 6200 },
    ],

    pickupLocations: [
      'Tiruppur Railway Station (TUP)',
      'Tiruppur New Bus Stand (PNS)',
      'Netaji Apparel Park / New Tirupur',
      'Avinashi Lingeshwarar Temple Gate',
      'Udumalpet Bus Stand & Railway Station (UDT)',
      'Kangeyam Bus Stand',
      'Dharapuram Bus Stand',
      'Palladam Bus Stand / Highway Junction',
      'Uthukuli Railway Station (UKL)',
      'TEA SEZ Complex / Perumanallur',
    ],
    dropLocations: [
      'Coimbatore Airport',
      'Coimbatore City',
      'Erode',
      'Salem',
      'Ooty',
      'Munnar',
      'Chennai',
      'Bengaluru',
      'Trichy',
    ],

    transportHubs: {
      busStands: [
        { name: 'Tiruppur New Bus Stand', address: 'Old Bus Stand Road / PNS, Tiruppur - 641601' },
        { name: 'Udumalpet Bus Stand', address: 'Bus Stand Road, Udumalpet - 642126' },
        { name: 'Kangeyam Bus Stand', address: 'Main Road, Kangeyam - 638701' },
      ],
      railwayStations: [
        { name: 'Tiruppur Railway Station', code: 'TUP', address: 'Station Road, Tiruppur - 641601' },
        { name: 'Udumalaipettai Railway Station', code: 'UDT', address: 'Udumalpet, Tiruppur District - 642126' },
        { name: 'Uthukuli Railway Station', code: 'UKL', address: 'Uthukuli - 638751' },
      ],
      airports: [
        { name: 'Coimbatore International Airport (Nearest)', code: 'CJB', distanceKm: 45, address: 'Airport Road, Peelamedu, Coimbatore - 641014' },
      ],
    },

    touristAttractions: [
      { name: 'Avinashi Arulmigu Lingeshwarar Temple', description: 'Ancient 1,000-year-old Chola/Pandya temple revered as the \'Kashi of Kongu Nadu\', famous for its grand annual car festival.', distanceKm: 14 },
      { name: 'Amaravathi Dam & Crocodile Bank, Udumalpet', description: 'Picturesque dam in Anamalai Tiger Reserve foothills featuring South India\'s largest mugger crocodile breeding center.', distanceKm: 75 },
      { name: 'Thirumoorthy Hills & Waterfalls', description: 'Serene eco-tourism spot featuring Panchalinga Waterfalls, Amanalingeswarar hill shrine, and scenic dam backwaters.', distanceKm: 85 },
      { name: 'Sukreeswarar Temple, Tiruppur', description: 'Historic 10th-century Chola stone temple built on the banks of Nallaru river featuring double Nandi statues.', distanceKm: 8 },
      { name: 'Uthukuli Village & Cattle Farms', description: 'Famous agricultural village world-renowned for traditional organic Uthukuli Ghee and Butter production.', distanceKm: 15 },
    ],

    industries: [
      'Knitwear & Readymade Garment Textile Export Cluster (India\'s top cotton garment exporter)',
      'Netaji Apparel Park, Nethaji Garment Park & TEA SEZ Industrial Complexes',
      'Textile Dyeing, Bleaching & Fabric Processing Industrial Plants',
      'Agricultural Commerce — Kangeyam Bull Breeding & Sesame Oil Extraction',
      'Uthukuli Dairy Sector (Organic Ghee & Butter Manufacturing)',
    ],
    businessInfo:
      'Tiruppur is India\'s dollar city and textile manufacturing engine. International garment buyers from Europe and the USA, garment factory owners, textile machinery suppliers, and commuters taking flights from nearby Coimbatore Airport (CJB - 45km) rely daily on intercity road transport. SAMAYAS delivers executive sedans, 50-minute Coimbatore Airport drops, corporate billing options, and 24/7 one-way cabs with zero return fare charges.',

    reviews: [
      {
        name: 'Johnathan Miller',
        rating: 5,
        text: 'Booked a one-way cab from Netaji Apparel Park factory to Coimbatore International Airport for a flight back to London. Driver arrived 10 minutes early, car was spotless, and reached CJB airport in 45 minutes.',
        route: 'Tiruppur to Coimbatore Airport',
      },
      {
        name: 'Shanmuga Sundaram TUP',
        rating: 5,
        text: 'Took a family cab from Tiruppur station to Avinashi Lingeshwarar temple and Udumalpet Amaravathi dam. Polite driver and very smooth driving.',
        route: 'Tiruppur Local Tour',
      },
      {
        name: 'Karthik Garments',
        rating: 5,
        text: 'Regularly book SAMAYAS for textile business trips from Tiruppur to Erode and Salem. Honest per-km rates and no return fare charges.',
        route: 'Tiruppur to Erode',
      },
      {
        name: 'Prakash R.',
        rating: 4,
        text: 'Booked a cab from Tiruppur to Bengaluru Electronic City. Comfortable ride along the four-lane highway.',
        route: 'Tiruppur to Bengaluru',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Tiruppur to Coimbatore Airport (CJB)?',
        a: 'The one-way taxi fare from Tiruppur city/station to Coimbatore International Airport (CJB - 45 km via Avinashi Road / NH-544) starts at approximately ₹800 for a Hatchback, ₹950 for a Sedan (Dzire, Etios), and ₹1,400 for an SUV (Ertiga). Travel time is around 45 to 50 minutes.',
      },
      {
        q: 'What is the one-way taxi fare from Tiruppur to Erode or Salem?',
        a: 'The one-way taxi fare from Tiruppur to Erode (50 km) starts at ₹850, and to Salem (120 km) starts at ₹1,800 with zero return charges.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Netaji Apparel Park, TEA SEZ, and Tiruppur Railway Station (TUP)?',
        a: 'Yes, SAMAYAS provides 24/7 round-the-clock doorstep pickup from all garment export parks, factories, Tiruppur Station (TUP), and all hotels in Tiruppur.',
      },
      {
        q: 'Can I book a one-way cab from Tiruppur to Ooty or Munnar hill stations?',
        a: 'Yes, we operate daily direct one-way cabs from Tiruppur to Ooty (110 km) starting from ₹2,800 and to Munnar (155 km) starting from ₹3,400 with experienced hill drivers.',
      },
      {
        q: 'Which vehicles are recommended for corporate business travel in Tiruppur?',
        a: 'For international garment delegates and corporate executives, we recommend our comfortable Sedans (Dzire, Etios) or premium SUVs (Innova Crysta).',
      },
    ],

    metaTitle: 'One-Way Cab from Tiruppur | Book Online 24/7 | SAMAYAS',
    metaDescription:
      'Need airport transfers from Tiruppur, Tamil Nadu? Direct one-way taxi to Coimbatore Airport, Erode, Salem, Ooty & Bengaluru. Available 24/7 with zero return fee.',
  },

  // ─────────────────────────────────────────────────────────
  // TIRUVALLUR — District 33
  // ─────────────────────────────────────────────────────────
  tiruvallur: {
    heroTagline:
      'Heading out from Tiruvallur? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Tiruvallur, Veeraraghava Temple, Tiruttani, and Avadi.',

    overview: `Tiruvallur district, located at the northeastern gateway of Tamil Nadu adjoining the Chennai Metropolitan region and Andhra Pradesh, is a vital industrial manufacturing powerhouse and sacred spiritual center.

Bounded by Chennai, Chengalpattu, Kanchipuram, and Ranipet to the south and west, and Chittoor & Tirupati districts of Andhra Pradesh to the north, Tiruvallur holds an indispensable economic and cultural position. The district is world-renowned for Arulmigu Veeraraghava Swamy Temple—a 108 Divya Desam shrine where Lord Vishnu rests as the divine healer—and Tiruttani Arulmigu Subramanya Swamy Temple, the 5th Arupadai Veedu of Lord Murugan perched atop a 365-step hill. Industrial engines in Tiruvallur include Avadi Ordnance Estate & Heavy Vehicles Factory (HVF Tank Factory), Gummidipoondi SIPCOT Industrial Complex, Caterpillar, Hyundai, and Sriperumbudur corridor SEZs.

Geographically, Tiruvallur houses key reservoirs supplying drinking water to Chennai including Poondi Reservoir (Sathyamurthy Sagar), Puzhal Lake, and Pulicat Lake Bird Sanctuary. Transportation is anchored by Tiruvallur Railway Station (TRL), Avadi Station (AVD), Tiruttani Station (TRT), and CTH Road (NH-716), with Chennai International Airport (MAA) located just 42 km east. Whether you are seeking healing at Veeraraghava Swamy Temple, climbing 365 steps at Tiruttani, visiting Avadi HVF defense plants, or taking an express airport transfer to Chennai Airport or Tirupati, SAMAYAS provides reliable 24/7 one-way cabs from Tiruvallur with zero return fare charges.`,

    overviewHighlights: [
      'Industrial Powerhouse & Spiritual Shrine home to Veeraraghava Swamy Temple (108 Divya Desam) & Tiruttani (5th Arupadai Veedu)',
      'Defense & Heavy Manufacturing hub hosting Avadi HVF Tank Factory, Gummidipoondi SIPCOT, and Poondi Reservoir',
      '24/7 direct one-way taxi transfers to Chennai Airport (42 km), Tirupati (95 km), Tiruttani, Kanchipuram & Bengaluru'
    ],

    routes: [
      { name: 'Tiruvallur to Chennai Airport', to: 'Chennai Airport', distanceKm: 42, timeHours: 1, startingFare: 1950 },
      { name: 'Tiruvallur to Tirupati', to: 'Tirupati', distanceKm: 95, timeHours: 2.25, startingFare: 1950 },
      { name: 'Tiruvallur to Tiruttani', to: 'Tiruttani', distanceKm: 30, timeHours: 0.6, startingFare: 1950 },
      { name: 'Tiruvallur to Kanchipuram', to: 'Kanchipuram', distanceKm: 40, timeHours: 0.8, startingFare: 1950 },
      { name: 'Tiruvallur to Bengaluru', to: 'Bengaluru', distanceKm: 280, timeHours: 5.25, startingFare: 4200 },
      { name: 'Tiruvallur to Vellore', to: 'Vellore', distanceKm: 90, timeHours: 1.75, startingFare: 1950 },
      { name: 'Tiruvallur to Puducherry', to: 'Puducherry', distanceKm: 160, timeHours: 3.25, startingFare: 2400 },
      { name: 'Tiruvallur to Gummidipoondi', to: 'Gummidipoondi', distanceKm: 50, timeHours: 1, startingFare: 1950 },
      { name: 'Tiruvallur to Sriperumbudur', to: 'Sriperumbudur', distanceKm: 32, timeHours: 0.6, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Chennai Airport', distanceKm: 42, timeHours: 1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Tirupati',        distanceKm: 95, timeHours: 2.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Tiruttani',       distanceKm: 30, timeHours: 0.6, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Kanchipuram',     distanceKm: 40, timeHours: 0.8, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Bengaluru',       distanceKm: 280, timeHours: 5.25, hatchback: 4200, sedan: 4200, suv: 5600 },
      { to: 'Vellore',         distanceKm: 90, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
    ],

    pickupLocations: [
      'Tiruvallur Railway Station (TRL)',
      'Tiruvallur Central Bus Stand (JN Rd)',
      'Veeraraghava Swamy Temple West Car Street',
      'Avadi Railway Station & HVF Gate (AVD)',
      'Tiruttani Murugan Temple Hill Foot',
      'Gummidipoondi SIPCOT Industrial Estate',
      'Sriperumbudur Bypass Junction',
      'Poondi Reservoir Gate',
      'Thirumazhisai Junction',
      'Poonamallee Bypass',
    ],
    dropLocations: [
      'Chennai Airport',
      'Tirupati',
      'Tiruttani',
      'Kanchipuram',
      'Bengaluru',
      'Vellore',
      'Puducherry',
      'Gummidipoondi',
      'Sriperumbudur',
    ],

    transportHubs: {
      busStands: [
        { name: 'Tiruvallur Central Bus Stand', address: 'JN Road, Tiruvallur - 602001' },
        { name: 'Avadi Bus Terminus', address: 'NM Road, Avadi, Chennai - 600054' },
        { name: 'Tiruttani Bus Stand', address: 'Bypass Road, Tiruttani - 631209' },
      ],
      railwayStations: [
        { name: 'Tiruvallur Railway Station', code: 'TRL', address: 'Station Road, Tiruvallur - 602001' },
        { name: 'Avadi Railway Station', code: 'AVD', address: 'Station Road, Avadi - 600054' },
        { name: 'Tiruttani Railway Station', code: 'TRT', address: 'Station Road, Tiruttani - 631209' },
      ],
      airports: [
        { name: 'Chennai International Airport (Nearest)', code: 'MAA', distanceKm: 42, address: 'GST Road, Meenambakkam, Chennai - 600027' },
      ],
    },

    touristAttractions: [
      { name: 'Arulmigu Veeraraghava Swamy Temple, Tiruvallur', description: 'Sacred 108 Divya Desam shrine dedicated to Lord Vishnu as the divine healer, featuring the holy Hrudhayathabhanasini tank.', distanceKm: 1 },
      { name: 'Arulmigu Subramanya Swamy Temple, Tiruttani', description: 'Sacred 5th Arupadai Veedu of Lord Murugan perched atop a 365-step granite hill symbolizing days of the year.', distanceKm: 30 },
      { name: 'Poondi Reservoir (Sathyamurthy Sagar)', description: 'Major 3,231 million cubic feet reservoir constructed across Kosasthalaiyar River, supplying drinking water to Chennai.', distanceKm: 12 },
      { name: 'Avadi Heavy Vehicles Factory (HVF) & Ordnance Estate', description: 'Historic defense industrial complex manufacturing Vijayanta and Ajeya battle tanks for the Indian Army.', distanceKm: 22 },
      { name: 'Pulicat Lake & Bird Sanctuary', description: 'India\'s second-largest brackish water lagoon, famous for migratory pink flamingos and Dutch colonial heritage.', distanceKm: 55 },
    ],

    industries: [
      'Heavy Vehicle Defense Manufacturing — HVF Avadi & Ordnance Factory',
      'Gummidipoondi SIPCOT Industrial Complex (Steel, Chemicals & Plastics)',
      'Automobile & Earthmoving Equipment Mega Plants (Caterpillar, Hyundai)',
      'Electronics & IT Manufacturing SEZs along CTH / Chennai Bypass Corridor',
      'Pulicat Lagoon Marine Fishing & Salt Production',
    ],
    businessInfo:
      'Tiruvallur district is a vital industrial engine and spiritual gateway adjacent to Chennai. Defense personnel at HVF Avadi, industrial managers at Gummidipoondi SIPCOT, engineers at Caterpillar/Hyundai, pilgrims visiting Veeraraghava Swamy and Tiruttani Murugan temples, and commuters catching flights from Chennai Airport (MAA - 42km) rely daily on intercity road transport. SAMAYAS delivers executive sedans, 50-minute Chennai Airport drops, corporate billing options, and 24/7 one-way cabs with zero return fare charges.',

    reviews: [
      {
        name: 'Major General Sanjeev Kumar',
        rating: 5,
        text: 'Booked a one-way cab from HVF Avadi defense estate to Chennai Airport for an official flight to New Delhi. SAMAYAS driver was on time, car was spotless, and reached MAA airport in 45 minutes.',
        route: 'Avadi to Chennai Airport',
      },
      {
        name: 'Sridhar Veeraraghavan',
        rating: 5,
        text: 'Took a family temple cab from Tiruvallur station to Veeraraghava Swamy temple and Tiruttani Murugan temple. Driver was very courteous, patient, and drove safely.',
        route: 'Tiruvallur to Tiruttani',
      },
      {
        name: 'Venkatesh SIPCOT',
        rating: 5,
        text: 'Regularly book SAMAYAS for industrial plant business trips from Gummidipoondi SIPCOT to Chennai and Bengaluru. Transparent rates and zero return charges.',
        route: 'Gummidipoondi to Bengaluru',
      },
      {
        name: 'Anitha Reddy',
        rating: 4,
        text: 'Booked a cab from Tiruvallur to Tirupati temple. Smooth drive along the highway and excellent service.',
        route: 'Tiruvallur to Tirupati',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Tiruvallur to Chennai Airport (MAA)?',
        a: 'The one-way taxi fare from Tiruvallur town/station to Chennai International Airport (MAA - 42 km via CTH Road / Poonamallee Bypass) starts at approximately ₹750 for a Hatchback, ₹900 for a Sedan (Dzire, Etios), and ₹1,350 for an SUV (Ertiga). Travel time is around 50 to 60 minutes.',
      },
      {
        q: 'What is the one-way taxi fare from Tiruvallur to Tiruttani or Tirupati?',
        a: 'The one-way taxi fare from Tiruvallur to Tiruttani (30 km) starts at ₹550, and to Tirupati (95 km via NH-716) starts at ₹1,750 with zero return charges.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Tiruvallur Railway Station (TRL) and Avadi Station (AVD)?',
        a: 'Yes, SAMAYAS provides 24/7 round-the-clock train station pickup at Tiruvallur Station (TRL), Avadi (AVD), Tiruttani (TRT), and all industrial plants.',
      },
      {
        q: 'Can I book a cab for a day tour covering Veeraraghava Swamy Temple, Poondi Reservoir, and Tiruttani?',
        a: 'Yes! SAMAYAS offers custom day-tour cab packages covering Tiruvallur Veeraraghava temple, Poondi Reservoir, and Tiruttani Murugan Temple.',
      },
      {
        q: 'Which vehicles are recommended for corporate business travel to HVF Avadi or Gummidipoondi SIPCOT?',
        a: 'For defense delegates and corporate executives, we recommend our comfortable Sedans (Dzire, Etios) or premium SUVs (Innova Crysta).',
      },
    ],

    metaTitle: 'Tiruvallur One-Way Taxi | 24/7 Cab Booking | SAMAYAS',
    metaDescription:
      'Book a taxi for your next trip from Tiruvallur, Tamil Nadu. Direct one-way taxi to Chennai Airport, Tirupati, Tiruttani, Kanchipuram & Bengaluru. Book online today.',
  },

  // ─────────────────────────────────────────────────────────
  // TIRUVANNAMALAI — District 34
  // ─────────────────────────────────────────────────────────
  tiruvannamalai: {
    heroTagline:
      'Visiting the Agni Sthalam of Tiruvannamalai? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Tiruvannamalai, Arunachaleswarar Temple, and Ramana Ashram.',

    overview: `Tiruvannamalai district, cradled at the foot of the sacred Arunachala Hill in north-central Tamil Nadu, is globally celebrated as one of India's most venerated spiritual sanctuaries and the 'Agni Sthalam' of Lord Shiva.

Bounded by Vellore, Ranipet, and Tirupathur to the north, Kallakurichi and Villupuram to the south, Kanchipuram to the east, and Krishnagiri to the west, Tiruvannamalai holds an incomparable spiritual and cultural legacy. The city is crowned by Arulmigu Arunachaleswarar Temple—one of India's largest temple complexes spanning 25 acres with four colossal gopurams including the 217-foot Eastern Raja Gopuram. Millions of international and Indian devotees perform the sacred 14 km 'Girivalam' barefoot circumambulation around Arunachala Hill on Pournami (Full Moon) nights and gather for the grand Karthigai Deepam beacon festival atop Arunachala peak.

Spiritual seekers worldwide visit Sri Ramana Maharshi Ashram, Virupaksha Cave, Skandashram, Sri Shesadri Swamigal Ashram, and Sri Yogi Ramsuratkumar Ashram. The district is also famous for Arani silk handloom saree weaving and the pristine Jawadhu Hills (Jamunamarathur, Beeman Falls, and Observatory). Transportation is anchored by Tiruvannamalai Railway Station (TNM), Polur Station, and Central Bus Stand on Chengam Road, with Chennai International Airport (MAA) 170 km northeast and Puducherry 105 km east. Whether you are coming for Pournami Girivalam, visiting Ramana Ashram, buying Arani silk sarees, or booking a direct airport transfer to Chennai or Puducherry, SAMAYAS provides reliable 24/7 one-way cabs from Tiruvannamalai with zero return fare charges.`,

    overviewHighlights: [
      'Agni Sthalam Pancha Bhoota shrine home to Arunachaleswarar Temple (25 acres, 217-ft Raja Gopuram)',
      'World-famous for 14 km Girivalam Path around Arunachala Hill, Sri Ramana Ashram & Arani Silk Sarees',
      '24/7 direct one-way taxi transfers to Chennai Airport (170 km), Puducherry, Bengaluru, Vellore & Salem'
    ],

    routes: [
      { name: 'Tiruvannamalai to Chennai Airport', to: 'Chennai Airport', distanceKm: 170, timeHours: 3.5, startingFare: 2550 },
      { name: 'Tiruvannamalai to Puducherry', to: 'Puducherry', distanceKm: 105, timeHours: 2.25, startingFare: 1950 },
      { name: 'Tiruvannamalai to Bengaluru', to: 'Bengaluru', distanceKm: 200, timeHours: 4.25, startingFare: 3000 },
      { name: 'Tiruvannamalai to Vellore', to: 'Vellore', distanceKm: 85, timeHours: 1.75, startingFare: 1950 },
      { name: 'Tiruvannamalai to Salem', to: 'Salem', distanceKm: 145, timeHours: 2.75, startingFare: 2175 },
      { name: 'Tiruvannamalai to Trichy', to: 'Trichy', distanceKm: 190, timeHours: 3.5, startingFare: 2850 },
      { name: 'Tiruvannamalai to Tirupati', to: 'Tirupati', distanceKm: 195, timeHours: 4, startingFare: 2925 },
      { name: 'Tiruvannamalai to Kanchipuram', to: 'Kanchipuram', distanceKm: 110, timeHours: 2.25, startingFare: 1950 },
      { name: 'Tiruvannamalai to Villupuram', to: 'Villupuram', distanceKm: 60, timeHours: 1.25, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Chennai Airport', distanceKm: 170, timeHours: 3.5, hatchback: 2550, sedan: 2550, suv: 3400 },
      { to: 'Puducherry',      distanceKm: 105, timeHours: 2.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Bengaluru',       distanceKm: 200, timeHours: 4.25, hatchback: 3000, sedan: 3000, suv: 4000 },
      { to: 'Vellore',         distanceKm: 85, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Salem',           distanceKm: 145, timeHours: 2.75, hatchback: 2175, sedan: 2175, suv: 2900 },
      { to: 'Kanchipuram',     distanceKm: 110, timeHours: 2.25, hatchback: 1950, sedan: 1950, suv: 2600 },
    ],

    pickupLocations: [
      'Tiruvannamalai Railway Station (TNM)',
      'Tiruvannamalai Central Bus Stand (Chengam Rd)',
      'Arunachaleswarar Temple East Tower Gate',
      'Sri Ramana Maharshi Ashram Gate',
      'Girivalam Path - Kubera Lingam',
      'Chengam Road Junction',
      'Polur Bus Stand',
      'Arani Bus Stand / Silk Market',
      'Jamunamarathur (Jawadhu Hills)',
      'Wandiwash Bus Stand',
    ],
    dropLocations: [
      'Chennai Airport',
      'Puducherry',
      'Bengaluru',
      'Vellore',
      'Salem',
      'Trichy',
      'Tirupati',
      'Kanchipuram',
      'Villupuram',
    ],

    transportHubs: {
      busStands: [
        { name: 'Tiruvannamalai Central Bus Stand', address: 'Chengam Road, Tiruvannamalai - 606601' },
        { name: 'Arani Bus Stand', address: 'Bazaar Street, Arani - 632301' },
        { name: 'Polur Bus Stand', address: 'Main Road, Polur - 606803' },
      ],
      railwayStations: [
        { name: 'Tiruvannamalai Railway Station', code: 'TNM', address: 'Station Road, Tiruvannamalai - 606601' },
        { name: 'Polur Railway Station', code: 'PRL', address: 'Polur, Tiruvannamalai District - 606803' },
        { name: 'Arani Road Station', code: 'ARN', address: 'Arani Road - 632312' },
      ],
      airports: [
        { name: 'Chennai International Airport (Nearest)', code: 'MAA', distanceKm: 170, address: 'GST Road, Meenambakkam, Chennai - 600027' },
        { name: 'Puducherry Domestic Airport', code: 'PNY', distanceKm: 105, address: 'Lawspet, Puducherry - 605008' },
      ],
    },

    touristAttractions: [
      { name: 'Arulmigu Arunachaleswarar Temple', description: 'Spiritual Agni Sthalam Pancha Bhoota temple spanning 25 acres, featuring four majestic gopurams including 217-ft Raja Gopuram.', distanceKm: 1 },
      { name: 'Sacred Arunachala Hill & 14 km Girivalam Path', description: 'Holy hill revered as Lord Shiva manifestation, encircled by a 14 km paved path housing Ashta Lingams.', distanceKm: 0.5 },
      { name: 'Sri Ramana Maharshi Ashram', description: 'Serene spiritual retreat & meditation center at the foot of Arunachala Hill, founded by Advaita sage Ramana Maharshi.', distanceKm: 2 },
      { name: 'Virupaksha Cave & Skandashram', description: 'Sacred mountain caves on Arunachala hill slopes where Sri Ramana Maharshi meditated for over two decades.', distanceKm: 2.5 },
      { name: 'Jawadhu Hills & Beeman Waterfalls', description: 'Scenic Eastern Ghats mountain range featuring lush forest reserves, tribal hamlets, and Beeman Falls in Jamunamarathur.', distanceKm: 50 },
    ],

    industries: [
      'Global Spiritual Tourism & Ashram Hospitality Sector (Millions during Pournami & Deepam)',
      'Arani Handloom Silk Saree Weaving & Dyeing Industry',
      'Agriculture Sector — Paddy Farming, Rice Milling & Sugarcane Processing',
      'Granite Mining & Stone Carving Workshops',
      'Eco-Tourism & Forest Resource Industry in Jawadhu Hills',
    ],
    businessInfo:
      'Tiruvannamalai is one of Asia\'s premier spiritual centers. International seekers visiting Sri Ramana Maharshi Ashram, millions of pilgrims performing Pournami Girivalam around Arunachala Hill, Arani silk saree traders, and Jawadhu hill travelers rely daily on intercity road transport. SAMAYAS delivers executive sedans, 3.5-hour Chennai Airport drops, 2.25-hour Puducherry transfers, spacious family SUVs for Girivalam groups, and 24/7 one-way cabs with zero return charges.',

    reviews: [
      {
        name: 'Michael Stern',
        rating: 5,
        text: 'Booked a one-way cab from Ramana Maharshi Ashram to Chennai Airport after a 2-week retreat. SAMAYAS driver was punctual, car was clean, and reached MAA airport in 3.5 hours.',
        route: 'Tiruvannamalai to Chennai Airport',
      },
      {
        name: 'Anantharaman S.',
        rating: 5,
        text: 'Took a family cab from Tiruvannamalai station for Pournami Girivalam and Arunachaleswarar temple worship. Driver was extremely patient and knowledgeable.',
        route: 'Tiruvannamalai Local & Girivalam',
      },
      {
        name: 'Arani Silk Weavers',
        rating: 5,
        text: 'Regularly book SAMAYAS for Arani silk saree trade trips to Chennai and Puducherry. Transparent pricing and zero return charges.',
        route: 'Arani to Chennai',
      },
      {
        name: 'Dr. Katherine Wood',
        rating: 4,
        text: 'Booked a cab from Ramana Ashram to Bengaluru. Smooth drive and polite driver.',
        route: 'Tiruvannamalai to Bengaluru',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Tiruvannamalai to Chennai Airport (MAA)?',
        a: 'The one-way taxi fare from Tiruvannamalai to Chennai International Airport (MAA - 170 km via Tindivanam / GST Road) starts at approximately ₹2,600 for a Hatchback, ₹3,000 for a Sedan (Dzire, Etios), and ₹4,200 for an SUV (Ertiga). Travel time is around 3.5 hours.',
      },
      {
        q: 'What is the one-way taxi fare from Tiruvannamalai to Puducherry?',
        a: 'The one-way taxi fare from Tiruvannamalai to Puducherry (105 km via Gingee) starts at approximately ₹1,650 for a Hatchback, ₹1,900 for a Sedan, and ₹2,700 for an SUV. Travel time is around 2.25 hours.',
      },
      {
        q: 'Are SAMAYAS cabs available 24/7 during Pournami Girivalam and Karthigai Deepam festivals?',
        a: 'Yes, SAMAYAS operates 24/7 dedicated cabs during Pournami Girivalam nights and Karthigai Deepam festival with advance booking.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Sri Ramana Maharshi Ashram and Tiruvannamalai Station (TNM)?',
        a: 'Yes, we provide 24/7 round-the-clock doorstep pickup at Ramana Ashram, Arunachaleswarar temple, Tiruvannamalai Railway Station (TNM), and all Chengam Road resorts.',
      },
      {
        q: 'Which vehicles are recommended for family pilgrimage trips to Tiruvannamalai?',
        a: 'We recommend our comfortable Sedans (Dzire, Etios) or spacious 7-seater SUVs (Ertiga, Innova Crysta) for family spiritual trips.',
      },
    ],

    metaTitle: 'Book One-Way Taxi from Tiruvannamalai | No Return Fare | SAMAYAS',
    metaDescription:
      'Travel comfortably from Tiruvannamalai, Tamil Nadu. Direct one-way taxi to Chennai Airport, Puducherry, Bengaluru, Vellore & Salem. Reserve your cab now with SAMAYAS.',
  },

  // ─────────────────────────────────────────────────────────
  // TIRUVARUR — District 35
  // ─────────────────────────────────────────────────────────
  tiruvarur: {
    heroTagline:
      'Traveling from the Chariot Capital of Tiruvarur? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Tiruvarur, Thyagaraja Temple, and Muthupet.',

    overview: `Tiruvarur district, situated in the heart of the fertile Kaveri Delta in eastern Tamil Nadu, is nationally celebrated as the 'Chariot Capital of South India' and the revered birthplace of the immortal Trinity of Carnatic Music.

Bounded by Thanjavur to the west, Nagapattinam to the east, Mayiladuthurai to the north, Pudukkottai to the southwest, and the Palk Strait to the south, Tiruvarur possesses an extraordinarily rich musical, architectural, and agricultural heritage. The district's crowning jewel is Arulmigu Thyagaraja Swamy Temple—a 1,000-year-old Chola architectural wonder spanning 33 acres, world-famous for the grand Azhi Ther (India's largest temple chariot standing 96 ft tall weighing 300 tons) and Kamalalayam Tank (one of Asia's largest temple tanks covering 33 acres). Tiruvarur is uniquely blessed as the birthplace of all three Carnatic music stalwarts: Saint Tyagaraja, Muthuswami Dikshitar, and Syama Sastri.

Spiritually, Tiruvarur houses the Mannargudi Rajagopalaswamy Temple ('Dakshina Dwarka' with its 154-ft gopuram) and Koothanur Saraswathi Temple—the only dedicated temple in Tamil Nadu for Goddess Saraswathi. Geographically, it hosts the Muthupet Mangrove Wetlands lagoon—part of Point Calimere Sanctuary featuring 120 sq km of pristine mangrove forests and bird havens. Transportation is anchored by Tiruvarur Junction (TVR), Mannargudi Station (MQ), and Tiruvarur Central Bus Stand, with Tiruchirappalli International Airport (TRZ) located 105 km west. Whether you are attending the Azhi Ther festival, visiting the Carnatic Trinity birthplaces, exploring Muthupet mangroves, or booking an outstation taxi to Velankanni, Thanjavur, or Trichy, SAMAYAS provides reliable 24/7 one-way cabs from Tiruvarur with zero return fare charges.`,

    overviewHighlights: [
      'Chariot Capital & Cradle of Carnatic Trinity home to 96-ft Azhi Ther Chariot & 33-acre Kamalalayam Tank',
      'Birthplace of Saints Tyagaraja, Muthuswami Dikshitar & Syama Sastri; home to Mannargudi & Muthupet Mangroves',
      '24/7 direct one-way taxi transfers to Trichy Airport (105 km), Thanjavur, Velankanni, Nagapattinam & Chennai'
    ],

    routes: [
      { name: 'Tiruvarur to Trichy', to: 'Trichy', distanceKm: 105, timeHours: 2, startingFare: 1950 },
      { name: 'Tiruvarur to Thanjavur', to: 'Thanjavur', distanceKm: 55, timeHours: 1, startingFare: 1950 },
      { name: 'Tiruvarur to Velankanni', to: 'Velankanni', distanceKm: 30, timeHours: 0.6, startingFare: 1950 },
      { name: 'Tiruvarur to Nagapattinam', to: 'Nagapattinam', distanceKm: 25, timeHours: 0.5, startingFare: 1950 },
      { name: 'Tiruvarur to Chennai', to: 'Chennai', distanceKm: 320, timeHours: 6, startingFare: 4800 },
      { name: 'Tiruvarur to Kumbakonam', to: 'Kumbakonam', distanceKm: 40, timeHours: 0.8, startingFare: 1950 },
      { name: 'Tiruvarur to Madurai', to: 'Madurai', distanceKm: 200, timeHours: 3.75, startingFare: 3000 },
      { name: 'Tiruvarur to Pudukkottai', to: 'Pudukkottai', distanceKm: 95, timeHours: 1.75, startingFare: 1950 },
      { name: 'Tiruvarur to Rameshwaram', to: 'Rameshwaram', distanceKm: 230, timeHours: 4.5, startingFare: 3450 },
    ],

    fareTable: [
      { to: 'Trichy',        distanceKm: 105, timeHours: 2, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Thanjavur',     distanceKm: 55, timeHours: 1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Velankanni',    distanceKm: 30, timeHours: 0.6, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Nagapattinam',  distanceKm: 25, timeHours: 0.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chennai',       distanceKm: 320, timeHours: 6, hatchback: 4800, sedan: 4800, suv: 6400 },
      { to: 'Kumbakonam',    distanceKm: 40, timeHours: 0.8, hatchback: 1950, sedan: 1950, suv: 2600 },
    ],

    pickupLocations: [
      'Tiruvarur Junction Railway Station (TVR)',
      'Tiruvarur Central Bus Stand (Bypass Rd)',
      'Thyagaraja Swamy Temple South Gate',
      'Kamalalayam Tank Promenade',
      'Mannargudi Railway Station (MQ)',
      'Mannargudi Rajagopalaswamy Temple',
      'Koothanur Saraswathi Temple Gate',
      'Muthupet Mangrove Boat Jetty',
      'Thiruthuraipoondi Bus Stand',
      'Nannilam Bus Stand',
    ],
    dropLocations: [
      'Trichy',
      'Thanjavur',
      'Velankanni',
      'Nagapattinam',
      'Chennai',
      'Kumbakonam',
      'Madurai',
      'Pudukkottai',
      'Rameshwaram',
    ],

    transportHubs: {
      busStands: [
        { name: 'Tiruvarur Central Bus Stand', address: 'Bypass Road, Tiruvarur - 610001' },
        { name: 'Mannargudi Bus Stand', address: 'Main Road, Mannargudi - 614001' },
        { name: 'Thiruthuraipoondi Bus Stand', address: 'Bypass Road, Thiruthuraipoondi - 614713' },
      ],
      railwayStations: [
        { name: 'Tiruvarur Junction', code: 'TVR', address: 'Station Road, Tiruvarur - 610001' },
        { name: 'Mannargudi Railway Station', code: 'MQ', address: 'Mannargudi, Tiruvarur District - 614001' },
        { name: 'Thiruthuraipoondi Junction', code: 'TTP', address: 'Thiruthuraipoondi - 614713' },
      ],
      airports: [
        { name: 'Tiruchirappalli International Airport (Nearest)', code: 'TRZ', distanceKm: 105, address: 'Airport Road, Tiruchirappalli - 620007' },
      ],
    },

    touristAttractions: [
      { name: 'Arulmigu Thyagaraja Swamy Temple & Azhi Ther', description: 'Historic 33-acre Chola temple complex housing India\'s largest temple car (96-ft Azhi Ther) and Kamalalayam Tank.', distanceKm: 1 },
      { name: 'Muthupet Mangrove Wetlands & Lagoon', description: 'Pristine 120 sq km coastal mangrove forest ecosystem featuring boat rides, water birds, and wooden walkways.', distanceKm: 45 },
      { name: 'Mannargudi Arulmigu Rajagopalaswamy Temple', description: 'Renowned Vaishnavite shrine celebrated as \'Dakshina Dwarka\', featuring a 154-foot gopuram and Haridra Nadhi tank.', distanceKm: 28 },
      { name: 'Koothanur Arulmigu Saraswathi Temple', description: 'Sole dedicated temple in Tamil Nadu for Goddess Saraswathi, famous for Saraswathi Puja and Vijayadashami vidyarambham.', distanceKm: 22 },
      { name: 'Birthplace Memorials of Carnatic Music Trinity', description: 'Sacred shrines in Tiruvarur honoring Saints Tyagaraja, Muthuswami Dikshitar, and Syama Sastri.', distanceKm: 1.5 },
    ],

    industries: [
      'Kaveri Delta Agriculture — Paddy Farming, Rice Milling & Grain Storage',
      'Temple Heritage & World-Famous Azhi Ther Chariot Festival Tourism',
      'Eco-Tourism & Lagoon Fisheries in Muthupet Mangroves',
      'Handloom Cotton Saree Weaving & Traditional Handicrafts',
      'Religious Tourism Hospitality in Mannargudi & Koothanur',
    ],
    businessInfo:
      'Tiruvarur is South India\'s spiritual chariot capital and Carnatic music cradle. Carnatic music scholars visiting the Trinity birthplaces, rice mill exporters from the Kaveri Delta, millions of pilgrims attending the Azhi Ther festival, eco-tourists visiting Muthupet Mangroves, and travelers catching flights from Trichy Airport (TRZ - 105km) rely daily on intercity road transport. SAMAYAS delivers executive sedans, 2-hour Trichy transfers, spacious family SUVs for temple circuits, and 24/7 one-way cabs with zero return fare charges.',

    reviews: [
      {
        name: 'Violin Vidwan Sundaram',
        rating: 5,
        text: 'Booked a one-way cab from Tiruvarur Trinity birthplace to Trichy Airport for a concert flight to Chennai. Driver arrived 10 minutes early, car was super clean, and reached TRZ airport in 2 hours.',
        route: 'Tiruvarur to Trichy Airport',
      },
      {
        name: 'Kamala Vasudevan',
        rating: 5,
        text: 'Took a family temple tour cab from Tiruvarur station to Thyagaraja Swamy temple, Mannargudi Rajagopalaswamy, and Koothanur Saraswathi temple. Excellent driver who navigated carefully.',
        route: 'Tiruvarur Temple Tour',
      },
      {
        name: 'Muthupet Crab Traders',
        rating: 5,
        text: 'Regularly book SAMAYAS for seafood and mangrove tour business trips from Muthupet to Nagapattinam and Chennai. Transparent rates and zero return charges.',
        route: 'Muthupet to Chennai',
      },
      {
        name: 'Dr. Rahul Verma',
        rating: 4,
        text: 'Booked a cab from Tiruvarur to Velankanni Church. Smooth 35-minute drive along the coastal road.',
        route: 'Tiruvarur to Velankanni',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Tiruvarur to Trichy Airport (TRZ)?',
        a: 'The one-way taxi fare from Tiruvarur to Tiruchirappalli International Airport (TRZ - 105 km via NH-83) starts at approximately ₹1,650 for a Hatchback, ₹1,900 for a Sedan (Dzire, Etios), and ₹2,700 for an SUV (Ertiga). Travel time is around 2 hours.',
      },
      {
        q: 'What is the one-way taxi fare from Tiruvarur to Velankanni or Nagapattinam?',
        a: 'The one-way taxi fare from Tiruvarur to Nagapattinam (25 km) starts at ₹500, and to Velankanni (30 km) starts at ₹550 with direct doorstep drop.',
      },
      {
        q: 'Are SAMAYAS cabs available 24/7 during the Tiruvarur Azhi Ther Chariot Festival?',
        a: 'Yes, SAMAYAS operates 24/7 dedicated cabs during the annual Azhi Ther Chariot Festival and Panguni Uthiram celebrations with advance booking.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Tiruvarur Junction (TVR) and Mannargudi Station (MQ)?',
        a: 'Yes, we provide 24/7 round-the-clock train station pickup at Tiruvarur Junction (TVR), Mannargudi Station (MQ), and all Tiruvarur hotels.',
      },
      {
        q: 'Which vehicles are recommended for family pilgrimage trips in Tiruvarur?',
        a: 'We recommend our comfortable Sedans (Dzire, Etios) or spacious 7-seater SUVs (Ertiga, Innova Crysta) for family temple and heritage trips.',
      },
    ],

    metaTitle: 'Tiruvarur Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Tiruvarur, Tamil Nadu? Direct one-way taxi to Trichy Airport, Thanjavur, Velankanni, Nagapattinam & Chennai. Instant booking confirmation.',
  },

  // ─────────────────────────────────────────────────────────
  // VELLORE — District 36
  // ─────────────────────────────────────────────────────────
  vellore: {
    heroTagline:
      'Need a medical or outstation cab from Vellore? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Vellore, CMC Hospital, Katpadi Junction, and Sripuram.',

    overview: `Vellore district, strategically situated in the Palar River valley of northern Tamil Nadu along the Chennai-Bengaluru NH-48 highway, is globally recognized as the 'Healthcare Capital of South India' and the historic 'Fort City'.

Bounded by Ranipet to the east, Tirupathur to the west, Tiruvannamalai to the south, and Chittoor district of Andhra Pradesh to the north, Vellore holds an extraordinary position in medical treatment, education, and heritage tourism. The city is anchored by Christian Medical College & Hospital (CMC Vellore)—one of Asia's top multi-specialty healthcare institutions established in 1900, drawing patients and medical professionals from all over India and abroad. Vellore is equally famous for the breathtaking Sripuram Sri Lakshmi Narayani Golden Temple in Thirumalaikodi, covered in over 1,500 kg of pure gold leaf surrounded by a star-shaped green path.

Historically, the city is guarded by the 16th-century Vijayanagara granite monolith Vellore Fort, housing the exquisite Jalakanteswarar Temple, St. John's Church, Tipu Mahal, and Government Museum. Vellore is also an educational hub hosting VIT University (Vellore Institute of Technology). Transportation is anchored by Katpadi Junction (KPD)—one of South India's busiest railway hubs on the Chennai-Bengaluru trunk line—Vellore Cantonment (VLR), and Vellore New Bus Stand, with Chennai International Airport (MAA) 130 km east and Bengaluru Airport (BLR) 210 km west. Whether you are traveling for medical consultations at CMC Vellore, visiting VIT University, seeking blessings at Sripuram Golden Temple, or taking an outstation cab to Chennai Airport, Tirupati, or Bengaluru, SAMAYAS provides reliable 24/7 one-way cabs from Vellore with zero return fare charges.`,

    overviewHighlights: [
      'Healthcare Capital of South India home to CMC Vellore Hospital, VIT University & Sripuram Golden Temple',
      'Historic Fort City hosting 16th-century Vijayanagara granite Vellore Fort & Jalakanteswarar Temple',
      '24/7 direct one-way taxi transfers from Katpadi Junction (KPD) & City to Chennai Airport (130 km), Tirupati & Bengaluru'
    ],

    routes: [
      { name: 'Vellore to Chennai Airport', to: 'Chennai Airport', distanceKm: 130, timeHours: 2.5, startingFare: 1950 },
      { name: 'Vellore to Bengaluru', to: 'Bengaluru', distanceKm: 210, timeHours: 4, startingFare: 3150 },
      { name: 'Vellore to Tirupati', to: 'Tirupati', distanceKm: 110, timeHours: 2.5, startingFare: 1950 },
      { name: 'Vellore to Puducherry', to: 'Puducherry', distanceKm: 155, timeHours: 3.25, startingFare: 2325 },
      { name: 'Vellore to Tiruvannamalai', to: 'Tiruvannamalai', distanceKm: 85, timeHours: 1.75, startingFare: 1950 },
      { name: 'Vellore to Salem', to: 'Salem', distanceKm: 215, timeHours: 3.75, startingFare: 3225 },
      { name: 'Vellore to Kanchipuram', to: 'Kanchipuram', distanceKm: 70, timeHours: 1.25, startingFare: 1950 },
      { name: 'Vellore to Ranipet', to: 'Ranipet', distanceKm: 30, timeHours: 0.6, startingFare: 1950 },
      { name: 'Vellore to Tirupathur', to: 'Tirupathur', distanceKm: 85, timeHours: 1.5, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Chennai Airport', distanceKm: 130, timeHours: 2.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Bengaluru',       distanceKm: 210, timeHours: 4, hatchback: 3150, sedan: 3150, suv: 4200 },
      { to: 'Tirupati',        distanceKm: 110, timeHours: 2.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Puducherry',      distanceKm: 155, timeHours: 3.25, hatchback: 2325, sedan: 2325, suv: 3100 },
      { to: 'Tiruvannamalai',   distanceKm: 85, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Kanchipuram',     distanceKm: 70, timeHours: 1.25, hatchback: 1950, sedan: 1950, suv: 2600 },
    ],

    pickupLocations: [
      'Katpadi Junction Railway Station (KPD)',
      'CMC Hospital Main Gate (Ida Scudder Rd)',
      'Sripuram Golden Temple Main Gate',
      'VIT University Main Gate (Katpadi)',
      'Vellore Fort Main Gate',
      'Vellore Old Bus Stand (Fort Area)',
      'Vellore New Bus Stand (Katpadi Rd)',
      'Bagayam CMC College Campus',
      'Sathuvachari / NH-48 Bypass',
      'Thorapadi Junction',
    ],
    dropLocations: [
      'Chennai Airport',
      'Bengaluru',
      'Tirupati',
      'Puducherry',
      'Tiruvannamalai',
      'Salem',
      'Kanchipuram',
      'Ranipet',
      'Tirupathur',
    ],

    transportHubs: {
      busStands: [
        { name: 'Vellore New Bus Stand', address: 'Katpadi Road, Vellore - 632004' },
        { name: 'Vellore Old Bus Stand', address: 'Fort Area, Near Vellore Fort, Vellore - 632001' },
      ],
      railwayStations: [
        { name: 'Katpadi Junction', code: 'KPD', address: 'Katpadi, Vellore - 632007' },
        { name: 'Vellore Cantonment Railway Station', code: 'VLR', address: 'Cantonment, Vellore - 632001' },
        { name: 'Vellore Town Railway Station', code: 'VT', address: 'Vellore Town - 632004' },
      ],
      airports: [
        { name: 'Chennai International Airport (Nearest)', code: 'MAA', distanceKm: 130, address: 'GST Road, Meenambakkam, Chennai - 600027' },
        { name: 'Bengaluru Kempegowda International Airport', code: 'BLR', distanceKm: 210, address: 'Devanahalli, Bengaluru - 560300' },
      ],
    },

    touristAttractions: [
      { name: 'Sripuram Sri Lakshmi Narayani Golden Temple', description: 'Breathtaking spiritual sanctuary covered in 1,500+ kg of pure gold foil, surrounded by a star-shaped path in Thirumalaikodi.', distanceKm: 8 },
      { name: 'Historic 16th-Century Vellore Fort', description: 'Imposing double-moated Vijayanagara granite fortress housing Jalakanteswarar Temple, St. John\'s Church, and royal palaces.', distanceKm: 2 },
      { name: 'Arulmigu Jalakanteswarar Temple', description: 'Exquisite 16th-century Vijayanagara temple inside Vellore Fort, world-famous for its intricately carved stone marriage hall pillars.', distanceKm: 2 },
      { name: 'Christian Medical College & Hospital (CMC Vellore)', description: 'World-famous 3,000-bed multi-specialty medical center established by Dr. Ida S. Scudder in 1900.', distanceKm: 1.5 },
      { name: 'Amirthi Zoological Park & Waterfalls', description: 'Picturesque eco-tourism park nestled in the Javadi Hills, featuring waterfalls, deer park, and forest trails.', distanceKm: 25 },
    ],

    industries: [
      'Global Medical Tourism & Multi-Specialty Healthcare Sector (CMC & Naru Hospitals)',
      'Higher Education & Technical Research Sector (VIT University Campus)',
      'Leather Tanning, Processing & Footwear Industry (Ranipet & Vellore Belt)',
      'Automotive Component Manufacturing & Light Engineering Plants',
      'Granite Quarrying & Precision Stone Crafting',
    ],
    businessInfo:
      'Vellore is South India\'s medical capital and education hub. Thousands of patients visiting CMC Hospital, international doctors, students & parents visiting VIT University, pilgrims visiting Sripuram Golden Temple, and commuters taking express cabs to Chennai Airport (MAA - 130km) or Katpadi Junction (KPD) rely daily on intercity road transport. SAMAYAS delivers executive sedans, 2.5-hour Chennai Airport drops, wheel-chair accessible medical transfers, and 24/7 one-way cabs with zero return fare charges.',

    reviews: [
      {
        name: 'Dr. Debabrata Roy',
        rating: 5,
        text: 'Booked a one-way cab from CMC Vellore hospital main gate to Chennai Airport for a patient return flight to Kolkata. SAMAYAS driver arrived on time, was extremely helpful with luggage, and drove smoothly.',
        route: 'CMC Vellore to Chennai Airport',
      },
      {
        name: 'Prof. Anitha Sharma (VIT)',
        rating: 5,
        text: 'Took a one-way cab from Katpadi Junction (KPD) to VIT University campus and Sripuram Golden Temple. Driver was polite, vehicle was spotless, and service was 100% reliable.',
        route: 'Katpadi Station to Sripuram',
      },
      {
        name: 'Sanjeev Goel',
        rating: 5,
        text: 'Regularly book SAMAYAS for business trips from Vellore to Bengaluru. Honest per-km rates along the NH-48 four-lane highway.',
        route: 'Vellore to Bengaluru',
      },
      {
        name: 'Lakshmi Narayanan',
        rating: 4,
        text: 'Booked a cab from Vellore town to Tirupati temple. Reached Tirupati in 2.5 hours comfortably.',
        route: 'Vellore to Tirupati',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Vellore / CMC Hospital to Chennai Airport (MAA)?',
        a: 'The one-way taxi fare from Vellore town or CMC Hospital to Chennai International Airport (MAA - 130 km via NH-48 / Ranipet) starts at approximately ₹2,000 for a Hatchback, ₹2,350 for a Sedan (Dzire, Etios), and ₹3,300 for an SUV (Ertiga). Travel time is around 2.5 hours.',
      },
      {
        q: 'What is the one-way taxi fare from Vellore to Bengaluru or Tirupati?',
        a: 'The one-way taxi fare from Vellore to Tirupati (110 km) starts at ₹1,750, and to Bengaluru (210 km via NH-48) starts at ₹3,100 with zero return charges.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Katpadi Junction Railway Station (KPD) and CMC Hospital?',
        a: 'Yes, SAMAYAS provides 24/7 round-the-clock train station pickup at Katpadi Junction (KPD), CMC Hospital, VIT University campus, and all Vellore hotels.',
      },
      {
        q: 'Can I book a patient transfer cab from CMC Vellore to Chennai Airport with wheelchair assistance?',
        a: 'Yes! We specialize in patient-friendly medical transfers from CMC Vellore to Chennai Airport with comfortable, spacious Sedans and SUVs.',
      },
      {
        q: 'Which vehicles are recommended for family trips to Sripuram Golden Temple and Tirupati?',
        a: 'We recommend our comfortable Sedans (Dzire, Etios) or spacious 7-seater SUVs (Ertiga, Innova Crysta) for family temple visits.',
      },
    ],

    metaTitle: 'One-Way Cab from Vellore | CMC Hospital & Airport Cabs | SAMAYAS',
    metaDescription:
      'Need a medical or airport transfer from Vellore & Katpadi? Direct one-way taxi to CMC Hospital, Chennai Airport, Bengaluru, Tirupati & Sripuram. Doorstep pickup 24/7.',
  },

  // ─────────────────────────────────────────────────────────
  // VILUPPURAM — District 37
  // ─────────────────────────────────────────────────────────
  viluppuram: {
    heroTagline:
      'Heading out from Viluppuram transit crossroads? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Viluppuram, Gingee Fort, and Melmalayanur.',

    overview: `Viluppuram district, strategically positioned in central-coastal Tamil Nadu along the GST Road (NH-38) corridor, is celebrated as the 'Transportation Crossroads of South India' and the historical home of the legendary Gingee Fort.

Bounded by Cuddalore to the south, Kallakurichi and Tiruvannamalai to the west, Chengalpattu to the north, Puducherry Union Territory to the east, and the Bay of Bengal coastline, Viluppuram serves as an indispensable transit and cultural hub. The district's crowning historic jewel is Gingee Fort ('Troy of the East')—an unbeatable 13th-century granite citadel spanning three steep hills (Rajagiri, Krishnagiri, and Chandrayandurg) with 800-foot sheer cliffs described by Chhatrapati Shivaji as the most impregnable fortress in India.

Viluppuram is world-famous for spiritual landmarks including Melmalayanur Arulmigu Angalamman Temple (renowned for its powerful Amavasai night midnight rituals), Thiruvakkarai Vakkrakali Amman Temple, the 20 Million-Year-Old National Fossil Wood Park at Thiruvakkarai, and the international township of Auroville on the Puducherry border. Transportation is anchored by Villupuram Junction (VM)—one of Southern Railway's largest five-way railway divisions—Tindivanam Junction (TMV), and Central Bus Stand on GST Road, with Puducherry Airport (PNY) just 35 km east and Chennai International Airport (MAA) 140 km north. Whether you are climbing Gingee Fort, attending Melmalayanur Amavasai, visiting Auroville, or booking a direct airport transfer to Puducherry or Chennai, SAMAYAS provides reliable 24/7 one-way cabs from Viluppuram with zero return fare charges.`,

    overviewHighlights: [
      'Transportation Crossroads & Historic Hub home to Gingee Fort (\'Troy of the East\') & Melmalayanur Angalamman Temple',
      'Gateway to Auroville Universal Township, Thiruvakkarai 20-Million-Year Fossil Park & Marakkanam Salt Pans',
      '24/7 direct one-way taxi transfers from Villupuram Junction (VM) & Tindivanam to Puducherry (38 km), Chennai Airport & Trichy'
    ],

    routes: [
      { name: 'Viluppuram to Puducherry', to: 'Puducherry', distanceKm: 38, timeHours: 0.75, startingFare: 1950 },
      { name: 'Viluppuram to Chennai Airport', to: 'Chennai Airport', distanceKm: 140, timeHours: 2.75, startingFare: 2100 },
      { name: 'Viluppuram to Trichy', to: 'Trichy', distanceKm: 160, timeHours: 2.75, startingFare: 2400 },
      { name: 'Viluppuram to Tiruvannamalai', to: 'Tiruvannamalai', distanceKm: 60, timeHours: 1.25, startingFare: 1950 },
      { name: 'Viluppuram to Cuddalore', to: 'Cuddalore', distanceKm: 45, timeHours: 0.9, startingFare: 1950 },
      { name: 'Viluppuram to Gingee Fort', to: 'Gingee Fort', distanceKm: 40, timeHours: 0.75, startingFare: 1950 },
      { name: 'Viluppuram to Salem', to: 'Salem', distanceKm: 170, timeHours: 3.25, startingFare: 2550 },
      { name: 'Viluppuram to Madurai', to: 'Madurai', distanceKm: 280, timeHours: 4.75, startingFare: 4200 },
      { name: 'Viluppuram to Kallakurichi', to: 'Kallakurichi', distanceKm: 65, timeHours: 1.25, startingFare: 1950 },
    ],

    fareTable: [
      { to: 'Puducherry',      distanceKm: 38, timeHours: 0.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chennai Airport', distanceKm: 140, timeHours: 2.75, hatchback: 2100, sedan: 2100, suv: 2800 },
      { to: 'Trichy',          distanceKm: 160, timeHours: 2.75, hatchback: 2400, sedan: 2400, suv: 3200 },
      { to: 'Tiruvannamalai',   distanceKm: 60, timeHours: 1.25, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Cuddalore',       distanceKm: 45, timeHours: 0.9, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Gingee Fort',     distanceKm: 40, timeHours: 0.75, hatchback: 1950, sedan: 1950, suv: 2600 },
    ],

    pickupLocations: [
      'Villupuram Junction Railway Station (VM)',
      'Villupuram Central Bus Stand (GST Rd)',
      'Tindivanam Railway Station & Bus Stand (TMV)',
      'Gingee Fort Main Gate / Bus Stand',
      'Melmalayanur Angalamman Temple Gate',
      'Auroville Visitor Center Gate',
      'Thiruvakkarai Kali Temple Gate',
      'Vikravandi Toll Plaza / Highway Junction',
      'Marakkanam Salt Pans / Coastal Road',
      'Vanur Junction',
    ],
    dropLocations: [
      'Puducherry',
      'Chennai Airport',
      'Trichy',
      'Tiruvannamalai',
      'Cuddalore',
      'Gingee Fort',
      'Salem',
      'Madurai',
      'Kallakurichi',
    ],

    transportHubs: {
      busStands: [
        { name: 'Villupuram Central Bus Stand', address: 'GST Road, Viluppuram - 605602' },
        { name: 'Tindivanam Central Bus Stand', address: 'Gingee Road, Tindivanam - 604001' },
        { name: 'Gingee Bus Stand', address: 'Main Road, Gingee - 604202' },
      ],
      railwayStations: [
        { name: 'Villupuram Junction', code: 'VM', address: 'Station Road, Viluppuram - 605602' },
        { name: 'Tindivanam Railway Station', code: 'TMV', address: 'Station Road, Tindivanam - 604001' },
        { name: 'Vikravandi Railway Station', code: 'VVN', address: 'Vikravandi - 605652' },
      ],
      airports: [
        { name: 'Puducherry Domestic Airport (Nearest)', code: 'PNY', distanceKm: 35, address: 'Lawspet, Puducherry - 605008' },
        { name: 'Chennai International Airport', code: 'MAA', distanceKm: 140, address: 'GST Road, Meenambakkam, Chennai - 600027' },
      ],
    },

    touristAttractions: [
      { name: 'Historic 13th-Century Gingee Fort (\'Troy of the East\')', description: 'Impregnable granite citadel built across Rajagiri & Krishnagiri hills with 800-ft cliffs, Kalyana Mahal & granaries.', distanceKm: 40 },
      { name: 'Arulmigu Angalamman Temple, Melmalayanur', description: 'Sacred Shakti shrine world-famous for its powerful monthly Amavasai (New Moon) night midnight rituals.', distanceKm: 60 },
      { name: 'Auroville Universal Township & Matrimandir', description: 'International experimental township dedicated to human unity, featuring the golden globe Matrimandir.', distanceKm: 32 },
      { name: 'National Fossil Wood Park, Thiruvakkarai', description: 'Geological wonder featuring 20 million-year-old petrified tree trunks preserved by Geological Survey of India.', distanceKm: 25 },
      { name: 'Arulmigu Vakkrakali Amman Temple, Thiruvakkarai', description: 'Ancient Chola temple housing the unique asymmetric Vakkrakali deity and Chandramouleeswarar shrine.', distanceKm: 25 },
    ],

    industries: [
      'Sugar Mill Processing Plants (Mundiyampakkam & Asokur Sugar Mills)',
      'Rice Milling & Agricultural Grain Logistics along GST Highway Corridor',
      'Coastal Marine Salt Production & Aquaculture in Marakkanam',
      'Heritage Tourism & International Hospitality Sector in Gingee and Auroville',
      'Railway Engineering & Electric Locomotive Maintenance Depot at Villupuram Junction',
    ],
    businessInfo:
      'Viluppuram is South India\'s vital transport crossroads and historical fortress district. Sugar factory executives, railway officers at Villupuram Junction (VM), international travelers visiting Auroville, millions of pilgrims attending Melmalayanur Amavasai, and commuters catching flights from Puducherry Airport (PNY - 35km) or Chennai Airport (MAA - 140km) rely daily on intercity road transport. SAMAYAS delivers executive sedans, 45-minute Puducherry transfers, 2.75-hour Chennai Airport drops, and 24/7 one-way cabs with zero return fare charges.',

    reviews: [
      {
        name: 'Venkatesan VM',
        rating: 5,
        text: 'Booked a one-way cab from Villupuram Junction (VM) station to Puducherry White Town. Driver was waiting outside the station, car was clean, and reached Puducherry in 45 minutes.',
        route: 'Villupuram to Puducherry',
      },
      {
        name: 'Claire Dubois',
        rating: 5,
        text: 'Took a cab from Tindivanam station to Auroville Visitor Center. Excellent driver, polite behavior, and smooth drive.',
        route: 'Tindivanam to Auroville',
      },
      {
        name: 'Mundiyampakkam Sugar Mills',
        rating: 5,
        text: 'Regularly book SAMAYAS for sugar factory business trips from Viluppuram to Chennai and Trichy. Transparent per-km rates and no return fare charges.',
        route: 'Viluppuram to Chennai Airport',
      },
      {
        name: 'Kothandaraman R.',
        rating: 4,
        text: 'Booked a cab for family trip to Gingee Fort and Melmalayanur Angalamman temple. Very patient driver and safe driving.',
        route: 'Viluppuram Heritage Tour',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Viluppuram to Puducherry?',
        a: 'The one-way taxi fare from Viluppuram town/station to Puducherry (38 km via NH-45A) starts at approximately ₹650 for a Hatchback, ₹800 for a Sedan (Dzire, Etios), and ₹1,200 for an SUV (Ertiga). Travel time is around 45 minutes.',
      },
      {
        q: 'What is the one-way taxi fare from Viluppuram to Chennai Airport (MAA)?',
        a: 'The one-way taxi fare from Viluppuram to Chennai International Airport (MAA - 140 km via GST Road / NH-38) starts at approximately ₹2,200 for a Hatchback, ₹2,550 for a Sedan, and ₹3,600 for an SUV. Travel time is around 2.75 hours.',
      },
      {
        q: 'Are SAMAYAS cabs available 24/7 at Villupuram Junction Railway Station (VM)?',
        a: 'Yes, SAMAYAS provides 24/7 round-the-clock train-synchronized doorstep pickup at Villupuram Junction (VM), Tindivanam (TMV), and all hotels.',
      },
      {
        q: 'Can I book a cab for Melmalayanur Amavasai midnight prayer rituals or Gingee Fort tour?',
        a: 'Yes! SAMAYAS operates 24/7 dedicated cabs for Melmalayanur Amavasai night rituals and day tours to Gingee Fort.',
      },
      {
        q: 'Which vehicles are recommended for family heritage trips to Gingee Fort and Auroville?',
        a: 'We recommend our comfortable Sedans (Dzire, Etios) or spacious 7-seater SUVs (Ertiga, Innova Crysta) for family day trips.',
      },
    ],

    metaTitle: 'Viluppuram One-Way Taxi | Puducherry & Gingee Cabs | SAMAYAS',
    metaDescription:
      'Travel comfortably from Viluppuram, Tamil Nadu. Direct one-way taxi to Puducherry, Chennai Airport, Trichy, Gingee Fort & Tiruvannamalai. Transparent per-km rates.',
  },

  // ─────────────────────────────────────────────────────────
  // VIRUDHUNAGAR — District 38
  // ─────────────────────────────────────────────────────────
  virudhunagar: {
    heroTagline:
      'Planning a trip from Virudhunagar district? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Virudhunagar, Sivakasi, Srivilliputhur, and Rajapalayam.',

    overview: `Virudhunagar district, strategically situated in southern Tamil Nadu along the Madurai-Tirunelveli NH-44 highway corridor, is globally celebrated as the 'Fireworks & Safety Match Capital of India' and the birthplace of legendary statesman 'Karma Veerar' K. Kamaraj.

Bounded by Madurai to the north, Sivaganga and Ramanathapuram to the east, Thoothukudi and Tirunelveli to the south, and Tenkasi & Theni to the west, Virudhunagar holds a vital industrial, agricultural, and cultural legacy. The district centers around Sivakasi—the manufacturing engine producing over 80% of India's total fireworks, safety matches, offset printing, and diary publishing. Spiritually, it is world-renowned for Arulmigu Andal Temple in Srivilliputhur—a 108 Divya Desam shrine featuring Tamil Nadu's official state emblem, the magnificent 192-foot Rajagopuram, and authentic Srivilliputhur Palkova milk sweet.

Industrial hubs extend to Rajapalayam (famous for surgical cotton manufacturing, Rajapalayam hound dogs, and Ayyanar Falls) and Aruppukottai textile mills. Nature lovers explore Srivilliputhur Grizzled Giant Squirrel Wildlife Sanctuary in the Western Ghats. Transportation is anchored by Virudhunagar Junction (VPT), Sivakasi Station (SVKS), Rajapalayam Station (RJPM), and Central Bus Stand on NH-44, with Madurai International Airport (IXM) located just 45 km north. Whether you are buying fireworks in Sivakasi, visiting Kamarajar Memorial, seeking blessings at Srivilliputhur Andal Temple, tasting Palkova, or booking a direct airport transfer to Madurai Airport, SAMAYAS provides reliable 24/7 one-way cabs from Virudhunagar with zero return fare charges.`,

    overviewHighlights: [
      'Fireworks & Printing Capital home to Sivakasi pyrotechnics, Srivilliputhur Andal Temple & Kamarajar Birthplace',
      'Textile & Surgical Cotton Hub in Rajapalayam, featuring Grizzled Giant Squirrel Sanctuary & Ayyanar Falls',
      '24/7 direct one-way taxi transfers to Madurai Airport (45 km), Tirunelveli, Sivakasi, Srivilliputhur & Chennai'
    ],

    routes: [
      { name: 'Virudhunagar to Madurai Airport', to: 'Madurai Airport', distanceKm: 45, timeHours: 0.8, startingFare: 1950 },
      { name: 'Virudhunagar to Sivakasi', to: 'Sivakasi', distanceKm: 25, timeHours: 0.5, startingFare: 1950 },
      { name: 'Virudhunagar to Srivilliputhur', to: 'Srivilliputhur', distanceKm: 45, timeHours: 0.8, startingFare: 1950 },
      { name: 'Virudhunagar to Rajapalayam', to: 'Rajapalayam', distanceKm: 55, timeHours: 1.1, startingFare: 1950 },
      { name: 'Virudhunagar to Tirunelveli', to: 'Tirunelveli', distanceKm: 100, timeHours: 1.75, startingFare: 1950 },
      { name: 'Virudhunagar to Kanyakumari', to: 'Kanyakumari', distanceKm: 185, timeHours: 3.25, startingFare: 2775 },
      { name: 'Virudhunagar to Chennai', to: 'Chennai', distanceKm: 530, timeHours: 8.5, startingFare: 7950 },
      { name: 'Virudhunagar to Rameshwaram', to: 'Rameshwaram', distanceKm: 165, timeHours: 3.25, startingFare: 2475 },
      { name: 'Virudhunagar to Coimbatore', to: 'Coimbatore', distanceKm: 220, timeHours: 4.5, startingFare: 3300 },
    ],

    fareTable: [
      { to: 'Madurai Airport', distanceKm: 45, timeHours: 0.8, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Sivakasi',        distanceKm: 25, timeHours: 0.5, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Srivilliputhur',  distanceKm: 45, timeHours: 0.8, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Rajapalayam',     distanceKm: 55, timeHours: 1.1, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Tirunelveli',     distanceKm: 100, timeHours: 1.75, hatchback: 1950, sedan: 1950, suv: 2600 },
      { to: 'Chennai',         distanceKm: 530, timeHours: 8.5, hatchback: 7950, sedan: 7950, suv: 10600 },
    ],

    pickupLocations: [
      'Virudhunagar Junction Railway Station (VPT)',
      'Virudhunagar Central Bus Stand (Madurai Rd)',
      'K. Kamarajar Memorial House (Virudhunagar Town)',
      'Sivakasi Railway Station & Industrial Park (SVKS)',
      'Srivilliputhur Andal Temple Car Street',
      'Rajapalayam Railway Station & Bus Stand (RJPM)',
      'Aruppukottai Bus Stand',
      'Sattur Bus Stand & Station (SRT)',
      'Kamuthi Road Junction',
      'Mepco Schlenk Engineering College Gate',
    ],
    dropLocations: [
      'Madurai Airport',
      'Sivakasi',
      'Srivilliputhur',
      'Rajapalayam',
      'Tirunelveli',
      'Kanyakumari',
      'Chennai',
      'Rameshwaram',
      'Coimbatore',
    ],

    transportHubs: {
      busStands: [
        { name: 'Virudhunagar Central Bus Stand', address: 'Madurai Road, Virudhunagar - 626001' },
        { name: 'Sivakasi Bus Stand', address: 'Velayutham Road, Sivakasi - 626123' },
        { name: 'Rajapalayam Bus Stand', address: 'Tenkasi Road, Rajapalayam - 626117' },
      ],
      railwayStations: [
        { name: 'Virudhunagar Junction', code: 'VPT', address: 'Station Road, Virudhunagar - 626001' },
        { name: 'Sivakasi Railway Station', code: 'SVKS', address: 'Station Road, Sivakasi - 626123' },
        { name: 'Rajapalayam Railway Station', code: 'RJPM', address: 'Rajapalayam - 626117' },
      ],
      airports: [
        { name: 'Madurai International Airport (Nearest)', code: 'IXM', distanceKm: 45, address: 'Airport Road, Avaniyapuram, Madurai - 625022' },
        { name: 'Tuticorin Airport', code: 'TCR', distanceKm: 85, address: 'Airport Road, Vagaikulam, Thoothukudi - 628103' },
      ],
    },

    touristAttractions: [
      { name: 'Arulmigu Andal Temple & Tower, Srivilliputhur', description: 'Sacred 108 Divya Desam shrine featuring Tamil Nadu\'s official emblem 192-ft Rajagopuram, birthplace of Andal & Periyazhvar.', distanceKm: 45 },
      { name: 'K. Kamarajar Memorial House, Virudhunagar', description: 'Ancestral residence monument dedicated to legendary Tamil statesman and Kingmaker \'Karma Veerar\' K. Kamaraj.', distanceKm: 1 },
      { name: 'Sivakasi Industrial Hub & Printing Parks', description: 'World-famous manufacturing hub of safety matches, pyrotechnics, offset printing, and diary publishing.', distanceKm: 25 },
      { name: 'Srivilliputhur Grizzled Giant Squirrel Sanctuary', description: 'Pristine 480 sq km Western Ghats wildlife sanctuary protecting endangered grizzled giant squirrels.', distanceKm: 50 },
      { name: 'Ayyanar Falls & Sanjeevi Hills, Rajapalayam', description: 'Scenic mountain waterfall surrounded by dense teak forests and medicinal hill slopes in Rajapalayam.', distanceKm: 60 },
    ],

    industries: [
      'Fireworks, Pyrotechnics & Safety Match Industrial Cluster (Sivakasi — 80%+ of India\'s fireworks)',
      'Offset Printing, Calendar & Packaging Printing Parks in Sivakasi',
      'Surgical Cotton, Medical Dressings & Textile Spinning Mills in Rajapalayam',
      'Edible Oil Extraction & Spices Trade (Virudhunagar Sesame Oil & Dry Chillies)',
      'Authentic Srivilliputhur Palkova Dairy & Confectionery Sector',
    ],
    businessInfo:
      'Virudhunagar district is South India\'s fireworks, printing, and surgical cotton industrial power. Fireworks merchants and printing executives visiting Sivakasi, surgical cotton exporters in Rajapalayam, oil & spice traders, pilgrims visiting Srivilliputhur Andal Temple, and commuters taking express cabs to Madurai International Airport (IXM - 45km) rely daily on intercity road transport. SAMAYAS delivers executive sedans, 45-minute Madurai Airport transfers, corporate billing options, and 24/7 one-way cabs with zero return fare charges.',

    reviews: [
      {
        name: 'Sivakasi Fireworks Exporters',
        rating: 5,
        text: 'Booked a one-way cab from Sivakasi factory complex to Madurai Airport for a flight to Mumbai. SAMAYAS driver arrived 15 minutes early, car was spotless, and reached IXM airport in 45 minutes.',
        route: 'Sivakasi to Madurai Airport',
      },
      {
        name: 'Madasamy Srivilliputhur',
        rating: 5,
        text: 'Took a family cab from Virudhunagar station to Srivilliputhur Andal temple and bought authentic Palkova. Driver was very polite and drove safely along the highway.',
        route: 'Virudhunagar to Srivilliputhur',
      },
      {
        name: 'Rajapalayam Mills Ltd',
        rating: 5,
        text: 'Regularly book SAMAYAS for surgical cotton business trips from Rajapalayam to Tirunelveli and Chennai. Transparent per-km rates and no return fare charges.',
        route: 'Rajapalayam to Tirunelveli',
      },
      {
        name: 'Jeyakumar V.',
        rating: 4,
        text: 'Booked a cab from Virudhunagar town to Kamarajar memorial house and Madurai city. Smooth and comfortable ride.',
        route: 'Virudhunagar to Madurai',
      },
    ],

    faqs: [
      {
        q: 'What is the one-way taxi fare from Virudhunagar to Madurai Airport (IXM)?',
        a: 'The one-way taxi fare from Virudhunagar city/station to Madurai International Airport (IXM - 45 km via NH-44 four-lane highway) starts at approximately ₹800 for a Hatchback, ₹950 for a Sedan (Dzire, Etios), and ₹1,400 for an SUV (Ertiga). Travel time is around 45 to 50 minutes.',
      },
      {
        q: 'What is the one-way taxi fare from Virudhunagar / Sivakasi to Srivilliputhur or Rajapalayam?',
        a: 'The one-way taxi fare from Virudhunagar to Sivakasi (25 km) starts at ₹500, to Srivilliputhur (45 km) starts at ₹800, and to Rajapalayam (55 km) starts at ₹950.',
      },
      {
        q: 'Are 24/7 taxi pickups available at Virudhunagar Junction (VPT), Sivakasi (SVKS), and Rajapalayam (RJPM)?',
        a: 'Yes, SAMAYAS provides 24/7 round-the-clock train-synchronized doorstep pickup at Virudhunagar Junction (VPT), Sivakasi (SVKS), Rajapalayam (RJPM), and all factories.',
      },
      {
        q: 'Can I book a cab for a festival or business trip to Sivakasi fireworks industrial parks?',
        a: 'Yes! We provide dedicated corporate and business cabs to all fireworks factories, printing parks, and match units in Sivakasi with flexible booking options.',
      },
      {
        q: 'Which vehicles are recommended for family trips to Srivilliputhur Andal Temple?',
        a: 'We recommend our comfortable Sedans (Dzire, Etios) or spacious 7-seater SUVs (Ertiga, Innova Crysta) for family pilgrimage trips.',
      },
    ],

    metaTitle: 'Book One-Way Taxi from Virudhunagar | Sivakasi & Srivilliputhur Cabs | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Virudhunagar, Sivakasi & Srivilliputhur? Direct one-way taxi to Madurai Airport, Sivakasi, Rajapalayam & Tirunelveli. Available 24/7.',
  },

}

/**
 * General FAQs — reusable across all districts (Tier 2).
 * These are appended after district-specific FAQs.
 */
export const generalFaqs = [
  {
    q: 'What payment methods does SAMAYAS accept?',
    a: 'SAMAYAS accepts cash, UPI (Google Pay, PhonePe, Paytm), bank transfer, and all major digital wallets. Payment is collected after the trip is completed.',
  },
  {
    q: 'Can I cancel or reschedule my taxi booking?',
    a: 'Yes, you can cancel or reschedule your booking by calling us at +91-98948-09439 or messaging on WhatsApp. Cancellations made more than 2 hours before pickup are fully refundable.',
  },
  {
    q: 'Does SAMAYAS operate 24/7?',
    a: 'Yes, SAMAYAS operates 24 hours a day, 7 days a week, 365 days a year. You can book a taxi at any time — early morning, late night, or during festivals and holidays.',
  },
]

/**
 * Retrieves enhanced content for a district.
 * Returns the content object or null if the district hasn't been enhanced yet.
 */
export const getDistrictContent = (slug) => districtContent[slug] || null
