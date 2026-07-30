import React from 'react'
import { Hotel, Utensils, Train, Bus, MapPin } from 'lucide-react'

const NearbyAmenities = ({ airport }) => {
  if (!airport) return null

  const hasHotels = airport.nearbyHotels && airport.nearbyHotels.length > 0
  const hasRestaurants = airport.nearbyRestaurants && airport.nearbyRestaurants.length > 0
  const hasRailways = airport.nearbyRailwayStations && airport.nearbyRailwayStations.length > 0
  const hasBuses = airport.nearbyBusStand && airport.nearbyBusStand.length > 0

  if (!hasHotels && !hasRestaurants && !hasRailways && !hasBuses) return null

  return (
    <section className="py-12 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Nearby Transit & <span className="text-amber-400">Accommodations</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Top hotels, dining spots, railway stations, and bus terminals surrounding {airport.shortName || airport.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Nearby Hotels */}
          {hasHotels && (
            <div className="bg-dark-800/80 border border-dark-700/80 p-5 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm mb-4 border-b border-dark-700 pb-2">
                <Hotel className="w-4 h-4" />
                <span>Nearby Hotels</span>
              </div>
              <ul className="space-y-3">
                {airport.nearbyHotels.map((item, idx) => (
                  <li key={idx} className="text-xs">
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-gray-400 text-[11px]">{item.category} • {item.distance}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Nearby Restaurants */}
          {hasRestaurants && (
            <div className="bg-dark-800/80 border border-dark-700/80 p-5 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm mb-4 border-b border-dark-700 pb-2">
                <Utensils className="w-4 h-4" />
                <span>Nearby Restaurants</span>
              </div>
              <ul className="space-y-3">
                {airport.nearbyRestaurants.map((item, idx) => (
                  <li key={idx} className="text-xs">
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-gray-400 text-[11px]">{item.category} • {item.distance}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Nearby Railway Stations */}
          {hasRailways && (
            <div className="bg-dark-800/80 border border-dark-700/80 p-5 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm mb-4 border-b border-dark-700 pb-2">
                <Train className="w-4 h-4" />
                <span>Railway Stations</span>
              </div>
              <ul className="space-y-3">
                {airport.nearbyRailwayStations.map((item, idx) => (
                  <li key={idx} className="text-xs">
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-gray-400 text-[11px]">{item.category} • {item.distance}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Nearby Bus Stand */}
          {hasBuses && (
            <div className="bg-dark-800/80 border border-dark-700/80 p-5 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm mb-4 border-b border-dark-700 pb-2">
                <Bus className="w-4 h-4" />
                <span>Bus Terminals</span>
              </div>
              <ul className="space-y-3">
                {airport.nearbyBusStand.map((item, idx) => (
                  <li key={idx} className="text-xs">
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-gray-400 text-[11px]">{item.category} • {item.distance}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default NearbyAmenities
