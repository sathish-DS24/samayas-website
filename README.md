# SAMAYAS - Transportation Services Website

A modern, fully responsive single-page business website for SAMAYAS, a transportation services company offering Acting Driver, Tours & Travels, One-Way Taxi, and Recovery Services.

![SAMAYAS](https://img.shields.io/badge/React-18.2-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-ff0055)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 🎨 **Modern & Clean Design** - Professional UI with deep blue, white, and gold color scheme
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Smooth Animations** - Beautiful scroll animations and hover effects using Framer Motion
- 🧭 **Smooth Scrolling** - Seamless navigation between sections using react-scroll
- 📝 **Booking Form** - Functional form with validation and success animations
- 🎯 **SEO Optimized** - Semantic HTML and meta tags for better search visibility
- ♿ **Accessible** - Built with accessibility best practices
- 🚀 **Fast Performance** - Optimized build with Vite

## 🛠️ Tech Stack

- **React.js 18.2** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion 10.16** - Animation library
- **react-scroll** - Smooth scrolling functionality
- **lucide-react** - Beautiful icon library

## 📦 Installation

### Prerequisites

- Node.js 16+ and npm/yarn installed
- Git (optional)

### Setup Instructions

1. **Navigate to the project directory:**
```bash
cd "F:\IT SERVICES\SAMAYAS"
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
   - The application will automatically open at `http://localhost:3000`
   - If not, manually navigate to the URL shown in the terminal

## 🚀 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
SAMAYAS/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx        # Navigation bar with smooth scroll
│   │   ├── Hero.jsx          # Hero section with animations
│   │   ├── About.jsx         # About section
│   │   ├── Services.jsx      # Services cards with hover effects
│   │   ├── Contact.jsx       # Contact information
│   │   ├── BookingForm.jsx   # Booking form with validation
│   │   └── Footer.jsx        # Footer with links
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles and Tailwind imports
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── README.md           # This file
```

## 🎨 Color Palette

- **Primary Blue**: `#1e40af` - Trust and professionalism
- **Deep Blue**: `#1e3a8a` - Depth and reliability
- **Gold/Accent**: `#fbbf24` - Premium and action
- **White**: `#ffffff` - Clean and modern
- **Gray Tones**: For text and subtle UI elements

## 📄 Sections Overview

### 1. Navbar
- Sticky navigation with blur effect on scroll
- Smooth scrolling to sections
- Mobile-responsive hamburger menu
- "Book Now" CTA button

### 2. Hero Section
- Eye-catching animated background
- Compelling headline and subheadline
- Primary CTA buttons
- Statistics display
- Scroll indicator

### 3. About Section
- Company introduction
- Feature highlights with icons
- Visual imagery with decorative elements
- Experience badge

### 4. Services Section
- 4 animated service cards:
  - Acting Driver
  - Tours & Travels
  - One-Way Taxi
  - Recovery Services
- Hover effects and animations
- Color-coded by service type

### 5. Contact Section
- Phone, WhatsApp, Email, Location
- Working hours display
- Social media links
- Map placeholder (ready for Google Maps integration)

### 6. Booking Form
- Service type dropdown
- Date and time pickers
- Location inputs
- Name and phone validation
- Success animation on submit
- Form data logged to console

### 7. Footer
- Company info and social links
- Quick navigation links
- Contact information
- Back to top button
- Copyright and legal links

## 🎯 Customization Guide

### Changing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom blue shades
  },
  accent: {
    // Your custom accent color
  }
}
```

### Updating Content

- **Company Info**: Edit text in respective component files
- **Services**: Modify the `services` array in `Services.jsx`
- **Contact Details**: Update in `Contact.jsx` and `Footer.jsx`

### Adding Google Maps

Replace the map placeholder in `Contact.jsx` with:

```javascript
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
/>
```

### Backend Integration

To connect the booking form to a backend:

1. Install axios: `npm install axios`
2. In `BookingForm.jsx`, replace the console.log with:

```javascript
import axios from 'axios'

const handleSubmit = async (e) => {
  e.preventDefault()
  if (validateForm()) {
    try {
      await axios.post('YOUR_API_ENDPOINT', formData)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Booking error:', error)
    }
  }
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Push your code to GitHub
2. Import project on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual Deployment

```bash
npm run build
# Upload the 'dist' folder to your hosting service
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support or inquiries:
- 📧 Email: info@samayas.com
- 📱 Phone: +91 98765 43210
- 💬 WhatsApp: +91 98765 43210

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)

---

**Made with ❤️ for SAMAYAS - Reliable Rides, Anytime, Anywhere.**

