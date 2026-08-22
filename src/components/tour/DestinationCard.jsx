import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Sun } from 'lucide-react'

const DestinationCard = ({ destination }) => {
  if (!destination) return null

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-dark-900 border border-dark-800 hover:border-amber-500/40 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between transition-all group"
    >
      <div>
        {/* Image & State Badge */}
        <div className="relative h-44 sm:h-48 overflow-hidden bg-dark-950">
          <img
            src={destination.heroImage || '/images/cars/sedan.webp'}
            alt={destination.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-dark-950/90 backdrop-blur-md border border-dark-700 text-amber-400 font-bold text-xs rounded-full">
              {destination.state}
            </span>
          </div>

          <div className="absolute bottom-3 right-3 bg-dark-950/90 backdrop-blur-md text-gray-300 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-dark-700">
            {destination.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-2">
          <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition">
            {destination.name}
          </h3>

          <p className="text-xs text-amber-300 font-semibold">
            {destination.tagline}
          </p>

          <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed pt-1">
            {destination.overview}
          </p>

          {destination.bestTime && (
            <div className="flex items-center space-x-1.5 text-[11px] text-gray-400 pt-2">
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Best Season: <strong className="text-white">{destination.bestTime}</strong></span>
            </div>
          )}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="p-5 pt-0">
        <div className="pt-3 border-t border-dark-800 flex items-center justify-between">
          <span className="text-xs text-gray-400 font-medium">Private Cab Sightseeing</span>
          <Link
            to={`/tour-packages/${destination.slug}`}
            className="inline-flex items-center space-x-1.5 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-dark-950 font-black text-xs rounded-full transition shadow-md"
          >
            <span>Explore Tour</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default DestinationCard
