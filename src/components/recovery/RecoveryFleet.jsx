import React from 'react'
import { Truck, ShieldCheck, Award } from 'lucide-react'

const RecoveryFleet = () => {
  const fleet = [
    { title: 'Hydraulic Flatbed Truck', desc: '100% zero-ground contact carrying tray. Best for automatic, EV & luxury cars.', badge: 'Zero Touch' },
    { title: 'Wheel-Lift Tow Truck', desc: 'Under-lift boom system for quick city hatchback & sedan breakdown towing.', badge: 'Fast City Tow' },
    { title: 'Heavy Duty Crane & Winch', desc: '20-ton hydraulic winch for ditch slips, embankments & accident roll-overs.', badge: 'Heavy Lifting' },
    { title: 'Ramp Motorcycle Carrier', desc: 'Low-angle ramp carrier with soft straps for scratch-free 2-wheeler towing.', badge: 'Scratch Free' }
  ]

  return (
    <section className="py-12 bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Our Recovery <span className="text-amber-400">Fleet Equipment</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Equipped with state-of-the-art hydraulic flatbeds, heavy winches, and low-incline motorcycle ramps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((f, idx) => (
            <div key={idx} className="bg-dark-900/90 border border-dark-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[11px] font-bold">
                  {f.badge}
                </span>
                <h3 className="text-base font-bold text-white mt-3 mb-2">{f.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecoveryFleet
