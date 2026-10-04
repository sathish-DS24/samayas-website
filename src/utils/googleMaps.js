// Dynamic on-demand Google Maps Script Loader (Zero dependencies, 100% on-demand)
let mapsLoaderPromise = null

export const loadGoogleMaps = () => {
  if (typeof window === 'undefined') return Promise.resolve(null)
  
  if (window.google && window.google.maps) {
    return Promise.resolve(window.google.maps)
  }

  if (mapsLoaderPromise) {
    return mapsLoaderPromise
  }

  mapsLoaderPromise = new Promise((resolve) => {
    // Check if script is already present in DOM
    const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')
    if (existingScript) {
      if (window.google && window.google.maps) {
        resolve(window.google.maps)
        return
      }
      existingScript.addEventListener('load', () => resolve(window.google?.maps || null), { once: true })
      existingScript.addEventListener('error', () => {
        mapsLoaderPromise = null
        resolve(null)
      }, { once: true })
      return
    }

    const callbackName = `__samayasGoogleMapsLoaded_${Date.now()}`
    window[callbackName] = () => {
      try {
        delete window[callbackName]
      } catch (e) {
        window[callbackName] = undefined
      }
      resolve(window.google?.maps || null)
    }

    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCPNzKYzBGxu4b_AcUeKPbB6KCTmU1uBZw&libraries=places,geometry&callback=${callbackName}`
    script.async = true
    script.defer = true
    script.onerror = (err) => {
      console.warn('Failed to dynamically load Google Maps:', err)
      try {
        delete window[callbackName]
      } catch (e) {
        window[callbackName] = undefined
      }
      mapsLoaderPromise = null
      resolve(null)
    }

    document.head.appendChild(script)
  })

  return mapsLoaderPromise
}

// Convert input to a value the Distance Matrix API accepts:
// - If it's a {lat, lng} object, create a google.maps.LatLng
// - Otherwise pass the string as-is
const toLatLngOrString = (input) => {
  if (input && typeof input === 'object' && typeof input.lat === 'number' && typeof input.lng === 'number') {
    if (window.google && window.google.maps) {
      return new window.google.maps.LatLng(input.lat, input.lng)
    }
    return `${input.lat},${input.lng}`
  }
  return input
}

export const getRoadDistance = async (origin, destination) => {
  await loadGoogleMaps()
  return new Promise((resolve) => {
    if (window.googleMapsFailed || !window.google || !window.google.maps || !window.google.maps.DistanceMatrixService) {
      console.warn('Google Maps API not available or auth failed. Falling back to local calculator.')
      resolve(null)
      return
    }

    // Safety timeout — resolve null after 8 seconds if API hangs
    const timeoutId = setTimeout(() => {
      console.warn('Distance Matrix API timed out after 8s')
      resolve(null)
    }, 8000)

    const service = new window.google.maps.DistanceMatrixService()
    service.getDistanceMatrix(
      {
        origins: [toLatLngOrString(origin)],
        destinations: [toLatLngOrString(destination)],
        travelMode: window.google.maps.TravelMode.DRIVING,
        unitSystem: window.google.maps.UnitSystem.METRIC,
      },
      (response, status) => {
        clearTimeout(timeoutId)
        if (status === 'OK' && response && response.rows && response.rows[0] && response.rows[0].elements[0]) {
          const element = response.rows[0].elements[0]
          if (element.status === 'OK' && element.distance) {
            // Convert meters to kilometers and round
            const distanceInKm = Math.round(element.distance.value / 1000)
            console.log(`Google Maps Road Distance: ${distanceInKm} km`)
            resolve(distanceInKm)
            return
          }
        }
        console.warn('Distance Matrix query returned status:', status, response)
        resolve(null) // Fallback to local matrix if Google status is ZERO_RESULTS or NOT_FOUND
      }
    )
  })
}

export const getRouteInfo = async (origin, destination) => {
  await loadGoogleMaps()
  return new Promise((resolve) => {
    if (window.googleMapsFailed || !window.google || !window.google.maps || !window.google.maps.DistanceMatrixService) {
      resolve(null)
      return
    }

    // Safety timeout
    const timeoutId = setTimeout(() => {
      console.warn('Route Info API timed out after 8s')
      resolve(null)
    }, 8000)

    const service = new window.google.maps.DistanceMatrixService()
    service.getDistanceMatrix(
      {
        origins: [toLatLngOrString(origin)],
        destinations: [toLatLngOrString(destination)],
        travelMode: window.google.maps.TravelMode.DRIVING,
        unitSystem: window.google.maps.UnitSystem.METRIC,
      },
      (response, status) => {
        clearTimeout(timeoutId)
        if (status === 'OK' && response && response.rows && response.rows[0] && response.rows[0].elements[0]) {
          const element = response.rows[0].elements[0]
          if (element.status === 'OK' && element.distance && element.duration) {
            const distanceInKm = Math.round(element.distance.value / 1000)
            const durationMins = Math.round(element.duration.value / 60)
            resolve({ distance: distanceInKm, durationMins })
            return
          }
        }
        resolve(null)
      }
    )
  })
}

export const reverseGeocode = async (lat, lng) => {
  await loadGoogleMaps()
  return new Promise((resolve) => {
    if (window.googleMapsFailed || !window.google || !window.google.maps || !window.google.maps.Geocoder) {
      resolve(null)
      return
    }

    const geocoder = new window.google.maps.Geocoder()
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        resolve({
          formattedAddress: results[0].formatted_address,
          placeId: results[0].place_id,
          lat,
          lng
        })
      } else {
        console.warn('Reverse Geocoder status:', status)
        resolve(null)
      }
    })
  })
}

export const getCurrentGPSLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'))
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        const addressData = await reverseGeocode(lat, lng)
        resolve({
          lat,
          lng,
          formattedAddress: addressData?.formattedAddress || `${lat.toFixed(6)}, ${lng.toFixed(6)}`
        })
      },
      (error) => {
        console.warn('Geolocation error:', error)
        reject(error)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    )
  })
}
