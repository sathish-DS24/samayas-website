import React from 'react'
import { Link } from 'react-router-dom'
import { Truck, Car, Bike, ShieldCheck, Zap, Fuel, Disc, AlertTriangle, Navigation, ChevronRight, Activity } from 'lucide-react'

const SERVICE_CARDS = [
  { slug: 'car-recovery', name: 'Car Recovery & Towing', desc: '24/7 flatbed & wheel-lift towing for hatchbacks, sedans & SUVs.', icon: Car, fee: 'From ₹800' },
  { slug: 'bike-recovery', name: 'Two-Wheeler & Superbike Recovery', desc: 'Scratch-free soft-strap motorcycle towing for scooters & superbikes.', icon: Bike, fee: 'From ₹450' },
  { slug: 'breakdown-assistance', name: 'Roadside Breakdown Assistance', desc: 'On-site mechanic repairs, radiator fixes & emergency roadside help.', icon: Activity, fee: 'From ₹600' },
  { slug: 'accident-recovery', name: 'Accident Recovery & Crane Service', desc: '20-ton crane winching for ditch slips, roll-overs & crash damage.', icon: AlertTriangle, fee: 'From ₹1,500' },
  { slug: 'flatbed-towing', name: 'Hydraulic Flatbed Tow Truck', desc: 'Zero-touch tilt-tray carrier for automatic, luxury & low-clearance cars.', icon: Truck, fee: 'From ₹1,200' },
  { slug: 'highway-recovery', name: 'Expressway & Highway Towing', desc: 'High-speed highway patrol recovery on NH44, NH45, ECR & SH corridors.', icon: Navigation, fee: 'From ₹1,000' },
  { slug: 'battery-jump-start', name: '24/7 Battery Jump Start', desc: 'Surge-protected booster packs for dead car & motorcycle batteries.', icon: Zap, fee: 'From ₹400' },
  { slug: 'fuel-delivery', name: 'Emergency Fuel Delivery', desc: '5-10 litres Petrol or Diesel delivered directly to your breakdown spot.', icon: Fuel, fee: 'From ₹350' },
  { slug: 'flat-tyre-assistance', name: 'Flat Tyre Change & Repair', desc: 'Stepney tyre fitting & tubeless puncture repair on city roads & highways.', icon: Disc, fee: 'From ₹350' },
  { slug: 'ev-recovery', name: 'Electric Vehicle (EV) Recovery', desc: '100% flatbed deck transport to protect EV motors & inverters.', icon: Zap, fee: 'From ₹1,200' },
  { slug: 'commercial-vehicle-recovery', name: 'Commercial & LCV Towing', desc: 'Heavy wheel-lift towing for mini trucks (Ace/Dost), buses & lorries.', icon: Truck, fee: 'From ₹2,000' }
]

const RecoveryServiceGrid = ({ districtName = '' }) => {
  return (
    <section className="py-12 bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5" />
            <span>Emergency Services Directory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Vehicle Recovery Services in <span className="text-amber-400">{districtName || 'Tamil Nadu'}</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Select your specific breakdown issue for instant flatbed towing, battery jump start, fuel delivery, or crane lifting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CARDS.map((srv, idx) => {
            const Icon = srv.icon
            return (
              <Link
                key={idx}
                to={`/vehicle-recovery/${srv.slug}`}
                className="bg-dark-900/90 border border-dark-800 hover:border-red-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-black text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-lg">
                      {srv.fee}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                    {srv.name}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-dark-800 flex items-center justify-between text-xs font-bold text-red-400 group-hover:translate-x-1 transition-transform">
                  <span>Get Emergency Assistance</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default RecoveryServiceGrid
