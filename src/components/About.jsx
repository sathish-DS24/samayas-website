import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Clock, Users, Award } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Verified drivers and secure payment options'
    },
    {
      icon: Clock,
      title: '24/7 Available',
      description: 'Round-the-clock service at your convenience'
    },
    {
      icon: Users,
      title: 'Professional Staff',
      description: 'Experienced and courteous team members'
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'Committed to excellence in every ride'
    }
  ]

  // Initialize video on mount - similar to Hero component
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const videoSrc = '/videos/about-journey.mp4'
    
    // Explicitly set video source and load
    video.src = videoSrc
    video.load()

    const playVideo = async () => {
      try {
        await video.play()
        console.log('About video playing successfully')
      } catch (err) {
        console.log('Autoplay prevented for About video:', err)
      }
    }

    // Try to play when video is ready
    const handleCanPlay = () => {
      playVideo()
    }

    video.addEventListener('canplay', handleCanPlay, { once: true })
    video.addEventListener('loadeddata', () => {
      console.log('About video loaded successfully')
      playVideo()
    }, { once: true })
    
    // If video is already ready, play immediately
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
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
      document.removeEventListener('scroll', handleInteraction)
      document.removeEventListener('mousemove', handleInteraction)
    }
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Video Background */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <section className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              {/* Background Video */}
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover z-0"
                onError={(e) => {
                  const video = e.target
                  console.error('About video failed to load:', {
                    error: video.error,
                    networkState: video.networkState,
                    readyState: video.readyState,
                    src: video.src
                  })
                  // Fallback to gradient if video fails
                  e.target.style.display = 'none'
                }}
              >
                Your browser does not support the video tag.
              </video>

              {/* Fallback gradient background if video fails */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 z-0" />

              {/* Overlay gradient for readability - lighter to show video */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/50 to-blue-900/60 backdrop-blur-[2px] z-[1]" />

              {/* Centered Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="hover:text-yellow-300 transition-colors"
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-4 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <path d="M4 19.5V4.5a.5.5 0 01.74-.44L12 8l7.26-3.94A.5.5 0 0120 4.5v15a.5.5 0 01-.74.44L12 16l-7.26 3.94A.5.5 0 014 19.5z" />
                  </motion.svg>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg"
                  >
                    Your Journey, <span className="text-yellow-400">Our Priority</span>
                  </motion.h2>
                </motion.div>
              </div>

              {/* Bottom Right Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-6 right-6 z-10 bg-white text-primary-900 rounded-xl px-4 sm:px-5 py-3 shadow-xl flex items-center space-x-3"
              >
                <div className="bg-accent-500 rounded-full p-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-base sm:text-lg">11+ Years</p>
                  <p className="text-xs sm:text-sm text-gray-500">Of Excellence</p>
                </div>
              </motion.div>
            </section>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
            >
              About SAMAYAS
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 leading-tight"
            >
              Your Trusted Travel Companion
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-700 mb-6 leading-relaxed"
            >
              At <span className="font-semibold text-primary-700">SAMAYAS</span>, we're dedicated to providing dependable and comfortable travel experiences. Whether you need a professional acting driver, an affordable one-way taxi, or a seamless travel package, we ensure safe, punctual, and customer-friendly service every time.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-gray-600 mb-8 leading-relaxed"
            >
              Our commitment is to make your journey stress-free and enjoyable. With years of experience in the transportation industry, we understand what matters most to our customers – reliability, safety, and comfort.
            </motion.p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Stats Card - Shown below content on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="sm:hidden mt-8 flex justify-center"
        >
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-xs">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-900">11+ Years</div>
                <div className="text-sm text-gray-600">Of Excellence</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

