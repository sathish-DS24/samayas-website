import fs from 'fs';

let fileContent = fs.readFileSync('./src/data/districtContent.js', 'utf-8');

// Strict title template definitions, early-keyword taglines, varied meta description starts & highest-volume first destinations
const fineTunedData = {
  tiruchirappalli: {
    heroTagline:
      'Planning a trip from Trichy? Book a 24/7 one-way taxi with SAMAYAS from the iconic Rock Fort and Srirangam Temple to anywhere in Tamil Nadu.',
    metaTitle: 'Trichy One-Way Taxi | 24×7 Cab Booking | SAMAYAS',
    metaDescription:
      'Travel comfortably from Trichy (Tiruchirappalli), Tamil Nadu. Direct cabs to Chennai, Madurai, Srirangam & Tanjore. Airport drops & Hatchbacks from ₹10/km. Book online today with SAMAYAS.',
  },
  ariyalur: {
    heroTagline:
      'Travel anywhere from Ariyalur with ease! Book a 24/7 one-way taxi with SAMAYAS from the cement hub and UNESCO heritage at Gangaikonda Cholapuram.',
    metaTitle: 'Book One-Way Taxi from Ariyalur | No Return Fare | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Ariyalur? Direct one-way taxi to Gangaikonda Cholapuram, Trichy Airport & Chennai. Transparent per-km rates with zero return fee.',
  },
  chengalpattu: {
    heroTagline:
      'Heading out from Chengalpattu? Book a 24/7 one-way taxi with SAMAYAS from Mahindra World City IT hubs and Mahabalipuram coastal resorts.',
    metaTitle: 'Chengalpattu Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Need an airport transfer from Chengalpattu? Direct one-way cabs to Mahabalipuram coastal resorts, Chennai Airport, Mahindra World City & Puducherry. Instant booking confirmation.',
  },
  chennai: {
    heroTagline:
      'Booking a taxi from Chennai? Book your 24/7 one-way cab with SAMAYAS from Central Station, Airport, and OMR IT corridor to any district in Tamil Nadu.',
    metaTitle: 'One-Way Cab from Chennai | Book Online 24×7 | SAMAYAS',
    metaDescription:
      'Book a taxi for your next trip from Chennai, Tamil Nadu. Direct one-way cabs to Puducherry, Trichy, Bengaluru & Tirupati. Doorstep pickup available 24 hours a day.',
  },
  coimbatore: {
    heroTagline:
      'Explore Tamil Nadu from Coimbatore! Book a 24/7 one-way taxi with SAMAYAS from the Manchester of South India to Ooty hills, Isha Yoga, and beyond.',
    metaTitle: 'Coimbatore One-Way Taxi | 24×7 Cab Booking | SAMAYAS',
    metaDescription:
      'Travel comfortably from Coimbatore, Tamil Nadu. Direct cabs to Ooty, Mysuru, Isha Yoga Center, Chennai & Bengaluru. Available 24×7 with zero return fare.',
  },
  cuddalore: {
    heroTagline:
      'Need a one-way cab from Cuddalore? Book a 24/7 taxi with SAMAYAS from NLC Neyveli power complexes and Chidambaram Natarajar Temple.',
    metaTitle: 'Book One-Way Taxi from Cuddalore | No Return Fare | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Cuddalore? Direct cabs to Puducherry, Chidambaram Natarajar Temple, Neyveli & Chennai. Reserve your cab now with SAMAYAS.',
  },
  dharmapuri: {
    heroTagline:
      'Planning a journey from Dharmapuri? Book a 24/7 one-way taxi with SAMAYAS from Hogenakkal Waterfalls and Adhiyaman Fort to Bengaluru and Salem.',
    metaTitle: 'Dharmapuri Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Need a cab for your trip from Dharmapuri? Direct one-way rides to Hogenakkal Falls, Bengaluru, Salem & Hosur. Transparent per-km rates with zero return fee.',
  },
  dindigul: {
    heroTagline:
      'Heading to the hills or outstation from Dindigul? Book a 24/7 one-way taxi with SAMAYAS from the Rock Fort and Palani Murugan Temple to Kodaikanal.',
    metaTitle: 'One-Way Cab from Dindigul | Book Online 24×7 | SAMAYAS',
    metaDescription:
      'Travel comfortably from Dindigul, Tamil Nadu. Direct one-way cabs to Kodaikanal, Palani, Madurai & Trichy. Experienced hill drivers available. Book online today.',
  },
  erode: {
    heroTagline:
      'Travel anywhere from Erode! Book a 24/7 one-way taxi with SAMAYAS from the Turmeric City, Texvalley textile markets, and Bhavani Sangameswarar Temple.',
    metaTitle: 'Erode One-Way Taxi | 24×7 Cab Booking | SAMAYAS',
    metaDescription:
      'Book a taxi for your next trip from Erode, Tamil Nadu. Direct cabs to Coimbatore, Salem, Tiruppur, Ooty & Bengaluru. Instant booking confirmation.',
  },
  kallakurichi: {
    heroTagline:
      'Looking for a reliable cab from Kallakurichi? Book a 24/7 one-way taxi with SAMAYAS from Asia\'s top sugar mills and Kalvarayan Hills eco-tourism.',
    metaTitle: 'Book One-Way Taxi from Kallakurichi | No Return Fare | SAMAYAS',
    metaDescription:
      'Travel comfortably from Kallakurichi, Tamil Nadu. Direct one-way cabs to Kalvarayan Hills, Salem, Chennai, Trichy & Puducherry. Available 24×7 with zero return fare.',
  },
  kanchipuram: {
    heroTagline:
      'Planning a trip from Silk City Kanchipuram? Book a 24/7 one-way taxi with SAMAYAS from Kamakshi Amman Temple to Sriperumbudur SEZ industrial hubs.',
    metaTitle: 'Kanchipuram Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Need an airport transfer from Kanchipuram? Direct cabs to Chennai Airport, Sriperumbudur SEZ, Puducherry & Bengaluru. Reserve your cab now with SAMAYAS.',
  },
  kanyakumari: {
    heroTagline:
      'Starting your trip from mainland India\'s southernmost tip? Book a 24/7 one-way taxi with SAMAYAS from Vivekananda Rock and Sunset Point in Kanyakumari.',
    metaTitle: 'One-Way Cab from Kanyakumari | Book Online 24×7 | SAMAYAS',
    metaDescription:
      'Travel comfortably from Kanyakumari, Tamil Nadu. Direct one-way cabs to Trivandrum Airport, Madurai, Tirunelveli & Rameshwaram. Transparent per-km rates.',
  },
  karur: {
    heroTagline:
      'Need an outstation cab from Karur? Book an executive 24/7 one-way taxi with SAMAYAS from Asia\'s Home Textile Export Hub and Pasupatheeswarar Temple.',
    metaTitle: 'Karur One-Way Taxi | 24×7 Cab Booking | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Karur? Direct cabs to Trichy Airport, Coimbatore, Salem, Erode & Chennai. Instant booking confirmation.',
  },
  krishnagiri: {
    heroTagline:
      'Travel anywhere from Krishnagiri! Book a 24/7 one-way taxi with SAMAYAS from the Mango Capital and KRP Dam to Hosur industrial SEZ and Bengaluru Airport.',
    metaTitle: 'Book One-Way Taxi from Krishnagiri | No Return Fare | SAMAYAS',
    metaDescription:
      'Need an airport transfer from Krishnagiri? Direct cabs to Bengaluru Airport, Hosur, Salem, Chennai & Vellore. Doorstep pickup available 24 hours a day.',
  },
  madurai: {
    heroTagline:
      'Need a one-way cab from Madurai? Book a 24/7 taxi with SAMAYAS from Meenakshi Amman Temple and Madurai Airport to Rameshwaram, Kodaikanal, and Kanyakumari.',
    metaTitle: 'Madurai Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Travel comfortably from Madurai, Tamil Nadu. Direct cabs to Rameshwaram, Kodaikanal, Kanyakumari, Trichy & Chennai. Book online today with SAMAYAS.',
  },
  mayiladuthurai: {
    heroTagline:
      'Planning a temple pilgrimage from Mayiladuthurai? Book a 24/7 one-way taxi with SAMAYAS from Mayuranathaswamy Temple and Vaitheeswaran Kovil to Poompuhar.',
    metaTitle: 'One-Way Cab from Mayiladuthurai | Book Online 24×7 | SAMAYAS',
    metaDescription:
      'Book a taxi for your next trip from Mayiladuthurai, Tamil Nadu. Direct cabs to Kumbakonam, Chidambaram, Thanjavur, Trichy & Chennai. Available 24×7 with zero return fare.',
  },
  nagapattinam: {
    heroTagline:
      'Heading out from coastal Nagapattinam? Book a 24/7 one-way taxi with SAMAYAS from the historic port and Velankanni Basilica to Nagore Dargah.',
    metaTitle: 'Nagapattinam One-Way Taxi | 24×7 Cab Booking | SAMAYAS',
    metaDescription:
      'Travel comfortably from Nagapattinam, Tamil Nadu. Direct cabs to Velankanni Basilica, Thanjavur, Trichy, Chennai & Rameshwaram. Reserve your cab now.',
  },
  namakkal: {
    heroTagline:
      'Travel from the Transport Capital of Namakkal! Book a 24/7 one-way taxi with SAMAYAS from the 18-foot Anjaneyar Temple and Kolli Hills 70 hairpin bends.',
    metaTitle: 'Book One-Way Taxi from Namakkal | No Return Fare | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Namakkal? Direct cabs to Salem, Kolli Hills, Trichy, Erode & Bengaluru. Transparent per-km rates with zero return fee.',
  },
  nilgiris: {
    heroTagline:
      'Exploring the Blue Mountains of Nilgiris? Book a 24/7 mountain one-way taxi with SAMAYAS from Ooty, Coonoor tea gardens, and Doddabetta Peak.',
    metaTitle: 'Nilgiris Taxi Service | Ooty Hill & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Travel comfortably from Nilgiris (Ooty & Coonoor), Tamil Nadu. Direct hill cabs to Coimbatore Airport, Mysuru, Bengaluru & Mettupalayam. Instant booking confirmation.',
  },
  perambalur: {
    heroTagline:
      'Looking for an outstation cab from Perambalur? Book a 24/7 one-way taxi with SAMAYAS from MRF Tyre plant and Dhanalakshmi Srinivasan Educational Hub.',
    metaTitle: 'One-Way Cab from Perambalur | Book Online 24×7 | SAMAYAS',
    metaDescription:
      'Need an airport transfer from Perambalur? Direct cabs to Trichy Airport, Chennai, Salem & Ariyalur. Doorstep pickup available 24 hours a day.',
  },
  pudukkottai: {
    heroTagline:
      'Planning a trip from Princely Pudukkottai? Book a 24/7 one-way taxi with SAMAYAS from Sittanavasal Cave Paintings and Thirumayam Fort to Chettinad.',
    metaTitle: 'Pudukkottai One-Way Taxi | 24×7 Cab Booking | SAMAYAS',
    metaDescription:
      'Travel comfortably from Pudukkottai, Tamil Nadu. Direct cabs to Trichy Airport, Chettinad, Madurai, Thanjavur & Rameshwaram. Book online today with SAMAYAS.',
  },
  ramanathapuram: {
    heroTagline:
      'Heading to Sacred Rameshwaram or outstation from Ramanathapuram? Book a 24/7 one-way taxi with SAMAYAS from Ramanathapuram Palace to Dhanushkodi.',
    metaTitle: 'Book One-Way Taxi from Ramanathapuram | No Return Fare | SAMAYAS',
    metaDescription:
      'Book a taxi for your next trip from Ramanathapuram & Rameshwaram. Direct cabs to Sacred Rameshwaram, Madurai, Dhanushkodi, Trichy & Kanyakumari. Available 24×7.',
  },
  ranipet: {
    heroTagline:
      'Need a corporate or outstation cab from Ranipet? Book a 24/7 one-way taxi with SAMAYAS from Finished Leather export factories and BHEL Heavy Boiler Plant.',
    metaTitle: 'Ranipet Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Need an airport transfer from Ranipet? Direct cabs to Chennai Airport, Vellore, Kanchipuram, Tirupati & Bengaluru. Reserve your cab now with SAMAYAS.',
  },
  salem: {
    heroTagline:
      'Travel anywhere from the Steel City of Salem! Book a 24/7 one-way taxi with SAMAYAS from Yercaud hills and Mettur Dam to Bengaluru and Coimbatore.',
    metaTitle: 'One-Way Cab from Salem | Book Online 24×7 | SAMAYAS',
    metaDescription:
      'Travel comfortably from Salem, Tamil Nadu. Direct cabs to Bengaluru, Yercaud, Coimbatore, Chennai & Mettur. Transparent per-km rates with zero return fee.',
  },
  sivaganga: {
    heroTagline:
      'Exploring Chettinad heritage from Sivaganga? Book a 24/7 one-way taxi with SAMAYAS from Karaikudi heritage mansions and Pillayarpatti Cave Temple.',
    metaTitle: 'Sivaganga One-Way Taxi | Karaikudi & Chettinad Cabs | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Sivaganga & Karaikudi? Direct cabs to Madurai Airport, Chettinad heritage mansions, Trichy & Rameshwaram. Instant booking confirmation.',
  },
  tenkasi: {
    heroTagline:
      'Planning a waterfall visit or outstation trip from Tenkasi? Book a 24/7 one-way taxi with SAMAYAS from Courtallam Waterfalls and Kasi Viswanathar Temple.',
    metaTitle: 'Book One-Way Taxi from Tenkasi | Courtallam Cabs | SAMAYAS',
    metaDescription:
      'Travel comfortably from Tenkasi & Courtallam, Tamil Nadu. Direct cabs to Courtallam Waterfalls, Trivandrum Airport, Tirunelveli, Madurai & Kanyakumari. Available 24×7.',
  },
  thanjavur: {
    heroTagline:
      'Visiting the UNESCO Big Temple in Thanjavur? Book a 24/7 one-way taxi with SAMAYAS from Brihadeeswarar Temple and Maratha Palace to Kumbakonam.',
    metaTitle: 'Thanjavur Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Need an airport transfer from Thanjavur? Direct cabs to Trichy Airport, Kumbakonam, Madurai, Chennai & Velankanni. Book online today with SAMAYAS.',
  },
  theni: {
    heroTagline:
      'Heading to mountain resorts from Theni? Book a 24/7 mountain one-way taxi with SAMAYAS from Cardamom Valley, Munnar, and Meghamalai to Suruli Falls.',
    metaTitle: 'One-Way Cab from Theni | Munnar & Meghamalai Cabs | SAMAYAS',
    metaDescription:
      'Travel comfortably from Theni, Tamil Nadu. Direct hill cabs to Munnar, Meghamalai, Madurai Airport, Thekkady & Kodaikanal. Experienced mountain drivers. Doorstep pickup 24/7.',
  },
  thoothukudi: {
    heroTagline:
      'Travelling from the Pearl City of Thoothukudi? Book a 24/7 one-way taxi with SAMAYAS from Tuticorin Port and Tiruchendur Murugan Temple to Madurai Airport.',
    metaTitle: 'Thoothukudi One-Way Taxi | Tuticorin & Temple Cabs | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Thoothukudi (Tuticorin)? Direct cabs to Tiruchendur Murugan Temple, Tirunelveli, Madurai & Kanyakumari. Reserve your cab now.',
  },
  tirunelveli: {
    heroTagline:
      'Looking for 24/7 one-way cabs in Tirunelveli? Book a taxi with SAMAYAS from the Halwa City and Nellaiappar Temple to Manjolai Hills and Kanyakumari.',
    metaTitle: 'Book One-Way Taxi from Tirunelveli | No Return Fare | SAMAYAS',
    metaDescription:
      'Travel comfortably from Tirunelveli, Tamil Nadu. Direct cabs to Kanyakumari, Madurai, Trivandrum Airport, Tuticorin & Courtallam. Instant booking confirmation.',
  },
  tirupattur: {
    heroTagline:
      'Planning a weekend trip to Yelagiri Hills from Tirupattur? Book a 24/7 one-way taxi with SAMAYAS from Jolarpettai Junction and Kavalur Observatory to Bengaluru.',
    metaTitle: 'Tirupattur Taxi Service | Yelagiri Hill & Station Cabs | SAMAYAS',
    metaDescription:
      'Need an outstation cab from Tirupattur & Jolarpettai? Direct cabs to Yelagiri Hills, Bengaluru, Chennai, Vellore & Krishnagiri. Transparent per-km rates with zero return fee.',
  },
  tiruppur: {
    heroTagline:
      'Need an executive cab from Knitwear Capital Tiruppur? Book a 24/7 one-way taxi with SAMAYAS from Netaji Apparel Park and Avinashi Temple to Coimbatore Airport.',
    metaTitle: 'One-Way Cab from Tiruppur | Book Online 24×7 | SAMAYAS',
    metaDescription:
      'Need an airport transfer from Tiruppur, Tamil Nadu? Direct cabs to Coimbatore Airport, Erode, Salem, Ooty & Bengaluru. Available 24×7 with zero return fee.',
  },
  tiruvallur: {
    heroTagline:
      'Heading out from Tiruvallur? Book a 24/7 one-way taxi with SAMAYAS from Veeraraghava Swamy Temple and Tiruttani Murugan Temple to Chennai Airport.',
    metaTitle: 'Tiruvallur One-Way Taxi | 24×7 Cab Booking | SAMAYAS',
    metaDescription:
      'Book a taxi for your next trip from Tiruvallur, Tamil Nadu. Direct cabs to Chennai Airport, Tirupati, Tiruttani, Kanchipuram & Bengaluru. Book online today.',
  },
  tiruvannamalai: {
    heroTagline:
      'Visiting the Agni Sthalam of Tiruvannamalai? Book a 24/7 one-way taxi with SAMAYAS from Arunachaleswarar Temple, Girivalam Path, and Ramana Ashram.',
    metaTitle: 'Book One-Way Taxi from Tiruvannamalai | No Return Fare | SAMAYAS',
    metaDescription:
      'Travel comfortably from Tiruvannamalai, Tamil Nadu. Direct cabs to Chennai Airport, Puducherry, Bengaluru, Vellore & Salem. Reserve your cab now with SAMAYAS.',
  },
  tiruvarur: {
    heroTagline:
      'Traveling from the Chariot Capital of Tiruvarur? Book a 24/7 one-way taxi with SAMAYAS from Thyagaraja Swamy Temple and Carnatic Trinity birthplaces to Trichy.',
    metaTitle: 'Tiruvarur Taxi Service | Airport & Outstation Cabs | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Tiruvarur, Tamil Nadu? Direct cabs to Trichy Airport, Thanjavur, Velankanni, Nagapattinam & Chennai. Instant booking confirmation.',
  },
  vellore: {
    heroTagline:
      'Need a medical or outstation cab from Vellore? Book a 24/7 one-way taxi with SAMAYAS from CMC Hospital, Sripuram Golden Temple, and Katpadi Junction.',
    metaTitle: 'One-Way Cab from Vellore | CMC Hospital & Airport Cabs | SAMAYAS',
    metaDescription:
      'Need a medical or airport transfer from Vellore & Katpadi? Direct cabs to CMC Hospital, Chennai Airport, Bengaluru, Tirupati & Sripuram. Doorstep pickup 24/7.',
  },
  viluppuram: {
    heroTagline:
      'Heading out from Viluppuram transit crossroads? Book a 24/7 one-way taxi with SAMAYAS from Gingee Fort and Melmalayanur Temple to Puducherry and Chennai Airport.',
    metaTitle: 'Viluppuram One-Way Taxi | Puducherry & Gingee Cabs | SAMAYAS',
    metaDescription:
      'Travel comfortably from Viluppuram, Tamil Nadu. Direct cabs to Puducherry, Chennai Airport, Trichy, Gingee Fort & Tiruvannamalai. Transparent per-km rates.',
  },
  virudhunagar: {
    heroTagline:
      'Planning a trip from Virudhunagar district? Book a 24/7 one-way taxi with SAMAYAS from Sivakasi fireworks hub, Srivilliputhur Andal Temple, and Rajapalayam.',
    metaTitle: 'Book One-Way Taxi from Virudhunagar | Sivakasi & Srivilliputhur Cabs | SAMAYAS',
    metaDescription:
      'Looking for an outstation cab from Virudhunagar, Sivakasi & Srivilliputhur? Direct cabs to Madurai Airport, Sivakasi, Rajapalayam & Tirunelveli. Available 24×7.',
  },
};

let updatedCount = 0;
for (const [slug, data] of Object.entries(fineTunedData)) {
  if (fileContent.includes(`${slug}: {`)) {
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
console.log(`Successfully fine-tuned metadata for all ${updatedCount} districts in districtContent.js!`);
