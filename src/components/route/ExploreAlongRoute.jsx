import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Utensils,
  Coffee,
  Landmark,
  Compass,
  Camera,
  Mountain,
  Sparkles,
  ShoppingBag,
  Fuel,
  MapPin,
  Clock,
  Star,
  Users,
  CheckCircle2,
  Award,
  ChevronRight
} from 'lucide-react'

const CATEGORY_META = {
  restaurants: {
    title: 'Famous Restaurants & Food Stops',
    icon: Utensils,
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
  },
  coffeeBreaks: {
    title: 'Coffee & Tea Breaks',
    icon: Coffee,
    badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20'
  },
  temples: {
    title: 'Famous Temples & Shrines',
    icon: Landmark,
    badgeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
  },
  attractions: {
    title: 'Tourist Attractions',
    icon: Compass,
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  },
  selfieSpots: {
    title: 'Instagram & Selfie Spots',
    icon: Camera,
    badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/20'
  },
  scenicViews: {
    title: 'Scenic Viewpoints',
    icon: Mountain,
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
  },
  themeParks: {
    title: 'Theme Parks & Family Fun',
    icon: Sparkles,
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
  },
  shopping: {
    title: 'Shopping Stops & Bazaars',
    icon: ShoppingBag,
    badgeColor: 'bg-teal-500/10 text-teal-400 border-teal-500/20'
  },
  essentials: {
    title: 'Travel Essentials & Rest Stops',
    icon: Fuel,
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
  },
  localSpecialties: {
    title: 'Local Regional Specialties',
    icon: Award,
    badgeColor: 'bg-amber-400/10 text-amber-300 border-amber-400/30'
  }
}

const ExploreAlongRoute = ({ content }) => {
  const exploreData = content?.exploreAlongRoute

  if (!exploreData || Object.keys(exploreData).length === 0) {
    return null
  }

  // Get available non-empty category keys
  const availableCategories = Object.keys(exploreData).filter(
    (key) => exploreData[key] && Array.isArray(exploreData[key]) && exploreData[key].length > 0
  )

  if (availableCategories.length === 0) {
    return null
  }

  const [activeTab, setActiveTab] = useState('all')

  return (
    <section className="py-16 bg-dark-900 border-t border-dark-800 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Journey Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore Along <span className="text-amber-400">{content.from} to {content.to}</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            Discover famous food, temples, attractions, scenic spots, and useful travel stops during your journey.
          </p>
        </div>

        {/* Dynamic Category Filter Tabs */}
        {availableCategories.length > 1 && (
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20 scale-105'
                  : 'bg-dark-800 text-gray-300 border border-dark-700 hover:border-amber-500/40 hover:text-white'
              }`}
            >
              All Highlights ({availableCategories.reduce((acc, cat) => acc + exploreData[cat].length, 0)})
            </button>

            {availableCategories.map((catKey) => {
              const meta = CATEGORY_META[catKey] || { title: catKey }
              const Icon = meta.icon || Compass
              const count = exploreData[catKey].length

              return (
                <button
                  key={catKey}
                  onClick={() => setActiveTab(catKey)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeTab === catKey
                      ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20 scale-105 font-bold'
                      : 'bg-dark-800 text-gray-300 border border-dark-700 hover:border-amber-500/40 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{meta.title}</span>
                  <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-dark-900/60 border border-current opacity-80">
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        )}

        {/* Render Category Blocks */}
        <div className="space-y-12">
          {availableCategories.map((catKey) => {
            if (activeTab !== 'all' && activeTab !== catKey) return null

            const items = exploreData[catKey]
            const meta = CATEGORY_META[catKey] || { title: catKey, icon: Compass, badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20' }
            const Icon = meta.icon

            return (
              <motion.div
                key={catKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 border-b border-dark-700/80 pb-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {meta.title}
                  </h3>
                  <span className="text-xs text-gray-400 font-normal">
                    ({items.length} recommended {items.length === 1 ? 'stop' : 'stops'})
                  </span>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4 }}
                      className="bg-dark-800/80 border border-dark-700/80 hover:border-amber-500/50 rounded-2xl p-5 shadow-xl transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Top Badges */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${meta.badgeColor}`}>
                            {item.cuisine || item.type || item.category || meta.title.split(' ')[0]}
                          </span>
                          {item.rating && (
                            <span className="flex items-center space-x-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              <span>{item.rating}</span>
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                          {item.name}
                        </h4>

                        {/* Description / Famous For */}
                        {(item.famousFor || item.description || item.famousProducts) && (
                          <p className="text-xs text-gray-300 leading-relaxed mb-4">
                            {item.famousFor || item.description || item.famousProducts}
                          </p>
                        )}

                        {/* Tags / Details */}
                        <div className="space-y-2 mb-4 text-xs text-gray-400">
                          {item.detour && (
                            <div className="flex items-center text-amber-300/90 font-medium">
                              <MapPin className="w-3.5 h-3.5 mr-1.5 text-amber-400 flex-shrink-0" />
                              <span>{item.detour}</span>
                            </div>
                          )}

                          {item.stopDuration && (
                            <div className="flex items-center text-gray-300">
                              <Clock className="w-3.5 h-3.5 mr-1.5 text-amber-400 flex-shrink-0" />
                              <span>Duration: {item.stopDuration}</span>
                            </div>
                          )}

                          {item.visitDuration && (
                            <div className="flex items-center text-gray-300">
                              <Clock className="w-3.5 h-3.5 mr-1.5 text-amber-400 flex-shrink-0" />
                              <span>Visit Time: {item.visitDuration}</span>
                            </div>
                          )}

                          {item.location && (
                            <div className="flex items-center text-gray-300">
                              <MapPin className="w-3.5 h-3.5 mr-1.5 text-amber-400 flex-shrink-0" />
                              <span>{item.location}</span>
                            </div>
                          )}

                          {item.viewType && (
                            <div className="flex items-center text-gray-300">
                              <Mountain className="w-3.5 h-3.5 mr-1.5 text-amber-400 flex-shrink-0" />
                              <span>View: {item.viewType}</span>
                            </div>
                          )}
                        </div>

                        {/* Suitable Meals / Features Badges */}
                        {item.mealType && Array.isArray(item.mealType) && item.mealType.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {item.mealType.map((meal, mIdx) => (
                              <span
                                key={mIdx}
                                className="px-2 py-0.5 rounded bg-dark-900 text-[10px] font-semibold text-gray-300 border border-dark-700"
                              >
                                Suitable for {meal}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Footer Info / Family Friendly Badges */}
                      <div className="pt-3 border-t border-dark-700/60 flex items-center justify-between text-[11px] text-gray-400">
                        {item.familyFriendly !== undefined && (
                          <span className="flex items-center text-green-400 font-medium">
                            <Users className="w-3.5 h-3.5 mr-1" />
                            Family Friendly
                          </span>
                        )}
                        {item.kidsFriendly !== undefined && (
                          <span className="flex items-center text-purple-400 font-medium">
                            <Sparkles className="w-3.5 h-3.5 mr-1" />
                            Kids Friendly
                          </span>
                        )}
                        <span className="ml-auto text-amber-400 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                          En Route Stop <ChevronRight className="w-3 h-3 ml-0.5" />
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ExploreAlongRoute
