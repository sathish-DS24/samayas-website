import React from 'react'
import { motion } from 'framer-motion'
import { Car, Users, CheckCircle, ShieldCheck } from 'lucide-react'

const TourPricingOverview = ({ pricingList = [], startingPrice, recommendedVehicle, onBookClick }) => {
  return (
    <section className="py-12 bg-dark-900 border-t border-b border-dark-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Transparent & All-Inclusive Pricing</span>
          <h2 className="text-2xl sm:text-4xl font-black mt-1">Tour Cab Fare Overview</h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-2">
            Includes Private AC Cab, Dedicated Driver Allowances, Fuel, Interstate Taxes & Toll Fees. No Hidden Charges!
          </p>
        </div>

        {pricingList && pricingList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingList.map((item, idx) => (
              <motion.div
                key={item.vehicleType}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-dark-950 border rounded-3xl p-6 shadow-xl relative flex flex-col justify-between ${
                  idx === 1 ? 'border-amber-500/60 ring-2 ring-amber-500/30' : 'border-dark-800'
                }`}
              >
                {idx === 1 && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-dark-950 text-[10px] font-black uppercase tracking-wider rounded-full shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                      <Car className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white">{item.vehicleType}</h3>
                      <p className="text-xs text-gray-400 flex items-center mt-0.5">
                        <Users className="w-3.5 h-3.5 mr-1 text-amber-400" /> Capacity: {item.seatingCapacity}
                      </p>
                    </div>
                  </div>

                  <div className="py-3 border-t border-b border-dark-800">
                    <span className="text-xs text-gray-400 block">Total Package Fare</span>
                    <span className="text-3xl font-black text-amber-400">₹{item.estimatedPrice.toLocaleString('en-IN')}</span>
                  </div>

                  <ul className="space-y-2 text-xs text-gray-300">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Clean AC Private Taxi</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Experienced Hill/Outstation Driver</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Fuel, Tolls & Driver Allowances</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Doorstep Pickup & Drop</li>
                  </ul>
                </div>

                <div className="mt-6 pt-4">
                  <a href="#booking" onClick={onBookClick}>
                    <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-dark-950 font-extrabold text-xs rounded-xl shadow-lg transition cursor-pointer">
                      Select {item.vehicleType}
                    </button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center bg-dark-950 p-6 rounded-2xl border border-dark-800 max-w-xl mx-auto">
            <span className="text-xs text-gray-400">Packages starting from</span>
            <p className="text-4xl font-black text-amber-400 my-1">₹{startingPrice ? startingPrice.toLocaleString('en-IN') : '4,500'}</p>
            <p className="text-xs text-gray-300">Contact us for custom vehicle pricing (Sedan, SUV, Innova Crysta, Tempo Traveller)</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default TourPricingOverview
