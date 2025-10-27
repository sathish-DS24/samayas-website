import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CircleUserRound, Luggage, CarFront, Wrench, Car } from 'lucide-react'

// Custom Car with Luggage Icon Component (Side View)
const CarWithLuggage = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <Car className="w-full h-full" />
      <Luggage className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4" />
    </div>
  )
}

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: CircleUserRound,
      title: 'Acting Driver',
      description: 'Hire professional drivers for short or long trips — reliable, punctual, and experienced.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      hoverGradient: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      icon: CarWithLuggage,
      title: 'Tours & Travels',
      description: 'Plan your holidays or business trips effortlessly with our affordable travel packages.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      hoverGradient: 'hover:from-purple-600 hover:to-purple-700'
    },
    {
      icon: CarFront,
      title: 'One-Way Taxi',
      description: 'Convenient and cost-effective one-way rides to your destination — no return charges.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      hoverGradient: 'hover:from-green-600 hover:to-green-700'
    },
    {
      icon: Wrench,
      title: 'Recovery Services',
      description: '24x7 vehicle breakdown and recovery assistance whenever you\'re in need.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      hoverGradient: 'hover:from-orange-600 hover:to-orange-700'
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
          >
            What We Offer
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-primary-900 mb-4"
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive transportation solutions tailored to meet all your travel needs
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors`}
                  >
                    <service.icon className={`w-8 h-8 ${service.iconColor} group-hover:text-white transition-colors`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed flex-grow group-hover:text-white/90 transition-colors">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-4 flex items-center space-x-2 text-primary-600 group-hover:text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span>Learn more</span>
                    <motion.svg
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500" />
              </div>

              {/* Floating Badge for featured services */}
              {index === 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute -top-3 -right-3 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20"
                >
                  Popular
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Need a custom solution? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

