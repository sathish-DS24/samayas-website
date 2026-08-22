import React from 'react'
import { motion } from 'framer-motion'
import { Hotel, Star } from 'lucide-react'

const HotelRecommendations = ({ hotels = [] }) => {
  if (!hotels || hotels.length === 0) return null

  const getCategoryBadge = (cat) => {
    switch (cat) {
      case 'Luxury': return 'bg-amber-500/10 text-amber-400 border-amber-500/30'
      case 'Mid-Range': return 'bg-blue-500/10 text-blue-400 border-blue-500/30'
      default: return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
    }
  }

  return (
    <section className="py-10 bg-dark-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-amber-400 font-bold mb-6">
          <Hotel className="w-5 h-5" />
          <h2 className="text-xl font-extrabold text-white">Recommended Accommodation & Stays</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {hotels.map((h, idx) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-dark-900 border border-dark-800 p-5 rounded-2xl flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full border ${getCategoryBadge(h.category)}`}>
                  {h.category} Stay
                </span>
                <h3 className="text-base font-bold text-white">{h.name}</h3>
                <p className="text-xs text-gray-400">Location: {h.area}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-dark-800 text-[11px] text-gray-400">
                Doorstep cab pickup available from hotel lobby
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HotelRecommendations
