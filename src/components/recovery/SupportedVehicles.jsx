import React from 'react'
import { Car, Bike, Truck, Zap, ShieldCheck } from 'lucide-react'

const SupportedVehicles = () => {
  const list = [
    { title: 'Hatchbacks & Compacts', desc: 'Swift, i20, Alto, WagonR, Tiago, Kwid', icon: Car },
    { title: 'Sedans & Executive', desc: 'City, Verna, Ciaz, Dzire, Amaze, Virtus', icon: Car },
    { title: 'SUVs & MUVs', desc: 'Creta, Seltos, Fortuner, Innova, Thar, Safari', icon: Car },
    { title: 'Luxury & Premium Cars', desc: 'Mercedes, BMW, Audi, Jaguar, Volvo, Porsche', icon: ShieldCheck },
    { title: 'Electric Vehicles (EVs)', desc: 'Nexon EV, Punch EV, MG ZS, BYD, Tesla', icon: Zap },
    { title: 'Motorcycles & Superbikes', desc: 'Royal Enfield, Duke, Ninja, BMW GS, Scooters', icon: Bike },
    { title: 'LCVs & Mini Trucks', desc: 'Tata Ace, Dost, Bolero Pickup, Eicher LCV', icon: Truck }
  ]

  return (
    <section className="py-12 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Supported <span className="text-amber-400">Vehicle Types</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Our recovery fleet handles everything from commuter 2-wheelers and luxury cars to electric vehicles and commercial mini-trucks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((v, idx) => {
            const Icon = v.icon
            return (
              <div key={idx} className="bg-dark-800/80 border border-dark-700/80 p-5 rounded-2xl shadow-lg">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 w-fit mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{v.title}</h3>
                <p className="text-xs text-gray-400">{v.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SupportedVehicles
