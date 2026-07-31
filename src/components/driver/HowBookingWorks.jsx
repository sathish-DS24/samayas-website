import React from 'react'
import { Calendar, UserCheck, Car, CheckCircle } from 'lucide-react'

const HowBookingWorks = () => {
  const steps = [
    { num: '01', title: 'Enter Pickup Location & Date', desc: 'Select your pickup doorstep, trip duration, vehicle transmission (Manual/Auto), and date.', icon: Calendar },
    { num: '02', title: 'Instant Driver Assignment', desc: 'Our automated system matches the nearest verified acting driver suited for your vehicle.', icon: UserCheck },
    { num: '03', title: 'Driver Doorstep Arrival', desc: 'Driver arrives at your location in 30-45 minutes in clean uniform with government ID.', icon: Car },
    { num: '04', title: 'Relax & Enjoy Your Journey', desc: 'Sit back in the comfort of your own car while your chauffeur handles traffic & parking.', icon: CheckCircle }
  ]

  return (
    <section className="py-12 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            How to Book an <span className="text-amber-400">Acting Driver</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Simple 4-step process to get a verified driver at your doorstep in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon
            return (
              <div key={idx} className="bg-dark-800/80 border border-dark-700/80 p-6 rounded-2xl shadow-xl relative">
                <span className="text-3xl font-black text-amber-500/20 absolute top-4 right-4">{s.num}</span>
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 w-fit mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default HowBookingWorks
