import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, User, Phone, Car, Loader2, Briefcase } from 'lucide-react'
import emailjs from '@emailjs/browser'
import BookingSummary from './BookingSummary'

const BookingForm = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // EmailJS Configuration
  const serviceId = 'service_pened45'
  const publicKey = 'FlG_Mpal1SeRMkRqx'
  
  // Template IDs for different forms
  const ONE_WAY_TAXI_TEMPLATE_ID = 'template_z0rx3mx' // One-Way Taxi Booking template
  const ROUND_TRIP_TEMPLATE_ID = 'template_z0rx3mx' // Round Trip Booking template (can be same or different)
  const OTHER_SERVICES_TEMPLATE_ID = 'template_h3j27hg' // Other Services Booking template

  const [activeTab, setActiveTab] = useState('oneway') // 'oneway', 'roundtrip', or 'other'
  
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

  // Round Trip form data
  const [roundTripData, setRoundTripData] = useState({
    pickupLocation: '',
    dropLocation: '',
    date: '',
    returnDate: '',
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
    timePeriod: 'AM',
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

  // Tariff rates for Round Trip
  const roundTripRates = {
    SEDAN: 13,
    ETIOS: 13,
    SUV: 18,
    INNOVA: 18
  }

  // Bata (Driver allowance) rates based on vehicle type
  // SEDAN/ETIOS: Rs.400, SUV/INNOVA: Rs.500 (same for both one-way and round trip)
  const bataRates = {
    SEDAN: 400,
    ETIOS: 400,
    SUV: 500,
    INNOVA: 500
  }

  // Get current rates based on active tab
  const getCurrentRates = () => {
    return activeTab === 'roundtrip' ? roundTripRates : oneWayRates
  }

  // Vehicle types - Using local images from public folder
  // Rates will be dynamically updated based on active tab
  const getVehicleTypes = () => {
    const currentRates = getCurrentRates()
    return [
      { 
        type: 'SEDAN', 
        icon: Car, 
        rate: currentRates.SEDAN,
        image: '/images/cars/sedan.png',
        model: 'Maruti Dzire / Honda Amaze'
      },
      { 
        type: 'ETIOS', 
        icon: Car, 
        rate: currentRates.ETIOS,
        image: '/images/cars/etios.png',
        model: 'Toyota Etios'
      },
      { 
        type: 'SUV', 
        icon: Car, 
        rate: currentRates.SUV,
        image: '/images/cars/SUV.png',
        model: 'Hyundai Creta / Kia Seltos'
      },
      { 
        type: 'INNOVA', 
        icon: Car, 
        rate: currentRates.INNOVA,
        image: '/images/cars/innova.png',
        model: 'Toyota Innova Crysta'
      }
    ]
  }

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

  const handleRoundTripChange = (e) => {
    const { name, value } = e.target
    setRoundTripData(prev => ({ ...prev, [name]: value }))
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
    if (activeTab === 'roundtrip') {
      setRoundTripData(prev => ({ ...prev, vehicleType }))
    } else {
      setOneWayData(prev => ({ ...prev, vehicleType }))
    }
    if (errors.vehicleType) {
      setErrors(prev => ({ ...prev, vehicleType: '' }))
    }
  }

  const handleTimePeriodChange = (period) => {
    if (activeTab === 'roundtrip') {
      setRoundTripData(prev => ({ ...prev, timePeriod: period }))
    } else {
      setOneWayData(prev => ({ ...prev, timePeriod: period }))
    }
  }

  const handleOtherServiceTimePeriodChange = (period) => {
    setOtherServiceData(prev => ({ ...prev, timePeriod: period }))
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

  const validateRoundTripForm = () => {
    const newErrors = {}
    if (!roundTripData.pickupLocation.trim()) newErrors.pickupLocation = 'Required'
    if (!roundTripData.dropLocation.trim()) newErrors.dropLocation = 'Required'
    if (!roundTripData.date) newErrors.date = 'Required'
    if (!roundTripData.returnDate) newErrors.returnDate = 'Required'
    if (roundTripData.returnDate && roundTripData.date && roundTripData.returnDate < roundTripData.date) {
      newErrors.returnDate = 'Return date must be after pickup date'
    }
    if (!roundTripData.time) newErrors.time = 'Required'
    if (!roundTripData.vehicleType) newErrors.vehicleType = 'Please select a vehicle'
    if (!roundTripData.name.trim()) newErrors.name = 'Required'
    if (!roundTripData.phone.trim()) {
      newErrors.phone = 'Required'
    } else if (!/^\d{10}$/.test(roundTripData.phone.replace(/\s/g, ''))) {
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

  const calculateFare = (tripType = 'one-way') => {
    const data = tripType === 'round-trip' ? roundTripData : oneWayData
    const distance = calculateDistance(data.pickupLocation, data.dropLocation)
    const rates = tripType === 'round-trip' ? roundTripRates : oneWayRates
    const ratePerKm = rates[data.vehicleType] || 0
    
    // Get correct bata based on vehicle type
    const bata = bataRates[data.vehicleType] || 400
    
    if (tripType === 'round-trip') {
      // Round trip calculation - only base fare, no add fare
      const minKm = 250 // Minimum 250 kms/day for round trip
      const baseFare = minKm * ratePerKm
      const finalAmount = baseFare + bata
      return { distance, baseFare, bata, finalAmount, minKm }
    } else {
      // One-way calculation - only base fare, no add fare
      const minKm = 130
      const baseFare = minKm * ratePerKm
      const finalAmount = baseFare + bata
      return { distance, baseFare, bata, finalAmount, minKm }
    }
  }

  const handleOneWaySubmit = (e) => {
    e.preventDefault()
    if (validateOneWayForm()) {
      const calculation = calculateFare('one-way')
      setCalculatedData({
        ...oneWayData,
        tripType: 'one-way',
        ...calculation,
        fullTime: `${oneWayData.time} ${oneWayData.timePeriod}`,
        // Ensure all fields are included for email
        date: oneWayData.date,
        time: oneWayData.time,
        timePeriod: oneWayData.timePeriod,
        name: oneWayData.name,
        phone: oneWayData.phone,
        vehicleType: oneWayData.vehicleType,
        pickupLocation: oneWayData.pickupLocation,
        dropLocation: oneWayData.dropLocation
      })
      setShowSummary(true)
    }
  }

  const handleRoundTripSubmit = (e) => {
    e.preventDefault()
    if (validateRoundTripForm()) {
      const calculation = calculateFare('round-trip')
      setCalculatedData({
        ...roundTripData,
        tripType: 'round-trip',
        ...calculation,
        fullTime: `${roundTripData.time} ${roundTripData.timePeriod}`,
        // Ensure all fields are included for email
        date: roundTripData.date,
        returnDate: roundTripData.returnDate,
        time: roundTripData.time,
        timePeriod: roundTripData.timePeriod,
        name: roundTripData.name,
        phone: roundTripData.phone,
        vehicleType: roundTripData.vehicleType,
        pickupLocation: roundTripData.pickupLocation,
        dropLocation: roundTripData.dropLocation
      })
      setShowSummary(true)
    }
  }

  const handleOtherServiceSubmit = async (e) => {
    e.preventDefault()
    if (validateOtherServiceForm()) {
      setIsLoading(true)
      try {
        // Use Other Services template
        const templateId = OTHER_SERVICES_TEMPLATE_ID

        // Format date from YYYY-MM-DD to DD-MM-YYYY
        const formatDate = (dateString) => {
          if (!dateString) return ''
          const date = new Date(dateString)
          const day = String(date.getDate()).padStart(2, '0')
          const month = String(date.getMonth() + 1).padStart(2, '0')
          const year = date.getFullYear()
          return `${day}-${month}-${year}`
        }

        // Format time with AM/PM
        const formattedTime = `${otherServiceData.time} ${otherServiceData.timePeriod || 'AM'}`

        const templateParams = {
          // Email subject
          subject: `Other Service Booking - ${otherServiceData.serviceType}`,
          
          // Service information
          service_type: otherServiceData.serviceType,
          booking_type: otherServiceData.serviceType,
          
          // Customer information
          customer_name: otherServiceData.name,
          customer_phone: otherServiceData.phone,
          
          // Date and time
          service_date: formatDate(otherServiceData.date),
          service_time: formattedTime,
          booking_date: formatDate(otherServiceData.date),
          booking_time: formattedTime,
          date: formatDate(otherServiceData.date),
          time: formattedTime,
          
          // Location information
          pickup_location: otherServiceData.pickupLocation,
          drop_location: otherServiceData.dropLocation || 'N/A',
          
          // Email configuration
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
          timePeriod: 'AM',
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
      const isRoundTrip = calculatedData?.tripType === 'round-trip'
      // Use appropriate template based on trip type
      const templateId = isRoundTrip ? ROUND_TRIP_TEMPLATE_ID : ONE_WAY_TAXI_TEMPLATE_ID

      // Get the actual date value - prioritize calculatedData since it has all the form data
      const bookingDate = calculatedData?.date || (isRoundTrip ? roundTripData.date : oneWayData.date) || ''
      const returnDate = calculatedData?.returnDate || roundTripData.returnDate || ''
      
      // Format date from YYYY-MM-DD to DD-MM-YYYY
      const formatDate = (dateString) => {
        if (!dateString || dateString === '') return ''
        try {
          const date = new Date(dateString + 'T00:00:00') // Add time to avoid timezone issues
          if (isNaN(date.getTime())) return dateString // Return original if invalid
          const day = String(date.getDate()).padStart(2, '0')
          const month = String(date.getMonth() + 1).padStart(2, '0')
          const year = date.getFullYear()
          return `${day}-${month}-${year}`
        } catch (error) {
          console.error('Date formatting error:', error)
          return dateString
        }
      }

      // Format time with AM/PM - get from calculatedData or form data
      const bookingTime = calculatedData?.time || (isRoundTrip ? roundTripData.time : oneWayData.time) || ''
      const bookingTimePeriod = calculatedData?.timePeriod || (isRoundTrip ? roundTripData.timePeriod : oneWayData.timePeriod) || 'AM'
      const formattedTime = bookingTime ? `${bookingTime} ${bookingTimePeriod}` : ''

      // Format the dates
      const formattedDate = formatDate(bookingDate)
      const formattedReturnDate = returnDate ? formatDate(returnDate) : ''

      const templateParams = {
        // Email subject
        subject: isRoundTrip ? 'Round Trip Taxi Booking Request' : 'One-Way Taxi Booking Request',
        
        // Service and booking type
        service_type: isRoundTrip ? 'Round Trip Taxi' : 'One-Way Taxi',
        booking_type: isRoundTrip ? 'Round Trip Taxi' : 'One-Way Taxi',
        trip_type: isRoundTrip ? 'Round Trip' : 'One-Way',
        
        // Customer information
        customer_name: calculatedData?.name || (isRoundTrip ? roundTripData.name : oneWayData.name) || '',
        customer_phone: calculatedData?.phone || (isRoundTrip ? roundTripData.phone : oneWayData.phone) || '',
        
        // Vehicle information
        vehicle_type: calculatedData?.vehicleType || (isRoundTrip ? roundTripData.vehicleType : oneWayData.vehicleType) || '',
        car_type: calculatedData?.vehicleType || (isRoundTrip ? roundTripData.vehicleType : oneWayData.vehicleType) || '',
        
        // Location information
        pickup_location: calculatedData?.pickupLocation || (isRoundTrip ? roundTripData.pickupLocation : oneWayData.pickupLocation) || '',
        drop_location: calculatedData?.dropLocation || (isRoundTrip ? roundTripData.dropLocation : oneWayData.dropLocation) || '',
        
        // Date and time (using multiple formats for template compatibility)
        booking_date: formattedDate,
        service_date: formattedDate,
        date: formattedDate,
        return_date: formattedReturnDate,
        
        booking_time: formattedTime,
        service_time: formattedTime,
        time: formattedTime,
        
        // Pricing information
        base_fare: `₹${calculatedData?.baseFare || 0}`,
        bata: `₹${calculatedData?.bata || 0}`,
        final_amount: `₹${calculatedData?.finalAmount || 0}`,
        total_amount: `₹${calculatedData?.finalAmount || 0}`,
        distance: `${calculatedData?.distance || 0} km`,
        
        // Email configuration
        to_email: 'samayasprem@gmail.com',
        from_name: calculatedData?.name || (isRoundTrip ? roundTripData.name : oneWayData.name) || '',
        from_phone: calculatedData?.phone || (isRoundTrip ? roundTripData.phone : oneWayData.phone) || ''
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setShowSummary(false)
      
      // Reset appropriate form
      if (isRoundTrip) {
        setRoundTripData({
          pickupLocation: '',
          dropLocation: '',
          date: '',
          returnDate: '',
          time: '',
          timePeriod: 'AM',
          vehicleType: '',
          name: '',
          phone: ''
        })
      } else {
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
      }
      
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
    { name: 'time', label: 'Time', icon: Clock, type: 'time', required: true, hasTimePeriod: true },
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
              
              {/* Disclaimer */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-sm sm:text-base text-white/80 italic max-w-2xl mx-auto mt-4"
              >
                <span className="text-accent-400 font-semibold">Disclaimer:</span> The price shown is an estimated price. The final price may vary based on your specific pickup and drop locations.
              </motion.p>
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
                onClick={() => {
                  setActiveTab('oneway')
                  setErrors({})
                }}
                className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeTab === 'oneway'
                    ? 'bg-accent-500 text-black shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                One-Way Taxi
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('roundtrip')
                  setErrors({})
                }}
                className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeTab === 'roundtrip'
                    ? 'bg-accent-500 text-black shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                Round Trip
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('other')
                  setErrors({})
                }}
                className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
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
                        {getVehicleTypes().map((vehicle, index) => {
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
                                        // Fallback if local image fails to load
                                        console.error(`Failed to load image for ${vehicle.type}: ${vehicle.image}`)
                                        // Keep the broken image handler to prevent infinite loop
                                        e.target.style.display = 'none'
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
              ) : activeTab === 'roundtrip' ? (
                <motion.div
                  key="roundtrip"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-primary-800/60 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/10"
                >
                  <form onSubmit={handleRoundTripSubmit} className="space-y-6">
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
                          value={roundTripData.pickupLocation}
                          onChange={handleRoundTripChange}
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
                          value={roundTripData.dropLocation}
                          onChange={handleRoundTripChange}
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

                    {/* Date and Return Date */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <Calendar className="w-4 h-4 inline mr-2 text-accent-500" />
                          Pickup Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={roundTripData.date}
                          onChange={handleRoundTripChange}
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
                          <Calendar className="w-4 h-4 inline mr-2 text-accent-500" />
                          Return Date *
                        </label>
                        <input
                          type="date"
                          name="returnDate"
                          value={roundTripData.returnDate}
                          onChange={handleRoundTripChange}
                          min={roundTripData.date || new Date().toISOString().split('T')[0]}
                          className={`w-full px-4 py-3 bg-white rounded-lg border ${
                            errors.returnDate ? 'border-red-500' : 'border-gray-300'
                          } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900`}
                        />
                        {errors.returnDate && (
                          <p className="mt-1 text-sm text-red-400">{errors.returnDate}</p>
                        )}
                      </div>
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">
                        <Clock className="w-4 h-4 inline mr-2 text-accent-500" />
                        Time *
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="time"
                          name="time"
                          value={roundTripData.time}
                          onChange={handleRoundTripChange}
                          className={`flex-1 px-4 py-3 bg-white rounded-lg border ${
                            errors.time ? 'border-red-500' : 'border-gray-300'
                          } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900`}
                        />
                        <div className="flex gap-1 bg-primary-700/50 rounded-lg p-1">
                          <button
                            type="button"
                            onClick={() => handleTimePeriodChange('AM')}
                            className={`px-4 py-3 rounded-md font-semibold transition-all ${
                              roundTripData.timePeriod === 'AM'
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
                              roundTripData.timePeriod === 'PM'
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

                    {/* Vehicle Type Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-4">
                        Select Vehicle Type *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {getVehicleTypes().map((vehicle, index) => {
                          const isSelected = roundTripData.vehicleType === vehicle.type
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
                                        console.error(`Failed to load image for ${vehicle.type}: ${vehicle.image}`)
                                        e.target.style.display = 'none'
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
                          value={roundTripData.name}
                          onChange={handleRoundTripChange}
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
                          value={roundTripData.phone}
                          onChange={handleRoundTripChange}
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
                            ) : field.type === 'time' && field.hasTimePeriod ? (
                              <div className="flex gap-2">
                                <input
                                  type="time"
                                  name={field.name}
                                  value={otherServiceData[field.name]}
                                  onChange={handleOtherServiceChange}
                                  placeholder={`Enter ${field.label.toLowerCase()}`}
                                  required={field.required}
                                  className={`flex-1 px-4 py-3 bg-white rounded-lg border ${
                                    errors[field.name] ? 'border-red-500' : 'border-gray-300'
                                  } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm`}
                                />
                                <div className="flex gap-1 bg-primary-700/50 rounded-lg p-1">
                                  <button
                                    type="button"
                                    onClick={() => handleOtherServiceTimePeriodChange('AM')}
                                    className={`px-4 py-3 rounded-md font-semibold transition-all ${
                                      otherServiceData.timePeriod === 'AM'
                                        ? 'bg-accent-500 text-black'
                                        : 'text-white/70 hover:text-white'
                                    }`}
                                  >
                                    AM
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleOtherServiceTimePeriodChange('PM')}
                                    className={`px-4 py-3 rounded-md font-semibold transition-all ${
                                      otherServiceData.timePeriod === 'PM'
                                        ? 'bg-accent-500 text-black'
                                        : 'text-white/70 hover:text-white'
                                    }`}
                                  >
                                    PM
                                  </button>
                                </div>
                              </div>
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
