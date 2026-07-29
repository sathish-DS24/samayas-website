import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { getRouteUrl } from '../../data/routes'

const NearbyRoutesSection = ({ content }) => {
  const routes = content.nearbyRoutes || []

  if (routes.length === 0) return null

  return (
    <section className="py-12 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-white">
            Popular Related One-Way Taxi Routes
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Explore other high-demand intercity outstation routes in Tamil Nadu
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {routes.map((r, idx) => (
            <Link
              key={idx}
              to={getRouteUrl(r.slug)}
              className="bg-dark-800/80 border border-dark-700 hover:border-amber-500/50 p-5 rounded-2xl transition-all duration-300 group hover:-translate-y-1 shadow-lg flex items-center justify-between"
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
              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default NearbyRoutesSection
