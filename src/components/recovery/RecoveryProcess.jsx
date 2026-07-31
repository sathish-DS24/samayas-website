import React from 'react'
import { PhoneCall, Navigation, Truck, ShieldCheck, CheckCircle } from 'lucide-react'

const RecoveryProcess = () => {
  const steps = [
    { num: '01', title: 'Call Hotline or Share Location', desc: 'Dial our 24/7 emergency desk or share your live GPS location on WhatsApp.', icon: PhoneCall },
    { num: '02', title: 'Live Location & Dispatch', desc: 'Nearest flatbed / tow truck is immediately dispatched to your breakdown spot.', icon: Navigation },
    { num: '03', title: 'Safe Loading & Securing', desc: 'Certified operators winch and lock your vehicle using zero-damage wheel straps.', icon: Truck },
    { num: '04', title: 'Delivered to Destination', desc: 'Vehicle safely delivered to your home, authorized service center, or garage.', icon: CheckCircle }
  ]

  return (
    <section className="py-12 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Emergency <span className="text-amber-400">Recovery Process</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Streamlined 4-step emergency response flow from first call to safe delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon
            return (
              <div key={idx} className="bg-dark-800/80 border border-dark-700/80 p-6 rounded-2xl shadow-xl relative">
                <span className="text-3xl font-black text-red-500/20 absolute top-4 right-4">{s.num}</span>
                <div className="p-3 rounded-2xl bg-red-500/10 text-red-400 w-fit mb-4">
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

export default RecoveryProcess
