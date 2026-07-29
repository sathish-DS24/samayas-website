import fs from 'fs';

let fileContent = fs.readFileSync('./src/data/districtContent.js', 'utf-8');

const polishedData = {
  tiruchirappalli: {
    heroTagline:
      'Planning a trip from Trichy? Book a 24/7 one-way taxi with SAMAYAS. Convenient pickups across Trichy, including Rock Fort, Srirangam, and TRZ Airport, with travel to anywhere in Tamil Nadu.',
    metaTitle: 'Trichy One-Way Taxi | 24/7 Cab Booking | SAMAYAS',
    metaDescription:
      'Travel comfortably from Trichy (Tiruchirappalli), Tamil Nadu. Direct one-way taxi to Chennai, Madurai, Srirangam & Thanjavur. Airport pickup & drop with Hatchbacks from ₹10/km. Book online today with SAMAYAS.',
  },
  ariyalur: {
    heroTagline:
      'Traveling from Ariyalur? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Ariyalur, including Gangaikonda Cholapuram and cement industrial zones.',
    metaTitle: 'Book One-Way Taxi from Ariyalur | No Return Fare | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Ariyalur? Direct one-way taxi to Gangaikonda Cholapuram, Trichy Airport & Chennai. Transparent per-km rates with zero return fee.',
  },
  chengalpattu: {
    heroTagline:
      'Heading out from Chengalpattu? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Chengalpattu, including Mahindra World City and Mahabalipuram.',
    metaTitle: 'Chengalpattu Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Need airport transfers from Chengalpattu? Direct one-way taxi to Mahabalipuram coastal resorts, Chennai Airport, Mahindra World City & Puducherry. Instant booking confirmation.',
  },
  chennai: {
    heroTagline:
      'Booking a taxi from Chennai? Book a 24/7 one-way cab with SAMAYAS. Convenient pickups from Chennai Airport, Central Station, and OMR IT corridor to anywhere in Tamil Nadu.',
    metaTitle: 'One-Way Cab from Chennai | Book Online 24/7 | SAMAYAS',
    metaDescription:
      'Book a taxi for your next trip from Chennai, Tamil Nadu. Direct one-way taxi to Puducherry, Trichy, Bengaluru & Tirupati. Doorstep pickup available 24/7.',
  },
  coimbatore: {
    heroTagline:
      'Exploring Tamil Nadu from Coimbatore? Book a 24/7 one-way taxi with SAMAYAS. Convenient pickups across Coimbatore, including CJB Airport, Isha Yoga, and Railway Junction.',
    metaTitle: 'Coimbatore One-Way Taxi | 24/7 Cab Booking | SAMAYAS',
    metaDescription:
      'Travel comfortably from Coimbatore, Tamil Nadu. Direct one-way taxi to Ooty, Mysuru, Isha Yoga Center, Chennai & Bengaluru. Available 24/7 with zero return fare.',
  },
  cuddalore: {
    heroTagline:
      'Need a one-way cab from Cuddalore? Book a 24/7 taxi with SAMAYAS. Doorstep pickups across Cuddalore, including Neyveli NLC and Chidambaram Natarajar Temple.',
    metaTitle: 'Book One-Way Taxi from Cuddalore | No Return Fare | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Cuddalore? Direct one-way taxi to Puducherry, Chidambaram Natarajar Temple, Neyveli & Chennai. Reserve your cab now with SAMAYAS.',
  },
  dharmapuri: {
    heroTagline:
      'Planning a journey from Dharmapuri? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Dharmapuri, including Hogenakkal Falls and Adhiyaman Fort.',
    metaTitle: 'Dharmapuri Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Need a cab for your trip from Dharmapuri? Direct one-way taxi to Hogenakkal Falls, Bengaluru, Salem & Hosur. Transparent per-km rates with zero return fee.',
  },
  dindigul: {
    heroTagline:
      'Heading out from Dindigul? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Dindigul, including Dindigul Rock Fort, Palani Temple, and Kodaikanal foothills.',
    metaTitle: 'One-Way Cab from Dindigul | Book Online 24/7 | SAMAYAS',
    metaDescription:
      'Travel comfortably from Dindigul, Tamil Nadu. Direct one-way taxi to Kodaikanal, Palani, Madurai & Trichy. Experienced hill drivers available. Book online today.',
  },
  erode: {
    heroTagline:
      'Traveling from Erode? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Erode, including Texvalley markets, Railway Junction, and Bhavani.',
    metaTitle: 'Erode One-Way Taxi | 24/7 Cab Booking | SAMAYAS',
    metaDescription:
      'Book a taxi for your next trip from Erode, Tamil Nadu. Direct one-way taxi to Coimbatore, Salem, Tiruppur, Ooty & Bengaluru. Instant booking confirmation.',
  },
  kallakurichi: {
    heroTagline:
      'Looking for a reliable cab from Kallakurichi? Book a 24/7 one-way taxi with SAMAYAS. Known for its sugar industry, rice processing clusters, and Kalvarayan Hills eco-tourism.',
    overview: `Kallakurichi district, strategically located at the foothills of the Kalvarayan Hills along the Ulundurpet NH-79 & NH-45 expressway interchange in north-central Tamil Nadu, is known for its sugar industry, rice processing clusters, and emerging eco-tourism.

Carved out of Viluppuram district in 2019, Kallakurichi is powered by sugar processing facilities including Kallakurichi Cooperative Sugar Mills and Kothari Sugars, alongside hundreds of modern rice processing plants. Geographically, Kallakurichi is blessed with the pristine Kalvarayan Hills—part of the Eastern Ghats—home to breathtaking Periyar Waterfalls (Vellimalai), Megam Falls, Gomukhi Dam reservoir, and tribal heritage.

Kallakurichi occupies an indispensable transport position anchored by Ulundurpet—where National Highways NH-45 (Chennai-Trichy) and NH-79 (Salem-Chennai expressway) meet—as well as Chinnasalem Railway Station (CS). Whether you are a sugar industry professional, an agricultural merchant, or a traveler exploring Kalvarayan Hills, SAMAYAS provides reliable 24/7 one-way cabs from Kallakurichi with zero return fare charges.`,
    metaTitle: 'Book One-Way Taxi from Kallakurichi | No Return Fare | SAMAYAS',
    metaDescription:
      'Travel comfortably from Kallakurichi, Tamil Nadu. Direct one-way taxi to Kalvarayan Hills, Salem, Chennai, Trichy & Puducherry. Available 24/7 with zero return fare.',
  },
  kanchipuram: {
    heroTagline:
      'Planning a trip from Silk City Kanchipuram? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Kanchipuram, including Kamakshi Temple and Sriperumbudur SEZ.',
    metaTitle: 'Kanchipuram Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Need airport pickup & drop from Kanchipuram? Direct one-way taxi to Chennai Airport, Sriperumbudur SEZ, Puducherry & Bengaluru. Reserve your cab now with SAMAYAS.',
  },
  kanyakumari: {
    heroTagline:
      'Starting your trip from Kanyakumari? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Kanyakumari, including Vivekananda Rock Memorial and Sunset Point.',
    metaTitle: 'One-Way Cab from Kanyakumari | Book Online 24/7 | SAMAYAS',
    metaDescription:
      'Travel comfortably from Kanyakumari, Tamil Nadu. Direct one-way taxi to Trivandrum Airport, Madurai, Tirunelveli & Rameshwaram. Transparent per-km rates with zero return fee.',
  },
  karur: {
    heroTagline:
      'Need an outstation cab from Karur? Book a 24/7 one-way taxi with SAMAYAS. Convenient pickups across Karur—one of India\'s leading home textile export hubs.',
    overview: `Karur district, centrally situated along the fertile banks of the Amaravathi and Kaveri rivers in western Tamil Nadu, is recognized as one of India's leading home textile export hubs and a major manufacturing engine.

Bounded by Tiruchirappalli, Namakkal, Erode, Tiruppur, and Dindigul, Karur supplies global markets in bed linen, kitchen textiles, and curtains for Europe and North America. The district is home to major industrial plants including TNPL (Tamil Nadu Newsprint and Papers Limited at Kagithapuram—one of Asia's largest eco-friendly paper mills), Chettipalayam bus body building industry, and cement manufacturing units. Spiritually, Karur is anchored by Arulmigu Pasupatheeswarar Temple—a sacred 7th-century Paadal Petra Sthalam—and Mayanur Barrage promenade.

Transportation is anchored by Karur Junction (KRR)—a vital five-way railway intersection in Southern Railway—and Central Bus Stand on NH-44 and NH-81. Whether you are an international textile buyer visiting manufacturing plants, a TNPL corporate executive, or a traveler taking an express cab to Trichy Airport (TRZ - 80 km) or Coimbatore, SAMAYAS provides reliable 24/7 one-way cabs from Karur with zero return fare charges.`,
    metaTitle: 'Karur One-Way Taxi | 24/7 Cab Booking | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Karur? Direct one-way taxi to Trichy Airport, Coimbatore, Salem, Erode & Chennai. Instant booking confirmation.',
  },
  krishnagiri: {
    heroTagline:
      'Traveling from Krishnagiri? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Krishnagiri, including KRP Dam and Hosur industrial SEZ.',
    metaTitle: 'Book One-Way Taxi from Krishnagiri | No Return Fare | SAMAYAS',
    metaDescription:
      'Need airport transfers from Krishnagiri? Direct one-way taxi to Bengaluru Airport, Hosur, Salem, Chennai & Vellore. Doorstep pickup available 24/7.',
  },
  madurai: {
    heroTagline:
      'Need a one-way cab from Madurai? Book a 24/7 taxi with SAMAYAS. Convenient pickups across Madurai, including Meenakshi Amman Temple and Madurai Airport (IXM).',
    metaTitle: 'Madurai Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Travel comfortably from Madurai, Tamil Nadu. Direct one-way taxi to Rameshwaram, Kodaikanal, Kanyakumari, Trichy & Chennai. Book online today with SAMAYAS.',
  },
  mayiladuthurai: {
    heroTagline:
      'Planning a temple pilgrimage from Mayiladuthurai? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Mayiladuthurai, including Mayuranathaswamy Temple and Vaitheeswaran Kovil.',
    metaTitle: 'One-Way Cab from Mayiladuthurai | Book Online 24/7 | SAMAYAS',
    metaDescription:
      'Book a taxi for your next trip from Mayiladuthurai, Tamil Nadu. Direct one-way taxi to Kumbakonam, Chidambaram, Thanjavur, Trichy & Chennai. Available 24/7 with zero return fare.',
  },
  nagapattinam: {
    heroTagline:
      'Heading out from coastal Nagapattinam? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Nagapattinam, including Velankanni Basilica and Nagore Dargah.',
    metaTitle: 'Nagapattinam One-Way Taxi | 24/7 Cab Booking | SAMAYAS',
    metaDescription:
      'Travel comfortably from Nagapattinam, Tamil Nadu. Direct one-way taxi to Velankanni Basilica, Thanjavur, Trichy, Chennai & Rameshwaram. Reserve your cab now.',
  },
  namakkal: {
    heroTagline:
      'Traveling from the Transport Capital of Namakkal? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Namakkal, including Anjaneyar Temple and Kolli Hills road.',
    metaTitle: 'Book One-Way Taxi from Namakkal | No Return Fare | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Namakkal? Direct one-way taxi to Salem, Kolli Hills, Trichy, Erode & Bengaluru. Transparent per-km rates with zero return fee.',
  },
  nilgiris: {
    heroTagline:
      'Exploring the Blue Mountains of Nilgiris? Book a 24/7 mountain one-way taxi with SAMAYAS. Doorstep pickups across Ooty, Coonoor, and Doddabetta Peak.',
    metaTitle: 'Nilgiris Taxi Service | Ooty Hill & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Travel comfortably from Nilgiris (Ooty & Coonoor), Tamil Nadu. Direct hill cabs to Coimbatore Airport, Mysuru, Bengaluru & Mettupalayam. Instant booking confirmation.',
  },
  perambalur: {
    heroTagline:
      'Looking for an outstation cab from Perambalur? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Perambalur, including MRF Tyre plant and Dhanalakshmi Srinivasan complex.',
    metaTitle: 'One-Way Cab from Perambalur | Book Online 24/7 | SAMAYAS',
    metaDescription:
      'Need airport pickup & drop from Perambalur? Direct one-way taxi to Trichy Airport, Chennai, Salem & Ariyalur. Doorstep pickup available 24/7.',
  },
  pudukkottai: {
    heroTagline:
      'Planning a trip from Princely Pudukkottai? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Pudukkottai, including Sittanavasal Caves and Thirumayam Fort.',
    metaTitle: 'Pudukkottai One-Way Taxi | 24/7 Cab Booking | SAMAYAS',
    metaDescription:
      'Travel comfortably from Pudukkottai, Tamil Nadu. Direct one-way taxi to Trichy Airport, Chettinad, Madurai, Thanjavur & Rameshwaram. Book online today with SAMAYAS.',
  },
  ramanathapuram: {
    heroTagline:
      'Heading to Sacred Rameshwaram from Ramanathapuram? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Ramanathapuram, Rameshwaram, and Pamban.',
    metaTitle: 'Book One-Way Taxi from Ramanathapuram | No Return Fare | SAMAYAS',
    metaDescription:
      'Book a taxi for your next trip from Ramanathapuram & Rameshwaram. Direct one-way taxi to Sacred Rameshwaram, Madurai, Dhanushkodi, Trichy & Kanyakumari. Available 24/7.',
  },
  ranipet: {
    heroTagline:
      'Need a corporate or outstation cab from Ranipet? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Ranipet, including leather export hubs and BHEL plant.',
    metaTitle: 'Ranipet Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Need airport transfers from Ranipet? Direct one-way taxi to Chennai Airport, Vellore, Kanchipuram, Tirupati & Bengaluru. Reserve your cab now with SAMAYAS.',
  },
  salem: {
    heroTagline:
      'Traveling from the Steel City of Salem? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Salem, including Railway Junction, Yercaud foothill, and Mettur.',
    metaTitle: 'One-Way Cab from Salem | Book Online 24/7 | SAMAYAS',
    metaDescription:
      'Travel comfortably from Salem, Tamil Nadu. Direct one-way taxi to Bengaluru, Yercaud, Coimbatore, Chennai & Mettur. Transparent per-km rates with zero return fee.',
  },
  sivaganga: {
    heroTagline:
      'Exploring Chettinad heritage from Sivaganga? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Karaikudi, Pillayarpatti, and Sivaganga.',
    metaTitle: 'Sivaganga One-Way Taxi | Karaikudi & Chettinad Cabs | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Sivaganga & Karaikudi? Direct one-way taxi to Madurai Airport, Chettinad heritage mansions, Trichy & Rameshwaram. Instant booking confirmation.',
  },
  tenkasi: {
    heroTagline:
      'Planning a waterfall visit or trip from Tenkasi? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Tenkasi, Courtallam Waterfalls, and Kasi Viswanathar Temple.',
    metaTitle: 'Book One-Way Taxi from Tenkasi | Courtallam Cabs | SAMAYAS',
    metaDescription:
      'Travel comfortably from Tenkasi & Courtallam, Tamil Nadu. Direct one-way taxi to Courtallam Waterfalls, Trivandrum Airport, Tirunelveli, Madurai & Kanyakumari. Available 24/7.',
  },
  thanjavur: {
    heroTagline:
      'Visiting the UNESCO Big Temple in Thanjavur? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Thanjavur, including Brihadeeswarar Temple and Maratha Palace.',
    metaTitle: 'Thanjavur Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Need airport pickup & drop from Thanjavur? Direct one-way taxi to Trichy Airport, Kumbakonam, Madurai, Chennai & Velankanni. Book online today with SAMAYAS.',
  },
  theni: {
    heroTagline:
      'Heading to mountain resorts from Theni? Book a 24/7 mountain one-way taxi with SAMAYAS. Doorstep pickups across Theni, Cardamom Valley, and Munnar road.',
    metaTitle: 'One-Way Cab from Theni | Munnar & Meghamalai Cabs | SAMAYAS',
    metaDescription:
      'Travel comfortably from Theni, Tamil Nadu. Direct hill cabs to Munnar, Meghamalai, Madurai Airport, Thekkady & Kodaikanal. Experienced mountain drivers. Doorstep pickup 24/7.',
  },
  thoothukudi: {
    heroTagline:
      'Traveling from the Pearl City of Thoothukudi? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Thoothukudi, VOC Port, and Tiruchendur Murugan Temple.',
    metaTitle: 'Thoothukudi One-Way Taxi | Tuticorin & Temple Cabs | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Thoothukudi (Tuticorin)? Direct one-way taxi to Tiruchendur Murugan Temple, Tirunelveli, Madurai & Kanyakumari. Reserve your cab now.',
  },
  tirunelveli: {
    heroTagline:
      'Looking for 24/7 one-way cabs in Tirunelveli? Book a taxi with SAMAYAS. Doorstep pickups across Tirunelveli, Nellaiappar Temple, and Junction station.',
    metaTitle: 'Book One-Way Taxi from Tirunelveli | No Return Fare | SAMAYAS',
    metaDescription:
      'Travel comfortably from Tirunelveli, Tamil Nadu. Direct one-way taxi to Kanyakumari, Madurai, Trivandrum Airport, Tuticorin & Courtallam. Instant booking confirmation.',
  },
  tirupattur: {
    heroTagline:
      'Planning a weekend trip to Yelagiri Hills from Tirupattur? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Tirupattur, Jolarpettai Junction, and Ambur.',
    metaTitle: 'Tirupattur Taxi Service | Yelagiri Hill & Station Cabs | SAMAYAS',
    metaDescription:
      'Need an outstation cab from Tirupattur & Jolarpettai? Direct one-way taxi to Yelagiri Hills, Bengaluru, Chennai, Vellore & Krishnagiri. Transparent per-km rates with zero return fee.',
  },
  tiruppur: {
    heroTagline:
      'Need an executive cab from Knitwear Capital Tiruppur? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Tiruppur, Netaji Apparel Park, and Avinashi.',
    metaTitle: 'One-Way Cab from Tiruppur | Book Online 24/7 | SAMAYAS',
    metaDescription:
      'Need airport transfers from Tiruppur, Tamil Nadu? Direct one-way taxi to Coimbatore Airport, Erode, Salem, Ooty & Bengaluru. Available 24/7 with zero return fee.',
  },
  tiruvallur: {
    heroTagline:
      'Heading out from Tiruvallur? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Tiruvallur, Veeraraghava Temple, Tiruttani, and Avadi.',
    metaTitle: 'Tiruvallur One-Way Taxi | 24/7 Cab Booking | SAMAYAS',
    metaDescription:
      'Book a taxi for your next trip from Tiruvallur, Tamil Nadu. Direct one-way taxi to Chennai Airport, Tirupati, Tiruttani, Kanchipuram & Bengaluru. Book online today.',
  },
  tiruvannamalai: {
    heroTagline:
      'Visiting the Agni Sthalam of Tiruvannamalai? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Tiruvannamalai, Arunachaleswarar Temple, and Ramana Ashram.',
    metaTitle: 'Book One-Way Taxi from Tiruvannamalai | No Return Fare | SAMAYAS',
    metaDescription:
      'Travel comfortably from Tiruvannamalai, Tamil Nadu. Direct one-way taxi to Chennai Airport, Puducherry, Bengaluru, Vellore & Salem. Reserve your cab now with SAMAYAS.',
  },
  tiruvarur: {
    heroTagline:
      'Traveling from the Chariot Capital of Tiruvarur? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Tiruvarur, Thyagaraja Temple, and Muthupet.',
    metaTitle: 'Tiruvarur Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Tiruvarur, Tamil Nadu? Direct one-way taxi to Trichy Airport, Thanjavur, Velankanni, Nagapattinam & Chennai. Instant booking confirmation.',
  },
  vellore: {
    heroTagline:
      'Need a medical or outstation cab from Vellore? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Vellore, CMC Hospital, Katpadi Junction, and Sripuram.',
    metaTitle: 'One-Way Cab from Vellore | CMC Hospital & Airport Cabs | SAMAYAS',
    metaDescription:
      'Need a medical or airport transfer from Vellore & Katpadi? Direct one-way taxi to CMC Hospital, Chennai Airport, Bengaluru, Tirupati & Sripuram. Doorstep pickup 24/7.',
  },
  viluppuram: {
    heroTagline:
      'Heading out from Viluppuram transit crossroads? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Viluppuram, Gingee Fort, and Melmalayanur.',
    metaTitle: 'Viluppuram One-Way Taxi | Puducherry & Gingee Cabs | SAMAYAS',
    metaDescription:
      'Travel comfortably from Viluppuram, Tamil Nadu. Direct one-way taxi to Puducherry, Chennai Airport, Trichy, Gingee Fort & Tiruvannamalai. Transparent per-km rates.',
  },
  virudhunagar: {
    heroTagline:
      'Planning a trip from Virudhunagar district? Book a 24/7 one-way taxi with SAMAYAS. Doorstep pickups across Virudhunagar, Sivakasi, Srivilliputhur, and Rajapalayam.',
    metaTitle: 'Book One-Way Taxi from Virudhunagar | Sivakasi & Srivilliputhur Cabs | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Virudhunagar, Sivakasi & Srivilliputhur? Direct one-way taxi to Madurai Airport, Sivakasi, Rajapalayam & Tirunelveli. Available 24/7.',
  },
};

let updatedCount = 0;
for (const [slug, data] of Object.entries(polishedData)) {
  if (fileContent.includes(`${slug}: {`)) {
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
console.log(`Successfully polished metadata for all ${updatedCount} districts in districtContent.js!`);
