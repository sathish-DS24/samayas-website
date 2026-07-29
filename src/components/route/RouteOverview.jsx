import React from 'react'
import { Navigation, Clock, ShieldCheck, Car, ChevronRight } from 'lucide-react'

const RouteOverview = ({ content }) => {
  return (
    <section className="py-12 bg-dark-900 border-t border-b border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-dark-800/60 border border-dark-700 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Route Overview & Travel Guide</h2>
              <p className="text-sm text-gray-400">Essential travel details for your {content.from} to {content.to} intercity ride</p>
            </div>
          </div>

          <p className="text-base text-gray-300 leading-relaxed">
            Travel from <strong className="text-amber-400 font-semibold">{content.from} to {content.to}</strong> comfortably with SAMAYAS. Whether you are traveling for business, airport transfers, medical appointments, higher education, or family trips, our one-way taxi service provides safe, hygienic, and affordable travel across Tamil Nadu and South India with zero return fare charges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-dark-900/80 p-4 rounded-xl border border-dark-700/60 flex items-center space-x-4">
              <Navigation className="w-8 h-8 text-amber-400 flex-shrink-0" />
              <div>
                <span className="text-xs text-gray-400 font-medium block">Total Distance</span>
                <span className="text-lg font-bold text-white">{content.distanceDisplay}</span>
              </div>
            </div>

            <div className="bg-dark-900/80 p-4 rounded-xl border border-dark-700/60 flex items-center space-x-4">
              <Clock className="w-8 h-8 text-amber-400 flex-shrink-0" />
              <div>
                <span className="text-xs text-gray-400 font-medium block">Estimated Travel Time</span>
                <span className="text-lg font-bold text-white">{content.durationDisplay}</span>
              </div>
            </div>

            <div className="bg-dark-900/80 p-4 rounded-xl border border-dark-700/60 flex items-center space-x-4">
              <Car className="w-8 h-8 text-amber-400 flex-shrink-0" />
              <div>
                <span className="text-xs text-gray-400 font-medium block">Available Cab Types</span>
                <span className="text-sm font-semibold text-white">Hatchback, Sedan, SUV, Innova, Traveller</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default RouteOverview
