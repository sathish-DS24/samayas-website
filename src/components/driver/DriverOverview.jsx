import React from 'react'
import { UserCheck, ShieldCheck, HeartHandshake, CheckCircle2, Car, Clock, Shield } from 'lucide-react'

const DriverOverview = ({ districtName = '', description = '' }) => {
  const useCases = [
    { title: 'Senior Citizens & Hospital Trips', desc: 'Patient arm-support assistance for elderly parents attending medical checkups.' },
    { title: 'Outstation Road Trips', desc: 'Relax in your own car with family while our highway expert handles long distances.' },
    { title: 'Late Night Parties & Events', desc: 'Designated 100% alcohol-free driver for safe midnight returns.' },
    { title: 'Busy City Shopping & Parking', desc: 'Avoid stress of finding parking spots in crowded commercial markets.' },
    { title: 'Weddings & Celebrations', desc: 'Uniformed chauffeurs for bride/groom luxury vehicles & family shuttles.' },
    { title: 'NRIs Booking for Relatives', desc: 'Pre-book verified drivers for family members living in India.' }
  ]

  return (
    <section className="py-12 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Why Hire an Acting Driver?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Your Personal Chauffeur in <span className="text-amber-400">{districtName || 'Tamil Nadu'}</span>
          </h2>
          <p className="text-gray-300 text-sm mt-3 leading-relaxed">
            {description || `Experience comfortable, hassle-free journeys in your own car with SAMAYAS background-verified, professional acting drivers available 24 hours a day.`}
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, idx) => (
            <div key={idx} className="bg-dark-800/80 border border-dark-700/80 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{uc.title}</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed pl-10">{uc.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default DriverOverview
