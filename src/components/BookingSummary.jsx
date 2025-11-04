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

  const getDays = () => {
    // For round trip, calculate days based on date range
    // For now, default to 1 day
    return 1
  }

  const days = bookingData.tripType === 'round-trip' ? getDays() : 1

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
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-primary-900 p-4 rounded-t-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-lg font-semibold text-sm ${
                        bookingData.tripType === 'one-way'
                          ? 'bg-white text-primary-900'
                          : 'bg-transparent text-white border border-white/30'
                      }`}
                    >
                      One Way
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-lg font-semibold text-sm ${
                        bookingData.tripType === 'round-trip'
                          ? 'bg-accent-500 text-black'
                          : 'bg-transparent text-white border border-white/30'
                      }`}
                    >
                      Round Trip
                    </button>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
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
                        {bookingData.tripType === 'one-way' ? 'One Way' : 'Round Trip'}
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
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 font-medium">Booked At:</span>
                      <span className="text-gray-800 font-semibold">
                        {formatDate(bookingData.date)} {bookingData.fullTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Payment Details */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase">
                    Payment Details
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    {bookingData.tripType === 'one-way' ? (
                      <>
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-600 font-medium">
                            Base Fare ({bookingData.minKm}km):
                          </span>
                          <span className="text-gray-800 font-semibold">
                            {formatCurrency(bookingData.baseFare)}
                          </span>
                        </div>
                        {bookingData.addFare > 0 && (
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="text-gray-600 font-medium">
                              Add Fare ({bookingData.distance - bookingData.minKm}km):
                            </span>
                            <span className="text-gray-800 font-semibold">
                              {formatCurrency(bookingData.addFare)}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-600 font-medium">Beta (upto 400km):</span>
                          <span className="text-gray-800 font-semibold">
                            {formatCurrency(bookingData.bata)}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-600 font-medium">
                            Base Fare ({bookingData.minKm}km x {days} days):
                          </span>
                          <span className="text-gray-800 font-semibold">
                            {formatCurrency(bookingData.baseFare)}
                          </span>
                        </div>
                        {bookingData.addFare > 0 && (
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="text-gray-600 font-medium">
                              Add Fare ({bookingData.distance - bookingData.minKm}km):
                            </span>
                            <span className="text-gray-800 font-semibold">
                              {formatCurrency(bookingData.addFare)}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-600 font-medium">Beta (Round Trip):</span>
                          <span className="text-gray-800 font-semibold">
                            {formatCurrency(bookingData.bata)}
                          </span>
                        </div>
                      </>
                    )}
                    <div className="flex justify-between items-center py-2 pt-3 border-t-2 border-gray-300">
                      <span className="text-gray-800 font-bold text-lg">Final Amount (₹):</span>
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
                    Taxi fare is calculated based on the distance and type of vehicle selected.
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

