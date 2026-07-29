import fs from 'fs';

let fileContent = fs.readFileSync('./src/data/districtContent.js', 'utf-8');

// Refinement definitions for all 38 districts
const refinements = {
  tiruchirappalli: {
    heroTagline:
      'Planning a trip from Trichy? From the iconic Rock Fort and Srirangam Temple to any corner of Tamil Nadu — book your 24/7 one-way taxi with SAMAYAS.',
    metaTitle: 'Trichy One-Way Taxi | 24×7 Cab Booking | SAMAYAS',
    metaDescription:
      'Book affordable one-way taxi from Trichy (Tiruchirappalli), Tamil Nadu. Airport pickup, Srirangam drops & 38-district coverage. Hatchback ₹10/km. Book online today with SAMAYAS.',
  },
  ariyalur: {
    heroTagline:
      'Travel anywhere from Ariyalur with ease! From the cement manufacturing hub and UNESCO heritage at Gangaikonda Cholapuram — SAMAYAS provides 24/7 one-way cabs.',
    metaTitle: 'Book One-Way Taxi from Ariyalur | No Return Fare | SAMAYAS',
    metaDescription:
      'Book reliable one-way taxi from Ariyalur, Tamil Nadu. Direct cabs to Gangaikonda Cholapuram, Trichy Airport & Chennai. Transparent per-km rates with zero return fee.',
  },
  chengalpattu: {
    heroTagline:
      'Heading out from Chengalpattu? From Mahindra World City IT hubs to Mahabalipuram coastal resorts — book your 24/7 one-way cab with SAMAYAS.',
    metaTitle: 'Chengalpattu Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Chengalpattu, Tamil Nadu. Direct cabs to Chennai Airport, Mahindra World City, Mahabalipuram & Pondicherry. Instant booking confirmation.',
  },
  chennai: {
    heroTagline:
      'Booking a taxi from Chennai? From Central Station, Airport, and OMR IT corridor to any district in South India — travel 24/7 with SAMAYAS.',
    metaTitle: 'One-Way Cab from Chennai | Book Online 24×7 | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Chennai, Tamil Nadu. Airport & Railway Station pickups. Direct cabs to Pondicherry, Trichy, Bengaluru & Tirupati. Doorstep pickup available 24/7.',
  },
  coimbatore: {
    heroTagline:
      'Explore Tamil Nadu from Coimbatore! From the Manchester of South India to Ooty hills, Isha Yoga, and beyond — book your 24/7 one-way cab with SAMAYAS.',
    metaTitle: 'Coimbatore One-Way Taxi | 24×7 Cab Booking | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Coimbatore, Tamil Nadu. Direct cabs to Ooty, Chennai, Trichy, Madurai & Bengaluru. Airport & Junction pickups. Available 24×7 with zero return fare.',
  },
  cuddalore: {
    heroTagline:
      'Need a one-way cab from Cuddalore? From NLC Neyveli power plants and Chidambaram Natarajar Temple to Silver Beach — travel with SAMAYAS 24/7.',
    metaTitle: 'Book One-Way Taxi from Cuddalore | No Return Fare | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Cuddalore, Tamil Nadu. Direct cabs to Neyveli, Chidambaram, Puducherry & Chennai. Reserve your cab now with SAMAYAS.',
  },
  dharmapuri: {
    heroTagline:
      'Planning a journey from Dharmapuri? From Hogenakkal Waterfalls and Adhiyaman Fort to Bengaluru and Salem — SAMAYAS offers hassle-free one-way rides.',
    metaTitle: 'Dharmapuri Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Dharmapuri, Tamil Nadu. Direct cabs to Hogenakkal Falls, Bengaluru, Salem & Hosur. Transparent per-km rates with zero return fee.',
  },
  dindigul: {
    heroTagline:
      'Heading to the hills or outstation from Dindigul? From the Rock Fort and Palani Murugan Temple to Kodaikanal — book your 24/7 cab with SAMAYAS.',
    metaTitle: 'One-Way Cab from Dindigul | Book Online 24×7 | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Dindigul, Tamil Nadu. Direct cabs to Kodaikanal, Palani, Madurai & Trichy. Experienced hill drivers available. Book online today.',
  },
  erode: {
    heroTagline:
      'Travel anywhere from Erode with SAMAYAS! From the Turmeric City and Texvalley markets to Bhavani Sangameswarar Temple — enjoy 24/7 one-way cab rentals.',
    metaTitle: 'Erode One-Way Taxi | 24×7 Cab Booking | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Erode, Tamil Nadu. Direct cabs to Coimbatore, Salem, Tiruppur, Ooty & Bengaluru. Instant booking confirmation.',
  },
  kallakurichi: {
    heroTagline:
      'Looking for a reliable cab from Kallakurichi? From Asia\'s top sugar mills and Kalvarayan Hills eco-tourism to Ulundurpet expressway junction — SAMAYAS provides 24/7 one-way cabs.',
    overview: `Kallakurichi district, strategically located at the foothills of the Kalvarayan Hills along the Ulundurpet NH-79 & NH-45 expressway interchange in north-central Tamil Nadu, is celebrated as the 'Sugar Capital' of the state and a major agricultural transport hub.

Carved out of Viluppuram district in 2019, Kallakurichi is powered by massive sugar processing complexes including Kallakurichi Cooperative Sugar Mills and Kothari Sugars, alongside hundreds of modern rice processing plants. Geographically, Kallakurichi is blessed with the pristine Kalvarayan Hills—part of the Eastern Ghats—home to breathtaking Periyar Waterfalls (Vellimalai), Megam Falls, Gomukhi Dam reservoir, and tribal heritage.

Kallakurichi occupies an indispensable transport position anchored by Ulundurpet—where National Highways NH-45 (Chennai-Trichy) and NH-79 (Salem-Chennai expressway) meet—as well as Chinnasalem Railway Station (CS). Whether you are a sugar industry executive, an agricultural merchant, or a traveler exploring Kalvarayan Hills, SAMAYAS provides reliable 24/7 one-way cabs from Kallakurichi with zero return fare charges.`,
    metaTitle: 'Book One-Way Taxi from Kallakurichi | No Return Fare | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Kallakurichi, Tamil Nadu. Direct cabs to Kalvarayan Hills, Salem, Chennai, Trichy & Puducherry. Available 24×7 with zero return fare.',
  },
  kanchipuram: {
    heroTagline:
      'Planning a trip from Silk City Kanchipuram? From Kamakshi Amman Temple to Sriperumbudur SEZ industrial hubs and Chennai Airport — book 24/7 cabs with SAMAYAS.',
    metaTitle: 'Kanchipuram Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Kanchipuram, Tamil Nadu. Direct cabs to Chennai Airport, Sriperumbudur SEZ, Puducherry & Bengaluru. Reserve your cab now.',
  },
  kanyakumari: {
    heroTagline:
      'Starting your trip from mainland India\'s southernmost tip? From Vivekananda Rock and Sunset Point in Kanyakumari to Trivandrum Airport and Madurai — travel with SAMAYAS.',
    metaTitle: 'One-Way Cab from Kanyakumari | Book Online 24×7 | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Kanyakumari, Tamil Nadu. Direct cabs to Trivandrum Airport, Madurai, Tirunelveli & Rameshwaram. Transparent per-km rates with zero return fee.',
  },
  karur: {
    heroTagline:
      'Need an outstation cab from Karur? From Asia\'s Home Textile Export Hub, TNPL paper plant, and Pasupatheeswarar Temple — SAMAYAS offers 24/7 executive one-way taxis.',
    overview: `Karur district, centrally situated along the fertile banks of the Amaravathi and Kaveri rivers in western Tamil Nadu, is internationally acclaimed as the 'Home Textile Capital of India' and a massive industrial manufacturing engine.

Bounded by Tiruchirappalli, Namakkal, Erode, Tiruppur, and Dindigul, Karur dominates global export markets in bed linen, kitchen textiles, and curtains for Europe and North America. The district is home to industrial giants including TNPL (Tamil Nadu Newsprint and Papers Limited at Kagithapuram—one of Asia's largest eco-friendly paper mills), Chettipalayam bus body building industry, and major cement manufacturing plants. Spiritually, Karur is anchored by Arulmigu Pasupatheeswarar Temple—a sacred 7th-century Paadal Petra Sthalam—and Mayanur Barrage promenade.

Transportation is anchored by Karur Junction (KRR)—a vital five-way railway intersection in Southern Railway—and Central Bus Stand on NH-44 and NH-81. Whether you are an international textile buyer visiting manufacturing plants, a TNPL corporate executive, or a traveler taking an express cab to Trichy Airport (TRZ - 80 km) or Coimbatore, SAMAYAS provides reliable 24/7 one-way cabs from Karur with zero return fare charges.`,
    metaTitle: 'Karur One-Way Taxi | 24×7 Cab Booking | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Karur, Tamil Nadu. Direct cabs to Trichy Airport, Coimbatore, Salem, Erode & Chennai. Instant booking confirmation.',
  },
  krishnagiri: {
    heroTagline:
      'Travel anywhere from Krishnagiri! From the Mango Capital and KRP Dam to Hosur industrial SEZ and Bengaluru Airport — SAMAYAS provides 24/7 one-way cabs.',
    metaTitle: 'Book One-Way Taxi from Krishnagiri | No Return Fare | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Krishnagiri, Tamil Nadu. Direct cabs to Bengaluru Airport, Hosur, Salem, Chennai & Vellore. Doorstep pickup available 24/7.',
  },
  madurai: {
    heroTagline:
      'Need a one-way cab from Madurai? From Meenakshi Amman Temple and Madurai Airport to Rameshwaram, Kodaikanal, and Kanyakumari — book 24/7 with SAMAYAS.',
    metaTitle: 'Madurai Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Madurai, Tamil Nadu. Direct cabs to Rameshwaram, Kodaikanal, Kanyakumari, Trichy & Chennai. Book online today.',
  },
  mayiladuthurai: {
    heroTagline:
      'Planning a temple pilgrimage from Mayiladuthurai? From Mayuranathaswamy Temple and Vaitheeswaran Kovil to Poompuhar and Kumbakonam — travel with SAMAYAS.',
    metaTitle: 'One-Way Cab from Mayiladuthurai | Book Online 24×7 | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Mayiladuthurai, Tamil Nadu. Direct cabs to Kumbakonam, Chidambaram, Thanjavur, Trichy & Chennai. Available 24×7 with zero return fare.',
  },
  nagapattinam: {
    heroTagline:
      'Heading out from coastal Nagapattinam? From the historic port and Velankanni Basilica to Nagore Dargah — SAMAYAS offers reliable 24/7 one-way cabs.',
    metaTitle: 'Nagapattinam One-Way Taxi | 24×7 Cab Booking | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Nagapattinam, Tamil Nadu. Direct cabs to Velankanni, Thanjavur, Trichy, Chennai & Rameshwaram. Reserve your cab now.',
  },
  namakkal: {
    heroTagline:
      'Travel from the Transport Capital of Namakkal! From the 18-foot Anjaneyar Temple and Kolli Hills 70 hairpin bends to Salem — book 24/7 cabs with SAMAYAS.',
    metaTitle: 'Book One-Way Taxi from Namakkal | No Return Fare | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Namakkal, Tamil Nadu. Direct cabs to Salem, Trichy, Kolli Hills, Erode & Bengaluru. Transparent per-km rates with zero return fee.',
  },
  nilgiris: {
    heroTagline:
      'Exploring the Blue Mountains of Nilgiris? From Ooty, Coonoor tea gardens, and Doddabetta Peak to Coimbatore Airport and Mysuru — SAMAYAS provides 24/7 hill cabs.',
    metaTitle: 'Nilgiris Taxi Service | Ooty Hill & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Nilgiris (Ooty & Coonoor), Tamil Nadu. Direct cabs to Coimbatore Airport, Mysuru, Bengaluru & Mettupalayam. Instant booking confirmation.',
  },
  perambalur: {
    heroTagline:
      'Looking for an outstation cab from Perambalur? From MRF Tyre industrial plant, Dhanalakshmi Srinivasan educational complex, and Ranjankudi Fort to Trichy Airport — travel with SAMAYAS.',
    overview: `Perambalur district, strategically located along the multi-lane Chennai-Trichy National Highway (NH-45) in central Tamil Nadu, is a major industrial manufacturing, higher educational, and heritage hub.

Bounded by Ariyalur, Tiruchirappalli, Cuddalore, and Salem, Perambalur serves as an essential transport gateway between North and South Tamil Nadu. The district's economic profile is anchored by massive industrial manufacturing complexes including the MRF Tyre Manufacturing Plant at Naranamangalam, sugar mills, and a thriving Special Economic Zone (SEZ). Perambalur is equally famous as an educational hub, housing the vast Dhanalakshmi Srinivasan Group of Institutions and Roever Educational Trust, drawing thousands of students and faculty nationwide.

Historically, Perambalur features the imposing 17th-century Ranjankudi Fort—a well-preserved granite fortress built by the Nawab of the Carnatic that witnessed historic Anglo-French battles. Transportation is anchored by Perambalur Central Bus Stand on NH-45, with Tiruchirappalli International Airport (TRZ) located just 55 km south. Whether you are an MRF industrial executive, an educational delegate, or a traveler taking an express cab to Trichy Airport or Chennai, SAMAYAS provides reliable 24/7 one-way cabs from Perambalur with zero return fare charges.`,
    metaTitle: 'One-Way Cab from Perambalur | Book Online 24×7 | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Perambalur, Tamil Nadu. Direct cabs to Trichy Airport, Chennai, Salem & Ariyalur. Doorstep pickup available 24/7.',
  },
  pudukkottai: {
    heroTagline:
      'Planning a trip from Princely Pudukkottai? From Sittanavasal Cave Paintings and Thirumayam Fort to Chettinad and Trichy Airport — book 24/7 cabs with SAMAYAS.',
    metaTitle: 'Pudukkottai One-Way Taxi | 24×7 Cab Booking | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Pudukkottai, Tamil Nadu. Direct cabs to Trichy Airport, Chettinad, Madurai, Thanjavur & Rameshwaram. Book online today.',
  },
  ramanathapuram: {
    heroTagline:
      'Heading to Sacred Rameshwaram or outstation from Ramanathapuram? From Ramanathapuram Palace and Pamban Sea Bridge to Dhanushkodi — travel 24/7 with SAMAYAS.',
    metaTitle: 'Book One-Way Taxi from Ramanathapuram | No Return Fare | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Ramanathapuram & Rameshwaram, Tamil Nadu. Direct cabs to Madurai, Dhanushkodi, Trichy & Kanyakumari. Available 24×7 with zero return fare.',
  },
  ranipet: {
    heroTagline:
      'Need a corporate or outstation cab from Ranipet? From the Finished Leather Export Capital, BHEL Heavy Boiler Plant, and historic Arcot to Chennai Airport — travel with SAMAYAS.',
    overview: `Ranipet district, strategically situated in the Palar River valley of northern Tamil Nadu along the Chennai-Bengaluru NH-48 industrial corridor, is an international leather manufacturing powerhouse and heavy engineering hub.

Carved out of Vellore district in 2019, Ranipet is bounded by Vellore to the west, Kanchipuram and Tiruvallur to the east, Tirupattur and Tiruvannamalai to the south, and Andhra Pradesh to the north. The district is world-renowned for Finished Leather Footwear & Garment Exports in Ranipet and Walajapet, housing hundreds of tanneries and shoe factories supplying international fashion brands in Europe and America. Ranipet hosts massive public-sector engineering plants including BHEL (Bharat Heavy Electricals Limited Boiler Auxiliaries Plant at Mukundarayapuram) and SIPCOT Industrial Estate.

Historically, Ranipet district encompasses historic Arcot—the ancient capital of the Nawabs of the Carnatic, famous for Arot Nawab Biryani—and the hill shrine of Sholinghur Arulmigu Lakshmi Narasimha Swamy Temple. Transportation is anchored by Mukundarayapuram Railway Station (MCN), Walajah Road Junction (WJR), and Ranipet Bus Stand, with Chennai International Airport (MAA) located 100 km east. Whether you are an international leather buyer, a BHEL engineer, or a commuter booking an express cab to Chennai Airport or Tirupati, SAMAYAS provides reliable 24/7 one-way cabs from Ranipet with zero return fare charges.`,
    metaTitle: 'Ranipet Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Ranipet, Tamil Nadu. Direct cabs to Chennai Airport, Vellore, Kanchipuram, Tirupati & Bengaluru. Reserve your cab now.',
  },
  salem: {
    heroTagline:
      'Travel anywhere from the Steel City of Salem! From Yercaud hills and Mettur Dam to Bengaluru and Coimbatore — book your 24/7 one-way cab with SAMAYAS.',
    metaTitle: 'One-Way Cab from Salem | Book Online 24×7 | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Salem, Tamil Nadu. Direct cabs to Yercaud, Bengaluru, Coimbatore, Chennai & Mettur. Transparent per-km rates with zero return fee.',
  },
  sivaganga: {
    heroTagline:
      'Exploring Chettinad heritage from Sivaganga? From Karaikudi mansions and Pillayarpatti Cave Temple to Keezhadi and Madurai Airport — book 24/7 cabs with SAMAYAS.',
    metaTitle: 'Sivaganga One-Way Taxi | Karaikudi & Chettinad Cabs | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Sivaganga & Karaikudi, Tamil Nadu. Direct cabs to Madurai Airport, Chettinad heritage mansions, Trichy & Rameshwaram. Instant booking confirmation.',
  },
  tenkasi: {
    heroTagline:
      'Planning a waterfall visit or outstation trip from Tenkasi? From Courtallam Waterfalls and Kasi Viswanathar Temple to Trivandrum Airport — SAMAYAS offers 24/7 cabs.',
    metaTitle: 'Book One-Way Taxi from Tenkasi | Courtallam Cabs | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Tenkasi & Courtallam, Tamil Nadu. Direct cabs to Trivandrum Airport, Tirunelveli, Madurai & Kanyakumari. Available 24×7 with zero return fare.',
  },
  thanjavur: {
    heroTagline:
      'Visiting the UNESCO Big Temple in Thanjavur? From Brihadeeswarar Temple and Maratha Palace to Kumbakonam and Trichy Airport — travel 24/7 with SAMAYAS.',
    metaTitle: 'Thanjavur Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Thanjavur, Tamil Nadu. Direct cabs to Trichy Airport, Kumbakonam, Madurai, Chennai & Velankanni. Book online today.',
  },
  theni: {
    heroTagline:
      'Heading to mountain resorts from Theni? From Cardamom Valley, Munnar, and Meghamalai to Suruli Falls and Madurai Airport — book 24/7 hill cabs with SAMAYAS.',
    metaTitle: 'One-Way Cab from Theni | Munnar & Meghamalai Cabs | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Theni, Tamil Nadu. Direct cabs to Munnar, Meghamalai, Madurai Airport, Thekkady & Kodaikanal. Experienced mountain drivers. Doorstep pickup 24/7.',
  },
  thoothukudi: {
    heroTagline:
      'Travelling from the Pearl City of Thoothukudi? From Tuticorin Port and Tiruchendur Murugan Temple to Madurai Airport and Kanyakumari — book 24/7 with SAMAYAS.',
    metaTitle: 'Thoothukudi One-Way Taxi | Tuticorin & Temple Cabs | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Thoothukudi (Tuticorin), Tamil Nadu. Direct cabs to Tiruchendur, Tirunelveli, Madurai & Kanyakumari. Reserve your cab now.',
  },
  tirunelveli: {
    heroTagline:
      'Looking for 24/7 one-way cabs in Tirunelveli? From the Halwa City and Nellaiappar Temple to Manjolai Hills and Tuticorin Airport — travel with SAMAYAS.',
    metaTitle: 'Book One-Way Taxi from Tirunelveli | No Return Fare | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Tirunelveli, Tamil Nadu. Direct cabs to Kanyakumari, Madurai, Trivandrum Airport, Tuticorin & Courtallam. Instant booking confirmation.',
  },
  tirupattur: {
    heroTagline:
      'Planning a weekend trip to Yelagiri Hills from Tirupattur? From Jolarpettai Junction and Kavalur Observatory to Bengaluru — book 24/7 cabs with SAMAYAS.',
    metaTitle: 'Tirupattur Taxi Service | Yelagiri Hill & Station Cabs | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Tirupattur & Jolarpettai, Tamil Nadu. Direct cabs to Yelagiri Hills, Bengaluru, Chennai, Vellore & Krishnagiri. Transparent per-km rates.',
  },
  tiruppur: {
    heroTagline:
      'Need an executive cab from Knitwear Capital Tiruppur? From Netaji Apparel Park and Avinashi Temple to Coimbatore Airport — travel 24/7 with SAMAYAS.',
    metaTitle: 'One-Way Cab from Tiruppur | Book Online 24×7 | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Tiruppur, Tamil Nadu. Direct cabs to Coimbatore Airport, Erode, Salem, Ooty & Bengaluru. Available 24×7 with zero return fee.',
  },
  tiruvallur: {
    heroTagline:
      'Heading out from Tiruvallur? From Veeraraghava Swamy Temple and Tiruttani Murugan Temple to Avadi HVF and Chennai Airport — book 24/7 cabs with SAMAYAS.',
    metaTitle: 'Tiruvallur One-Way Taxi | 24×7 Cab Booking | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Tiruvallur, Tamil Nadu. Direct cabs to Chennai Airport, Tirupati, Tiruttani, Kanchipuram & Bengaluru. Book online today.',
  },
  tiruvannamalai: {
    heroTagline:
      'Visiting the Agni Sthalam of Tiruvannamalai? From Arunachaleswarar Temple, 14 km Girivalam Path, and Ramana Ashram to Chennai Airport — travel with SAMAYAS.',
    metaTitle: 'Book One-Way Taxi from Tiruvannamalai | No Return Fare | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Tiruvannamalai, Tamil Nadu. Direct cabs to Chennai Airport, Puducherry, Bengaluru, Vellore & Salem. Reserve your cab now.',
  },
  tiruvarur: {
    heroTagline:
      'Traveling from the Chariot Capital of Tiruvarur? From Thyagaraja Swamy Temple and Carnatic Trinity birthplaces to Muthupet Mangroves and Trichy Airport — SAMAYAS offers 24/7 cabs.',
    metaTitle: 'Tiruvarur Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Tiruvarur, Tamil Nadu. Direct cabs to Trichy, Thanjavur, Velankanni, Nagapattinam & Chennai. Instant booking confirmation.',
  },
  vellore: {
    heroTagline:
      'Need a medical or outstation cab from Vellore? From CMC Hospital, Sripuram Golden Temple, and VIT University to Katpadi Junction and Chennai Airport — travel with SAMAYAS.',
    metaTitle: 'One-Way Cab from Vellore | CMC Hospital & Airport Cabs | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Vellore & Katpadi, Tamil Nadu. Direct cabs to Chennai Airport, Bengaluru, Tirupati, Sripuram & CMC Hospital. Doorstep pickup available 24/7.',
  },
  viluppuram: {
    heroTagline:
      'Heading out from Viluppuram transit crossroads? From Gingee Fort and Melmalayanur Temple to Auroville, Puducherry, and Chennai Airport — book 24/7 cabs with SAMAYAS.',
    metaTitle: 'Viluppuram One-Way Taxi | Puducherry & Gingee Cabs | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Viluppuram, Tamil Nadu. Direct cabs to Puducherry, Chennai Airport, Trichy, Gingee Fort & Tiruvannamalai. Transparent per-km rates.',
  },
  virudhunagar: {
    heroTagline:
      'Planning a trip from Virudhunagar district? From Sivakasi fireworks hub, Srivilliputhur Andal Temple, and Rajapalayam to Madurai Airport — travel 24/7 with SAMAYAS.',
    metaTitle: 'Book One-Way Taxi from Virudhunagar | Sivakasi & Srivilliputhur Cabs | SAMAYAS',
    metaDescription:
      'Book 24/7 one-way taxi from Virudhunagar, Sivakasi & Srivilliputhur, Tamil Nadu. Direct cabs to Madurai Airport, Rajapalayam & Tirunelveli. Available 24×7 with zero return fare.',
  },
};

// Now apply updates into fileContent
let updatedCount = 0;
for (const [slug, data] of Object.entries(refinements)) {
  // Regex to match the district block in fileContent
  const regex = new RegExp(`(${slug}:\\s*{[\\s\\S]*?heroTagline:\\s*)['"\`]([\\s\\S]*?)['"\`],([\\s\\S]*?metaTitle:\\s*)['"\`]([\\s\\S]*?)['"\`],([\\s\\S]*?metaDescription:\\s*)['"\`]([\\s\\S]*?)['"\`],`, 'g');
  
  if (fileContent.includes(`${slug}: {`)) {
    // If overview is provided for the 4 target districts, update overview too
    if (data.overview) {
      const overviewRegex = new RegExp(`(${slug}:\\s*{[\\s\\S]*?overview:\\s*)[\`'"]([\\s\\S]*?)[\`'"],`, 'g');
      fileContent = fileContent.replace(overviewRegex, `$1\`${data.overview}\`,`);
    }

    fileContent = fileContent.replace(
      new RegExp(`(${slug}:\\s*{[\\s\\S]*?heroTagline:\\s*)['"\`]([\\s\\S]*?)['"\`],`, 'g'),
      `$1'${data.heroTagline.replace(/'/g, "\\'")}',`
    );
    fileContent = fileContent.replace(
      new RegExp(`(${slug}:\\s*{[\\s\\S]*?metaTitle:\\s*)['"\`]([\\s\\S]*?)['"\`],`, 'g'),
      `$1'${data.metaTitle.replace(/'/g, "\\'")}',`
    );
    fileContent = fileContent.replace(
      new RegExp(`(${slug}:\\s*{[\\s\\S]*?metaDescription:\\s*)['"\`]([\\s\\S]*?)['"\`],`, 'g'),
      `$1'${data.metaDescription.replace(/'/g, "\\'")}',`
    );
    updatedCount++;
  }
}

fs.writeFileSync('./src/data/districtContent.js', fileContent);
console.log(`Successfully refined ${updatedCount} districts in districtContent.js!`);
