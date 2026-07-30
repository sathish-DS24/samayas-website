import React from 'react'
import { Link } from 'react-router-dom'
import { Navigation, Clock, ChevronRight, MapPin, Tag } from 'lucide-react'

const AirportTransfersList = ({ routes = [], airportName = 'Airport' }) => {
  if (!routes || routes.length === 0) return null

  return (
    <section className="py-12 bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>Phase 5 Airport Connectivity Network</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Popular Transfers from <span className="text-amber-400">{airportName}</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Direct one-way intercity airport cabs to major cities, hill resorts, temples, and surrounding districts.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((r, idx) => (
            <Link
              key={idx}
              to={`/airport-taxi/${r.slug}`}
              className="bg-dark-800/80 border border-dark-700/80 hover:border-amber-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
                    {r.type || 'Intercity'} Transfer
                  </span>
                  <span className="text-xs font-bold text-green-400">
                    From ₹{r.startingFare ? r.startingFare.toLocaleString('en-IN') : '1,950'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                  {airportName.replace('International Airport', 'Airport')} → {r.destination}
                </h3>

                <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Navigation className="w-3.5 h-3.5 mr-1 text-amber-400" />
                    {r.distance}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-amber-400" />
                    {r.travelTime}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-dark-700/60 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                <span>Book One-Way Transfer</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AirportTransfersList
