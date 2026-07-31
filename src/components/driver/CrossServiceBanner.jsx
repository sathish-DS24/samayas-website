import React from 'react'
import { Link } from 'react-router-dom'
import { Car, Plane, UserCheck, ArrowRight } from 'lucide-react'

const CrossServiceBanner = ({ currentService = 'driver' }) => {
  return (
    <section className="py-10 bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Need a Taxi <span className="text-amber-400">Instead of a Driver?</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              Don't have your own car? Choose from our fleet of clean, sanitized One-Way Taxis and Airport Cabs with zero return fees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {/* Link 1: One-Way Taxi */}
            <Link
              to="/one-way-taxi"
              className="bg-dark-900/90 border border-dark-700 hover:border-amber-400 p-4 rounded-2xl flex items-center justify-between group transition-all"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">One-Way Taxi</h4>
                  <p className="text-[11px] text-gray-400">Book cab for 80+ routes ($15/km base)</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Link 2: Airport Taxi */}
            <Link
              to="/airport-taxi"
              className="bg-dark-900/90 border border-dark-700 hover:border-amber-400 p-4 rounded-2xl flex items-center justify-between group transition-all"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">Airport Taxi</h4>
                  <p className="text-[11px] text-gray-400">14 South India airports (24/7 flight sync)</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}

export default CrossServiceBanner
