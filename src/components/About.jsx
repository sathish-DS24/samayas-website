import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Clock, Users, Award } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
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

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for travel/driving image - Using gradient with icon */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 aspect-[4/3] flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-10"
                >
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-white rounded-full"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-4 border-white rounded-full"></div>
                </motion.div>
                
                <div className="relative z-10 text-center text-white p-8">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </motion.div>
                  <div className="text-2xl font-bold">Your Journey, Our Priority</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500 rounded-full blur-2xl opacity-60"
              />
              <motion.div
                animate={{ scale: [1.1, 1, 1.1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 w-32 h-32 bg-primary-400 rounded-full blur-2xl opacity-40"
              />
            </div>

            {/* Stats Card Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 max-w-xs"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-900">5+ Years</div>
                  <div className="text-sm text-gray-600">Of Excellence</div>
                </div>
              </div>
            </motion.div>
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
      </div>
    </section>
  )
}

export default About

