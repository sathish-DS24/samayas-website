# FestivalBanner Integration Example

## Quick Integration

### Option 1: Add to App.jsx (Recommended)

```jsx
import React from 'react'
import FestivalBanner from './components/FestivalBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// ... other imports

function App() {
  return (
    <div className="relative">
      <FestivalBanner />
      <Navbar />
      <main>
        <Hero />
        {/* Rest of your components */}
      </main>
    </div>
  )
}

export default App
```

### Option 2: Add to a Specific Page/Route

```jsx
import FestivalBanner from './components/FestivalBanner'

function HomePage() {
  return (
    <>
      <FestivalBanner />
      <Hero />
      {/* Other sections */}
    </>
  )
}
```

## Testing Different Festivals

### Test Mode Examples

```jsx
// Test Diwali (October 20, 2026)
<FestivalBanner previewDate={new Date('2026-10-20')} />

// Test Christmas (December 25, 2026)
<FestivalBanner previewDate={new Date('2026-12-25')} />

// Test New Year (January 1, 2026)
<FestivalBanner previewDate={new Date('2026-01-01')} />

// Test Holi (March 14, 2026)
<FestivalBanner previewDate={new Date('2026-03-14')} />
```

## Conditional Rendering

If you want to show the banner only on certain pages:

```jsx
import { useLocation } from 'react-router-dom'
import FestivalBanner from './components/FestivalBanner'

function App() {
  const location = useLocation()
  const showBanner = location.pathname === '/' // Only on homepage
  
  return (
    <div>
      {showBanner && <FestivalBanner />}
      {/* Rest of app */}
    </div>
  )
}
```

## Custom Styling

Add custom classes if needed:

```jsx
<FestivalBanner className="mb-4" />
```

## Clear Dismissal (For Testing)

To reset the dismissal and see the banner again:

```javascript
// In browser console:
localStorage.removeItem('festivalBannerDismissed')
// Then refresh the page
```

## Notes

- The banner automatically shows/hides based on active festivals
- Once dismissed, it won't show again until the next day
- Preview mode bypasses the dismissal check
- Images are loaded from Unsplash (requires internet connection)
