import React from 'react'
import { Building2, Globe, Clock, Shield, CheckCircle, Wifi, DollarSign, Coffee, ShoppingBag } from 'lucide-react'

const FACILITY_ICONS = {
  Transport: Building2,
  Financial: DollarSign,
  Connectivity: Wifi,
  Lounge: Coffee,
  Retail: ShoppingBag
}

const AirportOverview = ({ airport }) => {
  if (!airport) return null

  return (
    <section className="py-12 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Airport Guide & Infrastructure</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            About <span className="text-amber-400">{airport.name}</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Essential terminal details, operating hours, passenger amenities, and 24/7 SAMAYAS doorstep taxi facilities.
          </p>
        </div>

        {/* Airport Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className="bg-dark-800/80 border border-dark-700/80 p-4 rounded-2xl text-center shadow-lg">
            <p className="text-xs text-gray-400 font-medium">IATA Code</p>
            <p className="text-2xl font-black text-amber-400 tracking-wider mt-1">{airport.iata}</p>
          </div>
          <div className="bg-dark-800/80 border border-dark-700/80 p-4 rounded-2xl text-center shadow-lg">
            <p className="text-xs text-gray-400 font-medium">ICAO Code</p>
            <p className="text-2xl font-black text-amber-400 tracking-wider mt-1">{airport.icao}</p>
          </div>
          <div className="bg-dark-800/80 border border-dark-700/80 p-4 rounded-2xl text-center shadow-lg">
            <p className="text-xs text-gray-400 font-medium">Airport Type</p>
            <p className="text-lg font-bold text-white mt-1">{airport.type}</p>
          </div>
          <div className="bg-dark-800/80 border border-dark-700/80 p-4 rounded-2xl text-center shadow-lg">
            <p className="text-xs text-gray-400 font-medium">Operating Hours</p>
            <p className="text-lg font-bold text-green-400 mt-1">{airport.operatingHours}</p>
          </div>
        </div>

        {/* Terminals & Description */}
        <div className="bg-dark-800/80 border border-dark-700/80 rounded-2xl p-6 shadow-xl mb-10">
          <h3 className="text-lg font-bold text-white mb-3">Passenger Overview</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">{airport.description}</p>

          <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">Active Airport Terminals</h4>
          <div className="flex flex-wrap gap-2">
            {airport.terminals.map((t, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-xl bg-dark-900 text-white text-xs font-semibold border border-dark-700 flex items-center">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 mr-2" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Airport Facilities */}
        {airport.airportFacilities && airport.airportFacilities.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-white mb-6 text-center">Airport Passenger Facilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {airport.airportFacilities.map((fac, idx) => {
                const Icon = FACILITY_ICONS[fac.type] || Shield
                return (
                  <div key={idx} className="bg-dark-800/80 border border-dark-700/80 p-5 rounded-2xl shadow-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white">{fac.name}</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed pl-9">{fac.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default AirportOverview
