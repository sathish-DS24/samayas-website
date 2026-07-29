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
                    <span className="flex items-center justify-center gap-1">Hatchback</span>
                  </th>
                  <th className="px-5 py-3.5 font-semibold text-center">
                    <span className="flex items-center justify-center gap-1">Sedan</span>
                  </th>
                  <th className="px-5 py-3.5 font-semibold text-center">
                    <span className="flex items-center justify-center gap-1">SUV</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {fareTable.map((row, i) => (
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
                      <span className="font-semibold text-green-700">₹{row.hatchback.toLocaleString('en-IN')}</span>
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <span className="font-semibold text-blue-700">₹{row.sedan.toLocaleString('en-IN')}</span>
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <span className="font-semibold text-purple-700">₹{row.suv.toLocaleString('en-IN')}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 ml-1">
            * Fares are approximate and may vary by exact route, traffic, and toll charges. Inclusive of driver charges.
          </p>
        </motion.div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {fareTable.map((row, i) => (
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
                  <p className="font-bold text-green-700 text-sm">₹{row.hatchback.toLocaleString('en-IN')}</p>
                </div>
                <div className="text-center p-2 bg-blue-50 rounded-lg">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Sedan</p>
                  <p className="font-bold text-blue-700 text-sm">₹{row.sedan.toLocaleString('en-IN')}</p>
                </div>
                <div className="text-center p-2 bg-purple-50 rounded-lg">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">SUV</p>
                  <p className="font-bold text-purple-700 text-sm">₹{row.suv.toLocaleString('en-IN')}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <p className="text-xs text-gray-400 mt-2">
            * Approximate fares. May vary by exact route, traffic, and tolls.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FareTable
