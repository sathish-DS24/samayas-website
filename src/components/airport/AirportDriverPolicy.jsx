import React from 'react'
import { Clock, ShieldCheck, UserCheck, Plane, Award } from 'lucide-react'

const AirportDriverPolicy = ({ airportName = 'Airport' }) => {
  return (
    <section className="py-12 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Driver Standards & Passenger Protection</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Airport Pickup & <span className="text-amber-400">Driver Waiting Policy</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Transparent protocols designed to make your arrival at {airportName} smooth, dignified, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Policy 1: Flight Delay */}
          <div className="bg-dark-800/80 border border-dark-700/80 p-6 rounded-2xl shadow-xl">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 w-fit mb-4">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Automated Flight Delay Sync</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              We monitor flight arrivals in real-time. If your flight is delayed by weather, air traffic, or customs, your driver’s arrival time automatically resynchronizes without cancellation.
            </p>
            <span className="inline-flex items-center text-[11px] font-semibold text-green-400 bg-green-500/10 px-2.5 py-1 rounded-lg border border-green-500/20">
              Zero Delay Fee Guarantee
            </span>
          </div>

          {/* Policy 2: Meet & Greet */}
          <div className="bg-dark-800/80 border border-dark-700/80 p-6 rounded-2xl shadow-xl">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 w-fit mb-4">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Concourse Meet & Greet</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Your assigned driver waits at the designated arrivals concourse holding a legible nameboard displaying your primary passenger name for effortless identification.
            </p>
            <span className="inline-flex items-center text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
              Luggage Assistance Included
            </span>
          </div>

          {/* Policy 3: Waiting Allowance */}
          <div className="bg-dark-800/80 border border-dark-700/80 p-6 rounded-2xl shadow-xl">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 w-fit mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">60-Min Complimentary Waiting</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Enjoy 60 complimentary waiting minutes post flight landing to complete baggage retrieval, immigration clearance, and custom checks at your own pace.
            </p>
            <span className="inline-flex items-center text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
              60 Mins Free Window
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AirportDriverPolicy
