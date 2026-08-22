export interface TourCategory {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  heroImage: string
  iconName: string
  featuredDestinations: string[] // destination slugs
  popularPackages: string[] // package slugs
  highlights: string[]
  travelGuide: {
    title: string
    content: string
    bestMonths: string
    idealDuration: string
  }
  reviews: Array<{
    name: string
    city: string
    rating: number
    comment: string
    packageUsed: string
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

export const tourCategoriesDataset: TourCategory[] = [
  {
    id: 'hill-stations',
    slug: 'hill-stations',
    title: 'Hill Station Tour Packages',
    subtitle: 'Escape to Misty Mountains, Tea Gardens & Scenic Valleys',
    description: 'Explore the finest hill stations in South India including Ooty, Kodaikanal, Munnar, Coorg, Wayanad, Yercaud, and Chikmagalur with SAMAYAS private cab tours.',
    heroImage: '/images/cars/sedan.webp',
    iconName: 'Mountain',
    featuredDestinations: ['ooty', 'kodaikanal', 'munnar', 'coorg', 'wayanad', 'yercaud', 'chikmagalur', 'vagamon'],
    popularPackages: ['ooty-2-days', 'ooty-3-days', 'kodaikanal-2-days', 'munnar-weekend', 'coorg-family-tour', 'chennai-to-ooty-tour-package', 'bangalore-to-coorg-tour-package'],
    highlights: ['Cool Mountain Climate', 'Picturesque Tea & Coffee Estates', 'Boating & Lakes', 'Trekking & Nature Trails', 'Private AC Cab Comfort'],
    travelGuide: {
      title: 'South India Hill Station Travel Guide',
      content: 'South India is home to the Western Ghats and Nilgiri ranges, offering pristine hill stations with pleasant weather year-round. Perfect for honeymoons, family retreats, and weekend getaways.',
      bestMonths: 'September to May',
      idealDuration: '2 to 4 Days'
    },
    reviews: [
      {
        name: 'Arun Kumar',
        city: 'Chennai',
        rating: 5,
        comment: 'Booked an Ooty 3-day cab tour with SAMAYAS. Driver was courteous, vehicle clean, and mountain driving was extremely smooth!',
        packageUsed: 'Ooty 3 Days Sightseeing'
      },
      {
        name: 'Sneha Reddy',
        city: 'Hyderabad',
        rating: 5,
        comment: 'Wonderful trip to Coorg and Mysore. The customized itinerary gave us enough time at every scenic view point.',
        packageUsed: 'Coorg Family Tour'
      }
    ],
    faq: [
      {
        question: 'Which is the best hill station in South India for a 3-day trip?',
        answer: 'Ooty, Kodaikanal, and Munnar are top choices for a 3-day trip. They feature lakes, botanical gardens, viewpoints, and pleasant mountain air.'
      },
      {
        question: 'Do SAMAYAS drivers have hill driving experience?',
        answer: 'Yes! All SAMAYAS drivers are expert hills-certified drivers experienced with hairpin bends in Ooty, Kodaikanal, Munnar, and Coorg.'
      }
    ],
    seo: {
      title: 'Hill Station Tour Packages in South India | SAMAYAS Private Cab Tours',
      description: 'Book South India hill station tour packages for Ooty, Kodaikanal, Munnar, Coorg & Wayanad. Private cab with experienced driver, flexible itinerary, transparent pricing.',
      keywords: ['hill station tour packages', 'ooty tour package', 'kodaikanal tour package', 'munnar tour package', 'coorg tour cab']
    }
  },
  {
    id: 'temple-tours',
    slug: 'temple-tours',
    title: 'Temple & Pilgrimage Tour Packages',
    subtitle: 'Divine Journeys to Sacred Temples & Heritage Shrines',
    description: 'Experience spiritual tranquility across famous South Indian temples including Rameswaram, Madurai Meenakshi, Tirupati Balaji, Thanjavur Big Temple, Kanchipuram, and Chidambaram.',
    heroImage: '/images/cars/suv.webp',
    iconName: 'Building2',
    featuredDestinations: ['rameswaram', 'madurai', 'thanjavur', 'kanchipuram', 'chidambaram', 'tirupati', 'kanyakumari', 'velankanni'],
    popularPackages: ['rameswaram-pilgrimage', 'madurai-rameswaram-kanyakumari-tour', 'trichy-to-rameswaram-tour-package', 'tirupati-balaji-tour'],
    highlights: ['Spiritual Darshan Support', 'Dravidian Architectural Marvels', 'Senior Citizen Friendly', 'Comfortable AC Taxi', 'Flexible Temple Timings'],
    travelGuide: {
      title: 'South India Temple Pilgrimage Guide',
      content: 'Tamil Nadu and South India boast millennia-old UNESCO world heritage temples. Having a dedicated private cab ensures stress-free travel between temples according to auspicious darshan times.',
      bestMonths: 'October to March',
      idealDuration: '2 to 5 Days'
    },
    reviews: [
      {
        name: 'Venkatesh Iyer',
        city: 'Bangalore',
        rating: 5,
        comment: 'Arranged Rameswaram pilgrimage for my elderly parents. SAMAYAS driver took exceptional care of them at all temple stops.',
        packageUsed: 'Rameswaram Pilgrimage Special'
      }
    ],
    faq: [
      {
        question: 'Are temple tours suitable for senior citizens?',
        answer: 'Absolutely. Private cab tours allow senior citizens to travel comfortably without crowded bus schedules, dropping them right at temple entrance gates.'
      }
    ],
    seo: {
      title: 'Spiritual & Temple Tour Packages South India | SAMAYAS Taxi',
      description: 'Book South India temple pilgrimage packages to Rameswaram, Madurai, Tirupati, Thanjavur & Kanchipuram with private cab & experienced driver.',
      keywords: ['temple tour packages', 'rameswaram tour package', 'tirupati cab package', 'tamil nadu temple tour']
    }
  },
  {
    id: 'weekend-getaways',
    slug: 'weekend-getaways',
    title: 'Weekend Getaway Packages',
    subtitle: 'Quick 2-Day & 3-Day Escapes from Major Cities',
    description: 'Refresh your weekend with short, curated tour packages from Chennai, Bangalore, Madurai, Coimbatore, and Trichy to Pondicherry, Yelagiri, Yercaud, Mahabalipuram, and Mysore.',
    heroImage: '/images/cars/innova.webp',
    iconName: 'Clock',
    featuredDestinations: ['pondicherry', 'yelagiri', 'yercaud', 'mahabalipuram', 'mysore', 'courtallam'],
    popularPackages: ['chennai-to-pondicherry-tour-package', 'munnar-weekend', 'kodaikanal-2-days', 'ooty-2-days'],
    highlights: ['Quick 1-3 Day Itineraries', 'Doorstep Pickup & Drop', 'Stress-free Driving', 'Instant Online Booking', 'Budget & Luxury Cab Choices'],
    travelGuide: {
      title: 'Planning a South India Weekend Trip',
      content: 'Escape city hustle with short road trips within 4-6 hours driving distance. Ideal for young professionals, couples, and families seeking quick relaxation.',
      bestMonths: 'Year Round',
      idealDuration: '2 Days / 1 Night'
    },
    reviews: [
      {
        name: 'Priya Sharma',
        city: 'Chennai',
        rating: 5,
        comment: 'Pondicherry weekend road trip was smooth and relaxing. Car was immaculate and driver knew great French quarter cafes.',
        packageUsed: 'Pondicherry Weekend Escape'
      }
    ],
    faq: [
      {
        question: 'Can I customize my weekend getaway itinerary?',
        answer: 'Yes! All SAMAYAS tour cab packages are 100% customizable based on your preferred departure time, sightseeing spots, and hotel location.'
      }
    ],
    seo: {
      title: 'Weekend Getaway Tour Packages | SAMAYAS Road Trip Cabs',
      description: 'Book 2-day & 3-day weekend getaway packages from Chennai, Bangalore, Coimbatore, Madurai & Trichy with private taxi.',
      keywords: ['weekend getaway packages', 'chennai weekend trips', 'pondicherry cab package', 'yercaud weekend tour']
    }
  },
  {
    id: 'family-tour-packages',
    slug: 'family-tour-packages',
    title: 'Family Tour Packages',
    subtitle: 'Memorable Holiday Trips for All Generations',
    description: 'Enjoy hassle-free family holidays with spacious Innova, Crysta, and SUV cabs covering hill stations, beaches, heritage sites, and amusement spots across South India.',
    heroImage: '/images/cars/innova.webp',
    iconName: 'Users',
    featuredDestinations: ['ooty', 'kodaikanal', 'munnar', 'coorg', 'mysore', 'alleppey', 'kanyakumari'],
    popularPackages: ['coorg-family-tour', 'ooty-3-days', 'madurai-rameswaram-kanyakumari-tour', 'kerala-backwater-family-tour'],
    highlights: ['Spacious 7-Seater & Tempo Traveller Options', 'Family Friendly Pace', 'Safe & Verified Drivers', 'Custom Meal & Rest Stops'],
    travelGuide: {
      title: 'Family Holiday Travel Guide',
      content: 'Traveling with children and elders requires comfort, spacious luggage capacity, and flexible stopping points. SAMAYAS private cabs cater specifically to family needs.',
      bestMonths: 'April to June & October to January',
      idealDuration: '3 to 6 Days'
    },
    reviews: [
      {
        name: 'Rajesh Nair',
        city: 'Coimbatore',
        rating: 5,
        comment: 'Booked Innova Crysta for 6 family members to Munnar and Alleppey. Ample legroom, super clean car, excellent driver!',
        packageUsed: 'Kerala Family Holiday'
      }
    ],
    faq: [
      {
        question: 'What vehicles are available for large families?',
        answer: 'We provide Toyota Innova, Innova Crysta (6-7 seats), Ertiga (6 seats), and Tempo Travellers (12-14 seats) for family groups.'
      }
    ],
    seo: {
      title: 'South India Family Tour Packages with Private Taxi | SAMAYAS',
      description: 'Book family tour packages for Ooty, Munnar, Coorg, Mysore & Kanyakumari. Spacious Innova & Crysta cabs with safe experienced drivers.',
      keywords: ['family tour packages', 'south india family tour', 'innova tour cab', 'kerala family package']
    }
  },
  {
    id: 'honeymoon-packages',
    slug: 'honeymoon-packages',
    title: 'Honeymoon Tour Packages',
    subtitle: 'Romantic Escapes in Picturesque Hills & Backwaters',
    description: 'Celebrate love in romantic destinations like Munnar, Ooty, Kodaikanal, Coorg, Wayanad, and Alleppey backwaters with private luxury cab transfers and custom itineraries.',
    heroImage: '/images/cars/sedan.webp',
    iconName: 'Heart',
    featuredDestinations: ['munnar', 'ooty', 'kodaikanal', 'coorg', 'alleppey', 'wayanad', 'vagamon'],
    popularPackages: ['munnar-weekend', 'ooty-2-days', 'coorg-family-tour', 'kerala-backwater-family-tour'],
    highlights: ['Private Scenic Transfers', 'Chilled Climate & Tea Gardens', 'Houseboat Experience', 'Sunset Viewpoints', 'Luxury Sedan Choices'],
    travelGuide: {
      title: 'Honeymoon Trip Guide South India',
      content: 'From mist-covered tea slopes in Munnar to serene houseboats in Alleppey and pine forests in Kodaikanal, South India offers romantic retreats for couples.',
      bestMonths: 'September to March',
      idealDuration: '3 to 5 Days'
    },
    reviews: [
      {
        name: 'Karthik & Ananya',
        city: 'Bangalore',
        rating: 5,
        comment: 'Unforgettable honeymoon drive through Munnar tea gardens! Driver was very polite and suggested amazing quiet viewpoints.',
        packageUsed: 'Munnar Romantic Tour'
      }
    ],
    faq: [
      {
        question: 'Can we request scenic photo stops during the tour?',
        answer: 'Yes! Since it is a private cab tour, you can stop anytime at waterfalls, viewpoints, and cafes along the route.'
      }
    ],
    seo: {
      title: 'Romantic Honeymoon Tour Packages South India | SAMAYAS Cabs',
      description: 'Book romantic honeymoon tour packages for Munnar, Ooty, Kodaikanal & Coorg with private AC cabs and driver.',
      keywords: ['honeymoon tour packages', 'munnar honeymoon tour', 'ooty honeymoon cab', 'kerala romantic trip']
    }
  },
  {
    id: 'adventure-tours',
    slug: 'adventure-tours',
    title: 'Adventure & Nature Tours',
    subtitle: 'Trekking, Waterfalls, Wildlife & Wildlife Safaris',
    description: 'Satisfy your inner explorer with nature trails, forest safaris, waterfall dips, and mountain trekking in Wayanad, Thekkady, Vagamon, Athirapally, Hampi, and Chikmagalur.',
    heroImage: '/images/cars/suv.webp',
    iconName: 'Compass',
    featuredDestinations: ['wayanad', 'thekkady', 'vagamon', 'athirapally', 'chikmagalur', 'hampi'],
    popularPackages: ['coorg-family-tour', 'munnar-weekend'],
    highlights: ['Jungle Safaris', 'Trekking & Peak Views', 'Cascading Waterfalls', 'Offbeat Trails', 'Rugged SUV Options'],
    travelGuide: {
      title: 'South India Adventure Guide',
      content: 'The Western Ghats feature dense tiger reserves, roaring monsoon waterfalls, and peak treks. Travel comfortably to base camps with SAMAYAS cabs.',
      bestMonths: 'August to February',
      idealDuration: '2 to 4 Days'
    },
    reviews: [
      {
        name: 'Nitin Roy',
        city: 'Kochi',
        rating: 5,
        comment: 'Awesome trip to Athirapally and Vagamon. SUV handle rain-soaked forest roads effortlessly.',
        packageUsed: 'Kerala Nature Escapes'
      }
    ],
    faq: [
      {
        question: 'Are SUVs recommended for adventure hill tours?',
        answer: 'Yes, SUVs like Mahindra XUV700, Ertiga, or Toyota Innova offer higher ground clearance and better stability on forest and hill roads.'
      }
    ],
    seo: {
      title: 'Adventure & Wildlife Tour Packages South India | SAMAYAS',
      description: 'Explore trekking, jungle safaris & waterfall tours in Wayanad, Thekkady, Vagamon & Chikmagalur with private SUV cabs.',
      keywords: ['adventure tour packages', 'wayanad trip cab', 'thekkady safari package', 'chikmagalur trek cab']
    }
  },
  {
    id: 'beach-destinations',
    slug: 'beach-destinations',
    title: 'Beach & Coastal Tour Packages',
    subtitle: 'Sun, Sand, Surfing & Coastal Road Drives',
    description: 'Cruise along coastal highways to Pondicherry, Kanyakumari, Mahabalipuram, Gokarna, Alleppey, and Kovalam beaches with SAMAYAS comfortable private cabs.',
    heroImage: '/images/cars/sedan.webp',
    iconName: 'Sun',
    featuredDestinations: ['pondicherry', 'kanyakumari', 'mahabalipuram', 'gokarna', 'alleppey', 'kochi'],
    popularPackages: ['chennai-to-pondicherry-tour-package', 'madurai-rameswaram-kanyakumari-tour'],
    highlights: ['Coastal Highway Drives', 'Sunset & Sunrise Views', 'Seafood Gastronomy', 'Water Sports & Surfing'],
    travelGuide: {
      title: 'South India Coastal Drive Guide',
      content: 'East Coast Road (ECR) from Chennai to Pondicherry and West Coast drives offer stunning ocean vistas, heritage lighthouses, and beach shacks.',
      bestMonths: 'November to March',
      idealDuration: '2 to 3 Days'
    },
    reviews: [
      {
        name: 'Deepak Mohan',
        city: 'Madurai',
        rating: 5,
        comment: 'Kanyakumari sunrise drive was amazing. Driver reached early at Triveni Sangam so we did not miss the dawn view.',
        packageUsed: 'Kanyakumari Coastal Tour'
      }
    ],
    faq: [
      {
        question: 'Is East Coast Road (ECR) drive covered in Pondicherry packages?',
        answer: 'Yes! Chennai to Pondicherry cab packages include scenic ECR driving with stops at Mahabalipuram shore temple.'
      }
    ],
    seo: {
      title: 'Coastal & Beach Tour Packages South India | SAMAYAS Cabs',
      description: 'Book coastal beach tour packages to Pondicherry, Kanyakumari, Mahabalipuram & Gokarna with private AC cab.',
      keywords: ['beach tour packages', 'pondicherry beach trip', 'kanyakumari cab tour', 'ecr road trip']
    }
  },
  {
    id: 'heritage-tours',
    slug: 'heritage-tours',
    title: 'Heritage & Architectural Tours',
    subtitle: 'Ancient Empires, Palaces, Forts & UNESCO Monuments',
    description: 'Immerse yourself in centuries of history across Hampi, Mysore Palace, Thanjavur Big Temple, Mahabalipuram reliefs, Madurai Nayakar Palace, and Hyderabad monuments.',
    heroImage: '/images/cars/suv.webp',
    iconName: 'Landmark',
    featuredDestinations: ['hampi', 'mysore', 'thanjavur', 'mahabalipuram', 'madurai', 'hyderabad', 'lepakshi', 'warangal'],
    popularPackages: ['madurai-rameswaram-kanyakumari-tour', 'trichy-to-rameswaram-tour-package'],
    highlights: ['UNESCO World Heritage Sites', 'Royal Palaces & Forts', 'Expert Local Insight', 'Comfortable Intercity Drives'],
    travelGuide: {
      title: 'South India Heritage Trail',
      content: 'Discover the Chola, Pallava, Vijayanagara, and Wodeyar dynasties through majestic stone carvings, grand fortresses, and opulent royal residences.',
      bestMonths: 'October to March',
      idealDuration: '3 to 5 Days'
    },
    reviews: [
      {
        name: 'Clara Bennett',
        city: 'London (NRI Visitor)',
        rating: 5,
        comment: 'Fascinating heritage tour of Hampi and Mysore. Our SAMAYAS driver knew all historical spots and recommended great local thali places.',
        packageUsed: 'Karnataka Heritage Special'
      }
    ],
    faq: [
      {
        question: 'Are guides available at heritage monuments?',
        answer: 'Local certified guides are available at monument entrances. Your cab driver will drop you at official guide stations.'
      }
    ],
    seo: {
      title: 'Heritage & Historical Tour Packages South India | SAMAYAS',
      description: 'Explore UNESCO heritage sites in Hampi, Mysore, Thanjavur, Mahabalipuram & Madurai with private cab.',
      keywords: ['heritage tour packages', 'hampi tour cab', 'mysore palace tour', 'thanjavur big temple cab']
    }
  }
]
