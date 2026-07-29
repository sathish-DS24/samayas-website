import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, User, Phone, Car, Loader2, Briefcase, CheckCircle, MessageSquare, Navigation, Map } from 'lucide-react'
import emailjs from '@emailjs/browser'
import BookingSummary from './BookingSummary'
import MapPickerModal from './MapPickerModal'
import { getRoadDistance, getRouteInfo, reverseGeocode, getCurrentGPSLocation } from '../utils/googleMaps'
import { trackEvent, trackBookingEvent, trackAdsConversion, debounceEvent } from '../utils/analytics'

const BookingForm = ({ defaultPickup = '', defaultDrop = '', initialPickup = '', initialDrop = '' }) => {
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
  
  // One-Way Taxi form data
  const [oneWayData, setOneWayData] = useState({
    pickupLocation: pickupVal,
    dropLocation: dropVal,
    date: '',
    time: '',
    timePeriod: 'AM',
    vehicleType: '',
    name: '',
    phone: '',
    comments: ''
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

  const calculateFare = async (tripType = 'one-way') => {
    const data = tripType === 'round-trip' ? roundTripData : oneWayData
    const distance = await calculateDistance(
      data.pickupLocation, 
      data.dropLocation,
      data.pickupLocationCoords,
      data.dropLocationCoords
    )
    const rates = tripType === 'round-trip' ? roundTripRates : oneWayRates
    const ratePerKm = rates[data.vehicleType] || 0
    
    // Get correct bata based on vehicle type
    const bata = bataRates[data.vehicleType] || 400
    
    if (tripType === 'round-trip') {
      // Round trip calculation - total distance is Up & Down (one-way distance * 2)
      const roundTripTotalDistance = distance * 2
      const minKm = 250 // Minimum 250 kms/day for round trip
      const actualDistance = Math.max(roundTripTotalDistance, minKm)
      const baseFare = actualDistance * ratePerKm
      const finalAmount = baseFare + bata
      return { distance: roundTripTotalDistance, baseFare, bata, finalAmount, minKm, actualDistance }
    } else {
      // One-way calculation - base fare based on actual distance (with min limit)
      const minKm = 130
      const actualDistance = Math.max(distance, minKm)
      const baseFare = actualDistance * ratePerKm
      const finalAmount = baseFare + bata
      return { distance, baseFare, bata, finalAmount, minKm, actualDistance }
    }
  }

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
        trackBookingEvent('fare_calculated', finalCalculation)
        trackBookingEvent('booking_submit', finalCalculation)
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
    const routeInfo = await calculateRouteDetails(recoveryData.pickupLocation, recoveryData.dropLocation, recoveryData.pickupLocationCoords, recoveryData.dropLocationCoords)
    const oneWay = routeInfo.distance
    const distance = oneWay * 2 // Up & Down

    const minCharge = recoveryData.vehicleType === 'Flatbed' ? 2500 : 2000
    const perKmRate = recoveryData.vehicleType === 'Flatbed' ? 35 : 30
    
    let baseFare = minCharge
    if (distance > 30) {
      baseFare += (distance - 30) * perKmRate
    }

    // Night charges logic
    let nightSurcharge = 0
    let isNight = false
    if (recoveryData.time) {
      const { hours } = parse24HourTime(recoveryData.time, recoveryData.timePeriod)

      // 9:00 PM (21) to 6:00 AM (6)
      if (hours >= 21 || hours < 6) {
        isNight = true
        nightSurcharge = baseFare * 0.20
      }
    }

    const finalAmount = baseFare + nightSurcharge
    
    return {
      distance,
      baseFare,
      nightSurcharge,
      finalAmount,
      isNight,
      actualDistance: distance,
      extraNote: 'Fares shown are approximate estimates based on pickup-to-drop distance. Total kilometer calculation includes base-to-pickup and return-to-base distance (deadhead km). Final fare, tolls, and hill charges will be determined by the operator at the time of service.'
    }
  }

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
        setShowSummary(true)
      } catch (error) {
        console.error('Calculation error:', error)
      } finally {
        setIsLoading(false)
      }
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
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
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

      // Build template params - ALWAYS include return_date (empty string for one-way)
      // EmailJS requires all variables referenced in {{#if return_date}} to be present
      const templateParams = {
        // Email subject
        subject: `${tripName} Booking Request`,
        
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
        
        // Additional comments/notes
        comments: comments,
        customer_notes: comments,
        additional_notes: comments
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
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 bg-primary-800/50 rounded-xl p-1.5 mb-6 backdrop-blur-sm border border-white/10"
            >
              <button
                type="button"
                onClick={() => {
                  setActiveTab('oneway')
                  setErrors({})
                  trackEvent('trip_type_selected', { trip_type: 'one-way' })
                  trackEvent('booking_started', { trip_type: 'one-way' })
                }}
                className={`px-3 py-3 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base text-center ${
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
                className={`px-3 py-3 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base text-center ${
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
                className={`px-3 py-3 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base text-center ${
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
                className={`px-3 py-3 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base text-center ${
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
                className={`px-3 py-3 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base text-center ${
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
                    <div className="grid md:grid-cols-2 gap-4">
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
                              aria-label="Select AM time period"
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
                              aria-label="Select PM time period"
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
                      <div className="grid grid-cols-2 sm:grid-cols-3 min-[1100px]:grid-cols-5 gap-3">
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
                    <div className="grid md:grid-cols-2 gap-4">
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
