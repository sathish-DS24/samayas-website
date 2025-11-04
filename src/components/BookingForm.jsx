import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, User, Phone, Car, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import BookingSummary from './BookingSummary'

const BookingForm = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [tripType, setTripType] = useState('one-way') // 'one-way' or 'round-trip'
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropLocation: '',
    date: '',
    time: '',
    timePeriod: 'AM', // AM or PM
    vehicleType: '',
    name: '',
    phone: ''
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const [calculatedData, setCalculatedData] = useState(null)

  // Tariff rates
  const oneWayRates = {
    SEDAN: 14,
    ETIOS: 14,
    SUV: 19,
    INNOVA: 20
  }

  const roundTripRates = {
    SEDAN: 13,
    ETIOS: 13,
    SUV: 18,
    INNOVA: 18
  }

  // Update vehicle types based on trip type
  const getVehicleTypes = () => {
    return [
      { 
        type: 'SEDAN', 
        icon: Car, 
        rate: tripType === 'one-way' ? oneWayRates.SEDAN : roundTripRates.SEDAN,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&q=80'
      },
      { 
        type: 'ETIOS', 
        icon: Car, 
        rate: tripType === 'one-way' ? oneWayRates.ETIOS : roundTripRates.ETIOS,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&q=80'
      },
      { 
        type: 'SUV', 
        icon: Car, 
        rate: tripType === 'one-way' ? oneWayRates.SUV : roundTripRates.SUV,
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop&q=80'
      },
      { 
        type: 'INNOVA', 
        icon: Car, 
        rate: tripType === 'one-way' ? oneWayRates.INNOVA : roundTripRates.INNOVA,
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&q=80'
      }
    ]
  }

  const vehicleTypes = getVehicleTypes()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleVehicleSelect = (vehicleType) => {
    setFormData(prev => ({
      ...prev,
      vehicleType
    }))
    if (errors.vehicleType) {
      setErrors(prev => ({
        ...prev,
        vehicleType: ''
      }))
    }
  }

  const handleTimePeriodChange = (period) => {
    setFormData(prev => ({
      ...prev,
      timePeriod: period
    }))
  }

  // Calculate distance (mock function - in production, use Google Maps API)
  const calculateDistance = (pickup, drop) => {
    // Mock calculation - replace with actual distance API
    // For demo: random distance between 100-400 km
    return Math.floor(Math.random() * 300) + 100
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Pickup location is required'
    }
    if (!formData.dropLocation.trim()) {
      newErrors.dropLocation = 'Drop location is required'
    }
    if (!formData.date) {
      newErrors.date = 'Date is required'
    }
    if (!formData.time) {
      newErrors.time = 'Time is required'
    }
    if (!formData.vehicleType) {
      newErrors.vehicleType = 'Please select a vehicle type'
    }
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const calculateFare = () => {
    const distance = calculateDistance(formData.pickupLocation, formData.dropLocation)
    const rates = tripType === 'one-way' ? oneWayRates : roundTripRates
    const ratePerKm = rates[formData.vehicleType] || 0

    let baseFare = 0
    let addFare = 0
    let bata = 0
    let finalAmount = 0

    if (tripType === 'one-way') {
      // Drop Trip calculation
      const minKm = 130
      baseFare = minKm * ratePerKm
      if (distance > minKm) {
        addFare = (distance - minKm) * ratePerKm
      }
      bata = 400
      finalAmount = baseFare + addFare + bata
    } else {
      // Round Trip calculation
      const minKm = 250 // 300 for Bangalore pickup
      const days = 1 // Calculate based on date range if needed
      baseFare = minKm * ratePerKm * days
      if (distance > minKm) {
        addFare = (distance - minKm) * ratePerKm
      }
      bata = 300 * days
      finalAmount = baseFare + addFare + bata
    }

    return {
      distance,
      baseFare,
      addFare,
      bata,
      finalAmount,
      minKm: tripType === 'one-way' ? 130 : 250
    }
  }

  const handleGetEstimation = (e) => {
    e.preventDefault()

    if (validateForm()) {
      const calculation = calculateFare()
      setCalculatedData({
        ...formData,
        tripType,
        ...calculation,
        fullTime: `${formData.time} ${formData.timePeriod}`
      })
      setShowSummary(true)
    }
  }

  const handleConfirmBooking = async () => {
    setIsLoading(true)
    
    try {
      const serviceId = 'service_pened45'
      const templateId = 'template_h3j27hg'
      const publicKey = 'FlG_Mpal1SeRMkRqx'

      const templateParams = {
        booking_type: tripType === 'one-way' ? 'One Way' : 'Round Trip',
        vehicle_type: formData.vehicleType,
        customer_name: formData.name,
        customer_phone: formData.phone,
        pickup_location: formData.pickupLocation,
        drop_location: formData.dropLocation,
        booking_date: formData.date,
        booking_time: `${formData.time} ${formData.timePeriod}`,
        base_fare: `₹ ${calculatedData.baseFare}`,
        add_fare: `₹ ${calculatedData.addFare}`,
        bata: `₹ ${calculatedData.bata}`,
        final_amount: `₹ ${calculatedData.finalAmount}`,
        distance: `${calculatedData.distance} km`,
        to_email: 'samayasprem@gmail.com',
        from_name: formData.name,
        from_phone: formData.phone,
        reply_to: formData.phone + '@customer.samayas.com'
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      console.log('Booking confirmation email sent successfully')
      
      // Close summary and reset form
      setShowSummary(false)
      setFormData({
        pickupLocation: '',
        dropLocation: '',
        date: '',
        time: '',
        timePeriod: 'AM',
        vehicleType: '',
        name: '',
        phone: ''
      })
      
      alert('Booking confirmed! Confirmation email has been sent.')
      
    } catch (error) {
      console.error('Error sending booking confirmation:', error)
      alert('Booking submitted! We will contact you shortly.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <section id="booking" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref}>
            {/* Section Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-2 bg-accent-500/20 text-accent-500 rounded-full text-sm font-semibold mb-4"
              >
                Easy Booking
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                Book Your Service
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg text-white/70"
              >
                Fill out the form below and get an instant quote
              </motion.p>
            </div>

            {/* Form Card - Matching Popup Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/10"
            >
              <form onSubmit={handleGetEstimation} className="space-y-6">
                {/* Trip Type Selection */}
                <div className="flex space-x-2 bg-gray-700/50 rounded-lg p-1 mb-6">
                  <button
                    type="button"
                    onClick={() => {
                      setTripType('one-way')
                      setFormData(prev => ({ ...prev, vehicleType: '' })) // Reset vehicle selection
                    }}
                    className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      tripType === 'one-way'
                        ? 'bg-accent-500 text-black shadow-lg'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    One Way
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTripType('round-trip')
                      setFormData(prev => ({ ...prev, vehicleType: '' })) // Reset vehicle selection
                    }}
                    className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      tripType === 'round-trip'
                        ? 'bg-accent-500 text-black shadow-lg'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Round Trip
                  </button>
                </div>

                {/* Location Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Pickup Location */}
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2 text-accent-500" />
                      Pickup Location *
                    </label>
                    <input
                      type="text"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      placeholder="Enter pickup address"
                      className={`w-full px-4 py-3 bg-white rounded-lg border ${
                        errors.pickupLocation ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900`}
                    />
                    {errors.pickupLocation && (
                      <p className="mt-1 text-sm text-red-400">{errors.pickupLocation}</p>
                    )}
                  </div>

                  {/* Drop Location */}
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2 text-accent-500" />
                      Drop Location *
                    </label>
                    <input
                      type="text"
                      name="dropLocation"
                      value={formData.dropLocation}
                      onChange={handleChange}
                      placeholder="Enter drop address"
                      className={`w-full px-4 py-3 bg-white rounded-lg border ${
                        errors.dropLocation ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900`}
                    />
                    {errors.dropLocation && (
                      <p className="mt-1 text-sm text-red-400">{errors.dropLocation}</p>
                    )}
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Date */}
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2 text-accent-500" />
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 bg-white rounded-lg border ${
                        errors.date ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900`}
                    />
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-400">{errors.date}</p>
                    )}
                  </div>

                  {/* Time with AM/PM */}
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      <Clock className="w-4 h-4 inline mr-2 text-accent-500" />
                      Time *
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`flex-1 px-4 py-3 bg-white rounded-lg border ${
                          errors.time ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900`}
                      />
                      <div className="flex gap-1 bg-gray-700/50 rounded-lg p-1">
                        <button
                          type="button"
                          onClick={() => handleTimePeriodChange('AM')}
                          className={`px-4 py-3 rounded-md font-semibold transition-all ${
                            formData.timePeriod === 'AM'
                              ? 'bg-accent-500 text-black'
                              : 'text-white/70 hover:text-white'
                          }`}
                        >
                          AM
                        </button>
                        <button
                          type="button"
                          onClick={() => handleTimePeriodChange('PM')}
                          className={`px-4 py-3 rounded-md font-semibold transition-all ${
                            formData.timePeriod === 'PM'
                              ? 'bg-accent-500 text-black'
                              : 'text-white/70 hover:text-white'
                          }`}
                        >
                          PM
                        </button>
                      </div>
                    </div>
                    {errors.time && (
                      <p className="mt-1 text-sm text-red-400">{errors.time}</p>
                    )}
                  </div>
                </div>

                {/* Vehicle Type Selection */}
                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-4">
                    Select Vehicle Type *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {vehicleTypes.map((vehicle) => {
                      const Icon = vehicle.icon
                      const isSelected = formData.vehicleType === vehicle.type
                      return (
                        <motion.div
                          key={vehicle.type}
                          onClick={() => handleVehicleSelect(vehicle.type)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative cursor-pointer rounded-xl p-4 border-2 transition-all ${
                            isSelected
                              ? 'border-accent-500 bg-accent-500/20 shadow-lg shadow-accent-500/30'
                              : 'border-gray-600 bg-gray-700/30 hover:border-gray-500'
                          }`}
                        >
                          <input
                            type="radio"
                            name="vehicleType"
                            value={vehicle.type}
                            checked={isSelected}
                            onChange={() => handleVehicleSelect(vehicle.type)}
                            className="absolute top-2 right-2 w-5 h-5 accent-accent-500"
                          />
                          <div className="text-center">
                            <div className="mb-3 flex justify-center">
                              {/* Real Car Image */}
                              <div className="relative w-full h-24 flex items-center justify-center overflow-hidden rounded-lg">
                                <img
                                  src={vehicle.image}
                                  alt={vehicle.type}
                                  className={`w-full h-full object-cover rounded-lg transition-all duration-300 ${
                                    isSelected 
                                      ? 'brightness-110 scale-105 ring-2 ring-accent-500' 
                                      : 'brightness-75 hover:brightness-90'
                                  }`}
                                  onError={(e) => {
                                    // Fallback to a placeholder if image fails to load
                                    e.target.src = `https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=300&fit=crop&q=80`
                                  }}
                                />
                              </div>
                            </div>
                            <div className={`text-xs font-semibold mb-1 ${isSelected ? 'text-accent-500' : 'text-white/70'}`}>
                              ₹{vehicle.rate}/km
                            </div>
                            <div className={`text-sm font-bold uppercase ${isSelected ? 'text-white' : 'text-white/80'}`}>
                              {vehicle.type}
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                  {errors.vehicleType && (
                    <p className="mt-2 text-sm text-red-400">{errors.vehicleType}</p>
                  )}
                </div>

                {/* Name and Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      <User className="w-4 h-4 inline mr-2 text-accent-500" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 bg-white rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      <Phone className="w-4 h-4 inline mr-2 text-accent-500" />
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter 10-digit mobile number"
                      className={`w-full px-4 py-3 bg-white rounded-lg border ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                  className="w-full px-8 py-4 bg-accent-500 hover:bg-accent-600 text-black font-semibold rounded-full shadow-xl hover:shadow-yellow-400/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 inline mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'GET ESTIMATION'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Summary Modal */}
      <BookingSummary
        isOpen={showSummary}
        onClose={() => setShowSummary(false)}
        onConfirm={handleConfirmBooking}
        bookingData={calculatedData}
        isLoading={isLoading}
      />
    </>
  )
}

export default BookingForm
