# FestivalBanner Component Guide

## Overview

The FestivalBanner component automatically displays a greeting banner with a background image based on the current date. It supports both fixed-date festivals (same date every year) and variable-date festivals (lunar/calculated dates).

## Files Created

1. **`src/data/festivals.js`** - Festival data file containing all festival information
2. **`src/components/FestivalBanner.jsx`** - Main React component
3. **`FESTIVAL_BANNER_GUIDE.md`** - This documentation file

## Usage

### Basic Usage

```jsx
import FestivalBanner from './components/FestivalBanner'

function App() {
  return (
    <div>
      <FestivalBanner />
      {/* Rest of your app */}
    </div>
  )
}
```

### Preview Mode (Testing)

To test different festivals without changing your system clock:

```jsx
// Test Diwali (October 20, 2026)
<FestivalBanner previewDate={new Date('2026-10-20')} />

// Test Christmas
<FestivalBanner previewDate={new Date('2026-12-25')} />

// Test New Year
<FestivalBanner previewDate={new Date('2026-01-01')} />
```

### Integration Example

Add to your `App.jsx`:

```jsx
import React from 'react'
import FestivalBanner from './components/FestivalBanner'
import Navbar from './components/Navbar'
// ... other imports

function App() {
  return (
    <div className="relative">
      <FestivalBanner />
      <Navbar />
      {/* Rest of your components */}
    </div>
  )
}
```

## How to Add New Festivals

### Step 1: Open `src/data/festivals.js`

### Step 2: Add a new festival object to the `festivals` array

```javascript
{
  id: 'unique-festival-id',           // Unique identifier (lowercase, hyphens)
  name: 'Festival Name',               // Display name
  greeting: 'Happy Festival! 🎉',     // Greeting message with emoji
  imageKeyword: 'festival-keyword',    // Unsplash search keyword
  startDate: '2026-MM-DD',            // Start date (YYYY-MM-DD format)
  endDate: '2026-MM-DD',              // End date (YYYY-MM-DD format)
  isFixed: true,                      // true for fixed dates, false for variable
}
```

### Step 3: Example - Adding a New Festival

```javascript
// Example: Adding Pongal (already included, but here's the structure)
{
  id: 'pongal',
  name: 'Pongal',
  greeting: 'Happy Pongal! 🌾 Wishing you prosperity!',
  imageKeyword: 'pongal-festival-rice',
  startDate: '2026-01-14',
  endDate: '2026-01-17',  // 4-day festival
  isFixed: false,         // Variable date (lunar calendar)
}
```

### Step 4: For Multi-Day Festivals

Set different `startDate` and `endDate`:

```javascript
{
  id: 'diwali',
  name: 'Diwali',
  greeting: 'Happy Diwali! 🪔',
  imageKeyword: 'diwali-lights-lamps',
  startDate: '2026-10-20',  // First day
  endDate: '2026-10-24',     // Last day (5-day festival)
  isFixed: false,
}
```

### Step 5: For Fixed-Date Festivals

Set `isFixed: true` for festivals that occur on the same date every year:

```javascript
{
  id: 'christmas',
  name: 'Christmas',
  greeting: 'Merry Christmas! 🎄',
  imageKeyword: 'christmas-tree-lights',
  startDate: '2026-12-25',
  endDate: '2026-12-25',
  isFixed: true,  // Same date every year
}
```

## Image Keywords

The `imageKeyword` is used to fetch relevant images from Unsplash. Choose descriptive keywords:

- ✅ Good: `'diwali-lights-lamps'`, `'christmas-tree-lights'`, `'holi-festival-colors'`
- ❌ Bad: `'festival'`, `'celebration'`, `'party'` (too generic)

## Updating for Future Years

### For Fixed-Date Festivals

No changes needed! They automatically work for any year since they use the same date.

### For Variable-Date Festivals

Update the dates in `festivals.js` for the new year:

1. **Lunar Calendar Festivals** (Diwali, Eid, Holi, etc.):
   - Look up the dates for the new year
   - Update `startDate` and `endDate` accordingly

2. **Calculated Festivals** (Easter):
   - Easter is calculated based on the first Sunday after the first full moon after the spring equinox
   - Look up the date for the new year and update

### Example: Updating for 2027

```javascript
// Diwali 2027: November 7
{
  id: 'diwali',
  name: 'Diwali',
  greeting: 'Happy Diwali! 🪔',
  imageKeyword: 'diwali-lights-lamps',
  startDate: '2027-11-07',  // Updated for 2027
  endDate: '2027-11-11',     // Updated for 2027
  isFixed: false,
}
```

## Features

### ✅ Automatic Date Detection
- Checks system date on component mount
- Shows banner if a festival is active

### ✅ Festival Seasons Support
- Multi-day festivals are supported
- Banner shows for all days in the date range

### ✅ Preview Mode
- Pass `previewDate` prop to test different festivals
- Useful for development and testing

### ✅ localStorage Dismissal
- Close button dismisses banner for the rest of the day
- Resets automatically the next day

### ✅ Responsive Design
- Works on mobile, tablet, and desktop
- Uses Tailwind CSS for styling

### ✅ Smooth Animations
- Framer Motion animations for entrance/exit
- Staggered animations for content elements

## Customization

### Changing Banner Height

Edit the height classes in `FestivalBanner.jsx`:

```jsx
className="... h-[400px] md:h-[500px] lg:h-[600px] ..."
```

### Changing Overlay Opacity

Modify the overlay gradient:

```jsx
className="... bg-gradient-to-r from-black/70 via-black/60 to-black/70 ..."
```

### Changing Image Source

Replace Unsplash with your own images:

```jsx
// Instead of:
const imageUrl = `https://source.unsplash.com/featured/1920x600/?${festival.imageKeyword}`

// Use:
const imageUrl = `/images/festivals/${festival.id}.jpg`
```

## Helper Functions

The `festivals.js` file exports several helper functions:

```javascript
import { 
  getActiveFestival, 
  getFestivalsByYear, 
  getFixedFestivals, 
  getVariableFestivals 
} from './data/festivals'

// Get active festival for today
const todayFestival = getActiveFestival()

// Get active festival for a specific date
const diwaliFestival = getActiveFestival(new Date('2026-10-20'))

// Get all festivals for 2026
const all2026Festivals = getFestivalsByYear(2026)

// Get only fixed-date festivals
const fixedFestivals = getFixedFestivals()

// Get only variable-date festivals
const variableFestivals = getVariableFestivals()
```

## Troubleshooting

### Banner Not Showing

1. **Check if festival date matches current date**
   - Use preview mode to test: `<FestivalBanner previewDate={new Date('2026-12-25')} />`

2. **Check if banner was dismissed today**
   - Clear localStorage: `localStorage.removeItem('festivalBannerDismissed')`
   - Or wait until tomorrow

3. **Check browser console for errors**

### Images Not Loading

1. **Check internet connection** (Unsplash requires internet)
2. **Verify imageKeyword** is valid
3. **Check Unsplash API status**

### Date Format Issues

- Always use `YYYY-MM-DD` format (e.g., `'2026-12-25'`)
- Use ISO date strings for consistency

## Best Practices

1. **Keep festival data updated** - Update variable-date festivals annually
2. **Use descriptive image keywords** - Better image results from Unsplash
3. **Test with preview mode** - Verify festivals before deployment
4. **Keep greetings concise** - Banner is a hero section, not a full page
5. **Use appropriate emojis** - Adds visual interest to greetings

## Support

For issues or questions:
- Check the component code comments
- Review the festival data structure
- Test with preview mode to isolate issues

---

**Happy Coding! 🎉**
