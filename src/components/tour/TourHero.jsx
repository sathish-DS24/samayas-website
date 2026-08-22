import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, Compass, Mountain, ArrowRight } from 'lucide-react'

const TourHero = ({ onSearch, categories = [], states = [] }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch({ searchTerm, state: selectedState, category: selectedCategory })
    }
  }

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white overflow-hidden pt-24 pb-16">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0,transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-widest"
          >
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>South India Tour Packages & Outstation Cabs</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
          >
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">South India</span> with SAMAYAS Private Cabs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-gray-300 font-medium max-w-3xl mx-auto"
          >
            Custom Holiday Packages, Hill Station Tours, Temple Pilgrimages & Weekend Escapes across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh & Telangana.
          </motion.p>

          {/* Interactive Search Bar */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSearchSubmit}
            className="mt-8 bg-dark-900/90 border border-dark-700/80 p-3 sm:p-4 rounded-3xl shadow-2xl backdrop-blur-xl max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            {/* Input Search */}
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-amber-400 absolute left-3 pointer-events-none" />
              <input
                type="text"
                placeholder="Search destination (e.g. Ooty, Munnar)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-3 bg-dark-950/80 border border-dark-800 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition"
              />
            </div>

            {/* Select State */}
            <div className="relative flex items-center">
              <MapPin className="w-5 h-5 text-amber-400 absolute left-3 pointer-events-none" />
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full pl-10 pr-3 py-3 bg-dark-950/80 border border-dark-800 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400 transition cursor-pointer"
              >
                <option value="">All States</option>
                {states.map((st) => (
                  <option key={st} value={st} className="bg-dark-900 text-white">
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-dark-950 font-black text-sm rounded-xl shadow-lg transition flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <span>Search Packages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>

          {/* Quick Category Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 pt-4 text-xs"
          >
            <span className="text-gray-400 font-semibold mr-1">Popular Filters:</span>
            {categories.slice(0, 6).map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => onSearch && onSearch({ category: cat.slug })}
                className="px-3 py-1.5 rounded-full bg-dark-800/80 hover:bg-amber-500/20 hover:text-amber-400 border border-dark-700 text-gray-300 font-medium transition cursor-pointer"
              >
                {cat.title.replace(' Tour Packages', '')}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TourHero
