import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Sun, Car, ShieldCheck, Star } from 'lucide-react'

const DestinationHero = ({ title, tagline, state, bestTime, recommendedVehicle, category, onBookClick }) => {
  return (
    <div className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12)_0,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider"
          >
            <MapPin className="w-4 h-4" />
            <span>{state} • {category}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-amber-300 font-semibold"
          >
            {tagline}
          </motion.p>

          {/* Key Facts Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm text-gray-300"
          >
            {bestTime && (
              <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-dark-800/80 rounded-xl border border-dark-700">
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Best Time: <strong>{bestTime}</strong></span>
              </div>
            )}
            {recommendedVehicle && (
              <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-dark-800/80 rounded-xl border border-dark-700">
                <Car className="w-4 h-4 text-amber-400" />
                <span>Recommended: <strong>{recommendedVehicle}</strong></span>
              </div>
            )}
            <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-dark-800/80 rounded-xl border border-dark-700">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Private AC Cab & Expert Driver</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-4"
          >
            <a href="#booking" onClick={onBookClick}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-dark-950 font-black text-sm rounded-full shadow-xl transition cursor-pointer"
              >
                Book Tour Cab Now
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default DestinationHero
