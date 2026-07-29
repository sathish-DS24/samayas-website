import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Repeat, Building2 } from 'lucide-react'
import { getRouteUrl } from '../../data/routes'
import { getDistrictUrl } from '../../data/districts'

const NearbyRoutesSection = ({ content }) => {
  const routes = content.nearbyRoutes || []
  const returnRouteSlug = content.returnRouteSlug || (content.to && content.from ? `${content.to.toLowerCase()}-to-${content.from.toLowerCase()}` : null)

  return (
    <section className="py-12 bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 1. Return Route Card (Bidirectional Link) */}
        {returnRouteSlug && (
          <div className="bg-gradient-to-r from-amber-500/10 via-dark-800 to-dark-850 border border-amber-500/30 rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                <Repeat className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">Return Journey Option</span>
                <h3 className="text-lg font-bold text-white">
                  Returning? Book a one-way cab from <span className="text-amber-400">{content.to} → {content.from}</span>
                </h3>
                <p className="text-xs text-gray-400">Same transparent per-km billing with zero return fare charges</p>
              </div>
            </div>
            <Link
              to={getRouteUrl(returnRouteSlug)}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-sm transition-all duration-300 shadow-lg shadow-amber-500/20 whitespace-nowrap"
            >
              <span>View {content.to} → {content.from} Taxi</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}

        {/* 2. District Hub Back-Links */}
        <div className="bg-dark-800/60 border border-dark-700 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Building2 className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">Explore Full District Travel Guides</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.fromSlug && (
              <Link
                to={getDistrictUrl(content.fromSlug)}
                className="bg-dark-900/80 hover:bg-dark-900 border border-dark-700/80 hover:border-amber-500/40 p-4 rounded-xl flex items-center justify-between text-sm transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="font-semibold text-gray-200 group-hover:text-amber-400">{content.from} District Travel Guide</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
              </Link>
            )}
            {content.toSlug && (
              <Link
                to={getDistrictUrl(content.toSlug)}
                className="bg-dark-900/80 hover:bg-dark-900 border border-dark-700/80 hover:border-amber-500/40 p-4 rounded-xl flex items-center justify-between text-sm transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="font-semibold text-gray-200 group-hover:text-amber-400">{content.to} District Travel Guide</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
              </Link>
            )}
          </div>
        </div>

        {/* 3. Nearby Related Routes Grid */}
        {routes.length > 0 && (
          <div>
            <div className="text-center max-w-3xl mx-auto mb-6">
              <h2 className="text-xl font-bold text-white">
                Popular Related Intercity Routes
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Explore other high-demand outstation taxi routes in Tamil Nadu
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {routes.map((r, idx) => (
                <Link
                  key={idx}
                  to={getRouteUrl(r.slug)}
                  className="bg-dark-800/80 border border-dark-700 hover:border-amber-500/50 p-4 rounded-xl transition-all duration-300 group hover:-translate-y-1 shadow-lg flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                        {r.name}
                      </h3>
                    </div>
                    <div className="text-xs text-gray-400 flex items-center space-x-3">
                      <span>{r.distance}</span>
                      <span>•</span>
                      <span className="text-green-400 font-semibold">From {r.fare}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default NearbyRoutesSection
