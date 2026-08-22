import React from 'react'
import { motion } from 'framer-motion'
import { IndianRupee, Car, ArrowRight } from 'lucide-react'

const FareTable = ({ districtName, fareTable }) => {
  if (!fareTable || fareTable.length === 0) return null

  const formatTime = (hours) => {
    const h = Math.floor(hours)
    const m = Math.round((hours - h) * 60)
    if (h === 0) return `${m} min`
    if (m === 0) return `${h} hr`
    return `${h}h ${m}m`
  }

  return (
    <section className="py-14 lg:py-16" aria-labelledby="fare-table-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <IndianRupee className="w-5 h-5 text-green-600" />
            </div>
            <h2 id="fare-table-heading" className="text-2xl sm:text-3xl font-bold text-primary-900">
              Taxi Fare from {districtName}
            </h2>
          </div>
          <p className="text-gray-600 mb-8 ml-[52px]">
            Approximate one-way taxi fares from {districtName}. Prices may vary based on exact pickup/drop locations.
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary-900 text-white text-sm">
                  <th className="px-5 py-3.5 font-semibold">Route</th>
                  <th className="px-5 py-3.5 font-semibold text-center">Distance</th>
                  <th className="px-5 py-3.5 font-semibold text-center">Travel Time</th>
                  <th className="px-5 py-3.5 font-semibold text-center">
                    <span className="flex items-center justify-center gap-1">Hatchback (Inc. Bata)</span>
                  </th>
                  <th className="px-5 py-3.5 font-semibold text-center">
                    <span className="flex items-center justify-center gap-1">Sedan (Inc. Bata)</span>
                  </th>
                  <th className="px-5 py-3.5 font-semibold text-center">
                    <span className="flex items-center justify-center gap-1">SUV (Inc. Bata)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {fareTable.map((row, i) => {
                  const billableKm = Math.max(row.distanceKm || 130, 130)
                  const hatchbackTotal = billableKm * 15 + 400
                  const sedanTotal = billableKm * 15 + 400
                  const suvTotal = billableKm * 20 + 400

                  return (
                    <tr
                      key={row.to}
                      className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-accent-500/5 transition-colors`}
                    >
                      <td className="px-5 py-3.5">
                        <span className="font-medium text-gray-800">{districtName} → {row.to}</span>
                      </td>
                      <td className="px-5 py-3.5 text-center text-gray-600">{row.distanceKm} km</td>
                      <td className="px-5 py-3.5 text-center text-gray-600">{formatTime(row.timeHours)}</td>
                      <td className="px-5 py-3.5 text-center">
                        <span className="font-semibold text-green-700 block">₹{hatchbackTotal.toLocaleString('en-IN')}</span>
                        <span className="text-[10px] text-gray-400 font-normal">₹{billableKm * 15} + ₹400</span>
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        <span className="font-semibold text-blue-700 block">₹{sedanTotal.toLocaleString('en-IN')}</span>
                        <span className="text-[10px] text-gray-400 font-normal">₹{billableKm * 15} + ₹400</span>
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        <span className="font-semibold text-purple-700 block">₹{suvTotal.toLocaleString('en-IN')}</span>
                        <span className="text-[10px] text-gray-400 font-normal">₹{billableKm * 20} + ₹400</span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 ml-1 font-medium">
            * Fares shown above are <strong>TOTAL FARES (Base Fare + ₹400 Driver Bata Included)</strong>. Standard minimum 130 km billing applies for trips under 130 km. Tolls & parking extra where applicable.
          </p>
        </motion.div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {fareTable.map((row, i) => {
            const billableKm = Math.max(row.distanceKm || 130, 130)
            const hatchbackTotal = billableKm * 15 + 400
            const sedanTotal = billableKm * 15 + 400
            const suvTotal = billableKm * 20 + 400

            return (
              <motion.div
                key={row.to}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800 flex items-center gap-1.5">
                    {districtName}
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    {row.to}
                  </h3>
                </div>
                <div className="flex gap-4 text-xs text-gray-500">
                  <span>{row.distanceKm} km</span>
                  <span>{formatTime(row.timeHours)}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Hatch</p>
                    <p className="font-bold text-green-700 text-sm">₹{hatchbackTotal.toLocaleString('en-IN')}</p>
                    <p className="text-[9px] text-gray-400">Inc. Bata</p>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Sedan</p>
                    <p className="font-bold text-blue-700 text-sm">₹{sedanTotal.toLocaleString('en-IN')}</p>
                    <p className="text-[9px] text-gray-400">Inc. Bata</p>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded-lg">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">SUV</p>
                    <p className="font-bold text-purple-700 text-sm">₹{suvTotal.toLocaleString('en-IN')}</p>
                    <p className="text-[9px] text-gray-400">Inc. Bata</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
          <p className="text-xs text-gray-500 mt-2 font-medium">
            * Fares include ₹400 Driver Bata. Standard 130 km minimum billing applies for trips under 130 km.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FareTable
