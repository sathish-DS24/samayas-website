import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, User, Phone, Car, Loader2, Briefcase, CheckCircle, MessageSquare, Navigation, Map } from 'lucide-react'
import emailjs from '@emailjs/browser'
import BookingSummary from './BookingSummary'
import MapPickerModal from './MapPickerModal'
import { getRoadDistance, getRouteInfo, reverseGeocode, getCurrentGPSLocation } from '../utils/googleMaps'
import { apiClient } from '../services/api'
import { trackEvent, trackBookingEvent, trackAdsConversion, debounceEvent } from '../utils/analytics'

const BookingForm = ({
  defaultPickup = '',
  defaultDrop = '',
  initialPickup = '',
  initialDrop = '',
  isSidebar = false,
  isAirport = false,
  defaultFlightNumber = '',
  defaultAirline = '',
  isDriver = false,
  defaultDriverType = 'Hourly Driver',
  defaultTripDuration = '2 Hours',
  isRecovery = false,
  defaultBreakdownType = 'Car Recovery'
}) => {
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
  
  const pickupVal = initialPickup || defaultPickup || ''
  const dropVal = initialDrop || defaultDrop || ''

  // GPS & Map Modal States
  const [isGpsLoading, setIsGpsLoading] = useState({ pickup: false, drop: false })
  const [mapModalConfig, setMapModalConfig] = useState({
    isOpen: false,
    type: 'pickup',
    title: 'Select Location',
    initialAddress: '',
    onSelect: null
  })
  
  // One-Way Taxi / Acting Driver / Vehicle Recovery form data
  const [oneWayData, setOneWayData] = useState({
    pickupLocation: pickupVal,
    dropLocation: dropVal,
    date: '',
    time: '',
    timePeriod: 'AM',
    vehicleType: '',
    name: '',
    phone: '',
    comments: '',
    flightNumber: defaultFlightNumber,
    airline: defaultAirline,
    passengerCount: '1-4 Passengers',
    meetAndGreet: true,
    driverType: defaultDriverType || 'Hourly Driver',
    tripDuration: defaultTripDuration || '2 Hours',
    transmissionType: 'Manual',
    specialInstructions: '',
    breakdownType: defaultBreakdownType || 'Car Recovery',
    emergencyLevel: 'Immediate Dispatch (High Priority)',
    destinationGarage: '',
    contactMethod: 'Phone Call',
    photoAttached: false
  })

  // Synchronize if props change dynamically
  useEffect(() => {
    if (pickupVal || dropVal) {
      setOneWayData(prev => ({
        ...prev,
        pickupLocation: pickupVal || prev.pickupLocation,
        dropLocation: dropVal || prev.dropLocation,
      }))
    }
  }, [initialPickup, defaultPickup, initialDrop, defaultDrop])

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
    phone: '',
    comments: ''
  })

  // Acting Driver form data
  const [actingDriverData, setActingDriverData] = useState({
    actingTripType: 'local',
    localPackage: '20km',
    days: 2,
    pickupLocation: '',
    dropLocation: '',
    date: '',
    time: '',
    timePeriod: 'AM',
    name: '',
    phone: '',
    comments: ''
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
    dropLocation: '',
    comments: ''
  })

  // Recovery Services form data
  const [recoveryData, setRecoveryData] = useState({
    vehicleType: '',
    name: '',
    phone: '',
    date: '',
    time: '',
    timePeriod: 'AM',
    pickupLocation: '',
    dropLocation: '',
    comments: ''
  })

  // Tours & Travels form data
  const [toursData, setToursData] = useState({
    packageType: 'local_mini',
    vehicleCategory: 'Sedan (4+1)',
    days: 1,
    pickupLocation: pickupVal,
    dropLocation: dropVal,
    date: '',
    time: '',
    timePeriod: 'AM',
    name: '',
    phone: '',
    comments: ''
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const [calculatedData, setCalculatedData] = useState(null)
  const [showThankYou, setShowThankYou] = useState(false)

  const funnelStep = useRef('virtual_page_view')

  // Pre-fill pickup location when used on district pages
  useEffect(() => {
    if (defaultPickup) {
      setOneWayData(prev => prev.pickupLocation ? prev : { ...prev, pickupLocation: defaultPickup })
      setRoundTripData(prev => prev.pickupLocation ? prev : { ...prev, pickupLocation: defaultPickup })
      setActingDriverData(prev => prev.pickupLocation ? prev : { ...prev, pickupLocation: defaultPickup })
    }
  }, [defaultPickup])

  useEffect(() => {
    const handleUnload = () => {
      if (funnelStep.current !== 'booking_completed' && funnelStep.current !== 'virtual_page_view') {
        const pCity = oneWayData.pickupLocation || roundTripData.pickupLocation || actingDriverData.pickupLocation || otherServiceData.pickupLocation || recoveryData.pickupLocation
        const dCity = oneWayData.dropLocation || roundTripData.dropLocation || actingDriverData.dropLocation || otherServiceData.dropLocation || recoveryData.dropLocation
        const vType = oneWayData.vehicleType || roundTripData.vehicleType || (activeTab === 'acting_driver' ? 'Acting Driver' : activeTab === 'recovery_services' ? recoveryData.vehicleType : otherServiceData.serviceType)
        
        trackEvent('booking_abandoned', { 
          last_completed_step: funnelStep.current,
          pickup_city: pCity || null,
          destination_city: dCity || null,
          vehicle: vType || null
        })
      }
    }
    window.addEventListener('beforeunload', handleUnload)
    return () => window.removeEventListener('beforeunload', handleUnload)
  }, [oneWayData, roundTripData, otherServiceData, recoveryData])

  const oneWayPickupRef = useRef(null)
  const oneWayDropRef = useRef(null)
  const roundTripPickupRef = useRef(null)
  const roundTripDropRef = useRef(null)
  const actingPickupRef = useRef(null)
  const actingDropRef = useRef(null)
  const recoveryPickupRef = useRef(null)
  const recoveryDropRef = useRef(null)
  const toursPickupRef = useRef(null)
  const toursDropRef = useRef(null)
  // Attach Google Places Autocomplete with error-safe fallback
  useEffect(() => {
    const initAutocomplete = () => {
      if (window.googleMapsFailed || !window.google || !window.google.maps || !window.google.maps.places) return

      try {
        const options = {
          componentRestrictions: { country: 'in' },
          fields: ['formatted_address', 'name', 'geometry']
        }

        const handlePlaceSelect = (ac, type, ref, setter) => {
          const place = ac.getPlace()
          let val = place.formatted_address || place.name || ref.current.value
          if (place.name && place.formatted_address && !place.formatted_address.toLowerCase().includes(place.name.toLowerCase())) {
            val = `${place.name}, ${place.formatted_address}`
          }
          const fieldName = type === 'pickup' ? 'pickupLocation' : 'dropLocation'
          const coordsField = type === 'pickup' ? 'pickupLocationCoords' : 'dropLocationCoords'
          let coords = null
          if (place.geometry && place.geometry.location) {
            coords = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }
          }
          setter(prev => ({ ...prev, [fieldName]: val, [coordsField]: coords }))
          
          funnelStep.current = type === 'pickup' ? 'pickup_selected' : 'destination_selected'
          if (place.geometry) {
            trackEvent(type === 'pickup' ? 'pickup_selected' : 'destination_selected', {
              [type === 'pickup' ? 'pickup_city' : 'destination_city']: val,
              [type === 'pickup' ? 'pickup_lat' : 'destination_lat']: place.geometry.location.lat(),
              [type === 'pickup' ? 'pickup_lng' : 'destination_lng']: place.geometry.location.lng()
            })
          }
        }

        if (oneWayPickupRef.current && activeTab === 'oneway') {
          const ac = new window.google.maps.places.Autocomplete(oneWayPickupRef.current, options)
          ac.addListener('place_changed', () => handlePlaceSelect(ac, 'pickup', oneWayPickupRef, setOneWayData))
        }

        if (oneWayDropRef.current && activeTab === 'oneway') {
          const ac = new window.google.maps.places.Autocomplete(oneWayDropRef.current, options)
          ac.addListener('place_changed', () => handlePlaceSelect(ac, 'drop', oneWayDropRef, setOneWayData))
        }

        if (roundTripPickupRef.current && activeTab === 'roundtrip') {
          const ac = new window.google.maps.places.Autocomplete(roundTripPickupRef.current, options)
          ac.addListener('place_changed', () => handlePlaceSelect(ac, 'pickup', roundTripPickupRef, setRoundTripData))
        }

        if (roundTripDropRef.current && activeTab === 'roundtrip') {
          const ac = new window.google.maps.places.Autocomplete(roundTripDropRef.current, options)
          ac.addListener('place_changed', () => handlePlaceSelect(ac, 'drop', roundTripDropRef, setRoundTripData))
        }

        if (actingPickupRef.current && activeTab === 'acting_driver') {
          const ac = new window.google.maps.places.Autocomplete(actingPickupRef.current, options)
          ac.addListener('place_changed', () => handlePlaceSelect(ac, 'pickup', actingPickupRef, setActingDriverData))
        }

        if (actingDropRef.current && activeTab === 'acting_driver') {
          const ac = new window.google.maps.places.Autocomplete(actingDropRef.current, options)
          ac.addListener('place_changed', () => handlePlaceSelect(ac, 'drop', actingDropRef, setActingDriverData))
        }

        if (recoveryPickupRef.current && activeTab === 'recovery_services') {
          const ac = new window.google.maps.places.Autocomplete(recoveryPickupRef.current, options)
          ac.addListener('place_changed', () => handlePlaceSelect(ac, 'pickup', recoveryPickupRef, setRecoveryData))
        }

        if (recoveryDropRef.current && activeTab === 'recovery_services') {
          const ac = new window.google.maps.places.Autocomplete(recoveryDropRef.current, options)
          ac.addListener('place_changed', () => handlePlaceSelect(ac, 'drop', recoveryDropRef, setRecoveryData))
        }

        if (toursPickupRef.current && activeTab === 'tours_travels') {
          const ac = new window.google.maps.places.Autocomplete(toursPickupRef.current, options)
          ac.addListener('place_changed', () => handlePlaceSelect(ac, 'pickup', toursPickupRef, setToursData))
        }

        if (toursDropRef.current && activeTab === 'tours_travels') {
          const ac = new window.google.maps.places.Autocomplete(toursDropRef.current, options)
          ac.addListener('place_changed', () => handlePlaceSelect(ac, 'drop', toursDropRef, setToursData))
        }
      } catch (err) {
        console.warn('Autocomplete init notice:', err)
        import('../utils/analytics').then(({ trackEvent }) => trackEvent('error', { error_type: 'Google Maps Error', error_message: err.message }))
      }
    }

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (window.googleMapsFailed) {
          clearInterval(interval)
          return
        }
        if (window.google && window.google.maps && window.google.maps.places) {
          initAutocomplete()
          clearInterval(interval)
        }
      }, 300)

      return () => clearInterval(interval)
    }, 200)

    return () => clearTimeout(timer)
  }, [activeTab, actingDriverData.actingTripType])

  // GPS Locate Handler
  const handleGPSLocate = async (type, setter, fieldName) => {
    setIsGpsLoading(prev => ({ ...prev, [type]: true }))
    try {
      const gpsData = await getCurrentGPSLocation()
      setter(prev => ({ 
        ...prev, 
        [fieldName]: gpsData.formattedAddress,
        [`${fieldName}Coords`]: { lat: gpsData.lat, lng: gpsData.lng }
      }))
    } catch (err) {
      alert('Could not detect your location automatically. Please check your browser location permissions or type your address.')
    } finally {
      setIsGpsLoading(prev => ({ ...prev, [type]: false }))
    }
  }

  // Open Map Picker Modal Handler
  const openMapPicker = (type, title, currentAddress, setter, fieldName) => {
    setMapModalConfig({
      isOpen: true,
      type,
      title,
      initialAddress: currentAddress,
      onSelect: (selectedData) => {
        setter(prev => ({ 
          ...prev, 
          [fieldName]: selectedData.address,
          [`${fieldName}Coords`]: (selectedData.lat && selectedData.lng) ? { lat: selectedData.lat, lng: selectedData.lng } : null
        }))
      }
    })
  }

  // Tariff rates for One-Way Taxi
  const oneWayRates = {
    SEDAN: 15,
    HATCHBACK: 15,
    SUV: 20,
    INNOVA: 22,
    'INNOVA HYCROSS': 25
  }

  // Tariff rates for Round Trip
  const roundTripRates = {
    SEDAN: 13,
    HATCHBACK: 13,
    SUV: 18,
    INNOVA: 18,
    'INNOVA HYCROSS': 21
  }

  // Bata (Driver allowance) rates based on vehicle type
  const bataRates = {
    SEDAN: 400,
    HATCHBACK: 400,
    SUV: 500,
    INNOVA: 500,
    'INNOVA HYCROSS': 600
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
        image: '/images/cars/sedan.webp',
        model: 'Maruti Dzire / Honda Amaze',
        alt: 'Maruti Dzire Sedan taxi for one-way booking in Tamil Nadu'
      },
      { 
        type: 'HATCHBACK', 
        icon: Car, 
        rate: currentRates.HATCHBACK,
        image: '/images/cars/etios.webp',
        model: 'Maruti Swift / WagonR',
        alt: 'Maruti Swift Hatchback taxi for affordable one-way rides'
      },
      { 
        type: 'SUV', 
        icon: Car, 
        rate: currentRates.SUV,
        image: '/images/cars/SUV.webp',
        model: 'Hyundai Creta / Ertiga',
        alt: 'Hyundai Creta SUV taxi for family outstation trips'
      },
      { 
        type: 'INNOVA', 
        icon: Car, 
        rate: currentRates.INNOVA,
        image: '/images/cars/innova.webp',
        model: 'Toyota Innova Crysta',
        alt: 'Toyota Innova Crysta premium taxi for group travel'
      },
      { 
        type: 'INNOVA HYCROSS', 
        icon: Car, 
        rate: currentRates['INNOVA HYCROSS'],
        image: '/images/cars/innova.webp',
        model: 'Toyota Innova Hycross',
        alt: 'Toyota Innova Hycross hybrid premium taxi service'
      }
    ]
  }

  const getRecoveryVehicleTypes = () => {
    return [
      {
        type: 'Flatbed',
        image: '/images/recovery/Flatbed Recovery Truck.webp',
        alt: 'Flatbed Recovery Truck',
        model: 'Flatbed (Full Load)',
        rateLabel: '₹2500 Min'
      },
      {
        type: 'Under Wheel Lift',
        image: '/images/recovery/Tow Recovery Truck.webp',
        alt: 'Under Wheel Lift Recovery Truck',
        model: 'Under Wheel Lift (Front)',
        rateLabel: '₹2000 Min'
      }
    ]
  }

  // Other Services options
  const otherServices = [
    'Acting Driver',
    'Tours & Travels',
    'Recovery Services'
  ]

  const trackDateEvent = (name, value, tripType) => {
    if (name === 'date') {
      funnelStep.current = 'travel_date_selected'
      debounceEvent('travel_date_selected', { travel_date: value, trip_type: tripType })
    } else if (name === 'returnDate') {
      funnelStep.current = 'return_date_selected'
      debounceEvent('return_date_selected', { return_date: value, trip_type: tripType })
    }
  }

  const handleOneWayChange = (e) => {
    const { name, value } = e.target
    trackDateEvent(name, value, 'one-way')
    setOneWayData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleRoundTripChange = (e) => {
    const { name, value } = e.target
    trackDateEvent(name, value, 'round-trip')
    setRoundTripData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleActingDriverChange = (e) => {
    const { name, value } = e.target
    trackDateEvent(name, value, 'acting-driver')
    setActingDriverData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleActingTimePeriodChange = (period) => {
    setActingDriverData(prev => ({ ...prev, timePeriod: period }))
  }

  const parse24HourTime = (timeStr, timePeriod) => {
    if (!timeStr) return { hours: 0, minutes: 0 }
    let [hours, minutes] = timeStr.split(':').map(Number)
    if (isNaN(hours)) hours = 0
    if (isNaN(minutes)) minutes = 0

    // If time is in 12-hour format (< 12)
    if (hours < 12) {
      if (timePeriod === 'PM') {
        hours += 12
      } else if (timePeriod === 'AM' && hours === 12) {
        hours = 0
      }
    } else if (hours === 12) {
      if (timePeriod === 'AM') {
        hours = 0
      }
    }
    // If hours >= 12 (e.g. 16:00 from mobile 24-hour picker), it is ALREADY 24-hour format

    return { hours, minutes }
  }

  const formatFullTime = (timeStr, timePeriod) => {
    if (!timeStr) return ''
    let [rawHours, rawMinutes] = timeStr.split(':').map(Number)
    if (isNaN(rawHours) || isNaN(rawMinutes)) return timeStr

    let hours = rawHours
    let minutes = rawMinutes.toString().padStart(2, '0')
    let period = timePeriod || 'AM'

    if (hours >= 12) {
      period = 'PM'
      hours = hours > 12 ? hours - 12 : 12
    } else if (hours === 0) {
      hours = 12
      period = 'AM'
    } else {
      period = timePeriod || 'AM'
    }

    const formattedHours = hours.toString().padStart(2, '0')
    return `${formattedHours}:${minutes} ${period}`
  }

  const isPastTime = (dateStr, timeStr, timePeriod) => {
    if (!dateStr || !timeStr) return false;
    
    // Parse YYYY-MM-DD in local timezone (prevents UTC offset shifts)
    const parts = dateStr.split('-').map(Number)
    if (parts.length !== 3) return false
    const [year, month, day] = parts

    const today = new Date();
    
    // Check if selected date is today in local timezone
    if (
      year === today.getFullYear() &&
      (month - 1) === today.getMonth() &&
      day === today.getDate()
    ) {
      const { hours, minutes } = parse24HourTime(timeStr, timePeriod);
      
      const selectedDateTime = new Date();
      selectedDateTime.setHours(hours, minutes, 0, 0);
      
      if (selectedDateTime < today) {
        return true;
      }
    }
    return false;
  }



  const validateActingDriverForm = () => {
    const newErrors = {}
    if (!actingDriverData.name.trim()) newErrors.name = 'Required'
    if (!actingDriverData.phone.trim()) {
      newErrors.phone = 'Required'
    } else if (!/^\d{10}$/.test(actingDriverData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Valid 10-digit number required'
    }
    if (!actingDriverData.date) newErrors.date = 'Required'
    if (!actingDriverData.time) {
      newErrors.time = 'Required'
    } else if (isPastTime(actingDriverData.date, actingDriverData.time, actingDriverData.timePeriod)) {
      newErrors.time = 'Cannot select a time in the past'
    }
    if (!actingDriverData.pickupLocation.trim()) newErrors.pickupLocation = 'Required'
    if (actingDriverData.actingTripType !== 'local' && !actingDriverData.dropLocation.trim()) {
      newErrors.dropLocation = 'Required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const calculateActingFare = async () => {
    const { actingTripType, pickupLocation, dropLocation, localPackage, days } = actingDriverData;
    let baseFare = 0;
    let distance = 0;
    let extraNote = '';
    let estExtraHours = 0;
    let estExtraFare = 0;
    
    if (actingTripType === 'local') {
      if (localPackage === '20km') {
        baseFare = 500;
        extraNote = '+ Rs 80/hr extra for additional hours beyond 4 hours (Excluding Food)';
      } else {
        baseFare = 600;
        extraNote = '+ Rs 90/hr extra for additional hours beyond 4 hours (Excluding Food)';
      }
    } else if (actingTripType === 'drop') {
      const routeInfo = await calculateRouteDetails(pickupLocation, dropLocation, actingDriverData.pickupLocationCoords, actingDriverData.dropLocationCoords);
      const dist = routeInfo.distance;
      distance = dist;
      if (dist <= 60) baseFare = 1200;
      else if (dist <= 160) baseFare = 1500;
      else if (dist <= 260) baseFare = 1900;
      else baseFare = 2200; 
      
      extraNote = '(Includes bus fare) + Food';
      if (routeInfo.durationMins > 0) {
        const hrs = Math.ceil(routeInfo.durationMins / 60);
        extraNote = `Estimated Driving Time: ~${hrs} hrs. ${extraNote}`;
      }
    } else if (actingTripType === 'round-trip') {
      const routeInfo = await calculateRouteDetails(pickupLocation, dropLocation, actingDriverData.pickupLocationCoords, actingDriverData.dropLocationCoords);
      const oneWay = routeInfo.distance;
      distance = oneWay * 2;
      let baseHours = 6;
      let extraRate = 90;
      if (distance <= 160) { baseFare = 800; baseHours = 6; extraRate = 100; }
      else if (distance <= 260) { baseFare = 900; baseHours = 6; extraRate = 100; }
      else if (distance <= 360) { baseFare = 1000; baseHours = 6; extraRate = 120; }
      else if (distance <= 510) { baseFare = 1800; baseHours = 12; extraRate = 125; }
      else { baseFare = 2700; baseHours = 12; extraRate = 150; }
      
      extraNote = `+ Rs ${extraRate}/hr extra beyond ${baseHours} hours (+ Food)`;
      if (routeInfo.durationMins > 0) {
        const totalHrs = Math.ceil((routeInfo.durationMins * 2) / 60);
        if (totalHrs > baseHours) {
          estExtraHours = totalHrs - baseHours;
          estExtraFare = estExtraHours * extraRate;
        }
        extraNote = `Estimated Driving Time: ~${totalHrs} hrs. Base fare covers up to ${baseHours} hrs. ${extraNote}`;
      }
    } else if (actingTripType === 'multi-day') {
      const routeInfo = await calculateRouteDetails(pickupLocation, dropLocation, actingDriverData.pickupLocationCoords, actingDriverData.dropLocationCoords);
      const oneWay = routeInfo.distance;
      distance = oneWay * 2;
      const numDays = Math.max(2, parseInt(days) || 2);
      if (distance <= 310) {
        baseFare = 1300 * numDays;
      } else {
        baseFare = 1500 * numDays;
      }
      
      extraNote = `(${numDays} days @ ${baseFare/numDays}/day) + Food & Accommodation`;
      if (routeInfo.durationMins > 0) {
        const totalHrs = Math.ceil((routeInfo.durationMins * 2) / 60);
        extraNote = `Estimated Driving Time: ~${totalHrs} hrs. ${extraNote}`;
      }
    }
    
    return { distance, baseFare, bata: 0, finalAmount: baseFare + estExtraFare, estExtraHours, estExtraFare, extraNote, actualDistance: distance };
  }

  const sendFareEstimateLead = (calcData) => {
    if (!calcData || !calcData.name || !calcData.phone) return;
    try {
      const isRoundTrip = calcData.tripType === 'round-trip'
      const isActingDriver = calcData.tripType === 'acting-driver'
      const isRecovery = calcData.tripType === 'recovery_services'
      const isTours = calcData.tripType === 'tours_travels'
      
      const tripName = isRecovery ? 'Vehicle Recovery' : isActingDriver ? 'Acting Driver' : isTours ? 'Tours & Travels' : isRoundTrip ? 'Round Trip Taxi' : 'One-Way Taxi'
      const templateId = isRecovery || isTours ? OTHER_SERVICES_TEMPLATE_ID : isRoundTrip ? ROUND_TRIP_TEMPLATE_ID : ONE_WAY_TAXI_TEMPLATE_ID

      const flightNumber = String(calcData.flightNumber || 'N/A')
      const airline = String(calcData.airline || 'N/A')
      const passengerCount = String(calcData.passengerCount || 'N/A')
      const hasFlightInfo = flightNumber !== 'N/A' || airline !== 'N/A'
      const flightDetailsStr = hasFlightInfo ? `Flight: ${flightNumber} | Airline: ${airline} | Passengers: ${passengerCount}` : 'N/A'

      const leadComments = hasFlightInfo
        ? `[INQUIRY LEAD] Customer checked price estimate. Name: ${calcData.name}, Phone: ${calcData.phone} | Flight Info: ${flightDetailsStr}`
        : `[INQUIRY LEAD] Customer checked price estimate. Name: ${calcData.name}, Phone: ${calcData.phone}`

      let emailSubject = `[Fare Checked Lead] ${calcData.name} - ${calcData.phone} (${tripName})`
      if (calcData.tripType === 'one-way') {
        const isBelow130 = (calcData.actualDistance < 130) || calcData.isMinKmApplied
        emailSubject = isBelow130
          ? `[ONE-WAY FARE CHECK - BELOW 130KM] ${calcData.name} - ${calcData.pickupLocation} to ${calcData.dropLocation}`
          : `[ONE-WAY FARE LEAD - 130KM+] ${calcData.name} - ${calcData.pickupLocation} to ${calcData.dropLocation}`
      }

      const templateParams = {
        subject: emailSubject,
        service_type: `[Fare Checked Lead] ${tripName}`,
        booking_type: `[Inquiry Lead] ${tripName}`,
        trip_type: tripName,
        customer_name: String(calcData.name || 'N/A'),
        customer_phone: String(calcData.phone || 'N/A'),
        vehicle_type: String(calcData.vehicleType || 'N/A'),
        car_type: String(calcData.vehicleType || 'N/A'),
        pickup_location: String(calcData.pickupLocation || 'N/A'),
        drop_location: String(calcData.dropLocation || 'Local'),
        google_maps_link: calcData.pickupLocation && calcData.dropLocation
          ? `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(calcData.pickupLocation)}&destination=${encodeURIComponent(calcData.dropLocation)}`
          : 'N/A',
        booking_date: String(calcData.date || 'N/A'),
        service_date: String(calcData.date || 'N/A'),
        date: String(calcData.date || 'N/A'),
        return_date: String(calcData.returnDate || 'N/A'),
        booking_time: String(calcData.fullTime || calcData.time || 'N/A'),
        service_time: String(calcData.fullTime || calcData.time || 'N/A'),
        time: String(calcData.fullTime || calcData.time || 'N/A'),
        base_fare: `₹${(calcData.baseFare || 0).toLocaleString('en-IN')}`,
        bata: `₹${(calcData.bata || 0).toLocaleString('en-IN')}`,
        final_amount: `₹${(calcData.finalAmount || 0).toLocaleString('en-IN')}`,
        total_amount: `₹${(calcData.finalAmount || 0).toLocaleString('en-IN')}`,
        distance: `${calcData.distance || 0} km`,
        flight_number: flightNumber,
        flightNumber: flightNumber,
        airline_name: airline,
        airline: airline,
        passenger_count: passengerCount,
        passengerCount: passengerCount,
        flight_details: flightDetailsStr,
        comments: leadComments,
        customer_notes: leadComments,
        additional_notes: leadComments
      }

      emailjs.send(serviceId, templateId, templateParams, publicKey).catch(err => {
        console.warn('Fare estimate lead notification error (non-fatal):', err)
      })
    } catch (e) {
      console.warn('Fare estimate lead send error:', e)
    }
  }

  const handleActingDriverSubmit = async (e) => {
    e.preventDefault()
    if (validateActingDriverForm()) {
      setIsLoading(true)
      funnelStep.current = 'booking_submit'
      try {
        const calculation = await calculateActingFare()
        
        let specificType = actingDriverData.actingTripType;
        if (actingDriverData.actingTripType === 'local') {
          specificType = `Local - ${actingDriverData.localPackage === '20km' ? '20km/4hrs' : '30km/4hrs'}`;
        } else if (actingDriverData.actingTripType === 'multi-day') {
          specificType = `Multi-Day - ${actingDriverData.days} days`;
        } else if (actingDriverData.actingTripType === 'drop') {
          specificType = 'One Way Drop';
        } else if (actingDriverData.actingTripType === 'round-trip') {
          specificType = 'Outstation Round Trip';
        }

        const finalCalculation = {
          ...actingDriverData,
          tripType: 'acting-driver',
          ...calculation,
          fullTime: formatFullTime(actingDriverData.time, actingDriverData.timePeriod),
          vehicleType: `Acting Driver (${specificType})`,
          bata: 0
        }
        setCalculatedData(finalCalculation)
        
        trackEvent('route_search', {
          pickup_city: finalCalculation.pickupLocation,
          destination_city: finalCalculation.dropLocation || 'Local',
          distance_km: finalCalculation.distance,
          fare: finalCalculation.finalAmount,
          trip_type: 'acting-driver'
        })
        
        trackBookingEvent('fare_calculated', finalCalculation)
        trackBookingEvent('booking_submit', finalCalculation)
        sendFareEstimateLead(finalCalculation)
        setShowSummary(true)
      } catch (error) {
        console.error('Calculation error:', error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleOtherServiceChange = (e) => {
    const { name, value } = e.target
    trackDateEvent(name, value, 'other')
    setOtherServiceData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleVehicleSelect = (vehicleType) => {
    funnelStep.current = 'vehicle_selected'
    trackEvent('vehicle_selected', { vehicle_type: vehicleType })
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

  // Calculate distance using Google Maps Distance Matrix API, with local matrix fallback
  const calculateDistance = async (pickup, drop, pickupCoords = null, dropCoords = null) => {
    try {
      if (!pickup || !drop) return 200

      // 1. Try real road distance via Google Maps Distance Matrix API
      // If coordinates exist, use them directly for 100% distance matrix accuracy
      const originParam = pickupCoords || pickup
      const destParam = dropCoords || drop

      const realDistance = await getRoadDistance(originParam, destParam)
      if (realDistance && realDistance > 0) {
        return realDistance
      }

      // 2. Fallback: Local Tamil Nadu lookup matrix
      const distanceMatrix = {
        'chennai-trichy': 330,
        'chennai-tiruchirappalli': 330,
        'chennai-coimbatore': 500,
        'chennai-madurai': 460,
        'chennai-salem': 340,
        'chennai-erode': 400,
        'chennai-tiruppur': 460,
        'chennai-vellore': 140,
        'chennai-tirunelveli': 620,
        'chennai-kanchipuram': 75,
        'coimbatore-trichy': 210,
        'coimbatore-tiruchirappalli': 210,
        'coimbatore-madurai': 210,
        'coimbatore-salem': 165,
        'coimbatore-erode': 100,
        'coimbatore-tiruppur': 55,
        'trichy-madurai': 135,
        'tiruchirappalli-madurai': 135,
        'trichy-salem': 140,
        'tiruchirappalli-salem': 140,
        'trichy-erode': 150,
        'tiruchirappalli-erode': 150,
        'madurai-salem': 230,
        'madurai-tirunelveli': 160,
        'salem-erode': 65,
        'salem-tiruppur': 120,
        'madurai-villupuram': 272,
        'chennai-villupuram': 165,
      }

      const p = String(pickup || '').toLowerCase().trim();
      const d = String(drop || '').toLowerCase().trim();
      
      const key1 = `${p}-${d}`;
      const key2 = `${d}-${p}`;
      
      if (distanceMatrix[key1]) return distanceMatrix[key1];
      if (distanceMatrix[key2]) return distanceMatrix[key2];

      // Match partial names (e.g. "Trichy Airport" -> "trichy")
      for (const [key, dist] of Object.entries(distanceMatrix)) {
        const [k1, k2] = key.split('-');
        if ((p.includes(k1) || k1.includes(p)) && (d.includes(k2) || k2.includes(d))) return dist;
        if ((p.includes(k2) || k2.includes(p)) && (d.includes(k1) || k1.includes(d))) return dist;
      }
      
      return 200;
    } catch (err) {
      console.warn('Error calculating distance:', err)
      return 200;
    }
  }

  const calculateRouteDetails = async (pickup, drop, pickupCoords = null, dropCoords = null) => {
    // 1. Try real road distance via Google Maps Distance Matrix API
    const originParam = pickupCoords || pickup
    const destParam = dropCoords || drop
    const routeInfo = await getRouteInfo(originParam, destParam)
    if (routeInfo && routeInfo.distance > 0) {
      return routeInfo // { distance, durationMins }
    }
    
    // 2. Fallback to basic distance estimation
    const distance = await calculateDistance(pickup, drop, pickupCoords, dropCoords)
    return { distance, durationMins: 0 } // No duration fallback available
  }

  const validateOneWayForm = () => {
    const newErrors = {}
    if (!oneWayData.pickupLocation.trim()) newErrors.pickupLocation = 'Required'
    if (!oneWayData.dropLocation.trim()) newErrors.dropLocation = 'Required'
    if (!oneWayData.date) newErrors.date = 'Required'
    if (!oneWayData.time) {
      newErrors.time = 'Required'
    } else if (isPastTime(oneWayData.date, oneWayData.time, oneWayData.timePeriod)) {
      newErrors.time = 'Cannot select a time in the past'
    }
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
    if (!roundTripData.time) {
      newErrors.time = 'Required'
    } else if (isPastTime(roundTripData.date, roundTripData.time, roundTripData.timePeriod)) {
      newErrors.time = 'Cannot select a time in the past'
    }
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
    if (!otherServiceData.time) {
      newErrors.time = 'Required'
    } else if (isPastTime(otherServiceData.date, otherServiceData.time, otherServiceData.timePeriod)) {
      newErrors.time = 'Cannot select a time in the past'
    }
    if (!otherServiceData.pickupLocation.trim()) newErrors.pickupLocation = 'Required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const calculateFare = async (tripType = 'one-way', customPayload = null) => {
    const data = tripType === 'round-trip' ? roundTripData : oneWayData;
    const numDays = Math.max(1, parseInt(data?.days) || 1);
    
    // Prepare payload for backend API
    const payload = customPayload || {
      origin: data?.pickupLocation || '',
      destination: data?.dropLocation || '',
      vehicle: data?.vehicleType || 'SEDAN',
      tripType: tripType === 'round-trip' ? 'round-trip' : 'one-way',
      days: numDays,
    };

    // Attempt Authoritative Backend Calculation First
    try {
      const backendFare = await apiClient.calculateFare(payload);
      const isRoundTrip = tripType === 'round-trip';
      
      let finalBata = backendFare.bata;
      let finalAmount = backendFare.finalAmount;

      // Adjust round trip bata if backend returns single-day bata
      if (isRoundTrip && numDays > 1 && backendFare.bata === 400 && backendFare.finalAmount === backendFare.baseFare + 400) {
        finalBata = backendFare.bata * numDays;
        finalAmount = backendFare.baseFare + finalBata;
      }
      
      // Log Analytics Event: backend_fare_success
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'backend_fare_success',
          serviceType: backendFare.tripType || tripType,
          finalAmount: finalAmount,
        });
      }

      return {
        distance: Math.round(backendFare.routeDistanceKm),
        actualDistance: Math.round(backendFare.routeDistanceKm),
        billableDistance: Math.round(backendFare.billableDistanceKm),
        baseFare: Math.round(backendFare.baseFare),
        bata: Math.round(finalBata),
        finalAmount: Math.round(finalAmount),
        minKm: backendFare.minimumBillingKm,
        isMinKmApplied: backendFare.isMinKmApplied,
        ratePerKm: backendFare.ratePerKm,
        isBackendAuthoritative: true,
        fareSource: 'backend_success'
      };
    } catch (backendError) {
      console.warn('Backend fare calculation unavailable, using local calculation fallback:', backendError.message);
      
      // Log Analytics Event: backend_fare_failure & fallback_fare_used
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'backend_fare_failure',
          error: backendError.message,
        });
        window.dataLayer.push({
          event: 'fallback_fare_used',
          serviceType: tripType,
        });
      }

      // Existing Local Calculation Fallback
      const distance = await calculateDistance(
        data.pickupLocation, 
        data.dropLocation,
        data.pickupLocationCoords,
        data.dropLocationCoords
      );
      const rates = tripType === 'round-trip' ? roundTripRates : oneWayRates;
      const ratePerKm = rates[data.vehicleType] || 0;
      const baseBataPerDay = bataRates[data.vehicleType] || 400;
      
      if (tripType === 'round-trip') {
        const roundTripTotalDistance = Math.round(distance * 2);
        const minKm = 250 * numDays;
        const actualDistance = Math.max(roundTripTotalDistance, minKm);
        const baseFare = actualDistance * ratePerKm;
        const totalBata = baseBataPerDay * numDays;
        const finalAmount = baseFare + totalBata;
        return {
          distance: roundTripTotalDistance,
          billableDistance: actualDistance,
          baseFare,
          bata: totalBata,
          finalAmount,
          minKm,
          actualDistance,
          isBackendAuthoritative: false,
          fareSource: 'fallback_used'
        };
      } else {
        const minKm = 130;
        const actualDistance = Math.round(distance);
        const billableDistance = Math.max(actualDistance, minKm);
        const baseFare = billableDistance * ratePerKm;
        const finalAmount = baseFare + baseBataPerDay;
        return { 
          distance: actualDistance,
          billableDistance,
          baseFare, 
          bata: baseBataPerDay, 
          finalAmount, 
          minKm, 
          isMinKmApplied: actualDistance < minKm,
          actualDistance,
          isBackendAuthoritative: false,
          fareSource: 'fallback_used'
        };
      }
    }
  };

  const scrollToFirstError = (errs) => {
    const errorKeys = Object.keys(errs)
    if (errorKeys.length > 0) {
      const firstKey = errorKeys[0]
      const el = document.querySelector(`[name="${firstKey}"]`) || document.querySelector(`#booking-form`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        el.focus?.()
      }
    }
  }

  const handleOneWaySubmit = async (e) => {
    e.preventDefault()
    if (validateOneWayForm()) {
      setIsLoading(true)
      try {
        const calculation = await calculateFare('one-way')
        const finalCalculation = {
          ...oneWayData,
          tripType: 'one-way',
          ...calculation,
          fullTime: formatFullTime(oneWayData.time, oneWayData.timePeriod),
          date: oneWayData.date,
          time: oneWayData.time,
          timePeriod: oneWayData.timePeriod,
          name: oneWayData.name,
          phone: oneWayData.phone,
          vehicleType: oneWayData.vehicleType,
          pickupLocation: oneWayData.pickupLocation,
          dropLocation: oneWayData.dropLocation,
          comments: oneWayData.comments
        }
        setCalculatedData(finalCalculation)
        funnelStep.current = 'booking_submit'
        trackEvent('route_search', {
          pickup_city: finalCalculation.pickupLocation,
          destination_city: finalCalculation.dropLocation,
          distance_km: finalCalculation.distance,
          fare: finalCalculation.finalAmount,
          trip_type: 'one-way'
        })
        trackEvent('one_way_fare_checked', {
          service: 'one_way_taxi',
          origin: finalCalculation.pickupLocation,
          destination: finalCalculation.dropLocation,
          route_distance: finalCalculation.distance,
          billable_distance: finalCalculation.billableDistance || Math.max(finalCalculation.distance, 130),
          vehicle: finalCalculation.vehicleType,
          fare: finalCalculation.finalAmount,
          minimum_distance_applied: finalCalculation.isMinKmApplied || false
        })

        if (finalCalculation.distance < 130 || finalCalculation.isMinKmApplied) {
          trackEvent('one_way_minimum_distance_notice', {
            service: 'one_way_taxi',
            origin: finalCalculation.pickupLocation,
            destination: finalCalculation.dropLocation,
            route_distance: finalCalculation.distance,
            billable_distance: finalCalculation.billableDistance || 130
          })
        } else if (finalCalculation.distance >= 130 && finalCalculation.name && finalCalculation.phone) {
          trackEvent('one_way_eligible_lead', {
            service: 'one_way_taxi',
            origin: finalCalculation.pickupLocation,
            destination: finalCalculation.dropLocation,
            route_distance: finalCalculation.distance,
            billable_distance: finalCalculation.billableDistance || finalCalculation.distance
          })
        }

        trackBookingEvent('fare_calculated', finalCalculation)
        trackBookingEvent('booking_submit', finalCalculation)
        sendFareEstimateLead(finalCalculation)
        setShowSummary(true)
      } catch (err) {
        console.error('Error calculating One-Way fare:', err)
        alert('Could not calculate estimate. Please check your pickup and drop locations.')
      } finally {
        setIsLoading(false)
      }
    } else {
      setTimeout(() => {
        const errs = validateOneWayFormErrorsOnly()
        scrollToFirstError(errs)
      }, 50)
    }
  }

  const validateOneWayFormErrorsOnly = () => {
    const newErrors = {}
    if (!oneWayData.pickupLocation.trim()) newErrors.pickupLocation = 'Required'
    if (!oneWayData.dropLocation.trim()) newErrors.dropLocation = 'Required'
    if (!oneWayData.date) newErrors.date = 'Required'
    if (!oneWayData.time) {
      newErrors.time = 'Required'
    } else if (isPastTime(oneWayData.date, oneWayData.time, oneWayData.timePeriod)) {
      newErrors.time = 'Cannot select a time in the past'
    }
    if (!oneWayData.vehicleType) newErrors.vehicleType = 'Please select a vehicle'
    if (!oneWayData.name.trim()) newErrors.name = 'Required'
    if (!oneWayData.phone.trim()) {
      newErrors.phone = 'Required'
    } else if (!/^\d{10}$/.test(oneWayData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Valid 10-digit number required'
    }
    return newErrors
  }

  const handleRoundTripSubmit = async (e) => {
    e.preventDefault()
    if (validateRoundTripForm()) {
      setIsLoading(true)
      try {
        const calculation = await calculateFare('round-trip')
        const finalCalculation = {
          ...roundTripData,
          tripType: 'round-trip',
          ...calculation,
          fullTime: formatFullTime(roundTripData.time, roundTripData.timePeriod),
          date: roundTripData.date,
          returnDate: roundTripData.returnDate,
          time: roundTripData.time,
          timePeriod: roundTripData.timePeriod,
          name: roundTripData.name,
          phone: roundTripData.phone,
          vehicleType: roundTripData.vehicleType,
          pickupLocation: roundTripData.pickupLocation,
          dropLocation: roundTripData.dropLocation,
          comments: roundTripData.comments
        }
        setCalculatedData(finalCalculation)
        funnelStep.current = 'booking_submit'
        trackEvent('route_search', {
          pickup_city: finalCalculation.pickupLocation,
          destination_city: finalCalculation.dropLocation,
          distance_km: finalCalculation.distance,
          fare: finalCalculation.finalAmount,
          trip_type: 'round-trip'
        })
        trackBookingEvent('fare_calculated', finalCalculation)
        trackBookingEvent('booking_submit', finalCalculation)
        sendFareEstimateLead(finalCalculation)
        setShowSummary(true)
      } catch (err) {
        console.error('Error calculating Round-Trip fare:', err)
        alert('Could not calculate estimate. Please check your pickup and drop locations.')
      } finally {
        setIsLoading(false)
      }
    } else {
      setTimeout(() => {
        const errs = validateRoundTripFormErrorsOnly()
        scrollToFirstError(errs)
      }, 50)
    }
  }

  const validateRoundTripFormErrorsOnly = () => {
    const newErrors = {}
    if (!roundTripData.pickupLocation.trim()) newErrors.pickupLocation = 'Required'
    if (!roundTripData.dropLocation.trim()) newErrors.dropLocation = 'Required'
    if (!roundTripData.date) newErrors.date = 'Required'
    if (!roundTripData.returnDate) newErrors.returnDate = 'Required'
    if (roundTripData.returnDate && roundTripData.date && roundTripData.returnDate < roundTripData.date) {
      newErrors.returnDate = 'Return date must be after pickup date'
    }
    if (!roundTripData.time) {
      newErrors.time = 'Required'
    } else if (isPastTime(roundTripData.date, roundTripData.time, roundTripData.timePeriod)) {
      newErrors.time = 'Cannot select a time in the past'
    }
    if (!roundTripData.vehicleType) newErrors.vehicleType = 'Please select a vehicle'
    if (!roundTripData.name.trim()) newErrors.name = 'Required'
    if (!roundTripData.phone.trim()) {
      newErrors.phone = 'Required'
    } else if (!/^\d{10}$/.test(roundTripData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Valid 10-digit number required'
    }
    return newErrors
  }

  const handleRecoveryChange = (e) => {
    const { name, value } = e.target
    trackDateEvent(name, value, 'recovery_services')
    setRecoveryData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleRecoveryTimePeriodChange = (period) => {
    setRecoveryData(prev => ({ ...prev, timePeriod: period }))
  }

  const validateRecoveryForm = () => {
    const newErrors = {}
    if (!recoveryData.vehicleType) newErrors.vehicleType = 'Required'
    if (!recoveryData.name.trim()) newErrors.name = 'Required'
    if (!recoveryData.phone.trim()) {
      newErrors.phone = 'Required'
    } else if (!/^\d{10}$/.test(recoveryData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Valid 10-digit number required'
    }
    if (!recoveryData.date) newErrors.date = 'Required'
    if (!recoveryData.time) {
      newErrors.time = 'Required'
    } else if (isPastTime(recoveryData.date, recoveryData.time, recoveryData.timePeriod)) {
      newErrors.time = 'Cannot select a time in the past'
    }
    if (!recoveryData.pickupLocation.trim()) newErrors.pickupLocation = 'Required'
    if (!recoveryData.dropLocation.trim()) newErrors.dropLocation = 'Required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const calculateRecoveryFare = async () => {
    const isFlatbed = recoveryData.vehicleType === 'Flatbed';
    
    // Attempt Authoritative Backend API Calculation First
    try {
      const backendFare = await apiClient.calculateRecoveryFare({
        recoveryType: isFlatbed ? 'FLATBED' : 'UNDER_WHEEL',
        origin: recoveryData.pickupLocation || 'Chennai',
        destination: recoveryData.dropLocation || 'Tambaram'
      });

      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'backend_fare_success',
          serviceType: 'recovery_services',
          finalAmount: backendFare.finalAmount
        });
      }

      return {
        distance: Math.round(backendFare.routeDistanceKm || 0),
        baseFare: Math.round(backendFare.baseFare || backendFare.finalAmount),
        nightSurcharge: Math.round(backendFare.bata || 0),
        finalAmount: Math.round(backendFare.finalAmount),
        isNight: false,
        actualDistance: Math.round(backendFare.routeDistanceKm || 0),
        isBackendAuthoritative: true,
        fareSource: 'backend_success',
        extraNote: 'Authoritative recovery fare estimate calculated by SAMAYAS API.'
      };
    } catch (backendErr) {
      console.warn('Backend recovery calculation fallback activated:', backendErr.message);

      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({ event: 'backend_fare_failure', error: backendErr.message });
        window.dataLayer.push({ event: 'fallback_fare_used', serviceType: 'recovery_services' });
      }

      // Phase 7 Authoritative Recovery Fallback Calculation
      const routeInfo = await calculateRouteDetails(
        recoveryData.pickupLocation, 
        recoveryData.dropLocation, 
        recoveryData.pickupLocationCoords, 
        recoveryData.dropLocationCoords
      );
      const oneWay = routeInfo.distance;
      const distance = Math.round(oneWay * 2); // Round trip up & down distance

      const minCharge = isFlatbed ? 2500 : 2000;
      const excessRate = isFlatbed ? 80 : 60;
      const baseDistanceLimit = 10;
      
      let baseFare = minCharge;
      if (distance > baseDistanceLimit) {
        baseFare += (distance - baseDistanceLimit) * excessRate;
      }

      // Night surcharge logic (20% for 9 PM to 6 AM)
      let nightSurcharge = 0;
      let isNight = false;
      if (recoveryData.time) {
        const { hours } = parse24HourTime(recoveryData.time, recoveryData.timePeriod);
        if (hours >= 21 || hours < 6) {
          isNight = true;
          nightSurcharge = Math.round(baseFare * 0.20);
        }
      }

      const finalAmount = Math.round(baseFare + nightSurcharge);
      
      return {
        distance,
        baseFare: Math.round(baseFare),
        nightSurcharge,
        finalAmount,
        isNight,
        actualDistance: distance,
        isBackendAuthoritative: false,
        fareSource: 'fallback_used',
        extraNote: 'Authoritative SAMAYAS recovery fare formula: First 10 km included in base charge (Under-wheel ₹2,000 / Flatbed ₹2,500). Excess distance billed at ₹60/km (Under-wheel) / ₹80/km (Flatbed).'
      };
    }
  };

  const handleRecoverySubmit = async (e) => {
    e.preventDefault()
    if (validateRecoveryForm()) {
      setIsLoading(true)
      try {
        const calculation = await calculateRecoveryFare()
        const finalCalculation = {
          ...recoveryData,
          tripType: 'recovery_services',
          ...calculation,
          fullTime: formatFullTime(recoveryData.time, recoveryData.timePeriod)
        }
        setCalculatedData(finalCalculation)
        funnelStep.current = 'booking_submit'
        trackEvent('route_search', {
          pickup_city: finalCalculation.pickupLocation,
          destination_city: finalCalculation.dropLocation,
          distance_km: finalCalculation.distance,
          fare: finalCalculation.finalAmount,
          trip_type: 'recovery_services'
        })
        trackBookingEvent('fare_calculated', finalCalculation)
        trackBookingEvent('booking_submit', finalCalculation)
        sendFareEstimateLead(finalCalculation)
        setShowSummary(true)
      } catch (error) {
        console.error('Calculation error:', error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleToursChange = (e) => {
    const { name, value } = e.target
    trackDateEvent(name, value, 'tours_travels')
    setToursData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleToursTimePeriodChange = (period) => {
    setToursData(prev => ({ ...prev, timePeriod: period }))
  }

  const validateToursForm = () => {
    const newErrors = {}
    if (!toursData.name.trim()) newErrors.name = 'Required'
    if (!toursData.phone.trim()) {
      newErrors.phone = 'Required'
    } else if (!/^\d{10}$/.test(toursData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Valid 10-digit number required'
    }
    if (!toursData.date) newErrors.date = 'Required'
    if (!toursData.time) {
      newErrors.time = 'Required'
    } else if (isPastTime(toursData.date, toursData.time, toursData.timePeriod)) {
      newErrors.time = 'Cannot select a time in the past'
    }
    if (!toursData.pickupLocation.trim()) newErrors.pickupLocation = 'Required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const calculateToursFare = async () => {
    const { packageType, vehicleCategory, days, pickupLocation, dropLocation, packageId } = toursData
    const numDays = Math.max(1, parseInt(days) || 1)
    
    // Map vehicle string to backend vehicle enum
    const mapVehicleTier = (cat = '') => {
      const s = String(cat).toUpperCase();
      if (s.includes('HATCH')) return 'HATCHBACK';
      if (s.includes('HYCROSS')) return 'INNOVA HYCROSS';
      if (s.includes('INNOVA')) return 'INNOVA';
      if (s.includes('SUV')) return 'SUV';
      return 'SEDAN';
    };

    const targetPackageId = packageId || (dropLocation && dropLocation.toLowerCase().includes('ooty') ? 'ooty_2d1n' : 'ooty_2d1n');
    const vehicleTier = mapVehicleTier(vehicleCategory);

    // Attempt Authoritative Backend API Calculation First
    try {
      const backendFare = await apiClient.calculateToursFare({
        packageId: targetPackageId,
        vehicle: vehicleTier
      });

      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'backend_fare_success',
          serviceType: 'tours_and_travels',
          finalAmount: backendFare.finalAmount
        });
      }

      return {
        distance: Math.round(backendFare.routeDistanceKm || 0),
        baseFare: Math.round(backendFare.baseFare || backendFare.finalAmount),
        bata: Math.round(backendFare.bata || 0),
        finalAmount: Math.round(backendFare.finalAmount),
        actualDistance: Math.round(backendFare.routeDistanceKm || 0),
        isBackendAuthoritative: true,
        fareSource: 'backend_success',
        extraNote: 'Authoritative tour package fare estimated by SAMAYAS API.'
      };
    } catch (backendErr) {
      const isRejection = backendErr.code === 'UNSUPPORTED_VEHICLE_FOR_PACKAGE' || backendErr.status === 422;
      console.warn(isRejection ? 'Backend tours package rejection:' : 'Backend tours calculation fallback activated:', backendErr.message);

      if (typeof window !== 'undefined' && window.dataLayer) {
        if (isRejection) {
          window.dataLayer.push({ event: 'backend_fare_rejected', code: backendErr.code, message: backendErr.message });
        } else {
          window.dataLayer.push({ event: 'backend_fare_failure', error: backendErr.message });
          window.dataLayer.push({ event: 'fallback_fare_used', serviceType: 'tours_and_travels' });
        }
      }

      if (isRejection) {
        return {
          isBackendAuthoritative: true,
          fareSource: 'backend_rejected',
          errorMsg: backendErr.message || 'Selected vehicle tier is not supported for this tour package.'
        };
      }
    }

    let baseFare = 0
    let distance = 0
    let bata = 0
    let extraNote = ''

    if (pickupLocation && dropLocation) {
      const routeInfo = await calculateRouteDetails(pickupLocation, dropLocation, toursData.pickupLocationCoords, toursData.dropLocationCoords)
      distance = routeInfo.distance
    }

    if (packageType === 'local_mini') {
      const miniRates = {
        'Sedan (4+1)': { base: 1400, extraHr: 250, extraKm: 14 },
        'SUV (6+1)': { base: 2000, extraHr: 400, extraKm: 20 },
        'Premium SUV (7+1)': { base: 2500, extraHr: 500, extraKm: 25 },
        'Tempo Traveller (12 Seater)': { base: 3000, extraHr: 500, extraKm: 24 },
        'Tempo Traveller (18 Seater)': { base: 3500, extraHr: 600, extraKm: 28 },
      }
      const r = miniRates[vehicleCategory] || miniRates['Sedan (4+1)']
      baseFare = r.base
      extraNote = `Mini Local Package (5 Hrs / 50 KM). Overtime: Rs ${r.extraHr}/hr & Rs ${r.extraKm}/km.`

    } else if (packageType === 'local_fullday') {
      const fullRates = {
        'Sedan (4+1)': { base: 2800, extraHr: 250, extraKm: 14 },
        'SUV (6+1)': { base: 4000, extraHr: 400, extraKm: 20 },
        'Premium SUV (7+1)': { base: 5000, extraHr: 500, extraKm: 25 },
        'Tempo Traveller (12 Seater)': { base: 6000, extraHr: 500, extraKm: 24 },
        'Tempo Traveller (18 Seater)': { base: 7000, extraHr: 600, extraKm: 28 },
      }
      const r = fullRates[vehicleCategory] || fullRates['Sedan (4+1)']
      baseFare = r.base
      extraNote = `Full Day Local Package (10 Hrs / 100 KM). Overtime: Rs ${r.extraHr}/hr & Rs ${r.extraKm}/km.`

    } else if (packageType === 'outstation_round') {
      const outRates = {
        'Sedan (4+1)': { rateKm: 14, peta: 500 },
        'SUV (6+1)': { rateKm: 19, peta: 600 },
        'Premium SUV (7+1)': { rateKm: 22, peta: 800 },
        'Tempo Traveller (12 Seater)': { rateKm: 24, peta: 800 },
        'Tempo Traveller (14+1 Seater)': { rateKm: 26, peta: 900 },
        'Tempo Traveller (18 Seater)': { rateKm: 28, peta: 1000 },
      }
      const r = outRates[vehicleCategory] || outRates['Sedan (4+1)']
      const minDistance = numDays * 300
      const roundTripDistance = distance > 0 ? Math.max(distance * 2, minDistance) : minDistance
      distance = roundTripDistance
      baseFare = roundTripDistance * r.rateKm
      bata = numDays * r.peta
      extraNote = `Outstation Round-Trip (${numDays} Day(s) @ min 300 KM/day). Driver Peta: Rs ${bata} (Rs ${r.peta}/day). Rate: Rs ${r.rateKm}/km.`

    } else if (packageType === 'oneway_drop') {
      const dropRates = {
        'Sedan (4+1)': { rateKm: 15 },
        'SUV (6+1)': { rateKm: 20 },
        'Premium SUV (7+1)': { rateKm: 23 },
      }
      const r = dropRates[vehicleCategory] || dropRates['Sedan (4+1)']
      const billableKm = Math.max(distance, 130)
      baseFare = billableKm * r.rateKm
      extraNote = `One-Way Drop Package. Minimum billing 130 KM limit applied. Rate: Rs ${r.rateKm}/km.`

    } else if (packageType === 'bus_rental') {
      const busRates = {
        'Mini Bus (21 Seater)': { rateKm: 28, peta: 1000 },
        'Executive Bus (25 Seater)': { rateKm: 34, peta: 1000 },
        'AC Coach (40 Seater)': { rateKm: 60, peta: 1200 },
        'Luxury AC Coach (54 Seater)': { rateKm: 70, peta: 1500 },
      }
      const r = busRates[vehicleCategory] || busRates['Mini Bus (21 Seater)']
      const minDistance = numDays * 300
      const tripDistance = distance > 0 ? Math.max(distance * 2, minDistance) : minDistance
      distance = tripDistance
      baseFare = tripDistance * r.rateKm
      bata = numDays * r.peta
      extraNote = `Bus & Group Event Rental (${numDays} Day(s) @ min 300 KM/day). Driver Peta: Rs ${bata} (Rs ${r.peta}/day). Rate: Rs ${r.rateKm}/km.`
    }

    const finalAmount = Math.round(baseFare + bata)

    return {
      distance: Math.round(distance),
      baseFare: Math.round(baseFare),
      bata: Math.round(bata),
      finalAmount,
      actualDistance: Math.round(distance),
      isBackendAuthoritative: false,
      fareSource: 'fallback_used',
      extraNote: `${extraNote} Exclusions: Toll charges, Interstate Permit fees, and Parking charges are extra. Day Calculation: Calendar day system (12:00 AM to 11:59 PM) applies for Driver Allowance.`
    }
  }

  const handleToursSubmit = async (e) => {
    e.preventDefault()
    if (validateToursForm()) {
      setIsLoading(true)
      try {
        const calculation = await calculateToursFare()
        const finalCalculation = {
          ...toursData,
          tripType: 'tours_travels',
          vehicleType: `Tours & Travels - ${toursData.vehicleCategory}`,
          ...calculation,
          fullTime: formatFullTime(toursData.time, toursData.timePeriod)
        }
        setCalculatedData(finalCalculation)
        funnelStep.current = 'booking_submit'
        trackEvent('route_search', {
          pickup_city: finalCalculation.pickupLocation,
          destination_city: finalCalculation.dropLocation || 'Local',
          distance_km: finalCalculation.distance,
          fare: finalCalculation.finalAmount,
          trip_type: 'tours_travels'
        })
        trackBookingEvent('fare_calculated', finalCalculation)
        trackBookingEvent('booking_submit', finalCalculation)
        sendFareEstimateLead(finalCalculation)
        setShowSummary(true)
      } catch (error) {
        console.error('Calculation error:', error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const calculateDriverFare = async (driverDataPayload = null) => {
    const data = driverDataPayload || otherServiceData;
    
    // Attempt Authoritative Backend API Calculation First
    try {
      const backendFare = await apiClient.calculateActingDriverFare({
        packageId: data.packageId || 'LOCAL_4H',
        durationHours: parseInt(data.durationHours || data.hours) || 4,
        isNightShift: Boolean(data.isNightShift || data.isNight),
        providesFood: data.providesFood !== false
      });

      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'backend_fare_success',
          serviceType: 'acting_driver',
          finalAmount: backendFare.finalAmount
        });
      }

      return {
        baseFare: Math.round(backendFare.baseFare || backendFare.finalAmount),
        overtime: Math.round(backendFare.overtime || 0),
        nightSurcharge: Math.round(backendFare.bata || 0),
        foodAllowance: 0,
        finalAmount: Math.round(backendFare.finalAmount),
        isBackendAuthoritative: true,
        fareSource: 'backend_success'
      };
    } catch (backendErr) {
      console.warn('Backend driver calculation fallback activated:', backendErr.message);

      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({ event: 'backend_fare_failure', error: backendErr.message });
        window.dataLayer.push({ event: 'fallback_fare_used', serviceType: 'acting_driver' });
      }

      // Phase 7 Authoritative Acting Driver Fallback Rules:
      // Local 4H = ₹500, Out-of-City 4H = ₹600, Full-Day 10H = ₹1,100, One-Way Drop 50km = ₹1,200, Outstation Highway 6H/150km = ₹800
      // Overtime = ₹180/hr, Night = ₹150, Food = ₹150
      const packageType = String(data.packageType || data.serviceType || '').toLowerCase();
      let baseFare = 500;
      if (packageType.includes('out_of_city') || packageType.includes('out-of-city')) {
        baseFare = 600;
      } else if (packageType.includes('10h') || packageType.includes('full') || packageType.includes('full-day')) {
        baseFare = 1100;
      } else if (packageType.includes('drop') || packageType.includes('one-way')) {
        baseFare = 1200;
      } else if (packageType.includes('highway') || packageType.includes('outstation')) {
        baseFare = 800;
      }

      const extraHours = Math.max(0, (parseInt(data.hours) || 4) - 4);
      const overtime = extraHours * 180;
      const nightSurcharge = data.isNight ? 150 : 0;
      const foodAllowance = data.foodProvided === false ? 150 : 0;
      const finalAmount = baseFare + overtime + nightSurcharge + foodAllowance;

      return {
        baseFare,
        overtime,
        nightSurcharge,
        foodAllowance,
        finalAmount,
        isBackendAuthoritative: false,
        fareSource: 'fallback_used'
      };
    }
  };

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
        const formattedTime = formatFullTime(otherServiceData.time, otherServiceData.timePeriod)

        // Ensure all values are strings
        const serviceType = String(otherServiceData.serviceType || 'N/A')
        const customerName = String(otherServiceData.name || 'N/A')
        const customerPhone = String(otherServiceData.phone || 'N/A')
        const serviceDate = formatDate(otherServiceData.date) || 'N/A'
        const pickupLocation = String(otherServiceData.pickupLocation || 'N/A')
        const dropLocation = String(otherServiceData.dropLocation || 'N/A')
        const comments = String(otherServiceData.comments || 'No additional comments')

        const templateParams = {
          // Email subject
          subject: `Other Service Booking - ${serviceType}`,
          
          // Service information
          service_type: serviceType,
          booking_type: serviceType,
          
          // Customer information
          customer_name: customerName,
          customer_phone: customerPhone,
          
          // Date and time
          service_date: serviceDate,
          service_time: formattedTime || 'N/A',
          booking_date: serviceDate,
          booking_time: formattedTime || 'N/A',
          date: serviceDate,
          time: formattedTime || 'N/A',
          
          // Location information
          pickup_location: pickupLocation,
          drop_location: dropLocation,
          
          // Additional comments/notes
          comments: comments,
          customer_notes: comments,
          additional_notes: comments
        }

      funnelStep.current = 'booking_submit'
      const otherBookingPayload = {
        pickupLocation: pickupLocation,
        dropLocation: dropLocation,
        tripType: 'other',
        vehicleType: serviceType,
        finalAmount: 0,
        distance: 0,
        date: serviceDate
      }
      trackBookingEvent('booking_submit', otherBookingPayload)
      let backendBooking = null;
      try {
        backendBooking = await apiClient.createBooking({
          customerName,
          customerPhone,
          origin: pickupLocation,
          destination: dropLocation,
          vehicleType,
          tripType: isRoundTrip ? 'round-trip' : 'one-way',
          travelDate: bookingDate,
          travelTime: formattedTime,
          notes: finalComments,
        });
        if (backendBooking?.bookingReference) {
          templateParams.booking_reference = backendBooking.bookingReference;
          templateParams.subject = `${templateParams.subject} (${backendBooking.bookingReference})`;
        }
      } catch (backendErr) {
        console.warn('Backend booking API non-blocking fallback:', backendErr.message);
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey).catch((e) => console.warn('EmailJS delivery attempt notice:', e));
      
      const referenceId = backendBooking?.bookingReference || `SAM-${Date.now()}`;
      trackBookingEvent('booking_request_submitted', { ...calculatedData, booking_reference: referenceId });
      
      funnelStep.current = 'booking_completed'
      trackBookingEvent('booking_completed', { ...otherBookingPayload, booking_id: `bkg_${Date.now()}` })
      trackAdsConversion('booking_completed')
      setShowThankYou(true)
        
        // Reset form
        setOtherServiceData({
          serviceType: '',
          name: '',
          phone: '',
          date: '',
          time: '',
          timePeriod: 'AM',
          pickupLocation: '',
          dropLocation: '',
          comments: ''
        })
      } catch (error) {
        console.error('Error sending email:', error)
        import('../utils/analytics').then(({ trackEvent }) => trackEvent('booking_failed', { error_message: error.message }))
        setShowThankYou(true)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleConfirmBooking = async () => {
    setIsLoading(true)
    try {
      const isRoundTrip = calculatedData?.tripType === 'round-trip'
      const isActingDriver = calculatedData?.tripType === 'acting-driver'
      const isRecovery = calculatedData?.tripType === 'recovery_services'
      
      const tripName = isRecovery ? 'Recovery Service' : isActingDriver ? 'Acting Driver' : isRoundTrip ? 'Round Trip Taxi' : 'One-Way Taxi'
      const shortTripType = isRecovery ? 'Recovery' : isActingDriver ? 'Acting Driver' : isRoundTrip ? 'Round Trip' : 'One-Way'

      // Fire booking intent event
      if (calculatedData?.tripType === 'one-way' || !calculatedData?.tripType) {
        trackEvent('one_way_booking_intent', {
          service: 'one_way_taxi',
          origin: calculatedData?.pickupLocation || 'N/A',
          destination: calculatedData?.dropLocation || 'N/A',
          route_distance: calculatedData?.distance || 0,
          billable_distance: calculatedData?.billableDistance || Math.max(calculatedData?.distance || 0, 130),
          vehicle: calculatedData?.vehicleType || 'N/A',
          fare: calculatedData?.finalAmount || 0
        })
      }
      
      // Use appropriate template based on trip type
      const templateId = isRecovery ? OTHER_SERVICES_TEMPLATE_ID : isRoundTrip ? ROUND_TRIP_TEMPLATE_ID : ONE_WAY_TAXI_TEMPLATE_ID

      // Get the actual date value - prioritize calculatedData since it has all the form data
      const bookingDate = calculatedData?.date || (isRoundTrip ? roundTripData.date : isRecovery ? recoveryData.date : oneWayData.date) || ''
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
      const bookingTime = calculatedData?.time || (isRoundTrip ? roundTripData.time : isRecovery ? recoveryData.time : oneWayData.time) || ''
      const bookingTimePeriod = calculatedData?.timePeriod || (isRoundTrip ? roundTripData.timePeriod : isRecovery ? recoveryData.timePeriod : oneWayData.timePeriod) || 'AM'
      const formattedTime = bookingTime ? formatFullTime(bookingTime, bookingTimePeriod) : ''

      // Format the dates
      const formattedDate = formatDate(bookingDate)
      // Always format return_date - use 'N/A' for one-way trips (empty string causes EmailJS corruption error)
      // EmailJS requires all variables referenced in template to be present and non-empty
      const formattedReturnDate = returnDate ? formatDate(returnDate) : 'N/A'

      // Get all values with proper fallbacks and ensure they're strings
      const customerName = String(calculatedData?.name || (isRoundTrip ? roundTripData.name : isRecovery ? recoveryData.name : oneWayData.name) || 'N/A')
      const customerPhone = String(calculatedData?.phone || (isRoundTrip ? roundTripData.phone : isRecovery ? recoveryData.phone : oneWayData.phone) || 'N/A')
      const vehicleType = String(calculatedData?.vehicleType || (isRoundTrip ? roundTripData.vehicleType : isRecovery ? recoveryData.vehicleType : oneWayData.vehicleType) || 'N/A')
      const pickupLocation = String(calculatedData?.pickupLocation || (isRoundTrip ? roundTripData.pickupLocation : isRecovery ? recoveryData.pickupLocation : oneWayData.pickupLocation) || 'N/A')
      const dropLocation = String(calculatedData?.dropLocation || (isRoundTrip ? roundTripData.dropLocation : isRecovery ? recoveryData.dropLocation : oneWayData.dropLocation) || 'N/A')
      const comments = String(calculatedData?.comments || (isRoundTrip ? roundTripData.comments : isRecovery ? recoveryData.comments : oneWayData.comments) || 'No additional comments')
      const baseFare = calculatedData?.baseFare || 0
      const bata = calculatedData?.bata || 0
      const finalAmount = calculatedData?.finalAmount || 0
      const distance = calculatedData?.distance || 0

      const flightNumber = String(calculatedData?.flightNumber || oneWayData.flightNumber || 'N/A')
      const airline = String(calculatedData?.airline || oneWayData.airline || 'N/A')
      const passengerCount = String(calculatedData?.passengerCount || oneWayData.passengerCount || 'N/A')
      const hasFlightInfo = flightNumber !== 'N/A' || airline !== 'N/A'
      const flightDetailsStr = hasFlightInfo ? `Flight: ${flightNumber} | Airline: ${airline} | Passengers: ${passengerCount}` : 'N/A'

      const finalComments = hasFlightInfo
        ? `${comments === 'No additional comments' ? '' : comments + ' | '}Flight Details: ${flightDetailsStr}`
        : comments

      // Build template params - ALWAYS include return_date (empty string for one-way)
      // EmailJS requires all variables referenced in {{#if return_date}} to be present
      const templateParams = {
        // Email subject
        subject: hasFlightInfo ? `${tripName} Booking (${flightNumber} - ${airline})` : `${tripName} Booking Request`,
        
        // Service and booking type
        service_type: tripName,
        booking_type: tripName,
        trip_type: shortTripType,
        
        // Customer information
        customer_name: customerName,
        customer_phone: customerPhone,
        
        // Vehicle information
        vehicle_type: vehicleType,
        car_type: vehicleType,
        
        // Location information
        pickup_location: pickupLocation,
        drop_location: dropLocation,
        google_maps_link: pickupLocation !== 'N/A' && dropLocation !== 'N/A' 
          ? `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(pickupLocation)}&destination=${encodeURIComponent(dropLocation)}`
          : 'N/A',
        
        // Date and time
        booking_date: formattedDate || 'N/A',
        service_date: formattedDate || 'N/A',
        date: formattedDate || 'N/A',
        return_date: formattedReturnDate, // Always include - 'N/A' for one-way, formatted date for round trip
        booking_time: formattedTime || 'N/A',
        service_time: formattedTime || 'N/A',
        time: formattedTime || 'N/A',
        
        // Pricing information
        base_fare: `₹${baseFare.toLocaleString('en-IN')}`,
        bata: `₹${bata.toLocaleString('en-IN')}`,
        final_amount: `₹${finalAmount.toLocaleString('en-IN')}`,
        total_amount: `₹${finalAmount.toLocaleString('en-IN')}`,
        distance: `${distance} km`,
        
        // Flight & Arrival Details
        flight_number: flightNumber,
        flightNumber: flightNumber,
        airline_name: airline,
        airline: airline,
        passenger_count: passengerCount,
        passengerCount: passengerCount,
        flight_details: flightDetailsStr,
        
        // Additional comments/notes
        comments: finalComments,
        customer_notes: finalComments,
        additional_notes: finalComments
      }

      // Log template params for debugging (remove in production)
      console.log('EmailJS Template Params:', templateParams)
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      // Tracking
      funnelStep.current = 'booking_completed'
      const finalBookingData = { ...calculatedData, booking_id: `bkg_${Date.now()}` }
      trackBookingEvent('booking_completed', finalBookingData)
      trackAdsConversion('booking_completed', null, finalAmount)
      
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
          phone: '',
          comments: ''
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
          phone: '',
          comments: ''
        })
      }
      
      setShowThankYou(true)
    } catch (error) {
      console.error('Error sending booking confirmation:', error)
      import('../utils/analytics').then(({ trackEvent }) => trackEvent('booking_failed', { error_message: error.message }))
      setShowThankYou(true)
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
            </div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`grid gap-1.5 bg-primary-800/50 rounded-xl p-1.5 mb-6 backdrop-blur-sm border border-white/10 ${
                isSidebar ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
              }`}
            >
              <button
                type="button"
                onClick={() => {
                  setActiveTab('oneway')
                  setErrors({})
                  trackEvent('trip_type_selected', { trip_type: 'one-way' })
                  trackEvent('booking_started', { trip_type: 'one-way' })
                }}
                className={`rounded-lg font-semibold transition-all duration-300 text-center ${
                  isSidebar ? 'px-2 py-2 text-[11px] font-bold leading-snug' : 'px-3 py-3 text-xs sm:text-sm md:text-base'
                } ${
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
                  trackEvent('trip_type_selected', { trip_type: 'round-trip' })
                  trackEvent('booking_started', { trip_type: 'round-trip' })
                }}
                className={`rounded-lg font-semibold transition-all duration-300 text-center ${
                  isSidebar ? 'px-2 py-2 text-[11px] font-bold leading-snug' : 'px-3 py-3 text-xs sm:text-sm md:text-base'
                } ${
                  activeTab === 'roundtrip'
                    ? 'bg-accent-500 text-black shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                Round Trip Taxi
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('acting_driver')
                  setOtherServiceData(prev => ({ ...prev, serviceType: 'Acting Driver' }))
                  setErrors({})
                  trackEvent('trip_type_selected', { trip_type: 'acting_driver' })
                  trackEvent('booking_started', { trip_type: 'acting_driver' })
                }}
                className={`rounded-lg font-semibold transition-all duration-300 text-center ${
                  isSidebar ? 'px-2 py-2 text-[11px] font-bold leading-snug' : 'px-3 py-3 text-xs sm:text-sm md:text-base'
                } ${
                  activeTab === 'acting_driver'
                    ? 'bg-accent-500 text-black shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                Acting Driver
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('tours_travels')
                  setOtherServiceData(prev => ({ ...prev, serviceType: 'Tours & Travels' }))
                  setErrors({})
                  trackEvent('trip_type_selected', { trip_type: 'tours_travels' })
                  trackEvent('booking_started', { trip_type: 'tours_travels' })
                }}
                className={`rounded-lg font-semibold transition-all duration-300 text-center ${
                  isSidebar ? 'px-2 py-2 text-[11px] font-bold leading-snug' : 'px-3 py-3 text-xs sm:text-sm md:text-base'
                } ${
                  activeTab === 'tours_travels'
                    ? 'bg-accent-500 text-black shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                Tours & Travels
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('recovery_services')
                  setOtherServiceData(prev => ({ ...prev, serviceType: 'Recovery Services' }))
                  setErrors({})
                  trackEvent('trip_type_selected', { trip_type: 'recovery_services' })
                  trackEvent('booking_started', { trip_type: 'recovery_services' })
                }}
                className={`rounded-lg font-semibold transition-all duration-300 text-center ${
                  isSidebar ? 'px-2 py-2 text-[11px] font-bold leading-snug' : 'px-3 py-3 text-xs sm:text-sm md:text-base'
                } ${
                  activeTab === 'recovery_services'
                    ? 'bg-accent-500 text-black shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                Recovery Services
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
                    <div className={isSidebar ? 'grid grid-cols-1 gap-3.5' : 'grid md:grid-cols-2 gap-4'}>
                      <div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <MapPin className="w-4 h-4 inline mr-2 text-accent-500" />
                          Pickup Location *
                        </label>
                        <div className="relative flex items-center">
                          <input
                            ref={oneWayPickupRef}
                            type="text"
                            name="pickupLocation"
                            value={oneWayData.pickupLocation}
                            onChange={handleOneWayChange}
                            placeholder="Enter pickup address"
                            className={`w-full pl-4 pr-24 py-3 bg-white rounded-lg border ${
                              errors.pickupLocation ? 'border-red-500' : 'border-gray-300'
                            } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm`}
                          />
                          <div className="absolute right-2 flex items-center gap-1.5 z-10">
                            <button
                              type="button"
                              onClick={() => handleGPSLocate('pickup', setOneWayData, 'pickupLocation')}
                              disabled={isGpsLoading.pickup}
                              className="p-1.5 rounded-md bg-gray-100 hover:bg-primary-100 text-primary-700 transition-all shadow-sm hover:scale-105 active:scale-95 disabled:opacity-50 group"
                              title="Use Current GPS Location"
                              aria-label="Use Current GPS Location"
                            >
                              {isGpsLoading.pickup ? (
                                <Loader2 className="w-4 h-4 animate-spin text-primary-600" />
                              ) : (
                                <Navigation className="w-4 h-4 text-primary-600 group-hover:rotate-12 transition-transform fill-primary-600/20" />
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => openMapPicker('pickup', 'Select Pickup Location', oneWayData.pickupLocation, setOneWayData, 'pickupLocation')}
                              className="p-1.5 rounded-md bg-accent-500 hover:bg-accent-600 text-black transition-all shadow-sm hover:scale-105 active:scale-95 group"
                              title="Pick on Google Maps"
                              aria-label="Pick on Google Maps"
                            >
                              <Map className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                            </button>
                          </div>
                        </div>
                        {errors.pickupLocation && (
                          <p className="mt-1 text-sm text-red-400">{errors.pickupLocation}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <MapPin className="w-4 h-4 inline mr-2 text-accent-500" />
                          Drop Location *
                        </label>
                        <div className="relative flex items-center">
                          <input
                            ref={oneWayDropRef}
                            type="text"
                            name="dropLocation"
                            value={oneWayData.dropLocation}
                            onChange={handleOneWayChange}
                            placeholder="Enter drop address"
                            className={`w-full pl-4 pr-24 py-3 bg-white rounded-lg border ${
                              errors.dropLocation ? 'border-red-500' : 'border-gray-300'
                            } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm`}
                          />
                          <div className="absolute right-2 flex items-center gap-1.5 z-10">
                            <button
                              type="button"
                              onClick={() => handleGPSLocate('drop', setOneWayData, 'dropLocation')}
                              disabled={isGpsLoading.drop}
                              className="p-1.5 rounded-md bg-gray-100 hover:bg-primary-100 text-primary-700 transition-all shadow-sm hover:scale-105 active:scale-95 disabled:opacity-50 group"
                              title="Use Current GPS Location"
                              aria-label="Use Current GPS Location"
                            >
                              {isGpsLoading.drop ? (
                                <Loader2 className="w-4 h-4 animate-spin text-primary-600" />
                              ) : (
                                <Navigation className="w-4 h-4 text-primary-600 group-hover:rotate-12 transition-transform fill-primary-600/20" />
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => openMapPicker('drop', 'Select Drop Location', oneWayData.dropLocation, setOneWayData, 'dropLocation')}
                              className="p-1.5 rounded-md bg-accent-500 hover:bg-accent-600 text-black transition-all shadow-sm hover:scale-105 active:scale-95 group"
                              title="Pick on Google Maps"
                              aria-label="Pick on Google Maps"
                            >
                              <Map className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                            </button>
                          </div>
                        </div>
                        {errors.dropLocation && (
                          <p className="mt-1 text-sm text-red-400">{errors.dropLocation}</p>
                        )}
                      </div>
                    </div>

                    {/* Date and Time */}
                    <div className={isSidebar ? 'grid grid-cols-1 gap-3.5' : 'grid md:grid-cols-2 gap-4'}>
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
                          <div className="flex gap-1 bg-primary-700/50 rounded-lg p-1 items-center">
                            <button
                              type="button"
                              onClick={() => handleTimePeriodChange('AM')}
                              aria-label="Select AM time period"
                              className={`px-3 py-2 rounded-md font-bold text-xs transition-all ${
                                oneWayData.timePeriod === 'AM'
                                  ? 'bg-accent-500 text-black shadow-sm'
                                  : 'text-white/70 hover:text-white'
                              }`}
                            >
                              AM
                            </button>
                            <button
                              type="button"
                              onClick={() => handleTimePeriodChange('PM')}
                              aria-label="Select PM time period"
                              className={`px-3 py-2 rounded-md font-bold text-xs transition-all ${
                                oneWayData.timePeriod === 'PM'
                                  ? 'bg-accent-500 text-black shadow-sm'
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

                    {/* Flight Details (Shown for Airport Bookings or Optional) */}
                    {isAirport && (
                      <div className="bg-primary-900/40 p-4 rounded-xl border border-accent-500/20 space-y-3">
                        <div className="flex items-center space-x-2 text-accent-500 font-bold text-xs uppercase tracking-wider">
                          <Briefcase className="w-4 h-4" />
                          <span>Flight & Arrival Details (For Delay Tracking)</span>
                        </div>
                        <div className={isSidebar ? 'grid grid-cols-1 gap-3' : 'grid md:grid-cols-3 gap-3'}>
                          <div>
                            <label className="block text-xs font-semibold text-white/90 mb-1">
                              Flight Number (Optional)
                            </label>
                            <input
                              type="text"
                              name="flightNumber"
                              value={oneWayData.flightNumber || ''}
                              onChange={handleOneWayChange}
                              placeholder="e.g. TR602, MH182"
                              className="w-full px-3 py-2 bg-white rounded-lg text-xs border border-gray-300 text-gray-900 focus:ring-2 focus:ring-accent-500 outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-white/90 mb-1">
                              Airline Name
                            </label>
                            <input
                              type="text"
                              name="airline"
                              value={oneWayData.airline || ''}
                              onChange={handleOneWayChange}
                              placeholder="e.g. Scoot, AirAsia, Indigo"
                              className="w-full px-3 py-2 bg-white rounded-lg text-xs border border-gray-300 text-gray-900 focus:ring-2 focus:ring-accent-500 outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-white/90 mb-1">
                              Passenger Count
                            </label>
                            <select
                              name="passengerCount"
                              value={oneWayData.passengerCount || '1-4 Passengers'}
                              onChange={handleOneWayChange}
                              className="w-full px-3 py-2 bg-white rounded-lg text-xs border border-gray-300 text-gray-900 focus:ring-2 focus:ring-accent-500 outline-none"
                            >
                              <option value="1 Passenger">1 Passenger</option>
                              <option value="2 Passengers">2 Passengers</option>
                              <option value="3-4 Passengers">3-4 Passengers</option>
                              <option value="5-6 Passengers (SUV)">5-6 Passengers (SUV)</option>
                              <option value="7+ Passengers (Traveller)">7+ Passengers (Traveller)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Vehicle Recovery Specific Inputs */}
                    {isRecovery && (
                      <div className="bg-red-950/40 p-4 rounded-xl border border-red-500/30 space-y-3">
                        <div className="flex items-center space-x-2 text-red-400 font-bold text-xs uppercase tracking-wider">
                          <Car className="w-4 h-4 text-red-400" />
                          <span>Emergency Breakdown & Recovery Options</span>
                        </div>
                        <div className={isSidebar ? 'grid grid-cols-1 gap-3' : 'grid md:grid-cols-3 gap-3'}>
                          <div>
                            <label className="block text-xs font-semibold text-white/90 mb-1">
                              Breakdown Issue / Service *
                            </label>
                            <select
                              name="breakdownType"
                              value={oneWayData.breakdownType || 'Car Recovery'}
                              onChange={handleOneWayChange}
                              className="w-full px-3 py-2 bg-white rounded-lg text-xs border border-gray-300 text-gray-900 focus:ring-2 focus:ring-accent-500 outline-none font-semibold"
                            >
                              <option value="Car Recovery">Car Towing & Recovery</option>
                              <option value="Bike Recovery">Two-Wheeler / Superbike Towing</option>
                              <option value="Flatbed Towing">Hydraulic Flatbed Tow Truck</option>
                              <option value="Accident Recovery">Accident & Crane Winching</option>
                              <option value="Breakdown Assistance">Roadside Breakdown Repair</option>
                              <option value="Battery Jump Start">Battery Jump Start</option>
                              <option value="Flat Tyre Assistance">Flat Tyre / Stepney Change</option>
                              <option value="Fuel Delivery">Emergency Fuel Delivery</option>
                              <option value="EV Recovery">Electric Vehicle (EV) Recovery</option>
                              <option value="Commercial Recovery">Commercial / LCV Towing</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-white/90 mb-1">
                              Emergency Dispatch Priority *
                            </label>
                            <select
                              name="emergencyLevel"
                              value={oneWayData.emergencyLevel || 'Immediate Dispatch (High Priority)'}
                              onChange={handleOneWayChange}
                              className="w-full px-3 py-2 bg-white rounded-lg text-xs border border-gray-300 text-gray-900 focus:ring-2 focus:ring-accent-500 outline-none font-semibold"
                            >
                              <option value="Immediate Dispatch (High Priority)">Immediate Dispatch (High Priority)</option>
                              <option value="Standard Roadside Help">Standard Roadside Help</option>
                              <option value="Scheduled Garage Towing">Scheduled Garage Towing</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-white/90 mb-1">
                              Preferred Contact Method
                            </label>
                            <select
                              name="contactMethod"
                              value={oneWayData.contactMethod || 'Phone Call'}
                              onChange={handleOneWayChange}
                              className="w-full px-3 py-2 bg-white rounded-lg text-xs border border-gray-300 text-gray-900 focus:ring-2 focus:ring-accent-500 outline-none font-semibold"
                            >
                              <option value="Phone Call">Phone Call Hotline</option>
                              <option value="WhatsApp Live Location">WhatsApp Live Location</option>
                              <option value="SMS Notification">SMS Notification</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-white/90 mb-1">
                            Destination Garage / Delivery Address (Optional)
                          </label>
                          <input
                            type="text"
                            name="destinationGarage"
                            value={oneWayData.destinationGarage || ''}
                            onChange={handleOneWayChange}
                            placeholder="e.g. Authorized Hyundai Service Center Trichy, Home garage"
                            className="w-full px-3 py-2 bg-white rounded-lg text-xs border border-gray-300 text-gray-900 focus:ring-2 focus:ring-accent-500 outline-none"
                          />
                        </div>
                      </div>
                    )}

                    {/* Vehicle Type Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-3">
                        Select Vehicle Type *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {getVehicleTypes().map((vehicle, index) => {
                          const isSelected = oneWayData.vehicleType === vehicle.type
                          return (
                            <motion.div
                              key={vehicle.type}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              onClick={() => handleVehicleSelect(vehicle.type)}
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              className={`relative cursor-pointer rounded-xl p-3 border-2 transition-all flex flex-col justify-between ${
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
                                aria-label={`Select ${vehicle.alt || vehicle.type}`}
                                className="absolute top-2 right-2 w-4 h-4 accent-accent-500 z-10"
                              />
                              <div className="text-center">
                                <div className="mb-2 flex justify-center">
                                  <div className="relative w-full h-16 sm:h-20 flex items-center justify-center overflow-hidden rounded-lg bg-black/10">
                                    <img
                                      src={vehicle.image}
                                      alt={vehicle.alt || vehicle.type}
                                      className={`w-full h-full object-contain rounded-lg transition-all duration-300 ${
                                        isSelected 
                                          ? 'brightness-110 scale-105' 
                                          : 'brightness-90 hover:brightness-100'
                                      }`}
                                      onError={(e) => {
                                        console.error(`Failed to load image for ${vehicle.type}: ${vehicle.image}`)
                                        e.target.style.display = 'none'
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className={`text-xs font-semibold mb-0.5 ${isSelected ? 'text-accent-500' : 'text-white/70'}`}>
                                  ₹{vehicle.rate}/km
                                </div>
                                <div
                                  className={`text-xs sm:text-sm font-bold uppercase truncate px-1 ${
                                    isSelected ? 'text-white' : 'text-white/80'
                                  }`}
                                  title={vehicle.type}
                                >
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
                    <div className={isSidebar ? 'grid grid-cols-1 gap-3.5' : 'grid md:grid-cols-2 gap-4'}>
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

                    {/* Comments/Notes Field */}
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2 text-accent-500" />
                        Additional Comments / Special Requests (Optional)
                      </label>
                      <textarea
                        name="comments"
                        value={oneWayData.comments}
                        onChange={handleOneWayChange}
                        placeholder="Any customization requests, special instructions, or additional details..."
                        rows={4}
                        className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 resize-none"
                      />
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
                    <div className={isSidebar ? 'grid grid-cols-1 gap-3.5' : 'grid md:grid-cols-2 gap-4'}>
                      <div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <MapPin className="w-4 h-4 inline mr-2 text-accent-500" />
                          Pickup Location *
                        </label>
                        <div className="relative flex items-center">
                          <input
                            ref={roundTripPickupRef}
                            type="text"
                            name="pickupLocation"
                            value={roundTripData.pickupLocation}
                            onChange={handleRoundTripChange}
                            placeholder="Enter pickup address"
                            className={`w-full pl-4 pr-24 py-3 bg-white rounded-lg border ${
                              errors.pickupLocation ? 'border-red-500' : 'border-gray-300'
                            } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm`}
                          />
                          <div className="absolute right-2 flex items-center gap-1.5 z-10">
                            <button
                              type="button"
                              onClick={() => handleGPSLocate('pickup', setRoundTripData, 'pickupLocation')}
                              disabled={isGpsLoading.pickup}
                              className="p-1.5 rounded-md bg-gray-100 hover:bg-primary-100 text-primary-700 transition-all shadow-sm hover:scale-105 active:scale-95 disabled:opacity-50 group"
                              title="Use Current GPS Location"
                              aria-label="Use Current GPS Location"
                            >
                              {isGpsLoading.pickup ? (
                                <Loader2 className="w-4 h-4 animate-spin text-primary-600" />
                              ) : (
                                <Navigation className="w-4 h-4 text-primary-600 group-hover:rotate-12 transition-transform fill-primary-600/20" />
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => openMapPicker('pickup', 'Select Pickup Location', roundTripData.pickupLocation, setRoundTripData, 'pickupLocation')}
                              className="p-1.5 rounded-md bg-accent-500 hover:bg-accent-600 text-black transition-all shadow-sm hover:scale-105 active:scale-95 group"
                              title="Pick on Google Maps"
                              aria-label="Pick on Google Maps"
                            >
                              <Map className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                            </button>
                          </div>
                        </div>
                        {errors.pickupLocation && (
                          <p className="mt-1 text-sm text-red-400">{errors.pickupLocation}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <MapPin className="w-4 h-4 inline mr-2 text-accent-500" />
                          Destination City / Visiting Place *
                        </label>
                        <div className="relative flex items-center">
                          <input
                            ref={roundTripDropRef}
                            type="text"
                            name="dropLocation"
                            value={roundTripData.dropLocation}
                            onChange={handleRoundTripChange}
                            placeholder="Enter destination or visiting place"
                            className={`w-full pl-4 pr-24 py-3 bg-white rounded-lg border ${
                              errors.dropLocation ? 'border-red-500' : 'border-gray-300'
                            } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm`}
                          />
                          <div className="absolute right-2 flex items-center gap-1.5 z-10">
                            <button
                              type="button"
                              onClick={() => handleGPSLocate('drop', setRoundTripData, 'dropLocation')}
                              disabled={isGpsLoading.drop}
                              className="p-1.5 rounded-md bg-gray-100 hover:bg-primary-100 text-primary-700 transition-all shadow-sm hover:scale-105 active:scale-95 disabled:opacity-50 group"
                              title="Use Current GPS Location"
                              aria-label="Use Current GPS Location"
                            >
                              {isGpsLoading.drop ? (
                                <Loader2 className="w-4 h-4 animate-spin text-primary-600" />
                              ) : (
                                <Navigation className="w-4 h-4 text-primary-600 group-hover:rotate-12 transition-transform fill-primary-600/20" />
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => openMapPicker('drop', 'Select Destination Location', roundTripData.dropLocation, setRoundTripData, 'dropLocation')}
                              className="p-1.5 rounded-md bg-accent-500 hover:bg-accent-600 text-black transition-all shadow-sm hover:scale-105 active:scale-95 group"
                              title="Pick on Google Maps"
                              aria-label="Pick on Google Maps"
                            >
                              <Map className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                            </button>
                          </div>
                        </div>
                        {errors.dropLocation && (
                          <p className="mt-1 text-sm text-red-400">{errors.dropLocation}</p>
                        )}
                      </div>
                    </div>

                    {/* Date and Return Date */}
                    <div className={isSidebar ? 'grid grid-cols-1 gap-3.5' : 'grid md:grid-cols-2 gap-4'}>
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
                            aria-label="Select AM time period"
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
                            aria-label="Select PM time period"
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
                      <div className="grid grid-cols-2 sm:grid-cols-3 min-[1100px]:grid-cols-5 gap-3">
                        {getVehicleTypes().map((vehicle, index) => {
                          const isSelected = roundTripData.vehicleType === vehicle.type
                          return (
                            <motion.div
                              key={vehicle.type}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              onClick={() => handleVehicleSelect(vehicle.type)}
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              className={`relative cursor-pointer rounded-xl p-3 border-2 transition-all flex flex-col justify-between ${
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
                                aria-label={`Select ${vehicle.alt || vehicle.type}`}
                                className="absolute top-2 right-2 w-4 h-4 accent-accent-500 z-10"
                              />
                              <div className="text-center">
                                <div className="mb-2 flex justify-center">
                                  <div className="relative w-full h-16 sm:h-20 flex items-center justify-center overflow-hidden rounded-lg bg-black/10">
                                    <img
                                      src={vehicle.image}
                                      alt={vehicle.alt || vehicle.type}
                                      className={`w-full h-full object-contain rounded-lg transition-all duration-300 ${
                                        isSelected 
                                          ? 'brightness-110 scale-105' 
                                          : 'brightness-90 hover:brightness-100'
                                      }`}
                                      onError={(e) => {
                                        console.error(`Failed to load image for ${vehicle.type}: ${vehicle.image}`)
                                        e.target.style.display = 'none'
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className={`text-xs font-semibold mb-0.5 ${isSelected ? 'text-accent-500' : 'text-white/70'}`}>
                                  ₹{vehicle.rate}/km
                                </div>
                                <div
                                  className={`text-xs sm:text-sm font-bold uppercase truncate px-1 ${
                                    isSelected ? 'text-white' : 'text-white/80'
                                  }`}
                                  title={vehicle.type}
                                >
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
                    <div className={isSidebar ? 'grid grid-cols-1 gap-3.5' : 'grid md:grid-cols-2 gap-4'}>
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

                    {/* Comments/Notes Field */}
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2 text-accent-500" />
                        Additional Comments / Special Requests (Optional)
                      </label>
                      <textarea
                        name="comments"
                        value={roundTripData.comments}
                        onChange={handleRoundTripChange}
                        placeholder="Any customization requests, special instructions, or additional details..."
                        rows={4}
                        className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 resize-none"
                      />
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
              ) : activeTab === 'acting_driver' ? (
                <motion.div
                  key="acting_driver"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-primary-800/60 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/10"
                >
                  <form onSubmit={handleActingDriverSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      <motion.div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          Trip Type *
                        </label>
                        <select
                          name="actingTripType"
                          value={actingDriverData.actingTripType}
                          onChange={handleActingDriverChange}
                          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                        >
                          <option value="local">Local / Out of City (Hourly)</option>
                          <option value="round-trip">Outstation Round Trip</option>
                          <option value="multi-day">Outstation Multi-Day</option>
                          <option value="drop">Outstation Drop (One Way)</option>
                        </select>
                      </motion.div>

                      {actingDriverData.actingTripType === 'local' && (
                        <motion.div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-white/90 mb-2">
                            Package Selection *
                          </label>
                          <select
                            name="localPackage"
                            value={actingDriverData.localPackage}
                            onChange={handleActingDriverChange}
                            className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                          >
                            <option value="20km">Local - Max 20 km (4 hours) - Rs 500</option>
                            <option value="30km">Out of City - 20 to 30 km (4 hours) - Rs 600</option>
                          </select>
                        </motion.div>
                      )}

                      {actingDriverData.actingTripType === 'multi-day' && (
                        <motion.div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-white/90 mb-2">
                            Number of Days *
                          </label>
                          <input
                            type="number"
                            name="days"
                            min="2"
                            max="30"
                            value={actingDriverData.days}
                            onChange={handleActingDriverChange}
                            className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                          />
                        </motion.div>
                      )}

                      <motion.div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          Customer Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={actingDriverData.name}
                          onChange={handleActingDriverChange}
                          placeholder="Enter customer name"
                          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                      </motion.div>

                      <motion.div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={actingDriverData.phone}
                          onChange={handleActingDriverChange}
                          placeholder="Enter phone number"
                          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
                      </motion.div>

                      <motion.div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={actingDriverData.date}
                          onChange={handleActingDriverChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                        />
                        {errors.date && <p className="mt-1 text-sm text-red-400">{errors.date}</p>}
                      </motion.div>

                      <motion.div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          Time *
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="time"
                            name="time"
                            value={actingDriverData.time}
                            onChange={handleActingDriverChange}
                            className="flex-1 px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                          />
                          <div className="flex gap-1 bg-primary-700/50 rounded-lg p-1">
                            <button type="button" onClick={() => handleActingTimePeriodChange('AM')} className={`px-4 py-3 rounded-md font-semibold transition-all ${actingDriverData.timePeriod === 'AM' ? 'bg-accent-500 text-black' : 'text-white/70 hover:text-white'}`}>AM</button>
                            <button type="button" onClick={() => handleActingTimePeriodChange('PM')} className={`px-4 py-3 rounded-md font-semibold transition-all ${actingDriverData.timePeriod === 'PM' ? 'bg-accent-500 text-black' : 'text-white/70 hover:text-white'}`}>PM</button>
                          </div>
                        </div>
                        {errors.time && <p className="mt-1 text-sm text-red-400">{errors.time}</p>}
                      </motion.div>

                      <motion.div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          Pickup Location *
                        </label>
                        <div className="relative flex items-center">
                          <input
                            type="text"
                            name="pickupLocation"
                            ref={actingPickupRef}
                            value={actingDriverData.pickupLocation}
                            onChange={handleActingDriverChange}
                            placeholder="Enter pickup location"
                            className="w-full pl-4 pr-24 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                          />
                          <div className="absolute right-2 flex items-center gap-1.5 z-10">
                            <button
                              type="button"
                              onClick={() => handleGPSLocate('pickup', setActingDriverData, 'pickupLocation')}
                              disabled={isGpsLoading.pickup}
                              className="p-1.5 rounded-md bg-gray-100 hover:bg-primary-100 text-primary-700 transition-all shadow-sm hover:scale-105 active:scale-95 disabled:opacity-50 group"
                              title="Use Current GPS Location"
                              aria-label="Use Current GPS Location"
                            >
                              {isGpsLoading.pickup ? (
                                <Loader2 className="w-4 h-4 animate-spin text-primary-600" />
                              ) : (
                                <Navigation className="w-4 h-4 text-primary-600 group-hover:rotate-12 transition-transform fill-primary-600/20" />
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => openMapPicker('pickup', 'Select Pickup Location', actingDriverData.pickupLocation, setActingDriverData, 'pickupLocation')}
                              className="p-1.5 rounded-md bg-accent-500 hover:bg-accent-600 text-black transition-all shadow-sm hover:scale-105 active:scale-95 group"
                              title="Pick on Google Maps"
                              aria-label="Pick on Google Maps"
                            >
                              <Map className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                            </button>
                          </div>
                        </div>
                        {errors.pickupLocation && <p className="mt-1 text-sm text-red-400">{errors.pickupLocation}</p>}
                      </motion.div>

                      {actingDriverData.actingTripType !== 'local' && (
                        <motion.div>
                          <label className="block text-sm font-semibold text-white/90 mb-2">
                            {actingDriverData.actingTripType === 'drop' ? 'Drop Location *' : 'Destination City (Outstation) *'}
                          </label>
                          <div className="relative flex items-center">
                            <input
                              type="text"
                              name="dropLocation"
                              ref={actingDropRef}
                              value={actingDriverData.dropLocation}
                              onChange={handleActingDriverChange}
                              placeholder="Enter drop location"
                              className="w-full pl-4 pr-24 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                            />
                            <div className="absolute right-2 flex items-center gap-1.5 z-10">
                              <button
                                type="button"
                                onClick={() => handleGPSLocate('drop', setActingDriverData, 'dropLocation')}
                                disabled={isGpsLoading.drop}
                                className="p-1.5 rounded-md bg-gray-100 hover:bg-primary-100 text-primary-700 transition-all shadow-sm hover:scale-105 active:scale-95 disabled:opacity-50 group"
                                title="Use Current GPS Location"
                                aria-label="Use Current GPS Location"
                              >
                                {isGpsLoading.drop ? (
                                  <Loader2 className="w-4 h-4 animate-spin text-primary-600" />
                                ) : (
                                  <Navigation className="w-4 h-4 text-primary-600 group-hover:rotate-12 transition-transform fill-primary-600/20" />
                                )}
                              </button>
                              <button
                                type="button"
                                onClick={() => openMapPicker('drop', 'Select Drop Location', actingDriverData.dropLocation, setActingDriverData, 'dropLocation')}
                                className="p-1.5 rounded-md bg-accent-500 hover:bg-accent-600 text-black transition-all shadow-sm hover:scale-105 active:scale-95 group"
                                title="Pick on Google Maps"
                                aria-label="Pick on Google Maps"
                              >
                                <Map className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                              </button>
                            </div>
                          </div>
                          {errors.dropLocation && <p className="mt-1 text-sm text-red-400">{errors.dropLocation}</p>}
                        </motion.div>
                      )}

                      <motion.div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          Additional Comments (Optional)
                        </label>
                        <textarea
                          name="comments"
                          value={actingDriverData.comments}
                          onChange={handleActingDriverChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm resize-none"
                        />
                      </motion.div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      disabled={isLoading}
                      className="w-full px-8 py-4 bg-accent-500 hover:bg-accent-600 text-black font-semibold rounded-full shadow-xl hover:shadow-yellow-400/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                    >
                      {isLoading ? 'Booking...' : 'BOOK ACTING DRIVER'}
                    </motion.button>
                  </form>
                </motion.div>
              ) : activeTab === 'recovery_services' ? (
                <motion.div
                  key="recovery"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-primary-800/60 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/10"
                >
                  <form onSubmit={handleRecoverySubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Vehicle Type Selection */}
                      <motion.div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-white/90 mb-4">
                          Select Vehicle Type *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                          {getRecoveryVehicleTypes().map((vehicle, index) => {
                            const isSelected = recoveryData.vehicleType === vehicle.type
                            return (
                              <motion.div
                                key={vehicle.type}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => handleRecoveryChange({ target: { name: 'vehicleType', value: vehicle.type } })}
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
                                  onChange={() => handleRecoveryChange({ target: { name: 'vehicleType', value: vehicle.type } })}
                                  aria-label={`Select ${vehicle.alt}`}
                                  className="absolute top-2 right-2 w-5 h-5 accent-accent-500"
                                />
                                <div className="text-center">
                                  <div className="mb-3 flex justify-center">
                                    <div className="relative w-full h-24 flex items-center justify-center overflow-hidden rounded-lg">
                                      <img
                                        src={vehicle.image}
                                        alt={vehicle.alt}
                                        className={`w-full h-full object-contain rounded-lg transition-all duration-300 ${
                                          isSelected 
                                            ? 'brightness-110 scale-105' 
                                            : 'brightness-75 hover:brightness-90'
                                        }`}
                                      />
                                    </div>
                                  </div>
                                  <div className={`text-xs font-semibold mb-1 ${isSelected ? 'text-accent-500' : 'text-white/70'}`}>
                                    {vehicle.rateLabel}
                                  </div>
                                  <div className={`text-sm font-bold uppercase ${isSelected ? 'text-white' : 'text-white/80'}`}>
                                    {vehicle.model}
                                  </div>
                                </div>
                              </motion.div>
                            )
                          })}
                        </div>
                        {errors.vehicleType && (
                          <p className="mt-2 text-sm text-red-400">{errors.vehicleType}</p>
                        )}
                      </motion.div>

                      {/* Name */}
                      <motion.div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">Customer Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={recoveryData.name}
                          onChange={handleRecoveryChange}
                          placeholder="Enter customer name"
                          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                      </motion.div>

                      {/* Phone */}
                      <motion.div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={recoveryData.phone}
                          onChange={handleRecoveryChange}
                          placeholder="Enter phone number"
                          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
                      </motion.div>

                      {/* Date */}
                      <motion.div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">Date *</label>
                        <input
                          type="date"
                          name="date"
                          value={recoveryData.date}
                          onChange={handleRecoveryChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                        />
                        {errors.date && <p className="mt-1 text-sm text-red-400">{errors.date}</p>}
                      </motion.div>

                      {/* Time */}
                      <motion.div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">Time *</label>
                        <div className="flex gap-2">
                          <input
                            type="time"
                            name="time"
                            value={recoveryData.time}
                            onChange={handleRecoveryChange}
                            className="flex-1 px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                          />
                          <div className="flex gap-1 bg-primary-700/50 rounded-lg p-1">
                            <button type="button" onClick={() => handleRecoveryTimePeriodChange('AM')} className={`px-4 py-3 rounded-md font-semibold transition-all ${recoveryData.timePeriod === 'AM' ? 'bg-accent-500 text-black' : 'text-white/70 hover:text-white'}`}>AM</button>
                            <button type="button" onClick={() => handleRecoveryTimePeriodChange('PM')} className={`px-4 py-3 rounded-md font-semibold transition-all ${recoveryData.timePeriod === 'PM' ? 'bg-accent-500 text-black' : 'text-white/70 hover:text-white'}`}>PM</button>
                          </div>
                        </div>
                        {errors.time && <p className="mt-1 text-sm text-red-400">{errors.time}</p>}
                      </motion.div>

                      {/* Pickup */}
                      <motion.div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">Pickup Location (Breakdown) *</label>
                        <div className="relative flex items-center">
                          <input
                            type="text"
                            name="pickupLocation"
                            ref={recoveryPickupRef}
                            value={recoveryData.pickupLocation}
                            onChange={handleRecoveryChange}
                            placeholder="Enter breakdown location"
                            className="w-full pl-4 pr-24 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                          />
                          <div className="absolute right-2 flex items-center gap-1.5 z-10">
                            <button
                              type="button"
                              onClick={() => handleGPSLocate('pickup', setRecoveryData, 'pickupLocation')}
                              disabled={isGpsLoading.pickup}
                              className="p-1.5 rounded-md bg-gray-100 hover:bg-primary-100 text-primary-700 transition-all shadow-sm hover:scale-105 active:scale-95 disabled:opacity-50 group"
                              title="Use Current GPS Location"
                              aria-label="Use Current GPS Location"
                            >
                              {isGpsLoading.pickup ? (
                                <Loader2 className="w-4 h-4 animate-spin text-primary-600" />
                              ) : (
                                <Navigation className="w-4 h-4 text-primary-600 group-hover:rotate-12 transition-transform fill-primary-600/20" />
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => openMapPicker('pickup', 'Select Breakdown Location', recoveryData.pickupLocation, setRecoveryData, 'pickupLocation')}
                              className="p-1.5 rounded-md bg-accent-500 hover:bg-accent-600 text-black transition-all shadow-sm hover:scale-105 active:scale-95 group"
                              title="Pick on Google Maps"
                              aria-label="Pick on Google Maps"
                            >
                              <Map className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                            </button>
                          </div>
                        </div>
                        {errors.pickupLocation && <p className="mt-1 text-sm text-red-400">{errors.pickupLocation}</p>}
                      </motion.div>

                      {/* Drop */}
                      <motion.div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">Drop Location (Delivery) *</label>
                        <div className="relative flex items-center">
                          <input
                            type="text"
                            name="dropLocation"
                            ref={recoveryDropRef}
                            value={recoveryData.dropLocation}
                            onChange={handleRecoveryChange}
                            placeholder="Enter delivery location"
                            className="w-full pl-4 pr-24 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                          />
                          <div className="absolute right-2 flex items-center gap-1.5 z-10">
                            <button
                              type="button"
                              onClick={() => handleGPSLocate('drop', setRecoveryData, 'dropLocation')}
                              disabled={isGpsLoading.drop}
                              className="p-1.5 rounded-md bg-gray-100 hover:bg-primary-100 text-primary-700 transition-all shadow-sm hover:scale-105 active:scale-95 disabled:opacity-50 group"
                              title="Use Current GPS Location"
                              aria-label="Use Current GPS Location"
                            >
                              {isGpsLoading.drop ? (
                                <Loader2 className="w-4 h-4 animate-spin text-primary-600" />
                              ) : (
                                <Navigation className="w-4 h-4 text-primary-600 group-hover:rotate-12 transition-transform fill-primary-600/20" />
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => openMapPicker('drop', 'Select Delivery Location', recoveryData.dropLocation, setRecoveryData, 'dropLocation')}
                              className="p-1.5 rounded-md bg-accent-500 hover:bg-accent-600 text-black transition-all shadow-sm hover:scale-105 active:scale-95 group"
                              title="Pick on Google Maps"
                              aria-label="Pick on Google Maps"
                            >
                              <Map className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                            </button>
                          </div>
                        </div>
                        {errors.dropLocation && <p className="mt-1 text-sm text-red-400">{errors.dropLocation}</p>}
                      </motion.div>

                      <motion.div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-white/90 mb-2">Additional Comments (Optional)</label>
                        <textarea
                          name="comments"
                          value={recoveryData.comments}
                          onChange={handleRecoveryChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm resize-none"
                        />
                      </motion.div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      disabled={isLoading}
                      className="w-full px-8 py-4 bg-accent-500 hover:bg-accent-600 text-black font-semibold rounded-full shadow-xl hover:shadow-yellow-400/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                    >
                      {isLoading ? 'Booking...' : 'REQUEST RECOVERY SERVICE'}
                    </motion.button>
                  </form>
                </motion.div>
              ) : activeTab === 'tours_travels' ? (
                <motion.div
                  key="tours_travels"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-primary-800/60 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/10"
                >
                  <form onSubmit={handleToursSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* Package Type */}
                      <motion.div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <Briefcase className="w-4 h-4 inline mr-2 text-accent-500" />
                          Select Tour Package Type *
                        </label>
                        <select
                          name="packageType"
                          value={toursData.packageType}
                          onChange={handleToursChange}
                          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm font-semibold text-sm sm:text-base"
                        >
                          <option value="local_mini">Local Mini Package (5 Hours / 50 KM)</option>
                          <option value="local_fullday">Local Full Day Package (10 Hours / 100 KM)</option>
                          <option value="outstation_round">Outstation Round-Trip (Multi-Day Tours & Pilgrimages)</option>
                          <option value="oneway_drop">One-Way Intercity Drop Taxi</option>
                          <option value="bus_rental">Bus & Group Event Rentals (21 to 54 Seater Coaches)</option>
                        </select>
                      </motion.div>

                      {/* Vehicle Category */}
                      <motion.div className={toursData.packageType === 'outstation_round' || toursData.packageType === 'bus_rental' ? 'md:col-span-1' : 'md:col-span-2'}>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <Car className="w-4 h-4 inline mr-2 text-accent-500" />
                          Vehicle Category *
                        </label>
                        <select
                          name="vehicleCategory"
                          value={toursData.vehicleCategory}
                          onChange={handleToursChange}
                          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm font-semibold text-sm sm:text-base"
                        >
                          {toursData.packageType === 'bus_rental' ? (
                            <>
                              <option value="Mini Bus (21 Seater)">Mini Bus (21 Seater) - ₹28/km</option>
                              <option value="Executive Bus (25 Seater)">Executive Bus (25 Seater) - ₹34/km</option>
                              <option value="AC Coach (40 Seater)">AC Coach (40 Seater) - ₹60/km</option>
                              <option value="Luxury AC Coach (54 Seater)">Luxury AC Coach (54 Seater) - ₹70/km</option>
                            </>
                          ) : toursData.packageType === 'oneway_drop' ? (
                            <>
                              <option value="Sedan (4+1)">Sedan (4+1) (Dzire/Etios) - ₹15/km</option>
                              <option value="SUV (6+1)">SUV (6+1) (Ertiga) - ₹20/km</option>
                              <option value="Premium SUV (7+1)">Premium SUV (7+1) (Innova Crysta) - ₹23/km</option>
                            </>
                          ) : (
                            <>
                              <option value="Sedan (4+1)">Sedan (4+1) (Dzire/Etios)</option>
                              <option value="SUV (6+1)">SUV (6+1) (Ertiga/XL6)</option>
                              <option value="Premium SUV (7+1)">Premium SUV (7+1 Innova Crysta)</option>
                              <option value="Tempo Traveller (12 Seater)">Tempo Traveller (12 Seater)</option>
                              <option value="Tempo Traveller (18 Seater)">Tempo Traveller (18 Seater)</option>
                            </>
                          )}
                        </select>
                      </motion.div>

                      {/* Days Input if Outstation or Bus */}
                      {(toursData.packageType === 'outstation_round' || toursData.packageType === 'bus_rental') && (
                        <motion.div>
                          <label className="block text-sm font-semibold text-white/90 mb-2">
                            <Calendar className="w-4 h-4 inline mr-2 text-accent-500" />
                            Number of Days *
                          </label>
                          <input
                            type="number"
                            name="days"
                            min="1"
                            max="30"
                            value={toursData.days}
                            onChange={handleToursChange}
                            className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm font-semibold"
                          />
                        </motion.div>
                      )}

                      {/* Customer Name */}
                      <motion.div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <User className="w-4 h-4 inline mr-2 text-accent-500" />
                          Customer Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={toursData.name}
                          onChange={handleToursChange}
                          placeholder="Enter customer name"
                          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                      </motion.div>

                      {/* Phone Number */}
                      <motion.div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <Phone className="w-4 h-4 inline mr-2 text-accent-500" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={toursData.phone}
                          onChange={handleToursChange}
                          placeholder="Enter 10-digit mobile number"
                          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
                      </motion.div>

                      {/* Date */}
                      <motion.div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <Calendar className="w-4 h-4 inline mr-2 text-accent-500" />
                          Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={toursData.date}
                          onChange={handleToursChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                        />
                        {errors.date && <p className="mt-1 text-sm text-red-400">{errors.date}</p>}
                      </motion.div>

                      {/* Time */}
                      <motion.div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <Clock className="w-4 h-4 inline mr-2 text-accent-500" />
                          Time *
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="time"
                            name="time"
                            value={toursData.time}
                            onChange={handleToursChange}
                            className="flex-1 px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                          />
                          <div className="flex gap-1 bg-primary-700/50 rounded-lg p-1">
                            <button type="button" onClick={() => handleToursTimePeriodChange('AM')} className={`px-4 py-3 rounded-md font-semibold transition-all ${toursData.timePeriod === 'AM' ? 'bg-accent-500 text-black' : 'text-white/70 hover:text-white'}`}>AM</button>
                            <button type="button" onClick={() => handleToursTimePeriodChange('PM')} className={`px-4 py-3 rounded-md font-semibold transition-all ${toursData.timePeriod === 'PM' ? 'bg-accent-500 text-black' : 'text-white/70 hover:text-white'}`}>PM</button>
                          </div>
                        </div>
                        {errors.time && <p className="mt-1 text-sm text-red-400">{errors.time}</p>}
                      </motion.div>

                      {/* Pickup Location */}
                      <motion.div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <MapPin className="w-4 h-4 inline mr-2 text-accent-500" />
                          Pickup Location *
                        </label>
                        <div className="relative flex items-center">
                          <input
                            type="text"
                            name="pickupLocation"
                            ref={toursPickupRef}
                            value={toursData.pickupLocation}
                            onChange={handleToursChange}
                            placeholder="Enter pickup address"
                            className="w-full pl-4 pr-24 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                          />
                          <div className="absolute right-2 flex items-center gap-1.5 z-10">
                            <button
                              type="button"
                              onClick={() => handleGPSLocate('pickup', setToursData, 'pickupLocation')}
                              disabled={isGpsLoading.pickup}
                              className="p-1.5 rounded-md bg-gray-100 hover:bg-primary-100 text-primary-700 transition-all shadow-sm hover:scale-105 active:scale-95 disabled:opacity-50 group"
                              title="Use Current GPS Location"
                              aria-label="Use Current GPS Location"
                            >
                              {isGpsLoading.pickup ? (
                                <Loader2 className="w-4 h-4 animate-spin text-primary-600" />
                              ) : (
                                <Navigation className="w-4 h-4 text-primary-600 group-hover:rotate-12 transition-transform fill-primary-600/20" />
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => openMapPicker('pickup', 'Select Pickup Location', toursData.pickupLocation, setToursData, 'pickupLocation')}
                              className="p-1.5 rounded-md bg-accent-500 hover:bg-accent-600 text-black transition-all shadow-sm hover:scale-105 active:scale-95 group"
                              title="Pick on Google Maps"
                              aria-label="Pick on Google Maps"
                            >
                              <Map className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                            </button>
                          </div>
                        </div>
                        {errors.pickupLocation && <p className="mt-1 text-sm text-red-400">{errors.pickupLocation}</p>}
                      </motion.div>

                      {/* Drop Location */}
                      <motion.div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <MapPin className="w-4 h-4 inline mr-2 text-accent-500" />
                          Drop Location / Tour Destination
                        </label>
                        <div className="relative flex items-center">
                          <input
                            type="text"
                            name="dropLocation"
                            ref={toursDropRef}
                            value={toursData.dropLocation}
                            onChange={handleToursChange}
                            placeholder="Enter destination / tour drop location"
                            className="w-full pl-4 pr-24 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm"
                          />
                          <div className="absolute right-2 flex items-center gap-1.5 z-10">
                            <button
                              type="button"
                              onClick={() => handleGPSLocate('drop', setToursData, 'dropLocation')}
                              disabled={isGpsLoading.drop}
                              className="p-1.5 rounded-md bg-gray-100 hover:bg-primary-100 text-primary-700 transition-all shadow-sm hover:scale-105 active:scale-95 disabled:opacity-50 group"
                              title="Use Current GPS Location"
                              aria-label="Use Current GPS Location"
                            >
                              {isGpsLoading.drop ? (
                                <Loader2 className="w-4 h-4 animate-spin text-primary-600" />
                              ) : (
                                <Navigation className="w-4 h-4 text-primary-600 group-hover:rotate-12 transition-transform fill-primary-600/20" />
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => openMapPicker('drop', 'Select Drop Location', toursData.dropLocation, setToursData, 'dropLocation')}
                              className="p-1.5 rounded-md bg-accent-500 hover:bg-accent-600 text-black transition-all shadow-sm hover:scale-105 active:scale-95 group"
                              title="Pick on Google Maps"
                              aria-label="Pick on Google Maps"
                            >
                              <Map className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </motion.div>

                      {/* Additional Comments */}
                      <motion.div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-white/90 mb-2">
                          <MessageSquare className="w-4 h-4 inline mr-2 text-accent-500" />
                          Additional Comments / Special Requests (Optional)
                        </label>
                        <textarea
                          name="comments"
                          value={toursData.comments}
                          onChange={handleToursChange}
                          rows={4}
                          placeholder="Any customization requests, special instructions, or additional details..."
                          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm resize-none"
                        />
                      </motion.div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      disabled={isLoading}
                      className="w-full px-8 py-4 bg-accent-500 hover:bg-accent-600 text-black font-semibold rounded-full shadow-xl hover:shadow-yellow-400/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg uppercase tracking-wide font-extrabold"
                    >
                      {isLoading ? 'Calculating...' : 'GET TOURS & TRAVELS ESTIMATION'}
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
                              <div className="w-full px-4 py-3 bg-accent-500/10 border border-accent-500/40 rounded-lg text-accent-400 font-bold flex items-center shadow-sm text-sm sm:text-base">
                                <CheckCircle className="w-5 h-5 mr-2 text-accent-500 flex-shrink-0" />
                                {activeTab === 'acting_driver'
                                  ? 'Acting Driver (Hourly / Outstation / Local)'
                                  : activeTab === 'tours_travels'
                                  ? 'Tours & Travels (Custom Packages & Outstation)'
                                  : activeTab === 'recovery_services'
                                  ? '24/7 Vehicle Breakdown & Recovery Service'
                                  : otherServiceData.serviceType || 'Selected Service'}
                              </div>
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
                                    aria-label="Select AM time period"
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
                                    aria-label="Select PM time period"
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
                            ) : field.name === 'pickupLocation' || field.name === 'dropLocation' ? (
                              <div className="relative flex items-center">
                                <input
                                  type={field.type}
                                  name={field.name}
                                  value={otherServiceData[field.name]}
                                  onChange={handleOtherServiceChange}
                                  placeholder={`Enter ${field.label.toLowerCase()}`}
                                  required={field.required}
                                  className={`w-full pl-4 pr-24 py-3 bg-white rounded-lg border ${
                                    errors[field.name] ? 'border-red-500' : 'border-gray-300'
                                  } focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm`}
                                />
                                <div className="absolute right-2 flex items-center gap-1.5 z-10">
                                  <button
                                    type="button"
                                    onClick={() => handleGPSLocate(field.name === 'pickupLocation' ? 'pickup' : 'drop', setOtherServiceData, field.name)}
                                    disabled={isGpsLoading[field.name === 'pickupLocation' ? 'pickup' : 'drop']}
                                    className="p-1.5 rounded-md bg-gray-100 hover:bg-primary-100 text-primary-700 transition-all shadow-sm hover:scale-105 active:scale-95 disabled:opacity-50 group"
                                    title="Use Current GPS Location"
                                    aria-label="Use Current GPS Location"
                                  >
                                    {isGpsLoading[field.name === 'pickupLocation' ? 'pickup' : 'drop'] ? (
                                      <Loader2 className="w-4 h-4 animate-spin text-primary-600" />
                                    ) : (
                                      <Navigation className="w-4 h-4 text-primary-600 group-hover:rotate-12 transition-transform fill-primary-600/20" />
                                    )}
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => openMapPicker(field.name === 'pickupLocation' ? 'pickup' : 'drop', `Select ${field.label}`, otherServiceData[field.name], setOtherServiceData, field.name)}
                                    className="p-1.5 rounded-md bg-accent-500 hover:bg-accent-600 text-black transition-all shadow-sm hover:scale-105 active:scale-95 group"
                                    title="Pick on Google Maps"
                                    aria-label="Pick on Google Maps"
                                  >
                                    <Map className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
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

                    {/* Comments/Notes Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="md:col-span-2"
                    >
                      <label className="block text-sm font-semibold text-white/90 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2 text-accent-500" />
                        Additional Comments / Special Requests (Optional)
                      </label>
                      <textarea
                        name="comments"
                        value={otherServiceData.comments}
                        onChange={handleOtherServiceChange}
                        placeholder="Any customization requests, special instructions, or additional details..."
                        rows={4}
                        className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all outline-none text-gray-900 shadow-sm resize-none"
                      />
                    </motion.div>

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
                      ) : activeTab === 'acting_driver' ? (
                        'BOOK ACTING DRIVER'
                      ) : activeTab === 'tours_travels' ? (
                        'BOOK TOURS & TRAVELS'
                      ) : activeTab === 'recovery_services' ? (
                        'REQUEST RECOVERY SERVICE'
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

      {/* Map Picker Modal */}
      <MapPickerModal
        isOpen={mapModalConfig.isOpen}
        onClose={() => setMapModalConfig(prev => ({ ...prev, isOpen: false }))}
        title={mapModalConfig.title}
        initialAddress={mapModalConfig.initialAddress}
        onSelectLocation={(selectedData) => {
          if (mapModalConfig.onSelect) {
            mapModalConfig.onSelect(selectedData)
          }
        }}
      />

      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYou && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setShowThankYou(false)}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, type: "spring", damping: 25 }}
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md border border-gray-200"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Content */}
                <div className="p-8 text-center">
                  {/* Success Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="flex justify-center mb-6"
                  >
                    <div className="w-20 h-20 bg-accent-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-12 h-12 text-accent-500" />
                    </div>
                  </motion.div>

                  {/* Message */}
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-gray-800 mb-4"
                  >
                    Thank You for Choosing SAMAYAS
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 text-lg mb-8"
                  >
                    Our Team will reach you shortly.
                  </motion.p>

                  {/* Close Button */}
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => setShowThankYou(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-8 py-4 bg-accent-500 hover:bg-accent-600 text-black font-bold rounded-full shadow-xl hover:shadow-yellow-400/40 transition-all duration-300"
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default BookingForm
