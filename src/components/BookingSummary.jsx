import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const BookingSummary = ({ isOpen, onClose, onConfirm, bookingData, isLoading }) => {
  if (!bookingData) return null

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit' 
    }).replace(/\//g, '-')
  }

  const formatCurrency = (amount) => {
    return `₹ ${amount.toLocaleString('en-IN')}`
  }


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
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl border border-gray-200 my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-primary-900 p-4 rounded-t-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    {bookingData.tripType === 'one-way' ? (
                      <button
                        type="button"
                        className="px-4 py-2 rounded-lg font-semibold text-sm bg-white text-primary-900"
                      >
                        One Way
                      </button>
                    ) : bookingData.tripType === 'acting-driver' ? (
                      <button
                        type="button"
                        className="px-4 py-2 rounded-lg font-semibold text-sm bg-accent-500 text-black"
                      >
                        Acting Driver
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="px-4 py-2 rounded-lg font-semibold text-sm bg-accent-500 text-black"
                      >
                        Round Trip
                      </button>
                    )}
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Disclaimer */}
                <div className="mt-3 pt-3 border-t border-white/20">
                  <p className="text-xs sm:text-sm text-white/80 italic">
                    <span className="text-accent-400 font-semibold">Disclaimer:</span> {bookingData.tripType === 'acting-driver' 
                      ? 'This is only an estimated base fare. The final price will be calculated at the end of the trip based on the total hours the driver spent with you and any extra km driven.' 
                      : bookingData.tripType === 'recovery_services'
                      ? bookingData.extraNote
                      : 'The price shown is an estimated price. The final price may vary based on your specific pickup and drop locations.'}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Booking Summary */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase">
                    Booking Summary
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">Booking Type:</span>
                      <span className="text-gray-800 font-semibold">
                        {bookingData.tripType === 'acting-driver' ? 'Acting Driver' : bookingData.tripType === 'one-way' ? 'One Way' : bookingData.tripType === 'recovery_services' ? 'Recovery Services' : 'Round Trip'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">Car Type:</span>
                      <span className="text-gray-800 font-semibold lowercase">
                        {bookingData.vehicleType.toLowerCase()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">Pickup:</span>
                      <span className="text-gray-800 font-semibold text-right max-w-[60%]">
                        {bookingData.pickupLocation}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">Drop:</span>
                      <span className="text-gray-800 font-semibold text-right max-w-[60%]">
                        {bookingData.dropLocation}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">Pickup Date & Time:</span>
                      <span className="text-gray-800 font-semibold">
                        {formatDate(bookingData.date)} {bookingData.fullTime}
                      </span>
                    </div>
                    {bookingData.tripType === 'round-trip' && bookingData.returnDate && (
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600 font-medium">Return Date:</span>
                        <span className="text-gray-800 font-semibold">
                          {formatDate(bookingData.returnDate)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Payment Details */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase">
                    Payment Details
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    {bookingData.tripType === 'recovery_services' ? (
                      <>
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-600 font-medium">
                            Minimum Charge (Up to 30km):
                          </span>
                          <span className="text-gray-800 font-semibold">
                            {formatCurrency(bookingData.vehicleType === 'Flatbed' ? 2500 : 2000)}
                          </span>
                        </div>
                        {bookingData.actualDistance > 30 && (
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="text-gray-600 font-medium">
                              Extra Distance Charge ({bookingData.actualDistance - 30}km):
                            </span>
                            <span className="text-gray-800 font-semibold">
                              {formatCurrency(bookingData.baseFare - (bookingData.vehicleType === 'Flatbed' ? 2500 : 2000))}
                            </span>
                          </div>
                        )}
                        {bookingData.isNight && (
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="text-gray-600 font-medium">
                              Night Surcharge (20%):
                            </span>
                            <span className="text-gray-800 font-semibold text-red-500">
                              + {formatCurrency(bookingData.nightSurcharge)}
                            </span>
                          </div>
                        )}
                      </>
                    ) : bookingData.tripType === 'one-way' ? (
                      <>
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-600 font-medium">Route Distance (Google Maps):</span>
                          <span className="text-gray-800 font-semibold">{bookingData.distance} km</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-600 font-medium">
                            Base Fare ({bookingData.isMinKmApplied ? 'Min 130 km Limit' : `${bookingData.billableDistance || bookingData.distance} km`}):
                          </span>
                          <span className="text-gray-800 font-semibold">
                            {formatCurrency(bookingData.baseFare)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-600 font-medium">Driver Bata:</span>
                          <span className="text-gray-800 font-semibold">
                            {formatCurrency(bookingData.bata)}
                          </span>
                        </div>
                        {bookingData.isMinKmApplied && (
                          <div className="mt-2 p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 font-medium">
                            ℹ️ Standard minimum billing limit of 130 km applies for one-way trips under 130 km.
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-600 font-medium">
                            Base Fare ({bookingData.actualDistance || bookingData.minKm}km):
                          </span>
                          <span className="text-gray-800 font-semibold">
                            {formatCurrency(bookingData.baseFare)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-600 font-medium">Driver Bata:</span>
                          <span className="text-gray-800 font-semibold">
                            {formatCurrency(bookingData.bata)}
                          </span>
                        </div>
                      </>
                    )}
                    
                    {bookingData.estExtraHours > 0 && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-200 bg-yellow-50/50 px-2 rounded -mx-2">
                        <span className="text-gray-600 font-medium">
                          Est. Extra Driving ({bookingData.estExtraHours} hrs):
                        </span>
                        <span className="text-gray-800 font-semibold">
                          {formatCurrency(bookingData.estExtraFare)}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-center py-2 pt-3 border-t-2 border-gray-300">
                      <span className="text-gray-800 font-bold text-lg">
                        {bookingData.tripType === 'recovery_services' ? 'Approximate Estimated Total (₹):' : bookingData.tripType === 'acting-driver' ? 'Estimated Total (₹):' : 'Final Amount (₹):'}
                      </span>
                      <span className="text-gray-900 font-bold text-xl">
                        {formatCurrency(bookingData.finalAmount)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Note */}
                <div className="bg-yellow-50 border-l-4 border-accent-500 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-accent-600">Note:</span>{' '}
                    {bookingData.extraNote ? bookingData.extraNote : 'Taxi fare is calculated based on the distance and type of vehicle selected.'}
                  </p>
                </div>
              </div>

              {/* Footer Button */}
              <div className="p-6 bg-gray-50 rounded-b-2xl border-t border-gray-200">
                <motion.button
                  onClick={onConfirm}
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="w-full px-8 py-4 bg-accent-500 hover:bg-accent-600 text-black font-bold rounded-full shadow-xl hover:shadow-yellow-400/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase text-lg"
                >
                  {isLoading ? 'Sending Confirmation...' : 'CONFIRM BOOKING'}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default BookingSummary

