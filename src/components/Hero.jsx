import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Clock, Grid, ChevronDown } from 'lucide-react'
import TariffModal from './TariffModal'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const stats = [
    { icon: Users, number: '1000+', label: 'Happy Customers' },
    { icon: Clock, number: '24/7', label: 'Available Support' },
    { icon: Grid, number: '4+', label: 'Services Offered' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: '115vh', width: '100vw' }}
    >
      {/* Background Visual: Responsive Picture (40KB WebP on mobile, high-res on desktop) */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <div className="relative w-full h-full">
          {/* Responsive Hero Picture: 40KB WebP on mobile, high-res on desktop */}
          <picture className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <source media="(max-width: 768px)" srcSet="/hero-mobile.webp" type="image/webp" />
            <img
              src="/hero-desktop.webp"
              alt="SAMAYAS Taxi Service"
              width="1920"
              height="1080"
              fetchpriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
              style={{ minHeight: '115vh', width: '100vw' }}
            />
          </picture>

          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/65 to-black/80 z-10" />
        </div>
      </div>

      {/* Content - Hero Text Overlay */}
      <div 
        className="relative z-10 text-center text-white flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 w-full pt-20 sm:pt-0"
      >
        {/* Main Content */}
        <div className="py-8 sm:py-20 w-full max-w-7xl mx-auto">
          {/* Subtitle - static (no fade-in) so it paints instantly for LCP */}
          <p
            className="text-base sm:text-lg md:text-xl text-white/90 mb-3 sm:mb-4 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
          >
            Your Trusted Travel Partner | Reliable Rides, Anytime, Anywhere
          </p>

          {/* Main Title - static (no fade-in) so it paints instantly for LCP */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-2"
          >
            One-Way Taxi &
            <br />
            <span className="text-accent-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Acting Driver in Tamil Nadu</span>
          </h1>

          {/* One-Way Taxi CTA Section - static container (above-the-fold text, LCP candidate) */}
          <div
            className="mb-8 sm:mb-12 max-w-2xl mx-auto w-full px-4"
          >
            <div className="backdrop-blur-md bg-black/25 hover:bg-black/35 rounded-2xl p-6 sm:p-8 border border-white/15 text-center shadow-2xl transition-all duration-300">
              {/* Badge */}
              <div
                className="flex flex-col items-center justify-center gap-2 sm:gap-3 mb-4"
              >
                <span className="bg-accent-500 text-black px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold">
                  POPULAR
                </span>
                <div className="flex flex-col items-center gap-3 sm:gap-4">
                  {/* One-Way Taxi */}
                  <div className="flex flex-col items-center gap-1 sm:gap-2">
                    <span className="text-white/90 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">One-Way Taxi</span>
                    <p className="text-white/80 text-sm sm:text-base md:text-lg">
                      Pay only for one side — no return charges.
                    </p>
                  </div>
                  
                  {/* Acting Driver */}
                  <div className="flex flex-col items-center gap-1 sm:gap-2">
                    <span className="text-white/90 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Acting Driver</span>
                    <p className="text-white/80 text-sm sm:text-base md:text-lg">
                      Professional drivers for your vehicle — reliable and experienced.
                    </p>
                  </div>
                </div>
              </div>

              {/* Primary CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a
                  href="#booking"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.85 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  Book Now
                </motion.a>
                <motion.button
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(253, 197, 0, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  className="bg-accent-500 hover:bg-accent-600 text-black font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-xl hover:shadow-yellow-400/40 transition-all duration-300 w-full sm:w-auto"
                >
                  Tariff Details
                </motion.button>
              </div>

              {/* Bilingual SEO Subtext */}
              <p className="mt-4 text-xs sm:text-sm text-accent-400 font-semibold leading-relaxed">
                தமிழ்நாடு முழுவதும் 24/7 சிறந்த ஒன்-வே டாக்ஸி மற்றும் ஆக்டிங் டிரைவர் சேவை.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center text-white mt-8 sm:mt-12 mb-16 sm:mb-0 max-w-4xl mx-auto w-full px-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-md bg-black/25 hover:bg-black/35 rounded-xl p-4 sm:p-6 border border-white/15 shadow-xl transition-all duration-300"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-accent-500/20 rounded-full mb-4"
                >
                  <stat.icon className="w-8 h-8 text-accent-500" />
                </motion.div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 pointer-events-auto"
      >
        <a href="#about" aria-label="Scroll to about section">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center cursor-pointer"
          >
            <span className="text-white/70 text-xs sm:text-sm mb-1 sm:mb-2">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500" />
            </motion.div>
          </motion.div>
        </a>
      </motion.div>

      {/* Tariff Modal */}
      <TariffModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default Hero

