# 🚀 Quick Start Guide - SAMAYAS Website

## Getting Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

### 3️⃣ Open Your Browser
Navigate to `http://localhost:3000` (opens automatically)

---

## 📝 Customization Checklist

### Essential Updates

- [ ] **Contact Information** (Update in multiple places)
  - [ ] `src/components/Contact.jsx` - Phone, email, location
  - [ ] `src/components/Footer.jsx` - Footer contact details
  - [ ] `src/components/Navbar.jsx` - If needed

- [ ] **Company Details**
  - [ ] `index.html` - Update meta description
  - [ ] `README.md` - Update contact info

- [ ] **Social Media Links**
  - [ ] `src/components/Contact.jsx` - Working hours section
  - [ ] `src/components/Footer.jsx` - Social media icons

### Optional Enhancements

- [ ] **Add Google Maps**
  - Open `src/components/Contact.jsx`
  - Replace the map placeholder with your Google Maps embed code

- [ ] **Connect to Backend**
  - Install axios: `npm install axios`
  - Update `src/components/BookingForm.jsx` to POST data to your API

- [ ] **Add More Services**
  - Edit the `services` array in `src/components/Services.jsx`

- [ ] **Change Colors**
  - Edit `tailwind.config.js` to customize the color palette

---

## 🎨 Component Overview

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `Navbar.jsx` | Navigation | Sticky, smooth scroll, mobile menu |
| `Hero.jsx` | Landing section | Animated background, CTAs, stats |
| `About.jsx` | Company info | Feature cards, animations |
| `Services.jsx` | Service cards | 4 services with hover effects |
| `Contact.jsx` | Contact details | Info cards, working hours, map |
| `BookingForm.jsx` | Booking form | Validation, success animation |
| `Footer.jsx` | Footer | Links, social media, back to top |

---

## 🔧 Common Tasks

### Change Primary Color
```javascript
// tailwind.config.js
primary: {
  600: '#YOUR_COLOR', // Main primary color
  700: '#DARKER_SHADE',
}
```

### Update Phone Number
Search for `+91 98765 43210` across all files and replace with your number.

### Modify Services
```javascript
// src/components/Services.jsx
const services = [
  {
    icon: YourIcon,
    title: 'Your Service',
    description: 'Service description',
    // ... colors
  }
]
```

### Change Font
```javascript
// tailwind.config.js
fontFamily: {
  sans: ['YourFont', 'fallback', 'sans-serif'],
}
```

Don't forget to update the Google Fonts link in `index.html`

---

## 🌐 Production Build

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy
Upload the `dist` folder to your hosting service or use:
- **Vercel**: Connect GitHub repo for auto-deploy
- **Netlify**: Drag & drop the `dist` folder
- **cPanel**: Upload `dist` contents to `public_html`

---

## 📱 Testing Checklist

Before going live, test:

- [ ] All navigation links work
- [ ] Smooth scrolling is functional
- [ ] Mobile menu opens/closes properly
- [ ] Booking form validates correctly
- [ ] Success animation appears on form submit
- [ ] All hover effects work
- [ ] Responsive on mobile, tablet, desktop
- [ ] Contact links (phone, email, WhatsApp) work
- [ ] Social media links are correct
- [ ] Back to top button works

---

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Kill the process on port 3000
# Windows PowerShell:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change port in vite.config.js
server: {
  port: 3001,
}
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Updating
```bash
# Restart dev server
# Press Ctrl+C to stop
npm run dev
```

---

## 💡 Pro Tips

1. **Keep Components Small** - Each component does one thing well
2. **Use Semantic HTML** - Better for SEO and accessibility
3. **Test on Real Devices** - Don't just use browser dev tools
4. **Optimize Images** - Compress before adding to the site
5. **Add Analytics** - Track user behavior (Google Analytics, etc.)

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

---

**Need Help?** Check the main README.md or contact the developer.

Happy Building! 🎉

