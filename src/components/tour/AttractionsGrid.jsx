import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Camera, Landmark, Trees, Compass } from 'lucide-react'

const AttractionsGrid = ({ attractions = [] }) => {
  if (!attractions || attractions.length === 0) return null

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'Heritage': return <Landmark className="w-4 h-4 text-amber-400" />
      case 'Nature': return <Trees className="w-4 h-4 text-emerald-400" />
      case 'Photography': return <Camera className="w-4 h-4 text-blue-400" />
      default: return <Compass className="w-4 h-4 text-amber-400" />
    }
  }

  return (
    <section className="py-12 bg-dark-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Sightseeing & Places to Visit</span>
          <h2 className="text-2xl sm:text-4xl font-black mt-1">Top Tourist Attractions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, idx) => (
            <motion.div
              key={attraction.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-dark-900 border border-dark-800 hover:border-amber-500/40 rounded-2xl p-6 shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-dark-950 border border-dark-700 text-xs font-semibold">
                    {getCategoryIcon(attraction.category)}
                    <span>{attraction.category}</span>
                  </span>
                  <MapPin className="w-4 h-4 text-gray-500" />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition">
                  {attraction.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {attraction.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-dark-800 text-[11px] text-amber-400 font-bold flex items-center justify-between">
                <span>Included in SAMAYAS Sightseeing</span>
                <span>Cab Stop ✓</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AttractionsGrid
