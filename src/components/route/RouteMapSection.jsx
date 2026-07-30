import React from 'react'
import { Map, Navigation, Compass, ShieldCheck } from 'lucide-react'

const RouteMapSection = ({ content }) => {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(`${content.from} to ${content.to}`)}&t=&z=8&ie=UTF8&iwloc=&output=embed`

  return (
    <section className="py-12 bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Google Route Map & Highway Details: <span className="text-amber-400">{content.from} to {content.to}</span>
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Visual route map, primary expressways, and highway trajectory
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Live Interactive Google Route Map Embed */}
          <div className="lg:col-span-7 bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden shadow-2xl h-80 sm:h-96 relative">
            <iframe
              title={`${content.from} to ${content.to} Interactive Google Route Map`}
              src={mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>

          {/* Right: Highway & Route Info Card */}
          <div className="lg:col-span-5 bg-dark-900/90 border border-dark-700 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center space-x-3 pb-4 border-b border-dark-700">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Primary Expressways & Highways</h3>
                <p className="text-xs text-gray-400">Main highway corridors for this route</p>
              </div>
            </div>

            {/* Highway Badges */}
            <div className="space-y-3">
              {content.highways?.map((hw, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-dark-800 p-3.5 rounded-xl border border-dark-700/80">
                  <Compass className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-sm font-semibold text-white">{hw}</span>
                </div>
              ))}
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-dark-800 p-3.5 rounded-xl border border-dark-700/80">
                <span className="text-[11px] text-gray-400 font-medium uppercase block">Road Distance</span>
                <span className="text-lg font-bold text-amber-400">{content.distanceDisplay}</span>
              </div>

              <div className="bg-dark-800 p-3.5 rounded-xl border border-dark-700/80">
                <span className="text-[11px] text-gray-400 font-medium uppercase block">Est. Drive Duration</span>
                <span className="text-lg font-bold text-amber-400">{content.durationDisplay}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default RouteMapSection
