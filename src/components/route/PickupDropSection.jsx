import React from 'react'
import { MapPin, Navigation } from 'lucide-react'

const PickupDropSection = ({ content }) => {
  return (
    <section className="py-12 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Section 6: Pickup Locations */}
          <div className="bg-dark-800/80 border border-dark-700 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex items-center space-x-3 pb-4 border-b border-dark-700">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Pickup Locations in {content.from}</h3>
                <p className="text-xs text-gray-400">Doorstep pickups across all residential & commercial zones</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {content.pickupLocations?.map((loc, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-dark-900/70 p-2.5 rounded-xl border border-dark-700/50 text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="font-medium truncate">{loc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7: Drop Locations */}
          <div className="bg-dark-800/80 border border-dark-700 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex items-center space-x-3 pb-4 border-b border-dark-700">
              <div className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Drop Locations in {content.to}</h3>
                <p className="text-xs text-gray-400">Direct drops to homes, offices, hotels & airports</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {content.dropLocations?.map((loc, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-dark-900/70 p-2.5 rounded-xl border border-dark-700/50 text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  <span className="font-medium truncate">{loc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default PickupDropSection
