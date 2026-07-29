import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Map } from 'lucide-react'
import { getDistrictUrl } from '../../data/districts'

const NearbyDistricts = ({ nearbyDistricts }) => {
  if (!nearbyDistricts || nearbyDistricts.length === 0) return null

  return (
    <section className="py-14 lg:py-16 bg-primary-900 text-white" aria-labelledby="nearby-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <Map className="w-5 h-5 text-accent-500" />
            </div>
            <h2 id="nearby-heading" className="text-2xl sm:text-3xl font-bold">
              Taxi Service in Nearby Districts
            </h2>
          </div>
          <p className="text-gray-300 mb-6 ml-[52px]">
            SAMAYAS operates across all 38 districts of Tamil Nadu. Explore our service in nearby districts.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {nearbyDistricts.map((d, i) => (
            <motion.div
              key={d.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={getDistrictUrl(d.slug)}
                className="inline-block px-5 py-2.5 bg-white/10 hover:bg-accent-500 hover:text-primary-900 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                {d.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: nearbyDistricts.length * 0.05 }}
          >
            <Link
              to="/service-areas"
              className="inline-block px-5 py-2.5 border border-accent-400 text-accent-400 hover:bg-accent-500 hover:text-primary-900 hover:border-accent-500 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
            >
              View all 38 districts →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NearbyDistricts
