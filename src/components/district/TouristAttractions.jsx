import React from 'react'
import { motion } from 'framer-motion'
import { Camera, MapPin } from 'lucide-react'

const TouristAttractions = ({ districtName, attractions }) => {
  if (!attractions || attractions.length === 0) return null

  return (
    <section className="py-14 lg:py-16 bg-gray-50" aria-labelledby="tourist-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Camera className="w-5 h-5 text-orange-600" />
            </div>
            <h2 id="tourist-heading" className="text-2xl sm:text-3xl font-bold text-primary-900">
              Tourist Attractions Near {districtName}
            </h2>
          </div>
          <p className="text-gray-600 mb-8 ml-[52px]">
            Plan your sightseeing trip from {districtName}. SAMAYAS offers tour packages and one-way drops to all nearby attractions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {attractions.map((place, i) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-orange-200 transition-all group"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-50 group-hover:bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                  <Camera className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 text-sm mb-1">{place.name}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{place.description}</p>
                  {typeof place.distanceKm === 'number' && (
                    <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {place.distanceKm === 0
                        ? `In ${districtName} city`
                        : `${place.distanceKm} km from ${districtName}`}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TouristAttractions
