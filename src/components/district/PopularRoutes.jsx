import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Car, ArrowRight, Clock, Route, Search, X, CheckCircle } from 'lucide-react'
import { findMatchingRouteSlug } from '../../data/routesMaster'
import { getRouteUrl } from '../../data/routes'

const formatTime = (hours) => {
  const h = Math.floor(hours)
  const m = Math.round((hours - h) * 60)
  if (h === 0) return `${m} min`
  if (m === 0) return `${h} hr`
  return `${h} hr ${m} min`
}

const PopularRoutes = ({ districtName, routes }) => {
  const [searchTerm, setSearchTerm] = useState('')

  if (!routes || routes.length === 0) return null

  const filteredRoutes = routes.filter((route) => {
    const routeName = typeof route === 'string' ? route : route.name
    return routeName.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <section className="py-14 lg:py-16 bg-gray-50" aria-labelledby="popular-routes-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <Route className="w-5 h-5 text-primary-600" />
              </div>
              <h2 id="popular-routes-heading" className="text-2xl sm:text-3xl font-bold text-primary-900">
                Popular One-Way Routes from {districtName}
              </h2>
            </div>
            <p className="text-gray-600 ml-[52px]">
              Inter-city and outstation one-way taxi bookings — no return charges.
            </p>
          </div>

          {/* Quick Route Search Input */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Where do you want to go from ${districtName}?`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 shadow-xs focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>

        {filteredRoutes.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-2xl border border-gray-200 p-6">
            <p className="text-gray-500 text-sm mb-3">No direct routes listed matching "{searchTerm}".</p>
            <a
              href="#booking-form"
              className="inline-flex items-center gap-2 text-xs font-bold text-primary-600 hover:text-accent-600"
            >
              Book custom ride from {districtName} →
            </a>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredRoutes.map((route, i) => {
              const routeName = typeof route === 'string' ? route : route.name
              const distanceKm = typeof route === 'object' ? route.distanceKm : null
              const timeHours = typeof route === 'object' ? route.timeHours : null
              const startingFare = typeof route === 'object' ? route.startingFare : null

              // Extract destination name from route string e.g. "Trichy to Chennai" -> "Chennai"
              const destName = routeName.includes(' to ')
                ? routeName.split(' to ')[1]?.trim()
                : routeName

              const matchingSlug = findMatchingRouteSlug(districtName, destName)
              const routeLinkUrl = matchingSlug ? getRouteUrl(matchingSlug) : '#booking-form'

              const CardElement = matchingSlug ? Link : 'a'
              const cardProps = matchingSlug ? { to: routeLinkUrl } : { href: routeLinkUrl }

              return (
                <motion.div
                  key={routeName}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  <CardElement
                    {...cardProps}
                    className="group relative bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-accent-500/50 hover:shadow-md transition-all flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Top route title */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 bg-primary-50 group-hover:bg-accent-500/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                            <Car className="w-4.5 h-4.5 text-primary-600 group-hover:text-accent-600 transition-colors" />
                          </div>
                          <h3 className="font-bold text-gray-900 group-hover:text-primary-900 transition-colors text-base">
                            {routeName}
                          </h3>
                        </div>
                      </div>

                      {/* Route Specs pill tags */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4 pt-1 border-t border-gray-50">
                        {distanceKm && (
                          <span className="inline-flex items-center gap-1 font-medium bg-gray-50 px-2.5 py-1 rounded-md text-gray-600">
                            <Route className="w-3 h-3 text-gray-400" />
                            {distanceKm} km
                          </span>
                        )}
                        {timeHours && (
                          <span className="inline-flex items-center gap-1 font-medium bg-gray-50 px-2.5 py-1 rounded-md text-gray-600">
                            <Clock className="w-3 h-3 text-gray-400" />
                            {formatTime(timeHours)}
                          </span>
                        )}
                        {matchingSlug && (
                          <span className="inline-flex items-center gap-1 font-semibold bg-accent-500/10 text-accent-700 px-2 py-0.5 rounded text-[11px]">
                            <CheckCircle className="w-3 h-3 text-accent-600" />
                            Route Guide
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom CTA & Price row */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                      <div>
                        <span className="text-[11px] text-gray-400 block font-medium">Starting Fare</span>
                        <span className="text-sm font-extrabold text-primary-700">
                          {startingFare ? `₹${startingFare.toLocaleString('en-IN')}` : '₹10/km'}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-bold text-accent-600 group-hover:translate-x-0.5 transition-transform">
                        {matchingSlug ? 'View Route Details' : 'Book Cab'}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </CardElement>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default PopularRoutes
