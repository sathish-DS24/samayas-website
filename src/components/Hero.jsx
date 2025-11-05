import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Car, Users, Clock, Grid, ChevronDown } from 'lucide-react'
import TariffModal from './TariffModal'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeVideo, setActiveVideo] = useState(0) // 0 or 1 for crossfade
  const videoRef1 = React.useRef(null)
  const videoRef2 = React.useRef(null)

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

  // Handle video end - move to next video with smooth transition
  const handleVideoEnd = useCallback(() => {
    const nextIndex = (currentVideoIndex + 1) % videoPlaylist.length
    const nextVideoSrc = videoPlaylist[nextIndex]
    const nextVideoRef = activeVideo === 0 ? videoRef2 : videoRef1
    
    if (nextVideoRef.current) {
      // Ensure the next video source is set correctly
      if (nextVideoRef.current.src !== nextVideoSrc) {
        nextVideoRef.current.src = nextVideoSrc
        nextVideoRef.current.load()
      }
      
      // Start crossfade immediately - next video should already be loaded
      setActiveVideo(activeVideo === 0 ? 1 : 0)
      setCurrentVideoIndex(nextIndex)
      
      // Ensure next video is playing
      const playNext = () => {
        if (nextVideoRef.current) {
          nextVideoRef.current.currentTime = 0
          nextVideoRef.current.play().catch(console.error)
        }
      }
      
      // If video is ready, play immediately, otherwise wait for canplay
      if (nextVideoRef.current.readyState >= 3) {
        playNext()
      } else {
        nextVideoRef.current.addEventListener('canplay', playNext, { once: true })
      }
    }
  }, [currentVideoIndex, activeVideo, videoPlaylist.length])

  // Handle video time update - start preloading next video when current is near end
  const handleTimeUpdate = useCallback((e) => {
    const video = e.target
    // Only process time updates from the currently active video
    const isActiveVideo = (activeVideo === 0 && video === videoRef1.current) || 
                          (activeVideo === 1 && video === videoRef2.current)
    
    if (!isActiveVideo) return
    
    const duration = video.duration
    const currentTime = video.currentTime
    
    // When video is 80% complete, start preparing next video
    if (duration && currentTime / duration > 0.8) {
      const nextIndex = (currentVideoIndex + 1) % videoPlaylist.length
      const nextVideoSrc = videoPlaylist[nextIndex]
      const nextVideoRef = activeVideo === 0 ? videoRef2 : videoRef1
      
      if (nextVideoRef.current && nextVideoRef.current.src !== nextVideoSrc) {
        nextVideoRef.current.src = nextVideoSrc
        nextVideoRef.current.load()
        nextVideoRef.current.preload = 'auto'
        
        // When next video is ready, start playing it muted in background
        const handleNextReady = () => {
          if (nextVideoRef.current && nextVideoRef.current.paused) {
            nextVideoRef.current.currentTime = 0
            nextVideoRef.current.play().catch(console.error)
          }
        }
        
        nextVideoRef.current.addEventListener('canplay', handleNextReady, { once: true })
        if (nextVideoRef.current.readyState >= 3) {
          handleNextReady()
        }
      }
    }
  }, [currentVideoIndex, activeVideo, videoPlaylist.length])

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

  // Initialize first video on mount
  useEffect(() => {
    if (videoRef1.current) {
      const video = videoRef1.current
      const videoSrc = videoPlaylist[0]
      
      video.src = videoSrc
      video.load()
      
      const playVideo = async () => {
        try {
          await video.play()
          setVideoError(false)
        } catch (err) {
          console.log('Autoplay prevented:', err)
        }
      }
      
      const handleCanPlay = () => {
        playVideo()
      }
      
      video.addEventListener('canplay', handleCanPlay, { once: true })
      video.addEventListener('ended', handleVideoEnd)
      
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
      
      document.addEventListener('click', handleInteraction, { once: true })
      document.addEventListener('touchstart', handleInteraction, { once: true })
      document.addEventListener('scroll', handleInteraction, { once: true })
      document.addEventListener('mousemove', handleInteraction, { once: true })
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay)
        video.removeEventListener('ended', handleVideoEnd)
      }
    }
  }, [handleVideoEnd]) // Include handleVideoEnd in dependencies

  // Preload next video immediately when current video index changes
  useEffect(() => {
    const nextIndex = (currentVideoIndex + 1) % videoPlaylist.length
    const nextVideoSrc = videoPlaylist[nextIndex]
    const nextVideoRef = activeVideo === 0 ? videoRef2 : videoRef1
    
    if (nextVideoRef.current) {
      // Always ensure the source is set correctly for the next video
      // This is important when reusing video elements (e.g., videoRef1 for video 0 and video 2)
      const currentSrc = nextVideoRef.current.src
      const videoFileName = nextVideoSrc.split('/').pop()
      
      // Check if current source doesn't match the next video we need
      if (!currentSrc || !currentSrc.includes(videoFileName)) {
        nextVideoRef.current.src = nextVideoSrc
        nextVideoRef.current.load()
        nextVideoRef.current.preload = 'auto'
      }
      
      // Preload and prepare next video
      const handleNextReady = () => {
        if (nextVideoRef.current) {
          nextVideoRef.current.currentTime = 0
          // Don't play yet, just prepare it
        }
      }
      
      // Remove any existing listeners to avoid duplicates
      nextVideoRef.current.removeEventListener('canplay', handleNextReady)
      nextVideoRef.current.addEventListener('canplay', handleNextReady, { once: true })
      
      if (nextVideoRef.current.readyState >= 3) {
        handleNextReady()
      }
    }
  }, [currentVideoIndex, activeVideo, videoPlaylist])

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
          {/* Video 1 - Crossfade between two videos for smooth transitions */}
          <motion.video
            ref={videoRef1}
            autoPlay
            muted
            playsInline
            loop={false}
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ minHeight: '100vh', width: '100vw' }}
            initial={{ opacity: 1 }}
            animate={{ opacity: activeVideo === 0 ? 1 : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            onError={handleVideoError}
            onEnded={handleVideoEnd}
            onTimeUpdate={handleTimeUpdate}
            onLoadedData={() => {
              setVideoError(false)
              if (videoRef1.current && activeVideo === 0) {
                videoRef1.current.play().catch(console.error)
              }
            }}
          >
            Your browser does not support the video tag.
          </motion.video>
          
          {/* Video 2 - For crossfade transitions */}
          <motion.video
            ref={videoRef2}
            autoPlay
            muted
            playsInline
            loop={false}
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ minHeight: '100vh', width: '100vw' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeVideo === 1 ? 1 : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            onError={handleVideoError}
            onEnded={handleVideoEnd}
            onTimeUpdate={handleTimeUpdate}
            onLoadedData={() => {
              setVideoError(false)
              if (videoRef2.current && activeVideo === 1) {
                videoRef2.current.play().catch(console.error)
              }
            }}
          >
            Your browser does not support the video tag.
          </motion.video>
          
          {/* Fallback background image - only show if all videos fail */}
          <motion.div 
            className="absolute inset-0 w-full h-full object-cover bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80')"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: videoError ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            id="fallback-bg"
          />
          
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/65 to-black/80 z-10" />
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

      {/* Tariff Modal */}
      <TariffModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default Hero

