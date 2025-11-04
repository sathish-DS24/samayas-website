import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Car, Users, Clock, Grid, ChevronDown } from 'lucide-react'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const stats = [
    { icon: Users, number: '1000+', label: 'Happy Customers' },
    { icon: Clock, number: '24/7', label: 'Available Support' },
    { icon: Grid, number: '4+', label: 'Services Offered' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {!isMobile ? (
          // Desktop: Video background with fallback
          <div className="relative w-full h-full">
            {/* Video placeholder - replace with actual video URL */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80"
            >
              <source src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4" type="video/mp4" />
              {/* Fallback image if video fails */}
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80"
                alt="Highway background"
                className="w-full h-full object-cover"
              />
            </video>
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
          </div>
        ) : (
          // Mobile: Static image for performance
          <div className="relative w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80"
              alt="Highway background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Main Content */}
        <div className="py-20">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/80 mb-4 font-medium"
          >
            Your Trusted Travel Partner
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Reliable Rides,
            <br />
            <span className="text-accent-500">Anytime, Anywhere.</span>
          </motion.h1>

          {/* One-Way Taxi CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 max-w-2xl mx-auto"
          >
            <div className="backdrop-blur-sm bg-black/20 rounded-2xl p-8 border border-white/10">
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                className="inline-flex items-center space-x-2 mb-4"
              >
                <span className="bg-accent-500 text-black px-4 py-1.5 rounded-full text-sm font-bold">
                  POPULAR
                </span>
                <span className="text-white/90 text-lg font-semibold">One-Way Taxi</span>
              </motion.div>

              {/* Tagline */}
              <p className="text-white/80 text-lg mb-6">
                Pay only for one side — no return charges.
              </p>

              {/* Primary CTA Button */}
              <Link to="booking" smooth={true} duration={800} offset={-100}>
                <motion.button
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(253, 197, 0, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent-500 hover:bg-accent-600 text-black font-semibold rounded-full px-8 py-4 text-lg shadow-xl hover:shadow-yellow-400/40 transition-all duration-300"
                >
                  Book One-Way Taxi
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white mt-12 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-sm bg-black/20 rounded-xl p-6 border border-white/10"
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
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <Link to="about" smooth={true} duration={800} offset={-100}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center cursor-pointer"
          >
            <span className="text-white/70 text-sm mb-2">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6 text-accent-500" />
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero
