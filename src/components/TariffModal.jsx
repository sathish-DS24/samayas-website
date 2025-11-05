import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Car, Luggage, ChevronDown, ChevronUp } from 'lucide-react'
import { Link } from 'react-scroll'

const TariffModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('one-way')
  const [luggageExpanded, setLuggageExpanded] = useState(false)

  const oneWayData = [
    { type: 'SEDAN', rate: 'Rs.14/KM', bata: 'Rs.400', additional: 'One way Toll' },
    { type: 'ETIOS', rate: 'Rs.14/KM', bata: 'Rs.400', additional: 'One way Toll' },
    { type: 'SUV', rate: 'Rs.19/KM', bata: 'Rs.500', additional: 'One way Toll' },
    { type: 'INNOVA', rate: 'Rs.20/KM', bata: 'Rs.500', additional: 'One way Toll' },
  ]

  const roundTripData = [
    { type: 'SEDAN', rate: 'Rs.13/KM', bata: 'Rs.400', additional: 'Up & Down Toll' },
    { type: 'ETIOS', rate: 'Rs.13/KM', bata: 'Rs.400', additional: 'Up & Down Toll' },
    { type: 'SUV', rate: 'Rs.18/KM', bata: 'Rs.500', additional: 'Up & Down Toll' },
    { type: 'INNOVA', rate: 'Rs.18/KM', bata: 'Rs.500', additional: 'Up & Down Toll' },
  ]

  const currentData = activeTab === 'one-way' ? oneWayData : roundTripData

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-accent-500/20 to-accent-600/20 p-6 border-b border-white/10">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      Taxi Tariff Details
                    </h2>
                    <p className="text-sm sm:text-base text-white/70">
                      Choose the best ride for your journey
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="ml-4 p-2 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 overflow-y-auto min-h-0">
                {/* Tabs */}
                <div className="flex space-x-2 mb-6 bg-gray-800/50 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab('one-way')}
                    className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeTab === 'one-way'
                        ? 'bg-accent-500 text-black shadow-lg'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    One-Way Tariff
                  </button>
                  <button
                    onClick={() => setActiveTab('round-trip')}
                    className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeTab === 'round-trip'
                        ? 'bg-accent-500 text-black shadow-lg'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Round Trip Tariff
                  </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto mb-6">
                  <table className="w-full rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-accent-500">
                        <th className="px-4 py-3 text-left text-black font-bold text-sm sm:text-base">
                          Vehicle Type
                        </th>
                        <th className="px-4 py-3 text-center text-black font-bold text-sm sm:text-base">
                          Rate/KM
                        </th>
                        <th className="px-4 py-3 text-center text-black font-bold text-sm sm:text-base">
                          Driver Bata
                        </th>
                        <th className="px-4 py-3 text-center text-black font-bold text-sm sm:text-base">
                          Additional Charge
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData.map((row, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`${
                            index % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-800/50'
                          } hover:bg-gray-700/50 transition-colors`}
                        >
                          <td className="px-4 py-3 text-white font-medium">
                            <div className="flex items-center space-x-2">
                              <Car className="w-4 h-4 text-accent-500" />
                              <span className="text-sm sm:text-base">{row.type}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-white/90 text-center text-sm sm:text-base">
                            {row.rate}
                          </td>
                          <td className="px-4 py-3 text-white/90 text-center text-sm sm:text-base">
                            {row.bata}
                          </td>
                          <td className="px-4 py-3 text-white/90 text-center text-sm sm:text-base">
                            {row.additional}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Additional Information */}
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-800/30 rounded-lg p-4 border border-white/10">
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                      <span className="font-semibold text-white">Rates given above:</span> Toll fees, Inter-State Permit, and GST charges (if any) are extra.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Drop Trips */}
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-white/10">
                      <h4 className="text-accent-500 font-semibold mb-3 text-base sm:text-lg">
                        Drop Trips:
                      </h4>
                      <ul className="space-y-2 text-white/80 text-sm sm:text-base">
                        <li>• Driver Bata Rs.400</li>
                        <li>• Waiting Charges Rs.100 per hour</li>
                        <li>• Minimum 130 kms/day</li>
                      </ul>
                    </div>

                    {/* Round Trips */}
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-white/10">
                      <h4 className="text-accent-500 font-semibold mb-3 text-base sm:text-lg">
                        Round Trips:
                      </h4>
                      <ul className="space-y-2 text-white/80 text-sm sm:text-base">
                        <li>• Driver Bata Rs.300/day</li>
                        <li>• Minimum 250 kms/day (Bangalore pickup: 300 kms/day)</li>
                        <li>• Hill Station Charges: Rs.300 (Depend upon location the charges may vary)</li>
                        <li>• 1 Day = 1 Calendar Day (12 AM – Next 12 AM)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Luggage Policy */}
                <div className="bg-gray-800/30 rounded-lg border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setLuggageExpanded(!luggageExpanded)}
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-700/30 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Luggage className="w-5 h-5 text-accent-500" />
                      <span className="text-white font-semibold text-sm sm:text-base">
                        Luggage Policy
                      </span>
                    </div>
                    {luggageExpanded ? (
                      <ChevronUp className="w-5 h-5 text-white/70" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white/70" />
                    )}
                  </button>
                  {luggageExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 pt-0 border-t border-white/10"
                    >
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                        We understand luggage comes in all shapes and sizes. Excess charges, if any, will be at driver's discretion.
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 p-6 bg-gray-900/50 border-t border-white/10 mt-auto">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-full transition-colors shadow-lg"
                >
                  Close
                </button>
                <Link
                  to="booking"
                  smooth={true}
                  duration={800}
                  offset={-100}
                  onClick={onClose}
                  className="flex-1 sm:flex-none"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(253, 197, 0, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-accent-500 hover:bg-accent-600 text-black font-semibold rounded-full shadow-xl hover:shadow-yellow-400/40 transition-all duration-300"
                  >
                    Book Now
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default TariffModal

