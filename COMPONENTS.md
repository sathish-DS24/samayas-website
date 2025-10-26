# 🧩 Component Documentation

Complete reference for all React components in the SAMAYAS website.

---

## 📐 Component Architecture

```
App.jsx (Root)
│
├─ Navbar.jsx          (Fixed navigation)
├─ Hero.jsx            (Landing section)
├─ About.jsx           (Company info)
├─ Services.jsx        (Service cards)
├─ Contact.jsx         (Contact details)
├─ BookingForm.jsx     (Booking functionality)
└─ Footer.jsx          (Footer + Back to Top)
```

---

## 1. Navbar.jsx

**Purpose:** Fixed navigation bar with smooth scrolling

### Features
- ✅ Sticky positioning with blur effect on scroll
- ✅ Smooth scroll to sections using react-scroll
- ✅ Mobile-responsive hamburger menu
- ✅ Logo with hover animation
- ✅ "Book Now" CTA button

### Props
None (self-contained)

### State
```javascript
- isScrolled: boolean      // Tracks scroll position
- isMobileMenuOpen: boolean // Mobile menu state
```

### Customization
```javascript
// Change navigation links
const navLinks = [
  { name: 'Home', to: 'home' },
  // Add more links...
]
```

---

## 2. Hero.jsx

**Purpose:** Eye-catching landing section with animations

### Features
- ✅ Animated gradient background
- ✅ Floating car animations
- ✅ Call-to-action buttons
- ✅ Statistics display
- ✅ Scroll indicator
- ✅ Responsive typography

### Animation Timings
- Text fade-in: 0.8s
- Badge: 0.5s delay
- Buttons: 0.7s delay
- Stats: 0.9s delay

### Customization
```javascript
// Update headline
<h1>Your Custom Headline</h1>

// Modify stats
const stats = [
  { number: '1000+', label: 'Happy Customers' },
  // Add more...
]
```

---

## 3. About.jsx

**Purpose:** Company introduction with visual elements

### Features
- ✅ Two-column layout (image left, text right)
- ✅ Animated decorative elements
- ✅ Feature grid with icons
- ✅ Experience badge overlay
- ✅ Scroll-triggered animations

### Feature Cards
```javascript
const features = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: '...'
  }
]
```

### Layout Breakpoints
- Mobile: Single column
- Desktop (lg): Two columns

---

## 4. Services.jsx

**Purpose:** Display service offerings with interactive cards

### Features
- ✅ Grid layout (4 cards)
- ✅ Hover animations with gradient overlay
- ✅ Color-coded by service type
- ✅ Staggered entrance animations
- ✅ "Popular" badge on first card

### Service Structure
```javascript
{
  icon: Steering,              // Lucide icon component
  title: 'Acting Driver',      // Service name
  description: '...',          // Service description
  color: 'from-blue-500...',   // Gradient colors
  bgColor: 'bg-blue-50',       // Icon background
  iconColor: 'text-blue-600',  // Icon color
  hoverGradient: '...'         // Hover gradient
}
```

### Adding New Services
1. Import icon from lucide-react
2. Add to services array
3. Choose color scheme
4. Update grid if needed (lg:grid-cols-X)

---

## 5. Contact.jsx

**Purpose:** Display contact information and working hours

### Features
- ✅ Clickable contact cards (phone, WhatsApp, email, location)
- ✅ Working hours display
- ✅ Social media links
- ✅ Map placeholder (ready for Google Maps)
- ✅ Animated location markers

### Contact Card Structure
```javascript
{
  icon: Phone,
  title: 'Phone',
  value: '+91 98765 43210',
  link: 'tel:+919876543210',
  color: 'from-blue-500 to-blue-600'
}
```

### Adding Google Maps
Replace the placeholder div with:
```jsx
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="400"
  className="w-full h-96"
  loading="lazy"
/>
```

---

## 6. BookingForm.jsx

**Purpose:** Functional booking form with validation

### Features
- ✅ Form validation (all fields required)
- ✅ Phone number validation (10 digits)
- ✅ Date picker (prevents past dates)
- ✅ Time picker
- ✅ Success animation on submit
- ✅ Error messages
- ✅ Auto-reset after 3 seconds

### Form Fields
```javascript
formData = {
  serviceType: string,      // Dropdown
  name: string,            // Text input
  phone: string,           // Tel input (validated)
  date: string,            // Date picker
  time: string,            // Time picker
  pickupLocation: string,  // Text input
  dropLocation: string     // Text input (optional for Recovery)
}
```

### Validation Rules
- All fields required (except dropLocation for Recovery Services)
- Phone: Must be 10 digits
- Date: Cannot be in the past

### Backend Integration
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  if (validateForm()) {
    // Replace console.log with API call
    await axios.post('/api/bookings', formData)
  }
}
```

---

## 7. Footer.jsx

**Purpose:** Site footer with links and information

### Features
- ✅ Four-column layout
- ✅ Company info with logo
- ✅ Quick navigation links
- ✅ Services list
- ✅ Contact information
- ✅ Social media icons
- ✅ Animated wave decoration
- ✅ Back to top button (fixed position)

### Sections
1. **Company Info** - Logo, description, social links
2. **Quick Links** - Navigation with react-scroll
3. **Services** - List of all services
4. **Contact** - Phone, email, location

### Back to Top Button
```javascript
// Fixed position at bottom-right
// Animated entrance (1s delay)
// Smooth scroll to top on click
```

---

## 🎨 Shared Styling Patterns

### Animation Patterns

**Fade In + Slide Up**
```javascript
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

**Stagger Children**
```javascript
variants={containerVariants}
// Parent animates children in sequence
```

**Hover Scale**
```javascript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Color Schemes

**Primary (Blue)**
- `primary-600`: Main actions
- `primary-700`: Hover states
- `primary-900`: Dark text

**Accent (Gold)**
- `accent-500`: CTAs
- `accent-600`: Hover states

### Spacing
- Section padding: `py-20` (80px)
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Element spacing: `space-y-4`, `space-x-4`, `gap-8`

---

## 🔄 Component Lifecycle

### On Page Load
1. Navbar renders (fixed position)
2. Hero section appears with animations
3. Scroll observer initializes for other sections
4. Animations trigger as user scrolls

### On Scroll
1. Navbar background changes (blur effect)
2. Active nav link updates
3. Section animations trigger (useInView)
4. Back to top button appears

### On Interaction
1. Mobile menu toggles
2. Form inputs validate on change
3. Hover effects activate
4. Smooth scroll to section
5. Form submits with validation

---

## 🛠️ Utility Functions

### Scroll to Top
```javascript
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
```

### Form Validation
```javascript
const validateForm = () => {
  // Check all required fields
  // Validate phone format
  // Return boolean
}
```

---

## 📱 Responsive Breakpoints

```javascript
// Tailwind breakpoints used:
sm: '640px'   // Small devices
md: '768px'   // Tablets
lg: '1024px'  // Desktops
xl: '1280px'  // Large desktops
```

### Mobile-First Approach
- Base styles for mobile
- `md:` prefix for tablets+
- `lg:` prefix for desktops+

---

## ♿ Accessibility Features

- ✅ Semantic HTML (nav, section, footer)
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus states on interactive elements
- ✅ Alt text ready (add to images)
- ✅ Color contrast compliance

---

## 🧪 Testing Components

### Manual Testing Checklist

**Navbar**
- [ ] Logo click scrolls to top
- [ ] All nav links scroll to correct sections
- [ ] Mobile menu opens/closes
- [ ] Blur effect appears on scroll

**Hero**
- [ ] Animations play on load
- [ ] CTAs scroll to correct sections
- [ ] Stats display correctly

**Services**
- [ ] Cards animate on scroll
- [ ] Hover effects work
- [ ] Grid layout responsive

**BookingForm**
- [ ] Validation messages appear
- [ ] Success animation shows
- [ ] Form resets after submit

**Footer**
- [ ] All links work
- [ ] Social icons clickable
- [ ] Back to top scrolls up

---

## 🎯 Performance Tips

1. **Lazy Load Images** - Use `loading="lazy"`
2. **Optimize Animations** - Use `transform` and `opacity`
3. **Code Split** - Dynamic imports for large components
4. **Memoize Components** - React.memo for heavy components

---

## 📚 Dependencies Used

| Package | Purpose | Component Usage |
|---------|---------|----------------|
| framer-motion | Animations | All components |
| react-scroll | Smooth scrolling | Navbar, Footer |
| lucide-react | Icons | All components |
| tailwindcss | Styling | All components |

---

**For More Help:** See README.md and QUICK_START.md

Made with ❤️ for SAMAYAS

