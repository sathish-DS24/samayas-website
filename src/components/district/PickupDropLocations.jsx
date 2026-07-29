import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'

const PickupDropLocations = ({ districtName, pickupLocations, dropLocations }) => {
  if ((!pickupLocations || pickupLocations.length === 0) && (!dropLocations || dropLocations.length === 0)) {
    return null
  }

  return (
    <section className="py-14 lg:py-16 bg-gray-50" aria-labelledby="locations-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-600" />
            </div>
            <h2 id="locations-heading" className="text-2xl sm:text-3xl font-bold text-primary-900">
              Popular Pickup &amp; Drop Locations in {districtName}
            </h2>
          </div>
          <p className="text-gray-600 mb-8 ml-[52px]">
            We serve all major locations across {districtName} district. Select your pickup and we'll be there.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Pickup Locations */}
          {pickupLocations && pickupLocations.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="px-5 py-3.5 bg-primary-900 text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-500" />
                <h3 className="font-semibold text-sm">Pickup Locations</h3>
              </div>
              <ul className="divide-y divide-gray-50">
                {pickupLocations.map((loc, i) => (
                  <li
                    key={loc}
                    className="px-5 py-3 text-gray-700 text-sm hover:bg-primary-50/50 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full flex-shrink-0" />
                    {loc}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Drop Locations */}
          {dropLocations && dropLocations.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="px-5 py-3.5 bg-primary-700 text-white flex items-center gap-2">
                <Navigation className="w-4 h-4 text-accent-500" />
                <h3 className="font-semibold text-sm">Popular Drop Destinations</h3>
              </div>
              <ul className="divide-y divide-gray-50">
                {dropLocations.map((loc, i) => (
                  <li
                    key={loc}
                    className="px-5 py-3 text-gray-700 text-sm hover:bg-primary-50/50 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                    {loc}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PickupDropLocations
