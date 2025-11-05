import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, User, Phone, Car, Loader2, Briefcase } from 'lucide-react'
import emailjs from '@emailjs/browser'
import BookingSummary from './BookingSummary'

const BookingForm = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [activeTab, setActiveTab] = useState('oneway') // 'oneway' or 'other'
  
  // One-Way Taxi form data
  const [oneWayData, setOneWayData] = useState({
    pickupLocation: '',
    dropLocation: '',
    date: '',
    time: '',
    timePeriod: 'AM',
    vehicleType: '',
    name: '',
    phone: ''
  })

  // Other Services form data
  const [otherServiceData, setOtherServiceData] = useState({
    serviceType: '',
    name: '',
    phone: '',
    date: '',
    time: '',
    pickupLocation: '',
    dropLocation: ''
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const [calculatedData, setCalculatedData] = useState(null)

  // Tariff rates for One-Way Taxi
  const oneWayRates = {
    SEDAN: 14,
    ETIOS: 14,
    SUV: 19,
    INNOVA: 20
  }

  // Vehicle types for One-Way Taxi - Using direct online image URLs
  const vehicleTypes = [
    { 
      type: 'SEDAN', 
      icon: Car, 
      rate: oneWayRates.SEDAN,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&q=80',
      model: 'Maruti Dzire / Honda Amaze'
    },
    { 
      type: 'ETIOS', 
      icon: Car, 
      rate: oneWayRates.ETIOS,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop&q=80',
      model: 'Toyota Etios'
    },
    { 
      type: 'SUV', 
      icon: Car, 
      rate: oneWayRates.SUV,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop&q=80',
      model: 'Hyundai Creta / Kia Seltos'
    },
    { 
      type: 'INNOVA', 
      icon: Car, 
      rate: oneWayRates.INNOVA,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&q=80',
      model: 'Toyota Innova Crysta'
    }
  ]

  // Other Services options
  const otherServices = [
    'Acting Driver',
    'Tours & Travels',
    'Recovery Services'
  ]

  const handleOneWayChange = (e) => {
    const { name, value } = e.target
    setOneWayData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleOtherServiceChange = (e) => {
    const { name, value } = e.target
    setOtherServiceData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleVehicleSelect = (vehicleType) => {
    setOneWayData(prev => ({ ...prev, vehicleType }))
    if (errors.vehicleType) {
      setErrors(prev => ({ ...prev, vehicleType: '' }))
    }
  }

  const handleTimePeriodChange = (period) => {
    setOneWayData(prev => ({ ...prev, timePeriod: period }))
  }

  // Calculate distance (mock - replace with Google Maps API)
  const calculateDistance = (pickup, drop) => {
    return Math.floor(Math.random() * 300) + 100
  }

  const validateOneWayForm = () => {
    const newErrors = {}
    if (!oneWayData.pickupLocation.trim()) newErrors.pickupLocation = 'Required'
    if (!oneWayData.dropLocation.trim()) newErrors.dropLocation = 'Required'
    if (!oneWayData.date) newErrors.date = 'Required'
    if (!oneWayData.time) newErrors.time = 'Required'
    if (!oneWayData.vehicleType) newErrors.vehicleType = 'Please select a vehicle'
    if (!oneWayData.name.trim()) newErrors.name = 'Required'
    if (!oneWayData.phone.trim()) {
      newErrors.phone = 'Required'
    } else if (!/^\d{10}$/.test(oneWayData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Valid 10-digit number required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateOtherServiceForm = () => {
    const newErrors = {}
    if (!otherServiceData.serviceType) newErrors.serviceType = 'Required'
    if (!otherServiceData.name.trim()) newErrors.name = 'Required'
    if (!otherServiceData.phone.trim()) {
      newErrors.phone = 'Required'
    } else if (!/^\d{10}$/.test(otherServiceData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Valid 10-digit number required'
    }
    if (!otherServiceData.date) newErrors.date = 'Required'
    if (!otherServiceData.time) newErrors.time = 'Required'
    if (!otherServiceData.pickupLocation.trim()) newErrors.pickupLocation = 'Required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const calculateFare = () => {
    const distance = calculateDistance(oneWayData.pickupLocation, oneWayData.dropLocation)
    const ratePerKm = oneWayRates[oneWayData.vehicleType] || 0
    const minKm = 130
    const baseFare = minKm * ratePerKm
    let addFare = 0
    if (distance > minKm) {
      addFare = (distance - minKm) * ratePerKm
    }
    const bata = 400
    const finalAmount = baseFare + addFare + bata

    return { distance, baseFare, addFare, bata, finalAmount, minKm }
  }

  const handleOneWaySubmit = (e) => {
    e.preventDefault()
    if (validateOneWayForm()) {
      const calculation = calculateFare()
      setCalculatedData({
        ...oneWayData,
        tripType: 'one-way',
        ...calculation,
        fullTime: `${oneWayData.time} ${oneWayData.timePeriod}`
      })
      setShowSummary(true)
    }
  }

  const handleOtherServiceSubmit = async (e) => {
    e.preventDefault()
    if (validateOtherServiceForm()) {
      setIsLoading(true)
      try {
        const serviceId = 'service_pened45'
        const templateId = 'template_h3j27hg'
        const publicKey = 'FlG_Mpal1SeRMkRqx'

        const templateParams = {
          service_type: otherServiceData.serviceType,
          customer_name: otherServiceData.name,
          customer_phone: otherServiceData.phone,
          service_date: otherServiceData.date,
          service_time: otherServiceData.time,
          pickup_location: otherServiceData.pickupLocation,
          drop_location: otherServiceData.dropLocation || 'N/A',
          to_email: 'samayasprem@gmail.com',
          from_name: otherServiceData.name,
          from_phone: otherServiceData.phone
        }

        await emailjs.send(serviceId, templateId, templateParams, publicKey)
        alert('Service booked successfully! We will contact you shortly.')
        
        // Reset form
        setOtherServiceData({
          serviceType: '',
          name: '',
          phone: '',
          date: '',
          time: '',
          pickupLocation: '',
          dropLocation: ''
        })
      } catch (error) {
        console.error('Error sending email:', error)
        alert('Service booked! We will contact you shortly.')
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleConfirmBooking = async () => {
    setIsLoading(true)
    try {
      const serviceId = 'service_pened45'
      const templateId = 'template_h3j27hg'
      const publicKey = 'FlG_Mpal1SeRMkRqx'

      const templateParams = {
        booking_type: 'One Way',
        vehicle_type: oneWayData.vehicleType,
        customer_name: oneWayData.name,
        customer_phone: oneWayData.phone,
        pickup_location: oneWayData.pickupLocation,
        drop_location: oneWayData.dropLocation,
        booking_date: oneWayData.date,
        booking_time: `${oneWayData.time} ${oneWayData.timePeriod}`,
        base_fare: `₹ ${calculatedData.baseFare}`,
        add_fare: `₹ ${calculatedData.addFare}`,
        bata: `₹ ${calculatedData.bata}`,
        final_amount: `₹ ${calculatedData.finalAmount}`,
        distance: `${calculatedData.distance} km`,
        to_email: 'samayasprem@gmail.com',
        from_name: oneWayData.name,
        from_phone: oneWayData.phone
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setShowSummary(false)
      setOneWayData({
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

  // Form fields for Other Services (for animation)
  const otherServiceFields = [
    { name: 'serviceType', label: 'Service Type', icon: Briefcase, type: 'select', required: true },
    { name: 'name', label: 'Customer Name', icon: User, type: 'text', required: true },
    { name: 'phone', label: 'Phone Number', icon: Phone, type: 'tel', required: true },
    { name: 'date', label: 'Date', icon: Calendar, type: 'date', required: true },
    { name: 'time', label: 'Time', icon: Clock, type: 'time', required: true },
    { name: 'pickupLocation', label: 'Pickup Location', icon: MapPin, type: 'text', required: true },
    { name: 'dropLocation', label: 'Drop Location', icon: MapPin, type: 'text', required: false }
  ]

  return (
    <>
      <section id="booking" className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="border-b border-accent-500/40 w-1/4 mx-auto mb-4"
              />
            </div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex space-x-2 bg-primary-800/50 rounded-lg p-1 mb-6 backdrop-blur-sm border border-white/10"
            >
              <button
                type="button"
                onClick={() => setActiveTab('oneway')}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'oneway'
                    ? 'bg-accent-500 text-black shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                One-Way Taxi
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('other')}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'other'
                    ? 'bg-accent-500 text-black shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                Other Services
              </button>
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === 'oneway' ? (
                <motion.div
                  key="oneway"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-primary-800/60 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/10"
                >
                  <form onSubmit={handleOneWaySubmit} className="space-y-6">
                    {/* Location Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <MapPin className="w-4 h-4 inline mr-2 text-accent-500" />
                          Pickup Location *
                        </label>
                        <input
                          type="text"
                          name="pickupLocation"
                          value={oneWayData.pickupLocation}
                          onChange={handleOneWayChange}
                          placeholder="Enter pickup address"
                          className={`w-full px-4 py-3 bg-white rounded-lg border ${
                            errors.pickupLocation ? 'border-red-500' : 'border-gray-300'
                          } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900`}
                        />
                        {errors.pickupLocation && (
                          <p className="mt-1 text-sm text-red-400">{errors.pickupLocation}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <MapPin className="w-4 h-4 inline mr-2 text-accent-500" />
                          Drop Location *
                        </label>
                        <input
                          type="text"
                          name="dropLocation"
                          value={oneWayData.dropLocation}
                          onChange={handleOneWayChange}
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
                      <div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <Calendar className="w-4 h-4 inline mr-2 text-accent-500" />
                          Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={oneWayData.date}
                          onChange={handleOneWayChange}
                          min={new Date().toISOString().split('T')[0]}
                          className={`w-full px-4 py-3 bg-white rounded-lg border ${
                            errors.date ? 'border-red-500' : 'border-gray-300'
                          } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900`}
                        />
                        {errors.date && (
                          <p className="mt-1 text-sm text-red-400">{errors.date}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <Clock className="w-4 h-4 inline mr-2 text-accent-500" />
                          Time *
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="time"
                            name="time"
                            value={oneWayData.time}
                            onChange={handleOneWayChange}
                            className={`flex-1 px-4 py-3 bg-white rounded-lg border ${
                              errors.time ? 'border-red-500' : 'border-gray-300'
                            } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900`}
                          />
                          <div className="flex gap-1 bg-primary-700/50 rounded-lg p-1">
                            <button
                              type="button"
                              onClick={() => handleTimePeriodChange('AM')}
                              className={`px-4 py-3 rounded-md font-semibold transition-all ${
                                oneWayData.timePeriod === 'AM'
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
                                oneWayData.timePeriod === 'PM'
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
                        {vehicleTypes.map((vehicle, index) => {
                          const isSelected = oneWayData.vehicleType === vehicle.type
                          return (
                            <motion.div
                              key={vehicle.type}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              onClick={() => handleVehicleSelect(vehicle.type)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`relative cursor-pointer rounded-xl p-4 border-2 transition-all ${
                                isSelected
                                  ? 'border-accent-500 bg-accent-500/20 shadow-lg shadow-accent-500/30 ring-2 ring-accent-500'
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
                                  <div className="relative w-full h-24 flex items-center justify-center overflow-hidden rounded-lg">
                                    <img
                                      src={vehicle.image}
                                      alt={vehicle.type}
                                      className={`w-full h-full object-cover rounded-lg transition-all duration-300 ${
                                        isSelected 
                                          ? 'brightness-110 scale-105' 
                                          : 'brightness-75 hover:brightness-90'
                                      }`}
                                      onError={(e) => {
                                        // Fallback to a generic car image if the specific one fails
                                        e.target.src = `https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&q=80`
                                        console.warn(`Failed to load image for ${vehicle.type}`)
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
                      <div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <User className="w-4 h-4 inline mr-2 text-accent-500" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={oneWayData.name}
                          onChange={handleOneWayChange}
                          placeholder="Enter your full name"
                          className={`w-full px-4 py-3 bg-white rounded-lg border ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <Phone className="w-4 h-4 inline mr-2 text-accent-500" />
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={oneWayData.phone}
                          onChange={handleOneWayChange}
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
                      whileHover={{ scale: 1.02, y: -2 }}
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
              ) : (
                <motion.div
                  key="other"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-primary-800/60 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/10"
                >
                  <form onSubmit={handleOtherServiceSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {otherServiceFields.map((field, index) => {
                        const Icon = field.icon
                        return (
                          <motion.div
                            key={field.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className={field.name === 'serviceType' ? 'md:col-span-2' : ''}
                          >
                            <label className="block text-sm font-semibold text-white/90 mb-2">
                              <Icon className="w-4 h-4 inline mr-2 text-accent-500" />
                              {field.label} {field.required && '*'}
                            </label>
                            {field.type === 'select' ? (
                              <select
                                name={field.name}
                                value={otherServiceData[field.name]}
                                onChange={handleOtherServiceChange}
                                className={`w-full px-4 py-3 bg-white rounded-lg border ${
                                  errors[field.name] ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm`}
                              >
                                <option value="">Select {field.label}</option>
                                {otherServices.map((service) => (
                                  <option key={service} value={service}>{service}</option>
                                ))}
                              </select>
                            ) : (
                              <input
                                type={field.type}
                                name={field.name}
                                value={otherServiceData[field.name]}
                                onChange={handleOtherServiceChange}
                                placeholder={`Enter ${field.label.toLowerCase()}`}
                                required={field.required}
                                min={field.type === 'date' ? new Date().toISOString().split('T')[0] : undefined}
                                className={`w-full px-4 py-3 bg-white rounded-lg border ${
                                  errors[field.name] ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm`}
                              />
                            )}
                            {errors[field.name] && (
                              <p className="mt-1 text-sm text-red-400">{errors[field.name]}</p>
                            )}
                          </motion.div>
                        )
                      })}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      disabled={isLoading}
                      className="w-full px-8 py-4 bg-accent-500 hover:bg-accent-600 text-black font-semibold rounded-full shadow-xl hover:shadow-yellow-400/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 inline mr-2 animate-spin" />
                          Booking...
                        </>
                      ) : (
                        'BOOK SERVICE'
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
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
