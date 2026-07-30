export const routeContent = {
  'trichy-to-chennai': {
    from: 'Trichy',
    to: 'Chennai',
    fromSlug: 'tiruchirappalli',
    toSlug: 'chennai',
    returnRouteSlug: 'chennai-to-trichy',
    distanceKm: 330,
    timeHours: 5.5,
    distanceDisplay: '330 km',
    durationDisplay: '5.5 Hours',
    category: 'City',
    popularity: 10,
    isFeatured: true,
    seasonality: ["All Season"],
    popularFor: ["Business","Medical","Airport"],
    roadConditions: 'Access-controlled NH38 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Trichy to Chennai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Trichy to Chennai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Trichy to Chennai with SAMAYAS. Hatchback from ₹4,950, Sedan ₹4,950, SUV ₹6,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 4950,
      "sedan": 4950,
      "suv": 6600,
      "innova": 7260,
      "hycross": 8250,
      "traveller": 9900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Murugan Idli Shop",
                  "cuisine": "South Indian",
                  "famousFor": "Famous Crispy Dosa & Melt-in-mouth Idlis",
                  "detour": "2 km Detour",
                  "mealType": [
                        "Breakfast",
                        "Dinner"
                  ],
                  "rating": "4.6★"
            },
            {
                  "name": "A2B Pure Veg (Vandavasi Highway Plaza)",
                  "cuisine": "Pure Vegetarian",
                  "famousFor": "South & North Indian Thali & Ghee Roast",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Breakfast",
                        "Lunch",
                        "Snacks"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Coffee Stall",
                  "type": "Highway Refreshment Point"
            },
            {
                  "name": "Starbucks GST Road Highway Plaza",
                  "type": "Coffee Shop"
            }
      ],
      "temples": [
            {
                  "name": "Samayapuram Mariamman Temple",
                  "description": "One of Tamil Nadu’s most revered Mariamman pilgrimage shrines.",
                  "detour": "3 km Detour",
                  "stopDuration": "30 Mins Visit"
            },
            {
                  "name": "Rockfort Ucchi Pillayar Temple",
                  "description": "Historic 83m ancient rock hillfort temple with panoramic views.",
                  "detour": "1 km Detour",
                  "stopDuration": "45 Mins Visit"
            }
      ],
      "attractions": [
            {
                  "name": "Mahabalipuram Shore Temple & Monuments",
                  "description": "7th-century UNESCO World Heritage coastal shore temple.",
                  "visitDuration": "1.5 Hours",
                  "familyFriendly": true
            }
      ],
      "shopping": [
            {
                  "category": "Handicrafts & Dry Fruits",
                  "famousProducts": "Fresh Roasted Cashews & Tindivanam Highway Snacks"
            }
      ],
      "essentials": [
            {
                  "name": "Tindivanam IOCL Supercharger & Plaza",
                  "type": "EV Charging, Fuel & Clean Restrooms",
                  "location": "NH45 Highway Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Manapparai Murukku",
                  "location": "Manapparai / NH45 Junction",
                  "famousFor": "Traditional extra-crispy double-fried murukku"
            }
      ]
},
    highways: ["NH38","NH45 GST Road"],
    tolls: {
      costRange: '₹420 - ₹520',
      plazasCount: 4,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Trichy Central City / Main Junction',
      'Trichy Railway Station & Bus Stand',
      'Trichy Residential Areas & Hotels',
      'Trichy Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Chennai City Center & Main Commercial Hub',
      'Chennai Railway Station & Transit Terminals',
      'Chennai Hotels, Resorts & Residential Hubs',
      'Chennai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Trichy', type: 'Origin', desc: 'Doorstep pickup across Trichy.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Chennai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Chennai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Trichy to Chennai?',
        a: 'The one-way taxi fare from Trichy to Chennai starts at ₹4,950 for a Hatchback, ₹4,950 for a Sedan, and ₹6,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Trichy to Chennai?',
        a: 'The distance from Trichy to Chennai is approx 330 km via NH38. Travel duration is around 5.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Trichy?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Trichy including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Trichy to Chennai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 5.5 hours.',
        route: 'Trichy to Chennai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Trichy to Chennai. Zero return charges and transparent per-km bill.',
        route: 'Trichy to Chennai',
      },
    ],
    nearbyRoutes: [
      { name: 'Chennai to Trichy', slug: 'chennai-to-trichy', distance: '330 km', fare: '₹4,950' },
    ],
  },

  'chennai-to-trichy': {
    from: 'Chennai',
    to: 'Trichy',
    fromSlug: 'chennai',
    toSlug: 'tiruchirappalli',
    returnRouteSlug: 'trichy-to-chennai',
    distanceKm: 330,
    timeHours: 5.5,
    distanceDisplay: '330 km',
    durationDisplay: '5.5 Hours',
    category: 'City',
    popularity: 10,
    isFeatured: true,
    seasonality: ["All Season"],
    popularFor: ["Home Visit","Business","Temple"],
    roadConditions: 'Access-controlled NH45 GST Road multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Chennai to Trichy. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Chennai to Trichy One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Chennai to Trichy with SAMAYAS. Hatchback from ₹4,950, Sedan ₹4,950, SUV ₹6,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 4950,
      "sedan": 4950,
      "suv": 6600,
      "innova": 7260,
      "hycross": 8250,
      "traveller": 9900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Murugan Idli Shop",
                  "cuisine": "South Indian",
                  "famousFor": "Famous Crispy Dosa & Melt-in-mouth Idlis",
                  "detour": "2 km Detour",
                  "mealType": [
                        "Breakfast",
                        "Dinner"
                  ],
                  "rating": "4.6★"
            },
            {
                  "name": "A2B Pure Veg (Vandavasi Highway Plaza)",
                  "cuisine": "Pure Vegetarian",
                  "famousFor": "South & North Indian Thali & Ghee Roast",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Breakfast",
                        "Lunch",
                        "Snacks"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Coffee Stall",
                  "type": "Highway Refreshment Point"
            },
            {
                  "name": "Starbucks GST Road Highway Plaza",
                  "type": "Coffee Shop"
            }
      ],
      "temples": [
            {
                  "name": "Samayapuram Mariamman Temple",
                  "description": "One of Tamil Nadu’s most revered Mariamman pilgrimage shrines.",
                  "detour": "3 km Detour",
                  "stopDuration": "30 Mins Visit"
            },
            {
                  "name": "Rockfort Ucchi Pillayar Temple",
                  "description": "Historic 83m ancient rock hillfort temple with panoramic views.",
                  "detour": "1 km Detour",
                  "stopDuration": "45 Mins Visit"
            }
      ],
      "attractions": [
            {
                  "name": "Mahabalipuram Shore Temple & Monuments",
                  "description": "7th-century UNESCO World Heritage coastal shore temple.",
                  "visitDuration": "1.5 Hours",
                  "familyFriendly": true
            }
      ],
      "shopping": [
            {
                  "category": "Handicrafts & Dry Fruits",
                  "famousProducts": "Fresh Roasted Cashews & Tindivanam Highway Snacks"
            }
      ],
      "essentials": [
            {
                  "name": "Tindivanam IOCL Supercharger & Plaza",
                  "type": "EV Charging, Fuel & Clean Restrooms",
                  "location": "NH45 Highway Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Manapparai Murukku",
                  "location": "Manapparai / NH45 Junction",
                  "famousFor": "Traditional extra-crispy double-fried murukku"
            }
      ]
},
    highways: ["NH45 GST Road","NH38"],
    tolls: {
      costRange: '₹420 - ₹520',
      plazasCount: 4,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Chennai Central City / Main Junction',
      'Chennai Railway Station & Bus Stand',
      'Chennai Residential Areas & Hotels',
      'Chennai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Trichy City Center & Main Commercial Hub',
      'Trichy Railway Station & Transit Terminals',
      'Trichy Hotels, Resorts & Residential Hubs',
      'Trichy Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Chennai', type: 'Origin', desc: 'Doorstep pickup across Chennai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Trichy', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Trichy.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Chennai to Trichy?',
        a: 'The one-way taxi fare from Chennai to Trichy starts at ₹4,950 for a Hatchback, ₹4,950 for a Sedan, and ₹6,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Chennai to Trichy?',
        a: 'The distance from Chennai to Trichy is approx 330 km via NH45 GST Road. Travel duration is around 5.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Chennai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Chennai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Chennai to Trichy. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 5.5 hours.',
        route: 'Chennai to Trichy',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Chennai to Trichy. Zero return charges and transparent per-km bill.',
        route: 'Chennai to Trichy',
      },
    ],
    nearbyRoutes: [
      { name: 'Trichy to Chennai', slug: 'trichy-to-chennai', distance: '330 km', fare: '₹4,950' },
    ],
  },

  'chennai-to-madurai': {
    from: 'Chennai',
    to: 'Madurai',
    fromSlug: 'chennai',
    toSlug: 'madurai',
    returnRouteSlug: 'madurai-to-chennai',
    distanceKm: 460,
    timeHours: 7.5,
    distanceDisplay: '460 km',
    durationDisplay: '7.5 Hours',
    category: 'City',
    popularity: 10,
    isFeatured: true,
    seasonality: ["All Season"],
    popularFor: ["Business","Family","Culture"],
    roadConditions: 'Access-controlled NH45 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Chennai to Madurai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Chennai to Madurai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Chennai to Madurai with SAMAYAS. Hatchback from ₹6,900, Sedan ₹6,900, SUV ₹9,200. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 6900,
      "sedan": 6900,
      "suv": 9200,
      "innova": 10120,
      "hycross": 11500,
      "traveller": 13800
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Chennai - Madurai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Chennai - Madurai Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH45.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH45 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH45 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Chennai Regional Snacks",
                  "location": "Chennai Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Chennai"
            }
      ]
},
    highways: ["NH45","NH38"],
    tolls: {
      costRange: '₹580 - ₹680',
      plazasCount: 6,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Chennai Central City / Main Junction',
      'Chennai Railway Station & Bus Stand',
      'Chennai Residential Areas & Hotels',
      'Chennai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Madurai City Center & Main Commercial Hub',
      'Madurai Railway Station & Transit Terminals',
      'Madurai Hotels, Resorts & Residential Hubs',
      'Madurai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Chennai', type: 'Origin', desc: 'Doorstep pickup across Chennai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Madurai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Madurai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Chennai to Madurai?',
        a: 'The one-way taxi fare from Chennai to Madurai starts at ₹6,900 for a Hatchback, ₹6,900 for a Sedan, and ₹9,200 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Chennai to Madurai?',
        a: 'The distance from Chennai to Madurai is approx 460 km via NH45. Travel duration is around 7.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Chennai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Chennai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Chennai to Madurai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 7.5 hours.',
        route: 'Chennai to Madurai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Chennai to Madurai. Zero return charges and transparent per-km bill.',
        route: 'Chennai to Madurai',
      },
    ],
    nearbyRoutes: [
      { name: 'Madurai to Chennai', slug: 'madurai-to-chennai', distance: '460 km', fare: '₹6,900' },
    ],
  },

  'madurai-to-chennai': {
    from: 'Madurai',
    to: 'Chennai',
    fromSlug: 'madurai',
    toSlug: 'chennai',
    returnRouteSlug: 'chennai-to-madurai',
    distanceKm: 460,
    timeHours: 7.5,
    distanceDisplay: '460 km',
    durationDisplay: '7.5 Hours',
    category: 'City',
    popularity: 10,
    isFeatured: true,
    seasonality: ["All Season"],
    popularFor: ["Business","Medical","Airport"],
    roadConditions: 'Access-controlled NH38 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Madurai to Chennai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Madurai to Chennai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Madurai to Chennai with SAMAYAS. Hatchback from ₹6,900, Sedan ₹6,900, SUV ₹9,200. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 6900,
      "sedan": 6900,
      "suv": 9200,
      "innova": 10120,
      "hycross": 11500,
      "traveller": 13800
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Madurai - Chennai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Madurai - Chennai Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH38.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH38 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH38 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Madurai Regional Snacks",
                  "location": "Madurai Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Madurai"
            }
      ]
},
    highways: ["NH38","NH45"],
    tolls: {
      costRange: '₹580 - ₹680',
      plazasCount: 6,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Madurai Central City / Main Junction',
      'Madurai Railway Station & Bus Stand',
      'Madurai Residential Areas & Hotels',
      'Madurai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Chennai City Center & Main Commercial Hub',
      'Chennai Railway Station & Transit Terminals',
      'Chennai Hotels, Resorts & Residential Hubs',
      'Chennai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Madurai', type: 'Origin', desc: 'Doorstep pickup across Madurai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Chennai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Chennai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Madurai to Chennai?',
        a: 'The one-way taxi fare from Madurai to Chennai starts at ₹6,900 for a Hatchback, ₹6,900 for a Sedan, and ₹9,200 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Madurai to Chennai?',
        a: 'The distance from Madurai to Chennai is approx 460 km via NH38. Travel duration is around 7.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Madurai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Madurai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Madurai to Chennai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 7.5 hours.',
        route: 'Madurai to Chennai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Madurai to Chennai. Zero return charges and transparent per-km bill.',
        route: 'Madurai to Chennai',
      },
    ],
    nearbyRoutes: [
      { name: 'Chennai to Madurai', slug: 'chennai-to-madurai', distance: '460 km', fare: '₹6,900' },
    ],
  },

  'chennai-to-coimbatore': {
    from: 'Chennai',
    to: 'Coimbatore',
    fromSlug: 'chennai',
    toSlug: 'coimbatore',
    returnRouteSlug: 'coimbatore-to-chennai',
    distanceKm: 500,
    timeHours: 8.5,
    distanceDisplay: '500 km',
    durationDisplay: '8.5 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: true,
    seasonality: ["All Season"],
    popularFor: ["Business","Textile","IT"],
    roadConditions: 'Access-controlled NH48 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Chennai to Coimbatore. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Chennai to Coimbatore One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Chennai to Coimbatore with SAMAYAS. Hatchback from ₹7,500, Sedan ₹7,500, SUV ₹10,000. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 7500,
      "sedan": 7500,
      "suv": 10000,
      "innova": 11000,
      "hycross": 12500,
      "traveller": 15000
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Chennai - Coimbatore)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Chennai - Coimbatore Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH48.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH48 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH48 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Chennai Regional Snacks",
                  "location": "Chennai Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Chennai"
            }
      ]
},
    highways: ["NH48","NH544"],
    tolls: {
      costRange: '₹620 - ₹720',
      plazasCount: 7,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Chennai Central City / Main Junction',
      'Chennai Railway Station & Bus Stand',
      'Chennai Residential Areas & Hotels',
      'Chennai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Coimbatore City Center & Main Commercial Hub',
      'Coimbatore Railway Station & Transit Terminals',
      'Coimbatore Hotels, Resorts & Residential Hubs',
      'Coimbatore Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Chennai', type: 'Origin', desc: 'Doorstep pickup across Chennai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Coimbatore', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Coimbatore.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Chennai to Coimbatore?',
        a: 'The one-way taxi fare from Chennai to Coimbatore starts at ₹7,500 for a Hatchback, ₹7,500 for a Sedan, and ₹10,000 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Chennai to Coimbatore?',
        a: 'The distance from Chennai to Coimbatore is approx 500 km via NH48. Travel duration is around 8.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Chennai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Chennai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Chennai to Coimbatore. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 8.5 hours.',
        route: 'Chennai to Coimbatore',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Chennai to Coimbatore. Zero return charges and transparent per-km bill.',
        route: 'Chennai to Coimbatore',
      },
    ],
    nearbyRoutes: [
      { name: 'Coimbatore to Chennai', slug: 'coimbatore-to-chennai', distance: '500 km', fare: '₹7,500' },
    ],
  },

  'coimbatore-to-chennai': {
    from: 'Coimbatore',
    to: 'Chennai',
    fromSlug: 'coimbatore',
    toSlug: 'chennai',
    returnRouteSlug: 'chennai-to-coimbatore',
    distanceKm: 500,
    timeHours: 8.5,
    distanceDisplay: '500 km',
    durationDisplay: '8.5 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Business","Corporate","Airport"],
    roadConditions: 'Access-controlled NH544 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Coimbatore to Chennai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Coimbatore to Chennai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Coimbatore to Chennai with SAMAYAS. Hatchback from ₹7,500, Sedan ₹7,500, SUV ₹10,000. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 7500,
      "sedan": 7500,
      "suv": 10000,
      "innova": 11000,
      "hycross": 12500,
      "traveller": 15000
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Coimbatore - Chennai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Coimbatore - Chennai Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH544.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH544 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH544 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Coimbatore Regional Snacks",
                  "location": "Coimbatore Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Coimbatore"
            }
      ]
},
    highways: ["NH544","NH48"],
    tolls: {
      costRange: '₹620 - ₹720',
      plazasCount: 7,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Coimbatore Central City / Main Junction',
      'Coimbatore Railway Station & Bus Stand',
      'Coimbatore Residential Areas & Hotels',
      'Coimbatore Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Chennai City Center & Main Commercial Hub',
      'Chennai Railway Station & Transit Terminals',
      'Chennai Hotels, Resorts & Residential Hubs',
      'Chennai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Coimbatore', type: 'Origin', desc: 'Doorstep pickup across Coimbatore.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Chennai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Chennai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Coimbatore to Chennai?',
        a: 'The one-way taxi fare from Coimbatore to Chennai starts at ₹7,500 for a Hatchback, ₹7,500 for a Sedan, and ₹10,000 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Coimbatore to Chennai?',
        a: 'The distance from Coimbatore to Chennai is approx 500 km via NH544. Travel duration is around 8.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Coimbatore?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Coimbatore including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Coimbatore to Chennai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 8.5 hours.',
        route: 'Coimbatore to Chennai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Coimbatore to Chennai. Zero return charges and transparent per-km bill.',
        route: 'Coimbatore to Chennai',
      },
    ],
    nearbyRoutes: [
      { name: 'Chennai to Coimbatore', slug: 'chennai-to-coimbatore', distance: '500 km', fare: '₹7,500' },
    ],
  },

  'chennai-to-salem': {
    from: 'Chennai',
    to: 'Salem',
    fromSlug: 'chennai',
    toSlug: 'salem',
    returnRouteSlug: 'salem-to-chennai',
    distanceKm: 340,
    timeHours: 6,
    distanceDisplay: '340 km',
    durationDisplay: '6 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Business","Steel","Agriculture"],
    roadConditions: 'Access-controlled NH48 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Chennai to Salem. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Chennai to Salem One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Chennai to Salem with SAMAYAS. Hatchback from ₹5,100, Sedan ₹5,100, SUV ₹6,800. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 5100,
      "sedan": 5100,
      "suv": 6800,
      "innova": 7480,
      "hycross": 8500,
      "traveller": 10200
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Chennai - Salem)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Chennai - Salem Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH48.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH48 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH48 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Salem Malgova Mangoes & Thattu Vadai",
                  "location": "Salem Highway Market",
                  "famousFor": "Seasonal juicy Malgova mangoes & crisp street snack"
            }
      ]
},
    highways: ["NH48","NH79"],
    tolls: {
      costRange: '₹410 - ₹490',
      plazasCount: 4,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Chennai Central City / Main Junction',
      'Chennai Railway Station & Bus Stand',
      'Chennai Residential Areas & Hotels',
      'Chennai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Salem City Center & Main Commercial Hub',
      'Salem Railway Station & Transit Terminals',
      'Salem Hotels, Resorts & Residential Hubs',
      'Salem Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Chennai', type: 'Origin', desc: 'Doorstep pickup across Chennai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Salem', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Salem.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Chennai to Salem?',
        a: 'The one-way taxi fare from Chennai to Salem starts at ₹5,100 for a Hatchback, ₹5,100 for a Sedan, and ₹6,800 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Chennai to Salem?',
        a: 'The distance from Chennai to Salem is approx 340 km via NH48. Travel duration is around 6 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Chennai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Chennai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Chennai to Salem. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 6 hours.',
        route: 'Chennai to Salem',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Chennai to Salem. Zero return charges and transparent per-km bill.',
        route: 'Chennai to Salem',
      },
    ],
    nearbyRoutes: [
      { name: 'Salem to Chennai', slug: 'salem-to-chennai', distance: '340 km', fare: '₹5,100' },
    ],
  },

  'salem-to-chennai': {
    from: 'Salem',
    to: 'Chennai',
    fromSlug: 'salem',
    toSlug: 'chennai',
    returnRouteSlug: 'chennai-to-salem',
    distanceKm: 340,
    timeHours: 6,
    distanceDisplay: '340 km',
    durationDisplay: '6 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Business","Medical","Airport"],
    roadConditions: 'Access-controlled NH79 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Salem to Chennai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Salem to Chennai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Salem to Chennai with SAMAYAS. Hatchback from ₹5,100, Sedan ₹5,100, SUV ₹6,800. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 5100,
      "sedan": 5100,
      "suv": 6800,
      "innova": 7480,
      "hycross": 8500,
      "traveller": 10200
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Salem - Chennai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Salem - Chennai Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH79.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH79 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH79 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Salem Malgova Mangoes & Thattu Vadai",
                  "location": "Salem Highway Market",
                  "famousFor": "Seasonal juicy Malgova mangoes & crisp street snack"
            }
      ]
},
    highways: ["NH79","NH48"],
    tolls: {
      costRange: '₹410 - ₹490',
      plazasCount: 4,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Salem Central City / Main Junction',
      'Salem Railway Station & Bus Stand',
      'Salem Residential Areas & Hotels',
      'Salem Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Chennai City Center & Main Commercial Hub',
      'Chennai Railway Station & Transit Terminals',
      'Chennai Hotels, Resorts & Residential Hubs',
      'Chennai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Salem', type: 'Origin', desc: 'Doorstep pickup across Salem.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Chennai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Chennai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Salem to Chennai?',
        a: 'The one-way taxi fare from Salem to Chennai starts at ₹5,100 for a Hatchback, ₹5,100 for a Sedan, and ₹6,800 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Salem to Chennai?',
        a: 'The distance from Salem to Chennai is approx 340 km via NH79. Travel duration is around 6 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Salem?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Salem including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Salem to Chennai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 6 hours.',
        route: 'Salem to Chennai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Salem to Chennai. Zero return charges and transparent per-km bill.',
        route: 'Salem to Chennai',
      },
    ],
    nearbyRoutes: [
      { name: 'Chennai to Salem', slug: 'chennai-to-salem', distance: '340 km', fare: '₹5,100' },
    ],
  },

  'chennai-to-tirunelveli': {
    from: 'Chennai',
    to: 'Tirunelveli',
    fromSlug: 'chennai',
    toSlug: 'tirunelveli',
    returnRouteSlug: 'tirunelveli-to-chennai',
    distanceKm: 620,
    timeHours: 10,
    distanceDisplay: '620 km',
    durationDisplay: '10 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Family","Home Visit"],
    roadConditions: 'Access-controlled NH45 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Chennai to Tirunelveli. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Chennai to Tirunelveli One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Chennai to Tirunelveli with SAMAYAS. Hatchback from ₹9,300, Sedan ₹9,300, SUV ₹12,400. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 9300,
      "sedan": 9300,
      "suv": 12400,
      "innova": 13640,
      "hycross": 15500,
      "traveller": 18600
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Chennai - Tirunelveli)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Chennai - Tirunelveli Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH45.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH45 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH45 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Iruttu Kadai Halwa",
                  "location": "Tirunelveli Town",
                  "famousFor": "Hot wheat halwa made with Tamirabharani river water"
            }
      ]
},
    highways: ["NH45","NH44"],
    tolls: {
      costRange: '₹750 - ₹880',
      plazasCount: 9,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Chennai Central City / Main Junction',
      'Chennai Railway Station & Bus Stand',
      'Chennai Residential Areas & Hotels',
      'Chennai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Tirunelveli City Center & Main Commercial Hub',
      'Tirunelveli Railway Station & Transit Terminals',
      'Tirunelveli Hotels, Resorts & Residential Hubs',
      'Tirunelveli Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Chennai', type: 'Origin', desc: 'Doorstep pickup across Chennai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Tirunelveli', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Tirunelveli.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Chennai to Tirunelveli?',
        a: 'The one-way taxi fare from Chennai to Tirunelveli starts at ₹9,300 for a Hatchback, ₹9,300 for a Sedan, and ₹12,400 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Chennai to Tirunelveli?',
        a: 'The distance from Chennai to Tirunelveli is approx 620 km via NH45. Travel duration is around 10 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Chennai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Chennai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Chennai to Tirunelveli. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 10 hours.',
        route: 'Chennai to Tirunelveli',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Chennai to Tirunelveli. Zero return charges and transparent per-km bill.',
        route: 'Chennai to Tirunelveli',
      },
    ],
    nearbyRoutes: [
      { name: 'Tirunelveli to Chennai', slug: 'tirunelveli-to-chennai', distance: '620 km', fare: '₹9,300' },
    ],
  },

  'tirunelveli-to-chennai': {
    from: 'Tirunelveli',
    to: 'Chennai',
    fromSlug: 'tirunelveli',
    toSlug: 'chennai',
    returnRouteSlug: 'chennai-to-tirunelveli',
    distanceKm: 620,
    timeHours: 10,
    distanceDisplay: '620 km',
    durationDisplay: '10 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Business","Education","Airport"],
    roadConditions: 'Access-controlled NH44 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Tirunelveli to Chennai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Tirunelveli to Chennai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Tirunelveli to Chennai with SAMAYAS. Hatchback from ₹9,300, Sedan ₹9,300, SUV ₹12,400. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 9300,
      "sedan": 9300,
      "suv": 12400,
      "innova": 13640,
      "hycross": 15500,
      "traveller": 18600
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Tirunelveli - Chennai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Tirunelveli - Chennai Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH44.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH44 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH44 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Iruttu Kadai Halwa",
                  "location": "Tirunelveli Town",
                  "famousFor": "Hot wheat halwa made with Tamirabharani river water"
            }
      ]
},
    highways: ["NH44","NH45"],
    tolls: {
      costRange: '₹750 - ₹880',
      plazasCount: 9,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Tirunelveli Central City / Main Junction',
      'Tirunelveli Railway Station & Bus Stand',
      'Tirunelveli Residential Areas & Hotels',
      'Tirunelveli Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Chennai City Center & Main Commercial Hub',
      'Chennai Railway Station & Transit Terminals',
      'Chennai Hotels, Resorts & Residential Hubs',
      'Chennai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Tirunelveli', type: 'Origin', desc: 'Doorstep pickup across Tirunelveli.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Chennai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Chennai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Tirunelveli to Chennai?',
        a: 'The one-way taxi fare from Tirunelveli to Chennai starts at ₹9,300 for a Hatchback, ₹9,300 for a Sedan, and ₹12,400 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Tirunelveli to Chennai?',
        a: 'The distance from Tirunelveli to Chennai is approx 620 km via NH44. Travel duration is around 10 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Tirunelveli?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Tirunelveli including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Tirunelveli to Chennai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 10 hours.',
        route: 'Tirunelveli to Chennai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Tirunelveli to Chennai. Zero return charges and transparent per-km bill.',
        route: 'Tirunelveli to Chennai',
      },
    ],
    nearbyRoutes: [
      { name: 'Chennai to Tirunelveli', slug: 'chennai-to-tirunelveli', distance: '620 km', fare: '₹9,300' },
    ],
  },

  'chennai-to-thanjavur': {
    from: 'Chennai',
    to: 'Thanjavur',
    fromSlug: 'chennai',
    toSlug: 'thanjavur',
    returnRouteSlug: 'thanjavur-to-chennai',
    distanceKm: 340,
    timeHours: 6,
    distanceDisplay: '340 km',
    durationDisplay: '6 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: true,
    seasonality: ["All Season"],
    popularFor: ["Heritage","Pilgrimage","Family"],
    roadConditions: 'Access-controlled NH45 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Chennai to Thanjavur. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Chennai to Thanjavur One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Chennai to Thanjavur with SAMAYAS. Hatchback from ₹5,100, Sedan ₹5,100, SUV ₹6,800. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 5100,
      "sedan": 5100,
      "suv": 6800,
      "innova": 7480,
      "hycross": 8500,
      "traveller": 10200
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Chennai - Thanjavur)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Chennai - Thanjavur Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH45.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH45 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH45 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Chennai Regional Snacks",
                  "location": "Chennai Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Chennai"
            }
      ]
},
    highways: ["NH45","NH36"],
    tolls: {
      costRange: '₹420 - ₹500',
      plazasCount: 4,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Chennai Central City / Main Junction',
      'Chennai Railway Station & Bus Stand',
      'Chennai Residential Areas & Hotels',
      'Chennai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Thanjavur City Center & Main Commercial Hub',
      'Thanjavur Railway Station & Transit Terminals',
      'Thanjavur Hotels, Resorts & Residential Hubs',
      'Thanjavur Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Chennai', type: 'Origin', desc: 'Doorstep pickup across Chennai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Thanjavur', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Thanjavur.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Chennai to Thanjavur?',
        a: 'The one-way taxi fare from Chennai to Thanjavur starts at ₹5,100 for a Hatchback, ₹5,100 for a Sedan, and ₹6,800 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Chennai to Thanjavur?',
        a: 'The distance from Chennai to Thanjavur is approx 340 km via NH45. Travel duration is around 6 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Chennai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Chennai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Chennai to Thanjavur. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 6 hours.',
        route: 'Chennai to Thanjavur',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Chennai to Thanjavur. Zero return charges and transparent per-km bill.',
        route: 'Chennai to Thanjavur',
      },
    ],
    nearbyRoutes: [
      { name: 'Thanjavur to Chennai', slug: 'thanjavur-to-chennai', distance: '340 km', fare: '₹5,100' },
    ],
  },

  'thanjavur-to-chennai': {
    from: 'Thanjavur',
    to: 'Chennai',
    fromSlug: 'thanjavur',
    toSlug: 'chennai',
    returnRouteSlug: 'chennai-to-thanjavur',
    distanceKm: 340,
    timeHours: 6,
    distanceDisplay: '340 km',
    durationDisplay: '6 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Medical","Business","Airport"],
    roadConditions: 'Access-controlled NH36 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Thanjavur to Chennai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Thanjavur to Chennai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Thanjavur to Chennai with SAMAYAS. Hatchback from ₹5,100, Sedan ₹5,100, SUV ₹6,800. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 5100,
      "sedan": 5100,
      "suv": 6800,
      "innova": 7480,
      "hycross": 8500,
      "traveller": 10200
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Thanjavur - Chennai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Thanjavur - Chennai Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH36.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH36 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH36 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Thanjavur Regional Snacks",
                  "location": "Thanjavur Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Thanjavur"
            }
      ]
},
    highways: ["NH36","NH45"],
    tolls: {
      costRange: '₹420 - ₹500',
      plazasCount: 4,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Thanjavur Central City / Main Junction',
      'Thanjavur Railway Station & Bus Stand',
      'Thanjavur Residential Areas & Hotels',
      'Thanjavur Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Chennai City Center & Main Commercial Hub',
      'Chennai Railway Station & Transit Terminals',
      'Chennai Hotels, Resorts & Residential Hubs',
      'Chennai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Thanjavur', type: 'Origin', desc: 'Doorstep pickup across Thanjavur.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Chennai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Chennai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Thanjavur to Chennai?',
        a: 'The one-way taxi fare from Thanjavur to Chennai starts at ₹5,100 for a Hatchback, ₹5,100 for a Sedan, and ₹6,800 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Thanjavur to Chennai?',
        a: 'The distance from Thanjavur to Chennai is approx 340 km via NH36. Travel duration is around 6 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Thanjavur?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Thanjavur including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Thanjavur to Chennai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 6 hours.',
        route: 'Thanjavur to Chennai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Thanjavur to Chennai. Zero return charges and transparent per-km bill.',
        route: 'Thanjavur to Chennai',
      },
    ],
    nearbyRoutes: [
      { name: 'Chennai to Thanjavur', slug: 'chennai-to-thanjavur', distance: '340 km', fare: '₹5,100' },
    ],
  },

  'chennai-to-vellore': {
    from: 'Chennai',
    to: 'Vellore',
    fromSlug: 'chennai',
    toSlug: 'vellore',
    returnRouteSlug: 'vellore-to-chennai',
    distanceKm: 140,
    timeHours: 2.75,
    distanceDisplay: '140 km',
    durationDisplay: '2.75 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: true,
    seasonality: ["All Season"],
    popularFor: ["Medical","CMC Hospital","Education"],
    roadConditions: 'Access-controlled NH48 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Chennai to Vellore. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Chennai to Vellore One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Chennai to Vellore with SAMAYAS. Hatchback from ₹2,100, Sedan ₹2,100, SUV ₹2,800. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2100,
      "sedan": 2100,
      "suv": 2800,
      "innova": 3080,
      "hycross": 3500,
      "traveller": 4200
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Chennai - Vellore)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Chennai - Vellore Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH48.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH48 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH48 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Chennai Regional Snacks",
                  "location": "Chennai Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Chennai"
            }
      ]
},
    highways: ["NH48"],
    tolls: {
      costRange: '₹140 - ₹180',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Chennai Central City / Main Junction',
      'Chennai Railway Station & Bus Stand',
      'Chennai Residential Areas & Hotels',
      'Chennai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Vellore City Center & Main Commercial Hub',
      'Vellore Railway Station & Transit Terminals',
      'Vellore Hotels, Resorts & Residential Hubs',
      'Vellore Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Chennai', type: 'Origin', desc: 'Doorstep pickup across Chennai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Vellore', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Vellore.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Chennai to Vellore?',
        a: 'The one-way taxi fare from Chennai to Vellore starts at ₹2,100 for a Hatchback, ₹2,100 for a Sedan, and ₹2,800 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Chennai to Vellore?',
        a: 'The distance from Chennai to Vellore is approx 140 km via NH48. Travel duration is around 2.75 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Chennai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Chennai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Chennai to Vellore. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2.75 hours.',
        route: 'Chennai to Vellore',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Chennai to Vellore. Zero return charges and transparent per-km bill.',
        route: 'Chennai to Vellore',
      },
    ],
    nearbyRoutes: [
      { name: 'Vellore to Chennai', slug: 'vellore-to-chennai', distance: '140 km', fare: '₹2,100' },
    ],
  },

  'vellore-to-chennai': {
    from: 'Vellore',
    to: 'Chennai',
    fromSlug: 'vellore',
    toSlug: 'chennai',
    returnRouteSlug: 'chennai-to-vellore',
    distanceKm: 140,
    timeHours: 2.75,
    distanceDisplay: '140 km',
    durationDisplay: '2.75 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Medical","Airport","Business"],
    roadConditions: 'Access-controlled NH48 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Vellore to Chennai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Vellore to Chennai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Vellore to Chennai with SAMAYAS. Hatchback from ₹2,100, Sedan ₹2,100, SUV ₹2,800. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2100,
      "sedan": 2100,
      "suv": 2800,
      "innova": 3080,
      "hycross": 3500,
      "traveller": 4200
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Vellore - Chennai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Vellore - Chennai Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH48.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH48 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH48 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Vellore Regional Snacks",
                  "location": "Vellore Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Vellore"
            }
      ]
},
    highways: ["NH48"],
    tolls: {
      costRange: '₹140 - ₹180',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Vellore Central City / Main Junction',
      'Vellore Railway Station & Bus Stand',
      'Vellore Residential Areas & Hotels',
      'Vellore Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Chennai City Center & Main Commercial Hub',
      'Chennai Railway Station & Transit Terminals',
      'Chennai Hotels, Resorts & Residential Hubs',
      'Chennai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Vellore', type: 'Origin', desc: 'Doorstep pickup across Vellore.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Chennai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Chennai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Vellore to Chennai?',
        a: 'The one-way taxi fare from Vellore to Chennai starts at ₹2,100 for a Hatchback, ₹2,100 for a Sedan, and ₹2,800 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Vellore to Chennai?',
        a: 'The distance from Vellore to Chennai is approx 140 km via NH48. Travel duration is around 2.75 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Vellore?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Vellore including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Vellore to Chennai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2.75 hours.',
        route: 'Vellore to Chennai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Vellore to Chennai. Zero return charges and transparent per-km bill.',
        route: 'Vellore to Chennai',
      },
    ],
    nearbyRoutes: [
      { name: 'Chennai to Vellore', slug: 'chennai-to-vellore', distance: '140 km', fare: '₹2,100' },
    ],
  },

  'chennai-to-erode': {
    from: 'Chennai',
    to: 'Erode',
    fromSlug: 'chennai',
    toSlug: 'erode',
    returnRouteSlug: 'erode-to-chennai',
    distanceKm: 420,
    timeHours: 7,
    distanceDisplay: '420 km',
    durationDisplay: '7 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Textile","Business"],
    roadConditions: 'Access-controlled NH48 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Chennai to Erode. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Chennai to Erode One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Chennai to Erode with SAMAYAS. Hatchback from ₹6,300, Sedan ₹6,300, SUV ₹8,400. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 6300,
      "sedan": 6300,
      "suv": 8400,
      "innova": 9240,
      "hycross": 10500,
      "traveller": 12600
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Chennai - Erode)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Chennai - Erode Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH48.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH48 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH48 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Chennai Regional Snacks",
                  "location": "Chennai Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Chennai"
            }
      ]
},
    highways: ["NH48","NH544"],
    tolls: {
      costRange: '₹520 - ₹620',
      plazasCount: 6,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Chennai Central City / Main Junction',
      'Chennai Railway Station & Bus Stand',
      'Chennai Residential Areas & Hotels',
      'Chennai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Erode City Center & Main Commercial Hub',
      'Erode Railway Station & Transit Terminals',
      'Erode Hotels, Resorts & Residential Hubs',
      'Erode Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Chennai', type: 'Origin', desc: 'Doorstep pickup across Chennai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Erode', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Erode.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Chennai to Erode?',
        a: 'The one-way taxi fare from Chennai to Erode starts at ₹6,300 for a Hatchback, ₹6,300 for a Sedan, and ₹8,400 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Chennai to Erode?',
        a: 'The distance from Chennai to Erode is approx 420 km via NH48. Travel duration is around 7 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Chennai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Chennai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Chennai to Erode. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 7 hours.',
        route: 'Chennai to Erode',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Chennai to Erode. Zero return charges and transparent per-km bill.',
        route: 'Chennai to Erode',
      },
    ],
    nearbyRoutes: [
      { name: 'Erode to Chennai', slug: 'erode-to-chennai', distance: '420 km', fare: '₹6,300' },
    ],
  },

  'erode-to-chennai': {
    from: 'Erode',
    to: 'Chennai',
    fromSlug: 'erode',
    toSlug: 'chennai',
    returnRouteSlug: 'chennai-to-erode',
    distanceKm: 420,
    timeHours: 7,
    distanceDisplay: '420 km',
    durationDisplay: '7 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Business","Medical","Airport"],
    roadConditions: 'Access-controlled NH544 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Erode to Chennai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Erode to Chennai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Erode to Chennai with SAMAYAS. Hatchback from ₹6,300, Sedan ₹6,300, SUV ₹8,400. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 6300,
      "sedan": 6300,
      "suv": 8400,
      "innova": 9240,
      "hycross": 10500,
      "traveller": 12600
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Erode - Chennai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Erode - Chennai Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH544.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH544 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH544 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Erode Regional Snacks",
                  "location": "Erode Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Erode"
            }
      ]
},
    highways: ["NH544","NH48"],
    tolls: {
      costRange: '₹520 - ₹620',
      plazasCount: 6,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Erode Central City / Main Junction',
      'Erode Railway Station & Bus Stand',
      'Erode Residential Areas & Hotels',
      'Erode Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Chennai City Center & Main Commercial Hub',
      'Chennai Railway Station & Transit Terminals',
      'Chennai Hotels, Resorts & Residential Hubs',
      'Chennai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Erode', type: 'Origin', desc: 'Doorstep pickup across Erode.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Chennai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Chennai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Erode to Chennai?',
        a: 'The one-way taxi fare from Erode to Chennai starts at ₹6,300 for a Hatchback, ₹6,300 for a Sedan, and ₹8,400 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Erode to Chennai?',
        a: 'The distance from Erode to Chennai is approx 420 km via NH544. Travel duration is around 7 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Erode?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Erode including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Erode to Chennai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 7 hours.',
        route: 'Erode to Chennai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Erode to Chennai. Zero return charges and transparent per-km bill.',
        route: 'Erode to Chennai',
      },
    ],
    nearbyRoutes: [
      { name: 'Chennai to Erode', slug: 'chennai-to-erode', distance: '420 km', fare: '₹6,300' },
    ],
  },

  'chennai-to-nagapattinam': {
    from: 'Chennai',
    to: 'Nagapattinam',
    fromSlug: 'chennai',
    toSlug: 'nagapattinam',
    returnRouteSlug: 'nagapattinam-to-chennai',
    distanceKm: 310,
    timeHours: 6,
    distanceDisplay: '310 km',
    durationDisplay: '6 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Coastal","Port","Pilgrimage"],
    roadConditions: 'Coastal 2-lane ECR highway featuring scenic Bay of Bengal views and smooth road surface.',
    heroTagline: 'Affordable One-Way Taxi from Chennai to Nagapattinam. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Chennai to Nagapattinam One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Chennai to Nagapattinam with SAMAYAS. Hatchback from ₹4,650, Sedan ₹4,650, SUV ₹6,200. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 4650,
      "sedan": 4650,
      "suv": 6200,
      "innova": 6820,
      "hycross": 7750,
      "traveller": 9300
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Chennai - Nagapattinam)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Chennai - Nagapattinam Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along ECR.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "ECR Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "ECR Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Chennai Regional Snacks",
                  "location": "Chennai Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Chennai"
            }
      ]
},
    highways: ["ECR","NH32"],
    tolls: {
      costRange: '₹320 - ₹410',
      plazasCount: 4,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Chennai Central City / Main Junction',
      'Chennai Railway Station & Bus Stand',
      'Chennai Residential Areas & Hotels',
      'Chennai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Nagapattinam City Center & Main Commercial Hub',
      'Nagapattinam Railway Station & Transit Terminals',
      'Nagapattinam Hotels, Resorts & Residential Hubs',
      'Nagapattinam Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Chennai', type: 'Origin', desc: 'Doorstep pickup across Chennai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Nagapattinam', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Nagapattinam.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Chennai to Nagapattinam?',
        a: 'The one-way taxi fare from Chennai to Nagapattinam starts at ₹4,650 for a Hatchback, ₹4,650 for a Sedan, and ₹6,200 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Chennai to Nagapattinam?',
        a: 'The distance from Chennai to Nagapattinam is approx 310 km via ECR. Travel duration is around 6 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Chennai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Chennai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Chennai to Nagapattinam. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 6 hours.',
        route: 'Chennai to Nagapattinam',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Chennai to Nagapattinam. Zero return charges and transparent per-km bill.',
        route: 'Chennai to Nagapattinam',
      },
    ],
    nearbyRoutes: [
      { name: 'Nagapattinam to Chennai', slug: 'nagapattinam-to-chennai', distance: '310 km', fare: '₹4,650' },
    ],
  },

  'nagapattinam-to-chennai': {
    from: 'Nagapattinam',
    to: 'Chennai',
    fromSlug: 'nagapattinam',
    toSlug: 'chennai',
    returnRouteSlug: 'chennai-to-nagapattinam',
    distanceKm: 310,
    timeHours: 6,
    distanceDisplay: '310 km',
    durationDisplay: '6 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Business","Medical","Airport"],
    roadConditions: 'Access-controlled NH32 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Nagapattinam to Chennai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Nagapattinam to Chennai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Nagapattinam to Chennai with SAMAYAS. Hatchback from ₹4,650, Sedan ₹4,650, SUV ₹6,200. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 4650,
      "sedan": 4650,
      "suv": 6200,
      "innova": 6820,
      "hycross": 7750,
      "traveller": 9300
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Nagapattinam - Chennai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Nagapattinam - Chennai Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH32.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH32 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH32 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Nagapattinam Regional Snacks",
                  "location": "Nagapattinam Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Nagapattinam"
            }
      ]
},
    highways: ["NH32","ECR"],
    tolls: {
      costRange: '₹320 - ₹410',
      plazasCount: 4,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Nagapattinam Central City / Main Junction',
      'Nagapattinam Railway Station & Bus Stand',
      'Nagapattinam Residential Areas & Hotels',
      'Nagapattinam Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Chennai City Center & Main Commercial Hub',
      'Chennai Railway Station & Transit Terminals',
      'Chennai Hotels, Resorts & Residential Hubs',
      'Chennai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Nagapattinam', type: 'Origin', desc: 'Doorstep pickup across Nagapattinam.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Chennai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Chennai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Nagapattinam to Chennai?',
        a: 'The one-way taxi fare from Nagapattinam to Chennai starts at ₹4,650 for a Hatchback, ₹4,650 for a Sedan, and ₹6,200 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Nagapattinam to Chennai?',
        a: 'The distance from Nagapattinam to Chennai is approx 310 km via NH32. Travel duration is around 6 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Nagapattinam?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Nagapattinam including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Nagapattinam to Chennai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 6 hours.',
        route: 'Nagapattinam to Chennai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Nagapattinam to Chennai. Zero return charges and transparent per-km bill.',
        route: 'Nagapattinam to Chennai',
      },
    ],
    nearbyRoutes: [
      { name: 'Chennai to Nagapattinam', slug: 'chennai-to-nagapattinam', distance: '310 km', fare: '₹4,650' },
    ],
  },

  'trichy-to-madurai': {
    from: 'Trichy',
    to: 'Madurai',
    fromSlug: 'tiruchirappalli',
    toSlug: 'madurai',
    returnRouteSlug: 'madurai-to-trichy',
    distanceKm: 135,
    timeHours: 2.25,
    distanceDisplay: '135 km',
    durationDisplay: '2.25 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: true,
    seasonality: ["All Season"],
    popularFor: ["Business","Temple","Airport"],
    roadConditions: 'Access-controlled NH38 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Trichy to Madurai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Trichy to Madurai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Trichy to Madurai with SAMAYAS. Hatchback from ₹2,025, Sedan ₹2,025, SUV ₹2,700. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2025,
      "sedan": 2025,
      "suv": 2700,
      "innova": 2970,
      "hycross": 3375,
      "traveller": 4050
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Trichy - Madurai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Trichy - Madurai Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH38.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH38 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH38 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Trichy Regional Snacks",
                  "location": "Trichy Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Trichy"
            }
      ]
},
    highways: ["NH38"],
    tolls: {
      costRange: '₹140 - ₹180',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Trichy Central City / Main Junction',
      'Trichy Railway Station & Bus Stand',
      'Trichy Residential Areas & Hotels',
      'Trichy Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Madurai City Center & Main Commercial Hub',
      'Madurai Railway Station & Transit Terminals',
      'Madurai Hotels, Resorts & Residential Hubs',
      'Madurai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Trichy', type: 'Origin', desc: 'Doorstep pickup across Trichy.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Madurai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Madurai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Trichy to Madurai?',
        a: 'The one-way taxi fare from Trichy to Madurai starts at ₹2,025 for a Hatchback, ₹2,025 for a Sedan, and ₹2,700 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Trichy to Madurai?',
        a: 'The distance from Trichy to Madurai is approx 135 km via NH38. Travel duration is around 2.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Trichy?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Trichy including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Trichy to Madurai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2.25 hours.',
        route: 'Trichy to Madurai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Trichy to Madurai. Zero return charges and transparent per-km bill.',
        route: 'Trichy to Madurai',
      },
    ],
    nearbyRoutes: [
      { name: 'Madurai to Trichy', slug: 'madurai-to-trichy', distance: '135 km', fare: '₹2,025' },
    ],
  },

  'madurai-to-trichy': {
    from: 'Madurai',
    to: 'Trichy',
    fromSlug: 'madurai',
    toSlug: 'tiruchirappalli',
    returnRouteSlug: 'trichy-to-madurai',
    distanceKm: 135,
    timeHours: 2.25,
    distanceDisplay: '135 km',
    durationDisplay: '2.25 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Business","TRZ Airport","Temple"],
    roadConditions: 'Access-controlled NH38 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Madurai to Trichy. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Madurai to Trichy One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Madurai to Trichy with SAMAYAS. Hatchback from ₹2,025, Sedan ₹2,025, SUV ₹2,700. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2025,
      "sedan": 2025,
      "suv": 2700,
      "innova": 2970,
      "hycross": 3375,
      "traveller": 4050
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Madurai - Trichy)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Madurai - Trichy Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH38.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH38 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH38 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Madurai Regional Snacks",
                  "location": "Madurai Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Madurai"
            }
      ]
},
    highways: ["NH38"],
    tolls: {
      costRange: '₹140 - ₹180',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Madurai Central City / Main Junction',
      'Madurai Railway Station & Bus Stand',
      'Madurai Residential Areas & Hotels',
      'Madurai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Trichy City Center & Main Commercial Hub',
      'Trichy Railway Station & Transit Terminals',
      'Trichy Hotels, Resorts & Residential Hubs',
      'Trichy Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Madurai', type: 'Origin', desc: 'Doorstep pickup across Madurai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Trichy', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Trichy.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Madurai to Trichy?',
        a: 'The one-way taxi fare from Madurai to Trichy starts at ₹2,025 for a Hatchback, ₹2,025 for a Sedan, and ₹2,700 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Madurai to Trichy?',
        a: 'The distance from Madurai to Trichy is approx 135 km via NH38. Travel duration is around 2.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Madurai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Madurai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Madurai to Trichy. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2.25 hours.',
        route: 'Madurai to Trichy',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Madurai to Trichy. Zero return charges and transparent per-km bill.',
        route: 'Madurai to Trichy',
      },
    ],
    nearbyRoutes: [
      { name: 'Trichy to Madurai', slug: 'trichy-to-madurai', distance: '135 km', fare: '₹2,025' },
    ],
  },

  'trichy-to-coimbatore': {
    from: 'Trichy',
    to: 'Coimbatore',
    fromSlug: 'tiruchirappalli',
    toSlug: 'coimbatore',
    returnRouteSlug: 'coimbatore-to-trichy',
    distanceKm: 215,
    timeHours: 4.25,
    distanceDisplay: '215 km',
    durationDisplay: '4.25 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: true,
    seasonality: ["All Season"],
    popularFor: ["Business","Industrial","Textile"],
    roadConditions: 'Access-controlled NH81 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Trichy to Coimbatore. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Trichy to Coimbatore One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Trichy to Coimbatore with SAMAYAS. Hatchback from ₹3,225, Sedan ₹3,225, SUV ₹4,300. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 3225,
      "sedan": 3225,
      "suv": 4300,
      "innova": 4730,
      "hycross": 5375,
      "traveller": 6450
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Trichy - Coimbatore)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Trichy - Coimbatore Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH81.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH81 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH81 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Trichy Regional Snacks",
                  "location": "Trichy Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Trichy"
            }
      ]
},
    highways: ["NH81"],
    tolls: {
      costRange: '₹180 - ₹240',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Trichy Central City / Main Junction',
      'Trichy Railway Station & Bus Stand',
      'Trichy Residential Areas & Hotels',
      'Trichy Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Coimbatore City Center & Main Commercial Hub',
      'Coimbatore Railway Station & Transit Terminals',
      'Coimbatore Hotels, Resorts & Residential Hubs',
      'Coimbatore Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Trichy', type: 'Origin', desc: 'Doorstep pickup across Trichy.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Coimbatore', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Coimbatore.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Trichy to Coimbatore?',
        a: 'The one-way taxi fare from Trichy to Coimbatore starts at ₹3,225 for a Hatchback, ₹3,225 for a Sedan, and ₹4,300 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Trichy to Coimbatore?',
        a: 'The distance from Trichy to Coimbatore is approx 215 km via NH81. Travel duration is around 4.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Trichy?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Trichy including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Trichy to Coimbatore. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 4.25 hours.',
        route: 'Trichy to Coimbatore',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Trichy to Coimbatore. Zero return charges and transparent per-km bill.',
        route: 'Trichy to Coimbatore',
      },
    ],
    nearbyRoutes: [
      { name: 'Coimbatore to Trichy', slug: 'coimbatore-to-trichy', distance: '215 km', fare: '₹3,225' },
    ],
  },

  'coimbatore-to-trichy': {
    from: 'Coimbatore',
    to: 'Trichy',
    fromSlug: 'coimbatore',
    toSlug: 'tiruchirappalli',
    returnRouteSlug: 'trichy-to-coimbatore',
    distanceKm: 215,
    timeHours: 4.25,
    distanceDisplay: '215 km',
    durationDisplay: '4.25 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Business","TRZ Airport","Education"],
    roadConditions: 'Access-controlled NH81 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Coimbatore to Trichy. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Coimbatore to Trichy One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Coimbatore to Trichy with SAMAYAS. Hatchback from ₹3,225, Sedan ₹3,225, SUV ₹4,300. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 3225,
      "sedan": 3225,
      "suv": 4300,
      "innova": 4730,
      "hycross": 5375,
      "traveller": 6450
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Coimbatore - Trichy)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Coimbatore - Trichy Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH81.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH81 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH81 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Coimbatore Regional Snacks",
                  "location": "Coimbatore Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Coimbatore"
            }
      ]
},
    highways: ["NH81"],
    tolls: {
      costRange: '₹180 - ₹240',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Coimbatore Central City / Main Junction',
      'Coimbatore Railway Station & Bus Stand',
      'Coimbatore Residential Areas & Hotels',
      'Coimbatore Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Trichy City Center & Main Commercial Hub',
      'Trichy Railway Station & Transit Terminals',
      'Trichy Hotels, Resorts & Residential Hubs',
      'Trichy Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Coimbatore', type: 'Origin', desc: 'Doorstep pickup across Coimbatore.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Trichy', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Trichy.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Coimbatore to Trichy?',
        a: 'The one-way taxi fare from Coimbatore to Trichy starts at ₹3,225 for a Hatchback, ₹3,225 for a Sedan, and ₹4,300 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Coimbatore to Trichy?',
        a: 'The distance from Coimbatore to Trichy is approx 215 km via NH81. Travel duration is around 4.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Coimbatore?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Coimbatore including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Coimbatore to Trichy. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 4.25 hours.',
        route: 'Coimbatore to Trichy',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Coimbatore to Trichy. Zero return charges and transparent per-km bill.',
        route: 'Coimbatore to Trichy',
      },
    ],
    nearbyRoutes: [
      { name: 'Trichy to Coimbatore', slug: 'trichy-to-coimbatore', distance: '215 km', fare: '₹3,225' },
    ],
  },

  'trichy-to-salem': {
    from: 'Trichy',
    to: 'Salem',
    fromSlug: 'tiruchirappalli',
    toSlug: 'salem',
    returnRouteSlug: 'salem-to-trichy',
    distanceKm: 140,
    timeHours: 2.75,
    distanceDisplay: '140 km',
    durationDisplay: '2.75 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Business","Transit"],
    roadConditions: 'Access-controlled NH81 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Trichy to Salem. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Trichy to Salem One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Trichy to Salem with SAMAYAS. Hatchback from ₹2,100, Sedan ₹2,100, SUV ₹2,800. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2100,
      "sedan": 2100,
      "suv": 2800,
      "innova": 3080,
      "hycross": 3500,
      "traveller": 4200
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Trichy - Salem)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Trichy - Salem Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH81.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH81 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH81 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Salem Malgova Mangoes & Thattu Vadai",
                  "location": "Salem Highway Market",
                  "famousFor": "Seasonal juicy Malgova mangoes & crisp street snack"
            }
      ]
},
    highways: ["NH81","NH44"],
    tolls: {
      costRange: '₹120 - ₹160',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Trichy Central City / Main Junction',
      'Trichy Railway Station & Bus Stand',
      'Trichy Residential Areas & Hotels',
      'Trichy Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Salem City Center & Main Commercial Hub',
      'Salem Railway Station & Transit Terminals',
      'Salem Hotels, Resorts & Residential Hubs',
      'Salem Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Trichy', type: 'Origin', desc: 'Doorstep pickup across Trichy.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Salem', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Salem.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Trichy to Salem?',
        a: 'The one-way taxi fare from Trichy to Salem starts at ₹2,100 for a Hatchback, ₹2,100 for a Sedan, and ₹2,800 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Trichy to Salem?',
        a: 'The distance from Trichy to Salem is approx 140 km via NH81. Travel duration is around 2.75 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Trichy?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Trichy including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Trichy to Salem. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2.75 hours.',
        route: 'Trichy to Salem',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Trichy to Salem. Zero return charges and transparent per-km bill.',
        route: 'Trichy to Salem',
      },
    ],
    nearbyRoutes: [
      { name: 'Salem to Trichy', slug: 'salem-to-trichy', distance: '140 km', fare: '₹2,100' },
    ],
  },

  'salem-to-trichy': {
    from: 'Salem',
    to: 'Trichy',
    fromSlug: 'salem',
    toSlug: 'tiruchirappalli',
    returnRouteSlug: 'trichy-to-salem',
    distanceKm: 140,
    timeHours: 2.75,
    distanceDisplay: '140 km',
    durationDisplay: '2.75 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Business","TRZ Airport"],
    roadConditions: 'Access-controlled NH44 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Salem to Trichy. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Salem to Trichy One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Salem to Trichy with SAMAYAS. Hatchback from ₹2,100, Sedan ₹2,100, SUV ₹2,800. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2100,
      "sedan": 2100,
      "suv": 2800,
      "innova": 3080,
      "hycross": 3500,
      "traveller": 4200
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Salem - Trichy)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Salem - Trichy Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH44.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH44 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH44 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Salem Malgova Mangoes & Thattu Vadai",
                  "location": "Salem Highway Market",
                  "famousFor": "Seasonal juicy Malgova mangoes & crisp street snack"
            }
      ]
},
    highways: ["NH44","NH81"],
    tolls: {
      costRange: '₹120 - ₹160',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Salem Central City / Main Junction',
      'Salem Railway Station & Bus Stand',
      'Salem Residential Areas & Hotels',
      'Salem Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Trichy City Center & Main Commercial Hub',
      'Trichy Railway Station & Transit Terminals',
      'Trichy Hotels, Resorts & Residential Hubs',
      'Trichy Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Salem', type: 'Origin', desc: 'Doorstep pickup across Salem.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Trichy', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Trichy.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Salem to Trichy?',
        a: 'The one-way taxi fare from Salem to Trichy starts at ₹2,100 for a Hatchback, ₹2,100 for a Sedan, and ₹2,800 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Salem to Trichy?',
        a: 'The distance from Salem to Trichy is approx 140 km via NH44. Travel duration is around 2.75 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Salem?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Salem including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Salem to Trichy. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2.75 hours.',
        route: 'Salem to Trichy',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Salem to Trichy. Zero return charges and transparent per-km bill.',
        route: 'Salem to Trichy',
      },
    ],
    nearbyRoutes: [
      { name: 'Trichy to Salem', slug: 'trichy-to-salem', distance: '140 km', fare: '₹2,100' },
    ],
  },

  'trichy-to-thanjavur': {
    from: 'Trichy',
    to: 'Thanjavur',
    fromSlug: 'tiruchirappalli',
    toSlug: 'thanjavur',
    returnRouteSlug: 'thanjavur-to-trichy',
    distanceKm: 55,
    timeHours: 1,
    distanceDisplay: '55 km',
    durationDisplay: '1 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: true,
    seasonality: ["All Season"],
    popularFor: ["Commute","Tourism","Heritage"],
    roadConditions: 'Access-controlled NH83 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Trichy to Thanjavur. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Trichy to Thanjavur One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Trichy to Thanjavur with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Trichy - Thanjavur)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Trichy - Thanjavur Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH83.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH83 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH83 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Trichy Regional Snacks",
                  "location": "Trichy Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Trichy"
            }
      ]
},
    highways: ["NH83"],
    tolls: {
      costRange: '₹40 - ₹70',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Trichy Central City / Main Junction',
      'Trichy Railway Station & Bus Stand',
      'Trichy Residential Areas & Hotels',
      'Trichy Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Thanjavur City Center & Main Commercial Hub',
      'Thanjavur Railway Station & Transit Terminals',
      'Thanjavur Hotels, Resorts & Residential Hubs',
      'Thanjavur Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Trichy', type: 'Origin', desc: 'Doorstep pickup across Trichy.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Thanjavur', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Thanjavur.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Trichy to Thanjavur?',
        a: 'The one-way taxi fare from Trichy to Thanjavur starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Trichy to Thanjavur?',
        a: 'The distance from Trichy to Thanjavur is approx 55 km via NH83. Travel duration is around 1 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Trichy?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Trichy including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Trichy to Thanjavur. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 1 hours.',
        route: 'Trichy to Thanjavur',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Trichy to Thanjavur. Zero return charges and transparent per-km bill.',
        route: 'Trichy to Thanjavur',
      },
    ],
    nearbyRoutes: [
      { name: 'Thanjavur to Trichy', slug: 'thanjavur-to-trichy', distance: '55 km', fare: '₹1,950' },
    ],
  },

  'thanjavur-to-trichy': {
    from: 'Thanjavur',
    to: 'Trichy',
    fromSlug: 'thanjavur',
    toSlug: 'tiruchirappalli',
    returnRouteSlug: 'trichy-to-thanjavur',
    distanceKm: 55,
    timeHours: 1,
    distanceDisplay: '55 km',
    durationDisplay: '1 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["TRZ Airport","Medical","Shopping"],
    roadConditions: 'Access-controlled NH83 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Thanjavur to Trichy. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Thanjavur to Trichy One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Thanjavur to Trichy with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Thanjavur - Trichy)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Thanjavur - Trichy Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH83.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH83 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH83 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Thanjavur Regional Snacks",
                  "location": "Thanjavur Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Thanjavur"
            }
      ]
},
    highways: ["NH83"],
    tolls: {
      costRange: '₹40 - ₹70',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Thanjavur Central City / Main Junction',
      'Thanjavur Railway Station & Bus Stand',
      'Thanjavur Residential Areas & Hotels',
      'Thanjavur Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Trichy City Center & Main Commercial Hub',
      'Trichy Railway Station & Transit Terminals',
      'Trichy Hotels, Resorts & Residential Hubs',
      'Trichy Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Thanjavur', type: 'Origin', desc: 'Doorstep pickup across Thanjavur.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Trichy', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Trichy.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Thanjavur to Trichy?',
        a: 'The one-way taxi fare from Thanjavur to Trichy starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Thanjavur to Trichy?',
        a: 'The distance from Thanjavur to Trichy is approx 55 km via NH83. Travel duration is around 1 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Thanjavur?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Thanjavur including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Thanjavur to Trichy. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 1 hours.',
        route: 'Thanjavur to Trichy',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Thanjavur to Trichy. Zero return charges and transparent per-km bill.',
        route: 'Thanjavur to Trichy',
      },
    ],
    nearbyRoutes: [
      { name: 'Trichy to Thanjavur', slug: 'trichy-to-thanjavur', distance: '55 km', fare: '₹1,950' },
    ],
  },

  'trichy-to-tirunelveli': {
    from: 'Trichy',
    to: 'Tirunelveli',
    fromSlug: 'tiruchirappalli',
    toSlug: 'tirunelveli',
    returnRouteSlug: 'tirunelveli-to-trichy',
    distanceKm: 290,
    timeHours: 4.75,
    distanceDisplay: '290 km',
    durationDisplay: '4.75 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Family","Business"],
    roadConditions: 'Access-controlled NH38 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Trichy to Tirunelveli. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Trichy to Tirunelveli One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Trichy to Tirunelveli with SAMAYAS. Hatchback from ₹4,350, Sedan ₹4,350, SUV ₹5,800. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 4350,
      "sedan": 4350,
      "suv": 5800,
      "innova": 6380,
      "hycross": 7250,
      "traveller": 8700
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Trichy - Tirunelveli)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Trichy - Tirunelveli Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH38.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH38 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH38 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Iruttu Kadai Halwa",
                  "location": "Tirunelveli Town",
                  "famousFor": "Hot wheat halwa made with Tamirabharani river water"
            }
      ]
},
    highways: ["NH38","NH44"],
    tolls: {
      costRange: '₹340 - ₹420',
      plazasCount: 4,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Trichy Central City / Main Junction',
      'Trichy Railway Station & Bus Stand',
      'Trichy Residential Areas & Hotels',
      'Trichy Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Tirunelveli City Center & Main Commercial Hub',
      'Tirunelveli Railway Station & Transit Terminals',
      'Tirunelveli Hotels, Resorts & Residential Hubs',
      'Tirunelveli Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Trichy', type: 'Origin', desc: 'Doorstep pickup across Trichy.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Tirunelveli', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Tirunelveli.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Trichy to Tirunelveli?',
        a: 'The one-way taxi fare from Trichy to Tirunelveli starts at ₹4,350 for a Hatchback, ₹4,350 for a Sedan, and ₹5,800 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Trichy to Tirunelveli?',
        a: 'The distance from Trichy to Tirunelveli is approx 290 km via NH38. Travel duration is around 4.75 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Trichy?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Trichy including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Trichy to Tirunelveli. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 4.75 hours.',
        route: 'Trichy to Tirunelveli',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Trichy to Tirunelveli. Zero return charges and transparent per-km bill.',
        route: 'Trichy to Tirunelveli',
      },
    ],
    nearbyRoutes: [
      { name: 'Tirunelveli to Trichy', slug: 'tirunelveli-to-trichy', distance: '290 km', fare: '₹4,350' },
    ],
  },

  'tirunelveli-to-trichy': {
    from: 'Tirunelveli',
    to: 'Trichy',
    fromSlug: 'tirunelveli',
    toSlug: 'tiruchirappalli',
    returnRouteSlug: 'trichy-to-tirunelveli',
    distanceKm: 290,
    timeHours: 4.75,
    distanceDisplay: '290 km',
    durationDisplay: '4.75 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["TRZ Airport","Education"],
    roadConditions: 'Access-controlled NH44 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Tirunelveli to Trichy. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Tirunelveli to Trichy One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Tirunelveli to Trichy with SAMAYAS. Hatchback from ₹4,350, Sedan ₹4,350, SUV ₹5,800. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 4350,
      "sedan": 4350,
      "suv": 5800,
      "innova": 6380,
      "hycross": 7250,
      "traveller": 8700
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Tirunelveli - Trichy)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Tirunelveli - Trichy Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH44.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH44 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH44 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Iruttu Kadai Halwa",
                  "location": "Tirunelveli Town",
                  "famousFor": "Hot wheat halwa made with Tamirabharani river water"
            }
      ]
},
    highways: ["NH44","NH38"],
    tolls: {
      costRange: '₹340 - ₹420',
      plazasCount: 4,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Tirunelveli Central City / Main Junction',
      'Tirunelveli Railway Station & Bus Stand',
      'Tirunelveli Residential Areas & Hotels',
      'Tirunelveli Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Trichy City Center & Main Commercial Hub',
      'Trichy Railway Station & Transit Terminals',
      'Trichy Hotels, Resorts & Residential Hubs',
      'Trichy Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Tirunelveli', type: 'Origin', desc: 'Doorstep pickup across Tirunelveli.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Trichy', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Trichy.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Tirunelveli to Trichy?',
        a: 'The one-way taxi fare from Tirunelveli to Trichy starts at ₹4,350 for a Hatchback, ₹4,350 for a Sedan, and ₹5,800 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Tirunelveli to Trichy?',
        a: 'The distance from Tirunelveli to Trichy is approx 290 km via NH44. Travel duration is around 4.75 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Tirunelveli?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Tirunelveli including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Tirunelveli to Trichy. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 4.75 hours.',
        route: 'Tirunelveli to Trichy',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Tirunelveli to Trichy. Zero return charges and transparent per-km bill.',
        route: 'Tirunelveli to Trichy',
      },
    ],
    nearbyRoutes: [
      { name: 'Trichy to Tirunelveli', slug: 'trichy-to-tirunelveli', distance: '290 km', fare: '₹4,350' },
    ],
  },

  'trichy-to-erode': {
    from: 'Trichy',
    to: 'Erode',
    fromSlug: 'tiruchirappalli',
    toSlug: 'erode',
    returnRouteSlug: 'erode-to-trichy',
    distanceKm: 155,
    timeHours: 3.25,
    distanceDisplay: '155 km',
    durationDisplay: '3.25 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Business","Textile"],
    roadConditions: 'Access-controlled NH81 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Trichy to Erode. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Trichy to Erode One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Trichy to Erode with SAMAYAS. Hatchback from ₹2,325, Sedan ₹2,325, SUV ₹3,100. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2325,
      "sedan": 2325,
      "suv": 3100,
      "innova": 3410,
      "hycross": 3875,
      "traveller": 4650
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Trichy - Erode)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Trichy - Erode Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH81.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH81 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH81 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Trichy Regional Snacks",
                  "location": "Trichy Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Trichy"
            }
      ]
},
    highways: ["NH81"],
    tolls: {
      costRange: '₹110 - ₹150',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Trichy Central City / Main Junction',
      'Trichy Railway Station & Bus Stand',
      'Trichy Residential Areas & Hotels',
      'Trichy Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Erode City Center & Main Commercial Hub',
      'Erode Railway Station & Transit Terminals',
      'Erode Hotels, Resorts & Residential Hubs',
      'Erode Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Trichy', type: 'Origin', desc: 'Doorstep pickup across Trichy.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Erode', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Erode.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Trichy to Erode?',
        a: 'The one-way taxi fare from Trichy to Erode starts at ₹2,325 for a Hatchback, ₹2,325 for a Sedan, and ₹3,100 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Trichy to Erode?',
        a: 'The distance from Trichy to Erode is approx 155 km via NH81. Travel duration is around 3.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Trichy?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Trichy including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Trichy to Erode. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3.25 hours.',
        route: 'Trichy to Erode',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Trichy to Erode. Zero return charges and transparent per-km bill.',
        route: 'Trichy to Erode',
      },
    ],
    nearbyRoutes: [
      { name: 'Erode to Trichy', slug: 'erode-to-trichy', distance: '155 km', fare: '₹2,325' },
    ],
  },

  'erode-to-trichy': {
    from: 'Erode',
    to: 'Trichy',
    fromSlug: 'erode',
    toSlug: 'tiruchirappalli',
    returnRouteSlug: 'trichy-to-erode',
    distanceKm: 155,
    timeHours: 3.25,
    distanceDisplay: '155 km',
    durationDisplay: '3.25 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["TRZ Airport","Medical"],
    roadConditions: 'Access-controlled NH81 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Erode to Trichy. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Erode to Trichy One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Erode to Trichy with SAMAYAS. Hatchback from ₹2,325, Sedan ₹2,325, SUV ₹3,100. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2325,
      "sedan": 2325,
      "suv": 3100,
      "innova": 3410,
      "hycross": 3875,
      "traveller": 4650
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Erode - Trichy)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Erode - Trichy Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH81.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH81 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH81 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Erode Regional Snacks",
                  "location": "Erode Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Erode"
            }
      ]
},
    highways: ["NH81"],
    tolls: {
      costRange: '₹110 - ₹150',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Erode Central City / Main Junction',
      'Erode Railway Station & Bus Stand',
      'Erode Residential Areas & Hotels',
      'Erode Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Trichy City Center & Main Commercial Hub',
      'Trichy Railway Station & Transit Terminals',
      'Trichy Hotels, Resorts & Residential Hubs',
      'Trichy Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Erode', type: 'Origin', desc: 'Doorstep pickup across Erode.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Trichy', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Trichy.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Erode to Trichy?',
        a: 'The one-way taxi fare from Erode to Trichy starts at ₹2,325 for a Hatchback, ₹2,325 for a Sedan, and ₹3,100 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Erode to Trichy?',
        a: 'The distance from Erode to Trichy is approx 155 km via NH81. Travel duration is around 3.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Erode?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Erode including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Erode to Trichy. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3.25 hours.',
        route: 'Erode to Trichy',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Erode to Trichy. Zero return charges and transparent per-km bill.',
        route: 'Erode to Trichy',
      },
    ],
    nearbyRoutes: [
      { name: 'Trichy to Erode', slug: 'trichy-to-erode', distance: '155 km', fare: '₹2,325' },
    ],
  },

  'madurai-to-coimbatore': {
    from: 'Madurai',
    to: 'Coimbatore',
    fromSlug: 'madurai',
    toSlug: 'coimbatore',
    returnRouteSlug: 'coimbatore-to-madurai',
    distanceKm: 210,
    timeHours: 4.25,
    distanceDisplay: '210 km',
    durationDisplay: '4.25 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: true,
    seasonality: ["All Season"],
    popularFor: ["Business","Industrial","Medical"],
    roadConditions: 'Access-controlled NH83 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Madurai to Coimbatore. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Madurai to Coimbatore One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Madurai to Coimbatore with SAMAYAS. Hatchback from ₹3,150, Sedan ₹3,150, SUV ₹4,200. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 3150,
      "sedan": 3150,
      "suv": 4200,
      "innova": 4620,
      "hycross": 5250,
      "traveller": 6300
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Madurai - Coimbatore)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Madurai - Coimbatore Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH83.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH83 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH83 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Madurai Regional Snacks",
                  "location": "Madurai Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Madurai"
            }
      ]
},
    highways: ["NH83"],
    tolls: {
      costRange: '₹160 - ₹220',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Madurai Central City / Main Junction',
      'Madurai Railway Station & Bus Stand',
      'Madurai Residential Areas & Hotels',
      'Madurai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Coimbatore City Center & Main Commercial Hub',
      'Coimbatore Railway Station & Transit Terminals',
      'Coimbatore Hotels, Resorts & Residential Hubs',
      'Coimbatore Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Madurai', type: 'Origin', desc: 'Doorstep pickup across Madurai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Coimbatore', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Coimbatore.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Madurai to Coimbatore?',
        a: 'The one-way taxi fare from Madurai to Coimbatore starts at ₹3,150 for a Hatchback, ₹3,150 for a Sedan, and ₹4,200 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Madurai to Coimbatore?',
        a: 'The distance from Madurai to Coimbatore is approx 210 km via NH83. Travel duration is around 4.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Madurai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Madurai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Madurai to Coimbatore. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 4.25 hours.',
        route: 'Madurai to Coimbatore',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Madurai to Coimbatore. Zero return charges and transparent per-km bill.',
        route: 'Madurai to Coimbatore',
      },
    ],
    nearbyRoutes: [
      { name: 'Coimbatore to Madurai', slug: 'coimbatore-to-madurai', distance: '210 km', fare: '₹3,150' },
    ],
  },

  'coimbatore-to-madurai': {
    from: 'Coimbatore',
    to: 'Madurai',
    fromSlug: 'coimbatore',
    toSlug: 'madurai',
    returnRouteSlug: 'madurai-to-coimbatore',
    distanceKm: 210,
    timeHours: 4.25,
    distanceDisplay: '210 km',
    durationDisplay: '4.25 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Business","Temple","IXM Airport"],
    roadConditions: 'Access-controlled NH83 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Coimbatore to Madurai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Coimbatore to Madurai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Coimbatore to Madurai with SAMAYAS. Hatchback from ₹3,150, Sedan ₹3,150, SUV ₹4,200. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 3150,
      "sedan": 3150,
      "suv": 4200,
      "innova": 4620,
      "hycross": 5250,
      "traveller": 6300
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Coimbatore - Madurai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Coimbatore - Madurai Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH83.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH83 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH83 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Coimbatore Regional Snacks",
                  "location": "Coimbatore Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Coimbatore"
            }
      ]
},
    highways: ["NH83"],
    tolls: {
      costRange: '₹160 - ₹220',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Coimbatore Central City / Main Junction',
      'Coimbatore Railway Station & Bus Stand',
      'Coimbatore Residential Areas & Hotels',
      'Coimbatore Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Madurai City Center & Main Commercial Hub',
      'Madurai Railway Station & Transit Terminals',
      'Madurai Hotels, Resorts & Residential Hubs',
      'Madurai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Coimbatore', type: 'Origin', desc: 'Doorstep pickup across Coimbatore.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Madurai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Madurai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Coimbatore to Madurai?',
        a: 'The one-way taxi fare from Coimbatore to Madurai starts at ₹3,150 for a Hatchback, ₹3,150 for a Sedan, and ₹4,200 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Coimbatore to Madurai?',
        a: 'The distance from Coimbatore to Madurai is approx 210 km via NH83. Travel duration is around 4.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Coimbatore?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Coimbatore including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Coimbatore to Madurai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 4.25 hours.',
        route: 'Coimbatore to Madurai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Coimbatore to Madurai. Zero return charges and transparent per-km bill.',
        route: 'Coimbatore to Madurai',
      },
    ],
    nearbyRoutes: [
      { name: 'Madurai to Coimbatore', slug: 'madurai-to-coimbatore', distance: '210 km', fare: '₹3,150' },
    ],
  },

  'madurai-to-tirunelveli': {
    from: 'Madurai',
    to: 'Tirunelveli',
    fromSlug: 'madurai',
    toSlug: 'tirunelveli',
    returnRouteSlug: 'tirunelveli-to-madurai',
    distanceKm: 160,
    timeHours: 2.75,
    distanceDisplay: '160 km',
    durationDisplay: '2.75 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Business","Halwa City","Family"],
    roadConditions: 'Access-controlled NH44 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Madurai to Tirunelveli. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Madurai to Tirunelveli One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Madurai to Tirunelveli with SAMAYAS. Hatchback from ₹2,400, Sedan ₹2,400, SUV ₹3,200. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2400,
      "sedan": 2400,
      "suv": 3200,
      "innova": 3520,
      "hycross": 4000,
      "traveller": 4800
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Madurai - Tirunelveli)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Madurai - Tirunelveli Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH44.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH44 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH44 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Iruttu Kadai Halwa",
                  "location": "Tirunelveli Town",
                  "famousFor": "Hot wheat halwa made with Tamirabharani river water"
            }
      ]
},
    highways: ["NH44"],
    tolls: {
      costRange: '₹180 - ₹230',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Madurai Central City / Main Junction',
      'Madurai Railway Station & Bus Stand',
      'Madurai Residential Areas & Hotels',
      'Madurai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Tirunelveli City Center & Main Commercial Hub',
      'Tirunelveli Railway Station & Transit Terminals',
      'Tirunelveli Hotels, Resorts & Residential Hubs',
      'Tirunelveli Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Madurai', type: 'Origin', desc: 'Doorstep pickup across Madurai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Tirunelveli', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Tirunelveli.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Madurai to Tirunelveli?',
        a: 'The one-way taxi fare from Madurai to Tirunelveli starts at ₹2,400 for a Hatchback, ₹2,400 for a Sedan, and ₹3,200 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Madurai to Tirunelveli?',
        a: 'The distance from Madurai to Tirunelveli is approx 160 km via NH44. Travel duration is around 2.75 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Madurai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Madurai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Madurai to Tirunelveli. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2.75 hours.',
        route: 'Madurai to Tirunelveli',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Madurai to Tirunelveli. Zero return charges and transparent per-km bill.',
        route: 'Madurai to Tirunelveli',
      },
    ],
    nearbyRoutes: [
      { name: 'Tirunelveli to Madurai', slug: 'tirunelveli-to-madurai', distance: '160 km', fare: '₹2,400' },
    ],
  },

  'tirunelveli-to-madurai': {
    from: 'Tirunelveli',
    to: 'Madurai',
    fromSlug: 'tirunelveli',
    toSlug: 'madurai',
    returnRouteSlug: 'madurai-to-tirunelveli',
    distanceKm: 160,
    timeHours: 2.75,
    distanceDisplay: '160 km',
    durationDisplay: '2.75 Hours',
    category: 'City',
    popularity: 9,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["IXM Airport","Medical","Temple"],
    roadConditions: 'Access-controlled NH44 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Tirunelveli to Madurai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Tirunelveli to Madurai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Tirunelveli to Madurai with SAMAYAS. Hatchback from ₹2,400, Sedan ₹2,400, SUV ₹3,200. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2400,
      "sedan": 2400,
      "suv": 3200,
      "innova": 3520,
      "hycross": 4000,
      "traveller": 4800
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Tirunelveli - Madurai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Tirunelveli - Madurai Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH44.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH44 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH44 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Iruttu Kadai Halwa",
                  "location": "Tirunelveli Town",
                  "famousFor": "Hot wheat halwa made with Tamirabharani river water"
            }
      ]
},
    highways: ["NH44"],
    tolls: {
      costRange: '₹180 - ₹230',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Tirunelveli Central City / Main Junction',
      'Tirunelveli Railway Station & Bus Stand',
      'Tirunelveli Residential Areas & Hotels',
      'Tirunelveli Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Madurai City Center & Main Commercial Hub',
      'Madurai Railway Station & Transit Terminals',
      'Madurai Hotels, Resorts & Residential Hubs',
      'Madurai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Tirunelveli', type: 'Origin', desc: 'Doorstep pickup across Tirunelveli.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Madurai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Madurai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Tirunelveli to Madurai?',
        a: 'The one-way taxi fare from Tirunelveli to Madurai starts at ₹2,400 for a Hatchback, ₹2,400 for a Sedan, and ₹3,200 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Tirunelveli to Madurai?',
        a: 'The distance from Tirunelveli to Madurai is approx 160 km via NH44. Travel duration is around 2.75 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Tirunelveli?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Tirunelveli including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Tirunelveli to Madurai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2.75 hours.',
        route: 'Tirunelveli to Madurai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Tirunelveli to Madurai. Zero return charges and transparent per-km bill.',
        route: 'Tirunelveli to Madurai',
      },
    ],
    nearbyRoutes: [
      { name: 'Madurai to Tirunelveli', slug: 'madurai-to-tirunelveli', distance: '160 km', fare: '₹2,400' },
    ],
  },

  'coimbatore-to-salem': {
    from: 'Coimbatore',
    to: 'Salem',
    fromSlug: 'coimbatore',
    toSlug: 'salem',
    returnRouteSlug: 'salem-to-coimbatore',
    distanceKm: 165,
    timeHours: 3,
    distanceDisplay: '165 km',
    durationDisplay: '3 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Business","Textile","Steel"],
    roadConditions: 'Access-controlled NH544 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Coimbatore to Salem. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Coimbatore to Salem One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Coimbatore to Salem with SAMAYAS. Hatchback from ₹2,475, Sedan ₹2,475, SUV ₹3,300. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2475,
      "sedan": 2475,
      "suv": 3300,
      "innova": 3630,
      "hycross": 4125,
      "traveller": 4950
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Coimbatore - Salem)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Coimbatore - Salem Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH544.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH544 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH544 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Salem Malgova Mangoes & Thattu Vadai",
                  "location": "Salem Highway Market",
                  "famousFor": "Seasonal juicy Malgova mangoes & crisp street snack"
            }
      ]
},
    highways: ["NH544"],
    tolls: {
      costRange: '₹180 - ₹240',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Coimbatore Central City / Main Junction',
      'Coimbatore Railway Station & Bus Stand',
      'Coimbatore Residential Areas & Hotels',
      'Coimbatore Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Salem City Center & Main Commercial Hub',
      'Salem Railway Station & Transit Terminals',
      'Salem Hotels, Resorts & Residential Hubs',
      'Salem Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Coimbatore', type: 'Origin', desc: 'Doorstep pickup across Coimbatore.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Salem', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Salem.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Coimbatore to Salem?',
        a: 'The one-way taxi fare from Coimbatore to Salem starts at ₹2,475 for a Hatchback, ₹2,475 for a Sedan, and ₹3,300 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Coimbatore to Salem?',
        a: 'The distance from Coimbatore to Salem is approx 165 km via NH544. Travel duration is around 3 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Coimbatore?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Coimbatore including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Coimbatore to Salem. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3 hours.',
        route: 'Coimbatore to Salem',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Coimbatore to Salem. Zero return charges and transparent per-km bill.',
        route: 'Coimbatore to Salem',
      },
    ],
    nearbyRoutes: [
      { name: 'Salem to Coimbatore', slug: 'salem-to-coimbatore', distance: '165 km', fare: '₹2,475' },
    ],
  },

  'salem-to-coimbatore': {
    from: 'Salem',
    to: 'Coimbatore',
    fromSlug: 'salem',
    toSlug: 'coimbatore',
    returnRouteSlug: 'coimbatore-to-salem',
    distanceKm: 165,
    timeHours: 3,
    distanceDisplay: '165 km',
    durationDisplay: '3 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Business","CJB Airport","Medical"],
    roadConditions: 'Access-controlled NH544 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Salem to Coimbatore. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Salem to Coimbatore One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Salem to Coimbatore with SAMAYAS. Hatchback from ₹2,475, Sedan ₹2,475, SUV ₹3,300. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2475,
      "sedan": 2475,
      "suv": 3300,
      "innova": 3630,
      "hycross": 4125,
      "traveller": 4950
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Salem - Coimbatore)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Salem - Coimbatore Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH544.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH544 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH544 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Salem Malgova Mangoes & Thattu Vadai",
                  "location": "Salem Highway Market",
                  "famousFor": "Seasonal juicy Malgova mangoes & crisp street snack"
            }
      ]
},
    highways: ["NH544"],
    tolls: {
      costRange: '₹180 - ₹240',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Salem Central City / Main Junction',
      'Salem Railway Station & Bus Stand',
      'Salem Residential Areas & Hotels',
      'Salem Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Coimbatore City Center & Main Commercial Hub',
      'Coimbatore Railway Station & Transit Terminals',
      'Coimbatore Hotels, Resorts & Residential Hubs',
      'Coimbatore Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Salem', type: 'Origin', desc: 'Doorstep pickup across Salem.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Coimbatore', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Coimbatore.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Salem to Coimbatore?',
        a: 'The one-way taxi fare from Salem to Coimbatore starts at ₹2,475 for a Hatchback, ₹2,475 for a Sedan, and ₹3,300 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Salem to Coimbatore?',
        a: 'The distance from Salem to Coimbatore is approx 165 km via NH544. Travel duration is around 3 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Salem?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Salem including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Salem to Coimbatore. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3 hours.',
        route: 'Salem to Coimbatore',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Salem to Coimbatore. Zero return charges and transparent per-km bill.',
        route: 'Salem to Coimbatore',
      },
    ],
    nearbyRoutes: [
      { name: 'Coimbatore to Salem', slug: 'coimbatore-to-salem', distance: '165 km', fare: '₹2,475' },
    ],
  },

  'coimbatore-to-erode': {
    from: 'Coimbatore',
    to: 'Erode',
    fromSlug: 'coimbatore',
    toSlug: 'erode',
    returnRouteSlug: 'erode-to-coimbatore',
    distanceKm: 100,
    timeHours: 2,
    distanceDisplay: '100 km',
    durationDisplay: '2 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Textile","Business"],
    roadConditions: 'Access-controlled NH544 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Coimbatore to Erode. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Coimbatore to Erode One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Coimbatore to Erode with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Coimbatore - Erode)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Coimbatore - Erode Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH544.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH544 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH544 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Coimbatore Regional Snacks",
                  "location": "Coimbatore Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Coimbatore"
            }
      ]
},
    highways: ["NH544"],
    tolls: {
      costRange: '₹90 - ₹130',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Coimbatore Central City / Main Junction',
      'Coimbatore Railway Station & Bus Stand',
      'Coimbatore Residential Areas & Hotels',
      'Coimbatore Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Erode City Center & Main Commercial Hub',
      'Erode Railway Station & Transit Terminals',
      'Erode Hotels, Resorts & Residential Hubs',
      'Erode Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Coimbatore', type: 'Origin', desc: 'Doorstep pickup across Coimbatore.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Erode', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Erode.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Coimbatore to Erode?',
        a: 'The one-way taxi fare from Coimbatore to Erode starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Coimbatore to Erode?',
        a: 'The distance from Coimbatore to Erode is approx 100 km via NH544. Travel duration is around 2 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Coimbatore?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Coimbatore including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Coimbatore to Erode. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2 hours.',
        route: 'Coimbatore to Erode',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Coimbatore to Erode. Zero return charges and transparent per-km bill.',
        route: 'Coimbatore to Erode',
      },
    ],
    nearbyRoutes: [
      { name: 'Erode to Coimbatore', slug: 'erode-to-coimbatore', distance: '100 km', fare: '₹1,950' },
    ],
  },

  'erode-to-coimbatore': {
    from: 'Erode',
    to: 'Coimbatore',
    fromSlug: 'erode',
    toSlug: 'coimbatore',
    returnRouteSlug: 'coimbatore-to-erode',
    distanceKm: 100,
    timeHours: 2,
    distanceDisplay: '100 km',
    durationDisplay: '2 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["CJB Airport","Medical","Corporate"],
    roadConditions: 'Access-controlled NH544 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Erode to Coimbatore. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Erode to Coimbatore One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Erode to Coimbatore with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Erode - Coimbatore)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Erode - Coimbatore Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH544.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH544 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH544 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Erode Regional Snacks",
                  "location": "Erode Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Erode"
            }
      ]
},
    highways: ["NH544"],
    tolls: {
      costRange: '₹90 - ₹130',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Erode Central City / Main Junction',
      'Erode Railway Station & Bus Stand',
      'Erode Residential Areas & Hotels',
      'Erode Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Coimbatore City Center & Main Commercial Hub',
      'Coimbatore Railway Station & Transit Terminals',
      'Coimbatore Hotels, Resorts & Residential Hubs',
      'Coimbatore Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Erode', type: 'Origin', desc: 'Doorstep pickup across Erode.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Coimbatore', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Coimbatore.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Erode to Coimbatore?',
        a: 'The one-way taxi fare from Erode to Coimbatore starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Erode to Coimbatore?',
        a: 'The distance from Erode to Coimbatore is approx 100 km via NH544. Travel duration is around 2 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Erode?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Erode including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Erode to Coimbatore. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2 hours.',
        route: 'Erode to Coimbatore',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Erode to Coimbatore. Zero return charges and transparent per-km bill.',
        route: 'Erode to Coimbatore',
      },
    ],
    nearbyRoutes: [
      { name: 'Coimbatore to Erode', slug: 'coimbatore-to-erode', distance: '100 km', fare: '₹1,950' },
    ],
  },

  'coimbatore-to-pollachi': {
    from: 'Coimbatore',
    to: 'Pollachi',
    fromSlug: 'coimbatore',
    toSlug: 'coimbatore',
    returnRouteSlug: 'pollachi-to-coimbatore',
    distanceKm: 45,
    timeHours: 1,
    distanceDisplay: '45 km',
    durationDisplay: '1 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Business","Agriculture","Film Location"],
    roadConditions: 'Access-controlled NH83 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Coimbatore to Pollachi. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Coimbatore to Pollachi One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Coimbatore to Pollachi with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Coimbatore - Pollachi)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Coimbatore - Pollachi Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH83.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH83 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH83 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Coimbatore Regional Snacks",
                  "location": "Coimbatore Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Coimbatore"
            }
      ]
},
    highways: ["NH83"],
    tolls: {
      costRange: '₹40 - ₹60',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Coimbatore Central City / Main Junction',
      'Coimbatore Railway Station & Bus Stand',
      'Coimbatore Residential Areas & Hotels',
      'Coimbatore Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Pollachi City Center & Main Commercial Hub',
      'Pollachi Railway Station & Transit Terminals',
      'Pollachi Hotels, Resorts & Residential Hubs',
      'Pollachi Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Coimbatore', type: 'Origin', desc: 'Doorstep pickup across Coimbatore.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Pollachi', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Pollachi.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Coimbatore to Pollachi?',
        a: 'The one-way taxi fare from Coimbatore to Pollachi starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Coimbatore to Pollachi?',
        a: 'The distance from Coimbatore to Pollachi is approx 45 km via NH83. Travel duration is around 1 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Coimbatore?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Coimbatore including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Coimbatore to Pollachi. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 1 hours.',
        route: 'Coimbatore to Pollachi',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Coimbatore to Pollachi. Zero return charges and transparent per-km bill.',
        route: 'Coimbatore to Pollachi',
      },
    ],
    nearbyRoutes: [
      { name: 'Pollachi to Coimbatore', slug: 'pollachi-to-coimbatore', distance: '45 km', fare: '₹1,950' },
    ],
  },

  'pollachi-to-coimbatore': {
    from: 'Pollachi',
    to: 'Coimbatore',
    fromSlug: 'coimbatore',
    toSlug: 'coimbatore',
    returnRouteSlug: 'coimbatore-to-pollachi',
    distanceKm: 45,
    timeHours: 1,
    distanceDisplay: '45 km',
    durationDisplay: '1 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["CJB Airport","Medical","Education"],
    roadConditions: 'Access-controlled NH83 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Pollachi to Coimbatore. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Pollachi to Coimbatore One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Pollachi to Coimbatore with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Pollachi - Coimbatore)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Pollachi - Coimbatore Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH83.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH83 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH83 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Pollachi Regional Snacks",
                  "location": "Pollachi Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Pollachi"
            }
      ]
},
    highways: ["NH83"],
    tolls: {
      costRange: '₹40 - ₹60',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Pollachi Central City / Main Junction',
      'Pollachi Railway Station & Bus Stand',
      'Pollachi Residential Areas & Hotels',
      'Pollachi Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Coimbatore City Center & Main Commercial Hub',
      'Coimbatore Railway Station & Transit Terminals',
      'Coimbatore Hotels, Resorts & Residential Hubs',
      'Coimbatore Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Pollachi', type: 'Origin', desc: 'Doorstep pickup across Pollachi.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Coimbatore', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Coimbatore.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Pollachi to Coimbatore?',
        a: 'The one-way taxi fare from Pollachi to Coimbatore starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Pollachi to Coimbatore?',
        a: 'The distance from Pollachi to Coimbatore is approx 45 km via NH83. Travel duration is around 1 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Pollachi?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Pollachi including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Pollachi to Coimbatore. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 1 hours.',
        route: 'Pollachi to Coimbatore',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Pollachi to Coimbatore. Zero return charges and transparent per-km bill.',
        route: 'Pollachi to Coimbatore',
      },
    ],
    nearbyRoutes: [
      { name: 'Coimbatore to Pollachi', slug: 'coimbatore-to-pollachi', distance: '45 km', fare: '₹1,950' },
    ],
  },

  'salem-to-erode': {
    from: 'Salem',
    to: 'Erode',
    fromSlug: 'salem',
    toSlug: 'erode',
    returnRouteSlug: 'erode-to-salem',
    distanceKm: 65,
    timeHours: 1.25,
    distanceDisplay: '65 km',
    durationDisplay: '1.25 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Textile","Business"],
    roadConditions: 'Access-controlled NH544 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Salem to Erode. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Salem to Erode One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Salem to Erode with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Salem - Erode)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Salem - Erode Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH544.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH544 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH544 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Salem Malgova Mangoes & Thattu Vadai",
                  "location": "Salem Highway Market",
                  "famousFor": "Seasonal juicy Malgova mangoes & crisp street snack"
            }
      ]
},
    highways: ["NH544"],
    tolls: {
      costRange: '₹50 - ₹80',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Salem Central City / Main Junction',
      'Salem Railway Station & Bus Stand',
      'Salem Residential Areas & Hotels',
      'Salem Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Erode City Center & Main Commercial Hub',
      'Erode Railway Station & Transit Terminals',
      'Erode Hotels, Resorts & Residential Hubs',
      'Erode Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Salem', type: 'Origin', desc: 'Doorstep pickup across Salem.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Erode', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Erode.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Salem to Erode?',
        a: 'The one-way taxi fare from Salem to Erode starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Salem to Erode?',
        a: 'The distance from Salem to Erode is approx 65 km via NH544. Travel duration is around 1.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Salem?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Salem including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Salem to Erode. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 1.25 hours.',
        route: 'Salem to Erode',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Salem to Erode. Zero return charges and transparent per-km bill.',
        route: 'Salem to Erode',
      },
    ],
    nearbyRoutes: [
      { name: 'Erode to Salem', slug: 'erode-to-salem', distance: '65 km', fare: '₹1,950' },
    ],
  },

  'erode-to-salem': {
    from: 'Erode',
    to: 'Salem',
    fromSlug: 'erode',
    toSlug: 'salem',
    returnRouteSlug: 'salem-to-erode',
    distanceKm: 65,
    timeHours: 1.25,
    distanceDisplay: '65 km',
    durationDisplay: '1.25 Hours',
    category: 'City',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Business","Transit"],
    roadConditions: 'Access-controlled NH544 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Erode to Salem. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Erode to Salem One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Erode to Salem with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Erode - Salem)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Erode - Salem Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH544.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH544 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH544 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Salem Malgova Mangoes & Thattu Vadai",
                  "location": "Salem Highway Market",
                  "famousFor": "Seasonal juicy Malgova mangoes & crisp street snack"
            }
      ]
},
    highways: ["NH544"],
    tolls: {
      costRange: '₹50 - ₹80',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Erode Central City / Main Junction',
      'Erode Railway Station & Bus Stand',
      'Erode Residential Areas & Hotels',
      'Erode Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Salem City Center & Main Commercial Hub',
      'Salem Railway Station & Transit Terminals',
      'Salem Hotels, Resorts & Residential Hubs',
      'Salem Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Erode', type: 'Origin', desc: 'Doorstep pickup across Erode.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Salem', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Salem.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Erode to Salem?',
        a: 'The one-way taxi fare from Erode to Salem starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Erode to Salem?',
        a: 'The distance from Erode to Salem is approx 65 km via NH544. Travel duration is around 1.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Erode?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Erode including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Erode to Salem. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 1.25 hours.',
        route: 'Erode to Salem',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Erode to Salem. Zero return charges and transparent per-km bill.',
        route: 'Erode to Salem',
      },
    ],
    nearbyRoutes: [
      { name: 'Salem to Erode', slug: 'salem-to-erode', distance: '65 km', fare: '₹1,950' },
    ],
  },

  'trichy-to-velankanni': {
    from: 'Trichy',
    to: 'Velankanni',
    fromSlug: 'tiruchirappalli',
    toSlug: 'nagapattinam',
    returnRouteSlug: 'velankanni-to-trichy',
    distanceKm: 155,
    timeHours: 3.5,
    distanceDisplay: '155 km',
    durationDisplay: '3.5 Hours',
    category: 'Temple',
    popularity: 10,
    isFeatured: true,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["Pilgrimage","Basilica","Tourism"],
    roadConditions: 'Access-controlled NH83 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Trichy to Velankanni. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Trichy to Velankanni One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Trichy to Velankanni with SAMAYAS. Hatchback from ₹2,325, Sedan ₹2,325, SUV ₹3,100. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2325,
      "sedan": 2325,
      "suv": 3100,
      "innova": 3410,
      "hycross": 3875,
      "traveller": 4650
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Trichy - Velankanni)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "temples": [
            {
                  "name": "Trichy / Velankanni Historic Shrine",
                  "description": "Famous ancient temple known for architectural splendour and spiritual peacefulness.",
                  "detour": "2 km Detour",
                  "stopDuration": "30 Mins Visit"
            }
      ],
      "essentials": [
            {
                  "name": "NH83 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH83 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Trichy Regional Snacks",
                  "location": "Trichy Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Trichy"
            }
      ]
},
    highways: ["NH83","SH22"],
    tolls: {
      costRange: '₹90 - ₹140',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Trichy Central City / Main Junction',
      'Trichy Railway Station & Bus Stand',
      'Trichy Residential Areas & Hotels',
      'Trichy Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Velankanni City Center & Main Commercial Hub',
      'Velankanni Railway Station & Transit Terminals',
      'Velankanni Hotels, Resorts & Residential Hubs',
      'Velankanni Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Trichy', type: 'Origin', desc: 'Doorstep pickup across Trichy.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Velankanni', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Velankanni.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Trichy to Velankanni?',
        a: 'The one-way taxi fare from Trichy to Velankanni starts at ₹2,325 for a Hatchback, ₹2,325 for a Sedan, and ₹3,100 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Trichy to Velankanni?',
        a: 'The distance from Trichy to Velankanni is approx 155 km via NH83. Travel duration is around 3.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Trichy?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Trichy including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Trichy to Velankanni. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3.5 hours.',
        route: 'Trichy to Velankanni',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Trichy to Velankanni. Zero return charges and transparent per-km bill.',
        route: 'Trichy to Velankanni',
      },
    ],
    nearbyRoutes: [
      { name: 'Velankanni to Trichy', slug: 'velankanni-to-trichy', distance: '155 km', fare: '₹2,325' },
    ],
  },

  'velankanni-to-trichy': {
    from: 'Velankanni',
    to: 'Trichy',
    fromSlug: 'nagapattinam',
    toSlug: 'tiruchirappalli',
    returnRouteSlug: 'trichy-to-velankanni',
    distanceKm: 155,
    timeHours: 3.5,
    distanceDisplay: '155 km',
    durationDisplay: '3.5 Hours',
    category: 'Temple',
    popularity: 10,
    isFeatured: false,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["TRZ Airport","Pilgrimage Return"],
    roadConditions: 'Access-controlled SH22 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Velankanni to Trichy. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Velankanni to Trichy One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Velankanni to Trichy with SAMAYAS. Hatchback from ₹2,325, Sedan ₹2,325, SUV ₹3,100. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2325,
      "sedan": 2325,
      "suv": 3100,
      "innova": 3410,
      "hycross": 3875,
      "traveller": 4650
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Velankanni - Trichy)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "temples": [
            {
                  "name": "Velankanni / Trichy Historic Shrine",
                  "description": "Famous ancient temple known for architectural splendour and spiritual peacefulness.",
                  "detour": "2 km Detour",
                  "stopDuration": "30 Mins Visit"
            }
      ],
      "essentials": [
            {
                  "name": "SH22 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "SH22 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Velankanni Regional Snacks",
                  "location": "Velankanni Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Velankanni"
            }
      ]
},
    highways: ["SH22","NH83"],
    tolls: {
      costRange: '₹90 - ₹140',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Velankanni Central City / Main Junction',
      'Velankanni Railway Station & Bus Stand',
      'Velankanni Residential Areas & Hotels',
      'Velankanni Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Trichy City Center & Main Commercial Hub',
      'Trichy Railway Station & Transit Terminals',
      'Trichy Hotels, Resorts & Residential Hubs',
      'Trichy Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Velankanni', type: 'Origin', desc: 'Doorstep pickup across Velankanni.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Trichy', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Trichy.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Velankanni to Trichy?',
        a: 'The one-way taxi fare from Velankanni to Trichy starts at ₹2,325 for a Hatchback, ₹2,325 for a Sedan, and ₹3,100 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Velankanni to Trichy?',
        a: 'The distance from Velankanni to Trichy is approx 155 km via SH22. Travel duration is around 3.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Velankanni?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Velankanni including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Velankanni to Trichy. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3.5 hours.',
        route: 'Velankanni to Trichy',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Velankanni to Trichy. Zero return charges and transparent per-km bill.',
        route: 'Velankanni to Trichy',
      },
    ],
    nearbyRoutes: [
      { name: 'Trichy to Velankanni', slug: 'trichy-to-velankanni', distance: '155 km', fare: '₹2,325' },
    ],
  },

  'trichy-to-kumbakonam': {
    from: 'Trichy',
    to: 'Kumbakonam',
    fromSlug: 'tiruchirappalli',
    toSlug: 'thanjavur',
    returnRouteSlug: 'kumbakonam-to-trichy',
    distanceKm: 90,
    timeHours: 2,
    distanceDisplay: '90 km',
    durationDisplay: '2 Hours',
    category: 'Temple',
    popularity: 9,
    isFeatured: true,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["Navagraha Pilgrimage","Temples"],
    roadConditions: 'Access-controlled NH36 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Trichy to Kumbakonam. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Trichy to Kumbakonam One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Trichy to Kumbakonam with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Trichy - Kumbakonam)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "temples": [
            {
                  "name": "Trichy / Kumbakonam Historic Shrine",
                  "description": "Famous ancient temple known for architectural splendour and spiritual peacefulness.",
                  "detour": "2 km Detour",
                  "stopDuration": "30 Mins Visit"
            }
      ],
      "essentials": [
            {
                  "name": "NH36 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH36 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Kumbakonam Degree Coffee & Mahamaham Snacks",
                  "location": "Kumbakonam Town",
                  "famousFor": "Pure unadulterated cow milk filter coffee"
            }
      ]
},
    highways: ["NH36"],
    tolls: {
      costRange: '₹60 - ₹90',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Trichy Central City / Main Junction',
      'Trichy Railway Station & Bus Stand',
      'Trichy Residential Areas & Hotels',
      'Trichy Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Kumbakonam City Center & Main Commercial Hub',
      'Kumbakonam Railway Station & Transit Terminals',
      'Kumbakonam Hotels, Resorts & Residential Hubs',
      'Kumbakonam Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Trichy', type: 'Origin', desc: 'Doorstep pickup across Trichy.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Kumbakonam', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Kumbakonam.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Trichy to Kumbakonam?',
        a: 'The one-way taxi fare from Trichy to Kumbakonam starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Trichy to Kumbakonam?',
        a: 'The distance from Trichy to Kumbakonam is approx 90 km via NH36. Travel duration is around 2 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Trichy?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Trichy including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Trichy to Kumbakonam. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2 hours.',
        route: 'Trichy to Kumbakonam',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Trichy to Kumbakonam. Zero return charges and transparent per-km bill.',
        route: 'Trichy to Kumbakonam',
      },
    ],
    nearbyRoutes: [
      { name: 'Kumbakonam to Trichy', slug: 'kumbakonam-to-trichy', distance: '90 km', fare: '₹1,950' },
    ],
  },

  'kumbakonam-to-trichy': {
    from: 'Kumbakonam',
    to: 'Trichy',
    fromSlug: 'thanjavur',
    toSlug: 'tiruchirappalli',
    returnRouteSlug: 'trichy-to-kumbakonam',
    distanceKm: 90,
    timeHours: 2,
    distanceDisplay: '90 km',
    durationDisplay: '2 Hours',
    category: 'Temple',
    popularity: 9,
    isFeatured: false,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["TRZ Airport","Pilgrimage Return"],
    roadConditions: 'Access-controlled NH36 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Kumbakonam to Trichy. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Kumbakonam to Trichy One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Kumbakonam to Trichy with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Kumbakonam - Trichy)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "temples": [
            {
                  "name": "Kumbakonam / Trichy Historic Shrine",
                  "description": "Famous ancient temple known for architectural splendour and spiritual peacefulness.",
                  "detour": "2 km Detour",
                  "stopDuration": "30 Mins Visit"
            }
      ],
      "essentials": [
            {
                  "name": "NH36 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH36 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Kumbakonam Degree Coffee & Mahamaham Snacks",
                  "location": "Kumbakonam Town",
                  "famousFor": "Pure unadulterated cow milk filter coffee"
            }
      ]
},
    highways: ["NH36"],
    tolls: {
      costRange: '₹60 - ₹90',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Kumbakonam Central City / Main Junction',
      'Kumbakonam Railway Station & Bus Stand',
      'Kumbakonam Residential Areas & Hotels',
      'Kumbakonam Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Trichy City Center & Main Commercial Hub',
      'Trichy Railway Station & Transit Terminals',
      'Trichy Hotels, Resorts & Residential Hubs',
      'Trichy Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Kumbakonam', type: 'Origin', desc: 'Doorstep pickup across Kumbakonam.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Trichy', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Trichy.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Kumbakonam to Trichy?',
        a: 'The one-way taxi fare from Kumbakonam to Trichy starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Kumbakonam to Trichy?',
        a: 'The distance from Kumbakonam to Trichy is approx 90 km via NH36. Travel duration is around 2 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Kumbakonam?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Kumbakonam including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Kumbakonam to Trichy. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2 hours.',
        route: 'Kumbakonam to Trichy',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Kumbakonam to Trichy. Zero return charges and transparent per-km bill.',
        route: 'Kumbakonam to Trichy',
      },
    ],
    nearbyRoutes: [
      { name: 'Trichy to Kumbakonam', slug: 'trichy-to-kumbakonam', distance: '90 km', fare: '₹1,950' },
    ],
  },

  'trichy-to-chidambaram': {
    from: 'Trichy',
    to: 'Chidambaram',
    fromSlug: 'tiruchirappalli',
    toSlug: 'cuddalore',
    returnRouteSlug: 'chidambaram-to-trichy',
    distanceKm: 170,
    timeHours: 3.75,
    distanceDisplay: '170 km',
    durationDisplay: '3.75 Hours',
    category: 'Temple',
    popularity: 8,
    isFeatured: false,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["Nataraja Temple","Pilgrimage","Annamalai Univ"],
    roadConditions: 'Access-controlled NH36 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Trichy to Chidambaram. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Trichy to Chidambaram One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Trichy to Chidambaram with SAMAYAS. Hatchback from ₹2,550, Sedan ₹2,550, SUV ₹3,400. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2550,
      "sedan": 2550,
      "suv": 3400,
      "innova": 3740,
      "hycross": 4250,
      "traveller": 5100
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Trichy - Chidambaram)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "temples": [
            {
                  "name": "Trichy / Chidambaram Historic Shrine",
                  "description": "Famous ancient temple known for architectural splendour and spiritual peacefulness.",
                  "detour": "2 km Detour",
                  "stopDuration": "30 Mins Visit"
            }
      ],
      "essentials": [
            {
                  "name": "NH36 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH36 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Trichy Regional Snacks",
                  "location": "Trichy Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Trichy"
            }
      ]
},
    highways: ["NH36"],
    tolls: {
      costRange: '₹120 - ₹170',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Trichy Central City / Main Junction',
      'Trichy Railway Station & Bus Stand',
      'Trichy Residential Areas & Hotels',
      'Trichy Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Chidambaram City Center & Main Commercial Hub',
      'Chidambaram Railway Station & Transit Terminals',
      'Chidambaram Hotels, Resorts & Residential Hubs',
      'Chidambaram Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Trichy', type: 'Origin', desc: 'Doorstep pickup across Trichy.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Chidambaram', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Chidambaram.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Trichy to Chidambaram?',
        a: 'The one-way taxi fare from Trichy to Chidambaram starts at ₹2,550 for a Hatchback, ₹2,550 for a Sedan, and ₹3,400 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Trichy to Chidambaram?',
        a: 'The distance from Trichy to Chidambaram is approx 170 km via NH36. Travel duration is around 3.75 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Trichy?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Trichy including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Trichy to Chidambaram. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3.75 hours.',
        route: 'Trichy to Chidambaram',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Trichy to Chidambaram. Zero return charges and transparent per-km bill.',
        route: 'Trichy to Chidambaram',
      },
    ],
    nearbyRoutes: [
      { name: 'Chidambaram to Trichy', slug: 'chidambaram-to-trichy', distance: '170 km', fare: '₹2,550' },
    ],
  },

  'chidambaram-to-trichy': {
    from: 'Chidambaram',
    to: 'Trichy',
    fromSlug: 'cuddalore',
    toSlug: 'tiruchirappalli',
    returnRouteSlug: 'trichy-to-chidambaram',
    distanceKm: 170,
    timeHours: 3.75,
    distanceDisplay: '170 km',
    durationDisplay: '3.75 Hours',
    category: 'Temple',
    popularity: 8,
    isFeatured: false,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["TRZ Airport","Pilgrimage Return"],
    roadConditions: 'Access-controlled NH36 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Chidambaram to Trichy. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Chidambaram to Trichy One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Chidambaram to Trichy with SAMAYAS. Hatchback from ₹2,550, Sedan ₹2,550, SUV ₹3,400. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2550,
      "sedan": 2550,
      "suv": 3400,
      "innova": 3740,
      "hycross": 4250,
      "traveller": 5100
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Chidambaram - Trichy)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "temples": [
            {
                  "name": "Chidambaram / Trichy Historic Shrine",
                  "description": "Famous ancient temple known for architectural splendour and spiritual peacefulness.",
                  "detour": "2 km Detour",
                  "stopDuration": "30 Mins Visit"
            }
      ],
      "essentials": [
            {
                  "name": "NH36 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH36 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Chidambaram Regional Snacks",
                  "location": "Chidambaram Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Chidambaram"
            }
      ]
},
    highways: ["NH36"],
    tolls: {
      costRange: '₹120 - ₹170',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Chidambaram Central City / Main Junction',
      'Chidambaram Railway Station & Bus Stand',
      'Chidambaram Residential Areas & Hotels',
      'Chidambaram Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Trichy City Center & Main Commercial Hub',
      'Trichy Railway Station & Transit Terminals',
      'Trichy Hotels, Resorts & Residential Hubs',
      'Trichy Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Chidambaram', type: 'Origin', desc: 'Doorstep pickup across Chidambaram.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Trichy', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Trichy.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Chidambaram to Trichy?',
        a: 'The one-way taxi fare from Chidambaram to Trichy starts at ₹2,550 for a Hatchback, ₹2,550 for a Sedan, and ₹3,400 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Chidambaram to Trichy?',
        a: 'The distance from Chidambaram to Trichy is approx 170 km via NH36. Travel duration is around 3.75 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Chidambaram?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Chidambaram including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Chidambaram to Trichy. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3.75 hours.',
        route: 'Chidambaram to Trichy',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Chidambaram to Trichy. Zero return charges and transparent per-km bill.',
        route: 'Chidambaram to Trichy',
      },
    ],
    nearbyRoutes: [
      { name: 'Trichy to Chidambaram', slug: 'trichy-to-chidambaram', distance: '170 km', fare: '₹2,550' },
    ],
  },

  'madurai-to-rameswaram': {
    from: 'Madurai',
    to: 'Rameshwaram',
    fromSlug: 'madurai',
    toSlug: 'ramanathapuram',
    returnRouteSlug: 'rameswaram-to-madurai',
    distanceKm: 175,
    timeHours: 3.5,
    distanceDisplay: '175 km',
    durationDisplay: '3.5 Hours',
    category: 'Temple',
    popularity: 10,
    isFeatured: true,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["Pilgrimage","Dhanushkodi","Pamban Bridge"],
    roadConditions: 'Access-controlled NH87 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Madurai to Rameshwaram. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Madurai to Rameshwaram One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Madurai to Rameshwaram with SAMAYAS. Hatchback from ₹2,625, Sedan ₹2,625, SUV ₹3,500. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2625,
      "sedan": 2625,
      "suv": 3500,
      "innova": 3850,
      "hycross": 4375,
      "traveller": 5250
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Amma Mess Madurai",
                  "cuisine": "Non-Veg Tamil Cuisine",
                  "famousFor": "Ayira Meen Kuzhambu & Bone Marrow Omelette",
                  "detour": "1 km Detour",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.7★"
            },
            {
                  "name": "Hotel Saravana Bhavan Rameswaram",
                  "cuisine": "Pure Veg",
                  "famousFor": "Traditional South Indian Meals",
                  "detour": "0.5 km Detour",
                  "mealType": [
                        "Breakfast",
                        "Lunch"
                  ],
                  "rating": "4.3★"
            }
      ],
      "temples": [
            {
                  "name": "Ramanathaswamy Temple (22 Holy Wells)",
                  "description": "Iconic Jyotirlinga shrine featuring the world’s longest 1,000-pillar corridor.",
                  "detour": "1 km Detour",
                  "stopDuration": "2 Hours"
            }
      ],
      "attractions": [
            {
                  "name": "Dhanushkodi Ghost Town & Sangam Point",
                  "description": "Vanish town where Bay of Bengal meets Indian Ocean at land’s end.",
                  "visitDuration": "2 Hours",
                  "familyFriendly": true
            }
      ],
      "selfieSpots": [
            {
                  "name": "Pamban Sea Bridge Viewpoint",
                  "type": "Historic Rail & Highway Sea Bridge",
                  "location": "Rameswaram Entrance Sea Causeway"
            }
      ],
      "shopping": [
            {
                  "category": "Sea Shell Crafts & Conches",
                  "famousProducts": "Handcrafted Sea Shell Souvenirs & Sacred Shankha"
            }
      ],
      "essentials": [
            {
                  "name": "Ramanathapuram BPCL Fuel & Restroom Hub",
                  "type": "Petrol Pump & Clean Restroom",
                  "location": "NH87 Rameswaram Highway"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Madurai Famous Famous Jigarthanda",
                  "location": "Madurai City / Highway Exit",
                  "famousFor": "Royal refreshing almond gum & Nannari milk dessert"
            }
      ]
},
    highways: ["NH87","Pamban Sea Bridge"],
    tolls: {
      costRange: '₹120 - ₹180',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Madurai Central City / Main Junction',
      'Madurai Railway Station & Bus Stand',
      'Madurai Residential Areas & Hotels',
      'Madurai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Rameshwaram City Center & Main Commercial Hub',
      'Rameshwaram Railway Station & Transit Terminals',
      'Rameshwaram Hotels, Resorts & Residential Hubs',
      'Rameshwaram Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Madurai', type: 'Origin', desc: 'Doorstep pickup across Madurai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Rameshwaram', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Rameshwaram.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Madurai to Rameshwaram?',
        a: 'The one-way taxi fare from Madurai to Rameshwaram starts at ₹2,625 for a Hatchback, ₹2,625 for a Sedan, and ₹3,500 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Madurai to Rameshwaram?',
        a: 'The distance from Madurai to Rameshwaram is approx 175 km via NH87. Travel duration is around 3.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Madurai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Madurai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Madurai to Rameshwaram. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3.5 hours.',
        route: 'Madurai to Rameshwaram',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Madurai to Rameshwaram. Zero return charges and transparent per-km bill.',
        route: 'Madurai to Rameshwaram',
      },
    ],
    nearbyRoutes: [
      { name: 'Rameshwaram to Madurai', slug: 'rameswaram-to-madurai', distance: '175 km', fare: '₹2,625' },
    ],
  },

  'rameswaram-to-madurai': {
    from: 'Rameshwaram',
    to: 'Madurai',
    fromSlug: 'ramanathapuram',
    toSlug: 'madurai',
    returnRouteSlug: 'madurai-to-rameswaram',
    distanceKm: 175,
    timeHours: 3.5,
    distanceDisplay: '175 km',
    durationDisplay: '3.5 Hours',
    category: 'Temple',
    popularity: 10,
    isFeatured: false,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["IXM Airport","Pilgrimage Return"],
    roadConditions: 'Access-controlled NH87 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Rameshwaram to Madurai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Rameshwaram to Madurai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Rameshwaram to Madurai with SAMAYAS. Hatchback from ₹2,625, Sedan ₹2,625, SUV ₹3,500. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2625,
      "sedan": 2625,
      "suv": 3500,
      "innova": 3850,
      "hycross": 4375,
      "traveller": 5250
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Amma Mess Madurai",
                  "cuisine": "Non-Veg Tamil Cuisine",
                  "famousFor": "Ayira Meen Kuzhambu & Bone Marrow Omelette",
                  "detour": "1 km Detour",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.7★"
            },
            {
                  "name": "Hotel Saravana Bhavan Rameswaram",
                  "cuisine": "Pure Veg",
                  "famousFor": "Traditional South Indian Meals",
                  "detour": "0.5 km Detour",
                  "mealType": [
                        "Breakfast",
                        "Lunch"
                  ],
                  "rating": "4.3★"
            }
      ],
      "temples": [
            {
                  "name": "Ramanathaswamy Temple (22 Holy Wells)",
                  "description": "Iconic Jyotirlinga shrine featuring the world’s longest 1,000-pillar corridor.",
                  "detour": "1 km Detour",
                  "stopDuration": "2 Hours"
            }
      ],
      "attractions": [
            {
                  "name": "Dhanushkodi Ghost Town & Sangam Point",
                  "description": "Vanish town where Bay of Bengal meets Indian Ocean at land’s end.",
                  "visitDuration": "2 Hours",
                  "familyFriendly": true
            }
      ],
      "selfieSpots": [
            {
                  "name": "Pamban Sea Bridge Viewpoint",
                  "type": "Historic Rail & Highway Sea Bridge",
                  "location": "Rameswaram Entrance Sea Causeway"
            }
      ],
      "shopping": [
            {
                  "category": "Sea Shell Crafts & Conches",
                  "famousProducts": "Handcrafted Sea Shell Souvenirs & Sacred Shankha"
            }
      ],
      "essentials": [
            {
                  "name": "Ramanathapuram BPCL Fuel & Restroom Hub",
                  "type": "Petrol Pump & Clean Restroom",
                  "location": "NH87 Rameswaram Highway"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Madurai Famous Famous Jigarthanda",
                  "location": "Madurai City / Highway Exit",
                  "famousFor": "Royal refreshing almond gum & Nannari milk dessert"
            }
      ]
},
    highways: ["NH87"],
    tolls: {
      costRange: '₹120 - ₹180',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Rameshwaram Central City / Main Junction',
      'Rameshwaram Railway Station & Bus Stand',
      'Rameshwaram Residential Areas & Hotels',
      'Rameshwaram Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Madurai City Center & Main Commercial Hub',
      'Madurai Railway Station & Transit Terminals',
      'Madurai Hotels, Resorts & Residential Hubs',
      'Madurai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Rameshwaram', type: 'Origin', desc: 'Doorstep pickup across Rameshwaram.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Madurai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Madurai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Rameshwaram to Madurai?',
        a: 'The one-way taxi fare from Rameshwaram to Madurai starts at ₹2,625 for a Hatchback, ₹2,625 for a Sedan, and ₹3,500 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Rameshwaram to Madurai?',
        a: 'The distance from Rameshwaram to Madurai is approx 175 km via NH87. Travel duration is around 3.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Rameshwaram?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Rameshwaram including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Rameshwaram to Madurai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3.5 hours.',
        route: 'Rameshwaram to Madurai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Rameshwaram to Madurai. Zero return charges and transparent per-km bill.',
        route: 'Rameshwaram to Madurai',
      },
    ],
    nearbyRoutes: [
      { name: 'Madurai to Rameshwaram', slug: 'madurai-to-rameswaram', distance: '175 km', fare: '₹2,625' },
    ],
  },

  'madurai-to-tiruchendur': {
    from: 'Madurai',
    to: 'Tiruchendur',
    fromSlug: 'madurai',
    toSlug: 'thoothukudi',
    returnRouteSlug: 'tiruchendur-to-madurai',
    distanceKm: 180,
    timeHours: 3.5,
    distanceDisplay: '180 km',
    durationDisplay: '3.5 Hours',
    category: 'Temple',
    popularity: 9,
    isFeatured: true,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["Subramanya Swamy Temple","Pilgrimage"],
    roadConditions: 'Access-controlled NH38 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Madurai to Tiruchendur. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Madurai to Tiruchendur One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Madurai to Tiruchendur with SAMAYAS. Hatchback from ₹2,700, Sedan ₹2,700, SUV ₹3,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2700,
      "sedan": 2700,
      "suv": 3600,
      "innova": 3960,
      "hycross": 4500,
      "traveller": 5400
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Madurai - Tiruchendur)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "temples": [
            {
                  "name": "Madurai / Tiruchendur Historic Shrine",
                  "description": "Famous ancient temple known for architectural splendour and spiritual peacefulness.",
                  "detour": "2 km Detour",
                  "stopDuration": "30 Mins Visit"
            }
      ],
      "essentials": [
            {
                  "name": "NH38 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH38 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Madurai Regional Snacks",
                  "location": "Madurai Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Madurai"
            }
      ]
},
    highways: ["NH38"],
    tolls: {
      costRange: '₹140 - ₹190',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Madurai Central City / Main Junction',
      'Madurai Railway Station & Bus Stand',
      'Madurai Residential Areas & Hotels',
      'Madurai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Tiruchendur City Center & Main Commercial Hub',
      'Tiruchendur Railway Station & Transit Terminals',
      'Tiruchendur Hotels, Resorts & Residential Hubs',
      'Tiruchendur Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Madurai', type: 'Origin', desc: 'Doorstep pickup across Madurai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Tiruchendur', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Tiruchendur.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Madurai to Tiruchendur?',
        a: 'The one-way taxi fare from Madurai to Tiruchendur starts at ₹2,700 for a Hatchback, ₹2,700 for a Sedan, and ₹3,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Madurai to Tiruchendur?',
        a: 'The distance from Madurai to Tiruchendur is approx 180 km via NH38. Travel duration is around 3.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Madurai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Madurai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Madurai to Tiruchendur. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3.5 hours.',
        route: 'Madurai to Tiruchendur',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Madurai to Tiruchendur. Zero return charges and transparent per-km bill.',
        route: 'Madurai to Tiruchendur',
      },
    ],
    nearbyRoutes: [
      { name: 'Tiruchendur to Madurai', slug: 'tiruchendur-to-madurai', distance: '180 km', fare: '₹2,700' },
    ],
  },

  'tiruchendur-to-madurai': {
    from: 'Tiruchendur',
    to: 'Madurai',
    fromSlug: 'thoothukudi',
    toSlug: 'madurai',
    returnRouteSlug: 'madurai-to-tiruchendur',
    distanceKm: 180,
    timeHours: 3.5,
    distanceDisplay: '180 km',
    durationDisplay: '3.5 Hours',
    category: 'Temple',
    popularity: 9,
    isFeatured: false,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["IXM Airport","Pilgrimage Return"],
    roadConditions: 'Access-controlled NH38 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Tiruchendur to Madurai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Tiruchendur to Madurai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Tiruchendur to Madurai with SAMAYAS. Hatchback from ₹2,700, Sedan ₹2,700, SUV ₹3,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2700,
      "sedan": 2700,
      "suv": 3600,
      "innova": 3960,
      "hycross": 4500,
      "traveller": 5400
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Tiruchendur - Madurai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "temples": [
            {
                  "name": "Tiruchendur / Madurai Historic Shrine",
                  "description": "Famous ancient temple known for architectural splendour and spiritual peacefulness.",
                  "detour": "2 km Detour",
                  "stopDuration": "30 Mins Visit"
            }
      ],
      "essentials": [
            {
                  "name": "NH38 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH38 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Tiruchendur Regional Snacks",
                  "location": "Tiruchendur Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Tiruchendur"
            }
      ]
},
    highways: ["NH38"],
    tolls: {
      costRange: '₹140 - ₹190',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Tiruchendur Central City / Main Junction',
      'Tiruchendur Railway Station & Bus Stand',
      'Tiruchendur Residential Areas & Hotels',
      'Tiruchendur Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Madurai City Center & Main Commercial Hub',
      'Madurai Railway Station & Transit Terminals',
      'Madurai Hotels, Resorts & Residential Hubs',
      'Madurai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Tiruchendur', type: 'Origin', desc: 'Doorstep pickup across Tiruchendur.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Madurai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Madurai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Tiruchendur to Madurai?',
        a: 'The one-way taxi fare from Tiruchendur to Madurai starts at ₹2,700 for a Hatchback, ₹2,700 for a Sedan, and ₹3,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Tiruchendur to Madurai?',
        a: 'The distance from Tiruchendur to Madurai is approx 180 km via NH38. Travel duration is around 3.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Tiruchendur?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Tiruchendur including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Tiruchendur to Madurai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3.5 hours.',
        route: 'Tiruchendur to Madurai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Tiruchendur to Madurai. Zero return charges and transparent per-km bill.',
        route: 'Tiruchendur to Madurai',
      },
    ],
    nearbyRoutes: [
      { name: 'Madurai to Tiruchendur', slug: 'madurai-to-tiruchendur', distance: '180 km', fare: '₹2,700' },
    ],
  },

  'chennai-to-kanchipuram': {
    from: 'Chennai',
    to: 'Kanchipuram',
    fromSlug: 'chennai',
    toSlug: 'kanchipuram',
    returnRouteSlug: 'kanchipuram-to-chennai',
    distanceKm: 75,
    timeHours: 1.75,
    distanceDisplay: '75 km',
    durationDisplay: '1.75 Hours',
    category: 'Temple',
    popularity: 9,
    isFeatured: true,
    seasonality: ["All Season"],
    popularFor: ["Silk Sarees","Pilgrimage","Heritage"],
    roadConditions: 'Access-controlled NH48 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Chennai to Kanchipuram. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Chennai to Kanchipuram One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Chennai to Kanchipuram with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Sri Krishna Sweets & Veg Restaurant",
                  "cuisine": "Pure Veg",
                  "famousFor": "Mysurpa & Ghee Roast Dosa",
                  "detour": "1 km Detour",
                  "mealType": [
                        "Breakfast",
                        "Snacks"
                  ],
                  "rating": "4.5★"
            }
      ],
      "temples": [
            {
                  "name": "Ekambareswarar & Varadharaja Perumal Temples",
                  "description": "Ancient temple complex famed for its 1,000-pillar hall and 3,500-year-old Mango tree.",
                  "detour": "2 km Detour",
                  "stopDuration": "1.5 Hours"
            }
      ],
      "shopping": [
            {
                  "category": "Pure Silk Sarees",
                  "famousProducts": "Handwoven Kanchipuram Zari Silk Sarees from Weaver Cooperatives"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Kanchipuram Kovil Idli",
                  "location": "Kanchipuram Temple Street",
                  "famousFor": "Spiced ginger & pepper steamed idli in Mandharai leaf"
            }
      ]
},
    highways: ["NH48"],
    tolls: {
      costRange: '₹70 - ₹100',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Chennai Central City / Main Junction',
      'Chennai Railway Station & Bus Stand',
      'Chennai Residential Areas & Hotels',
      'Chennai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Kanchipuram City Center & Main Commercial Hub',
      'Kanchipuram Railway Station & Transit Terminals',
      'Kanchipuram Hotels, Resorts & Residential Hubs',
      'Kanchipuram Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Chennai', type: 'Origin', desc: 'Doorstep pickup across Chennai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Kanchipuram', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Kanchipuram.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Chennai to Kanchipuram?',
        a: 'The one-way taxi fare from Chennai to Kanchipuram starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Chennai to Kanchipuram?',
        a: 'The distance from Chennai to Kanchipuram is approx 75 km via NH48. Travel duration is around 1.75 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Chennai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Chennai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Chennai to Kanchipuram. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 1.75 hours.',
        route: 'Chennai to Kanchipuram',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Chennai to Kanchipuram. Zero return charges and transparent per-km bill.',
        route: 'Chennai to Kanchipuram',
      },
    ],
    nearbyRoutes: [
      { name: 'Kanchipuram to Chennai', slug: 'kanchipuram-to-chennai', distance: '75 km', fare: '₹1,950' },
    ],
  },

  'kanchipuram-to-chennai': {
    from: 'Kanchipuram',
    to: 'Chennai',
    fromSlug: 'kanchipuram',
    toSlug: 'chennai',
    returnRouteSlug: 'chennai-to-kanchipuram',
    distanceKm: 75,
    timeHours: 1.75,
    distanceDisplay: '75 km',
    durationDisplay: '1.75 Hours',
    category: 'Temple',
    popularity: 9,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["MAA Airport","Shopping Return"],
    roadConditions: 'Access-controlled NH48 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Kanchipuram to Chennai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Kanchipuram to Chennai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Kanchipuram to Chennai with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Sri Krishna Sweets & Veg Restaurant",
                  "cuisine": "Pure Veg",
                  "famousFor": "Mysurpa & Ghee Roast Dosa",
                  "detour": "1 km Detour",
                  "mealType": [
                        "Breakfast",
                        "Snacks"
                  ],
                  "rating": "4.5★"
            }
      ],
      "temples": [
            {
                  "name": "Ekambareswarar & Varadharaja Perumal Temples",
                  "description": "Ancient temple complex famed for its 1,000-pillar hall and 3,500-year-old Mango tree.",
                  "detour": "2 km Detour",
                  "stopDuration": "1.5 Hours"
            }
      ],
      "shopping": [
            {
                  "category": "Pure Silk Sarees",
                  "famousProducts": "Handwoven Kanchipuram Zari Silk Sarees from Weaver Cooperatives"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Kanchipuram Kovil Idli",
                  "location": "Kanchipuram Temple Street",
                  "famousFor": "Spiced ginger & pepper steamed idli in Mandharai leaf"
            }
      ]
},
    highways: ["NH48"],
    tolls: {
      costRange: '₹70 - ₹100',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Kanchipuram Central City / Main Junction',
      'Kanchipuram Railway Station & Bus Stand',
      'Kanchipuram Residential Areas & Hotels',
      'Kanchipuram Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Chennai City Center & Main Commercial Hub',
      'Chennai Railway Station & Transit Terminals',
      'Chennai Hotels, Resorts & Residential Hubs',
      'Chennai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Kanchipuram', type: 'Origin', desc: 'Doorstep pickup across Kanchipuram.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Chennai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Chennai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Kanchipuram to Chennai?',
        a: 'The one-way taxi fare from Kanchipuram to Chennai starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Kanchipuram to Chennai?',
        a: 'The distance from Kanchipuram to Chennai is approx 75 km via NH48. Travel duration is around 1.75 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Kanchipuram?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Kanchipuram including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Kanchipuram to Chennai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 1.75 hours.',
        route: 'Kanchipuram to Chennai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Kanchipuram to Chennai. Zero return charges and transparent per-km bill.',
        route: 'Kanchipuram to Chennai',
      },
    ],
    nearbyRoutes: [
      { name: 'Chennai to Kanchipuram', slug: 'chennai-to-kanchipuram', distance: '75 km', fare: '₹1,950' },
    ],
  },

  'chennai-to-chidambaram': {
    from: 'Chennai',
    to: 'Chidambaram',
    fromSlug: 'chennai',
    toSlug: 'cuddalore',
    returnRouteSlug: 'chidambaram-to-chennai',
    distanceKm: 230,
    timeHours: 4.5,
    distanceDisplay: '230 km',
    durationDisplay: '4.5 Hours',
    category: 'Temple',
    popularity: 8,
    isFeatured: false,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["Pilgrimage","Temple","University"],
    roadConditions: 'Coastal 2-lane ECR highway featuring scenic Bay of Bengal views and smooth road surface.',
    heroTagline: 'Affordable One-Way Taxi from Chennai to Chidambaram. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Chennai to Chidambaram One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Chennai to Chidambaram with SAMAYAS. Hatchback from ₹3,450, Sedan ₹3,450, SUV ₹4,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 3450,
      "sedan": 3450,
      "suv": 4600,
      "innova": 5060,
      "hycross": 5750,
      "traveller": 6900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Chennai - Chidambaram)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "temples": [
            {
                  "name": "Chennai / Chidambaram Historic Shrine",
                  "description": "Famous ancient temple known for architectural splendour and spiritual peacefulness.",
                  "detour": "2 km Detour",
                  "stopDuration": "30 Mins Visit"
            }
      ],
      "essentials": [
            {
                  "name": "ECR Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "ECR Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Chennai Regional Snacks",
                  "location": "Chennai Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Chennai"
            }
      ]
},
    highways: ["ECR","NH32"],
    tolls: {
      costRange: '₹220 - ₹290',
      plazasCount: 3,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Chennai Central City / Main Junction',
      'Chennai Railway Station & Bus Stand',
      'Chennai Residential Areas & Hotels',
      'Chennai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Chidambaram City Center & Main Commercial Hub',
      'Chidambaram Railway Station & Transit Terminals',
      'Chidambaram Hotels, Resorts & Residential Hubs',
      'Chidambaram Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Chennai', type: 'Origin', desc: 'Doorstep pickup across Chennai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Chidambaram', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Chidambaram.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Chennai to Chidambaram?',
        a: 'The one-way taxi fare from Chennai to Chidambaram starts at ₹3,450 for a Hatchback, ₹3,450 for a Sedan, and ₹4,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Chennai to Chidambaram?',
        a: 'The distance from Chennai to Chidambaram is approx 230 km via ECR. Travel duration is around 4.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Chennai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Chennai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Chennai to Chidambaram. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 4.5 hours.',
        route: 'Chennai to Chidambaram',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Chennai to Chidambaram. Zero return charges and transparent per-km bill.',
        route: 'Chennai to Chidambaram',
      },
    ],
    nearbyRoutes: [
      { name: 'Chidambaram to Chennai', slug: 'chidambaram-to-chennai', distance: '230 km', fare: '₹3,450' },
    ],
  },

  'chidambaram-to-chennai': {
    from: 'Chidambaram',
    to: 'Chennai',
    fromSlug: 'cuddalore',
    toSlug: 'chennai',
    returnRouteSlug: 'chennai-to-chidambaram',
    distanceKm: 230,
    timeHours: 4.5,
    distanceDisplay: '230 km',
    durationDisplay: '4.5 Hours',
    category: 'Temple',
    popularity: 8,
    isFeatured: false,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["MAA Airport","Medical"],
    roadConditions: 'Access-controlled NH32 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Chidambaram to Chennai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Chidambaram to Chennai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Chidambaram to Chennai with SAMAYAS. Hatchback from ₹3,450, Sedan ₹3,450, SUV ₹4,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 3450,
      "sedan": 3450,
      "suv": 4600,
      "innova": 5060,
      "hycross": 5750,
      "traveller": 6900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Chidambaram - Chennai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "temples": [
            {
                  "name": "Chidambaram / Chennai Historic Shrine",
                  "description": "Famous ancient temple known for architectural splendour and spiritual peacefulness.",
                  "detour": "2 km Detour",
                  "stopDuration": "30 Mins Visit"
            }
      ],
      "essentials": [
            {
                  "name": "NH32 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH32 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Chidambaram Regional Snacks",
                  "location": "Chidambaram Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Chidambaram"
            }
      ]
},
    highways: ["NH32","ECR"],
    tolls: {
      costRange: '₹220 - ₹290',
      plazasCount: 3,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Chidambaram Central City / Main Junction',
      'Chidambaram Railway Station & Bus Stand',
      'Chidambaram Residential Areas & Hotels',
      'Chidambaram Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Chennai City Center & Main Commercial Hub',
      'Chennai Railway Station & Transit Terminals',
      'Chennai Hotels, Resorts & Residential Hubs',
      'Chennai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Chidambaram', type: 'Origin', desc: 'Doorstep pickup across Chidambaram.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Chennai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Chennai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Chidambaram to Chennai?',
        a: 'The one-way taxi fare from Chidambaram to Chennai starts at ₹3,450 for a Hatchback, ₹3,450 for a Sedan, and ₹4,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Chidambaram to Chennai?',
        a: 'The distance from Chidambaram to Chennai is approx 230 km via NH32. Travel duration is around 4.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Chidambaram?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Chidambaram including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Chidambaram to Chennai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 4.5 hours.',
        route: 'Chidambaram to Chennai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Chidambaram to Chennai. Zero return charges and transparent per-km bill.',
        route: 'Chidambaram to Chennai',
      },
    ],
    nearbyRoutes: [
      { name: 'Chennai to Chidambaram', slug: 'chennai-to-chidambaram', distance: '230 km', fare: '₹3,450' },
    ],
  },

  'coimbatore-to-ooty': {
    from: 'Coimbatore',
    to: 'Ooty',
    fromSlug: 'coimbatore',
    toSlug: 'nilgiris',
    returnRouteSlug: 'ooty-to-coimbatore',
    distanceKm: 85,
    timeHours: 2.75,
    distanceDisplay: '85 km',
    durationDisplay: '2.75 Hours',
    category: 'Tourist',
    popularity: 10,
    isFeatured: true,
    seasonality: ["Summer","Winter"],
    popularFor: ["Tourism","Resort","Honeymoon"],
    roadConditions: 'Scenic mountain ghat road with hairpin bends. Driver certified in hill gear control.',
    heroTagline: 'Affordable One-Way Taxi from Coimbatore to Ooty. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Coimbatore to Ooty One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Coimbatore to Ooty with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "High Range Hilltop Restaurant",
                  "cuisine": "Multi-Cuisine",
                  "famousFor": "Hot Malabar Parotta & Mountain Tea",
                  "detour": "0 km Ghat Road",
                  "mealType": [
                        "Lunch",
                        "Snacks"
                  ],
                  "rating": "4.5★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Highfield Tea Factory Tasting Point",
                  "type": "Tea Shop & Tasting Room"
            }
      ],
      "attractions": [
            {
                  "name": "Government Botanical Gardens & Ooty Lake",
                  "description": "Sprawling 55-acre terraced garden with 20-million-year-old fossilized tree.",
                  "visitDuration": "2 Hours",
                  "familyFriendly": true
            }
      ],
      "scenicViews": [
            {
                  "name": "Nilgiri Hairpin Bends Viewpoint",
                  "viewType": "Valley & Cloud View",
                  "stopDuration": "15 Mins"
            },
            {
                  "name": "Ketti Valley Viewpoint",
                  "viewType": "Second Largest Valley View in Asia",
                  "stopDuration": "20 Mins"
            }
      ],
      "essentials": [
            {
                  "name": "Mettupalayam Highway Fuel & EV Station",
                  "type": "EV Charging & Petrol Pump",
                  "location": "Foot of Nilgiri Ghat Road"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Ooty Homemade Chocolates & Eucalyptus Oil",
                  "location": "Ooty Town & Commercial Road",
                  "famousFor": "Freshly made dark chocolates & therapeutic oils"
            }
      ]
},
    highways: ["NH181","Hairpin Bends Route"],
    tolls: {
      costRange: '₹60 - ₹100',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Coimbatore Central City / Main Junction',
      'Coimbatore Railway Station & Bus Stand',
      'Coimbatore Residential Areas & Hotels',
      'Coimbatore Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Ooty City Center & Main Commercial Hub',
      'Ooty Railway Station & Transit Terminals',
      'Ooty Hotels, Resorts & Residential Hubs',
      'Ooty Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Coimbatore', type: 'Origin', desc: 'Doorstep pickup across Coimbatore.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Ooty', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Ooty.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Coimbatore to Ooty?',
        a: 'The one-way taxi fare from Coimbatore to Ooty starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Coimbatore to Ooty?',
        a: 'The distance from Coimbatore to Ooty is approx 85 km via NH181. Travel duration is around 2.75 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Coimbatore?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Coimbatore including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Coimbatore to Ooty. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2.75 hours.',
        route: 'Coimbatore to Ooty',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Coimbatore to Ooty. Zero return charges and transparent per-km bill.',
        route: 'Coimbatore to Ooty',
      },
    ],
    nearbyRoutes: [
      { name: 'Ooty to Coimbatore', slug: 'ooty-to-coimbatore', distance: '85 km', fare: '₹1,950' },
    ],
  },

  'ooty-to-coimbatore': {
    from: 'Ooty',
    to: 'Coimbatore',
    fromSlug: 'nilgiris',
    toSlug: 'coimbatore',
    returnRouteSlug: 'coimbatore-to-ooty',
    distanceKm: 85,
    timeHours: 2.75,
    distanceDisplay: '85 km',
    durationDisplay: '2.75 Hours',
    category: 'Tourist',
    popularity: 10,
    isFeatured: false,
    seasonality: ["Summer","Winter"],
    popularFor: ["CJB Airport","Railway Return"],
    roadConditions: 'Scenic mountain ghat road with hairpin bends. Driver certified in hill gear control.',
    heroTagline: 'Affordable One-Way Taxi from Ooty to Coimbatore. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Ooty to Coimbatore One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Ooty to Coimbatore with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "High Range Hilltop Restaurant",
                  "cuisine": "Multi-Cuisine",
                  "famousFor": "Hot Malabar Parotta & Mountain Tea",
                  "detour": "0 km Ghat Road",
                  "mealType": [
                        "Lunch",
                        "Snacks"
                  ],
                  "rating": "4.5★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Highfield Tea Factory Tasting Point",
                  "type": "Tea Shop & Tasting Room"
            }
      ],
      "attractions": [
            {
                  "name": "Government Botanical Gardens & Ooty Lake",
                  "description": "Sprawling 55-acre terraced garden with 20-million-year-old fossilized tree.",
                  "visitDuration": "2 Hours",
                  "familyFriendly": true
            }
      ],
      "scenicViews": [
            {
                  "name": "Nilgiri Hairpin Bends Viewpoint",
                  "viewType": "Valley & Cloud View",
                  "stopDuration": "15 Mins"
            },
            {
                  "name": "Ketti Valley Viewpoint",
                  "viewType": "Second Largest Valley View in Asia",
                  "stopDuration": "20 Mins"
            }
      ],
      "essentials": [
            {
                  "name": "Mettupalayam Highway Fuel & EV Station",
                  "type": "EV Charging & Petrol Pump",
                  "location": "Foot of Nilgiri Ghat Road"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Ooty Homemade Chocolates & Eucalyptus Oil",
                  "location": "Ooty Town & Commercial Road",
                  "famousFor": "Freshly made dark chocolates & therapeutic oils"
            }
      ]
},
    highways: ["NH181","Mettupalayam Road"],
    tolls: {
      costRange: '₹60 - ₹100',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Ooty Central City / Main Junction',
      'Ooty Railway Station & Bus Stand',
      'Ooty Residential Areas & Hotels',
      'Ooty Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Coimbatore City Center & Main Commercial Hub',
      'Coimbatore Railway Station & Transit Terminals',
      'Coimbatore Hotels, Resorts & Residential Hubs',
      'Coimbatore Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Ooty', type: 'Origin', desc: 'Doorstep pickup across Ooty.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Coimbatore', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Coimbatore.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Ooty to Coimbatore?',
        a: 'The one-way taxi fare from Ooty to Coimbatore starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Ooty to Coimbatore?',
        a: 'The distance from Ooty to Coimbatore is approx 85 km via NH181. Travel duration is around 2.75 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Ooty?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Ooty including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Ooty to Coimbatore. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2.75 hours.',
        route: 'Ooty to Coimbatore',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Ooty to Coimbatore. Zero return charges and transparent per-km bill.',
        route: 'Ooty to Coimbatore',
      },
    ],
    nearbyRoutes: [
      { name: 'Coimbatore to Ooty', slug: 'coimbatore-to-ooty', distance: '85 km', fare: '₹1,950' },
    ],
  },

  'coimbatore-to-coonoor': {
    from: 'Coimbatore',
    to: 'Coonoor',
    fromSlug: 'coimbatore',
    toSlug: 'nilgiris',
    returnRouteSlug: 'coonoor-to-coimbatore',
    distanceKm: 70,
    timeHours: 2.25,
    distanceDisplay: '70 km',
    durationDisplay: '2.25 Hours',
    category: 'Tourist',
    popularity: 9,
    isFeatured: false,
    seasonality: ["Summer","Winter"],
    popularFor: ["Tea Gardens","Sims Park","Tourism"],
    roadConditions: 'Scenic mountain ghat road with hairpin bends. Driver certified in hill gear control.',
    heroTagline: 'Affordable One-Way Taxi from Coimbatore to Coonoor. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Coimbatore to Coonoor One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Coimbatore to Coonoor with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "High Range Hilltop Restaurant",
                  "cuisine": "Multi-Cuisine",
                  "famousFor": "Hot Malabar Parotta & Mountain Tea",
                  "detour": "0 km Ghat Road",
                  "mealType": [
                        "Lunch",
                        "Snacks"
                  ],
                  "rating": "4.5★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Highfield Tea Factory Tasting Point",
                  "type": "Tea Shop & Tasting Room"
            }
      ],
      "attractions": [
            {
                  "name": "Government Botanical Gardens & Ooty Lake",
                  "description": "Sprawling 55-acre terraced garden with 20-million-year-old fossilized tree.",
                  "visitDuration": "2 Hours",
                  "familyFriendly": true
            }
      ],
      "scenicViews": [
            {
                  "name": "Nilgiri Hairpin Bends Viewpoint",
                  "viewType": "Valley & Cloud View",
                  "stopDuration": "15 Mins"
            },
            {
                  "name": "Ketti Valley Viewpoint",
                  "viewType": "Second Largest Valley View in Asia",
                  "stopDuration": "20 Mins"
            }
      ],
      "essentials": [
            {
                  "name": "Mettupalayam Highway Fuel & EV Station",
                  "type": "EV Charging & Petrol Pump",
                  "location": "Foot of Nilgiri Ghat Road"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Ooty Homemade Chocolates & Eucalyptus Oil",
                  "location": "Ooty Town & Commercial Road",
                  "famousFor": "Freshly made dark chocolates & therapeutic oils"
            }
      ]
},
    highways: ["NH181"],
    tolls: {
      costRange: '₹60 - ₹90',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Coimbatore Central City / Main Junction',
      'Coimbatore Railway Station & Bus Stand',
      'Coimbatore Residential Areas & Hotels',
      'Coimbatore Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Coonoor City Center & Main Commercial Hub',
      'Coonoor Railway Station & Transit Terminals',
      'Coonoor Hotels, Resorts & Residential Hubs',
      'Coonoor Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Coimbatore', type: 'Origin', desc: 'Doorstep pickup across Coimbatore.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Coonoor', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Coonoor.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Coimbatore to Coonoor?',
        a: 'The one-way taxi fare from Coimbatore to Coonoor starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Coimbatore to Coonoor?',
        a: 'The distance from Coimbatore to Coonoor is approx 70 km via NH181. Travel duration is around 2.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Coimbatore?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Coimbatore including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Coimbatore to Coonoor. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2.25 hours.',
        route: 'Coimbatore to Coonoor',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Coimbatore to Coonoor. Zero return charges and transparent per-km bill.',
        route: 'Coimbatore to Coonoor',
      },
    ],
    nearbyRoutes: [
      { name: 'Coonoor to Coimbatore', slug: 'coonoor-to-coimbatore', distance: '70 km', fare: '₹1,950' },
    ],
  },

  'coonoor-to-coimbatore': {
    from: 'Coonoor',
    to: 'Coimbatore',
    fromSlug: 'nilgiris',
    toSlug: 'coimbatore',
    returnRouteSlug: 'coimbatore-to-coonoor',
    distanceKm: 70,
    timeHours: 2.25,
    distanceDisplay: '70 km',
    durationDisplay: '2.25 Hours',
    category: 'Tourist',
    popularity: 9,
    isFeatured: false,
    seasonality: ["Summer","Winter"],
    popularFor: ["CJB Airport","Tourism Return"],
    roadConditions: 'Scenic mountain ghat road with hairpin bends. Driver certified in hill gear control.',
    heroTagline: 'Affordable One-Way Taxi from Coonoor to Coimbatore. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Coonoor to Coimbatore One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Coonoor to Coimbatore with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "High Range Hilltop Restaurant",
                  "cuisine": "Multi-Cuisine",
                  "famousFor": "Hot Malabar Parotta & Mountain Tea",
                  "detour": "0 km Ghat Road",
                  "mealType": [
                        "Lunch",
                        "Snacks"
                  ],
                  "rating": "4.5★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Highfield Tea Factory Tasting Point",
                  "type": "Tea Shop & Tasting Room"
            }
      ],
      "attractions": [
            {
                  "name": "Government Botanical Gardens & Ooty Lake",
                  "description": "Sprawling 55-acre terraced garden with 20-million-year-old fossilized tree.",
                  "visitDuration": "2 Hours",
                  "familyFriendly": true
            }
      ],
      "scenicViews": [
            {
                  "name": "Nilgiri Hairpin Bends Viewpoint",
                  "viewType": "Valley & Cloud View",
                  "stopDuration": "15 Mins"
            },
            {
                  "name": "Ketti Valley Viewpoint",
                  "viewType": "Second Largest Valley View in Asia",
                  "stopDuration": "20 Mins"
            }
      ],
      "essentials": [
            {
                  "name": "Mettupalayam Highway Fuel & EV Station",
                  "type": "EV Charging & Petrol Pump",
                  "location": "Foot of Nilgiri Ghat Road"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Ooty Homemade Chocolates & Eucalyptus Oil",
                  "location": "Ooty Town & Commercial Road",
                  "famousFor": "Freshly made dark chocolates & therapeutic oils"
            }
      ]
},
    highways: ["NH181"],
    tolls: {
      costRange: '₹60 - ₹90',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Coonoor Central City / Main Junction',
      'Coonoor Railway Station & Bus Stand',
      'Coonoor Residential Areas & Hotels',
      'Coonoor Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Coimbatore City Center & Main Commercial Hub',
      'Coimbatore Railway Station & Transit Terminals',
      'Coimbatore Hotels, Resorts & Residential Hubs',
      'Coimbatore Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Coonoor', type: 'Origin', desc: 'Doorstep pickup across Coonoor.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Coimbatore', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Coimbatore.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Coonoor to Coimbatore?',
        a: 'The one-way taxi fare from Coonoor to Coimbatore starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Coonoor to Coimbatore?',
        a: 'The distance from Coonoor to Coimbatore is approx 70 km via NH181. Travel duration is around 2.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Coonoor?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Coonoor including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Coonoor to Coimbatore. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2.25 hours.',
        route: 'Coonoor to Coimbatore',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Coonoor to Coimbatore. Zero return charges and transparent per-km bill.',
        route: 'Coonoor to Coimbatore',
      },
    ],
    nearbyRoutes: [
      { name: 'Coimbatore to Coonoor', slug: 'coimbatore-to-coonoor', distance: '70 km', fare: '₹1,950' },
    ],
  },

  'coimbatore-to-valparai': {
    from: 'Coimbatore',
    to: 'Valparai',
    fromSlug: 'coimbatore',
    toSlug: 'coimbatore',
    returnRouteSlug: 'valparai-to-coimbatore',
    distanceKm: 105,
    timeHours: 3.5,
    distanceDisplay: '105 km',
    durationDisplay: '3.5 Hours',
    category: 'Tourist',
    popularity: 8,
    isFeatured: false,
    seasonality: ["Summer","Winter"],
    popularFor: ["Tea Plantations","Wildlife","Hairpin Bends"],
    roadConditions: 'Scenic mountain ghat road with hairpin bends. Driver certified in hill gear control.',
    heroTagline: 'Affordable One-Way Taxi from Coimbatore to Valparai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Coimbatore to Valparai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Coimbatore to Valparai with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Coimbatore - Valparai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Coimbatore - Valparai Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along SH78 Ghat Road.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "SH78 Ghat Road Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "SH78 Ghat Road Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Coimbatore Regional Snacks",
                  "location": "Coimbatore Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Coimbatore"
            }
      ]
},
    highways: ["SH78 Ghat Road"],
    tolls: {
      costRange: '₹50 - ₹80',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Coimbatore Central City / Main Junction',
      'Coimbatore Railway Station & Bus Stand',
      'Coimbatore Residential Areas & Hotels',
      'Coimbatore Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Valparai City Center & Main Commercial Hub',
      'Valparai Railway Station & Transit Terminals',
      'Valparai Hotels, Resorts & Residential Hubs',
      'Valparai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Coimbatore', type: 'Origin', desc: 'Doorstep pickup across Coimbatore.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Valparai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Valparai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Coimbatore to Valparai?',
        a: 'The one-way taxi fare from Coimbatore to Valparai starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Coimbatore to Valparai?',
        a: 'The distance from Coimbatore to Valparai is approx 105 km via SH78 Ghat Road. Travel duration is around 3.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Coimbatore?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Coimbatore including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Coimbatore to Valparai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3.5 hours.',
        route: 'Coimbatore to Valparai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Coimbatore to Valparai. Zero return charges and transparent per-km bill.',
        route: 'Coimbatore to Valparai',
      },
    ],
    nearbyRoutes: [
      { name: 'Valparai to Coimbatore', slug: 'valparai-to-coimbatore', distance: '105 km', fare: '₹1,950' },
    ],
  },

  'valparai-to-coimbatore': {
    from: 'Valparai',
    to: 'Coimbatore',
    fromSlug: 'coimbatore',
    toSlug: 'coimbatore',
    returnRouteSlug: 'coimbatore-to-valparai',
    distanceKm: 105,
    timeHours: 3.5,
    distanceDisplay: '105 km',
    durationDisplay: '3.5 Hours',
    category: 'Tourist',
    popularity: 8,
    isFeatured: false,
    seasonality: ["Summer","Winter"],
    popularFor: ["CJB Airport","Tourism Return"],
    roadConditions: 'Scenic mountain ghat road with hairpin bends. Driver certified in hill gear control.',
    heroTagline: 'Affordable One-Way Taxi from Valparai to Coimbatore. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Valparai to Coimbatore One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Valparai to Coimbatore with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Valparai - Coimbatore)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Valparai - Coimbatore Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along SH78 Ghat Road.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "SH78 Ghat Road Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "SH78 Ghat Road Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Valparai Regional Snacks",
                  "location": "Valparai Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Valparai"
            }
      ]
},
    highways: ["SH78 Ghat Road"],
    tolls: {
      costRange: '₹50 - ₹80',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Valparai Central City / Main Junction',
      'Valparai Railway Station & Bus Stand',
      'Valparai Residential Areas & Hotels',
      'Valparai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Coimbatore City Center & Main Commercial Hub',
      'Coimbatore Railway Station & Transit Terminals',
      'Coimbatore Hotels, Resorts & Residential Hubs',
      'Coimbatore Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Valparai', type: 'Origin', desc: 'Doorstep pickup across Valparai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Coimbatore', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Coimbatore.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Valparai to Coimbatore?',
        a: 'The one-way taxi fare from Valparai to Coimbatore starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Valparai to Coimbatore?',
        a: 'The distance from Valparai to Coimbatore is approx 105 km via SH78 Ghat Road. Travel duration is around 3.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Valparai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Valparai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Valparai to Coimbatore. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3.5 hours.',
        route: 'Valparai to Coimbatore',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Valparai to Coimbatore. Zero return charges and transparent per-km bill.',
        route: 'Valparai to Coimbatore',
      },
    ],
    nearbyRoutes: [
      { name: 'Coimbatore to Valparai', slug: 'coimbatore-to-valparai', distance: '105 km', fare: '₹1,950' },
    ],
  },

  'coimbatore-to-munnar': {
    from: 'Coimbatore',
    to: 'Munnar',
    fromSlug: 'coimbatore',
    toSlug: 'coimbatore',
    returnRouteSlug: 'munnar-to-coimbatore',
    distanceKm: 160,
    timeHours: 4.5,
    distanceDisplay: '160 km',
    durationDisplay: '4.5 Hours',
    category: 'Tourist',
    popularity: 9,
    isFeatured: true,
    seasonality: ["Summer","Winter"],
    popularFor: ["Tourism","Tea Hills","Resort Stay"],
    roadConditions: 'Scenic mountain ghat road with hairpin bends. Driver certified in hill gear control.',
    heroTagline: 'Affordable One-Way Taxi from Coimbatore to Munnar. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Coimbatore to Munnar One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Coimbatore to Munnar with SAMAYAS. Hatchback from ₹2,400, Sedan ₹2,400, SUV ₹3,200. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2400,
      "sedan": 2400,
      "suv": 3200,
      "innova": 3520,
      "hycross": 4000,
      "traveller": 4800
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Coimbatore - Munnar)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Coimbatore - Munnar Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along SH17.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "SH17 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "SH17 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Coimbatore Regional Snacks",
                  "location": "Coimbatore Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Coimbatore"
            }
      ]
},
    highways: ["SH17","Udumalpet Ghat Road"],
    tolls: {
      costRange: '₹90 - ₹140',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Coimbatore Central City / Main Junction',
      'Coimbatore Railway Station & Bus Stand',
      'Coimbatore Residential Areas & Hotels',
      'Coimbatore Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Munnar City Center & Main Commercial Hub',
      'Munnar Railway Station & Transit Terminals',
      'Munnar Hotels, Resorts & Residential Hubs',
      'Munnar Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Coimbatore', type: 'Origin', desc: 'Doorstep pickup across Coimbatore.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Munnar', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Munnar.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Coimbatore to Munnar?',
        a: 'The one-way taxi fare from Coimbatore to Munnar starts at ₹2,400 for a Hatchback, ₹2,400 for a Sedan, and ₹3,200 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Coimbatore to Munnar?',
        a: 'The distance from Coimbatore to Munnar is approx 160 km via SH17. Travel duration is around 4.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Coimbatore?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Coimbatore including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Coimbatore to Munnar. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 4.5 hours.',
        route: 'Coimbatore to Munnar',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Coimbatore to Munnar. Zero return charges and transparent per-km bill.',
        route: 'Coimbatore to Munnar',
      },
    ],
    nearbyRoutes: [
      { name: 'Munnar to Coimbatore', slug: 'munnar-to-coimbatore', distance: '160 km', fare: '₹2,400' },
    ],
  },

  'munnar-to-coimbatore': {
    from: 'Munnar',
    to: 'Coimbatore',
    fromSlug: 'coimbatore',
    toSlug: 'coimbatore',
    returnRouteSlug: 'coimbatore-to-munnar',
    distanceKm: 160,
    timeHours: 4.5,
    distanceDisplay: '160 km',
    durationDisplay: '4.5 Hours',
    category: 'Tourist',
    popularity: 9,
    isFeatured: false,
    seasonality: ["Summer","Winter"],
    popularFor: ["CJB Airport","Tourism Return"],
    roadConditions: 'Scenic mountain ghat road with hairpin bends. Driver certified in hill gear control.',
    heroTagline: 'Affordable One-Way Taxi from Munnar to Coimbatore. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Munnar to Coimbatore One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Munnar to Coimbatore with SAMAYAS. Hatchback from ₹2,400, Sedan ₹2,400, SUV ₹3,200. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2400,
      "sedan": 2400,
      "suv": 3200,
      "innova": 3520,
      "hycross": 4000,
      "traveller": 4800
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Munnar - Coimbatore)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Munnar - Coimbatore Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along Udumalpet Ghat Road.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "Udumalpet Ghat Road Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "Udumalpet Ghat Road Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Munnar Regional Snacks",
                  "location": "Munnar Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Munnar"
            }
      ]
},
    highways: ["Udumalpet Ghat Road","SH17"],
    tolls: {
      costRange: '₹90 - ₹140',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Munnar Central City / Main Junction',
      'Munnar Railway Station & Bus Stand',
      'Munnar Residential Areas & Hotels',
      'Munnar Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Coimbatore City Center & Main Commercial Hub',
      'Coimbatore Railway Station & Transit Terminals',
      'Coimbatore Hotels, Resorts & Residential Hubs',
      'Coimbatore Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Munnar', type: 'Origin', desc: 'Doorstep pickup across Munnar.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Coimbatore', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Coimbatore.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Munnar to Coimbatore?',
        a: 'The one-way taxi fare from Munnar to Coimbatore starts at ₹2,400 for a Hatchback, ₹2,400 for a Sedan, and ₹3,200 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Munnar to Coimbatore?',
        a: 'The distance from Munnar to Coimbatore is approx 160 km via Udumalpet Ghat Road. Travel duration is around 4.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Munnar?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Munnar including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Munnar to Coimbatore. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 4.5 hours.',
        route: 'Munnar to Coimbatore',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Munnar to Coimbatore. Zero return charges and transparent per-km bill.',
        route: 'Munnar to Coimbatore',
      },
    ],
    nearbyRoutes: [
      { name: 'Coimbatore to Munnar', slug: 'coimbatore-to-munnar', distance: '160 km', fare: '₹2,400' },
    ],
  },

  'madurai-to-kodaikanal': {
    from: 'Madurai',
    to: 'Kodaikanal',
    fromSlug: 'madurai',
    toSlug: 'dindigul',
    returnRouteSlug: 'kodaikanal-to-madurai',
    distanceKm: 115,
    timeHours: 3,
    distanceDisplay: '115 km',
    durationDisplay: '3 Hours',
    category: 'Tourist',
    popularity: 10,
    isFeatured: true,
    seasonality: ["Summer","Winter"],
    popularFor: ["Tourism","Hill Resort","Honeymoon"],
    roadConditions: 'Scenic mountain ghat road with hairpin bends. Driver certified in hill gear control.',
    heroTagline: 'Affordable One-Way Taxi from Madurai to Kodaikanal. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Madurai to Kodaikanal One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Madurai to Kodaikanal with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Madurai - Kodaikanal)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Madurai - Kodaikanal Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along SH156 Ghat Road.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "SH156 Ghat Road Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "SH156 Ghat Road Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Madurai Regional Snacks",
                  "location": "Madurai Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Madurai"
            }
      ]
},
    highways: ["SH156 Ghat Road"],
    tolls: {
      costRange: '₹80 - ₹120',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Madurai Central City / Main Junction',
      'Madurai Railway Station & Bus Stand',
      'Madurai Residential Areas & Hotels',
      'Madurai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Kodaikanal City Center & Main Commercial Hub',
      'Kodaikanal Railway Station & Transit Terminals',
      'Kodaikanal Hotels, Resorts & Residential Hubs',
      'Kodaikanal Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Madurai', type: 'Origin', desc: 'Doorstep pickup across Madurai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Kodaikanal', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Kodaikanal.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Madurai to Kodaikanal?',
        a: 'The one-way taxi fare from Madurai to Kodaikanal starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Madurai to Kodaikanal?',
        a: 'The distance from Madurai to Kodaikanal is approx 115 km via SH156 Ghat Road. Travel duration is around 3 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Madurai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Madurai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Madurai to Kodaikanal. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3 hours.',
        route: 'Madurai to Kodaikanal',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Madurai to Kodaikanal. Zero return charges and transparent per-km bill.',
        route: 'Madurai to Kodaikanal',
      },
    ],
    nearbyRoutes: [
      { name: 'Kodaikanal to Madurai', slug: 'kodaikanal-to-madurai', distance: '115 km', fare: '₹1,950' },
    ],
  },

  'kodaikanal-to-madurai': {
    from: 'Kodaikanal',
    to: 'Madurai',
    fromSlug: 'dindigul',
    toSlug: 'madurai',
    returnRouteSlug: 'madurai-to-kodaikanal',
    distanceKm: 115,
    timeHours: 3,
    distanceDisplay: '115 km',
    durationDisplay: '3 Hours',
    category: 'Tourist',
    popularity: 10,
    isFeatured: false,
    seasonality: ["Summer","Winter"],
    popularFor: ["IXM Airport","Tourism Return"],
    roadConditions: 'Scenic mountain ghat road with hairpin bends. Driver certified in hill gear control.',
    heroTagline: 'Affordable One-Way Taxi from Kodaikanal to Madurai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Kodaikanal to Madurai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Kodaikanal to Madurai with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Kodaikanal - Madurai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Kodaikanal - Madurai Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along SH156 Ghat Road.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "SH156 Ghat Road Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "SH156 Ghat Road Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Kodaikanal Regional Snacks",
                  "location": "Kodaikanal Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Kodaikanal"
            }
      ]
},
    highways: ["SH156 Ghat Road"],
    tolls: {
      costRange: '₹80 - ₹120',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Kodaikanal Central City / Main Junction',
      'Kodaikanal Railway Station & Bus Stand',
      'Kodaikanal Residential Areas & Hotels',
      'Kodaikanal Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Madurai City Center & Main Commercial Hub',
      'Madurai Railway Station & Transit Terminals',
      'Madurai Hotels, Resorts & Residential Hubs',
      'Madurai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Kodaikanal', type: 'Origin', desc: 'Doorstep pickup across Kodaikanal.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Madurai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Madurai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Kodaikanal to Madurai?',
        a: 'The one-way taxi fare from Kodaikanal to Madurai starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Kodaikanal to Madurai?',
        a: 'The distance from Kodaikanal to Madurai is approx 115 km via SH156 Ghat Road. Travel duration is around 3 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Kodaikanal?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Kodaikanal including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Kodaikanal to Madurai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3 hours.',
        route: 'Kodaikanal to Madurai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Kodaikanal to Madurai. Zero return charges and transparent per-km bill.',
        route: 'Kodaikanal to Madurai',
      },
    ],
    nearbyRoutes: [
      { name: 'Madurai to Kodaikanal', slug: 'madurai-to-kodaikanal', distance: '115 km', fare: '₹1,950' },
    ],
  },

  'chennai-to-pondicherry': {
    from: 'Chennai',
    to: 'Pondicherry',
    fromSlug: 'chennai',
    toSlug: 'puducherry',
    returnRouteSlug: 'pondicherry-to-chennai',
    distanceKm: 150,
    timeHours: 3,
    distanceDisplay: '150 km',
    durationDisplay: '3 Hours',
    category: 'Tourist',
    popularity: 10,
    isFeatured: true,
    seasonality: ["All Season"],
    popularFor: ["Weekend Getaway","French Colony","Beach"],
    roadConditions: 'Coastal 2-lane ECR highway featuring scenic Bay of Bengal views and smooth road surface.',
    heroTagline: 'Affordable One-Way Taxi from Chennai to Pondicherry. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Chennai to Pondicherry One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Chennai to Pondicherry with SAMAYAS. Hatchback from ₹2,250, Sedan ₹2,250, SUV ₹3,000. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2250,
      "sedan": 2250,
      "suv": 3000,
      "innova": 3300,
      "hycross": 3750,
      "traveller": 4500
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Baker Street French Bakery",
                  "cuisine": "French & European",
                  "famousFor": "Butter Croissants, Quiche & Eclairs",
                  "detour": "1 km ECR Detour",
                  "mealType": [
                        "Breakfast",
                        "Snacks"
                  ],
                  "rating": "4.7★"
            },
            {
                  "name": "ECR Dhaba & Seafood Shack",
                  "cuisine": "Chettinad Seafood",
                  "famousFor": "Fresh Tawa Fish Fry & Prawn Masala",
                  "detour": "0 km ECR Highway",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.5★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Cafe Des Arts French Quarter",
                  "type": "Coffee Shop & Cafe"
            }
      ],
      "attractions": [
            {
                  "name": "Auroville Globe & Matrimandir",
                  "description": "Universal township dedicated to human unity with iconic golden dome.",
                  "visitDuration": "2 Hours",
                  "familyFriendly": true
            },
            {
                  "name": "Mahabalipuram Five Rathas & Shore Temple",
                  "description": "Ancient 7th-century rock-cut monuments along ECR coastline.",
                  "visitDuration": "1.5 Hours",
                  "familyFriendly": true
            }
      ],
      "selfieSpots": [
            {
                  "name": "Pondicherry Promenade Rock Beach",
                  "type": "French Quarter Sea Boardwalk",
                  "location": "White Town Beach Road"
            }
      ],
      "shopping": [
            {
                  "category": "Aromatherapy & Handmade Leather",
                  "famousProducts": "Auroville Incense, Essential Oils & Genuine Leather"
            }
      ],
      "essentials": [
            {
                  "name": "Mahabalipuram ECR Fuel & Plaza",
                  "type": "Petrol Pump & Restrooms",
                  "location": "ECR Highway Km 55"
            }
      ]
},
    highways: ["ECR Coastal Highway"],
    tolls: {
      costRange: '₹110 - ₹160',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Chennai Central City / Main Junction',
      'Chennai Railway Station & Bus Stand',
      'Chennai Residential Areas & Hotels',
      'Chennai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Pondicherry City Center & Main Commercial Hub',
      'Pondicherry Railway Station & Transit Terminals',
      'Pondicherry Hotels, Resorts & Residential Hubs',
      'Pondicherry Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Chennai', type: 'Origin', desc: 'Doorstep pickup across Chennai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Pondicherry', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Pondicherry.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Chennai to Pondicherry?',
        a: 'The one-way taxi fare from Chennai to Pondicherry starts at ₹2,250 for a Hatchback, ₹2,250 for a Sedan, and ₹3,000 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Chennai to Pondicherry?',
        a: 'The distance from Chennai to Pondicherry is approx 150 km via ECR Coastal Highway. Travel duration is around 3 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Chennai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Chennai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Chennai to Pondicherry. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3 hours.',
        route: 'Chennai to Pondicherry',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Chennai to Pondicherry. Zero return charges and transparent per-km bill.',
        route: 'Chennai to Pondicherry',
      },
    ],
    nearbyRoutes: [
      { name: 'Pondicherry to Chennai', slug: 'pondicherry-to-chennai', distance: '150 km', fare: '₹2,250' },
    ],
  },

  'pondicherry-to-chennai': {
    from: 'Pondicherry',
    to: 'Chennai',
    fromSlug: 'puducherry',
    toSlug: 'chennai',
    returnRouteSlug: 'chennai-to-pondicherry',
    distanceKm: 150,
    timeHours: 3,
    distanceDisplay: '150 km',
    durationDisplay: '3 Hours',
    category: 'Tourist',
    popularity: 10,
    isFeatured: true,
    seasonality: ["All Season"],
    popularFor: ["MAA Airport","Corporate Return"],
    roadConditions: 'Coastal 2-lane ECR highway featuring scenic Bay of Bengal views and smooth road surface.',
    heroTagline: 'Affordable One-Way Taxi from Pondicherry to Chennai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Pondicherry to Chennai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Pondicherry to Chennai with SAMAYAS. Hatchback from ₹2,250, Sedan ₹2,250, SUV ₹3,000. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2250,
      "sedan": 2250,
      "suv": 3000,
      "innova": 3300,
      "hycross": 3750,
      "traveller": 4500
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Baker Street French Bakery",
                  "cuisine": "French & European",
                  "famousFor": "Butter Croissants, Quiche & Eclairs",
                  "detour": "1 km ECR Detour",
                  "mealType": [
                        "Breakfast",
                        "Snacks"
                  ],
                  "rating": "4.7★"
            },
            {
                  "name": "ECR Dhaba & Seafood Shack",
                  "cuisine": "Chettinad Seafood",
                  "famousFor": "Fresh Tawa Fish Fry & Prawn Masala",
                  "detour": "0 km ECR Highway",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.5★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Cafe Des Arts French Quarter",
                  "type": "Coffee Shop & Cafe"
            }
      ],
      "attractions": [
            {
                  "name": "Auroville Globe & Matrimandir",
                  "description": "Universal township dedicated to human unity with iconic golden dome.",
                  "visitDuration": "2 Hours",
                  "familyFriendly": true
            },
            {
                  "name": "Mahabalipuram Five Rathas & Shore Temple",
                  "description": "Ancient 7th-century rock-cut monuments along ECR coastline.",
                  "visitDuration": "1.5 Hours",
                  "familyFriendly": true
            }
      ],
      "selfieSpots": [
            {
                  "name": "Pondicherry Promenade Rock Beach",
                  "type": "French Quarter Sea Boardwalk",
                  "location": "White Town Beach Road"
            }
      ],
      "shopping": [
            {
                  "category": "Aromatherapy & Handmade Leather",
                  "famousProducts": "Auroville Incense, Essential Oils & Genuine Leather"
            }
      ],
      "essentials": [
            {
                  "name": "Mahabalipuram ECR Fuel & Plaza",
                  "type": "Petrol Pump & Restrooms",
                  "location": "ECR Highway Km 55"
            }
      ]
},
    highways: ["ECR Coastal Highway"],
    tolls: {
      costRange: '₹110 - ₹160',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Pondicherry Central City / Main Junction',
      'Pondicherry Railway Station & Bus Stand',
      'Pondicherry Residential Areas & Hotels',
      'Pondicherry Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Chennai City Center & Main Commercial Hub',
      'Chennai Railway Station & Transit Terminals',
      'Chennai Hotels, Resorts & Residential Hubs',
      'Chennai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Pondicherry', type: 'Origin', desc: 'Doorstep pickup across Pondicherry.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Chennai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Chennai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Pondicherry to Chennai?',
        a: 'The one-way taxi fare from Pondicherry to Chennai starts at ₹2,250 for a Hatchback, ₹2,250 for a Sedan, and ₹3,000 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Pondicherry to Chennai?',
        a: 'The distance from Pondicherry to Chennai is approx 150 km via ECR Coastal Highway. Travel duration is around 3 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Pondicherry?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Pondicherry including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Pondicherry to Chennai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3 hours.',
        route: 'Pondicherry to Chennai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Pondicherry to Chennai. Zero return charges and transparent per-km bill.',
        route: 'Pondicherry to Chennai',
      },
    ],
    nearbyRoutes: [
      { name: 'Chennai to Pondicherry', slug: 'chennai-to-pondicherry', distance: '150 km', fare: '₹2,250' },
    ],
  },

  'chennai-to-mahabalipuram': {
    from: 'Chennai',
    to: 'Mahabalipuram',
    fromSlug: 'chennai',
    toSlug: 'chennai',
    returnRouteSlug: 'mahabalipuram-to-chennai',
    distanceKm: 55,
    timeHours: 1.25,
    distanceDisplay: '55 km',
    durationDisplay: '1.25 Hours',
    category: 'Tourist',
    popularity: 9,
    isFeatured: true,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["Heritage","Shore Temple","Day Trip"],
    roadConditions: 'Coastal 2-lane ECR highway featuring scenic Bay of Bengal views and smooth road surface.',
    heroTagline: 'Affordable One-Way Taxi from Chennai to Mahabalipuram. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Chennai to Mahabalipuram One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Chennai to Mahabalipuram with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Chennai - Mahabalipuram)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Chennai - Mahabalipuram Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along ECR Scenic Highway.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "ECR Scenic Highway Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "ECR Scenic Highway Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Chennai Regional Snacks",
                  "location": "Chennai Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Chennai"
            }
      ]
},
    highways: ["ECR Scenic Highway"],
    tolls: {
      costRange: '₹60 - ₹90',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Chennai Central City / Main Junction',
      'Chennai Railway Station & Bus Stand',
      'Chennai Residential Areas & Hotels',
      'Chennai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Mahabalipuram City Center & Main Commercial Hub',
      'Mahabalipuram Railway Station & Transit Terminals',
      'Mahabalipuram Hotels, Resorts & Residential Hubs',
      'Mahabalipuram Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Chennai', type: 'Origin', desc: 'Doorstep pickup across Chennai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Mahabalipuram', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Mahabalipuram.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Chennai to Mahabalipuram?',
        a: 'The one-way taxi fare from Chennai to Mahabalipuram starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Chennai to Mahabalipuram?',
        a: 'The distance from Chennai to Mahabalipuram is approx 55 km via ECR Scenic Highway. Travel duration is around 1.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Chennai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Chennai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Chennai to Mahabalipuram. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 1.25 hours.',
        route: 'Chennai to Mahabalipuram',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Chennai to Mahabalipuram. Zero return charges and transparent per-km bill.',
        route: 'Chennai to Mahabalipuram',
      },
    ],
    nearbyRoutes: [
      { name: 'Mahabalipuram to Chennai', slug: 'mahabalipuram-to-chennai', distance: '55 km', fare: '₹1,950' },
    ],
  },

  'mahabalipuram-to-chennai': {
    from: 'Mahabalipuram',
    to: 'Chennai',
    fromSlug: 'chennai',
    toSlug: 'chennai',
    returnRouteSlug: 'chennai-to-mahabalipuram',
    distanceKm: 55,
    timeHours: 1.25,
    distanceDisplay: '55 km',
    durationDisplay: '1.25 Hours',
    category: 'Tourist',
    popularity: 9,
    isFeatured: false,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["MAA Airport","Day Trip Return"],
    roadConditions: 'Coastal 2-lane ECR highway featuring scenic Bay of Bengal views and smooth road surface.',
    heroTagline: 'Affordable One-Way Taxi from Mahabalipuram to Chennai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Mahabalipuram to Chennai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Mahabalipuram to Chennai with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Mahabalipuram - Chennai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Mahabalipuram - Chennai Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along ECR Scenic Highway.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "ECR Scenic Highway Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "ECR Scenic Highway Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Mahabalipuram Regional Snacks",
                  "location": "Mahabalipuram Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Mahabalipuram"
            }
      ]
},
    highways: ["ECR Scenic Highway"],
    tolls: {
      costRange: '₹60 - ₹90',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Mahabalipuram Central City / Main Junction',
      'Mahabalipuram Railway Station & Bus Stand',
      'Mahabalipuram Residential Areas & Hotels',
      'Mahabalipuram Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Chennai City Center & Main Commercial Hub',
      'Chennai Railway Station & Transit Terminals',
      'Chennai Hotels, Resorts & Residential Hubs',
      'Chennai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Mahabalipuram', type: 'Origin', desc: 'Doorstep pickup across Mahabalipuram.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Chennai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Chennai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Mahabalipuram to Chennai?',
        a: 'The one-way taxi fare from Mahabalipuram to Chennai starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Mahabalipuram to Chennai?',
        a: 'The distance from Mahabalipuram to Chennai is approx 55 km via ECR Scenic Highway. Travel duration is around 1.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Mahabalipuram?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Mahabalipuram including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Mahabalipuram to Chennai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 1.25 hours.',
        route: 'Mahabalipuram to Chennai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Mahabalipuram to Chennai. Zero return charges and transparent per-km bill.',
        route: 'Mahabalipuram to Chennai',
      },
    ],
    nearbyRoutes: [
      { name: 'Chennai to Mahabalipuram', slug: 'chennai-to-mahabalipuram', distance: '55 km', fare: '₹1,950' },
    ],
  },

  'trichy-to-yercaud': {
    from: 'Trichy',
    to: 'Yercaud',
    fromSlug: 'tiruchirappalli',
    toSlug: 'salem',
    returnRouteSlug: 'yercaud-to-trichy',
    distanceKm: 170,
    timeHours: 3.5,
    distanceDisplay: '170 km',
    durationDisplay: '3.5 Hours',
    category: 'Tourist',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Hill Station","Resort","Weekend"],
    roadConditions: 'Access-controlled NH81 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Trichy to Yercaud. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Trichy to Yercaud One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Trichy to Yercaud with SAMAYAS. Hatchback from ₹2,550, Sedan ₹2,550, SUV ₹3,400. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2550,
      "sedan": 2550,
      "suv": 3400,
      "innova": 3740,
      "hycross": 4250,
      "traveller": 5100
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Trichy - Yercaud)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Trichy - Yercaud Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH81.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH81 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH81 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Trichy Regional Snacks",
                  "location": "Trichy Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Trichy"
            }
      ]
},
    highways: ["NH81","SH188 Ghat Road"],
    tolls: {
      costRange: '₹120 - ₹160',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Trichy Central City / Main Junction',
      'Trichy Railway Station & Bus Stand',
      'Trichy Residential Areas & Hotels',
      'Trichy Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Yercaud City Center & Main Commercial Hub',
      'Yercaud Railway Station & Transit Terminals',
      'Yercaud Hotels, Resorts & Residential Hubs',
      'Yercaud Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Trichy', type: 'Origin', desc: 'Doorstep pickup across Trichy.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Yercaud', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Yercaud.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Trichy to Yercaud?',
        a: 'The one-way taxi fare from Trichy to Yercaud starts at ₹2,550 for a Hatchback, ₹2,550 for a Sedan, and ₹3,400 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Trichy to Yercaud?',
        a: 'The distance from Trichy to Yercaud is approx 170 km via NH81. Travel duration is around 3.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Trichy?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Trichy including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Trichy to Yercaud. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3.5 hours.',
        route: 'Trichy to Yercaud',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Trichy to Yercaud. Zero return charges and transparent per-km bill.',
        route: 'Trichy to Yercaud',
      },
    ],
    nearbyRoutes: [
      { name: 'Yercaud to Trichy', slug: 'yercaud-to-trichy', distance: '170 km', fare: '₹2,550' },
    ],
  },

  'yercaud-to-trichy': {
    from: 'Yercaud',
    to: 'Trichy',
    fromSlug: 'salem',
    toSlug: 'tiruchirappalli',
    returnRouteSlug: 'trichy-to-yercaud',
    distanceKm: 170,
    timeHours: 3.5,
    distanceDisplay: '170 km',
    durationDisplay: '3.5 Hours',
    category: 'Tourist',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["TRZ Airport","Tourism Return"],
    roadConditions: 'Access-controlled SH188 Ghat Road multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Yercaud to Trichy. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Yercaud to Trichy One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Yercaud to Trichy with SAMAYAS. Hatchback from ₹2,550, Sedan ₹2,550, SUV ₹3,400. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2550,
      "sedan": 2550,
      "suv": 3400,
      "innova": 3740,
      "hycross": 4250,
      "traveller": 5100
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Yercaud - Trichy)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Yercaud - Trichy Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along SH188 Ghat Road.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "SH188 Ghat Road Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "SH188 Ghat Road Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Yercaud Regional Snacks",
                  "location": "Yercaud Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Yercaud"
            }
      ]
},
    highways: ["SH188 Ghat Road","NH81"],
    tolls: {
      costRange: '₹120 - ₹160',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Yercaud Central City / Main Junction',
      'Yercaud Railway Station & Bus Stand',
      'Yercaud Residential Areas & Hotels',
      'Yercaud Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Trichy City Center & Main Commercial Hub',
      'Trichy Railway Station & Transit Terminals',
      'Trichy Hotels, Resorts & Residential Hubs',
      'Trichy Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Yercaud', type: 'Origin', desc: 'Doorstep pickup across Yercaud.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Trichy', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Trichy.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Yercaud to Trichy?',
        a: 'The one-way taxi fare from Yercaud to Trichy starts at ₹2,550 for a Hatchback, ₹2,550 for a Sedan, and ₹3,400 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Yercaud to Trichy?',
        a: 'The distance from Yercaud to Trichy is approx 170 km via SH188 Ghat Road. Travel duration is around 3.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Yercaud?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Yercaud including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Yercaud to Trichy. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3.5 hours.',
        route: 'Yercaud to Trichy',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Yercaud to Trichy. Zero return charges and transparent per-km bill.',
        route: 'Yercaud to Trichy',
      },
    ],
    nearbyRoutes: [
      { name: 'Trichy to Yercaud', slug: 'trichy-to-yercaud', distance: '170 km', fare: '₹2,550' },
    ],
  },

  'chennai-to-bangalore': {
    from: 'Chennai',
    to: 'Bangalore',
    fromSlug: 'chennai',
    toSlug: 'chennai',
    returnRouteSlug: 'bangalore-to-chennai',
    distanceKm: 350,
    timeHours: 6,
    distanceDisplay: '350 km',
    durationDisplay: '6 Hours',
    category: 'Interstate',
    popularity: 10,
    isFeatured: true,
    seasonality: ["All Season"],
    popularFor: ["IT Hub","Business","Interstate"],
    roadConditions: 'Access-controlled NH48 Expressway multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Chennai to Bangalore. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Chennai to Bangalore One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Chennai to Bangalore with SAMAYAS. Hatchback from ₹5,250, Sedan ₹5,250, SUV ₹7,000. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 5250,
      "sedan": 5250,
      "suv": 7000,
      "innova": 7700,
      "hycross": 8750,
      "traveller": 10500
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Chennai - Bangalore)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Chennai - Bangalore Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH48 Expressway.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH48 Expressway Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH48 Expressway Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Chennai Regional Snacks",
                  "location": "Chennai Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Chennai"
            }
      ]
},
    highways: ["NH48 Expressway"],
    tolls: {
      costRange: '₹480 - ₹580',
      plazasCount: 5,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Chennai Central City / Main Junction',
      'Chennai Railway Station & Bus Stand',
      'Chennai Residential Areas & Hotels',
      'Chennai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Bangalore City Center & Main Commercial Hub',
      'Bangalore Railway Station & Transit Terminals',
      'Bangalore Hotels, Resorts & Residential Hubs',
      'Bangalore Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Chennai', type: 'Origin', desc: 'Doorstep pickup across Chennai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Bangalore', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Bangalore.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Chennai to Bangalore?',
        a: 'The one-way taxi fare from Chennai to Bangalore starts at ₹5,250 for a Hatchback, ₹5,250 for a Sedan, and ₹7,000 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Chennai to Bangalore?',
        a: 'The distance from Chennai to Bangalore is approx 350 km via NH48 Expressway. Travel duration is around 6 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Chennai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Chennai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Chennai to Bangalore. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 6 hours.',
        route: 'Chennai to Bangalore',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Chennai to Bangalore. Zero return charges and transparent per-km bill.',
        route: 'Chennai to Bangalore',
      },
    ],
    nearbyRoutes: [
      { name: 'Bangalore to Chennai', slug: 'bangalore-to-chennai', distance: '350 km', fare: '₹5,250' },
    ],
  },

  'bangalore-to-chennai': {
    from: 'Bangalore',
    to: 'Chennai',
    fromSlug: 'chennai',
    toSlug: 'chennai',
    returnRouteSlug: 'chennai-to-bangalore',
    distanceKm: 350,
    timeHours: 6,
    distanceDisplay: '350 km',
    durationDisplay: '6 Hours',
    category: 'Interstate',
    popularity: 10,
    isFeatured: true,
    seasonality: ["All Season"],
    popularFor: ["Corporate","Medical","MAA Airport"],
    roadConditions: 'Access-controlled NH48 Expressway multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Bangalore to Chennai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Bangalore to Chennai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Bangalore to Chennai with SAMAYAS. Hatchback from ₹5,250, Sedan ₹5,250, SUV ₹7,000. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 5250,
      "sedan": 5250,
      "suv": 7000,
      "innova": 7700,
      "hycross": 8750,
      "traveller": 10500
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Bangalore - Chennai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Bangalore - Chennai Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH48 Expressway.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH48 Expressway Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH48 Expressway Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Bangalore Regional Snacks",
                  "location": "Bangalore Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Bangalore"
            }
      ]
},
    highways: ["NH48 Expressway"],
    tolls: {
      costRange: '₹480 - ₹580',
      plazasCount: 5,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Bangalore Central City / Main Junction',
      'Bangalore Railway Station & Bus Stand',
      'Bangalore Residential Areas & Hotels',
      'Bangalore Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Chennai City Center & Main Commercial Hub',
      'Chennai Railway Station & Transit Terminals',
      'Chennai Hotels, Resorts & Residential Hubs',
      'Chennai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Bangalore', type: 'Origin', desc: 'Doorstep pickup across Bangalore.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Chennai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Chennai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Bangalore to Chennai?',
        a: 'The one-way taxi fare from Bangalore to Chennai starts at ₹5,250 for a Hatchback, ₹5,250 for a Sedan, and ₹7,000 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Bangalore to Chennai?',
        a: 'The distance from Bangalore to Chennai is approx 350 km via NH48 Expressway. Travel duration is around 6 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Bangalore?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Bangalore including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Bangalore to Chennai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 6 hours.',
        route: 'Bangalore to Chennai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Bangalore to Chennai. Zero return charges and transparent per-km bill.',
        route: 'Bangalore to Chennai',
      },
    ],
    nearbyRoutes: [
      { name: 'Chennai to Bangalore', slug: 'chennai-to-bangalore', distance: '350 km', fare: '₹5,250' },
    ],
  },

  'chennai-to-tirupati': {
    from: 'Chennai',
    to: 'Tirupati',
    fromSlug: 'chennai',
    toSlug: 'vellore',
    returnRouteSlug: 'tirupati-to-chennai',
    distanceKm: 135,
    timeHours: 3.25,
    distanceDisplay: '135 km',
    durationDisplay: '3.25 Hours',
    category: 'Interstate',
    popularity: 10,
    isFeatured: true,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["Tirumala Temple","Pilgrimage"],
    roadConditions: 'Access-controlled NH716 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Chennai to Tirupati. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Chennai to Tirupati One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Chennai to Tirupati with SAMAYAS. Hatchback from ₹2,025, Sedan ₹2,025, SUV ₹2,700. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2025,
      "sedan": 2025,
      "suv": 2700,
      "innova": 2970,
      "hycross": 3375,
      "traveller": 4050
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Chennai - Tirupati)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Chennai - Tirupati Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH716.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH716 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH716 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Chennai Regional Snacks",
                  "location": "Chennai Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Chennai"
            }
      ]
},
    highways: ["NH716"],
    tolls: {
      costRange: '₹140 - ₹190',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Chennai Central City / Main Junction',
      'Chennai Railway Station & Bus Stand',
      'Chennai Residential Areas & Hotels',
      'Chennai Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Tirupati City Center & Main Commercial Hub',
      'Tirupati Railway Station & Transit Terminals',
      'Tirupati Hotels, Resorts & Residential Hubs',
      'Tirupati Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Chennai', type: 'Origin', desc: 'Doorstep pickup across Chennai.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Tirupati', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Tirupati.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Chennai to Tirupati?',
        a: 'The one-way taxi fare from Chennai to Tirupati starts at ₹2,025 for a Hatchback, ₹2,025 for a Sedan, and ₹2,700 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Chennai to Tirupati?',
        a: 'The distance from Chennai to Tirupati is approx 135 km via NH716. Travel duration is around 3.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Chennai?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Chennai including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Chennai to Tirupati. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3.25 hours.',
        route: 'Chennai to Tirupati',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Chennai to Tirupati. Zero return charges and transparent per-km bill.',
        route: 'Chennai to Tirupati',
      },
    ],
    nearbyRoutes: [
      { name: 'Tirupati to Chennai', slug: 'tirupati-to-chennai', distance: '135 km', fare: '₹2,025' },
    ],
  },

  'tirupati-to-chennai': {
    from: 'Tirupati',
    to: 'Chennai',
    fromSlug: 'vellore',
    toSlug: 'chennai',
    returnRouteSlug: 'chennai-to-tirupati',
    distanceKm: 135,
    timeHours: 3.25,
    distanceDisplay: '135 km',
    durationDisplay: '3.25 Hours',
    category: 'Interstate',
    popularity: 10,
    isFeatured: false,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["Pilgrimage Return","MAA Airport"],
    roadConditions: 'Access-controlled NH716 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Tirupati to Chennai. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Tirupati to Chennai One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Tirupati to Chennai with SAMAYAS. Hatchback from ₹2,025, Sedan ₹2,025, SUV ₹2,700. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 2025,
      "sedan": 2025,
      "suv": 2700,
      "innova": 2970,
      "hycross": 3375,
      "traveller": 4050
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Tirupati - Chennai)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Tirupati - Chennai Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH716.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH716 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH716 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Tirupati Regional Snacks",
                  "location": "Tirupati Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Tirupati"
            }
      ]
},
    highways: ["NH716"],
    tolls: {
      costRange: '₹140 - ₹190',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Tirupati Central City / Main Junction',
      'Tirupati Railway Station & Bus Stand',
      'Tirupati Residential Areas & Hotels',
      'Tirupati Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Chennai City Center & Main Commercial Hub',
      'Chennai Railway Station & Transit Terminals',
      'Chennai Hotels, Resorts & Residential Hubs',
      'Chennai Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Tirupati', type: 'Origin', desc: 'Doorstep pickup across Tirupati.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Chennai', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Chennai.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Tirupati to Chennai?',
        a: 'The one-way taxi fare from Tirupati to Chennai starts at ₹2,025 for a Hatchback, ₹2,025 for a Sedan, and ₹2,700 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Tirupati to Chennai?',
        a: 'The distance from Tirupati to Chennai is approx 135 km via NH716. Travel duration is around 3.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Tirupati?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Tirupati including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Tirupati to Chennai. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 3.25 hours.',
        route: 'Tirupati to Chennai',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Tirupati to Chennai. Zero return charges and transparent per-km bill.',
        route: 'Tirupati to Chennai',
      },
    ],
    nearbyRoutes: [
      { name: 'Chennai to Tirupati', slug: 'chennai-to-tirupati', distance: '135 km', fare: '₹2,025' },
    ],
  },

  'vellore-to-tirupati': {
    from: 'Vellore',
    to: 'Tirupati',
    fromSlug: 'vellore',
    toSlug: 'vellore',
    returnRouteSlug: 'tirupati-to-vellore',
    distanceKm: 110,
    timeHours: 2.5,
    distanceDisplay: '110 km',
    durationDisplay: '2.5 Hours',
    category: 'Interstate',
    popularity: 9,
    isFeatured: false,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["CMC Patient Pilgrimage","Tirumala"],
    roadConditions: 'Access-controlled NH716 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Vellore to Tirupati. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Vellore to Tirupati One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Vellore to Tirupati with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Vellore - Tirupati)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Vellore - Tirupati Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH716.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH716 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH716 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Vellore Regional Snacks",
                  "location": "Vellore Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Vellore"
            }
      ]
},
    highways: ["NH716"],
    tolls: {
      costRange: '₹110 - ₹150',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Vellore Central City / Main Junction',
      'Vellore Railway Station & Bus Stand',
      'Vellore Residential Areas & Hotels',
      'Vellore Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Tirupati City Center & Main Commercial Hub',
      'Tirupati Railway Station & Transit Terminals',
      'Tirupati Hotels, Resorts & Residential Hubs',
      'Tirupati Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Vellore', type: 'Origin', desc: 'Doorstep pickup across Vellore.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Tirupati', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Tirupati.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Vellore to Tirupati?',
        a: 'The one-way taxi fare from Vellore to Tirupati starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Vellore to Tirupati?',
        a: 'The distance from Vellore to Tirupati is approx 110 km via NH716. Travel duration is around 2.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Vellore?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Vellore including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Vellore to Tirupati. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2.5 hours.',
        route: 'Vellore to Tirupati',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Vellore to Tirupati. Zero return charges and transparent per-km bill.',
        route: 'Vellore to Tirupati',
      },
    ],
    nearbyRoutes: [
      { name: 'Tirupati to Vellore', slug: 'tirupati-to-vellore', distance: '110 km', fare: '₹1,950' },
    ],
  },

  'tirupati-to-vellore': {
    from: 'Tirupati',
    to: 'Vellore',
    fromSlug: 'vellore',
    toSlug: 'vellore',
    returnRouteSlug: 'vellore-to-tirupati',
    distanceKm: 110,
    timeHours: 2.5,
    distanceDisplay: '110 km',
    durationDisplay: '2.5 Hours',
    category: 'Interstate',
    popularity: 9,
    isFeatured: false,
    seasonality: ["Festival","Winter","All Season"],
    popularFor: ["CMC Hospital Transfer"],
    roadConditions: 'Access-controlled NH716 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Tirupati to Vellore. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Tirupati to Vellore One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Tirupati to Vellore with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Tirupati - Vellore)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Tirupati - Vellore Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH716.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH716 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH716 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Tirupati Regional Snacks",
                  "location": "Tirupati Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Tirupati"
            }
      ]
},
    highways: ["NH716"],
    tolls: {
      costRange: '₹110 - ₹150',
      plazasCount: 2,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Tirupati Central City / Main Junction',
      'Tirupati Railway Station & Bus Stand',
      'Tirupati Residential Areas & Hotels',
      'Tirupati Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Vellore City Center & Main Commercial Hub',
      'Vellore Railway Station & Transit Terminals',
      'Vellore Hotels, Resorts & Residential Hubs',
      'Vellore Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Tirupati', type: 'Origin', desc: 'Doorstep pickup across Tirupati.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Vellore', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Vellore.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Tirupati to Vellore?',
        a: 'The one-way taxi fare from Tirupati to Vellore starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Tirupati to Vellore?',
        a: 'The distance from Tirupati to Vellore is approx 110 km via NH716. Travel duration is around 2.5 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Tirupati?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Tirupati including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Tirupati to Vellore. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2.5 hours.',
        route: 'Tirupati to Vellore',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Tirupati to Vellore. Zero return charges and transparent per-km bill.',
        route: 'Tirupati to Vellore',
      },
    ],
    nearbyRoutes: [
      { name: 'Vellore to Tirupati', slug: 'vellore-to-tirupati', distance: '110 km', fare: '₹1,950' },
    ],
  },

  'coimbatore-to-palakkad': {
    from: 'Coimbatore',
    to: 'Palakkad',
    fromSlug: 'coimbatore',
    toSlug: 'coimbatore',
    returnRouteSlug: 'palakkad-to-coimbatore',
    distanceKm: 55,
    timeHours: 1.25,
    distanceDisplay: '55 km',
    durationDisplay: '1.25 Hours',
    category: 'Interstate',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Border Commute","Business"],
    roadConditions: 'Access-controlled NH544 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Coimbatore to Palakkad. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Coimbatore to Palakkad One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Coimbatore to Palakkad with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Coimbatore - Palakkad)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Coimbatore - Palakkad Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH544.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH544 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH544 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Coimbatore Regional Snacks",
                  "location": "Coimbatore Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Coimbatore"
            }
      ]
},
    highways: ["NH544"],
    tolls: {
      costRange: '₹60 - ₹90',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Coimbatore Central City / Main Junction',
      'Coimbatore Railway Station & Bus Stand',
      'Coimbatore Residential Areas & Hotels',
      'Coimbatore Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Palakkad City Center & Main Commercial Hub',
      'Palakkad Railway Station & Transit Terminals',
      'Palakkad Hotels, Resorts & Residential Hubs',
      'Palakkad Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Coimbatore', type: 'Origin', desc: 'Doorstep pickup across Coimbatore.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Palakkad', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Palakkad.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Coimbatore to Palakkad?',
        a: 'The one-way taxi fare from Coimbatore to Palakkad starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Coimbatore to Palakkad?',
        a: 'The distance from Coimbatore to Palakkad is approx 55 km via NH544. Travel duration is around 1.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Coimbatore?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Coimbatore including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Coimbatore to Palakkad. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 1.25 hours.',
        route: 'Coimbatore to Palakkad',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Coimbatore to Palakkad. Zero return charges and transparent per-km bill.',
        route: 'Coimbatore to Palakkad',
      },
    ],
    nearbyRoutes: [
      { name: 'Palakkad to Coimbatore', slug: 'palakkad-to-coimbatore', distance: '55 km', fare: '₹1,950' },
    ],
  },

  'palakkad-to-coimbatore': {
    from: 'Palakkad',
    to: 'Coimbatore',
    fromSlug: 'coimbatore',
    toSlug: 'coimbatore',
    returnRouteSlug: 'coimbatore-to-palakkad',
    distanceKm: 55,
    timeHours: 1.25,
    distanceDisplay: '55 km',
    durationDisplay: '1.25 Hours',
    category: 'Interstate',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["CJB Airport","Medical"],
    roadConditions: 'Access-controlled NH544 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Palakkad to Coimbatore. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Palakkad to Coimbatore One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Palakkad to Coimbatore with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Palakkad - Coimbatore)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Palakkad - Coimbatore Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH544.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH544 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH544 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Palakkad Regional Snacks",
                  "location": "Palakkad Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Palakkad"
            }
      ]
},
    highways: ["NH544"],
    tolls: {
      costRange: '₹60 - ₹90',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Palakkad Central City / Main Junction',
      'Palakkad Railway Station & Bus Stand',
      'Palakkad Residential Areas & Hotels',
      'Palakkad Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Coimbatore City Center & Main Commercial Hub',
      'Coimbatore Railway Station & Transit Terminals',
      'Coimbatore Hotels, Resorts & Residential Hubs',
      'Coimbatore Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Palakkad', type: 'Origin', desc: 'Doorstep pickup across Palakkad.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Coimbatore', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Coimbatore.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Palakkad to Coimbatore?',
        a: 'The one-way taxi fare from Palakkad to Coimbatore starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Palakkad to Coimbatore?',
        a: 'The distance from Palakkad to Coimbatore is approx 55 km via NH544. Travel duration is around 1.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Palakkad?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Palakkad including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Palakkad to Coimbatore. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 1.25 hours.',
        route: 'Palakkad to Coimbatore',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Palakkad to Coimbatore. Zero return charges and transparent per-km bill.',
        route: 'Palakkad to Coimbatore',
      },
    ],
    nearbyRoutes: [
      { name: 'Coimbatore to Palakkad', slug: 'coimbatore-to-palakkad', distance: '55 km', fare: '₹1,950' },
    ],
  },

  'kanyakumari-to-trivandrum': {
    from: 'Kanyakumari',
    to: 'Trivandrum',
    fromSlug: 'kanyakumari',
    toSlug: 'kanyakumari',
    returnRouteSlug: 'trivandrum-to-kanyakumari',
    distanceKm: 90,
    timeHours: 2.25,
    distanceDisplay: '90 km',
    durationDisplay: '2.25 Hours',
    category: 'Interstate',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["TRV Airport","Kerala Transit"],
    roadConditions: 'Access-controlled NH66 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Kanyakumari to Trivandrum. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Kanyakumari to Trivandrum One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Kanyakumari to Trivandrum with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Kanyakumari - Trivandrum)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Kanyakumari - Trivandrum Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH66.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH66 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH66 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Kanyakumari Regional Snacks",
                  "location": "Kanyakumari Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Kanyakumari"
            }
      ]
},
    highways: ["NH66"],
    tolls: {
      costRange: '₹80 - ₹120',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Kanyakumari Central City / Main Junction',
      'Kanyakumari Railway Station & Bus Stand',
      'Kanyakumari Residential Areas & Hotels',
      'Kanyakumari Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Trivandrum City Center & Main Commercial Hub',
      'Trivandrum Railway Station & Transit Terminals',
      'Trivandrum Hotels, Resorts & Residential Hubs',
      'Trivandrum Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Kanyakumari', type: 'Origin', desc: 'Doorstep pickup across Kanyakumari.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Trivandrum', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Trivandrum.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Kanyakumari to Trivandrum?',
        a: 'The one-way taxi fare from Kanyakumari to Trivandrum starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Kanyakumari to Trivandrum?',
        a: 'The distance from Kanyakumari to Trivandrum is approx 90 km via NH66. Travel duration is around 2.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Kanyakumari?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Kanyakumari including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Kanyakumari to Trivandrum. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2.25 hours.',
        route: 'Kanyakumari to Trivandrum',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Kanyakumari to Trivandrum. Zero return charges and transparent per-km bill.',
        route: 'Kanyakumari to Trivandrum',
      },
    ],
    nearbyRoutes: [
      { name: 'Trivandrum to Kanyakumari', slug: 'trivandrum-to-kanyakumari', distance: '90 km', fare: '₹1,950' },
    ],
  },

  'trivandrum-to-kanyakumari': {
    from: 'Trivandrum',
    to: 'Kanyakumari',
    fromSlug: 'kanyakumari',
    toSlug: 'kanyakumari',
    returnRouteSlug: 'kanyakumari-to-trivandrum',
    distanceKm: 90,
    timeHours: 2.25,
    distanceDisplay: '90 km',
    durationDisplay: '2.25 Hours',
    category: 'Interstate',
    popularity: 8,
    isFeatured: false,
    seasonality: ["All Season"],
    popularFor: ["Sunset View","Vivekananda Rock"],
    roadConditions: 'Access-controlled NH66 multi-lane toll expressway with high-speed bypasses around towns.',
    heroTagline: 'Affordable One-Way Taxi from Trivandrum to Kanyakumari. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',
    seoTitle: 'Trivandrum to Kanyakumari One-Way Taxi | ₹15/km Cab Booking | SAMAYAS',
    metaDescription: 'Book one-way taxi from Trivandrum to Kanyakumari with SAMAYAS. Hatchback from ₹1,950, Sedan ₹1,950, SUV ₹2,600. 24/7 doorstep pickups.',
    fare: {
      "hatchback": 1950,
      "sedan": 1950,
      "suv": 2600,
      "innova": 2860,
      "hycross": 3250,
      "traveller": 3900
},
    exploreAlongRoute: {
      "restaurants": [
            {
                  "name": "Highway Family Restaurant (Trivandrum - Kanyakumari)",
                  "cuisine": "South & North Indian",
                  "famousFor": "Fresh Tiffin, Hot Meals & Parotta",
                  "detour": "0 km Highway Plaza",
                  "mealType": [
                        "Lunch",
                        "Dinner"
                  ],
                  "rating": "4.4★"
            }
      ],
      "coffeeBreaks": [
            {
                  "name": "Kumbakonam Degree Filter Coffee",
                  "type": "Highway Refreshment Point"
            }
      ],
      "attractions": [
            {
                  "name": "Trivandrum - Kanyakumari Scenic Viewpoint",
                  "description": "Popular sightseeing and break spot along NH66.",
                  "visitDuration": "30 Mins",
                  "familyFriendly": true
            }
      ],
      "essentials": [
            {
                  "name": "NH66 Toll EV Charging & Fuel Plaza",
                  "type": "EV Charging, Fuel & Restroom",
                  "location": "NH66 Plaza"
            }
      ],
      "localSpecialties": [
            {
                  "name": "Traditional Trivandrum Regional Snacks",
                  "location": "Trivandrum Highway Plaza",
                  "famousFor": "Authentic local culinary specialties of Trivandrum"
            }
      ]
},
    highways: ["NH66"],
    tolls: {
      costRange: '₹80 - ₹120',
      plazasCount: 1,
      fastagSupported: true,
      cashAccepted: true,
      note: 'Toll plaza charges and state permit fees extra where applicable.',
    },
    pickupLocations: [
      'Trivandrum Central City / Main Junction',
      'Trivandrum Railway Station & Bus Stand',
      'Trivandrum Residential Areas & Hotels',
      'Trivandrum Suburbs & Outer Ring Gates',
    ],
    dropLocations: [
      'Kanyakumari City Center & Main Commercial Hub',
      'Kanyakumari Railway Station & Transit Terminals',
      'Kanyakumari Hotels, Resorts & Residential Hubs',
      'Kanyakumari Airport / Highway Junction Drops',
    ],
    placesOnTheWay: [
      { name: 'Trivandrum', type: 'Origin', desc: 'Doorstep pickup across Trivandrum.' },
      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },
      { name: 'Kanyakumari', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in Kanyakumari.' },
    ],
    faqs: [
      {
        q: 'What is the one-way taxi fare from Trivandrum to Kanyakumari?',
        a: 'The one-way taxi fare from Trivandrum to Kanyakumari starts at ₹1,950 for a Hatchback, ₹1,950 for a Sedan, and ₹2,600 for a 6-seater SUV. Per-km billing is clear with zero return charges.',
      },
      {
        q: 'How long does a cab take from Trivandrum to Kanyakumari?',
        a: 'The distance from Trivandrum to Kanyakumari is approx 90 km via NH66. Travel duration is around 2.25 hours.',
      },
      {
        q: 'Is 24/7 doorstep pickup available in Trivandrum?',
        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in Trivandrum including railway stations, airports, and hotels.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Kumar',
        rating: 5,
        text: 'Booked a one-way cab from Trivandrum to Kanyakumari. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in 2.25 hours.',
        route: 'Trivandrum to Kanyakumari',
      },
      {
        name: 'Priya Dharshini',
        rating: 5,
        text: 'Safe and comfortable trip from Trivandrum to Kanyakumari. Zero return charges and transparent per-km bill.',
        route: 'Trivandrum to Kanyakumari',
      },
    ],
    nearbyRoutes: [
      { name: 'Kanyakumari to Trivandrum', slug: 'kanyakumari-to-trivandrum', distance: '90 km', fare: '₹1,950' },
    ],
  },

};

export function getRouteContent(slug) {
  if (!slug) return null;
  return routeContent[slug.toLowerCase()] || null;
}
