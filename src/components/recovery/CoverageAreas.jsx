import React from 'react'
import { MapPin, Navigation, ShieldCheck } from 'lucide-react'

const CoverageAreas = ({ areas = [], districtName = '' }) => {
  const displayAreas = areas && areas.length > 0 ? areas : [
    `${districtName} Central Railway Station & Bus Terminal`,
    `${districtName} Commercial Streets & Market Areas`,
    `${districtName} Industrial Estate & IT Parks`,
    `${districtName} Airport & Outer Ring Road Bypasses`,
    `${districtName} Key Residential Neighborhoods`
  ]

  return (
    <section className="py-10 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-extrabold text-white">
            15-30 Min Emergency Coverage in <span className="text-amber-400">{districtName || 'Tamil Nadu'}</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Our mobile recovery trucks are strategically stationed near major junctions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayAreas.map((area, idx) => (
            <div key={idx} className="bg-dark-800/80 border border-dark-700/80 p-4 rounded-2xl flex items-center space-x-3 text-xs font-semibold text-gray-200">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{area}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CoverageAreas
