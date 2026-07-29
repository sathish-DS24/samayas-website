import React, { useState } from 'react'
import { Map, Navigation, Compass, Play } from 'lucide-react'

const RouteMapSection = ({ content }) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(`${content.from} to ${content.to}`)}&t=&z=8&ie=UTF8&iwloc=&output=embed`

  return (
    <section className="py-12 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-white">
            Google Route Map & Highway Details: <span className="text-amber-400">{content.from} to {content.to}</span>
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Visual route map, primary expressways, and highway trajectory
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Performance Optimized Map Preview */}
          <div className="lg:col-span-7 bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden shadow-2xl h-80 sm:h-96 relative flex items-center justify-center">
            {isMapLoaded ? (
              <iframe
                title={`${content.from} to ${content.to} Taxi Route Map`}
                src={mapEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-dark-900 via-dark-850 to-dark-800 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-lg">
                  <Map className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {content.from} → {content.to} Route Map
                </h3>
                <p className="text-xs text-gray-400 max-w-sm mb-6">
                  Click below to load the interactive Google Route Map preview.
                </p>

                <button
                  onClick={() => setIsMapLoaded(true)}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-sm transition-all duration-300 shadow-lg shadow-amber-500/20"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Load Interactive Route Map</span>
                </button>
              </div>
            )}
          </div>

          {/* Right: Highway & Route Info Card */}
          <div className="lg:col-span-5 bg-dark-800/80 border border-dark-700 rounded-2xl p-6 space-y-6">
            <div className="flex items-center space-x-3 pb-3 border-b border-dark-700">
              <Compass className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Primary Expressways & Highways</h3>
            </div>

            <div className="space-y-3">
              {content.highways?.map((hw, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-dark-900/80 p-3 rounded-xl border border-dark-700/60 text-sm">
                  <Navigation className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-gray-200 font-medium">{hw}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="bg-dark-900/80 p-3 rounded-xl border border-dark-700">
                <span className="text-gray-400 block font-medium">Road Distance</span>
                <span className="text-base font-bold text-amber-400">{content.distanceDisplay}</span>
              </div>
              <div className="bg-dark-900/80 p-3 rounded-xl border border-dark-700">
                <span className="text-gray-400 block font-medium">Est. Drive Duration</span>
                <span className="text-base font-bold text-amber-400">{content.durationDisplay}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default RouteMapSection
