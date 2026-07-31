import React from 'react'
import { Navigation, ShieldAlert, Clock } from 'lucide-react'

const HighwayCoverage = ({ highways = [], districtName = '' }) => {
  const displayHighways = highways && highways.length > 0 ? highways : [
    'NH44 (Kanyakumari - Madurai - Salem - Hosur - BLR Corridor)',
    'NH45 GST Road (Chennai - Villupuram - Trichy - Dindigul Highway)',
    'NH83 (Coimbatore - Tiruppur - Karur - Trichy - Thanjavur Highway)',
    'ECR & OMR Coastal Highways (Chennai - Pondicherry - Cuddalore - Nagapattinam)'
  ]

  return (
    <section className="py-10 bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-red-950/30 via-dark-900 to-dark-900 border border-red-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-red-400 font-bold text-xs uppercase tracking-wider mb-1">
                <Navigation className="w-4 h-4" />
                <span>Highway Emergency Patrol</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                National & State Highway Coverage <span className="text-amber-400">({districtName || 'Tamil Nadu'})</span>
              </h3>
            </div>
            <span className="px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-xs w-fit">
              Toll Gate Patrol Units
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayHighways.map((hw, idx) => (
              <div key={idx} className="bg-dark-800/90 border border-dark-700 p-4 rounded-2xl flex items-center space-x-3 text-xs text-gray-200">
                <ShieldAlert className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="font-semibold">{hw}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default HighwayCoverage
