import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, ShieldCheck, Car, Sparkles, Navigation, Clock } from 'lucide-react'
import { featuredRoutes, getRouteUrl } from '../../data/routesMaster'

const PopularRoutesSection = () => {
  // Show top 8 featured routes on homepage
  const topRoutes = featuredRoutes.slice(0, 8)

  return (
    <section className="py-16 bg-dark-950 border-t border-dark-800 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Popular Intercity Routes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Top One-Way Taxi Routes in Tamil Nadu
          </h2>
          <p className="mt-3 text-base text-gray-400">
            Book 24/7 doorstep one-way cabs with transparent per-km billing and zero return fees.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topRoutes.map((r, idx) => (
            <motion.div
              key={r.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                to={getRouteUrl(r.slug)}
                className="group flex flex-col justify-between h-full bg-dark-900/80 hover:bg-dark-800/90 border border-dark-700 hover:border-amber-500/50 rounded-2xl p-5 transition-all duration-300 shadow-lg hover:shadow-amber-500/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {r.category || 'Featured'}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{r.estimatedTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                    <span>{r.from}</span>
                    <ArrowRight className="w-4 h-4 text-amber-500 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span>{r.to}</span>
                  </h3>

                  <div className="mt-3 flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-dark-800">
                    <span className="flex items-center space-x-1">
                      <Navigation className="w-3.5 h-3.5 text-gray-500" />
                      <span>{r.estDistance}</span>
                    </span>
                    <span className="font-semibold text-amber-400">₹15/km Base</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                  <span>View Fares & Route Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner to View Directory */}
        <div className="mt-12 text-center">
          <Link
            to="/one-way-taxi"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-dark-950 font-bold text-base shadow-xl shadow-amber-500/20 transition-all duration-300 hover:scale-105 space-x-2"
          >
            <span>Explore All 100+ Intercity Taxi Routes</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  )
}

export default PopularRoutesSection
