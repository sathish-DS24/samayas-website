import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Car, Users, Clock, Grid, ChevronDown } from 'lucide-react'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = React.useRef(null)

  // Video playlist in sequence
  const videoPlaylist = [
    '/videos/taxi-city-drive.mp4.mp4', // First video
    '/videos/Passenger-pickup.mp4',     // Second video
    '/videos/taxi video.mp4'            // Third video (space in filename - URL encoded automatically)
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle video end - move to next video
  const handleVideoEnd = useCallback(() => {
    setCurrentVideoIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % videoPlaylist.length
      console.log(`Video ${prevIndex} ended, switching to video ${nextIndex}`)
      return nextIndex
    })
  }, [videoPlaylist.length])

  // Handle video load error
  const handleVideoError = (e) => {
    const video = e.target
    console.error(`Video error for ${video.src}:`, e)
    console.error('Video error details:', {
      error: video.error,
      networkState: video.networkState,
      readyState: video.readyState,
      src: video.src
    })
    
    // Try next video if current one fails
    setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % videoPlaylist.length
        console.log(`Video ${prevIndex} failed, trying next video ${nextIndex}`)
        return nextIndex
      })
    }, 1000)
  }

  // Force video play on load and when video changes
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current
      
      // Load the current video
      const videoSrc = videoPlaylist[currentVideoIndex]
      console.log(`Loading video ${currentVideoIndex}: ${videoSrc}`)
      video.src = videoSrc
      video.load()
      
      const playVideo = async () => {
        try {
          await video.play()
          console.log(`Video ${currentVideoIndex} (${videoSrc}) playing successfully`)
          setVideoError(false) // Reset error state on successful play
        } catch (err) {
          console.log('Autoplay prevented:', err)
          // Video will play on user interaction
        }
      }
      
      // Wait for video to be ready
      const handleCanPlay = () => {
        console.log(`Video ${currentVideoIndex} can play, attempting to play...`)
        playVideo()
      }
      
      const handleLoadedMetadata = () => {
        console.log(`Video ${currentVideoIndex} metadata loaded`)
      }
      
      video.addEventListener('canplay', handleCanPlay)
      video.addEventListener('loadedmetadata', handleLoadedMetadata)
      video.addEventListener('ended', handleVideoEnd)
      
      // Try to play immediately if ready
      if (video.readyState >= 3) {
        playVideo()
      }
      
      // If autoplay blocked, play on user interaction
      const handleInteraction = () => {
        playVideo()
        document.removeEventListener('click', handleInteraction)
        document.removeEventListener('touchstart', handleInteraction)
        document.removeEventListener('scroll', handleInteraction)
        document.removeEventListener('mousemove', handleInteraction)
      }
      
      document.addEventListener('click', handleInteraction)
      document.addEventListener('touchstart', handleInteraction)
      document.addEventListener('scroll', handleInteraction)
      document.addEventListener('mousemove', handleInteraction)
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay)
        video.removeEventListener('loadedmetadata', handleLoadedMetadata)
        video.removeEventListener('ended', handleVideoEnd)
        document.removeEventListener('click', handleInteraction)
        document.removeEventListener('touchstart', handleInteraction)
        document.removeEventListener('scroll', handleInteraction)
        document.removeEventListener('mousemove', handleInteraction)
      }
    }
  }, [currentVideoIndex, handleVideoEnd])

  const stats = [
    { icon: Users, number: '1000+', label: 'Happy Customers' },
    { icon: Clock, number: '24/7', label: 'Available Support' },
    { icon: Grid, number: '4+', label: 'Services Offered' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh', width: '100vw' }}
    >
      {/* Background Video - Taxi City Drive */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <div className="relative w-full h-full">
          {/* Taxi City Video Background - Full Screen */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover z-0 ${videoError ? 'hidden' : ''}`}
            style={{ minHeight: '100vh', width: '100vw' }}
            poster="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80"
            onError={handleVideoError}
            onEnded={handleVideoEnd}
            onLoadedData={() => {
              console.log(`Video ${currentVideoIndex} data loaded, attempting to play...`)
              setVideoError(false) // Reset error on successful load
              if (videoRef.current) {
                videoRef.current.play().catch((err) => {
                  console.log('Play failed on loadedData:', err)
                })
              }
            }}
            onCanPlay={() => {
              console.log(`Video ${currentVideoIndex} can play now`)
              setVideoError(false) // Reset error when video can play
              if (videoRef.current && videoRef.current.paused) {
                videoRef.current.play().catch((err) => {
                  console.log('Play failed on canPlay:', err)
                })
              }
            }}
          >
            Your browser does not support the video tag.
          </video>
          {/* Fallback background image */}
          <div 
            className={`absolute inset-0 w-full h-full object-cover bg-cover bg-center ${videoError ? 'block' : 'hidden'}`}
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80')"
            }}
            id="fallback-bg"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/65 to-black/80" />
        </div>
      </div>

      {/* Content - Hero Text Overlay */}
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 w-full pt-20 sm:pt-0">
        {/* Main Content */}
        <div className="py-8 sm:py-20 w-full max-w-7xl mx-auto">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-3 sm:mb-4 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
          >
            Your Trusted Travel Partner
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-2"
          >
            Reliable Rides,
            <br />
            <span className="text-accent-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Anytime, Anywhere.</span>
          </motion.h1>

          {/* One-Way Taxi CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8 sm:mb-12 max-w-2xl mx-auto w-full px-4"
          >
            <div className="backdrop-blur-sm bg-black/20 rounded-2xl p-6 sm:p-8 border border-white/10">
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                className="inline-flex items-center space-x-2 mb-4"
              >
                <span className="bg-accent-500 text-black px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold">
                  POPULAR
                </span>
                <span className="text-white/90 text-base sm:text-lg font-semibold">One-Way Taxi</span>
              </motion.div>

              {/* Tagline */}
              <p className="text-white/80 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
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
                  className="bg-accent-500 hover:bg-accent-600 text-black font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-xl hover:shadow-yellow-400/40 transition-all duration-300 w-full sm:w-auto"
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
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center text-white mt-8 sm:mt-12 max-w-4xl mx-auto w-full px-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-sm bg-black/20 rounded-xl p-4 sm:p-6 border border-white/10"
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
