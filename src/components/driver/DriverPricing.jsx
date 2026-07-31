import React from 'react'
import { DollarSign, Clock, Moon, ShieldCheck, CheckCircle } from 'lucide-react'

const DriverPricing = ({ pricing = null, districtName = '' }) => {
  const p = pricing || {
    hourly: '₹350 (First 2 Hours)',
    halfDay: '₹650 (5 Hours / Local)',
    fullDay: '₹1,100 (10 Hours / Local)',
    outstationBata: '₹900 / Day (12 Hours Window)',
    nightCharges: '₹150 (10 PM to 6 AM)',
    waitingCharges: '₹80 / additional hour'
  }

  return (
    <section className="py-12 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Transparent Pricing Structure</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Acting Driver Rates in <span className="text-amber-400">{districtName || 'Tamil Nadu'}</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            No hidden costs. Clear, upfront tariffs for local hourly packages and long-distance outstation travel in your own car.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1: Hourly */}
          <div className="bg-dark-800/80 border border-dark-700/80 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold">Local Package</span>
                <Clock className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Hourly Package</h3>
              <p className="text-3xl font-black text-amber-400 mb-4">{p.hourly.split('(')[0]}</p>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Ideal for local shopping, hospital visits, railway station drops & short city errands. Minimum 2 hours.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-gray-300 border-t border-dark-700 pt-4">
              <li className="flex items-center"><CheckCircle className="w-3.5 h-3.5 text-green-400 mr-2" /> Minimum 2 Hours (₹350)</li>
              <li className="flex items-center"><CheckCircle className="w-3.5 h-3.5 text-green-400 mr-2" /> Overtime: ₹90/extra hour</li>
            </ul>
          </div>

          {/* Card 2: Full Day */}
          <div className="bg-dark-800/80 border border-amber-500/50 p-6 rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-400 text-black text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl">
              Most Popular
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold">Full Day Local</span>
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Full Day (10 Hrs)</h3>
              <p className="text-3xl font-black text-amber-400 mb-4">{p.fullDay.split('(')[0]}</p>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                10 hours complete day availability for business meetings, multiple errands, and city mobility.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-gray-300 border-t border-dark-700 pt-4">
              <li className="flex items-center"><CheckCircle className="w-3.5 h-3.5 text-green-400 mr-2" /> 10 Hours Duty Window</li>
              <li className="flex items-center"><CheckCircle className="w-3.5 h-3.5 text-green-400 mr-2" /> Half-Day (5 Hrs): ₹650</li>
            </ul>
          </div>

          {/* Card 3: Outstation */}
          <div className="bg-dark-800/80 border border-dark-700/80 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold">Highway Trip</span>
                <Moon className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Outstation Daily Bata</h3>
              <p className="text-3xl font-black text-amber-400 mb-4">{p.outstationBata.split('/')[0]}</p>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Fixed daily allowance for intercity highway road trips, temple tours, and weekend vacations.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-gray-300 border-t border-dark-700 pt-4">
              <li className="flex items-center"><CheckCircle className="w-3.5 h-3.5 text-green-400 mr-2" /> 12 Hours Driving Window</li>
              <li className="flex items-center"><CheckCircle className="w-3.5 h-3.5 text-green-400 mr-2" /> Night Allowance: ₹150 - ₹200</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}

export default DriverPricing
