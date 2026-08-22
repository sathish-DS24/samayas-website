import React from 'react'
import { motion } from 'framer-motion'
import { Phone, ArrowRight, ShieldCheck, Clock } from 'lucide-react'

const BookingCTA = ({ title = 'Ready to Book Your Tour Cab?', destination = 'South India', onBookClick }) => {
  return (
    <section className="py-14 bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950 border-t border-dark-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider"
        >
          <Clock className="w-4 h-4" />
          <span>24×7 Instant Tour Cab Booking</span>
        </motion.div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white max-w-3xl mx-auto">
          {title}
        </h2>

        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-medium">
          Experience stress-free travel to {destination} with SAMAYAS private AC cab, expert driver, customized itinerary & 100% transparent pricing.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="#booking" onClick={onBookClick}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-dark-950 font-black text-sm rounded-full shadow-xl transition flex items-center space-x-2 cursor-pointer"
            >
              <span>Book Online Now</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </a>

          <a href="tel:+919842456789">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3.5 bg-dark-900 hover:bg-dark-800 border border-dark-700 text-white font-bold text-sm rounded-full shadow-lg transition flex items-center space-x-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call 24/7 Support</span>
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default BookingCTA
