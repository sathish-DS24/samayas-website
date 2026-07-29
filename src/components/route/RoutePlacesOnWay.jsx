import React from 'react'
import { MapPin, Coffee, Fuel, Utensils } from 'lucide-react'

const RoutePlacesOnWay = ({ content }) => {
  return (
    <section className="py-12 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Places & Highway Stops on the Way: <span className="text-amber-400">{content.from} to {content.to}</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Timeline trajectory with recommended rest stops, food plazas & fueling stations
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-amber-500/30 ml-4 sm:ml-8 pl-6 space-y-8">
          {content.placesOnTheWay?.map((place, idx) => {
            const isOrigin = idx === 0
            const isDestination = idx === content.placesOnTheWay.length - 1

            return (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[31px] top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    isOrigin
                      ? 'bg-amber-500 border-amber-400 text-dark-950 font-bold text-xs'
                      : isDestination
                      ? 'bg-green-500 border-green-400 text-dark-950 font-bold text-xs'
                      : 'bg-dark-900 border-amber-500/60 text-amber-400'
                  }`}
                >
                  {idx + 1}
                </div>

                {/* Content Card */}
                <div className="bg-dark-800/80 border border-dark-700 hover:border-amber-500/40 p-5 rounded-2xl transition-all duration-300 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base font-bold text-white flex items-center space-x-2">
                      <span>{place.name}</span>
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {place.type}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {place.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default RoutePlacesOnWay
