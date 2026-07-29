/**
 * Festival Data for 2026
 * 
 * This file contains festival information including:
 * - Fixed-date festivals (same date every year)
 * - Variable-date festivals (lunar/calculated dates for 2026)
 * - Multi-day festival seasons
 */

export const festivals = [
  // ========== FIXED DATE FESTIVALS ==========
  
  // New Year's Day
  {
    id: 'new-year',
    name: 'New Year',
    greeting: 'Happy New Year! 🎉 Welcome to 2026!',
    imageKeyword: 'new-year-fireworks',
    startDate: '2026-01-01',
    endDate: '2026-01-01',
    isFixed: true, // Same date every year
  },

  // Republic Day (India)
  {
    id: 'republic-day',
    name: 'Republic Day',
    greeting: 'Happy Republic Day! 🇮🇳 Jai Hind!',
    imageKeyword: 'indian-flag-tricolor',
    startDate: '2026-01-26',
    endDate: '2026-01-26',
    isFixed: true,
  },

  // Valentine's Day
  {
    id: 'valentines-day',
    name: "Valentine's Day",
    greeting: 'Happy Valentine\'s Day! 💕 Spread love and joy!',
    imageKeyword: 'valentines-day-hearts',
    startDate: '2026-02-14',
    endDate: '2026-02-14',
    isFixed: true,
  },

  // Holi (2026: March 14)
  {
    id: 'holi',
    name: 'Holi',
    greeting: 'Happy Holi! 🎨 May your life be filled with colors!',
    imageKeyword: 'holi-festival-colors',
    startDate: '2026-03-14',
    endDate: '2026-03-15', // 2-day festival
    isFixed: false, // Variable date (lunar calendar)
  },

  // Easter (2026: April 5)
  {
    id: 'easter',
    name: 'Easter',
    greeting: 'Happy Easter! 🐰 Wishing you joy and renewal!',
    imageKeyword: 'easter-eggs-basket',
    startDate: '2026-04-05',
    endDate: '2026-04-05',
    isFixed: false, // Variable date (calculated)
  },

  // Eid al-Fitr (2026: March 20, approximate)
  {
    id: 'eid-al-fitr',
    name: 'Eid al-Fitr',
    greeting: 'Eid Mubarak! 🌙 May this Eid bring peace and happiness!',
    imageKeyword: 'eid-celebration-mosque',
    startDate: '2026-03-20',
    endDate: '2026-03-22', // 3-day celebration
    isFixed: false, // Variable date (lunar calendar)
  },

  // Eid al-Adha (2026: June 6, approximate)
  {
    id: 'eid-al-adha',
    name: 'Eid al-Adha',
    greeting: 'Eid Mubarak! 🕌 Wishing you blessings and prosperity!',
    imageKeyword: 'eid-al-adha-celebration',
    startDate: '2026-06-06',
    endDate: '2026-06-08', // 3-day celebration
    isFixed: false, // Variable date (lunar calendar)
  },

  // Independence Day (India)
  {
    id: 'independence-day',
    name: 'Independence Day',
    greeting: 'Happy Independence Day! 🇮🇳 Freedom is precious!',
    imageKeyword: 'indian-independence-day',
    startDate: '2026-08-15',
    endDate: '2026-08-15',
    isFixed: true,
  },

  // Diwali (2026: October 20)
  {
    id: 'diwali',
    name: 'Diwali',
    greeting: 'Happy Diwali! 🪔 May the festival of lights illuminate your life!',
    imageKeyword: 'diwali-lights-lamps',
    startDate: '2026-10-20',
    endDate: '2026-10-24', // 5-day festival
    isFixed: false, // Variable date (lunar calendar)
  },

  // Dussehra (2026: October 10)
  {
    id: 'dussehra',
    name: 'Dussehra',
    greeting: 'Happy Dussehra! 🏹 Victory of good over evil!',
    imageKeyword: 'dussehra-ravana-effigy',
    startDate: '2026-10-10',
    endDate: '2026-10-10',
    isFixed: false, // Variable date (lunar calendar)
  },

  // Christmas
  {
    id: 'christmas',
    name: 'Christmas',
    greeting: 'Merry Christmas! 🎄 Wishing you joy and peace!',
    imageKeyword: 'christmas-tree-lights',
    startDate: '2026-12-25',
    endDate: '2026-12-25',
    isFixed: true,
  },

  // New Year's Eve
  {
    id: 'new-year-eve',
    name: "New Year's Eve",
    greeting: 'Happy New Year\'s Eve! 🎊 Cheers to a new beginning!',
    imageKeyword: 'new-year-eve-celebration',
    startDate: '2026-12-31',
    endDate: '2026-12-31',
    isFixed: true,
  },

  // ========== ADDITIONAL FESTIVALS ==========
  
  // Pongal (2026: January 14-17)
  {
    id: 'pongal',
    name: 'Pongal',
    greeting: 'Happy Pongal! 🌾 Wishing you prosperity and abundance!',
    imageKeyword: 'pongal-festival-rice',
    startDate: '2026-01-14',
    endDate: '2026-01-17', // 4-day festival
    isFixed: false,
  },

  // Onam (2026: September 5-13)
  {
    id: 'onam',
    name: 'Onam',
    greeting: 'Happy Onam! 🌺 May this harvest festival bring you joy!',
    imageKeyword: 'onam-pookalam-flower',
    startDate: '2026-09-05',
    endDate: '2026-09-13', // 9-day festival
    isFixed: false,
  },

  // Ganesh Chaturthi (2026: September 5)
  {
    id: 'ganesh-chaturthi',
    name: 'Ganesh Chaturthi',
    greeting: 'Happy Ganesh Chaturthi! 🐘 May Lord Ganesha bless you!',
    imageKeyword: 'ganesh-chaturthi-idol',
    startDate: '2026-09-05',
    endDate: '2026-09-10', // 6-day festival
    isFixed: false,
  },

  // Durga Puja (2026: October 1-5)
  {
    id: 'durga-puja',
    name: 'Durga Puja',
    greeting: 'Happy Durga Puja! 🙏 May Goddess Durga bless you!',
    imageKeyword: 'durga-puja-pandal',
    startDate: '2026-10-01',
    endDate: '2026-10-05', // 5-day festival
    isFixed: false,
  },

  // Raksha Bandhan (2026: August 3)
  {
    id: 'raksha-bandhan',
    name: 'Raksha Bandhan',
    greeting: 'Happy Raksha Bandhan! 🎀 Celebrating the bond of siblings!',
    imageKeyword: 'raksha-bandhan-rakhi',
    startDate: '2026-08-03',
    endDate: '2026-08-03',
    isFixed: false,
  },

  // Janmashtami (2026: August 14)
  {
    id: 'janmashtami',
    name: 'Janmashtami',
    greeting: 'Happy Janmashtami! 🕉️ May Lord Krishna bless you!',
    imageKeyword: 'janmashtami-krishna',
    startDate: '2026-08-14',
    endDate: '2026-08-14',
    isFixed: false,
  },
]

/**
 * Get the active festival for a given date
 * @param {Date} date - The date to check (defaults to today)
 * @returns {Object|null} - The active festival or null
 */
export const getActiveFestival = (date = new Date()) => {
  const dateString = date.toISOString().split('T')[0] // Format: YYYY-MM-DD
  
  return festivals.find(festival => {
    return dateString >= festival.startDate && dateString <= festival.endDate
  })
}

/**
 * Get all festivals for a specific year
 * @param {number} year - The year (defaults to 2026)
 * @returns {Array} - Array of festivals for that year
 */
export const getFestivalsByYear = (year = 2026) => {
  return festivals.filter(festival => {
    const festivalYear = parseInt(festival.startDate.split('-')[0])
    return festivalYear === year
  })
}

/**
 * Get fixed-date festivals (same date every year)
 * @returns {Array} - Array of fixed-date festivals
 */
export const getFixedFestivals = () => {
  return festivals.filter(festival => festival.isFixed === true)
}

/**
 * Get variable-date festivals (lunar/calculated dates)
 * @returns {Array} - Array of variable-date festivals
 */
export const getVariableFestivals = () => {
  return festivals.filter(festival => festival.isFixed === false)
}
