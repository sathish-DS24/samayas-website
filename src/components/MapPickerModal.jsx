import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Navigation, Check, Loader2 } from 'lucide-react'
import { reverseGeocode, getCurrentGPSLocation } from '../utils/googleMaps'

const MapPickerModal = ({ isOpen, onClose, onSelectLocation, initialAddress = '', title = 'Select Location' }) => {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const lastGeocodedCoordsRef = useRef({ lat: 0, lng: 0 })
  const [currentAddress, setCurrentAddress] = useState('')
  const [currentCoords, setCurrentCoords] = useState({ lat: 10.7905, lng: 78.7047 }) // Default Trichy
  const [isGeocoding, setIsGeocoding] = useState(false)
  const [isLocating, setIsLocating] = useState(false)

  // Initialize Map when modal opens
  useEffect(() => {
    if (!isOpen) {
      mapInstanceRef.current = null
      lastGeocodedCoordsRef.current = { lat: 0, lng: 0 }
      return
    }

    let isMounted = true

    const initOrUpdateMap = async () => {
      if (!mapRef.current || !window.google || !window.google.maps) return

      let center = { lat: 10.7905, lng: 78.7047 } // Trichy fallback

      // Geocode initial address if provided and map not instantiated yet
      if (initialAddress && window.google.maps.Geocoder) {
        const geocoder = new window.google.maps.Geocoder()
        try {
          const results = await new Promise((resolve) => {
            geocoder.geocode({ address: initialAddress }, (res, status) => {
              if (status === 'OK' && res[0]) resolve(res[0])
              else resolve(null)
            })
          })
          if (results && results.geometry) {
            center = {
              lat: results.geometry.location.lat(),
              lng: results.geometry.location.lng()
            }
          }
        } catch (err) {
          console.warn('Geocoding initial address failed:', err)
        }
      }

      if (!isMounted) return

      // If map already exists, simply pan to new center to prevent blinking
      if (mapInstanceRef.current) {
        mapInstanceRef.current.panTo(center)
        setCurrentCoords(center)
        updateAddressFromCenter(center.lat, center.lng)
        return
      }

      setCurrentCoords(center)

      // Create Map Instance once
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 16,
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'simplified' }]
          }
        ]
      })

      mapInstanceRef.current = map

      // Geocode initial center
      updateAddressFromCenter(center.lat, center.lng, true)

      // Listen for map movement with debounce
      let timeout
      map.addListener('idle', () => {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
          if (!isMounted || !mapInstanceRef.current) return
          const newCenter = map.getCenter()
          if (newCenter) {
            const lat = newCenter.lat()
            const lng = newCenter.lng()

            // Check if coordinates moved significantly (> ~5 meters)
            const prev = lastGeocodedCoordsRef.current
            const distSq = Math.pow(lat - prev.lat, 2) + Math.pow(lng - prev.lng, 2)
            if (distSq > 0.0000001) {
              setCurrentCoords({ lat, lng })
              updateAddressFromCenter(lat, lng)
            }
          }
        }, 300)
      })
    }

    const timer = setTimeout(initOrUpdateMap, 150)

    return () => {
      isMounted = false
      clearTimeout(timer)
    }
  }, [isOpen])

  const updateAddressFromCenter = async (lat, lng, force = false) => {
    const prev = lastGeocodedCoordsRef.current
    const distSq = Math.pow(lat - prev.lat, 2) + Math.pow(lng - prev.lng, 2)
    if (!force && distSq < 0.0000001) return

    lastGeocodedCoordsRef.current = { lat, lng }
    setIsGeocoding(true)

    const result = await reverseGeocode(lat, lng)
    if (result && result.formattedAddress) {
      setCurrentAddress(result.formattedAddress)
    } else {
      setCurrentAddress(`${lat.toFixed(6)}, ${lng.toFixed(6)}`)
    }
    setIsGeocoding(false)
  }

  const handleLocateMe = async () => {
    setIsLocating(true)
    try {
      const gpsData = await getCurrentGPSLocation()
      setCurrentCoords({ lat: gpsData.lat, lng: gpsData.lng })
      setCurrentAddress(gpsData.formattedAddress)
      lastGeocodedCoordsRef.current = { lat: gpsData.lat, lng: gpsData.lng }

      if (mapInstanceRef.current) {
        mapInstanceRef.current.setCenter({ lat: gpsData.lat, lng: gpsData.lng })
        mapInstanceRef.current.setZoom(17)
      }
    } catch (err) {
      alert('Could not detect your current location. Please check your browser location permissions.')
    } finally {
      setIsLocating(false)
    }
  }

  const handleConfirm = () => {
    if (currentAddress) {
      onSelectLocation({
        address: currentAddress,
        lat: currentCoords.lat,
        lng: currentCoords.lng
      })
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[90vh] max-h-[720px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-primary-900 text-white flex-shrink-0">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-accent-400" />
                <h3 className="text-base sm:text-lg font-bold">{title}</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Map Modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Map Area */}
            <div className="relative flex-1 min-h-[220px] w-full bg-gray-100 overflow-hidden">
              <div ref={mapRef} className="absolute inset-0 w-full h-full" />

              {/* Center Target Pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex flex-col items-center">
                <div className="bg-primary-900 text-white text-xs px-2.5 py-1 rounded-full shadow-lg mb-1 flex items-center gap-1 font-semibold border border-accent-400">
                  <MapPin className="w-3.5 h-3.5 text-accent-400" />
                  Drag map to position pin
                </div>
                <div className="w-10 h-10 text-accent-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]">
                  <MapPin className="w-10 h-10 fill-accent-500 text-primary-900" />
                </div>
                <div className="w-3 h-1.5 bg-black/40 rounded-full blur-[1px] -mt-1" />
              </div>

              {/* GPS Locate Me Button on Map */}
              <button
                onClick={handleLocateMe}
                disabled={isLocating}
                className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-white text-gray-800 px-3.5 py-2 rounded-full shadow-xl hover:bg-gray-50 border border-gray-200 transition-all font-semibold text-xs sm:text-sm active:scale-95 disabled:opacity-50"
                title="Jump to My Location"
              >
                {isLocating ? (
                  <Loader2 className="w-4 h-4 text-primary-600 animate-spin" />
                ) : (
                  <Navigation className="w-4 h-4 text-primary-600 fill-primary-600" />
                )}
                <span>{isLocating ? 'Locating...' : 'My Location'}</span>
              </button>
            </div>

            {/* Address Footer & Confirm Button */}
            <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-200 flex flex-col gap-3 flex-shrink-0">
              <div className="flex items-start gap-3 bg-white p-3 sm:p-3.5 rounded-xl border border-gray-200 shadow-sm max-h-[100px] overflow-y-auto">
                <MapPin className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Selected Location Address</p>
                    {isGeocoding && <Loader2 className="w-3 h-3 text-accent-600 animate-spin" />}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-900 leading-snug break-words">
                    {currentAddress || (isGeocoding ? 'Detecting address...' : 'Moving map...')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 sm:py-3 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-xl transition-colors text-xs sm:text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={!currentAddress || isGeocoding}
                  className="flex-1 py-2.5 sm:py-3 px-4 bg-accent-500 hover:bg-accent-600 text-black font-bold rounded-xl shadow-lg transition-all text-xs sm:text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Confirm Location</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default MapPickerModal
