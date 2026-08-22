import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, MapPin, ArrowRight, ShieldCheck, Tag } from 'lucide-react'

const PackageCard = ({ pkg }) => {
  if (!pkg) return null

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-dark-900 border border-dark-800 hover:border-amber-500/40 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between transition-all group"
    >
      <div>
        {/* Image & Badges */}
        <div className="relative h-44 sm:h-48 overflow-hidden bg-dark-950">
          <img
            src={pkg.heroImage || '/images/cars/sedan.webp'}
            alt={pkg.title}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="px-3 py-1 bg-dark-950/90 backdrop-blur-md border border-dark-700 text-amber-400 font-bold text-xs rounded-full flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{pkg.duration}</span>
            </span>
          </div>

          {pkg.originCity && (
            <div className="absolute bottom-3 right-3 bg-amber-500/20 backdrop-blur-md text-amber-300 text-[11px] font-extrabold px-2.5 py-1 rounded-lg border border-amber-500/30">
              From {pkg.originCity}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <div className="flex items-center space-x-1 text-xs font-semibold text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{pkg.destination}</span>
            <span>•</span>
            <span className="text-amber-400">{pkg.category}</span>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition leading-snug line-clamp-2">
            {pkg.title}
          </h3>

          <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
            {pkg.subtitle || pkg.overview}
          </p>

          {/* Highlights */}
          {pkg.idealFor && pkg.idealFor.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {pkg.idealFor.slice(0, 3).map((item, idx) => (
                <span key={idx} className="text-[10px] px-2 py-0.5 bg-dark-950 text-gray-300 rounded border border-dark-800">
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer & Price */}
      <div className="p-5 pt-0">
        <div className="pt-3 border-t border-dark-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-gray-400 font-medium block">Starting Fare</span>
            <span className="text-xl font-black text-amber-400">₹{pkg.startingPrice.toLocaleString('en-IN')}</span>
          </div>

          <Link
            to={`/tour-packages/${pkg.slug}`}
            className="inline-flex items-center space-x-1.5 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-dark-950 font-black text-xs rounded-full transition shadow-md group-hover:shadow-amber-500/20"
          >
            <span>View Package</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default PackageCard
