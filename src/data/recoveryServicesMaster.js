export const recoveryServicesDataset = [
  {
    id: 'car-recovery',
    slug: 'car-recovery',
    serviceName: '24/7 Car Recovery & Towing Service',
    shortName: 'Car Recovery',
    tagline: 'Emergency flatbed & wheel-lift car towing across Tamil Nadu',
    description: 'Stuck with a stalled, broken down, or damaged car? SAMAYAS provides 24/7 emergency car recovery and towing for all hatchbacks, sedans, SUVs, and luxury vehicles with 15-30 minute fast dispatch.',
    supportedVehicles: ['Hatchbacks', 'Sedans', 'SUVs', 'Luxury Cars', 'EV Cars'],
    commonProblems: ['Engine Overheating & Failure', 'Gearbox / Clutch Malfunction', 'Accident Damage', 'Brake System Lock', 'Battery / Electrical Shutdown'],
    process: [
      { step: '01', title: 'Emergency Call or Booking', desc: 'Call our 24/7 hotline or share your location online.' },
      { step: '02', title: 'Live Location & Dispatch', desc: 'Nearest flatbed / wheel-lift recovery vehicle is assigned.' },
      { step: '03', title: 'Safe Loading & Securing', desc: 'Certified operators load your vehicle using zero-damage wheel straps.' },
      { step: '04', title: 'Transport to Destination', desc: 'Your car is safely towed to your home, authorized service center, or garage.' }
    ],
    benefits: [
      { title: '15-30 Min Rapid Response', desc: 'Fastest emergency dispatch on city roads & highways.' },
      { title: 'Zero Damage Towing', desc: 'Hydraulic flatbed trucks prevent bumper, axle, and transmission wear.' },
      { title: '24/7 365 Days Operation', desc: 'Round-the-clock emergency team on standby.' }
    ],
    pricing: {
      callOutFee: '₹800 Base Hook Charge',
      perKmRate: '₹40 / Km Towing Rate',
      nightCharges: '₹200 (10 PM to 6 AM)',
      waitingCharges: '₹100 / Hour'
    },
    faq: [
      { q: 'How quickly does a car recovery truck arrive?', a: 'In major Tamil Nadu cities (Chennai, Trichy, Coimbatore, Madurai), our average arrival time is 15 to 30 minutes. Highway response is 30 to 45 minutes.' },
      { q: 'Is flatbed towing safe for automatic & luxury cars?', a: 'Yes! Hydraulic flatbed towing is the safest method for automatic, AWD, EV, and luxury cars because all 4 wheels remain off the ground.' }
    ],
    reviews: [
      { name: 'Karthik V.', rating: 5, text: 'My car stalled near Trichy airport at 11 PM. SAMAYAS flatbed truck arrived in 20 mins and towed it safely to the service center.', location: 'Tiruchirappalli', date: '2026-07-20' }
    ],
    seo: {
      title: '24/7 Car Recovery & Towing Service | Car Tow Truck Near Me | SAMAYAS',
      description: 'Book 24/7 emergency car recovery & flatbed towing across Tamil Nadu. Safe zero-damage towing for hatchbacks, sedans, SUVs & luxury cars.',
      keywords: ['car recovery', 'car towing service', 'car tow truck near me', 'emergency car recovery', 'flatbed car towing']
    }
  },

  {
    id: 'bike-recovery',
    slug: 'bike-recovery',
    serviceName: 'Two-Wheeler & Superbike Towing Service',
    shortName: 'Bike Recovery',
    tagline: 'Safe, specialized motorcycle towing & breakdown assistance',
    description: 'Specialized 2-wheeler recovery for scooters, commuter bikes, royal enfields, and premium superbikes using specialized soft-strap motorcycle carriers.',
    supportedVehicles: ['Scooters', 'Commuter Motorcycles', 'Royal Enfield', 'Superbikes (300cc-1000cc+)', 'Electric Two-Wheelers'],
    commonProblems: ['Puncture / Flat Tyre', 'Chain Breakage', 'Engine Seizure / No Start', 'Clutch Cable Snap', 'Battery Drain'],
    process: [
      { step: '01', title: 'Share Bike Location', desc: 'Share your exact breakdown location via GPS or call.' },
      { step: '02', title: 'Bike Ramp Truck Arrival', desc: 'Specialized motorcycle carrier with ramp arrives.' },
      { step: '03', title: 'Soft-Strap Tie Down', desc: 'Wheel clamps and padded soft straps secure your bike scratch-free.' },
      { step: '04', title: 'Workshop Drop', desc: 'Towed directly to your preferred mechanic or home.' }
    ],
    benefits: [
      { title: 'Scratch-Free Tie Down', desc: 'Specialized soft straps protect body panels and handlebars.' },
      { title: 'Superbike Certified Ramps', desc: 'Low-incline hydraulic ramps for heavy 200kg+ motorcycles.' }
    ],
    pricing: {
      callOutFee: '₹450 Base Charge',
      perKmRate: '₹25 / Km',
      nightCharges: '₹150',
      waitingCharges: '₹80 / Hour'
    },
    faq: [
      { q: 'Can you tow heavy superbikes or Royal Enfields safely?', a: 'Yes, our bike recovery trucks carry specialized wheel chocks and heavy-duty soft straps built for 500cc+ superbikes.' }
    ],
    reviews: [
      { name: 'Arun Kumar', rating: 5, text: 'Chain snapped on ECR highway near Mahabalipuram. Bike recovery vehicle arrived in 25 mins and delivered my Himalayan safely.', location: 'Chennai', date: '2026-07-24' }
    ],
    seo: {
      title: '2-Wheeler & Superbike Recovery Service | Bike Towing Near Me | SAMAYAS',
      description: 'Book 24/7 two-wheeler & superbike towing service across Tamil Nadu. Scratch-free soft strap loading for all motorcycles.',
      keywords: ['bike recovery', 'motorcycle towing near me', 'superbike towing', 'two wheeler breakdown assistance', 'scooter towing']
    }
  },

  {
    id: 'breakdown-assistance',
    slug: 'breakdown-assistance',
    serviceName: '24/7 Highway & City Breakdown Assistance',
    shortName: 'Breakdown Assistance',
    tagline: 'On-site mechanical repair, battery jump start & towing help',
    description: 'Instant roadside breakdown assistance for mechanical failures, electrical issues, battery jump starts, and tyre repairs anywhere on city streets or National Highways.',
    supportedVehicles: ['Cars', 'Bikes', 'SUVs', 'Light Commercial Vehicles'],
    commonProblems: ['Engine Overheating', 'Battery Dead', 'Flat Tyre', 'Fuel Empty', 'Key Locked Inside Car'],
    process: [
      { step: '01', title: 'Call Emergency Desk', desc: 'Explain your breakdown issue to our technical hotline.' },
      { step: '02', title: 'Patrol Vehicle Dispatched', desc: 'Mechanic or recovery van sent to your exact location.' },
      { step: '03', title: 'On-Site Repair / Towing', desc: 'Minor repairs solved on-site, or towed to nearest garage.' }
    ],
    benefits: [
      { title: 'On-Site Fix Whenever Possible', desc: 'We try to fix minor issues on-site to get you moving fast.' },
      { title: 'Highway Emergency Response', desc: 'Coverage on all NH44, NH45, NH83, ECR & SH highways.' }
    ],
    pricing: {
      callOutFee: '₹600 On-Site Visit Fee',
      perKmRate: '₹35 / Km (If Towing Needed)',
      nightCharges: '₹150',
      waitingCharges: '₹80 / Hour'
    },
    faq: [
      { q: 'What happens if the mechanic cannot fix my car breakdown on-site?', a: 'If on-site repair is not possible, our recovery truck immediately hauls your vehicle to the nearest authorized workshop.' }
    ],
    reviews: [
      { name: 'Prabakar M.', rating: 5, text: 'Engine overheated on GST Road near Villupuram. SAMAYAS mechanic arrived, diagnosed radiator leak, and arranged towing. Great service!', location: 'Viluppuram', date: '2026-07-15' }
    ],
    seo: {
      title: '24/7 Roadside Breakdown Assistance | Emergency Highway Help | SAMAYAS',
      description: 'Get instant 24/7 roadside breakdown assistance across Tamil Nadu. On-site mechanic repairs, jump start, flat tyre & towing help.',
      keywords: ['breakdown assistance', 'roadside assistance near me', 'highway breakdown help', 'emergency car repair on road']
    }
  },

  {
    id: 'accident-recovery',
    slug: 'accident-recovery',
    serviceName: 'Emergency Accident Recovery & Crane Service',
    shortName: 'Accident Recovery',
    tagline: 'Professional crane lifting, winching & accident vehicle towing',
    description: 'Specialized accident recovery service for vehicles involved in collisions, off-road ditch slips, roll-overs, or heavy structural damage using hydraulic cranes and winches.',
    supportedVehicles: ['Cars', 'SUVs', 'Buses', 'Trucks', 'Commercial Vehicles'],
    commonProblems: ['Vehicle Off-Road Ditch Slip', 'Severe Front/Rear Crash Damage', 'Overturned Vehicle', 'Axle / Suspension Breakage'],
    process: [
      { step: '01', title: 'Emergency Dispatch', desc: 'High-priority dispatch of hydraulic crane & flatbed.' },
      { step: '02', title: 'Winch & Crane Lifting', desc: 'Careful winching and crane hoisting to prevent further damage.' },
      { step: '03', title: 'Police & Insurance Yard Delivery', desc: 'Towed directly to insurance surveyor yard or bodyshop.' }
    ],
    benefits: [
      { title: 'Hydraulic Winching & Crane', desc: 'Heavy winches pull vehicles safely out of ditches & embankments.' },
      { title: 'Insurance Documentation Help', desc: 'Photos & bills provided for smooth insurance claims.' }
    ],
    pricing: {
      callOutFee: '₹1,500 Base Crane & Winch Fee',
      perKmRate: '₹50 / Km Towing',
      nightCharges: '₹300',
      waitingCharges: '₹150 / Hour'
    },
    faq: [
      { q: 'Can you assist with insurance claims documentation for accident recovery?', a: 'Yes! We provide itemized GST bills, location receipts, and vehicle damage photos required by insurance surveyors.' }
    ],
    reviews: [
      { name: 'Srinivasan K.', rating: 5, text: 'Car slipped into a highway ditch during heavy rain. SAMAYAS winching truck lifted my SUV out in 30 mins with zero extra damage.', location: 'Salem', date: '2026-07-11' }
    ],
    seo: {
      title: 'Accident Recovery & Crane Service | Emergency Towing | SAMAYAS',
      description: 'Emergency 24/7 accident vehicle recovery, crane lifting & winching service across Tamil Nadu. Safe handling & insurance documentation.',
      keywords: ['accident recovery', 'crane towing service', 'accident car recovery', 'vehicle winching service', 'emergency crane tow']
    }
  },

  {
    id: 'flatbed-towing',
    slug: 'flatbed-towing',
    serviceName: 'Hydraulic Flatbed Tow Truck Service',
    shortName: 'Flatbed Towing',
    tagline: 'Zero-touch hydraulic tilt-tray flatbed trucks for premium & automatic cars',
    description: 'The gold standard in vehicle transport. Full-floor hydraulic tilt-tray flatbed trucks carry your entire car off the ground, ideal for automatic, low-clearance, EV, and luxury vehicles.',
    supportedVehicles: ['Automatic Cars', 'Luxury Vehicles (BMW, Audi, Mercedes, Porsche)', 'EVs (Tesla, Nexon EV, BYD)', 'Low Ground Clearance Cars', 'Showroom New Cars'],
    commonProblems: ['Automatic Transmission Lock', 'AWD System Sensitivity', 'Air Suspension Failure', 'Showroom Delivery Transport'],
    process: [
      { step: '01', title: 'Hydraulic Deck Lowering', desc: 'Flatbed deck lowers flush to the ground.' },
      { step: '02', title: 'Smooth Winch Pull', desc: 'Vehicle winched gently onto tilt tray floor.' },
      { step: '03', title: '4-Wheel Strap Locking', desc: 'Heavy duty wheel harnesses secure vehicle.' }
    ],
    benefits: [
      { title: 'Zero Ground Contact', desc: 'All 4 tires rest on flatbed floor — 0km wear on transmission or tyres.' },
      { title: 'Ideal for Low Clearance Cars', desc: 'Ultra-low ramp angle prevents front bumper scraping.' }
    ],
    pricing: {
      callOutFee: '₹1,200 Base Flatbed Fee',
      perKmRate: '₹45 / Km',
      nightCharges: '₹200',
      waitingCharges: '₹100 / Hour'
    },
    faq: [
      { q: 'Why is flatbed towing recommended for automatic & electric cars?', a: 'Towing an automatic or EV with wheels on the ground causes severe gearbox and electric motor damage. Flatbed carries the car completely off the ground.' }
    ],
    reviews: [
      { name: 'Dr. Vikram Seth', rating: 5, text: 'Transported my Mercedes C-Class on SAMAYAS flatbed from Coimbatore to Chennai. Flawless zero-scratch delivery.', location: 'Coimbatore', date: '2026-07-28' }
    ],
    seo: {
      title: 'Flatbed Tow Truck Service | Hydraulic Car Carrier | SAMAYAS',
      description: 'Book 24/7 hydraulic flatbed tow truck service across Tamil Nadu. Zero-ground contact towing for automatic, EV, and luxury cars.',
      keywords: ['flatbed towing', 'flatbed tow truck near me', 'hydraulic car carrier', 'luxury car flatbed towing', 'ev flatbed towing']
    }
  },

  {
    id: 'highway-recovery',
    slug: 'highway-recovery',
    serviceName: 'Expressway & Highway Vehicle Recovery',
    shortName: 'Highway Recovery',
    tagline: 'High-speed emergency towing & breakdown assistance on National Highways',
    description: 'Stuck on NH44, NH45, NH83, ECR, or State Highways? Our mobile highway patrol units arrive quickly to rescue stranded motorists and clear dangerous highway lanes.',
    supportedVehicles: ['Cars', 'SUVs', 'Bikes', 'Buses', 'Trucks', 'Trailers'],
    commonProblems: ['High-Speed Tyre Burst', 'Radiator Hose Burst', 'Highway Accident', 'Fuel Exhaustion on Bypass'],
    process: [
      { step: '01', title: 'Share Highway Landmark & GPS', desc: 'Share your nearest toll plaza, kilometer stone, or WhatsApp live location.' },
      { step: '02', title: 'Highway Patrol Safety Cones', desc: 'Recovery crew sets up reflective warning cones behind your car.' },
      { step: '03', title: 'Rapid Hook & Tow', desc: 'Vehicle towed safely off the high-speed lane.' }
    ],
    benefits: [
      { title: 'Reflective Safety Patrol', desc: 'Safety cones & LED lightbars protect you from oncoming highway traffic.' },
      { title: 'Toll Plaza & Bypass Coverage', desc: 'Stationed near major toll gates across Tamil Nadu highways.' }
    ],
    pricing: {
      callOutFee: '₹1,000 Highway Base Fee',
      perKmRate: '₹40 / Km',
      nightCharges: '₹200',
      waitingCharges: '₹100 / Hour'
    },
    faq: [
      { q: 'How do I specify my location when stuck on a rural highway without exact address?', a: 'Simply tap our "Share Live Location" button on WhatsApp or mention the nearest highway kilometer marker or toll plaza name.' }
    ],
    reviews: [
      { name: 'Gopalan K.', rating: 5, text: 'Tyre burst on Madurai-Trichy NH44 highway at 2 AM. SAMAYAS highway recovery truck reached in 30 mins with full safety lights.', location: 'Madurai', date: '2026-07-23' }
    ],
    seo: {
      title: '24/7 Highway Vehicle Recovery | Expressway Towing | SAMAYAS',
      description: 'Emergency highway recovery & roadside assistance on NH44, NH45, ECR, NH83. Fast patrol dispatch with live GPS location sharing.',
      keywords: ['highway recovery', 'expressway towing service', 'nh45 roadside assistance', 'ecr towing service', 'highway tow truck']
    }
  },

  {
    id: 'battery-jump-start',
    slug: 'battery-jump-start',
    serviceName: '24/7 Battery Jump Start & Booster Service',
    shortName: 'Battery Jump Start',
    tagline: 'On-site battery boost & voltage testing for dead car/bike batteries',
    description: 'Car or bike battery drained after leaving headlights on or long parking? Our technician arrives with heavy-duty 12V/24V jump starters to revive your battery in minutes.',
    supportedVehicles: ['Hatchbacks', 'Sedans', 'SUVs', 'Luxury Cars', 'Bikes & Scooters', 'Commercial Vehicles'],
    commonProblems: ['Headlights Left On Overnight', 'Old Drained Battery', 'Alternator Charge Issue', 'Cold Start Failure'],
    process: [
      { step: '01', title: 'Technician Dispatched', desc: 'Patrol mechanic equipped with digital battery tester & jump pack.' },
      { step: '02', title: 'Voltage & Alternator Test', desc: 'Tests battery health & alternator charging circuit.' },
      { step: '03', title: 'Instant Jump Boost', desc: 'Engine boosted safely without electrical voltage spikes.' }
    ],
    benefits: [
      { title: 'Surge-Protected Booster Packs', desc: 'Advanced electronic surge protection prevents ECU damage.' },
      { title: 'New Battery Replacement Option', desc: 'Can deliver brand new Exide/Amaron battery on-site if needed.' }
    ],
    pricing: {
      callOutFee: '₹400 Jump Start Fee',
      perKmRate: 'N/A (Fixed On-Site Service)',
      nightCharges: '₹100',
      waitingCharges: '₹50'
    },
    faq: [
      { q: 'Will jump starting harm my car’s ECU computer or sensors?', a: 'No! Our technicians use professional surge-protected booster packs specifically designed for modern computer-controlled cars.' }
    ],
    reviews: [
      { name: 'Nalini Chandran', rating: 5, text: 'Left car parking lights on while at work in Chennai. SAMAYAS arrived in 20 mins and jump-started my car instantly. Super service!', location: 'Chennai', date: '2026-07-19' }
    ],
    seo: {
      title: '24/7 Battery Jump Start Service | Car Battery Booster | SAMAYAS',
      description: 'Fast 24/7 battery jump start service across Tamil Nadu. Surge-protected booster packs for dead car and motorcycle batteries.',
      keywords: ['battery jump start', 'car battery boost near me', 'dead battery jump start', 'jump start service near me']
    }
  },

  {
    id: 'fuel-delivery',
    slug: 'fuel-delivery',
    serviceName: 'Emergency Fuel Delivery Service',
    shortName: 'Fuel Delivery',
    tagline: '5 to 10 Litres emergency Petrol or Diesel delivered to your location',
    description: 'Ran out of fuel on the road or highway? We deliver 5 to 10 litres of clean Petrol or Diesel in safety-certified containers directly to your vehicle location.',
    supportedVehicles: ['Cars', 'Bikes', 'SUVs', 'Trucks', 'Commercial Vehicles'],
    commonProblems: ['Fuel Gauge Failure', 'Stuck in Heavy Traffic Jam', 'Bypass Petrol Bunk Closed', 'Overcalculated Mileage'],
    process: [
      { step: '01', title: 'Specify Petrol/Diesel & Qty', desc: 'Tell us if you need Petrol or Diesel and your vehicle model.' },
      { step: '02', title: 'Container Fuel Transport', desc: 'Fuel fetched from authorized HPCL/IOCL bunk in metal safety cans.' },
      { step: '03', title: 'On-Site Fuel Pouring', desc: 'Technician pours fuel and bleeds diesel fuel line if airlocked.' }
    ],
    benefits: [
      { title: 'Authorized Petrol Bunk Fuel', desc: 'Pure unadulterated fuel fetched directly from HPCL/BPCL/IOCL bunks.' },
      { title: 'Diesel Airlock Priming', desc: 'Technician primes the diesel pump if your diesel engine airlocked.' }
    ],
    pricing: {
      callOutFee: '₹350 Delivery Fee + Actual Fuel Cost',
      perKmRate: 'N/A',
      nightCharges: '₹100',
      waitingCharges: '₹50'
    },
    faq: [
      { q: 'How much fuel do you deliver in emergency fuel service?', a: 'We deliver 5 litres (standard) up to 10 litres of Petrol or Diesel, enough to easily reach the nearest petrol station.' }
    ],
    reviews: [
      { name: 'Manoj R.', rating: 5, text: 'Ran out of diesel on Coimbatore bypass. SAMAYAS delivered 5L diesel in 25 mins and primed the engine pump. Saved my night!', location: 'Coimbatore', date: '2026-07-27' }
    ],
    seo: {
      title: 'Emergency Fuel Delivery Service | Petrol & Diesel On Demand | SAMAYAS',
      description: 'Ran out of fuel? Get 5-10L emergency Petrol or Diesel delivered to your car or bike anywhere in Tamil Nadu 24/7.',
      keywords: ['fuel delivery service', 'emergency petrol delivery', 'diesel delivery near me', 'out of fuel assistance']
    }
  },

  {
    id: 'flat-tyre-assistance',
    slug: 'flat-tyre-assistance',
    serviceName: 'On-Site Flat Tyre Repair & Replacement',
    shortName: 'Flat Tyre Assistance',
    tagline: 'Stepney tyre changing & tubeless puncture repair at your breakdown spot',
    description: 'Got a flat tyre or puncture? Our mobile tyre mechanic replaces your flat tyre with your spare stepney or performs tubeless puncture repairs on-site.',
    supportedVehicles: ['Hatchbacks', 'Sedans', 'SUVs', 'Bikes', 'Luxury Cars', 'LCVs'],
    commonProblems: ['Nail / Sharp Object Puncture', 'Slow Sidewall Leak', 'Spare Stepney Replacement Needed', 'Wheel Lug Nut Tight/Stuck'],
    process: [
      { step: '01', title: 'Share Location & Tyre Size', desc: 'Tell us if you have a spare stepney or need puncture repair.' },
      { step: '02', title: 'Mobile Jack & Wrench Arrival', desc: 'Mechanic arrives with hydraulic jack & impact wrench.' },
      { step: '03', title: 'Tyre Change & Inflation', desc: 'Stepney fitted and inflated to recommended PSI.' }
    ],
    benefits: [
      { title: 'Heavy Duty Impact Wrench', desc: 'Loosens over-tightened or rusted wheel lug nuts without damaging studs.' },
      { title: 'Tubeless Puncture Patching', desc: 'High-quality rubber plug repairs done right at your location.' }
    ],
    pricing: {
      callOutFee: '₹350 Stepney Change / Puncture Fee',
      perKmRate: 'N/A',
      nightCharges: '₹100',
      waitingCharges: '₹50'
    },
    faq: [
      { q: 'What if I do not have a working spare stepney tyre?', a: 'If your spare is flat, our technician takes your flat tyre to the nearest puncture shop, repairs it, and returns to refit it.' }
    ],
    reviews: [
      { name: 'Deepak V.', rating: 5, text: 'Flat tyre in Tanjore city with stuck lug nuts. The mechanic arrived with an electric impact wrench and changed stepney in 10 mins.', location: 'Thanjavur', date: '2026-07-16' }
    ],
    seo: {
      title: '24/7 Flat Tyre Assistance | On-Site Puncture Repair | SAMAYAS',
      description: 'On-site flat tyre change & tubeless puncture repair across Tamil Nadu. Quick stepney replacement at home or on the road.',
      keywords: ['flat tyre assistance', 'puncture repair near me', 'stepney tyre change service', 'roadside tyre repair']
    }
  },

  {
    id: 'ev-recovery',
    slug: 'ev-recovery',
    serviceName: 'Electric Vehicle (EV) Towing & Recovery',
    shortName: 'EV Recovery',
    tagline: 'Specialized flatbed towing & mobile charging support for Electric Vehicles',
    description: 'Specialized recovery for Electric Vehicles (Nexon EV, Punch EV, MG ZS, BYD, Hyundai Ioniq, Tesla). 100% Flatbed deck transport to prevent motor & regenerative braking damage.',
    supportedVehicles: ['Electric Cars (EV)', 'Electric Two-Wheelers', 'EV Autos & LCVs'],
    commonProblems: ['High Voltage Battery Depletion (0% SOC)', 'EV System Malfunction Error', 'Charging Port Lock Failure', 'Thermal Management Shutdown'],
    process: [
      { step: '01', title: 'EV Neutral Mode Verification', desc: 'Verified EV neutral override protocol.' },
      { step: '02', title: 'Hydraulic Flatbed Loading', desc: 'Carried 100% off the ground on flatbed deck.' },
      { step: '03', title: 'EV Supercharger / Home Drop', desc: 'Towed directly to nearest DC Fast Charging station or service center.' }
    ],
    benefits: [
      { title: 'EV Powertrain Safe', desc: 'Prevents regenerative braking back-EMF voltage spikes from damaging EV inverter.' },
      { title: 'DC Fast Charger Mapping', desc: 'Drivers know exact active CCS2 / Type-2 fast charger locations.' }
    ],
    pricing: {
      callOutFee: '₹1,200 Base EV Flatbed Fee',
      perKmRate: '₹45 / Km',
      nightCharges: '₹200',
      waitingCharges: '₹100 / Hour'
    },
    faq: [
      { q: 'Why must EV cars never be towed with wheels rolling on the road?', a: 'Rolling EV wheels spins the electric motor, generating high back-EMF current that destroys the high-voltage battery inverter.' }
    ],
    reviews: [
      { name: 'Sujith Nair', rating: 5, text: 'My Nexon EV battery drained 5 km before the charging station near Salem. SAMAYAS flatbed delivered it to the DC fast charger safely.', location: 'Salem', date: '2026-07-29' }
    ],
    seo: {
      title: 'EV Car Recovery & Towing Service | Electric Vehicle Towing | SAMAYAS',
      description: 'Specialized 24/7 EV car recovery & flatbed towing across Tamil Nadu. Safe zero-wheel-contact towing for Nexon EV, MG, BYD & luxury EVs.',
      keywords: ['ev recovery', 'electric vehicle towing', 'ev flatbed towing', 'nexon ev towing', 'ev battery dead help']
    }
  },

  {
    id: 'commercial-vehicle-recovery',
    slug: 'commercial-vehicle-recovery',
    serviceName: 'Commercial Vehicle, LCV & Heavy Truck Recovery',
    shortName: 'Commercial Vehicle Recovery',
    tagline: 'Heavy-duty wheel lift & crane recovery for mini trucks, LCVs, buses & lorries',
    description: 'Heavy vehicle recovery solutions for Tata Ace, Dost, Pickups, Eicher LCVs, Private Buses, and Lorries stuck with mechanical failures or accidents.',
    supportedVehicles: ['Mini Trucks (Ace/Dost)', 'LCVs & Eicher Trucks', 'Private & Tourist Buses', 'Heavy Lorries & Tipper Trucks'],
    commonProblems: ['Differential / Axle Snap', 'Heavy Overload Breakdown', 'Clutch Plate Burnout', 'Highway Rollover / Ditch Slip'],
    process: [
      { step: '01', title: 'Heavy Duty Fleet Dispatch', desc: 'Heavy wheel-lift or 20-ton crane dispatched.' },
      { step: '02', title: 'Propeller Shaft Disconnection', desc: 'Disconnects driveshaft to protect commercial gearbox.' },
      { step: '03', title: 'Heavy Under-Lift Towing', desc: 'Tows load safely to commercial garage.' }
    ],
    benefits: [
      { title: 'Heavy 20-Ton Winch Capacity', desc: 'Capable of handling loaded LCVs & commercial vehicles.' }
    ],
    pricing: {
      callOutFee: '₹2,000 Heavy Base Fee',
      perKmRate: '₹65 / Km',
      nightCharges: '₹300',
      waitingCharges: '₹150 / Hour'
    },
    faq: [
      { q: 'Do you tow loaded mini trucks like Tata Ace or Ashok Leyland Dost?', a: 'Yes! We operate heavy under-lift tow trucks designed specifically for loaded LCVs and mini trucks.' }
    ],
    reviews: [
      { name: 'Murugan Logistics', rating: 5, text: 'Our Eicher LCV broke down on Trichy-Karur road. SAMAYAS heavy recovery truck pulled it to our garage quickly.', location: 'Tiruchirappalli', date: '2026-07-17' }
    ],
    seo: {
      title: 'Commercial Vehicle & LCV Recovery Service | Heavy Towing | SAMAYAS',
      description: 'Heavy-duty 24/7 commercial vehicle, mini truck & bus recovery across Tamil Nadu. Heavy winches & under-lift tow trucks.',
      keywords: ['commercial vehicle recovery', 'lcv towing service', 'mini truck towing', 'bus recovery near me', 'heavy tow truck']
    }
  }
];

export function getRecoveryServiceBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return recoveryServicesDataset.find((s) => s.slug.toLowerCase() === normalized) || null;
}
