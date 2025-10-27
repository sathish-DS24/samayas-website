import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowRight, Car, Sparkles, Truck, Wrench } from 'lucide-react'

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 2000)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    // Set initial width
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Fast moving cars with dust trails - Left to Right */}
        {/* Car 1 - Regular Car (Top - above "Your Trusted Partner") */}
        <div>
          <motion.div
            key={`car1-${screenWidth}`}
            initial={{ x: -200 }}
            animate={{
              x: screenWidth + 100,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 0,
              ease: "linear",
              repeatDelay: 0
            }}
            className="absolute left-0 z-20"
            style={{ top: '8%' }}
          >
            <Car className="w-20 h-20 text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
          </motion.div>
            
          {/* Dust Trail 1 */}
          <motion.div
            key={`dust1-${screenWidth}`}
            initial={{ x: -250 }}
            animate={{
              x: screenWidth + 50,
              opacity: [0, 0.7, 0.5, 0],
              scale: [0.5, 2, 3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 0.15,
              ease: "easeOut",
              repeatDelay: 0
            }}
            className="absolute left-0 z-10"
            style={{ top: '8%' }}
          >
            <div className="w-32 h-16 bg-white/30 rounded-full blur-2xl"></div>
          </motion.div>
          
          {/* Dust particles */}
          {[...Array(5)].map((_, j) => (
            <motion.div
              key={`dust-1-${j}-${screenWidth}`}
              initial={{ x: -200 }}
              animate={{
                x: screenWidth + 100,
                y: -40 - j * 15,
                opacity: [0, 0.6, 0.3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0.05 * j,
                ease: "easeOut",
                repeatDelay: 0
              }}
              className="absolute left-0"
              style={{ top: '8%' }}
            >
              <div className="w-4 h-4 bg-white/40 rounded-full blur-md"></div>
            </motion.div>
          ))}
        </div>

        {/* Car 2 - Regular Car */}
        <div>
          <motion.div
            key={`car2-${screenWidth}`}
            initial={{ x: -200 }}
            animate={{
              x: screenWidth + 100,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              delay: 2.5,
              ease: "linear",
              repeatDelay: 0
            }}
            className="absolute left-0 z-20"
            style={{ top: '75%' }}
          >
            <Car className="w-20 h-20 text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
          </motion.div>
          
          {/* Dust Trail */}
          <motion.div
            key={`dust2-${screenWidth}`}
            initial={{ x: -250 }}
            animate={{
              x: screenWidth + 50,
              opacity: [0, 0.7, 0.5, 0],
              scale: [0.5, 2, 3, 0],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              delay: 2.65,
              ease: "easeOut",
              repeatDelay: 0
            }}
            className="absolute left-0 z-10"
            style={{ top: '75%' }}
          >
            <div className="w-32 h-16 bg-white/30 rounded-full blur-2xl"></div>
          </motion.div>
        </div>

        {/* Car 3 - VAN (Truck icon) */}
        <div>
          <motion.div
            key={`car3-${screenWidth}`}
            initial={{ x: -200 }}
            animate={{
              x: screenWidth + 100,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              delay: 5,
              ease: "linear",
              repeatDelay: 0
            }}
            className="absolute left-0 z-20"
            style={{ top: '85%' }}
          >
            <Truck className="w-24 h-24 text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
          </motion.div>
          
          {/* Dust Trail */}
          <motion.div
            key={`dust3-${screenWidth}`}
            initial={{ x: -250 }}
            animate={{
              x: screenWidth + 50,
              opacity: [0, 0.7, 0.5, 0],
              scale: [0.5, 2.5, 3.5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              delay: 5.15,
              ease: "easeOut",
              repeatDelay: 0
            }}
            className="absolute left-0 z-10"
            style={{ top: '85%' }}
          >
            <div className="w-36 h-18 bg-white/30 rounded-full blur-2xl"></div>
          </motion.div>
        </div>

        {/* Car 4 - RECOVERY TRUCK (Truck with Wrench) */}
        <div>
          <motion.div
            key={`car4-${screenWidth}`}
            initial={{ x: -200 }}
            animate={{
              x: screenWidth + 100,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              delay: 7.5,
              ease: "linear",
              repeatDelay: 0
            }}
            className="absolute left-0 z-20"
            style={{ top: '92%' }}
          >
            <div className="relative w-24 h-24">
              <Truck className="w-24 h-24 text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
              <Wrench className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-7 h-7 text-white/80 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            </div>
          </motion.div>
          
          {/* Dust Trail - Bigger for recovery truck */}
          <motion.div
            key={`dust4-${screenWidth}`}
            initial={{ x: -280 }}
            animate={{
              x: screenWidth + 50,
              opacity: [0, 0.8, 0.6, 0],
              scale: [0.5, 3, 4, 0],
            }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              delay: 7.65,
              ease: "easeOut",
              repeatDelay: 0
            }}
            className="absolute left-0 z-10"
            style={{ top: '92%' }}
          >
            <div className="w-40 h-20 bg-white/35 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
        
        {/* Subtle road sparkles - minimal */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{ 
              left: `${10 + i * 11}%`, 
              top: `${50 + (i % 3) * 10}%`
            }}
          >
            <div className="w-2 h-2 bg-white/40 rounded-full blur-sm"></div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 mt-20 sm:mt-8"
          >
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-white text-sm font-medium">
              Your Trusted Travel Partner
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Reliable Rides,
            <br />
            <motion.span 
              className="inline-block"
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ color: '#D4AF37' }}
            >
              Anytime, Anywhere.
            </motion.span>
          </motion.h1>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: '1000+', label: 'Happy Customers' },
              { number: '24/7', label: 'Available Support' },
              { number: '4+', label: 'Services Offered' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Featured Service Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Featured Service</h3>
                <p className="text-gray-300">Most Popular Choice</p>
              </div>
              
              <div className="bg-gradient-to-r from-accent-500/20 to-accent-600/20 rounded-xl p-6 border border-accent-400/30">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <h4 className="text-2xl font-bold text-white">One-Way Taxi</h4>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    POPULAR
                  </motion.div>
                </div>
                <p className="text-gray-200 text-center mb-4">
                  Convenient and cost-effective one-way rides to your destination — no return charges.
                </p>
                <div className="flex justify-center">
                  <Link to="booking" smooth={true} duration={800} offset={-100}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                      Book One-Way Taxi
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

